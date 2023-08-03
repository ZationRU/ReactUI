import React, {PointerEvent, useCallback, useRef, useState} from "react";
import {Layout} from "../../Basic/Layout/Layout";
import {HTMLZnUIProps} from "../../../styled/styled.types";

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
     */
    step?: number

    /**
     * Changed value listener
     * @param value
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
        step = 0,
        onChange
    } = props

    const stepCount = step===0 ? 0 : (max-min) / step
    const steps = Array.from({ length: stepCount===0? 0: stepCount+1 }, (_, i) => Math.round(i*(100/step)))
    const trackWidth = (value || defaultValue) / (max-min) * 100;

    let pressed = false;
    let newValue = value || defaultValue;
    const performUp = () => {
        console.log("up")
        pressed = false
        onChange?.call(undefined, newValue);
    }

    const performDown = () => {
        pressed = true
    }

    return <Layout
        h={20}
        ph={3}
        pv={3}
        pos="relative"
        overflow="visible"
        userSelect="none"
        cursor="pointer"
        ref={sliderLayoutRef}
        onPointerMove={(e: PointerEvent<HTMLDivElement>) => {
            if(!pressed||
                sliderLayoutRef.current==null||
                activeTrackRef.current==null ||
                handleRef.current==null) {
                return;
            }

            const rect = sliderLayoutRef.current.getBoundingClientRect();
            let x = (e.clientX-rect.left);
            if(x<0) x = 0;

            let percentage = x/(rect.width+20);
            if(percentage>1) percentage = 1;
            if(steps.length!==0) {
                console.log(steps)
                const step = steps.find(it => it>=percentage*100)
                percentage = step === undefined ?
                    Math.ceil(percentage/100) === 0 ? 0
                        : Math.round(percentage/100)
                    : step / 100

            }

            handleRef.current.style.left = activeTrackRef.current.style.maxWidth = (percentage*100) + "%"
            newValue = min + (percentage * (max-min));
        }}

        style={{
            touchAction: "none"
        }}
        onPointerUp={performUp}
        onPointerCancel={performUp}
        onPointerLeave={performUp}
        onPointerDown={performDown}>

        <Layout
            pos="absolute"
            w="100%"
            h={4}
            left={10}
            top="calc(50% - 2px)"
        >

            <Layout
                as="input"
                type="range"
                pos="absolute"
                h={20}
                w="100%"
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
                as="span"
                pos="absolute"
                h={4}
                borderRadius={4}
                w="100%"
                bg="var(--znui-surface-variant)"
            >
                {
                    steps.map((it, i) =>
                        <Layout
                            key={"step-"+i}
                            left={"calc("+it+"% + 1px)"}
                            pos="absolute"
                            top={1}
                            layoutSize={2}
                            bg="var(--znui-on-surface-variant)"
                        />
                    )
                }
            </Layout>

            <Layout
                as="span"
                pos="absolute"
                h={4}
                borderRadius={4}
                w="100%"
                ref={activeTrackRef}
                maxW={trackWidth+"%"}
                bg="var(--znui-primary)"
            >
                {
                    steps.map((it, i) =>
                        <Layout
                            key={"step-"+i}
                            left={"calc("+it+"% + 1px)"}
                            pos="absolute"
                            top={1}
                            layoutSize={2}
                            bg="var(--znui-on-surface-variant)"
                        />
                    )
                }
            </Layout>

            {

            }
        </Layout>

        <Layout
            pos="absolute"
            shapeScale="full"
            overflow="visible"
            className="elevation-1"
            left={trackWidth+"%"}
            bg="var(--znui-primary)"
            ref={handleRef}
            layoutSize={20}/>
    </Layout>
}