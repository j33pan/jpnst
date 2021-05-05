/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const processOrder = /* GraphQL */ `
  mutation ProcessOrder($input: ProcessOrderInput!) {
    processOrder(input: $input)
  }
`;
export const createJPFood = /* GraphQL */ `
  mutation CreateJPFood(
    $input: CreateJPFoodInput!
    $condition: ModelJPFoodConditionInput
  ) {
    createJPFood(input: $input, condition: $condition) {
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
export const updateJPFood = /* GraphQL */ `
  mutation UpdateJPFood(
    $input: UpdateJPFoodInput!
    $condition: ModelJPFoodConditionInput
  ) {
    updateJPFood(input: $input, condition: $condition) {
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
export const deleteJPFood = /* GraphQL */ `
  mutation DeleteJPFood(
    $input: DeleteJPFoodInput!
    $condition: ModelJPFoodConditionInput
  ) {
    deleteJPFood(input: $input, condition: $condition) {
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
export const createJPOrder = /* GraphQL */ `
  mutation CreateJPOrder(
    $input: CreateJPOrderInput!
    $condition: ModelJPOrderConditionInput
  ) {
    createJPOrder(input: $input, condition: $condition) {
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
export const updateJPOrder = /* GraphQL */ `
  mutation UpdateJPOrder(
    $input: UpdateJPOrderInput!
    $condition: ModelJPOrderConditionInput
  ) {
    updateJPOrder(input: $input, condition: $condition) {
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
export const deleteJPOrder = /* GraphQL */ `
  mutation DeleteJPOrder(
    $input: DeleteJPOrderInput!
    $condition: ModelJPOrderConditionInput
  ) {
    deleteJPOrder(input: $input, condition: $condition) {
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
export const createJPFoodOrder = /* GraphQL */ `
  mutation CreateJPFoodOrder(
    $input: CreateJPFoodOrderInput!
    $condition: ModelJPFoodOrderConditionInput
  ) {
    createJPFoodOrder(input: $input, condition: $condition) {
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
export const updateJPFoodOrder = /* GraphQL */ `
  mutation UpdateJPFoodOrder(
    $input: UpdateJPFoodOrderInput!
    $condition: ModelJPFoodOrderConditionInput
  ) {
    updateJPFoodOrder(input: $input, condition: $condition) {
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
export const deleteJPFoodOrder = /* GraphQL */ `
  mutation DeleteJPFoodOrder(
    $input: DeleteJPFoodOrderInput!
    $condition: ModelJPFoodOrderConditionInput
  ) {
    deleteJPFoodOrder(input: $input, condition: $condition) {
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
export const createJPNote = /* GraphQL */ `
  mutation CreateJPNote(
    $input: CreateJPNoteInput!
    $condition: ModelJPNoteConditionInput
  ) {
    createJPNote(input: $input, condition: $condition) {
      id
      total
      note
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateJPNote = /* GraphQL */ `
  mutation UpdateJPNote(
    $input: UpdateJPNoteInput!
    $condition: ModelJPNoteConditionInput
  ) {
    updateJPNote(input: $input, condition: $condition) {
      id
      total
      note
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteJPNote = /* GraphQL */ `
  mutation DeleteJPNote(
    $input: DeleteJPNoteInput!
    $condition: ModelJPNoteConditionInput
  ) {
    deleteJPNote(input: $input, condition: $condition) {
      id
      total
      note
      createdAt
      updatedAt
      owner
    }
  }
`;
