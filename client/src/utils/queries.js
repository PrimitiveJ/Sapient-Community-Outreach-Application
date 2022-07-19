
import { gql } from "@apollo/client";

export const GET_USER = gql`
    query getUser($username: String!) {
        getUser(username: $username) {
            username
        }
    }
`




