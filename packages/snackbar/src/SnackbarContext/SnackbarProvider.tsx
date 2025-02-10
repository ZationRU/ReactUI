import {SnackbarContext} from "./SnackbarContext";
import React, {ReactNode, ReactPortal, useState} from "react";

export const SnackbarProvider = ({children}: {children: ReactNode}) => {
    const [snackbar, setSnackbar] = useState<ReactPortal | undefined>()

    return <>
        <SnackbarContext.Provider value={{snackbar, setSnackbar}}>
            {children}
        </SnackbarContext.Provider>
        {snackbar}
    </>
}