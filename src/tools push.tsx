import React from 'react';
import Tile from './Components/Tool-Push-Tile/tool push tile';
import Content from './Content/Content.json';
import styled from 'styled-components';

const ToolsPush = () => (
        <Wrapper>
            {
                Content["Tools-push"].map((tile,index)=>{
                    return   <Tile key={index} bgSrc={tile.bg} iconSrc={tile.icon} children={tile.text} bgAlt={tile.text} iconAlt={tile.text}/>
                })
            }
        </Wrapper>  
);

const Wrapper = styled.div`
width:95%;
margin:auto;
margin-top:20px;
display: flex;
flex-flow: row wrap;
justify-content: space-around;
align-items: flex-start;
align-content: space-around;
`;

export default ToolsPush;