import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { Styles } from '@chakra-ui/theme-tools'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const styles: Styles = {
  global: {
    'html, body, #__next': {
      height: '100%',
    },
  },
}

const theme = extendTheme({ config, styles })

export default theme
