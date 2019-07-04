import { p as patchBrowser, b as bootstrapLazy } from './chunk-a9a0c4c4.js';
patchBrowser().then(function (resourcesUrl) {
    return bootstrapLazy([["my-component", [[1, "my-component", { "first": [1], "middle": [1], "last": [1] }]]]], { resourcesUrl: resourcesUrl });
});
