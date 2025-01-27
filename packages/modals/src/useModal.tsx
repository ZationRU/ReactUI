import React, {JSXElementConstructor, useMemo, useRef, useState} from "react";
import {ThemeTokens} from "@znui/md3-themes";
import {useAdaptiveValue} from "@znui/base";
import {Layout} from "@znui/layouts";
import {createPortal} from "react-dom"

export type ModalDialogInterface = {
    close: () => void
}

export type ModalContextData = {
    dialogInterface: ModalDialogInterface
    isFullscreen: boolean
    isExpanded: boolean
}

export type ModalOptions = {
    fullscreen?: boolean | 'auto'
    cancelable?: boolean
}

export const ModalContext = React.createContext<ModalContextData | null>(null)

export const useModal = <Props = {}>(component: JSXElementConstructor<ModalDialogInterface & Props>, defaultOptions: ModalOptions = {}) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const [isOpened, setIsOpened] = useState(false)
    const scrimRef = useRef<HTMLDivElement | null>(null)
    const modalContainerRef = useRef<HTMLDivElement | null>(null)
    const [options, setOptions] = useState<typeof defaultOptions>(defaultOptions)
    const [props, setProps] = useState<Props>({} as Props)

    const {
        fullscreen = 'auto',
        cancelable = true,
    } = options

    const autoFullscreen = useAdaptiveValue({
        esm: true,
        emd: false
    })
    const isFullscreen = fullscreen == 'auto' || fullscreen == undefined ? autoFullscreen : fullscreen

    const modalDialogInterface: ModalDialogInterface = {
        close: () => {
            setIsExpanded(false)
            setTimeout(() => {
                setIsOpened(false)
            }, 300)
        },
    }

    const Component = useMemo(() => React.createElement(
        component,
        {
            ...props,
            ...modalDialogInterface
        } as ModalDialogInterface & Props
    ), [props])

    const Portal = isOpened && createPortal(<Layout
        pos="fixed"
        posA={0}
        overflow="visible"
        zIndex={1000}
    >
        {/* Backdrop */}
        <Layout
            bg="black"
            pos="fixed"
            to={{
                baseDuration: 300,
                baseTransition: isExpanded ? ThemeTokens.motion.emphasized : ThemeTokens.motion.emphasizedDecelerate,
                oc: isExpanded ? 0.4 : 0
            }}
            ref={scrimRef}
            posA={0}
            overflow="visible"
            onClick={cancelable ? modalDialogInterface.close : undefined}
        />

        <Layout
            ref={modalContainerRef}
            position="fixed"
            clip={true}
            transform={"translate(-50%, -50%)"}
            to={{
                baseDuration: isExpanded ? 200 : 120,
                borderColor: 'none',
                oc: isExpanded ? 1 : 0,
                bg: {
                    duration: isExpanded ? 100 : 50,
                    value: isExpanded ? (isFullscreen ? ThemeTokens.surface : ThemeTokens.surfaceContainerHigh) : undefined
                }
            }}
            borderRadius={isExpanded ? (isFullscreen ? 0 : 28) : 0}
            left='50%'
            top='50%'
            maxH={isExpanded ? '100%' : 0}
            maxW={isExpanded && !isFullscreen ? 'calc(100% - 50px)' : '100%'}
            h={isExpanded && isFullscreen ? '100%' : undefined}
            w={isExpanded ? (isFullscreen ? '100%' : ['100vw', null, 800]) : 0}
        >
            <Layout
                clip={true}
                display='flex'
                c={ThemeTokens.onSurface}
                h={isExpanded && isFullscreen ? '100%' : undefined}
                w={isExpanded ? (isFullscreen ? '100%' : [undefined, null, 800]) : 0}
            >
                <ModalContext.Provider value={{
                    dialogInterface: modalDialogInterface,
                    isFullscreen,
                    isExpanded
                }}>
                    {Component}
                </ModalContext.Provider>
            </Layout>
        </Layout>
    </Layout>, document.getElementById('znui-portal')!)

    return {
        open: (props: Props = {} as Props, options: ModalOptions = {}) => {
            setIsOpened(true)
            setTimeout(() => {
                setIsExpanded(true)
            }, 20)
            setOptions({...defaultOptions, ...options})
            setProps(props)
        },
        close: modalDialogInterface.close,
        modal: Portal,
        isOpened: isOpened
    }
}