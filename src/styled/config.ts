import * as CSS from "csstype"

type CSSProp = keyof CSS.Properties | (string & {})
type TransformProp<T> = (value: T) => Record<string, any>

export interface PropConfig {
    property: CSSProp | CSSProp[] | TransformProp<any>
    adaptive?: boolean
}

export function asCSSProp<T extends CSSProp>(property: T|T[], adaptive: boolean = true): PropConfig {
    return {
        property,
        adaptive
    }
}

export function asTransformProp<T>(transform: TransformProp<T>, adaptive: boolean = true): PropConfig {
    return {
        property: transform,
        adaptive
    }
}
