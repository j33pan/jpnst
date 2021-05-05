/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getJPOrder = /* GraphQL */ `
  query GetJPOrder($id: ID!) {
    getJPOrder(id: $id) {
      id
      owner
      total
      note
      email
      createdAt
      updatedAt
    }
  }
`;
export const listJPOrders = /* GraphQL */ `
  query ListJPOrders(
    $filter: ModelJPOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJPOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        total
        note
        email
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getJPFoodOrder = /* GraphQL */ `
  query GetJPFoodOrder($id: ID!) {
    getJPFoodOrder(id: $id) {
      id
      food_id
      order_id
      owner
      order {
        id
        owner
        total
        note
        email
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      food {
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
  }
`;
export const listJPFoodOrders = /* GraphQL */ `
  query ListJPFoodOrders(
    $filter: ModelJPFoodOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJPFoodOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        food_id
        order_id
        owner
        order {
          id
          owner
          total
          note
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        food {
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
      nextToken
    }
  }
`;
export const getJPNote = /* GraphQL */ `
  query GetJPNote($id: ID!) {
    getJPNote(id: $id) {
      id
      total
      note
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listJPNotes = /* GraphQL */ `
  query ListJPNotes(
    $filter: ModelJPNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJPNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        total
        note
        createdAt
        updatedAt
        owner
      }
      nextToken
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
