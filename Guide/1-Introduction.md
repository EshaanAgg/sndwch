# Introduction

### Why Astro?

- A web framework that helps you built web apps, and ships `ZERO` Javascript by default
- Partial hydration for dynamic functionality using `islands`
- Takes all the dynamic webpages that we build using Astro components, (or React, Vue, Svelte too) and compiles them to just HTML and CSS on the server side, which are then shipped to the user.
- You can choose compoments which you made to make interactive, so that Astro would ship javascript with them. This is `somewhat-same-yet-different` approach to Next 13
- UI agnostic. Can plug-in components from any framework you comfortable with, and even multiple of them if you want to.
- Supports incremental adoption. You don't need to migrate your whole site to Astro to get all it's benefit. You can migrate just a page or a component, and see the benefits in your site's performance. Moreover, no need to rewrite the pages during migration, as Astro would work with any UI framework that you are already using.
- Can be deployed anywhere.
- Most of what we build for web isn't complex! We shouldn't overthink it. Getting information out on the internet should be easy. Most of what we built isn't the level of complexity of Twitter or Facebook.
- No maintainance of servers
- Provides the developer experience of Modern JS, but not their huge bundle sizes
- Right kind of innovative and boring

### Getting Started

- Create a new project with `npm crate astro`
- The `Huston` bot in the CLI is just too damn cute to not adore

### Routes

- Anything in the `src/pages` directory is treated as a route
- Even `html` and `md` in the `pages` directory are rendered as routes without any configuration
- You can use `MDX` and `Markdoc` with plugins
- You can even you `js` and `ts` file extensions in a markdown page (called an `endpoint`) which can be used for delivering JSON content and many other use cases.
