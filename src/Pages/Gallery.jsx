import React,{ useEffect, useRef,useState} from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
import { Ring } from '@uiball/loaders'
import styled from "styled-components";

const Main = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    overflow: hidden;
    position: relative;
    & .loading{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
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
    filter: blur(4px);
    opacity: 0;
    transition: all 0.5s ease-out;
    &.notloaded{
        opacity: 1;
        filter: blur(0px);
    }
`
const Lane = styled.div`
    flex: 1;
    &.left {padding-left: 50px;padding-right: 25px;}
    &.right {padding-right: 50px;padding-left: 25px;}
    transition: transform 1s ease-out;
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
        filter: blur(4px);
        opacity: 0;
        transition: all 0.5s ease-out;
        &.notloaded{
            opacity: 1;
            filter: blur(0px);
        }
    }
`
function Gallery() {
    const navigate = useNavigate();
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
        });
        };
        window.addEventListener('scroll', handleScroll); // Add scroll event listener
        return () => {
        window.removeEventListener('scroll', handleScroll); // Remove scroll event listener on component unmount
        };
    }, []);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // const timer = setTimeout(() => {
            // setLoading(false);
        // }, 1000);
        // return () => clearTimeout(timer);
        setLoading(false);
      }, []);
    return (
        <Main>
            {/* {loading && (
                <div className="loading">
                    <Ring 
                    size={150}
                    lineWeight={5}
                    speed={2} 
                    color="pink" 
                    />
                </div>)} */}
            <Title className={loading?"":"notloaded"}>GALLERY</Title>
            <Lane className="left">
                <div ref={el => (divRefs.current[0] = el)}>
                    <Project className="portraitBis interactable" onClick={() => {navigate("/anjeli");}}>
                        <img className={loading?"":"notloaded"} src="./img/Anjeli/4.webp" />
                    </Project>
                    <Project className="paysage interactable" onClick={() => {navigate("/doueva");}}>
                        <img className={loading?"":"notloaded"} src="./img/Dou Eva/0.webp" />
                    </Project>
                    <Project className="paysage interactable" onClick={() => {navigate("/douwhite");}}>
                        <img className={loading?"":"notloaded"} src="./img/Dounia White/0.webp" />
                    </Project>
                    <Project className="portrait interactable" onClick={() => {navigate("/egypte");}}>
                        <img className={loading?"":"notloaded"} src="./img/Egypte/5.webp" />
                    </Project>
                    <Project className="portraitBis interactable" onClick={() => {navigate("/evablack");}}>
                        <img className={loading?"":"notloaded"} src="./img/Eva Black/1.webp" />
                    </Project>
                    <Project className="portraitBis interactable" onClick={() => {navigate("/evaclem");}}>
                        <img className={loading?"":"notloaded"} src="./img/Eva Clem/0.webp" />
                    </Project>
                    <Project className="portraitBis interactable" onClick={() => {navigate("/evaclem2");}}>
                        <img className={loading?"":"notloaded"} src="./img/Eva Clem 2/5.webp" />
                    </Project>
                    <Project className="portrait interactable" onClick={() => {navigate("/sarah");}}>
                        <img className={loading?"":"notloaded"} src="./img/Sarah/0.webp" />
                    </Project>
                    
                </div>
            </Lane>
            <Lane className="right">
                <div ref={el => (divRefs.current[1] = el)}>
                    <Project className="portrait interactable" onClick={() => {navigate("/evawhite");}}>
                        <img className={loading?"":"notloaded"} src="./img/Eva White/0.webp" />
                    </Project>
                    <Project className="paysage interactable" onClick={() => {navigate("/evacyborg");}}>
                        <img className={loading?"":"notloaded"} src="./img/Eva Cyborg/0.webp" />
                    </Project>
                    <Project className="portrait interactable" onClick={() => {navigate("/evawitch");}}>
                        <img className={loading?"":"notloaded"} src="./img/Eva Witch/1.webp" />
                    </Project>
                    <Project className="portraitBis interactable" onClick={() => {navigate("/pomme");}}>
                        <img className={loading?"":"notloaded"} src="./img/Pomme/0.webp" />
                    </Project>
                    <Project className="paysage interactable" onClick={() => {navigate("/synda");}}>
                        <img className={loading?"":"notloaded"} src="./img/Synda/0.webp" />
                    </Project>
                    <Project className="portrait">
                        <img className={loading?"":"notloaded"} src="./img/Unborn/0.webp" />
                    </Project>
                </div>
            </Lane>
        </Main>
    )
}
export default Gallery;