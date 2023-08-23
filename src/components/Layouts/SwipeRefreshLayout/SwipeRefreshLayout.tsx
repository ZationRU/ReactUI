import React, {ForwardedRef, useCallback, useState, PointerEvent} from "react";
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
    const {
        onRefresh,
        children,
        ...otherProps
    } = props

    const refresh = useCallback((e: PointerEvent<HTMLDivElement>) => {
        if(!isRefreshing) {
            e.currentTarget.removeAttribute('data-y-down')
            if(refreshPercentage>=1){
                onRefresh?.call(undefined, {
                    complete: () => {
                        setTransition('top 300ms var(--emphasized-motion)')
                        setRefreshPercentage(0)
                        setIsRefreshing(false)
                    }
                })
                setIsRefreshing(true)
            }else{
                setTransition('top 300ms var(--emphasized-motion)')
                setRefreshPercentage(0)
            }
        }
    }, [isRefreshing, onRefresh, refreshPercentage])

    const currentPercentage = isRefreshing ? 1: refreshPercentage

    return <ScrollLayout
        overscrollBehavior='none'
        orientation='vertical'
        pos='relative'
        ref={ref}
        {...otherProps}
        onPointerDown={(e) => {
            if(!isRefreshing) {
                e.currentTarget.setAttribute('data-y-down', e.clientY.toString())
                setTransition(undefined)
            }
        }}
        style={{
            touchAction: "none"
        }}
        onPointerUp={refresh}
        onPointerLeave={refresh}
        onPointerCancel={refresh}
        onPointerMove={(e) => {
            const target = e.currentTarget
            const startYAttribute = target.getAttribute('data-y-down')
            const startY = startYAttribute ? parseInt(startYAttribute): null
            if(startY!=null&&target.scrollTop===0) {
                const currentY = e.clientY - startY
                const percentage = currentY/180
                setRefreshPercentage(percentage>1? 1: percentage)
                console.log(currentY)
            }
        }}
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
                motionDuration={isRefreshing||transition!==undefined? undefined: '0ms'}
                value={currentPercentage*100}
            />
        </Center>
        {children}
    </ScrollLayout>
})