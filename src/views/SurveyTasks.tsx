import React from 'react'
import { SurveyTasksView } from "@careevolution/mydatahelps-ui"
import {
	useSearchParams
} from "react-router-dom";

export default function () {
	const [search] = useSearchParams();
	return (
		<SurveyTasksView
			preview={search.get("preview") === "1"}
			presentation={search.get("presentation") as any} />
	)
}