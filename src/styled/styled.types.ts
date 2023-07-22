import {
    CSSProps, ZnUICSSProps
} from "./configs";
import React from "react";

export type StyleProps = CSSProps & ZnUICSSProps;

export interface ZnUIProps extends StyleProps {

}

export type OmitCommonProps<
    Target,
    OmitAdditionalProps extends keyof any = never,
> = Omit<
    Target,
    "transition" | "as" | "color" | "translate" | OmitAdditionalProps
> & {
    htmlTranslate?: "yes" | "no" | undefined
}

export type RightJoinProps<
    SourceProps extends object = {},
    OverrideProps extends object = {},
> = OmitCommonProps<SourceProps, keyof OverrideProps> & OverrideProps

type Assign<T, U> = Omit<T, keyof U> & U

export type MergeWithAs<
    ComponentProps extends object,
    TypeProps extends object,
    AdditionalProps extends object = {},
    TypeComponent extends React.ElementType = React.ElementType,
> = (
    | RightJoinProps<ComponentProps, AdditionalProps>
    | RightJoinProps<TypeProps, AdditionalProps>
    ) & {
    as?: TypeComponent
}

export type PropsOf<T extends React.ElementType> = React.ComponentPropsWithoutRef<T> & {
    as?: React.ElementType
}

export type HTMLZnUIProps<T extends React.ElementType> = Omit<
    PropsOf<T>,
    "ref" | keyof StyleProps
> & ZnUIProps & { as?: React.ElementType }


export type Component<Component extends React.ElementType, Props extends object = {}> = {
    <TypeComponent extends React.ElementType = Component>(
        props: MergeWithAs<
            React.ComponentProps<Component>,
            React.ComponentProps<TypeComponent>,
            Props,
            TypeComponent
        >,
    ): JSX.Element

    displayName?: string
    propTypes?: React.WeakValidationMap<any>
    contextTypes?: React.ValidationMap<any>
    defaultProps?: Partial<any>
    id?: string
}

export interface ZnUIComponent<T extends React.ElementType, P extends object = {}>
    extends Component<T, Assign<ZnUIProps, P>> {}