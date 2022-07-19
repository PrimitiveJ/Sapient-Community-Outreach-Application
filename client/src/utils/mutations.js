import { gql } from "@apollo/client";


export const LOGIN_USER = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            token
            response {
                message
                ok
            }
        }
    }
`

export const POST_EVENT = gql`
    mutation createEvent($author: String!, $inputPayload: EventInput) {
        createEvent(author: $author, inputPayload: $inputPayload) {
            message
            ok
        }
    }
`
