import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

interface TileProps {
    bgSrc: string;
    iconSrc: string;

}

const Tile: FunctionComponent<TileProps> = ({
    bgSrc,
    iconSrc,
    children

}) => {
    return (
        <Wrapper>
            <img className="bg" src={bgSrc} />
            <div className="icon"><img src={iconSrc} /></div>
            <div className="text"><p>{children}</p></div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width:135px;
    background-color:#fff;
    text-align:center;
    position:relative;
    margin-bottom:20px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    align-content: space-around;

.bg{
    width:100%;
    
}

.icon{
    width:45px;
    height:45px;
    background-color:#fff;
    position :absolute;
    top:40%;
    left:auto;
    z-index:1;
    border: solid 1px teal;
    border-radius:50%;
    padding:10px;
}

.icon img{
    width:100%;
}

.text{
    width:85%;
    margin:auto;
    text-align:center;
    margin-top:40px;
}

.text p{  
    color:#1e647d; 
    font-size:12px;
}

`;




export default Tile;