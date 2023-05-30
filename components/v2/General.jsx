import styled from "styled-components";
import HeroBg from "../../assets/hero-bg.png";

export const ContainerFluid = styled.div`
  width: 100%;
  padding: 0 1rem;
`;

export const Container = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1248px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 24px;
  padding-left: 24px;
  &.d-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  color: #fff;
  padding: 10px 0;
  z-index: 100;
  transition: all 0.3s ease-in-out;
  @media (min-width: 1400px) {
    .nav-width {
      max-width: 1450px;
    }
  }

  &.scrolled {
    background-color: #394960;
    padding: 5px 0;
    border-bottom: 1px solid #727272;
    .logo-container {
      width: 130px;
    }
  }
  .d-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media (min-width: 768px) {
    padding: 1rem 0;
  }
`;

export const NavList = styled.ul`
  display: none;
  margin: 0;
  padding: 0;
  .signin-btn {
    display: flex;
    align-items: center;
    color: white;
    gap: 1rem;
    &:before {
      content: "";
      display: block;
      width: 8px;
      height: 8px;
      background-color: #d92f00;
      border-radius: 50%;
    }
  }
  @media (min-width: 768px) {
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    gap: 1rem;
    font-weight: 500;
    font-size: 0.9em;
  }
`;

export const MenuBtn = styled.button`
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const DarkModeBtn = styled.button`
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  border-radius: 50%;
  padding: 5px;
  border: none;
  color: white;
  background-color: #52768173;
  &:hover {
    background-color: #606a8a;
  }
`;

export const HeroContainer = styled.section`
  background-image: url(${HeroBg.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  .d-flex {
    flex-wrap: wrap;
  }
  .info-container {
    min-width: 300px;
    max-width: 520px;
  }

  .img-container {
    //min-width: 210px;
    margin: 0 auto;
    max-width: 200px;
    box-shadow: 0px 0px 30px #316473;
    border-radius: 28px;
    animation: fadeInUp 3s;
  }
  @media (min-width: 768px) {
    .info-container {
      text-align: left;
    }
    .img-container {
      margin: 0;
    }
  }
`;

export const HeaderH1 = styled.h1`
  font-size: 32px;
  margin-top: 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  animation: fadeInDown 1s forwards;
  @media (min-width: 768px) {
    font-size: 45px;
    justify-content: flex-start;
    &:before {
      position: absolute;
      content: "";
      width: 3.5rem;
      height: 3.5rem;
      background-color: #738293;
      border-radius: 50%;
      top: 5px;
      z-index: -1;
      left: -12px;
    }
  }
  @media (min-width: 1524px) {
    font-size: 48px;
  }
`;

export const HeaderH2 = styled.h2`
  font-size: 24px;
  //letter-spacing: 0.5px;
  position: relative;
  &.circle-title {
    &:before {
        content: "";
        position: absolute;
        width: 60px;
        height: 60px;
        //background-color: #cde0e6;  
        background-color: #6090a040;     
        border-radius: 50%;
        margin-left: -1rem;
        top: -20%;
        z-index: -1;
    }
  }

  @media (min-width: 768px) {
    font-size: 30px;
  }
  c
`;

export const FeaturedLabel = styled.span`
  background-color: white;
  border-radius: 34px;
  color: #384a60;
  font-size: 0.9em;
  padding: 0px 1.4rem;
  font-family: serif;
  font-weight: 400;
  font-style: italic;
  letter-spacing: -1px;
  margin: 0 0.5rem;
`;

export const DisplayParagraph = styled.p`
  font-size: 18px;
  color: inherit;
  font-weight: 400;
  @media (min-width: 800px) {
    font-size: 22px;
  }
`;

export const Underline = styled.span`
  background-image: linear-gradient(
    transparent 87%,
    #d93000 0px,
    #d93000 94%,
    transparent 0px
  );
  margin: 1rem 0;
  letter-spacing: -0.5px;
`;

export const Section = styled.section`
  padding: 4rem 0;
  &.vh-70 {
    min-height: 70vh;
  }
  p {
    font-size: 20px;
    line-height: 1.5;
  }
  &.about-section {
    background-color: var(--section-landing-bg);
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  width: 100%;
  max-width: 400px;
  border-radius: 5px;
  font-size: 0.85em;
  background-color: #fafafa;
  border-bottom: 2px solid #afafafd1;
  input {
    border: none;
    padding: 7px;
    font-size: 1rem;
    width: 100%;
    background-color: transparent;
    color: var(--font-color);
    &:focus {
      outline: none;
    }
  }
  .search-icon {
    font-size: 35px;
    margin-right: 7px;
  }
`;

export const BtnLabel = styled.div`
  padding: 6px 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #e6e6e6eb;
  font-weight: 700;
  border-radius: 5px;
  fonr-size: 0.9em;
  height: 40px;
  color: #202020;
  span {
    display: none;
  }
  @media (min-width: 768px) {
    span {
      display: block;
    }
  }
`;

export const ResultsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  list-style: none;
  padding: 0;
  gap: 1rem;
  margin-top: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(120px, 155px));
  }
`;

export const ResultItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 5px;
  //box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  background-color: var(--overlayer);
  height: 8rem;
  //font-weight: 600;
  transition: all 0.2s ease-in-out 0s;
  color: var(--medium-font);
  font-size: 0.93em;
  border: 1px solid #e6e6e6;
  //box-shadow: 0 0 18px #39496038;
  a {
    display: flex;
  }
  img {
    width: 100%;
    max-width: 300px;
    border-radius: 5px;
  }
  .title-card {
    //font-size: 1.2rem;
    //font-weight: 700;
    text-align: center;
  }
  &:hover {
    //background-color: rgb(227 234 240);
    background-color: rgb(149 165 194 / 12%);
    transform: scale(1.08);
  }
  @media (min-width: 768px) {
    height: 9rem;
  }
`;

export const CheatsheetComponent = styled.article`
  margin-top: 5rem;
  h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    @media (min-width: 768px) {
      font-size: 2rem;
    }
  }

  h2 {
    margin-bottom: 0rem;
    font-weight: 400;
    &::before {
      content: "#";
      font-weigth: 700;
      margin-right: 10px;
    }
  }

  .cheatsheet-header {
    background: #52698b;
    color: white;
    font-size: 1.1rem;
    padding: 7px 18px;
  }
  .three-section {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
  }
  .content-block {
    padding: 0 10px;
  }
`;
