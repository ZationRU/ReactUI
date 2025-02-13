import React, {JSXElementConstructor, useCallback, useMemo, useRef, useState} from "react";
import {ThemeTokens} from "@znui/md3-themes";
import {useAdaptiveValue} from "@znui/base";
import {Layout} from "@znui/layouts";
import {Portal} from "@znui/md3-utils";

export type ModalDialogInterface = {
    /**
     * Function to close the modal.
     */
    close: () => void
}

export type ModalContextData = {
    /**
     * Interface for controlling the modal dialog.
     */
    dialogInterface: ModalDialogInterface
    /**
     * Whether the modal is in fullscreen mode.
     */
    isFullscreen: boolean
    /**
     * Whether the modal is in expanded mode.
     */
    isExpanded: boolean
}

export type ModalOptions = {
    /**
     * Whether the modal should be displayed in fullscreen mode.
     * @default auto
     */
    fullscreen?: boolean | 'auto'
    /**
     * Whether the modal can be canceled.
     * @default true
     */
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

    const close = useCallback(() => {
        setIsExpanded(false)
        setTimeout(() => {
            setIsOpened(false)
        }, 300)
    }, [setIsOpened, setIsExpanded])

    const modalDialogInterface: ModalDialogInterface = useMemo(() => ({
        close
    }), [close])

    const Component = useMemo(() => React.createElement(
        component,
        {
            ...props,
            ...modalDialogInterface
        } as ModalDialogInterface & Props
    ), [props, modalDialogInterface.close])

    const contextValue = useMemo(() => (
        {
            dialogInterface: modalDialogInterface,
            isFullscreen,
            isExpanded
        }
    ), [modalDialogInterface, isFullscreen, isExpanded])

    const ModalComponent = useMemo(() => isOpened && <Portal>
        <Layout
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
                    oc: isExpanded ? 1 : 0,
                }}
                borderColor='none'
                bg={isFullscreen ? ThemeTokens.surface : ThemeTokens.surfaceContainerHigh}
                borderRadius={isFullscreen ? 0 : 28}
                left='50%'
                top='50%'
                maxH={'100%'}
                maxW={!isFullscreen ? 'calc(100% - 50px)' : '100%'}
                h={isFullscreen ? '100%' : undefined}
                w={isFullscreen ? '100%' : ['100vw', null, 800]}
            >
                <Layout
                    clip={true}
                    display='flex'
                    c={ThemeTokens.onSurface}
                    h={isFullscreen ? '100%' : undefined}
                    w={isFullscreen ? '100%' : [undefined, null, 800]}
                >
                    <ModalContext.Provider value={contextValue}>
                        {Component}
                    </ModalContext.Provider>
                </Layout>
            </Layout>
        </Layout>
    </Portal>, [isOpened, isExpanded, isFullscreen, cancelable, Component, contextValue, scrimRef, modalContainerRef])

    return {
        open: (props: Props = {} as Props, options: ModalOptions = {}) => {
            setIsOpened(true)
            setTimeout(() => {
                setIsExpanded(true)
            })

            setOptions({...defaultOptions, ...options})
            setProps(props)
        },
        close: modalDialogInterface.close,
        modal: ModalComponent || undefined,
        isOpened: isOpened
    }
}