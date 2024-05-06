import {useQuery, UseQueryOptions} from 'react-query';
import {request} from 'graphql-request';
import {GET_CHARACTERS} from "../graphql/queries/characters.query.ts";
import {CharactersList} from "../graphql/api/model/character.ts";

const endpoint = 'https://rickandmortyapi.com/graphql';

function useCharacters(options?: UseQueryOptions<CharactersList>) {
  return useQuery<CharactersList>(['characters'], () => request(endpoint, GET_CHARACTERS), options);
}

export default useCharacters;