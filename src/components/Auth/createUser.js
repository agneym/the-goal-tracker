import { gql } from "apollo-boost";

const CREATE_USER = gql`
  mutation CreateUser($username: String!, $password: Boolean!) {
    createUser(input: { username: $username, password: $password }) {
      _id
    }
  }
`;

export default CREATE_USER;
