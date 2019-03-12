const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const schema = require('./schema');

const app = express();

// Allow cross-origin
app.use(cors())

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server up and running on port ${port}...np`));