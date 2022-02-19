import css from '../styles/styles';

const light = {
    bg: 'white',
    colors:{
        fontMedium: '#707070',
        gray: '#a1a1a1',
        h:'#2e2e2e',
        mediumGray: '#535353',
        titlePost: '#2e2e2e',
        p:'#3a3d3d'
    },
    headerGradient: 'linear-gradient(180deg,rgba(207,207,227,0.4) 0%,rgb(185 185 185 / 15%) 40%);',
    heroURL: '	https://assets.codigohabil.com/img/background-banner.svg',
    hoverList: '#f5f5f5',
    fontColor: '#202020',
    menu: css.colors.primary,
    mediumFont: '#707070',
    overlayer: 'white',
    title: '#2e2e2e',
    toc:{
        bg: 'rgb(240, 242, 243)',
        title: '#484848',
        li: '#7c7c7c'
    }
  }
  
  const dark = {
    bg: "#121720",
    colors:{
      fontMedium: '#d0d0d0',
      gray: '#d0d0d0',
      mediumGray: 'white',
      p: '#d0d0d0',
      titlePost: 'white'
    },
    heroURL: 'https://assets.codigohabil.com/img/background-banner-dark.svg',
    headerGradient:  'linear-gradient(rgb(71 71 71 / 0%) 0%, rgb(185 185 185 / 5%) 40%);',
    hoverList: 'rgb(255 255 255 / 6%);',
    fontColor: 'white',
    menu: "#394256",
    mediumFont: '#d0d0d0',
    overlayer: '#2c3546;',
    title: 'white',
    toc:{
      bg: 'rgb(57 66 86 / 44%)',
      title: 'white',
      li: '#d0d0d0'
  }
  }
  
  export const darkTheme = { ...dark }
  export const lightTheme = { ...light }