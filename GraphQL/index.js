import express from "express"
import { buildSchema } from "graphql"

import { createHandler } from "graphql-http"
 

const app = express()

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`)
 
// The rootValue provides a resolver function for each API endpoint
const root = {
    hello(){
        return "Hello from GraphQL World!"
    }
}
 
app.all(
    "graphql",
    createHandler(
        schema,
        rootValue: root,
    )
)

app.listen("4000",()=>{
console.log("App is Running on Port 4000");
})