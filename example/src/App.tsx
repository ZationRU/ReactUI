import React, {useState} from 'react';
import {AppRoot, Panel, Hosts, Alert, Toolbar, Tabs, TabsItem, View, Avatar, Group,
    UserIcon, GroupRoot, Cell, Div, AdaptiveList, HomeIcon, HorizontalList, Header, Link, Button, Spinner, PanelSpinner, TextInput, TextArea, CellButton, AddIcon, MiniCell,
    NavigationListItem, NavigationBottomItem, ContextMenu, FloatingActionButton, Switch} from "@zationdev/ui";
import "@zationdev/ui/dist/index.css";

const levkopoAvatar = "https://static.levkopo.space/7b3c473d645678993060ad3e0df217fae36ed50c28ab2ed0be962c1834c436b9.webp"

function App() {
    const [activePanel, setActivePanel] = useState("main")
    const [activePanel2, setActivePanel2] = useState("main")

    const posts = Array.from(Array(100).keys()).map(i => {
        return <GroupRoot key={i}>
            <Cell before={
                <Avatar size="small"
                        src={levkopoAvatar}/>
            } description="50 лет назад">levkopo</Cell>

            <Div>
                Что?
            </Div>
        </GroupRoot>
    })

    return (
        <AppRoot>
            <Hosts activePanel={activePanel}
                   leftNavigationWidth="350px"
                   leftNavigation={
                        <div>
                            <Toolbar title="Меню"/>

                            <Div>
                                <NavigationListItem before={<HomeIcon/>} onClick={() => setActivePanel("main")}>Главная</NavigationListItem>
                                <NavigationListItem before={<UserIcon/>} onClick={() => setActivePanel("user")}>Что-то ещё</NavigationListItem>
                                <NavigationListItem before={<UserIcon/>} onClick={() => setActivePanel("miniapp")}>Что-то ещё</NavigationListItem>
                            </Div>
                        </div>
                   }
                   bottomNavigation={<>
                       <NavigationBottomItem icon={<HomeIcon/>} onClick={() => setActivePanel("main")}/>
                       <NavigationBottomItem icon={<UserIcon/>} onClick={() => setActivePanel("user")} selected={true}/>
            </>}>
                <Panel id="main">
                    <Toolbar title="Главная"/>
                    <Tabs>
                        <TabsItem
                            onClick={() => setActivePanel2("main")}
                            selected={activePanel2==="main"}>
                            Лента
                        </TabsItem>
                        <TabsItem
                            onClick={() => setActivePanel2("popular")}
                            selected={activePanel2==="popular"}>
                            Популярное
                        </TabsItem>
                    </Tabs>

                    <View activePanel={activePanel2}>
                        <Panel id="main">
                            <Switch/>
                            <FloatingActionButton icon={<AddIcon/>}/>

                            <MiniCell before={<AddIcon/>}>Test</MiniCell>
                            <CellButton before={<AddIcon/>}>Тест</CellButton>

                            <TextArea placeholder="Тест"/>

                            <TextInput label="Логин"/>
                            <TextInput label="Пароль"/>
                            <Header
                                mode="primary"
                                before={<UserIcon/>}
                                title="Приложения"
                                aside={<Link>Показать все</Link>}
                            />

                            <Header
                                mode="secondary"
                                title="Приложения"
                                aside={<Link>Показать все</Link>}
                            />

                            <Header
                                mode="tertiary"
                                title="Приложения"
                                aside={<Link>Показать все</Link>}
                            />

                            <Header
                                mode="tertiary"
                                title="Очень очень очень длинный заголовок"
                                aside={<Link>Показать все</Link>}
                            />

                            <Button before={<UserIcon/>} stretched>stretched</Button>

                            <HorizontalList>
                                <Button>Without Icon</Button>
                                <Button mode="secondary">Without Icon</Button>
                                <Button mode="tertiary">Without Icon</Button>
                                <Button mode="outline">Without Icon</Button>
                            </HorizontalList>

                            <HorizontalList>
                                <Button appearance="negative">Without Icon</Button>
                                <Button appearance="negative" mode="secondary">Without Icon</Button>
                                <Button appearance="negative" mode="tertiary">Without Icon</Button>
                                <Button appearance="negative" mode="outline">Without Icon</Button>
                            </HorizontalList>

                            <HorizontalList>
                                <ContextMenu menu={
                                    (context) => <>
                                        <Button appearance="negative" mode="secondary" onClick={context.dismiss}>Without Icon</Button>
                                    </>
                                }>
                                    <Button appearance="positive">Without Icon</Button>
                                </ContextMenu>
                                <Button appearance="positive" mode="secondary">Without Icon</Button>
                                <Button appearance="positive" mode="tertiary">Without Icon</Button>
                                <Button appearance="positive" mode="outline">Without Icon</Button>
                            </HorizontalList>

                            <Group header={
                                <Header
                                    mode="primary"
                                    title="Spinner"
                                />
                            }>
                                <HorizontalList>
                                    <Spinner size="small"/>
                                    <Spinner size="medium"/>
                                    <Spinner size="regular"/>
                                    <Spinner size="large"/>
                                </HorizontalList>
                            </Group>

                            <Group header={
                                <Header
                                    mode="primary"
                                    title="Avatar"
                                />
                            }>
                                <HorizontalList>
                                    <Avatar size="big" src={undefined}/>
                                    <Avatar size="medium" src={undefined}/>
                                    <Avatar size="small" src={undefined}/>
                                    <Avatar size="mini" src={undefined}/>
                                </HorizontalList>

                                <HorizontalList>
                                    <Avatar size="big" src={levkopoAvatar}/>
                                    <Avatar size="medium" src={levkopoAvatar}/>
                                    <Avatar size="small" src={levkopoAvatar}/>
                                    <Avatar size="mini" src={levkopoAvatar}/>
                                </HorizontalList>
                            </Group>

                            <AdaptiveList>
                                <Alert type="negative" title="Ошибка">
                                    Ошибок нет
                                </Alert>

                                {
                                    posts
                                }
                            </AdaptiveList>
                        </Panel>

                        <Panel id="popular">
                            <Header
                                title="Гаражи"
                                aside={<Link>Показать все</Link>}
                            />
                            <Cell description="10 000 рублей" after={<UserIcon/>}>Гараж в Богдановиче</Cell>
                            <Cell description="100 000 рублей">Гараж в центре Екатеринбурга</Cell>
                            <Cell description="5 000 000 рублей">Гараж в бункере под УрТИСИ СибГУТИ</Cell>
                            <Cell description="10 000 000 рублей">Гараж Helltaker</Cell>
                        </Panel>
                    </View>
                </Panel>

                <Panel id="user">
                    <Toolbar title="levkopo"/>
                    <PanelSpinner/>
                </Panel>

                <Panel id="miniapp">
                    <iframe src="https://superdef.ru/" style={{ width: "100%", border: "none", height: "100vh"}}/>
                </Panel>
            </Hosts>
        </AppRoot>
    );
}

export default App;