# frontend-monorepo
A collection of components with storybook and git sub-modules to centralize frontend development.

## Container setup (Dependency management)

Dependencies should be central in `storybook-nuxt/package.json` and any feature owner who has new dependencies must add it into the file, even if not using it directly in a storybook component.

All required config should be centralized in `nuxt.config.js/storybook-nuxt`,to make it easy to copy the config into all of the other features. 

All shareable parts of the storybook including (`components`, `static`, `store/module` and `proxy`) should be exported from `storybook-nuxt/module` as a module to your own nuxt project.

### Other dependencies
Don't forget to add tailwind file if you require tailwind css `storybook-nuxt/tailwind.config.js` and `storybook-nuxt/assets/css/main.css`.

Features requiring tailwindcss:

- Performance and Ratings

## Submodules

All submodules will exist but are empty.

As with a new clone, you could choose to get specific submodules to work with, with:

``` 
git submodule update --init <packages/marketing.agentsoncloud.com>
```

Update only submodules you have authorized to make changes to, and for any shareable parts it should exist in the `storybook-nuxt` project.