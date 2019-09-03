import React, { Component } from "react"
import Styled from "styled-components"
import ApolloClient, { gql } from "apollo-boost"
// import { ApolloProvider } from "react-apollo"
import Default from "../layouts/Default"

class Index extends Component {

  state = {
      claims: []
  }

  async componentDidMount() {
    const client = new ApolloClient({
      uri: `http://localhost:8080/graphql`
    })

    const results = await client.query({
      query: gql`
        {
          getAllClaims {
            claimId
            lossDate
          }
        }
      `
    })

    // Query returns a data object with each query as a separate object
    const { data } = results
    console.log("Return results for the following queries:")
    for(let key in data) {
      if (data.hasOwnProperty(key)) {
        console.log(key)
        console.log(data[key])
        let newClaims = data[key]
        console.log(newClaims)
        for (let claim in newClaims) {
          this.setState({ claims: [...this.state.claims, newClaims[claim]] })
        }
      }
    }
  }

  render() {
    return(
      <Default>
        <h1>Claims</h1>
        <ul>
          {
            this.state.claims.map((claim,index) => { return (
              <li key={index}>Id:{claim.claimId}, Loss Date: {claim.lossDate}</li>
            )})
          }
        </ul>
      </Default>
      )
  }
}

export default Index