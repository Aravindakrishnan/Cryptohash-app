export function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

export function putTheme() {
    const theme = localStorage.getItem('theme');
    switch(theme) {
        case "dark-theme" :
        case 'light-theme' :
            setTheme(theme);
            break;
        default:
            setTheme("light-theme")
            break;
    }

  }