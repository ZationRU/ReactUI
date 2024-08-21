export type ComponentData = ComponentExtraData &{
    name: string
    visibleName: string
    pathLine: string
    package: string
    props: any[]
    examples: any[]
}

export type ComponentExtraData = {
    category: string,
    type?: string,
    description: string
    background: string
    foreground: string
}

export const normalizeExamples = (examples: any[]): [ComponentExtraData, any[]] => {
    const firstElement = examples.at(0)
    return firstElement?.type === 'code' && firstElement?.content?.at(0) === '{' ?
        [JSON.parse(firstElement.content), examples.slice(1)]: [
            {
                category: "unknown",
                description: "",
                background: "",
                foreground: "",
            },
            examples
        ]
}

export const styleguidistComponentToNormal = (component: any): ComponentData => {
    const [additionData, examples] = normalizeExamples(component.props.examples)

    return {
        name: component.name,
        visibleName: component.visibleName,
        pathLine: component.pathLine,
        package: component.pathLine,
        props: component.props.props,
        examples,
        ...additionData,
    }
}