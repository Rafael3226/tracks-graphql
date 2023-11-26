import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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
    async artists(parent) {
      return prisma.artistsOnTracks
        .findMany({
          where: { trackId: parent.id },
          include: { artist: true },
        })
        .then((res) => res.map((r) => r.artist));
    },
  },
};
