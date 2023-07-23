import React from "react";
import {useMemo} from "react";
import {portals} from "../components/Providers/portals";
import {AlertDialogConfig, AlertDialogInterface, showAlert} from "./alerts";
import {ModalDialogInterface, ModalProps, showModal} from "./modals";

export type DialogInterface = {
    showAlert: (config: AlertDialogConfig, clickEvent?: MouseEvent) => AlertDialogInterface
    showModal: (component: React.ComponentClass<ModalProps>, clickEvent?: MouseEvent) => ModalDialogInterface
}

export const useDialogs = (): DialogInterface => {
    const portalRegister = portals()

    return useMemo(() => ({
        showAlert: showAlert(portalRegister),
        showModal: showModal(portalRegister),
    }), [portalRegister])
}