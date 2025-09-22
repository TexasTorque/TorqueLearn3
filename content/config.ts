import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const cad = defineCollection({
    loader: glob({ pattern: "**/**.md", base: ""}),
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        slug: z.string().optional(),
    })
});


export const collections = { cad, };