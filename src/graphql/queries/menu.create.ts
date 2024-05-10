import {gql} from '@apollo/client';


export const CREATE_MENU = gql`
    mutation Mutation($createMenuData: CreateMenusDto!) {
        createMenu(createMenuData: $createMenuData) {
            name
            description
            price
        }
    }
`;
