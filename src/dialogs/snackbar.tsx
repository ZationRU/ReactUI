import {ZnUIPortalRegistrar} from "../components/Providers/portals";
import React, {MouseEventHandler, ReactNode, useCallback, useEffect, useRef, useState} from "react";
import Measure, {BoundingRect} from "react-measure";
import {useAdaptiveValue} from "../adaptive/useAdaptive";
import {Layout} from "../components/Basic/Layout/Layout";
import {BaseDialog} from "../components/Layouts/BaseDialog/BaseDialog";
import {Button} from "../components/Widgets/Button/Button";

export type SnackbarConfig = {
    icon?: ReactNode
    text: ReactNode|string
    action?: SnackbarAction
}

export type SnackbarAction = {
    title: ReactNode|string,
    cancel?: boolean,
    onClick?: MouseEventHandler<HTMLButtonElement>
}

export type SnackbarInterface = {
    hide: () => void;
}

export const showSnackbar = (portalRegister: ZnUIPortalRegistrar) => {
    const portal = portalRegister()

    return (config: SnackbarConfig, clickEvent?: MouseEvent): SnackbarInterface => {
        let hide = () => {
            portal.remove()
        }

        const Snackbar = () => {
            return <Layout/>
        }

        portal.show(<Snackbar/>)

        return {
            hide: () => hide()
        }
    }
}