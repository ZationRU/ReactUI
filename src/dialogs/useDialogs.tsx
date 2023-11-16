import {JSXElementConstructor, UIEvent, MouseEvent} from "react";
import {useMemo} from "react";
import {usePortals} from "../components/Providers/portals";
import {AlertDialogConfig, AlertDialogInterface, showAlert} from "./alerts";
import {ModalDialogInterface, ModalOptions, ModalProps, showModal} from "./modals";

export type DialogInterface = {
    showAlert: (config: AlertDialogConfig, clickEvent?: MouseEvent) => AlertDialogInterface
    showModal: (
        component: JSXElementConstructor<ModalProps>,
        clickEvent?: UIEvent,
        options?: ModalOptions
    ) => ModalDialogInterface
}

export const useDialogs = (): DialogInterface => {
    const portalRegister = usePortals()

    return useMemo(() => ({
        showAlert: showAlert(portalRegister),
        showModal: showModal(portalRegister),
    }), [portalRegister])
}