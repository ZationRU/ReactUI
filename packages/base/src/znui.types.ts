import {
    CSSProps
} from "./configs";
import * as CSS from "csstype";
import React from "react";
import {Pseudos} from "./configs";
import {FunctionInterpolation} from "@emotion/styled";
import {ZnUIStyledOptions} from "./propsResolver";
import {Assign} from "@znui/utils";

export interface StyleProps extends CSSProps {}

export type StyleResolverProps = StyleProps
export interface GetStyleObject {
    (options: {
        baseStyle?: ZnUIStyleObject,
    }): FunctionInterpolation<StyleResolverProps>
}

/** Pseudos **/
type PseudoKeys = keyof CSS.Pseudos | keyof Pseudos

type PseudoSelectorDefinition<D> = D | RecursivePseudo<D>

export type RecursivePseudo<D> = {
    [K in PseudoKeys]?: PseudoSelectorDefinition<D> & D
}

export interface SystemCSSProperties
    extends CSS.Properties,
        Omit<StyleProps, keyof CSS.Properties> {}


type PropertyValue<K extends keyof SystemCSSProperties> = SystemCSSProperties[K]

export type CSSWithMultiValues = {
    [K in keyof SystemCSSProperties]?: K extends keyof StyleProps
        ? StyleProps[K] | PropertyValue<K>
        : PropertyValue<K>
}

type CSSDefinition<D> = D | string | RecursiveCSSSelector<D | string>

export interface RecursiveCSSSelector<D> {
    [selector: string]: CSSDefinition<D> & D
}

export type RecursiveCSSObject<D> = D &
    (D | RecursivePseudo<D> | RecursiveCSSSelector<D>)

export type ZnUIStyleObject = RecursiveCSSObject<CSSWithMultiValues>

type PseudoProps = {
    [K in keyof Pseudos]?: ZnUIStyleObject
}

export interface ZnUIProps extends StyleProps, PseudoProps {
    pseudos?: {
        [key: string]: StyleProps
    }
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

export type PolymorphicProps = {
    as: React.ElementType
}

export type RightJoinProps<
    SourceProps extends object = {},
    OverrideProps extends object = {},
> = OmitCommonProps<SourceProps, keyof OverrideProps> & OverrideProps

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

/**
 * ZnUI Component with style props
 */
export type ZnUIComponent<T extends React.ElementType, P extends object = {}> = Component<T, Assign<ZnUIProps, P>>

/**
 * All exists jsx elements keys
 */
export type JSXElements = keyof JSX.IntrinsicElements

/**
 * Factory of jsx elements
 */
export type ZnUIJSXElementsFactory = {
    [Tag in JSXElements]: ZnUIComponent<Tag, {}>
}

/**
 * Factory of React/JSX components
 */
export type ZnUIComponentsFactory = {
    <T extends React.ElementType, P extends object = {}>(
        component: T,
        options?: ZnUIStyledOptions<P>
    ): ZnUIComponent<T, P>
}

/**
 * ZnUI base factory function
 */
export type ZnUIFactory = ZnUIJSXElementsFactory & ZnUIComponentsFactory