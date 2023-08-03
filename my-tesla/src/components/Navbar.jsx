import React from 'react'
import styled from "styled-components"
const Navbar = () => {
  return (
    <Header>
       <a>
         <img src="/images/tesla.svg"/>
       </a>
         
    </Header>
  )
}

export default Navbar

const Header =styled.div`
   min-height:20px;
   padding:0 20px;
   position:fixed;
   img{
    height:80px;
    width:120px;
   }
`
