(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(t,e,a){t.exports=a(55)},25:function(t,e,a){},34:function(t,e,a){},35:function(t,e,a){},36:function(t,e,a){},55:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),r=a(18),s=a.n(r),c=(a(25),a(2)),i=a(3),u=a(5),l=a(4),m=a(6),p=a(19),h=a.n(p),f=(a(34),a(35),function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"header"},o.a.createElement("h1",null,"CommitStatus"))}}]),e}(o.a.Component)),d=(a(36),a(37)),b=function(t){function e(){var t,a;Object(c.a)(this,e);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(o)))).state={projects:[]},a}return Object(m.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){var t=this,e=[];this.serverRequest=d.get(this.props.source).then(function(a){var n=a.data.defaultStatus;a.data.projects.map(function(t){return e.push({name:t,status:n})}),t.setState({projects:e});var o={headers:{Authorization:"token 9d5a10a4158c21f267934ef5489409cf0172d0b4"}},r=e.map(function(t){return d.get("https://api.github.com/repos/".concat(t.name,"/commits/master/status"),o)});Promise.all(r).then(function(a){console.log("values",a),e=[],a.map(function(t){return e.push({name:t.data.repository.full_name,status:t.data.state})}),t.setState({projects:e})},function(t){console.log("error",t)}).catch(console.log())})}},{key:"render",value:function(){return o.a.createElement("div",null,this.state.projectStatus,this.state.projects.map(function(t,e){return o.a.createElement("div",{key:e,className:"project ".concat(t.status)},o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/".concat(t.name)},t.name)," ","- ",o.a.createElement("span",{className:t.status},t.status))}))}}]),e}(o.a.Component),j=function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(h.a,{htmlAttributes:{lang:"en",amp:void 0},meta:[{name:"description",content:"A simple React app that shows a list of projects with their Github commit status and use it as a dashboard to view status of your CI pipelines."}],title:"CommitStatus"}),o.a.createElement(f,null),o.a.createElement(b,{source:"./data/repositories.json"}))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.29429327.chunk.js.map