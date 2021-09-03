import { visit, Visitor } from "unist-util-visit";
import { Transformer, Plugin } from "unified";
import { Element } from "hast";

const visitor: Visitor<Element> = (element) => {
	if (element.type !== "element") return;
	const line = element.position?.start.line ?? "null";
	if (element.properties === undefined) element.properties = {};
	element.properties["data-line"] = line;
};

const transformer: Transformer = (tree) => {
	visit(tree, "element", visitor);
};

export const rehypeSourceMap: Plugin = () => {
	return transformer;
};
