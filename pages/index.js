import React, { Component } from "react";
import Styled from "styled-components";
// import ApolloClient from "apollo-boost";
// import { ApolloProvider } from "react-apollo";
import Default from "../layouts/Default";

class Index extends Component{

  async componentDidMount(){
    // const client = new ApolloClient({
    //   uri: `https://localhost:8080/graphql`
    // })
  }

  render() {
    return(
      <Default>
        <h1>Claims</h1>
      </Default>
      )
  }
}

export default Index;