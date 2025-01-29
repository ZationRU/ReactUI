```
{
    "category": "textInputs",
    "type": "Search",
    "description": "Search lets people enter a keyword or phrase to get relevant information",
    "background": "https://lh3.googleusercontent.com/oT7v54YeZPseQtsMQb8ROg_Ny6dNZsgJvQEbO4ww18RNUPhJQ6eSyOWrDEsfb_q-MGpk9OFklN7NMt0E4_gTJz3OncJO-bwAhrHYuR05wY5jdyrPdUU=w2400-rj",
    "foreground": "https://lh3.googleusercontent.com/7AiL-2gdDmio5x26XJZ9XiewVancJc__uqO-RoX41JfO9g8tequHCh_HyTpD2nsvY10JYPKl83ddhYf0OG2wOlfDOfrCv6AM1oOKQx3Sa7z7c9ptWw=w2400"
}
```

Example with leading icon, trailing icon, and avatar
```tsx
import {Search, IconButton, IconContainer, Avatar} from "@znui/react";
import {MdSearch, MdKeyboardVoice} from "react-icons/md";

<Search placeholder='Search your library'
        leading={<IconContainer><MdSearch/></IconContainer>} 
        trailing={<IconButton onClick={() => alert("Recording?")}><MdKeyboardVoice/></IconButton>}
        avatar={<Avatar text="A" size={40} />}
        />
```