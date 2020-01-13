import { gql } from "apollo-boost";

const LOGIN_USER = gql`
  mutation LoginUser($username: String!, $password: Boolean!) {
    loginUser(input: { username: $username, password: $password })
  }
`;

export default LOGIN_USER;
