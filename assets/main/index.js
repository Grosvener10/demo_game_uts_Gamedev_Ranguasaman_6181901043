System.register("chunks:///_virtual/BackgoundMovement.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(n){var t,o,e,r,c;return{setters:[function(n){t=n.inheritsLoose},function(n){o=n.cclegacy,e=n._decorator,r=n.Vec3,c=n.Component}],execute:function(){var a;o._RF.push({},"fdd56LiTIdKOovuN36p7Lr7","BackgoundMovement",void 0);var u=e.ccclass;e.property,n("BackgoundMovement",u("BackgoundMovement")(a=function(n){function o(){for(var t,o=arguments.length,e=new Array(o),r=0;r<o;r++)e[r]=arguments[r];return(t=n.call.apply(n,[this].concat(e))||this).wBackground=1280,t}t(o,n);var e=o.prototype;return e.start=function(){},e.update=function(n){this.node.translate(new r(-500*n,0,0)),this.node.position.x<=-1*(this.wBackground/2+this.wBackground)&&this.node.translate(new r(this.wBackground,0,0))},o}(c))||a);o._RF.pop()}}}));

System.register("chunks:///_virtual/LazerBalls.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var n,e,o,r,a,s;return{setters:[function(t){n=t.inheritsLoose},function(t){e=t.cclegacy,o=t._decorator,r=t.Vec3,a=t.randomRangeInt,s=t.Component}],execute:function(){var i;e._RF.push({},"90dfdM3vYtG0KOLGT/FpeTV","LazerBalls",void 0);var c=o.ccclass;o.property,t("LazerBalls",c("LazerBalls")(i=function(t){function e(){for(var n,e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return(n=t.call.apply(t,[this].concat(o))||this).rotNumb=0,n}n(e,t);var o=e.prototype;return o.start=function(){this.node.translate(new r(0,a(-150,150),0))},o.update=function(t){this.node.translate(new r(-500*t,0,0)),this.node.position.x<=-815&&(this.node.position.x=815,this.node.position.y=a(-161.955,190))},e}(s))||i);e._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./BackgoundMovement.ts","./LazerBalls.ts","./MainChara.ts"],(function(){return{setters:[null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/MainChara.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var n,o,i,r,e,a,s;return{setters:[function(t){n=t.inheritsLoose},function(t){o=t.cclegacy,i=t._decorator,r=t.input,e=t.Input,a=t.Vec3,s=t.Component}],execute:function(){var c;o._RF.push({},"7f5b93Wbe9EKawyBwsYRevR","MainChara",void 0);var u=i.ccclass;i.property,t("MainChara",u("MainChara")(c=function(t){function o(){for(var n,o=arguments.length,i=new Array(o),r=0;r<o;r++)i[r]=arguments[r];return(n=t.call.apply(t,[this].concat(i))||this).vy=0,n.gravity=1e3,n.groundPosi=-161.955,n}n(o,t);var i=o.prototype;return i.start=function(){r.on(e.EventType.TOUCH_START,this.onTouchStart,this)},i.onTouchStart=function(t){t.target;console.log("touch started!!"),this.vy=300},i.update=function(t){this.node.translate(new a(0,this.vy*t,0)),this.vy-=this.gravity*t,this.node.position.y<=this.groundPosi&&(this.node.position.y=this.groundPosi)},o}(s))||c);o._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
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