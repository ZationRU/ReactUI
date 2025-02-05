import React, {useRef, useState} from "react";
import {FormWidgetBase, FormWidgetBaseProps} from "@znui/md3-utils";
import {ThemeTokens} from "@znui/md3-themes";
import {mergeRefs} from "@znui/utils";
import {FlexLayout, Layout} from "@znui/layouts";

export interface SliderProps extends FormWidgetBaseProps {
    /**
     * The maximum value of the slider.
     * @default 100
     */
    max: number
    /**
     * The minimum value of the slider.
     * @default 0
     */
    min: number
    /**
     * The current value of the slider.
     */
    value?: number
    /**
     * The default value of the slider.
     * @default 0
     */
    defaultValue?: number
    /**
     * The step value of the slider.
     * @default 1
     */
    step?: number
    /**
     * Event handler for when the slider value changes.
     */
    onChange?: React.ChangeEventHandler<HTMLInputElement>
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
    const [selected, setSelected] = useState(false)

    const {
        max = 100,
        min = 0,
        value,
        defaultValue = 0,
        step = 1,
        disabled,
        ...layoutRest
    } = props

    let _currentValue = (value || defaultValue)
    _currentValue = _currentValue < min ? min: (_currentValue > max ? max: _currentValue)

    const stepCount = (max-min) / step

    let currentValue = _currentValue - (step===1? 0: (_currentValue % stepCount))
    if(currentValue>max) currentValue = max;

    const trackWidth = (currentValue - min) / (max-min) * 100;

    return <FormWidgetBase
        {...layoutRest}
        display='block'
        disabled={disabled}
        h={44}
        p={3}
        type='range'
        max={max}
        min={min}
        onFocus={() => {
            setSelected(true)
        }}
        onBlur={() => {
            setSelected(false)
        }}
        value={_currentValue}
        step={step}
        ref={mergeRefs(ref, inputRef)}
        pos="relative"
        overflow="visible"
        userSelect="none"
        cursor="pointer"
    >

        <Layout
            pos="absolute"
            left={0}
            right={20}
            h={16}
            top="calc(50% - 14px)"
            overflow="visible"
        >
            {/* Inactive Track */}
            <Layout
                as="span"
                pos="absolute"
                h={16}
                top={6}
                borderRadius={4}
                right={0}
                left={'calc('+trackWidth+'%  + 14px)'}
                maxW={"calc("+(100 - trackWidth)+"% - 14px)"}
                oc={disabled ? 0.12 : 1}
                bg={disabled ? ThemeTokens.onSurface : ThemeTokens.primaryContainer}
            />

            {/* Active Track */}
            <Layout
                as="span"
                pos="absolute"
                h={16}
                borderRadius={4}
                left={0}
                top={6}
                right={0}
                ref={activeTrackRef}
                maxW={"calc("+trackWidth+"% - 6px)"}
                bg={disabled ? ThemeTokens.onSurface : ThemeTokens.primary}
                oc={disabled ? 0.38 : 1}
                clip={true}
            />

            <Layout
                as="span"
                pos="absolute"
                h={16}
                top={11}
                borderRadius={4}
                right={4}
                left={4}
            >
                <FlexLayout
                    w="100%"
                    justify="space-between"
                    mt={1}
                    clip={true}
                >
                    {
                        Array.from({ length: stepCount + 1  }).map((_, i) =>
                            <Layout
                                key={"step-"+i}
                                layoutSize={4}
                                shapeScale="full"
                                oc={(step <= 1 ? (i === 0 || i === stepCount ? 1 : 0) : 1) * (i * step === currentValue ? 0: 1) * (disabled ? i * step < currentValue ? 0.66 : 0.38 : 1)}
                                bg={i * step < currentValue ?
                                    (disabled ? ThemeTokens.inverseOnSurface : ThemeTokens.onPrimary)
                                    : (disabled ? ThemeTokens.onSurface : ThemeTokens.onPrimaryContainer)}
                            />
                        )
                    }
                </FlexLayout>
            </Layout>

            {/* Handle */}
            <Layout
                pos="absolute"
                shapeScale="full"
                overflow="visible"
                left={"calc("+trackWidth+"%)"}
                bg={disabled ? ThemeTokens.onSurface : ThemeTokens.primary}
                oc={disabled ? 0.38 : 1}
                ref={handleRef}
                top={-8}
                borderRadius={2}
                h={44}
                to={{
                    ml: selected ? 4: 2,
                    w: selected ? 2: 4
                }}
            />
        </Layout>
    </FormWidgetBase>
})

Slider.displayName = 'Slider'