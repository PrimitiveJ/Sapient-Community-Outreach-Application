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
      }
      response {
        message
        ok
      }
    }
  }
`;

export const GET_10_EVENTS = gql`
  query get10Events {
    get10Events {
      _id
      author
      title
      description
    }
  }
`;
