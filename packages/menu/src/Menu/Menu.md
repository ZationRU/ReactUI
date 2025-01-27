```
{
    "category": "selection",
    "type": "Menus",
    "visibleName": "Menu",
    "description": "Menus display a list of choices on a temporary surface",
    "background": "https://lh3.googleusercontent.com/JWsutJ9nyTn8uCFqN2o8CNBi58WDqGUljTFpb1mWap6hIbiF6bCKF_zvnACwiCmVjwDvVyWsJiUv2qFzDxYX5LBlvbgIVajDDvDZMklC0CP0whgilQ=w1200-rj",
    "foreground": "https://lh3.googleusercontent.com/5quicMbc7u7KV8PRmVEqEXEN6Gyg_iqHmxaqf6_mhWUpPdEFNls6CQh80PAPibXQ5H_z2haw90zA6ZfITtF4pDT6ausRdPx1FD4aA4gEY2JyV34EjauX=w2400"
}
```

# Simple Menu
In this example, clicking the button opens a simple menu.

```tsx
import { MdMoreVert } from "react-icons/md";
import {IconButton, Divider, VStack, TextField, Menu} from "@znui/react";

<VStack>
    <Menu>
        <Menu.Items>
            <Menu.Item onClick={() => alert('Add Contact')}>
                Add Contact
            </Menu.Item>
            <Menu.Item onClick={() => alert('Import Contacts')}>
                Import Contacts
            </Menu.Item>
            <Menu.Item onClick={() => alert('Export Contacts')}>
                Export Contacts
            </Menu.Item>
        </Menu.Items>

        <Menu.Trigger>
            <IconButton>
                <MdMoreVert/>
            </IconButton>
        </Menu.Trigger>
    </Menu>
</VStack>
```

# Icons and Support Text
In this example, a menu with an `icon` and `supporting text` is opened.

```tsx
import { MdMoreVert, MdAddBox, MdImportContacts, MdContacts } from "react-icons/md";
import {IconButton, VStack, Menu} from "@znui/react";

<VStack>
    <Menu width={300} closeOnClick={false}>
        <Menu.Items>
            <Menu.Item icon={<MdAddBox />}>
                Add Contact
            </Menu.Item>
            <Menu.Item icon={<MdImportContacts />} supportingText='Imports Contacts from CSV'>
                Import Contacts
            </Menu.Item>
            <Menu.Item icon={<MdContacts />} supportingText='Exports Contacts as CSV'>
                Export Contacts
            </Menu.Item>
        </Menu.Items>

        <Menu.Trigger>
            <IconButton>
                <MdMoreVert/>
            </IconButton>
        </Menu.Trigger>
    </Menu>
</VStack>
```

# Submenu
Example of creating a sub-menu.

```tsx
import { MdMoreVert, MdAddBox, MdImportContacts, MdContacts, MdArrowRight } from "react-icons/md";
import {IconButton, Divider, VStack, Menu} from "@znui/react";

<VStack>
    <Menu width={300}>
        <Menu.Items>
            <Menu.Item>
                Open
            </Menu.Item>
            <Menu.Item>
                Save
            </Menu.Item>
            <Divider />
            <Menu>
                <Menu.Trigger>
                    <Menu.Item trailingIcon={<MdArrowRight />}>
                        Save As
                    </Menu.Item>
                </Menu.Trigger>
                
                <Menu.Items>
                    <Menu.Item>
                        PDF
                    </Menu.Item>
                    <Menu.Item>
                        Plain Text
                    </Menu.Item>
                    <Menu.Item>
                        HTML
                    </Menu.Item>
                </Menu.Items>
            </Menu>
        </Menu.Items>

        <Menu.Trigger>
            <IconButton>
                <MdMoreVert/>
            </IconButton>
        </Menu.Trigger>
    </Menu>
</VStack>
```

# Density
`density` controls how compact the menu items will be.

```tsx
import {Button, VStack, Menu} from "@znui/react";
import {useState} from "react";

const [density, setDensity] = useState(0);

<VStack spacing={8} w={300} mh='auto'>
    <Menu density={density}>
        <Menu.Items>
            <Menu.Item>
                .zip
            </Menu.Item>
            <Menu.Item>
                .tar
            </Menu.Item>
            <Menu.Item>
                .tar.gz
            </Menu.Item>
            <Menu.Item>
                .gz
            </Menu.Item>
            <Menu.Item>
                .xz
            </Menu.Item>
            <Menu.Item>
                .lz
            </Menu.Item>
        </Menu.Items>

        <Menu.Trigger>
            <Button>Create Archive</Button>
        </Menu.Trigger>
    </Menu>

    <Button mode='outline' onClick={() => setDensity(prev => prev == 2 ? 0 : prev + 1)}>Density: {density}</Button>
</VStack>
```

