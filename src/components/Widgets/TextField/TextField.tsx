import React from "react";
import "./TextField.css";
import {Layout, LayoutProps} from "../../Basic/Layout/Layout";
import {HTMLZnUIProps} from "../../../styled/styled.types";
import {Body} from "../../Typography/Body/Body";
import classNames from "classnames";
import {AnimatedVisibility} from "../../Animation/AnimatedVisibility/AnimatedVisibility";

export interface TextFieldProps extends HTMLZnUIProps<"div"> {
    label?: string
    error?: boolean
    supportingText?: string
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
        ...layoutProps
    } = props

    return <Layout minW={210} pt={6} className={classNames({
        "TextField-Container--error": error
    }, className)} {...layoutProps}>
        <Layout as="fieldset" h={64} className={classNames(
            "TextField",
            {
                "TextField--labeled": label,
            }
        )} overflow="visible">
            {children}
            {label&&<Body className="label" size="large">{label}</Body>}
            <legend className="legend">{label}</legend>
        </Layout>

        {supportingText&&<AnimatedVisibility ph={16} pt={4}>
            <Body size="small">{supportingText}</Body>
        </AnimatedVisibility>}
    </Layout>
}