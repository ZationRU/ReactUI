```tsx
import {ZnUIIconMoreFilled} from "@znui/icons";
import {ContainedIconButton, Divider} from "@znui/react";

<Menu menu={
    <>
        <Menu.Item>
            Menu Item
        </Menu.Item>
        <Menu.Item supportingText="Supporting text">
            Menu Item
        </Menu.Item>
        <Divider/>
        <Menu.Item>
            Menu Item
        </Menu.Item>
    </>
}>
    {(trigger) =>
        <ContainedIconButton onClick={trigger.open}>
            <ZnUIIconMoreFilled/>
        </ContainedIconButton>
    }
</Menu>
```