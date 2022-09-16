// ==UserScript==
// @name           Block all popup APIs
// @namespace      https://github.com/igorskyflyer
// @description    Blocks all APIs used for popups, WILL BREAK certain sites
// @include        *
// ==/UserScript==

window.open = location.replace = function() {}
