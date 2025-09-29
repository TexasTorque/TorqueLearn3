import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const cadCollection = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "content/cad" }),
    schema: z.object({
        title: z.string(),
        date: z.date(),
        author: z.string(),
        slug: z.string().optional()
    })
});

const codingCollection = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/coding" }),
    schema: z.object({
        title: z.string(),
        date: z.date(),
        author: z.string()
    })
});

const electricalCollection = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/electrical" }),
    schema: z.object({
        title: z.string(),
        date: z.date(),
        author: z.string()
    })
});

const mechanicalCollection = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/mechanical" }),
    schema: z.object({
        title: z.string(),
        date: z.date(),
        author: z.string()
    })
});


export const collections = { 
    cad: cadCollection ,
    coding: null,
    electrical: null,
    mechanical: null
};