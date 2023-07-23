import {MouseEventHandler} from "react";
import {ReactNode, useMemo} from "react";
import {portals} from "../components/Providers/portals";
import {showAlert} from "./showAlert";
import {showModal} from "./showModal";

export type AlertDialogConfig = {
    icon?: ReactNode,
    title: ReactNode|string,
    description?: ReactNode|string,
    actions?: AlertDialogConfigActions[]
    cancelable?: boolean
}

export type AlertDialogConfigActions = {
    title: ReactNode|string,
    cancel?: boolean,
    onClick?: MouseEventHandler<HTMLButtonElement>
}

export type AlertDialogInterface = {
    cancel: () => void;
}

export type ModalDialogInterface = {
    cancel: () => void;
}

export type DialogInterface = {
    showAlert: (config: AlertDialogConfig, clickEvent?: MouseEvent) => AlertDialogInterface
    showModal: (component: ReactNode, clickEvent?: MouseEvent) => ModalDialogInterface
}

export const useDialogs = (): DialogInterface => {
    const portalRegister = portals()

    return useMemo(() => ({
        showAlert: showAlert(portalRegister),
        showModal: showModal(portalRegister),
    }), [portalRegister])
}