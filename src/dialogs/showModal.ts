import {ZnUIPortalRegistrar} from "../components/Providers/portals";
import {ModalDialogInterface} from "./useDialogs";
import React, {ReactNode} from "react";

export const showModal = (portalRegister: ZnUIPortalRegistrar) => {
    return (component: ReactNode, clickEvent?: MouseEvent): ModalDialogInterface => {
        const portal = portalRegister()

        let cancel = () => {
            portal.remove()
        }

        const modalDialogInterface: ModalDialogInterface = {
            cancel: () => cancel()
        }

        // portal.show()

        return modalDialogInterface
    }
}