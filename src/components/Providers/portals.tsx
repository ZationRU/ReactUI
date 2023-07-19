import React, {createContext, Dispatch, ReactNode, SetStateAction, useContext, useMemo, useState} from "react";

export const ZnUIProviderPortalContext = createContext<ZnUIPortalRegistrar>(() => {
    throw new Error("Portal registration site not found. Please use <ThemeProvider/> or <AdaptiveProvider/> before using portals.")
})

export function useForceUpdate(){
    const setValue = useState(0)[1];
    return () => setValue(value => value + 1);
}

export type ZnUIPortalRegistrar = () => ZnUIPortal

export interface ZnUIPortal {
    id: number
    node: ReactNode
    remove: () => void
    show: (node: ReactNode) => void
}

export type ZnUIPortals = ZnUIPortal[]

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

export const portals = () => useContext(ZnUIProviderPortalContext)

export const useZnUIProviderPortalCreator = (forceUpdate: () => void) => {
    const mainPortal: ZnUIPortals = useMemo(() => [], [])

    const registerPortal = useMemo(() => (): ZnUIPortal => {
        const portal = new ZnUIPortalImpl(mainPortal.length)
        portal.forceUpdate = forceUpdate
        portal.mainPortal = mainPortal
        mainPortal.push(portal)

        return portal
    }, [forceUpdate, mainPortal])

    return {
        mainPortal,
        registerPortal
    }
}