# Selection
This example demonstrates item selection within the menu.

```tsx
import {Button, VStack, Menu} from "@znui/react";
import {MdCheck} from 'react-icons/md';
import {useState} from "react";

const [selected, setSelected] = useState([]);

function select(id) {
    setSelected(prev => prev.includes(id) ? prev.filter(it => it != id) : [...prev, id])
}

<VStack w={300} mh='auto'>
    <Menu>
        <Menu.Items>
            <Menu.Item closeOnClick={false} icon={selected.includes('roboto') && <MdCheck />} selected={selected.includes('roboto')} onClick={() => select('roboto')}>
                Roboto
            </Menu.Item>
            <Menu.Item closeOnClick={false} icon={selected.includes('open sans') && <MdCheck />} selected={selected.includes('open sans')} onClick={() => select('open sans')}>
                Open Sans
            </Menu.Item>
            <Menu.Item closeOnClick={false} icon={selected.includes('roboto mono') && <MdCheck />} selected={selected.includes('roboto mono')} onClick={() => select('roboto mono')}>
                Roboto Mono
            </Menu.Item>
            <Menu.Item closeOnClick={false} icon={selected.includes('impact') && <MdCheck />} selected={selected.includes('impact')} onClick={() => select('impact')}>
                Impact
            </Menu.Item>
            <Menu.Item onClick={() => setSelected([])}>
                Reset
            </Menu.Item>
        </Menu.Items>

        <Menu.Trigger>
            <Button>Font</Button>
        </Menu.Trigger>
    </Menu>
</VStack>
```

# Context Menu & Disabled Items
This example creates a context menu and also disables one of the menu items.

```tsx
import { MdMoreVert } from "react-icons/md";
import {VStack, Center, Menu} from "@znui/react";

<VStack>
    <Menu>
        <Menu.Items>
            <Menu.Item>
                Add Contact
            </Menu.Item>
            <Menu.Item>
                Import Contacts
            </Menu.Item>
            <Menu.Item disabled>
                Export Contacts
            </Menu.Item>
        </Menu.Items>

        <Menu.Trigger mode='context'>
            <Center h={300} border='#787e8a solid 1px'>
                Context Menu
            </Center>
        </Menu.Trigger>
    </Menu>
</VStack>
```

# Control
In this example, instead of a component, a function with `ref`, `open`, and `close` arguments is passed to the `Menu.Trigger`.

```tsx
import {MdMoreVert} from "react-icons/md";
import {Button, HStack, VStack, Menu} from "@znui/react";

<VStack>
    <Menu>
        <Menu.Items>
            <Menu.Item>
                Add Contact
            </Menu.Item>
            <Menu.Item>
                Import Contacts
            </Menu.Item>
            <Menu.Item>
                Export Contacts
            </Menu.Item>
        </Menu.Items>

        <Menu.Trigger>
            {(ref, open, close) => (
                <HStack ref={ref} spacing={8}>
                    <Button onClick={() => open()}>Open</Button>
                    <Button onClick={() => close()}>Close</Button>
                    <Button onClick={() => open({x: 100, y: 100})}>Open relative at (100, 100)</Button>
                </HStack>
            )}
        </Menu.Trigger>
    </Menu>
</VStack>
```

# In Modal
In this example, the menu opens inside a modal window.

```tsx
import {MdMoreVert} from "react-icons/md";
import {Button, VStack, Menu, useModal, Modal} from "@znui/react";

const { open, modal } = useModal(() => <Modal title='Menu Example'>
    <Menu>
        <Menu.Items>
            <Menu.Item>
                Add Contact
            </Menu.Item>
            <Menu.Item>
                Import Contacts
            </Menu.Item>
            <Menu.Item>
                Export Contacts
            </Menu.Item>
        </Menu.Items>

        <Menu.Trigger>
            <Button>Menu</Button>
        </Menu.Trigger>
    </Menu>
</Modal>);

<>
    <Button onClick={() => open()}>Open Modal</Button>
    {modal}
</>
```