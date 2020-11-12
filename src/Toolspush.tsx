import React from 'react';
import Tile from './Components/Tool-Push-Tile/ToolPushTile';
import Content from './Content/Content.json';
import styled from 'styled-components';

const ToolsPush = () => {
    return (
        <Wrapper>
            {
                Content["Tools-push"].map((tile,index)=>{
                    return   <Tile key={index} bgSrc={tile.bg} iconSrc={tile.icon} children={tile.text}/>
                })
            }
        </Wrapper>
    );
}

const Wrapper = styled.div`
width:100%;
padding:10px;

display: flex;
flex-flow: row wrap;
justify-content: space-around;
align-items: flex-start;
align-content: space-around;
`;

export default ToolsPush;