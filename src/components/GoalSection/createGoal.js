import { gql } from "apollo-boost";

const CREATE_GOAL = gql`
  mutation CreateGoal($title: String!, $completed: Boolean!) {
    createGoal(input: { title: $title, completed: $completed }) {
      _id
    }
  }
`;

export default CREATE_GOAL;
