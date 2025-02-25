import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';

import { prismaDb } from '~/server/prisma/prismaDb';
import { publicProcedure } from '~/server/trpc/trpc.server';

// configuration
const DEFAULT_EXPIRES_SECONDS = 60 * 60 * 24 * 15; // 15 days

// Zod schemas for prompts
const randomInputSchema = z.object({
    ownerId: z.string(),
    random: z.string(),
    source: z.string(),
    expiresSeconds: z.number().optional(),
});


// tRPC procedures
export const harvRandomProcedure=
    publicProcedure
        .input(randomInputSchema)
        .mutation(async ({ input }) => {
            const { ownerId, random, source, expiresSeconds } = input;
            const currentDateTime = new Date();
            await prismaDb.randomSource.create({
                            select: {
                    ownerId: true,
                    random: true,
                    source: true,
                    createdAt: true,
                    expiresAt: true,
                },
                data: {
                    ownerId: ownerId || uuidv4(),
                    random,
                    source,
                    expiresAt: expiresSeconds === 0 ?
                        undefined
                        : new Date(Date.now() + 1000 * (expiresSeconds || DEFAULT_EXPIRES_SECONDS)), // default
                }
            });
        });