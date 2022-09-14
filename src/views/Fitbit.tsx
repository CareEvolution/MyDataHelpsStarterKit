import React from 'react'
import { FitbitView } from "@careevolution/mydatahelps-ui"
import {
	useSearchParams
} from "react-router-dom";

export default function () {
	const [search] = useSearchParams();
	return (
		<FitbitView connectPreview={search.get("preview") === "1" ? "fetchComplete" : undefined } devicesPreview={search.get("preview") === "1" ? "notConnected" : undefined} chartsPreview={search.get("preview") === "1" ? "notConnected" : undefined} />
	)
}