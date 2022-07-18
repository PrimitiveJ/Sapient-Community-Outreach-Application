import gql from "graphql-tag";

//QUERIES
export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      eventCount
      savedEvents{
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
`;