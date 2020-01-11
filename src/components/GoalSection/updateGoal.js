import { gql } from "apollo-boost";

const UPDATE_GOAL = gql`
  mutation UpdateGoal($id: ID!, $title: String!, $completed: Boolean!) {
    updateGoal(id: $id, data: { title: $title, completed: $completed }) {
      _id
    }
  }
`;

export default UPDATE_GOAL;
