import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

/**
* ToolPushTile  Component
*@param {string} bgSrc -holds the src attribute of the background image
*@param {string} iconSrc- holds the src attribute of the icon
*@param {string} bgAlt -holds alt attribute for backgroung image
*@param {string} conAlt -holds alt attribute for icon
*@param {string} text -holds the text
*/

interface ToolPushTileProps {
  bgSrc: string;
  iconSrc: string;
  bgAlt: string;
  iconAlt: string;
  text: string;
}

const ToolPushTile: FunctionComponent<ToolPushTileProps> = ({
  bgSrc,
  iconSrc,
  bgAlt,
  iconAlt,
  text }) => {
  return (
    <Wrapper className="push-tile">
      <div className="push-tile__bg"><img src={bgSrc} alt={bgAlt} /></div>
      <div className="push-tile__icon"><img src={iconSrc} alt={iconAlt} /></div>
      <div className="push-tile__text"><p>{text}</p></div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
&.push-tile {
  width: 135px;
  background-color: #fff;
  text-align: center;
  position: relative;
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  align-content: space-around;
  cursor: pointer;
}
@media (min-width:768px) {   
  &.push-tile {
    width: 150px; 
  }   
}
@media (min-width:1024px) {   
  &.push-tile {
    width: 200px; 
  } 
} 
  
.push-tile__bg {
  width: 100%; 
  overflow:hidden;  

}
.push-tile__bg img {
  width: 100%;
    :hover {
    transform:scale(1.1); 
    transition: transform 1s;          
  } 
}


.push-tile__icon {
  width: 60px;
  height: 60px;
  background-color: #fff;
  position: absolute;
  top: 35%;
  left: auto;
  z-index: 1;
  border: solid 1px teal;
  border-radius: 50%;
}
@media (min-width:768px) {   
  .push-tile__icon {
    width: 65px;
    height: 65px;
    top: 40%;
  } 
}
@media (min-width:1024px) {       
  .push-tile__icon {
    width: 90px;
    height: 90px;
    top: 40%; 
  }
}

.push-tile__icon img {
  width: 40px;
  margin: 10px;
}
@media (min-width:768px) {   
  .push-tile__icon img {
    width: 43px;
    height: 43px;
  }  
}
@media (min-width:1024px) {   
  .push-tile__icon img {
    width: 60px;
    height: 60px;
  }
}

.push-tile__text {
  width: 85%;
  margin: auto;
  text-align: center;
  position: relative;
  margin-top: 20px;
}
@media (min-width:1024px) {   
  .push-tile__text { 
    width: 75%; 
    margin-top: 45px;
  }
}

.push-tile__text p {  
  color: #1e647d; 
  font-size: 12px;
}
@media (min-width:1024px) {   
  .push-tile__text p { 
    font-size: 14px;
  }
}
`;

export default ToolPushTile;