import {usePortals} from "./portals";
import React from "react";

export const ZnUIPortalDestination = () => {
    const {portals} = usePortals()

    return <>
        {Object.entries(portals).map(([key, node]) => <div key={key}>{node}</div>)}
    </>
}