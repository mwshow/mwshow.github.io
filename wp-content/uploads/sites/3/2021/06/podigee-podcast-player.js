!function t(e,i,n){function r(s,a){if(!i[s]){if(!e[s]){var u="function"==typeof require&&require;if(!a&&u)return u(s,!0);if(o)return o(s,!0);throw new Error("Cannot find module '"+s+"'")}var c=i[s]={exports:{}};e[s][0].call(c.exports,(function(t){var i=e[s][1][t];return r(i||t)}),c,c.exports,t,e,i,n)}return i[s].exports}for(var o="function"==typeof require&&require,s=0;s<n.length;s++)r(n[s]);return r}({1:[function(t,e,i){var n,r,o;r=t("./iframe_resizer.coffee"),o=t("./subscribe_button_trigger.coffee"),n=function(){function t(t){var e;this.elem=t,e=this.elem.getAttribute("data-configuration").replace(/(^\s+|\s+$)/g,""),this.id=this.randomId(e),this.configuration="string"==typeof e?e.match(/^{/)?JSON.parse(e):this.getInSiteConfig(e)||{json_config:e}:e,this.configuration.parentLocationHash=window.location.hash,this.configuration.embedCode=this.elem.outerHTML;try{this.configuration.customOptions=JSON.parse(this.elem.getAttribute("data-options"))}catch(t){console.debug("[Podigee Podcast Player] data-options has invalid JSON")}this.url=this.origin()+"/podigee-podcast-player.html?id="+this.id+"&iframeMode=script",this.buildIframe(),this.setupListeners(),this.replaceElem(),this.configuration&&this.injectConfiguration(),this.setupSubscribeButton()}return t.prototype.getInSiteConfig=function(t){var e,i;return 0!==t.indexOf("http")&&t.match(/\./)&&!t.match(/^\//)?(e=t.split("."),i=null,e.forEach((function(t){return i=null===i?window[t]:i[t]})),i):window[t]},t.prototype.randomId=function(t){var e,i,n,r,o;if(e=0,0===t.length)return e;for(i=function(t){if(!isNaN(t))return e=(e<<5)-e+t,e&=e},n=r=0,o=t.length;0<=o?r<=o:r>=o;n=0<=o?++r:--r)i(t.charCodeAt(n));return"pdg-"+e.toString(16).substring(1)},t.prototype.origin=function(){return(this.elem.src||this.elem.getAttribute("src")).match(/(^.*\/)/)[0].replace(/javascripts\/$/,"").replace(/\/$/,"")},t.prototype.buildIframe=function(){return this.iframe=document.createElement("iframe"),this.iframe.id=this.id,this.iframe.scrolling="no",this.iframe.src=this.url,this.iframe.style.border="0",this.iframe.style.overflowY="hidden",this.iframe.style.transition="height 100ms linear",this.iframe.style.minWidth="100%",this.iframe.width="1px",this.iframe.title="Podcast",this.iframe.setAttribute("aria-label","Podcast"),this.iframe},t.prototype.setupListeners=function(){return r.listen("resizePlayer",this.iframe)},t.prototype.setupSubscribeButton=function(){return window.addEventListener("message",(t=this,function(e){var i;try{i=JSON.parse(e.data||e.originalEvent.data)}catch(t){return}if(i.id===t.iframe.id&&"loadSubscribeButton"===i.listenTo)return new o(t.iframe).listen()}),!1);var t},t.prototype.replaceElem=function(){return this.iframe.className+=this.elem.className,this.elem.parentNode.replaceChild(this.iframe,this.elem)},t.prototype.injectConfiguration=function(){return window.addEventListener("message",(t=this,function(e){var i,n;try{n=JSON.parse(e.data||e.originalEvent.data)}catch(t){return}if(n.id===t.iframe.id&&"sendConfig"===n.listenTo)return i=t.configuration.constructor===String?t.configuration:JSON.stringify(t.configuration),t.iframe.contentWindow.postMessage(i,"*")}),!1);var t},t}(),new function(){var t,e,i,r,o;if(o=[],0!==(e=document.querySelectorAll("script.podigee-podcast-player, div.podigee-podcast-player")).length){for(i=0,r=e.length;i<r;i++)t=e[i],o.push(new n(t));window.podigeePodcastPlayers=o}}},{"./iframe_resizer.coffee":2,"./subscribe_button_trigger.coffee":4}],2:[function(t,e,i){var n;n=function(){function t(){}return t.listen=function(t,e,i,n){return null==i&&(i={}),window.addEventListener("message",(function(r){var o,s,a;try{s=JSON.parse(r.data||r.originalEvent.data)}catch(t){return}if(s.id===e.id&&s.listenTo===t)return o=s.height+(i.height||0),a=/%$/.test(s.width)?s.width:s.width+(i.width||0),e.style.height=o+"px",e.style.maxHeight=o+"px",e.style.width=a+"px",e.style.maxWidth=a+"px",null!=n?n(e):void 0}),!1)},t}(),e.exports=n},{}],3:[function(t,e,i){!function(){var t;if(!("function"==typeof window.CustomEvent||this.CustomEvent.toString().indexOf("CustomEventConstructor")>-1))(t=function(t,e){var i;return e=e||{bubbles:!1,cancelable:!1,detail:void 0},(i=document.createEvent("CustomEvent")).initCustomEvent(t,e.bubbles,e.cancelable,e.detail),i}).prototype=window.Event.prototype,window.CustomEvent=t}()},{}],4:[function(t,e,i){var n;t("./polyfills/custom_event.coffee"),n=function(){function t(t){this.referenceElement=t,this.referenceId=this.referenceElement.id,this.id=this.randomId(this.referenceElement.toString()),this.buildTags(),this.insert()}return t.prototype.buildTags=function(){return this.scriptTag=document.createElement("script"),this.scriptTag.className="podlove-subscribe-button",this.scriptTag.src="https://cdn.podigee.com/subscribe-button/javascripts/app.js",this.scriptTag.dataset.language="en",this.scriptTag.dataset.size="medium",this.scriptTag.setAttribute("data-hide",!0),this.scriptTag.setAttribute("data-buttonid",this.id),this.button=document.createElement("button"),this.button.style.display="none",this.button.className="podlove-subscribe-button-"+this.id},t.prototype.insert=function(){return this.referenceElement.parentNode.insertBefore(this.scriptTag,this.referenceElement.nextSibling),this.referenceElement.parentNode.insertBefore(this.button,this.referenceElement.nextSibling)},t.prototype.randomId=function(t){var e,i,n,r,o,s;if(o=Math.floor(65536*(1+Math.random())).toString(16).substring(1),e=0,0===(t+=o).length)return e;for(i=function(t){if(!isNaN(t))return e=(e<<5)-e+t,e&=e},n=r=0,s=t.length;0<=s?r<=s:r>=s;n=0<=s?++r:--r)i(t.charCodeAt(n));return e.toString(16).substring(1)},t.prototype.listen=function(){return window.addEventListener("message",(t=this,function(e){var i,n;try{i=JSON.parse(e.data||e.originalEvent.data)}catch(t){return}if("subscribeButtonTrigger"===i.listenTo&&i.id===t.referenceId)return(n=i.detail).id=t.id,e=new CustomEvent("openSubscribeButtonPopup",{detail:n}),document.body.dispatchEvent(e)}),!1);var t},t}(),e.exports=n},{"./polyfills/custom_event.coffee":3}]},{},[1]);