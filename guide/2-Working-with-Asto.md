### General Pointers

- You can use the familiar `JSX` syntax in `Astro` components to render content dynamically with JS.
- But remember, Astro is not setting up a virtual DOM for us and we are just using the JSX. That means, no need to add a `key` attribute while `mapping` over elements and hooks like `useState` and `useEffect`.

### Images and Assets

- All the stuff that we put in the `src` directory can be directly imported.
- Astro has it's own image component and an [experimental `assets`](https://docs.astro.build/en/guides/assets/) directory that does a lot of image optimization for you, so it might be worth checking out. This is particularly powerful while working with markdown and images.
- As a general practice, don't rely on your framework to do the image optimization because
  - They don't do it as well!
  - They weren't built to do that!
  - They have strict requirements that you may or may-not meet (Always knowing the height and width as in `next/image` is super annoying)
  - Your project will most probably be a multi-framework. Being framework agnostic is super important.
- Try to use Cloudinary and other libraries such as `unpic-image` that do the same for you regardless the framework, so that you get a much better developer experience.
