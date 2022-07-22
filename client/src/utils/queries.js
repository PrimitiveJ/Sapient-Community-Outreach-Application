import { gql } from "@apollo/client";

export const GET_USER = gql`
  query getUser($username: String!) {
    getUser(username: $username) {
      username
    }
  }
`;

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
`;

export const GET_EVENT = gql`
<<<<<<< HEAD
    query getEvent($id: ID!) {
        getEvent(id: $id) {
            author
            title
            description
            date
            time
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
            }
            response {
                message
                ok
            }
=======
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
>>>>>>> 14509b623769678ff193024575e0a3e47b5015e0
        }
      }
      participants {
        username
      }
      response {
        message
        ok
      }
    }
  }
`;

export const GET_10_EVENTS = gql`
<<<<<<< HEAD

    query get10Events {
        get10Events {
            _id
            author
            title
            description
            date
            time
        }
=======
  query get10Events {
    get10Events {
      _id
      author
      title
      description
>>>>>>> 14509b623769678ff193024575e0a3e47b5015e0
    }
  }
`;
