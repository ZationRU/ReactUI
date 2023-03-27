/// <reference types="react" />
type TOC = {
    heading: boolean;
    visibleName: string;
    href: string;
    content: string;
    shouldOpenInNewTab: string;
    selected: boolean;
    initialOpen: boolean;
};
interface ComponentsListRendererProps {
    items: TOC[];
}
export declare function ComponentsListRenderer(props: ComponentsListRendererProps): JSX.Element;
export {};
