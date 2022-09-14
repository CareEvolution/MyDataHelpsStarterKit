import React from 'react'
import { HomeView } from "@careevolution/mydatahelps-ui"
import {
	useSearchParams
} from "react-router-dom";

export default function () {
	const [search] = useSearchParams();
	let notificationsViewUrl = new URL("notifications?presentation=Push", document.location as any).href;
	let ehrConnectApplicationUrl = new URL("connectehr?presentation=Push", document.location as any).href;
	let tasksViewUrl = new URL("surveytasks?presentation=Push", document.location as any).href;

	return (
		<HomeView
			preview={search.get("preview") === "1"}
			notificationsViewUrl={notificationsViewUrl}
			ehrConnectApplicationUrl={ehrConnectApplicationUrl}
			tasksViewUrl={search.get("showMoreTasks") === "1" ? tasksViewUrl : undefined}
		/>
	)
}