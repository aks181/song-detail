(this.webpackJsonpsongs=this.webpackJsonpsongs||[]).push([[0],{13:function(e,t,n){e.exports=n(24)},24:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(3),i=n.n(l),c=n(2),o=n(1),u=n(9),s=n(10),m=n(12),d=n(11),g=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,l=new Array(a),i=0;i<a;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).renderedList=function(){return e.props.songs.map((function(t){return r.a.createElement("div",{className:"item",key:t.title},r.a.createElement("div",{className:"right floated content"},r.a.createElement("button",{onClick:function(){return e.props.selectSong(t)},className:"ui button primary"},"Select")),r.a.createElement("div",{className:"content"},t.title))}))},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui divided list"},this.renderedList())}}]),n}(a.Component),E=Object(c.b)((function(e){return{songs:e.songs}}),{selectSong:function(e){return{type:"SONG_SELECTED",payload:e}}})(g),p=Object(c.b)((function(e){return{mySong:e.selectedSong}}))((function(e){return e.mySong?r.a.createElement("div",null,r.a.createElement("h3",null,"Details for:"),r.a.createElement("p",null,"Title: ",e.mySong.title,r.a.createElement("br",null),"Duration: ",e.mySong.duration,r.a.createElement("br",null),"Singer: ",e.mySong.singer)):r.a.createElement("div",null,r.a.createElement("h4",null,"Select a song"))})),v=function(){return r.a.createElement("div",{className:"ui container grid"},r.a.createElement("div",{className:"ui row"},r.a.createElement("div",{className:"column eight wide"},r.a.createElement(E,null)),r.a.createElement("div",{className:"column eight wide"},r.a.createElement(p,null))))},f=Object(o.b)({songs:function(){return[{title:"Attention",duration:"3:50",singer:"Charlie Puth"},{title:"Love the way you lie",duration:"4:10",singer:"Rihanna"},{title:"See you again",duration:"3:45",singer:"Wiz Khalifa"},{title:"Despacito",duration:"5:20",singer:"Luis Fonsi"}]},selectedSong:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return"SONG_SELECTED"===t.type?t.payload:e}});i.a.render(r.a.createElement(c.a,{store:Object(o.c)(f)},r.a.createElement(v,null)),document.querySelector("#root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.78ecddaa.chunk.js.map