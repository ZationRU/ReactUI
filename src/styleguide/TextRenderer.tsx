import React from 'react';
import {Layout} from "../components/Basic/Layout/Layout";

export const TextRenderer = ({
                                 children,
                                 semantic,
                                 className,
                                 Component = 'span',
                                 ...restProps
                             }: any) => {
    return (
        <Layout as={Component} fontWidth={
            semantic === 'strong' ? 500 : 400
        } {...restProps}>
            {children}
        </Layout>
    );
};

export default TextRenderer;