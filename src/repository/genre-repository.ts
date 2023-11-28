import { Genre } from "@prisma/client";

export default class GenreRepository {
  constructor(private readonly prismaClient) {}

  create(genre: Genre): Genre {
    return this.prismaClient.genre.create({
      data: genre,
    });
  }
}
