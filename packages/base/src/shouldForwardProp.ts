import {styledProps} from "./propsResolver";

const validHTMLProps = new Set([
    "htmlWidth",
    "htmlHeight",
    "htmlSize",
    "htmlTranslate",
])

export function shouldForwardProp(prop: string): boolean {
    const allPropNames = new Set([
        "as",
        ...Object.keys(styledProps)
    ])

    return (
        (validHTMLProps.has(prop) || !allPropNames.has(prop)) && prop[0] !== "_"
    )
}