(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"HQ7+":function(t,e,o){"use strict";o.r(e);o("bMVF");let a={};a=o("UZfx");var n={metaInfo:{title:"Hello, world!"},mounted(){console.log(a);let t=L.map("map").setView([51.505,-.09],13);L.tileLayer("http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(t),fetch("../data.json").then(t=>t.json()).then(e=>{a.glify.shapes({map:t,data:e,color:{r:0,g:0,b:1,a:1}})})}},s=(o("mXa0"),o("KHd+")),i=Object(s.a)(n,(function(){var t=this._self._c;return t("div",[t("g-link",{attrs:{id:"homeButton",to:"/"}},[this._v("Home")]),t("div",{attrs:{id:"map"}})],1)}),[],!1,null,"f167ae3e",null);e.default=i.exports},ZkBl:function(t,e,o){},mXa0:function(t,e,o){"use strict";o("ZkBl")}}]);