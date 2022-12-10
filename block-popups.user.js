// ==UserScript==
// @name           Block all popup APIs
// @namespace      https://github.com/igorskyflyer
// @version        1.0.2
// @author         Igor Dimitrijević (@igorskyflyer)
// @description    Blocks all APIs used for popups, WILL BREAK certain sites
// @homepage       https://github.com/igorskyflyer/userscript-block-popups
// @homepageURL    https://github.com/igorskyflyer/userscript-block-popups
// @website        https://igorskyflyer.me
// @source         https://github.com/igorskyflyer/userscript-block-popups/raw/main/block-popups.user.js
// @updateURL      https://github.com/igorskyflyer/userscript-block-popups/raw/main/block-popups.user.js
// @supportURL     https://github.com/igorskyflyer/userscript-block-popups/issues
// @grant          unsafeWindow
// @match          *://*/*
// @run-at         document-start
// ==/UserScript==

unsafeWindow.open =
unsafeWindow.location.replace =
unsafeWindow.document.location.replace = function() {}
