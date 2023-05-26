const fs = require("fs");
const { JSDOM } = require("jsdom");
const beautify = require("js-beautify"), beautify_css = require("js-beautify").css;

var dom = new JSDOM(fs.readFileSync("./origin/index.html"));
var options = { indent_size: 2 };
var css_body_opacity = beautify_css(dom.window.document.querySelector("#body_opacity").textContent, options);
var css_blogcss = beautify_css(dom.window.document.querySelector("#blogcss").textContent, options);
var css_style = beautify_css(dom.window.document.querySelector("body > style:nth-child(4)").textContent, options);
var js_main = beautify(dom.window.document.querySelector("body > script:nth-child(24)").textContent, options);

fs.writeFileSync("./css/body_opacity.css", css_body_opacity);
fs.writeFileSync("./css/blogcss.css", css_blogcss);
fs.writeFileSync("./css/style.css", css_style);
fs.writeFileSync("./js/main.js", js_main);
