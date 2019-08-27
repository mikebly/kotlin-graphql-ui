import App, { Container } from 'next/app'
import Head from 'next/head'
import React, { Component } from 'react'

export default class GraphQLKotlinApp extends App {
  render() {
    const { Component, pageProps } = this.props
      return (
        <Container>
          <Head><title>Serverless GraphQL+Kotlin</title></Head>
          <Component {...pageProps} />
        </Container>
      )
  }
}