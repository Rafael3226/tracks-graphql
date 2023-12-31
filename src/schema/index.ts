export const typeDefs = `#graphql
type Genre {
  id: ID!
  name: String!
  url: String!
  tracks: [Track!]!
}

type Artist {
  id: ID!
  name: String!
  url: String!
  tracks: [Track!]!
}

type Label {
  id: ID!
  name: String!
  url: String!
  tracks: [Track!]!
}

type Track {
  id: ID!
  name: String!
  artists: [Artist!]!
  isOriginalMix: Boolean!
  length: String
  releaseDate: String!
  bpm: String!
  key: String!
  genre: Genre!
  label: Label!
  url: String!
  price: String!
  artWorkUrl: String!
}

type File {
  id: ID!
  path: String!
  track: Track!
}

type Query {
  tracks: [Track]
  track(id: ID!): Track
  labels: [Label]
  label(id: ID!): Label
  artists: [Artist]
  artist(id: ID!): Artist
  genres: [Genre]
  genre(id: ID!): Genre
  files: [File]
  file(id: ID!): File
}

type Mutation {
  createGenre(genre:CreateGenreInput!): Genre!
}

input CreateGenreInput {
  name: String!
  url: String!
}

`;
