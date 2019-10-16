!function(e){var t={};function i(l){if(t[l])return t[l].exports;var u=t[l]={i:l,l:!1,exports:{}};return e[l].call(u.exports,u,u.exports,i),u.l=!0,u.exports}i.m=e,i.c=t,i.d=function(e,t,l){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(i.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)i.d(l,u,function(t){return e[t]}.bind(null,u));return l},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){"use strict";t.__esModule=!0;var l=i(1);l.renderTitle("Still Life",1);var u=i(3),f=i(4),n=i(5),a=i(6),o=i(7),s=i(8),r=i(9),d=i(10),c=i(11),_=i(12),M=i(13),h=i(14),v=i(15),B=i(16),p=i(17),m=i(18),C=i(19),b=i(20),g=i(21),w=i(22),y=i(23),k=i(24),E=i(25),L=i(26),T=i(27),x=i(28),I=i(29),N=i(30),S=i(31),O=i(32),A=i(33),D=i(34),G=i(35),H=i(36),R=i(37),P=i(38),j=i(39),V=i(40),K=i(41),F=i(42),W=i(43),X=i(44),Y=i(45),U=i(46),q=i(47),z=i(48),J=i(49),Q=i(50),Z=i(51),$=i(52),ee=i(53),te=i(54),ie=i(55),le=i(56),ue=i(57),fe=i(58),ne=i(59),ae=i(60),oe=i(61),se=i(62),re=i(63),de=i(64),ce=i(65),_e=i(66),Me=i(67),he=i(68),ve=i(69),Be=i(70),pe=i(71),me=i(72),Ce=i(73),be=i(74),ge=i(75),we=i(76),ye=i(77),ke=i(78),Ee=i(79);l.renderTitle("Strict Still Life",2),[u.default,f.default,n.default,a.default,o.default,s.default,r.default,d.default,c.default,_.default,M.default,h.default,v.default,B.default,p.default,m.default,C.default,b.default,g.default,w.default,y.default,k.default,E.default,L.default,T.default,x.default,I.default,N.default,S.default,O.default,A.default,D.default,G.default,H.default,R.default,P.default,j.default,V.default,K.default,F.default,W.default,X.default,Y.default,Z.default,U.default,q.default,z.default,J.default,Q.default,$.default,ee.default,te.default,ie.default,le.default,ue.default,fe.default,ne.default,ae.default,oe.default,se.default,re.default,de.default,ce.default,_e.default,Me.default,he.default,ve.default,Be.default,pe.default,me.default,Ce.default,be.default,ge.default,we.default,ye.default,ke.default,Ee.default].forEach((function(e){return l.renderLife(e.title,e.life)}));var Le=i(80),Te=i(81),xe=i(82);l.renderTitle("Pseudo Still Life",2),[Le.default,Te.default,xe.default].forEach((function(e){return l.renderLife(e.title,e.life)}));var Ie=i(83),Ne=i(84),Se=i(85);l.renderTitle("Oscillator",1),[Ie.default,Ne.default,Se.default].forEach((function(e){return l.renderLife(e.title,e.life)}));var Oe=i(86);l.renderTitle("Muttering moat",2),[Oe.default].forEach((function(e){return l.renderLife(e.title,e.life)}));var Ae=i(87),De=i(88);l.renderTitle("Eater",1),[Ae.default,De.default].forEach((function(e){return l.renderLife(e.title,e.life)}))},function(e,t,i){"use strict";t.__esModule=!0;var l=i(2),u=function(e,t){var i=document.createElement("H"+t);return i.textContent=e,i};t.renderTitle=function(e,t){var i=u(e,t);document.body.appendChild(i)},t.renderLife=function(e,t){var i=u(e,3),f=new l.GameOfLifeEngine(t),n=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var i=document.createElement("DIV");return i.className="container",e.forEach((function(e){return i.appendChild(e)})),i}(i,f.canvas);document.body.appendChild(n),f.startLife()}},function(e,t,i){"use strict";var l;t.__esModule=!0,function(e){e[e.WIDTH=16]="WIDTH",e[e.HEIGHT=16]="HEIGHT",e[e.MARGIN=2]="MARGIN",e.DEAD_COLOR="#F2F2F7",e.SURVIVE_COLOR="#1C1C1E"}(l||(l={}));var u={getCoordinateX:function(e){return(l.MARGIN+l.WIDTH)*e+l.MARGIN},getCoordinateY:function(e){return(l.MARGIN+l.HEIGHT)*e+l.MARGIN}},f=function(){function e(e){var t=document.createElement("canvas"),i=t.getContext("2d"),l=e.map((function(e){return e.length})).reduce((function(e,t){return Math.min(e,t)})),f=e.length;if(!i)throw"Failed to create context";t.width=u.getCoordinateX(l),t.height=u.getCoordinateY(f),this.x=l,this.y=f,this.life=e,this.canvas=t,this.context=i}return e.prototype.clear=function(){this.context.fillStyle="#AEAEB2",this.context.fillRect(0,0,this.canvas.width,this.canvas.height)},e.prototype.drawDot=function(e,t){this.context.fillRect(u.getCoordinateX(e),u.getCoordinateY(t),l.WIDTH,l.HEIGHT)},e.prototype.drawDots=function(){var e=this;this.clear(),this.life.forEach((function(t,i){t.forEach((function(t,u){e.context.fillStyle=t?l.SURVIVE_COLOR:l.DEAD_COLOR,e.drawDot(u,i)}))}))},e.prototype.isSurviveNextGeneration=function(e,t,i){var l=this.life,u=this.x-1,f=this.y-1,n=Number(0<t&&0<e&&l[t-1][e-1])+Number(0<t&&l[t-1][e])+Number(0<t&&e<u&&l[t-1][e+1])+Number(0<e&&l[t][e-1])+Number(e<u&&l[t][e+1])+Number(t<f&&0<e&&l[t+1][e-1])+Number(t<f&&l[t+1][e])+Number(t<f&&e<u&&l[t+1][e+1]);return i&&(2===n||3===n)||!i&&3===n?1:0},e.prototype.startLife=function(){var e=this;this.intervalKey||(this.intervalKey=window.setInterval((function(){e.drawDots();var t=e.life;e.life=t.map((function(t,i){return t.map((function(t,l){return e.isSurviveNextGeneration(l,i,t)}))}))}),500))},e.prototype.stopLife=function(){null!==this.intervalKey&&(clearInterval(this.intervalKey),this.intervalKey=null)},e}();t.GameOfLifeEngine=f},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"15 Bent Paperclip",life:[[0,0,0,0,0,0,0,0,0],[0,0,0,1,1,0,0,0,0],[0,0,1,0,1,1,1,0,0],[0,1,0,0,0,0,0,1,0],[0,0,1,1,1,1,0,1,0],[0,0,0,0,1,0,1,0,0],[0,0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"29-bit Still Life No.1",life:[[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,1,0,1,0,0],[0,1,1,0,1,0,1,0,1,0],[0,1,1,0,1,0,1,0,1,0],[0,0,0,0,1,0,1,1,0,0],[0,1,1,0,1,0,0,0,0,0],[0,1,1,0,1,0,0,0,0,0],[0,0,0,0,1,0,1,1,0,0],[0,0,0,0,1,0,0,1,0,0],[0,0,0,0,0,1,1,0,0,0],[0,0,0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"31.4",life:[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,1,1,0,0,0,0,0,0,0,0,0,0],[0,0,0,1,0,1,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,1,1,0,0,0],[0,1,1,1,1,0,1,1,0,0,1,0,0,1,0],[0,1,0,0,1,0,1,0,1,0,1,0,1,1,0],[0,0,0,0,1,0,1,0,1,0,1,0,0,0,0],[0,0,0,0,0,1,1,0,1,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Aircraft Carrier",life:[[0,0,0,0,0,0],[0,1,1,0,0,0],[0,1,0,0,1,0],[0,0,0,1,1,0],[0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Amphisbaena",life:[[0,0,0,0,0,0,0,0,0],[0,1,0,1,0,0,0,0,0],[0,1,1,0,1,0,0,0,0],[0,0,0,0,1,0,0,0,0],[0,0,0,0,1,0,1,1,0],[0,0,0,0,0,1,0,1,0],[0,0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Aries Betwixt Two Blocks",life:[[0,0,0,0,0,0,0,0,0,0,0],[0,0,1,1,0,0,0,1,1,0,0],[0,1,0,0,1,0,1,0,0,1,0],[0,1,1,0,1,0,1,0,1,1,0],[0,0,0,0,1,0,1,0,0,0,0],[0,0,0,0,1,0,1,0,0,0,0],[0,1,1,0,1,0,1,0,1,1,0],[0,1,1,0,1,0,1,0,1,1,0],[0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Asymmetric Amphisbaena",life:[[0,0,0,0,0,0,0],[0,0,0,1,1,0,0],[0,0,0,1,0,0,0],[0,0,0,0,1,0,0],[0,0,0,0,0,1,0],[0,0,1,1,1,0,0],[0,1,0,0,0,0,0],[0,0,1,0,0,0,0],[0,1,1,0,0,0,0],[0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Barge",life:[[0,0,0,0,0,0],[0,0,1,0,0,0],[0,1,0,1,0,0],[0,0,1,0,1,0],[0,0,0,1,0,0],[0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Barge Siamese Loaf",life:[[0,0,0,0,0,0,0],[0,0,0,1,1,0,0],[0,0,1,0,0,1,0],[0,1,0,1,0,1,0],[0,0,1,0,1,0,0],[0,0,0,1,0,0,0],[0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Barge with Long Tail",life:[[0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0],[0,1,0,1,0,0,0,0,0],[0,0,1,0,1,0,0,0,0],[0,0,0,1,0,0,1,1,0],[0,0,0,0,1,1,0,1,0],[0,0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Barge with Very Long Tail",life:[[0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0],[0,1,0,1,0,0,0,0,0,0],[0,0,1,0,1,0,0,1,1,0],[0,0,0,1,0,0,1,0,1,0],[0,0,0,0,1,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Bee Hat",life:[[0,0,0,0,0,0,0,0],[0,0,1,1,0,0,0,0],[0,1,0,0,1,0,0,0],[0,0,1,1,0,1,0,0],[0,0,0,1,0,1,0,0],[0,1,0,1,0,1,1,0],[0,1,1,0,0,0,0,0],[0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Beehive",life:[[0,0,0,0,0,0],[0,0,1,1,0,0],[0,1,0,0,1,0],[0,0,1,1,0,0],[0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Beehive at Beehive",life:[[0,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0],[0,0,0,0,1,0,1,0],[0,0,0,0,1,0,1,0],[0,0,1,1,0,1,0,0],[0,1,0,0,1,0,0,0],[0,0,1,1,0,0,0,0],[0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Beehive at Claw",life:[[0,0,0,0,0,0,0,0],[0,0,0,0,1,1,0,0],[0,0,0,1,0,0,1,0],[0,0,1,0,1,1,0,0],[0,0,0,1,0,0,0,0],[0,1,0,1,0,0,0,0],[0,1,1,0,0,0,0,0],[0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Beehive at Loaf",life:[[0,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0],[0,0,0,0,1,0,1,0],[0,0,0,0,1,0,1,0],[0,0,1,1,0,1,0,0],[0,1,0,0,1,0,0,0],[0,1,0,1,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Beehive on Cap",life:[[0,0,0,0,0,0,0],[0,0,1,1,0,0,0],[0,1,0,0,1,0,0],[0,1,1,1,1,0,0],[0,0,0,0,0,0,0],[0,0,0,1,1,0,0],[0,0,1,0,0,1,0],[0,0,0,1,1,0,0],[0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Beehive on Dock",life:[[0,0,0,0,0,0,0,0,0],[0,1,1,0,0,0,1,0,0],[0,1,0,1,0,1,0,1,0],[0,0,0,1,0,1,0,1,0],[0,0,0,1,0,0,1,0,0],[0,1,0,1,0,0,0,0,0],[0,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Beehive on Table",life:[[0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,1,0,1,0,1,1,0],[0,1,0,1,0,1,0,0],[0,0,1,0,0,1,0,0],[0,0,0,0,0,1,1,0],[0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Beehive with Bend Tail",life:[[0,0,0,0,0,0,0],[0,0,1,1,0,0,0],[0,1,0,0,1,0,0],[0,0,1,1,0,1,0],[0,0,0,0,0,1,0],[0,0,1,1,1,0,0],[0,0,1,0,0,0,0],[0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Beehive with Nine",life:[[0,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0],[0,0,0,0,1,0,1,0],[0,0,0,0,1,0,1,0],[0,0,0,0,0,1,0,0],[0,0,1,1,1,0,0,0],[0,1,0,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Beehive with Tail",life:[[0,0,0,0,0,0,0,0],[0,0,1,1,0,0,0,0],[0,1,0,0,1,0,0,0],[0,0,1,1,0,1,0,0],[0,0,0,0,0,1,0,0],[0,0,0,0,0,1,1,0],[0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Bi-cap",life:[[0,0,0,0,0,0],[0,0,1,1,0,0],[0,1,0,0,1,0],[0,1,1,1,1,0],[0,0,0,0,0,0],[0,1,1,1,1,0],[0,1,0,0,1,0],[0,0,1,1,0,0],[0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Bi-loaf2",life:[[0,0,0,0,0,0,0,0,0],[0,0,0,1,0,0,0,0,0],[0,0,1,0,1,0,0,0,0],[0,1,0,0,1,0,0,0,0],[0,0,1,1,0,1,1,0,0],[0,0,0,0,1,0,0,1,0],[0,0,0,0,1,0,1,0,0],[0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Bi-pond",life:[[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,1,1,0,0,0,0,0,0],[0,0,1,0,0,1,0,0,0,0,0],[0,0,1,0,0,1,0,0,0,0,0],[0,0,0,1,1,0,1,1,0,0,0],[0,0,0,0,0,1,0,0,1,0,0],[0,0,0,0,0,1,0,0,1,0,0],[0,0,0,0,0,0,1,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Big S",life:[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,1,0,0],[0,0,0,0,1,0,0,1,0],[0,0,0,0,1,0,1,1,0],[0,1,1,0,1,0,0,0,0],[0,1,0,0,1,0,0,0,0],[0,0,1,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Block",life:[[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Block on cap",life:[[0,0,0,0,0,0],[0,0,1,1,0,0],[0,1,0,0,1,0],[0,1,1,1,1,0],[0,0,0,0,0,0],[0,1,1,0,0,0],[0,1,1,0,0,0],[0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Block on cover",life:[[0,0,0,0,0,0,0],[0,1,1,0,1,1,0],[0,1,1,0,1,0,0],[0,0,0,0,1,0,0],[0,1,1,1,0,0,0],[0,1,0,0,0,0,0],[0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Block on dock",life:[[0,0,0,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,0,1,0,1,1,0],[0,0,0,1,0,1,1,0],[0,0,0,1,0,0,0,0],[0,1,0,1,0,0,0,0],[0,1,1,0,0,0,0,0],[0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Block on table",life:[[0,0,0,0,0,0],[0,0,0,1,1,0],[0,0,0,1,1,0],[0,0,0,0,0,0],[0,1,1,1,1,0],[0,1,0,0,1,0],[0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Boat",life:[[0,0,0,0,0],[0,1,1,0,0],[0,1,0,1,0],[0,0,1,0,0],[0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Boat tie eater head",life:[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0],[0,0,0,0,0,1,0,1,0],[0,0,0,0,0,1,1,0,0],[0,0,0,1,1,0,0,0,0],[0,0,1,0,1,0,0,0,0],[0,0,1,0,0,0,0,0,0],[0,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Boat tie eater tail",life:[[0,0,0,0,0,0,0],[0,0,1,1,0,0,0],[0,0,1,0,1,0,0],[0,0,0,0,1,0,0],[0,0,0,0,1,1,0],[0,0,1,1,0,0,0],[0,1,0,1,0,0,0],[0,0,1,0,0,0,0],[0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Boat tie long boat",life:[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0],[0,0,0,0,0,1,0,1,0],[0,0,0,0,0,1,1,0,0],[0,0,0,1,1,0,0,0,0],[0,0,1,0,1,0,0,0,0],[0,1,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Boat tie long snake",life:[[0,0,0,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,0,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,0,1,0,0,0,0],[0,0,1,1,0,0,0,0],[0,0,0,0,1,1,0,0],[0,0,0,0,1,0,1,0],[0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Boat tie ship",life:[[0,0,0,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,0,1,0,0,0,0],[0,0,1,1,0,0,0,0],[0,0,0,0,1,1,0,0],[0,0,0,0,1,0,1,0],[0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Boat tie snake",life:[[0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0],[0,1,0,1,0,0,0,0,0],[0,0,1,1,0,0,0,0,0],[0,0,0,0,1,1,0,1,0],[0,0,0,0,1,0,1,1,0],[0,0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Boat with cis-tail",life:[[0,0,0,0,0,0,0,0,0],[0,1,1,0,0,0,0,0,0],[0,1,0,0,0,0,1,1,0],[0,0,1,0,0,1,0,1,0],[0,0,0,1,0,0,1,0,0],[0,0,0,0,1,1,0,0,0],[0,0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Boat with hooked tail",life:[[0,0,0,0,0,0,0,0],[0,1,1,0,1,1,0,0],[0,0,1,0,1,0,1,0],[0,0,1,0,0,1,0,0],[0,0,0,1,1,0,0,0],[0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Boat with long tail",life:[[0,0,0,0,0,0,0,0],[0,1,0,1,1,0,0,0],[0,1,1,0,0,1,0,0],[0,0,0,0,1,0,1,0],[0,0,0,0,0,1,1,0],[0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Boat with long3 tail",life:[[0,0,0,0,0,0],[0,1,1,0,0,0],[0,1,0,1,0,0],[0,0,1,0,1,0],[0,0,0,0,1,0],[0,0,0,1,0,0],[0,0,1,0,0,0],[0,1,0,0,0,0],[0,1,1,0,0,0],[0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Boat with very long tail",life:[[0,0,0,0,0,0,0,0,0],[0,1,1,0,0,0,0,0,0],[0,1,0,1,0,0,1,1,0],[0,0,1,0,0,1,0,1,0],[0,0,0,1,1,0,0,0,0],[0,0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Bookends",life:[[0,0,0,0,0,0,0,0,0],[0,1,1,0,0,0,1,1,0],[0,1,0,1,0,1,0,1,0],[0,0,0,1,0,1,0,0,0],[0,0,1,1,0,1,1,0,0],[0,0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Bookends siamese tables",life:[[0,0,0,0,0,0,0,0,0],[0,1,1,0,0,0,1,1,0],[0,1,0,1,0,1,0,1,0],[0,0,0,1,0,1,0,0,0],[0,0,1,1,0,1,1,0,0],[0,0,0,1,0,1,0,0,0],[0,0,0,1,0,1,0,0,0],[0,0,1,1,0,1,1,0,0],[0,0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Broken elevener",life:[[0,0,0,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,1,0,0,0,0,0,0],[0,0,1,1,1,0,0,0],[0,0,0,0,1,0,0,0],[0,0,0,0,1,0,1,0],[0,0,0,0,0,1,1,0],[0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Broken snake",life:[[0,0,0,0,0],[0,0,1,1,0],[0,0,0,1,0],[0,0,1,0,0],[0,0,1,1,0],[0,0,0,1,0],[0,1,0,0,0],[0,1,1,0,0],[0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"BTS",life:[[0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,0,0,0],[0,0,0,0,1,0,0,1,0],[0,0,0,0,0,1,1,1,0],[0,0,0,0,0,0,0,0,0],[0,1,1,0,1,0,1,1,0],[0,1,0,1,1,0,1,0,0],[0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,1,1,0],[0,0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Boat-tie",life:[[0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,1,0,1,0,0,0,0],[0,0,1,1,0,0,0,0],[0,0,0,0,1,1,0,0],[0,0,0,0,1,0,1,0],[0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Canoe",life:[[0,0,0,0,0,0,0],[0,0,0,0,1,1,0],[0,0,0,0,0,1,0],[0,0,0,0,1,0,0],[0,1,0,1,0,0,0],[0,1,1,0,0,0,0],[0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Canoe siamese snake",life:[[0,0,0,0,0,0,0,0,0,0],[0,1,1,0,1,1,0,0,0,0],[0,1,0,1,1,0,1,0,0,0],[0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,1,1,0],[0,0,0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Cap and dock",life:[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,1,0],[0,0,1,1,0,1,0,1,0],[0,1,0,1,0,1,0,0,0],[0,1,0,1,0,1,0,0,0],[0,0,1,1,0,1,0,1,0],[0,0,0,0,0,0,1,1,0],[0,0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Carrier bridge carrier",life:[[0,0,0,0,0,0,0,0],[0,0,0,1,1,0,0,0],[0,1,0,0,1,0,0,0],[0,1,1,0,0,1,1,0],[0,0,0,0,0,0,1,0],[0,0,0,0,1,0,0,0],[0,0,0,0,1,1,0,0],[0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Carrier bridge snake",life:[[0,0,0,0,0,0,0,0],[0,0,0,1,1,0,0,0],[0,0,0,1,0,0,1,0],[0,1,1,0,0,1,1,0],[0,1,0,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Carrier bridge table",life:[[0,0,0,0,0,0,0,0],[0,1,0,0,1,0,0,0],[0,1,1,1,1,0,0,0],[0,0,0,0,0,1,1,0],[0,0,0,1,0,0,1,0],[0,0,0,1,1,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Carrier siamese canoe",life:[[0,0,0,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,0,0,0,0,0,0],[0,0,0,1,0,0,0,0],[0,0,1,1,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,0,1,0,0,0,0],[0,0,0,0,1,0,1,0],[0,0,0,0,0,1,1,0],[0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Carrier siamese carrier",life:[[0,0,0,0,0,0],[0,0,0,1,1,0],[0,0,0,0,1,0],[0,0,1,0,0,0],[0,0,1,1,0,0],[0,0,0,1,0,0],[0,1,0,0,0,0],[0,1,1,0,0,0],[0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Carrier siamese dock",life:[[0,0,0,0,0,0,0,0],[0,1,1,0,0,1,1,0],[0,1,0,0,0,0,1,0],[0,0,1,1,1,1,0,0],[0,0,0,0,1,0,0,0],[0,0,0,0,0,0,1,0],[0,0,0,0,0,1,1,0],[0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Carrier siamese eater head",life:[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,1,0],[0,0,0,1,1,0,0,1,0],[0,0,1,0,1,1,0,0,0],[0,0,1,0,0,0,0,0,0],[0,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Carrier siamese eater tail",life:[[0,0,0,0,0,0],[0,0,0,1,1,0],[0,0,1,0,1,0],[0,0,1,0,0,0],[0,1,1,0,0,0],[0,1,0,0,0,0],[0,0,0,1,0,0],[0,0,1,1,0,0],[0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Carrier siamese hook-with-tail hook",life:[[0,0,0,0,0,0,0,0,0,0],[0,1,1,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,1,1,0],[0,0,1,0,1,1,0,0,1,0],[0,0,0,1,0,1,1,0,0,0],[0,0,0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Carrier siamese hook-with-tail tail",life:[[0,0,0,0,0,0,0,0,0],[0,1,1,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0],[0,1,0,0,0,0,1,1,0],[0,0,1,1,1,0,0,1,0],[0,0,0,0,1,1,0,0,0],[0,0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Carrier siamese long snake",life:[[0,0,0,0,0,0],[0,0,0,1,1,0],[0,0,0,0,1,0],[0,0,1,0,0,0],[0,0,1,1,0,0],[0,0,0,1,0,0],[0,0,1,0,0,0],[0,1,0,0,0,0],[0,1,1,0,0,0],[0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Carrier siamese shillelagh",life:[[0,0,0,0,0,0],[0,1,1,0,0,0],[0,1,0,0,0,0],[0,0,0,1,0,0],[0,0,1,1,0,0],[0,0,1,0,0,0],[0,0,0,1,0,0],[0,1,0,1,0,0],[0,1,1,0,0,0],[0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Carrier siamese tub with tail",life:[[0,0,0],[0,0,0],[0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Carrier siamese very long snake",life:[[0,0,0],[0,0,0],[0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Carrier tie boat",life:[[0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,1,0,1,0,0,0,0],[0,0,1,1,0,0,0,0],[0,0,0,0,1,1,0,0],[0,0,0,0,1,0,0,0],[0,0,0,0,0,0,1,0],[0,0,0,0,0,1,1,0],[0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Carrier tie ship",life:[[0,0,0,0,0,0,0,0],[0,0,0,0,0,1,1,0],[0,0,0,0,1,0,1,0],[0,0,0,0,1,1,0,0],[0,0,1,1,0,0,0,0],[0,0,0,1,0,0,0,0],[0,1,0,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Carrier with feather",life:[[0,0,0,0,0,0,0,0,0],[0,1,1,0,0,1,0,0,0],[0,1,0,0,1,0,1,0,0],[0,0,0,1,1,0,0,1,0],[0,0,0,0,0,0,1,1,0],[0,0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Claw siamese tub with cape",life:[[0,0,0],[0,0,0],[0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Claw with boat with tail",life:[[0,0,0],[0,0,0],[0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Claw with tail",life:[[0,0,0,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,1,1,0,0],[0,0,0,1,0,0,1,0],[0,0,0,0,0,1,1,0],[0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Claw with tub with tail",life:[[0,0,0],[0,0,0],[0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Clips",life:[[0,0,0,0,0,0,0,0,0,0,0],[0,0,1,1,0,0,0,1,1,0,0],[0,1,0,0,1,0,1,0,0,1,0],[0,1,1,0,1,0,1,0,1,1,0],[0,0,0,0,1,0,1,0,0,0,0],[0,1,1,0,1,0,1,0,1,1,0],[0,1,0,0,1,0,1,0,0,1,0],[0,0,1,1,0,0,0,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Cloverleaf interchange",life:[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,1,0,0,0,0,0],[0,0,0,0,1,0,1,0,1,0,1,0,0,0,0],[0,0,0,0,1,0,1,0,1,0,1,0,0,0,0],[0,0,1,1,0,0,1,0,1,0,0,1,1,0,0],[0,1,0,0,0,0,1,0,1,0,0,0,0,1,0],[0,0,1,1,1,1,0,0,0,1,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,1,1,1,0,0,0,1,1,1,1,0,0],[0,1,0,0,0,0,1,0,1,0,0,0,0,1,0],[0,0,1,1,0,0,1,0,1,0,0,1,1,0,0],[0,0,0,0,1,0,1,0,1,0,1,0,0,0,0],[0,0,0,0,1,0,1,0,1,0,1,0,0,0,0],[0,0,0,0,0,1,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Cthulhu",life:[[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,1,0,0,0,1,0,0],[0,1,0,1,0,1,0,1,0,1,0,1,0],[0,1,0,1,0,1,0,1,0,1,0,1,0],[0,0,1,1,0,1,0,1,0,1,1,0,0],[0,0,0,0,0,1,0,1,0,0,0,0,0],[0,0,0,0,0,1,0,1,0,0,0,0,0],[0,0,0,0,1,1,0,1,1,0,0,0,0],[0,0,0,1,0,0,0,0,1,0,0,0,0],[0,0,0,1,1,0,1,1,0,0,0,0,0],[0,0,0,0,1,0,1,0,0,0,0,0,0],[0,0,0,1,0,0,1,0,0,0,0,0,0],[0,0,0,1,0,1,0,0,0,0,0,0,0],[0,0,1,1,0,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Loaf",life:[[0,0,0,0,0,0],[0,0,1,1,0,0],[0,1,0,0,1,0],[0,0,1,0,1,0],[0,0,0,1,0,0],[0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Bi-block",life:[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,1,1,0,1,1,0],[0,1,1,0,1,1,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Bi-boat",life:[[0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,1,0,0],[0,1,0,1,0,1,0,1,0],[0,0,1,1,0,1,1,0,0],[0,0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Block on boat",life:[[0,0,0,0,0,0,0,0],[0,1,1,0,1,1,0,0],[0,1,1,0,1,0,1,0],[0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Lighthouse",life:[[0,0,0,0,0,0],[0,1,1,0,0,0],[0,1,0,0,0,0],[0,0,0,0,1,0],[0,0,0,1,1,0],[0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Toad",life:[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,1,1,1,0],[0,1,1,1,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Pulsar",life:[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0],[0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0],[0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0],[0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0],[0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0],[0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0],[0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Blinker",life:[[0,0,0,0,0],[0,0,0,0,0],[0,1,1,1,0],[0,0,0,0,0],[0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"7x9 Eater",life:[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}},function(e,t,i){"use strict";t.__esModule=!0,t.default={title:"Century eater",life:[[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,1,1,0,0],[0,0,0,0,1,1,0,1,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,1,1,1,1,1,0,0,0],[0,1,0,0,1,0,0,1,0,0],[0,1,1,0,0,0,1,0,1,0],[0,0,0,0,0,0,0,1,1,0],[0,0,0,0,0,0,0,0,0,0]]}}]);