import * as z from 'zod';

export const BrewerySchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  longitude: z.string().min(1),
  latitude: z.string().min(1),
  city: z.string().min(1),
});

export type Brewery = z.infer<typeof BrewerySchema>;
