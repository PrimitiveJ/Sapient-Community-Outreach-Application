// IMPORTS
import {gql} from "@apollo/client";

// LOGIN MUTATION
export const LOGIN_USER = gql `
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// ADD USER MUTATION
export const ADD_USER = gql `
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        eventCount
        savedEvents {
          eventId
          title
          description
          date
          image
          location{
            city
            state
            zip
          }
          organizer
          businessSponsor
          comments {
            commentText
            username
            reactions {
                reactionBody
                username
            }
          }

          
        }
      }
    }
  }
`;

// SAVE Event MUTATION
export const SAVE_EVENT = gql `
  mutation saveEvent($newEvent: savedEvent!) {
    saveEvent(newEvent: $newEvent) {
      _id
      username
      email
      savedEvents {
        eventId
        title
        description
        image
        date
        location{
            city
            state
            zip
        }
        organizer
        businessSponsor
        comments {
            commentText
            username
            reactions {
                reactionBody
                user
            }
        }
        participants
      }
    }
  }
`;

// REMOVE EVENT MUTATION
export const REMOVE_EVENT = gql `
  mutation removeEvent($eventId: ID!) {
    removeEvent(eventId: $eventId) {
      _id
      username
      email
      savedEvents {
        eventId
        title
        description
        image
        date
        location{
            city
            state
            zip
        }
        organizer
        businessSponsor
        comments {
            commentText
            username
            reactions {
                reactionBody
                username
            }
        }
        participants
    }
  }
  }
`;

export const CREATE_EVENT = gql `
  mutation createEvent($title: String!, $description: String!, $image: String!, $date: Date!, $location: Object!, $organizer: String!, $businessSponsor: String, $comments:[Object], participants:[Object]) {
    createEvent(title: $username, description: $description, image: $image, date: $date, location: [$location], organizer: $organizer, businessSponsor: $businessSponsor, comments: [$comments], participants: [$participants]){
        event {
        _id
        title
        description
        image
        date
        location{
            city
            state
            zip
        }
        organizer
        businessSponsor
        comments {
            commentText
            username
            reactions {
                reactionBody
                username
            }
        }
        participants
      }
    }
    }
