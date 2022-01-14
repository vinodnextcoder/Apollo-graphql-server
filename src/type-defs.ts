import { gql } from 'apollo-server'

export default gql`
type Query {
  post:postData
}
type postData {
  message:String
}
`