import React from 'react'
import { ConnectEhrView } from "@careevolution/mydatahelps-ui"
import {
	useSearchParams
} from "react-router-dom";

export default function () {
	const [search] = useSearchParams();
	let externalAccountsApplicationUrl = new URL("externalaccounts?presentation=Push&excludeDeviceManufacturers=true", document.location as any).href;

	return (
		<ConnectEhrView
			preview={search.get("preview") === "1"}
			presentation={search.get("presentation") as any}
			externalAccountsApplicationUrl={externalAccountsApplicationUrl} />
	)
}