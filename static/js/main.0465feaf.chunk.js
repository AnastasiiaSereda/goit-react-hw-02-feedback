(this["webpackJsonpmy-newapp"]=this["webpackJsonpmy-newapp"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(2),r=a.n(l),c=(a(12),a(3)),i=a(4),u=a(6),s=a(5),d=(a(13),function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={good:0,neutral:0,bad:0},e}return Object(i.a)(a,[{key:"countTotalFeedback",value:function(){return this.state.good+this.state.neutral+this.state.bad}},{key:"countPositiveFeedbackPercentage",value:function(){var e=this.countTotalFeedback(),t=this.state.good/e;return"".concat(t.toFixed(2),"%")}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(m,{title:"Please leave feedback",options:[{title:"Good",onLeaveFeedback:function(){return e.setState({good:e.state.good+1})}},{title:"Neutral",onLeaveFeedback:function(){return e.setState({neutral:e.state.neutral+1})}},{title:"Bad",onLeaveFeedback:function(){return e.setState({bad:e.state.bad+1})}}]}),o.a.createElement(v,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}))}}]),a}(n.Component));function v(e){return o.a.createElement("div",null,o.a.createElement("p",null,"Statistics"),o.a.createElement(b,{title:"No feedback given",good:e.good,neutral:e.neutral,bad:e.bad,total:e.total,positivePercentage:e.positivePercentage}))}var m=function(e){return o.a.createElement("div",null,o.a.createElement("p",null,e.title),e.options.map((function(e){return o.a.createElement("button",{onClick:e.onLeaveFeedback},e.title)})))},b=function(e){return o.a.createElement("span",null,0===e.total?o.a.createElement("span",null,e.title):o.a.createElement("div",null,o.a.createElement("span",null,"Good: ",e.good),o.a.createElement("span",null,"Neutral: ",e.neutral),o.a.createElement("span",null,"Bad: ",e.bad),o.a.createElement("span",null,"Total: ",e.total),o.a.createElement("span",null,"Positive feedback: ",e.positivePercentage)))},p=d;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.0465feaf.chunk.js.map