
import { gql } from "@apollo/client";

export const GET_USER = gql`
    query getUser($username: String!) {
        getUser(username: $username) {
            username
        }
    }
`

export const GET_SELF = gql`
    query getSelf {
        getSelf {
            username
            response {
                message
                ok
            }
        }
    }
`

export const GET_EVENT = gql`
    query getEvent($id: ID!) {
        getEvent(id: $id) {
            author
            title
            description
            location {
                city
                state
            }
            comments {
                author
                content
                replies {
                    author
                    content
                }
            }
            participants {
                username
                password
            }
            response {
                message
                ok
            }
        }
    }
`
