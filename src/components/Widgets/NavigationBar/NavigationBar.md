```tsx
    const [selected, setSelected] = React.useState('home');

    const Icon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" xmlns:xlink="http://www.w3.org/1999/xlink">
        <circle cx="30" cy="30" r="30" stroke="currentColor" fill="currentColor" />
    </svg>;
    
    
    <NavigationBar w={412}>
        <NavigationBar.Item 
            title="Главная"
            onClick={() => setSelected('home')}
            selected={selected==='home'}>
            <Icon/>
        </NavigationBar.Item>

        <NavigationBar.Item 
            title="Сообщения"
            onClick={() => setSelected('messages')}
            selected={selected==='messages'}>
            <Icon/>
        </NavigationBar.Item>

        <NavigationBar.Item 
            title="Уведомления"
            onClick={() => setSelected('notifications')}
            selected={selected==='notifications'}>
            <Icon/>
        </NavigationBar.Item>

        <NavigationBar.Item 
            title="Меню" 
            onClick={() => setSelected('menu')}
            selected={selected==='menu'}>
            <Icon/>
        </NavigationBar.Item>
    </NavigationBar>
```