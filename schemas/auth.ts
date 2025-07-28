import { z } from 'zod';

export const getLoginSchema = (t: (key: string) => string) =>
  z.object({
    email: z.string().email({ message: t('validation.invalidEmail') }),
    password: z.string().min(6, { message: t('validation.passwordMinLength') }),
  });

export type LoginSchema = z.infer<ReturnType<typeof getLoginSchema>>;
