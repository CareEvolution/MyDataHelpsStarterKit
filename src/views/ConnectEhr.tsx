import React from 'react'
import { ConnectEhrView } from "@careevolution/mydatahelps-ui"

export default function () {
	let externalAccountsApplicationUrl = new URL("externalaccounts?presentation=Push&excludeDeviceManufacturers=true", document.location as any).href;

	return (
		<ConnectEhrView externalAccountsApplicationUrl={externalAccountsApplicationUrl} />
	)
}