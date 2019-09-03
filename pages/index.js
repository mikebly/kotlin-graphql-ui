import React, { Component } from "react"
import fetch from "node-fetch"
import { createHttpLink } from "apollo-link-http"
import { InMemoryCache } from "apollo-cache-inmemory"
import Styled from "styled-components"
import ApolloClient from "apollo-client"
import gql from "graphql-tag"
import Default from "../layouts/Default"
import { ApolloProvider, useQuery } from "@apollo/react-hooks";

const client = new ApolloClient({
  link: createHttpLink({
    uri: `http://localhost:8080/graphql`,
    fetch: fetch
  }),
  cache: new InMemoryCache()
})

const GET_ALL_CLAIMS = gql`
  {
    getAllClaims {
      claimId
      lossDate
    }
  }
`

function Claims() {
  const { loading, error, data } = useQuery(GET_ALL_CLAIMS)
  if (loading) return "Getting claims data..."
  if (error) return `Oh no! Error: ${error}`
  console.log(data)
  const { getAllClaims: claims } = data
  return (
    <ul>
      {
        claims.map((claim,index) => { return (
          <li key={index}>Id:{claim.claimId}, Loss Date: {claim.lossDate}</li>
        )})
      }
    </ul>
  )
}

class Index extends Component {

  state = {
      claims: []
  }

  render() {
    return(
      <ApolloProvider client={client}>
        <Default>
          <h1>Claims</h1>
          <Claims />
        </Default>
      </ApolloProvider>
      )
  }
}

export default Index