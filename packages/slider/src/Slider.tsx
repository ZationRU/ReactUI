import React, {useMemo, useRef, useState} from "react";
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
    /**
     * Maximum number of tick marks to display.
     * If the total number of steps exceeds this, ticks will be shown sparsely.
     * @default 100
     */
    maxVisibleTicks?: number;
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
    const activeTrackRef = useRef<HTMLDivElement | null>(null)
    const handleRef = useRef<HTMLDivElement | null>(null)
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [selected, setSelected] = useState(false)

    const {
        max = 100,
        min = 0,
        value,
        defaultValue = 0,
        step = 1,
        disabled,
        maxVisibleTicks = 100,
        ...layoutRest
    } = props

    const currentValue = useMemo(() => {
        const val = value !== undefined ? value : defaultValue;
        const numSteps = Math.round((val - min) / step);
        return Math.min(max, Math.max(min, min + numSteps * step));
    }, [value, defaultValue, min, max, step]);

    const trackWidth = useMemo(() => {
        if (max === min) return 0; // Avoid division by zero
        return ((currentValue - min) / (max - min)) * 100;
    }, [currentValue, min, max]);

    const stepCount = useMemo(() => {
        if (step === 0) return 0;
        return (max - min) / step;
    }, [max, min, step]);

    const visibleTickInfo = useMemo(() => {
        const totalPossibleTicks = stepCount + 1;
        if (totalPossibleTicks <= 0 || step === 0) {
            return [];
        }

        if (totalPossibleTicks <= maxVisibleTicks) {
            return Array.from({ length: Math.floor(totalPossibleTicks) }).map((_, i) => min + i * step);
        }

        const ticks = [];
        const tickIntervalValue = Math.max(step, Math.ceil(totalPossibleTicks / maxVisibleTicks) * step);

        for (let tickVal = min; tickVal <= max; tickVal += tickIntervalValue) {
            ticks.push(tickVal);
        }

        if (ticks[ticks.length - 1] < max && max - ticks[ticks.length-1] >= step/2) {
            ticks.push(max);
        } else if (ticks.length > 0 && max - ticks[ticks.length-1] < step/2 && ticks[ticks.length-1] !== max) {
            ticks[ticks.length-1] = max;
        }


        return ticks;
    }, [min, max, step, stepCount, maxVisibleTicks]);

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
        value={currentValue}
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
                left={'calc(' + trackWidth + '%  + 14px)'}
                maxW={"calc(" + (100 - trackWidth) + "% - 14px)"}
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
                maxW={"calc(" + trackWidth + "% - 6px)"}
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
                        visibleTickInfo.map((tickValue) => {
                            const isTickBeforeOrAtCurrent = tickValue <= currentValue;

                            let tickOpacity = 1;
                            if ((tickValue === currentValue && !disabled) || step == 1) {
                                tickOpacity = 0;
                            }

                            if (disabled) {
                                tickOpacity *= (isTickBeforeOrAtCurrent ? 0.66 : 0.38);
                            }

                            return <Layout
                                key={"step-tick-" + tickValue}
                                layoutSize={4}
                                shapeScale="full"
                                oc={tickOpacity}
                                bg={isTickBeforeOrAtCurrent ?
                                    (disabled ? ThemeTokens.inverseOnSurface : ThemeTokens.onPrimary)
                                    : (disabled ? ThemeTokens.onSurface : ThemeTokens.onPrimaryContainer)}
                            />
                        })
                    }
                </FlexLayout>
            </Layout>

            {/* Handle */}
            <Layout
                pos="absolute"
                shapeScale="full"
                overflow="visible"
                left={"calc(" + trackWidth + "%)"}
                bg={disabled ? ThemeTokens.onSurface : ThemeTokens.primary}
                oc={disabled ? 0.38 : 1}
                ref={handleRef}
                top={-8}
                borderRadius={2}
                h={44}
                to={{
                    ml: selected ? 4 : 2,
                    w: selected ? 2 : 4
                }}
            />
        </Layout>
    </FormWidgetBase>
})

Slider.displayName = 'Slider'