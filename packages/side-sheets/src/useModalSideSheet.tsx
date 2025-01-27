import React, {createContext, JSXElementConstructor, useState} from "react";
import {Layout} from "@znui/layouts";
import "@znui/md3-themes"
import {ThemeTokens} from "@znui/md3-themes";
import {createPortal} from "react-dom";

export interface ModalSideSheetProps {
    close: () => void
}

type ModalSideSheetContextData = {
    close: () => void
}

export const ModalSideSheetContext = createContext<ModalSideSheetContextData | undefined>(undefined)

export const useModalSideSheet = <Props = {}> (component: JSXElementConstructor<ModalSideSheetProps & Props>) => {
    const [isOpened, setIsOpened] = useState(false)
    const [isMounted, setIsMounted] = useState(false)
    const [props, setProps] = useState<Props>({} as Props)

    const close = () => {
        setIsOpened(false)
        setTimeout(() => setIsMounted(false), 300)
    }

    const Component = (<ModalSideSheetContext.Provider value={{close}}>
            <Layout
                pos='absolute'
                posA={0}
                zIndex={1}
                pointerEvents='none'
            />

            <Layout
                pos='absolute'
                posA={0}
                zIndex={1}
                bg={ThemeTokens.background}
                onClick={() => {
                    close()
                }}
                to={{
                    baseDuration: ThemeTokens.motion.duration.medium2,
                    oc: isOpened ? 0.4 : 0
                }}
            />

            <Layout
                pos='fixed'
                posV={0}
                zIndex={1100}
                elevation='1'
                bg={ThemeTokens.background}
                to={{
                    baseDuration: ThemeTokens.motion.duration.medium2,
                    right: isOpened ? 0 : '-100%'
                }}
                borderTopLeftRadius={16}
                borderBottomLeftRadius={16}
            >
                {React.createElement(component, {...props, close} as ModalSideSheetProps & Props)}
            </Layout>
        </ModalSideSheetContext.Provider>
    )

    return {
        modalSideSheet: isMounted && createPortal(Component, document.getElementById('znui-portal')!),
        open: (props: Props) => {
            setProps(props)
            setIsMounted(true)
            setTimeout(() => setIsOpened(true), 0)
        },
        close
    }
}