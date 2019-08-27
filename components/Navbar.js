import React from "react";
import Styled from "styled-components";
import Link from "next/link";

export default () => {
  return(
    <NavDiv>
      <NavBrand>
        GraphQL-Kotlin
      </NavBrand>
      <NavText>
        <Link href={"/graphiql"}><a>GraphiQL</a></Link>
      </NavText>
    </NavDiv>
  )
}

const NavDiv = Styled.div`
  background-color: #FFD000;
  color: white;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  padding: .5rem 1rem;
`;

const NavBrand = Styled.span`
  padding-top: .3125rem;
  padding-bottom: .3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
`;

const NavText = Styled.span`
  color: hsla(0,0%,100%,.5);
  a{
    color: white;
  }
`;
