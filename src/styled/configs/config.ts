import * as CSS from "csstype"

type CSSProp = keyof CSS.Properties | (string & {})

export interface PropConfig {
    property: CSSProp|CSSProp[]
}

export function asCSSProp<T extends CSSProp>(property: T|T[]) {
    return {
        property
    }
}

