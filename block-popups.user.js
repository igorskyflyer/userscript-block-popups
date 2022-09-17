// ==UserScript==
// @name           Block all popup APIs
// @namespace      https://github.com/igorskyflyer
// @description    Blocks all APIs used for popups, WILL BREAK certain sites
// @grant          unsafeWindow
// @include        *
// @runat          document-start
// ==/UserScript==

unsafeWindow.open = unsafeWindow.location.replace = document.location.replace = function() {}
