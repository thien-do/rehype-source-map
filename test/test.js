import { unified } from "unified";
import parse from "remark-parse";
import rehype from "remark-rehype";
import stringify from "rehype-stringify";
import { rehypeSourceMap } from "../dist/index.js";

const doc = `
# Hello World

## Table of Content

## Install

A **example**.

## Use

More \`text\`.

## License

MIT
`;

const result = unified()
	.use(parse)
	.use(rehype)
	.use(stringify)
	.use(rehypeSourceMap)
	.processSync(doc)
	.toString();

console.log(result);
