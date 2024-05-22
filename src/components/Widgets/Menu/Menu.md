```tsx
import {ZnUIIconMoreFilled} from "@znui/icons";
import {IconButton, Divider, VStack, TextField} from "@znui/react";

<VStack>
    <Menu placement='vertical' width='by-object' height={150}>
        <Menu.Items>
            <Menu.Item onClick={(e) => alert(e)}>
                Menu Item
            </Menu.Item>
            <Menu.Item supportingText="Supporting text">
                Menu Item
            </Menu.Item>
            <Menu.Item supportingText="Supporting text">
                Menu Item
            </Menu.Item>
            <Menu.Item supportingText="Supporting text">
                Menu Item
            </Menu.Item>
            <Menu.Item supportingText="Supporting text">
                Menu Item
            </Menu.Item>
        </Menu.Items>

        <Menu.Trigger>{(ref, open, close) => 
            <TextField ref={ref} label="Labeled">
                <input placeholder="Placeholder" onFocus={() => {
                    open()
                }}/>
            </TextField>   
        }</Menu.Trigger>
    </Menu>
    
    <Menu>
        <Menu.Items>
            <Menu.Item onClick={(e) => alert(e)}>
                Menu Item
            </Menu.Item>
            <Menu.Item supportingText="Supporting text">
                Menu Item
            </Menu.Item>
            <Divider/>
            <Menu>
                <Menu.Trigger>
                    <Menu.Item trailingIcon={<ZnUIIconMoreFilled/>}>
                        Submenu Click Item
                    </Menu.Item>
                </Menu.Trigger>
                <Menu.Items>
                    <Menu.Item icon={<ZnUIIconMoreFilled/>}>
                        Menu Item
                    </Menu.Item>
                    <Menu.Item icon={<ZnUIIconMoreFilled/>} supportingText="Supporting text">
                        Menu Item
                    </Menu.Item>
                </Menu.Items>
            </Menu>

            <Menu>
                <Menu.Trigger mode='hover'>
                    <Menu.Item>
                        Submenu Hover Item
                    </Menu.Item>
                </Menu.Trigger>
                <Menu.Items>
                    <Menu.Item icon={<ZnUIIconMoreFilled/>}>
                        Menu Item
                    </Menu.Item>
                    <Menu.Item icon={<ZnUIIconMoreFilled/>} supportingText="Supporting text">
                        Menu Item
                    </Menu.Item>
                </Menu.Items>
            </Menu>

            <Menu>
                <Menu.Trigger mode='context'>
                    <Menu.Item>
                        Submenu Context Item
                    </Menu.Item>
                </Menu.Trigger>
                <Menu.Items>
                    <Menu.Item icon={<ZnUIIconMoreFilled/>}>
                        Menu Item
                    </Menu.Item>
                    <Menu.Item icon={<ZnUIIconMoreFilled/>} supportingText="Supporting text">
                        Menu Item
                    </Menu.Item>
                </Menu.Items>
            </Menu>
        </Menu.Items>

        <Menu.Trigger>
            <IconButton>
                <ZnUIIconMoreFilled/>
            </IconButton>
        </Menu.Trigger>
    </Menu>
</VStack>
```