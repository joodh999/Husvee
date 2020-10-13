import { GraphQLServer } from "graphql-yoga";
import mongoose from "mongoose";
require("dotenv").config({ path: __dirname + "/.env" });

import { typeDefs } from "./graphql/schema";
import { resolvers } from "./graphql/resolvers";

mongoose.connect(
  `${process.env.DB}`,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err) => {
    if (err) throw err;
    if (!err) console.log("connected to DB");
  }
);

const options = {
  port: 7000,
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(options, () =>
  console.log("Server is running on http://localhost:8000")
);
