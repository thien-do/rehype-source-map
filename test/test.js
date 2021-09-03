import assert from "assert";
import stringify from "rehype-stringify";
import parse from "remark-parse";
import rehype from "remark-rehype";
import { unified } from "unified";
import { rehypeSourceMap } from "../dist/index.js";

const processor = unified()
	.use(parse)
	.use(rehype)
	.use(stringify)
	.use(rehypeSourceMap);

const process = (text) => processor.processSync(text).toString();

assert.strictEqual(
	process(`First line\n\nSecond line`),
	`<p data-line="1">First line</p>\n<p data-line="3">Second line</p>`,
	`Should add "data-line" correctly`
);
