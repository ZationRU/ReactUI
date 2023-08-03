import React, {PointerEvent, useCallback, useRef, useState} from "react";
import {Layout} from "../../Basic/Layout/Layout";
import {HTMLZnUIProps} from "../../../styled/styled.types";
import {FlexLayout} from "../../Basic/FlexLayout/FlexLayout";

export interface SliderProps {
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
    onChange?: (value: number) => number;
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
export function Slider(props: SliderProps) {
    const sliderLayoutRef = useRef<HTMLDivElement|null>(null)
    const activeTrackRef = useRef<HTMLDivElement|null>(null)
    const handleRef = useRef<HTMLDivElement|null>(null)

    const {
        max = 100,
        min = 0,
        value,
        defaultValue = 0,
        step = 1,
        onChange
    } = props

    const _currentValue = (value || defaultValue)
    const stepCount = (max-min) / step

    const currentValue = _currentValue - (step===1? 0: (_currentValue % stepCount))
    const trackWidth = currentValue / (max-min) * 100;

    let pressed = false;
    let newValue = currentValue;
    const performUp = () => {
        console.log("up")
        pressed = false
        onChange?.call(undefined, newValue);
    }

    const performDown = () => {
        pressed = true
    }

    return <Layout>
        <Layout
            h={20}
            m={3}
            pos="relative"
            overflow="visible"
            userSelect="none"
            cursor="pointer"
            ref={sliderLayoutRef}
            onPointerMoveCapture={(e: PointerEvent<HTMLDivElement>) => {
                if(!pressed||
                    sliderLayoutRef.current==null||
                    activeTrackRef.current==null ||
                    handleRef.current==null) {
                    return;
                }

                const rect = sliderLayoutRef.current.getBoundingClientRect();
                let x = (e.clientX-rect.left);
                if(x<0) x = 0;

                let percentage = x/(rect.width);
                if(percentage>1) percentage = 1;

                newValue = min + (percentage * (max-min));

                if(max-newValue<step/2) {
                    newValue = max
                }

                let mod = (step===1? 0: (newValue % stepCount))
                newValue = Math.round(newValue - mod)

                const finalPercentage = (newValue-min/(max-min)*100)
                handleRef.current.style.left = "calc(" + finalPercentage + "% - 10px)";
                activeTrackRef.current.style.maxWidth = finalPercentage + "%";
            }}

            style={{
                touchAction: "none"
            }}
            onPointerUp={performUp}
            onPointerCancel={performUp}
            onPointerLeave={performUp}
            onPointerDown={performDown}>

            <Layout
                as="input"
                type="range"
                pos="absolute"
                h={20}
                left={0}
                right={0}
                oc={0}
                min={min}
                max={max}
                value={value}
                step={step}
                defaultValue={defaultValue}
                onChange={(e) => {
                    onChange?.call(undefined, Number((e.currentTarget as HTMLInputElement).value))
                }}
            />

            <Layout
                pos="absolute"
                left={10}
                right={10}
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
                            Array.from({ length: step<=1 ? 0: stepCount }).map((it, i) =>
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
                        Array.from({ length: step<=1 ? 0: stepCount }).map((it, i) =>
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
                    top={-10}
                    layoutSize={20}/>
            </Layout>
        </Layout>
    </Layout>
}