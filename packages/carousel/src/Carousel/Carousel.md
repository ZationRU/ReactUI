```
{
    "category": "containment",
    "type": "Carousel",
    "description": "Carousels show a collection of items that can be scrolled on and off the screen",
    "background": "https://lh3.googleusercontent.com/0pK5lkLNpl15BO0_d8vPIpo3wcKbSSFk5yJsvwtvbw0KEFxu1nKSWi4CpkdoqsaqmkxZdUU-KNuc62vFDv-4dSBQtOLAitAiCA2woYhaxETumWaBIzk=w1200-rj",
    "foreground": "https://lh3.googleusercontent.com/ptONP8dc4XJP0PIOQFx5pYa-Vr3Z1TLNEbD574bKYdCOyNrkuA1AUpPcr2lO3PyZ_SXiVw5mRPpnVPsA7zAz2-Jnp08lYZi1JVFC4jZKDutmz3ttPjY=s0"
}
```

```tsx
import {Carousel, Stack, VStack, SegmentedButton, CarouselItem, CarouselContent} from "@znui/react";

<Stack orientation={['vertical', null, 'horizontal']} spacing={16} align='center'>
    <Carousel
        h={200}
        maxW={400}
        spacing={8}
    >
        <CarouselItem
            imageBackground='https://cataas.com/cat?1'
            minW={250}
        >
            <CarouselContent
                label='Cat'
                supportingText="Source: cataas.com"
            />
        </CarouselItem>
        
        <CarouselItem
            imageBackground='https://cataas.com/cat?2'
            minW={250}
        >
            <CarouselContent
                label='Cat'
                supportingText="Source: cataas.com"
            />
        </CarouselItem>

        <CarouselItem
            imageBackground='https://cataas.com/cat?3'
            minW={250}
        >
            <CarouselContent
                label='Cat'
                supportingText="Source: cataas.com"
            />
        </CarouselItem>
    </Carousel>

    <Carousel
        orientation='vertical'
        maxH={600}
        minW={200}
        spacing={8}
    >
        <CarouselItem
            imageBackground='https://cataas.com/cat?1'
            minH={300}
        >
            <CarouselContent
                label='Cat'
                supportingText="Source: cataas.com"
            />
        </CarouselItem>

        <CarouselItem
            imageBackground='https://cataas.com/cat?2'
            minH={300}
        >
            <CarouselContent
                label='Cat'
                supportingText="Source: cataas.com"
            />
        </CarouselItem>

        <CarouselItem
            imageBackground='https://cataas.com/cat?3'
            minH={300}
        >
            <CarouselContent
                label='Cat'
                supportingText="Source: cataas.com"
            />
        </CarouselItem>
    </Carousel>
</Stack>
```