import React,{ useEffect, useRef,useState} from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
import styled from "styled-components";

const Main = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    overflow: hidden;
    position: relative;
`
const Title = styled.h1`
    pointer-events: none;
    z-index: 1;
    font-size: 8rem;
    color: #FF69B4;
    font-family: Akira Outline;
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100%;
    text-align: center;
    transform: translate(-50%,-50%);
    @media (max-width: 480px) {
        font-size: 2.9rem;
    }
`
const Lane = styled.div`
    flex: 1;
    &.left {padding-left: 50px;padding-right: 25px;}
    &.right {padding-right: 50px;padding-left: 25px;}
    @media (max-width: 480px) {
        &.left {padding-left: 10px;padding-right: 5px;}
        &.right {padding-right: 10px;padding-left: 5px;}
    }
`
const Project = styled.div`
    width: 100%;
    &.portrait {aspect-ratio: 1/1.5;}
    &.portraitBis {aspect-ratio: 1/1.75;}
    &.paysage {aspect-ratio: 1.5/1;}
    & > img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        padding-bottom: 50px;
        @media (max-width: 480px) {padding-bottom: 10px;}
    }
`
function Dou() {
    const divRefs = useRef([]);
    useEffect(() => {
        const handleScroll = () => {
        const bodyHeight = document.body.offsetHeight;
        const pageHeight = window.innerHeight;
        divRefs.current.forEach(div => {
            const divHeight = div.offsetHeight;
            const scrollPosition = window.scrollY;
            const posFinal = bodyHeight - divHeight;
            const factor = posFinal/(bodyHeight - pageHeight)*scrollPosition;
            div.style.transform = `translateY(${factor}px)`;
            console.log("body height "+bodyHeight);
            console.log("div height "+divHeight);
            console.log("pos final "+posFinal);
        });
        };
        window.addEventListener('scroll', handleScroll); // Add scroll event listener
        return () => {
        window.removeEventListener('scroll', handleScroll); // Remove scroll event listener on component unmount
        };
    }, []);
    return (
        <Main>
            <Title>EVA CYBORG</Title>
            <Lane className="left">
                <div ref={el => (divRefs.current[0] = el)}>  
                    <Project className="paysage">
                        <img src="./img/Eva Cyborg/0.webp" />
                    </Project>     
                    <Project className="portrait">
                        <img src="./img/Eva Cyborg/1.webp" />
                    </Project> 
                    <Project className="portrait">
                        <img src="./img/Eva Cyborg/2.webp" />
                    </Project> 
                    <Project className="portrait">
                        <img src="./img/Eva Cyborg/3.webp" />
                    </Project> 
                    <Project className="portrait">
                        <img src="./img/Eva Cyborg/4.webp" />
                    </Project> 
                    <Project className="portrait">
                        <img src="./img/Eva Cyborg/5.webp" />
                    </Project> 
                    <Project className="portrait">
                        <img src="./img/Eva Cyborg/6.webp" />
                    </Project>        
                </div>
            </Lane>
            <Lane className="right">
                <div ref={el => (divRefs.current[1] = el)}>
                    <Project className="portrait">
                        <img src="./img/Eva Cyborg/7.webp" />
                    </Project>
                    <Project className="portrait">
                        <img src="./img/Eva Cyborg/8.webp" />
                    </Project> 
                    <Project className="portrait">
                        <img src="./img/Eva Cyborg/9.webp" />
                    </Project> 
                    <Project className="portrait">
                        <img src="./img/Eva Cyborg/10.webp" />
                    </Project> 
                    <Project className="paysage">
                        <img src="./img/Eva Cyborg/11.webp" />
                    </Project> 
                    <Project className="portrait">
                        <img src="./img/Eva Cyborg/12.webp" />
                    </Project>  
                    <Project className="portrait">
                        <img src="./img/Eva Cyborg/13.webp" />
                    </Project> 
                    <Project className="portrait">
                        <img src="./img/Eva Cyborg/14.webp" />
                    </Project> 
                </div>
            </Lane>
        </Main>
    )
}
export default Dou;