import './Display.css';
import React from "react";
import classNames from "classnames";
import {Layout, LayoutProps} from "../../Basic/Layout/Layout";
import {useAdaptiveProps} from "../../../adaptive/useAdaptive";

export interface DisplayProps extends LayoutProps {
    size?: Adaptive<'small'|'medium'|'large'>;
}

export const Display = (props: DisplayProps) => {
    const {
        size = 'medium',
        as = 'h4' as React.ElementType,
        className,
        ...otherProps
    } = useAdaptiveProps<any>(props)


    return <Layout ms={0} me={0} as={as} className={classNames(
        className,
        'znui-display-'+size
    )} {...otherProps}/>
}