import {gql} from 'graphql-request';

export const GET_MENU = gql`
query {
  menu {
    name,
    description
  }
}
`;

export const CREATE_MENU_MUTATION = gql`
  mutation CreateMenu($content: String!, $editing: Boolean!, $completed: Boolean!) {
    createMenu(input: { content: $content, editing: $editing, completed: $completed }) {
      content
      editing
      completed
    }
  }
`;
