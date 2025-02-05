```
{
    "category": "selection",
    "type": "Chip",
    "description": "Chips help people enter information, make selections, filter content, or trigger actions",
    "background": "https://lh3.googleusercontent.com/5yNSjuDq1EJcGjo4i0bGiptDWp3x7YqKPdnY6j8bl37hC1QR8uFsOdC-NEXa50cIT3IilNzTQlQWsAhubjxh100Fj9iSUkPdrcWLTNRrUO41aoMwblg=w1200-rj",
    "foreground": "https://lh3.googleusercontent.com/0CRy116jMP4AbIrg_e25MgPjmNiPNfDAYH8DXPLOIzraSLBuY9pvglx5agCvGQuKW6asCPuwo5FLvQAjFUAkn0De9EX4p0mmMA2DN8u4c2n1BFfXRm3n=w2400"
}
```

```tsx
import React, {useState} from "react";
import {VStack, HStack, Chip, Body} from "@znui/react";
import {MdCamera, MdClose, MdNightlight} from 'react-icons/md';
import {Avatar} from "@znui/media";

const [selectedChips, setSelectedChips] = useState([]);

const selectChip = (id) => {
    setSelectedChips(prev => prev.includes(id) ? prev.filter(it => it != id) : [...prev, id])
}

<VStack spacing={6} p={8} w={800}>
    <HStack p={8} spacing={8} overflowX='auto'>
        {Array.from({length: 20}).fill(<Chip flexShrink={0}>
            Label
        </Chip>)}
    </HStack>

    <Body>Outline</Body>

    <HStack p={8} spacing={8}>
        <Chip>
            Label
        </Chip>
        
        <Chip leading={<MdCamera/>}>
            Label
        </Chip>
        
        <Chip trailing={<MdClose/>} trailingOnClick={() => alert("Click")}>
            Label
        </Chip>

        <Chip trailing={<MdClose/>} trailingOnClick={() => alert("Click")} leading={<MdCamera/>}>
            Label
        </Chip>

        <Chip avatar={<Avatar size={24} image='https://avatars.githubusercontent.com/u/40952805?v=4' />}>
            levkopo
        </Chip>

        <Chip avatar={<Avatar size={24} image='https://avatars.githubusercontent.com/u/40952805?v=4' />} trailing={<MdNightlight />}>
            levkopo
        </Chip>

        <Chip trailing={<MdClose/>} disabled={true} leading={<MdCamera/>}>
            Label
        </Chip>
    </HStack>

    <Body>Tonal</Body>
    
    <HStack p={8} spacing={8}>
        <Chip variant='tonal'>
            Label
        </Chip>

        <Chip variant='tonal' leading={<MdCamera/>}>
            Label
        </Chip>

        <Chip variant='tonal' trailing={<MdClose/>} trailingOnClick={() => alert("Click")}>
            Label
        </Chip>

        <Chip variant='tonal' trailing={<MdClose/>} trailingOnClick={() => alert("Click")} leading={<MdCamera/>}>
            Label
        </Chip>

        <Chip variant='tonal' avatar={<Avatar size={24} image='https://avatars.githubusercontent.com/u/40952805?v=4' />}>
            levkopo
        </Chip>

        <Chip variant='tonal' avatar={<Avatar size={24} image='https://avatars.githubusercontent.com/u/40952805?v=4' />} trailing={<MdNightlight />}>
            levkopo
        </Chip>

        <Chip variant='tonal' trailing={<MdClose/>} disabled={true} leading={<MdCamera/>}>
            Label
        </Chip>
    </HStack>
    
    <Body>Filled</Body>

    <HStack p={8} spacing={8}>
        <Chip variant='filled'>
            Label
        </Chip>

        <Chip variant='filled' leading={<MdCamera/>}>
            Label
        </Chip>

        <Chip variant='filled' trailing={<MdClose/>} trailingOnClick={() => alert("Click")}>
            Label
        </Chip>

        <Chip variant='filled' trailing={<MdClose/>} trailingOnClick={() => alert("Click")} leading={<MdCamera/>}>
            Label
        </Chip>

        <Chip variant='filled' avatar={<Avatar size={24} image='https://avatars.githubusercontent.com/u/40952805?v=4' />}>
            levkopo
        </Chip>

        <Chip variant='filled' avatar={<Avatar size={24} image='https://avatars.githubusercontent.com/u/40952805?v=4' />} trailing={<MdNightlight />}>
            levkopo
        </Chip>

        <Chip variant='filled' trailing={<MdClose/>} disabled={true} leading={<MdCamera/>}>
            Label
        </Chip>
    </HStack>

    <Body>Clickable</Body>

    <HStack alignItems='center' spacing={6} p={8}>
        <Body>Post on</Body>
        <Chip variant='tonal' avatar={<Avatar size={24} image='https://avatars.githubusercontent.com/u/40952805?v=4' />} onClick={() => alert("Want change?")}>
            my page
        </Chip>
    </HStack>

    <Body>Selectable</Body>
    
    <HStack alignItems='center' spacing={6} p={8}>
        <Chip selected={selectedChips.includes(0)} onClick={() => selectChip(0)}>
            Music
        </Chip>
        <Chip selected={selectedChips.includes(1)} onClick={() => selectChip(1)}>
            Video
        </Chip>
        <Chip selected={selectedChips.includes(2)} onClick={() => selectChip(2)}>
            Clips
        </Chip>
        <Chip selected={selectedChips.includes(3)} onClick={() => selectChip(3)}>
            Photos
        </Chip>

        <Chip selected={true} disabled={true}>
            Posts
        </Chip>

        <Chip selected={false} disabled={true}>
            Newslatter
        </Chip>
    </HStack>
</VStack>
```