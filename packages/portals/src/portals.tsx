import React from "react";
import {createContext, JSXElementConstructor, ReactNode, useContext, useMemo, useState} from "react";

export type ZnUIPortalContext = {
    createPortal: ZnUIPortalRegister
    portals: ZnUIPortals
}

export type ZnUIPortal = {
    uniqueId: number,
    remove: () => void
}

export type ZnUIPortalRegister = (node: JSXElementConstructor<{}>) => ZnUIPortal

export type ZnUIPortals = { [key: number]: ReactNode }

export const ZnUIProviderPortalContext = createContext<ZnUIPortalContext>({
    createPortal: () => {
        throw new Error("Portal registration site not found. Please use <ThemeProvider/> or <AdaptiveProvider/> before using portals.")
    },
    portals: []
})

export const usePortals = () => useContext(ZnUIProviderPortalContext)

export const useZnUIProviderPortalCreator = (): ZnUIPortalContext => {
    const [portals, setPortals] = useState<ZnUIPortals>({})

    const createPortal = useMemo((): ZnUIPortalRegister => (Component) => {
        const uniqueId = new Date().getTime()
        setPortals((prevState) => ({
            ...prevState,
            [uniqueId]: <Component/>
        }))

        return {
            uniqueId,
            remove: () => {
                setPortals((prevState) => {
                    delete prevState[uniqueId]
                    return {...prevState}
                })
            }
        }
    }, [setPortals])

    return {
        createPortal,
        portals,
    }
}