import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';


// Blog collection schema
const blogCollection = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		author: z.string().default('Kristin Campbell'),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		category: z.enum(['Buying', 'Selling', 'Market Analysis', 'Investing', 'Neighborhoods', 'Home Care', 'Tips']),
		tags: z.array(z.string()).default([]),
		readTime: z.string().optional(),
		featured: z.boolean().default(false),
		draft: z.boolean().default(false),
	}),
});

// Properties collection schema
const propertiesCollection = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/properties" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		price: z.number(),
		address: z.string(),
		city: z.string(),
		state: z.string(),
		zipCode: z.string(),
		bedrooms: z.number(),
		bathrooms: z.number(),
		squareFeet: z.number(),
		propertyType: z.enum(['Single Family', 'Condo', 'Townhouse', 'Multi-Family', 'Land', 'Commercial']),
		status: z.enum(['For Sale', 'Under Contract', 'Sold', 'Coming Soon']),
		mlsNumber: z.string().optional(),
		yearBuilt: z.number().optional(),
		lotSize: z.string().optional(),
		features: z.array(z.string()).default([]),
		images: z.array(z.string()).default([]),
		featured: z.boolean().default(false),
		dateListed: z.coerce.date(),
		lastUpdated: z.coerce.date().optional(),
	}),
});

// Resources collection schema
const resourcesCollection = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/resources" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		type: z.enum(['Guide', 'Report', 'Checklist', 'Template', 'Video']),
		category: z.enum(['Buying', 'Selling', 'Investing', 'Market', 'Home Care']),
		downloadUrl: z.string().optional(),
		fileSize: z.string().optional(),
		requiresEmail: z.boolean().default(false),
		pubDate: z.coerce.date(),
		featured: z.boolean().default(false),
	}),
});

export const collections = {
	'blog': blogCollection,
	'properties': propertiesCollection,
	'resources': resourcesCollection,
}; 