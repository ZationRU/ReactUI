import React, {createContext, ReactNode, useContext, useMemo, useState} from "react";


export function useForceUpdate(){
    const setValue = useState(0)[1];
    return () => setValue(value => value + 1);
}

export type ZnUIPortalContext = {
    register: () => ZnUIPortal
    portals: ZnUIPortals
}

export interface ZnUIPortal {
    id: number
    node: ReactNode
    remove: () => void
    show: (node: ReactNode) => void
}

export type ZnUIPortals = ZnUIPortal[]

export const ZnUIProviderPortalContext = createContext<ZnUIPortalContext>({
    register: () => {
        throw new Error("Portal registration site not found. Please use <ThemeProvider/> or <AdaptiveProvider/> before using portals.")
    },
    portals: []
})

class ZnUIPortalImpl implements ZnUIPortal {
    id: number;
    node: React.ReactNode|undefined;

    private _mainPortal: ZnUIPortals | undefined
    private _forceUpdate: (() => void) | undefined
    
    set mainPortal(value: ZnUIPortals) {
        this._mainPortal = value;
    }

    set forceUpdate(value: () => void) {
        this._forceUpdate = value;
    }

    constructor(id: number) {
        this.id = id
    }

    remove(): void {
        if(this._mainPortal===undefined) return;
        delete this._mainPortal[this.id]
        this._forceUpdate&&this._forceUpdate()
    }

    show(node: ReactNode): void {
        if(this._mainPortal===undefined) return;
        this.node = node
        this._forceUpdate&&this._forceUpdate()
    }
}

export const usePortals = () => useContext(ZnUIProviderPortalContext)

export const useZnUIProviderPortalCreator = (forceUpdate: () => void) => {
    const portals: ZnUIPortals = useMemo(() => [], [])

    const register = useMemo(() => (): ZnUIPortal => {
        const portal = new ZnUIPortalImpl(portals.length)
        portal.forceUpdate = forceUpdate
        portal.mainPortal = portals
        portals.push(portal)

        return portal
    }, [forceUpdate, portals])

    return {
        portals,
        register
    }
}