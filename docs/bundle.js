!function(o){var n={};function i(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return o[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=o,i.c=n,i.d=function(o,n,t){i.o(o,n)||Object.defineProperty(o,n,{enumerable:!0,get:t})},i.r=function(o){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},i.t=function(o,n){if(1&n&&(o=i(o)),8&n)return o;if(4&n&&"object"==typeof o&&o&&o.__esModule)return o;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:o}),2&n&&"string"!=typeof o)for(var e in o)i.d(t,e,function(n){return o[n]}.bind(null,e));return t},i.n=function(o){var n=o&&o.__esModule?function(){return o.default}:function(){return o};return i.d(n,"a",n),n},i.o=function(o,n){return Object.prototype.hasOwnProperty.call(o,n)},i.p="",i(i.s=1)}([function(o,n,i){},function(o,n,i){"use strict";i.r(n);i(0);var t=document.querySelector("#canvas");t.width=1280,t.height=720;for(var e=t.getContext("2d"),r=[],a=0;a<=8;a++){for(var s=[],c=0;c<=15;c++)s.push(Math.random()<=.1);r.push(s)}var u=function(){for(var o=0,n=0;n<=8;n++){for(var i=0,t=0;t<=15;t++)e.beginPath(),e.moveTo(i,o),!0===r[n][t]?(e.fillStyle="#FF0000",e.fillRect(i,o,80,80)):(e.strokeStyle="#000000",e.strokeRect(i,o,80,80)),i+=80;o+=80}},d=function(o){setTimeout((function(){e.drawImage(o.img,o.position.x+J,o.position.y+J,50,50)}),500)},l=function(o){e.drawImage(o.img,o.canvasPosition.x+10,o.canvasPosition.y+10,50,50)},f=document.querySelector(".player1-damage"),p=document.querySelector(".player2-damage"),x=document.querySelector(".player__turn"),h=document.querySelector(".player1-hp"),P=document.querySelector(".player2-hp"),y=function(o){1===o.id?h.textContent="".concat(o.health):2===o.id&&(P.textContent="".concat(o.health))},v=function(o){x.textContent="".concat(o)},m=document.querySelector(".fight__btn"),w=document.createElement("p"),g=document.querySelector(".gameOver");m.addEventListener("click",(function(){console.log(no,io),1===I?(io.updateHealth(no.damage),y(io),D(2),v(2),io.health<=0&&(m.setAttribute("disabled","true"),w.textContent="Game Ove, Player 1 wins",g.appendChild(w))):2===I&&(no.updateHealth(io.damage),y(no),D(1),v(1),no.health<=0&&(m.setAttribute("disabled","true"),w.textContent="Game Ove, Player 2 wins",g.appendChild(w)))}));var b=function(o,n,i){m.disabled=!1};function S(o,n){for(var i=0;i<n.length;i++){var t=n[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(o,t.key,t)}}var k=function(){return Math.floor(16*Math.random())+0},M=function(){return Math.floor(9*Math.random())+0},q=function(){function o(n,i){var t=this,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:100,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};!function(o,n){if(!(o instanceof n))throw new TypeError("Cannot call a class as a function")}(this,o),this.id=n,this.img=i,this.damage=e,this.health=a,this.hasWeapon=!1,this.weapon=s,this.position={x:0,y:0},this.indexPosition={row:0,col:0},this.init=function(){var o=M(),n=k();if(r[o][n])return t.init();if(o>0)for(var i=0;i<o;i++)t.position.y+=80;if(n>0)for(var e=0;e<n;e++)t.position.x+=80;t.indexPosition.row=o,t.indexPosition.col=n},this.init()}var n,i,t;return n=o,(i=[{key:"moveLeft",value:function(){this.position.x-=80,this.indexPosition.col-=1}},{key:"moveUp",value:function(){this.position.y-=80,this.indexPosition.row-=1}},{key:"moveRight",value:function(){this.position.x+=80,this.indexPosition.col+=1}},{key:"moveDown",value:function(){this.position.y+=80,this.indexPosition.row+=1}},{key:"updatePlayerProperties",value:function(o){this.damage=o,console.log(this.damage)}},{key:"updatePlayerWeapon",value:function(o){this.weapon=o}},{key:"updateWeaponState",value:function(){this.hasWeapon=!0}},{key:"updateHealth",value:function(o){this.health-=o}}])&&S(n.prototype,i),t&&S(n,t),o}();function C(o,n){for(var i=0;i<n.length;i++){var t=n[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(o,t.key,t)}}var O=function(){return Math.floor(16*Math.random())+0},_=function(){return Math.floor(9*Math.random())+0},j=function(){function o(n,i,t){var e=this;!function(o,n){if(!(o instanceof n))throw new TypeError("Cannot call a class as a function")}(this,o),this.img=n,this.damage=i,this.id=t,this.canvasPosition={x:0,y:0},this.indexPosition={row:0,col:0},this.init=function(){var o=_(),n=O();if(r[o][n])return e.init();if(o>0)for(var i=0;i<o;i++)e.canvasPosition.y+=80;if(n>0)for(var t=0;t<n;t++)e.canvasPosition.x+=80;e.indexPosition.row=o,e.indexPosition.col=n},this.init()}var n,i,t;return n=o,(i=[{key:"updateWeaponPosition",value:function(o,n){this.canvasPosition=o,this.indexPosition=n}}])&&C(n.prototype,i),t&&C(n,t),o}();i.d(n,"padding",(function(){return J})),i.d(n,"player1",(function(){return no})),i.d(n,"player2",(function(){return io})),i.d(n,"playerTurn",(function(){return I})),i.d(n,"setTurn",(function(){return D}));var T=document.querySelector("#player1"),W=document.querySelector("#player2"),E=document.querySelector("#knife"),R=document.querySelector("#sowrd"),L=document.querySelector("#akm"),H=document.querySelector("#p13"),I=1,A=80,D=function(o){I=o},F=new j(E,20,1),G=new j(L,15,2),U=new j(R,50,3),z=new j(H,40,4),B=[F,G,U,z];setTimeout((function(){l(F),l(G),l(U),l(z)}),500);var J=20,K={indexPosition:{row:0,col:0}},N={canvasPosition:{x:0,y:0},indexPosition:{row:0,col:0}},Q={canvasPosition:{x:0,y:0},indexPosition:{row:0,col:0}},V=function(o,n){1===n.id?o.indexPosition.row===N.indexPosition.row&&o.indexPosition.col===N.indexPosition.col&&l(o):2===n.id&&o.indexPosition.row===Q.indexPosition.row&&o.indexPosition.col===Q.indexPosition.col&&l(o)},X=function(o){1===o.id?(N.canvasPosition={x:o.position.x,y:o.position.y},N.indexPosition={row:o.indexPosition.row,col:o.indexPosition.col}):2===o.id&&(Q.canvasPosition={x:o.position.x,y:o.position.y},Q.indexPosition={row:o.indexPosition.row,col:o.indexPosition.col})},Y=37,Z=38,$=39,oo=40;u();var no=new q(1,T),io=new q(2,W),to=function(o){e.clearRect(o.position.x+5,o.position.y+5,70,70)},eo=function(o){return B.findIndex((function(n){return o.indexPosition.row===n.indexPosition.row&&o.indexPosition.col===n.indexPosition.col}))},ro=function(o,n){var i=B[o];n.updatePlayerProperties(i.damage),function(o){1===o.id?f.textContent="".concat(o.damage):2===o.id&&(p.textContent="".concat(o.damage))}(n),n.hasWeapon?(function(o,n){o.canvasPosition={x:n.position.x,y:n.position.y},o.indexPosition={row:n.indexPosition.row,col:n.indexPosition.col}}(K=n.weapon,n),B.push(K),B.splice(o,1),console.log(n,i,K),n.updatePlayerWeapon(i)):(B.splice(o,1),n.updateWeaponState(),n.updatePlayerWeapon(i))};function ao(o,n){return Math.abs(o.position.x-n.position.x)<2*A&&Math.abs(o.position.y-n.position.y)<2*A}d(no),d(io);var so=function(o){X(o),to(o),o.moveLeft(),ao(no,io)&&b(no,io,I);var n=eo(o);n>-1?(ro(n,o),d(o)):d(o),V(K,o)},co=function(o){X(o),to(o),o.moveUp(),ao(no,io)&&b(no,io,I);var n=eo(o);n>-1?(ro(n,o),d(o)):d(o),V(K,o)},uo=function(o){X(o),to(o),o.moveRight(),ao(no,io)&&b(no,io,I);var n=eo(o);n>-1?(ro(n,o),d(o)):d(o),V(K,o)},lo=function(o){X(o),to(o),o.moveDown(),ao(no,io)&&b(no,io,I);var n=eo(o);n>-1?(ro(n,o),d(o)):d(o),V(K,o)};window.addEventListener("keydown",(function(o){switch(o.keyCode){case Y:ao(no,io)||(1===I?!r[no.indexPosition.row][no.indexPosition.col-1]&&no.indexPosition.col>0?(v(I=2),so(no)):I=1:2===I&&(!r[io.indexPosition.row][io.indexPosition.col-1]&&io.indexPosition.col>0?(v(I=1),so(io)):I=2));break;case Z:ao(no,io)||(1===I?!r[no.indexPosition.row-1][no.indexPosition.col]&&no.indexPosition.row>0?(v(I=2),co(no)):I=1:2===I&&(!r[io.indexPosition.row-1][io.indexPosition.col]&&io.indexPosition.row>0?(v(I=1),co(io)):I=2));break;case $:ao(no,io)||(1===I?!r[no.indexPosition.row][no.indexPosition.col+1]&&no.indexPosition.col<r[no.indexPosition.row].length-1?(v(I=2),uo(no)):I=1:2===I&&(!r[io.indexPosition.row][io.indexPosition.col+1]&&io.indexPosition.col<r[io.indexPosition.row].length-1?(v(I=1),uo(io)):I=2));break;case oo:ao(no,io)||(1===I?!r[no.indexPosition.row+1][no.indexPosition.col]&&no.indexPosition.row<r.length-1?(v(I=2),lo(no)):I=1:2===I&&(!r[io.indexPosition.row+1][io.indexPosition.col]&&io.indexPosition.row<r.length-1?(v(I=1),lo(io)):I=2))}}))}]);
//# sourceMappingURL=bundle.js.map