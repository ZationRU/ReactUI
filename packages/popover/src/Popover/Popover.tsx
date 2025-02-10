import React, {
    ForwardedRef,
    ReactElement,
    ReactNode,
    useCallback,
    useContext,
    useEffect,
    useRef,
    useState
} from "react";
import {ThemeTokens} from "@znui/md3-themes";
import {HStack, Layout, LayoutProps, VStack} from "@znui/layouts";
import {Body, Title} from "@znui/typography";
import {componentWithProps, mergeRefs} from "@znui/utils";
import {Portal} from "@znui/md3-utils";
import {PopoverTrigger} from "../PopoverTrigger/PopoverTrigger";
import {PopoverContent} from "../PopoverContent/PopoverContent";

type PopoverContextProps = {
    isOpened: boolean
    open: (point: DOMRect) => void
    close: () => void
    point?: DOMRect
}

const PopoverContext = React.createContext<PopoverContextProps>({
    open: () => {},
    close: () => {},
    isOpened: false,
    point: undefined
})

export interface PopoverProps {
    /**
     * The children components of the popover.
     * These should be `Popover.Trigger` and `Popover.Content` component.
     */
    children: ReactElement
}

export const usePopoverContext = () => useContext(PopoverContext)

export const Popover = componentWithProps(({children}: PopoverProps) => {
    const [isOpened, setIsOpened] = useState(false)
    const [point, setPoint] = useState<DOMRect | undefined>(undefined)

    const open = useCallback((point: DOMRect) => {
        setIsOpened(true)
        setPoint(point)
    }, [setIsOpened, setPoint])

    const close = useCallback(() => {
        setIsOpened(false)
        setTimeout(() => {
            setPoint(undefined)
        }, 175)
    }, [setIsOpened, setPoint])

    return <PopoverContext.Provider value={{isOpened, open, close, point}}>
        {children}
    </PopoverContext.Provider>
}, {
    Trigger: PopoverTrigger,
    Content: PopoverContent,
    displayName: 'Popover'
})