import { ConnectEhrView } from "@careevolution/mydatahelps-ui"

export default function () {
    let externalAccountsApplicationUrl = new URL("externalaccounts?presentation=Push&excludeDeviceManufacturers=true", document.location as any).href;

	/* This includes the totally pre-built "ConnectEhr" view from MyDataHelpsUI */
	return (
		<ConnectEhrView externalAccountsApplicationUrl={externalAccountsApplicationUrl} />
	)
}