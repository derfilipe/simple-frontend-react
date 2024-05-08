import {useMutation, useQuery, UseQueryOptions} from 'react-query';
import {request} from 'graphql-request';
import {CREATE_MENU_MUTATION, GET_MENU} from "../graphql/queries/menu.query.ts";
import {MenuItem} from "../graphql/api/model/menuItem.ts";

const endpoint = 'http://localhost:8000/api/graphql';

function useMenu(options?: UseQueryOptions<MenuItem>) {
  return useQuery<MenuItem>(['menuItem'], () => request(endpoint, GET_MENU), options);
}

function useCreateMenu() {
  return useMutation(({ content, editing, completed }) =>
      request('http://localhost:8000/api/graphql', CREATE_MENU_MUTATION, {
        content,
        editing,
        completed,
      })
  );
}

export default useMenu;