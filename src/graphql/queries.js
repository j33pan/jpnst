/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getJPFood = /* GraphQL */ `
  query GetJPFood($id: ID!) {
    getJPFood(id: $id) {
      id
      title
      description
      image
      author
      featured
      price
      createdAt
      updatedAt
    }
  }
`;
export const listJPFoods = /* GraphQL */ `
  query ListJPFoods(
    $filter: ModelJPFoodFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJPFoods(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        image
        author
        featured
        price
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      user
      date
      total
      createdAt
      updatedAt
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user
        date
        total
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
