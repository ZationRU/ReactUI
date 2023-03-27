import React from 'react';
import './CodeRenderer.css';

export const CodeRenderer = ({ children }: any) => {
    return <span className="Code">{children}</span>;
};

export default CodeRenderer;