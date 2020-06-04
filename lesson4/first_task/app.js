'use strict'

function showDomTree1(node = document, step = 0) {
    console.log(' '.repeat(step), node.nodeName, node.nodeValue);

    for (let child of node.childNodes) showDomTree1(child, step + 6);
}

function showDomTree2(node = document, step = 0) {

    console.log(' '.repeat(step), node.nodeName, node.nodeValue);

    Array.from(node.childNodes).forEach((elem) => showDomTree2(elem, step + 6));
}

function showDomTree3(node = document, step = 0) {
    console.log(' '.repeat(step), node.nodeName, node.nodeValue);

    for (let i = 0; i < node.childNodes.length; i++) {
        let child = node.childNodes[i];
        showDomTree3(child, step + 6);
    }
}

function showDomTree4(node = document, step = 0) {
    while (node) {
        console.log(' '.repeat(step), node.nodeName, node.nodeValue);
        showDomTree4(node.firstChild, step + 6);
        node = node.nextSibling;
    };
}

showDomTree1(); 
showDomTree2();
showDomTree3(); 
showDomTree4();
