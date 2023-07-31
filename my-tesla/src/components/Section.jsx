import React from 'react';
import styled from "styled-components";
const Section = () => {
  return (
    <Wrap>
        <ItemText>
          <h1>Model 3</h1>
          <p>Starting at $32,740</p>
          <p> After Federal Tax Credit</p>
        </ItemText>
        <Buttons>
          <ButtonDiv>
            <LeftButton>Explore inventory</LeftButton>
            <RightButton>Custom Order</RightButton>
          </ButtonDiv>
          <DownArrow src="/images/down-arrow2.svg"/>
        </Buttons>

    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
 width:100%;
 height:110vh;
 background-size:cover;
 background-position:center;
 background-repeat:no-repeat;
 background-image:url('/images/Model-3.avif')
`
const ItemText = styled.div`
  text-align:center;
  padding-top:5vh;
`
const ButtonDiv=styled.div`
    display:flex;
    margin-bottom:5px;
    @media (max-width:768px){
        flex-direction:column;
    }

`
const RightButton=styled.div`
    background-color: rgb(23, 26, 32, 0.8);
    height:40px;
    width:256px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:100px;
    opacity:0.85;
    text-transform:uppercase;
    font-size:12px;
    margin:8px;
    cursor:pointer;

`
const LeftButton=styled(RightButton)`
    background-color:white;
    color:black;
    opacity:0.65;
`
const DownArrow=styled.img`
    height:20px;
    // overflow-x: hidden;
    animation: animation infinite 1.4s
    
`
const Buttons=styled.div`
      
`