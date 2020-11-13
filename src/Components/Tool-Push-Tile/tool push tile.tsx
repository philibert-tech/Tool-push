import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

interface TileProps {
    bgSrc: string;
    iconSrc: string;
    bgAlt:string;
    iconAlt:string;

}

const Tile: FunctionComponent<TileProps> = ({
    bgSrc,
    iconSrc,
    bgAlt,
    iconAlt,
    children

}) => {
    return (
        <Wrapper>
            <img className="bg" src={bgSrc} alt={bgAlt}/>
            <div className="icon"><img src={iconSrc} alt={iconAlt}/></div>
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
    width:60px;
    height:60px;
    background-color:#fff;
    position :absolute;
    top:35%;
    left:auto;
    z-index:1;
    border: solid 1px teal;
    border-radius:50%;
}

.icon img{
    width:40px;
    margin:10px;
}

.text{
    width:85%;
    margin:auto;
    text-align:center;
    position:relative;
    margin-top:20px;
}

.text p{  
    color:#1e647d; 
    font-size:12px;
}

@media (min-width:700px){   
    width:150px;
    
    .icon{
        width:65px;
        height:65px;
        top:40%;
    }

    .icon img{
        width:43px;
        height:43px;
    }
   
}

@media (min-width:1000px){   
    width:200px; 
    
    .icon{
        width:90px;
        height:90px;
        top:40%;
  
    }

    .icon img{
        width:60px;
        height:60px;
    }

    .text{ 
        width:75%; 
        margin-top:45px;
    }
    .text p{ 
        font-size:14px;
    }

}
`;




export default Tile;