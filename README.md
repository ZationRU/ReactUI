# ZnUI

ZnUI is a library of React components that can be used in any project. 

All components are as close as possible to the design of Material Design version 3.

[Documentation & styleguide](https://ui.zation.ru)

# Install 

npm:
```shell
npm i @znui/react
```

yarn:
```shell
yarn add @znui/react
```

pnpm:
```shell
pnpm i @znui/react
```

# Example of usage
```tsx
import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import {Layout, LayoutBreakpointsValues, AdaptiveProvider, NavigationMenu, NavigationRail, SurfaceLayout, ThemeProvider, NavigationBar, useAdaptive} from "@znui/react";
import "@znui/react/dist/index.css";

const HomeIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.89797 9.23287C3.32802 9.69867 3 10.3787 3 11.0944V19.7741C3 20.4511 3.57563 21 4.28571 21H8.14286C8.85294 21 9.42857 20.4511 9.42857 19.7741V17.3222C9.42857 14.8704 10.7143 14.2574 12 14.2574C13.2857 14.2574 14.5714 14.8704 14.5714 17.3222V19.7741C14.5714 20.4511 15.1471 21 15.8572 21L19.7143 21C20.4244 20.9999 21 20.4511 21 19.774V11.0944C21 10.3787 20.672 9.69867 20.102 9.23287L12.8367 3.29513C12.3552 2.90162 11.6448 2.90162 11.1633 3.29513L3.89797 9.23287Z" fill="currentColor"/>
</svg>


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Pages = [
    {
        id: 'home',
        title: "Home",
        icon: <HomeIcon/>
    },
    {
        id: 'messages',
        title: "Messages",
        icon: <HomeIcon/>
    },
]


const App = () => {
    const {breakpointWidth} = useAdaptive()
    const [page, setPage] = useState('home')

    return <Layout
        pos="absolute"
        posV={0}
        posH={0}
        bg="var(--znui-background)"
        color="var(--znui-on-background)"
        display='flex'
        direction={['column-reverse','row']}
    >
        {
            breakpointWidth === LayoutBreakpointsValues.esm && <>
                <NavigationBar pb="env(safe-area-inset-bottom)">
                    {
                        Pages.map(({title, icon, id}) => <NavigationBar.Item
                            title={title}
                            selected={page===id}
                            onClick={() => setPage(id)}
                        >{icon}</NavigationBar.Item>)
                    }
                </NavigationBar>
            </>
        }

        {
            breakpointWidth !== LayoutBreakpointsValues.esm && breakpointWidth < LayoutBreakpointsValues.lg && <>
                <NavigationRail s={1}>
                    {
                        Pages.map(({title, icon, id}) => <NavigationRail.Item
                            title={title}
                            selected={page===id}
                            onClick={() => setPage(id)}
                        >{icon}</NavigationRail.Item>)
                    }
                </NavigationRail>
            </>
        }

        {
            breakpointWidth >= LayoutBreakpointsValues.lg && <Layout w={360}>
                <Layout pos="fixed" w="inherit">
                    <SurfaceLayout s={1} overflow={"auto"} maxH="100vh" minH="100vh">
                        <NavigationMenu mh={10} mv={10}>
                            {
                                Pages.map(({title, icon, id}) => <NavigationMenu.Item
                                    icon={icon}
                                    selected={page===id}
                                    onClick={() => setPage(id)}
                                >{title}</NavigationMenu.Item>)
                            }
                        </NavigationMenu>
                    </SurfaceLayout>
                </Layout>
            </Layout>
        }

        <Layout flex={1} overflow="auto">
            Current page: {page}
        </Layout>
    </Layout>
}

root.render(
  <React.StrictMode>
      <ThemeProvider>
          <AdaptiveProvider>
              <App />
          </AdaptiveProvider>
      </ThemeProvider>
  </React.StrictMode>
);
```