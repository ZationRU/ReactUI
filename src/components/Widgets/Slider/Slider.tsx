import React, {PointerEvent, useRef} from "react";
import {Layout, FlexLayout} from "../../Basic";
import {mergeRefs} from "../../../utils";
import {FormWidgetBase, FormWidgetBaseProps} from "../FormWidgetBase";

export interface SliderProps extends FormWidgetBaseProps {
    /**
     * Maximal value
     * @default 100
     */
    max: number

    /**
     * Minimal value
     * @default 0
     */
    min: number

    /**
     * Current value
     * @default defaultValue prop
     */
    value?: number

    /**
     * Default value
     * @default 0
     */
    defaultValue?: number

    /**
     * Step of value change
     * @default 1
     */
    step?: number

    /**
     * Changed value listener
     * @param value
     * @default undefined
     */
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

/**
 * Simple Slider component
 * Alternative for range type of input
 *
 * Not yet finished component
 *
 * @param props
 * @constructor
 */
export const Slider = React.forwardRef((props: SliderProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    const activeTrackRef = useRef<HTMLDivElement|null>(null)
    const handleRef = useRef<HTMLDivElement|null>(null)
    const inputRef = useRef<HTMLInputElement|null>(null)

    const {
        max = 100,
        min = 0,
        value,
        defaultValue = 0,
        step = 1,
        ...layoutRest
    } = props

    const _currentValue = (value || defaultValue)
    const stepCount = (max-min) / step

    let currentValue = _currentValue - (step===1? 0: (_currentValue % stepCount))
    if(currentValue>max) currentValue = max;

    const trackWidth = currentValue / (max-min) * 100;

    return <FormWidgetBase
        {...layoutRest}
        h={20}
        p={3}
        type='range'
        max={max}
        min={min}
        value={value}
        defaultValue={defaultValue}
        step={step}
        ref={mergeRefs(ref, inputRef)}
        pos="relative"
        overflow="visible"
        userSelect="none"
        cursor="pointer"
    >

        <Layout
            pos="absolute"
            left={10}
            right={20}
            h={4}
            overflow="visible"
            top="calc(50% - 2px)"
        >

            <Layout
                as="span"
                pos="absolute"
                h={4}
                borderRadius={4}
                left={0}
                right={0}
                bg="var(--znui-surface-variant)"
            >
                <FlexLayout
                    w="calc(100% - 3px)"
                    justify="space-between"
                    ml={1}
                    mt={1}
                >
                    {
                        Array.from({ length: step<=1 ? 0: stepCount+1 }).map((it, i) =>
                            <Layout
                                key={"step-"+i}
                                layoutSize={2}
                                shapeScale="full"
                                bg="var(--znui-on-surface-variant)"
                            />
                        )
                    }
                </FlexLayout>
            </Layout>

            <Layout
                as="span"
                pos="absolute"
                h={4}
                borderRadius={4}
                left={0}
                right={0}
                ref={activeTrackRef}
                maxW={trackWidth+"%"}
                bg="var(--znui-primary)"
            >
                {
                    Array.from({ length: step<=1 ? 0: stepCount+1 }).map((it, i) =>
                        <Layout
                            key={"step-"+i}
                            layoutSize={2}
                            shapeScale="full"
                            bg="var(--znui-on-surface-variant)"
                        />
                    )
                }
            </Layout>

            <Layout
                pos="absolute"
                shapeScale="full"
                overflow="visible"
                className="elevation-1"
                left={"calc("+trackWidth+"% - 10px)"}
                bg="var(--znui-primary)"
                ref={handleRef}
                top={-8}
                layoutSize={20}/>
        </Layout>
    </FormWidgetBase>
})