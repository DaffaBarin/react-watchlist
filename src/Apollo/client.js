import {ApolloClient, InMemoryCache} from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://react-watchlist.hasura.app/v1/graphql',
  headers: {
    'x-hasura-admin-secret': '534iADE9rLnGDgEptvPzH0Hyu2AAatB0ESCE30y1q9C1FcEoKftB622H5w7VpqtR'
    
  },
  cache: new InMemoryCache(),
})

export default client;