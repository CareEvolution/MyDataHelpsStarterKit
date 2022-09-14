import React from 'react'
import MyDataHelps from "@careevolution/mydatahelps-js"
import { PlatformSpecificContent, Layout, Card, StatusBarBackground, ConnectFitbit, FitbitDevices, DeviceDataMonthCharts, Action } from "@careevolution/mydatahelps-ui"

export default function () {
	/* Replicates the "DeviceData" view from MyDataHelpsUI */
	return (
		<Layout>
			<StatusBarBackground color="var(--main-bg-color)" />
			<PlatformSpecificContent platforms={["Android"]}>
				<Card>
					<Action title="Google Fit" subtitle={"Share Google Fit Data"} onClick={() => MyDataHelps.showGoogleFitSettings()} />
				</Card>
			</PlatformSpecificContent>
			<Card>
				<ConnectFitbit />
			</Card>
			<Card>
				<FitbitDevices />
			</Card>
			<Card allowOverflow={true}>
				<DeviceDataMonthCharts />
			</Card>
		</Layout>
	)
}