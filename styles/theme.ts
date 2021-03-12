// theme.js

// 1. import `extendTheme` function
import { extendTheme, ThemeConfig } from "@chakra-ui/react"
import { Breakpoints, Styles } from "@chakra-ui/theme-tools";

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

const styles: Styles = {
    global: {
        "html, body, #__next": {
            height: '100%'
        }
    }
}



// 3. extend the theme
const theme = extendTheme({ config, styles })

export default theme