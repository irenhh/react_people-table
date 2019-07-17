(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(19)},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(10),l=n.n(o),c=n(1),i=n(2),u=n(3),s=n(4),p=n(5),d=n(7),m=n(6),h=n(8),f=n(17);var b=function(e){var t,n=e.person,a=e.markRow,o=f((t={person:n,"person--female":"f"===n.sex,"person--male":"m"===n.sex,"person--mother":"f"===n.sex&&n.children.length>0,"person--father":"m"===n.sex&&n.children.length>0},Object(c.a)(t,"person--lived-in-".concat(n.century),!0),Object(c.a)(t,"marked-row",n.marked),t)),l={textDecoration:n.born<1650&&"line-through",fontWeight:n.died>1800&&"bold"};return r.a.createElement("tr",{className:o,style:{background:"f"===n.sex&&"lightpink"},onClick:function(){return a(n.id)}},r.a.createElement("td",null,n.id),r.a.createElement("td",{style:l},n.name),r.a.createElement("td",null,n.sex),r.a.createElement("td",null,n.born),r.a.createElement("td",null,n.died),r.a.createElement("td",null,n.father),r.a.createElement("td",null,n.mother),r.a.createElement("td",null,n.age),r.a.createElement("td",null,n.century),r.a.createElement("td",null,n.children.join(", ")))};var w=function(e){var t=e.people,n=e.sortBy,a=e.markRow;return r.a.createElement("table",{className:"people-table"},r.a.createElement("thead",null,r.a.createElement("tr",null,["id","name","sex","born","died","father","mother","age","century","children"].map(function(e){return r.a.createElement("th",{key:e,onClick:function(){return n(e)}},e)}))),r.a.createElement("tbody",null,t.map(function(e){return r.a.createElement(b,{key:e.id,person:e,markRow:a})})))},E=(n(18),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={currentName:"",currentBirthYear:0,currentDeathYear:0,touched:{name:!1,died:!1}},n.addCurrentInput=function(e,t){n.setState(Object(c.a)({},e,t.target.value))},n.handleBlur=function(e){n.setState(function(t){return{touched:Object(u.a)({},t.touched,Object(c.a)({},e,!0))}})},n.validateInput=function(e){switch(e){case"currentName":return/\d|\W/.test(n.state.currentName.replace(/\s/g,""));case"currentDeathYear":return n.state.currentDeathYear-n.state.currentBirthYear<0||n.state.currentDeathYear-n.state.currentBirthYear>=150;default:return!0}},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.submitNewPerson,a=t.people,o=t.closeNewPersonPopup,l=t.addParent,c=function(t,n){return Object(i.a)(t).filter(function(t){return t.born<e.state.currentBirthYear&&t.sex===n})},u=c(a,"f"),s=c(a,"m"),p=u.length<1?[{name:"unknown",id:Date.now()}]:u,d=s.length<1?[{name:"unknown",id:Date.now()}]:s;return r.a.createElement("div",{className:"popup-add-new-person"},r.a.createElement("h3",{className:"popup-title"},"Adding a new person"),r.a.createElement("button",{type:"button",className:"popup-close",onClick:o},"x"),r.a.createElement("form",{onSubmit:n,className:"popup-form"},r.a.createElement("div",{className:this.validateInput("currentName")?"error-input--message":"hidden-block"},"name should contain only letters and spaces"),r.a.createElement("input",{type:"text",name:"name",placeholder:"type a name",required:!0,className:this.validateInput("currentName")?"error-input":"",onChange:function(t){return e.addCurrentInput("currentName",t)},onBlur:function(){return e.handleBlur("name")}}),r.a.createElement("div",{className:"gender-radio"},r.a.createElement("input",{type:"radio",name:"sex",value:"m",required:!0}),r.a.createElement("label",null,"male"),r.a.createElement("input",{type:"radio",name:"sex",value:"f",required:!0}),r.a.createElement("label",null,"female")),r.a.createElement("input",{type:"number",name:"born",placeholder:"type the year of birth",required:!0,onChange:function(t){return e.addCurrentInput("currentBirthYear",t)}}),r.a.createElement("div",{className:this.validateInput("currentDeathYear")?"error-input--message":"hidden-block"},"age must me between 0 and 150 years"),r.a.createElement("input",{type:"number",name:"died",placeholder:"type the year of death",required:!0,className:this.validateInput("currentDeathYear")?"error-input--died error-input":"",onChange:function(t){return e.addCurrentInput("currentDeathYear",t)},onBlur:function(){return e.handleBlur("died")}}),r.a.createElement("select",{required:!0,onChange:function(e){return l("father",e)}},r.a.createElement("option",{value:"",selected:!0,disabled:!0,hidden:!0},"Choose a father"),d.map(function(e){return r.a.createElement("option",{value:e.name,name:"father",key:e.id},e.name)})),r.a.createElement("select",{required:!0,onChange:function(e){return l("mother",e)}},r.a.createElement("option",{value:"",selected:!0,disabled:!0,hidden:!0},"Choose a mother"),p.map(function(e){return r.a.createElement("option",{value:e.name,name:"mother",key:e.id},e.name)})),r.a.createElement("button",{type:"submit"},"Add new person")))}}]),t}(r.a.Component)),v=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={peopleList:[],peopleListToShow:[],shownPopup:!1,parents:{mother:"",father:""},sortField:""},n.componentDidMount=function(){fetch("./api/people.json").then(function(e){return e.json()}).then(function(e){var t=e.map(function(t,n){return Object(u.a)({},t,{id:n+1,age:t.died-t.born,century:Math.ceil(t.died/100),children:(a=e,r=t,a.filter(function(e){return e.father===r.name||e.mother===r.name}).map(function(e){return e.name})),marked:!1});var a,r});n.setState({peopleList:t,peopleListToShow:t})})},n.filter=function(e){var t=e.target.value;n.setState(function(e){var n=e.peopleList;return{peopleListToShow:n=n.filter(function(e){return-1!==(e.name+e.father+e.mother).toLowerCase().search(t.toLowerCase())})}})},n.sortBy=function(e){n.setState(function(t){var n;switch(e){case"name":n=Object(i.a)(t.peopleList).sort(function(t,n){return t[e].localeCompare(n[e])});break;default:n=Object(i.a)(t.peopleList).sort(function(t,n){return t[e]-n[e]})}return t.sortField===e?{peopleListToShow:Object(i.a)(t.peopleListToShow.reverse())}:{peopleListToShow:n,sortField:e}})},n.markRow=function(e){n.setState(function(t){return{peopleListToShow:Object(i.a)(t.peopleListToShow).map(function(e){return Object(u.a)({},e,{marked:!1})}).map(function(t){return t.id===e?Object(u.a)({},t,{marked:!0}):t})}})},n.submitNewPerson=function(e){e.preventDefault();var t=new FormData(e.target),a={},r=!0,o=!1,l=void 0;try{for(var c,s=t.keys()[Symbol.iterator]();!(r=(c=s.next()).done);r=!0){var p=c.value;a[p]=t.get(String(p))}}catch(d){o=!0,l=d}finally{try{r||null==s.return||s.return()}finally{if(o)throw l}}if((a=Object(u.a)({},a,{id:n.state.peopleListToShow.length+1,age:a.died-a.born,century:Math.ceil(a.died/100),children:[],mother:n.state.parents.mother,father:n.state.parents.father})).age<0||a.age>150||/\d|\W/.test(a.name.replace(/\s/g,"")))return!1;n.setState(function(e){return{peopleList:[].concat(Object(i.a)(e.peopleList),[a]),peopleListToShow:[].concat(Object(i.a)(e.peopleListToShow),[a]),shownPopup:!1}})},n.showNewPersonPopup=function(){n.setState({shownPopup:!0})},n.closeNewPersonPopup=function(){n.setState({shownPopup:!1})},n.addParent=function(e,t){var a=t.target.value;n.setState(function(t){return{parents:Object(u.a)({},t.parents,Object(c.a)({},e,a))}})},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.state.peopleListToShow;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"app-title"},"People table"),r.a.createElement("div",{className:"app-title"},"(".concat(e.length," people)")),r.a.createElement("form",null,r.a.createElement("input",{type:"text",placeholder:"filter by name, mother and father",className:"app-filtering",onChange:this.filter})),!this.state.shownPopup&&r.a.createElement("button",{type:"button",className:"adding-new-person",onClick:this.showNewPersonPopup},"Add a new person"),this.state.shownPopup&&r.a.createElement("div",{className:"app-popup"},r.a.createElement(E,{people:this.state.peopleListToShow,submitNewPerson:this.submitNewPerson,addName:this.addName,handleOptionChange:this.handleOptionChange,addBirthYear:this.addBirthYear,addDeathYear:this.addDeathYear,closeNewPersonPopup:this.closeNewPersonPopup,addParent:this.addParent})),r.a.createElement(w,{people:e,sortBy:this.sortBy,markRow:this.markRow}))}}]),t}(r.a.Component);l.a.render(r.a.createElement(v,{test:123}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.122f3811.chunk.js.map