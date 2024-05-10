import {gql} from '@apollo/client';

export const GET_MENUS = gql`
    query GetMenus {
        menus {
            name
            description
            price
        }
    }
`;
