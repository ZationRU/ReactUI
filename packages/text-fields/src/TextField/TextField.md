```
{
    "category": "textInputs",
    "type": "Text inputs",
    "description": "Text fields let users enter text into a UI",
    "background": "https://lh3.googleusercontent.com/3YP3GkqI5rmuRlxPQyob9EAeDtJjeNG-unOEx_WLljVwVk9ECMG0xsWgcN_fRP_sgGeWlOy9tHYdls_h8Qj7y2ygm1zdHnqSEUwqRuQq_yPHzOC8B-4=w1200-rj",
    "foreground": "https://lh3.googleusercontent.com/ndX6ayECBWZB-KJ8EosWaTpOoEh0GKGOOCuZDcL4DPwKFnalIzYQw8h3rCxIn_8djFBWlYr2IK4R1fdBKe0o_LHPnHXo07d3obTOJcmBrZZvRISANnc=w2400"
}
```

## Basic TextField

In this example, we showcase a simple text field with both outline and filled variants, along with basic configurations like labels, placeholders and different input types.

```tsx
import {TextField, VStack, SegmentedButton, IconContainer, ThemeTokens} from "@znui/react";
import {MdError} from "react-icons/md";
import {useState} from "react";

const [variant, setVariant] = useState('outline');

<VStack spacing={16}>
  <VStack>
    <TextField variant={variant} label="Labeled" placeholder="Placeholder" />
    <TextField variant={variant} label="Number" type="number" placeholder="Placeholder"/>
    <TextField variant={variant} label="Password" type='password' placeholder="Placeholder"/>
  </VStack>

  <SegmentedButton selectedIds={variant} onSelect={e => setVariant(e)}>
        <SegmentedButton.Segment id='outline'>Outline</SegmentedButton.Segment>
        <SegmentedButton.Segment id='filled'>Filled</SegmentedButton.Segment>
    </SegmentedButton>
</VStack>
```

## TextField with Supporting Text

In this example, a text field is displayed with a supporting text.

```tsx
import {TextField, VStack} from "@znui/react";

<VStack>
    <TextField variant="outline" label="Labeled" placeholder="Placeholder" supportingText='Max 20 characters'
               maxLength={20}/>
</VStack>
```

## TextField with Error

In this example, a text field is displayed with an error message.

```tsx
import {TextField, VStack} from "@znui/react";

<VStack>
    <TextField variant="outline" label="Label" error="Oops.. I'm error" placeholder="Placeholder"/>
</VStack>
```

## TextField with Leading Icon and Error

In this example, a text field is displayed with leading icon and an error message with trailing error icon.

```tsx
import {TextField, VStack, IconContainer, ThemeTokens} from "@znui/react";
import {MdOutlineSearch, MdError} from "react-icons/md";

<VStack>
  <TextField variant="outline" label="Label" error="Oops.. I'm error" placeholder="Placeholder"
            leading={<IconContainer><MdOutlineSearch/></IconContainer>} trailing={<IconContainer><MdError color={ThemeTokens.error}/></IconContainer>}/>
</VStack>
```

## TextField with Prefix

In this example, a text field is displayed with a prefix.

```tsx
import {TextField, VStack} from "@znui/react";

<VStack>
   <TextField variant="outline" label="Prefix" leading='+1' placeholder="Placeholder"/>
</VStack>
```

## TextField with Leading Icon

In this example, a text field is displayed with a leading icon.

```tsx
import {TextField, VStack, IconContainer} from "@znui/react";
import {MdOutlineSearch} from "react-icons/md";

<VStack>
  <TextField variant="outline" label="Leading Icon" leading={<IconContainer><MdOutlineSearch/></IconContainer>} placeholder="Placeholder"/>
</VStack>
```

## TextField with Trailing Suffix

In this example, a text field is displayed with a trailing suffix.

```tsx
import {TextField, VStack} from "@znui/react";

<VStack>
  <TextField variant="outline" dir='rtl' label="Suffix" trailing='.com' placeholder="yoursite"/>
</VStack>
```

## TextField with Trailing Icon

In this example, a text field is displayed with a trailing icon that has a click event.

```tsx
import {TextField, VStack, IconButton} from "@znui/react";
import {MdCancel} from "react-icons/md";

<VStack>
    <TextField variant="outline" label="Trailing Icon" trailing={<IconButton onClick={() => alert("Clicked")}><MdCancel/></IconButton>}
            placeholder="Placeholder"/>
</VStack>
```