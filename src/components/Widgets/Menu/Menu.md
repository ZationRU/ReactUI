```tsx
import {ZnUIIconMoreFilled} from "@znui/icons";
import {ContainedIconButton, Divider} from "@znui/react";

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
                <Menu.Item>
                    Submenu Item
                </Menu.Item>
            </Menu.Trigger>
            <Menu.Items>
                <Menu.Item>
                    Menu Item
                </Menu.Item>
                <Menu.Item supportingText="Supporting text">
                    Menu Item
                </Menu.Item>
            </Menu.Items>
        </Menu>
    </Menu.Items>

    <Menu.Trigger>
        <ContainedIconButton>
            <ZnUIIconMoreFilled/>
        </ContainedIconButton>
    </Menu.Trigger>
</Menu>
```