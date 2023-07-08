## RSS

- You can add the required packages by running `npm i @astrojs/rss sanitize-html markdown-it`
- You need to define the deployed site use in the `astro.config.mjs` for the RSS feed to work properly
- Using a `.ts` extension lets Astro know that this endpoint is neither a Astro component nor a Markdown component which are rendered by default. This just sets up a route, which returns what the first extension returns.

## Newsletter Subscription (Hybrid Rendering)

- Astro by default runs in the `pre-render` (or `static`) mode, in which all of your site (except the components marked with `client` attributes) are rendered as static builds and then shipped.
- In the `hybrid` rendering mode, everything by default is statically rendered, but in the pages with an exported `const prerender = false` would shift that particular page to server-side rendering.
- Server-side rendering means using a server to generate HTML from JavaScript modules in response to a URL request.
- This allows the user to disable javascript and yet enjoy an interactive experience.
- If you want to use a server rendered component in another page, you don't need to make the whole page server-rendered! You can redirect to the relevant page/route. This can be seen from the newsletter on the home page.
