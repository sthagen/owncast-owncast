"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8029],{58029:function(t,e,r){function errorIfNotEmpty(t){var e=t.match(/^\s*\S/);return t.skipToEnd(),e?"error":null}r.r(e),r.d(e,{asciiArmor:function(){return a}});let a={name:"asciiarmor",token:function(t,e){var r;if("top"==e.state)return t.sol()&&(r=t.match(/^-----BEGIN (.*)?-----\s*$/))?(e.state="headers",e.type=r[1],"tag"):errorIfNotEmpty(t);if("headers"==e.state){if(t.sol()&&t.match(/^\w+:/))return e.state="header","atom";var a=errorIfNotEmpty(t);return a&&(e.state="body"),a}return"header"==e.state?(t.skipToEnd(),e.state="headers","string"):"body"==e.state?t.sol()&&(r=t.match(/^-----END (.*)?-----\s*$/))?r[1]!=e.type?"error":(e.state="end","tag"):t.eatWhile(/[A-Za-z0-9+\/=]/)?null:(t.next(),"error"):"end"==e.state?errorIfNotEmpty(t):void 0},blankLine:function(t){"headers"==t.state&&(t.state="body")},startState:function(){return{state:"top",type:null}}}}}]);