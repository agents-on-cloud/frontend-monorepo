// Nuxt exposes its default route builder logic here
import path from "path";
import serveStatic from "serve-static";

export default function NuxtModule() {

    // add default static files
    this.addServerMiddleware(
        serveStatic(path.resolve(__dirname, 'static')),
    );

    // gets components exported
    this.nuxt.hook("components:dirs", (dirs) => {
        dirs.unshift({
            path: path.resolve(__dirname, "components"),
            level: 1, // provide a priority
        });
    });
}

// Export all stores from this folder
// export * from "./store"

// Export all proxies from this folder
// export const proxy = {}