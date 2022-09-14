import React from 'react'
import { NotificationsView } from "@careevolution/mydatahelps-ui"
import {
	useSearchParams
} from "react-router-dom";

export default function () {
	const [search] = useSearchParams();
	return (
		<NotificationsView
			preview={search.get("preview") === "1"}
			presentation={search.get("presentation") as any}
			notificationType={search.get("notificationType") == "Sms" ? "Sms" : "Push"} />
	)
}