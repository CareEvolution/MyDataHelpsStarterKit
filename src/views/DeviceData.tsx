import React from 'react'
import { DeviceDataView } from "@careevolution/mydatahelps-ui"
import {
	useSearchParams
} from "react-router-dom";

export default function () {
	const [search] = useSearchParams();
	return (
		<DeviceDataView preview={search.get("preview") === "1"} />
	)
}