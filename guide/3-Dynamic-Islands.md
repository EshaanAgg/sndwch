# Dynamic Islands

Notes on how to use `Astro`'s dynamic island architecture to make javascript enabled components and how to use state sharing across different frameworks.

### Data Fetching

- All Astro components have access to the global `fetch()` function in their component script to make HTTP requests to APIs.
- All the framework components have access to the `fetch()` function as well.
- This fetch call will be executed at build time, and the data will be available to the component template for generating dynamic HTML.
- If SSR mode is enabled, any fetch calls will be executed at runtime.
- In devlopment, you will see data fetches on component refreshes. API calls wouldn't be made on the deployment.
- If you need to re-fetch data multiple times client-side, use a framework component or a client-side script in an Astro component.

### Data Sharing between Frameworks

- We use framework agnostic packages like `nanostores` and `Tanstack Query` so as to ensure that the feteched data and the state is shared between multiple frameworks.
- They primarily work by implementing a core javascript logic that handles all the state, and then using framework specifc plugins that can tap into the lifecycles of the frameworks and do all the heavy lifting for us.
- In Astro, you can simply use `npx astro add react vue solid svelte` to add the support for the framework that you want to use! No manual configuration needed.
