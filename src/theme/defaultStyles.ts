export const defaultStyles = `
& a:link {
    color: var(--znui-primary);
}

& a:visited {
    color: var(--znui-inverse-primary);
}

& * {
    scrollbar-gutter: stable;
}

& ::-webkit-scrollbar {
    width: 0;
    height: 0;
}

font-family: 'Roboto';
-webkit-tap-highlight-color: transparent;
caret-color: var(--znui-primary);

--znui-safe-area-inset-top: env(safe-area-inset-top);
--znui-safe-area-inset-bottom: env(safe-area-inset-bottom);
--znui-safe-area-inset-left: env(safe-area-inset-left);
--znui-safe-area-inset-right: env(safe-area-inset-right);

--znui-keyboard-inset-top: env(keyboard-inset-top);
--znui-keyboard-inset-bottom: env(keyboard-inset-bottom);
--znui-keyboard-inset-left: env(keyboard-inset-left);
--znui-keyboard-inset-right: env(keyboard-inset-right);

--znui-all-inset-top: calc(var(--znui-safe-area-inset-top) + var(--znui-keyboard-inset-top));
--znui-all-inset-bottom: calc(var(--znui-safe-area-inset-bottom) + var(--znui-keyboard-inset-bottom));
--znui-all-inset-left: calc(var(--znui-safe-area-inset-left) + var(--znui-keyboard-inset-left));
--znui-all-inset-right: calc(var(--znui-safe-area-inset-right) + var(--znui-keyboard-inset-right));
`