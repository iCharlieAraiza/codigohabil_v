import { SessionProvider } from "next-auth/react"
import '../styles/globals.css'
import React, { useState, useEffect } from 'react'
import useDarkMode from 'use-dark-mode'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from "../styles/theme"
import { createGlobalStyle } from 'styled-components';


export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [isMounted, setIsMounted] = useState(false)
  const darkMode = useDarkMode(true)
  const theme = darkMode.value ? darkTheme : lightTheme

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {isMounted && <Component {...pageProps} />}
      </ThemeProvider>
    </SessionProvider>
  )

  /*
  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <button onClick={darkMode.enable}>DARK MODE</button>
        <button onClick={darkMode.disable}>LIGHT MODE</button>
        {isMounted && <Component {...pageProps} />}
      </ThemeProvider>
    </SessionProvider>
  ) */
}

const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => props.theme.bg};
    color: ${props => props.theme.fontColor};
  }
  main{
    background: ${props => props.theme.bg};
    color: ${props => props.theme.fontColor};
  }
`;
