import React from 'react';
import {Title, Headline} from "@znui/react";

const HeadingRenderer = ({ level, children, className }: any) => {
    switch (level) {
        case 1:
            return (
                <Title mt={30} mb={6} size="large" className={className}>
                    {children}
                </Title>
            );
        case 2:
            return (
                <Title mt={30} mb={6} size="medium" className={className}>
                    {children}
                </Title>
            );
        default:
            return (
                <Headline mt={30} mb={6} size="large" className={className}>
                    {children}
                </Headline>
            );
    }
};

export default HeadingRenderer;