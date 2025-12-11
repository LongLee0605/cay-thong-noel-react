(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();var jo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Wm={exports:{}},au={},Xm={exports:{}},ot={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pa=Symbol.for("react.element"),m0=Symbol.for("react.portal"),g0=Symbol.for("react.fragment"),v0=Symbol.for("react.strict_mode"),_0=Symbol.for("react.profiler"),y0=Symbol.for("react.provider"),x0=Symbol.for("react.context"),S0=Symbol.for("react.forward_ref"),E0=Symbol.for("react.suspense"),M0=Symbol.for("react.memo"),T0=Symbol.for("react.lazy"),dh=Symbol.iterator;function w0(t){return t===null||typeof t!="object"?null:(t=dh&&t[dh]||t["@@iterator"],typeof t=="function"?t:null)}var jm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ym=Object.assign,qm={};function fs(t,e,n){this.props=t,this.context=e,this.refs=qm,this.updater=n||jm}fs.prototype.isReactComponent={};fs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};fs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function $m(){}$m.prototype=fs.prototype;function Vf(t,e,n){this.props=t,this.context=e,this.refs=qm,this.updater=n||jm}var Wf=Vf.prototype=new $m;Wf.constructor=Vf;Ym(Wf,fs.prototype);Wf.isPureReactComponent=!0;var hh=Array.isArray,Km=Object.prototype.hasOwnProperty,Xf={current:null},Zm={key:!0,ref:!0,__self:!0,__source:!0};function Qm(t,e,n){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)Km.call(e,i)&&!Zm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];r.children=u}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:pa,type:t,key:o,ref:s,props:r,_owner:Xf.current}}function A0(t,e){return{$$typeof:pa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function jf(t){return typeof t=="object"&&t!==null&&t.$$typeof===pa}function R0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ph=/\/+/g;function Iu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?R0(""+t.key):e.toString(36)}function _l(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case pa:case m0:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+Iu(s,0):i,hh(r)?(n="",t!=null&&(n=t.replace(ph,"$&/")+"/"),_l(r,e,n,"",function(c){return c})):r!=null&&(jf(r)&&(r=A0(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(ph,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",hh(t))for(var a=0;a<t.length;a++){o=t[a];var u=i+Iu(o,a);s+=_l(o,e,n,u,r)}else if(u=w0(t),typeof u=="function")for(t=u.call(t),a=0;!(o=t.next()).done;)o=o.value,u=i+Iu(o,a++),s+=_l(o,e,n,u,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function La(t,e,n){if(t==null)return t;var i=[],r=0;return _l(t,i,"","",function(o){return e.call(n,o,r++)}),i}function C0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Sn={current:null},yl={transition:null},P0={ReactCurrentDispatcher:Sn,ReactCurrentBatchConfig:yl,ReactCurrentOwner:Xf};function Jm(){throw Error("act(...) is not supported in production builds of React.")}ot.Children={map:La,forEach:function(t,e,n){La(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return La(t,function(){e++}),e},toArray:function(t){return La(t,function(e){return e})||[]},only:function(t){if(!jf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ot.Component=fs;ot.Fragment=g0;ot.Profiler=_0;ot.PureComponent=Vf;ot.StrictMode=v0;ot.Suspense=E0;ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P0;ot.act=Jm;ot.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Ym({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Xf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)Km.call(e,u)&&!Zm.hasOwnProperty(u)&&(i[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)i.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:pa,type:t.type,key:r,ref:o,props:i,_owner:s}};ot.createContext=function(t){return t={$$typeof:x0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:y0,_context:t},t.Consumer=t};ot.createElement=Qm;ot.createFactory=function(t){var e=Qm.bind(null,t);return e.type=t,e};ot.createRef=function(){return{current:null}};ot.forwardRef=function(t){return{$$typeof:S0,render:t}};ot.isValidElement=jf;ot.lazy=function(t){return{$$typeof:T0,_payload:{_status:-1,_result:t},_init:C0}};ot.memo=function(t,e){return{$$typeof:M0,type:t,compare:e===void 0?null:e}};ot.startTransition=function(t){var e=yl.transition;yl.transition={};try{t()}finally{yl.transition=e}};ot.unstable_act=Jm;ot.useCallback=function(t,e){return Sn.current.useCallback(t,e)};ot.useContext=function(t){return Sn.current.useContext(t)};ot.useDebugValue=function(){};ot.useDeferredValue=function(t){return Sn.current.useDeferredValue(t)};ot.useEffect=function(t,e){return Sn.current.useEffect(t,e)};ot.useId=function(){return Sn.current.useId()};ot.useImperativeHandle=function(t,e,n){return Sn.current.useImperativeHandle(t,e,n)};ot.useInsertionEffect=function(t,e){return Sn.current.useInsertionEffect(t,e)};ot.useLayoutEffect=function(t,e){return Sn.current.useLayoutEffect(t,e)};ot.useMemo=function(t,e){return Sn.current.useMemo(t,e)};ot.useReducer=function(t,e,n){return Sn.current.useReducer(t,e,n)};ot.useRef=function(t){return Sn.current.useRef(t)};ot.useState=function(t){return Sn.current.useState(t)};ot.useSyncExternalStore=function(t,e,n){return Sn.current.useSyncExternalStore(t,e,n)};ot.useTransition=function(){return Sn.current.useTransition()};ot.version="18.3.1";Xm.exports=ot;var Mt=Xm.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L0=Mt,b0=Symbol.for("react.element"),D0=Symbol.for("react.fragment"),U0=Object.prototype.hasOwnProperty,N0=L0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,I0={key:!0,ref:!0,__self:!0,__source:!0};function eg(t,e,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)U0.call(e,i)&&!I0.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:b0,type:t,key:o,ref:s,props:r,_owner:N0.current}}au.Fragment=D0;au.jsx=eg;au.jsxs=eg;Wm.exports=au;var wn=Wm.exports,tg={exports:{}},Hn={},ng={exports:{}},ig={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,V){var W=F.length;F.push(V);e:for(;0<W;){var Z=W-1>>>1,Q=F[Z];if(0<r(Q,V))F[Z]=V,F[W]=Q,W=Z;else break e}}function n(F){return F.length===0?null:F[0]}function i(F){if(F.length===0)return null;var V=F[0],W=F.pop();if(W!==V){F[0]=W;e:for(var Z=0,Q=F.length,q=Q>>>1;Z<q;){var se=2*(Z+1)-1,ae=F[se],ge=se+1,me=F[ge];if(0>r(ae,W))ge<Q&&0>r(me,ae)?(F[Z]=me,F[ge]=W,Z=ge):(F[Z]=ae,F[se]=W,Z=se);else if(ge<Q&&0>r(me,W))F[Z]=me,F[ge]=W,Z=ge;else break e}}return V}function r(F,V){var W=F.sortIndex-V.sortIndex;return W!==0?W:F.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var u=[],c=[],h=1,p=null,m=3,_=!1,M=!1,T=!1,v=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(F){for(var V=n(c);V!==null;){if(V.callback===null)i(c);else if(V.startTime<=F)i(c),V.sortIndex=V.expirationTime,e(u,V);else break;V=n(c)}}function w(F){if(T=!1,y(F),!M)if(n(u)!==null)M=!0,B(O);else{var V=n(c);V!==null&&k(w,V.startTime-F)}}function O(F,V){M=!1,T&&(T=!1,f(Y),Y=-1),_=!0;var W=m;try{for(y(V),p=n(u);p!==null&&(!(p.expirationTime>V)||F&&!I());){var Z=p.callback;if(typeof Z=="function"){p.callback=null,m=p.priorityLevel;var Q=Z(p.expirationTime<=V);V=t.unstable_now(),typeof Q=="function"?p.callback=Q:p===n(u)&&i(u),y(V)}else i(u);p=n(u)}if(p!==null)var q=!0;else{var se=n(c);se!==null&&k(w,se.startTime-V),q=!1}return q}finally{p=null,m=W,_=!1}}var U=!1,b=null,Y=-1,R=5,S=-1;function I(){return!(t.unstable_now()-S<R)}function $(){if(b!==null){var F=t.unstable_now();S=F;var V=!0;try{V=b(!0,F)}finally{V?re():(U=!1,b=null)}}else U=!1}var re;if(typeof x=="function")re=function(){x($)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,K=z.port2;z.port1.onmessage=$,re=function(){K.postMessage(null)}}else re=function(){v($,0)};function B(F){b=F,U||(U=!0,re())}function k(F,V){Y=v(function(){F(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){M||_||(M=!0,B(O))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(F){switch(m){case 1:case 2:case 3:var V=3;break;default:V=m}var W=m;m=V;try{return F()}finally{m=W}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,V){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var W=m;m=F;try{return V()}finally{m=W}},t.unstable_scheduleCallback=function(F,V,W){var Z=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?Z+W:Z):W=Z,F){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=W+Q,F={id:h++,callback:V,priorityLevel:F,startTime:W,expirationTime:Q,sortIndex:-1},W>Z?(F.sortIndex=W,e(c,F),n(u)===null&&F===n(c)&&(T?(f(Y),Y=-1):T=!0,k(w,W-Z))):(F.sortIndex=Q,e(u,F),M||_||(M=!0,B(O))),F},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(F){var V=m;return function(){var W=m;m=V;try{return F.apply(this,arguments)}finally{m=W}}}})(ig);ng.exports=ig;var F0=ng.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O0=Mt,Bn=F0;function he(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rg=new Set,qs={};function no(t,e){es(t,e),es(t+"Capture",e)}function es(t,e){for(qs[t]=e,t=0;t<e.length;t++)rg.add(e[t])}var Hi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zc=Object.prototype.hasOwnProperty,k0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mh={},gh={};function z0(t){return zc.call(gh,t)?!0:zc.call(mh,t)?!1:k0.test(t)?gh[t]=!0:(mh[t]=!0,!1)}function B0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function H0(t,e,n,i){if(e===null||typeof e>"u"||B0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function En(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var sn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){sn[t]=new En(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];sn[e]=new En(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){sn[t]=new En(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){sn[t]=new En(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){sn[t]=new En(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){sn[t]=new En(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){sn[t]=new En(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){sn[t]=new En(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){sn[t]=new En(t,5,!1,t.toLowerCase(),null,!1,!1)});var Yf=/[\-:]([a-z])/g;function qf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Yf,qf);sn[e]=new En(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Yf,qf);sn[e]=new En(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Yf,qf);sn[e]=new En(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){sn[t]=new En(t,1,!1,t.toLowerCase(),null,!1,!1)});sn.xlinkHref=new En("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){sn[t]=new En(t,1,!1,t.toLowerCase(),null,!0,!0)});function $f(t,e,n,i){var r=sn.hasOwnProperty(e)?sn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(H0(e,n,r,i)&&(n=null),i||r===null?z0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var ji=O0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ba=Symbol.for("react.element"),bo=Symbol.for("react.portal"),Do=Symbol.for("react.fragment"),Kf=Symbol.for("react.strict_mode"),Bc=Symbol.for("react.profiler"),og=Symbol.for("react.provider"),sg=Symbol.for("react.context"),Zf=Symbol.for("react.forward_ref"),Hc=Symbol.for("react.suspense"),Gc=Symbol.for("react.suspense_list"),Qf=Symbol.for("react.memo"),nr=Symbol.for("react.lazy"),ag=Symbol.for("react.offscreen"),vh=Symbol.iterator;function Ss(t){return t===null||typeof t!="object"?null:(t=vh&&t[vh]||t["@@iterator"],typeof t=="function"?t:null)}var It=Object.assign,Fu;function Ns(t){if(Fu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Fu=e&&e[1]||""}return`
`+Fu+t}var Ou=!1;function ku(t,e){if(!t||Ou)return"";Ou=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var u=`
`+r[s].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=s&&0<=a);break}}}finally{Ou=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ns(t):""}function G0(t){switch(t.tag){case 5:return Ns(t.type);case 16:return Ns("Lazy");case 13:return Ns("Suspense");case 19:return Ns("SuspenseList");case 0:case 2:case 15:return t=ku(t.type,!1),t;case 11:return t=ku(t.type.render,!1),t;case 1:return t=ku(t.type,!0),t;default:return""}}function Vc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Do:return"Fragment";case bo:return"Portal";case Bc:return"Profiler";case Kf:return"StrictMode";case Hc:return"Suspense";case Gc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case sg:return(t.displayName||"Context")+".Consumer";case og:return(t._context.displayName||"Context")+".Provider";case Zf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Qf:return e=t.displayName||null,e!==null?e:Vc(t.type)||"Memo";case nr:e=t._payload,t=t._init;try{return Vc(t(e))}catch{}}return null}function V0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vc(e);case 8:return e===Kf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Er(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function lg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function W0(t){var e=lg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Da(t){t._valueTracker||(t._valueTracker=W0(t))}function ug(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=lg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Dl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Wc(t,e){var n=e.checked;return It({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function _h(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Er(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function cg(t,e){e=e.checked,e!=null&&$f(t,"checked",e,!1)}function Xc(t,e){cg(t,e);var n=Er(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?jc(t,e.type,n):e.hasOwnProperty("defaultValue")&&jc(t,e.type,Er(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function yh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function jc(t,e,n){(e!=="number"||Dl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Is=Array.isArray;function Yo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Er(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Yc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(he(91));return It({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function xh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(he(92));if(Is(n)){if(1<n.length)throw Error(he(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Er(n)}}function fg(t,e){var n=Er(e.value),i=Er(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Sh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function dg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?dg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ua,hg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ua=Ua||document.createElement("div"),Ua.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ua.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function $s(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ks={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},X0=["Webkit","ms","Moz","O"];Object.keys(ks).forEach(function(t){X0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ks[e]=ks[t]})});function pg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ks.hasOwnProperty(t)&&ks[t]?(""+e).trim():e+"px"}function mg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=pg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var j0=It({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $c(t,e){if(e){if(j0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(he(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(he(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(he(61))}if(e.style!=null&&typeof e.style!="object")throw Error(he(62))}}function Kc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zc=null;function Jf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qc=null,qo=null,$o=null;function Eh(t){if(t=va(t)){if(typeof Qc!="function")throw Error(he(280));var e=t.stateNode;e&&(e=du(e),Qc(t.stateNode,t.type,e))}}function gg(t){qo?$o?$o.push(t):$o=[t]:qo=t}function vg(){if(qo){var t=qo,e=$o;if($o=qo=null,Eh(t),e)for(t=0;t<e.length;t++)Eh(e[t])}}function _g(t,e){return t(e)}function yg(){}var zu=!1;function xg(t,e,n){if(zu)return t(e,n);zu=!0;try{return _g(t,e,n)}finally{zu=!1,(qo!==null||$o!==null)&&(yg(),vg())}}function Ks(t,e){var n=t.stateNode;if(n===null)return null;var i=du(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(he(231,e,typeof n));return n}var Jc=!1;if(Hi)try{var Es={};Object.defineProperty(Es,"passive",{get:function(){Jc=!0}}),window.addEventListener("test",Es,Es),window.removeEventListener("test",Es,Es)}catch{Jc=!1}function Y0(t,e,n,i,r,o,s,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var zs=!1,Ul=null,Nl=!1,ef=null,q0={onError:function(t){zs=!0,Ul=t}};function $0(t,e,n,i,r,o,s,a,u){zs=!1,Ul=null,Y0.apply(q0,arguments)}function K0(t,e,n,i,r,o,s,a,u){if($0.apply(this,arguments),zs){if(zs){var c=Ul;zs=!1,Ul=null}else throw Error(he(198));Nl||(Nl=!0,ef=c)}}function io(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Sg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Mh(t){if(io(t)!==t)throw Error(he(188))}function Z0(t){var e=t.alternate;if(!e){if(e=io(t),e===null)throw Error(he(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return Mh(r),t;if(o===i)return Mh(r),e;o=o.sibling}throw Error(he(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error(he(189))}}if(n.alternate!==i)throw Error(he(190))}if(n.tag!==3)throw Error(he(188));return n.stateNode.current===n?t:e}function Eg(t){return t=Z0(t),t!==null?Mg(t):null}function Mg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Mg(t);if(e!==null)return e;t=t.sibling}return null}var Tg=Bn.unstable_scheduleCallback,Th=Bn.unstable_cancelCallback,Q0=Bn.unstable_shouldYield,J0=Bn.unstable_requestPaint,kt=Bn.unstable_now,ey=Bn.unstable_getCurrentPriorityLevel,ed=Bn.unstable_ImmediatePriority,wg=Bn.unstable_UserBlockingPriority,Il=Bn.unstable_NormalPriority,ty=Bn.unstable_LowPriority,Ag=Bn.unstable_IdlePriority,lu=null,Ti=null;function ny(t){if(Ti&&typeof Ti.onCommitFiberRoot=="function")try{Ti.onCommitFiberRoot(lu,t,void 0,(t.current.flags&128)===128)}catch{}}var pi=Math.clz32?Math.clz32:oy,iy=Math.log,ry=Math.LN2;function oy(t){return t>>>=0,t===0?32:31-(iy(t)/ry|0)|0}var Na=64,Ia=4194304;function Fs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Fl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=Fs(a):(o&=s,o!==0&&(i=Fs(o)))}else s=n&~r,s!==0?i=Fs(s):o!==0&&(i=Fs(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-pi(e),r=1<<n,i|=t[n],e&=~r;return i}function sy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ay(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-pi(o),a=1<<s,u=r[s];u===-1?(!(a&n)||a&i)&&(r[s]=sy(a,e)):u<=e&&(t.expiredLanes|=a),o&=~a}}function tf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Rg(){var t=Na;return Na<<=1,!(Na&4194240)&&(Na=64),t}function Bu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ma(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-pi(e),t[e]=n}function ly(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-pi(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function td(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-pi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var mt=0;function Cg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Pg,nd,Lg,bg,Dg,nf=!1,Fa=[],fr=null,dr=null,hr=null,Zs=new Map,Qs=new Map,rr=[],uy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wh(t,e){switch(t){case"focusin":case"focusout":fr=null;break;case"dragenter":case"dragleave":dr=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":Zs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qs.delete(e.pointerId)}}function Ms(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=va(e),e!==null&&nd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function cy(t,e,n,i,r){switch(e){case"focusin":return fr=Ms(fr,t,e,n,i,r),!0;case"dragenter":return dr=Ms(dr,t,e,n,i,r),!0;case"mouseover":return hr=Ms(hr,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return Zs.set(o,Ms(Zs.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,Qs.set(o,Ms(Qs.get(o)||null,t,e,n,i,r)),!0}return!1}function Ug(t){var e=Br(t.target);if(e!==null){var n=io(e);if(n!==null){if(e=n.tag,e===13){if(e=Sg(n),e!==null){t.blockedOn=e,Dg(t.priority,function(){Lg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function xl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=rf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Zc=i,n.target.dispatchEvent(i),Zc=null}else return e=va(n),e!==null&&nd(e),t.blockedOn=n,!1;e.shift()}return!0}function Ah(t,e,n){xl(t)&&n.delete(e)}function fy(){nf=!1,fr!==null&&xl(fr)&&(fr=null),dr!==null&&xl(dr)&&(dr=null),hr!==null&&xl(hr)&&(hr=null),Zs.forEach(Ah),Qs.forEach(Ah)}function Ts(t,e){t.blockedOn===e&&(t.blockedOn=null,nf||(nf=!0,Bn.unstable_scheduleCallback(Bn.unstable_NormalPriority,fy)))}function Js(t){function e(r){return Ts(r,t)}if(0<Fa.length){Ts(Fa[0],t);for(var n=1;n<Fa.length;n++){var i=Fa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(fr!==null&&Ts(fr,t),dr!==null&&Ts(dr,t),hr!==null&&Ts(hr,t),Zs.forEach(e),Qs.forEach(e),n=0;n<rr.length;n++)i=rr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<rr.length&&(n=rr[0],n.blockedOn===null);)Ug(n),n.blockedOn===null&&rr.shift()}var Ko=ji.ReactCurrentBatchConfig,Ol=!0;function dy(t,e,n,i){var r=mt,o=Ko.transition;Ko.transition=null;try{mt=1,id(t,e,n,i)}finally{mt=r,Ko.transition=o}}function hy(t,e,n,i){var r=mt,o=Ko.transition;Ko.transition=null;try{mt=4,id(t,e,n,i)}finally{mt=r,Ko.transition=o}}function id(t,e,n,i){if(Ol){var r=rf(t,e,n,i);if(r===null)Ku(t,e,i,kl,n),wh(t,i);else if(cy(r,t,e,n,i))i.stopPropagation();else if(wh(t,i),e&4&&-1<uy.indexOf(t)){for(;r!==null;){var o=va(r);if(o!==null&&Pg(o),o=rf(t,e,n,i),o===null&&Ku(t,e,i,kl,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else Ku(t,e,i,null,n)}}var kl=null;function rf(t,e,n,i){if(kl=null,t=Jf(i),t=Br(t),t!==null)if(e=io(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Sg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return kl=t,null}function Ng(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ey()){case ed:return 1;case wg:return 4;case Il:case ty:return 16;case Ag:return 536870912;default:return 16}default:return 16}}var ar=null,rd=null,Sl=null;function Ig(){if(Sl)return Sl;var t,e=rd,n=e.length,i,r="value"in ar?ar.value:ar.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[o-i];i++);return Sl=r.slice(t,1<i?1-i:void 0)}function El(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Oa(){return!0}function Rh(){return!1}function Gn(t){function e(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Oa:Rh,this.isPropagationStopped=Rh,this}return It(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Oa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Oa)},persist:function(){},isPersistent:Oa}),e}var ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},od=Gn(ds),ga=It({},ds,{view:0,detail:0}),py=Gn(ga),Hu,Gu,ws,uu=It({},ga,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ws&&(ws&&t.type==="mousemove"?(Hu=t.screenX-ws.screenX,Gu=t.screenY-ws.screenY):Gu=Hu=0,ws=t),Hu)},movementY:function(t){return"movementY"in t?t.movementY:Gu}}),Ch=Gn(uu),my=It({},uu,{dataTransfer:0}),gy=Gn(my),vy=It({},ga,{relatedTarget:0}),Vu=Gn(vy),_y=It({},ds,{animationName:0,elapsedTime:0,pseudoElement:0}),yy=Gn(_y),xy=It({},ds,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Sy=Gn(xy),Ey=It({},ds,{data:0}),Ph=Gn(Ey),My={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ty={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ay(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=wy[t])?!!e[t]:!1}function sd(){return Ay}var Ry=It({},ga,{key:function(t){if(t.key){var e=My[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=El(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ty[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sd,charCode:function(t){return t.type==="keypress"?El(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?El(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Cy=Gn(Ry),Py=It({},uu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lh=Gn(Py),Ly=It({},ga,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sd}),by=Gn(Ly),Dy=It({},ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),Uy=Gn(Dy),Ny=It({},uu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Iy=Gn(Ny),Fy=[9,13,27,32],ad=Hi&&"CompositionEvent"in window,Bs=null;Hi&&"documentMode"in document&&(Bs=document.documentMode);var Oy=Hi&&"TextEvent"in window&&!Bs,Fg=Hi&&(!ad||Bs&&8<Bs&&11>=Bs),bh=" ",Dh=!1;function Og(t,e){switch(t){case"keyup":return Fy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Uo=!1;function ky(t,e){switch(t){case"compositionend":return kg(e);case"keypress":return e.which!==32?null:(Dh=!0,bh);case"textInput":return t=e.data,t===bh&&Dh?null:t;default:return null}}function zy(t,e){if(Uo)return t==="compositionend"||!ad&&Og(t,e)?(t=Ig(),Sl=rd=ar=null,Uo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Fg&&e.locale!=="ko"?null:e.data;default:return null}}var By={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Uh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!By[t.type]:e==="textarea"}function zg(t,e,n,i){gg(i),e=zl(e,"onChange"),0<e.length&&(n=new od("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Hs=null,ea=null;function Hy(t){Kg(t,0)}function cu(t){var e=Fo(t);if(ug(e))return t}function Gy(t,e){if(t==="change")return e}var Bg=!1;if(Hi){var Wu;if(Hi){var Xu="oninput"in document;if(!Xu){var Nh=document.createElement("div");Nh.setAttribute("oninput","return;"),Xu=typeof Nh.oninput=="function"}Wu=Xu}else Wu=!1;Bg=Wu&&(!document.documentMode||9<document.documentMode)}function Ih(){Hs&&(Hs.detachEvent("onpropertychange",Hg),ea=Hs=null)}function Hg(t){if(t.propertyName==="value"&&cu(ea)){var e=[];zg(e,ea,t,Jf(t)),xg(Hy,e)}}function Vy(t,e,n){t==="focusin"?(Ih(),Hs=e,ea=n,Hs.attachEvent("onpropertychange",Hg)):t==="focusout"&&Ih()}function Wy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return cu(ea)}function Xy(t,e){if(t==="click")return cu(e)}function jy(t,e){if(t==="input"||t==="change")return cu(e)}function Yy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var vi=typeof Object.is=="function"?Object.is:Yy;function ta(t,e){if(vi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!zc.call(e,r)||!vi(t[r],e[r]))return!1}return!0}function Fh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Oh(t,e){var n=Fh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Fh(n)}}function Gg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Gg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Vg(){for(var t=window,e=Dl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Dl(t.document)}return e}function ld(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function qy(t){var e=Vg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Gg(n.ownerDocument.documentElement,n)){if(i!==null&&ld(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=Oh(n,o);var s=Oh(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var $y=Hi&&"documentMode"in document&&11>=document.documentMode,No=null,of=null,Gs=null,sf=!1;function kh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;sf||No==null||No!==Dl(i)||(i=No,"selectionStart"in i&&ld(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Gs&&ta(Gs,i)||(Gs=i,i=zl(of,"onSelect"),0<i.length&&(e=new od("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=No)))}function ka(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Io={animationend:ka("Animation","AnimationEnd"),animationiteration:ka("Animation","AnimationIteration"),animationstart:ka("Animation","AnimationStart"),transitionend:ka("Transition","TransitionEnd")},ju={},Wg={};Hi&&(Wg=document.createElement("div").style,"AnimationEvent"in window||(delete Io.animationend.animation,delete Io.animationiteration.animation,delete Io.animationstart.animation),"TransitionEvent"in window||delete Io.transitionend.transition);function fu(t){if(ju[t])return ju[t];if(!Io[t])return t;var e=Io[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Wg)return ju[t]=e[n];return t}var Xg=fu("animationend"),jg=fu("animationiteration"),Yg=fu("animationstart"),qg=fu("transitionend"),$g=new Map,zh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wr(t,e){$g.set(t,e),no(e,[t])}for(var Yu=0;Yu<zh.length;Yu++){var qu=zh[Yu],Ky=qu.toLowerCase(),Zy=qu[0].toUpperCase()+qu.slice(1);wr(Ky,"on"+Zy)}wr(Xg,"onAnimationEnd");wr(jg,"onAnimationIteration");wr(Yg,"onAnimationStart");wr("dblclick","onDoubleClick");wr("focusin","onFocus");wr("focusout","onBlur");wr(qg,"onTransitionEnd");es("onMouseEnter",["mouseout","mouseover"]);es("onMouseLeave",["mouseout","mouseover"]);es("onPointerEnter",["pointerout","pointerover"]);es("onPointerLeave",["pointerout","pointerover"]);no("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));no("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));no("onBeforeInput",["compositionend","keypress","textInput","paste"]);no("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));no("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));no("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Os="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Os));function Bh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,K0(i,e,void 0,t),t.currentTarget=null}function Kg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==o&&r.isPropagationStopped())break e;Bh(r,a,c),o=u}else for(s=0;s<i.length;s++){if(a=i[s],u=a.instance,c=a.currentTarget,a=a.listener,u!==o&&r.isPropagationStopped())break e;Bh(r,a,c),o=u}}}if(Nl)throw t=ef,Nl=!1,ef=null,t}function At(t,e){var n=e[ff];n===void 0&&(n=e[ff]=new Set);var i=t+"__bubble";n.has(i)||(Zg(e,t,2,!1),n.add(i))}function $u(t,e,n){var i=0;e&&(i|=4),Zg(n,t,i,e)}var za="_reactListening"+Math.random().toString(36).slice(2);function na(t){if(!t[za]){t[za]=!0,rg.forEach(function(n){n!=="selectionchange"&&(Qy.has(n)||$u(n,!1,t),$u(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[za]||(e[za]=!0,$u("selectionchange",!1,e))}}function Zg(t,e,n,i){switch(Ng(e)){case 1:var r=dy;break;case 4:r=hy;break;default:r=id}n=r.bind(null,e,n,t),r=void 0,!Jc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Ku(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===r||u.nodeType===8&&u.parentNode===r))return;s=s.return}for(;a!==null;){if(s=Br(a),s===null)return;if(u=s.tag,u===5||u===6){i=o=s;continue e}a=a.parentNode}}i=i.return}xg(function(){var c=o,h=Jf(n),p=[];e:{var m=$g.get(t);if(m!==void 0){var _=od,M=t;switch(t){case"keypress":if(El(n)===0)break e;case"keydown":case"keyup":_=Cy;break;case"focusin":M="focus",_=Vu;break;case"focusout":M="blur",_=Vu;break;case"beforeblur":case"afterblur":_=Vu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Ch;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=gy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=by;break;case Xg:case jg:case Yg:_=yy;break;case qg:_=Uy;break;case"scroll":_=py;break;case"wheel":_=Iy;break;case"copy":case"cut":case"paste":_=Sy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Lh}var T=(e&4)!==0,v=!T&&t==="scroll",f=T?m!==null?m+"Capture":null:m;T=[];for(var x=c,y;x!==null;){y=x;var w=y.stateNode;if(y.tag===5&&w!==null&&(y=w,f!==null&&(w=Ks(x,f),w!=null&&T.push(ia(x,w,y)))),v)break;x=x.return}0<T.length&&(m=new _(m,M,null,n,h),p.push({event:m,listeners:T}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",m&&n!==Zc&&(M=n.relatedTarget||n.fromElement)&&(Br(M)||M[Gi]))break e;if((_||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,_?(M=n.relatedTarget||n.toElement,_=c,M=M?Br(M):null,M!==null&&(v=io(M),M!==v||M.tag!==5&&M.tag!==6)&&(M=null)):(_=null,M=c),_!==M)){if(T=Ch,w="onMouseLeave",f="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(T=Lh,w="onPointerLeave",f="onPointerEnter",x="pointer"),v=_==null?m:Fo(_),y=M==null?m:Fo(M),m=new T(w,x+"leave",_,n,h),m.target=v,m.relatedTarget=y,w=null,Br(h)===c&&(T=new T(f,x+"enter",M,n,h),T.target=y,T.relatedTarget=v,w=T),v=w,_&&M)t:{for(T=_,f=M,x=0,y=T;y;y=po(y))x++;for(y=0,w=f;w;w=po(w))y++;for(;0<x-y;)T=po(T),x--;for(;0<y-x;)f=po(f),y--;for(;x--;){if(T===f||f!==null&&T===f.alternate)break t;T=po(T),f=po(f)}T=null}else T=null;_!==null&&Hh(p,m,_,T,!1),M!==null&&v!==null&&Hh(p,v,M,T,!0)}}e:{if(m=c?Fo(c):window,_=m.nodeName&&m.nodeName.toLowerCase(),_==="select"||_==="input"&&m.type==="file")var O=Gy;else if(Uh(m))if(Bg)O=jy;else{O=Wy;var U=Vy}else(_=m.nodeName)&&_.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(O=Xy);if(O&&(O=O(t,c))){zg(p,O,n,h);break e}U&&U(t,m,c),t==="focusout"&&(U=m._wrapperState)&&U.controlled&&m.type==="number"&&jc(m,"number",m.value)}switch(U=c?Fo(c):window,t){case"focusin":(Uh(U)||U.contentEditable==="true")&&(No=U,of=c,Gs=null);break;case"focusout":Gs=of=No=null;break;case"mousedown":sf=!0;break;case"contextmenu":case"mouseup":case"dragend":sf=!1,kh(p,n,h);break;case"selectionchange":if($y)break;case"keydown":case"keyup":kh(p,n,h)}var b;if(ad)e:{switch(t){case"compositionstart":var Y="onCompositionStart";break e;case"compositionend":Y="onCompositionEnd";break e;case"compositionupdate":Y="onCompositionUpdate";break e}Y=void 0}else Uo?Og(t,n)&&(Y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(Y="onCompositionStart");Y&&(Fg&&n.locale!=="ko"&&(Uo||Y!=="onCompositionStart"?Y==="onCompositionEnd"&&Uo&&(b=Ig()):(ar=h,rd="value"in ar?ar.value:ar.textContent,Uo=!0)),U=zl(c,Y),0<U.length&&(Y=new Ph(Y,t,null,n,h),p.push({event:Y,listeners:U}),b?Y.data=b:(b=kg(n),b!==null&&(Y.data=b)))),(b=Oy?ky(t,n):zy(t,n))&&(c=zl(c,"onBeforeInput"),0<c.length&&(h=new Ph("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:c}),h.data=b))}Kg(p,e)})}function ia(t,e,n){return{instance:t,listener:e,currentTarget:n}}function zl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=Ks(t,n),o!=null&&i.unshift(ia(t,o,r)),o=Ks(t,e),o!=null&&i.push(ia(t,o,r))),t=t.return}return i}function po(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Hh(t,e,n,i,r){for(var o=e._reactName,s=[];n!==null&&n!==i;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===i)break;a.tag===5&&c!==null&&(a=c,r?(u=Ks(n,o),u!=null&&s.unshift(ia(n,u,a))):r||(u=Ks(n,o),u!=null&&s.push(ia(n,u,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var Jy=/\r\n?/g,ex=/\u0000|\uFFFD/g;function Gh(t){return(typeof t=="string"?t:""+t).replace(Jy,`
`).replace(ex,"")}function Ba(t,e,n){if(e=Gh(e),Gh(t)!==e&&n)throw Error(he(425))}function Bl(){}var af=null,lf=null;function uf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var cf=typeof setTimeout=="function"?setTimeout:void 0,tx=typeof clearTimeout=="function"?clearTimeout:void 0,Vh=typeof Promise=="function"?Promise:void 0,nx=typeof queueMicrotask=="function"?queueMicrotask:typeof Vh<"u"?function(t){return Vh.resolve(null).then(t).catch(ix)}:cf;function ix(t){setTimeout(function(){throw t})}function Zu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Js(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Js(e)}function pr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Wh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var hs=Math.random().toString(36).slice(2),Ei="__reactFiber$"+hs,ra="__reactProps$"+hs,Gi="__reactContainer$"+hs,ff="__reactEvents$"+hs,rx="__reactListeners$"+hs,ox="__reactHandles$"+hs;function Br(t){var e=t[Ei];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Gi]||n[Ei]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Wh(t);t!==null;){if(n=t[Ei])return n;t=Wh(t)}return e}t=n,n=t.parentNode}return null}function va(t){return t=t[Ei]||t[Gi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Fo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(he(33))}function du(t){return t[ra]||null}var df=[],Oo=-1;function Ar(t){return{current:t}}function Ct(t){0>Oo||(t.current=df[Oo],df[Oo]=null,Oo--)}function Tt(t,e){Oo++,df[Oo]=t.current,t.current=e}var Mr={},hn=Ar(Mr),Pn=Ar(!1),$r=Mr;function ts(t,e){var n=t.type.contextTypes;if(!n)return Mr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Ln(t){return t=t.childContextTypes,t!=null}function Hl(){Ct(Pn),Ct(hn)}function Xh(t,e,n){if(hn.current!==Mr)throw Error(he(168));Tt(hn,e),Tt(Pn,n)}function Qg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(he(108,V0(t)||"Unknown",r));return It({},n,i)}function Gl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Mr,$r=hn.current,Tt(hn,t),Tt(Pn,Pn.current),!0}function jh(t,e,n){var i=t.stateNode;if(!i)throw Error(he(169));n?(t=Qg(t,e,$r),i.__reactInternalMemoizedMergedChildContext=t,Ct(Pn),Ct(hn),Tt(hn,t)):Ct(Pn),Tt(Pn,n)}var Ii=null,hu=!1,Qu=!1;function Jg(t){Ii===null?Ii=[t]:Ii.push(t)}function sx(t){hu=!0,Jg(t)}function Rr(){if(!Qu&&Ii!==null){Qu=!0;var t=0,e=mt;try{var n=Ii;for(mt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ii=null,hu=!1}catch(r){throw Ii!==null&&(Ii=Ii.slice(t+1)),Tg(ed,Rr),r}finally{mt=e,Qu=!1}}return null}var ko=[],zo=0,Vl=null,Wl=0,qn=[],$n=0,Kr=null,Fi=1,Oi="";function Ur(t,e){ko[zo++]=Wl,ko[zo++]=Vl,Vl=t,Wl=e}function ev(t,e,n){qn[$n++]=Fi,qn[$n++]=Oi,qn[$n++]=Kr,Kr=t;var i=Fi;t=Oi;var r=32-pi(i)-1;i&=~(1<<r),n+=1;var o=32-pi(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,Fi=1<<32-pi(e)+r|n<<r|i,Oi=o+t}else Fi=1<<o|n<<r|i,Oi=t}function ud(t){t.return!==null&&(Ur(t,1),ev(t,1,0))}function cd(t){for(;t===Vl;)Vl=ko[--zo],ko[zo]=null,Wl=ko[--zo],ko[zo]=null;for(;t===Kr;)Kr=qn[--$n],qn[$n]=null,Oi=qn[--$n],qn[$n]=null,Fi=qn[--$n],qn[$n]=null}var zn=null,kn=null,Lt=!1,ci=null;function tv(t,e){var n=Jn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Yh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,zn=t,kn=pr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,zn=t,kn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Kr!==null?{id:Fi,overflow:Oi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Jn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,zn=t,kn=null,!0):!1;default:return!1}}function hf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function pf(t){if(Lt){var e=kn;if(e){var n=e;if(!Yh(t,e)){if(hf(t))throw Error(he(418));e=pr(n.nextSibling);var i=zn;e&&Yh(t,e)?tv(i,n):(t.flags=t.flags&-4097|2,Lt=!1,zn=t)}}else{if(hf(t))throw Error(he(418));t.flags=t.flags&-4097|2,Lt=!1,zn=t}}}function qh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;zn=t}function Ha(t){if(t!==zn)return!1;if(!Lt)return qh(t),Lt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!uf(t.type,t.memoizedProps)),e&&(e=kn)){if(hf(t))throw nv(),Error(he(418));for(;e;)tv(t,e),e=pr(e.nextSibling)}if(qh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(he(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){kn=pr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}kn=null}}else kn=zn?pr(t.stateNode.nextSibling):null;return!0}function nv(){for(var t=kn;t;)t=pr(t.nextSibling)}function ns(){kn=zn=null,Lt=!1}function fd(t){ci===null?ci=[t]:ci.push(t)}var ax=ji.ReactCurrentBatchConfig;function As(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(he(309));var i=n.stateNode}if(!i)throw Error(he(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=r.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(he(284));if(!n._owner)throw Error(he(290,t))}return t}function Ga(t,e){throw t=Object.prototype.toString.call(e),Error(he(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function $h(t){var e=t._init;return e(t._payload)}function iv(t){function e(f,x){if(t){var y=f.deletions;y===null?(f.deletions=[x],f.flags|=16):y.push(x)}}function n(f,x){if(!t)return null;for(;x!==null;)e(f,x),x=x.sibling;return null}function i(f,x){for(f=new Map;x!==null;)x.key!==null?f.set(x.key,x):f.set(x.index,x),x=x.sibling;return f}function r(f,x){return f=_r(f,x),f.index=0,f.sibling=null,f}function o(f,x,y){return f.index=y,t?(y=f.alternate,y!==null?(y=y.index,y<x?(f.flags|=2,x):y):(f.flags|=2,x)):(f.flags|=1048576,x)}function s(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,x,y,w){return x===null||x.tag!==6?(x=oc(y,f.mode,w),x.return=f,x):(x=r(x,y),x.return=f,x)}function u(f,x,y,w){var O=y.type;return O===Do?h(f,x,y.props.children,w,y.key):x!==null&&(x.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===nr&&$h(O)===x.type)?(w=r(x,y.props),w.ref=As(f,x,y),w.return=f,w):(w=Pl(y.type,y.key,y.props,null,f.mode,w),w.ref=As(f,x,y),w.return=f,w)}function c(f,x,y,w){return x===null||x.tag!==4||x.stateNode.containerInfo!==y.containerInfo||x.stateNode.implementation!==y.implementation?(x=sc(y,f.mode,w),x.return=f,x):(x=r(x,y.children||[]),x.return=f,x)}function h(f,x,y,w,O){return x===null||x.tag!==7?(x=Wr(y,f.mode,w,O),x.return=f,x):(x=r(x,y),x.return=f,x)}function p(f,x,y){if(typeof x=="string"&&x!==""||typeof x=="number")return x=oc(""+x,f.mode,y),x.return=f,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ba:return y=Pl(x.type,x.key,x.props,null,f.mode,y),y.ref=As(f,null,x),y.return=f,y;case bo:return x=sc(x,f.mode,y),x.return=f,x;case nr:var w=x._init;return p(f,w(x._payload),y)}if(Is(x)||Ss(x))return x=Wr(x,f.mode,y,null),x.return=f,x;Ga(f,x)}return null}function m(f,x,y,w){var O=x!==null?x.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return O!==null?null:a(f,x,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ba:return y.key===O?u(f,x,y,w):null;case bo:return y.key===O?c(f,x,y,w):null;case nr:return O=y._init,m(f,x,O(y._payload),w)}if(Is(y)||Ss(y))return O!==null?null:h(f,x,y,w,null);Ga(f,y)}return null}function _(f,x,y,w,O){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(y)||null,a(x,f,""+w,O);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ba:return f=f.get(w.key===null?y:w.key)||null,u(x,f,w,O);case bo:return f=f.get(w.key===null?y:w.key)||null,c(x,f,w,O);case nr:var U=w._init;return _(f,x,y,U(w._payload),O)}if(Is(w)||Ss(w))return f=f.get(y)||null,h(x,f,w,O,null);Ga(x,w)}return null}function M(f,x,y,w){for(var O=null,U=null,b=x,Y=x=0,R=null;b!==null&&Y<y.length;Y++){b.index>Y?(R=b,b=null):R=b.sibling;var S=m(f,b,y[Y],w);if(S===null){b===null&&(b=R);break}t&&b&&S.alternate===null&&e(f,b),x=o(S,x,Y),U===null?O=S:U.sibling=S,U=S,b=R}if(Y===y.length)return n(f,b),Lt&&Ur(f,Y),O;if(b===null){for(;Y<y.length;Y++)b=p(f,y[Y],w),b!==null&&(x=o(b,x,Y),U===null?O=b:U.sibling=b,U=b);return Lt&&Ur(f,Y),O}for(b=i(f,b);Y<y.length;Y++)R=_(b,f,Y,y[Y],w),R!==null&&(t&&R.alternate!==null&&b.delete(R.key===null?Y:R.key),x=o(R,x,Y),U===null?O=R:U.sibling=R,U=R);return t&&b.forEach(function(I){return e(f,I)}),Lt&&Ur(f,Y),O}function T(f,x,y,w){var O=Ss(y);if(typeof O!="function")throw Error(he(150));if(y=O.call(y),y==null)throw Error(he(151));for(var U=O=null,b=x,Y=x=0,R=null,S=y.next();b!==null&&!S.done;Y++,S=y.next()){b.index>Y?(R=b,b=null):R=b.sibling;var I=m(f,b,S.value,w);if(I===null){b===null&&(b=R);break}t&&b&&I.alternate===null&&e(f,b),x=o(I,x,Y),U===null?O=I:U.sibling=I,U=I,b=R}if(S.done)return n(f,b),Lt&&Ur(f,Y),O;if(b===null){for(;!S.done;Y++,S=y.next())S=p(f,S.value,w),S!==null&&(x=o(S,x,Y),U===null?O=S:U.sibling=S,U=S);return Lt&&Ur(f,Y),O}for(b=i(f,b);!S.done;Y++,S=y.next())S=_(b,f,Y,S.value,w),S!==null&&(t&&S.alternate!==null&&b.delete(S.key===null?Y:S.key),x=o(S,x,Y),U===null?O=S:U.sibling=S,U=S);return t&&b.forEach(function($){return e(f,$)}),Lt&&Ur(f,Y),O}function v(f,x,y,w){if(typeof y=="object"&&y!==null&&y.type===Do&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ba:e:{for(var O=y.key,U=x;U!==null;){if(U.key===O){if(O=y.type,O===Do){if(U.tag===7){n(f,U.sibling),x=r(U,y.props.children),x.return=f,f=x;break e}}else if(U.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===nr&&$h(O)===U.type){n(f,U.sibling),x=r(U,y.props),x.ref=As(f,U,y),x.return=f,f=x;break e}n(f,U);break}else e(f,U);U=U.sibling}y.type===Do?(x=Wr(y.props.children,f.mode,w,y.key),x.return=f,f=x):(w=Pl(y.type,y.key,y.props,null,f.mode,w),w.ref=As(f,x,y),w.return=f,f=w)}return s(f);case bo:e:{for(U=y.key;x!==null;){if(x.key===U)if(x.tag===4&&x.stateNode.containerInfo===y.containerInfo&&x.stateNode.implementation===y.implementation){n(f,x.sibling),x=r(x,y.children||[]),x.return=f,f=x;break e}else{n(f,x);break}else e(f,x);x=x.sibling}x=sc(y,f.mode,w),x.return=f,f=x}return s(f);case nr:return U=y._init,v(f,x,U(y._payload),w)}if(Is(y))return M(f,x,y,w);if(Ss(y))return T(f,x,y,w);Ga(f,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,x!==null&&x.tag===6?(n(f,x.sibling),x=r(x,y),x.return=f,f=x):(n(f,x),x=oc(y,f.mode,w),x.return=f,f=x),s(f)):n(f,x)}return v}var is=iv(!0),rv=iv(!1),Xl=Ar(null),jl=null,Bo=null,dd=null;function hd(){dd=Bo=jl=null}function pd(t){var e=Xl.current;Ct(Xl),t._currentValue=e}function mf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Zo(t,e){jl=t,dd=Bo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Cn=!0),t.firstContext=null)}function ti(t){var e=t._currentValue;if(dd!==t)if(t={context:t,memoizedValue:e,next:null},Bo===null){if(jl===null)throw Error(he(308));Bo=t,jl.dependencies={lanes:0,firstContext:t}}else Bo=Bo.next=t;return e}var Hr=null;function md(t){Hr===null?Hr=[t]:Hr.push(t)}function ov(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,md(e)):(n.next=r.next,r.next=n),e.interleaved=n,Vi(t,i)}function Vi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ir=!1;function gd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function zi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function mr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,st&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Vi(t,n)}return r=i.interleaved,r===null?(e.next=e,md(i)):(e.next=r.next,r.next=e),i.interleaved=e,Vi(t,n)}function Ml(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,td(t,n)}}function Kh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Yl(t,e,n,i){var r=t.updateQueue;ir=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var u=a,c=u.next;u.next=null,s===null?o=c:s.next=c,s=u;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==s&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=u))}if(o!==null){var p=r.baseState;s=0,h=c=u=null,a=o;do{var m=a.lane,_=a.eventTime;if((i&m)===m){h!==null&&(h=h.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var M=t,T=a;switch(m=e,_=n,T.tag){case 1:if(M=T.payload,typeof M=="function"){p=M.call(_,p,m);break e}p=M;break e;case 3:M.flags=M.flags&-65537|128;case 0:if(M=T.payload,m=typeof M=="function"?M.call(_,p,m):M,m==null)break e;p=It({},p,m);break e;case 2:ir=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=r.effects,m===null?r.effects=[a]:m.push(a))}else _={eventTime:_,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=_,u=p):h=h.next=_,s|=m;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;m=a,a=m.next,m.next=null,r.lastBaseUpdate=m,r.shared.pending=null}}while(!0);if(h===null&&(u=p),r.baseState=u,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);Qr|=s,t.lanes=s,t.memoizedState=p}}function Zh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(he(191,r));r.call(i)}}}var _a={},wi=Ar(_a),oa=Ar(_a),sa=Ar(_a);function Gr(t){if(t===_a)throw Error(he(174));return t}function vd(t,e){switch(Tt(sa,e),Tt(oa,t),Tt(wi,_a),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:qc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=qc(e,t)}Ct(wi),Tt(wi,e)}function rs(){Ct(wi),Ct(oa),Ct(sa)}function av(t){Gr(sa.current);var e=Gr(wi.current),n=qc(e,t.type);e!==n&&(Tt(oa,t),Tt(wi,n))}function _d(t){oa.current===t&&(Ct(wi),Ct(oa))}var Ut=Ar(0);function ql(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ju=[];function yd(){for(var t=0;t<Ju.length;t++)Ju[t]._workInProgressVersionPrimary=null;Ju.length=0}var Tl=ji.ReactCurrentDispatcher,ec=ji.ReactCurrentBatchConfig,Zr=0,Nt=null,Wt=null,Kt=null,$l=!1,Vs=!1,aa=0,lx=0;function ln(){throw Error(he(321))}function xd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!vi(t[n],e[n]))return!1;return!0}function Sd(t,e,n,i,r,o){if(Zr=o,Nt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Tl.current=t===null||t.memoizedState===null?dx:hx,t=n(i,r),Vs){o=0;do{if(Vs=!1,aa=0,25<=o)throw Error(he(301));o+=1,Kt=Wt=null,e.updateQueue=null,Tl.current=px,t=n(i,r)}while(Vs)}if(Tl.current=Kl,e=Wt!==null&&Wt.next!==null,Zr=0,Kt=Wt=Nt=null,$l=!1,e)throw Error(he(300));return t}function Ed(){var t=aa!==0;return aa=0,t}function xi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Kt===null?Nt.memoizedState=Kt=t:Kt=Kt.next=t,Kt}function ni(){if(Wt===null){var t=Nt.alternate;t=t!==null?t.memoizedState:null}else t=Wt.next;var e=Kt===null?Nt.memoizedState:Kt.next;if(e!==null)Kt=e,Wt=t;else{if(t===null)throw Error(he(310));Wt=t,t={memoizedState:Wt.memoizedState,baseState:Wt.baseState,baseQueue:Wt.baseQueue,queue:Wt.queue,next:null},Kt===null?Nt.memoizedState=Kt=t:Kt=Kt.next=t}return Kt}function la(t,e){return typeof e=="function"?e(t):e}function tc(t){var e=ni(),n=e.queue;if(n===null)throw Error(he(311));n.lastRenderedReducer=t;var i=Wt,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,u=null,c=o;do{var h=c.lane;if((Zr&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var p={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=p,s=i):u=u.next=p,Nt.lanes|=h,Qr|=h}c=c.next}while(c!==null&&c!==o);u===null?s=i:u.next=a,vi(i,e.memoizedState)||(Cn=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=u,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,Nt.lanes|=o,Qr|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function nc(t){var e=ni(),n=e.queue;if(n===null)throw Error(he(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);vi(o,e.memoizedState)||(Cn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function lv(){}function uv(t,e){var n=Nt,i=ni(),r=e(),o=!vi(i.memoizedState,r);if(o&&(i.memoizedState=r,Cn=!0),i=i.queue,Md(dv.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||Kt!==null&&Kt.memoizedState.tag&1){if(n.flags|=2048,ua(9,fv.bind(null,n,i,r,e),void 0,null),Zt===null)throw Error(he(349));Zr&30||cv(n,e,r)}return r}function cv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Nt.updateQueue,e===null?(e={lastEffect:null,stores:null},Nt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function fv(t,e,n,i){e.value=n,e.getSnapshot=i,hv(e)&&pv(t)}function dv(t,e,n){return n(function(){hv(e)&&pv(t)})}function hv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!vi(t,n)}catch{return!0}}function pv(t){var e=Vi(t,1);e!==null&&mi(e,t,1,-1)}function Qh(t){var e=xi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:t},e.queue=t,t=t.dispatch=fx.bind(null,Nt,t),[e.memoizedState,t]}function ua(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Nt.updateQueue,e===null?(e={lastEffect:null,stores:null},Nt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function mv(){return ni().memoizedState}function wl(t,e,n,i){var r=xi();Nt.flags|=t,r.memoizedState=ua(1|e,n,void 0,i===void 0?null:i)}function pu(t,e,n,i){var r=ni();i=i===void 0?null:i;var o=void 0;if(Wt!==null){var s=Wt.memoizedState;if(o=s.destroy,i!==null&&xd(i,s.deps)){r.memoizedState=ua(e,n,o,i);return}}Nt.flags|=t,r.memoizedState=ua(1|e,n,o,i)}function Jh(t,e){return wl(8390656,8,t,e)}function Md(t,e){return pu(2048,8,t,e)}function gv(t,e){return pu(4,2,t,e)}function vv(t,e){return pu(4,4,t,e)}function _v(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function yv(t,e,n){return n=n!=null?n.concat([t]):null,pu(4,4,_v.bind(null,e,t),n)}function Td(){}function xv(t,e){var n=ni();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&xd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Sv(t,e){var n=ni();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&xd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Ev(t,e,n){return Zr&21?(vi(n,e)||(n=Rg(),Nt.lanes|=n,Qr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Cn=!0),t.memoizedState=n)}function ux(t,e){var n=mt;mt=n!==0&&4>n?n:4,t(!0);var i=ec.transition;ec.transition={};try{t(!1),e()}finally{mt=n,ec.transition=i}}function Mv(){return ni().memoizedState}function cx(t,e,n){var i=vr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Tv(t))wv(e,n);else if(n=ov(t,e,n,i),n!==null){var r=yn();mi(n,t,i,r),Av(n,e,i)}}function fx(t,e,n){var i=vr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Tv(t))wv(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,vi(a,s)){var u=e.interleaved;u===null?(r.next=r,md(e)):(r.next=u.next,u.next=r),e.interleaved=r;return}}catch{}finally{}n=ov(t,e,r,i),n!==null&&(r=yn(),mi(n,t,i,r),Av(n,e,i))}}function Tv(t){var e=t.alternate;return t===Nt||e!==null&&e===Nt}function wv(t,e){Vs=$l=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Av(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,td(t,n)}}var Kl={readContext:ti,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useInsertionEffect:ln,useLayoutEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useMutableSource:ln,useSyncExternalStore:ln,useId:ln,unstable_isNewReconciler:!1},dx={readContext:ti,useCallback:function(t,e){return xi().memoizedState=[t,e===void 0?null:e],t},useContext:ti,useEffect:Jh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,wl(4194308,4,_v.bind(null,e,t),n)},useLayoutEffect:function(t,e){return wl(4194308,4,t,e)},useInsertionEffect:function(t,e){return wl(4,2,t,e)},useMemo:function(t,e){var n=xi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=xi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=cx.bind(null,Nt,t),[i.memoizedState,t]},useRef:function(t){var e=xi();return t={current:t},e.memoizedState=t},useState:Qh,useDebugValue:Td,useDeferredValue:function(t){return xi().memoizedState=t},useTransition:function(){var t=Qh(!1),e=t[0];return t=ux.bind(null,t[1]),xi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Nt,r=xi();if(Lt){if(n===void 0)throw Error(he(407));n=n()}else{if(n=e(),Zt===null)throw Error(he(349));Zr&30||cv(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,Jh(dv.bind(null,i,o,t),[t]),i.flags|=2048,ua(9,fv.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=xi(),e=Zt.identifierPrefix;if(Lt){var n=Oi,i=Fi;n=(i&~(1<<32-pi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=aa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=lx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},hx={readContext:ti,useCallback:xv,useContext:ti,useEffect:Md,useImperativeHandle:yv,useInsertionEffect:gv,useLayoutEffect:vv,useMemo:Sv,useReducer:tc,useRef:mv,useState:function(){return tc(la)},useDebugValue:Td,useDeferredValue:function(t){var e=ni();return Ev(e,Wt.memoizedState,t)},useTransition:function(){var t=tc(la)[0],e=ni().memoizedState;return[t,e]},useMutableSource:lv,useSyncExternalStore:uv,useId:Mv,unstable_isNewReconciler:!1},px={readContext:ti,useCallback:xv,useContext:ti,useEffect:Md,useImperativeHandle:yv,useInsertionEffect:gv,useLayoutEffect:vv,useMemo:Sv,useReducer:nc,useRef:mv,useState:function(){return nc(la)},useDebugValue:Td,useDeferredValue:function(t){var e=ni();return Wt===null?e.memoizedState=t:Ev(e,Wt.memoizedState,t)},useTransition:function(){var t=nc(la)[0],e=ni().memoizedState;return[t,e]},useMutableSource:lv,useSyncExternalStore:uv,useId:Mv,unstable_isNewReconciler:!1};function li(t,e){if(t&&t.defaultProps){e=It({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function gf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:It({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var mu={isMounted:function(t){return(t=t._reactInternals)?io(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=yn(),r=vr(t),o=zi(i,r);o.payload=e,n!=null&&(o.callback=n),e=mr(t,o,r),e!==null&&(mi(e,t,r,i),Ml(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=yn(),r=vr(t),o=zi(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=mr(t,o,r),e!==null&&(mi(e,t,r,i),Ml(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=yn(),i=vr(t),r=zi(n,i);r.tag=2,e!=null&&(r.callback=e),e=mr(t,r,i),e!==null&&(mi(e,t,i,n),Ml(e,t,i))}};function ep(t,e,n,i,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!ta(n,i)||!ta(r,o):!0}function Rv(t,e,n){var i=!1,r=Mr,o=e.contextType;return typeof o=="object"&&o!==null?o=ti(o):(r=Ln(e)?$r:hn.current,i=e.contextTypes,o=(i=i!=null)?ts(t,r):Mr),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=mu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function tp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&mu.enqueueReplaceState(e,e.state,null)}function vf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},gd(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=ti(o):(o=Ln(e)?$r:hn.current,r.context=ts(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(gf(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&mu.enqueueReplaceState(r,r.state,null),Yl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function os(t,e){try{var n="",i=e;do n+=G0(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function ic(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function _f(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var mx=typeof WeakMap=="function"?WeakMap:Map;function Cv(t,e,n){n=zi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ql||(Ql=!0,Cf=i),_f(t,e)},n}function Pv(t,e,n){n=zi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){_f(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){_f(t,e),typeof i!="function"&&(gr===null?gr=new Set([this]):gr.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function np(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new mx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Px.bind(null,t,e,n),e.then(t,t))}function ip(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function rp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=zi(-1,1),e.tag=2,mr(n,e,1))),n.lanes|=1),t)}var gx=ji.ReactCurrentOwner,Cn=!1;function vn(t,e,n,i){e.child=t===null?rv(e,null,n,i):is(e,t.child,n,i)}function op(t,e,n,i,r){n=n.render;var o=e.ref;return Zo(e,r),i=Sd(t,e,n,i,o,r),n=Ed(),t!==null&&!Cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Wi(t,e,r)):(Lt&&n&&ud(e),e.flags|=1,vn(t,e,i,r),e.child)}function sp(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!Dd(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Lv(t,e,o,i,r)):(t=Pl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:ta,n(s,i)&&t.ref===e.ref)return Wi(t,e,r)}return e.flags|=1,t=_r(o,i),t.ref=e.ref,t.return=e,e.child=t}function Lv(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(ta(o,i)&&t.ref===e.ref)if(Cn=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(Cn=!0);else return e.lanes=t.lanes,Wi(t,e,r)}return yf(t,e,n,i,r)}function bv(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Tt(Go,Fn),Fn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Tt(Go,Fn),Fn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,Tt(Go,Fn),Fn|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,Tt(Go,Fn),Fn|=i;return vn(t,e,r,n),e.child}function Dv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function yf(t,e,n,i,r){var o=Ln(n)?$r:hn.current;return o=ts(e,o),Zo(e,r),n=Sd(t,e,n,i,o,r),i=Ed(),t!==null&&!Cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Wi(t,e,r)):(Lt&&i&&ud(e),e.flags|=1,vn(t,e,n,r),e.child)}function ap(t,e,n,i,r){if(Ln(n)){var o=!0;Gl(e)}else o=!1;if(Zo(e,r),e.stateNode===null)Al(t,e),Rv(e,n,i),vf(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var u=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=ti(c):(c=Ln(n)?$r:hn.current,c=ts(e,c));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||u!==c)&&tp(e,s,i,c),ir=!1;var m=e.memoizedState;s.state=m,Yl(e,i,s,r),u=e.memoizedState,a!==i||m!==u||Pn.current||ir?(typeof h=="function"&&(gf(e,n,h,i),u=e.memoizedState),(a=ir||ep(e,n,a,i,m,u,c))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=u),s.props=i,s.state=u,s.context=c,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,sv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:li(e.type,a),s.props=c,p=e.pendingProps,m=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=ti(u):(u=Ln(n)?$r:hn.current,u=ts(e,u));var _=n.getDerivedStateFromProps;(h=typeof _=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==p||m!==u)&&tp(e,s,i,u),ir=!1,m=e.memoizedState,s.state=m,Yl(e,i,s,r);var M=e.memoizedState;a!==p||m!==M||Pn.current||ir?(typeof _=="function"&&(gf(e,n,_,i),M=e.memoizedState),(c=ir||ep(e,n,c,i,m,M,u)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,M,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,M,u)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=M),s.props=i,s.state=M,s.context=u,i=c):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),i=!1)}return xf(t,e,n,i,o,r)}function xf(t,e,n,i,r,o){Dv(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&jh(e,n,!1),Wi(t,e,o);i=e.stateNode,gx.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=is(e,t.child,null,o),e.child=is(e,null,a,o)):vn(t,e,a,o),e.memoizedState=i.state,r&&jh(e,n,!0),e.child}function Uv(t){var e=t.stateNode;e.pendingContext?Xh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Xh(t,e.context,!1),vd(t,e.containerInfo)}function lp(t,e,n,i,r){return ns(),fd(r),e.flags|=256,vn(t,e,n,i),e.child}var Sf={dehydrated:null,treeContext:null,retryLane:0};function Ef(t){return{baseLanes:t,cachePool:null,transitions:null}}function Nv(t,e,n){var i=e.pendingProps,r=Ut.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Tt(Ut,r&1),t===null)return pf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=_u(s,i,0,null),t=Wr(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Ef(n),e.memoizedState=Sf,t):wd(e,s));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return vx(t,e,s,i,a,r,n);if(o){o=i.fallback,s=e.mode,r=t.child,a=r.sibling;var u={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=u,e.deletions=null):(i=_r(r,u),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=_r(a,o):(o=Wr(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=t.child.memoizedState,s=s===null?Ef(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=Sf,i}return o=t.child,t=o.sibling,i=_r(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function wd(t,e){return e=_u({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Va(t,e,n,i){return i!==null&&fd(i),is(e,t.child,null,n),t=wd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function vx(t,e,n,i,r,o,s){if(n)return e.flags&256?(e.flags&=-257,i=ic(Error(he(422))),Va(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=_u({mode:"visible",children:i.children},r,0,null),o=Wr(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&is(e,t.child,null,s),e.child.memoizedState=Ef(s),e.memoizedState=Sf,o);if(!(e.mode&1))return Va(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(he(419)),i=ic(o,i,void 0),Va(t,e,s,i)}if(a=(s&t.childLanes)!==0,Cn||a){if(i=Zt,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,Vi(t,r),mi(i,t,r,-1))}return bd(),i=ic(Error(he(421))),Va(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Lx.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,kn=pr(r.nextSibling),zn=e,Lt=!0,ci=null,t!==null&&(qn[$n++]=Fi,qn[$n++]=Oi,qn[$n++]=Kr,Fi=t.id,Oi=t.overflow,Kr=e),e=wd(e,i.children),e.flags|=4096,e)}function up(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),mf(t.return,e,n)}function rc(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function Iv(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(vn(t,e,i.children,n),i=Ut.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&up(t,n,e);else if(t.tag===19)up(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Tt(Ut,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&ql(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),rc(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&ql(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}rc(e,!0,n,null,o);break;case"together":rc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Al(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Wi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Qr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(he(153));if(e.child!==null){for(t=e.child,n=_r(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=_r(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function _x(t,e,n){switch(e.tag){case 3:Uv(e),ns();break;case 5:av(e);break;case 1:Ln(e.type)&&Gl(e);break;case 4:vd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Tt(Xl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Tt(Ut,Ut.current&1),e.flags|=128,null):n&e.child.childLanes?Nv(t,e,n):(Tt(Ut,Ut.current&1),t=Wi(t,e,n),t!==null?t.sibling:null);Tt(Ut,Ut.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Iv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Tt(Ut,Ut.current),i)break;return null;case 22:case 23:return e.lanes=0,bv(t,e,n)}return Wi(t,e,n)}var Fv,Mf,Ov,kv;Fv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Mf=function(){};Ov=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Gr(wi.current);var o=null;switch(n){case"input":r=Wc(t,r),i=Wc(t,i),o=[];break;case"select":r=It({},r,{value:void 0}),i=It({},i,{value:void 0}),o=[];break;case"textarea":r=Yc(t,r),i=Yc(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Bl)}$c(n,i);var s;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(qs.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in i){var u=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&a[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(qs.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&At("scroll",t),o||a===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(e.updateQueue=c)&&(e.flags|=4)}};kv=function(t,e,n,i){n!==i&&(e.flags|=4)};function Rs(t,e){if(!Lt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function un(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function yx(t,e,n){var i=e.pendingProps;switch(cd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return un(e),null;case 1:return Ln(e.type)&&Hl(),un(e),null;case 3:return i=e.stateNode,rs(),Ct(Pn),Ct(hn),yd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ha(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ci!==null&&(bf(ci),ci=null))),Mf(t,e),un(e),null;case 5:_d(e);var r=Gr(sa.current);if(n=e.type,t!==null&&e.stateNode!=null)Ov(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(he(166));return un(e),null}if(t=Gr(wi.current),Ha(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[Ei]=e,i[ra]=o,t=(e.mode&1)!==0,n){case"dialog":At("cancel",i),At("close",i);break;case"iframe":case"object":case"embed":At("load",i);break;case"video":case"audio":for(r=0;r<Os.length;r++)At(Os[r],i);break;case"source":At("error",i);break;case"img":case"image":case"link":At("error",i),At("load",i);break;case"details":At("toggle",i);break;case"input":_h(i,o),At("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},At("invalid",i);break;case"textarea":xh(i,o),At("invalid",i)}$c(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&Ba(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Ba(i.textContent,a,t),r=["children",""+a]):qs.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&At("scroll",i)}switch(n){case"input":Da(i),yh(i,o,!0);break;case"textarea":Da(i),Sh(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=Bl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=dg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[Ei]=e,t[ra]=i,Fv(t,e,!1,!1),e.stateNode=t;e:{switch(s=Kc(n,i),n){case"dialog":At("cancel",t),At("close",t),r=i;break;case"iframe":case"object":case"embed":At("load",t),r=i;break;case"video":case"audio":for(r=0;r<Os.length;r++)At(Os[r],t);r=i;break;case"source":At("error",t),r=i;break;case"img":case"image":case"link":At("error",t),At("load",t),r=i;break;case"details":At("toggle",t),r=i;break;case"input":_h(t,i),r=Wc(t,i),At("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=It({},i,{value:void 0}),At("invalid",t);break;case"textarea":xh(t,i),r=Yc(t,i),At("invalid",t);break;default:r=i}$c(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="style"?mg(t,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&hg(t,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&$s(t,u):typeof u=="number"&&$s(t,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(qs.hasOwnProperty(o)?u!=null&&o==="onScroll"&&At("scroll",t):u!=null&&$f(t,o,u,s))}switch(n){case"input":Da(t),yh(t,i,!1);break;case"textarea":Da(t),Sh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Er(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?Yo(t,!!i.multiple,o,!1):i.defaultValue!=null&&Yo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Bl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return un(e),null;case 6:if(t&&e.stateNode!=null)kv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(he(166));if(n=Gr(sa.current),Gr(wi.current),Ha(e)){if(i=e.stateNode,n=e.memoizedProps,i[Ei]=e,(o=i.nodeValue!==n)&&(t=zn,t!==null))switch(t.tag){case 3:Ba(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ba(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ei]=e,e.stateNode=i}return un(e),null;case 13:if(Ct(Ut),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Lt&&kn!==null&&e.mode&1&&!(e.flags&128))nv(),ns(),e.flags|=98560,o=!1;else if(o=Ha(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(he(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(he(317));o[Ei]=e}else ns(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;un(e),o=!1}else ci!==null&&(bf(ci),ci=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Ut.current&1?Xt===0&&(Xt=3):bd())),e.updateQueue!==null&&(e.flags|=4),un(e),null);case 4:return rs(),Mf(t,e),t===null&&na(e.stateNode.containerInfo),un(e),null;case 10:return pd(e.type._context),un(e),null;case 17:return Ln(e.type)&&Hl(),un(e),null;case 19:if(Ct(Ut),o=e.memoizedState,o===null)return un(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)Rs(o,!1);else{if(Xt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=ql(t),s!==null){for(e.flags|=128,Rs(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Tt(Ut,Ut.current&1|2),e.child}t=t.sibling}o.tail!==null&&kt()>ss&&(e.flags|=128,i=!0,Rs(o,!1),e.lanes=4194304)}else{if(!i)if(t=ql(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Rs(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Lt)return un(e),null}else 2*kt()-o.renderingStartTime>ss&&n!==1073741824&&(e.flags|=128,i=!0,Rs(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=kt(),e.sibling=null,n=Ut.current,Tt(Ut,i?n&1|2:n&1),e):(un(e),null);case 22:case 23:return Ld(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Fn&1073741824&&(un(e),e.subtreeFlags&6&&(e.flags|=8192)):un(e),null;case 24:return null;case 25:return null}throw Error(he(156,e.tag))}function xx(t,e){switch(cd(e),e.tag){case 1:return Ln(e.type)&&Hl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return rs(),Ct(Pn),Ct(hn),yd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return _d(e),null;case 13:if(Ct(Ut),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(he(340));ns()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ct(Ut),null;case 4:return rs(),null;case 10:return pd(e.type._context),null;case 22:case 23:return Ld(),null;case 24:return null;default:return null}}var Wa=!1,dn=!1,Sx=typeof WeakSet=="function"?WeakSet:Set,Re=null;function Ho(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Ot(t,e,i)}else n.current=null}function Tf(t,e,n){try{n()}catch(i){Ot(t,e,i)}}var cp=!1;function Ex(t,e){if(af=Ol,t=Vg(),ld(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,u=-1,c=0,h=0,p=t,m=null;t:for(;;){for(var _;p!==n||r!==0&&p.nodeType!==3||(a=s+r),p!==o||i!==0&&p.nodeType!==3||(u=s+i),p.nodeType===3&&(s+=p.nodeValue.length),(_=p.firstChild)!==null;)m=p,p=_;for(;;){if(p===t)break t;if(m===n&&++c===r&&(a=s),m===o&&++h===i&&(u=s),(_=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=_}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(lf={focusedElem:t,selectionRange:n},Ol=!1,Re=e;Re!==null;)if(e=Re,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Re=t;else for(;Re!==null;){e=Re;try{var M=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(M!==null){var T=M.memoizedProps,v=M.memoizedState,f=e.stateNode,x=f.getSnapshotBeforeUpdate(e.elementType===e.type?T:li(e.type,T),v);f.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(he(163))}}catch(w){Ot(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,Re=t;break}Re=e.return}return M=cp,cp=!1,M}function Ws(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&Tf(e,n,o)}r=r.next}while(r!==i)}}function gu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function wf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function zv(t){var e=t.alternate;e!==null&&(t.alternate=null,zv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ei],delete e[ra],delete e[ff],delete e[rx],delete e[ox])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Bv(t){return t.tag===5||t.tag===3||t.tag===4}function fp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Bv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Af(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Bl));else if(i!==4&&(t=t.child,t!==null))for(Af(t,e,n),t=t.sibling;t!==null;)Af(t,e,n),t=t.sibling}function Rf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Rf(t,e,n),t=t.sibling;t!==null;)Rf(t,e,n),t=t.sibling}var tn=null,ui=!1;function Ki(t,e,n){for(n=n.child;n!==null;)Hv(t,e,n),n=n.sibling}function Hv(t,e,n){if(Ti&&typeof Ti.onCommitFiberUnmount=="function")try{Ti.onCommitFiberUnmount(lu,n)}catch{}switch(n.tag){case 5:dn||Ho(n,e);case 6:var i=tn,r=ui;tn=null,Ki(t,e,n),tn=i,ui=r,tn!==null&&(ui?(t=tn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):tn.removeChild(n.stateNode));break;case 18:tn!==null&&(ui?(t=tn,n=n.stateNode,t.nodeType===8?Zu(t.parentNode,n):t.nodeType===1&&Zu(t,n),Js(t)):Zu(tn,n.stateNode));break;case 4:i=tn,r=ui,tn=n.stateNode.containerInfo,ui=!0,Ki(t,e,n),tn=i,ui=r;break;case 0:case 11:case 14:case 15:if(!dn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Tf(n,e,s),r=r.next}while(r!==i)}Ki(t,e,n);break;case 1:if(!dn&&(Ho(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Ot(n,e,a)}Ki(t,e,n);break;case 21:Ki(t,e,n);break;case 22:n.mode&1?(dn=(i=dn)||n.memoizedState!==null,Ki(t,e,n),dn=i):Ki(t,e,n);break;default:Ki(t,e,n)}}function dp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Sx),e.forEach(function(i){var r=bx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function ri(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:tn=a.stateNode,ui=!1;break e;case 3:tn=a.stateNode.containerInfo,ui=!0;break e;case 4:tn=a.stateNode.containerInfo,ui=!0;break e}a=a.return}if(tn===null)throw Error(he(160));Hv(o,s,r),tn=null,ui=!1;var u=r.alternate;u!==null&&(u.return=null),r.return=null}catch(c){Ot(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Gv(e,t),e=e.sibling}function Gv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ri(e,t),yi(t),i&4){try{Ws(3,t,t.return),gu(3,t)}catch(T){Ot(t,t.return,T)}try{Ws(5,t,t.return)}catch(T){Ot(t,t.return,T)}}break;case 1:ri(e,t),yi(t),i&512&&n!==null&&Ho(n,n.return);break;case 5:if(ri(e,t),yi(t),i&512&&n!==null&&Ho(n,n.return),t.flags&32){var r=t.stateNode;try{$s(r,"")}catch(T){Ot(t,t.return,T)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&cg(r,o),Kc(a,s);var c=Kc(a,o);for(s=0;s<u.length;s+=2){var h=u[s],p=u[s+1];h==="style"?mg(r,p):h==="dangerouslySetInnerHTML"?hg(r,p):h==="children"?$s(r,p):$f(r,h,p,c)}switch(a){case"input":Xc(r,o);break;case"textarea":fg(r,o);break;case"select":var m=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var _=o.value;_!=null?Yo(r,!!o.multiple,_,!1):m!==!!o.multiple&&(o.defaultValue!=null?Yo(r,!!o.multiple,o.defaultValue,!0):Yo(r,!!o.multiple,o.multiple?[]:"",!1))}r[ra]=o}catch(T){Ot(t,t.return,T)}}break;case 6:if(ri(e,t),yi(t),i&4){if(t.stateNode===null)throw Error(he(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(T){Ot(t,t.return,T)}}break;case 3:if(ri(e,t),yi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Js(e.containerInfo)}catch(T){Ot(t,t.return,T)}break;case 4:ri(e,t),yi(t);break;case 13:ri(e,t),yi(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(Cd=kt())),i&4&&dp(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(dn=(c=dn)||h,ri(e,t),dn=c):ri(e,t),yi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(Re=t,h=t.child;h!==null;){for(p=Re=h;Re!==null;){switch(m=Re,_=m.child,m.tag){case 0:case 11:case 14:case 15:Ws(4,m,m.return);break;case 1:Ho(m,m.return);var M=m.stateNode;if(typeof M.componentWillUnmount=="function"){i=m,n=m.return;try{e=i,M.props=e.memoizedProps,M.state=e.memoizedState,M.componentWillUnmount()}catch(T){Ot(i,n,T)}}break;case 5:Ho(m,m.return);break;case 22:if(m.memoizedState!==null){pp(p);continue}}_!==null?(_.return=m,Re=_):pp(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{r=p.stateNode,c?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=p.stateNode,u=p.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=pg("display",s))}catch(T){Ot(t,t.return,T)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(T){Ot(t,t.return,T)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:ri(e,t),yi(t),i&4&&dp(t);break;case 21:break;default:ri(e,t),yi(t)}}function yi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Bv(n)){var i=n;break e}n=n.return}throw Error(he(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&($s(r,""),i.flags&=-33);var o=fp(t);Rf(t,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=fp(t);Af(t,a,s);break;default:throw Error(he(161))}}catch(u){Ot(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Mx(t,e,n){Re=t,Vv(t)}function Vv(t,e,n){for(var i=(t.mode&1)!==0;Re!==null;){var r=Re,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||Wa;if(!s){var a=r.alternate,u=a!==null&&a.memoizedState!==null||dn;a=Wa;var c=dn;if(Wa=s,(dn=u)&&!c)for(Re=r;Re!==null;)s=Re,u=s.child,s.tag===22&&s.memoizedState!==null?mp(r):u!==null?(u.return=s,Re=u):mp(r);for(;o!==null;)Re=o,Vv(o),o=o.sibling;Re=r,Wa=a,dn=c}hp(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,Re=o):hp(t)}}function hp(t){for(;Re!==null;){var e=Re;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:dn||gu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!dn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:li(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Zh(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Zh(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&Js(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(he(163))}dn||e.flags&512&&wf(e)}catch(m){Ot(e,e.return,m)}}if(e===t){Re=null;break}if(n=e.sibling,n!==null){n.return=e.return,Re=n;break}Re=e.return}}function pp(t){for(;Re!==null;){var e=Re;if(e===t){Re=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Re=n;break}Re=e.return}}function mp(t){for(;Re!==null;){var e=Re;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{gu(4,e)}catch(u){Ot(e,n,u)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(u){Ot(e,r,u)}}var o=e.return;try{wf(e)}catch(u){Ot(e,o,u)}break;case 5:var s=e.return;try{wf(e)}catch(u){Ot(e,s,u)}}}catch(u){Ot(e,e.return,u)}if(e===t){Re=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Re=a;break}Re=e.return}}var Tx=Math.ceil,Zl=ji.ReactCurrentDispatcher,Ad=ji.ReactCurrentOwner,ei=ji.ReactCurrentBatchConfig,st=0,Zt=null,Gt=null,on=0,Fn=0,Go=Ar(0),Xt=0,ca=null,Qr=0,vu=0,Rd=0,Xs=null,An=null,Cd=0,ss=1/0,Ni=null,Ql=!1,Cf=null,gr=null,Xa=!1,lr=null,Jl=0,js=0,Pf=null,Rl=-1,Cl=0;function yn(){return st&6?kt():Rl!==-1?Rl:Rl=kt()}function vr(t){return t.mode&1?st&2&&on!==0?on&-on:ax.transition!==null?(Cl===0&&(Cl=Rg()),Cl):(t=mt,t!==0||(t=window.event,t=t===void 0?16:Ng(t.type)),t):1}function mi(t,e,n,i){if(50<js)throw js=0,Pf=null,Error(he(185));ma(t,n,i),(!(st&2)||t!==Zt)&&(t===Zt&&(!(st&2)&&(vu|=n),Xt===4&&or(t,on)),bn(t,i),n===1&&st===0&&!(e.mode&1)&&(ss=kt()+500,hu&&Rr()))}function bn(t,e){var n=t.callbackNode;ay(t,e);var i=Fl(t,t===Zt?on:0);if(i===0)n!==null&&Th(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Th(n),e===1)t.tag===0?sx(gp.bind(null,t)):Jg(gp.bind(null,t)),nx(function(){!(st&6)&&Rr()}),n=null;else{switch(Cg(i)){case 1:n=ed;break;case 4:n=wg;break;case 16:n=Il;break;case 536870912:n=Ag;break;default:n=Il}n=Zv(n,Wv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Wv(t,e){if(Rl=-1,Cl=0,st&6)throw Error(he(327));var n=t.callbackNode;if(Qo()&&t.callbackNode!==n)return null;var i=Fl(t,t===Zt?on:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=eu(t,i);else{e=i;var r=st;st|=2;var o=jv();(Zt!==t||on!==e)&&(Ni=null,ss=kt()+500,Vr(t,e));do try{Rx();break}catch(a){Xv(t,a)}while(!0);hd(),Zl.current=o,st=r,Gt!==null?e=0:(Zt=null,on=0,e=Xt)}if(e!==0){if(e===2&&(r=tf(t),r!==0&&(i=r,e=Lf(t,r))),e===1)throw n=ca,Vr(t,0),or(t,i),bn(t,kt()),n;if(e===6)or(t,i);else{if(r=t.current.alternate,!(i&30)&&!wx(r)&&(e=eu(t,i),e===2&&(o=tf(t),o!==0&&(i=o,e=Lf(t,o))),e===1))throw n=ca,Vr(t,0),or(t,i),bn(t,kt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(he(345));case 2:Nr(t,An,Ni);break;case 3:if(or(t,i),(i&130023424)===i&&(e=Cd+500-kt(),10<e)){if(Fl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){yn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=cf(Nr.bind(null,t,An,Ni),e);break}Nr(t,An,Ni);break;case 4:if(or(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-pi(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=kt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Tx(i/1960))-i,10<i){t.timeoutHandle=cf(Nr.bind(null,t,An,Ni),i);break}Nr(t,An,Ni);break;case 5:Nr(t,An,Ni);break;default:throw Error(he(329))}}}return bn(t,kt()),t.callbackNode===n?Wv.bind(null,t):null}function Lf(t,e){var n=Xs;return t.current.memoizedState.isDehydrated&&(Vr(t,e).flags|=256),t=eu(t,e),t!==2&&(e=An,An=n,e!==null&&bf(e)),t}function bf(t){An===null?An=t:An.push.apply(An,t)}function wx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!vi(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function or(t,e){for(e&=~Rd,e&=~vu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-pi(e),i=1<<n;t[n]=-1,e&=~i}}function gp(t){if(st&6)throw Error(he(327));Qo();var e=Fl(t,0);if(!(e&1))return bn(t,kt()),null;var n=eu(t,e);if(t.tag!==0&&n===2){var i=tf(t);i!==0&&(e=i,n=Lf(t,i))}if(n===1)throw n=ca,Vr(t,0),or(t,e),bn(t,kt()),n;if(n===6)throw Error(he(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Nr(t,An,Ni),bn(t,kt()),null}function Pd(t,e){var n=st;st|=1;try{return t(e)}finally{st=n,st===0&&(ss=kt()+500,hu&&Rr())}}function Jr(t){lr!==null&&lr.tag===0&&!(st&6)&&Qo();var e=st;st|=1;var n=ei.transition,i=mt;try{if(ei.transition=null,mt=1,t)return t()}finally{mt=i,ei.transition=n,st=e,!(st&6)&&Rr()}}function Ld(){Fn=Go.current,Ct(Go)}function Vr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,tx(n)),Gt!==null)for(n=Gt.return;n!==null;){var i=n;switch(cd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Hl();break;case 3:rs(),Ct(Pn),Ct(hn),yd();break;case 5:_d(i);break;case 4:rs();break;case 13:Ct(Ut);break;case 19:Ct(Ut);break;case 10:pd(i.type._context);break;case 22:case 23:Ld()}n=n.return}if(Zt=t,Gt=t=_r(t.current,null),on=Fn=e,Xt=0,ca=null,Rd=vu=Qr=0,An=Xs=null,Hr!==null){for(e=0;e<Hr.length;e++)if(n=Hr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}Hr=null}return t}function Xv(t,e){do{var n=Gt;try{if(hd(),Tl.current=Kl,$l){for(var i=Nt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}$l=!1}if(Zr=0,Kt=Wt=Nt=null,Vs=!1,aa=0,Ad.current=null,n===null||n.return===null){Xt=1,ca=e,Gt=null;break}e:{var o=t,s=n.return,a=n,u=e;if(e=on,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=a,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var _=ip(s);if(_!==null){_.flags&=-257,rp(_,s,a,o,e),_.mode&1&&np(o,c,e),e=_,u=c;var M=e.updateQueue;if(M===null){var T=new Set;T.add(u),e.updateQueue=T}else M.add(u);break e}else{if(!(e&1)){np(o,c,e),bd();break e}u=Error(he(426))}}else if(Lt&&a.mode&1){var v=ip(s);if(v!==null){!(v.flags&65536)&&(v.flags|=256),rp(v,s,a,o,e),fd(os(u,a));break e}}o=u=os(u,a),Xt!==4&&(Xt=2),Xs===null?Xs=[o]:Xs.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var f=Cv(o,u,e);Kh(o,f);break e;case 1:a=u;var x=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof x.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(gr===null||!gr.has(y)))){o.flags|=65536,e&=-e,o.lanes|=e;var w=Pv(o,a,e);Kh(o,w);break e}}o=o.return}while(o!==null)}qv(n)}catch(O){e=O,Gt===n&&n!==null&&(Gt=n=n.return);continue}break}while(!0)}function jv(){var t=Zl.current;return Zl.current=Kl,t===null?Kl:t}function bd(){(Xt===0||Xt===3||Xt===2)&&(Xt=4),Zt===null||!(Qr&268435455)&&!(vu&268435455)||or(Zt,on)}function eu(t,e){var n=st;st|=2;var i=jv();(Zt!==t||on!==e)&&(Ni=null,Vr(t,e));do try{Ax();break}catch(r){Xv(t,r)}while(!0);if(hd(),st=n,Zl.current=i,Gt!==null)throw Error(he(261));return Zt=null,on=0,Xt}function Ax(){for(;Gt!==null;)Yv(Gt)}function Rx(){for(;Gt!==null&&!Q0();)Yv(Gt)}function Yv(t){var e=Kv(t.alternate,t,Fn);t.memoizedProps=t.pendingProps,e===null?qv(t):Gt=e,Ad.current=null}function qv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=xx(n,e),n!==null){n.flags&=32767,Gt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Xt=6,Gt=null;return}}else if(n=yx(n,e,Fn),n!==null){Gt=n;return}if(e=e.sibling,e!==null){Gt=e;return}Gt=e=t}while(e!==null);Xt===0&&(Xt=5)}function Nr(t,e,n){var i=mt,r=ei.transition;try{ei.transition=null,mt=1,Cx(t,e,n,i)}finally{ei.transition=r,mt=i}return null}function Cx(t,e,n,i){do Qo();while(lr!==null);if(st&6)throw Error(he(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(he(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(ly(t,o),t===Zt&&(Gt=Zt=null,on=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xa||(Xa=!0,Zv(Il,function(){return Qo(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=ei.transition,ei.transition=null;var s=mt;mt=1;var a=st;st|=4,Ad.current=null,Ex(t,n),Gv(n,t),qy(lf),Ol=!!af,lf=af=null,t.current=n,Mx(n),J0(),st=a,mt=s,ei.transition=o}else t.current=n;if(Xa&&(Xa=!1,lr=t,Jl=r),o=t.pendingLanes,o===0&&(gr=null),ny(n.stateNode),bn(t,kt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ql)throw Ql=!1,t=Cf,Cf=null,t;return Jl&1&&t.tag!==0&&Qo(),o=t.pendingLanes,o&1?t===Pf?js++:(js=0,Pf=t):js=0,Rr(),null}function Qo(){if(lr!==null){var t=Cg(Jl),e=ei.transition,n=mt;try{if(ei.transition=null,mt=16>t?16:t,lr===null)var i=!1;else{if(t=lr,lr=null,Jl=0,st&6)throw Error(he(331));var r=st;for(st|=4,Re=t.current;Re!==null;){var o=Re,s=o.child;if(Re.flags&16){var a=o.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(Re=c;Re!==null;){var h=Re;switch(h.tag){case 0:case 11:case 15:Ws(8,h,o)}var p=h.child;if(p!==null)p.return=h,Re=p;else for(;Re!==null;){h=Re;var m=h.sibling,_=h.return;if(zv(h),h===c){Re=null;break}if(m!==null){m.return=_,Re=m;break}Re=_}}}var M=o.alternate;if(M!==null){var T=M.child;if(T!==null){M.child=null;do{var v=T.sibling;T.sibling=null,T=v}while(T!==null)}}Re=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,Re=s;else e:for(;Re!==null;){if(o=Re,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ws(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,Re=f;break e}Re=o.return}}var x=t.current;for(Re=x;Re!==null;){s=Re;var y=s.child;if(s.subtreeFlags&2064&&y!==null)y.return=s,Re=y;else e:for(s=x;Re!==null;){if(a=Re,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:gu(9,a)}}catch(O){Ot(a,a.return,O)}if(a===s){Re=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,Re=w;break e}Re=a.return}}if(st=r,Rr(),Ti&&typeof Ti.onPostCommitFiberRoot=="function")try{Ti.onPostCommitFiberRoot(lu,t)}catch{}i=!0}return i}finally{mt=n,ei.transition=e}}return!1}function vp(t,e,n){e=os(n,e),e=Cv(t,e,1),t=mr(t,e,1),e=yn(),t!==null&&(ma(t,1,e),bn(t,e))}function Ot(t,e,n){if(t.tag===3)vp(t,t,n);else for(;e!==null;){if(e.tag===3){vp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(gr===null||!gr.has(i))){t=os(n,t),t=Pv(e,t,1),e=mr(e,t,1),t=yn(),e!==null&&(ma(e,1,t),bn(e,t));break}}e=e.return}}function Px(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=yn(),t.pingedLanes|=t.suspendedLanes&n,Zt===t&&(on&n)===n&&(Xt===4||Xt===3&&(on&130023424)===on&&500>kt()-Cd?Vr(t,0):Rd|=n),bn(t,e)}function $v(t,e){e===0&&(t.mode&1?(e=Ia,Ia<<=1,!(Ia&130023424)&&(Ia=4194304)):e=1);var n=yn();t=Vi(t,e),t!==null&&(ma(t,e,n),bn(t,n))}function Lx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),$v(t,n)}function bx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(he(314))}i!==null&&i.delete(e),$v(t,n)}var Kv;Kv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Pn.current)Cn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Cn=!1,_x(t,e,n);Cn=!!(t.flags&131072)}else Cn=!1,Lt&&e.flags&1048576&&ev(e,Wl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Al(t,e),t=e.pendingProps;var r=ts(e,hn.current);Zo(e,n),r=Sd(null,e,i,t,r,n);var o=Ed();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ln(i)?(o=!0,Gl(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,gd(e),r.updater=mu,e.stateNode=r,r._reactInternals=e,vf(e,i,t,n),e=xf(null,e,i,!0,o,n)):(e.tag=0,Lt&&o&&ud(e),vn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Al(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Ux(i),t=li(i,t),r){case 0:e=yf(null,e,i,t,n);break e;case 1:e=ap(null,e,i,t,n);break e;case 11:e=op(null,e,i,t,n);break e;case 14:e=sp(null,e,i,li(i.type,t),n);break e}throw Error(he(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:li(i,r),yf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:li(i,r),ap(t,e,i,r,n);case 3:e:{if(Uv(e),t===null)throw Error(he(387));i=e.pendingProps,o=e.memoizedState,r=o.element,sv(t,e),Yl(e,i,null,n);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=os(Error(he(423)),e),e=lp(t,e,i,n,r);break e}else if(i!==r){r=os(Error(he(424)),e),e=lp(t,e,i,n,r);break e}else for(kn=pr(e.stateNode.containerInfo.firstChild),zn=e,Lt=!0,ci=null,n=rv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ns(),i===r){e=Wi(t,e,n);break e}vn(t,e,i,n)}e=e.child}return e;case 5:return av(e),t===null&&pf(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,uf(i,r)?s=null:o!==null&&uf(i,o)&&(e.flags|=32),Dv(t,e),vn(t,e,s,n),e.child;case 6:return t===null&&pf(e),null;case 13:return Nv(t,e,n);case 4:return vd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=is(e,null,i,n):vn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:li(i,r),op(t,e,i,r,n);case 7:return vn(t,e,e.pendingProps,n),e.child;case 8:return vn(t,e,e.pendingProps.children,n),e.child;case 12:return vn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,Tt(Xl,i._currentValue),i._currentValue=s,o!==null)if(vi(o.value,s)){if(o.children===r.children&&!Pn.current){e=Wi(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var u=a.firstContext;u!==null;){if(u.context===i){if(o.tag===1){u=zi(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),mf(o.return,n,e),a.lanes|=n;break}u=u.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(he(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),mf(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}vn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Zo(e,n),r=ti(r),i=i(r),e.flags|=1,vn(t,e,i,n),e.child;case 14:return i=e.type,r=li(i,e.pendingProps),r=li(i.type,r),sp(t,e,i,r,n);case 15:return Lv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:li(i,r),Al(t,e),e.tag=1,Ln(i)?(t=!0,Gl(e)):t=!1,Zo(e,n),Rv(e,i,r),vf(e,i,r,n),xf(null,e,i,!0,t,n);case 19:return Iv(t,e,n);case 22:return bv(t,e,n)}throw Error(he(156,e.tag))};function Zv(t,e){return Tg(t,e)}function Dx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(t,e,n,i){return new Dx(t,e,n,i)}function Dd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ux(t){if(typeof t=="function")return Dd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Zf)return 11;if(t===Qf)return 14}return 2}function _r(t,e){var n=t.alternate;return n===null?(n=Jn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Pl(t,e,n,i,r,o){var s=2;if(i=t,typeof t=="function")Dd(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Do:return Wr(n.children,r,o,e);case Kf:s=8,r|=8;break;case Bc:return t=Jn(12,n,e,r|2),t.elementType=Bc,t.lanes=o,t;case Hc:return t=Jn(13,n,e,r),t.elementType=Hc,t.lanes=o,t;case Gc:return t=Jn(19,n,e,r),t.elementType=Gc,t.lanes=o,t;case ag:return _u(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case og:s=10;break e;case sg:s=9;break e;case Zf:s=11;break e;case Qf:s=14;break e;case nr:s=16,i=null;break e}throw Error(he(130,t==null?t:typeof t,""))}return e=Jn(s,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function Wr(t,e,n,i){return t=Jn(7,t,i,e),t.lanes=n,t}function _u(t,e,n,i){return t=Jn(22,t,i,e),t.elementType=ag,t.lanes=n,t.stateNode={isHidden:!1},t}function oc(t,e,n){return t=Jn(6,t,null,e),t.lanes=n,t}function sc(t,e,n){return e=Jn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Nx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bu(0),this.expirationTimes=Bu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ud(t,e,n,i,r,o,s,a,u){return t=new Nx(t,e,n,a,u),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Jn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gd(o),t}function Ix(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:bo,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Qv(t){if(!t)return Mr;t=t._reactInternals;e:{if(io(t)!==t||t.tag!==1)throw Error(he(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ln(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(he(171))}if(t.tag===1){var n=t.type;if(Ln(n))return Qg(t,n,e)}return e}function Jv(t,e,n,i,r,o,s,a,u){return t=Ud(n,i,!0,t,r,o,s,a,u),t.context=Qv(null),n=t.current,i=yn(),r=vr(n),o=zi(i,r),o.callback=e??null,mr(n,o,r),t.current.lanes=r,ma(t,r,i),bn(t,i),t}function yu(t,e,n,i){var r=e.current,o=yn(),s=vr(r);return n=Qv(n),e.context===null?e.context=n:e.pendingContext=n,e=zi(o,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=mr(r,e,s),t!==null&&(mi(t,r,s,o),Ml(t,r,s)),s}function tu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function _p(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Nd(t,e){_p(t,e),(t=t.alternate)&&_p(t,e)}function Fx(){return null}var e_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Id(t){this._internalRoot=t}xu.prototype.render=Id.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(he(409));yu(t,e,null,null)};xu.prototype.unmount=Id.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Jr(function(){yu(null,t,null,null)}),e[Gi]=null}};function xu(t){this._internalRoot=t}xu.prototype.unstable_scheduleHydration=function(t){if(t){var e=bg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<rr.length&&e!==0&&e<rr[n].priority;n++);rr.splice(n,0,t),n===0&&Ug(t)}};function Fd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Su(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function yp(){}function Ox(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var c=tu(s);o.call(c)}}var s=Jv(e,i,t,0,null,!1,!1,"",yp);return t._reactRootContainer=s,t[Gi]=s.current,na(t.nodeType===8?t.parentNode:t),Jr(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=tu(u);a.call(c)}}var u=Ud(t,0,!1,null,null,!1,!1,"",yp);return t._reactRootContainer=u,t[Gi]=u.current,na(t.nodeType===8?t.parentNode:t),Jr(function(){yu(e,u,n,i)}),u}function Eu(t,e,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var u=tu(s);a.call(u)}}yu(e,s,t,r)}else s=Ox(n,e,t,r,i);return tu(s)}Pg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Fs(e.pendingLanes);n!==0&&(td(e,n|1),bn(e,kt()),!(st&6)&&(ss=kt()+500,Rr()))}break;case 13:Jr(function(){var i=Vi(t,1);if(i!==null){var r=yn();mi(i,t,1,r)}}),Nd(t,1)}};nd=function(t){if(t.tag===13){var e=Vi(t,134217728);if(e!==null){var n=yn();mi(e,t,134217728,n)}Nd(t,134217728)}};Lg=function(t){if(t.tag===13){var e=vr(t),n=Vi(t,e);if(n!==null){var i=yn();mi(n,t,e,i)}Nd(t,e)}};bg=function(){return mt};Dg=function(t,e){var n=mt;try{return mt=t,e()}finally{mt=n}};Qc=function(t,e,n){switch(e){case"input":if(Xc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=du(i);if(!r)throw Error(he(90));ug(i),Xc(i,r)}}}break;case"textarea":fg(t,n);break;case"select":e=n.value,e!=null&&Yo(t,!!n.multiple,e,!1)}};_g=Pd;yg=Jr;var kx={usingClientEntryPoint:!1,Events:[va,Fo,du,gg,vg,Pd]},Cs={findFiberByHostInstance:Br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zx={bundleType:Cs.bundleType,version:Cs.version,rendererPackageName:Cs.rendererPackageName,rendererConfig:Cs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ji.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Eg(t),t===null?null:t.stateNode},findFiberByHostInstance:Cs.findFiberByHostInstance||Fx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ja=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ja.isDisabled&&ja.supportsFiber)try{lu=ja.inject(zx),Ti=ja}catch{}}Hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kx;Hn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fd(e))throw Error(he(200));return Ix(t,e,null,n)};Hn.createRoot=function(t,e){if(!Fd(t))throw Error(he(299));var n=!1,i="",r=e_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Ud(t,1,!1,null,null,n,!1,i,r),t[Gi]=e.current,na(t.nodeType===8?t.parentNode:t),new Id(e)};Hn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(he(188)):(t=Object.keys(t).join(","),Error(he(268,t)));return t=Eg(e),t=t===null?null:t.stateNode,t};Hn.flushSync=function(t){return Jr(t)};Hn.hydrate=function(t,e,n){if(!Su(e))throw Error(he(200));return Eu(null,t,e,!0,n)};Hn.hydrateRoot=function(t,e,n){if(!Fd(t))throw Error(he(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=e_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=Jv(e,null,t,1,n??null,r,!1,o,s),t[Gi]=e.current,na(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new xu(e)};Hn.render=function(t,e,n){if(!Su(e))throw Error(he(200));return Eu(null,t,e,!1,n)};Hn.unmountComponentAtNode=function(t){if(!Su(t))throw Error(he(40));return t._reactRootContainer?(Jr(function(){Eu(null,null,t,!1,function(){t._reactRootContainer=null,t[Gi]=null})}),!0):!1};Hn.unstable_batchedUpdates=Pd;Hn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Su(n))throw Error(he(200));if(t==null||t._reactInternals===void 0)throw Error(he(38));return Eu(t,e,n,!1,i)};Hn.version="18.3.1-next-f1338f8080-20240426";function t_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t_)}catch(t){console.error(t)}}t_(),tg.exports=Hn;var Bx=tg.exports,n_,xp=Bx;n_=xp.createRoot,xp.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Od="160",Hx=0,Sp=1,Gx=2,i_=1,Vx=2,Ui=3,Tr=0,Dn=1,Mi=2,yr=0,Xr=1,Vo=2,Ep=3,Mp=4,Wx=5,Or=100,Xx=101,jx=102,Tp=103,wp=104,Yx=200,qx=201,$x=202,Kx=203,Df=204,Uf=205,Zx=206,Qx=207,Jx=208,eS=209,tS=210,nS=211,iS=212,rS=213,oS=214,sS=0,aS=1,lS=2,nu=3,uS=4,cS=5,fS=6,dS=7,r_=0,hS=1,pS=2,xr=0,mS=1,gS=2,vS=3,_S=4,yS=5,xS=6,o_=300,as=301,ls=302,Nf=303,If=304,Mu=306,Ff=1e3,di=1001,Of=1002,_n=1003,Ap=1004,ac=1005,Kn=1006,SS=1007,fa=1008,Sr=1009,ES=1010,MS=1011,kd=1012,s_=1013,ur=1014,cr=1015,da=1016,a_=1017,l_=1018,jr=1020,TS=1021,hi=1023,wS=1024,AS=1025,Yr=1026,us=1027,RS=1028,u_=1029,CS=1030,c_=1031,f_=1033,lc=33776,uc=33777,cc=33778,fc=33779,Rp=35840,Cp=35841,Pp=35842,Lp=35843,d_=36196,bp=37492,Dp=37496,Up=37808,Np=37809,Ip=37810,Fp=37811,Op=37812,kp=37813,zp=37814,Bp=37815,Hp=37816,Gp=37817,Vp=37818,Wp=37819,Xp=37820,jp=37821,dc=36492,Yp=36494,qp=36495,PS=36283,$p=36284,Kp=36285,Zp=36286,h_=3e3,qr=3001,LS=3200,bS=3201,DS=0,US=1,Qn="",nn="srgb",Xi="srgb-linear",zd="display-p3",Tu="display-p3-linear",iu="linear",Rt="srgb",ru="rec709",ou="p3",mo=7680,Qp=519,NS=512,IS=513,FS=514,p_=515,OS=516,kS=517,zS=518,BS=519,Jp=35044,em="300 es",kf=1035,ki=2e3,su=2001;class ps{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hc=Math.PI/180,zf=180/Math.PI;function ya(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(cn[t&255]+cn[t>>8&255]+cn[t>>16&255]+cn[t>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[n&63|128]+cn[n>>8&255]+"-"+cn[n>>16&255]+cn[n>>24&255]+cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]).toLowerCase()}function Rn(t,e,n){return Math.max(e,Math.min(n,t))}function HS(t,e){return(t%e+e)%e}function pc(t,e,n){return(1-n)*t+n*e}function tm(t){return(t&t-1)===0&&t!==0}function Bf(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Ps(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Tn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class yt{constructor(e=0,n=0){yt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rt{constructor(e,n,i,r,o,s,a,u,c){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,u,c)}set(e,n,i,r,o,s,a,u,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=n,h[4]=o,h[5]=u,h[6]=i,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],u=i[6],c=i[1],h=i[4],p=i[7],m=i[2],_=i[5],M=i[8],T=r[0],v=r[3],f=r[6],x=r[1],y=r[4],w=r[7],O=r[2],U=r[5],b=r[8];return o[0]=s*T+a*x+u*O,o[3]=s*v+a*y+u*U,o[6]=s*f+a*w+u*b,o[1]=c*T+h*x+p*O,o[4]=c*v+h*y+p*U,o[7]=c*f+h*w+p*b,o[2]=m*T+_*x+M*O,o[5]=m*v+_*y+M*U,o[8]=m*f+_*w+M*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],u=e[6],c=e[7],h=e[8];return n*s*h-n*a*c-i*o*h+i*a*u+r*o*c-r*s*u}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],u=e[6],c=e[7],h=e[8],p=h*s-a*c,m=a*u-h*o,_=c*o-s*u,M=n*p+i*m+r*_;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=p*T,e[1]=(r*c-h*i)*T,e[2]=(a*i-r*s)*T,e[3]=m*T,e[4]=(h*n-r*u)*T,e[5]=(r*o-a*n)*T,e[6]=_*T,e[7]=(i*u-c*n)*T,e[8]=(s*n-i*o)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const u=Math.cos(o),c=Math.sin(o);return this.set(i*u,i*c,-i*(u*s+c*a)+s+e,-r*c,r*u,-r*(-c*s+u*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(mc.makeScale(e,n)),this}rotate(e){return this.premultiply(mc.makeRotation(-e)),this}translate(e,n){return this.premultiply(mc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const mc=new rt;function m_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ha(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function GS(){const t=ha("canvas");return t.style.display="block",t}const nm={};function Ys(t){t in nm||(nm[t]=!0,console.warn(t))}const im=new rt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),rm=new rt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ya={[Xi]:{transfer:iu,primaries:ru,toReference:t=>t,fromReference:t=>t},[nn]:{transfer:Rt,primaries:ru,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Tu]:{transfer:iu,primaries:ou,toReference:t=>t.applyMatrix3(rm),fromReference:t=>t.applyMatrix3(im)},[zd]:{transfer:Rt,primaries:ou,toReference:t=>t.convertSRGBToLinear().applyMatrix3(rm),fromReference:t=>t.applyMatrix3(im).convertLinearToSRGB()}},VS=new Set([Xi,Tu]),_t={enabled:!0,_workingColorSpace:Xi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!VS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Ya[e].toReference,r=Ya[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ya[t].primaries},getTransfer:function(t){return t===Qn?iu:Ya[t].transfer}};function Jo(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function gc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let go;class g_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{go===void 0&&(go=ha("canvas")),go.width=e.width,go.height=e.height;const i=go.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=go}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ha("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Jo(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Jo(n[i]/255)*255):n[i]=Jo(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let WS=0;class v_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:WS++}),this.uuid=ya(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(vc(r[s].image)):o.push(vc(r[s]))}else o=vc(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function vc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?g_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let XS=0;class xn extends ps{constructor(e=xn.DEFAULT_IMAGE,n=xn.DEFAULT_MAPPING,i=di,r=di,o=Kn,s=fa,a=hi,u=Sr,c=xn.DEFAULT_ANISOTROPY,h=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:XS++}),this.uuid=ya(),this.name="",this.source=new v_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=u,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ys("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===qr?nn:Qn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==o_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ff:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case Of:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ff:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case Of:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ys("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===nn?qr:h_}set encoding(e){Ys("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===qr?nn:Qn}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=o_;xn.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,n=0,i=0,r=1){rn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const u=e.elements,c=u[0],h=u[4],p=u[8],m=u[1],_=u[5],M=u[9],T=u[2],v=u[6],f=u[10];if(Math.abs(h-m)<.01&&Math.abs(p-T)<.01&&Math.abs(M-v)<.01){if(Math.abs(h+m)<.1&&Math.abs(p+T)<.1&&Math.abs(M+v)<.1&&Math.abs(c+_+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,w=(_+1)/2,O=(f+1)/2,U=(h+m)/4,b=(p+T)/4,Y=(M+v)/4;return y>w&&y>O?y<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(y),r=U/i,o=b/i):w>O?w<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(w),i=U/r,o=Y/r):O<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(O),i=b/o,r=Y/o),this.set(i,r,o,n),this}let x=Math.sqrt((v-M)*(v-M)+(p-T)*(p-T)+(m-h)*(m-h));return Math.abs(x)<.001&&(x=1),this.x=(v-M)/x,this.y=(p-T)/x,this.z=(m-h)/x,this.w=Math.acos((c+_+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jS extends ps{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new rn(0,0,e,n),this.scissorTest=!1,this.viewport=new rn(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Ys("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===qr?nn:Qn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new xn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new v_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class eo extends jS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class __ extends xn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=_n,this.minFilter=_n,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class YS extends xn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=_n,this.minFilter=_n,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let u=i[r+0],c=i[r+1],h=i[r+2],p=i[r+3];const m=o[s+0],_=o[s+1],M=o[s+2],T=o[s+3];if(a===0){e[n+0]=u,e[n+1]=c,e[n+2]=h,e[n+3]=p;return}if(a===1){e[n+0]=m,e[n+1]=_,e[n+2]=M,e[n+3]=T;return}if(p!==T||u!==m||c!==_||h!==M){let v=1-a;const f=u*m+c*_+h*M+p*T,x=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const O=Math.sqrt(y),U=Math.atan2(O,f*x);v=Math.sin(v*U)/O,a=Math.sin(a*U)/O}const w=a*x;if(u=u*v+m*w,c=c*v+_*w,h=h*v+M*w,p=p*v+T*w,v===1-a){const O=1/Math.sqrt(u*u+c*c+h*h+p*p);u*=O,c*=O,h*=O,p*=O}}e[n]=u,e[n+1]=c,e[n+2]=h,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],u=i[r+1],c=i[r+2],h=i[r+3],p=o[s],m=o[s+1],_=o[s+2],M=o[s+3];return e[n]=a*M+h*p+u*_-c*m,e[n+1]=u*M+h*m+c*p-a*_,e[n+2]=c*M+h*_+a*m-u*p,e[n+3]=h*M-a*p-u*m-c*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,u=Math.sin,c=a(i/2),h=a(r/2),p=a(o/2),m=u(i/2),_=u(r/2),M=u(o/2);switch(s){case"XYZ":this._x=m*h*p+c*_*M,this._y=c*_*p-m*h*M,this._z=c*h*M+m*_*p,this._w=c*h*p-m*_*M;break;case"YXZ":this._x=m*h*p+c*_*M,this._y=c*_*p-m*h*M,this._z=c*h*M-m*_*p,this._w=c*h*p+m*_*M;break;case"ZXY":this._x=m*h*p-c*_*M,this._y=c*_*p+m*h*M,this._z=c*h*M+m*_*p,this._w=c*h*p-m*_*M;break;case"ZYX":this._x=m*h*p-c*_*M,this._y=c*_*p+m*h*M,this._z=c*h*M-m*_*p,this._w=c*h*p+m*_*M;break;case"YZX":this._x=m*h*p+c*_*M,this._y=c*_*p+m*h*M,this._z=c*h*M-m*_*p,this._w=c*h*p-m*_*M;break;case"XZY":this._x=m*h*p-c*_*M,this._y=c*_*p-m*h*M,this._z=c*h*M+m*_*p,this._w=c*h*p+m*_*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],u=n[9],c=n[2],h=n[6],p=n[10],m=i+a+p;if(m>0){const _=.5/Math.sqrt(m+1);this._w=.25/_,this._x=(h-u)*_,this._y=(o-c)*_,this._z=(s-r)*_}else if(i>a&&i>p){const _=2*Math.sqrt(1+i-a-p);this._w=(h-u)/_,this._x=.25*_,this._y=(r+s)/_,this._z=(o+c)/_}else if(a>p){const _=2*Math.sqrt(1+a-i-p);this._w=(o-c)/_,this._x=(r+s)/_,this._y=.25*_,this._z=(u+h)/_}else{const _=2*Math.sqrt(1+p-i-a);this._w=(s-r)/_,this._x=(o+c)/_,this._y=(u+h)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,u=n._y,c=n._z,h=n._w;return this._x=i*h+s*a+r*c-o*u,this._y=r*h+s*u+o*a-i*c,this._z=o*h+s*c+i*u-r*a,this._w=s*h-i*a-r*u-o*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const u=1-a*a;if(u<=Number.EPSILON){const _=1-n;return this._w=_*s+n*this._w,this._x=_*i+n*this._x,this._y=_*r+n*this._y,this._z=_*o+n*this._z,this.normalize(),this}const c=Math.sqrt(u),h=Math.atan2(c,a),p=Math.sin((1-n)*h)/c,m=Math.sin(n*h)/c;return this._w=s*p+this._w*m,this._x=i*p+this._x*m,this._y=r*p+this._y*m,this._z=o*p+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(o),i*Math.cos(o),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,n=0,i=0){J.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(om.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(om.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,u=e.w,c=2*(s*r-a*i),h=2*(a*n-o*r),p=2*(o*i-s*n);return this.x=n+u*c+s*p-a*h,this.y=i+u*h+a*c-o*p,this.z=r+u*p+o*h-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,u=n.z;return this.x=r*u-o*a,this.y=o*s-i*u,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _c.copy(this).projectOnVector(e),this.sub(_c)}reflect(e){return this.sub(_c.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _c=new J,om=new xa;class Sa{constructor(e=new J(1/0,1/0,1/0),n=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(oi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(oi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=oi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,oi):oi.fromBufferAttribute(o,s),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qa.copy(i.boundingBox)),qa.applyMatrix4(e.matrixWorld),this.union(qa)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ls),$a.subVectors(this.max,Ls),vo.subVectors(e.a,Ls),_o.subVectors(e.b,Ls),yo.subVectors(e.c,Ls),Zi.subVectors(_o,vo),Qi.subVectors(yo,_o),Pr.subVectors(vo,yo);let n=[0,-Zi.z,Zi.y,0,-Qi.z,Qi.y,0,-Pr.z,Pr.y,Zi.z,0,-Zi.x,Qi.z,0,-Qi.x,Pr.z,0,-Pr.x,-Zi.y,Zi.x,0,-Qi.y,Qi.x,0,-Pr.y,Pr.x,0];return!yc(n,vo,_o,yo,$a)||(n=[1,0,0,0,1,0,0,0,1],!yc(n,vo,_o,yo,$a))?!1:(Ka.crossVectors(Zi,Qi),n=[Ka.x,Ka.y,Ka.z],yc(n,vo,_o,yo,$a))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ci=[new J,new J,new J,new J,new J,new J,new J,new J],oi=new J,qa=new Sa,vo=new J,_o=new J,yo=new J,Zi=new J,Qi=new J,Pr=new J,Ls=new J,$a=new J,Ka=new J,Lr=new J;function yc(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){Lr.fromArray(t,o);const a=r.x*Math.abs(Lr.x)+r.y*Math.abs(Lr.y)+r.z*Math.abs(Lr.z),u=e.dot(Lr),c=n.dot(Lr),h=i.dot(Lr);if(Math.max(-Math.max(u,c,h),Math.min(u,c,h))>a)return!1}return!0}const qS=new Sa,bs=new J,xc=new J;class wu{constructor(e=new J,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):qS.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bs.subVectors(e,this.center);const n=bs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(bs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bs.copy(e.center).add(xc)),this.expandByPoint(bs.copy(e.center).sub(xc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pi=new J,Sc=new J,Za=new J,Ji=new J,Ec=new J,Qa=new J,Mc=new J;class y_{constructor(e=new J,n=new J(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Pi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Pi.copy(this.origin).addScaledVector(this.direction,n),Pi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Sc.copy(e).add(n).multiplyScalar(.5),Za.copy(n).sub(e).normalize(),Ji.copy(this.origin).sub(Sc);const o=e.distanceTo(n)*.5,s=-this.direction.dot(Za),a=Ji.dot(this.direction),u=-Ji.dot(Za),c=Ji.lengthSq(),h=Math.abs(1-s*s);let p,m,_,M;if(h>0)if(p=s*u-a,m=s*a-u,M=o*h,p>=0)if(m>=-M)if(m<=M){const T=1/h;p*=T,m*=T,_=p*(p+s*m+2*a)+m*(s*p+m+2*u)+c}else m=o,p=Math.max(0,-(s*m+a)),_=-p*p+m*(m+2*u)+c;else m=-o,p=Math.max(0,-(s*m+a)),_=-p*p+m*(m+2*u)+c;else m<=-M?(p=Math.max(0,-(-s*o+a)),m=p>0?-o:Math.min(Math.max(-o,-u),o),_=-p*p+m*(m+2*u)+c):m<=M?(p=0,m=Math.min(Math.max(-o,-u),o),_=m*(m+2*u)+c):(p=Math.max(0,-(s*o+a)),m=p>0?o:Math.min(Math.max(-o,-u),o),_=-p*p+m*(m+2*u)+c);else m=s>0?-o:o,p=Math.max(0,-(s*m+a)),_=-p*p+m*(m+2*u)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Sc).addScaledVector(Za,m),_}intersectSphere(e,n){Pi.subVectors(e.center,this.origin);const i=Pi.dot(this.direction),r=Pi.dot(Pi)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,u=i+s;return u<0?null:a<0?this.at(u,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,u;const c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,m=this.origin;return c>=0?(i=(e.min.x-m.x)*c,r=(e.max.x-m.x)*c):(i=(e.max.x-m.x)*c,r=(e.min.x-m.x)*c),h>=0?(o=(e.min.y-m.y)*h,s=(e.max.y-m.y)*h):(o=(e.max.y-m.y)*h,s=(e.min.y-m.y)*h),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),p>=0?(a=(e.min.z-m.z)*p,u=(e.max.z-m.z)*p):(a=(e.max.z-m.z)*p,u=(e.min.z-m.z)*p),i>u||a>r)||((a>i||i!==i)&&(i=a),(u<r||r!==r)&&(r=u),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Pi)!==null}intersectTriangle(e,n,i,r,o){Ec.subVectors(n,e),Qa.subVectors(i,e),Mc.crossVectors(Ec,Qa);let s=this.direction.dot(Mc),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Ji.subVectors(this.origin,e);const u=a*this.direction.dot(Qa.crossVectors(Ji,Qa));if(u<0)return null;const c=a*this.direction.dot(Ec.cross(Ji));if(c<0||u+c>s)return null;const h=-a*Ji.dot(Mc);return h<0?null:this.at(h/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qt{constructor(e,n,i,r,o,s,a,u,c,h,p,m,_,M,T,v){Qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,u,c,h,p,m,_,M,T,v)}set(e,n,i,r,o,s,a,u,c,h,p,m,_,M,T,v){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=o,f[5]=s,f[9]=a,f[13]=u,f[2]=c,f[6]=h,f[10]=p,f[14]=m,f[3]=_,f[7]=M,f[11]=T,f[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/xo.setFromMatrixColumn(e,0).length(),o=1/xo.setFromMatrixColumn(e,1).length(),s=1/xo.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),u=Math.cos(r),c=Math.sin(r),h=Math.cos(o),p=Math.sin(o);if(e.order==="XYZ"){const m=s*h,_=s*p,M=a*h,T=a*p;n[0]=u*h,n[4]=-u*p,n[8]=c,n[1]=_+M*c,n[5]=m-T*c,n[9]=-a*u,n[2]=T-m*c,n[6]=M+_*c,n[10]=s*u}else if(e.order==="YXZ"){const m=u*h,_=u*p,M=c*h,T=c*p;n[0]=m+T*a,n[4]=M*a-_,n[8]=s*c,n[1]=s*p,n[5]=s*h,n[9]=-a,n[2]=_*a-M,n[6]=T+m*a,n[10]=s*u}else if(e.order==="ZXY"){const m=u*h,_=u*p,M=c*h,T=c*p;n[0]=m-T*a,n[4]=-s*p,n[8]=M+_*a,n[1]=_+M*a,n[5]=s*h,n[9]=T-m*a,n[2]=-s*c,n[6]=a,n[10]=s*u}else if(e.order==="ZYX"){const m=s*h,_=s*p,M=a*h,T=a*p;n[0]=u*h,n[4]=M*c-_,n[8]=m*c+T,n[1]=u*p,n[5]=T*c+m,n[9]=_*c-M,n[2]=-c,n[6]=a*u,n[10]=s*u}else if(e.order==="YZX"){const m=s*u,_=s*c,M=a*u,T=a*c;n[0]=u*h,n[4]=T-m*p,n[8]=M*p+_,n[1]=p,n[5]=s*h,n[9]=-a*h,n[2]=-c*h,n[6]=_*p+M,n[10]=m-T*p}else if(e.order==="XZY"){const m=s*u,_=s*c,M=a*u,T=a*c;n[0]=u*h,n[4]=-p,n[8]=c*h,n[1]=m*p+T,n[5]=s*h,n[9]=_*p-M,n[2]=M*p-_,n[6]=a*h,n[10]=T*p+m}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose($S,e,KS)}lookAt(e,n,i){const r=this.elements;return Nn.subVectors(e,n),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),er.crossVectors(i,Nn),er.lengthSq()===0&&(Math.abs(i.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),er.crossVectors(i,Nn)),er.normalize(),Ja.crossVectors(Nn,er),r[0]=er.x,r[4]=Ja.x,r[8]=Nn.x,r[1]=er.y,r[5]=Ja.y,r[9]=Nn.y,r[2]=er.z,r[6]=Ja.z,r[10]=Nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],u=i[8],c=i[12],h=i[1],p=i[5],m=i[9],_=i[13],M=i[2],T=i[6],v=i[10],f=i[14],x=i[3],y=i[7],w=i[11],O=i[15],U=r[0],b=r[4],Y=r[8],R=r[12],S=r[1],I=r[5],$=r[9],re=r[13],z=r[2],K=r[6],B=r[10],k=r[14],F=r[3],V=r[7],W=r[11],Z=r[15];return o[0]=s*U+a*S+u*z+c*F,o[4]=s*b+a*I+u*K+c*V,o[8]=s*Y+a*$+u*B+c*W,o[12]=s*R+a*re+u*k+c*Z,o[1]=h*U+p*S+m*z+_*F,o[5]=h*b+p*I+m*K+_*V,o[9]=h*Y+p*$+m*B+_*W,o[13]=h*R+p*re+m*k+_*Z,o[2]=M*U+T*S+v*z+f*F,o[6]=M*b+T*I+v*K+f*V,o[10]=M*Y+T*$+v*B+f*W,o[14]=M*R+T*re+v*k+f*Z,o[3]=x*U+y*S+w*z+O*F,o[7]=x*b+y*I+w*K+O*V,o[11]=x*Y+y*$+w*B+O*W,o[15]=x*R+y*re+w*k+O*Z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],u=e[9],c=e[13],h=e[2],p=e[6],m=e[10],_=e[14],M=e[3],T=e[7],v=e[11],f=e[15];return M*(+o*u*p-r*c*p-o*a*m+i*c*m+r*a*_-i*u*_)+T*(+n*u*_-n*c*m+o*s*m-r*s*_+r*c*h-o*u*h)+v*(+n*c*p-n*a*_-o*s*p+i*s*_+o*a*h-i*c*h)+f*(-r*a*h-n*u*p+n*a*m+r*s*p-i*s*m+i*u*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],u=e[6],c=e[7],h=e[8],p=e[9],m=e[10],_=e[11],M=e[12],T=e[13],v=e[14],f=e[15],x=p*v*c-T*m*c+T*u*_-a*v*_-p*u*f+a*m*f,y=M*m*c-h*v*c-M*u*_+s*v*_+h*u*f-s*m*f,w=h*T*c-M*p*c+M*a*_-s*T*_-h*a*f+s*p*f,O=M*p*u-h*T*u-M*a*m+s*T*m+h*a*v-s*p*v,U=n*x+i*y+r*w+o*O;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/U;return e[0]=x*b,e[1]=(T*m*o-p*v*o-T*r*_+i*v*_+p*r*f-i*m*f)*b,e[2]=(a*v*o-T*u*o+T*r*c-i*v*c-a*r*f+i*u*f)*b,e[3]=(p*u*o-a*m*o-p*r*c+i*m*c+a*r*_-i*u*_)*b,e[4]=y*b,e[5]=(h*v*o-M*m*o+M*r*_-n*v*_-h*r*f+n*m*f)*b,e[6]=(M*u*o-s*v*o-M*r*c+n*v*c+s*r*f-n*u*f)*b,e[7]=(s*m*o-h*u*o+h*r*c-n*m*c-s*r*_+n*u*_)*b,e[8]=w*b,e[9]=(M*p*o-h*T*o-M*i*_+n*T*_+h*i*f-n*p*f)*b,e[10]=(s*T*o-M*a*o+M*i*c-n*T*c-s*i*f+n*a*f)*b,e[11]=(h*a*o-s*p*o-h*i*c+n*p*c+s*i*_-n*a*_)*b,e[12]=O*b,e[13]=(h*T*r-M*p*r+M*i*m-n*T*m-h*i*v+n*p*v)*b,e[14]=(M*a*r-s*T*r-M*i*u+n*T*u+s*i*v-n*a*v)*b,e[15]=(s*p*r-h*a*r+h*i*u-n*p*u-s*i*m+n*a*m)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,u=e.z,c=o*s,h=o*a;return this.set(c*s+i,c*a-r*u,c*u+r*a,0,c*a+r*u,h*a+i,h*u-r*s,0,c*u-r*a,h*u+r*s,o*u*u+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,u=n._w,c=o+o,h=s+s,p=a+a,m=o*c,_=o*h,M=o*p,T=s*h,v=s*p,f=a*p,x=u*c,y=u*h,w=u*p,O=i.x,U=i.y,b=i.z;return r[0]=(1-(T+f))*O,r[1]=(_+w)*O,r[2]=(M-y)*O,r[3]=0,r[4]=(_-w)*U,r[5]=(1-(m+f))*U,r[6]=(v+x)*U,r[7]=0,r[8]=(M+y)*b,r[9]=(v-x)*b,r[10]=(1-(m+T))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=xo.set(r[0],r[1],r[2]).length();const s=xo.set(r[4],r[5],r[6]).length(),a=xo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],si.copy(this);const c=1/o,h=1/s,p=1/a;return si.elements[0]*=c,si.elements[1]*=c,si.elements[2]*=c,si.elements[4]*=h,si.elements[5]*=h,si.elements[6]*=h,si.elements[8]*=p,si.elements[9]*=p,si.elements[10]*=p,n.setFromRotationMatrix(si),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s,a=ki){const u=this.elements,c=2*o/(n-e),h=2*o/(i-r),p=(n+e)/(n-e),m=(i+r)/(i-r);let _,M;if(a===ki)_=-(s+o)/(s-o),M=-2*s*o/(s-o);else if(a===su)_=-s/(s-o),M=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=p,u[12]=0,u[1]=0,u[5]=h,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=_,u[14]=M,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=ki){const u=this.elements,c=1/(n-e),h=1/(i-r),p=1/(s-o),m=(n+e)*c,_=(i+r)*h;let M,T;if(a===ki)M=(s+o)*p,T=-2*p;else if(a===su)M=o*p,T=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=2*c,u[4]=0,u[8]=0,u[12]=-m,u[1]=0,u[5]=2*h,u[9]=0,u[13]=-_,u[2]=0,u[6]=0,u[10]=T,u[14]=-M,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const xo=new J,si=new Qt,$S=new J(0,0,0),KS=new J(1,1,1),er=new J,Ja=new J,Nn=new J,sm=new Qt,am=new xa;class Au{constructor(e=0,n=0,i=0,r=Au.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],u=r[1],c=r[5],h=r[9],p=r[2],m=r[6],_=r[10];switch(n){case"XYZ":this._y=Math.asin(Rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,_),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(m,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,_),this._z=Math.atan2(u,c)):(this._y=Math.atan2(-p,o),this._z=0);break;case"ZXY":this._x=Math.asin(Rn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,_),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(u,o));break;case"ZYX":this._y=Math.asin(-Rn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,_),this._z=Math.atan2(u,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Rn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,o)):(this._x=0,this._y=Math.atan2(a,_));break;case"XZY":this._z=Math.asin(-Rn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(m,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return sm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return am.setFromEuler(this),this.setFromQuaternion(am,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Au.DEFAULT_ORDER="XYZ";class x_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ZS=0;const lm=new J,So=new xa,Li=new Qt,el=new J,Ds=new J,QS=new J,JS=new xa,um=new J(1,0,0),cm=new J(0,1,0),fm=new J(0,0,1),eE={type:"added"},tE={type:"removed"};class Un extends ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ZS++}),this.uuid=ya(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Un.DEFAULT_UP.clone();const e=new J,n=new Au,i=new xa,r=new J(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Qt},normalMatrix:{value:new rt}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=Un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new x_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return So.setFromAxisAngle(e,n),this.quaternion.multiply(So),this}rotateOnWorldAxis(e,n){return So.setFromAxisAngle(e,n),this.quaternion.premultiply(So),this}rotateX(e){return this.rotateOnAxis(um,e)}rotateY(e){return this.rotateOnAxis(cm,e)}rotateZ(e){return this.rotateOnAxis(fm,e)}translateOnAxis(e,n){return lm.copy(e).applyQuaternion(this.quaternion),this.position.add(lm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(um,e)}translateY(e){return this.translateOnAxis(cm,e)}translateZ(e){return this.translateOnAxis(fm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?el.copy(e):el.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(Ds,el,this.up):Li.lookAt(el,Ds,this.up),this.quaternion.setFromRotationMatrix(Li),r&&(Li.extractRotation(r.matrixWorld),So.setFromRotationMatrix(Li),this.quaternion.premultiply(So.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(eE)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(tE)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,e,QS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,JS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const o=n[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++){const a=r[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,u){return a[u.uuid]===void 0&&(a[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const u=a.shapes;if(Array.isArray(u))for(let c=0,h=u.length;c<h;c++){const p=u[c];o(e.shapes,p)}else o(e.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let u=0,c=this.material.length;u<c;u++)a.push(o(e.materials,this.material[u]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const u=this.animations[a];r.animations.push(o(e.animations,u))}}if(n){const a=s(e.geometries),u=s(e.materials),c=s(e.textures),h=s(e.images),p=s(e.shapes),m=s(e.skeletons),_=s(e.animations),M=s(e.nodes);a.length>0&&(i.geometries=a),u.length>0&&(i.materials=u),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),m.length>0&&(i.skeletons=m),_.length>0&&(i.animations=_),M.length>0&&(i.nodes=M)}return i.object=r,i;function s(a){const u=[];for(const c in a){const h=a[c];delete h.metadata,u.push(h)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Un.DEFAULT_UP=new J(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ai=new J,bi=new J,Tc=new J,Di=new J,Eo=new J,Mo=new J,dm=new J,wc=new J,Ac=new J,Rc=new J;let tl=!1;class fi{constructor(e=new J,n=new J,i=new J){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ai.subVectors(e,n),r.cross(ai);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){ai.subVectors(r,n),bi.subVectors(i,n),Tc.subVectors(e,n);const s=ai.dot(ai),a=ai.dot(bi),u=ai.dot(Tc),c=bi.dot(bi),h=bi.dot(Tc),p=s*c-a*a;if(p===0)return o.set(0,0,0),null;const m=1/p,_=(c*u-a*h)*m,M=(s*h-a*u)*m;return o.set(1-_-M,M,_)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getUV(e,n,i,r,o,s,a,u){return tl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),tl=!0),this.getInterpolation(e,n,i,r,o,s,a,u)}static getInterpolation(e,n,i,r,o,s,a,u){return this.getBarycoord(e,n,i,r,Di)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(o,Di.x),u.addScaledVector(s,Di.y),u.addScaledVector(a,Di.z),u)}static isFrontFacing(e,n,i,r){return ai.subVectors(i,n),bi.subVectors(e,n),ai.cross(bi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),ai.cross(bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return fi.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,o){return tl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),tl=!0),fi.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}getInterpolation(e,n,i,r,o){return fi.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;Eo.subVectors(r,i),Mo.subVectors(o,i),wc.subVectors(e,i);const u=Eo.dot(wc),c=Mo.dot(wc);if(u<=0&&c<=0)return n.copy(i);Ac.subVectors(e,r);const h=Eo.dot(Ac),p=Mo.dot(Ac);if(h>=0&&p<=h)return n.copy(r);const m=u*p-h*c;if(m<=0&&u>=0&&h<=0)return s=u/(u-h),n.copy(i).addScaledVector(Eo,s);Rc.subVectors(e,o);const _=Eo.dot(Rc),M=Mo.dot(Rc);if(M>=0&&_<=M)return n.copy(o);const T=_*c-u*M;if(T<=0&&c>=0&&M<=0)return a=c/(c-M),n.copy(i).addScaledVector(Mo,a);const v=h*M-_*p;if(v<=0&&p-h>=0&&_-M>=0)return dm.subVectors(o,r),a=(p-h)/(p-h+(_-M)),n.copy(r).addScaledVector(dm,a);const f=1/(v+T+m);return s=T*f,a=m*f,n.copy(i).addScaledVector(Eo,s).addScaledVector(Mo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const S_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tr={h:0,s:0,l:0},nl={h:0,s:0,l:0};function Cc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ft{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=_t.workingColorSpace){return this.r=e,this.g=n,this.b=i,_t.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=_t.workingColorSpace){if(e=HS(e,1),n=Rn(n,0,1),i=Rn(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=Cc(s,o,e+1/3),this.g=Cc(s,o,e),this.b=Cc(s,o,e-1/3)}return _t.toWorkingColorSpace(this,r),this}setStyle(e,n=nn){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=nn){const i=S_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jo(e.r),this.g=Jo(e.g),this.b=Jo(e.b),this}copyLinearToSRGB(e){return this.r=gc(e.r),this.g=gc(e.g),this.b=gc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nn){return _t.fromWorkingColorSpace(fn.copy(this),e),Math.round(Rn(fn.r*255,0,255))*65536+Math.round(Rn(fn.g*255,0,255))*256+Math.round(Rn(fn.b*255,0,255))}getHexString(e=nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=_t.workingColorSpace){_t.fromWorkingColorSpace(fn.copy(this),n);const i=fn.r,r=fn.g,o=fn.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let u,c;const h=(a+s)/2;if(a===s)u=0,c=0;else{const p=s-a;switch(c=h<=.5?p/(s+a):p/(2-s-a),s){case i:u=(r-o)/p+(r<o?6:0);break;case r:u=(o-i)/p+2;break;case o:u=(i-r)/p+4;break}u/=6}return e.h=u,e.s=c,e.l=h,e}getRGB(e,n=_t.workingColorSpace){return _t.fromWorkingColorSpace(fn.copy(this),n),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=nn){_t.fromWorkingColorSpace(fn.copy(this),e);const n=fn.r,i=fn.g,r=fn.b;return e!==nn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(tr),this.setHSL(tr.h+e,tr.s+n,tr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(tr),e.getHSL(nl);const i=pc(tr.h,nl.h,n),r=pc(tr.s,nl.s,n),o=pc(tr.l,nl.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new ft;ft.NAMES=S_;let nE=0;class Ea extends ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nE++}),this.uuid=ya(),this.name="",this.type="Material",this.blending=Xr,this.side=Tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Df,this.blendDst=Uf,this.blendEquation=Or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=nu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mo,this.stencilZFail=mo,this.stencilZPass=mo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xr&&(i.blending=this.blending),this.side!==Tr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Df&&(i.blendSrc=this.blendSrc),this.blendDst!==Uf&&(i.blendDst=this.blendDst),this.blendEquation!==Or&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==nu&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==mo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==mo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const u=o[a];delete u.metadata,s.push(u)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class kr extends Ea{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=r_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ht=new J,il=new yt;class gi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Jp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=cr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)il.fromBufferAttribute(this,n),il.applyMatrix3(e),this.setXY(n,il.x,il.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ht.fromBufferAttribute(this,n),Ht.applyMatrix3(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ht.fromBufferAttribute(this,n),Ht.applyMatrix4(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ht.fromBufferAttribute(this,n),Ht.applyNormalMatrix(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ht.fromBufferAttribute(this,n),Ht.transformDirection(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ps(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Tn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ps(n,this.array)),n}setX(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ps(n,this.array)),n}setY(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ps(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ps(n,this.array)),n}setW(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),i=Tn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),i=Tn(i,this.array),r=Tn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),i=Tn(i,this.array),r=Tn(r,this.array),o=Tn(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jp&&(e.usage=this.usage),e}}class E_ extends gi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class M_ extends gi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Bi extends gi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let iE=0;const jn=new Qt,Pc=new Un,To=new J,In=new Sa,Us=new Sa,$t=new J;class Yi extends ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:iE++}),this.uuid=ya(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(m_(e)?M_:E_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new rt().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,n,i){return jn.makeTranslation(e,n,i),this.applyMatrix4(jn),this}scale(e,n,i){return jn.makeScale(e,n,i),this.applyMatrix4(jn),this}lookAt(e){return Pc.lookAt(e),Pc.updateMatrix(),this.applyMatrix4(Pc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(To).negate(),this.translate(To.x,To.y,To.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Bi(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];In.setFromBufferAttribute(o),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new J,1/0);return}if(e){const i=this.boundingSphere.center;if(In.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];Us.setFromBufferAttribute(a),this.morphTargetsRelative?($t.addVectors(In.min,Us.min),In.expandByPoint($t),$t.addVectors(In.max,Us.max),In.expandByPoint($t)):(In.expandByPoint(Us.min),In.expandByPoint(Us.max))}In.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)$t.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared($t));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],u=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)$t.fromBufferAttribute(a,c),u&&(To.fromBufferAttribute(e,c),$t.add(To)),r=Math.max(r,i.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,o=n.normal.array,s=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gi(new Float32Array(4*a),4));const u=this.getAttribute("tangent").array,c=[],h=[];for(let S=0;S<a;S++)c[S]=new J,h[S]=new J;const p=new J,m=new J,_=new J,M=new yt,T=new yt,v=new yt,f=new J,x=new J;function y(S,I,$){p.fromArray(r,S*3),m.fromArray(r,I*3),_.fromArray(r,$*3),M.fromArray(s,S*2),T.fromArray(s,I*2),v.fromArray(s,$*2),m.sub(p),_.sub(p),T.sub(M),v.sub(M);const re=1/(T.x*v.y-v.x*T.y);isFinite(re)&&(f.copy(m).multiplyScalar(v.y).addScaledVector(_,-T.y).multiplyScalar(re),x.copy(_).multiplyScalar(T.x).addScaledVector(m,-v.x).multiplyScalar(re),c[S].add(f),c[I].add(f),c[$].add(f),h[S].add(x),h[I].add(x),h[$].add(x))}let w=this.groups;w.length===0&&(w=[{start:0,count:i.length}]);for(let S=0,I=w.length;S<I;++S){const $=w[S],re=$.start,z=$.count;for(let K=re,B=re+z;K<B;K+=3)y(i[K+0],i[K+1],i[K+2])}const O=new J,U=new J,b=new J,Y=new J;function R(S){b.fromArray(o,S*3),Y.copy(b);const I=c[S];O.copy(I),O.sub(b.multiplyScalar(b.dot(I))).normalize(),U.crossVectors(Y,I);const re=U.dot(h[S])<0?-1:1;u[S*4]=O.x,u[S*4+1]=O.y,u[S*4+2]=O.z,u[S*4+3]=re}for(let S=0,I=w.length;S<I;++S){const $=w[S],re=$.start,z=$.count;for(let K=re,B=re+z;K<B;K+=3)R(i[K+0]),R(i[K+1]),R(i[K+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let m=0,_=i.count;m<_;m++)i.setXYZ(m,0,0,0);const r=new J,o=new J,s=new J,a=new J,u=new J,c=new J,h=new J,p=new J;if(e)for(let m=0,_=e.count;m<_;m+=3){const M=e.getX(m+0),T=e.getX(m+1),v=e.getX(m+2);r.fromBufferAttribute(n,M),o.fromBufferAttribute(n,T),s.fromBufferAttribute(n,v),h.subVectors(s,o),p.subVectors(r,o),h.cross(p),a.fromBufferAttribute(i,M),u.fromBufferAttribute(i,T),c.fromBufferAttribute(i,v),a.add(h),u.add(h),c.add(h),i.setXYZ(M,a.x,a.y,a.z),i.setXYZ(T,u.x,u.y,u.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let m=0,_=n.count;m<_;m+=3)r.fromBufferAttribute(n,m+0),o.fromBufferAttribute(n,m+1),s.fromBufferAttribute(n,m+2),h.subVectors(s,o),p.subVectors(r,o),h.cross(p),i.setXYZ(m+0,h.x,h.y,h.z),i.setXYZ(m+1,h.x,h.y,h.z),i.setXYZ(m+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)$t.fromBufferAttribute(e,n),$t.normalize(),e.setXYZ(n,$t.x,$t.y,$t.z)}toNonIndexed(){function e(a,u){const c=a.array,h=a.itemSize,p=a.normalized,m=new c.constructor(u.length*h);let _=0,M=0;for(let T=0,v=u.length;T<v;T++){a.isInterleavedBufferAttribute?_=u[T]*a.data.stride+a.offset:_=u[T]*h;for(let f=0;f<h;f++)m[M++]=c[_++]}return new gi(m,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Yi,i=this.index.array,r=this.attributes;for(const a in r){const u=r[a],c=e(u,i);n.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const u=[],c=o[a];for(let h=0,p=c.length;h<p;h++){const m=c[h],_=e(m,i);u.push(_)}n.morphAttributes[a]=u}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,u=s.length;a<u;a++){const c=s[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const c in u)u[c]!==void 0&&(e[c]=u[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const u in i){const c=i[u];e.data.attributes[u]=c.toJSON(e.data)}const r={};let o=!1;for(const u in this.morphAttributes){const c=this.morphAttributes[u],h=[];for(let p=0,m=c.length;p<m;p++){const _=c[p];h.push(_.toJSON(e.data))}h.length>0&&(r[u]=h,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const o=e.morphAttributes;for(const c in o){const h=[],p=o[c];for(let m=0,_=p.length;m<_;m++)h.push(p[m].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,h=s.length;c<h;c++){const p=s[c];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hm=new Qt,br=new y_,rl=new wu,pm=new J,wo=new J,Ao=new J,Ro=new J,Lc=new J,ol=new J,sl=new yt,al=new yt,ll=new yt,mm=new J,gm=new J,vm=new J,ul=new J,cl=new J;class On extends Un{constructor(e=new Yi,n=new kr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){ol.set(0,0,0);for(let u=0,c=o.length;u<c;u++){const h=a[u],p=o[u];h!==0&&(Lc.fromBufferAttribute(p,e),s?ol.addScaledVector(Lc,h):ol.addScaledVector(Lc.sub(n),h))}n.add(ol)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),rl.copy(i.boundingSphere),rl.applyMatrix4(o),br.copy(e.ray).recast(e.near),!(rl.containsPoint(br.origin)===!1&&(br.intersectSphere(rl,pm)===null||br.origin.distanceToSquared(pm)>(e.far-e.near)**2))&&(hm.copy(o).invert(),br.copy(e.ray).applyMatrix4(hm),!(i.boundingBox!==null&&br.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,br)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,u=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,p=o.attributes.normal,m=o.groups,_=o.drawRange;if(a!==null)if(Array.isArray(s))for(let M=0,T=m.length;M<T;M++){const v=m[M],f=s[v.materialIndex],x=Math.max(v.start,_.start),y=Math.min(a.count,Math.min(v.start+v.count,_.start+_.count));for(let w=x,O=y;w<O;w+=3){const U=a.getX(w),b=a.getX(w+1),Y=a.getX(w+2);r=fl(this,f,e,i,c,h,p,U,b,Y),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const M=Math.max(0,_.start),T=Math.min(a.count,_.start+_.count);for(let v=M,f=T;v<f;v+=3){const x=a.getX(v),y=a.getX(v+1),w=a.getX(v+2);r=fl(this,s,e,i,c,h,p,x,y,w),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}else if(u!==void 0)if(Array.isArray(s))for(let M=0,T=m.length;M<T;M++){const v=m[M],f=s[v.materialIndex],x=Math.max(v.start,_.start),y=Math.min(u.count,Math.min(v.start+v.count,_.start+_.count));for(let w=x,O=y;w<O;w+=3){const U=w,b=w+1,Y=w+2;r=fl(this,f,e,i,c,h,p,U,b,Y),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const M=Math.max(0,_.start),T=Math.min(u.count,_.start+_.count);for(let v=M,f=T;v<f;v+=3){const x=v,y=v+1,w=v+2;r=fl(this,s,e,i,c,h,p,x,y,w),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}}}function rE(t,e,n,i,r,o,s,a){let u;if(e.side===Dn?u=i.intersectTriangle(s,o,r,!0,a):u=i.intersectTriangle(r,o,s,e.side===Tr,a),u===null)return null;cl.copy(a),cl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(cl);return c<n.near||c>n.far?null:{distance:c,point:cl.clone(),object:t}}function fl(t,e,n,i,r,o,s,a,u,c){t.getVertexPosition(a,wo),t.getVertexPosition(u,Ao),t.getVertexPosition(c,Ro);const h=rE(t,e,n,i,wo,Ao,Ro,ul);if(h){r&&(sl.fromBufferAttribute(r,a),al.fromBufferAttribute(r,u),ll.fromBufferAttribute(r,c),h.uv=fi.getInterpolation(ul,wo,Ao,Ro,sl,al,ll,new yt)),o&&(sl.fromBufferAttribute(o,a),al.fromBufferAttribute(o,u),ll.fromBufferAttribute(o,c),h.uv1=fi.getInterpolation(ul,wo,Ao,Ro,sl,al,ll,new yt),h.uv2=h.uv1),s&&(mm.fromBufferAttribute(s,a),gm.fromBufferAttribute(s,u),vm.fromBufferAttribute(s,c),h.normal=fi.getInterpolation(ul,wo,Ao,Ro,mm,gm,vm,new J),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const p={a,b:u,c,normal:new J,materialIndex:0};fi.getNormal(wo,Ao,Ro,p.normal),h.face=p}return h}class Ma extends Yi{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const u=[],c=[],h=[],p=[];let m=0,_=0;M("z","y","x",-1,-1,i,n,e,s,o,0),M("z","y","x",1,-1,i,n,-e,s,o,1),M("x","z","y",1,1,e,i,n,r,s,2),M("x","z","y",1,-1,e,i,-n,r,s,3),M("x","y","z",1,-1,e,n,i,r,o,4),M("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(u),this.setAttribute("position",new Bi(c,3)),this.setAttribute("normal",new Bi(h,3)),this.setAttribute("uv",new Bi(p,2));function M(T,v,f,x,y,w,O,U,b,Y,R){const S=w/b,I=O/Y,$=w/2,re=O/2,z=U/2,K=b+1,B=Y+1;let k=0,F=0;const V=new J;for(let W=0;W<B;W++){const Z=W*I-re;for(let Q=0;Q<K;Q++){const q=Q*S-$;V[T]=q*x,V[v]=Z*y,V[f]=z,c.push(V.x,V.y,V.z),V[T]=0,V[v]=0,V[f]=U>0?1:-1,h.push(V.x,V.y,V.z),p.push(Q/b),p.push(1-W/Y),k+=1}}for(let W=0;W<Y;W++)for(let Z=0;Z<b;Z++){const Q=m+Z+K*W,q=m+Z+K*(W+1),se=m+(Z+1)+K*(W+1),ae=m+(Z+1)+K*W;u.push(Q,q,ae),u.push(q,se,ae),F+=6}a.addGroup(_,F,R),_+=F,m+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ma(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function cs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function gn(t){const e={};for(let n=0;n<t.length;n++){const i=cs(t[n]);for(const r in i)e[r]=i[r]}return e}function oE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function T_(t){return t.getRenderTarget()===null?t.outputColorSpace:_t.workingColorSpace}const sE={clone:cs,merge:gn};var aE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class to extends Ea{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=aE,this.fragmentShader=lE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cs(e.uniforms),this.uniformsGroups=oE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class w_ extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=ki}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Zn extends w_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=zf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zf*2*Math.atan(Math.tan(hc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(hc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const u=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/u,n-=s.offsetY*i/c,r*=s.width/u,i*=s.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Co=-90,Po=1;class uE extends Un{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Zn(Co,Po,e,n);r.layers=this.layers,this.add(r);const o=new Zn(Co,Po,e,n);o.layers=this.layers,this.add(o);const s=new Zn(Co,Po,e,n);s.layers=this.layers,this.add(s);const a=new Zn(Co,Po,e,n);a.layers=this.layers,this.add(a);const u=new Zn(Co,Po,e,n);u.layers=this.layers,this.add(u);const c=new Zn(Co,Po,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,u]=n;for(const c of n)this.remove(c);if(e===ki)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===su)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,u,c,h]=this.children,p=e.getRenderTarget(),m=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const T=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,o),e.setRenderTarget(i,1,r),e.render(n,s),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,u),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=T,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(p,m,_),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class A_ extends xn{constructor(e,n,i,r,o,s,a,u,c,h){e=e!==void 0?e:[],n=n!==void 0?n:as,super(e,n,i,r,o,s,a,u,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cE extends eo{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Ys("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===qr?nn:Qn),this.texture=new A_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Kn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ma(5,5,5),o=new to({name:"CubemapFromEquirect",uniforms:cs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Dn,blending:yr});o.uniforms.tEquirect.value=n;const s=new On(r,o),a=n.minFilter;return n.minFilter===fa&&(n.minFilter=Kn),new uE(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}const bc=new J,fE=new J,dE=new rt;class Ir{constructor(e=new J(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=bc.subVectors(i,n).cross(fE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(bc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||dE.getNormalMatrix(e),r=this.coplanarPoint(bc).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dr=new wu,dl=new J;class R_{constructor(e=new Ir,n=new Ir,i=new Ir,r=new Ir,o=new Ir,s=new Ir){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ki){const i=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],u=r[3],c=r[4],h=r[5],p=r[6],m=r[7],_=r[8],M=r[9],T=r[10],v=r[11],f=r[12],x=r[13],y=r[14],w=r[15];if(i[0].setComponents(u-o,m-c,v-_,w-f).normalize(),i[1].setComponents(u+o,m+c,v+_,w+f).normalize(),i[2].setComponents(u+s,m+h,v+M,w+x).normalize(),i[3].setComponents(u-s,m-h,v-M,w-x).normalize(),i[4].setComponents(u-a,m-p,v-T,w-y).normalize(),n===ki)i[5].setComponents(u+a,m+p,v+T,w+y).normalize();else if(n===su)i[5].setComponents(a,p,T,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Dr)}intersectsSprite(e){return Dr.center.set(0,0,0),Dr.radius=.7071067811865476,Dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Dr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(dl.x=r.normal.x>0?e.max.x:e.min.x,dl.y=r.normal.y>0?e.max.y:e.min.y,dl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(dl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function C_(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function hE(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,h){const p=c.array,m=c.usage,_=p.byteLength,M=t.createBuffer();t.bindBuffer(h,M),t.bufferData(h,p,m),c.onUploadCallback();let T;if(p instanceof Float32Array)T=t.FLOAT;else if(p instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)T=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else T=t.UNSIGNED_SHORT;else if(p instanceof Int16Array)T=t.SHORT;else if(p instanceof Uint32Array)T=t.UNSIGNED_INT;else if(p instanceof Int32Array)T=t.INT;else if(p instanceof Int8Array)T=t.BYTE;else if(p instanceof Uint8Array)T=t.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)T=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:M,type:T,bytesPerElement:p.BYTES_PER_ELEMENT,version:c.version,size:_}}function o(c,h,p){const m=h.array,_=h._updateRange,M=h.updateRanges;if(t.bindBuffer(p,c),_.count===-1&&M.length===0&&t.bufferSubData(p,0,m),M.length!==0){for(let T=0,v=M.length;T<v;T++){const f=M[T];n?t.bufferSubData(p,f.start*m.BYTES_PER_ELEMENT,m,f.start,f.count):t.bufferSubData(p,f.start*m.BYTES_PER_ELEMENT,m.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}_.count!==-1&&(n?t.bufferSubData(p,_.offset*m.BYTES_PER_ELEMENT,m,_.offset,_.count):t.bufferSubData(p,_.offset*m.BYTES_PER_ELEMENT,m.subarray(_.offset,_.offset+_.count)),_.count=-1),h.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(t.deleteBuffer(h.buffer),i.delete(c))}function u(c,h){if(c.isGLBufferAttribute){const m=i.get(c);(!m||m.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const p=i.get(c);if(p===void 0)i.set(c,r(c,h));else if(p.version<c.version){if(p.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(p.buffer,c,h),p.version=c.version}}return{get:s,remove:a,update:u}}class sr extends Yi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),u=Math.floor(r),c=a+1,h=u+1,p=e/a,m=n/u,_=[],M=[],T=[],v=[];for(let f=0;f<h;f++){const x=f*m-s;for(let y=0;y<c;y++){const w=y*p-o;M.push(w,-x,0),T.push(0,0,1),v.push(y/a),v.push(1-f/u)}}for(let f=0;f<u;f++)for(let x=0;x<a;x++){const y=x+c*f,w=x+c*(f+1),O=x+1+c*(f+1),U=x+1+c*f;_.push(y,w,U),_.push(w,O,U)}this.setIndex(_),this.setAttribute("position",new Bi(M,3)),this.setAttribute("normal",new Bi(T,3)),this.setAttribute("uv",new Bi(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sr(e.width,e.height,e.widthSegments,e.heightSegments)}}var pE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_E=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,yE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,SE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,EE=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ME=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,TE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,AE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,RE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,CE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,PE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,LE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,DE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,UE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,NE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,IE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,FE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,OE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,kE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,BE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,HE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,GE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,VE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,WE="gl_FragColor = linearToOutputTexel( gl_FragColor );",XE=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,jE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,YE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$E=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,KE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ZE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,QE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,JE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,nM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,iM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,oM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,aM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,lM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,hM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_M=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,xM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,SM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,EM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,MM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,TM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,AM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,RM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,CM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,PM=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,LM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,bM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,DM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,UM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,FM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,OM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,BM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,HM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,GM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,VM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,WM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,XM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,YM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$M=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,KM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ZM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,QM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,JM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,tT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,iT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,oT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,aT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,dT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_T=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ST=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ET=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,MT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,TT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,AT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,RT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,CT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,DT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,NT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,IT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,kT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,GT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,VT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,XT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nt={alphahash_fragment:pE,alphahash_pars_fragment:mE,alphamap_fragment:gE,alphamap_pars_fragment:vE,alphatest_fragment:_E,alphatest_pars_fragment:yE,aomap_fragment:xE,aomap_pars_fragment:SE,batching_pars_vertex:EE,batching_vertex:ME,begin_vertex:TE,beginnormal_vertex:wE,bsdfs:AE,iridescence_fragment:RE,bumpmap_pars_fragment:CE,clipping_planes_fragment:PE,clipping_planes_pars_fragment:LE,clipping_planes_pars_vertex:bE,clipping_planes_vertex:DE,color_fragment:UE,color_pars_fragment:NE,color_pars_vertex:IE,color_vertex:FE,common:OE,cube_uv_reflection_fragment:kE,defaultnormal_vertex:zE,displacementmap_pars_vertex:BE,displacementmap_vertex:HE,emissivemap_fragment:GE,emissivemap_pars_fragment:VE,colorspace_fragment:WE,colorspace_pars_fragment:XE,envmap_fragment:jE,envmap_common_pars_fragment:YE,envmap_pars_fragment:qE,envmap_pars_vertex:$E,envmap_physical_pars_fragment:aM,envmap_vertex:KE,fog_vertex:ZE,fog_pars_vertex:QE,fog_fragment:JE,fog_pars_fragment:eM,gradientmap_pars_fragment:tM,lightmap_fragment:nM,lightmap_pars_fragment:iM,lights_lambert_fragment:rM,lights_lambert_pars_fragment:oM,lights_pars_begin:sM,lights_toon_fragment:lM,lights_toon_pars_fragment:uM,lights_phong_fragment:cM,lights_phong_pars_fragment:fM,lights_physical_fragment:dM,lights_physical_pars_fragment:hM,lights_fragment_begin:pM,lights_fragment_maps:mM,lights_fragment_end:gM,logdepthbuf_fragment:vM,logdepthbuf_pars_fragment:_M,logdepthbuf_pars_vertex:yM,logdepthbuf_vertex:xM,map_fragment:SM,map_pars_fragment:EM,map_particle_fragment:MM,map_particle_pars_fragment:TM,metalnessmap_fragment:wM,metalnessmap_pars_fragment:AM,morphcolor_vertex:RM,morphnormal_vertex:CM,morphtarget_pars_vertex:PM,morphtarget_vertex:LM,normal_fragment_begin:bM,normal_fragment_maps:DM,normal_pars_fragment:UM,normal_pars_vertex:NM,normal_vertex:IM,normalmap_pars_fragment:FM,clearcoat_normal_fragment_begin:OM,clearcoat_normal_fragment_maps:kM,clearcoat_pars_fragment:zM,iridescence_pars_fragment:BM,opaque_fragment:HM,packing:GM,premultiplied_alpha_fragment:VM,project_vertex:WM,dithering_fragment:XM,dithering_pars_fragment:jM,roughnessmap_fragment:YM,roughnessmap_pars_fragment:qM,shadowmap_pars_fragment:$M,shadowmap_pars_vertex:KM,shadowmap_vertex:ZM,shadowmask_pars_fragment:QM,skinbase_vertex:JM,skinning_pars_vertex:eT,skinning_vertex:tT,skinnormal_vertex:nT,specularmap_fragment:iT,specularmap_pars_fragment:rT,tonemapping_fragment:oT,tonemapping_pars_fragment:sT,transmission_fragment:aT,transmission_pars_fragment:lT,uv_pars_fragment:uT,uv_pars_vertex:cT,uv_vertex:fT,worldpos_vertex:dT,background_vert:hT,background_frag:pT,backgroundCube_vert:mT,backgroundCube_frag:gT,cube_vert:vT,cube_frag:_T,depth_vert:yT,depth_frag:xT,distanceRGBA_vert:ST,distanceRGBA_frag:ET,equirect_vert:MT,equirect_frag:TT,linedashed_vert:wT,linedashed_frag:AT,meshbasic_vert:RT,meshbasic_frag:CT,meshlambert_vert:PT,meshlambert_frag:LT,meshmatcap_vert:bT,meshmatcap_frag:DT,meshnormal_vert:UT,meshnormal_frag:NT,meshphong_vert:IT,meshphong_frag:FT,meshphysical_vert:OT,meshphysical_frag:kT,meshtoon_vert:zT,meshtoon_frag:BT,points_vert:HT,points_frag:GT,shadow_vert:VT,shadow_frag:WT,sprite_vert:XT,sprite_frag:jT},xe={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},Si={basic:{uniforms:gn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:gn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new ft(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:gn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:gn([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:gn([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new ft(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:gn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:gn([xe.points,xe.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:gn([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:gn([xe.common,xe.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:gn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:gn([xe.sprite,xe.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:gn([xe.common,xe.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:gn([xe.lights,xe.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Si.physical={uniforms:gn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const hl={r:0,b:0,g:0};function YT(t,e,n,i,r,o,s){const a=new ft(0);let u=o===!0?0:1,c,h,p=null,m=0,_=null;function M(v,f){let x=!1,y=f.isScene===!0?f.background:null;y&&y.isTexture&&(y=(f.backgroundBlurriness>0?n:e).get(y)),y===null?T(a,u):y&&y.isColor&&(T(y,1),x=!0);const w=t.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||x)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Mu)?(h===void 0&&(h=new On(new Ma(1,1,1),new to({name:"BackgroundCubeMaterial",uniforms:cs(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,U,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=_t.getTransfer(y.colorSpace)!==Rt,(p!==y||m!==y.version||_!==t.toneMapping)&&(h.material.needsUpdate=!0,p=y,m=y.version,_=t.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new On(new sr(2,2),new to({name:"BackgroundMaterial",uniforms:cs(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:Tr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=_t.getTransfer(y.colorSpace)!==Rt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(p!==y||m!==y.version||_!==t.toneMapping)&&(c.material.needsUpdate=!0,p=y,m=y.version,_=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function T(v,f){v.getRGB(hl,T_(t)),i.buffers.color.setClear(hl.r,hl.g,hl.b,f,s)}return{getClearColor:function(){return a},setClearColor:function(v,f=1){a.set(v),u=f,T(a,u)},getClearAlpha:function(){return u},setClearAlpha:function(v){u=v,T(a,u)},render:M}}function qT(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||o!==null,a={},u=v(null);let c=u,h=!1;function p(z,K,B,k,F){let V=!1;if(s){const W=T(k,B,K);c!==W&&(c=W,_(c.object)),V=f(z,k,B,F),V&&x(z,k,B,F)}else{const W=K.wireframe===!0;(c.geometry!==k.id||c.program!==B.id||c.wireframe!==W)&&(c.geometry=k.id,c.program=B.id,c.wireframe=W,V=!0)}F!==null&&n.update(F,t.ELEMENT_ARRAY_BUFFER),(V||h)&&(h=!1,Y(z,K,B,k),F!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(F).buffer))}function m(){return i.isWebGL2?t.createVertexArray():o.createVertexArrayOES()}function _(z){return i.isWebGL2?t.bindVertexArray(z):o.bindVertexArrayOES(z)}function M(z){return i.isWebGL2?t.deleteVertexArray(z):o.deleteVertexArrayOES(z)}function T(z,K,B){const k=B.wireframe===!0;let F=a[z.id];F===void 0&&(F={},a[z.id]=F);let V=F[K.id];V===void 0&&(V={},F[K.id]=V);let W=V[k];return W===void 0&&(W=v(m()),V[k]=W),W}function v(z){const K=[],B=[],k=[];for(let F=0;F<r;F++)K[F]=0,B[F]=0,k[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:B,attributeDivisors:k,object:z,attributes:{},index:null}}function f(z,K,B,k){const F=c.attributes,V=K.attributes;let W=0;const Z=B.getAttributes();for(const Q in Z)if(Z[Q].location>=0){const se=F[Q];let ae=V[Q];if(ae===void 0&&(Q==="instanceMatrix"&&z.instanceMatrix&&(ae=z.instanceMatrix),Q==="instanceColor"&&z.instanceColor&&(ae=z.instanceColor)),se===void 0||se.attribute!==ae||ae&&se.data!==ae.data)return!0;W++}return c.attributesNum!==W||c.index!==k}function x(z,K,B,k){const F={},V=K.attributes;let W=0;const Z=B.getAttributes();for(const Q in Z)if(Z[Q].location>=0){let se=V[Q];se===void 0&&(Q==="instanceMatrix"&&z.instanceMatrix&&(se=z.instanceMatrix),Q==="instanceColor"&&z.instanceColor&&(se=z.instanceColor));const ae={};ae.attribute=se,se&&se.data&&(ae.data=se.data),F[Q]=ae,W++}c.attributes=F,c.attributesNum=W,c.index=k}function y(){const z=c.newAttributes;for(let K=0,B=z.length;K<B;K++)z[K]=0}function w(z){O(z,0)}function O(z,K){const B=c.newAttributes,k=c.enabledAttributes,F=c.attributeDivisors;B[z]=1,k[z]===0&&(t.enableVertexAttribArray(z),k[z]=1),F[z]!==K&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,K),F[z]=K)}function U(){const z=c.newAttributes,K=c.enabledAttributes;for(let B=0,k=K.length;B<k;B++)K[B]!==z[B]&&(t.disableVertexAttribArray(B),K[B]=0)}function b(z,K,B,k,F,V,W){W===!0?t.vertexAttribIPointer(z,K,B,F,V):t.vertexAttribPointer(z,K,B,k,F,V)}function Y(z,K,B,k){if(i.isWebGL2===!1&&(z.isInstancedMesh||k.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const F=k.attributes,V=B.getAttributes(),W=K.defaultAttributeValues;for(const Z in V){const Q=V[Z];if(Q.location>=0){let q=F[Z];if(q===void 0&&(Z==="instanceMatrix"&&z.instanceMatrix&&(q=z.instanceMatrix),Z==="instanceColor"&&z.instanceColor&&(q=z.instanceColor)),q!==void 0){const se=q.normalized,ae=q.itemSize,ge=n.get(q);if(ge===void 0)continue;const me=ge.buffer,Ne=ge.type,Ie=ge.bytesPerElement,Ce=i.isWebGL2===!0&&(Ne===t.INT||Ne===t.UNSIGNED_INT||q.gpuType===s_);if(q.isInterleavedBufferAttribute){const De=q.data,X=De.stride,Pe=q.offset;if(De.isInstancedInterleavedBuffer){for(let we=0;we<Q.locationSize;we++)O(Q.location+we,De.meshPerAttribute);z.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=De.meshPerAttribute*De.count)}else for(let we=0;we<Q.locationSize;we++)w(Q.location+we);t.bindBuffer(t.ARRAY_BUFFER,me);for(let we=0;we<Q.locationSize;we++)b(Q.location+we,ae/Q.locationSize,Ne,se,X*Ie,(Pe+ae/Q.locationSize*we)*Ie,Ce)}else{if(q.isInstancedBufferAttribute){for(let De=0;De<Q.locationSize;De++)O(Q.location+De,q.meshPerAttribute);z.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let De=0;De<Q.locationSize;De++)w(Q.location+De);t.bindBuffer(t.ARRAY_BUFFER,me);for(let De=0;De<Q.locationSize;De++)b(Q.location+De,ae/Q.locationSize,Ne,se,ae*Ie,ae/Q.locationSize*De*Ie,Ce)}}else if(W!==void 0){const se=W[Z];if(se!==void 0)switch(se.length){case 2:t.vertexAttrib2fv(Q.location,se);break;case 3:t.vertexAttrib3fv(Q.location,se);break;case 4:t.vertexAttrib4fv(Q.location,se);break;default:t.vertexAttrib1fv(Q.location,se)}}}}U()}function R(){$();for(const z in a){const K=a[z];for(const B in K){const k=K[B];for(const F in k)M(k[F].object),delete k[F];delete K[B]}delete a[z]}}function S(z){if(a[z.id]===void 0)return;const K=a[z.id];for(const B in K){const k=K[B];for(const F in k)M(k[F].object),delete k[F];delete K[B]}delete a[z.id]}function I(z){for(const K in a){const B=a[K];if(B[z.id]===void 0)continue;const k=B[z.id];for(const F in k)M(k[F].object),delete k[F];delete B[z.id]}}function $(){re(),h=!0,c!==u&&(c=u,_(c.object))}function re(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:p,reset:$,resetDefaultState:re,dispose:R,releaseStatesOfGeometry:S,releaseStatesOfProgram:I,initAttributes:y,enableAttribute:w,disableUnusedAttributes:U}}function $T(t,e,n,i){const r=i.isWebGL2;let o;function s(h){o=h}function a(h,p){t.drawArrays(o,h,p),n.update(p,o,1)}function u(h,p,m){if(m===0)return;let _,M;if(r)_=t,M="drawArraysInstanced";else if(_=e.get("ANGLE_instanced_arrays"),M="drawArraysInstancedANGLE",_===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[M](o,h,p,m),n.update(p,o,m)}function c(h,p,m){if(m===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let M=0;M<m;M++)this.render(h[M],p[M]);else{_.multiDrawArraysWEBGL(o,h,0,p,0,m);let M=0;for(let T=0;T<m;T++)M+=p[T];n.update(M,o,1)}}this.setMode=s,this.render=a,this.renderInstances=u,this.renderMultiDraw=c}function KT(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const u=o(a);u!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",u,"instead."),a=u);const c=s||e.has("WEBGL_draw_buffers"),h=n.logarithmicDepthBuffer===!0,p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),M=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),T=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),f=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),y=m>0,w=s||e.has("OES_texture_float"),O=y&&w,U=s?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:h,maxTextures:p,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:M,maxAttributes:T,maxVertexUniforms:v,maxVaryings:f,maxFragmentUniforms:x,vertexTextures:y,floatFragmentTextures:w,floatVertexTextures:O,maxSamples:U}}function ZT(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new Ir,a=new rt,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){const _=p.length!==0||m||i!==0||r;return r=m,i=p.length,_},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(p,m){n=h(p,m,0)},this.setState=function(p,m,_){const M=p.clippingPlanes,T=p.clipIntersection,v=p.clipShadows,f=t.get(p);if(!r||M===null||M.length===0||o&&!v)o?h(null):c();else{const x=o?0:i,y=x*4;let w=f.clippingState||null;u.value=w,w=h(M,m,y,_);for(let O=0;O!==y;++O)w[O]=n[O];f.clippingState=w,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=x}};function c(){u.value!==n&&(u.value=n,u.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,m,_,M){const T=p!==null?p.length:0;let v=null;if(T!==0){if(v=u.value,M!==!0||v===null){const f=_+T*4,x=m.matrixWorldInverse;a.getNormalMatrix(x),(v===null||v.length<f)&&(v=new Float32Array(f));for(let y=0,w=_;y!==T;++y,w+=4)s.copy(p[y]).applyMatrix4(x,a),s.normal.toArray(v,w),v[w+3]=s.constant}u.value=v,u.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,v}}function QT(t){let e=new WeakMap;function n(s,a){return a===Nf?s.mapping=as:a===If&&(s.mapping=ls),s}function i(s){if(s&&s.isTexture){const a=s.mapping;if(a===Nf||a===If)if(e.has(s)){const u=e.get(s).texture;return n(u,s.mapping)}else{const u=s.image;if(u&&u.height>0){const c=new cE(u.height/2);return c.fromEquirectangularTexture(t,s),e.set(s,c),s.addEventListener("dispose",r),n(c.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const u=e.get(a);u!==void 0&&(e.delete(a),u.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class JT extends w_{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,u=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=h*this.view.offsetY,u=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Wo=4,_m=[.125,.215,.35,.446,.526,.582],zr=20,Dc=new JT,ym=new ft;let Uc=null,Nc=0,Ic=0;const Fr=(1+Math.sqrt(5))/2,Lo=1/Fr,xm=[new J(1,1,1),new J(-1,1,1),new J(1,1,-1),new J(-1,1,-1),new J(0,Fr,Lo),new J(0,Fr,-Lo),new J(Lo,0,Fr),new J(-Lo,0,Fr),new J(Fr,Lo,0),new J(-Fr,Lo,0)];class Sm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Uc=this._renderer.getRenderTarget(),Nc=this._renderer.getActiveCubeFace(),Ic=this._renderer.getActiveMipmapLevel(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Uc,Nc,Ic),e.scissorTest=!1,pl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===as||e.mapping===ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uc=this._renderer.getRenderTarget(),Nc=this._renderer.getActiveCubeFace(),Ic=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Kn,minFilter:Kn,generateMipmaps:!1,type:da,format:hi,colorSpace:Xi,depthBuffer:!1},r=Em(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Em(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=e1(o)),this._blurMaterial=t1(o,e,n)}return r}_compileMaterial(e){const n=new On(this._lodPlanes[0],e);this._renderer.compile(n,Dc)}_sceneToCubeUV(e,n,i,r){const a=new Zn(90,1,n,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,m=h.toneMapping;h.getClearColor(ym),h.toneMapping=xr,h.autoClear=!1;const _=new kr({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1}),M=new On(new Ma,_);let T=!1;const v=e.background;v?v.isColor&&(_.color.copy(v),e.background=null,T=!0):(_.color.copy(ym),T=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(a.up.set(0,u[f],0),a.lookAt(c[f],0,0)):x===1?(a.up.set(0,0,u[f]),a.lookAt(0,c[f],0)):(a.up.set(0,u[f],0),a.lookAt(0,0,c[f]));const y=this._cubeSize;pl(r,x*y,f>2?y:0,y,y),h.setRenderTarget(r),T&&h.render(M,a),h.render(e,a)}M.geometry.dispose(),M.material.dispose(),h.toneMapping=m,h.autoClear=p,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===as||e.mapping===ls;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mm());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new On(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const u=this._cubeSize;pl(n,0,0,3*u,2*u),i.setRenderTarget(n),i.render(s,Dc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=xm[(r-1)%xm.length];this._blur(e,r-1,r,o,s)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const u=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,p=new On(this._lodPlanes[r],c),m=c.uniforms,_=this._sizeLods[i]-1,M=isFinite(o)?Math.PI/(2*_):2*Math.PI/(2*zr-1),T=o/M,v=isFinite(o)?1+Math.floor(h*T):zr;v>zr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${zr}`);const f=[];let x=0;for(let b=0;b<zr;++b){const Y=b/T,R=Math.exp(-Y*Y/2);f.push(R),b===0?x+=R:b<v&&(x+=2*R)}for(let b=0;b<f.length;b++)f[b]=f[b]/x;m.envMap.value=e.texture,m.samples.value=v,m.weights.value=f,m.latitudinal.value=s==="latitudinal",a&&(m.poleAxis.value=a);const{_lodMax:y}=this;m.dTheta.value=M,m.mipInt.value=y-i;const w=this._sizeLods[r],O=3*w*(r>y-Wo?r-y+Wo:0),U=4*(this._cubeSize-w);pl(n,O,U,3*w,2*w),u.setRenderTarget(n),u.render(p,Dc)}}function e1(t){const e=[],n=[],i=[];let r=t;const o=t-Wo+1+_m.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let u=1/a;s>t-Wo?u=_m[s-t+Wo-1]:s===0&&(u=0),i.push(u);const c=1/(a-2),h=-c,p=1+c,m=[h,h,p,h,p,p,h,h,p,p,h,p],_=6,M=6,T=3,v=2,f=1,x=new Float32Array(T*M*_),y=new Float32Array(v*M*_),w=new Float32Array(f*M*_);for(let U=0;U<_;U++){const b=U%3*2/3-1,Y=U>2?0:-1,R=[b,Y,0,b+2/3,Y,0,b+2/3,Y+1,0,b,Y,0,b+2/3,Y+1,0,b,Y+1,0];x.set(R,T*M*U),y.set(m,v*M*U);const S=[U,U,U,U,U,U];w.set(S,f*M*U)}const O=new Yi;O.setAttribute("position",new gi(x,T)),O.setAttribute("uv",new gi(y,v)),O.setAttribute("faceIndex",new gi(w,f)),e.push(O),r>Wo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Em(t,e,n){const i=new eo(t,e,n);return i.texture.mapping=Mu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function pl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function t1(t,e,n){const i=new Float32Array(zr),r=new J(0,1,0);return new to({name:"SphericalGaussianBlur",defines:{n:zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Bd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function Mm(){return new to({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function Tm(){return new to({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function Bd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function n1(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const u=a.mapping,c=u===Nf||u===If,h=u===as||u===ls;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let p=e.get(a);return n===null&&(n=new Sm(t)),p=c?n.fromEquirectangular(a,p):n.fromCubemap(a,p),e.set(a,p),p.texture}else{if(e.has(a))return e.get(a).texture;{const p=a.image;if(c&&p&&p.height>0||h&&p&&r(p)){n===null&&(n=new Sm(t));const m=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,m),a.addEventListener("dispose",o),m.texture}else return null}}}return a}function r(a){let u=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&u++;return u===c}function o(a){const u=a.target;u.removeEventListener("dispose",o);const c=e.get(u);c!==void 0&&(e.delete(u),c.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function i1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function r1(t,e,n,i){const r={},o=new WeakMap;function s(p){const m=p.target;m.index!==null&&e.remove(m.index);for(const M in m.attributes)e.remove(m.attributes[M]);for(const M in m.morphAttributes){const T=m.morphAttributes[M];for(let v=0,f=T.length;v<f;v++)e.remove(T[v])}m.removeEventListener("dispose",s),delete r[m.id];const _=o.get(m);_&&(e.remove(_),o.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,n.memory.geometries--}function a(p,m){return r[m.id]===!0||(m.addEventListener("dispose",s),r[m.id]=!0,n.memory.geometries++),m}function u(p){const m=p.attributes;for(const M in m)e.update(m[M],t.ARRAY_BUFFER);const _=p.morphAttributes;for(const M in _){const T=_[M];for(let v=0,f=T.length;v<f;v++)e.update(T[v],t.ARRAY_BUFFER)}}function c(p){const m=[],_=p.index,M=p.attributes.position;let T=0;if(_!==null){const x=_.array;T=_.version;for(let y=0,w=x.length;y<w;y+=3){const O=x[y+0],U=x[y+1],b=x[y+2];m.push(O,U,U,b,b,O)}}else if(M!==void 0){const x=M.array;T=M.version;for(let y=0,w=x.length/3-1;y<w;y+=3){const O=y+0,U=y+1,b=y+2;m.push(O,U,U,b,b,O)}}else return;const v=new(m_(m)?M_:E_)(m,1);v.version=T;const f=o.get(p);f&&e.remove(f),o.set(p,v)}function h(p){const m=o.get(p);if(m){const _=p.index;_!==null&&m.version<_.version&&c(p)}else c(p);return o.get(p)}return{get:a,update:u,getWireframeAttribute:h}}function o1(t,e,n,i){const r=i.isWebGL2;let o;function s(_){o=_}let a,u;function c(_){a=_.type,u=_.bytesPerElement}function h(_,M){t.drawElements(o,M,a,_*u),n.update(M,o,1)}function p(_,M,T){if(T===0)return;let v,f;if(r)v=t,f="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[f](o,M,a,_*u,T),n.update(M,o,T)}function m(_,M,T){if(T===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let f=0;f<T;f++)this.render(_[f]/u,M[f]);else{v.multiDrawElementsWEBGL(o,M,0,a,_,0,T);let f=0;for(let x=0;x<T;x++)f+=M[x];n.update(f,o,1)}}this.setMode=s,this.setIndex=c,this.render=h,this.renderInstances=p,this.renderMultiDraw=m}function s1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function a1(t,e){return t[0]-e[0]}function l1(t,e){return Math.abs(e[1])-Math.abs(t[1])}function u1(t,e,n){const i={},r=new Float32Array(8),o=new WeakMap,s=new rn,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function u(c,h,p){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const M=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,T=M!==void 0?M.length:0;let v=o.get(h);if(v===void 0||v.count!==T){let K=function(){re.dispose(),o.delete(h),h.removeEventListener("dispose",K)};var _=K;v!==void 0&&v.texture.dispose();const y=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,O=h.morphAttributes.color!==void 0,U=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],Y=h.morphAttributes.color||[];let R=0;y===!0&&(R=1),w===!0&&(R=2),O===!0&&(R=3);let S=h.attributes.position.count*R,I=1;S>e.maxTextureSize&&(I=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const $=new Float32Array(S*I*4*T),re=new __($,S,I,T);re.type=cr,re.needsUpdate=!0;const z=R*4;for(let B=0;B<T;B++){const k=U[B],F=b[B],V=Y[B],W=S*I*4*B;for(let Z=0;Z<k.count;Z++){const Q=Z*z;y===!0&&(s.fromBufferAttribute(k,Z),$[W+Q+0]=s.x,$[W+Q+1]=s.y,$[W+Q+2]=s.z,$[W+Q+3]=0),w===!0&&(s.fromBufferAttribute(F,Z),$[W+Q+4]=s.x,$[W+Q+5]=s.y,$[W+Q+6]=s.z,$[W+Q+7]=0),O===!0&&(s.fromBufferAttribute(V,Z),$[W+Q+8]=s.x,$[W+Q+9]=s.y,$[W+Q+10]=s.z,$[W+Q+11]=V.itemSize===4?s.w:1)}}v={count:T,texture:re,size:new yt(S,I)},o.set(h,v),h.addEventListener("dispose",K)}let f=0;for(let y=0;y<m.length;y++)f+=m[y];const x=h.morphTargetsRelative?1:1-f;p.getUniforms().setValue(t,"morphTargetBaseInfluence",x),p.getUniforms().setValue(t,"morphTargetInfluences",m),p.getUniforms().setValue(t,"morphTargetsTexture",v.texture,n),p.getUniforms().setValue(t,"morphTargetsTextureSize",v.size)}else{const M=m===void 0?0:m.length;let T=i[h.id];if(T===void 0||T.length!==M){T=[];for(let w=0;w<M;w++)T[w]=[w,0];i[h.id]=T}for(let w=0;w<M;w++){const O=T[w];O[0]=w,O[1]=m[w]}T.sort(l1);for(let w=0;w<8;w++)w<M&&T[w][1]?(a[w][0]=T[w][0],a[w][1]=T[w][1]):(a[w][0]=Number.MAX_SAFE_INTEGER,a[w][1]=0);a.sort(a1);const v=h.morphAttributes.position,f=h.morphAttributes.normal;let x=0;for(let w=0;w<8;w++){const O=a[w],U=O[0],b=O[1];U!==Number.MAX_SAFE_INTEGER&&b?(v&&h.getAttribute("morphTarget"+w)!==v[U]&&h.setAttribute("morphTarget"+w,v[U]),f&&h.getAttribute("morphNormal"+w)!==f[U]&&h.setAttribute("morphNormal"+w,f[U]),r[w]=b,x+=b):(v&&h.hasAttribute("morphTarget"+w)===!0&&h.deleteAttribute("morphTarget"+w),f&&h.hasAttribute("morphNormal"+w)===!0&&h.deleteAttribute("morphNormal"+w),r[w]=0)}const y=h.morphTargetsRelative?1:1-x;p.getUniforms().setValue(t,"morphTargetBaseInfluence",y),p.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:u}}function c1(t,e,n,i){let r=new WeakMap;function o(u){const c=i.render.frame,h=u.geometry,p=e.get(u,h);if(r.get(p)!==c&&(e.update(p),r.set(p,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",a)===!1&&u.addEventListener("dispose",a),r.get(u)!==c&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),r.set(u,c))),u.isSkinnedMesh){const m=u.skeleton;r.get(m)!==c&&(m.update(),r.set(m,c))}return p}function s(){r=new WeakMap}function a(u){const c=u.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:o,dispose:s}}class P_ extends xn{constructor(e,n,i,r,o,s,a,u,c,h){if(h=h!==void 0?h:Yr,h!==Yr&&h!==us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Yr&&(i=ur),i===void 0&&h===us&&(i=jr),super(null,r,o,s,a,u,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:_n,this.minFilter=u!==void 0?u:_n,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const L_=new xn,b_=new P_(1,1);b_.compareFunction=p_;const D_=new __,U_=new YS,N_=new A_,wm=[],Am=[],Rm=new Float32Array(16),Cm=new Float32Array(9),Pm=new Float32Array(4);function ms(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=wm[r];if(o===void 0&&(o=new Float32Array(r),wm[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function jt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Yt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ru(t,e){let n=Am[e];n===void 0&&(n=new Int32Array(e),Am[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function f1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function d1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;t.uniform2fv(this.addr,e),Yt(n,e)}}function h1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(jt(n,e))return;t.uniform3fv(this.addr,e),Yt(n,e)}}function p1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;t.uniform4fv(this.addr,e),Yt(n,e)}}function m1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(jt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Yt(n,e)}else{if(jt(n,i))return;Pm.set(i),t.uniformMatrix2fv(this.addr,!1,Pm),Yt(n,i)}}function g1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(jt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Yt(n,e)}else{if(jt(n,i))return;Cm.set(i),t.uniformMatrix3fv(this.addr,!1,Cm),Yt(n,i)}}function v1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(jt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Yt(n,e)}else{if(jt(n,i))return;Rm.set(i),t.uniformMatrix4fv(this.addr,!1,Rm),Yt(n,i)}}function _1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function y1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;t.uniform2iv(this.addr,e),Yt(n,e)}}function x1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(jt(n,e))return;t.uniform3iv(this.addr,e),Yt(n,e)}}function S1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;t.uniform4iv(this.addr,e),Yt(n,e)}}function E1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function M1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;t.uniform2uiv(this.addr,e),Yt(n,e)}}function T1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(jt(n,e))return;t.uniform3uiv(this.addr,e),Yt(n,e)}}function w1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;t.uniform4uiv(this.addr,e),Yt(n,e)}}function A1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const o=this.type===t.SAMPLER_2D_SHADOW?b_:L_;n.setTexture2D(e||o,r)}function R1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||U_,r)}function C1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||N_,r)}function P1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||D_,r)}function L1(t){switch(t){case 5126:return f1;case 35664:return d1;case 35665:return h1;case 35666:return p1;case 35674:return m1;case 35675:return g1;case 35676:return v1;case 5124:case 35670:return _1;case 35667:case 35671:return y1;case 35668:case 35672:return x1;case 35669:case 35673:return S1;case 5125:return E1;case 36294:return M1;case 36295:return T1;case 36296:return w1;case 35678:case 36198:case 36298:case 36306:case 35682:return A1;case 35679:case 36299:case 36307:return R1;case 35680:case 36300:case 36308:case 36293:return C1;case 36289:case 36303:case 36311:case 36292:return P1}}function b1(t,e){t.uniform1fv(this.addr,e)}function D1(t,e){const n=ms(e,this.size,2);t.uniform2fv(this.addr,n)}function U1(t,e){const n=ms(e,this.size,3);t.uniform3fv(this.addr,n)}function N1(t,e){const n=ms(e,this.size,4);t.uniform4fv(this.addr,n)}function I1(t,e){const n=ms(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function F1(t,e){const n=ms(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function O1(t,e){const n=ms(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function k1(t,e){t.uniform1iv(this.addr,e)}function z1(t,e){t.uniform2iv(this.addr,e)}function B1(t,e){t.uniform3iv(this.addr,e)}function H1(t,e){t.uniform4iv(this.addr,e)}function G1(t,e){t.uniform1uiv(this.addr,e)}function V1(t,e){t.uniform2uiv(this.addr,e)}function W1(t,e){t.uniform3uiv(this.addr,e)}function X1(t,e){t.uniform4uiv(this.addr,e)}function j1(t,e,n){const i=this.cache,r=e.length,o=Ru(n,r);jt(i,o)||(t.uniform1iv(this.addr,o),Yt(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||L_,o[s])}function Y1(t,e,n){const i=this.cache,r=e.length,o=Ru(n,r);jt(i,o)||(t.uniform1iv(this.addr,o),Yt(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||U_,o[s])}function q1(t,e,n){const i=this.cache,r=e.length,o=Ru(n,r);jt(i,o)||(t.uniform1iv(this.addr,o),Yt(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||N_,o[s])}function $1(t,e,n){const i=this.cache,r=e.length,o=Ru(n,r);jt(i,o)||(t.uniform1iv(this.addr,o),Yt(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||D_,o[s])}function K1(t){switch(t){case 5126:return b1;case 35664:return D1;case 35665:return U1;case 35666:return N1;case 35674:return I1;case 35675:return F1;case 35676:return O1;case 5124:case 35670:return k1;case 35667:case 35671:return z1;case 35668:case 35672:return B1;case 35669:case 35673:return H1;case 5125:return G1;case 36294:return V1;case 36295:return W1;case 36296:return X1;case 35678:case 36198:case 36298:case 36306:case 35682:return j1;case 35679:case 36299:case 36307:return Y1;case 35680:case 36300:case 36308:case 36293:return q1;case 36289:case 36303:case 36311:case 36292:return $1}}class Z1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=L1(n.type)}}class Q1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=K1(n.type)}}class J1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const Fc=/(\w+)(\])?(\[|\.)?/g;function Lm(t,e){t.seq.push(e),t.map[e.id]=e}function ew(t,e,n){const i=t.name,r=i.length;for(Fc.lastIndex=0;;){const o=Fc.exec(i),s=Fc.lastIndex;let a=o[1];const u=o[2]==="]",c=o[3];if(u&&(a=a|0),c===void 0||c==="["&&s+2===r){Lm(n,c===void 0?new Z1(a,t,e):new Q1(a,t,e));break}else{let p=n.map[a];p===void 0&&(p=new J1(a),Lm(n,p)),n=p}}}class Ll{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);ew(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],u=i[a.id];u.needsUpdate!==!1&&a.setValue(e,u.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function bm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const tw=37297;let nw=0;function iw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}function rw(t){const e=_t.getPrimaries(_t.workingColorSpace),n=_t.getPrimaries(t);let i;switch(e===n?i="":e===ou&&n===ru?i="LinearDisplayP3ToLinearSRGB":e===ru&&n===ou&&(i="LinearSRGBToLinearDisplayP3"),t){case Xi:case Tu:return[i,"LinearTransferOETF"];case nn:case zd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Dm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+iw(t.getShaderSource(e),s)}else return r}function ow(t,e){const n=rw(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function sw(t,e){let n;switch(e){case mS:n="Linear";break;case gS:n="Reinhard";break;case vS:n="OptimizedCineon";break;case _S:n="ACESFilmic";break;case xS:n="AgX";break;case yS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function aw(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Xo).join(`
`)}function lw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Xo).join(`
`)}function uw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function cw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function Xo(t){return t!==""}function Um(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hf(t){return t.replace(fw,hw)}const dw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function hw(t,e){let n=nt[e];if(n===void 0){const i=dw.get(e);if(i!==void 0)n=nt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Hf(n)}const pw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Im(t){return t.replace(pw,mw)}function mw(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Fm(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===i_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Vx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ui&&(e="SHADOWMAP_TYPE_VSM"),e}function vw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case as:case ls:e="ENVMAP_TYPE_CUBE";break;case Mu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _w(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ls:e="ENVMAP_MODE_REFRACTION";break}return e}function yw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case r_:e="ENVMAP_BLENDING_MULTIPLY";break;case hS:e="ENVMAP_BLENDING_MIX";break;case pS:e="ENVMAP_BLENDING_ADD";break}return e}function xw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Sw(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const u=gw(n),c=vw(n),h=_w(n),p=yw(n),m=xw(n),_=n.isWebGL2?"":aw(n),M=lw(n),T=uw(o),v=r.createProgram();let f,x,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Xo).join(`
`),f.length>0&&(f+=`
`),x=[_,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Xo).join(`
`),x.length>0&&(x+=`
`)):(f=[Fm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+u:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),x=[_,Fm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+u:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==xr?"#define TONE_MAPPING":"",n.toneMapping!==xr?nt.tonemapping_pars_fragment:"",n.toneMapping!==xr?sw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,ow("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Xo).join(`
`)),s=Hf(s),s=Um(s,n),s=Nm(s,n),a=Hf(a),a=Um(a,n),a=Nm(a,n),s=Im(s),a=Im(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=[M,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,x=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===em?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===em?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const w=y+f+s,O=y+x+a,U=bm(r,r.VERTEX_SHADER,w),b=bm(r,r.FRAGMENT_SHADER,O);r.attachShader(v,U),r.attachShader(v,b),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function Y($){if(t.debug.checkShaderErrors){const re=r.getProgramInfoLog(v).trim(),z=r.getShaderInfoLog(U).trim(),K=r.getShaderInfoLog(b).trim();let B=!0,k=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(B=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,U,b);else{const F=Dm(r,U,"vertex"),V=Dm(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+re+`
`+F+`
`+V)}else re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",re):(z===""||K==="")&&(k=!1);k&&($.diagnostics={runnable:B,programLog:re,vertexShader:{log:z,prefix:f},fragmentShader:{log:K,prefix:x}})}r.deleteShader(U),r.deleteShader(b),R=new Ll(r,v),S=cw(r,v)}let R;this.getUniforms=function(){return R===void 0&&Y(this),R};let S;this.getAttributes=function(){return S===void 0&&Y(this),S};let I=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(v,tw)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=nw++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=U,this.fragmentShader=b,this}let Ew=0;class Mw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Tw(e),n.set(e,i)),i}}class Tw{constructor(e){this.id=Ew++,this.code=e,this.usedTimes=0}}function ww(t,e,n,i,r,o,s){const a=new x_,u=new Mw,c=[],h=r.isWebGL2,p=r.logarithmicDepthBuffer,m=r.vertexTextures;let _=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(R){return R===0?"uv":`uv${R}`}function v(R,S,I,$,re){const z=$.fog,K=re.geometry,B=R.isMeshStandardMaterial?$.environment:null,k=(R.isMeshStandardMaterial?n:e).get(R.envMap||B),F=k&&k.mapping===Mu?k.image.height:null,V=M[R.type];R.precision!==null&&(_=r.getMaxPrecision(R.precision),_!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",_,"instead."));const W=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Z=W!==void 0?W.length:0;let Q=0;K.morphAttributes.position!==void 0&&(Q=1),K.morphAttributes.normal!==void 0&&(Q=2),K.morphAttributes.color!==void 0&&(Q=3);let q,se,ae,ge;if(V){const zt=Si[V];q=zt.vertexShader,se=zt.fragmentShader}else q=R.vertexShader,se=R.fragmentShader,u.update(R),ae=u.getVertexShaderID(R),ge=u.getFragmentShaderID(R);const me=t.getRenderTarget(),Ne=re.isInstancedMesh===!0,Ie=re.isBatchedMesh===!0,Ce=!!R.map,De=!!R.matcap,X=!!k,Pe=!!R.aoMap,we=!!R.lightMap,je=!!R.bumpMap,Ue=!!R.normalMap,ht=!!R.displacementMap,Ze=!!R.emissiveMap,P=!!R.metalnessMap,A=!!R.roughnessMap,ee=R.anisotropy>0,de=R.clearcoat>0,ue=R.iridescence>0,le=R.sheen>0,be=R.transmission>0,ve=ee&&!!R.anisotropyMap,Te=de&&!!R.clearcoatMap,Be=de&&!!R.clearcoatNormalMap,Ye=de&&!!R.clearcoatRoughnessMap,ce=ue&&!!R.iridescenceMap,ct=ue&&!!R.iridescenceThicknessMap,et=le&&!!R.sheenColorMap,He=le&&!!R.sheenRoughnessMap,ke=!!R.specularMap,Le=!!R.specularColorMap,Je=!!R.specularIntensityMap,at=be&&!!R.transmissionMap,xt=be&&!!R.thicknessMap,qe=!!R.gradientMap,pe=!!R.alphaMap,H=R.alphaTest>0,Ee=!!R.alphaHash,Se=!!R.extensions,Ge=!!K.attributes.uv1,Fe=!!K.attributes.uv2,dt=!!K.attributes.uv3;let pt=xr;return R.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(pt=t.toneMapping),{isWebGL2:h,shaderID:V,shaderType:R.type,shaderName:R.name,vertexShader:q,fragmentShader:se,defines:R.defines,customVertexShaderID:ae,customFragmentShaderID:ge,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:_,batching:Ie,instancing:Ne,instancingColor:Ne&&re.instanceColor!==null,supportsVertexTextures:m,outputColorSpace:me===null?t.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Xi,map:Ce,matcap:De,envMap:X,envMapMode:X&&k.mapping,envMapCubeUVHeight:F,aoMap:Pe,lightMap:we,bumpMap:je,normalMap:Ue,displacementMap:m&&ht,emissiveMap:Ze,normalMapObjectSpace:Ue&&R.normalMapType===US,normalMapTangentSpace:Ue&&R.normalMapType===DS,metalnessMap:P,roughnessMap:A,anisotropy:ee,anisotropyMap:ve,clearcoat:de,clearcoatMap:Te,clearcoatNormalMap:Be,clearcoatRoughnessMap:Ye,iridescence:ue,iridescenceMap:ce,iridescenceThicknessMap:ct,sheen:le,sheenColorMap:et,sheenRoughnessMap:He,specularMap:ke,specularColorMap:Le,specularIntensityMap:Je,transmission:be,transmissionMap:at,thicknessMap:xt,gradientMap:qe,opaque:R.transparent===!1&&R.blending===Xr,alphaMap:pe,alphaTest:H,alphaHash:Ee,combine:R.combine,mapUv:Ce&&T(R.map.channel),aoMapUv:Pe&&T(R.aoMap.channel),lightMapUv:we&&T(R.lightMap.channel),bumpMapUv:je&&T(R.bumpMap.channel),normalMapUv:Ue&&T(R.normalMap.channel),displacementMapUv:ht&&T(R.displacementMap.channel),emissiveMapUv:Ze&&T(R.emissiveMap.channel),metalnessMapUv:P&&T(R.metalnessMap.channel),roughnessMapUv:A&&T(R.roughnessMap.channel),anisotropyMapUv:ve&&T(R.anisotropyMap.channel),clearcoatMapUv:Te&&T(R.clearcoatMap.channel),clearcoatNormalMapUv:Be&&T(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ye&&T(R.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&T(R.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&T(R.iridescenceThicknessMap.channel),sheenColorMapUv:et&&T(R.sheenColorMap.channel),sheenRoughnessMapUv:He&&T(R.sheenRoughnessMap.channel),specularMapUv:ke&&T(R.specularMap.channel),specularColorMapUv:Le&&T(R.specularColorMap.channel),specularIntensityMapUv:Je&&T(R.specularIntensityMap.channel),transmissionMapUv:at&&T(R.transmissionMap.channel),thicknessMapUv:xt&&T(R.thicknessMap.channel),alphaMapUv:pe&&T(R.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Ue||ee),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,vertexUv1s:Ge,vertexUv2s:Fe,vertexUv3s:dt,pointsUvs:re.isPoints===!0&&!!K.attributes.uv&&(Ce||pe),fog:!!z,useFog:R.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:re.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:Q,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:R.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:pt,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Ce&&R.map.isVideoTexture===!0&&_t.getTransfer(R.map.colorSpace)===Rt,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Mi,flipSided:R.side===Dn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionDerivatives:Se&&R.extensions.derivatives===!0,extensionFragDepth:Se&&R.extensions.fragDepth===!0,extensionDrawBuffers:Se&&R.extensions.drawBuffers===!0,extensionShaderTextureLOD:Se&&R.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Se&&R.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()}}function f(R){const S=[];if(R.shaderID?S.push(R.shaderID):(S.push(R.customVertexShaderID),S.push(R.customFragmentShaderID)),R.defines!==void 0)for(const I in R.defines)S.push(I),S.push(R.defines[I]);return R.isRawShaderMaterial===!1&&(x(S,R),y(S,R),S.push(t.outputColorSpace)),S.push(R.customProgramCacheKey),S.join()}function x(R,S){R.push(S.precision),R.push(S.outputColorSpace),R.push(S.envMapMode),R.push(S.envMapCubeUVHeight),R.push(S.mapUv),R.push(S.alphaMapUv),R.push(S.lightMapUv),R.push(S.aoMapUv),R.push(S.bumpMapUv),R.push(S.normalMapUv),R.push(S.displacementMapUv),R.push(S.emissiveMapUv),R.push(S.metalnessMapUv),R.push(S.roughnessMapUv),R.push(S.anisotropyMapUv),R.push(S.clearcoatMapUv),R.push(S.clearcoatNormalMapUv),R.push(S.clearcoatRoughnessMapUv),R.push(S.iridescenceMapUv),R.push(S.iridescenceThicknessMapUv),R.push(S.sheenColorMapUv),R.push(S.sheenRoughnessMapUv),R.push(S.specularMapUv),R.push(S.specularColorMapUv),R.push(S.specularIntensityMapUv),R.push(S.transmissionMapUv),R.push(S.thicknessMapUv),R.push(S.combine),R.push(S.fogExp2),R.push(S.sizeAttenuation),R.push(S.morphTargetsCount),R.push(S.morphAttributeCount),R.push(S.numDirLights),R.push(S.numPointLights),R.push(S.numSpotLights),R.push(S.numSpotLightMaps),R.push(S.numHemiLights),R.push(S.numRectAreaLights),R.push(S.numDirLightShadows),R.push(S.numPointLightShadows),R.push(S.numSpotLightShadows),R.push(S.numSpotLightShadowsWithMaps),R.push(S.numLightProbes),R.push(S.shadowMapType),R.push(S.toneMapping),R.push(S.numClippingPlanes),R.push(S.numClipIntersection),R.push(S.depthPacking)}function y(R,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),R.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),R.push(a.mask)}function w(R){const S=M[R.type];let I;if(S){const $=Si[S];I=sE.clone($.uniforms)}else I=R.uniforms;return I}function O(R,S){let I;for(let $=0,re=c.length;$<re;$++){const z=c[$];if(z.cacheKey===S){I=z,++I.usedTimes;break}}return I===void 0&&(I=new Sw(t,S,R,o),c.push(I)),I}function U(R){if(--R.usedTimes===0){const S=c.indexOf(R);c[S]=c[c.length-1],c.pop(),R.destroy()}}function b(R){u.remove(R)}function Y(){u.dispose()}return{getParameters:v,getProgramCacheKey:f,getUniforms:w,acquireProgram:O,releaseProgram:U,releaseShaderCache:b,programs:c,dispose:Y}}function Aw(){let t=new WeakMap;function e(o){let s=t.get(o);return s===void 0&&(s={},t.set(o,s)),s}function n(o){t.delete(o)}function i(o,s,a){t.get(o)[s]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function Rw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Om(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function km(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(p,m,_,M,T,v){let f=t[e];return f===void 0?(f={id:p.id,object:p,geometry:m,material:_,groupOrder:M,renderOrder:p.renderOrder,z:T,group:v},t[e]=f):(f.id=p.id,f.object=p,f.geometry=m,f.material=_,f.groupOrder=M,f.renderOrder=p.renderOrder,f.z=T,f.group=v),e++,f}function a(p,m,_,M,T,v){const f=s(p,m,_,M,T,v);_.transmission>0?i.push(f):_.transparent===!0?r.push(f):n.push(f)}function u(p,m,_,M,T,v){const f=s(p,m,_,M,T,v);_.transmission>0?i.unshift(f):_.transparent===!0?r.unshift(f):n.unshift(f)}function c(p,m){n.length>1&&n.sort(p||Rw),i.length>1&&i.sort(m||Om),r.length>1&&r.sort(m||Om)}function h(){for(let p=e,m=t.length;p<m;p++){const _=t[p];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:u,finish:h,sort:c}}function Cw(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new km,t.set(i,[s])):r>=o.length?(s=new km,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function Pw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new J,color:new ft};break;case"SpotLight":n={position:new J,direction:new J,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new J,color:new ft,distance:0,decay:0};break;case"HemisphereLight":n={direction:new J,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":n={color:new ft,position:new J,halfWidth:new J,halfHeight:new J};break}return t[e.id]=n,n}}}function Lw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let bw=0;function Dw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Uw(t,e){const n=new Pw,i=Lw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new J);const o=new J,s=new Qt,a=new Qt;function u(h,p){let m=0,_=0,M=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let T=0,v=0,f=0,x=0,y=0,w=0,O=0,U=0,b=0,Y=0,R=0;h.sort(Dw);const S=p===!0?Math.PI:1;for(let $=0,re=h.length;$<re;$++){const z=h[$],K=z.color,B=z.intensity,k=z.distance,F=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)m+=K.r*B*S,_+=K.g*B*S,M+=K.b*B*S;else if(z.isLightProbe){for(let V=0;V<9;V++)r.probe[V].addScaledVector(z.sh.coefficients[V],B);R++}else if(z.isDirectionalLight){const V=n.get(z);if(V.color.copy(z.color).multiplyScalar(z.intensity*S),z.castShadow){const W=z.shadow,Z=i.get(z);Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize=W.mapSize,r.directionalShadow[T]=Z,r.directionalShadowMap[T]=F,r.directionalShadowMatrix[T]=z.shadow.matrix,w++}r.directional[T]=V,T++}else if(z.isSpotLight){const V=n.get(z);V.position.setFromMatrixPosition(z.matrixWorld),V.color.copy(K).multiplyScalar(B*S),V.distance=k,V.coneCos=Math.cos(z.angle),V.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),V.decay=z.decay,r.spot[f]=V;const W=z.shadow;if(z.map&&(r.spotLightMap[b]=z.map,b++,W.updateMatrices(z),z.castShadow&&Y++),r.spotLightMatrix[f]=W.matrix,z.castShadow){const Z=i.get(z);Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize=W.mapSize,r.spotShadow[f]=Z,r.spotShadowMap[f]=F,U++}f++}else if(z.isRectAreaLight){const V=n.get(z);V.color.copy(K).multiplyScalar(B),V.halfWidth.set(z.width*.5,0,0),V.halfHeight.set(0,z.height*.5,0),r.rectArea[x]=V,x++}else if(z.isPointLight){const V=n.get(z);if(V.color.copy(z.color).multiplyScalar(z.intensity*S),V.distance=z.distance,V.decay=z.decay,z.castShadow){const W=z.shadow,Z=i.get(z);Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize=W.mapSize,Z.shadowCameraNear=W.camera.near,Z.shadowCameraFar=W.camera.far,r.pointShadow[v]=Z,r.pointShadowMap[v]=F,r.pointShadowMatrix[v]=z.shadow.matrix,O++}r.point[v]=V,v++}else if(z.isHemisphereLight){const V=n.get(z);V.skyColor.copy(z.color).multiplyScalar(B*S),V.groundColor.copy(z.groundColor).multiplyScalar(B*S),r.hemi[y]=V,y++}}x>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_FLOAT_1,r.rectAreaLTC2=xe.LTC_FLOAT_2):(r.rectAreaLTC1=xe.LTC_HALF_1,r.rectAreaLTC2=xe.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_FLOAT_1,r.rectAreaLTC2=xe.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_HALF_1,r.rectAreaLTC2=xe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=m,r.ambient[1]=_,r.ambient[2]=M;const I=r.hash;(I.directionalLength!==T||I.pointLength!==v||I.spotLength!==f||I.rectAreaLength!==x||I.hemiLength!==y||I.numDirectionalShadows!==w||I.numPointShadows!==O||I.numSpotShadows!==U||I.numSpotMaps!==b||I.numLightProbes!==R)&&(r.directional.length=T,r.spot.length=f,r.rectArea.length=x,r.point.length=v,r.hemi.length=y,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=O,r.pointShadowMap.length=O,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=O,r.spotLightMatrix.length=U+b-Y,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=Y,r.numLightProbes=R,I.directionalLength=T,I.pointLength=v,I.spotLength=f,I.rectAreaLength=x,I.hemiLength=y,I.numDirectionalShadows=w,I.numPointShadows=O,I.numSpotShadows=U,I.numSpotMaps=b,I.numLightProbes=R,r.version=bw++)}function c(h,p){let m=0,_=0,M=0,T=0,v=0;const f=p.matrixWorldInverse;for(let x=0,y=h.length;x<y;x++){const w=h[x];if(w.isDirectionalLight){const O=r.directional[m];O.direction.setFromMatrixPosition(w.matrixWorld),o.setFromMatrixPosition(w.target.matrixWorld),O.direction.sub(o),O.direction.transformDirection(f),m++}else if(w.isSpotLight){const O=r.spot[M];O.position.setFromMatrixPosition(w.matrixWorld),O.position.applyMatrix4(f),O.direction.setFromMatrixPosition(w.matrixWorld),o.setFromMatrixPosition(w.target.matrixWorld),O.direction.sub(o),O.direction.transformDirection(f),M++}else if(w.isRectAreaLight){const O=r.rectArea[T];O.position.setFromMatrixPosition(w.matrixWorld),O.position.applyMatrix4(f),a.identity(),s.copy(w.matrixWorld),s.premultiply(f),a.extractRotation(s),O.halfWidth.set(w.width*.5,0,0),O.halfHeight.set(0,w.height*.5,0),O.halfWidth.applyMatrix4(a),O.halfHeight.applyMatrix4(a),T++}else if(w.isPointLight){const O=r.point[_];O.position.setFromMatrixPosition(w.matrixWorld),O.position.applyMatrix4(f),_++}else if(w.isHemisphereLight){const O=r.hemi[v];O.direction.setFromMatrixPosition(w.matrixWorld),O.direction.transformDirection(f),v++}}}return{setup:u,setupView:c,state:r}}function zm(t,e){const n=new Uw(t,e),i=[],r=[];function o(){i.length=0,r.length=0}function s(p){i.push(p)}function a(p){r.push(p)}function u(p){n.setup(i,p)}function c(p){n.setupView(i,p)}return{init:o,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:u,setupLightsView:c,pushLight:s,pushShadow:a}}function Nw(t,e){let n=new WeakMap;function i(o,s=0){const a=n.get(o);let u;return a===void 0?(u=new zm(t,e),n.set(o,[u])):s>=a.length?(u=new zm(t,e),a.push(u)):u=a[s],u}function r(){n=new WeakMap}return{get:i,dispose:r}}class Iw extends Ea{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=LS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Fw extends Ea{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ow=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function zw(t,e,n){let i=new R_;const r=new yt,o=new yt,s=new rn,a=new Iw({depthPacking:bS}),u=new Fw,c={},h=n.maxTextureSize,p={[Tr]:Dn,[Dn]:Tr,[Mi]:Mi},m=new to({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:Ow,fragmentShader:kw}),_=m.clone();_.defines.HORIZONTAL_PASS=1;const M=new Yi;M.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new On(M,m),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=i_;let f=this.type;this.render=function(U,b,Y){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||U.length===0)return;const R=t.getRenderTarget(),S=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),$=t.state;$.setBlending(yr),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const re=f!==Ui&&this.type===Ui,z=f===Ui&&this.type!==Ui;for(let K=0,B=U.length;K<B;K++){const k=U[K],F=k.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const V=F.getFrameExtents();if(r.multiply(V),o.copy(F.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(o.x=Math.floor(h/V.x),r.x=o.x*V.x,F.mapSize.x=o.x),r.y>h&&(o.y=Math.floor(h/V.y),r.y=o.y*V.y,F.mapSize.y=o.y)),F.map===null||re===!0||z===!0){const Z=this.type!==Ui?{minFilter:_n,magFilter:_n}:{};F.map!==null&&F.map.dispose(),F.map=new eo(r.x,r.y,Z),F.map.texture.name=k.name+".shadowMap",F.camera.updateProjectionMatrix()}t.setRenderTarget(F.map),t.clear();const W=F.getViewportCount();for(let Z=0;Z<W;Z++){const Q=F.getViewport(Z);s.set(o.x*Q.x,o.y*Q.y,o.x*Q.z,o.y*Q.w),$.viewport(s),F.updateMatrices(k,Z),i=F.getFrustum(),w(b,Y,F.camera,k,this.type)}F.isPointLightShadow!==!0&&this.type===Ui&&x(F,Y),F.needsUpdate=!1}f=this.type,v.needsUpdate=!1,t.setRenderTarget(R,S,I)};function x(U,b){const Y=e.update(T);m.defines.VSM_SAMPLES!==U.blurSamples&&(m.defines.VSM_SAMPLES=U.blurSamples,_.defines.VSM_SAMPLES=U.blurSamples,m.needsUpdate=!0,_.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new eo(r.x,r.y)),m.uniforms.shadow_pass.value=U.map.texture,m.uniforms.resolution.value=U.mapSize,m.uniforms.radius.value=U.radius,t.setRenderTarget(U.mapPass),t.clear(),t.renderBufferDirect(b,null,Y,m,T,null),_.uniforms.shadow_pass.value=U.mapPass.texture,_.uniforms.resolution.value=U.mapSize,_.uniforms.radius.value=U.radius,t.setRenderTarget(U.map),t.clear(),t.renderBufferDirect(b,null,Y,_,T,null)}function y(U,b,Y,R){let S=null;const I=Y.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(I!==void 0)S=I;else if(S=Y.isPointLight===!0?u:a,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const $=S.uuid,re=b.uuid;let z=c[$];z===void 0&&(z={},c[$]=z);let K=z[re];K===void 0&&(K=S.clone(),z[re]=K,b.addEventListener("dispose",O)),S=K}if(S.visible=b.visible,S.wireframe=b.wireframe,R===Ui?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:p[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,Y.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const $=t.properties.get(S);$.light=Y}return S}function w(U,b,Y,R,S){if(U.visible===!1)return;if(U.layers.test(b.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&S===Ui)&&(!U.frustumCulled||i.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,U.matrixWorld);const re=e.update(U),z=U.material;if(Array.isArray(z)){const K=re.groups;for(let B=0,k=K.length;B<k;B++){const F=K[B],V=z[F.materialIndex];if(V&&V.visible){const W=y(U,V,R,S);U.onBeforeShadow(t,U,b,Y,re,W,F),t.renderBufferDirect(Y,null,re,W,U,F),U.onAfterShadow(t,U,b,Y,re,W,F)}}}else if(z.visible){const K=y(U,z,R,S);U.onBeforeShadow(t,U,b,Y,re,K,null),t.renderBufferDirect(Y,null,re,K,U,null),U.onAfterShadow(t,U,b,Y,re,K,null)}}const $=U.children;for(let re=0,z=$.length;re<z;re++)w($[re],b,Y,R,S)}function O(U){U.target.removeEventListener("dispose",O);for(const Y in c){const R=c[Y],S=U.target.uuid;S in R&&(R[S].dispose(),delete R[S])}}}function Bw(t,e,n){const i=n.isWebGL2;function r(){let H=!1;const Ee=new rn;let Se=null;const Ge=new rn(0,0,0,0);return{setMask:function(Fe){Se!==Fe&&!H&&(t.colorMask(Fe,Fe,Fe,Fe),Se=Fe)},setLocked:function(Fe){H=Fe},setClear:function(Fe,dt,pt,bt,zt){zt===!0&&(Fe*=bt,dt*=bt,pt*=bt),Ee.set(Fe,dt,pt,bt),Ge.equals(Ee)===!1&&(t.clearColor(Fe,dt,pt,bt),Ge.copy(Ee))},reset:function(){H=!1,Se=null,Ge.set(-1,0,0,0)}}}function o(){let H=!1,Ee=null,Se=null,Ge=null;return{setTest:function(Fe){Fe?Ie(t.DEPTH_TEST):Ce(t.DEPTH_TEST)},setMask:function(Fe){Ee!==Fe&&!H&&(t.depthMask(Fe),Ee=Fe)},setFunc:function(Fe){if(Se!==Fe){switch(Fe){case sS:t.depthFunc(t.NEVER);break;case aS:t.depthFunc(t.ALWAYS);break;case lS:t.depthFunc(t.LESS);break;case nu:t.depthFunc(t.LEQUAL);break;case uS:t.depthFunc(t.EQUAL);break;case cS:t.depthFunc(t.GEQUAL);break;case fS:t.depthFunc(t.GREATER);break;case dS:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Se=Fe}},setLocked:function(Fe){H=Fe},setClear:function(Fe){Ge!==Fe&&(t.clearDepth(Fe),Ge=Fe)},reset:function(){H=!1,Ee=null,Se=null,Ge=null}}}function s(){let H=!1,Ee=null,Se=null,Ge=null,Fe=null,dt=null,pt=null,bt=null,zt=null;return{setTest:function(gt){H||(gt?Ie(t.STENCIL_TEST):Ce(t.STENCIL_TEST))},setMask:function(gt){Ee!==gt&&!H&&(t.stencilMask(gt),Ee=gt)},setFunc:function(gt,Ft,Vn){(Se!==gt||Ge!==Ft||Fe!==Vn)&&(t.stencilFunc(gt,Ft,Vn),Se=gt,Ge=Ft,Fe=Vn)},setOp:function(gt,Ft,Vn){(dt!==gt||pt!==Ft||bt!==Vn)&&(t.stencilOp(gt,Ft,Vn),dt=gt,pt=Ft,bt=Vn)},setLocked:function(gt){H=gt},setClear:function(gt){zt!==gt&&(t.clearStencil(gt),zt=gt)},reset:function(){H=!1,Ee=null,Se=null,Ge=null,Fe=null,dt=null,pt=null,bt=null,zt=null}}}const a=new r,u=new o,c=new s,h=new WeakMap,p=new WeakMap;let m={},_={},M=new WeakMap,T=[],v=null,f=!1,x=null,y=null,w=null,O=null,U=null,b=null,Y=null,R=new ft(0,0,0),S=0,I=!1,$=null,re=null,z=null,K=null,B=null;const k=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,V=0;const W=t.getParameter(t.VERSION);W.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(W)[1]),F=V>=1):W.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),F=V>=2);let Z=null,Q={};const q=t.getParameter(t.SCISSOR_BOX),se=t.getParameter(t.VIEWPORT),ae=new rn().fromArray(q),ge=new rn().fromArray(se);function me(H,Ee,Se,Ge){const Fe=new Uint8Array(4),dt=t.createTexture();t.bindTexture(H,dt),t.texParameteri(H,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(H,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let pt=0;pt<Se;pt++)i&&(H===t.TEXTURE_3D||H===t.TEXTURE_2D_ARRAY)?t.texImage3D(Ee,0,t.RGBA,1,1,Ge,0,t.RGBA,t.UNSIGNED_BYTE,Fe):t.texImage2D(Ee+pt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Fe);return dt}const Ne={};Ne[t.TEXTURE_2D]=me(t.TEXTURE_2D,t.TEXTURE_2D,1),Ne[t.TEXTURE_CUBE_MAP]=me(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ne[t.TEXTURE_2D_ARRAY]=me(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ne[t.TEXTURE_3D]=me(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),u.setClear(1),c.setClear(0),Ie(t.DEPTH_TEST),u.setFunc(nu),Ze(!1),P(Sp),Ie(t.CULL_FACE),Ue(yr);function Ie(H){m[H]!==!0&&(t.enable(H),m[H]=!0)}function Ce(H){m[H]!==!1&&(t.disable(H),m[H]=!1)}function De(H,Ee){return _[H]!==Ee?(t.bindFramebuffer(H,Ee),_[H]=Ee,i&&(H===t.DRAW_FRAMEBUFFER&&(_[t.FRAMEBUFFER]=Ee),H===t.FRAMEBUFFER&&(_[t.DRAW_FRAMEBUFFER]=Ee)),!0):!1}function X(H,Ee){let Se=T,Ge=!1;if(H)if(Se=M.get(Ee),Se===void 0&&(Se=[],M.set(Ee,Se)),H.isWebGLMultipleRenderTargets){const Fe=H.texture;if(Se.length!==Fe.length||Se[0]!==t.COLOR_ATTACHMENT0){for(let dt=0,pt=Fe.length;dt<pt;dt++)Se[dt]=t.COLOR_ATTACHMENT0+dt;Se.length=Fe.length,Ge=!0}}else Se[0]!==t.COLOR_ATTACHMENT0&&(Se[0]=t.COLOR_ATTACHMENT0,Ge=!0);else Se[0]!==t.BACK&&(Se[0]=t.BACK,Ge=!0);Ge&&(n.isWebGL2?t.drawBuffers(Se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Se))}function Pe(H){return v!==H?(t.useProgram(H),v=H,!0):!1}const we={[Or]:t.FUNC_ADD,[Xx]:t.FUNC_SUBTRACT,[jx]:t.FUNC_REVERSE_SUBTRACT};if(i)we[Tp]=t.MIN,we[wp]=t.MAX;else{const H=e.get("EXT_blend_minmax");H!==null&&(we[Tp]=H.MIN_EXT,we[wp]=H.MAX_EXT)}const je={[Yx]:t.ZERO,[qx]:t.ONE,[$x]:t.SRC_COLOR,[Df]:t.SRC_ALPHA,[tS]:t.SRC_ALPHA_SATURATE,[Jx]:t.DST_COLOR,[Zx]:t.DST_ALPHA,[Kx]:t.ONE_MINUS_SRC_COLOR,[Uf]:t.ONE_MINUS_SRC_ALPHA,[eS]:t.ONE_MINUS_DST_COLOR,[Qx]:t.ONE_MINUS_DST_ALPHA,[nS]:t.CONSTANT_COLOR,[iS]:t.ONE_MINUS_CONSTANT_COLOR,[rS]:t.CONSTANT_ALPHA,[oS]:t.ONE_MINUS_CONSTANT_ALPHA};function Ue(H,Ee,Se,Ge,Fe,dt,pt,bt,zt,gt){if(H===yr){f===!0&&(Ce(t.BLEND),f=!1);return}if(f===!1&&(Ie(t.BLEND),f=!0),H!==Wx){if(H!==x||gt!==I){if((y!==Or||U!==Or)&&(t.blendEquation(t.FUNC_ADD),y=Or,U=Or),gt)switch(H){case Xr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Vo:t.blendFunc(t.ONE,t.ONE);break;case Ep:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Mp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Xr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Vo:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Ep:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Mp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}w=null,O=null,b=null,Y=null,R.set(0,0,0),S=0,x=H,I=gt}return}Fe=Fe||Ee,dt=dt||Se,pt=pt||Ge,(Ee!==y||Fe!==U)&&(t.blendEquationSeparate(we[Ee],we[Fe]),y=Ee,U=Fe),(Se!==w||Ge!==O||dt!==b||pt!==Y)&&(t.blendFuncSeparate(je[Se],je[Ge],je[dt],je[pt]),w=Se,O=Ge,b=dt,Y=pt),(bt.equals(R)===!1||zt!==S)&&(t.blendColor(bt.r,bt.g,bt.b,zt),R.copy(bt),S=zt),x=H,I=!1}function ht(H,Ee){H.side===Mi?Ce(t.CULL_FACE):Ie(t.CULL_FACE);let Se=H.side===Dn;Ee&&(Se=!Se),Ze(Se),H.blending===Xr&&H.transparent===!1?Ue(yr):Ue(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),u.setFunc(H.depthFunc),u.setTest(H.depthTest),u.setMask(H.depthWrite),a.setMask(H.colorWrite);const Ge=H.stencilWrite;c.setTest(Ge),Ge&&(c.setMask(H.stencilWriteMask),c.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),c.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),ee(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?Ie(t.SAMPLE_ALPHA_TO_COVERAGE):Ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(H){$!==H&&(H?t.frontFace(t.CW):t.frontFace(t.CCW),$=H)}function P(H){H!==Hx?(Ie(t.CULL_FACE),H!==re&&(H===Sp?t.cullFace(t.BACK):H===Gx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ce(t.CULL_FACE),re=H}function A(H){H!==z&&(F&&t.lineWidth(H),z=H)}function ee(H,Ee,Se){H?(Ie(t.POLYGON_OFFSET_FILL),(K!==Ee||B!==Se)&&(t.polygonOffset(Ee,Se),K=Ee,B=Se)):Ce(t.POLYGON_OFFSET_FILL)}function de(H){H?Ie(t.SCISSOR_TEST):Ce(t.SCISSOR_TEST)}function ue(H){H===void 0&&(H=t.TEXTURE0+k-1),Z!==H&&(t.activeTexture(H),Z=H)}function le(H,Ee,Se){Se===void 0&&(Z===null?Se=t.TEXTURE0+k-1:Se=Z);let Ge=Q[Se];Ge===void 0&&(Ge={type:void 0,texture:void 0},Q[Se]=Ge),(Ge.type!==H||Ge.texture!==Ee)&&(Z!==Se&&(t.activeTexture(Se),Z=Se),t.bindTexture(H,Ee||Ne[H]),Ge.type=H,Ge.texture=Ee)}function be(){const H=Q[Z];H!==void 0&&H.type!==void 0&&(t.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function ve(){try{t.compressedTexImage2D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Te(){try{t.compressedTexImage3D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Be(){try{t.texSubImage2D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ye(){try{t.texSubImage3D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ce(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ct(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function et(){try{t.texStorage2D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function He(){try{t.texStorage3D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ke(){try{t.texImage2D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Le(){try{t.texImage3D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Je(H){ae.equals(H)===!1&&(t.scissor(H.x,H.y,H.z,H.w),ae.copy(H))}function at(H){ge.equals(H)===!1&&(t.viewport(H.x,H.y,H.z,H.w),ge.copy(H))}function xt(H,Ee){let Se=p.get(Ee);Se===void 0&&(Se=new WeakMap,p.set(Ee,Se));let Ge=Se.get(H);Ge===void 0&&(Ge=t.getUniformBlockIndex(Ee,H.name),Se.set(H,Ge))}function qe(H,Ee){const Ge=p.get(Ee).get(H);h.get(Ee)!==Ge&&(t.uniformBlockBinding(Ee,Ge,H.__bindingPointIndex),h.set(Ee,Ge))}function pe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),m={},Z=null,Q={},_={},M=new WeakMap,T=[],v=null,f=!1,x=null,y=null,w=null,O=null,U=null,b=null,Y=null,R=new ft(0,0,0),S=0,I=!1,$=null,re=null,z=null,K=null,B=null,ae.set(0,0,t.canvas.width,t.canvas.height),ge.set(0,0,t.canvas.width,t.canvas.height),a.reset(),u.reset(),c.reset()}return{buffers:{color:a,depth:u,stencil:c},enable:Ie,disable:Ce,bindFramebuffer:De,drawBuffers:X,useProgram:Pe,setBlending:Ue,setMaterial:ht,setFlipSided:Ze,setCullFace:P,setLineWidth:A,setPolygonOffset:ee,setScissorTest:de,activeTexture:ue,bindTexture:le,unbindTexture:be,compressedTexImage2D:ve,compressedTexImage3D:Te,texImage2D:ke,texImage3D:Le,updateUBOMapping:xt,uniformBlockBinding:qe,texStorage2D:et,texStorage3D:He,texSubImage2D:Be,texSubImage3D:Ye,compressedTexSubImage2D:ce,compressedTexSubImage3D:ct,scissor:Je,viewport:at,reset:pe}}function Hw(t,e,n,i,r,o,s){const a=r.isWebGL2,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let p;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(P,A){return _?new OffscreenCanvas(P,A):ha("canvas")}function T(P,A,ee,de){let ue=1;if((P.width>de||P.height>de)&&(ue=de/Math.max(P.width,P.height)),ue<1||A===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const le=A?Bf:Math.floor,be=le(ue*P.width),ve=le(ue*P.height);p===void 0&&(p=M(be,ve));const Te=ee?M(be,ve):p;return Te.width=be,Te.height=ve,Te.getContext("2d").drawImage(P,0,0,be,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+be+"x"+ve+")."),Te}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function v(P){return tm(P.width)&&tm(P.height)}function f(P){return a?!1:P.wrapS!==di||P.wrapT!==di||P.minFilter!==_n&&P.minFilter!==Kn}function x(P,A){return P.generateMipmaps&&A&&P.minFilter!==_n&&P.minFilter!==Kn}function y(P){t.generateMipmap(P)}function w(P,A,ee,de,ue=!1){if(a===!1)return A;if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let le=A;if(A===t.RED&&(ee===t.FLOAT&&(le=t.R32F),ee===t.HALF_FLOAT&&(le=t.R16F),ee===t.UNSIGNED_BYTE&&(le=t.R8)),A===t.RED_INTEGER&&(ee===t.UNSIGNED_BYTE&&(le=t.R8UI),ee===t.UNSIGNED_SHORT&&(le=t.R16UI),ee===t.UNSIGNED_INT&&(le=t.R32UI),ee===t.BYTE&&(le=t.R8I),ee===t.SHORT&&(le=t.R16I),ee===t.INT&&(le=t.R32I)),A===t.RG&&(ee===t.FLOAT&&(le=t.RG32F),ee===t.HALF_FLOAT&&(le=t.RG16F),ee===t.UNSIGNED_BYTE&&(le=t.RG8)),A===t.RGBA){const be=ue?iu:_t.getTransfer(de);ee===t.FLOAT&&(le=t.RGBA32F),ee===t.HALF_FLOAT&&(le=t.RGBA16F),ee===t.UNSIGNED_BYTE&&(le=be===Rt?t.SRGB8_ALPHA8:t.RGBA8),ee===t.UNSIGNED_SHORT_4_4_4_4&&(le=t.RGBA4),ee===t.UNSIGNED_SHORT_5_5_5_1&&(le=t.RGB5_A1)}return(le===t.R16F||le===t.R32F||le===t.RG16F||le===t.RG32F||le===t.RGBA16F||le===t.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function O(P,A,ee){return x(P,ee)===!0||P.isFramebufferTexture&&P.minFilter!==_n&&P.minFilter!==Kn?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function U(P){return P===_n||P===Ap||P===ac?t.NEAREST:t.LINEAR}function b(P){const A=P.target;A.removeEventListener("dispose",b),R(A),A.isVideoTexture&&h.delete(A)}function Y(P){const A=P.target;A.removeEventListener("dispose",Y),I(A)}function R(P){const A=i.get(P);if(A.__webglInit===void 0)return;const ee=P.source,de=m.get(ee);if(de){const ue=de[A.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&S(P),Object.keys(de).length===0&&m.delete(ee)}i.remove(P)}function S(P){const A=i.get(P);t.deleteTexture(A.__webglTexture);const ee=P.source,de=m.get(ee);delete de[A.__cacheKey],s.memory.textures--}function I(P){const A=P.texture,ee=i.get(P),de=i.get(A);if(de.__webglTexture!==void 0&&(t.deleteTexture(de.__webglTexture),s.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(ee.__webglFramebuffer[ue]))for(let le=0;le<ee.__webglFramebuffer[ue].length;le++)t.deleteFramebuffer(ee.__webglFramebuffer[ue][le]);else t.deleteFramebuffer(ee.__webglFramebuffer[ue]);ee.__webglDepthbuffer&&t.deleteRenderbuffer(ee.__webglDepthbuffer[ue])}else{if(Array.isArray(ee.__webglFramebuffer))for(let ue=0;ue<ee.__webglFramebuffer.length;ue++)t.deleteFramebuffer(ee.__webglFramebuffer[ue]);else t.deleteFramebuffer(ee.__webglFramebuffer);if(ee.__webglDepthbuffer&&t.deleteRenderbuffer(ee.__webglDepthbuffer),ee.__webglMultisampledFramebuffer&&t.deleteFramebuffer(ee.__webglMultisampledFramebuffer),ee.__webglColorRenderbuffer)for(let ue=0;ue<ee.__webglColorRenderbuffer.length;ue++)ee.__webglColorRenderbuffer[ue]&&t.deleteRenderbuffer(ee.__webglColorRenderbuffer[ue]);ee.__webglDepthRenderbuffer&&t.deleteRenderbuffer(ee.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let ue=0,le=A.length;ue<le;ue++){const be=i.get(A[ue]);be.__webglTexture&&(t.deleteTexture(be.__webglTexture),s.memory.textures--),i.remove(A[ue])}i.remove(A),i.remove(P)}let $=0;function re(){$=0}function z(){const P=$;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),$+=1,P}function K(P){const A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function B(P,A){const ee=i.get(P);if(P.isVideoTexture&&ht(P),P.isRenderTargetTexture===!1&&P.version>0&&ee.__version!==P.version){const de=P.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(ee,P,A);return}}n.bindTexture(t.TEXTURE_2D,ee.__webglTexture,t.TEXTURE0+A)}function k(P,A){const ee=i.get(P);if(P.version>0&&ee.__version!==P.version){ae(ee,P,A);return}n.bindTexture(t.TEXTURE_2D_ARRAY,ee.__webglTexture,t.TEXTURE0+A)}function F(P,A){const ee=i.get(P);if(P.version>0&&ee.__version!==P.version){ae(ee,P,A);return}n.bindTexture(t.TEXTURE_3D,ee.__webglTexture,t.TEXTURE0+A)}function V(P,A){const ee=i.get(P);if(P.version>0&&ee.__version!==P.version){ge(ee,P,A);return}n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture,t.TEXTURE0+A)}const W={[Ff]:t.REPEAT,[di]:t.CLAMP_TO_EDGE,[Of]:t.MIRRORED_REPEAT},Z={[_n]:t.NEAREST,[Ap]:t.NEAREST_MIPMAP_NEAREST,[ac]:t.NEAREST_MIPMAP_LINEAR,[Kn]:t.LINEAR,[SS]:t.LINEAR_MIPMAP_NEAREST,[fa]:t.LINEAR_MIPMAP_LINEAR},Q={[NS]:t.NEVER,[BS]:t.ALWAYS,[IS]:t.LESS,[p_]:t.LEQUAL,[FS]:t.EQUAL,[zS]:t.GEQUAL,[OS]:t.GREATER,[kS]:t.NOTEQUAL};function q(P,A,ee){if(ee?(t.texParameteri(P,t.TEXTURE_WRAP_S,W[A.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,W[A.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,W[A.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,Z[A.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,Z[A.minFilter])):(t.texParameteri(P,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(P,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(A.wrapS!==di||A.wrapT!==di)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(P,t.TEXTURE_MAG_FILTER,U(A.magFilter)),t.texParameteri(P,t.TEXTURE_MIN_FILTER,U(A.minFilter)),A.minFilter!==_n&&A.minFilter!==Kn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,Q[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const de=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===_n||A.minFilter!==ac&&A.minFilter!==fa||A.type===cr&&e.has("OES_texture_float_linear")===!1||a===!1&&A.type===da&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||i.get(A).__currentAnisotropy)&&(t.texParameterf(P,de.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy)}}function se(P,A){let ee=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",b));const de=A.source;let ue=m.get(de);ue===void 0&&(ue={},m.set(de,ue));const le=K(A);if(le!==P.__cacheKey){ue[le]===void 0&&(ue[le]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,ee=!0),ue[le].usedTimes++;const be=ue[P.__cacheKey];be!==void 0&&(ue[P.__cacheKey].usedTimes--,be.usedTimes===0&&S(A)),P.__cacheKey=le,P.__webglTexture=ue[le].texture}return ee}function ae(P,A,ee){let de=t.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(de=t.TEXTURE_2D_ARRAY),A.isData3DTexture&&(de=t.TEXTURE_3D);const ue=se(P,A),le=A.source;n.bindTexture(de,P.__webglTexture,t.TEXTURE0+ee);const be=i.get(le);if(le.version!==be.__version||ue===!0){n.activeTexture(t.TEXTURE0+ee);const ve=_t.getPrimaries(_t.workingColorSpace),Te=A.colorSpace===Qn?null:_t.getPrimaries(A.colorSpace),Be=A.colorSpace===Qn||ve===Te?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);const Ye=f(A)&&v(A.image)===!1;let ce=T(A.image,Ye,!1,r.maxTextureSize);ce=Ze(A,ce);const ct=v(ce)||a,et=o.convert(A.format,A.colorSpace);let He=o.convert(A.type),ke=w(A.internalFormat,et,He,A.colorSpace,A.isVideoTexture);q(de,A,ct);let Le;const Je=A.mipmaps,at=a&&A.isVideoTexture!==!0&&ke!==d_,xt=be.__version===void 0||ue===!0,qe=O(A,ce,ct);if(A.isDepthTexture)ke=t.DEPTH_COMPONENT,a?A.type===cr?ke=t.DEPTH_COMPONENT32F:A.type===ur?ke=t.DEPTH_COMPONENT24:A.type===jr?ke=t.DEPTH24_STENCIL8:ke=t.DEPTH_COMPONENT16:A.type===cr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Yr&&ke===t.DEPTH_COMPONENT&&A.type!==kd&&A.type!==ur&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=ur,He=o.convert(A.type)),A.format===us&&ke===t.DEPTH_COMPONENT&&(ke=t.DEPTH_STENCIL,A.type!==jr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=jr,He=o.convert(A.type))),xt&&(at?n.texStorage2D(t.TEXTURE_2D,1,ke,ce.width,ce.height):n.texImage2D(t.TEXTURE_2D,0,ke,ce.width,ce.height,0,et,He,null));else if(A.isDataTexture)if(Je.length>0&&ct){at&&xt&&n.texStorage2D(t.TEXTURE_2D,qe,ke,Je[0].width,Je[0].height);for(let pe=0,H=Je.length;pe<H;pe++)Le=Je[pe],at?n.texSubImage2D(t.TEXTURE_2D,pe,0,0,Le.width,Le.height,et,He,Le.data):n.texImage2D(t.TEXTURE_2D,pe,ke,Le.width,Le.height,0,et,He,Le.data);A.generateMipmaps=!1}else at?(xt&&n.texStorage2D(t.TEXTURE_2D,qe,ke,ce.width,ce.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ce.width,ce.height,et,He,ce.data)):n.texImage2D(t.TEXTURE_2D,0,ke,ce.width,ce.height,0,et,He,ce.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){at&&xt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,qe,ke,Je[0].width,Je[0].height,ce.depth);for(let pe=0,H=Je.length;pe<H;pe++)Le=Je[pe],A.format!==hi?et!==null?at?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,pe,0,0,0,Le.width,Le.height,ce.depth,et,Le.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,pe,ke,Le.width,Le.height,ce.depth,0,Le.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?n.texSubImage3D(t.TEXTURE_2D_ARRAY,pe,0,0,0,Le.width,Le.height,ce.depth,et,He,Le.data):n.texImage3D(t.TEXTURE_2D_ARRAY,pe,ke,Le.width,Le.height,ce.depth,0,et,He,Le.data)}else{at&&xt&&n.texStorage2D(t.TEXTURE_2D,qe,ke,Je[0].width,Je[0].height);for(let pe=0,H=Je.length;pe<H;pe++)Le=Je[pe],A.format!==hi?et!==null?at?n.compressedTexSubImage2D(t.TEXTURE_2D,pe,0,0,Le.width,Le.height,et,Le.data):n.compressedTexImage2D(t.TEXTURE_2D,pe,ke,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?n.texSubImage2D(t.TEXTURE_2D,pe,0,0,Le.width,Le.height,et,He,Le.data):n.texImage2D(t.TEXTURE_2D,pe,ke,Le.width,Le.height,0,et,He,Le.data)}else if(A.isDataArrayTexture)at?(xt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,qe,ke,ce.width,ce.height,ce.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,et,He,ce.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,ke,ce.width,ce.height,ce.depth,0,et,He,ce.data);else if(A.isData3DTexture)at?(xt&&n.texStorage3D(t.TEXTURE_3D,qe,ke,ce.width,ce.height,ce.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,et,He,ce.data)):n.texImage3D(t.TEXTURE_3D,0,ke,ce.width,ce.height,ce.depth,0,et,He,ce.data);else if(A.isFramebufferTexture){if(xt)if(at)n.texStorage2D(t.TEXTURE_2D,qe,ke,ce.width,ce.height);else{let pe=ce.width,H=ce.height;for(let Ee=0;Ee<qe;Ee++)n.texImage2D(t.TEXTURE_2D,Ee,ke,pe,H,0,et,He,null),pe>>=1,H>>=1}}else if(Je.length>0&&ct){at&&xt&&n.texStorage2D(t.TEXTURE_2D,qe,ke,Je[0].width,Je[0].height);for(let pe=0,H=Je.length;pe<H;pe++)Le=Je[pe],at?n.texSubImage2D(t.TEXTURE_2D,pe,0,0,et,He,Le):n.texImage2D(t.TEXTURE_2D,pe,ke,et,He,Le);A.generateMipmaps=!1}else at?(xt&&n.texStorage2D(t.TEXTURE_2D,qe,ke,ce.width,ce.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,et,He,ce)):n.texImage2D(t.TEXTURE_2D,0,ke,et,He,ce);x(A,ct)&&y(de),be.__version=le.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function ge(P,A,ee){if(A.image.length!==6)return;const de=se(P,A),ue=A.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+ee);const le=i.get(ue);if(ue.version!==le.__version||de===!0){n.activeTexture(t.TEXTURE0+ee);const be=_t.getPrimaries(_t.workingColorSpace),ve=A.colorSpace===Qn?null:_t.getPrimaries(A.colorSpace),Te=A.colorSpace===Qn||be===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Be=A.isCompressedTexture||A.image[0].isCompressedTexture,Ye=A.image[0]&&A.image[0].isDataTexture,ce=[];for(let pe=0;pe<6;pe++)!Be&&!Ye?ce[pe]=T(A.image[pe],!1,!0,r.maxCubemapSize):ce[pe]=Ye?A.image[pe].image:A.image[pe],ce[pe]=Ze(A,ce[pe]);const ct=ce[0],et=v(ct)||a,He=o.convert(A.format,A.colorSpace),ke=o.convert(A.type),Le=w(A.internalFormat,He,ke,A.colorSpace),Je=a&&A.isVideoTexture!==!0,at=le.__version===void 0||de===!0;let xt=O(A,ct,et);q(t.TEXTURE_CUBE_MAP,A,et);let qe;if(Be){Je&&at&&n.texStorage2D(t.TEXTURE_CUBE_MAP,xt,Le,ct.width,ct.height);for(let pe=0;pe<6;pe++){qe=ce[pe].mipmaps;for(let H=0;H<qe.length;H++){const Ee=qe[H];A.format!==hi?He!==null?Je?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,H,0,0,Ee.width,Ee.height,He,Ee.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,H,Le,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Je?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,H,0,0,Ee.width,Ee.height,He,ke,Ee.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,H,Le,Ee.width,Ee.height,0,He,ke,Ee.data)}}}else{qe=A.mipmaps,Je&&at&&(qe.length>0&&xt++,n.texStorage2D(t.TEXTURE_CUBE_MAP,xt,Le,ce[0].width,ce[0].height));for(let pe=0;pe<6;pe++)if(Ye){Je?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ce[pe].width,ce[pe].height,He,ke,ce[pe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Le,ce[pe].width,ce[pe].height,0,He,ke,ce[pe].data);for(let H=0;H<qe.length;H++){const Se=qe[H].image[pe].image;Je?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,H+1,0,0,Se.width,Se.height,He,ke,Se.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,H+1,Le,Se.width,Se.height,0,He,ke,Se.data)}}else{Je?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,He,ke,ce[pe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Le,He,ke,ce[pe]);for(let H=0;H<qe.length;H++){const Ee=qe[H];Je?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,H+1,0,0,He,ke,Ee.image[pe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,H+1,Le,He,ke,Ee.image[pe])}}}x(A,et)&&y(t.TEXTURE_CUBE_MAP),le.__version=ue.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function me(P,A,ee,de,ue,le){const be=o.convert(ee.format,ee.colorSpace),ve=o.convert(ee.type),Te=w(ee.internalFormat,be,ve,ee.colorSpace);if(!i.get(A).__hasExternalTextures){const Ye=Math.max(1,A.width>>le),ce=Math.max(1,A.height>>le);ue===t.TEXTURE_3D||ue===t.TEXTURE_2D_ARRAY?n.texImage3D(ue,le,Te,Ye,ce,A.depth,0,be,ve,null):n.texImage2D(ue,le,Te,Ye,ce,0,be,ve,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),Ue(A)?u.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,de,ue,i.get(ee).__webglTexture,0,je(A)):(ue===t.TEXTURE_2D||ue>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,de,ue,i.get(ee).__webglTexture,le),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ne(P,A,ee){if(t.bindRenderbuffer(t.RENDERBUFFER,P),A.depthBuffer&&!A.stencilBuffer){let de=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(ee||Ue(A)){const ue=A.depthTexture;ue&&ue.isDepthTexture&&(ue.type===cr?de=t.DEPTH_COMPONENT32F:ue.type===ur&&(de=t.DEPTH_COMPONENT24));const le=je(A);Ue(A)?u.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,de,A.width,A.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,le,de,A.width,A.height)}else t.renderbufferStorage(t.RENDERBUFFER,de,A.width,A.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,P)}else if(A.depthBuffer&&A.stencilBuffer){const de=je(A);ee&&Ue(A)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,de,t.DEPTH24_STENCIL8,A.width,A.height):Ue(A)?u.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,de,t.DEPTH24_STENCIL8,A.width,A.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,P)}else{const de=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ue=0;ue<de.length;ue++){const le=de[ue],be=o.convert(le.format,le.colorSpace),ve=o.convert(le.type),Te=w(le.internalFormat,be,ve,le.colorSpace),Be=je(A);ee&&Ue(A)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Be,Te,A.width,A.height):Ue(A)?u.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Be,Te,A.width,A.height):t.renderbufferStorage(t.RENDERBUFFER,Te,A.width,A.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ie(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),B(A.depthTexture,0);const de=i.get(A.depthTexture).__webglTexture,ue=je(A);if(A.depthTexture.format===Yr)Ue(A)?u.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,de,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,de,0);else if(A.depthTexture.format===us)Ue(A)?u.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,de,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function Ce(P){const A=i.get(P),ee=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");Ie(A.__webglFramebuffer,P)}else if(ee){A.__webglDepthbuffer=[];for(let de=0;de<6;de++)n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer[de]),A.__webglDepthbuffer[de]=t.createRenderbuffer(),Ne(A.__webglDepthbuffer[de],P,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=t.createRenderbuffer(),Ne(A.__webglDepthbuffer,P,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function De(P,A,ee){const de=i.get(P);A!==void 0&&me(de.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),ee!==void 0&&Ce(P)}function X(P){const A=P.texture,ee=i.get(P),de=i.get(A);P.addEventListener("dispose",Y),P.isWebGLMultipleRenderTargets!==!0&&(de.__webglTexture===void 0&&(de.__webglTexture=t.createTexture()),de.__version=A.version,s.memory.textures++);const ue=P.isWebGLCubeRenderTarget===!0,le=P.isWebGLMultipleRenderTargets===!0,be=v(P)||a;if(ue){ee.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(a&&A.mipmaps&&A.mipmaps.length>0){ee.__webglFramebuffer[ve]=[];for(let Te=0;Te<A.mipmaps.length;Te++)ee.__webglFramebuffer[ve][Te]=t.createFramebuffer()}else ee.__webglFramebuffer[ve]=t.createFramebuffer()}else{if(a&&A.mipmaps&&A.mipmaps.length>0){ee.__webglFramebuffer=[];for(let ve=0;ve<A.mipmaps.length;ve++)ee.__webglFramebuffer[ve]=t.createFramebuffer()}else ee.__webglFramebuffer=t.createFramebuffer();if(le)if(r.drawBuffers){const ve=P.texture;for(let Te=0,Be=ve.length;Te<Be;Te++){const Ye=i.get(ve[Te]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=t.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&Ue(P)===!1){const ve=le?A:[A];ee.__webglMultisampledFramebuffer=t.createFramebuffer(),ee.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let Te=0;Te<ve.length;Te++){const Be=ve[Te];ee.__webglColorRenderbuffer[Te]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,ee.__webglColorRenderbuffer[Te]);const Ye=o.convert(Be.format,Be.colorSpace),ce=o.convert(Be.type),ct=w(Be.internalFormat,Ye,ce,Be.colorSpace,P.isXRRenderTarget===!0),et=je(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,et,ct,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.RENDERBUFFER,ee.__webglColorRenderbuffer[Te])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(ee.__webglDepthRenderbuffer=t.createRenderbuffer(),Ne(ee.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ue){n.bindTexture(t.TEXTURE_CUBE_MAP,de.__webglTexture),q(t.TEXTURE_CUBE_MAP,A,be);for(let ve=0;ve<6;ve++)if(a&&A.mipmaps&&A.mipmaps.length>0)for(let Te=0;Te<A.mipmaps.length;Te++)me(ee.__webglFramebuffer[ve][Te],P,A,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Te);else me(ee.__webglFramebuffer[ve],P,A,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);x(A,be)&&y(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(le){const ve=P.texture;for(let Te=0,Be=ve.length;Te<Be;Te++){const Ye=ve[Te],ce=i.get(Ye);n.bindTexture(t.TEXTURE_2D,ce.__webglTexture),q(t.TEXTURE_2D,Ye,be),me(ee.__webglFramebuffer,P,Ye,t.COLOR_ATTACHMENT0+Te,t.TEXTURE_2D,0),x(Ye,be)&&y(t.TEXTURE_2D)}n.unbindTexture()}else{let ve=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?ve=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ve,de.__webglTexture),q(ve,A,be),a&&A.mipmaps&&A.mipmaps.length>0)for(let Te=0;Te<A.mipmaps.length;Te++)me(ee.__webglFramebuffer[Te],P,A,t.COLOR_ATTACHMENT0,ve,Te);else me(ee.__webglFramebuffer,P,A,t.COLOR_ATTACHMENT0,ve,0);x(A,be)&&y(ve),n.unbindTexture()}P.depthBuffer&&Ce(P)}function Pe(P){const A=v(P)||a,ee=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let de=0,ue=ee.length;de<ue;de++){const le=ee[de];if(x(le,A)){const be=P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ve=i.get(le).__webglTexture;n.bindTexture(be,ve),y(be),n.unbindTexture()}}}function we(P){if(a&&P.samples>0&&Ue(P)===!1){const A=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],ee=P.width,de=P.height;let ue=t.COLOR_BUFFER_BIT;const le=[],be=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ve=i.get(P),Te=P.isWebGLMultipleRenderTargets===!0;if(Te)for(let Be=0;Be<A.length;Be++)n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Be,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Be,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Be=0;Be<A.length;Be++){le.push(t.COLOR_ATTACHMENT0+Be),P.depthBuffer&&le.push(be);const Ye=ve.__ignoreDepthValues!==void 0?ve.__ignoreDepthValues:!1;if(Ye===!1&&(P.depthBuffer&&(ue|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&(ue|=t.STENCIL_BUFFER_BIT)),Te&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ve.__webglColorRenderbuffer[Be]),Ye===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[be]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[be])),Te){const ce=i.get(A[Be]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ce,0)}t.blitFramebuffer(0,0,ee,de,0,0,ee,de,ue,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,le)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Te)for(let Be=0;Be<A.length;Be++){n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Be,t.RENDERBUFFER,ve.__webglColorRenderbuffer[Be]);const Ye=i.get(A[Be]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Be,t.TEXTURE_2D,Ye,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}}function je(P){return Math.min(r.maxSamples,P.samples)}function Ue(P){const A=i.get(P);return a&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ht(P){const A=s.render.frame;h.get(P)!==A&&(h.set(P,A),P.update())}function Ze(P,A){const ee=P.colorSpace,de=P.format,ue=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===kf||ee!==Xi&&ee!==Qn&&(_t.getTransfer(ee)===Rt?a===!1?e.has("EXT_sRGB")===!0&&de===hi?(P.format=kf,P.minFilter=Kn,P.generateMipmaps=!1):A=g_.sRGBToLinear(A):(de!==hi||ue!==Sr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),A}this.allocateTextureUnit=z,this.resetTextureUnits=re,this.setTexture2D=B,this.setTexture2DArray=k,this.setTexture3D=F,this.setTextureCube=V,this.rebindTextures=De,this.setupRenderTarget=X,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Ue}function Gw(t,e,n){const i=n.isWebGL2;function r(o,s=Qn){let a;const u=_t.getTransfer(s);if(o===Sr)return t.UNSIGNED_BYTE;if(o===a_)return t.UNSIGNED_SHORT_4_4_4_4;if(o===l_)return t.UNSIGNED_SHORT_5_5_5_1;if(o===ES)return t.BYTE;if(o===MS)return t.SHORT;if(o===kd)return t.UNSIGNED_SHORT;if(o===s_)return t.INT;if(o===ur)return t.UNSIGNED_INT;if(o===cr)return t.FLOAT;if(o===da)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===TS)return t.ALPHA;if(o===hi)return t.RGBA;if(o===wS)return t.LUMINANCE;if(o===AS)return t.LUMINANCE_ALPHA;if(o===Yr)return t.DEPTH_COMPONENT;if(o===us)return t.DEPTH_STENCIL;if(o===kf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===RS)return t.RED;if(o===u_)return t.RED_INTEGER;if(o===CS)return t.RG;if(o===c_)return t.RG_INTEGER;if(o===f_)return t.RGBA_INTEGER;if(o===lc||o===uc||o===cc||o===fc)if(u===Rt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===lc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===uc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===cc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===fc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===lc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===uc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===cc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===fc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===Rp||o===Cp||o===Pp||o===Lp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===Rp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===Cp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===Pp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===Lp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===d_)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===bp||o===Dp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(o===bp)return u===Rt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===Dp)return u===Rt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===Up||o===Np||o===Ip||o===Fp||o===Op||o===kp||o===zp||o===Bp||o===Hp||o===Gp||o===Vp||o===Wp||o===Xp||o===jp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(o===Up)return u===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===Np)return u===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===Ip)return u===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===Fp)return u===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===Op)return u===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===kp)return u===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===zp)return u===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===Bp)return u===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===Hp)return u===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===Gp)return u===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===Vp)return u===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===Wp)return u===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===Xp)return u===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===jp)return u===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===dc||o===Yp||o===qp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(o===dc)return u===Rt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===Yp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===qp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===PS||o===$p||o===Kp||o===Zp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(o===dc)return a.COMPRESSED_RED_RGTC1_EXT;if(o===$p)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Kp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===Zp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===jr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[o]!==void 0?t[o]:null}return{convert:r}}class Vw extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ml extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ww={type:"move"};class Oc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ml,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ml,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ml,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,u=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const T of e.hand.values()){const v=n.getJointPose(T,i),f=this._getHandJoint(c,T);v!==null&&(f.matrix.fromArray(v.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=v.radius),f.visible=v!==null}const h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],m=h.position.distanceTo(p.position),_=.02,M=.005;c.inputState.pinching&&m>_+M?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&m<=_-M&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ww)))}return a!==null&&(a.visible=r!==null),u!==null&&(u.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ml;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Xw extends ps{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",u=1,c=null,h=null,p=null,m=null,_=null,M=null;const T=n.getContextAttributes();let v=null,f=null;const x=[],y=[],w=new yt;let O=null;const U=new Zn;U.layers.enable(1),U.viewport=new rn;const b=new Zn;b.layers.enable(2),b.viewport=new rn;const Y=[U,b],R=new Vw;R.layers.enable(1),R.layers.enable(2);let S=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let se=x[q];return se===void 0&&(se=new Oc,x[q]=se),se.getTargetRaySpace()},this.getControllerGrip=function(q){let se=x[q];return se===void 0&&(se=new Oc,x[q]=se),se.getGripSpace()},this.getHand=function(q){let se=x[q];return se===void 0&&(se=new Oc,x[q]=se),se.getHandSpace()};function $(q){const se=y.indexOf(q.inputSource);if(se===-1)return;const ae=x[se];ae!==void 0&&(ae.update(q.inputSource,q.frame,c||s),ae.dispatchEvent({type:q.type,data:q.inputSource}))}function re(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",re),r.removeEventListener("inputsourceschange",z);for(let q=0;q<x.length;q++){const se=y[q];se!==null&&(y[q]=null,x[q].disconnect(se))}S=null,I=null,e.setRenderTarget(v),_=null,m=null,p=null,r=null,f=null,Q.stop(),i.isPresenting=!1,e.setPixelRatio(O),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return m!==null?m:_},this.getBinding=function(){return p},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",re),r.addEventListener("inputsourceschange",z),T.xrCompatible!==!0&&await n.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(w),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const se={antialias:r.renderState.layers===void 0?T.antialias:!0,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:o};_=new XRWebGLLayer(r,n,se),r.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),f=new eo(_.framebufferWidth,_.framebufferHeight,{format:hi,type:Sr,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil})}else{let se=null,ae=null,ge=null;T.depth&&(ge=T.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,se=T.stencil?us:Yr,ae=T.stencil?jr:ur);const me={colorFormat:n.RGBA8,depthFormat:ge,scaleFactor:o};p=new XRWebGLBinding(r,n),m=p.createProjectionLayer(me),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),f=new eo(m.textureWidth,m.textureHeight,{format:hi,type:Sr,depthTexture:new P_(m.textureWidth,m.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0});const Ne=e.properties.get(f);Ne.__ignoreDepthValues=m.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(u),c=null,s=await r.requestReferenceSpace(a),Q.setContext(r),Q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function z(q){for(let se=0;se<q.removed.length;se++){const ae=q.removed[se],ge=y.indexOf(ae);ge>=0&&(y[ge]=null,x[ge].disconnect(ae))}for(let se=0;se<q.added.length;se++){const ae=q.added[se];let ge=y.indexOf(ae);if(ge===-1){for(let Ne=0;Ne<x.length;Ne++)if(Ne>=y.length){y.push(ae),ge=Ne;break}else if(y[Ne]===null){y[Ne]=ae,ge=Ne;break}if(ge===-1)break}const me=x[ge];me&&me.connect(ae)}}const K=new J,B=new J;function k(q,se,ae){K.setFromMatrixPosition(se.matrixWorld),B.setFromMatrixPosition(ae.matrixWorld);const ge=K.distanceTo(B),me=se.projectionMatrix.elements,Ne=ae.projectionMatrix.elements,Ie=me[14]/(me[10]-1),Ce=me[14]/(me[10]+1),De=(me[9]+1)/me[5],X=(me[9]-1)/me[5],Pe=(me[8]-1)/me[0],we=(Ne[8]+1)/Ne[0],je=Ie*Pe,Ue=Ie*we,ht=ge/(-Pe+we),Ze=ht*-Pe;se.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ze),q.translateZ(ht),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const P=Ie+ht,A=Ce+ht,ee=je-Ze,de=Ue+(ge-Ze),ue=De*Ce/A*P,le=X*Ce/A*P;q.projectionMatrix.makePerspective(ee,de,ue,le,P,A),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function F(q,se){se===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(se.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;R.near=b.near=U.near=q.near,R.far=b.far=U.far=q.far,(S!==R.near||I!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),S=R.near,I=R.far);const se=q.parent,ae=R.cameras;F(R,se);for(let ge=0;ge<ae.length;ge++)F(ae[ge],se);ae.length===2?k(R,U,b):R.projectionMatrix.copy(U.projectionMatrix),V(q,R,se)};function V(q,se,ae){ae===null?q.matrix.copy(se.matrixWorld):(q.matrix.copy(ae.matrixWorld),q.matrix.invert(),q.matrix.multiply(se.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(se.projectionMatrix),q.projectionMatrixInverse.copy(se.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=zf*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(m===null&&_===null))return u},this.setFoveation=function(q){u=q,m!==null&&(m.fixedFoveation=q),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=q)};let W=null;function Z(q,se){if(h=se.getViewerPose(c||s),M=se,h!==null){const ae=h.views;_!==null&&(e.setRenderTargetFramebuffer(f,_.framebuffer),e.setRenderTarget(f));let ge=!1;ae.length!==R.cameras.length&&(R.cameras.length=0,ge=!0);for(let me=0;me<ae.length;me++){const Ne=ae[me];let Ie=null;if(_!==null)Ie=_.getViewport(Ne);else{const De=p.getViewSubImage(m,Ne);Ie=De.viewport,me===0&&(e.setRenderTargetTextures(f,De.colorTexture,m.ignoreDepthValues?void 0:De.depthStencilTexture),e.setRenderTarget(f))}let Ce=Y[me];Ce===void 0&&(Ce=new Zn,Ce.layers.enable(me),Ce.viewport=new rn,Y[me]=Ce),Ce.matrix.fromArray(Ne.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(Ne.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),me===0&&(R.matrix.copy(Ce.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ge===!0&&R.cameras.push(Ce)}}for(let ae=0;ae<x.length;ae++){const ge=y[ae],me=x[ae];ge!==null&&me!==void 0&&me.update(ge,se,c||s)}W&&W(q,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),M=null}const Q=new C_;Q.setAnimationLoop(Z),this.setAnimationLoop=function(q){W=q},this.dispose=function(){}}}function jw(t,e){function n(v,f){v.matrixAutoUpdate===!0&&v.updateMatrix(),f.value.copy(v.matrix)}function i(v,f){f.color.getRGB(v.fogColor.value,T_(t)),f.isFog?(v.fogNear.value=f.near,v.fogFar.value=f.far):f.isFogExp2&&(v.fogDensity.value=f.density)}function r(v,f,x,y,w){f.isMeshBasicMaterial||f.isMeshLambertMaterial?o(v,f):f.isMeshToonMaterial?(o(v,f),p(v,f)):f.isMeshPhongMaterial?(o(v,f),h(v,f)):f.isMeshStandardMaterial?(o(v,f),m(v,f),f.isMeshPhysicalMaterial&&_(v,f,w)):f.isMeshMatcapMaterial?(o(v,f),M(v,f)):f.isMeshDepthMaterial?o(v,f):f.isMeshDistanceMaterial?(o(v,f),T(v,f)):f.isMeshNormalMaterial?o(v,f):f.isLineBasicMaterial?(s(v,f),f.isLineDashedMaterial&&a(v,f)):f.isPointsMaterial?u(v,f,x,y):f.isSpriteMaterial?c(v,f):f.isShadowMaterial?(v.color.value.copy(f.color),v.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function o(v,f){v.opacity.value=f.opacity,f.color&&v.diffuse.value.copy(f.color),f.emissive&&v.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(v.map.value=f.map,n(f.map,v.mapTransform)),f.alphaMap&&(v.alphaMap.value=f.alphaMap,n(f.alphaMap,v.alphaMapTransform)),f.bumpMap&&(v.bumpMap.value=f.bumpMap,n(f.bumpMap,v.bumpMapTransform),v.bumpScale.value=f.bumpScale,f.side===Dn&&(v.bumpScale.value*=-1)),f.normalMap&&(v.normalMap.value=f.normalMap,n(f.normalMap,v.normalMapTransform),v.normalScale.value.copy(f.normalScale),f.side===Dn&&v.normalScale.value.negate()),f.displacementMap&&(v.displacementMap.value=f.displacementMap,n(f.displacementMap,v.displacementMapTransform),v.displacementScale.value=f.displacementScale,v.displacementBias.value=f.displacementBias),f.emissiveMap&&(v.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,v.emissiveMapTransform)),f.specularMap&&(v.specularMap.value=f.specularMap,n(f.specularMap,v.specularMapTransform)),f.alphaTest>0&&(v.alphaTest.value=f.alphaTest);const x=e.get(f).envMap;if(x&&(v.envMap.value=x,v.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=f.reflectivity,v.ior.value=f.ior,v.refractionRatio.value=f.refractionRatio),f.lightMap){v.lightMap.value=f.lightMap;const y=t._useLegacyLights===!0?Math.PI:1;v.lightMapIntensity.value=f.lightMapIntensity*y,n(f.lightMap,v.lightMapTransform)}f.aoMap&&(v.aoMap.value=f.aoMap,v.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,v.aoMapTransform))}function s(v,f){v.diffuse.value.copy(f.color),v.opacity.value=f.opacity,f.map&&(v.map.value=f.map,n(f.map,v.mapTransform))}function a(v,f){v.dashSize.value=f.dashSize,v.totalSize.value=f.dashSize+f.gapSize,v.scale.value=f.scale}function u(v,f,x,y){v.diffuse.value.copy(f.color),v.opacity.value=f.opacity,v.size.value=f.size*x,v.scale.value=y*.5,f.map&&(v.map.value=f.map,n(f.map,v.uvTransform)),f.alphaMap&&(v.alphaMap.value=f.alphaMap,n(f.alphaMap,v.alphaMapTransform)),f.alphaTest>0&&(v.alphaTest.value=f.alphaTest)}function c(v,f){v.diffuse.value.copy(f.color),v.opacity.value=f.opacity,v.rotation.value=f.rotation,f.map&&(v.map.value=f.map,n(f.map,v.mapTransform)),f.alphaMap&&(v.alphaMap.value=f.alphaMap,n(f.alphaMap,v.alphaMapTransform)),f.alphaTest>0&&(v.alphaTest.value=f.alphaTest)}function h(v,f){v.specular.value.copy(f.specular),v.shininess.value=Math.max(f.shininess,1e-4)}function p(v,f){f.gradientMap&&(v.gradientMap.value=f.gradientMap)}function m(v,f){v.metalness.value=f.metalness,f.metalnessMap&&(v.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,v.metalnessMapTransform)),v.roughness.value=f.roughness,f.roughnessMap&&(v.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,v.roughnessMapTransform)),e.get(f).envMap&&(v.envMapIntensity.value=f.envMapIntensity)}function _(v,f,x){v.ior.value=f.ior,f.sheen>0&&(v.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),v.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(v.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,v.sheenColorMapTransform)),f.sheenRoughnessMap&&(v.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,v.sheenRoughnessMapTransform))),f.clearcoat>0&&(v.clearcoat.value=f.clearcoat,v.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(v.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,v.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(v.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Dn&&v.clearcoatNormalScale.value.negate())),f.iridescence>0&&(v.iridescence.value=f.iridescence,v.iridescenceIOR.value=f.iridescenceIOR,v.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(v.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,v.iridescenceMapTransform)),f.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),f.transmission>0&&(v.transmission.value=f.transmission,v.transmissionSamplerMap.value=x.texture,v.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(v.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,v.transmissionMapTransform)),v.thickness.value=f.thickness,f.thicknessMap&&(v.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=f.attenuationDistance,v.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(v.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(v.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=f.specularIntensity,v.specularColor.value.copy(f.specularColor),f.specularColorMap&&(v.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,v.specularColorMapTransform)),f.specularIntensityMap&&(v.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,v.specularIntensityMapTransform))}function M(v,f){f.matcap&&(v.matcap.value=f.matcap)}function T(v,f){const x=e.get(f).light;v.referencePosition.value.setFromMatrixPosition(x.matrixWorld),v.nearDistance.value=x.shadow.camera.near,v.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Yw(t,e,n,i){let r={},o={},s=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function u(x,y){const w=y.program;i.uniformBlockBinding(x,w)}function c(x,y){let w=r[x.id];w===void 0&&(M(x),w=h(x),r[x.id]=w,x.addEventListener("dispose",v));const O=y.program;i.updateUBOMapping(x,O);const U=e.render.frame;o[x.id]!==U&&(m(x),o[x.id]=U)}function h(x){const y=p();x.__bindingPointIndex=y;const w=t.createBuffer(),O=x.__size,U=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,O,U),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,w),w}function p(){for(let x=0;x<a;x++)if(s.indexOf(x)===-1)return s.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(x){const y=r[x.id],w=x.uniforms,O=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let U=0,b=w.length;U<b;U++){const Y=Array.isArray(w[U])?w[U]:[w[U]];for(let R=0,S=Y.length;R<S;R++){const I=Y[R];if(_(I,U,R,O)===!0){const $=I.__offset,re=Array.isArray(I.value)?I.value:[I.value];let z=0;for(let K=0;K<re.length;K++){const B=re[K],k=T(B);typeof B=="number"||typeof B=="boolean"?(I.__data[0]=B,t.bufferSubData(t.UNIFORM_BUFFER,$+z,I.__data)):B.isMatrix3?(I.__data[0]=B.elements[0],I.__data[1]=B.elements[1],I.__data[2]=B.elements[2],I.__data[3]=0,I.__data[4]=B.elements[3],I.__data[5]=B.elements[4],I.__data[6]=B.elements[5],I.__data[7]=0,I.__data[8]=B.elements[6],I.__data[9]=B.elements[7],I.__data[10]=B.elements[8],I.__data[11]=0):(B.toArray(I.__data,z),z+=k.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,$,I.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function _(x,y,w,O){const U=x.value,b=y+"_"+w;if(O[b]===void 0)return typeof U=="number"||typeof U=="boolean"?O[b]=U:O[b]=U.clone(),!0;{const Y=O[b];if(typeof U=="number"||typeof U=="boolean"){if(Y!==U)return O[b]=U,!0}else if(Y.equals(U)===!1)return Y.copy(U),!0}return!1}function M(x){const y=x.uniforms;let w=0;const O=16;for(let b=0,Y=y.length;b<Y;b++){const R=Array.isArray(y[b])?y[b]:[y[b]];for(let S=0,I=R.length;S<I;S++){const $=R[S],re=Array.isArray($.value)?$.value:[$.value];for(let z=0,K=re.length;z<K;z++){const B=re[z],k=T(B),F=w%O;F!==0&&O-F<k.boundary&&(w+=O-F),$.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=w,w+=k.storage}}}const U=w%O;return U>0&&(w+=O-U),x.__size=w,x.__cache={},this}function T(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function v(x){const y=x.target;y.removeEventListener("dispose",v);const w=s.indexOf(y.__bindingPointIndex);s.splice(w,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete o[y.id]}function f(){for(const x in r)t.deleteBuffer(r[x]);s=[],r={},o={}}return{bind:u,update:c,dispose:f}}class I_{constructor(e={}){const{canvas:n=GS(),context:i=null,depth:r=!0,stencil:o=!0,alpha:s=!1,antialias:a=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let m;i!==null?m=i.getContextAttributes().alpha:m=s;const _=new Uint32Array(4),M=new Int32Array(4);let T=null,v=null;const f=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=nn,this._useLegacyLights=!1,this.toneMapping=xr,this.toneMappingExposure=1;const y=this;let w=!1,O=0,U=0,b=null,Y=-1,R=null;const S=new rn,I=new rn;let $=null;const re=new ft(0);let z=0,K=n.width,B=n.height,k=1,F=null,V=null;const W=new rn(0,0,K,B),Z=new rn(0,0,K,B);let Q=!1;const q=new R_;let se=!1,ae=!1,ge=null;const me=new Qt,Ne=new yt,Ie=new J,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function De(){return b===null?k:1}let X=i;function Pe(C,j){for(let ie=0;ie<C.length;ie++){const oe=C[ie],ne=n.getContext(oe,j);if(ne!==null)return ne}return null}try{const C={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:u,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Od}`),n.addEventListener("webglcontextlost",pe,!1),n.addEventListener("webglcontextrestored",H,!1),n.addEventListener("webglcontextcreationerror",Ee,!1),X===null){const j=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&j.shift(),X=Pe(j,C),X===null)throw Pe(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&X instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let we,je,Ue,ht,Ze,P,A,ee,de,ue,le,be,ve,Te,Be,Ye,ce,ct,et,He,ke,Le,Je,at;function xt(){we=new i1(X),je=new KT(X,we,e),we.init(je),Le=new Gw(X,we,je),Ue=new Bw(X,we,je),ht=new s1(X),Ze=new Aw,P=new Hw(X,we,Ue,Ze,je,Le,ht),A=new QT(y),ee=new n1(y),de=new hE(X,je),Je=new qT(X,we,de,je),ue=new r1(X,de,ht,Je),le=new c1(X,ue,de,ht),et=new u1(X,je,P),Ye=new ZT(Ze),be=new ww(y,A,ee,we,je,Je,Ye),ve=new jw(y,Ze),Te=new Cw,Be=new Nw(we,je),ct=new YT(y,A,ee,Ue,le,m,u),ce=new zw(y,le,je),at=new Yw(X,ht,je,Ue),He=new $T(X,we,ht,je),ke=new o1(X,we,ht,je),ht.programs=be.programs,y.capabilities=je,y.extensions=we,y.properties=Ze,y.renderLists=Te,y.shadowMap=ce,y.state=Ue,y.info=ht}xt();const qe=new Xw(y,X);this.xr=qe,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const C=we.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=we.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(C){C!==void 0&&(k=C,this.setSize(K,B,!1))},this.getSize=function(C){return C.set(K,B)},this.setSize=function(C,j,ie=!0){if(qe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=C,B=j,n.width=Math.floor(C*k),n.height=Math.floor(j*k),ie===!0&&(n.style.width=C+"px",n.style.height=j+"px"),this.setViewport(0,0,C,j)},this.getDrawingBufferSize=function(C){return C.set(K*k,B*k).floor()},this.setDrawingBufferSize=function(C,j,ie){K=C,B=j,k=ie,n.width=Math.floor(C*ie),n.height=Math.floor(j*ie),this.setViewport(0,0,C,j)},this.getCurrentViewport=function(C){return C.copy(S)},this.getViewport=function(C){return C.copy(W)},this.setViewport=function(C,j,ie,oe){C.isVector4?W.set(C.x,C.y,C.z,C.w):W.set(C,j,ie,oe),Ue.viewport(S.copy(W).multiplyScalar(k).floor())},this.getScissor=function(C){return C.copy(Z)},this.setScissor=function(C,j,ie,oe){C.isVector4?Z.set(C.x,C.y,C.z,C.w):Z.set(C,j,ie,oe),Ue.scissor(I.copy(Z).multiplyScalar(k).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(C){Ue.setScissorTest(Q=C)},this.setOpaqueSort=function(C){F=C},this.setTransparentSort=function(C){V=C},this.getClearColor=function(C){return C.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor.apply(ct,arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha.apply(ct,arguments)},this.clear=function(C=!0,j=!0,ie=!0){let oe=0;if(C){let ne=!1;if(b!==null){const ye=b.texture.format;ne=ye===f_||ye===c_||ye===u_}if(ne){const ye=b.texture.type,Ae=ye===Sr||ye===ur||ye===kd||ye===jr||ye===a_||ye===l_,ze=ct.getClearColor(),Ve=ct.getClearAlpha(),Qe=ze.r,Ke=ze.g,$e=ze.b;Ae?(_[0]=Qe,_[1]=Ke,_[2]=$e,_[3]=Ve,X.clearBufferuiv(X.COLOR,0,_)):(M[0]=Qe,M[1]=Ke,M[2]=$e,M[3]=Ve,X.clearBufferiv(X.COLOR,0,M))}else oe|=X.COLOR_BUFFER_BIT}j&&(oe|=X.DEPTH_BUFFER_BIT),ie&&(oe|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",pe,!1),n.removeEventListener("webglcontextrestored",H,!1),n.removeEventListener("webglcontextcreationerror",Ee,!1),Te.dispose(),Be.dispose(),Ze.dispose(),A.dispose(),ee.dispose(),le.dispose(),Je.dispose(),at.dispose(),be.dispose(),qe.dispose(),qe.removeEventListener("sessionstart",zt),qe.removeEventListener("sessionend",gt),ge&&(ge.dispose(),ge=null),Ft.stop()};function pe(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function H(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const C=ht.autoReset,j=ce.enabled,ie=ce.autoUpdate,oe=ce.needsUpdate,ne=ce.type;xt(),ht.autoReset=C,ce.enabled=j,ce.autoUpdate=ie,ce.needsUpdate=oe,ce.type=ne}function Ee(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Se(C){const j=C.target;j.removeEventListener("dispose",Se),Ge(j)}function Ge(C){Fe(C),Ze.remove(C)}function Fe(C){const j=Ze.get(C).programs;j!==void 0&&(j.forEach(function(ie){be.releaseProgram(ie)}),C.isShaderMaterial&&be.releaseShaderCache(C))}this.renderBufferDirect=function(C,j,ie,oe,ne,ye){j===null&&(j=Ce);const Ae=ne.isMesh&&ne.matrixWorld.determinant()<0,ze=oo(C,j,ie,oe,ne);Ue.setMaterial(oe,Ae);let Ve=ie.index,Qe=1;if(oe.wireframe===!0){if(Ve=ue.getWireframeAttribute(ie),Ve===void 0)return;Qe=2}const Ke=ie.drawRange,$e=ie.attributes.position;let lt=Ke.start*Qe,an=(Ke.start+Ke.count)*Qe;ye!==null&&(lt=Math.max(lt,ye.start*Qe),an=Math.min(an,(ye.start+ye.count)*Qe)),Ve!==null?(lt=Math.max(lt,0),an=Math.min(an,Ve.count)):$e!=null&&(lt=Math.max(lt,0),an=Math.min(an,$e.count));const Dt=an-lt;if(Dt<0||Dt===1/0)return;Je.setup(ne,oe,ze,ie,Ve);let Bt,vt=He;if(Ve!==null&&(Bt=de.get(Ve),vt=ke,vt.setIndex(Bt)),ne.isMesh)oe.wireframe===!0?(Ue.setLineWidth(oe.wireframeLinewidth*De()),vt.setMode(X.LINES)):vt.setMode(X.TRIANGLES);else if(ne.isLine){let tt=oe.linewidth;tt===void 0&&(tt=1),Ue.setLineWidth(tt*De()),ne.isLineSegments?vt.setMode(X.LINES):ne.isLineLoop?vt.setMode(X.LINE_LOOP):vt.setMode(X.LINE_STRIP)}else ne.isPoints?vt.setMode(X.POINTS):ne.isSprite&&vt.setMode(X.TRIANGLES);if(ne.isBatchedMesh)vt.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else if(ne.isInstancedMesh)vt.renderInstances(lt,Dt,ne.count);else if(ie.isInstancedBufferGeometry){const tt=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,ao=Math.min(ie.instanceCount,tt);vt.renderInstances(lt,Dt,ao)}else vt.render(lt,Dt)};function dt(C,j,ie){C.transparent===!0&&C.side===Mi&&C.forceSinglePass===!1?(C.side=Dn,C.needsUpdate=!0,pn(C,j,ie),C.side=Tr,C.needsUpdate=!0,pn(C,j,ie),C.side=Mi):pn(C,j,ie)}this.compile=function(C,j,ie=null){ie===null&&(ie=C),v=Be.get(ie),v.init(),x.push(v),ie.traverseVisible(function(ne){ne.isLight&&ne.layers.test(j.layers)&&(v.pushLight(ne),ne.castShadow&&v.pushShadow(ne))}),C!==ie&&C.traverseVisible(function(ne){ne.isLight&&ne.layers.test(j.layers)&&(v.pushLight(ne),ne.castShadow&&v.pushShadow(ne))}),v.setupLights(y._useLegacyLights);const oe=new Set;return C.traverse(function(ne){const ye=ne.material;if(ye)if(Array.isArray(ye))for(let Ae=0;Ae<ye.length;Ae++){const ze=ye[Ae];dt(ze,ie,ne),oe.add(ze)}else dt(ye,ie,ne),oe.add(ye)}),x.pop(),v=null,oe},this.compileAsync=function(C,j,ie=null){const oe=this.compile(C,j,ie);return new Promise(ne=>{function ye(){if(oe.forEach(function(Ae){Ze.get(Ae).currentProgram.isReady()&&oe.delete(Ae)}),oe.size===0){ne(C);return}setTimeout(ye,10)}we.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let pt=null;function bt(C){pt&&pt(C)}function zt(){Ft.stop()}function gt(){Ft.start()}const Ft=new C_;Ft.setAnimationLoop(bt),typeof self<"u"&&Ft.setContext(self),this.setAnimationLoop=function(C){pt=C,qe.setAnimationLoop(C),C===null?Ft.stop():Ft.start()},qe.addEventListener("sessionstart",zt),qe.addEventListener("sessionend",gt),this.render=function(C,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),qe.enabled===!0&&qe.isPresenting===!0&&(qe.cameraAutoUpdate===!0&&qe.updateCamera(j),j=qe.getCamera()),C.isScene===!0&&C.onBeforeRender(y,C,j,b),v=Be.get(C,x.length),v.init(),x.push(v),me.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),q.setFromProjectionMatrix(me),ae=this.localClippingEnabled,se=Ye.init(this.clippingPlanes,ae),T=Te.get(C,f.length),T.init(),f.push(T),Vn(C,j,0,y.sortObjects),T.finish(),y.sortObjects===!0&&T.sort(F,V),this.info.render.frame++,se===!0&&Ye.beginShadows();const ie=v.state.shadowsArray;if(ce.render(ie,C,j),se===!0&&Ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),ct.render(T,C),v.setupLights(y._useLegacyLights),j.isArrayCamera){const oe=j.cameras;for(let ne=0,ye=oe.length;ne<ye;ne++){const Ae=oe[ne];Wn(T,C,Ae,Ae.viewport)}}else Wn(T,C,j);b!==null&&(P.updateMultisampleRenderTarget(b),P.updateRenderTargetMipmap(b)),C.isScene===!0&&C.onAfterRender(y,C,j),Je.resetDefaultState(),Y=-1,R=null,x.pop(),x.length>0?v=x[x.length-1]:v=null,f.pop(),f.length>0?T=f[f.length-1]:T=null};function Vn(C,j,ie,oe){if(C.visible===!1)return;if(C.layers.test(j.layers)){if(C.isGroup)ie=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(j);else if(C.isLight)v.pushLight(C),C.castShadow&&v.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||q.intersectsSprite(C)){oe&&Ie.setFromMatrixPosition(C.matrixWorld).applyMatrix4(me);const Ae=le.update(C),ze=C.material;ze.visible&&T.push(C,Ae,ze,ie,Ie.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||q.intersectsObject(C))){const Ae=le.update(C),ze=C.material;if(oe&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ie.copy(C.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Ie.copy(Ae.boundingSphere.center)),Ie.applyMatrix4(C.matrixWorld).applyMatrix4(me)),Array.isArray(ze)){const Ve=Ae.groups;for(let Qe=0,Ke=Ve.length;Qe<Ke;Qe++){const $e=Ve[Qe],lt=ze[$e.materialIndex];lt&&lt.visible&&T.push(C,Ae,lt,ie,Ie.z,$e)}}else ze.visible&&T.push(C,Ae,ze,ie,Ie.z,null)}}const ye=C.children;for(let Ae=0,ze=ye.length;Ae<ze;Ae++)Vn(ye[Ae],j,ie,oe)}function Wn(C,j,ie,oe){const ne=C.opaque,ye=C.transmissive,Ae=C.transparent;v.setupLightsView(ie),se===!0&&Ye.setGlobalState(y.clippingPlanes,ie),ye.length>0&&Ai(ne,ye,j,ie),oe&&Ue.viewport(S.copy(oe)),ne.length>0&&Cr(ne,j,ie),ye.length>0&&Cr(ye,j,ie),Ae.length>0&&Cr(Ae,j,ie),Ue.buffers.depth.setTest(!0),Ue.buffers.depth.setMask(!0),Ue.buffers.color.setMask(!0),Ue.setPolygonOffset(!1)}function Ai(C,j,ie,oe){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;const ye=je.isWebGL2;ge===null&&(ge=new eo(1,1,{generateMipmaps:!0,type:we.has("EXT_color_buffer_half_float")?da:Sr,minFilter:fa,samples:ye?4:0})),y.getDrawingBufferSize(Ne),ye?ge.setSize(Ne.x,Ne.y):ge.setSize(Bf(Ne.x),Bf(Ne.y));const Ae=y.getRenderTarget();y.setRenderTarget(ge),y.getClearColor(re),z=y.getClearAlpha(),z<1&&y.setClearColor(16777215,.5),y.clear();const ze=y.toneMapping;y.toneMapping=xr,Cr(C,ie,oe),P.updateMultisampleRenderTarget(ge),P.updateRenderTargetMipmap(ge);let Ve=!1;for(let Qe=0,Ke=j.length;Qe<Ke;Qe++){const $e=j[Qe],lt=$e.object,an=$e.geometry,Dt=$e.material,Bt=$e.group;if(Dt.side===Mi&&lt.layers.test(oe.layers)){const vt=Dt.side;Dt.side=Dn,Dt.needsUpdate=!0,Pt(lt,ie,oe,an,Dt,Bt),Dt.side=vt,Dt.needsUpdate=!0,Ve=!0}}Ve===!0&&(P.updateMultisampleRenderTarget(ge),P.updateRenderTargetMipmap(ge)),y.setRenderTarget(Ae),y.setClearColor(re,z),y.toneMapping=ze}function Cr(C,j,ie){const oe=j.isScene===!0?j.overrideMaterial:null;for(let ne=0,ye=C.length;ne<ye;ne++){const Ae=C[ne],ze=Ae.object,Ve=Ae.geometry,Qe=oe===null?Ae.material:oe,Ke=Ae.group;ze.layers.test(ie.layers)&&Pt(ze,j,ie,Ve,Qe,Ke)}}function Pt(C,j,ie,oe,ne,ye){C.onBeforeRender(y,j,ie,oe,ne,ye),C.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ne.onBeforeRender(y,j,ie,oe,C,ye),ne.transparent===!0&&ne.side===Mi&&ne.forceSinglePass===!1?(ne.side=Dn,ne.needsUpdate=!0,y.renderBufferDirect(ie,j,oe,ne,C,ye),ne.side=Tr,ne.needsUpdate=!0,y.renderBufferDirect(ie,j,oe,ne,C,ye),ne.side=Mi):y.renderBufferDirect(ie,j,oe,ne,C,ye),C.onAfterRender(y,j,ie,oe,ne,ye)}function pn(C,j,ie){j.isScene!==!0&&(j=Ce);const oe=Ze.get(C),ne=v.state.lights,ye=v.state.shadowsArray,Ae=ne.state.version,ze=be.getParameters(C,ne.state,ye,j,ie),Ve=be.getProgramCacheKey(ze);let Qe=oe.programs;oe.environment=C.isMeshStandardMaterial?j.environment:null,oe.fog=j.fog,oe.envMap=(C.isMeshStandardMaterial?ee:A).get(C.envMap||oe.environment),Qe===void 0&&(C.addEventListener("dispose",Se),Qe=new Map,oe.programs=Qe);let Ke=Qe.get(Ve);if(Ke!==void 0){if(oe.currentProgram===Ke&&oe.lightsStateVersion===Ae)return Ta(C,ze),Ke}else ze.uniforms=be.getUniforms(C),C.onBuild(ie,ze,y),C.onBeforeCompile(ze,y),Ke=be.acquireProgram(ze,Ve),Qe.set(Ve,Ke),oe.uniforms=ze.uniforms;const $e=oe.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&($e.clippingPlanes=Ye.uniform),Ta(C,ze),oe.needsLights=so(C),oe.lightsStateVersion=Ae,oe.needsLights&&($e.ambientLightColor.value=ne.state.ambient,$e.lightProbe.value=ne.state.probe,$e.directionalLights.value=ne.state.directional,$e.directionalLightShadows.value=ne.state.directionalShadow,$e.spotLights.value=ne.state.spot,$e.spotLightShadows.value=ne.state.spotShadow,$e.rectAreaLights.value=ne.state.rectArea,$e.ltc_1.value=ne.state.rectAreaLTC1,$e.ltc_2.value=ne.state.rectAreaLTC2,$e.pointLights.value=ne.state.point,$e.pointLightShadows.value=ne.state.pointShadow,$e.hemisphereLights.value=ne.state.hemi,$e.directionalShadowMap.value=ne.state.directionalShadowMap,$e.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,$e.spotShadowMap.value=ne.state.spotShadowMap,$e.spotLightMatrix.value=ne.state.spotLightMatrix,$e.spotLightMap.value=ne.state.spotLightMap,$e.pointShadowMap.value=ne.state.pointShadowMap,$e.pointShadowMatrix.value=ne.state.pointShadowMatrix),oe.currentProgram=Ke,oe.uniformsList=null,Ke}function ro(C){if(C.uniformsList===null){const j=C.currentProgram.getUniforms();C.uniformsList=Ll.seqWithValue(j.seq,C.uniforms)}return C.uniformsList}function Ta(C,j){const ie=Ze.get(C);ie.outputColorSpace=j.outputColorSpace,ie.batching=j.batching,ie.instancing=j.instancing,ie.instancingColor=j.instancingColor,ie.skinning=j.skinning,ie.morphTargets=j.morphTargets,ie.morphNormals=j.morphNormals,ie.morphColors=j.morphColors,ie.morphTargetsCount=j.morphTargetsCount,ie.numClippingPlanes=j.numClippingPlanes,ie.numIntersection=j.numClipIntersection,ie.vertexAlphas=j.vertexAlphas,ie.vertexTangents=j.vertexTangents,ie.toneMapping=j.toneMapping}function oo(C,j,ie,oe,ne){j.isScene!==!0&&(j=Ce),P.resetTextureUnits();const ye=j.fog,Ae=oe.isMeshStandardMaterial?j.environment:null,ze=b===null?y.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Xi,Ve=(oe.isMeshStandardMaterial?ee:A).get(oe.envMap||Ae),Qe=oe.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,Ke=!!ie.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),$e=!!ie.morphAttributes.position,lt=!!ie.morphAttributes.normal,an=!!ie.morphAttributes.color;let Dt=xr;oe.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Dt=y.toneMapping);const Bt=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,vt=Bt!==void 0?Bt.length:0,tt=Ze.get(oe),ao=v.state.lights;if(se===!0&&(ae===!0||C!==R)){const mn=C===R&&oe.id===Y;Ye.setState(oe,C,mn)}let St=!1;oe.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==ao.state.version||tt.outputColorSpace!==ze||ne.isBatchedMesh&&tt.batching===!1||!ne.isBatchedMesh&&tt.batching===!0||ne.isInstancedMesh&&tt.instancing===!1||!ne.isInstancedMesh&&tt.instancing===!0||ne.isSkinnedMesh&&tt.skinning===!1||!ne.isSkinnedMesh&&tt.skinning===!0||ne.isInstancedMesh&&tt.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&tt.instancingColor===!1&&ne.instanceColor!==null||tt.envMap!==Ve||oe.fog===!0&&tt.fog!==ye||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==Ye.numPlanes||tt.numIntersection!==Ye.numIntersection)||tt.vertexAlphas!==Qe||tt.vertexTangents!==Ke||tt.morphTargets!==$e||tt.morphNormals!==lt||tt.morphColors!==an||tt.toneMapping!==Dt||je.isWebGL2===!0&&tt.morphTargetsCount!==vt)&&(St=!0):(St=!0,tt.__version=oe.version);let Ri=tt.currentProgram;St===!0&&(Ri=pn(oe,j,ne));let wa=!1,qi=!1,lo=!1;const Vt=Ri.getUniforms(),_i=tt.uniforms;if(Ue.useProgram(Ri.program)&&(wa=!0,qi=!0,lo=!0),oe.id!==Y&&(Y=oe.id,qi=!0),wa||R!==C){Vt.setValue(X,"projectionMatrix",C.projectionMatrix),Vt.setValue(X,"viewMatrix",C.matrixWorldInverse);const mn=Vt.map.cameraPosition;mn!==void 0&&mn.setValue(X,Ie.setFromMatrixPosition(C.matrixWorld)),je.logarithmicDepthBuffer&&Vt.setValue(X,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Vt.setValue(X,"isOrthographic",C.isOrthographicCamera===!0),R!==C&&(R=C,qi=!0,lo=!0)}if(ne.isSkinnedMesh){Vt.setOptional(X,ne,"bindMatrix"),Vt.setOptional(X,ne,"bindMatrixInverse");const mn=ne.skeleton;mn&&(je.floatVertexTextures?(mn.boneTexture===null&&mn.computeBoneTexture(),Vt.setValue(X,"boneTexture",mn.boneTexture,P)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ne.isBatchedMesh&&(Vt.setOptional(X,ne,"batchingTexture"),Vt.setValue(X,"batchingTexture",ne._matricesTexture,P));const qt=ie.morphAttributes;if((qt.position!==void 0||qt.normal!==void 0||qt.color!==void 0&&je.isWebGL2===!0)&&et.update(ne,ie,Ri),(qi||tt.receiveShadow!==ne.receiveShadow)&&(tt.receiveShadow=ne.receiveShadow,Vt.setValue(X,"receiveShadow",ne.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(_i.envMap.value=Ve,_i.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),qi&&(Vt.setValue(X,"toneMappingExposure",y.toneMappingExposure),tt.needsLights&&gs(_i,lo),ye&&oe.fog===!0&&ve.refreshFogUniforms(_i,ye),ve.refreshMaterialUniforms(_i,oe,k,B,ge),Ll.upload(X,ro(tt),_i,P)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Ll.upload(X,ro(tt),_i,P),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Vt.setValue(X,"center",ne.center),Vt.setValue(X,"modelViewMatrix",ne.modelViewMatrix),Vt.setValue(X,"normalMatrix",ne.normalMatrix),Vt.setValue(X,"modelMatrix",ne.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const mn=oe.uniformsGroups;for(let uo=0,co=mn.length;uo<co;uo++)if(je.isWebGL2){const vs=mn[uo];at.update(vs,Ri),at.bind(vs,Ri)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ri}function gs(C,j){C.ambientLightColor.needsUpdate=j,C.lightProbe.needsUpdate=j,C.directionalLights.needsUpdate=j,C.directionalLightShadows.needsUpdate=j,C.pointLights.needsUpdate=j,C.pointLightShadows.needsUpdate=j,C.spotLights.needsUpdate=j,C.spotLightShadows.needsUpdate=j,C.rectAreaLights.needsUpdate=j,C.hemisphereLights.needsUpdate=j}function so(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(C,j,ie){Ze.get(C.texture).__webglTexture=j,Ze.get(C.depthTexture).__webglTexture=ie;const oe=Ze.get(C);oe.__hasExternalTextures=!0,oe.__hasExternalTextures&&(oe.__autoAllocateDepthBuffer=ie===void 0,oe.__autoAllocateDepthBuffer||we.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),oe.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,j){const ie=Ze.get(C);ie.__webglFramebuffer=j,ie.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(C,j=0,ie=0){b=C,O=j,U=ie;let oe=!0,ne=null,ye=!1,Ae=!1;if(C){const Ve=Ze.get(C);Ve.__useDefaultFramebuffer!==void 0?(Ue.bindFramebuffer(X.FRAMEBUFFER,null),oe=!1):Ve.__webglFramebuffer===void 0?P.setupRenderTarget(C):Ve.__hasExternalTextures&&P.rebindTextures(C,Ze.get(C.texture).__webglTexture,Ze.get(C.depthTexture).__webglTexture);const Qe=C.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(Ae=!0);const Ke=Ze.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ke[j])?ne=Ke[j][ie]:ne=Ke[j],ye=!0):je.isWebGL2&&C.samples>0&&P.useMultisampledRTT(C)===!1?ne=Ze.get(C).__webglMultisampledFramebuffer:Array.isArray(Ke)?ne=Ke[ie]:ne=Ke,S.copy(C.viewport),I.copy(C.scissor),$=C.scissorTest}else S.copy(W).multiplyScalar(k).floor(),I.copy(Z).multiplyScalar(k).floor(),$=Q;if(Ue.bindFramebuffer(X.FRAMEBUFFER,ne)&&je.drawBuffers&&oe&&Ue.drawBuffers(C,ne),Ue.viewport(S),Ue.scissor(I),Ue.setScissorTest($),ye){const Ve=Ze.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ve.__webglTexture,ie)}else if(Ae){const Ve=Ze.get(C.texture),Qe=j||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ve.__webglTexture,ie||0,Qe)}Y=-1},this.readRenderTargetPixels=function(C,j,ie,oe,ne,ye,Ae){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=Ze.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ae!==void 0&&(ze=ze[Ae]),ze){Ue.bindFramebuffer(X.FRAMEBUFFER,ze);try{const Ve=C.texture,Qe=Ve.format,Ke=Ve.type;if(Qe!==hi&&Le.convert(Qe)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const $e=Ke===da&&(we.has("EXT_color_buffer_half_float")||je.isWebGL2&&we.has("EXT_color_buffer_float"));if(Ke!==Sr&&Le.convert(Ke)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ke===cr&&(je.isWebGL2||we.has("OES_texture_float")||we.has("WEBGL_color_buffer_float")))&&!$e){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=C.width-oe&&ie>=0&&ie<=C.height-ne&&X.readPixels(j,ie,oe,ne,Le.convert(Qe),Le.convert(Ke),ye)}finally{const Ve=b!==null?Ze.get(b).__webglFramebuffer:null;Ue.bindFramebuffer(X.FRAMEBUFFER,Ve)}}},this.copyFramebufferToTexture=function(C,j,ie=0){const oe=Math.pow(2,-ie),ne=Math.floor(j.image.width*oe),ye=Math.floor(j.image.height*oe);P.setTexture2D(j,0),X.copyTexSubImage2D(X.TEXTURE_2D,ie,0,0,C.x,C.y,ne,ye),Ue.unbindTexture()},this.copyTextureToTexture=function(C,j,ie,oe=0){const ne=j.image.width,ye=j.image.height,Ae=Le.convert(ie.format),ze=Le.convert(ie.type);P.setTexture2D(ie,0),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,ie.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,ie.unpackAlignment),j.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,oe,C.x,C.y,ne,ye,Ae,ze,j.image.data):j.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,oe,C.x,C.y,j.mipmaps[0].width,j.mipmaps[0].height,Ae,j.mipmaps[0].data):X.texSubImage2D(X.TEXTURE_2D,oe,C.x,C.y,Ae,ze,j.image),oe===0&&ie.generateMipmaps&&X.generateMipmap(X.TEXTURE_2D),Ue.unbindTexture()},this.copyTextureToTexture3D=function(C,j,ie,oe,ne=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ye=C.max.x-C.min.x+1,Ae=C.max.y-C.min.y+1,ze=C.max.z-C.min.z+1,Ve=Le.convert(oe.format),Qe=Le.convert(oe.type);let Ke;if(oe.isData3DTexture)P.setTexture3D(oe,0),Ke=X.TEXTURE_3D;else if(oe.isDataArrayTexture||oe.isCompressedArrayTexture)P.setTexture2DArray(oe,0),Ke=X.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,oe.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,oe.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,oe.unpackAlignment);const $e=X.getParameter(X.UNPACK_ROW_LENGTH),lt=X.getParameter(X.UNPACK_IMAGE_HEIGHT),an=X.getParameter(X.UNPACK_SKIP_PIXELS),Dt=X.getParameter(X.UNPACK_SKIP_ROWS),Bt=X.getParameter(X.UNPACK_SKIP_IMAGES),vt=ie.isCompressedTexture?ie.mipmaps[ne]:ie.image;X.pixelStorei(X.UNPACK_ROW_LENGTH,vt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,vt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,C.min.x),X.pixelStorei(X.UNPACK_SKIP_ROWS,C.min.y),X.pixelStorei(X.UNPACK_SKIP_IMAGES,C.min.z),ie.isDataTexture||ie.isData3DTexture?X.texSubImage3D(Ke,ne,j.x,j.y,j.z,ye,Ae,ze,Ve,Qe,vt.data):ie.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(Ke,ne,j.x,j.y,j.z,ye,Ae,ze,Ve,vt.data)):X.texSubImage3D(Ke,ne,j.x,j.y,j.z,ye,Ae,ze,Ve,Qe,vt),X.pixelStorei(X.UNPACK_ROW_LENGTH,$e),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,lt),X.pixelStorei(X.UNPACK_SKIP_PIXELS,an),X.pixelStorei(X.UNPACK_SKIP_ROWS,Dt),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Bt),ne===0&&oe.generateMipmaps&&X.generateMipmap(Ke),Ue.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?P.setTextureCube(C,0):C.isData3DTexture?P.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?P.setTexture2DArray(C,0):P.setTexture2D(C,0),Ue.unbindTexture()},this.resetState=function(){O=0,U=0,b=null,Ue.reset(),Je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===zd?"display-p3":"srgb",n.unpackColorSpace=_t.workingColorSpace===Tu?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===nn?qr:h_}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===qr?nn:Xi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class qw extends I_{}qw.prototype.isWebGL1Renderer=!0;class Hd{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new ft(e),this.density=n}clone(){return new Hd(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class $w extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class F_ extends Ea{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Bm=new Qt,Gf=new y_,gl=new wu,vl=new J;class Kw extends Un{constructor(e=new Yi,n=new F_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),gl.copy(i.boundingSphere),gl.applyMatrix4(r),gl.radius+=o,e.ray.intersectsSphere(gl)===!1)return;Bm.copy(r).invert(),Gf.copy(e.ray).applyMatrix4(Bm);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),u=a*a,c=i.index,p=i.attributes.position;if(c!==null){const m=Math.max(0,s.start),_=Math.min(c.count,s.start+s.count);for(let M=m,T=_;M<T;M++){const v=c.getX(M);vl.fromBufferAttribute(p,v),Hm(vl,v,u,r,e,n,this)}}else{const m=Math.max(0,s.start),_=Math.min(p.count,s.start+s.count);for(let M=m,T=_;M<T;M++)vl.fromBufferAttribute(p,M),Hm(vl,M,u,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Hm(t,e,n,i,r,o,s){const a=Gf.distanceSqToPoint(t);if(a<n){const u=new J;Gf.closestPointToPoint(t,u),u.applyMatrix4(i);const c=r.ray.origin.distanceTo(u);if(c<r.near||c>r.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:u,index:e,face:null,object:s})}}class bl extends xn{constructor(e,n,i,r,o,s,a,u,c){super(e,n,i,r,o,s,a,u,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Gm={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class Zw{constructor(e,n,i){const r=this;let o=!1,s=0,a=0,u;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(h){a++,o===!1&&r.onStart!==void 0&&r.onStart(h,s,a),o=!0},this.itemEnd=function(h){s++,r.onProgress!==void 0&&r.onProgress(h,s,a),s===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return u?u(h):h},this.setURLModifier=function(h){return u=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){const p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,m=c.length;p<m;p+=2){const _=c[p],M=c[p+1];if(_.global&&(_.lastIndex=0),_.test(h))return M}return null}}}const Qw=new Zw;class Gd{constructor(e){this.manager=e!==void 0?e:Qw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,o){i.load(e,r,n,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Gd.DEFAULT_MATERIAL_NAME="__DEFAULT";class Jw extends Gd{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,s=Gm.get(e);if(s!==void 0)return o.manager.itemStart(e),setTimeout(function(){n&&n(s),o.manager.itemEnd(e)},0),s;const a=ha("img");function u(){h(),Gm.add(e,this),n&&n(this),o.manager.itemEnd(e)}function c(p){h(),r&&r(p),o.manager.itemError(e),o.manager.itemEnd(e)}function h(){a.removeEventListener("load",u,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",u,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(e),a.src=e,a}}class eA extends Gd{constructor(e){super(e)}load(e,n,i,r){const o=new xn,s=new Jw(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){o.image=a,o.needsUpdate=!0,n!==void 0&&n(o)},i,r),o}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Od}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Od);var tA={};(function(){var t;function e(l){var d=0;return function(){return d<l.length?{done:!1,value:l[d++]}:{done:!0}}}var n=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,g){return l==Array.prototype||l==Object.prototype||(l[d]=g.value),l};function i(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof jo=="object"&&jo];for(var d=0;d<l.length;++d){var g=l[d];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=i(this);function o(l,d){if(d)e:{var g=r;l=l.split(".");for(var E=0;E<l.length-1;E++){var L=l[E];if(!(L in g))break e;g=g[L]}l=l[l.length-1],E=g[l],d=d(E),d!=E&&d!=null&&n(g,l,{configurable:!0,writable:!0,value:d})}}o("Symbol",function(l){function d(N){if(this instanceof d)throw new TypeError("Symbol is not a constructor");return new g(E+(N||"")+"_"+L++,N)}function g(N,D){this.h=N,n(this,"description",{configurable:!0,writable:!0,value:D})}if(l)return l;g.prototype.toString=function(){return this.h};var E="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",L=0;return d}),o("Symbol.iterator",function(l){if(l)return l;l=Symbol("Symbol.iterator");for(var d="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),g=0;g<d.length;g++){var E=r[d[g]];typeof E=="function"&&typeof E.prototype[l]!="function"&&n(E.prototype,l,{configurable:!0,writable:!0,value:function(){return s(e(this))}})}return l});function s(l){return l={next:l},l[Symbol.iterator]=function(){return this},l}function a(l){var d=typeof Symbol<"u"&&Symbol.iterator&&l[Symbol.iterator];return d?d.call(l):{next:e(l)}}function u(l){if(!(l instanceof Array)){l=a(l);for(var d,g=[];!(d=l.next()).done;)g.push(d.value);l=g}return l}var c=typeof Object.assign=="function"?Object.assign:function(l,d){for(var g=1;g<arguments.length;g++){var E=arguments[g];if(E)for(var L in E)Object.prototype.hasOwnProperty.call(E,L)&&(l[L]=E[L])}return l};o("Object.assign",function(l){return l||c});var h=typeof Object.create=="function"?Object.create:function(l){function d(){}return d.prototype=l,new d},p;if(typeof Object.setPrototypeOf=="function")p=Object.setPrototypeOf;else{var m;e:{var _={a:!0},M={};try{M.__proto__=_,m=M.a;break e}catch{}m=!1}p=m?function(l,d){if(l.__proto__=d,l.__proto__!==d)throw new TypeError(l+" is not extensible");return l}:null}var T=p;function v(l,d){if(l.prototype=h(d.prototype),l.prototype.constructor=l,T)T(l,d);else for(var g in d)if(g!="prototype")if(Object.defineProperties){var E=Object.getOwnPropertyDescriptor(d,g);E&&Object.defineProperty(l,g,E)}else l[g]=d[g];l.ya=d.prototype}function f(){this.m=!1,this.j=null,this.i=void 0,this.h=1,this.v=this.s=0,this.l=null}function x(l){if(l.m)throw new TypeError("Generator is already running");l.m=!0}f.prototype.u=function(l){this.i=l};function y(l,d){l.l={ma:d,na:!0},l.h=l.s||l.v}f.prototype.return=function(l){this.l={return:l},this.h=this.v};function w(l,d,g){return l.h=g,{value:d}}function O(l){this.h=new f,this.i=l}function U(l,d){x(l.h);var g=l.h.j;return g?b(l,"return"in g?g.return:function(E){return{value:E,done:!0}},d,l.h.return):(l.h.return(d),Y(l))}function b(l,d,g,E){try{var L=d.call(l.h.j,g);if(!(L instanceof Object))throw new TypeError("Iterator result "+L+" is not an object");if(!L.done)return l.h.m=!1,L;var N=L.value}catch(D){return l.h.j=null,y(l.h,D),Y(l)}return l.h.j=null,E.call(l.h,N),Y(l)}function Y(l){for(;l.h.h;)try{var d=l.i(l.h);if(d)return l.h.m=!1,{value:d.value,done:!1}}catch(g){l.h.i=void 0,y(l.h,g)}if(l.h.m=!1,l.h.l){if(d=l.h.l,l.h.l=null,d.na)throw d.ma;return{value:d.return,done:!0}}return{value:void 0,done:!0}}function R(l){this.next=function(d){return x(l.h),l.h.j?d=b(l,l.h.j.next,d,l.h.u):(l.h.u(d),d=Y(l)),d},this.throw=function(d){return x(l.h),l.h.j?d=b(l,l.h.j.throw,d,l.h.u):(y(l.h,d),d=Y(l)),d},this.return=function(d){return U(l,d)},this[Symbol.iterator]=function(){return this}}function S(l){function d(E){return l.next(E)}function g(E){return l.throw(E)}return new Promise(function(E,L){function N(D){D.done?E(D.value):Promise.resolve(D.value).then(d,g).then(N,L)}N(l.next())})}function I(l){return S(new R(new O(l)))}o("Promise",function(l){function d(D){this.i=0,this.j=void 0,this.h=[],this.u=!1;var G=this.l();try{D(G.resolve,G.reject)}catch(te){G.reject(te)}}function g(){this.h=null}function E(D){return D instanceof d?D:new d(function(G){G(D)})}if(l)return l;g.prototype.i=function(D){if(this.h==null){this.h=[];var G=this;this.j(function(){G.m()})}this.h.push(D)};var L=r.setTimeout;g.prototype.j=function(D){L(D,0)},g.prototype.m=function(){for(;this.h&&this.h.length;){var D=this.h;this.h=[];for(var G=0;G<D.length;++G){var te=D[G];D[G]=null;try{te()}catch(fe){this.l(fe)}}}this.h=null},g.prototype.l=function(D){this.j(function(){throw D})},d.prototype.l=function(){function D(fe){return function(_e){te||(te=!0,fe.call(G,_e))}}var G=this,te=!1;return{resolve:D(this.I),reject:D(this.m)}},d.prototype.I=function(D){if(D===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(D instanceof d)this.L(D);else{e:switch(typeof D){case"object":var G=D!=null;break e;case"function":G=!0;break e;default:G=!1}G?this.F(D):this.s(D)}},d.prototype.F=function(D){var G=void 0;try{G=D.then}catch(te){this.m(te);return}typeof G=="function"?this.M(G,D):this.s(D)},d.prototype.m=function(D){this.v(2,D)},d.prototype.s=function(D){this.v(1,D)},d.prototype.v=function(D,G){if(this.i!=0)throw Error("Cannot settle("+D+", "+G+"): Promise already settled in state"+this.i);this.i=D,this.j=G,this.i===2&&this.K(),this.H()},d.prototype.K=function(){var D=this;L(function(){if(D.D()){var G=r.console;typeof G<"u"&&G.error(D.j)}},1)},d.prototype.D=function(){if(this.u)return!1;var D=r.CustomEvent,G=r.Event,te=r.dispatchEvent;return typeof te>"u"?!0:(typeof D=="function"?D=new D("unhandledrejection",{cancelable:!0}):typeof G=="function"?D=new G("unhandledrejection",{cancelable:!0}):(D=r.document.createEvent("CustomEvent"),D.initCustomEvent("unhandledrejection",!1,!0,D)),D.promise=this,D.reason=this.j,te(D))},d.prototype.H=function(){if(this.h!=null){for(var D=0;D<this.h.length;++D)N.i(this.h[D]);this.h=null}};var N=new g;return d.prototype.L=function(D){var G=this.l();D.T(G.resolve,G.reject)},d.prototype.M=function(D,G){var te=this.l();try{D.call(G,te.resolve,te.reject)}catch(fe){te.reject(fe)}},d.prototype.then=function(D,G){function te(Oe,Me){return typeof Oe=="function"?function(Xe){try{fe(Oe(Xe))}catch(it){_e(it)}}:Me}var fe,_e,We=new d(function(Oe,Me){fe=Oe,_e=Me});return this.T(te(D,fe),te(G,_e)),We},d.prototype.catch=function(D){return this.then(void 0,D)},d.prototype.T=function(D,G){function te(){switch(fe.i){case 1:D(fe.j);break;case 2:G(fe.j);break;default:throw Error("Unexpected state: "+fe.i)}}var fe=this;this.h==null?N.i(te):this.h.push(te),this.u=!0},d.resolve=E,d.reject=function(D){return new d(function(G,te){te(D)})},d.race=function(D){return new d(function(G,te){for(var fe=a(D),_e=fe.next();!_e.done;_e=fe.next())E(_e.value).T(G,te)})},d.all=function(D){var G=a(D),te=G.next();return te.done?E([]):new d(function(fe,_e){function We(Xe){return function(it){Oe[Xe]=it,Me--,Me==0&&fe(Oe)}}var Oe=[],Me=0;do Oe.push(void 0),Me++,E(te.value).T(We(Oe.length-1),_e),te=G.next();while(!te.done)})},d});function $(l,d){l instanceof String&&(l+="");var g=0,E=!1,L={next:function(){if(!E&&g<l.length){var N=g++;return{value:d(N,l[N]),done:!1}}return E=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}o("Array.prototype.keys",function(l){return l||function(){return $(this,function(d){return d})}}),o("Array.prototype.fill",function(l){return l||function(d,g,E){var L=this.length||0;for(0>g&&(g=Math.max(0,L+g)),(E==null||E>L)&&(E=L),E=Number(E),0>E&&(E=Math.max(0,L+E)),g=Number(g||0);g<E;g++)this[g]=d;return this}});function re(l){return l||Array.prototype.fill}o("Int8Array.prototype.fill",re),o("Uint8Array.prototype.fill",re),o("Uint8ClampedArray.prototype.fill",re),o("Int16Array.prototype.fill",re),o("Uint16Array.prototype.fill",re),o("Int32Array.prototype.fill",re),o("Uint32Array.prototype.fill",re),o("Float32Array.prototype.fill",re),o("Float64Array.prototype.fill",re),o("Object.is",function(l){return l||function(d,g){return d===g?d!==0||1/d===1/g:d!==d&&g!==g}}),o("Array.prototype.includes",function(l){return l||function(d,g){var E=this;E instanceof String&&(E=String(E));var L=E.length;for(g=g||0,0>g&&(g=Math.max(g+L,0));g<L;g++){var N=E[g];if(N===d||Object.is(N,d))return!0}return!1}}),o("String.prototype.includes",function(l){return l||function(d,g){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(d instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(d,g||0)!==-1}});var z=this||self;function K(l,d){l=l.split(".");var g=z;l[0]in g||typeof g.execScript>"u"||g.execScript("var "+l[0]);for(var E;l.length&&(E=l.shift());)l.length||d===void 0?g[E]&&g[E]!==Object.prototype[E]?g=g[E]:g=g[E]={}:g[E]=d}function B(l){var d;e:{if((d=z.navigator)&&(d=d.userAgent))break e;d=""}return d.indexOf(l)!=-1}var k=Array.prototype.map?function(l,d){return Array.prototype.map.call(l,d,void 0)}:function(l,d){for(var g=l.length,E=Array(g),L=typeof l=="string"?l.split(""):l,N=0;N<g;N++)N in L&&(E[N]=d.call(void 0,L[N],N,l));return E},F={},V=null;function W(l){var d=l.length,g=3*d/4;g%3?g=Math.floor(g):"=.".indexOf(l[d-1])!=-1&&(g="=.".indexOf(l[d-2])!=-1?g-2:g-1);var E=new Uint8Array(g),L=0;return Z(l,function(N){E[L++]=N}),L!==g?E.subarray(0,L):E}function Z(l,d){function g(te){for(;E<l.length;){var fe=l.charAt(E++),_e=V[fe];if(_e!=null)return _e;if(!/^[\s\xa0]*$/.test(fe))throw Error("Unknown base64 encoding at char: "+fe)}return te}Q();for(var E=0;;){var L=g(-1),N=g(0),D=g(64),G=g(64);if(G===64&&L===-1)break;d(L<<2|N>>4),D!=64&&(d(N<<4&240|D>>2),G!=64&&d(D<<6&192|G))}}function Q(){if(!V){V={};for(var l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],g=0;5>g;g++){var E=l.concat(d[g].split(""));F[g]=E;for(var L=0;L<E.length;L++){var N=E[L];V[N]===void 0&&(V[N]=L)}}}}var q=typeof Uint8Array<"u",se=!(B("Trident")||B("MSIE"))&&typeof z.btoa=="function";function ae(l){if(!se){var d;d===void 0&&(d=0),Q(),d=F[d];for(var g=Array(Math.floor(l.length/3)),E=d[64]||"",L=0,N=0;L<l.length-2;L+=3){var D=l[L],G=l[L+1],te=l[L+2],fe=d[D>>2];D=d[(D&3)<<4|G>>4],G=d[(G&15)<<2|te>>6],te=d[te&63],g[N++]=fe+D+G+te}switch(fe=0,te=E,l.length-L){case 2:fe=l[L+1],te=d[(fe&15)<<2]||E;case 1:l=l[L],g[N]=d[l>>2]+d[(l&3)<<4|fe>>4]+te+E}return g.join("")}for(d="";10240<l.length;)d+=String.fromCharCode.apply(null,l.subarray(0,10240)),l=l.subarray(10240);return d+=String.fromCharCode.apply(null,l),btoa(d)}var ge=RegExp("[-_.]","g");function me(l){switch(l){case"-":return"+";case"_":return"/";case".":return"=";default:return""}}function Ne(l){if(!se)return W(l);ge.test(l)&&(l=l.replace(ge,me)),l=atob(l);for(var d=new Uint8Array(l.length),g=0;g<l.length;g++)d[g]=l.charCodeAt(g);return d}var Ie;function Ce(){return Ie||(Ie=new Uint8Array(0))}var De={},X=typeof Uint8Array.prototype.slice=="function",Pe=0,we=0;function je(l){var d=0>l;l=Math.abs(l);var g=l>>>0;l=Math.floor((l-g)/4294967296),d&&(g=a(ht(g,l)),d=g.next().value,l=g.next().value,g=d),Pe=g>>>0,we=l>>>0}var Ue=typeof BigInt=="function";function ht(l,d){return d=~d,l?l=~l+1:d+=1,[l,d]}function Ze(l,d){this.i=l>>>0,this.h=d>>>0}function P(l){if(!l)return A||(A=new Ze(0,0));if(!/^-?\d+$/.test(l))return null;if(16>l.length)je(Number(l));else if(Ue)l=BigInt(l),Pe=Number(l&BigInt(4294967295))>>>0,we=Number(l>>BigInt(32)&BigInt(4294967295));else{var d=+(l[0]==="-");we=Pe=0;for(var g=l.length,E=d,L=(g-d)%6+d;L<=g;E=L,L+=6)E=Number(l.slice(E,L)),we*=1e6,Pe=1e6*Pe+E,4294967296<=Pe&&(we+=Pe/4294967296|0,Pe%=4294967296);d&&(d=a(ht(Pe,we)),l=d.next().value,d=d.next().value,Pe=l,we=d)}return new Ze(Pe,we)}var A;function ee(l,d){return Error("Invalid wire type: "+l+" (at position "+d+")")}function de(){return Error("Failed to read varint, encoding is invalid.")}function ue(l,d){return Error("Tried to read past the end of the data "+d+" > "+l)}function le(){throw Error("Invalid UTF8")}function be(l,d){return d=String.fromCharCode.apply(null,d),l==null?d:l+d}var ve=void 0,Te,Be=typeof TextDecoder<"u",Ye,ce=typeof TextEncoder<"u",ct;function et(l){if(l!==De)throw Error("illegal external caller")}function He(l,d){if(et(d),this.V=l,l!=null&&l.length===0)throw Error("ByteString should be constructed with non-empty values")}function ke(){return ct||(ct=new He(null,De))}function Le(l){et(De);var d=l.V;return d=d==null||q&&d!=null&&d instanceof Uint8Array?d:typeof d=="string"?Ne(d):null,d==null?d:l.V=d}function Je(l){if(typeof l=="string")return{buffer:Ne(l),C:!1};if(Array.isArray(l))return{buffer:new Uint8Array(l),C:!1};if(l.constructor===Uint8Array)return{buffer:l,C:!1};if(l.constructor===ArrayBuffer)return{buffer:new Uint8Array(l),C:!1};if(l.constructor===He)return{buffer:Le(l)||Ce(),C:!0};if(l instanceof Uint8Array)return{buffer:new Uint8Array(l.buffer,l.byteOffset,l.byteLength),C:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function at(l,d){this.i=null,this.m=!1,this.h=this.j=this.l=0,xt(this,l,d)}function xt(l,d,g){g=g===void 0?{}:g,l.S=g.S===void 0?!1:g.S,d&&(d=Je(d),l.i=d.buffer,l.m=d.C,l.l=0,l.j=l.i.length,l.h=l.l)}at.prototype.reset=function(){this.h=this.l};function qe(l,d){if(l.h=d,d>l.j)throw ue(l.j,d)}function pe(l){var d=l.i,g=l.h,E=d[g++],L=E&127;if(E&128&&(E=d[g++],L|=(E&127)<<7,E&128&&(E=d[g++],L|=(E&127)<<14,E&128&&(E=d[g++],L|=(E&127)<<21,E&128&&(E=d[g++],L|=E<<28,E&128&&d[g++]&128&&d[g++]&128&&d[g++]&128&&d[g++]&128&&d[g++]&128)))))throw de();return qe(l,g),L}function H(l,d){if(0>d)throw Error("Tried to read a negative byte length: "+d);var g=l.h,E=g+d;if(E>l.j)throw ue(d,l.j-g);return l.h=E,g}var Ee=[];function Se(){this.h=[]}Se.prototype.length=function(){return this.h.length},Se.prototype.end=function(){var l=this.h;return this.h=[],l};function Ge(l,d,g){for(;0<g||127<d;)l.h.push(d&127|128),d=(d>>>7|g<<25)>>>0,g>>>=7;l.h.push(d)}function Fe(l,d){for(;127<d;)l.h.push(d&127|128),d>>>=7;l.h.push(d)}function dt(l,d){if(Ee.length){var g=Ee.pop();xt(g,l,d),l=g}else l=new at(l,d);this.h=l,this.j=this.h.h,this.i=this.l=-1,this.setOptions(d)}dt.prototype.setOptions=function(l){l=l===void 0?{}:l,this.ca=l.ca===void 0?!1:l.ca},dt.prototype.reset=function(){this.h.reset(),this.j=this.h.h,this.i=this.l=-1};function pt(l){var d=l.h;if(d.h==d.j)return!1;l.j=l.h.h;var g=pe(l.h)>>>0;if(d=g>>>3,g&=7,!(0<=g&&5>=g))throw ee(g,l.j);if(1>d)throw Error("Invalid field number: "+d+" (at position "+l.j+")");return l.l=d,l.i=g,!0}function bt(l){switch(l.i){case 0:if(l.i!=0)bt(l);else e:{l=l.h;for(var d=l.h,g=d+10,E=l.i;d<g;)if(!(E[d++]&128)){qe(l,d);break e}throw de()}break;case 1:l=l.h,qe(l,l.h+8);break;case 2:l.i!=2?bt(l):(d=pe(l.h)>>>0,l=l.h,qe(l,l.h+d));break;case 5:l=l.h,qe(l,l.h+4);break;case 3:d=l.l;do{if(!pt(l))throw Error("Unmatched start-group tag: stream EOF");if(l.i==4){if(l.l!=d)throw Error("Unmatched end-group tag");break}bt(l)}while(!0);break;default:throw ee(l.i,l.j)}}var zt=[];function gt(){this.j=[],this.i=0,this.h=new Se}function Ft(l,d){d.length!==0&&(l.j.push(d),l.i+=d.length)}function Vn(l,d){if(d=d.R){Ft(l,l.h.end());for(var g=0;g<d.length;g++)Ft(l,Le(d[g])||Ce())}}var Wn=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():void 0;function Ai(l,d){return Wn?l[Wn]|=d:l.A!==void 0?l.A|=d:(Object.defineProperties(l,{A:{value:d,configurable:!0,writable:!0,enumerable:!1}}),d)}function Cr(l,d){Wn?l[Wn]&&(l[Wn]&=~d):l.A!==void 0&&(l.A&=~d)}function Pt(l){var d;return Wn?d=l[Wn]:d=l.A,d??0}function pn(l,d){Wn?l[Wn]=d:l.A!==void 0?l.A=d:Object.defineProperties(l,{A:{value:d,configurable:!0,writable:!0,enumerable:!1}})}function ro(l){return Ai(l,1),l}function Ta(l,d){pn(d,(l|0)&-51)}function oo(l,d){pn(d,(l|18)&-41)}var gs={};function so(l){return l!==null&&typeof l=="object"&&!Array.isArray(l)&&l.constructor===Object}var C,j=[];pn(j,23),C=Object.freeze(j);function ie(l){if(Pt(l.o)&2)throw Error("Cannot mutate an immutable Message")}function oe(l){var d=l.length;(d=d?l[d-1]:void 0)&&so(d)?d.g=1:(d={},l.push((d.g=1,d)))}function ne(l){var d=l.i+l.G;return l.B||(l.B=l.o[d]={})}function ye(l,d){return d===-1?null:d>=l.i?l.B?l.B[d]:void 0:l.o[d+l.G]}function Ae(l,d,g,E){ie(l),ze(l,d,g,E)}function ze(l,d,g,E){l.j&&(l.j=void 0),d>=l.i||E?ne(l)[d]=g:(l.o[d+l.G]=g,(l=l.B)&&d in l&&delete l[d])}function Ve(l,d,g,E){var L=ye(l,d);Array.isArray(L)||(L=C);var N=Pt(L);if(N&1||ro(L),E)N&2||Ai(L,2),g&1||Object.freeze(L);else{E=!(g&2);var D=N&2;g&1||!D?E&&N&16&&!D&&Cr(L,16):(L=ro(Array.prototype.slice.call(L)),ze(l,d,L))}return L}function Qe(l,d){var g=ye(l,d),E=g==null?g:typeof g=="number"||g==="NaN"||g==="Infinity"||g==="-Infinity"?Number(g):void 0;return E!=null&&E!==g&&ze(l,d,E),E}function Ke(l,d,g,E,L){l.h||(l.h={});var N=l.h[g],D=Ve(l,g,3,L);if(!N){var G=D;N=[];var te=!!(Pt(l.o)&16);D=!!(Pt(G)&2);var fe=G;!L&&D&&(G=Array.prototype.slice.call(G));for(var _e=D,We=0;We<G.length;We++){var Oe=G[We],Me=d,Xe=!1;if(Xe=Xe===void 0?!1:Xe,Oe=Array.isArray(Oe)?new Me(Oe):Xe?new Me:void 0,Oe!==void 0){Me=Oe.o;var it=Xe=Pt(Me);D&&(it|=2),te&&(it|=16),it!=Xe&&pn(Me,it),Me=it,_e=_e||!!(2&Me),N.push(Oe)}}return l.h[g]=N,te=Pt(G),d=te|33,d=_e?d&-9:d|8,te!=d&&(_e=G,Object.isFrozen(_e)&&(_e=Array.prototype.slice.call(_e)),pn(_e,d),G=_e),fe!==G&&ze(l,g,G),(L||E&&D)&&Ai(N,2),E&&Object.freeze(N),N}return L||(L=Object.isFrozen(N),E&&!L?Object.freeze(N):!E&&L&&(N=Array.prototype.slice.call(N),l.h[g]=N)),N}function $e(l,d,g){var E=!!(Pt(l.o)&2);if(d=Ke(l,d,g,E,E),l=Ve(l,g,3,E),!(E||Pt(l)&8)){for(E=0;E<d.length;E++){if(g=d[E],Pt(g.o)&2){var L=_i(g,!1);L.j=g}else L=g;g!==L&&(d[E]=L,l[E]=L.o)}Ai(l,8)}return d}function lt(l,d,g){if(g!=null&&typeof g!="number")throw Error("Value of float/double field must be a number|null|undefined, found "+typeof g+": "+g);Ae(l,d,g)}function an(l,d,g,E,L){ie(l);var N=Ke(l,g,d,!1,!1);return g=E??new g,l=Ve(l,d,2,!1),L!=null?(N.splice(L,0,g),l.splice(L,0,g.o)):(N.push(g),l.push(g.o)),g.C()&&Cr(l,8),g}function Dt(l,d){return l??d}function Bt(l,d,g){return g=g===void 0?0:g,Dt(Qe(l,d),g)}var vt;function tt(l){switch(typeof l){case"number":return isFinite(l)?l:String(l);case"object":if(l)if(Array.isArray(l)){if(Pt(l)&128)return l=Array.prototype.slice.call(l),oe(l),l}else{if(q&&l!=null&&l instanceof Uint8Array)return ae(l);if(l instanceof He){var d=l.V;return d==null?"":typeof d=="string"?d:l.V=ae(d)}}}return l}function ao(l,d,g,E){if(l!=null){if(Array.isArray(l))l=St(l,d,g,E!==void 0);else if(so(l)){var L={},N;for(N in l)L[N]=ao(l[N],d,g,E);l=L}else l=d(l,E);return l}}function St(l,d,g,E){var L=Pt(l);E=E?!!(L&16):void 0,l=Array.prototype.slice.call(l);for(var N=0;N<l.length;N++)l[N]=ao(l[N],d,g,E);return g(L,l),l}function Ri(l){return l.ja===gs?l.toJSON():tt(l)}function wa(l,d){l&128&&oe(d)}function qi(l,d,g){if(g=g===void 0?oo:g,l!=null){if(q&&l instanceof Uint8Array)return l.length?new He(new Uint8Array(l),De):ke();if(Array.isArray(l)){var E=Pt(l);return E&2?l:d&&!(E&32)&&(E&16||E===0)?(pn(l,E|2),l):(l=St(l,qi,E&4?oo:g,!0),d=Pt(l),d&4&&d&2&&Object.freeze(l),l)}return l.ja===gs?Vt(l):l}}function lo(l,d,g,E,L,N,D){if(l=l.h&&l.h[g]){if(E=Pt(l),E&2?E=l:(N=k(l,Vt),oo(E,N),Object.freeze(N),E=N),ie(d),D=E==null?C:ro([]),E!=null){for(N=!!E.length,l=0;l<E.length;l++){var G=E[l];N=N&&!(Pt(G.o)&2),D[l]=G.o}N=(N?8:0)|1,l=Pt(D),(l&N)!==N&&(Object.isFrozen(D)&&(D=Array.prototype.slice.call(D)),pn(D,l|N)),d.h||(d.h={}),d.h[g]=E}else d.h&&(d.h[g]=void 0);ze(d,g,D,L)}else Ae(d,g,qi(E,N,D),L)}function Vt(l){return Pt(l.o)&2||(l=_i(l,!0),Ai(l.o,2)),l}function _i(l,d){var g=l.o,E=[];Ai(E,16);var L=l.constructor.h;if(L&&E.push(L),L=l.B,L){E.length=g.length,E.fill(void 0,E.length,g.length);var N={};E[E.length-1]=N}Pt(g)&128&&oe(E),d=d||l.C()?oo:Ta,N=l.constructor,vt=E,E=new N(E),vt=void 0,l.R&&(E.R=l.R.slice()),N=!!(Pt(g)&16);for(var D=L?g.length-1:g.length,G=0;G<D;G++)lo(l,E,G-l.G,g[G],!1,N,d);if(L)for(var te in L)lo(l,E,+te,L[te],!0,N,d);return E}function qt(l,d,g){l==null&&(l=vt),vt=void 0;var E=this.constructor.i||0,L=0<E,N=this.constructor.h,D=!1;if(l==null){l=N?[N]:[];var G=48,te=!0;L&&(E=0,G|=128),pn(l,G)}else{if(!Array.isArray(l)||N&&N!==l[0])throw Error();var fe=G=Ai(l,0);if((te=(16&fe)!==0)&&((D=(32&fe)!==0)||(fe|=32)),L){if(128&fe)E=0;else if(0<l.length){var _e=l[l.length-1];if(so(_e)&&"g"in _e){E=0,fe|=128,delete _e.g;var We=!0,Oe;for(Oe in _e){We=!1;break}We&&l.pop()}}}else if(128&fe)throw Error();G!==fe&&pn(l,fe)}this.G=(N?0:-1)-E,this.h=void 0,this.o=l;e:{if(N=this.o.length,E=N-1,N&&(N=this.o[E],so(N))){this.B=N,this.i=E-this.G;break e}d!==void 0&&-1<d?(this.i=Math.max(d,E+1-this.G),this.B=void 0):this.i=Number.MAX_VALUE}if(!L&&this.B&&"g"in this.B)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(g){d=te&&!D&&!0,L=this.i;var Me;for(te=0;te<g.length;te++)D=g[te],D<L?(D+=this.G,(E=l[D])?mn(E,d):l[D]=C):(Me||(Me=ne(this)),(E=Me[D])?mn(E,d):Me[D]=C)}}qt.prototype.toJSON=function(){return St(this.o,Ri,wa)},qt.prototype.C=function(){return!!(Pt(this.o)&2)};function mn(l,d){if(Array.isArray(l)){var g=Pt(l),E=1;!d||g&2||(E|=16),(g&E)!==E&&pn(l,g|E)}}qt.prototype.ja=gs,qt.prototype.toString=function(){return this.o.toString()};function uo(l,d,g){if(g){var E={},L;for(L in g){var N=g[L],D=N.qa;D||(E.J=N.wa||N.oa.W,N.ia?(E.aa=jd(N.ia),D=function(G){return function(te,fe,_e){return G.J(te,fe,_e,G.aa)}}(E)):N.ka?(E.Z=Yd(N.da.P,N.ka),D=function(G){return function(te,fe,_e){return G.J(te,fe,_e,G.Z)}}(E)):D=E.J,N.qa=D),D(d,l,N.da),E={J:E.J,aa:E.aa,Z:E.Z}}}Vn(d,l)}var co=Symbol();function vs(l,d,g){return l[co]||(l[co]=function(E,L){return d(E,L,g)})}function Vd(l){var d=l[co];if(!d){var g=Pu(l);d=function(E,L){return qd(E,L,g)},l[co]=d}return d}function O_(l){var d=l.ia;if(d)return Vd(d);if(d=l.va)return vs(l.da.P,d,l.ka)}function k_(l){var d=O_(l),g=l.da,E=l.oa.U;return d?function(L,N){return E(L,N,g,d)}:function(L,N){return E(L,N,g)}}function Wd(l,d){var g=l[d];return typeof g=="function"&&g.length===0&&(g=g(),l[d]=g),Array.isArray(g)&&(ys in g||_s in g||0<g.length&&typeof g[0]=="function")?g:void 0}function Xd(l,d,g,E,L,N){d.P=l[0];var D=1;if(l.length>D&&typeof l[D]!="number"){var G=l[D++];g(d,G)}for(;D<l.length;){g=l[D++];for(var te=D+1;te<l.length&&typeof l[te]!="number";)te++;switch(G=l[D++],te-=D,te){case 0:E(d,g,G);break;case 1:(te=Wd(l,D))?(D++,L(d,g,G,te)):E(d,g,G,l[D++]);break;case 2:te=D++,te=Wd(l,te),L(d,g,G,te,l[D++]);break;case 3:N(d,g,G,l[D++],l[D++],l[D++]);break;case 4:N(d,g,G,l[D++],l[D++],l[D++],l[D++]);break;default:throw Error("unexpected number of binary field arguments: "+te)}}return d}var Aa=Symbol();function jd(l){var d=l[Aa];if(!d){var g=Cu(l);d=function(E,L){return $d(E,L,g)},l[Aa]=d}return d}function Yd(l,d){var g=l[Aa];return g||(g=function(E,L){return uo(E,L,d)},l[Aa]=g),g}var _s=Symbol();function z_(l,d){l.push(d)}function B_(l,d,g){l.push(d,g.W)}function H_(l,d,g,E){var L=jd(E),N=Cu(E).P,D=g.W;l.push(d,function(G,te,fe){return D(G,te,fe,N,L)})}function G_(l,d,g,E,L,N){var D=Yd(E,N),G=g.W;l.push(d,function(te,fe,_e){return G(te,fe,_e,E,D)})}function Cu(l){var d=l[_s];return d||(d=Xd(l,l[_s]=[],z_,B_,H_,G_),ys in l&&_s in l&&(l.length=0),d)}var ys=Symbol();function V_(l,d){l[0]=d}function W_(l,d,g,E){var L=g.U;l[d]=E?function(N,D,G){return L(N,D,G,E)}:L}function X_(l,d,g,E,L){var N=g.U,D=Vd(E),G=Pu(E).P;l[d]=function(te,fe,_e){return N(te,fe,_e,G,D,L)}}function j_(l,d,g,E,L,N,D){var G=g.U,te=vs(E,L,N);l[d]=function(fe,_e,We){return G(fe,_e,We,E,te,D)}}function Pu(l){var d=l[ys];return d||(d=Xd(l,l[ys]={},V_,W_,X_,j_),ys in l&&_s in l&&(l.length=0),d)}function qd(l,d,g){for(;pt(d)&&d.i!=4;){var E=d.l,L=g[E];if(!L){var N=g[0];N&&(N=N[E])&&(L=g[E]=k_(N))}if(!L||!L(d,l,E)){L=d,E=l,N=L.j,bt(L);var D=L;if(!D.ca){if(L=D.h.h-N,D.h.h=N,D=D.h,L==0)L=ke();else{if(N=H(D,L),D.S&&D.m)L=D.i.subarray(N,N+L);else{D=D.i;var G=N;L=N+L,L=G===L?Ce():X?D.slice(G,L):new Uint8Array(D.subarray(G,L))}L=L.length==0?ke():new He(L,De)}(N=E.R)?N.push(L):E.R=[L]}}}return l}function $d(l,d,g){for(var E=g.length,L=E%2==1,N=L?1:0;N<E;N+=2)(0,g[N+1])(d,l,g[N]);uo(l,d,L?g[0]:void 0)}function xs(l,d){return{U:l,W:d}}var ii=xs(function(l,d,g){if(l.i!==5)return!1;l=l.h;var E=l.i,L=l.h,N=E[L],D=E[L+1],G=E[L+2];return E=E[L+3],qe(l,l.h+4),D=(N<<0|D<<8|G<<16|E<<24)>>>0,l=2*(D>>31)+1,N=D>>>23&255,D&=8388607,Ae(d,g,N==255?D?NaN:1/0*l:N==0?l*Math.pow(2,-149)*D:l*Math.pow(2,N-150)*(D+Math.pow(2,23))),!0},function(l,d,g){if(d=Qe(d,g),d!=null){Fe(l.h,8*g+5),l=l.h;var E=+d;E===0?0<1/E?Pe=we=0:(we=0,Pe=2147483648):isNaN(E)?(we=0,Pe=2147483647):(E=(g=0>E?-2147483648:0)?-E:E,34028234663852886e22<E?(we=0,Pe=(g|2139095040)>>>0):11754943508222875e-54>E?(E=Math.round(E/Math.pow(2,-149)),we=0,Pe=(g|E)>>>0):(d=Math.floor(Math.log(E)/Math.LN2),E*=Math.pow(2,-d),E=Math.round(8388608*E),16777216<=E&&++d,we=0,Pe=(g|d+127<<23|E&8388607)>>>0)),g=Pe,l.h.push(g>>>0&255),l.h.push(g>>>8&255),l.h.push(g>>>16&255),l.h.push(g>>>24&255)}}),Y_=xs(function(l,d,g){if(l.i!==0)return!1;var E=l.h,L=0,N=l=0,D=E.i,G=E.h;do{var te=D[G++];L|=(te&127)<<N,N+=7}while(32>N&&te&128);for(32<N&&(l|=(te&127)>>4),N=3;32>N&&te&128;N+=7)te=D[G++],l|=(te&127)<<N;if(qe(E,G),128>te)E=L>>>0,te=l>>>0,(l=te&2147483648)&&(E=~E+1>>>0,te=~te>>>0,E==0&&(te=te+1>>>0)),E=4294967296*te+(E>>>0);else throw de();return Ae(d,g,l?-E:E),!0},function(l,d,g){d=ye(d,g),d!=null&&(typeof d=="string"&&P(d),d!=null&&(Fe(l.h,8*g),typeof d=="number"?(l=l.h,je(d),Ge(l,Pe,we)):(g=P(d),Ge(l.h,g.i,g.h))))}),q_=xs(function(l,d,g){return l.i!==0?!1:(Ae(d,g,pe(l.h)),!0)},function(l,d,g){if(d=ye(d,g),d!=null&&d!=null)if(Fe(l.h,8*g),l=l.h,g=d,0<=g)Fe(l,g);else{for(d=0;9>d;d++)l.h.push(g&127|128),g>>=7;l.h.push(1)}}),Kd=xs(function(l,d,g){if(l.i!==2)return!1;var E=pe(l.h)>>>0;l=l.h;var L=H(l,E);if(l=l.i,Be){var N=l,D;(D=Te)||(D=Te=new TextDecoder("utf-8",{fatal:!0})),l=L+E,N=L===0&&l===N.length?N:N.subarray(L,l);try{var G=D.decode(N)}catch(We){if(ve===void 0){try{D.decode(new Uint8Array([128]))}catch{}try{D.decode(new Uint8Array([97])),ve=!0}catch{ve=!1}}throw!ve&&(Te=void 0),We}}else{G=L,E=G+E,L=[];for(var te=null,fe,_e;G<E;)fe=l[G++],128>fe?L.push(fe):224>fe?G>=E?le():(_e=l[G++],194>fe||(_e&192)!==128?(G--,le()):L.push((fe&31)<<6|_e&63)):240>fe?G>=E-1?le():(_e=l[G++],(_e&192)!==128||fe===224&&160>_e||fe===237&&160<=_e||((N=l[G++])&192)!==128?(G--,le()):L.push((fe&15)<<12|(_e&63)<<6|N&63)):244>=fe?G>=E-2?le():(_e=l[G++],(_e&192)!==128||(fe<<28)+(_e-144)>>30||((N=l[G++])&192)!==128||((D=l[G++])&192)!==128?(G--,le()):(fe=(fe&7)<<18|(_e&63)<<12|(N&63)<<6|D&63,fe-=65536,L.push((fe>>10&1023)+55296,(fe&1023)+56320))):le(),8192<=L.length&&(te=be(te,L),L.length=0);G=be(te,L)}return Ae(d,g,G),!0},function(l,d,g){if(d=ye(d,g),d!=null){var E=!1;if(E=E===void 0?!1:E,ce){if(E&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(d))throw Error("Found an unpaired surrogate");d=(Ye||(Ye=new TextEncoder)).encode(d)}else{for(var L=0,N=new Uint8Array(3*d.length),D=0;D<d.length;D++){var G=d.charCodeAt(D);if(128>G)N[L++]=G;else{if(2048>G)N[L++]=G>>6|192;else{if(55296<=G&&57343>=G){if(56319>=G&&D<d.length){var te=d.charCodeAt(++D);if(56320<=te&&57343>=te){G=1024*(G-55296)+te-56320+65536,N[L++]=G>>18|240,N[L++]=G>>12&63|128,N[L++]=G>>6&63|128,N[L++]=G&63|128;continue}else D--}if(E)throw Error("Found an unpaired surrogate");G=65533}N[L++]=G>>12|224,N[L++]=G>>6&63|128}N[L++]=G&63|128}}d=L===N.length?N:N.subarray(0,L)}Fe(l.h,8*g+2),Fe(l.h,d.length),Ft(l,l.h.end()),Ft(l,d)}}),Zd=xs(function(l,d,g,E,L){if(l.i!==2)return!1;d=an(d,g,E),g=l.h.j,E=pe(l.h)>>>0;var N=l.h.h+E,D=N-g;if(0>=D&&(l.h.j=N,L(d,l,void 0,void 0,void 0),D=N-l.h.h),D)throw Error("Message parsing ended unexpectedly. Expected to read "+(E+" bytes, instead read "+(E-D)+" bytes, either the data ended unexpectedly or the message misreported its own length"));return l.h.h=N,l.h.j=g,!0},function(l,d,g,E,L){if(d=$e(d,E,g),d!=null)for(E=0;E<d.length;E++){var N=l;Fe(N.h,8*g+2);var D=N.h.end();Ft(N,D),D.push(N.i),N=D,L(d[E],l),D=l;var G=N.pop();for(G=D.i+D.h.length()-G;127<G;)N.push(G&127|128),G>>>=7,D.i++;N.push(G),D.i++}});function Lu(l){return function(d,g){e:{if(zt.length){var E=zt.pop();E.setOptions(g),xt(E.h,d,g),d=E}else d=new dt(d,g);try{var L=Pu(l),N=qd(new L.P,d,L);break e}finally{L=d.h,L.i=null,L.m=!1,L.l=0,L.j=0,L.h=0,L.S=!1,d.l=-1,d.i=-1,100>zt.length&&zt.push(d)}N=void 0}return N}}function bu(l){return function(){var d=new gt;$d(this,d,Cu(l)),Ft(d,d.h.end());for(var g=new Uint8Array(d.i),E=d.j,L=E.length,N=0,D=0;D<L;D++){var G=E[D];g.set(G,N),N+=G.length}return d.j=[g],g}}function fo(l){qt.call(this,l)}v(fo,qt);var Qd=[fo,1,q_,2,ii,3,Kd,4,Kd];fo.prototype.l=bu(Qd);function Du(l){qt.call(this,l,-1,$_)}v(Du,qt),Du.prototype.addClassification=function(l,d){return an(this,1,fo,l,d),this};var $_=[1],Jd=Lu([Du,1,Zd,Qd]);function ho(l){qt.call(this,l)}v(ho,qt);var eh=[ho,1,ii,2,ii,3,ii,4,ii,5,ii];ho.prototype.l=bu(eh);function th(l){qt.call(this,l,-1,K_)}v(th,qt);var K_=[1],nh=Lu([th,1,Zd,eh]);function Ra(l){qt.call(this,l)}v(Ra,qt);var ih=[Ra,1,ii,2,ii,3,ii,4,ii,5,ii,6,Y_],Z_=Lu(ih);Ra.prototype.l=bu(ih);function rh(l,d,g){if(g=l.createShader(g===0?l.VERTEX_SHADER:l.FRAGMENT_SHADER),l.shaderSource(g,d),l.compileShader(g),!l.getShaderParameter(g,l.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+l.getShaderInfoLog(g));return g}function oh(l){return $e(l,fo,1).map(function(d){var g=ye(d,1);return{index:g??0,score:Bt(d,2),label:ye(d,3)!=null?Dt(ye(d,3),""):void 0,displayName:ye(d,4)!=null?Dt(ye(d,4),""):void 0}})}function sh(l){return{x:Bt(l,1),y:Bt(l,2),z:Bt(l,3),visibility:Qe(l,4)!=null?Bt(l,4):void 0}}function ah(l){return l.map(function(d){return $e(nh(d),ho,1).map(sh)})}function Uu(l,d){this.i=l,this.h=d,this.m=0}function lh(l,d,g){return Q_(l,d),typeof l.h.canvas.transferToImageBitmap=="function"?Promise.resolve(l.h.canvas.transferToImageBitmap()):g?Promise.resolve(l.h.canvas):typeof createImageBitmap=="function"?createImageBitmap(l.h.canvas):(l.j===void 0&&(l.j=document.createElement("canvas")),new Promise(function(E){l.j.height=l.h.canvas.height,l.j.width=l.h.canvas.width,l.j.getContext("2d",{}).drawImage(l.h.canvas,0,0,l.h.canvas.width,l.h.canvas.height),E(l.j)}))}function Q_(l,d){var g=l.h;if(l.s===void 0){var E=rh(g,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),L=rh(g,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),N=g.createProgram();if(g.attachShader(N,E),g.attachShader(N,L),g.linkProgram(N),!g.getProgramParameter(N,g.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+g.getProgramInfoLog(N));E=l.s=N,g.useProgram(E),L=g.getUniformLocation(E,"sampler0"),l.l={O:g.getAttribLocation(E,"aVertex"),N:g.getAttribLocation(E,"aTex"),xa:L},l.v=g.createBuffer(),g.bindBuffer(g.ARRAY_BUFFER,l.v),g.enableVertexAttribArray(l.l.O),g.vertexAttribPointer(l.l.O,2,g.FLOAT,!1,0,0),g.bufferData(g.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),g.STATIC_DRAW),g.bindBuffer(g.ARRAY_BUFFER,null),l.u=g.createBuffer(),g.bindBuffer(g.ARRAY_BUFFER,l.u),g.enableVertexAttribArray(l.l.N),g.vertexAttribPointer(l.l.N,2,g.FLOAT,!1,0,0),g.bufferData(g.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),g.STATIC_DRAW),g.bindBuffer(g.ARRAY_BUFFER,null),g.uniform1i(L,0)}E=l.l,g.useProgram(l.s),g.canvas.width=d.width,g.canvas.height=d.height,g.viewport(0,0,d.width,d.height),g.activeTexture(g.TEXTURE0),l.i.bindTexture2d(d.glName),g.enableVertexAttribArray(E.O),g.bindBuffer(g.ARRAY_BUFFER,l.v),g.vertexAttribPointer(E.O,2,g.FLOAT,!1,0,0),g.enableVertexAttribArray(E.N),g.bindBuffer(g.ARRAY_BUFFER,l.u),g.vertexAttribPointer(E.N,2,g.FLOAT,!1,0,0),g.bindFramebuffer(g.DRAW_FRAMEBUFFER?g.DRAW_FRAMEBUFFER:g.FRAMEBUFFER,null),g.clearColor(0,0,0,0),g.clear(g.COLOR_BUFFER_BIT),g.colorMask(!0,!0,!0,!0),g.drawArrays(g.TRIANGLE_FAN,0,4),g.disableVertexAttribArray(E.O),g.disableVertexAttribArray(E.N),g.bindBuffer(g.ARRAY_BUFFER,null),l.i.bindTexture2d(0)}function J_(l){this.h=l}var e0=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function t0(l,d){return d+l}function uh(l,d){window[l]=d}function n0(l){var d=document.createElement("script");return d.setAttribute("src",l),d.setAttribute("crossorigin","anonymous"),new Promise(function(g){d.addEventListener("load",function(){g()},!1),d.addEventListener("error",function(){g()},!1),document.body.appendChild(d)})}function i0(){return I(function(l){switch(l.h){case 1:return l.s=2,w(l,WebAssembly.instantiate(e0),4);case 4:l.h=3,l.s=0;break;case 2:return l.s=0,l.l=null,l.return(!1);case 3:return l.return(!0)}})}function Nu(l){if(this.h=l,this.listeners={},this.l={},this.L={},this.s={},this.v={},this.M=this.u=this.ga=!0,this.I=Promise.resolve(),this.fa="",this.D={},this.locateFile=l&&l.locateFile||t0,typeof window=="object")var d=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if(typeof location<"u")d=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");if(this.ha=d,l.options){d=a(Object.keys(l.options));for(var g=d.next();!g.done;g=d.next()){g=g.value;var E=l.options[g].default;E!==void 0&&(this.l[g]=typeof E=="function"?E():E)}}}t=Nu.prototype,t.close=function(){return this.j&&this.j.delete(),Promise.resolve()};function r0(l){var d,g,E,L,N,D,G,te,fe,_e,We;return I(function(Oe){switch(Oe.h){case 1:return l.ga?(d=l.h.files===void 0?[]:typeof l.h.files=="function"?l.h.files(l.l):l.h.files,w(Oe,i0(),2)):Oe.return();case 2:if(g=Oe.i,typeof window=="object")return uh("createMediapipeSolutionsWasm",{locateFile:l.locateFile}),uh("createMediapipeSolutionsPackedAssets",{locateFile:l.locateFile}),D=d.filter(function(Me){return Me.data!==void 0}),G=d.filter(function(Me){return Me.data===void 0}),te=Promise.all(D.map(function(Me){var Xe=Ca(l,Me.url);if(Me.path!==void 0){var it=Me.path;Xe=Xe.then(function(wt){return l.overrideFile(it,wt),Promise.resolve(wt)})}return Xe})),fe=Promise.all(G.map(function(Me){return Me.simd===void 0||Me.simd&&g||!Me.simd&&!g?n0(l.locateFile(Me.url,l.ha)):Promise.resolve()})).then(function(){var Me,Xe,it;return I(function(wt){if(wt.h==1)return Me=window.createMediapipeSolutionsWasm,Xe=window.createMediapipeSolutionsPackedAssets,it=l,w(wt,Me(Xe),2);it.i=wt.i,wt.h=0})}),_e=function(){return I(function(Me){return l.h.graph&&l.h.graph.url?Me=w(Me,Ca(l,l.h.graph.url),0):(Me.h=0,Me=void 0),Me})}(),w(Oe,Promise.all([fe,te,_e]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return E=d.filter(function(Me){return Me.simd===void 0||Me.simd&&g||!Me.simd&&!g}).map(function(Me){return l.locateFile(Me.url,l.ha)}),importScripts.apply(null,u(E)),L=l,w(Oe,createMediapipeSolutionsWasm(Module),6);case 6:L.i=Oe.i,l.m=new OffscreenCanvas(1,1),l.i.canvas=l.m,N=l.i.GL.createContext(l.m,{antialias:!1,alpha:!1,ua:typeof WebGL2RenderingContext<"u"?2:1}),l.i.GL.makeContextCurrent(N),Oe.h=4;break;case 7:if(l.m=document.createElement("canvas"),We=l.m.getContext("webgl2",{}),!We&&(We=l.m.getContext("webgl",{}),!We))return alert("Failed to create WebGL canvas context when passing video frame."),Oe.return();l.K=We,l.i.canvas=l.m,l.i.createContext(l.m,!0,!0,{});case 4:l.j=new l.i.SolutionWasm,l.ga=!1,Oe.h=0}})}function o0(l){var d,g,E,L,N,D,G,te;return I(function(fe){if(fe.h==1){if(l.h.graph&&l.h.graph.url&&l.fa===l.h.graph.url)return fe.return();if(l.u=!0,!l.h.graph||!l.h.graph.url){fe.h=2;return}return l.fa=l.h.graph.url,w(fe,Ca(l,l.h.graph.url),3)}for(fe.h!=2&&(d=fe.i,l.j.loadGraph(d)),g=a(Object.keys(l.D)),E=g.next();!E.done;E=g.next())L=E.value,l.j.overrideFile(L,l.D[L]);if(l.D={},l.h.listeners)for(N=a(l.h.listeners),D=N.next();!D.done;D=N.next())G=D.value,u0(l,G);te=l.l,l.l={},l.setOptions(te),fe.h=0})}t.reset=function(){var l=this;return I(function(d){l.j&&(l.j.reset(),l.s={},l.v={}),d.h=0})},t.setOptions=function(l,d){var g=this;if(d=d||this.h.options){for(var E=[],L=[],N={},D=a(Object.keys(l)),G=D.next();!G.done;N={X:N.X,Y:N.Y},G=D.next())if(G=G.value,!(G in this.l&&this.l[G]===l[G])){this.l[G]=l[G];var te=d[G];te!==void 0&&(te.onChange&&(N.X=te.onChange,N.Y=l[G],E.push(function(fe){return function(){var _e;return I(function(We){if(We.h==1)return w(We,fe.X(fe.Y),2);_e=We.i,_e===!0&&(g.u=!0),We.h=0})}}(N))),te.graphOptionXref&&(G=Object.assign({},{calculatorName:"",calculatorIndex:0},te.graphOptionXref,{valueNumber:te.type===1?l[G]:0,valueBoolean:te.type===0?l[G]:!1,valueString:te.type===2?l[G]:""}),L.push(G)))}(E.length!==0||L.length!==0)&&(this.u=!0,this.H=(this.H===void 0?[]:this.H).concat(L),this.F=(this.F===void 0?[]:this.F).concat(E))}};function s0(l){var d,g,E,L,N,D,G;return I(function(te){switch(te.h){case 1:if(!l.u)return te.return();if(!l.F){te.h=2;break}d=a(l.F),g=d.next();case 3:if(g.done){te.h=5;break}return E=g.value,w(te,E(),4);case 4:g=d.next(),te.h=3;break;case 5:l.F=void 0;case 2:if(l.H){for(L=new l.i.GraphOptionChangeRequestList,N=a(l.H),D=N.next();!D.done;D=N.next())G=D.value,L.push_back(G);l.j.changeOptions(L),L.delete(),l.H=void 0}l.u=!1,te.h=0}})}t.initialize=function(){var l=this;return I(function(d){return d.h==1?w(d,r0(l),2):d.h!=3?w(d,o0(l),3):w(d,s0(l),0)})};function Ca(l,d){var g,E;return I(function(L){return d in l.L?L.return(l.L[d]):(g=l.locateFile(d,""),E=fetch(g).then(function(N){return N.arrayBuffer()}),l.L[d]=E,L.return(E))})}t.overrideFile=function(l,d){this.j?this.j.overrideFile(l,d):this.D[l]=d},t.clearOverriddenFiles=function(){this.D={},this.j&&this.j.clearOverriddenFiles()},t.send=function(l,d){var g=this,E,L,N,D,G,te,fe,_e,We;return I(function(Oe){switch(Oe.h){case 1:return g.h.inputs?(E=1e3*(d??performance.now()),w(Oe,g.I,2)):Oe.return();case 2:return w(Oe,g.initialize(),3);case 3:for(L=new g.i.PacketDataList,N=a(Object.keys(l)),D=N.next();!D.done;D=N.next())if(G=D.value,te=g.h.inputs[G]){e:{var Me=l[G];switch(te.type){case"video":var Xe=g.s[te.stream];if(Xe||(Xe=new Uu(g.i,g.K),g.s[te.stream]=Xe),Xe.m===0&&(Xe.m=Xe.i.createTexture()),typeof HTMLVideoElement<"u"&&Me instanceof HTMLVideoElement)var it=Me.videoWidth,wt=Me.videoHeight;else typeof HTMLImageElement<"u"&&Me instanceof HTMLImageElement?(it=Me.naturalWidth,wt=Me.naturalHeight):(it=Me.width,wt=Me.height);wt={glName:Xe.m,width:it,height:wt},it=Xe.h,it.canvas.width=wt.width,it.canvas.height=wt.height,it.activeTexture(it.TEXTURE0),Xe.i.bindTexture2d(Xe.m),it.texImage2D(it.TEXTURE_2D,0,it.RGBA,it.RGBA,it.UNSIGNED_BYTE,Me),Xe.i.bindTexture2d(0),Xe=wt;break e;case"detections":for(Xe=g.s[te.stream],Xe||(Xe=new J_(g.i),g.s[te.stream]=Xe),Xe.data||(Xe.data=new Xe.h.DetectionListData),Xe.data.reset(Me.length),wt=0;wt<Me.length;++wt){it=Me[wt];var Et=Xe.data,Jt=Et.setBoundingBox,Xn=wt,Mn=it.la,ut=new Ra;if(lt(ut,1,Mn.ra),lt(ut,2,Mn.sa),lt(ut,3,Mn.height),lt(ut,4,Mn.width),lt(ut,5,Mn.rotation),Ae(ut,6,Mn.pa),Mn=ut.l(),Jt.call(Et,Xn,Mn),it.ea)for(Et=0;Et<it.ea.length;++Et){ut=it.ea[Et],Jt=Xe.data,Xn=Jt.addNormalizedLandmark,Mn=wt,ut=Object.assign({},ut,{visibility:ut.visibility?ut.visibility:0});var en=new ho;lt(en,1,ut.x),lt(en,2,ut.y),lt(en,3,ut.z),ut.visibility&&lt(en,4,ut.visibility),ut=en.l(),Xn.call(Jt,Mn,ut)}if(it.ba)for(Et=0;Et<it.ba.length;++Et)Jt=Xe.data,Xn=Jt.addClassification,Mn=wt,ut=it.ba[Et],en=new fo,lt(en,2,ut.score),ut.index&&Ae(en,1,ut.index),ut.label&&Ae(en,3,ut.label),ut.displayName&&Ae(en,4,ut.displayName),ut=en.l(),Xn.call(Jt,Mn,ut)}Xe=Xe.data;break e;default:Xe={}}}switch(fe=Xe,_e=te.stream,te.type){case"video":L.pushTexture2d(Object.assign({},fe,{stream:_e,timestamp:E}));break;case"detections":We=fe,We.stream=_e,We.timestamp=E,L.pushDetectionList(We);break;default:throw Error("Unknown input config type: '"+te.type+"'")}}return g.j.send(L),w(Oe,g.I,4);case 4:L.delete(),Oe.h=0}})};function a0(l,d,g){var E,L,N,D,G,te,fe,_e,We,Oe,Me,Xe,it,wt;return I(function(Et){switch(Et.h){case 1:if(!g)return Et.return(d);for(E={},L=0,N=a(Object.keys(g)),D=N.next();!D.done;D=N.next())G=D.value,te=g[G],typeof te!="string"&&te.type==="texture"&&d[te.stream]!==void 0&&++L;1<L&&(l.M=!1),fe=a(Object.keys(g)),D=fe.next();case 2:if(D.done){Et.h=4;break}if(_e=D.value,We=g[_e],typeof We=="string")return it=E,wt=_e,w(Et,l0(l,_e,d[We]),14);if(Oe=d[We.stream],We.type==="detection_list"){if(Oe){for(var Jt=Oe.getRectList(),Xn=Oe.getLandmarksList(),Mn=Oe.getClassificationsList(),ut=[],en=0;en<Jt.size();++en){var $i=Z_(Jt.get(en)),c0=Bt($i,1),f0=Bt($i,2),d0=Bt($i,3),h0=Bt($i,4),p0=Bt($i,5,0),Pa=void 0;Pa=Pa===void 0?0:Pa,$i={la:{ra:c0,sa:f0,height:d0,width:h0,rotation:p0,pa:Dt(ye($i,6),Pa)},ea:$e(nh(Xn.get(en)),ho,1).map(sh),ba:oh(Jd(Mn.get(en)))},ut.push($i)}Jt=ut}else Jt=[];E[_e]=Jt,Et.h=7;break}if(We.type==="proto_list"){if(Oe){for(Jt=Array(Oe.size()),Xn=0;Xn<Oe.size();Xn++)Jt[Xn]=Oe.get(Xn);Oe.delete()}else Jt=[];E[_e]=Jt,Et.h=7;break}if(Oe===void 0){Et.h=3;break}if(We.type==="float_list"){E[_e]=Oe,Et.h=7;break}if(We.type==="proto"){E[_e]=Oe,Et.h=7;break}if(We.type!=="texture")throw Error("Unknown output config type: '"+We.type+"'");return Me=l.v[_e],Me||(Me=new Uu(l.i,l.K),l.v[_e]=Me),w(Et,lh(Me,Oe,l.M),13);case 13:Xe=Et.i,E[_e]=Xe;case 7:We.transform&&E[_e]&&(E[_e]=We.transform(E[_e])),Et.h=3;break;case 14:it[wt]=Et.i;case 3:D=fe.next(),Et.h=2;break;case 4:return Et.return(E)}})}function l0(l,d,g){var E;return I(function(L){return typeof g=="number"||g instanceof Uint8Array||g instanceof l.i.Uint8BlobList?L.return(g):g instanceof l.i.Texture2dDataOut?(E=l.v[d],E||(E=new Uu(l.i,l.K),l.v[d]=E),L.return(lh(E,g,l.M))):L.return(void 0)})}function u0(l,d){for(var g=d.name||"$",E=[].concat(u(d.wants)),L=new l.i.StringList,N=a(d.wants),D=N.next();!D.done;D=N.next())L.push_back(D.value);N=l.i.PacketListener.implement({onResults:function(G){for(var te={},fe=0;fe<d.wants.length;++fe)te[E[fe]]=G.get(fe);var _e=l.listeners[g];_e&&(l.I=a0(l,te,d.outs).then(function(We){We=_e(We);for(var Oe=0;Oe<d.wants.length;++Oe){var Me=te[E[Oe]];typeof Me=="object"&&Me.hasOwnProperty&&Me.hasOwnProperty("delete")&&Me.delete()}We&&(l.I=We)}))}}),l.j.attachMultiListener(L,N),L.delete()}t.onResults=function(l,d){this.listeners[d||"$"]=l},K("Solution",Nu),K("OptionType",{BOOL:0,NUMBER:1,ta:2,0:"BOOL",1:"NUMBER",2:"STRING"});function ch(l){return l===void 0&&(l=0),l===1?"hand_landmark_full.tflite":"hand_landmark_lite.tflite"}function fh(l){var d=this;l=l||{},this.h=new Nu({locateFile:l.locateFile,files:function(g){return[{url:"hands_solution_packed_assets_loader.js"},{simd:!1,url:"hands_solution_wasm_bin.js"},{simd:!0,url:"hands_solution_simd_wasm_bin.js"},{data:!0,url:ch(g.modelComplexity)}]},graph:{url:"hands.binarypb"},inputs:{image:{type:"video",stream:"input_frames_gpu"}},listeners:[{wants:["multi_hand_landmarks","multi_hand_world_landmarks","image_transformed","multi_handedness"],outs:{image:"image_transformed",multiHandLandmarks:{type:"proto_list",stream:"multi_hand_landmarks",transform:ah},multiHandWorldLandmarks:{type:"proto_list",stream:"multi_hand_world_landmarks",transform:ah},multiHandedness:{type:"proto_list",stream:"multi_handedness",transform:function(g){return g.map(function(E){return oh(Jd(E))[0]})}}}}],options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:typeof window!="object"||window.navigator===void 0?!1:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},maxNumHands:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculator",fieldName:"int_value"}},modelComplexity:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorModelComplexity",fieldName:"int_value"},onChange:function(g){var E,L,N;return I(function(D){return D.h==1?(E=ch(g),L="third_party/mediapipe/modules/hand_landmark/"+E,w(D,Ca(d.h,E),2)):(N=D.i,d.h.overrideFile(L,N),D.return(!0))})}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"handlandmarktrackinggpu__palmdetectiongpu__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"handlandmarktrackinggpu__handlandmarkgpu__ThresholdingCalculator",fieldName:"threshold"}}}})}t=fh.prototype,t.close=function(){return this.h.close(),Promise.resolve()},t.onResults=function(l){this.h.onResults(l)},t.initialize=function(){var l=this;return I(function(d){return w(d,l.h.initialize(),0)})},t.reset=function(){this.h.reset()},t.send=function(l){var d=this;return I(function(g){return w(g,d.h.send(l),0)})},t.setOptions=function(l){this.h.setOptions(l)},K("Hands",fh),K("HAND_CONNECTIONS",[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]]),K("VERSION","0.4.1675469240")}).call(jo);var nA={};(function(){function t(S){var I=0;return function(){return I<S.length?{done:!1,value:S[I++]}:{done:!0}}}var e=typeof Object.defineProperties=="function"?Object.defineProperty:function(S,I,$){return S==Array.prototype||S==Object.prototype||(S[I]=$.value),S};function n(S){S=[typeof globalThis=="object"&&globalThis,S,typeof window=="object"&&window,typeof self=="object"&&self,typeof jo=="object"&&jo];for(var I=0;I<S.length;++I){var $=S[I];if($&&$.Math==Math)return $}throw Error("Cannot find global object")}var i=n(this);function r(S,I){if(I)e:{var $=i;S=S.split(".");for(var re=0;re<S.length-1;re++){var z=S[re];if(!(z in $))break e;$=$[z]}S=S[S.length-1],re=$[S],I=I(re),I!=re&&I!=null&&e($,S,{configurable:!0,writable:!0,value:I})}}r("Symbol",function(S){function I(K){if(this instanceof I)throw new TypeError("Symbol is not a constructor");return new $(re+(K||"")+"_"+z++,K)}function $(K,B){this.g=K,e(this,"description",{configurable:!0,writable:!0,value:B})}if(S)return S;$.prototype.toString=function(){return this.g};var re="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",z=0;return I}),r("Symbol.iterator",function(S){if(S)return S;S=Symbol("Symbol.iterator");for(var I="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),$=0;$<I.length;$++){var re=i[I[$]];typeof re=="function"&&typeof re.prototype[S]!="function"&&e(re.prototype,S,{configurable:!0,writable:!0,value:function(){return o(t(this))}})}return S});function o(S){return S={next:S},S[Symbol.iterator]=function(){return this},S}function s(S){var I=typeof Symbol<"u"&&Symbol.iterator&&S[Symbol.iterator];return I?I.call(S):{next:t(S)}}function a(){this.i=!1,this.g=null,this.o=void 0,this.j=1,this.m=0,this.h=null}function u(S){if(S.i)throw new TypeError("Generator is already running");S.i=!0}a.prototype.l=function(S){this.o=S};function c(S,I){S.h={F:I,G:!0},S.j=S.m}a.prototype.return=function(S){this.h={return:S},this.j=this.m};function h(S){this.g=new a,this.h=S}function p(S,I){u(S.g);var $=S.g.g;return $?m(S,"return"in $?$.return:function(re){return{value:re,done:!0}},I,S.g.return):(S.g.return(I),_(S))}function m(S,I,$,re){try{var z=I.call(S.g.g,$);if(!(z instanceof Object))throw new TypeError("Iterator result "+z+" is not an object");if(!z.done)return S.g.i=!1,z;var K=z.value}catch(B){return S.g.g=null,c(S.g,B),_(S)}return S.g.g=null,re.call(S.g,K),_(S)}function _(S){for(;S.g.j;)try{var I=S.h(S.g);if(I)return S.g.i=!1,{value:I.value,done:!1}}catch($){S.g.o=void 0,c(S.g,$)}if(S.g.i=!1,S.g.h){if(I=S.g.h,S.g.h=null,I.G)throw I.F;return{value:I.return,done:!0}}return{value:void 0,done:!0}}function M(S){this.next=function(I){return u(S.g),S.g.g?I=m(S,S.g.g.next,I,S.g.l):(S.g.l(I),I=_(S)),I},this.throw=function(I){return u(S.g),S.g.g?I=m(S,S.g.g.throw,I,S.g.l):(c(S.g,I),I=_(S)),I},this.return=function(I){return p(S,I)},this[Symbol.iterator]=function(){return this}}function T(S){function I(re){return S.next(re)}function $(re){return S.throw(re)}return new Promise(function(re,z){function K(B){B.done?re(B.value):Promise.resolve(B.value).then(I,$).then(K,z)}K(S.next())})}r("Promise",function(S){function I(B){this.h=0,this.i=void 0,this.g=[],this.o=!1;var k=this.j();try{B(k.resolve,k.reject)}catch(F){k.reject(F)}}function $(){this.g=null}function re(B){return B instanceof I?B:new I(function(k){k(B)})}if(S)return S;$.prototype.h=function(B){if(this.g==null){this.g=[];var k=this;this.i(function(){k.l()})}this.g.push(B)};var z=i.setTimeout;$.prototype.i=function(B){z(B,0)},$.prototype.l=function(){for(;this.g&&this.g.length;){var B=this.g;this.g=[];for(var k=0;k<B.length;++k){var F=B[k];B[k]=null;try{F()}catch(V){this.j(V)}}}this.g=null},$.prototype.j=function(B){this.i(function(){throw B})},I.prototype.j=function(){function B(V){return function(W){F||(F=!0,V.call(k,W))}}var k=this,F=!1;return{resolve:B(this.A),reject:B(this.l)}},I.prototype.A=function(B){if(B===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(B instanceof I)this.C(B);else{e:switch(typeof B){case"object":var k=B!=null;break e;case"function":k=!0;break e;default:k=!1}k?this.v(B):this.m(B)}},I.prototype.v=function(B){var k=void 0;try{k=B.then}catch(F){this.l(F);return}typeof k=="function"?this.D(k,B):this.m(B)},I.prototype.l=function(B){this.u(2,B)},I.prototype.m=function(B){this.u(1,B)},I.prototype.u=function(B,k){if(this.h!=0)throw Error("Cannot settle("+B+", "+k+"): Promise already settled in state"+this.h);this.h=B,this.i=k,this.h===2&&this.B(),this.H()},I.prototype.B=function(){var B=this;z(function(){if(B.I()){var k=i.console;typeof k<"u"&&k.error(B.i)}},1)},I.prototype.I=function(){if(this.o)return!1;var B=i.CustomEvent,k=i.Event,F=i.dispatchEvent;return typeof F>"u"?!0:(typeof B=="function"?B=new B("unhandledrejection",{cancelable:!0}):typeof k=="function"?B=new k("unhandledrejection",{cancelable:!0}):(B=i.document.createEvent("CustomEvent"),B.initCustomEvent("unhandledrejection",!1,!0,B)),B.promise=this,B.reason=this.i,F(B))},I.prototype.H=function(){if(this.g!=null){for(var B=0;B<this.g.length;++B)K.h(this.g[B]);this.g=null}};var K=new $;return I.prototype.C=function(B){var k=this.j();B.s(k.resolve,k.reject)},I.prototype.D=function(B,k){var F=this.j();try{B.call(k,F.resolve,F.reject)}catch(V){F.reject(V)}},I.prototype.then=function(B,k){function F(Q,q){return typeof Q=="function"?function(se){try{V(Q(se))}catch(ae){W(ae)}}:q}var V,W,Z=new I(function(Q,q){V=Q,W=q});return this.s(F(B,V),F(k,W)),Z},I.prototype.catch=function(B){return this.then(void 0,B)},I.prototype.s=function(B,k){function F(){switch(V.h){case 1:B(V.i);break;case 2:k(V.i);break;default:throw Error("Unexpected state: "+V.h)}}var V=this;this.g==null?K.h(F):this.g.push(F),this.o=!0},I.resolve=re,I.reject=function(B){return new I(function(k,F){F(B)})},I.race=function(B){return new I(function(k,F){for(var V=s(B),W=V.next();!W.done;W=V.next())re(W.value).s(k,F)})},I.all=function(B){var k=s(B),F=k.next();return F.done?re([]):new I(function(V,W){function Z(se){return function(ae){Q[se]=ae,q--,q==0&&V(Q)}}var Q=[],q=0;do Q.push(void 0),q++,re(F.value).s(Z(Q.length-1),W),F=k.next();while(!F.done)})},I});var v=typeof Object.assign=="function"?Object.assign:function(S,I){for(var $=1;$<arguments.length;$++){var re=arguments[$];if(re)for(var z in re)Object.prototype.hasOwnProperty.call(re,z)&&(S[z]=re[z])}return S};r("Object.assign",function(S){return S||v});var f=this||self,x={facingMode:"user",width:640,height:480};function y(S,I){this.video=S,this.i=0,this.h=Object.assign(Object.assign({},x),I)}y.prototype.stop=function(){var S=this,I,$,re,z;return T(new M(new h(function(K){if(S.g){for(I=S.g.getTracks(),$=s(I),re=$.next();!re.done;re=$.next())z=re.value,z.stop();S.g=void 0}K.j=0})))},y.prototype.start=function(){var S=this,I;return T(new M(new h(function($){return navigator.mediaDevices&&navigator.mediaDevices.getUserMedia||alert("No navigator.mediaDevices.getUserMedia exists."),I=S.h,$.return(navigator.mediaDevices.getUserMedia({video:{facingMode:I.facingMode,width:I.width,height:I.height}}).then(function(re){O(S,re)}).catch(function(re){var z="Failed to acquire camera feed: "+re;throw console.error(z),alert(z),re}))})))};function w(S){window.requestAnimationFrame(function(){U(S)})}function O(S,I){S.g=I,S.video.srcObject=I,S.video.onloadedmetadata=function(){S.video.play(),w(S)}}function U(S){var I=null;S.video.paused||S.video.currentTime===S.i||(S.i=S.video.currentTime,I=S.h.onFrame()),I?I.then(function(){w(S)}):w(S)}var b=["Camera"],Y=f;b[0]in Y||typeof Y.execScript>"u"||Y.execScript("var "+b[0]);for(var R;b.length&&(R=b.shift());)b.length||y===void 0?Y[R]&&Y[R]!==Object.prototype[R]?Y=Y[R]:Y=Y[R]={}:Y[R]=y}).call(jo);const iA="/audio.mp3",rA=["/image1.jpeg","/image2.jpeg","/image3.jpeg","/image4.jpeg","/image5.jpeg"],Yn={goldCount:2e3,redCount:300,giftCount:150,explodeRadius:65,photoOrbitRadius:25,treeHeight:70,treeBaseRadius:35};function kc(t){const e=document.createElement("canvas");e.width=128,e.height=128;const n=e.getContext("2d"),i=64,r=64;if(t==="gold_glow"){const o=n.createRadialGradient(i,r,0,i,r,40);o.addColorStop(0,"#FFFFFF"),o.addColorStop(.2,"#FFFFE0"),o.addColorStop(.5,"#FFD700"),o.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=o,n.fillRect(0,0,128,128)}else if(t==="red_light"){const o=n.createRadialGradient(i,r,0,i,r,50);o.addColorStop(0,"#FFAAAA"),o.addColorStop(.3,"#FF0000"),o.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=o,n.fillRect(0,0,128,128)}else t==="gift_red"&&(n.fillStyle="#D32F2F",n.fillRect(20,20,88,88),n.fillStyle="#FFD700",n.fillRect(54,20,20,88),n.fillRect(20,54,88,20),n.strokeStyle="rgba(0,0,0,0.3)",n.lineWidth=2,n.strokeRect(20,20,88,88));return new bl(e)}function oA({started:t,onStart:e}){const n=Mt.useRef(null),i=Mt.useRef(null),r=Mt.useRef(null),o=Mt.useRef(null),s=Mt.useRef(null),a=Mt.useRef(null),u=Mt.useRef(null),c=Mt.useRef(null),h=Mt.useRef(null),p=Mt.useRef(null),m=Mt.useRef(null),_=Mt.useRef(null),M=Mt.useRef(null),T=Mt.useRef([]),v=Mt.useRef(null),f=Mt.useRef(null),x=Mt.useRef(null),y=Mt.useRef("TREE"),w=Mt.useRef(.5),O=Mt.useRef(0),U=Mt.useMemo(()=>({gold:kc("gold_glow"),red:kc("red_light"),gift:kc("gift_red")}),[]),b=Mt.useMemo(()=>{const k=new eA;return rA.map(F=>k.load(F))},[]);Mt.useEffect(()=>{if(!t)return;const k=[];try{x.current=new Audio(iA),x.current.loop=!0,x.current.volume=1,x.current.play().catch(()=>null),K(),B();const F=()=>{s.current&&a.current&&(s.current.aspect=window.innerWidth/window.innerHeight,s.current.updateProjectionMatrix(),a.current.setSize(window.innerWidth,window.innerHeight))};window.addEventListener("resize",F),k.push(()=>window.removeEventListener("resize",F))}catch(F){console.error("Error initializing:",F)}return()=>{k.forEach(F=>F()),Y(),R(),v.current&&v.current.stop(),x.current&&(x.current.pause(),x.current=null)}},[t,b,U]);const Y=()=>{u.current&&(cancelAnimationFrame(u.current),u.current=null)},R=()=>{const k=a.current;k&&(k.dispose(),a.current=null),[c,h,p].forEach(F=>{F.current&&(F.current.geometry.dispose(),F.current.material.dispose(),F.current=null)}),T.current.forEach(F=>{F.geometry&&F.geometry.dispose(),F.material&&F.material.dispose()}),T.current=[],o.current=null,s.current=null},S=(k,F,V)=>{const W=[],Z=[],Q=[],q=[],se=[],ae=[];for(let De=0;De<F;De+=1){const X=Math.random()*Yn.treeHeight,Pe=X-Yn.treeHeight/2,we=k==="gold"?Math.sqrt(Math.random()):.9+Math.random()*.1,Ue=(1-X/Yn.treeHeight)*Yn.treeBaseRadius*we,ht=Math.random()*Math.PI*2;Q.push(Ue*Math.cos(ht),Pe,Ue*Math.sin(ht));const Ze=Math.random(),P=Math.random(),A=Math.acos(2*P-1),ee=2*Math.PI*Ze,de=k==="gift"?1.2:1,ue=Yn.explodeRadius*Math.cbrt(Math.random())*de;Z.push(ue*Math.sin(A)*Math.cos(ee),ue*Math.sin(A)*Math.sin(ee),ue*Math.cos(A));const le=Math.random()*Math.PI*2;let be=16*Math.pow(Math.sin(le),3),ve=13*Math.cos(le)-5*Math.cos(2*le)-2*Math.cos(3*le)-Math.cos(4*le);const Te=Math.pow(Math.random(),.3);be*=Te,ve*=Te;let Be=(Math.random()-.5)*8*Te;const Ye=1;be+=(Math.random()-.5)*Ye,ve+=(Math.random()-.5)*Ye,Be+=(Math.random()-.5)*Ye;const ce=2.2;q.push(be*ce,ve*ce+5,Be),W.push(Q[De*3],Q[De*3+1],Q[De*3+2]),se.push(V),ae.push(Math.random()*Math.PI*2)}const ge=new Yi;ge.setAttribute("position",new Bi(W,3)),ge.setAttribute("size",new Bi(se,1));const me=new Float32Array(F*3),Ne=new ft;k==="gold"?Ne.setHex(16766720):k==="red"?Ne.setHex(16711680):Ne.setHex(16777215);for(let De=0;De<F;De+=1)me[De*3]=Ne.r,me[De*3+1]=Ne.g,me[De*3+2]=Ne.b;ge.setAttribute("color",new gi(me,3)),ge.userData={tree:Q,explode:Z,heart:q,phases:ae,baseColor:Ne,baseSize:V};const Ie=new F_({size:V,map:U[k],transparent:!0,opacity:1,vertexColors:!0,blending:k==="gift"?Xr:Vo,depthWrite:!1,sizeAttenuation:!0}),Ce=new Kw(ge,Ie);return o.current.add(Ce),Ce},I=()=>{const k=new sr(8,8),F=new sr(9,9),V=new kr({color:16766720});for(let W=0;W<5;W+=1){const Z=new kr({map:b[W],side:Mi}),Q=new On(k,Z),q=new On(F,V);q.position.z=-.1,Q.add(q),Q.visible=!1,Q.scale.set(0,0,0),o.current.add(Q),T.current.push(Q)}},$=()=>{const k=document.createElement("canvas");k.width=1024,k.height=256;const F=k.getContext("2d");F.font='bold italic 90px "Times New Roman"',F.fillStyle="#FFD700",F.textAlign="center",F.shadowColor="#FF0000",F.shadowBlur=40,F.fillText("MERRY CHRISTMAS",512,130);const V=new bl(k),W=new kr({map:V,transparent:!0,blending:Vo});m.current=new On(new sr(60,15),W),m.current.position.set(0,50,0),o.current.add(m.current);const Z=document.createElement("canvas");Z.width=128,Z.height=128;const Q=Z.getContext("2d");Q.fillStyle="#FFFF00",Q.shadowColor="#FFF",Q.shadowBlur=20,Q.beginPath();const q=64,se=64,ae=50,ge=20;for(let Pe=0;Pe<5;Pe+=1)Q.lineTo(q+Math.cos((18+Pe*72)/180*Math.PI)*ae,se-Math.sin((18+Pe*72)/180*Math.PI)*ae),Q.lineTo(q+Math.cos((54+Pe*72)/180*Math.PI)*ge,se-Math.sin((54+Pe*72)/180*Math.PI)*ge);Q.closePath(),Q.fill();const me=new bl(Z),Ne=new kr({map:me,transparent:!0,blending:Vo});_.current=new On(new sr(12,12),Ne),_.current.position.set(0,Yn.treeHeight/2+2,0),o.current.add(_.current);const Ie=document.createElement("canvas");Ie.width=1024,Ie.height=256;const Ce=Ie.getContext("2d");Ce.font='bold 120px "Segoe UI", sans-serif',Ce.fillStyle="#FF69B4",Ce.textAlign="center",Ce.shadowColor="#FF1493",Ce.shadowBlur=40,Ce.fillText("I LOVE YOU ❤️",512,130);const De=new bl(Ie),X=new kr({map:De,transparent:!0,blending:Vo});M.current=new On(new sr(70,18),X),M.current.position.set(0,0,20),M.current.visible=!1,o.current.add(M.current)},re=(k,F,V,W,Z,Q)=>{const q=k.geometry.attributes.position.array,se=k.geometry.attributes.size.array,ae=k.geometry.attributes.color.array,ge=k.geometry.userData.phases,me=k.geometry.userData.baseColor,Ne=k.geometry.userData.baseSize,Ie=V==="TREE"?"tree":V==="HEART"?"heart":"explode",Ce=k.geometry.userData[V==="PHOTO"?"explode":Ie];for(let X=0;X<q.length;X+=1)q[X]+=(Ce[X]-q[X])*W;k.geometry.attributes.position.needsUpdate=!0;const De=q.length/3;if(V==="TREE"){k.rotation.y+=.003;for(let X=0;X<De;X+=1){se[X]=Ne;let Pe=1;F==="red"?Pe=.5+.5*Math.sin(Q*3+ge[X]):F==="gold"&&(Pe=.8+.4*Math.sin(Q*10+ge[X])),ae[X*3]=me.r*Pe,ae[X*3+1]=me.g*Pe,ae[X*3+2]=me.b*Pe}k.geometry.attributes.color.needsUpdate=!0,k.geometry.attributes.size.needsUpdate=!0}else if(V==="HEART"){k.rotation.y=0;const X=1+Math.abs(Math.sin(Q*3))*.15;k.scale.set(X,X,X);for(let Pe=0;Pe<De;Pe+=1)ae[Pe*3]=me.r,ae[Pe*3+1]=me.g,ae[Pe*3+2]=me.b,Pe%3===0?se[Pe]=Ne:se[Pe]=0;k.geometry.attributes.color.needsUpdate=!0,k.geometry.attributes.size.needsUpdate=!0}else{k.scale.set(1,1,1),k.rotation.y+=(Z-k.rotation.y)*.1;for(let X=0;X<De;X+=1){se[X]=Ne;let Pe=1;(F==="gold"||F==="red")&&(Pe=.8+.5*Math.sin(Q*12+ge[X])),ae[X*3]=me.r*Pe,ae[X*3+1]=me.g*Pe,ae[X*3+2]=me.b*Pe}k.geometry.attributes.size.needsUpdate=!0,k.geometry.attributes.color.needsUpdate=!0}},z=()=>{u.current=requestAnimationFrame(z);const k=Date.now()*.001,F=.08,V=(w.current-.5)*4,W=y.current;if(re(c.current,"gold",W,F,V,k),re(h.current,"red",W,F,V,k),re(p.current,"gift",W,F,V,k),T.current.forEach((Z,Q)=>{!Z.material.map&&b[Q]&&(Z.material.map=b[Q],Z.material.needsUpdate=!0)}),W==="TREE")m.current.visible=!0,_.current.visible=!0,M.current.visible=!1,m.current.scale.lerp(new J(1,1,1),.1),_.current.rotation.z-=.02,_.current.material.opacity=.7+.3*Math.sin(k*5),T.current.forEach(Z=>{Z.scale.lerp(new J(0,0,0),.1),Z.visible=!1});else if(W==="HEART"){m.current.visible=!1,_.current.visible=!1,M.current.visible=!0,T.current.forEach(Q=>{Q.visible=!1});const Z=1+Math.abs(Math.sin(k*3))*.1;M.current.scale.set(Z,Z,1)}else if(W==="EXPLODE"){m.current.visible=!1,_.current.visible=!1,M.current.visible=!1;const Z=c.current.rotation.y,Q=Math.PI*2/5;let q=0,se=-999;T.current.forEach((ae,ge)=>{ae.visible=!0;const me=Z+ge*Q,Ne=Math.sin(me)*Yn.photoOrbitRadius,Ie=Math.cos(me)*Yn.photoOrbitRadius,Ce=Math.sin(k+ge)*3;if(ae.position.lerp(new J(Ne,Ce,Ie),.1),ae.lookAt(s.current.position),Ie>se&&(se=Ie,q=ge),Ie>5){const De=1+Ie/Yn.photoOrbitRadius*.8;ae.scale.lerp(new J(De,De,De),.1)}else ae.scale.lerp(new J(.6,.6,.6),.1)}),O.current=q}else W==="PHOTO"&&(M.current.visible=!1,T.current.forEach((Z,Q)=>{Q===O.current?(Z.position.lerp(new J(0,0,60),.1),Z.scale.lerp(new J(5,5,5),.1),Z.lookAt(s.current.position),Z.rotation.z=0):Z.scale.lerp(new J(0,0,0),.1)}));a.current.render(o.current,s.current)},K=()=>{const k=n.current;o.current=new $w,o.current.fog=new Hd(0,.002),s.current=new Zn(60,window.innerWidth/window.innerHeight,.1,1e3),s.current.position.z=100,a.current=new I_({antialias:!0,alpha:!1}),a.current.setSize(window.innerWidth,window.innerHeight),a.current.setPixelRatio(Math.min(window.devicePixelRatio,2)),k.appendChild(a.current.domElement),c.current=S("gold",Yn.goldCount,2),h.current=S("red",Yn.redCount,3.5),p.current=S("gift",Yn.giftCount,3),I(),$(),z()},B=()=>{const k=i.current,V=r.current.getContext("2d");f.current=new tA.Hands({locateFile:W=>`https://cdn.jsdelivr.net/npm/@mediapipe/hands/${W}`}),f.current.setOptions({maxNumHands:2,modelComplexity:1,minDetectionConfidence:.5,minTrackingConfidence:.5}),f.current.onResults(W=>{if(V.clearRect(0,0,100,75),V.drawImage(W.image,0,0,100,75),W.multiHandLandmarks.length===2){const Z=W.multiHandLandmarks[0],Q=W.multiHandLandmarks[1],q=Math.hypot(Z[8].x-Q[8].x,Z[8].y-Q[8].y),se=Math.hypot(Z[4].x-Q[4].x,Z[4].y-Q[4].y);if(q<.15&&se<.15){y.current="HEART";return}}if(W.multiHandLandmarks.length>0){const Z=W.multiHandLandmarks[0];w.current=Z[9].x;const Q=[8,12,16,20],q=Z[0];let se=0;Q.forEach(me=>{se+=Math.hypot(Z[me].x-q.x,Z[me].y-q.y)});const ae=se/4,ge=Math.hypot(Z[4].x-Z[8].x,Z[4].y-Z[8].y);ae<.25?y.current="TREE":ge<.05?y.current="PHOTO":y.current="EXPLODE"}else y.current="TREE"}),v.current=new nA.Camera(k,{onFrame:async()=>{await f.current.send({image:k})},width:320,height:240}),v.current.start()};return wn.jsxs("div",{className:"scene-wrapper",children:[wn.jsxs("div",{id:"ui-layer",className:"ui-layer",children:[wn.jsxs("div",{className:"guide",children:["🖐 ",wn.jsx("b",{children:"Open:"})," Explode  |  🫶 ",wn.jsx("b",{children:"Heart:"})," Love  |  ✊ ",wn.jsx("b",{children:"Fist:"})," Tree"]}),!t&&wn.jsx("button",{type:"button",onClick:e,children:"START MAGIC"})]}),wn.jsx("div",{className:"copyright",children:"© by vandiep"}),wn.jsx("div",{ref:n,id:"canvas-container"}),wn.jsx("video",{ref:i,className:"input_video",style:{display:"none"}}),wn.jsx("canvas",{ref:r,id:"camera-preview"})]})}function sA(){const[t,e]=Mt.useState(!1);return wn.jsx("div",{className:"page",children:wn.jsx(oA,{started:t,onStart:()=>e(!0)})})}const Vm=document.getElementById("root");Vm&&n_(Vm).render(wn.jsx(sA,{}));
