import { visit } from "unist-util-visit";
var transformer = function (tree, file) {
    console.log("me", tree);
    visit(tree, function (node) {
        console.log(node);
    });
};
export var rehypeSourceMap = function () {
    return transformer;
};
