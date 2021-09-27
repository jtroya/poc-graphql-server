const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    search(query: String!, page: Int = 1): CollectionResponse!
    artworkDetails(id: ID!): ArtworkDetailsResponse!
  }

  type CollectionResponse {
    count: Int
    artObjects: [Artwork!]!
  }

  type ArtworkDetailsResponse {
    id: ID!
    title: String
    description: String
    hasImage: Boolean
    webImage: ImageProps
    longTitle: String
    subTitle: String
    principalMaker: String
    presentingDate: String
  }

  type Artwork {
    id: ID!
    hasImage: Boolean!
    headerImage: ImageProps
    longTitle: String
    principalOrFirstMaker: String
    title: String
  }

  type ImageProps {
    guid: String
    height: Int
    width: Int
    url: String
  }
`;

module.exports = typeDefs;
