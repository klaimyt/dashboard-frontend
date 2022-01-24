import { useEffect, useState } from "react";

const useTheme = () => {
  const [isLight, setIsLight] = useState(true);

  const lightTheme = {
    "--primary": '#FFF',
    "--secondary": '#F8F8F8',
    "--text-color": '#585280',
    "--header": '#585280',
    "--header-number": '#FFF',
    "--active-menu": '#585280',
  }

  const darkTheme = {
    "--primary": '#302C40',
    "--secondary": '#2C2839',
    "--text-color": '#FFF',
    "--header": '#FFF',
    "--header-number": '#585280',
    "--active-menu": '#FFF',
  }

  useEffect(() => {
    const theme = isLight ? lightTheme : darkTheme;

    for (const [key, value] of Object.entries(theme)) {
      document.documentElement.style.setProperty(key, value)
    }
  }, [isLight])

  const changeTheme = () => setIsLight(!isLight)

  return changeTheme;
}

export default useTheme;