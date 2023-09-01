import React, {ForwardedRef, useCallback, useState, UIEvent} from "react";
import {ScrollLayout} from "../ScrollLayout/ScrollLayout";
import {LayoutProps, Center} from "../../Basic";
import {ThemeTokens} from "../../../theme";
import {CircularProgressIndicator} from "../../Widgets";

export interface SwipeRefreshLayoutProps extends LayoutProps{
    onRefresh: (event: RefreshEvent) => void
}

export interface RefreshEvent {
    complete: () => void
}

export const SwipeRefreshLayout = React.forwardRef((
    props: SwipeRefreshLayoutProps,
    ref: ForwardedRef<HTMLDivElement>
) => {
    const [isRefreshing, setIsRefreshing] = useState(false)
    const [refreshPercentage, setRefreshPercentage] = useState(0)
    const [transition, setTransition] = useState<string|undefined>()
    const [downY, setDownY] = useState<number|null>(null)
    const {
        onRefresh,
        children,
        ...otherProps
    } = props

    const refresh = useCallback((event: UIEvent<HTMLDivElement>) => {
        if(!isRefreshing) {
            event.currentTarget.style.overflowY = 'scroll'
            event.currentTarget.style.touchAction = 'pan-y'

            setDownY(null)
            if(refreshPercentage>=1){
                onRefresh?.call(undefined, {
                    complete: () => {
                        setTransition('top 300ms var(--znui-emphasized-motion)')
                        setRefreshPercentage(0)
                        setIsRefreshing(false)
                    }
                })
                setIsRefreshing(true)
            }else{
                setTransition('top 300ms var(--znui-emphasized-motion)')
                setRefreshPercentage(0)
            }
        }
    }, [isRefreshing, onRefresh, refreshPercentage])

    const currentPercentage = isRefreshing ? 1: refreshPercentage

    const onMove = (target: HTMLDivElement, clientY: number) => {
        if(target.scrollTop===0&&downY!=null) {
            const currentY = clientY - downY
            if(currentY>0) {
                target.scrollTop = 0
                target.style.touchAction = 'none'
                target.style.overflowY = 'hidden'
                const percentage = currentY/180
                setRefreshPercentage(percentage>1? 1: percentage)
                return
            }
        }

        target.style.touchAction = 'pan-y'
        target.style.overflowY = 'scroll'
    }

    console.log(currentPercentage)

    return <ScrollLayout
        overscrollBehavior='none'
        orientation='vertical'
        pos='relative'
        ref={ref}
        {...otherProps}
        onPointerDown={(e) => {
            if(e.currentTarget.scrollTop===0&&!isRefreshing) {
                e.currentTarget.style.touchAction = 'none'
                setDownY(e.clientY)
                setTransition(undefined)
            }
        }}
        onMouseUp={refresh}
        onMouseLeave={refresh}
        onMouseOver={refresh}
        onTouchCancel={refresh}
        onTouchEnd={refresh}
        onTouchMove={(e) => onMove(e.currentTarget, e.touches[0].clientY)}
        onPointerMove={(e) => onMove(e.currentTarget, e.clientY)}
    >
        <Center
            pos='absolute'
            layoutSize={40}
            shapeScale='full'
            bg={ThemeTokens.surfaceContainer}
            top={-60+currentPercentage*180}
            posH={0}
            transition={transition}
            mh='auto'
            zIndex={1}
        >
            <CircularProgressIndicator
                variant={isRefreshing ? 'indeterminate': 'determinate'}
                size={24}
                transform={'rotate('+(currentPercentage*180)+"deg)"}
                motionDuration={isRefreshing||transition!==undefined? undefined: '0ms'}
                value={currentPercentage*100}
            />
        </Center>
        {children}
    </ScrollLayout>
})