import React from 'react'
import { HomeView } from "@careevolution/mydatahelps-ui"

export default function () {
	let notificationsViewUrl = new URL("notifications?presentation=Push", document.location as any).href;
	let ehrConnectApplicationUrl = new URL("connectehr?presentation=Push", document.location as any).href;
	let tasksViewUrl = new URL("surveytasks?presentation=Push", document.location as any).href;

	return (
		<HomeView
			notificationsViewUrl={notificationsViewUrl}
			ehrConnectApplicationUrl={ehrConnectApplicationUrl}
			tasksViewUrl={tasksViewUrl}
		/>
	)
}