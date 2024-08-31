import React, {createContext, ReactNode, useContext, useMemo} from "react";
import {ComponentData, styleguidistComponentToNormal} from "./models/ComponentData";
import StyleGuideProps from "react-styleguidist/lib/client/rsg-components/StyleGuide";
import Context from 'react-styleguidist/lib/client/rsg-components/Context';

export type StyleguidistContextData = {
    evalInContext: (code: string) => any
    components: ComponentData[]
}

export const StyleguidistContext = createContext<StyleguidistContextData | null>(null)
export const useStyleguidist = (): StyleguidistContextData => {
    const context = useContext(StyleguidistContext)
    if (context == null) {
        throw new Error("Styleguidist context doesn't exist")
    }

    return context
}

export const useStyleGuideProps = (props: StyleGuideProps): StyleguidistContextData => useMemo(() => {
    const components: ComponentData[] = []
    const names: string[] = []
    let evalInContext: StyleguidistContextData['evalInContext'] | undefined

    for (const rawComponent of props.allSections[0].components) {
        if(rawComponent.props.examples.length == 0) {
            continue
        }

        if(!evalInContext) {
            evalInContext = rawComponent.props.examples.find((it: any) => !!it.evalInContext)?.evalInContext
        }

        const component = styleguidistComponentToNormal(rawComponent)
        if(names.includes(component.name)) {
            continue
        }

        components.push(component)
        names.push(component.name)
    }

    return {
        components,
        evalInContext: evalInContext!!
    }
}, [props])

export const StyleguidistProvider = (props: {
    props: StyleGuideProps,
    children: ReactNode
}) => {
    const {
        props: styleguidistProps,
        children
    } = props;

    const context = useStyleGuideProps(styleguidistProps)

    return <StyleguidistContext.Provider
        value={context}
    >
        <Context.Provider
            value={{
                codeRevision: styleguidistProps.codeRevision,
                config: styleguidistProps.config,
                slots: styleguidistProps.slots,
                cssRevision: styleguidistProps.cssRevision,
            }}
        >
            {children}
        </Context.Provider>
    </StyleguidistContext.Provider>
}