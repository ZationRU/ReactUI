import React, {useCallback, useEffect, useState} from "react";
import {usePortals, ZnUIPortal} from "@znui/portals";
import {JSXElementConstructor} from "react";
import {Layout} from "@znui/layouts";
import "@znui/md3-themes"
import {ThemeTokens} from "@znui/md3-themes";

export interface ModalSideSheetProps {
    close: () => void
}

export interface ModalSideSheetOptions<Props> {
    props?: Props
}

type State = "start" | "open" | "closing"

export const useModalSideSheet = <Props = {}> (defaultOptions: ModalSideSheetOptions<Props> = {}) => {
    const {createPortal} = usePortals()
    return (component: JSXElementConstructor<ModalSideSheetProps & Props>, options: ModalSideSheetOptions<Props> = {}) => {
        const {
            props: componentProps = {}
        } = Object.assign(defaultOptions, options || {})

        let portal: ZnUIPortal

        let props: ModalSideSheetProps = {
            close: () => {
                portal?.remove()
            }
        }

        portal = createPortal(() => {
            const [state, setState] = useState<State>("start")

            useEffect(() => {
                if(state === 'start') {
                    setTimeout(() => setState("open"), 0)
                }
            }, [state, setState]);

            props.close = useCallback(() => {
                setState("closing")
                setTimeout(() => portal.remove(), 400)
            }, [setState])

            return <>
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
                    bg="black"
                    onClick={() => {
                        props.close()
                    }}
                    to={{
                        baseDuration: ThemeTokens.motion.duration.medium2,
                        oc: state === 'open'? 0.4: 0
                    }}
                />

                <Layout
                    pos='absolute'
                    posV={0}
                    zIndex={1}
                    elevation='1'
                    bg={ThemeTokens.background}
                    to={{
                        baseDuration: ThemeTokens.motion.duration.medium2,
                        right: state === 'open'? 0: '-100%'
                    }}
                >
                    {React.createElement(component, {
                        ...props,
                        ...componentProps
                    } as ModalSideSheetProps & Props)}
                </Layout>
            </>
        })

        return props
    }
}