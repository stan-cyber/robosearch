(this.webpackJsonprobosearch=this.webpackJsonprobosearch||[]).push([[0],{13:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),c=a.n(o);a(13),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(14),a(15);var l=a(1),s=a(2),i=a(4),h=a(3),u=a(5),m=function(e){var t=e.name,a=e.email,n=e.id;return r.a.createElement("div",{className:"dib bg-washed-green tc pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(n,"&200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,a)))},d=function(e){var t=e.robots;return r.a.createElement("div",null,t.map((function(e,a){return r.a.createElement(m,{key:a,name:t[a].name,id:t[a].id,email:t[a].email})})))},b=function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa1 ba b--green bg-lightest-blue",type:"Search",placeholder:"Search here",onChange:t}))},f=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"3px, solid black",height:"500px"}},e.children)},p=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(h.a)(t).call(this,e))).state={hasError:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidCatch",value:function(e,t){this.state({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oops, try again"):this.props.children}}]),t}(n.Component),v=(a(16),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(h.a)(t).call(this))).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,a=e.searchfield,n=t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"RoboSearch"),r.a.createElement(b,{searchChange:this.onSearchChange}),r.a.createElement(f,null,r.a.createElement(p,null,r.a.createElement(d,{robots:n})))):r.a.createElement("h1",null,"LOADING")}}]),t}(n.Component));c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){e.exports=a(17)}},[[8,1,2]]]);
//# sourceMappingURL=main.8459186a.chunk.js.map