import * as CSS from "csstype"

type CSSProp = keyof CSS.Properties | (string & {})
type TransformProp<T> = (value: T) => Record<string, any>

export interface PropConfig {
    property: CSSProp | CSSProp[] | TransformProp<any>
}

export function asCSSProp<T extends CSSProp>(property: T|T[]): PropConfig {
    return {
        property
    }
}

export function asTransformProp<T>(transform: TransformProp<T>): PropConfig {
    return {
        property: transform
    }
}
