import { randomUUID } from "crypto";

export type GenreProperties = {
  readonly id: string;
  name: string;
  url: string;
};

export type NewGenreProperties = Omit<GenreProperties, "id">;

export default class Genre {
  readonly id: GenreProperties["id"];
  name: GenreProperties["name"];
  url: GenreProperties["url"];

  constructor(params: GenreProperties) {
    Object.assign(this, params);
  }

  static create(props: NewGenreProperties, id: string = randomUUID()): Genre {
    return new Genre({ id, ...props });
  }
}
