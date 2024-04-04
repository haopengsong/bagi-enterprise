import { v4 as uuidv4 } from 'uuid';
import { z } from 'zod';

import { prismaDb } from '~/server/prisma/prismaDb';
import { publicProcedure } from '~/server/api/trpc.server';

// configuration
const DEFAULT_EXPIRES_SECONDS = 60 * 60 * 24 * 15; // 15 days

// Zod schemas for prompts
const promptInputSchema = z.object({
    ownerId: z.string(),
    prompt: z.string(),
    askedAt: z.string(),
    expiresSeconds: z.number().optional(),
});


// tRPC procedures
export const storagePromptProcedure =
    publicProcedure
        .input(promptInputSchema)
        .mutation(async ({ input }) => {
            const { ownerId, prompt, askedAt, expiresSeconds } = input;
            await prismaDb.promptStorage.create({
                select: {
                    ownerId: true,
                    prompt: true,
                    askedAt: true,
                    expiresAt: true,
                },
                data: {
                    ownerId: ownerId || uuidv4(),
                    prompt,
                    askedAt,
                    expiresAt: expiresSeconds === 0 ?
                        undefined
                        : new Date(Date.now() + 1000 * (expiresSeconds || DEFAULT_EXPIRES_SECONDS)), // default
                }
            });
        });