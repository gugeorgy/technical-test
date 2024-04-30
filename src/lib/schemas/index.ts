import { z } from 'zod';

/**
 * `userSignInSchema` is a Zod schema object that validates the user sign in data.
 * It checks that the username and password are strings and meet the minimum length requirements.
 */
export const userSignInSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters'),
  password: z.string().min(4, 'Password must be at least 4 characters'),
});

/**
 * `UserSignInSchema` is a type inferred from the `userSignInSchema` Zod schema object.
 * It represents the shape of the user sign in data.
 */
export type UserSignInSchema = z.infer<typeof userSignInSchema>;

/**
 * `userSchema` is a Zod schema object that validates the user data.
 * It checks that the id, email, first_name, last_name, nick_name, level, xp, and social are of the correct type and meet the minimum requirements.
 */
export const userSchema = z.object({
  id: z.string(),
  email: z.string().email('Invalid email address'),
  first_name: z.string().min(2, 'First name must be at least 2 characters'),
  last_name: z.string().min(2, 'Last name must be at least 2 characters'),
  nick_name: z.string().min(2, 'Nick name must be at least 2 characters'),
  level: z.number().int().min(1, 'Level must be at least 1'),
  xp: z.object({
    current: z.number().int().min(0, 'Current XP must be at least 0'),
    to_next_level: z.number().int().min(1, 'XP to next level must be at least 1'),
  }),
  social: z.object({
    avatar: z.string().url('Invalid URL'),
    is_online: z.boolean(),
    friends: z.array(z.string()),
  }),
})

/**
 * `User` is a type inferred from the `userSchema` Zod schema object.
 * It represents the shape of the user data.
 */
export type User = z.infer<typeof userSchema>;
