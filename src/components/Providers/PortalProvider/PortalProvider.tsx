import React from "react";
import {useForceUpdate, useZnUIProviderPortalCreator, ZnUIProviderPortalContext} from "../portals";

export const PortalProvider = ({ children }: {
    children: React.ReactNode
}) => {
    const portalData = useZnUIProviderPortalCreator(useForceUpdate())

    return <ZnUIProviderPortalContext.Provider value={portalData.registerPortal}>
        {children}
        {portalData.mainPortal.map((item) => <div key={item.id}>{item.node}</div>)}
    </ZnUIProviderPortalContext.Provider>
}