import React from 'react'
import { ConnectEhr, Layout, StatusBarBackground, ProjectHeader, Card, MostRecentNotification, SurveyTaskList, ConnectFitbit, ProjectSupport } from "@careevolution/mydatahelps-ui"
import MyDataHelps from "@careevolution/mydatahelps-js"

export default function () {
	/* Replicates the "DeviceData" view from MyDataHelpsUI */
	let notificationsViewUrl = new URL("notifications", document.location as any).href;
	let ehrConnectApplicationUrl = new URL("connectehr", document.location as any).href;
	let tasksViewUrl = new URL("surveytasks", document.location as any).href;

	var viewAllNotifications = function () {
		MyDataHelps.openApplication(notificationsViewUrl);
	}

	var viewAllTasks = function () {
		MyDataHelps.openApplication(tasksViewUrl);
	}

	return (
		<Layout>
			<StatusBarBackground />
			<ProjectHeader />
			<Card>
				<MostRecentNotification
					notificationType={"Push"}
					onViewMore={() => viewAllNotifications()}
					hideAfterHours={1} />
			</Card>
			<Card>
				<SurveyTaskList
					status="incomplete"
					limit={3}
					title="Incomplete Tasks"
					onDetailLinkClick={() => viewAllTasks()}
				/>
			</Card>
			<Card>
				<ConnectFitbit title="Fitbit" />
			</Card>
			<Card>
				{ehrConnectApplicationUrl &&
					<ConnectEhr applicationUrl={ehrConnectApplicationUrl} />
				}
			</Card>
			<Card>
				<ProjectSupport />
			</Card>
		</Layout>
	)
}