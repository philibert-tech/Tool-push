import React from 'react';
import styled from 'styled-components';
import ToolPushTile from '../ToolPushTile/ToolPushTile';
import ContentJson from '../../Content/Content.json';

const ToolsPush = () => (
    <Wrapper className="tools-push">
        {
            ContentJson["tools-push"].map((tile, index) => {
                return <ToolPushTile key={index} bgSrc={tile.bg} iconSrc={tile.icon} text={tile.text} bgAlt={tile.text} iconAlt={tile.text} />
            })
        }
    </Wrapper>
);

const Wrapper = styled.div`
&.tools-push {
  width: 95%;
  margin: auto;
  margin-top: 20px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: flex-start;
  align-content: space-around;
}
`;

export default ToolsPush;