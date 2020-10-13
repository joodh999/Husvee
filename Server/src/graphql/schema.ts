const gql = String.raw;

const typeDefs = gql`
  input Product {
    name: String
    img: String
    quantity: Int
    price: Int
  }

  type Mutation {
    addproduct(data: [Product!]): String
  }

  type Query {
    hello: String!
    products: [Product]
  }
`;

export { typeDefs };
