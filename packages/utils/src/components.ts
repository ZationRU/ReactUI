export const componentWithProps = <Component extends {}, Props>(component: Component, props: Props): Component & Props => {
    return Object.assign(component, props)
}