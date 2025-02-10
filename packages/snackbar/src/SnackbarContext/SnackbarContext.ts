import {createContext, ReactPortal} from "react";

type SnackbarContextProps = {
    snackbar?: ReactPortal
    setSnackbar: (snackbar?: ReactPortal) => void
}
export const SnackbarContext = createContext<SnackbarContextProps | undefined>(undefined)