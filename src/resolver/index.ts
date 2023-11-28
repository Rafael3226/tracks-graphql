import { PrismaClient } from "@prisma/client";
import GenreRepository from "../repository/genre-repository";
import Genre from "../entity/genre";

const prisma = new PrismaClient();

const genreRepository = new GenreRepository(prisma);

export const resolvers = {
  Query: {
    tracks() {
      return prisma.track.findMany();
    },
    track(_, args) {
      return prisma.track.findUnique({
        where: {
          id: args.id,
        },
      });
    },
    labels() {
      return prisma.label.findMany();
    },
    label(_, args) {
      return prisma.label.findUnique({
        where: {
          id: args.id,
        },
      });
    },
    artists() {
      return prisma.artist.findMany();
    },
    artist(_, args) {
      return prisma.artist.findUnique({
        where: {
          id: args.id,
        },
      });
    },
    genres() {
      return prisma.genre.findMany();
    },
    genre(_, args) {
      return prisma.genre.findUnique({
        where: {
          id: args.id,
        },
      });
    },
    files() {
      return prisma.file.findMany();
    },
    file(_, args) {
      return prisma.file.findUnique({
        where: {
          id: args.id,
        },
      });
    },
  },
  Track: {
    artists(parent) {
      return prisma.artistsOnTracks
        .findMany({
          where: { trackId: parent.id },
          include: { artist: true },
        })
        .then((res) => res.map((r) => r.artist));
    },
    genre(parent) {
      return prisma.genre.findUnique({ where: { id: parent.genreId } });
    },
    label(parent) {
      return prisma.label.findUnique({ where: { id: parent.labelId } });
    },
  },
  Label: {
    tracks(parent) {
      return prisma.track.findMany({ where: { labelId: parent.id } });
    },
  },
  Artist: {
    tracks(parent) {
      return prisma.artistsOnTracks
        .findMany({
          where: { artistId: parent.id },
          include: { track: true },
        })
        .then((res) => res.map((r) => r.track));
    },
  },
  Genre: {
    tracks(parent) {
      return prisma.track.findMany({ where: { genreId: parent.id } });
    },
  },
  Mutation: {
    createGenre(_, args) {
      const props = args.genre;
      const genre = Genre.create(props);
      return genreRepository.create(genre);
    },
  },
};
