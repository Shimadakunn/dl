import React, { useRef, useEffect, useState } from "react";
import { useNavigate,useLocation} from 'react-router-dom';
import styled from "styled-components";

const Head = styled.header`
  height: 5vh;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 2;
  transition: height 0.5s ease-in-out;
  body[data-nav="true"] &{
    height: 10vh;
  }
`
const VisibleMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  
  height: 5vh;
  background-color: white;
`
const UnvisibleMenu = styled.div`
  height: 5vh;
  position: absolute;
  bottom: 0;
  width: 100%;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.25s ease-in-out;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  body[data-nav="true"] &{
    pointer-events: all;
    opacity: 1;
  }
  & > div{
    flex: 0 0 auto;
    padding: 0 2rem;
    
    font-family: Akira Bold;
    color: #FF69B4;
    @media (max-width: 480px) {
      font-size: 0.5rem;
      padding: 0 1rem;
    }
  }
`
const Akira = styled.h1`
    
    font-family: Akira Super Bold;
    font-size: 2rem;
    color: #FF69B4;
    font-weight: 100;
    @media (max-width: 480px) {
      font-size: 1rem;
      position: absolute;
      left: 5%;
    }
`
const Fabrikat = styled.h1`
    font-family: Fabrikat;
    font-size: 15rem;
    color: white;
    -webkit-text-stroke: 1px black;
    text-stroke: 1px black;
`
const America = styled.h1`
    font-family: Gt America Regular;
    font-size: 10rem;
    color: white;
    -webkit-text-stroke: 1px black;
    text-stroke: 1px black;
`
const Menu = styled.div`
    
    position: absolute;
    right: 0;
    padding: 0 2rem;
    font-family: Akira Bold;
    color: #FF69B4;
    @media (max-width: 480px) {
      font-size: 0.5rem;
      right: 5%;
    }
`

function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  }, [pathname]);
  return (
    <Head>
      <VisibleMenu>
        <Akira className="interactable" onClick={() => {document.body.dataset.nav = "false";navigate("/");}}>DOUNIA 00</Akira>
        <Menu className="interactable" onClick={() => {document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";}}>
          Menu
        </Menu>
      </VisibleMenu>
      <UnvisibleMenu>
        <div className="interactable" onClick={() => {document.body.dataset.nav = "false";navigate("/gallery");}}>Gallery</div>
        <div className="interactable" onClick={() => {document.body.dataset.nav = "false";navigate("/pricing");}}>Pricing</div>
        <div className="interactable" onClick={() => {document.body.dataset.nav = "false";navigate("/contact");}}>Contact</div>
      </UnvisibleMenu>
    </Head>
  );
}

export default Header;