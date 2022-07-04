import React from 'react'
import styled from  'styled-components';
import {blue,fontLightColor } from "../utils/colors"
import details from "../assets/DETAILS.png";

function Details() {
  return <div>
    <Section className="defaultMargin">
        <div className="square"></div>
        <div className="info">
            <div className="image">
                <img src={details} alt="" />
            </div>
            <div className="details">
                <div className="border-top">
                    <p>Watch offline version</p>
                    <p>Available to download</p>
                </div>
                <div className="border-top">
                    <p>Genres</p>
                    <ul>
                        <li>Korean</li>
                        <li>TV Thriller</li>
                        <li>TV Dramas</li>
                    </ul>
                </div>
                <div className="border-top">
                    <p>This Show is ....</p>
                    <p>Suspensful</p>
                </div>
                <div className="border-top">
                    <p>cast</p>
                    <ul>
                        <li>Lee Jung-jae</li>
                        <li>Park Hae-soo</li>
                        <li>Gu Jun-pyo</li>
                    </ul>
                </div>
            </div>
        </div>
    </Section>


  </div>;
}


const Section = styled.section`
display: grid;
grid-template-columns: 40% 60%;
color: ${fontLightColor};
.square{
    height: 9rem;
    width: 9rem;
    border: 18px solid ${blue};
    margin:8rem 0 0 7rem;
}
.info{
    display: flex;
    flex-direction: column;
    gap: 3rem;
    img{
        margin-bottom: 4rem;
    }
    .details{
        .border-top{
            border-top: 0.03rem solid ;
            padding: 2rem 0;
            display: flex;
            align-items: center;
        }
        div{
            width:60%;
            display:flex;
            gap:10rem;
            p{
                min-width: 10rem;
            }
            ul{
                list-style-type: none;
            }
        }
    }
}

@media screen and (min-width: 280px ) and (max-width: 1080px){
    margin:0 5vw;
   display:block;
   .info{
       gap:0;
       img{
           width:100%;
           margin-bottom:2rem;
       }
       .details{
           div{
               width:100%;
               gap: 3rem;
               p{
                   min-width: 7rem;
               }
           }
       }
   }
   }
 



`;

export default Details