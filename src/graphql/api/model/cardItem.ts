export interface CardItem {

  id: number

  initials: string

  title: string

  imageUrl: string

  info: string

  price: number
}

export interface CardList {
  cards: {
    info: {
      count: number;
    };
    results: CardItem[];
  };
}

