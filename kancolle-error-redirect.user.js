// ==UserScript==
// @name         Redirect Kancolle Error Message
// @name:ja      リダイレクト艦これエラーメッセージ
// @name:zh      重導艦娘錯誤訊息至終端機
// @namespace    http://chunnorris.cc/
// @version      1.0
// @description  Redirect the "エラーが発生したため、ページ更新します" message from window.confirm() to console.log()
// @author       Chun Norris
// @match        www.dmm.com/netgame/social/-/gadgets/=/app_id=854854/
// @grant        none
// ==/UserScript==

function redirect(text) {
    console.log("Received message: " + text);
    // return false <=> click the cancel button in the confirm popup window."
    return false;
};

window.confirm = redirect;