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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      user
      date
      total
      createdAt
      updatedAt
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      user
      date
      total
      createdAt
      updatedAt
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      user
      date
      total
      createdAt
      updatedAt
    }
  }
`;
