import * as React from 'react';
import {ThemeProvider} from '../components/Providers/ThemeProvider/ThemeProvider';
import {AdaptiveProvider} from "../components/Providers/AdaptiveProvider/AdaptiveProvider";

const ThemeWrapper = ({children}: React.HTMLAttributes<HTMLDivElement>) => {
    return <AdaptiveProvider>
        <ThemeProvider>
            {children}
        </ThemeProvider>
    </AdaptiveProvider>;
};

export default ThemeWrapper;