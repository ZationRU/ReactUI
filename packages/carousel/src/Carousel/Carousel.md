```tsx
import {Carousel, Stack, VStack, SegmentedButton, CarouselItem} from "@znui/react";
import {CarouselContent} from "./Carousel";


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