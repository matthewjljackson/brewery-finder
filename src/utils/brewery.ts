import * as z from 'zod';

const toNumber = (val: string, ctx: z.RefinementCtx) => {
  const parsed = Number(val);
  if (isNaN(parsed)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'Not a number',
    });
    return z.NEVER;
  }
  return parsed;
};

export const BrewerySchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  longitude: z.string().min(1).transform(toNumber),
  latitude: z.string().min(1).transform(toNumber),
  city: z.string().min(1),
  street: z.string().nullable(),
  postal_code: z.string().nullable(),
  website_url: z.string().nullable(),
  phone: z.string().nullable(),
});

export type Brewery = z.infer<typeof BrewerySchema>;
