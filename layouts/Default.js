import React from "react";
import Styled from "styled-components";
import Navbar from "../components/Navbar";

export default ({children}) => {
  return(
    <div>
      <Navbar />
      <MainDiv>
        { children }
      </MainDiv>
    </div>
  )
};

const MainDiv = Styled.div`
  display: grid;
  justify-items: center;
`;