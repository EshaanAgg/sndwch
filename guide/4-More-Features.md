### Props

- You can add props to any astro component by just declaring an interface called `Props` in the frontmatter of the component.
- The values of the prop can be accessed using the `Astro.props` property.

### Content Collections and TypeSafe Markdown

- A content collection is any top-level directory inside the reserved `src/content` project directory, such as `src/content/newsletter` and `src/content/authors`.
- A collection entry is any piece of content stored inside of your content collection directory. Entries can use content authoring formats including Markdown (`.md`) and MDX (`.mdx` using the MDX integration) or as data formats including YAML (`.yaml`) and JSON (`.json`).
- The `src/content/config.ts` file is optional. However, choosing not to define your collections will disable some of their best features like frontmatter schema validation or automatic TypeScript typings.
- `zod` is used for the type-checking.
