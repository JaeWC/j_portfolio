(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(7),r=t.n(c),s=(t(14),t(1)),o=t(2),i=t(4),m=t(3),u=t(5),d=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#project"},"Projects")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#devstack"},"Devstack")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},e.name),l.a.createElement("h3",null,e.role,l.a.createElement("p",null,"Let's"," ",l.a.createElement("a",{class:"smoothscroll",href:"#about"},"start scrolling"," "),"and learn more"," ",l.a.createElement("a",{class:"smoothscroll",href:"#about"},"about me."))),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),p=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:"images/J_image.png",alt:""})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,e.aboutme),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e.name),l.a.createElement("br",null),l.a.createElement("span",null,e.address_1,l.a.createElement("br",null),e.address_2),l.a.createElement("br",null),l.a.createElement("span",null,e.phoneNumber),l.a.createElement("br",null),l.a.createElement("span",null,e.email))),l.a.createElement("div",{className:"columns download"},l.a.createElement("p",null,l.a.createElement("a",{href:"assets/\ucd5c\uc7ac\uc6d0_Resume.pdf",download:"\ucd5c\uc7ac\uc6d0_resume.pdf",className:"button"},l.a.createElement("i",{className:"fa fa-download"}),"Download Resume")))))))}}]),a}(n.Component),E=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"devstack"},l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Project History "))),l.a.createElement("div",{className:"nine columns main-col"},e.history&&e.history.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.title),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.from," - ",e.to)),l.a.createElement("p",null,e.Achievements.map(function(e){return l.a.createElement("span",null,e," ",l.a.createElement("br",null))}))))}))),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col skills"},l.a.createElement("ul",null,e.skills&&e.skills.map(function(e,a){return l.a.createElement("li",{key:a},e)})))))}}]),a}(n.Component),h=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"project"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Check Out Some of My Works."),l.a.createElement("div",{id:"project-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map(function(e){return l.a.createElement("div",{className:"columns project-item",key:e.id},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("a",{href:"#modal-".concat(e.id),title:"true"},l.a.createElement("img",{alt:"",src:"".concat(e.thumbnail_img),className:"item-img"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"project-item-meta"},l.a.createElement("h5",null,e.name),l.a.createElement("p",null,e.description1),l.a.createElement("p",null,e.description2))),l.a.createElement("div",{className:"link-icon"},l.a.createElement("i",{className:"icon-plus"})))))})),e.portfolio.map(function(e){return l.a.createElement("div",{id:"modal-".concat(e.id),className:"popup-modal mfp-hide",key:e.id},l.a.createElement("img",{className:"scale-with-grid",src:"".concat(e.detail_img),alt:""}),l.a.createElement("div",{className:"description-box"},l.a.createElement("h2",null,e.name),l.a.createElement("h4",null,e.service),l.a.createElement("p",null,l.a.createElement("strong",null,"Front-end : "),e.front_end,l.a.createElement("br",null),l.a.createElement("strong",null,"Back-end : "),e.back_end),l.a.createElement("p",null,e.works.map(function(e,a){return l.a.createElement("span",{key:a}," ",e," ",l.a.createElement("br",null)," ")})),l.a.createElement("span",{className:"categories"},l.a.createElement("i",{className:"fa fa-tag"}),e.tags.map(function(a,t){return t===e.tags.length-1?a:"".concat(a,", ")}))),l.a.createElement("div",{className:"link-box"},l.a.createElement("a",{href:e.video},"Introduction"),l.a.createElement("a",{className:"popup-modal-dismiss"},"Close")))}))))}}]),a}(n.Component),v=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"ten columns"},l.a.createElement("h2",null,"CONTACT"),l.a.createElement("p",{className:"lead"},"Feel free to contact me for any work or suggestions below"))),l.a.createElement("div",{className:"row"},l.a.createElement("aside",{className:"eigth columns footer-widgets"},l.a.createElement("div",{className:"widget"},l.a.createElement("h4",null,l.a.createElement("i",{className:"fa fa-map-marker"})," : ",e.address_1),l.a.createElement("h4",null,l.a.createElement("i",{className:"fa fa-phone"})," : ",e.phoneNumber),l.a.createElement("h4",null,l.a.createElement("i",{className:"fa fa-envelope"})," : ",e.email)))))}}]),a}(n.Component),N=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e,a){return l.a.createElement("li",{key:a},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))})),l.a.createElement("ul",{className:"copyright"},l.a.createElement("li",null,"\xa9 Copyright 2018 Jae"),l.a.createElement("li",null,"Design by"," ",l.a.createElement("a",{title:"Styleshout",href:"http://www.styleshout.com/"},"Styleshout")))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),f={imagebaseurl:"https://jaewc.github.io/j_portfolio/",name:"Choi Jae Won",role:"Software Engineer",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/jae-won-choi-152a9a14a/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/JaeWC",className:"fa fa-github"}],aboutme:"2018\ub144 7\uc6d4, \ubcf8\uaca9\uc801\uc73c\ub85c \uac1c\ubc1c\uc744 \uacf5\ubd80\ud558\uba70 \uac1c\ubc1c\uc790\ub85c\uc11c\uc758 \uc0c8\ub85c\uc6b4 \uc0b6\uc744 \uc0b4\uc544\uac00\uace0 \uc788\ub2e4.",address_1:"\uacbd\uae30\ub3c4 \uc131\ub0a8\uc2dc \ubd84\ub2f9\uad6c",address_2:"\ub0b4\uc815\ub85c 185",phoneNumber:"82-10-6655-2027",email:"j.thechois@gmail.com",portfolio:[{id:"01",name:"_ToPic",description1:"App Store & Google Play",description2:"(2019\ub144 1\uc6d4 \ucd9c\uc2dc \uc608\uc815)",service:"\uac19\uc740 \uc8fc\uc81c\uc5d0 \ub300\ud574 \uc720\uc800\ub4e4\uc774 \ub9cc\ub4e4\uc5b4\uac00\ub294 \uc0ac\uc9c4\uc804 SNS",front_end:"React Native, Redux",back_end:"Express, MongoDB, AWS",works:["multer \ubaa8\ub4c8\uc744 \uc0ac\uc6a9\ud558\uc5ec AWS S3\uc5d0 \uc0ac\uc9c4 \uc5c5\ub85c\ub4dc \ubc0f \uc0ad\uc81c \uae30\ub2a5\uc744 \uad6c\ud604\ud558\uace0 \uc774\ubbf8\uc9c0 \ucd5c\uc801\ud654 \uc791\uc5c5 \uc9c4\ud589","JWT Token \ubc1c\uae09\uc744 \uc704\ud55c Social Login(Kakao Login)\uacfc \uc571 \uc790\uccb4 \ub85c\uadf8\uc778 \uad6c\ud604\uc73c\ub85c \uc0ac\uc6a9\uc790 \uc778\uc99d","Redux\ub97c \uc0ac\uc6a9\ud558\uc5ec \uac01 React Native Component \ubcc4\ub85c \ud544\uc694\ud55c State\ub9cc\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \uad6c\ud604","Redux State\ub97c \ud65c\uc6a9\ud558\uc5ec \ub313\uae00 \ub4f1\ub85d/\uc0ad\uc81c\uc640 \ucd94\ucc9c \uc218 \uc99d\uac00/\uac10\uc18c action \uc2dc Front \ucc98\ub9ac \uc18d\ub3c4 \ud5a5\uc0c1","User Experience \uadf9\ub300\ud654\ub97c \uc704\ud574 React Native Navigation\uc758 Navigation Action \ucd5c\uc801\ud654"],tags:["Mobile App","Full-Stack"],thumbnail_img:"images/portfolio/_ToPic/_ToPic.png",detail_img:"images/portfolio/_ToPic/m-_ToPic.png",video:"https://www.youtube.com/watch?v=qvjwIZ5GX3k"},{id:"02",name:"WeGoing",description1:"Google Play(2018\ub144 \uc5f0\ub0b4 \ucd9c\uc2dc \uc608\uc815)",description2:"App Store(2019\ub144 1\uc6d4 \ucd9c\uc2dc \uc608\uc815)",service:"\uc2e4\uc2dc\uac04 \uc704\uce58 \uacf5\uc720 \uba54\uc2e0\uc800",front_end:"React Native, Redux, Socket.io",back_end:"Express, MySQL, Redis, Socket.io, AWS",works:["1\uc2dc\uac04\uc758 \ucc44\ud305\ubc29 \uc720\ud6a8\uae30\uac04\uc744 \uad6c\ud604\ud558\uace0 DB \ubd80\ud558 \uac10\uc18c\uc640 Log \ud65c\uc6a9\uc744 \uc704\ud55c Node \uc11c\ubc84 Scheduler \uad6c\uc131","\ud68c\uc6d0\uac00\uc785 \ubc0f \ub85c\uadf8\uc778 \uac04\ud3b8\ud654\uc640 \uc0ac\uc6a9\uc790 \uc778\uc99d\uc744 \uc704\ud574 SMS \uc778\uc99d\ubc88\ud638 \uc2dc\uc2a4\ud15c \uad6c\ud604","\uc2e4\uc2dc\uac04 \uc704\uce58 \uacf5\uc720\uc640 \ucc44\ud305 \uad6c\ud604\uc744 \uc704\ud574 Socket \ud1b5\uc2e0\uc774 \uac00\ub2a5\ud55c Socket.io \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9","Socket \ud1b5\uc2e0\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ud558\uc9c0 \ubabb\ud55c \uc704\uce58 \ubc0f \ub300\ud654 \ub0b4\uc6a9\uc744 \ucd5c\uc2e0\ud654\ud558\uae30 \uc704\ud574 Redis \uc0ac\uc6a9","Node.js \uc11c\ubc84 clustering\uacfc Stateful Application\uc758 \uacf5\uc720 \uba54\ubaa8\ub9ac\ub97c \uc704\ud55c Redis Store \uc0ac\uc6a9"],tags:["Mobile App","Back-end"],thumbnail_img:"images/portfolio/WeGoing/WeGoing.png",detail_img:"images/portfolio/WeGoing/m-WeGoing.png",video:"https://www.youtube.com/watch?v=TDw_jwEcN5M"}],skills:["JavaScript","Node.js","WebSocket","MySQL","MongoDB","Redis","AWS","ReactJS","React Native","Redux","Git","Python"],history:[{title:"_ToPic",specialization:"Full-Stack Developer",from:"Oct 2018",to:"Nov 2018",Achievements:["Node.js\ub97c \ud1b5\ud55c AWS S3 \uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc\u2219\uc0ad\uc81c \ubc0f \uc774\ubbf8\uc9c0 \ucd5c\uc801\ud654 \uc791\uc5c5","MongoDB Schema \ub514\uc790\uc778 \ubc0f Mongoose\ub97c \uc774\uc6a9\ud55c CRUD System \uad6c\ucd95","User Experience \ucd5c\uc801\ud654 \ubc0f \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158 \uc791\ub3d9 \ucd5c\uc801\ud654\ub97c \uc704\ud55c React-Native Navigation Design","Redux \ubc0f Redux-thunk\ub97c \uc0ac\uc6a9\ud558\uc5ec \uac01 Component \ubcc4 State \uad00\ub9ac \ucd5c\uc801\ud654"]},{title:"WeGoing",specialization:"Back-End Developer",from:"Nov 2018",to:"Dec 2018",Achievements:["Naver Cloud Platform SENS\ub97c \uc774\uc6a9\ud55c \ud578\ub4dc\ud3f0 SMS \uc778\uc99d\ubc88\ud638 \uc2dc\uc2a4\ud15c \uad6c\ud604","Socket.io Clustering\uacfc Redis Pub/Sub\uc744 \uc774\uc6a9\ud55c Server Load Balancing \uad6c\ud604","MySQL Schema \ub514\uc790\uc778 \ubc0f Sequelize\ub97c \uc774\uc6a9\ud55c CRUD System \uad6c\ucd95","\ucd5c\ub300 \ub3d9\uc2dc\uc811\uc18d \uac00\ub2a5\ud55c \uc720\uc800 \uc218\ub97c \ud30c\uc545\ud558\uae30 \uc704\ud55c Artillery Server Stress Test \uc9c4\ud589"]}]},b=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(d,{resumeData:f}),l.a.createElement(p,{resumeData:f}),l.a.createElement(h,{resumeData:f}),l.a.createElement(E,{resumeData:f}),l.a.createElement(v,{resumeData:f}),l.a.createElement(N,{resumeData:f}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(16)}},[[8,2,1]]]);
//# sourceMappingURL=main.fc7734f7.chunk.js.map