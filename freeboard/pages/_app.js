import '../styles/globals.css'
import {ApolloClient,ApolloProvider, InMemoryCache} from '@apollo/client'

function MyApp({ Component, pageProps }) {

  //모든셋팅

 const client =  new ApolloClient({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
    cache : new InMemoryCache()
  })


  return (
  <ApolloProvider client={client}>
    <Component {...pageProps} />
  </ApolloProvider>
  )
}

export default MyApp