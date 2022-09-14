import React from 'react'
import {ExternalAccountsView} from "@careevolution/mydatahelps-ui";
import {useSearchParams} from "react-router-dom";

export default function () {
    const [search] = useSearchParams();

    return (
        <ExternalAccountsView
            preview={search.get("preview") === "1"}
            presentation={search.get("presentation") as any}
            excludeDeviceManufacturers={search.get("excludeDeviceManufacturers") as any}/>
    )
}