import React, {
    ChangeEvent,
    createContext,
    ForwardedRef,
    ReactElement,
    useCallback,
    useContext,
    useEffect,
    useState
} from "react";
import {BaseTextFieldProps, TextField, TextFieldProps} from "../TextField/TextField";
import {Menu, MenuProps} from "@znui/menu";
import {SelectFieldItem} from "./SelectFieldItem/SelectFieldItem";
import {componentWithProps} from "@znui/utils";

const ArrowDropDown = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
    <path d="M480-360 280-560h400L480-360Z"/>
</svg>

const ArrowDropUp = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
    <path d="m280-400 200-200 200 200H280Z"/>
</svg>

export type SelectFieldProps = {
    /**
     * Key-value pairs where the key is the value and the value is the display name.
     */
    data: Record<string, string>
    /**
     * Whether editing of the text field for filtering is allowed.
     * @default false
     */
    filtering?: boolean
    /**
     * Whether multiple items can be selected.
     * @default false
     */
    multiple?: boolean
    /**
     * The maximum number of items that can be selected.
     */
    maxItems?: number
    /**
     * The text to display when multiple values are selected.
     */
    multipleSelectedText?: (value: string[]) => string
    /**
     * Menu items (SelectField.Item). If not specified, items will be automatically created from `data`.
     */
    children?: ReactElement
    /**
     * Array of selected menu items (values).
     */
    value?: string[]
    /**
     * Default selected menu items (values).
     */
    defaultValue?: string[]
    /**
     * Event handler when the selected menu items change.
     */
    onChange?: (value: string[]) => void
    /**
     * Event handler when the text for filtering changes.
     */
    onFilter?: (text: string) => void
} & BaseTextFieldProps & Pick<MenuProps, 'height' | 'density'>

export const SelectFieldContext = createContext<{
    select: (value: string) => void
    selected: string[]
    multiple: boolean
} | undefined>(undefined)

export const SelectField = componentWithProps(React.forwardRef((props: SelectFieldProps, forwardedRef: ForwardedRef<HTMLDivElement>) => {
    const {
        density,
        height,
        children,
        defaultValue= [],
        value,
        data,
        onChange,
        onFilter,
        filtering= false,
        multiple= false,
        maxItems,
        multipleSelectedText = (value) => `${value.length} selected`,
        ...textFieldProps
    } = props

    const [isOpened, setIsOpened] = useState(false)
    const [selectedValues, setSelectedValues] = useState<string[]>(value || defaultValue)
    const [textFieldValue, setTextFieldValue] = useState('')

    const select = useCallback((value: string) => {
        if(maxItems && selectedValues.length >= maxItems && !selectedValues.includes(value)) return
        const newValue = multiple ? (selectedValues.includes(value) ? selectedValues.filter(it => it != value) : [...selectedValues, value]) : [value]

        setSelectedValues(newValue)
        onChange?.(newValue)
    }, [setSelectedValues, onChange, multiple, selectedValues])

    const onInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setSelectedValues([])
        setTextFieldValue(e.target.value)
        onFilter?.(e.currentTarget.value)
        onChange?.([])
    }, [])

    useEffect(() => {
        if(value) setSelectedValues(value)
    }, [value])

    return <SelectFieldContext.Provider value={{
        selected: selectedValues,
        select: select,
        multiple: multiple
    }}>
        <Menu width='by-object' density={density} height={height}
              onOpen={() => setIsOpened(true)} onClose={() => setIsOpened(false)}>
            <Menu.Trigger mode='click'>
                <TextField
                    ref={forwardedRef}
                    value={selectedValues.length > 0
                        ? (selectedValues.length == 1 ? data[selectedValues[0]] : multipleSelectedText(selectedValues))
                        : (filtering ? textFieldValue : undefined)}

                    onChange={onInputChange}
                    readOnly={!filtering}
                    trailing={isOpened ? ArrowDropUp : ArrowDropDown}
                    {...textFieldProps} as='input' type='text'
                />
            </Menu.Trigger>

            <Menu.Items>
                {children == null ? Object.entries(data).map(it => <SelectFieldItem value={it[0]} children={it[1]} />) : children}
            </Menu.Items>
        </Menu>
    </SelectFieldContext.Provider>
}), {
    Item: SelectFieldItem
})