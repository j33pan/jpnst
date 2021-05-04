/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateJPOrder = /* GraphQL */ `
  subscription OnCreateJPOrder($owner: String) {
    onCreateJPOrder(owner: $owner) {
      id
      owner
      total
      note
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
      createdAt
      updatedAt
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
