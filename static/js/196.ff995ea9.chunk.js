(this["webpackJsonp@example/uiw"]=this["webpackJsonp@example/uiw"]||[]).push([[196],{998:function(e,a){!function(e){var a=e.languages.javascript,n="{(?:[^{}]|{(?:[^{}]|{[^{}]*})*})+}",s="(@(?:param|arg|argument|property)\\s+(?:"+n+"\\s+)?)";e.languages.jsdoc=e.languages.extend("javadoclike",{parameter:{pattern:RegExp(s+"[$\\w\\xA0-\\uFFFF.]+(?=\\s|$)"),lookbehind:!0,inside:{punctuation:/\./}}}),e.languages.insertBefore("jsdoc","keyword",{"optional-parameter":{pattern:RegExp(s+"\\[[$\\w\\xA0-\\uFFFF.]+(?:=[^[\\]]+)?\\](?=\\s|$)"),lookbehind:!0,inside:{parameter:{pattern:/(^\[)[$\w\xA0-\uFFFF\.]+/,lookbehind:!0,inside:{punctuation:/\./}},code:{pattern:/(=)[\s\S]*(?=\]$)/,lookbehind:!0,inside:a,alias:"language-javascript"},punctuation:/[=[\]]/}},"class-name":[{pattern:RegExp("(@[a-z]+\\s+)"+n),lookbehind:!0,inside:{punctuation:/[.,:?=<>|{}()[\]]/}},{pattern:/(@(?:augments|extends|class|interface|memberof!?|this)\s+)[A-Z]\w*(?:\.[A-Z]\w*)*/,lookbehind:!0,inside:{punctuation:/\./}}],example:{pattern:/(@example\s+)[^@]+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,lookbehind:!0,inside:{code:{pattern:/^(\s*(?:\*\s*)?).+$/m,lookbehind:!0,inside:a,alias:"language-javascript"}}}}),e.languages.javadoclike.addSupport("javascript",e.languages.jsdoc)}(Prism)}}]);