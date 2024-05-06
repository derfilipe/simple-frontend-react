export interface Character {
  name: string;
}

export interface CharactersList {
  characters: {
    info: {
      count: number;
    };
    results: Character[];
  };
}