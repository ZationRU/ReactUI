import React from "react";
import "./TextField.css";
import {Layout} from "../../Basic/Layout/Layout";
import {HTMLZnUIProps} from "../../../styled/styled.types";
import {Body} from "../../Typography/Body/Body";
import classNames from "classnames";
import {AnimatedVisibility} from "../../Animation/AnimatedVisibility/AnimatedVisibility";

export interface TextFieldProps extends HTMLZnUIProps<"div"> {
    label?: string
    error?: boolean|string
    supportingText?: string
    disabled?: boolean
}

/**
 * TextField Wrapper for input.
 * Support all types of text input html component
 *
 * @param props
 * @constructor
 */
export const TextField = (props: TextFieldProps) => {
    const {
        label,
        error = false,
        supportingText,
        children,
        className,
        disabled,
        ...layoutProps
    } = props

    let child = children

    if(
        child!=null&&
        typeof child === 'object'&&
        "props" in child
    ) {
        if(!child.props.placeholder) {
            child = React.cloneElement(
                child,
                {
                    ...child.props,
                    placeholder: ' '
                }
            )
        }
    }

    return <Layout minW={210} pt={6} className={classNames({
        "TextField-Container--error": error,
    }, className)} {...layoutProps}>
        <Layout as="fieldset" h={64} className={classNames(
            "TextField",
            {
                "TextField--labeled": label,
                "TextField--disabled": disabled,
            }
        )} overflow="visible">
            {child}
            {label&&<Body className="label" size="large">{label}</Body>}
            <legend className="legend">{label}</legend>
        </Layout>

        <AnimatedVisibility ph={16} pt={4} isVisible={
            typeof error === 'string'
            ||
            !!supportingText
        }>
            <Body size="small">{error||supportingText}</Body>
        </AnimatedVisibility>
    </Layout>
}