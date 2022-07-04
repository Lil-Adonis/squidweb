import React from 'react'
import styled from  'styled-components';
import {fontLightColor } from "../utils/colors"

function Footer() {
  return <FooterContainer className="defaultMargin">
    <ul>
      <li>
        <a href="#">FAQ</a>
      </li>
      <li>
        <a href="#">HELP CENTER</a>
      </li>
      <li>
        <a href="#">ACCOUNT</a>
      </li>
      <li>
        <a href="#">MEDIA CENTER</a>
      </li>
      <li>
        <a href="#">INVESTOR RELATION</a>
      </li>
      <li>
        <a href="#">JOBS</a>
      </li>
      <li>
        <a href="#">WAYS TO WATCH</a>
      </li>
      <li>
        <a href="#">TERMS OF USE</a>
      </li>
      <li>
        <a href="#">PRIVACY</a>
      </li>
      <li>
        <a href="#">COOKIE PREFRENCES</a>
      </li>
      <li>
        <a href="#">CORPRATION INFORMATION</a>
      </li>
      <li>
        <a href="#">CONTACT US</a>
      </li>
      <li>
        <a href="#">SPEED TEST</a>
      </li>
      <li>
        <a href="#">LEGAL NOTICES</a>
      </li>
      <li>
        <a href="#">ONLY ON NETFLIX</a>
      </li>
    </ul>
  </FooterContainer>;
}


const FooterContainer = styled.footer`
display:flex;
justify-content:center;
border-top:2px solid ${fontLightColor};
margin:0 5rem;
pading-top: 5rem;
ul{
  display:grid;
  grid-template-columns: repeat (3, 1fr);
  grid-template-rows:repeat(5, 1fr);
  column-gap:18rem;
  row-gap:2rem;
  list-style-type:none;
  li{
    a{
      text-transform:uppercase;
      color:${fontLightColor};
      text-decoration:none;
      transition: 0.3s ease-in-out;
      &:hover{
        color:white;
      }
    }
  }
}



`;

export default Footer