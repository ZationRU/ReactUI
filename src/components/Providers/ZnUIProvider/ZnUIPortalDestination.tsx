import {usePortals} from "../portals";
import React from "react";

export const ZnUIPortalDestination = () => {
    const {portals} = usePortals()

    return <>
        {portals.map((item) => <div key={item.id}>{item.node}</div>)}
    </>
}