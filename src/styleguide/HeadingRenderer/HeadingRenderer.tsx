import React from 'react';
import {Title, Headline} from "../../";

const HeadingRenderer = ({ level, children, className }: any) => {
    switch (level) {
        case 1:
            return (
                <Title size="large" className={className}>
                    {children}
                </Title>
            );
        case 2:
            return (
                <Title size="medium" className={className}>
                    {children}
                </Title>
            );
        default:
            return (
                <Headline size="large" className={className}>
                    {children}
                </Headline>
            );
    }
};

export default HeadingRenderer;