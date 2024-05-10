import {gql} from '@apollo/client';

const GET_MENUS = gql`
    query GetMenus {
        menus {
            name
            description
            price
        }
    }
`;

export default GET_MENUS;

// export const CREATE_MENU_MUTATION = gql`
//   mutation CreateMenu($content: String!, $editing: Boolean!, $completed: Boolean!) {
//     createMenu(input: { content: $content, editing: $editing, completed: $completed }) {
//       content
//       editing
//       completed
//     }
//   }
// `;
