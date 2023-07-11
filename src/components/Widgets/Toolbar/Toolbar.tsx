import classNames from "classNames";
import './Toolbar.css';
import React from "react";
import {Title} from "../../Typography/Title/Title";
import {SurfaceLayout} from "../../Layouts/SurfaceLayout/SurfaceLayout";

export interface ToolbarProps extends React.HTMLAttributes<HTMLDivElement> {
    centered?: boolean
}

export function Toolbar(props: ToolbarProps) {
    const {
        className,
        children,
        centered,
        ...otherProps
    } = props

    return <SurfaceLayout s={0} className={classNames(
        className,
        'Toolbar'
    )}>
        <div className="inner">
            <div className="Toolbar-NavigationIcon"></div>

            <Title size="large" className={classNames(
                "Toolbar-Title",
                centered&&"Toolbar-Title-Centered",
            )}>{children}</Title>
        </div>
    </SurfaceLayout>
}