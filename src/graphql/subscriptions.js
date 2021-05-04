/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateJPOrder = /* GraphQL */ `
  subscription OnCreateJPOrder($owner: String) {
    onCreateJPOrder(owner: $owner) {
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
export const onUpdateJPOrder = /* GraphQL */ `
  subscription OnUpdateJPOrder($owner: String) {
    onUpdateJPOrder(owner: $owner) {
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
export const onDeleteJPOrder = /* GraphQL */ `
  subscription OnDeleteJPOrder($owner: String) {
    onDeleteJPOrder(owner: $owner) {
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
export const onCreateJPFoodOrder = /* GraphQL */ `
  subscription OnCreateJPFoodOrder {
    onCreateJPFoodOrder {
      id
      food_id
      order_id
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
export const onUpdateJPFoodOrder = /* GraphQL */ `
  subscription OnUpdateJPFoodOrder {
    onUpdateJPFoodOrder {
      id
      food_id
      order_id
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
export const onDeleteJPFoodOrder = /* GraphQL */ `
  subscription OnDeleteJPFoodOrder {
    onDeleteJPFoodOrder {
      id
      food_id
      order_id
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
export const onCreateJPNote = /* GraphQL */ `
  subscription OnCreateJPNote($owner: String!) {
    onCreateJPNote(owner: $owner) {
      id
      total
      note
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateJPNote = /* GraphQL */ `
  subscription OnUpdateJPNote($owner: String!) {
    onUpdateJPNote(owner: $owner) {
      id
      total
      note
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteJPNote = /* GraphQL */ `
  subscription OnDeleteJPNote($owner: String!) {
    onDeleteJPNote(owner: $owner) {
      id
      total
      note
      createdAt
      updatedAt
      owner
    }
  }
`;
