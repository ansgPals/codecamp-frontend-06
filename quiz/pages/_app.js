import '../styles/globals.css'
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'

export default function MyApp({ Component, pageProps }) {

  const client = new ApolloClient({
    uri: "http://example.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache()

  })

  return (
  <ApolloProvider client={client}>
  
  <Component {...pageProps} />
  
  </ApolloProvider>)
}

