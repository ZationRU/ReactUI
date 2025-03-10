```
{
    "category": "containment",
    "type": "Lists",
    "title": "Lists",
    "description": "Lists are continuous, vertical indexes of text and images",
    "background": "https://lh3.googleusercontent.com/0pK5lkLNpl15BO0_d8vPIpo3wcKbSSFk5yJsvwtvbw0KEFxu1nKSWi4CpkdoqsaqmkxZdUU-KNuc62vFDv-4dSBQtOLAitAiCA2woYhaxETumWaBIzk=w1200-rj",
    "foreground": "https://lh3.googleusercontent.com/F5XuBcW18pP9gE187pWvdljLlY1UK34WQXK2m28o0E9Kr9rJ4VL8Ov5XtvG9T61h6CJkDIgatQr4IFEq9-dTuG7JcS__OKwjqQPeGfsPcZspneiMCZg=w2400"
}
```
# Basic List Item

```tsx
import {ImageView, VStack, ListItem} from "@znui/react";

<VStack>
    <ListItem>
        <ImageView w={56} h={56} borderRadius={6} src='https://cataas.com/cat' />
        <ListItem.Content>
            <ListItem.Heading>
                Cats
            </ListItem.Heading>
            
            <ListItem.SupportText>
                The fluffy cat, with emerald eyes and a tail like a question mark, pounced playfully on the unsuspecting yarn ball, batting it across the sun-drenched rug, a purrfect picture of feline contentment amidst scattered catnip and half-eaten treats.
            </ListItem.SupportText>
        </ListItem.Content>
        
        <ListItem.Trailing>
            <ListItem.TrailingSupportText>
                May 8
            </ListItem.TrailingSupportText>
        </ListItem.Trailing>
    </ListItem>
</VStack>
```

# List Item with Trailing
List Item with Checkbox and Selection Handling

```tsx
import {ImageView, VStack, ListItem, Checkbox} from "@znui/react";
import {useState} from "react";

const [selectedIndexes, setSelectedIndexes] = useState([]);

<VStack>
    {Array.from({length: 10}).fill(0).map((_, index) =>
        <ListItem key={index} onClick={e => setSelectedIndexes(prev => prev.includes(index) ? prev.filter(it => it != index) : [...prev, index])}>
            <ListItem.Content>
                <ListItem.Heading>
                    Option {index}
                </ListItem.Heading>
            </ListItem.Content>

            <ListItem.Trailing>
                <Checkbox checked={selectedIndexes.includes(index)} />
            </ListItem.Trailing>
        </ListItem>
    )}
</VStack>
```