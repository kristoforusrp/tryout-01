const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema, messageType } = require('graphql');


// interface Character {
//   id: ID!
//   name: String!
//   friends: [Character]
//   appearsIn: [Episode]!
// }
//
// type Hero implements Character {
//   id: ID!
//   name: String!
//   friends: [Character]
//   appearsIn: [Episode]!
//   starships: [Starship]
//   totalCredits: Int
// }

// class RandomHero {
//   constructor(numHero) {
//     super()
//     this.numHero = numHero
//   }
//
//   getRandomHero() {
//     // todo create method to select random hero from the data
//   }
// }

// const root = { getHero: () => //Return array based user input }

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const root = { hello: () => 'Hello Kris!' };

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4040, () => console.log('Now browse to localhost:4040/graphql'));
