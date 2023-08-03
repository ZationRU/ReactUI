```tsx
import {ZnUIIconLikeFilled} from "@znui/icons";
import {GridLayout, ContainedIconButton} from "@znui/react";

<GridLayout columns={2} spacing={5}>
    <ContainedIconButton mode="primary">
        <ZnUIIconLikeFilled/>
    </ContainedIconButton>
    <ContainedIconButton mode="primary" disabled={true}>
        <ZnUIIconLikeFilled/>
    </ContainedIconButton>

    <ContainedIconButton mode="tonal">
        <ZnUIIconLikeFilled/>
    </ContainedIconButton>
    <ContainedIconButton mode="tonal" disabled={true}>
        <ZnUIIconLikeFilled/>
    </ContainedIconButton>

    <ContainedIconButton mode="outline">
        <ZnUIIconLikeFilled/>
    </ContainedIconButton>
    <ContainedIconButton mode="outline" disabled={true}>
        <ZnUIIconLikeFilled/>
    </ContainedIconButton>
</GridLayout>
```