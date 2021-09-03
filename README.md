# rehype-source-map

[**rehype**][rehype] plugin to attach positional info (e.g. "start-line") to elements (e.g. via the `data-line` attribute).

Input:

```md
First line

Second line
```

Output:

```html
<p data-line="1">First line</p>
<p data-line="3">Second line</p>
```

## Install

This package is [ESM only][esm]:
Node 12+ is needed to use it and it must be `import`ed instead of `require`d.

[yarn][]:

```sh
yarn add rehype-source-map
```

## Use

The plugin should be used for rehype-ed content (i.e. after `remark-rehype` or
`retext-rehype`). There is no options at the moment.

```js
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import { rehypeSourceMap } from "rehype-source-map";

unified()
	.use(remarkParse)
	.use(remarkRehype)
	.use(rehypeStringify)
	.use(rehypeSourceMap)
	.process(/* you know the drill */);
```

<!-- Definitions -->

[yarn]: https://yarnpkg.com/cli/add
[rehype]: https://github.com/rehypejs/rehype
[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
