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
- You can create and use the components from multiple frameworks as usual.
- If you just use the component directly in `astro` file, the same would be build once and rendered statically.
- You need to provide the `client-only` attribute to the component if you want to ship the associated javascript with the same so the users can interact with it.

### Client Directives

1. `client:load`

- Useful for Immediately-visible UI elements that need to be interactive as soon as possible.
- It loads and hydrates the component's JavaScript immediately on page load.

2. `client:idle`

- Useful for lower-priority UI elements that don’t need to be immediately interactive.
- It loads and hydrates the component JavaScript once the page is done with it's initial load and the `requestIdleCallback` event has fired.

3. `client:visible`

- Useful for low-priority UI elements that are either far down the page (“below the fold”) or so resource-intensive to load that you would prefer not to load them at all if the user never saw the element.
- It loads and hydrates the component JavaScript once the component has entered the user’s viewport.

4. `client:media`

- Useful for sidebar toggles, or other elements that might only be visible on certain screen sizes.
- It loads and hydrates the component JavaScript once a certain CSS media query is met.

5. `client:only`

- It skips HTML server-rendering, and renders only on the client.
- It acts similar to `client:load` in that it loads, renders and hydrates the component immediately on page load.
- You must pass the component’s correct framework as a value!
