import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createRouter } from "./context";

export const guestRouter = createRouter()
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.prisma.guest.findMany();
    },
  })
  .query("get", {
    input: z.object({ id: z.string().cuid() }),
    async resolve({ input, ctx }) {
      return await ctx.prisma.guest.findUnique({ where: { id: input.id } });
    },
  })
  .query("search", {
    input: z.object({ name: z.string() }),
    async resolve({ input, ctx }) {
      return await ctx.prisma.guest.findFirst({ where: input });
    },
  })
  .mutation("create", {
    input: z.object({
      name: z.string(),
      description: z.string(),
      image: z.string().nullable(),
      social: z.string().nullable(),
    }),
    async resolve({ input, ctx }) {
      if (!ctx.session || !ctx.session.user)
        throw new TRPCError({ code: "UNAUTHORIZED" });
      return await ctx.prisma.guest.create({ data: input });
    },
  });
