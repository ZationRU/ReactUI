import React, {ReactNode} from 'react';
import classNames from 'classnames';
import {Tappable} from "../../Layouts";
import {IconWrapper} from "../IconWrapper/IconWrapper";
import {HTMLZnUIProps, ZnUIStyleObject} from "../../../styled";
import {Label} from "../../Typography";
import {ThemeTokens} from "../../../theme";
import {AbsoluteCenter, HStack, Layout} from "../../Basic";
import {CircularProgressIndicator} from "../CircularProgressIndicator/CircularProgressIndicator";

const modeStyles: {
    [key: string]: ZnUIStyleObject
} = {
    filled: {
        background: ThemeTokens.primary,
        color: ThemeTokens.onPrimary,
    },
    text: {
        background: 'none',
        color: ThemeTokens.primary,
    },
    outline: {
        background: 'none',
        color: ThemeTokens.primary,
        borderColor: ThemeTokens.outline,
        borderWidth: 1,
        borderStyle: 'solid'
    },
    tonal: {
        background: ThemeTokens.secondaryContainer,
        color: ThemeTokens.onSecondaryContainer,
    },
    elevated: {
        background: ThemeTokens.surfaceContainerLow,
        color: ThemeTokens.primary,
        mh: 2,
        mb: 3
    }
}

export interface ButtonProps extends HTMLZnUIProps<'button'>{
    mode?: 'filled'|'text'|'outline'|'tonal'|'elevated',
    icon?: ReactNode
    loading?: boolean
}

/**
 * ZnUI Button widget
 * @param props
 * @constructor
 */
export function Button(props: ButtonProps) {
    const {
        mode = 'filled',
        children,
        icon,
        className,
        loading,
        type = 'button',
        ...otherProps
    } = props

    return <Tappable
        as='button'
        clip={true}
        to={{
            boxShadow: true,
            background: {
                duration: 500
            },
            width: {
                duration: 600
            }
        }}
        boxSizing='content-box'
        border='none'
        outline='none'
        shapeScale='full'
        userSelect='none'
        pv={10}
        pl={16}
        pr={24}
        m={0}
        _hover={{
            ...['filled', 'elevated'].includes(mode) ? {
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3), 0 1px 3px 1px rgba(0, 0, 0, 0.15)'
            }: (mode === 'text' ? {
                borderColor: ThemeTokens.primary
            } : {})
        }}
        _focusVisible={mode === 'text' ? {
            borderColor: ThemeTokens.primary
        } : {}}
        _disabled={{
            oc: 0.38,
            cursor: 'unset',
            pointerEvents: 'none'
        }}
        {...modeStyles[mode]}
        className={
            classNames({
                'elevation-1': mode==='elevated'
            })
        }
        pseudos={{
            '&:enabled:focus-visible > .state-layer': {
                oc: 0.12,
                bg: 'currentColor'
            },
            '&:enabled:hover > .state-layer': {
                oc: 0.08,
                bg: 'currentColor'
            }
        }}
        {...{
            ...otherProps,
            type,
        } as any}
    >
        <HStack
            align='center'
            justify='center'
            w='inherit'
            to={{
                w: {
                    duration: 600,
                    value: '100%'
                },
                oc: loading ? 0: 1
            }}
        >
            {icon&&<IconWrapper size={18}>{icon}</IconWrapper>}
            <Label
                ml={8}
                size='large'
            >
                {children}
            </Label>
        </HStack>

        <AbsoluteCenter>
            <CircularProgressIndicator
                size={20}
                color='currentColor'
                to={{
                    oc: loading ? 1: 0
                }}
            />
        </AbsoluteCenter>
    </Tappable>
}

