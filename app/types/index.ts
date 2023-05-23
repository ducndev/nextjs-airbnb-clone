import {User} from '@prisma/client';

export type SafeUser = Omit<
    User,
    "createdAt" | "updatedAte" | "emailVerified"
> & {
    createdAt: string;
    updatedAt: string;
    emailVerified: string | null;
};