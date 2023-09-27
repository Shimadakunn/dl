import React from "react";
import styled from "styled-components"

const HomePage = styled.div`
    overflow: hidden;
    width: 100%;
    height: 95vh;
    position: relative;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    h1{
        pointer-events: none;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        font-size: 15rem;
        @media (max-width: 480px) {
            font-size: 3rem;
        }
        color: #FF69B4;
        &.akira{
            font-family: Akira Outline;
        }
        &.fabrikat{
            top: 20%;
            font-family: Fabrikat;
        }
        &.america{
            top: 80%;
            font-family: Gt America Regular;
        }
    }
`
function Home() {
  return (
    <>
        <HomePage>
            <img src="./img/Dounia White/0.webp"/>
            <h1 className="akira">DOUNIA</h1>
        </HomePage>
    </>
  );
}
export default Home;