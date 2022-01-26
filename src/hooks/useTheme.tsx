import { useEffect, useState, } from "react";

const useTheme = (): [() => void, boolean] => {
  const [isLight, setIsLight] = useState(true);

  const lightTheme = {
    "--primary": '#FFF',
    "--secondary": '#F8F8F8',
    "--text-color": '#585280',
    "--header": '#585280',
    "--header-number": '#FFF',
    "--active-menu": '#585280',
    "--theme-icon-primary": '#adadad',
    "--theme-icon-secondary": '#adadad',
  }

  const darkTheme = {
    "--primary": '#302C40',
    "--secondary": '#2C2839',
    "--text-color": '#FFF',
    "--header": '#FFF',
    "--header-number": '#585280',
    "--active-menu": '#FFF',
    "--theme-icon-primary": '#fff',
    "--theme-icon-secondary": '#302C40',
  }

  useEffect(() => {
    const isDarkmodeDefault = window.matchMedia('(prefers-color-scheme: dark)').matches ?? false;
    setIsLight(!isDarkmodeDefault)

    const themeInLocal = localStorage.getItem('color-theme-isLight')
    if (themeInLocal) {
      setIsLight(themeInLocal === "true" ? true : false)
    }
  }, [])

  useEffect(() => {
    let theme = isLight ? lightTheme : darkTheme;   

    for (const [key, value] of Object.entries(theme)) {
      document.documentElement.style.setProperty(key, value)
    }

    localStorage.setItem('color-theme-isLight', isLight.toString())
  }, [isLight])

  const changeTheme = () => setIsLight(!isLight)

  return [changeTheme, isLight];
}

export default useTheme;