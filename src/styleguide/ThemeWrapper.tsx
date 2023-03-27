import * as React from 'react';
import ThemeProvider from '../components/ThemeProvider/ThemeProvider';

const ThemeWrapper = ({children}: React.HTMLAttributes<HTMLDivElement>) => {
    return <ThemeProvider>{children}</ThemeProvider>;
};

export default ThemeWrapper;