import { gql } from "apollo-boost";

const CREATE_USER = gql`
  mutation CreateUser($name: String!, $username: String!, $password: String!) {
    createUser(
      input: { name: $name, username: $username, password: $password }
    ) {
      _id
    }
  }
`;

export default CREATE_USER;
