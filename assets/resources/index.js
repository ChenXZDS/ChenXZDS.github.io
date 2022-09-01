System.register("chunks:///_virtual/en.ts",["cc"],(function(e){"use strict";var n;return{setters:[function(e){n=e.cclegacy}],execute:function(){n._RF.push({},"e1ac2eASkxBvbAA0RCtXeM5","en",void 0);var i=window,t=e("languages",{title:{"Grass trodden bandit":"Grass trodden bandit"},menu:{Play:"Play",Setting:"Setting"},UI:{Loading:"Loading...",Over:"You've been caught by the bad guys!",Complete:"Compliance rate:",Close:"Click on the screen to finish"},settings:{Language:"Language:",Chinese:"Chinese(中文)",English:"English",Difficulty:"Difficulty:",Low:"Low",Middle:"Middle",High:"High","Phone mode":"Phone mode","Infinite mode":"Infinite mode"}});i.languages||(i.languages={}),i.languages.en=t,n._RF.pop()}}}));

System.register("chunks:///_virtual/resources",["./en.ts","./zh.ts"],(function(){"use strict";return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/zh.ts",["cc"],(function(e){"use strict";var n;return{setters:[function(e){n=e.cclegacy}],execute:function(){n._RF.push({},"a0d860SIJ9A8aCiwF68fGLv","zh",void 0);var t=window,i=e("languages",{title:{"Grass trodden bandit":"踩草大盗"},menu:{Play:"开始",Setting:"设置"},UI:{Loading:"加载中...",Over:"你被坏人抓住了!",Complete:"达标率:",Close:"单击屏幕以完成"},settings:{Language:"语言:",Chinese:"中文",English:"English(英语)",Difficulty:"难度:",Low:"低",Middle:"中",High:"高","Phone mode":"手机模式","Infinite mode":"无限模式"}});t.languages||(t.languages={}),t.languages.zh=i,n._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/resources', 'chunks:///_virtual/resources'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});