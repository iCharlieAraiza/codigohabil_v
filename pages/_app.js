import { SessionProvider } from "next-auth/react"
import '../styles/globals.css'
import React, { useState, useEffect } from 'react'
import useDarkMode from 'use-dark-mode'
//import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from "../styles/theme"
import { createGlobalStyle } from 'styled-components';
//import { ThemeProvider as TP} from 'next-themes'
import css from '../styles/styles.js';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [isMounted, setIsMounted] = useState(false)
  const darkMode = useDarkMode(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])



  return (
    
    <SessionProvider session={session}>
        <GlobalStyle />
        {isMounted && <Component {...pageProps} />}
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
  :root {
    --fg: #000;
    --bg: #fff;
    --color-gray: #a1a1a1;
    --color-title-post: #2e2e2e;
    --color-h: #2e2e2e;
    --color-medium-gray: #535353;
    --color-p: #2e2e2e;
    --font-color: #202020;
    --font-medium: #707070;
    --header-gradient: linear-gradient(180deg,rgba(207,207,227,0.4) 0%,rgb(185 185 185 / 15%) 40%);
    --hero-url: url('https://assets.codigohabil.com/img/background-banner.svg');
    --hover-list: #f5f5f5;
    --menu: ${css.colors.primary};
    --medium-font: #707070;
    --overlayer: 'white';
    --title: #2e2e2e;
    --toc-bg: rgb(240, 242, 243);
    --toc-title: #2e2e2e;
    --toc-li: #7c7c7c;

    --section-landing-bg: #eff4f9;

  }

  [data-theme="dark"], .dark-mode {
    --fg: #fff;
    --bg: #121720;
    --color-gray: #d0d0d0;
    --color-title-post: white;
    --color-medium-gray: white;
    --color-p: #d0d0d0;
    --color-h: white;
    --font-color:  #fff;
    --font-medium: #d0d0d0;
    --header-gradient: linear-gradient(rgb(71 71 71 / 0%) 0%, rgb(185 185 185 / 5%) 40%);
    --hero-url: url('https://assets.codigohabil.com/img/background-banner-dark.svg');
    --hover-list: rgb(255 255 255 / 6%);
    --menu: #394256;
    --medium-font:#d0d0d0;
    --overlayer: #2c3546;
    --title: white;
    --toc-bg: rgb(57 66 86 / 44%);
    --toc-title: #fff;
    --toc-li: #d0d0d0;


    --section-landing-bg: #transparent;

  }

  body {
    background:  var(--bg);
    color: var(--font-color);
  }
  main{
    background: var(--bg);
    color: var(--font-color);
  }
`;
