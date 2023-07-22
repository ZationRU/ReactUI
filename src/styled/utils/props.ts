import * as CSS from "csstype"

type CSSProp = keyof CSS.Properties | (string & {})

export interface PropConfig {
    property: CSSProp|CSSProp[]
}

export function propConfig<T extends CSSProp>(property: T|T[]) {
    return {
        property
    }
}

