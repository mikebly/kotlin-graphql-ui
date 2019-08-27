import React, { Component } from "react";
import Styled from "styled-components";
import ApolloClient, { gql } from "apollo-boost";
// import { ApolloProvider } from "react-apollo";

import Default from "../layouts/Default";

class Index extends Component{

  async componentDidMount(){
    const client = new ApolloClient({
      uri: `http://localhost:8080/graphql`
    })

    const results = await client.query({
      query: gql`
        {
          getAllClaims{
            claimId
          }
        }
      `
    })
    // Query returns a data object with each query as a separate object
    const { data } = results
    console.log("Return reults for the following queries:")
    for(let key in data) {
      console.log(key)
      console.log(data[`${key}`])
    }
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