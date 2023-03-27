/// <reference types="react" />
interface StyleGuideRendererProps {
    title: string;
    version?: string;
    children: any;
    toc?: React.ReactNode;
    hasSidebar?: boolean;
}
export declare function StyleGuideRenderer(props: StyleGuideRendererProps): JSX.Element;
export {};
