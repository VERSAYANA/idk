import { Box, Button, useColorMode } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </Box>
  )
}
