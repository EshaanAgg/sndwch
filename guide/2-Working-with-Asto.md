### General Pointers

- You can use the familiar `JSX` syntax in `Astro` components to render content dynamically with JS.
- But remember, Astro is not setting up a virtual DOM for us and we are just using the JSX. That means, no need to add a `key` attribute while `mapping` over elements and hooks like `useState` and `useEffect`.
- All the stuff that we put in the `src` directory can be directly imported.
- Astro has it's own image component and an [experimental `assets`](https://docs.astro.build/en/guides/assets/) directory that does a lot of image optimization for you, so it might be worth checking out. This is particularly powerful while working with markdown and images.
