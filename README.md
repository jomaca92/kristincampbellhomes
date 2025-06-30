# Kristin Campbell Homes Website

A professional, SEO-optimized real estate website built with Astro.js, designed to generate leads and showcase local market expertise.

## 🏠 Project Overview

This website serves as the digital presence for Kristin Campbell's real estate business, focusing on local SEO, lead generation, and providing valuable market insights to potential clients. The site is built with modern web technologies and follows best practices for performance, accessibility, and user experience.

## ✨ Features

### ✅ Completed Features
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Content Management**: Markdown-based content with Astro collections
- **Lead Capture**: Netlify Forms integration across all contact forms
- **Dynamic Pages**: Individual blog posts and property detail pages
- **SEO Foundation**: Meta tags, structured URLs, and content optimization
- **Mobile Navigation**: Interactive hamburger menu with JavaScript
- **Professional Layout**: Clean, modern design with proper branding

### 🚧 In Progress
- **Content Collections**: Blog posts, properties, and resources
- **Lead Magnet System**: Downloadable guides and reports
- **Email Automation**: Integration with email marketing platforms

### 📋 Planned Features
- **Advanced SEO**: Structured data, sitemaps, and local business schema
- **Image Optimization**: WebP format and lazy loading
- **Analytics**: Google Analytics 4 integration
- **Performance Optimization**: Core Web Vitals optimization

## 🛠 Technology Stack

- **Framework**: [Astro.js](https://astro.build/) - Static site generation
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Deployment**: [Netlify](https://netlify.com/) - Hosting and form handling
- **Content**: Markdown with frontmatter and Zod validation
- **Language**: TypeScript for type safety
- **Forms**: Netlify Forms for reliable form submissions

## 📁 Project Structure

```
kristincampbellhomes/
├── src/
│   ├── components/          # Reusable UI components
│   │   └── components/
│   │       └── Layout.astro     # Main layout with header/footer
│   │   └── pages/
│   │       ├── index.astro      # Homepage
│   │       ├── about.astro      # About page
│   │       ├── contact.astro    # Contact page
│   │       ├── properties.astro # Property listings
│   │       ├── blog.astro       # Blog listing
│   │       ├── blog/[...slug].astro    # Individual blog posts
│   │       └── properties/[...slug].astro # Individual properties
│   │   ├── content/
│   │   │   ├── blog/            # Blog posts (markdown)
│   │   │   ├── properties/      # Property listings (markdown)
│   │   │   └── resources/       # Downloadable resources (markdown)
│   │   ├── content.config.ts    # Content collection schemas
│   │   └── styles/
│   │       └── global.css       # Global styles
│   ├── public/                  # Static assets
│   ├── netlify/                 # Netlify configuration

└── .gitignore
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd kristincampbellhomes
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321`

### Available Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run astro check` | Check for TypeScript errors |

## 📝 Content Management

### Adding Blog Posts
1. Create a new `.md` file in `src/content/blog/`
2. Add frontmatter with required fields:
   ```yaml
   ---
   title: "Your Blog Post Title"
   description: "Brief description for SEO"
   author: "Kristin Campbell"
   pubDate: 2024-01-15
   category: "Buying"
   tags: ["first-time buyer", "home buying"]
   featured: false
   draft: false
   ---
   ```
3. Write your content in markdown below the frontmatter

### Adding Properties
1. Create a new `.md` file in `src/content/properties/`
2. Add frontmatter with property details:
   ```yaml
   ---
   title: "Beautiful Family Home"
   description: "Stunning 3-bedroom home in great neighborhood"
   price: 450000
   address: "123 Main Street"
   city: "Local City"
   state: "ST"
   zipCode: "12345"
   bedrooms: 3
   bathrooms: 2
   squareFeet: 2000
   propertyType: "Single Family"
   status: "For Sale"
   ---
   ```

## 🔧 Development Notes

### Content Collections
The site uses Astro's content collections with Zod validation to ensure data consistency. All content is stored in markdown files with structured frontmatter.

### Form Handling
All forms use Netlify Forms for reliable submission handling. Forms include spam protection and are configured for email automation integration.

## 🚀 Deployment

The site is automatically deployed to Netlify when changes are pushed to the main branch. The deployment includes:

- Automatic builds on git push
- SSL certificate (handled by Netlify)
- Form handling and spam protection
- CDN distribution for fast loading

## 🤝 Contributing

This project serves as a portfolio example of modern web development with Astro.js and Tailwind CSS. Feel free to explore the code, learn from the implementation, and adapt concepts for your own projects.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

The MIT License allows you to:
- Use the code for commercial purposes
- Modify and distribute the code
- Use it privately
- Sublicense it

The only requirement is that you include the original license and copyright notice.

---

**Built with ❤️ using Astro.js and Tailwind CSS**
