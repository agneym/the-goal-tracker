import { gql } from "apollo-boost";

const GET_GOALS = gql`
  query FindAllGoals {
    allGoals {
      data {
        title
        completed
      }
    }
  }
`;

export default GET_GOALS;
