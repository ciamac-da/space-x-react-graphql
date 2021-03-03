(this["webpackJsonpplanet-earth-react-graphql"]=this["webpackJsonpplanet-earth-react-graphql"]||[]).push([[0],{146:function(t,e,n){},147:function(t,e,n){"use strict";n.r(e);var a,o=n(1),r=n(46),i=n.n(r),s=n(79),p=n(17),l=n(124),c=n(112),m=n(125),x=n(49),b=n(103),d=n(36),f=Object(d.a)(a||(a=Object(b.a)(["\nquery {countries{\n  name\n  code\n  emoji\n  languages{\n    name\n    code\n  }\n}\n}\n  "]))),j=n(177),u=n(149),h=n(178),g=n(179),O=n(180),y=n(185),v=n(9),k=n(175),C=Object(k.a)((function(t){var e,n,a,o,r,i,s;return{myTable:{position:"relative",top:"-15px"},myList:{position:"relative",top:"-10px",paddingBottom:"5px",backgroundColor:"#0067b3;"},mainRow:{height:"150px",position:"-webkit-sticky !important"},myRow:{fontSize:"30px",position:"sticky",color:"#fff !important",backgroundColor:"rgb(29, 148, 0)",transition:"1s","&:hover":{backgroundColor:"darkgreen !important",color:"#fff !important"}},myCell:{width:"70px",textAlign:"center",transform:"translateX(0px) !important",transition:".5s","&:hover":{transform:"translateX(10px) !important",transition:".5s"}},myFlagCell:{width:"70px",fontSize:"35px",textAlign:"center",transform:"translateX(0px) !important",transition:".5s","&:hover":{transform:"translateX(10px) !important",transition:".5s"}},myCellHead:{width:"70px",textAlign:"left",transform:"translateX(0px) !important",transition:".5s","&:hover":{transform:"translateX(10px) !important",transition:".5s"}},myLangHead:{width:"70px",textAlign:"center",padding:"inherit !important",transform:"translateX(0px) !important",transition:".5s","&:hover":{transform:"translateX(10px) !important",transition:".5s"}},myLang:{width:"70px",textAlign:"center",padding:"inherit !important",transform:"translateX(0px) !important",transition:".5s","&:hover":{transform:"translateX(10px) !important",transition:".5s"}},myProblem:(e={position:"relative",right:"120px !important",width:"70px",textAlign:"center",transform:"translateX(0px) !important",transition:".5s","&:hover":{transform:"translateX(10px) !important",transition:".5s"}},Object(v.a)(e,t.breakpoints.down("sm"),{right:"0px !important"}),Object(v.a)(e,t.breakpoints.up("md"),{right:"50px"}),e),mySpan:{display:"flex",flexDirection:"column",position:"relative",right:"35px"},myTypo:{color:"#fff",fontSize:"16px",fontWeight:"bolder !important",margin:"-3px"},myTypoCountry:(n={color:"#fff",fontSize:"20px !important",fontWeight:"bolder !important",margin:"-3px",position:"relative",left:"15px !important"},Object(v.a)(n,t.breakpoints.down("sm"),{left:"-5px !important",textAlign:"center"}),Object(v.a)(n,t.breakpoints.up("md"),{left:"-10px !important"}),Object(v.a)(n,t.breakpoints.up("lg"),{left:"20px !important"}),n),myTypoFlag:(a={color:"#fff",fontSize:"20px !important",fontWeight:"bolder !important",margin:"-3px",textAlign:"center",position:"relative",right:"40px !important"},Object(v.a)(a,t.breakpoints.down("sm"),{left:"-5px !important"}),Object(v.a)(a,t.breakpoints.up("md"),{right:"30px !important"}),a),myTypoCode:(o={color:"#fff",fontSize:"20px !important",textAlign:"left",position:"relative",left:"0px",fontWeight:"bolder !important",margin:"-3px"},Object(v.a)(o,t.breakpoints.down("sm"),{left:"-5px !important"}),Object(v.a)(o,t.breakpoints.up("md"),{left:"-10px !important"}),Object(v.a)(o,t.breakpoints.up("lg"),{left:"-5px !important"}),o),myTypoLanguage:(r={color:"#fff",fontSize:"20px !important",textAlign:"center",position:"relative",left:"-120px !important",fontWeight:"bolder !important",margin:"-3px"},Object(v.a)(r,t.breakpoints.down("sm"),{left:"-10px !important"}),Object(v.a)(r,t.breakpoints.up("md"),{position:"relative",left:"-60px !important"}),Object(v.a)(r,t.breakpoints.up("lg"),{position:"relative",left:"-20px !important"}),r),myCheckbox:(i={position:"relative !important",right:"40px !important"},Object(v.a)(i,t.breakpoints.down("sm"),{left:"-18px !important"}),Object(v.a)(i,t.breakpoints.up("md"),{right:"22px !important"}),i),myButton:(s={margin:"0 auto",textAlign:"center !important",color:"#fff",backgroundColor:"rgb(29, 148, 0)",transform:"translateY(10px) !important",transition:".5s","&:hover":{transform:"translateY(2px) !important",transition:".5s",backgroundColor:"#0067b3"}},Object(v.a)(s,t.breakpoints.down("sm"),{position:"relative",left:"-20px",marginBottom:"10px"}),Object(v.a)(s,t.breakpoints.up("md"),{position:"relative",left:"30px",margin:"5px"}),Object(v.a)(s,t.breakpoints.up("lg"),{}),s)}})),w=n(5);function N(t){var e=t.myCountries,n=t.addLang,a=C();return Object(w.jsx)("div",{className:a.myList,children:Object(w.jsx)(j.a,{component:u.a,children:Object(w.jsx)(h.a,{children:Object(w.jsxs)(g.a,{className:a.mainRow,children:[Object(w.jsxs)(O.a,{className:a.myFlagCell,children:["      ",e.emoji,"      "]}),Object(w.jsxs)(O.a,{className:a.myCell,children:["       ",e.name,"      "]}),Object(w.jsxs)(O.a,{className:a.myCell,children:["       ",e.code,"      "]}),Object(w.jsxs)(O.a,{className:a.myCell,children:["  ",e.languages.name," "]}),Object(w.jsxs)(O.a,{className:a.myProblem,children:[" ",e.languages.slice(0,4).map((function(t){return Object(w.jsx)(y.a,{onClick:function(e){return n(t)},className:a.myButton,children:t.name},"".concat(t.name))}))]})]})})})})}var S=Object(k.a)((function(t){var e,n,a,o,r;return{Container:{backgroundColor:"#fff"},mainStyle:(e={backgroundColor:"#f58d06",height:"270px",display:"flex",textAlign:"center",color:"#fff",alignItems:"center",textShadow:"0px 1px 5px #000000",fontWeight:"bolder !important",fontSize:"25px"},Object(v.a)(e,t.breakpoints.down("sm"),{display:"flex",flexDirection:"column"}),Object(v.a)(e,t.breakpoints.up("md"),{display:"flex",flexDirection:"column !important"}),Object(v.a)(e,t.breakpoints.up("lg"),{}),e),inputStyle:{margin:"0 auto",display:"flex",textAlign:"center !important",textAlignLast:"center",color:"#fff"},searchIcon:{position:"relative",top:"7px"},firstMainStyle:(n={fontSize:"20px"},Object(v.a)(n,t.breakpoints.down("sm"),{position:"relative !important",top:"60px !important",left:"0px !important",fontSize:"16px"}),Object(v.a)(n,t.breakpoints.up("md"),{position:"relative !important",top:"130px !important",left:"-240px !important"}),Object(v.a)(n,t.breakpoints.up("lg"),{position:"relative",top:"135px",left:"-370px"}),Object(v.a)(n,t.breakpoints.up("xl"),{position:"relative",top:"135px",left:"-380px"}),n),secondMainStyle:(a={display:"flex !important",flexDirection:"column !important",justifyContent:"center !important",textAlign:"center !important"},Object(v.a)(a,t.breakpoints.down("sm"),{position:"relative !important",top:"60px !important",left:"-17px !important",fontSize:"16px !important"}),Object(v.a)(a,t.breakpoints.up("md"),{position:"relative",top:"70px",left:"230px"}),Object(v.a)(a,t.breakpoints.up("lg"),{position:"relative",top:"70px",left:"410px"}),Object(v.a)(a,t.breakpoints.up("xl"),{position:"relative",top:"75px",left:"570px"}),a),TypoStyle:(o={margin:"0 auto",textAlign:"center !important",textAlignLast:"center",fontSize:"20px",paddingBottom:"10px"},Object(v.a)(o,t.breakpoints.down("sm"),{position:"relative",left:"20px",fontSize:"16px"}),Object(v.a)(o,t.breakpoints.up("md"),{position:"relative",left:"30px"}),Object(v.a)(o,t.breakpoints.up("lg"),{}),o),myButton:(r={margin:"0 auto",textAlign:"center !important",color:"#fff",backgroundColor:"rgb(29, 148, 0)",transform:"translateX(0px) !important",transition:".5s","&:hover":{transform:"translateX(10px) !important",transition:".5s",backgroundColor:"#0067b3"}},Object(v.a)(r,t.breakpoints.down("sm"),{position:"relative",left:"20px"}),Object(v.a)(r,t.breakpoints.up("md"),{position:"relative",left:"30px"}),Object(v.a)(r,t.breakpoints.up("lg"),{}),r),linkStyle:{textDecoration:"none !important"},myIcon:{position:"relative",left:"30px"}}})),A=n(181),T=n(150);function L(){var t=C();return Object(w.jsx)(h.a,{className:t.myTable,children:Object(w.jsx)(A.a,{children:Object(w.jsxs)(g.a,{className:t.myRow,children:[Object(w.jsx)(O.a,{className:t.myCellHead,children:Object(w.jsx)(T.a,{className:t.myTypoFlag,children:"       Flag      "})}),Object(w.jsx)(O.a,{className:t.myCellHead,children:Object(w.jsx)(T.a,{className:t.myTypoCountry,children:"    Country Name "})}),Object(w.jsx)(O.a,{className:t.myCellHead,children:Object(w.jsx)(T.a,{className:t.myTypoCode,children:"       Code      "})}),Object(w.jsx)(O.a,{className:t.myCellHead,children:Object(w.jsx)(T.a,{className:t.myTypoLanguage,children:"     Language/s  "})})]})})})}var z=n(186),X=n(182),B=n(115),W=n.n(B),D=n(116),I=n.n(D),R=n(117),F=n.n(R),H=function(){var t=S(),e=Object(c.useQuery)(f,{}).data,n=(e=void 0===e?{}:e).countries,a=void 0===n?[]:n,r=Object(o.useState)(""),i=Object(x.a)(r,2),s=i[0],p=i[1],l=Object(o.useState)([]),b=Object(x.a)(l,2),d=b[0],j=b[1],u=Object(x.a)(d,2),h=u[0],g=u[1],O=function(t){return j([t].concat(Object(m.a)(d)).slice(0,2))},v=Object(o.useMemo)((function(){return s?a.filter((function(t){return t.languages.filter((function(t){return t.name.toLowerCase().startsWith(s.toLowerCase())})).length>0})):a}),[s,a]);return Object(w.jsxs)("div",{className:t.Container,children:[Object(w.jsxs)(X.a,{className:t.mainStyle,children:[Object(w.jsxs)(T.a,{className:t.firstMainStyle,children:[Object(w.jsx)(W.a,{className:t.searchIcon}),"\xa0 Searching through Countries based on Languages...",Object(w.jsx)(z.a,{type:"text",placeholder:"Search here...!",autoComplete:"off",className:t.inputStyle,onChange:function(t){return p(t.target.value)}})]}),Object(w.jsxs)(T.a,{className:t.secondMainStyle,children:[Object(w.jsx)(T.a,{className:t.TypoStyle,children:"   Select 2 Languages and click here to Translate them                "}),Object(w.jsxs)(y.a,{className:t.myButton,onClick:function(t){return window.open("https://translate.google.com/?sl=".concat(h.code,"&tl=").concat(g.code,"&op=translate"))},children:[Object(w.jsx)(I.a,{}),"\xa0  Translate"]}),Object(w.jsxs)(y.a,{children:[h?Object(w.jsxs)(y.a,{className:t.myButton,children:["   ",h.name,"  "]}):null,h?Object(w.jsx)(F.a,{className:t.myIcon}):null,g?Object(w.jsxs)(y.a,{className:t.myButton,children:["  ",g.name,"  "]}):null]})]})]}),Object(w.jsx)(L,{}),v.map((function(t){return Object(w.jsx)(N,{myCountries:t,addLang:O},t.name)}))]})},M=n(77),P=n.n(M),q=n(78),Y=n(120),E=n.n(Y),J=n.p+"static/media/milkyway.b5734c67.jpeg",Q=Object(k.a)((function(){return{divStyle:{alignItems:"center",justifyContent:"center",textAlign:"center",backgroundImage:"url(".concat(J,")"),height:"100vh",objectFit:"cover",overflow:"hidden"},span404:{fontSize:"60px",color:"#f58d06",fontWeight:"bolder",textShadow:"2px 2px 2px black",position:"relative",top:"300px"},spanText:{fontSize:"25px",color:"#fff",fontWeight:"bolder",textShadow:"2px 2px 2px black",position:"relative",top:"300px"},errorText:{fontSize:"25px",color:"#fff",fontWeight:"bolder",textShadow:"2px 2px 2px black",marginBottom:"20px",position:"relative",top:"300px"},myButton:{backgroundColor:"#f58d06",color:"#fff",fontWeight:"bolder",textDecoration:"inherit !important",position:"relative",top:"300px",transform:"translateX(0px) !important",transition:".5s","&:hover":{backgroundColor:"rgb(255, 0, 32)",color:"#fff",transform:"translateX(-10px) !important",transition:".5s"}},link:{textDecoration:"none !important"}}})),G=function(){var t=Q();return Object(w.jsxs)(P.a,{loader:"bar",color:"white",size:9,duration:1,children:[Object(w.jsx)(q.a,{children:Object(w.jsx)("title",{children:"Page not found!"})}),Object(w.jsxs)("div",{className:t.divStyle,children:[Object(w.jsxs)(T.a,{children:[Object(w.jsx)("b",{children:Object(w.jsx)("span",{className:t.span404,children:"404."})}),Object(w.jsx)("span",{className:t.spanText,children:"Oops! An error has occurred!"})]}),Object(w.jsxs)(T.a,{className:t.errorText,children:["The requested URL was not found on this server!",Object(w.jsx)("br",{}),"You're lost in space now!"]}),Object(w.jsx)(s.b,{to:"/",className:t.link,children:Object(w.jsxs)(y.a,{variant:"contained",className:t.myButton,children:[Object(w.jsx)(E.a,{}),"Back"]})})]})]})},U=n(183),K=n(184),V=Object(k.a)((function(t){var e;return{appBar:{backgroundColor:"rgb(255, 0, 32);"},toolbar:(e={backgroundColor:"rgb(255, 0, 32);",textShadow:"0px 1px 2px rgb(255, 0, 32)",width:"fit-content",transform:"translateX(0px) !important",transition:"1s","&:hover":{transform:"translateX(10px) !important",transition:"1s"}},Object(v.a)(e,t.breakpoints.down("sm"),{margin:"auto"}),Object(v.a)(e,t.breakpoints.up("md"),{marginLeft:"1px"}),Object(v.a)(e,t.breakpoints.up("lg"),{marginLeft:"1px"}),e),t1:{color:"#0067b3",fontWeight:"bolder !important",backgroundColor:"#fff",borderRadius:"5px 0px 0px 5px",textShadow:"0px 1px 2px #0067b3"},t2:{color:"rgb(29, 148, 0);",fontWeight:"bolder !important",backgroundColor:"#fff",margin:"3px",textShadow:"0px 1px 2px rgb(29, 148, 0)"},t3:{color:"#f58d06;",fontWeight:"bolder !important",backgroundColor:"#fff",borderRadius:"0px 5px 5px 0px",textShadow:"0px 1px 2px #f58d06"}}})),Z=function(){var t=V();return Object(w.jsx)(U.a,{className:t.appBar,children:Object(w.jsxs)(K.a,{className:t.toolbar,children:[Object(w.jsx)(T.a,{variant:"h5",className:t.t1,children:"\xa0 \xa0 React \xa0"}),Object(w.jsx)(T.a,{variant:"h5",className:t.t2,children:"\xa0 GraphQL \xa0"}),Object(w.jsx)(T.a,{variant:"h5",className:t.t3,children:"\xa0 Countries \xa0"})]})})},$=Object(k.a)((function(t){return{footer:{marginTop:"auto",backgroundColor:"rgb(255, 0, 32);",textAlign:"center",position:"fixed",bottom:0,display:"block",width:"100vw",marginBottom:"0px",height:"33px"},typo:{color:"#fff",fontWeight:"bolder"}}})),_=function(){var t=$();return Object(w.jsx)("div",{children:Object(w.jsx)("footer",{className:t.footer,children:Object(w.jsxs)(T.a,{className:t.typo,children:["Copyright "," "," \xa9  ",(new Date).getFullYear(),"\xa0 Cia from Earth! All rights reserved."]})})})},tt=function(){var t=new l.a({uri:"https://countries.trevorblades.com/"});return Object(w.jsxs)(P.a,{loader:"bar",color:"#fff",size:9,duration:1,children:[Object(w.jsx)(q.a,{children:Object(w.jsx)("title",{children:"Planet Earth Countries"})}),Object(w.jsxs)(c.ApolloProvider,{client:t,children:[Object(w.jsx)(Z,{}),Object(w.jsx)(s.a,{children:Object(w.jsxs)(p.c,{children:[Object(w.jsx)(p.a,{path:"/",exact:!0,component:H}),Object(w.jsx)(p.a,{component:G}),Object(w.jsx)(p.a,{path:"*",exact:!0,component:G})]})}),Object(w.jsx)(_,{})]})]})};n(146);i.a.render(Object(w.jsx)(tt,{}),document.getElementById("root"))}},[[147,1,2]]]);
//# sourceMappingURL=main.9ca443c0.chunk.js.map