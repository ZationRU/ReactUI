import React, {JSXElementConstructor, MouseEvent, ReactNode, ReactPortal, useMemo, useState} from "react";
import {createPortal} from "react-dom";
import Alert from "./Alert";

export type AlertDialogInterface = {
    setValue: (key: string, value: any) => void
    close: () => void
}

export type ValuesType = Record<string, any> | undefined

export type AlertDialogConfig<T extends ValuesType> = {
    /**
     * An optional icon to display in the alert.
     */
    icon?: ReactNode
    /**
     * An icon size.
     */
    iconSize?: number
    /**
     * The title of the alert.
     */
    title: ReactNode | string
    /**
     * An optional description to display in the alert.
     */
    description?: ReactNode | string
    /**
     * An array of actions to display in the alert.
     */
    actions?: AlertDialogConfigActions<T>[]
    /**
     * Default values for the alert's internal state.
     * Used by the `component` prop if provided.
     */
    defaultValues?: T
    /**
     * An optional component to render in the dialog body.
     */
    component?: JSXElementConstructor<T extends undefined ? AlertDialogInterface : T & AlertDialogInterface>
    /**
     * Whether the dialog can be closed by clicking outside of it.
     * @default true
     */
    cancelable?: boolean,
}

export type AlertDialogConfigActions<T extends ValuesType> = {
    /**
     * The title of the action button.
     */
    title: ReactNode | string,
    /**
     * If true, this action will close the alert.
     */
    close?: boolean,
    /**
     * An optional click handler for the action button.
     * Receives the event object and the current values.
     *
     * Returning `true` closes alert.
     */
    onClick?: (e: MouseEvent<HTMLButtonElement>, values: NonNullable<AlertDialogConfig<T>['defaultValues']>) => boolean | undefined
}

/**
 * ZnUI useAlerts hook
 */
export const useAlerts = (): {openAlert: <T extends ValuesType>(config: AlertDialogConfig<T>) => void, alerts: ReactPortal[]} => {
    const [alerts, setAlerts] = useState<Record<string, ReactPortal>>({})

    const alertsArray = useMemo(() => Object.values(alerts), [alerts])

    function open<T extends ValuesType>(config: AlertDialogConfig<T>) {
        const id = Date.now().toString()
        const remove = () => {
            setAlerts(prev => {
                delete prev[id]
                return {...prev}
            })
        }

        const portal = createPortal(<Alert remove={remove} config={config as AlertDialogConfig<ValuesType>} />, document.getElementById('znui-portal')!)
        setAlerts(prev => {
            return {...prev, [id]: portal}
        })
    }

    return {
        openAlert: open,
        alerts: alertsArray
    }
}