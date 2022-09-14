import React, { useEffect, useState } from 'react'
import { Card, LoadingIndicator, TextBlock } from "@careevolution/mydatahelps-ui"
import MyDataHelps, { Guid, SurveyTask, SurveyTaskQueryParameters } from '@careevolution/mydatahelps-js';
import "./TaskProgress.css"

export default function () {
	const [tasks, setTasks] = useState<SurveyTask[] | null>(null);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		initialize()
		MyDataHelps.on("applicationDidBecomeVisible", initialize);
		return () => {
			MyDataHelps.off("applicationDidBecomeVisible", initialize);
		}
	}, []);

	function initialize() {
		var loadData = function () {
			var allTasks: SurveyTask[] = [];
			var querySurveyTasksPage = function (pageID: Guid | null) {
				var parameters: SurveyTaskQueryParameters = {}
				if (pageID) {
					parameters.pageID = pageID;
				}

				return MyDataHelps.querySurveyTasks(parameters).then(function (result) {
					allTasks = allTasks.concat((result as any).surveyTasks);
					if (result.nextPageID) {
						querySurveyTasksPage(result.nextPageID);
					} else {
						setTasks(allTasks);
						setLoading(false);
					}
				});
			}
			querySurveyTasksPage(null);
		}
		loadData();
	}

	function totalCompleteTasks() {
		return tasks!.filter(t => t.status == "complete").length;
	}

	function percentProgress() {
		return totalCompleteTasks() / tasks!.length;
	}

	return (
		<Card>
			{loading &&
				<LoadingIndicator />
			}
			{!loading && tasks && tasks.length > 0 &&
				<TextBlock>
					You've completed <strong>{totalCompleteTasks()}</strong> of your <strong>{tasks?.length}</strong> tasks!
					<div className="task-progress-bar-container">
						<div className="task-progress-bar" style={{ width: (percentProgress() * 100) + "%" }} />
					</div>
				</TextBlock>
			}
			{!loading && tasks && tasks.length == 0 &&
				<TextBlock>
					No tasks delivered yet!
				</TextBlock>
			}
		</Card>
	)
}