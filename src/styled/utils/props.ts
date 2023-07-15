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

const isFunction = <T extends Function = Function>(value: any): value is T =>
    typeof value === "function"

const isObject = <T extends Object = Object>(value: any): value is T =>
    typeof value === "object"

export function runIfFn<T, U>(
    valueOrFn: T | ((...fnArgs: U[]) => T),
    ...args: U[]
): T {
    return isFunction(valueOrFn) ? valueOrFn(...args) : valueOrFn
}