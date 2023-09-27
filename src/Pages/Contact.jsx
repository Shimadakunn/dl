import React from "react";
import { useNavigate} from 'react-router-dom';
import styled from "styled-components";
import Mail from '../Components/SVG/MailSVG'
import Phone from '../Components/SVG/PhoneSVG'
import Instagram from '../Components/SVG/InstagramSVG'

const Main = styled.div`
    font-family: Roboto Thin, sans-serif;
    font-weight: 1000;
    width: 100%;
    height: 95vh;
    max-width: 1200px;
    margin: auto;
    position: relative;
    font-size: 1.5rem;
    @media (max-width: 480px) {
        font-size: 1rem;
        padding: 0 1rem;
    }
    button{
        top: 85%;
        left: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
        color: #FF69B4;
        width: 10%;
        height: 5%;
        font-size: 1.5rem;
        border: 1px solid black;
        background-color: white; 
        border-radius: 5px;
        @media (max-width: 480px) {
            top: 90%;
            font-size: 1rem;
            width: 20%;
        }
    }
    .or{
        top: 14%;
        left: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
        @media (max-width: 480px) {
            display: none;
        }
    }
`
const InfoContainer = styled.div`
    width: 50%;
    height: 100%;
    position: relative;
    h1{
        position: absolute;
        top: 10%;
        left: 5%;
        @media (max-width: 480px) {
            font-size: 1.5rem;
        }
    }
    h2{
        position: absolute;
        left: 5%;
        &.Hmail{
            top: 35%;
            @media (max-width: 480px) {
                top: 30%;
            }
        }
        &.Hinsta{
            top: 65%;
            @media (max-width: 480px) {
                top: 60%;
            }
        }
    }
    div{
        position: absolute;
        left: 5%;
        margin-top: 10px;
        &.SVGmail{
            top: 40%;
            @media (max-width: 480px) {
                top: 35%;
            }
        }
        &.SVGinsta{
            top: 70%;
            @media (max-width: 480px) {
                top: 65%;
            }
        }
    }
    a{
        position: absolute;
        left: 10%;
        @media (max-width: 480px) {left: 20%;}
        margin-top: 10px;
        color: #FF69B4;
        text-decoration: none;
        &.mail{
            top: 40%;
            @media (max-width: 480px) {
                top: 35%;
            }
        }
        &.insta{
            top: 70%;
            @media (max-width: 480px) {
                top: 65%;
            }
        }
    }
`
const ContactContainer = styled.div`
    width: 50%;
    height: 100%;
    right: 0;
    top: 0;
    position: absolute;
    @media (max-width: 480px) {
        right: 5%;
    }
    h1{
        position: absolute;
        top: 10%;
        right: 5%;
        @media (max-width: 480px) {
            font-size: 1.5rem;
        }
    }
    h2{
        position: absolute;
        right: 5%;
        &.Hname{
            top: 30%;
            @media (max-width: 480px) {
                top: 25%;
            }
        }
        &.Hmail{
            top: 50%;
            @media (max-width: 480px) {
                top: 45%;
            }
        }
        &.Hmessage{
            top: 70%;
            @media (max-width: 480px) {
                top: 65%;
            }
        }
    }
    input{
        position: absolute;
        right: 5%;
        margin-top: 10px;
        width: 40%;
        @media (max-width: 480px) { 
            width: 75%;
        }
        &.Iname{
            top: 35%;
            @media (max-width: 480px) {
                top: 30%;
            }
        }
        &.Imail{
            top: 55%;
            @media (max-width: 480px) {
                top: 50%;
            }
        }
    }
    textarea{
        margin-top: 10px;
        position: absolute;
        right: 5%;
        top: 75%;
        width: 40%;
        height: 10%;
        @media (max-width: 480px) { 
            width: 75%;
            height: 7%;
            top: 70%;
        }
    }
`
function Contact() {
  function sendMail(){
    const serviceID = 'service_qiv64ci';
    const templateID = 'template_e7swohr';
    const privateKey = 'MbO4swYDQQEn9wQmR';
    var nameInput = document.getElementById("name");
    var mailInput = document.getElementById("mail");
    var messageInput = document.getElementById("message");
    if (nameInput && mailInput && messageInput) {
        var params = {
            name: nameInput.value,
            mail: mailInput.value,
            message: messageInput.value
        };
    }
    if(!nameInput.value === false && !mailInput.value === false && !messageInput.value === false){
        emailjs.send(serviceID, templateID, params, privateKey)
        .then(
            res => {
                document.getElementById("name").value = "";
                document.getElementById("mail").value = "";
                document.getElementById("message").value = "";
                console.log(res);
                alert("Message sent successfully!");
            }
        )
        .catch((err) => console.log(err));
    }else{
        console.log("Name:"+nameInput.value+" Mail:"+mailInput.value+" Message:"+messageInput.value);
        console.log("Name:"+!nameInput.value+" Mail:"+!mailInput.value+" Message:"+!messageInput.value);
        alert("Please fill all the fields!");
    }
}
  return (
    <Main>
        <h1 className="or">Or</h1>
        <InfoContainer>
            <h1>Get in touch</h1>
            <h2 className="Hmail">Write me</h2>
            <a href="mailto:example@example.com" className = "mail interactable">limamdounia75@gmail.com</a>
            <div className = "SVGmail"><Mail fill="#FF69B4" width="17.5"/></div>
            <h2 className = "Hinsta">Follow me</h2>
            <a href="https://www.instagram.com/yakamuzoseiya"  target="_blank" className = "insta interactable">Instagram</a>
            <div className ="SVGinsta"><Instagram fill ="#FF69B4" width="15"/></div>
        </InfoContainer>
        <ContactContainer>
            <h1 className ="send">Send me Mail</h1>
            <h2 className="Hname">Your name</h2>
            <input type="text" className = "Iname" id = "name" placeholder="Name"/>
            <h2 className = "Hmail">Your mail</h2>
            <input type="mail" className = "Imail" id = "mail" placeholder="Mail"/>
            <h2 className = "Hmessage">Your message</h2>
            <textarea type="text" className = "Imessage" id = "message" placeholder="Message"/>
        </ContactContainer>
        <button className="interactable" onClick = {sendMail}>Send</button>
    </Main>
  );
}
export default Contact;