import { visit } from "unist-util-visit";
import { Transformer, Plugin } from "unified";

const transformer: Transformer = (tree, file) => {
	console.log("me", tree);
	visit(tree, (node) => {
		console.log(node);
	});
};

export const rehypeSourceMap: Plugin = () => {
	return transformer;
};
