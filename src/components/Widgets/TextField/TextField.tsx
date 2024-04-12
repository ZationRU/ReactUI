import React from "react";
import "./TextField.css";
import {Layout} from "../../Basic";
import {HTMLZnUIProps} from "../../../styled";
import {Body} from "../../Typography";
import classNames from "classnames";

export interface TextFieldProps extends HTMLZnUIProps<"div"> {
    mode?: 'outline'|'filled'
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
        mode = 'outline',
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
                    placeholder: ' ',
                    disabled
                }
            )
        }
    }

    return <Layout minW={210} pt={6} className={classNames({
        "TextField-Container--error": error,
    }, className)} {...layoutProps}>
        <Layout as="fieldset" className={classNames(
            "TextField",
            {
                "FilledTextView": mode==='filled',
                "TextField--labeled": label,
                "TextField--disabled": disabled,
            }
        )} overflow="visible">
            {child}
            {label&&<Body className="label" size="large">{label}</Body>}
            <legend className="legend">{label}</legend>
        </Layout>

        <Layout ph={16} pt={4} to={{
            mt: typeof error === 'string'
                ||
                !!supportingText ? 0: '-100%',
            oc: typeof error === 'string'
            ||
            !!supportingText ? 1: 0,
        }}>
            <Body size="small">{error||supportingText}</Body>
        </Layout>
    </Layout>
}