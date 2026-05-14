(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))u(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&u(f)}).observe(document,{childList:!0,subtree:!0});function a(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function u(o){if(o.ep)return;o.ep=!0;const s=a(o);fetch(o.href,s)}})();function Ou(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var hc={exports:{}},Ta={};var wp;function My(){if(wp)return Ta;wp=1;var t=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function a(u,o,s){var f=null;if(s!==void 0&&(f=""+s),o.key!==void 0&&(f=""+o.key),"key"in o){s={};for(var m in o)m!=="key"&&(s[m]=o[m])}else s=o;return o=s.ref,{$$typeof:t,type:u,key:f,ref:o!==void 0?o:null,props:s}}return Ta.Fragment=l,Ta.jsx=a,Ta.jsxs=a,Ta}var _p;function By(){return _p||(_p=1,hc.exports=My()),hc.exports}var A=By(),pc={exports:{}},An={};var Rp;function Oy(){if(Rp)return An;Rp=1;var t=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),b=Symbol.iterator;function v(_){return _===null||typeof _!="object"?null:(_=b&&_[b]||_["@@iterator"],typeof _=="function"?_:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,w={};function R(_,q,k){this.props=_,this.context=q,this.refs=w,this.updater=k||I}R.prototype.isReactComponent={},R.prototype.setState=function(_,q){if(typeof _!="object"&&typeof _!="function"&&_!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,_,q,"setState")},R.prototype.forceUpdate=function(_){this.updater.enqueueForceUpdate(this,_,"forceUpdate")};function U(){}U.prototype=R.prototype;function L(_,q,k){this.props=_,this.context=q,this.refs=w,this.updater=k||I}var en=L.prototype=new U;en.constructor=L,C(en,R.prototype),en.isPureReactComponent=!0;var rn=Array.isArray;function G(){}var J={H:null,A:null,T:null,S:null},fn=Object.prototype.hasOwnProperty;function pn(_,q,k){var W=k.ref;return{$$typeof:t,type:_,key:q,ref:W!==void 0?W:null,props:k}}function O(_,q){return pn(_.type,q,_.props)}function tn(_){return typeof _=="object"&&_!==null&&_.$$typeof===t}function nn(_){var q={"=":"=0",":":"=2"};return"$"+_.replace(/[=:]/g,function(k){return q[k]})}var vn=/\/+/g;function an(_,q){return typeof _=="object"&&_!==null&&_.key!=null?nn(""+_.key):q.toString(36)}function Z(_){switch(_.status){case"fulfilled":return _.value;case"rejected":throw _.reason;default:switch(typeof _.status=="string"?_.then(G,G):(_.status="pending",_.then(function(q){_.status==="pending"&&(_.status="fulfilled",_.value=q)},function(q){_.status==="pending"&&(_.status="rejected",_.reason=q)})),_.status){case"fulfilled":return _.value;case"rejected":throw _.reason}}throw _}function B(_,q,k,W,hn){var sn=typeof _;(sn==="undefined"||sn==="boolean")&&(_=null);var Cn=!1;if(_===null)Cn=!0;else switch(sn){case"bigint":case"string":case"number":Cn=!0;break;case"object":switch(_.$$typeof){case t:case l:Cn=!0;break;case y:return Cn=_._init,B(Cn(_._payload),q,k,W,hn)}}if(Cn)return hn=hn(_),Cn=W===""?"."+an(_,0):W,rn(hn)?(k="",Cn!=null&&(k=Cn.replace(vn,"$&/")+"/"),B(hn,q,k,"",function(Ye){return Ye})):hn!=null&&(tn(hn)&&(hn=O(hn,k+(hn.key==null||_&&_.key===hn.key?"":(""+hn.key).replace(vn,"$&/")+"/")+Cn)),q.push(hn)),1;Cn=0;var Zn=W===""?".":W+":";if(rn(_))for(var Ln=0;Ln<_.length;Ln++)W=_[Ln],sn=Zn+an(W,Ln),Cn+=B(W,q,k,sn,hn);else if(Ln=v(_),typeof Ln=="function")for(_=Ln.call(_),Ln=0;!(W=_.next()).done;)W=W.value,sn=Zn+an(W,Ln++),Cn+=B(W,q,k,sn,hn);else if(sn==="object"){if(typeof _.then=="function")return B(Z(_),q,k,W,hn);throw q=String(_),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(_).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return Cn}function X(_,q,k){if(_==null)return _;var W=[],hn=0;return B(_,W,"","",function(sn){return q.call(k,sn,hn++)}),W}function on(_){if(_._status===-1){var q=_._result;q=q(),q.then(function(k){(_._status===0||_._status===-1)&&(_._status=1,_._result=k)},function(k){(_._status===0||_._status===-1)&&(_._status=2,_._result=k)}),_._status===-1&&(_._status=0,_._result=q)}if(_._status===1)return _._result.default;throw _._result}var Dn=typeof reportError=="function"?reportError:function(_){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof _=="object"&&_!==null&&typeof _.message=="string"?String(_.message):String(_),error:_});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",_);return}console.error(_)},S={map:X,forEach:function(_,q,k){X(_,function(){q.apply(this,arguments)},k)},count:function(_){var q=0;return X(_,function(){q++}),q},toArray:function(_){return X(_,function(q){return q})||[]},only:function(_){if(!tn(_))throw Error("React.Children.only expected to receive a single React element child.");return _}};return An.Activity=g,An.Children=S,An.Component=R,An.Fragment=a,An.Profiler=o,An.PureComponent=L,An.StrictMode=u,An.Suspense=p,An.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J,An.__COMPILER_RUNTIME={__proto__:null,c:function(_){return J.H.useMemoCache(_)}},An.cache=function(_){return function(){return _.apply(null,arguments)}},An.cacheSignal=function(){return null},An.cloneElement=function(_,q,k){if(_==null)throw Error("The argument must be a React element, but you passed "+_+".");var W=C({},_.props),hn=_.key;if(q!=null)for(sn in q.key!==void 0&&(hn=""+q.key),q)!fn.call(q,sn)||sn==="key"||sn==="__self"||sn==="__source"||sn==="ref"&&q.ref===void 0||(W[sn]=q[sn]);var sn=arguments.length-2;if(sn===1)W.children=k;else if(1<sn){for(var Cn=Array(sn),Zn=0;Zn<sn;Zn++)Cn[Zn]=arguments[Zn+2];W.children=Cn}return pn(_.type,hn,W)},An.createContext=function(_){return _={$$typeof:f,_currentValue:_,_currentValue2:_,_threadCount:0,Provider:null,Consumer:null},_.Provider=_,_.Consumer={$$typeof:s,_context:_},_},An.createElement=function(_,q,k){var W,hn={},sn=null;if(q!=null)for(W in q.key!==void 0&&(sn=""+q.key),q)fn.call(q,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(hn[W]=q[W]);var Cn=arguments.length-2;if(Cn===1)hn.children=k;else if(1<Cn){for(var Zn=Array(Cn),Ln=0;Ln<Cn;Ln++)Zn[Ln]=arguments[Ln+2];hn.children=Zn}if(_&&_.defaultProps)for(W in Cn=_.defaultProps,Cn)hn[W]===void 0&&(hn[W]=Cn[W]);return pn(_,sn,hn)},An.createRef=function(){return{current:null}},An.forwardRef=function(_){return{$$typeof:m,render:_}},An.isValidElement=tn,An.lazy=function(_){return{$$typeof:y,_payload:{_status:-1,_result:_},_init:on}},An.memo=function(_,q){return{$$typeof:h,type:_,compare:q===void 0?null:q}},An.startTransition=function(_){var q=J.T,k={};J.T=k;try{var W=_(),hn=J.S;hn!==null&&hn(k,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(G,Dn)}catch(sn){Dn(sn)}finally{q!==null&&k.types!==null&&(q.types=k.types),J.T=q}},An.unstable_useCacheRefresh=function(){return J.H.useCacheRefresh()},An.use=function(_){return J.H.use(_)},An.useActionState=function(_,q,k){return J.H.useActionState(_,q,k)},An.useCallback=function(_,q){return J.H.useCallback(_,q)},An.useContext=function(_){return J.H.useContext(_)},An.useDebugValue=function(){},An.useDeferredValue=function(_,q){return J.H.useDeferredValue(_,q)},An.useEffect=function(_,q){return J.H.useEffect(_,q)},An.useEffectEvent=function(_){return J.H.useEffectEvent(_)},An.useId=function(){return J.H.useId()},An.useImperativeHandle=function(_,q,k){return J.H.useImperativeHandle(_,q,k)},An.useInsertionEffect=function(_,q){return J.H.useInsertionEffect(_,q)},An.useLayoutEffect=function(_,q){return J.H.useLayoutEffect(_,q)},An.useMemo=function(_,q){return J.H.useMemo(_,q)},An.useOptimistic=function(_,q){return J.H.useOptimistic(_,q)},An.useReducer=function(_,q,k){return J.H.useReducer(_,q,k)},An.useRef=function(_){return J.H.useRef(_)},An.useState=function(_){return J.H.useState(_)},An.useSyncExternalStore=function(_,q,k){return J.H.useSyncExternalStore(_,q,k)},An.useTransition=function(){return J.H.useTransition()},An.version="19.2.6",An}var Tp;function ef(){return Tp||(Tp=1,pc.exports=Oy()),pc.exports}var N=ef();const Ly=Ou(N);var gc={exports:{}},ja={},Ac={exports:{}},yc={};var jp;function Py(){return jp||(jp=1,(function(t){function l(B,X){var on=B.length;B.push(X);n:for(;0<on;){var Dn=on-1>>>1,S=B[Dn];if(0<o(S,X))B[Dn]=X,B[on]=S,on=Dn;else break n}}function a(B){return B.length===0?null:B[0]}function u(B){if(B.length===0)return null;var X=B[0],on=B.pop();if(on!==X){B[0]=on;n:for(var Dn=0,S=B.length,_=S>>>1;Dn<_;){var q=2*(Dn+1)-1,k=B[q],W=q+1,hn=B[W];if(0>o(k,on))W<S&&0>o(hn,k)?(B[Dn]=hn,B[W]=on,Dn=W):(B[Dn]=k,B[q]=on,Dn=q);else if(W<S&&0>o(hn,on))B[Dn]=hn,B[W]=on,Dn=W;else break n}}return X}function o(B,X){var on=B.sortIndex-X.sortIndex;return on!==0?on:B.id-X.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var f=Date,m=f.now();t.unstable_now=function(){return f.now()-m}}var p=[],h=[],y=1,g=null,b=3,v=!1,I=!1,C=!1,w=!1,R=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function en(B){for(var X=a(h);X!==null;){if(X.callback===null)u(h);else if(X.startTime<=B)u(h),X.sortIndex=X.expirationTime,l(p,X);else break;X=a(h)}}function rn(B){if(C=!1,en(B),!I)if(a(p)!==null)I=!0,G||(G=!0,nn());else{var X=a(h);X!==null&&Z(rn,X.startTime-B)}}var G=!1,J=-1,fn=5,pn=-1;function O(){return w?!0:!(t.unstable_now()-pn<fn)}function tn(){if(w=!1,G){var B=t.unstable_now();pn=B;var X=!0;try{n:{I=!1,C&&(C=!1,U(J),J=-1),v=!0;var on=b;try{e:{for(en(B),g=a(p);g!==null&&!(g.expirationTime>B&&O());){var Dn=g.callback;if(typeof Dn=="function"){g.callback=null,b=g.priorityLevel;var S=Dn(g.expirationTime<=B);if(B=t.unstable_now(),typeof S=="function"){g.callback=S,en(B),X=!0;break e}g===a(p)&&u(p),en(B)}else u(p);g=a(p)}if(g!==null)X=!0;else{var _=a(h);_!==null&&Z(rn,_.startTime-B),X=!1}}break n}finally{g=null,b=on,v=!1}X=void 0}}finally{X?nn():G=!1}}}var nn;if(typeof L=="function")nn=function(){L(tn)};else if(typeof MessageChannel<"u"){var vn=new MessageChannel,an=vn.port2;vn.port1.onmessage=tn,nn=function(){an.postMessage(null)}}else nn=function(){R(tn,0)};function Z(B,X){J=R(function(){B(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):fn=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return b},t.unstable_next=function(B){switch(b){case 1:case 2:case 3:var X=3;break;default:X=b}var on=b;b=X;try{return B()}finally{b=on}},t.unstable_requestPaint=function(){w=!0},t.unstable_runWithPriority=function(B,X){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var on=b;b=B;try{return X()}finally{b=on}},t.unstable_scheduleCallback=function(B,X,on){var Dn=t.unstable_now();switch(typeof on=="object"&&on!==null?(on=on.delay,on=typeof on=="number"&&0<on?Dn+on:Dn):on=Dn,B){case 1:var S=-1;break;case 2:S=250;break;case 5:S=1073741823;break;case 4:S=1e4;break;default:S=5e3}return S=on+S,B={id:y++,callback:X,priorityLevel:B,startTime:on,expirationTime:S,sortIndex:-1},on>Dn?(B.sortIndex=on,l(h,B),a(p)===null&&B===a(h)&&(C?(U(J),J=-1):C=!0,Z(rn,on-Dn))):(B.sortIndex=S,l(p,B),I||v||(I=!0,G||(G=!0,nn()))),B},t.unstable_shouldYield=O,t.unstable_wrapCallback=function(B){var X=b;return function(){var on=b;b=X;try{return B.apply(this,arguments)}finally{b=on}}}})(yc)),yc}var Np;function Gy(){return Np||(Np=1,Ac.exports=Py()),Ac.exports}var xc={exports:{}},Ae={};var Fp;function Uy(){if(Fp)return Ae;Fp=1;var t=ef();function l(p){var h="https://react.dev/errors/"+p;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)h+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var u={d:{f:a,r:function(){throw Error(l(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},o=Symbol.for("react.portal");function s(p,h,y){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:g==null?null:""+g,children:p,containerInfo:h,implementation:y}}var f=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,h){if(p==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Ae.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,Ae.createPortal=function(p,h){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(l(299));return s(p,h,null,y)},Ae.flushSync=function(p){var h=f.T,y=u.p;try{if(f.T=null,u.p=2,p)return p()}finally{f.T=h,u.p=y,u.d.f()}},Ae.preconnect=function(p,h){typeof p=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,u.d.C(p,h))},Ae.prefetchDNS=function(p){typeof p=="string"&&u.d.D(p)},Ae.preinit=function(p,h){if(typeof p=="string"&&h&&typeof h.as=="string"){var y=h.as,g=m(y,h.crossOrigin),b=typeof h.integrity=="string"?h.integrity:void 0,v=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;y==="style"?u.d.S(p,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:g,integrity:b,fetchPriority:v}):y==="script"&&u.d.X(p,{crossOrigin:g,integrity:b,fetchPriority:v,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Ae.preinitModule=function(p,h){if(typeof p=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var y=m(h.as,h.crossOrigin);u.d.M(p,{crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&u.d.M(p)},Ae.preload=function(p,h){if(typeof p=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var y=h.as,g=m(y,h.crossOrigin);u.d.L(p,y,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Ae.preloadModule=function(p,h){if(typeof p=="string")if(h){var y=m(h.as,h.crossOrigin);u.d.m(p,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else u.d.m(p)},Ae.requestFormReset=function(p){u.d.r(p)},Ae.unstable_batchedUpdates=function(p,h){return p(h)},Ae.useFormState=function(p,h,y){return f.H.useFormState(p,h,y)},Ae.useFormStatus=function(){return f.H.useHostTransitionStatus()},Ae.version="19.2.6",Ae}var zp;function Hy(){if(zp)return xc.exports;zp=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(l){console.error(l)}}return t(),xc.exports=Uy(),xc.exports}var Mp;function qy(){if(Mp)return ja;Mp=1;var t=Gy(),l=ef(),a=Hy();function u(n){var e="https://react.dev/errors/"+n;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function s(n){var e=n,r=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,(e.flags&4098)!==0&&(r=e.return),n=e.return;while(n)}return e.tag===3?r:null}function f(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function m(n){if(n.tag===31){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function p(n){if(s(n)!==n)throw Error(u(188))}function h(n){var e=n.alternate;if(!e){if(e=s(n),e===null)throw Error(u(188));return e!==n?null:n}for(var r=n,i=e;;){var c=r.return;if(c===null)break;var d=c.alternate;if(d===null){if(i=c.return,i!==null){r=i;continue}break}if(c.child===d.child){for(d=c.child;d;){if(d===r)return p(c),n;if(d===i)return p(c),e;d=d.sibling}throw Error(u(188))}if(r.return!==i.return)r=c,i=d;else{for(var x=!1,D=c.child;D;){if(D===r){x=!0,r=c,i=d;break}if(D===i){x=!0,i=c,r=d;break}D=D.sibling}if(!x){for(D=d.child;D;){if(D===r){x=!0,r=d,i=c;break}if(D===i){x=!0,i=d,r=c;break}D=D.sibling}if(!x)throw Error(u(189))}}if(r.alternate!==i)throw Error(u(190))}if(r.tag!==3)throw Error(u(188));return r.stateNode.current===r?n:e}function y(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n;for(n=n.child;n!==null;){if(e=y(n),e!==null)return e;n=n.sibling}return null}var g=Object.assign,b=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),I=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),L=Symbol.for("react.context"),en=Symbol.for("react.forward_ref"),rn=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),fn=Symbol.for("react.lazy"),pn=Symbol.for("react.activity"),O=Symbol.for("react.memo_cache_sentinel"),tn=Symbol.iterator;function nn(n){return n===null||typeof n!="object"?null:(n=tn&&n[tn]||n["@@iterator"],typeof n=="function"?n:null)}var vn=Symbol.for("react.client.reference");function an(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===vn?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case C:return"Fragment";case R:return"Profiler";case w:return"StrictMode";case rn:return"Suspense";case G:return"SuspenseList";case pn:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case I:return"Portal";case L:return n.displayName||"Context";case U:return(n._context.displayName||"Context")+".Consumer";case en:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case J:return e=n.displayName||null,e!==null?e:an(n.type)||"Memo";case fn:e=n._payload,n=n._init;try{return an(n(e))}catch{}}return null}var Z=Array.isArray,B=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,on={pending:!1,data:null,method:null,action:null},Dn=[],S=-1;function _(n){return{current:n}}function q(n){0>S||(n.current=Dn[S],Dn[S]=null,S--)}function k(n,e){S++,Dn[S]=n.current,n.current=e}var W=_(null),hn=_(null),sn=_(null),Cn=_(null);function Zn(n,e){switch(k(sn,e),k(hn,n),k(W,null),e.nodeType){case 9:case 11:n=(n=e.documentElement)&&(n=n.namespaceURI)?Kh(n):0;break;default:if(n=e.tagName,e=e.namespaceURI)e=Kh(e),n=Jh(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}q(W),k(W,n)}function Ln(){q(W),q(hn),q(sn)}function Ye(n){n.memoizedState!==null&&k(Cn,n);var e=W.current,r=Jh(e,n.type);e!==r&&(k(hn,n),k(W,r))}function vt(n){hn.current===n&&(q(W),q(hn)),Cn.current===n&&(q(Cn),Ca._currentValue=on)}var Ol,ei;function Dt(n){if(Ol===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);Ol=e&&e[1]||"",ei=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ol+n+ei}var Or=!1;function Lr(n,e){if(!n||Or)return"";Or=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var Q=function(){throw Error()};if(Object.defineProperty(Q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Q,[])}catch(P){var M=P}Reflect.construct(n,[],Q)}else{try{Q.call()}catch(P){M=P}n.call(Q.prototype)}}else{try{throw Error()}catch(P){M=P}(Q=n())&&typeof Q.catch=="function"&&Q.catch(function(){})}}catch(P){if(P&&M&&typeof P.stack=="string")return[P.stack,M.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=i.DetermineComponentFrameRoot(),x=d[0],D=d[1];if(x&&D){var E=x.split(`
`),z=D.split(`
`);for(c=i=0;i<E.length&&!E[i].includes("DetermineComponentFrameRoot");)i++;for(;c<z.length&&!z[c].includes("DetermineComponentFrameRoot");)c++;if(i===E.length||c===z.length)for(i=E.length-1,c=z.length-1;1<=i&&0<=c&&E[i]!==z[c];)c--;for(;1<=i&&0<=c;i--,c--)if(E[i]!==z[c]){if(i!==1||c!==1)do if(i--,c--,0>c||E[i]!==z[c]){var H=`
`+E[i].replace(" at new "," at ");return n.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",n.displayName)),H}while(1<=i&&0<=c);break}}}finally{Or=!1,Error.prepareStackTrace=r}return(r=n?n.displayName||n.name:"")?Dt(r):""}function ti(n,e){switch(n.tag){case 26:case 27:case 5:return Dt(n.type);case 16:return Dt("Lazy");case 13:return n.child!==e&&e!==null?Dt("Suspense Fallback"):Dt("Suspense");case 19:return Dt("SuspenseList");case 0:case 15:return Lr(n.type,!1);case 11:return Lr(n.type.render,!1);case 1:return Lr(n.type,!0);case 31:return Dt("Activity");default:return""}}function ri(n){try{var e="",r=null;do e+=ti(n,r),r=n,n=n.return;while(n);return e}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Pr=Object.prototype.hasOwnProperty,Gr=t.unstable_scheduleCallback,Ll=t.unstable_cancelCallback,Ju=t.unstable_shouldYield,Wu=t.unstable_requestPaint,be=t.unstable_now,no=t.unstable_getCurrentPriorityLevel,V=t.unstable_ImmediatePriority,K=t.unstable_UserBlockingPriority,gn=t.unstable_NormalPriority,kn=t.unstable_LowPriority,Mn=t.unstable_IdlePriority,ze=t.log,kt=t.unstable_setDisableYieldValue,ve=null,ue=null;function Ie(n){if(typeof ze=="function"&&kt(n),ue&&typeof ue.setStrictMode=="function")try{ue.setStrictMode(ve,n)}catch{}}var Hn=Math.clz32?Math.clz32:D1,qt=Math.log,ut=Math.LN2;function D1(n){return n>>>=0,n===0?32:31-(qt(n)/ut|0)|0}var li=256,ai=262144,ii=4194304;function Ar(n){var e=n&42;if(e!==0)return e;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&261888;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function ui(n,e,r){var i=n.pendingLanes;if(i===0)return 0;var c=0,d=n.suspendedLanes,x=n.pingedLanes;n=n.warmLanes;var D=i&134217727;return D!==0?(i=D&~d,i!==0?c=Ar(i):(x&=D,x!==0?c=Ar(x):r||(r=D&~n,r!==0&&(c=Ar(r))))):(D=i&~d,D!==0?c=Ar(D):x!==0?c=Ar(x):r||(r=i&~n,r!==0&&(c=Ar(r)))),c===0?0:e!==0&&e!==c&&(e&d)===0&&(d=c&-c,r=e&-e,d>=r||d===32&&(r&4194048)!==0)?e:c}function Pl(n,e){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&e)===0}function k1(n,e){switch(n){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jf(){var n=ii;return ii<<=1,(ii&62914560)===0&&(ii=4194304),n}function eo(n){for(var e=[],r=0;31>r;r++)e.push(n);return e}function Gl(n,e){n.pendingLanes|=e,e!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function I1(n,e,r,i,c,d){var x=n.pendingLanes;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=r,n.entangledLanes&=r,n.errorRecoveryDisabledLanes&=r,n.shellSuspendCounter=0;var D=n.entanglements,E=n.expirationTimes,z=n.hiddenUpdates;for(r=x&~r;0<r;){var H=31-Hn(r),Q=1<<H;D[H]=0,E[H]=-1;var M=z[H];if(M!==null)for(z[H]=null,H=0;H<M.length;H++){var P=M[H];P!==null&&(P.lane&=-536870913)}r&=~Q}i!==0&&Nf(n,i,0),d!==0&&c===0&&n.tag!==0&&(n.suspendedLanes|=d&~(x&~e))}function Nf(n,e,r){n.pendingLanes|=e,n.suspendedLanes&=~e;var i=31-Hn(e);n.entangledLanes|=e,n.entanglements[i]=n.entanglements[i]|1073741824|r&261930}function Ff(n,e){var r=n.entangledLanes|=e;for(n=n.entanglements;r;){var i=31-Hn(r),c=1<<i;c&e|n[i]&e&&(n[i]|=e),r&=~c}}function zf(n,e){var r=e&-e;return r=(r&42)!==0?1:to(r),(r&(n.suspendedLanes|e))!==0?0:r}function to(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function ro(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Mf(){var n=X.p;return n!==0?n:(n=window.event,n===void 0?32:vp(n.type))}function Bf(n,e){var r=X.p;try{return X.p=n,e()}finally{X.p=r}}var Vt=Math.random().toString(36).slice(2),de="__reactFiber$"+Vt,Se="__reactProps$"+Vt,Ur="__reactContainer$"+Vt,lo="__reactEvents$"+Vt,S1="__reactListeners$"+Vt,E1="__reactHandles$"+Vt,Of="__reactResources$"+Vt,Ul="__reactMarker$"+Vt;function ao(n){delete n[de],delete n[Se],delete n[lo],delete n[S1],delete n[E1]}function Hr(n){var e=n[de];if(e)return e;for(var r=n.parentNode;r;){if(e=r[Ur]||r[de]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(n=ap(n);n!==null;){if(r=n[de])return r;n=ap(n)}return e}n=r,r=n.parentNode}return null}function qr(n){if(n=n[de]||n[Ur]){var e=n.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return n}return null}function Hl(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n.stateNode;throw Error(u(33))}function Vr(n){var e=n[Of];return e||(e=n[Of]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function se(n){n[Ul]=!0}var Lf=new Set,Pf={};function yr(n,e){Yr(n,e),Yr(n+"Capture",e)}function Yr(n,e){for(Pf[n]=e,n=0;n<e.length;n++)Lf.add(e[n])}var C1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Gf={},Uf={};function w1(n){return Pr.call(Uf,n)?!0:Pr.call(Gf,n)?!1:C1.test(n)?Uf[n]=!0:(Gf[n]=!0,!1)}function oi(n,e,r){if(w1(e))if(r===null)n.removeAttribute(e);else{switch(typeof r){case"undefined":case"function":case"symbol":n.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){n.removeAttribute(e);return}}n.setAttribute(e,""+r)}}function si(n,e,r){if(r===null)n.removeAttribute(e);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(e);return}n.setAttribute(e,""+r)}}function It(n,e,r,i){if(i===null)n.removeAttribute(r);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(r);return}n.setAttributeNS(e,r,""+i)}}function Qe(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Hf(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function _1(n,e,r){var i=Object.getOwnPropertyDescriptor(n.constructor.prototype,e);if(!n.hasOwnProperty(e)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var c=i.get,d=i.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return c.call(this)},set:function(x){r=""+x,d.call(this,x)}}),Object.defineProperty(n,e,{enumerable:i.enumerable}),{getValue:function(){return r},setValue:function(x){r=""+x},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function io(n){if(!n._valueTracker){var e=Hf(n)?"checked":"value";n._valueTracker=_1(n,e,""+n[e])}}function qf(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var r=e.getValue(),i="";return n&&(i=Hf(n)?n.checked?"true":"false":n.value),n=i,n!==r?(e.setValue(n),!0):!1}function ci(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var R1=/[\n"\\]/g;function Xe(n){return n.replace(R1,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function uo(n,e,r,i,c,d,x,D){n.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?n.type=x:n.removeAttribute("type"),e!=null?x==="number"?(e===0&&n.value===""||n.value!=e)&&(n.value=""+Qe(e)):n.value!==""+Qe(e)&&(n.value=""+Qe(e)):x!=="submit"&&x!=="reset"||n.removeAttribute("value"),e!=null?oo(n,x,Qe(e)):r!=null?oo(n,x,Qe(r)):i!=null&&n.removeAttribute("value"),c==null&&d!=null&&(n.defaultChecked=!!d),c!=null&&(n.checked=c&&typeof c!="function"&&typeof c!="symbol"),D!=null&&typeof D!="function"&&typeof D!="symbol"&&typeof D!="boolean"?n.name=""+Qe(D):n.removeAttribute("name")}function Vf(n,e,r,i,c,d,x,D){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(n.type=d),e!=null||r!=null){if(!(d!=="submit"&&d!=="reset"||e!=null)){io(n);return}r=r!=null?""+Qe(r):"",e=e!=null?""+Qe(e):r,D||e===n.value||(n.value=e),n.defaultValue=e}i=i??c,i=typeof i!="function"&&typeof i!="symbol"&&!!i,n.checked=D?n.checked:!!i,n.defaultChecked=!!i,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(n.name=x),io(n)}function oo(n,e,r){e==="number"&&ci(n.ownerDocument)===n||n.defaultValue===""+r||(n.defaultValue=""+r)}function Qr(n,e,r,i){if(n=n.options,e){e={};for(var c=0;c<r.length;c++)e["$"+r[c]]=!0;for(r=0;r<n.length;r++)c=e.hasOwnProperty("$"+n[r].value),n[r].selected!==c&&(n[r].selected=c),c&&i&&(n[r].defaultSelected=!0)}else{for(r=""+Qe(r),e=null,c=0;c<n.length;c++){if(n[c].value===r){n[c].selected=!0,i&&(n[c].defaultSelected=!0);return}e!==null||n[c].disabled||(e=n[c])}e!==null&&(e.selected=!0)}}function Yf(n,e,r){if(e!=null&&(e=""+Qe(e),e!==n.value&&(n.value=e),r==null)){n.defaultValue!==e&&(n.defaultValue=e);return}n.defaultValue=r!=null?""+Qe(r):""}function Qf(n,e,r,i){if(e==null){if(i!=null){if(r!=null)throw Error(u(92));if(Z(i)){if(1<i.length)throw Error(u(93));i=i[0]}r=i}r==null&&(r=""),e=r}r=Qe(e),n.defaultValue=r,i=n.textContent,i===r&&i!==""&&i!==null&&(n.value=i),io(n)}function Xr(n,e){if(e){var r=n.firstChild;if(r&&r===n.lastChild&&r.nodeType===3){r.nodeValue=e;return}}n.textContent=e}var T1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Xf(n,e,r){var i=e.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?i?n.setProperty(e,""):e==="float"?n.cssFloat="":n[e]="":i?n.setProperty(e,r):typeof r!="number"||r===0||T1.has(e)?e==="float"?n.cssFloat=r:n[e]=(""+r).trim():n[e]=r+"px"}function Zf(n,e,r){if(e!=null&&typeof e!="object")throw Error(u(62));if(n=n.style,r!=null){for(var i in r)!r.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?n.setProperty(i,""):i==="float"?n.cssFloat="":n[i]="");for(var c in e)i=e[c],e.hasOwnProperty(c)&&r[c]!==i&&Xf(n,c,i)}else for(var d in e)e.hasOwnProperty(d)&&Xf(n,d,e[d])}function so(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var j1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),N1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function fi(n){return N1.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function St(){}var co=null;function fo(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Zr=null,$r=null;function $f(n){var e=qr(n);if(e&&(n=e.stateNode)){var r=n[Se]||null;n:switch(n=e.stateNode,e.type){case"input":if(uo(n,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),e=r.name,r.type==="radio"&&e!=null){for(r=n;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+Xe(""+e)+'"][type="radio"]'),e=0;e<r.length;e++){var i=r[e];if(i!==n&&i.form===n.form){var c=i[Se]||null;if(!c)throw Error(u(90));uo(i,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(e=0;e<r.length;e++)i=r[e],i.form===n.form&&qf(i)}break n;case"textarea":Yf(n,r.value,r.defaultValue);break n;case"select":e=r.value,e!=null&&Qr(n,!!r.multiple,e,!1)}}}var mo=!1;function Kf(n,e,r){if(mo)return n(e,r);mo=!0;try{var i=n(e);return i}finally{if(mo=!1,(Zr!==null||$r!==null)&&(Ji(),Zr&&(e=Zr,n=$r,$r=Zr=null,$f(e),n)))for(e=0;e<n.length;e++)$f(n[e])}}function ql(n,e){var r=n.stateNode;if(r===null)return null;var i=r[Se]||null;if(i===null)return null;r=i[e];n:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break n;default:n=!1}if(n)return null;if(r&&typeof r!="function")throw Error(u(231,e,typeof r));return r}var Et=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ho=!1;if(Et)try{var Vl={};Object.defineProperty(Vl,"passive",{get:function(){ho=!0}}),window.addEventListener("test",Vl,Vl),window.removeEventListener("test",Vl,Vl)}catch{ho=!1}var Yt=null,po=null,di=null;function Jf(){if(di)return di;var n,e=po,r=e.length,i,c="value"in Yt?Yt.value:Yt.textContent,d=c.length;for(n=0;n<r&&e[n]===c[n];n++);var x=r-n;for(i=1;i<=x&&e[r-i]===c[d-i];i++);return di=c.slice(n,1<i?1-i:void 0)}function mi(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function hi(){return!0}function Wf(){return!1}function Ee(n){function e(r,i,c,d,x){this._reactName=r,this._targetInst=c,this.type=i,this.nativeEvent=d,this.target=x,this.currentTarget=null;for(var D in n)n.hasOwnProperty(D)&&(r=n[D],this[D]=r?r(d):d[D]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?hi:Wf,this.isPropagationStopped=Wf,this}return g(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=hi)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=hi)},persist:function(){},isPersistent:hi}),e}var xr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pi=Ee(xr),Yl=g({},xr,{view:0,detail:0}),F1=Ee(Yl),go,Ao,Ql,gi=g({},Yl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xo,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ql&&(Ql&&n.type==="mousemove"?(go=n.screenX-Ql.screenX,Ao=n.screenY-Ql.screenY):Ao=go=0,Ql=n),go)},movementY:function(n){return"movementY"in n?n.movementY:Ao}}),nd=Ee(gi),z1=g({},gi,{dataTransfer:0}),M1=Ee(z1),B1=g({},Yl,{relatedTarget:0}),yo=Ee(B1),O1=g({},xr,{animationName:0,elapsedTime:0,pseudoElement:0}),L1=Ee(O1),P1=g({},xr,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),G1=Ee(P1),U1=g({},xr,{data:0}),ed=Ee(U1),H1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},q1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},V1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Y1(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=V1[n])?!!e[n]:!1}function xo(){return Y1}var Q1=g({},Yl,{key:function(n){if(n.key){var e=H1[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=mi(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?q1[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xo,charCode:function(n){return n.type==="keypress"?mi(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?mi(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),X1=Ee(Q1),Z1=g({},gi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),td=Ee(Z1),$1=g({},Yl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xo}),K1=Ee($1),J1=g({},xr,{propertyName:0,elapsedTime:0,pseudoElement:0}),W1=Ee(J1),nA=g({},gi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),eA=Ee(nA),tA=g({},xr,{newState:0,oldState:0}),rA=Ee(tA),lA=[9,13,27,32],bo=Et&&"CompositionEvent"in window,Xl=null;Et&&"documentMode"in document&&(Xl=document.documentMode);var aA=Et&&"TextEvent"in window&&!Xl,rd=Et&&(!bo||Xl&&8<Xl&&11>=Xl),ld=" ",ad=!1;function id(n,e){switch(n){case"keyup":return lA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ud(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Kr=!1;function iA(n,e){switch(n){case"compositionend":return ud(e);case"keypress":return e.which!==32?null:(ad=!0,ld);case"textInput":return n=e.data,n===ld&&ad?null:n;default:return null}}function uA(n,e){if(Kr)return n==="compositionend"||!bo&&id(n,e)?(n=Jf(),di=po=Yt=null,Kr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return rd&&e.locale!=="ko"?null:e.data;default:return null}}var oA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function od(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!oA[n.type]:e==="textarea"}function sd(n,e,r,i){Zr?$r?$r.push(i):$r=[i]:Zr=i,e=au(e,"onChange"),0<e.length&&(r=new pi("onChange","change",null,r,i),n.push({event:r,listeners:e}))}var Zl=null,$l=null;function sA(n){Vh(n,0)}function Ai(n){var e=Hl(n);if(qf(e))return n}function cd(n,e){if(n==="change")return e}var fd=!1;if(Et){var vo;if(Et){var Do="oninput"in document;if(!Do){var dd=document.createElement("div");dd.setAttribute("oninput","return;"),Do=typeof dd.oninput=="function"}vo=Do}else vo=!1;fd=vo&&(!document.documentMode||9<document.documentMode)}function md(){Zl&&(Zl.detachEvent("onpropertychange",hd),$l=Zl=null)}function hd(n){if(n.propertyName==="value"&&Ai($l)){var e=[];sd(e,$l,n,fo(n)),Kf(sA,e)}}function cA(n,e,r){n==="focusin"?(md(),Zl=e,$l=r,Zl.attachEvent("onpropertychange",hd)):n==="focusout"&&md()}function fA(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ai($l)}function dA(n,e){if(n==="click")return Ai(e)}function mA(n,e){if(n==="input"||n==="change")return Ai(e)}function hA(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Me=typeof Object.is=="function"?Object.is:hA;function Kl(n,e){if(Me(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var r=Object.keys(n),i=Object.keys(e);if(r.length!==i.length)return!1;for(i=0;i<r.length;i++){var c=r[i];if(!Pr.call(e,c)||!Me(n[c],e[c]))return!1}return!0}function pd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function gd(n,e){var r=pd(n);n=0;for(var i;r;){if(r.nodeType===3){if(i=n+r.textContent.length,n<=e&&i>=e)return{node:r,offset:e-n};n=i}n:{for(;r;){if(r.nextSibling){r=r.nextSibling;break n}r=r.parentNode}r=void 0}r=pd(r)}}function Ad(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Ad(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function yd(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var e=ci(n.document);e instanceof n.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)n=e.contentWindow;else break;e=ci(n.document)}return e}function ko(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}var pA=Et&&"documentMode"in document&&11>=document.documentMode,Jr=null,Io=null,Jl=null,So=!1;function xd(n,e,r){var i=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;So||Jr==null||Jr!==ci(i)||(i=Jr,"selectionStart"in i&&ko(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Jl&&Kl(Jl,i)||(Jl=i,i=au(Io,"onSelect"),0<i.length&&(e=new pi("onSelect","select",null,e,r),n.push({event:e,listeners:i}),e.target=Jr)))}function br(n,e){var r={};return r[n.toLowerCase()]=e.toLowerCase(),r["Webkit"+n]="webkit"+e,r["Moz"+n]="moz"+e,r}var Wr={animationend:br("Animation","AnimationEnd"),animationiteration:br("Animation","AnimationIteration"),animationstart:br("Animation","AnimationStart"),transitionrun:br("Transition","TransitionRun"),transitionstart:br("Transition","TransitionStart"),transitioncancel:br("Transition","TransitionCancel"),transitionend:br("Transition","TransitionEnd")},Eo={},bd={};Et&&(bd=document.createElement("div").style,"AnimationEvent"in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),"TransitionEvent"in window||delete Wr.transitionend.transition);function vr(n){if(Eo[n])return Eo[n];if(!Wr[n])return n;var e=Wr[n],r;for(r in e)if(e.hasOwnProperty(r)&&r in bd)return Eo[n]=e[r];return n}var vd=vr("animationend"),Dd=vr("animationiteration"),kd=vr("animationstart"),gA=vr("transitionrun"),AA=vr("transitionstart"),yA=vr("transitioncancel"),Id=vr("transitionend"),Sd=new Map,Co="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Co.push("scrollEnd");function ot(n,e){Sd.set(n,e),yr(e,[n])}var yi=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},Ze=[],nl=0,wo=0;function xi(){for(var n=nl,e=wo=nl=0;e<n;){var r=Ze[e];Ze[e++]=null;var i=Ze[e];Ze[e++]=null;var c=Ze[e];Ze[e++]=null;var d=Ze[e];if(Ze[e++]=null,i!==null&&c!==null){var x=i.pending;x===null?c.next=c:(c.next=x.next,x.next=c),i.pending=c}d!==0&&Ed(r,c,d)}}function bi(n,e,r,i){Ze[nl++]=n,Ze[nl++]=e,Ze[nl++]=r,Ze[nl++]=i,wo|=i,n.lanes|=i,n=n.alternate,n!==null&&(n.lanes|=i)}function _o(n,e,r,i){return bi(n,e,r,i),vi(n)}function Dr(n,e){return bi(n,null,null,e),vi(n)}function Ed(n,e,r){n.lanes|=r;var i=n.alternate;i!==null&&(i.lanes|=r);for(var c=!1,d=n.return;d!==null;)d.childLanes|=r,i=d.alternate,i!==null&&(i.childLanes|=r),d.tag===22&&(n=d.stateNode,n===null||n._visibility&1||(c=!0)),n=d,d=d.return;return n.tag===3?(d=n.stateNode,c&&e!==null&&(c=31-Hn(r),n=d.hiddenUpdates,i=n[c],i===null?n[c]=[e]:i.push(e),e.lane=r|536870912),d):null}function vi(n){if(50<ba)throw ba=0,Os=null,Error(u(185));for(var e=n.return;e!==null;)n=e,e=n.return;return n.tag===3?n.stateNode:null}var el={};function xA(n,e,r,i){this.tag=n,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Be(n,e,r,i){return new xA(n,e,r,i)}function Ro(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ct(n,e){var r=n.alternate;return r===null?(r=Be(n.tag,e,n.key,n.mode),r.elementType=n.elementType,r.type=n.type,r.stateNode=n.stateNode,r.alternate=n,n.alternate=r):(r.pendingProps=e,r.type=n.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=n.flags&65011712,r.childLanes=n.childLanes,r.lanes=n.lanes,r.child=n.child,r.memoizedProps=n.memoizedProps,r.memoizedState=n.memoizedState,r.updateQueue=n.updateQueue,e=n.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=n.sibling,r.index=n.index,r.ref=n.ref,r.refCleanup=n.refCleanup,r}function Cd(n,e){n.flags&=65011714;var r=n.alternate;return r===null?(n.childLanes=0,n.lanes=e,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=r.childLanes,n.lanes=r.lanes,n.child=r.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=r.memoizedProps,n.memoizedState=r.memoizedState,n.updateQueue=r.updateQueue,n.type=r.type,e=r.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n}function Di(n,e,r,i,c,d){var x=0;if(i=n,typeof n=="function")Ro(n)&&(x=1);else if(typeof n=="string")x=Iy(n,r,W.current)?26:n==="html"||n==="head"||n==="body"?27:5;else n:switch(n){case pn:return n=Be(31,r,e,c),n.elementType=pn,n.lanes=d,n;case C:return kr(r.children,c,d,e);case w:x=8,c|=24;break;case R:return n=Be(12,r,e,c|2),n.elementType=R,n.lanes=d,n;case rn:return n=Be(13,r,e,c),n.elementType=rn,n.lanes=d,n;case G:return n=Be(19,r,e,c),n.elementType=G,n.lanes=d,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case L:x=10;break n;case U:x=9;break n;case en:x=11;break n;case J:x=14;break n;case fn:x=16,i=null;break n}x=29,r=Error(u(130,n===null?"null":typeof n,"")),i=null}return e=Be(x,r,e,c),e.elementType=n,e.type=i,e.lanes=d,e}function kr(n,e,r,i){return n=Be(7,n,i,e),n.lanes=r,n}function To(n,e,r){return n=Be(6,n,null,e),n.lanes=r,n}function wd(n){var e=Be(18,null,null,0);return e.stateNode=n,e}function jo(n,e,r){return e=Be(4,n.children!==null?n.children:[],n.key,e),e.lanes=r,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}var _d=new WeakMap;function $e(n,e){if(typeof n=="object"&&n!==null){var r=_d.get(n);return r!==void 0?r:(e={value:n,source:e,stack:ri(e)},_d.set(n,e),e)}return{value:n,source:e,stack:ri(e)}}var tl=[],rl=0,ki=null,Wl=0,Ke=[],Je=0,Qt=null,pt=1,gt="";function wt(n,e){tl[rl++]=Wl,tl[rl++]=ki,ki=n,Wl=e}function Rd(n,e,r){Ke[Je++]=pt,Ke[Je++]=gt,Ke[Je++]=Qt,Qt=n;var i=pt;n=gt;var c=32-Hn(i)-1;i&=~(1<<c),r+=1;var d=32-Hn(e)+c;if(30<d){var x=c-c%5;d=(i&(1<<x)-1).toString(32),i>>=x,c-=x,pt=1<<32-Hn(e)+c|r<<c|i,gt=d+n}else pt=1<<d|r<<c|i,gt=n}function No(n){n.return!==null&&(wt(n,1),Rd(n,1,0))}function Fo(n){for(;n===ki;)ki=tl[--rl],tl[rl]=null,Wl=tl[--rl],tl[rl]=null;for(;n===Qt;)Qt=Ke[--Je],Ke[Je]=null,gt=Ke[--Je],Ke[Je]=null,pt=Ke[--Je],Ke[Je]=null}function Td(n,e){Ke[Je++]=pt,Ke[Je++]=gt,Ke[Je++]=Qt,pt=e.id,gt=e.overflow,Qt=n}var me=null,Qn=null,Rn=!1,Xt=null,We=!1,zo=Error(u(519));function Zt(n){var e=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw na($e(e,n)),zo}function jd(n){var e=n.stateNode,r=n.type,i=n.memoizedProps;switch(e[de]=n,e[Se]=i,r){case"dialog":Sn("cancel",e),Sn("close",e);break;case"iframe":case"object":case"embed":Sn("load",e);break;case"video":case"audio":for(r=0;r<Da.length;r++)Sn(Da[r],e);break;case"source":Sn("error",e);break;case"img":case"image":case"link":Sn("error",e),Sn("load",e);break;case"details":Sn("toggle",e);break;case"input":Sn("invalid",e),Vf(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Sn("invalid",e);break;case"textarea":Sn("invalid",e),Qf(e,i.value,i.defaultValue,i.children)}r=i.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||e.textContent===""+r||i.suppressHydrationWarning===!0||Zh(e.textContent,r)?(i.popover!=null&&(Sn("beforetoggle",e),Sn("toggle",e)),i.onScroll!=null&&Sn("scroll",e),i.onScrollEnd!=null&&Sn("scrollend",e),i.onClick!=null&&(e.onclick=St),e=!0):e=!1,e||Zt(n,!0)}function Nd(n){for(me=n.return;me;)switch(me.tag){case 5:case 31:case 13:We=!1;return;case 27:case 3:We=!0;return;default:me=me.return}}function ll(n){if(n!==me)return!1;if(!Rn)return Nd(n),Rn=!0,!1;var e=n.tag,r;if((r=e!==3&&e!==27)&&((r=e===5)&&(r=n.type,r=!(r!=="form"&&r!=="button")||Ws(n.type,n.memoizedProps)),r=!r),r&&Qn&&Zt(n),Nd(n),e===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(u(317));Qn=lp(n)}else if(e===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(u(317));Qn=lp(n)}else e===27?(e=Qn,sr(n.type)?(n=lc,lc=null,Qn=n):Qn=e):Qn=me?et(n.stateNode.nextSibling):null;return!0}function Ir(){Qn=me=null,Rn=!1}function Mo(){var n=Xt;return n!==null&&(Re===null?Re=n:Re.push.apply(Re,n),Xt=null),n}function na(n){Xt===null?Xt=[n]:Xt.push(n)}var Bo=_(null),Sr=null,_t=null;function $t(n,e,r){k(Bo,e._currentValue),e._currentValue=r}function Rt(n){n._currentValue=Bo.current,q(Bo)}function Oo(n,e,r){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===r)break;n=n.return}}function Lo(n,e,r,i){var c=n.child;for(c!==null&&(c.return=n);c!==null;){var d=c.dependencies;if(d!==null){var x=c.child;d=d.firstContext;n:for(;d!==null;){var D=d;d=c;for(var E=0;E<e.length;E++)if(D.context===e[E]){d.lanes|=r,D=d.alternate,D!==null&&(D.lanes|=r),Oo(d.return,r,n),i||(x=null);break n}d=D.next}}else if(c.tag===18){if(x=c.return,x===null)throw Error(u(341));x.lanes|=r,d=x.alternate,d!==null&&(d.lanes|=r),Oo(x,r,n),x=null}else x=c.child;if(x!==null)x.return=c;else for(x=c;x!==null;){if(x===n){x=null;break}if(c=x.sibling,c!==null){c.return=x.return,x=c;break}x=x.return}c=x}}function al(n,e,r,i){n=null;for(var c=e,d=!1;c!==null;){if(!d){if((c.flags&524288)!==0)d=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var x=c.alternate;if(x===null)throw Error(u(387));if(x=x.memoizedProps,x!==null){var D=c.type;Me(c.pendingProps.value,x.value)||(n!==null?n.push(D):n=[D])}}else if(c===Cn.current){if(x=c.alternate,x===null)throw Error(u(387));x.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(n!==null?n.push(Ca):n=[Ca])}c=c.return}n!==null&&Lo(e,n,r,i),e.flags|=262144}function Ii(n){for(n=n.firstContext;n!==null;){if(!Me(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Er(n){Sr=n,_t=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function he(n){return Fd(Sr,n)}function Si(n,e){return Sr===null&&Er(n),Fd(n,e)}function Fd(n,e){var r=e._currentValue;if(e={context:e,memoizedValue:r,next:null},_t===null){if(n===null)throw Error(u(308));_t=e,n.dependencies={lanes:0,firstContext:e},n.flags|=524288}else _t=_t.next=e;return r}var bA=typeof AbortController<"u"?AbortController:function(){var n=[],e=this.signal={aborted:!1,addEventListener:function(r,i){n.push(i)}};this.abort=function(){e.aborted=!0,n.forEach(function(r){return r()})}},vA=t.unstable_scheduleCallback,DA=t.unstable_NormalPriority,te={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Po(){return{controller:new bA,data:new Map,refCount:0}}function ea(n){n.refCount--,n.refCount===0&&vA(DA,function(){n.controller.abort()})}var ta=null,Go=0,il=0,ul=null;function kA(n,e){if(ta===null){var r=ta=[];Go=0,il=qs(),ul={status:"pending",value:void 0,then:function(i){r.push(i)}}}return Go++,e.then(zd,zd),e}function zd(){if(--Go===0&&ta!==null){ul!==null&&(ul.status="fulfilled");var n=ta;ta=null,il=0,ul=null;for(var e=0;e<n.length;e++)(0,n[e])()}}function IA(n,e){var r=[],i={status:"pending",value:null,reason:null,then:function(c){r.push(c)}};return n.then(function(){i.status="fulfilled",i.value=e;for(var c=0;c<r.length;c++)(0,r[c])(e)},function(c){for(i.status="rejected",i.reason=c,c=0;c<r.length;c++)(0,r[c])(void 0)}),i}var Md=B.S;B.S=function(n,e){xh=be(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&kA(n,e),Md!==null&&Md(n,e)};var Cr=_(null);function Uo(){var n=Cr.current;return n!==null?n:qn.pooledCache}function Ei(n,e){e===null?k(Cr,Cr.current):k(Cr,e.pool)}function Bd(){var n=Uo();return n===null?null:{parent:te._currentValue,pool:n}}var ol=Error(u(460)),Ho=Error(u(474)),Ci=Error(u(542)),wi={then:function(){}};function Od(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Ld(n,e,r){switch(r=n[r],r===void 0?n.push(e):r!==e&&(e.then(St,St),e=r),e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,Gd(n),n;default:if(typeof e.status=="string")e.then(St,St);else{if(n=qn,n!==null&&100<n.shellSuspendCounter)throw Error(u(482));n=e,n.status="pending",n.then(function(i){if(e.status==="pending"){var c=e;c.status="fulfilled",c.value=i}},function(i){if(e.status==="pending"){var c=e;c.status="rejected",c.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,Gd(n),n}throw _r=e,ol}}function wr(n){try{var e=n._init;return e(n._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(_r=r,ol):r}}var _r=null;function Pd(){if(_r===null)throw Error(u(459));var n=_r;return _r=null,n}function Gd(n){if(n===ol||n===Ci)throw Error(u(483))}var sl=null,ra=0;function _i(n){var e=ra;return ra+=1,sl===null&&(sl=[]),Ld(sl,n,e)}function la(n,e){e=e.props.ref,n.ref=e!==void 0?e:null}function Ri(n,e){throw e.$$typeof===b?Error(u(525)):(n=Object.prototype.toString.call(e),Error(u(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)))}function Ud(n){function e(j,T){if(n){var F=j.deletions;F===null?(j.deletions=[T],j.flags|=16):F.push(T)}}function r(j,T){if(!n)return null;for(;T!==null;)e(j,T),T=T.sibling;return null}function i(j){for(var T=new Map;j!==null;)j.key!==null?T.set(j.key,j):T.set(j.index,j),j=j.sibling;return T}function c(j,T){return j=Ct(j,T),j.index=0,j.sibling=null,j}function d(j,T,F){return j.index=F,n?(F=j.alternate,F!==null?(F=F.index,F<T?(j.flags|=67108866,T):F):(j.flags|=67108866,T)):(j.flags|=1048576,T)}function x(j){return n&&j.alternate===null&&(j.flags|=67108866),j}function D(j,T,F,Y){return T===null||T.tag!==6?(T=To(F,j.mode,Y),T.return=j,T):(T=c(T,F),T.return=j,T)}function E(j,T,F,Y){var cn=F.type;return cn===C?H(j,T,F.props.children,Y,F.key):T!==null&&(T.elementType===cn||typeof cn=="object"&&cn!==null&&cn.$$typeof===fn&&wr(cn)===T.type)?(T=c(T,F.props),la(T,F),T.return=j,T):(T=Di(F.type,F.key,F.props,null,j.mode,Y),la(T,F),T.return=j,T)}function z(j,T,F,Y){return T===null||T.tag!==4||T.stateNode.containerInfo!==F.containerInfo||T.stateNode.implementation!==F.implementation?(T=jo(F,j.mode,Y),T.return=j,T):(T=c(T,F.children||[]),T.return=j,T)}function H(j,T,F,Y,cn){return T===null||T.tag!==7?(T=kr(F,j.mode,Y,cn),T.return=j,T):(T=c(T,F),T.return=j,T)}function Q(j,T,F){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return T=To(""+T,j.mode,F),T.return=j,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case v:return F=Di(T.type,T.key,T.props,null,j.mode,F),la(F,T),F.return=j,F;case I:return T=jo(T,j.mode,F),T.return=j,T;case fn:return T=wr(T),Q(j,T,F)}if(Z(T)||nn(T))return T=kr(T,j.mode,F,null),T.return=j,T;if(typeof T.then=="function")return Q(j,_i(T),F);if(T.$$typeof===L)return Q(j,Si(j,T),F);Ri(j,T)}return null}function M(j,T,F,Y){var cn=T!==null?T.key:null;if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return cn!==null?null:D(j,T,""+F,Y);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case v:return F.key===cn?E(j,T,F,Y):null;case I:return F.key===cn?z(j,T,F,Y):null;case fn:return F=wr(F),M(j,T,F,Y)}if(Z(F)||nn(F))return cn!==null?null:H(j,T,F,Y,null);if(typeof F.then=="function")return M(j,T,_i(F),Y);if(F.$$typeof===L)return M(j,T,Si(j,F),Y);Ri(j,F)}return null}function P(j,T,F,Y,cn){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return j=j.get(F)||null,D(T,j,""+Y,cn);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case v:return j=j.get(Y.key===null?F:Y.key)||null,E(T,j,Y,cn);case I:return j=j.get(Y.key===null?F:Y.key)||null,z(T,j,Y,cn);case fn:return Y=wr(Y),P(j,T,F,Y,cn)}if(Z(Y)||nn(Y))return j=j.get(F)||null,H(T,j,Y,cn,null);if(typeof Y.then=="function")return P(j,T,F,_i(Y),cn);if(Y.$$typeof===L)return P(j,T,F,Si(T,Y),cn);Ri(T,Y)}return null}function ln(j,T,F,Y){for(var cn=null,Nn=null,un=T,xn=T=0,_n=null;un!==null&&xn<F.length;xn++){un.index>xn?(_n=un,un=null):_n=un.sibling;var Fn=M(j,un,F[xn],Y);if(Fn===null){un===null&&(un=_n);break}n&&un&&Fn.alternate===null&&e(j,un),T=d(Fn,T,xn),Nn===null?cn=Fn:Nn.sibling=Fn,Nn=Fn,un=_n}if(xn===F.length)return r(j,un),Rn&&wt(j,xn),cn;if(un===null){for(;xn<F.length;xn++)un=Q(j,F[xn],Y),un!==null&&(T=d(un,T,xn),Nn===null?cn=un:Nn.sibling=un,Nn=un);return Rn&&wt(j,xn),cn}for(un=i(un);xn<F.length;xn++)_n=P(un,j,xn,F[xn],Y),_n!==null&&(n&&_n.alternate!==null&&un.delete(_n.key===null?xn:_n.key),T=d(_n,T,xn),Nn===null?cn=_n:Nn.sibling=_n,Nn=_n);return n&&un.forEach(function(hr){return e(j,hr)}),Rn&&wt(j,xn),cn}function mn(j,T,F,Y){if(F==null)throw Error(u(151));for(var cn=null,Nn=null,un=T,xn=T=0,_n=null,Fn=F.next();un!==null&&!Fn.done;xn++,Fn=F.next()){un.index>xn?(_n=un,un=null):_n=un.sibling;var hr=M(j,un,Fn.value,Y);if(hr===null){un===null&&(un=_n);break}n&&un&&hr.alternate===null&&e(j,un),T=d(hr,T,xn),Nn===null?cn=hr:Nn.sibling=hr,Nn=hr,un=_n}if(Fn.done)return r(j,un),Rn&&wt(j,xn),cn;if(un===null){for(;!Fn.done;xn++,Fn=F.next())Fn=Q(j,Fn.value,Y),Fn!==null&&(T=d(Fn,T,xn),Nn===null?cn=Fn:Nn.sibling=Fn,Nn=Fn);return Rn&&wt(j,xn),cn}for(un=i(un);!Fn.done;xn++,Fn=F.next())Fn=P(un,j,xn,Fn.value,Y),Fn!==null&&(n&&Fn.alternate!==null&&un.delete(Fn.key===null?xn:Fn.key),T=d(Fn,T,xn),Nn===null?cn=Fn:Nn.sibling=Fn,Nn=Fn);return n&&un.forEach(function(zy){return e(j,zy)}),Rn&&wt(j,xn),cn}function Un(j,T,F,Y){if(typeof F=="object"&&F!==null&&F.type===C&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case v:n:{for(var cn=F.key;T!==null;){if(T.key===cn){if(cn=F.type,cn===C){if(T.tag===7){r(j,T.sibling),Y=c(T,F.props.children),Y.return=j,j=Y;break n}}else if(T.elementType===cn||typeof cn=="object"&&cn!==null&&cn.$$typeof===fn&&wr(cn)===T.type){r(j,T.sibling),Y=c(T,F.props),la(Y,F),Y.return=j,j=Y;break n}r(j,T);break}else e(j,T);T=T.sibling}F.type===C?(Y=kr(F.props.children,j.mode,Y,F.key),Y.return=j,j=Y):(Y=Di(F.type,F.key,F.props,null,j.mode,Y),la(Y,F),Y.return=j,j=Y)}return x(j);case I:n:{for(cn=F.key;T!==null;){if(T.key===cn)if(T.tag===4&&T.stateNode.containerInfo===F.containerInfo&&T.stateNode.implementation===F.implementation){r(j,T.sibling),Y=c(T,F.children||[]),Y.return=j,j=Y;break n}else{r(j,T);break}else e(j,T);T=T.sibling}Y=jo(F,j.mode,Y),Y.return=j,j=Y}return x(j);case fn:return F=wr(F),Un(j,T,F,Y)}if(Z(F))return ln(j,T,F,Y);if(nn(F)){if(cn=nn(F),typeof cn!="function")throw Error(u(150));return F=cn.call(F),mn(j,T,F,Y)}if(typeof F.then=="function")return Un(j,T,_i(F),Y);if(F.$$typeof===L)return Un(j,T,Si(j,F),Y);Ri(j,F)}return typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint"?(F=""+F,T!==null&&T.tag===6?(r(j,T.sibling),Y=c(T,F),Y.return=j,j=Y):(r(j,T),Y=To(F,j.mode,Y),Y.return=j,j=Y),x(j)):r(j,T)}return function(j,T,F,Y){try{ra=0;var cn=Un(j,T,F,Y);return sl=null,cn}catch(un){if(un===ol||un===Ci)throw un;var Nn=Be(29,un,null,j.mode);return Nn.lanes=Y,Nn.return=j,Nn}}}var Rr=Ud(!0),Hd=Ud(!1),Kt=!1;function qo(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vo(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Jt(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Wt(n,e,r){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,(zn&2)!==0){var c=i.pending;return c===null?e.next=e:(e.next=c.next,c.next=e),i.pending=e,e=vi(n),Ed(n,null,r),e}return bi(n,i,e,r),vi(n)}function aa(n,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194048)!==0)){var i=e.lanes;i&=n.pendingLanes,r|=i,e.lanes=r,Ff(n,r)}}function Yo(n,e){var r=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,r===i)){var c=null,d=null;if(r=r.firstBaseUpdate,r!==null){do{var x={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};d===null?c=d=x:d=d.next=x,r=r.next}while(r!==null);d===null?c=d=e:d=d.next=e}else c=d=e;r={baseState:i.baseState,firstBaseUpdate:c,lastBaseUpdate:d,shared:i.shared,callbacks:i.callbacks},n.updateQueue=r;return}n=r.lastBaseUpdate,n===null?r.firstBaseUpdate=e:n.next=e,r.lastBaseUpdate=e}var Qo=!1;function ia(){if(Qo){var n=ul;if(n!==null)throw n}}function ua(n,e,r,i){Qo=!1;var c=n.updateQueue;Kt=!1;var d=c.firstBaseUpdate,x=c.lastBaseUpdate,D=c.shared.pending;if(D!==null){c.shared.pending=null;var E=D,z=E.next;E.next=null,x===null?d=z:x.next=z,x=E;var H=n.alternate;H!==null&&(H=H.updateQueue,D=H.lastBaseUpdate,D!==x&&(D===null?H.firstBaseUpdate=z:D.next=z,H.lastBaseUpdate=E))}if(d!==null){var Q=c.baseState;x=0,H=z=E=null,D=d;do{var M=D.lane&-536870913,P=M!==D.lane;if(P?(wn&M)===M:(i&M)===M){M!==0&&M===il&&(Qo=!0),H!==null&&(H=H.next={lane:0,tag:D.tag,payload:D.payload,callback:null,next:null});n:{var ln=n,mn=D;M=e;var Un=r;switch(mn.tag){case 1:if(ln=mn.payload,typeof ln=="function"){Q=ln.call(Un,Q,M);break n}Q=ln;break n;case 3:ln.flags=ln.flags&-65537|128;case 0:if(ln=mn.payload,M=typeof ln=="function"?ln.call(Un,Q,M):ln,M==null)break n;Q=g({},Q,M);break n;case 2:Kt=!0}}M=D.callback,M!==null&&(n.flags|=64,P&&(n.flags|=8192),P=c.callbacks,P===null?c.callbacks=[M]:P.push(M))}else P={lane:M,tag:D.tag,payload:D.payload,callback:D.callback,next:null},H===null?(z=H=P,E=Q):H=H.next=P,x|=M;if(D=D.next,D===null){if(D=c.shared.pending,D===null)break;P=D,D=P.next,P.next=null,c.lastBaseUpdate=P,c.shared.pending=null}}while(!0);H===null&&(E=Q),c.baseState=E,c.firstBaseUpdate=z,c.lastBaseUpdate=H,d===null&&(c.shared.lanes=0),lr|=x,n.lanes=x,n.memoizedState=Q}}function qd(n,e){if(typeof n!="function")throw Error(u(191,n));n.call(e)}function Vd(n,e){var r=n.callbacks;if(r!==null)for(n.callbacks=null,n=0;n<r.length;n++)qd(r[n],e)}var cl=_(null),Ti=_(0);function Yd(n,e){n=Lt,k(Ti,n),k(cl,e),Lt=n|e.baseLanes}function Xo(){k(Ti,Lt),k(cl,cl.current)}function Zo(){Lt=Ti.current,q(cl),q(Ti)}var Oe=_(null),nt=null;function nr(n){var e=n.alternate;k(ne,ne.current&1),k(Oe,n),nt===null&&(e===null||cl.current!==null||e.memoizedState!==null)&&(nt=n)}function $o(n){k(ne,ne.current),k(Oe,n),nt===null&&(nt=n)}function Qd(n){n.tag===22?(k(ne,ne.current),k(Oe,n),nt===null&&(nt=n)):er()}function er(){k(ne,ne.current),k(Oe,Oe.current)}function Le(n){q(Oe),nt===n&&(nt=null),q(ne)}var ne=_(0);function ji(n){for(var e=n;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||tc(r)||rc(r)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Tt=0,yn=null,Pn=null,re=null,Ni=!1,fl=!1,Tr=!1,Fi=0,oa=0,dl=null,SA=0;function Jn(){throw Error(u(321))}function Ko(n,e){if(e===null)return!1;for(var r=0;r<e.length&&r<n.length;r++)if(!Me(n[r],e[r]))return!1;return!0}function Jo(n,e,r,i,c,d){return Tt=d,yn=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,B.H=n===null||n.memoizedState===null?Rm:ms,Tr=!1,d=r(i,c),Tr=!1,fl&&(d=Zd(e,r,i,c)),Xd(n),d}function Xd(n){B.H=fa;var e=Pn!==null&&Pn.next!==null;if(Tt=0,re=Pn=yn=null,Ni=!1,oa=0,dl=null,e)throw Error(u(300));n===null||le||(n=n.dependencies,n!==null&&Ii(n)&&(le=!0))}function Zd(n,e,r,i){yn=n;var c=0;do{if(fl&&(dl=null),oa=0,fl=!1,25<=c)throw Error(u(301));if(c+=1,re=Pn=null,n.updateQueue!=null){var d=n.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}B.H=Tm,d=e(r,i)}while(fl);return d}function EA(){var n=B.H,e=n.useState()[0];return e=typeof e.then=="function"?sa(e):e,n=n.useState()[0],(Pn!==null?Pn.memoizedState:null)!==n&&(yn.flags|=1024),e}function Wo(){var n=Fi!==0;return Fi=0,n}function ns(n,e,r){e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r}function es(n){if(Ni){for(n=n.memoizedState;n!==null;){var e=n.queue;e!==null&&(e.pending=null),n=n.next}Ni=!1}Tt=0,re=Pn=yn=null,fl=!1,oa=Fi=0,dl=null}function De(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return re===null?yn.memoizedState=re=n:re=re.next=n,re}function ee(){if(Pn===null){var n=yn.alternate;n=n!==null?n.memoizedState:null}else n=Pn.next;var e=re===null?yn.memoizedState:re.next;if(e!==null)re=e,Pn=n;else{if(n===null)throw yn.alternate===null?Error(u(467)):Error(u(310));Pn=n,n={memoizedState:Pn.memoizedState,baseState:Pn.baseState,baseQueue:Pn.baseQueue,queue:Pn.queue,next:null},re===null?yn.memoizedState=re=n:re=re.next=n}return re}function zi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function sa(n){var e=oa;return oa+=1,dl===null&&(dl=[]),n=Ld(dl,n,e),e=yn,(re===null?e.memoizedState:re.next)===null&&(e=e.alternate,B.H=e===null||e.memoizedState===null?Rm:ms),n}function Mi(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return sa(n);if(n.$$typeof===L)return he(n)}throw Error(u(438,String(n)))}function ts(n){var e=null,r=yn.updateQueue;if(r!==null&&(e=r.memoCache),e==null){var i=yn.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(c){return c.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),r===null&&(r=zi(),yn.updateQueue=r),r.memoCache=e,r=e.data[e.index],r===void 0)for(r=e.data[e.index]=Array(n),i=0;i<n;i++)r[i]=O;return e.index++,r}function jt(n,e){return typeof e=="function"?e(n):e}function Bi(n){var e=ee();return rs(e,Pn,n)}function rs(n,e,r){var i=n.queue;if(i===null)throw Error(u(311));i.lastRenderedReducer=r;var c=n.baseQueue,d=i.pending;if(d!==null){if(c!==null){var x=c.next;c.next=d.next,d.next=x}e.baseQueue=c=d,i.pending=null}if(d=n.baseState,c===null)n.memoizedState=d;else{e=c.next;var D=x=null,E=null,z=e,H=!1;do{var Q=z.lane&-536870913;if(Q!==z.lane?(wn&Q)===Q:(Tt&Q)===Q){var M=z.revertLane;if(M===0)E!==null&&(E=E.next={lane:0,revertLane:0,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),Q===il&&(H=!0);else if((Tt&M)===M){z=z.next,M===il&&(H=!0);continue}else Q={lane:0,revertLane:z.revertLane,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},E===null?(D=E=Q,x=d):E=E.next=Q,yn.lanes|=M,lr|=M;Q=z.action,Tr&&r(d,Q),d=z.hasEagerState?z.eagerState:r(d,Q)}else M={lane:Q,revertLane:z.revertLane,gesture:z.gesture,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},E===null?(D=E=M,x=d):E=E.next=M,yn.lanes|=Q,lr|=Q;z=z.next}while(z!==null&&z!==e);if(E===null?x=d:E.next=D,!Me(d,n.memoizedState)&&(le=!0,H&&(r=ul,r!==null)))throw r;n.memoizedState=d,n.baseState=x,n.baseQueue=E,i.lastRenderedState=d}return c===null&&(i.lanes=0),[n.memoizedState,i.dispatch]}function ls(n){var e=ee(),r=e.queue;if(r===null)throw Error(u(311));r.lastRenderedReducer=n;var i=r.dispatch,c=r.pending,d=e.memoizedState;if(c!==null){r.pending=null;var x=c=c.next;do d=n(d,x.action),x=x.next;while(x!==c);Me(d,e.memoizedState)||(le=!0),e.memoizedState=d,e.baseQueue===null&&(e.baseState=d),r.lastRenderedState=d}return[d,i]}function $d(n,e,r){var i=yn,c=ee(),d=Rn;if(d){if(r===void 0)throw Error(u(407));r=r()}else r=e();var x=!Me((Pn||c).memoizedState,r);if(x&&(c.memoizedState=r,le=!0),c=c.queue,us(Wd.bind(null,i,c,n),[n]),c.getSnapshot!==e||x||re!==null&&re.memoizedState.tag&1){if(i.flags|=2048,ml(9,{destroy:void 0},Jd.bind(null,i,c,r,e),null),qn===null)throw Error(u(349));d||(Tt&127)!==0||Kd(i,e,r)}return r}function Kd(n,e,r){n.flags|=16384,n={getSnapshot:e,value:r},e=yn.updateQueue,e===null?(e=zi(),yn.updateQueue=e,e.stores=[n]):(r=e.stores,r===null?e.stores=[n]:r.push(n))}function Jd(n,e,r,i){e.value=r,e.getSnapshot=i,nm(e)&&em(n)}function Wd(n,e,r){return r(function(){nm(e)&&em(n)})}function nm(n){var e=n.getSnapshot;n=n.value;try{var r=e();return!Me(n,r)}catch{return!0}}function em(n){var e=Dr(n,2);e!==null&&Te(e,n,2)}function as(n){var e=De();if(typeof n=="function"){var r=n;if(n=r(),Tr){Ie(!0);try{r()}finally{Ie(!1)}}}return e.memoizedState=e.baseState=n,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jt,lastRenderedState:n},e}function tm(n,e,r,i){return n.baseState=r,rs(n,Pn,typeof i=="function"?i:jt)}function CA(n,e,r,i,c){if(Pi(n))throw Error(u(485));if(n=e.action,n!==null){var d={payload:c,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){d.listeners.push(x)}};B.T!==null?r(!0):d.isTransition=!1,i(d),r=e.pending,r===null?(d.next=e.pending=d,rm(e,d)):(d.next=r.next,e.pending=r.next=d)}}function rm(n,e){var r=e.action,i=e.payload,c=n.state;if(e.isTransition){var d=B.T,x={};B.T=x;try{var D=r(c,i),E=B.S;E!==null&&E(x,D),lm(n,e,D)}catch(z){is(n,e,z)}finally{d!==null&&x.types!==null&&(d.types=x.types),B.T=d}}else try{d=r(c,i),lm(n,e,d)}catch(z){is(n,e,z)}}function lm(n,e,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(i){am(n,e,i)},function(i){return is(n,e,i)}):am(n,e,r)}function am(n,e,r){e.status="fulfilled",e.value=r,im(e),n.state=r,e=n.pending,e!==null&&(r=e.next,r===e?n.pending=null:(r=r.next,e.next=r,rm(n,r)))}function is(n,e,r){var i=n.pending;if(n.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=r,im(e),e=e.next;while(e!==i)}n.action=null}function im(n){n=n.listeners;for(var e=0;e<n.length;e++)(0,n[e])()}function um(n,e){return e}function om(n,e){if(Rn){var r=qn.formState;if(r!==null){n:{var i=yn;if(Rn){if(Qn){e:{for(var c=Qn,d=We;c.nodeType!==8;){if(!d){c=null;break e}if(c=et(c.nextSibling),c===null){c=null;break e}}d=c.data,c=d==="F!"||d==="F"?c:null}if(c){Qn=et(c.nextSibling),i=c.data==="F!";break n}}Zt(i)}i=!1}i&&(e=r[0])}}return r=De(),r.memoizedState=r.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:um,lastRenderedState:e},r.queue=i,r=Cm.bind(null,yn,i),i.dispatch=r,i=as(!1),d=ds.bind(null,yn,!1,i.queue),i=De(),c={state:e,dispatch:null,action:n,pending:null},i.queue=c,r=CA.bind(null,yn,c,d,r),c.dispatch=r,i.memoizedState=n,[e,r,!1]}function sm(n){var e=ee();return cm(e,Pn,n)}function cm(n,e,r){if(e=rs(n,e,um)[0],n=Bi(jt)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var i=sa(e)}catch(x){throw x===ol?Ci:x}else i=e;e=ee();var c=e.queue,d=c.dispatch;return r!==e.memoizedState&&(yn.flags|=2048,ml(9,{destroy:void 0},wA.bind(null,c,r),null)),[i,d,n]}function wA(n,e){n.action=e}function fm(n){var e=ee(),r=Pn;if(r!==null)return cm(e,r,n);ee(),e=e.memoizedState,r=ee();var i=r.queue.dispatch;return r.memoizedState=n,[e,i,!1]}function ml(n,e,r,i){return n={tag:n,create:r,deps:i,inst:e,next:null},e=yn.updateQueue,e===null&&(e=zi(),yn.updateQueue=e),r=e.lastEffect,r===null?e.lastEffect=n.next=n:(i=r.next,r.next=n,n.next=i,e.lastEffect=n),n}function dm(){return ee().memoizedState}function Oi(n,e,r,i){var c=De();yn.flags|=n,c.memoizedState=ml(1|e,{destroy:void 0},r,i===void 0?null:i)}function Li(n,e,r,i){var c=ee();i=i===void 0?null:i;var d=c.memoizedState.inst;Pn!==null&&i!==null&&Ko(i,Pn.memoizedState.deps)?c.memoizedState=ml(e,d,r,i):(yn.flags|=n,c.memoizedState=ml(1|e,d,r,i))}function mm(n,e){Oi(8390656,8,n,e)}function us(n,e){Li(2048,8,n,e)}function _A(n){yn.flags|=4;var e=yn.updateQueue;if(e===null)e=zi(),yn.updateQueue=e,e.events=[n];else{var r=e.events;r===null?e.events=[n]:r.push(n)}}function hm(n){var e=ee().memoizedState;return _A({ref:e,nextImpl:n}),function(){if((zn&2)!==0)throw Error(u(440));return e.impl.apply(void 0,arguments)}}function pm(n,e){return Li(4,2,n,e)}function gm(n,e){return Li(4,4,n,e)}function Am(n,e){if(typeof e=="function"){n=n();var r=e(n);return function(){typeof r=="function"?r():e(null)}}if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function ym(n,e,r){r=r!=null?r.concat([n]):null,Li(4,4,Am.bind(null,e,n),r)}function os(){}function xm(n,e){var r=ee();e=e===void 0?null:e;var i=r.memoizedState;return e!==null&&Ko(e,i[1])?i[0]:(r.memoizedState=[n,e],n)}function bm(n,e){var r=ee();e=e===void 0?null:e;var i=r.memoizedState;if(e!==null&&Ko(e,i[1]))return i[0];if(i=n(),Tr){Ie(!0);try{n()}finally{Ie(!1)}}return r.memoizedState=[i,e],i}function ss(n,e,r){return r===void 0||(Tt&1073741824)!==0&&(wn&261930)===0?n.memoizedState=e:(n.memoizedState=r,n=vh(),yn.lanes|=n,lr|=n,r)}function vm(n,e,r,i){return Me(r,e)?r:cl.current!==null?(n=ss(n,r,i),Me(n,e)||(le=!0),n):(Tt&42)===0||(Tt&1073741824)!==0&&(wn&261930)===0?(le=!0,n.memoizedState=r):(n=vh(),yn.lanes|=n,lr|=n,e)}function Dm(n,e,r,i,c){var d=X.p;X.p=d!==0&&8>d?d:8;var x=B.T,D={};B.T=D,ds(n,!1,e,r);try{var E=c(),z=B.S;if(z!==null&&z(D,E),E!==null&&typeof E=="object"&&typeof E.then=="function"){var H=IA(E,i);ca(n,e,H,Ue(n))}else ca(n,e,i,Ue(n))}catch(Q){ca(n,e,{then:function(){},status:"rejected",reason:Q},Ue())}finally{X.p=d,x!==null&&D.types!==null&&(x.types=D.types),B.T=x}}function RA(){}function cs(n,e,r,i){if(n.tag!==5)throw Error(u(476));var c=km(n).queue;Dm(n,c,e,on,r===null?RA:function(){return Im(n),r(i)})}function km(n){var e=n.memoizedState;if(e!==null)return e;e={memoizedState:on,baseState:on,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jt,lastRenderedState:on},next:null};var r={};return e.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jt,lastRenderedState:r},next:null},n.memoizedState=e,n=n.alternate,n!==null&&(n.memoizedState=e),e}function Im(n){var e=km(n);e.next===null&&(e=n.alternate.memoizedState),ca(n,e.next.queue,{},Ue())}function fs(){return he(Ca)}function Sm(){return ee().memoizedState}function Em(){return ee().memoizedState}function TA(n){for(var e=n.return;e!==null;){switch(e.tag){case 24:case 3:var r=Ue();n=Jt(r);var i=Wt(e,n,r);i!==null&&(Te(i,e,r),aa(i,e,r)),e={cache:Po()},n.payload=e;return}e=e.return}}function jA(n,e,r){var i=Ue();r={lane:i,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Pi(n)?wm(e,r):(r=_o(n,e,r,i),r!==null&&(Te(r,n,i),_m(r,e,i)))}function Cm(n,e,r){var i=Ue();ca(n,e,r,i)}function ca(n,e,r,i){var c={lane:i,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(Pi(n))wm(e,c);else{var d=n.alternate;if(n.lanes===0&&(d===null||d.lanes===0)&&(d=e.lastRenderedReducer,d!==null))try{var x=e.lastRenderedState,D=d(x,r);if(c.hasEagerState=!0,c.eagerState=D,Me(D,x))return bi(n,e,c,0),qn===null&&xi(),!1}catch{}if(r=_o(n,e,c,i),r!==null)return Te(r,n,i),_m(r,e,i),!0}return!1}function ds(n,e,r,i){if(i={lane:2,revertLane:qs(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Pi(n)){if(e)throw Error(u(479))}else e=_o(n,r,i,2),e!==null&&Te(e,n,2)}function Pi(n){var e=n.alternate;return n===yn||e!==null&&e===yn}function wm(n,e){fl=Ni=!0;var r=n.pending;r===null?e.next=e:(e.next=r.next,r.next=e),n.pending=e}function _m(n,e,r){if((r&4194048)!==0){var i=e.lanes;i&=n.pendingLanes,r|=i,e.lanes=r,Ff(n,r)}}var fa={readContext:he,use:Mi,useCallback:Jn,useContext:Jn,useEffect:Jn,useImperativeHandle:Jn,useLayoutEffect:Jn,useInsertionEffect:Jn,useMemo:Jn,useReducer:Jn,useRef:Jn,useState:Jn,useDebugValue:Jn,useDeferredValue:Jn,useTransition:Jn,useSyncExternalStore:Jn,useId:Jn,useHostTransitionStatus:Jn,useFormState:Jn,useActionState:Jn,useOptimistic:Jn,useMemoCache:Jn,useCacheRefresh:Jn};fa.useEffectEvent=Jn;var Rm={readContext:he,use:Mi,useCallback:function(n,e){return De().memoizedState=[n,e===void 0?null:e],n},useContext:he,useEffect:mm,useImperativeHandle:function(n,e,r){r=r!=null?r.concat([n]):null,Oi(4194308,4,Am.bind(null,e,n),r)},useLayoutEffect:function(n,e){return Oi(4194308,4,n,e)},useInsertionEffect:function(n,e){Oi(4,2,n,e)},useMemo:function(n,e){var r=De();e=e===void 0?null:e;var i=n();if(Tr){Ie(!0);try{n()}finally{Ie(!1)}}return r.memoizedState=[i,e],i},useReducer:function(n,e,r){var i=De();if(r!==void 0){var c=r(e);if(Tr){Ie(!0);try{r(e)}finally{Ie(!1)}}}else c=e;return i.memoizedState=i.baseState=c,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:c},i.queue=n,n=n.dispatch=jA.bind(null,yn,n),[i.memoizedState,n]},useRef:function(n){var e=De();return n={current:n},e.memoizedState=n},useState:function(n){n=as(n);var e=n.queue,r=Cm.bind(null,yn,e);return e.dispatch=r,[n.memoizedState,r]},useDebugValue:os,useDeferredValue:function(n,e){var r=De();return ss(r,n,e)},useTransition:function(){var n=as(!1);return n=Dm.bind(null,yn,n.queue,!0,!1),De().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,e,r){var i=yn,c=De();if(Rn){if(r===void 0)throw Error(u(407));r=r()}else{if(r=e(),qn===null)throw Error(u(349));(wn&127)!==0||Kd(i,e,r)}c.memoizedState=r;var d={value:r,getSnapshot:e};return c.queue=d,mm(Wd.bind(null,i,d,n),[n]),i.flags|=2048,ml(9,{destroy:void 0},Jd.bind(null,i,d,r,e),null),r},useId:function(){var n=De(),e=qn.identifierPrefix;if(Rn){var r=gt,i=pt;r=(i&~(1<<32-Hn(i)-1)).toString(32)+r,e="_"+e+"R_"+r,r=Fi++,0<r&&(e+="H"+r.toString(32)),e+="_"}else r=SA++,e="_"+e+"r_"+r.toString(32)+"_";return n.memoizedState=e},useHostTransitionStatus:fs,useFormState:om,useActionState:om,useOptimistic:function(n){var e=De();e.memoizedState=e.baseState=n;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=r,e=ds.bind(null,yn,!0,r),r.dispatch=e,[n,e]},useMemoCache:ts,useCacheRefresh:function(){return De().memoizedState=TA.bind(null,yn)},useEffectEvent:function(n){var e=De(),r={impl:n};return e.memoizedState=r,function(){if((zn&2)!==0)throw Error(u(440));return r.impl.apply(void 0,arguments)}}},ms={readContext:he,use:Mi,useCallback:xm,useContext:he,useEffect:us,useImperativeHandle:ym,useInsertionEffect:pm,useLayoutEffect:gm,useMemo:bm,useReducer:Bi,useRef:dm,useState:function(){return Bi(jt)},useDebugValue:os,useDeferredValue:function(n,e){var r=ee();return vm(r,Pn.memoizedState,n,e)},useTransition:function(){var n=Bi(jt)[0],e=ee().memoizedState;return[typeof n=="boolean"?n:sa(n),e]},useSyncExternalStore:$d,useId:Sm,useHostTransitionStatus:fs,useFormState:sm,useActionState:sm,useOptimistic:function(n,e){var r=ee();return tm(r,Pn,n,e)},useMemoCache:ts,useCacheRefresh:Em};ms.useEffectEvent=hm;var Tm={readContext:he,use:Mi,useCallback:xm,useContext:he,useEffect:us,useImperativeHandle:ym,useInsertionEffect:pm,useLayoutEffect:gm,useMemo:bm,useReducer:ls,useRef:dm,useState:function(){return ls(jt)},useDebugValue:os,useDeferredValue:function(n,e){var r=ee();return Pn===null?ss(r,n,e):vm(r,Pn.memoizedState,n,e)},useTransition:function(){var n=ls(jt)[0],e=ee().memoizedState;return[typeof n=="boolean"?n:sa(n),e]},useSyncExternalStore:$d,useId:Sm,useHostTransitionStatus:fs,useFormState:fm,useActionState:fm,useOptimistic:function(n,e){var r=ee();return Pn!==null?tm(r,Pn,n,e):(r.baseState=n,[n,r.queue.dispatch])},useMemoCache:ts,useCacheRefresh:Em};Tm.useEffectEvent=hm;function hs(n,e,r,i){e=n.memoizedState,r=r(i,e),r=r==null?e:g({},e,r),n.memoizedState=r,n.lanes===0&&(n.updateQueue.baseState=r)}var ps={enqueueSetState:function(n,e,r){n=n._reactInternals;var i=Ue(),c=Jt(i);c.payload=e,r!=null&&(c.callback=r),e=Wt(n,c,i),e!==null&&(Te(e,n,i),aa(e,n,i))},enqueueReplaceState:function(n,e,r){n=n._reactInternals;var i=Ue(),c=Jt(i);c.tag=1,c.payload=e,r!=null&&(c.callback=r),e=Wt(n,c,i),e!==null&&(Te(e,n,i),aa(e,n,i))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var r=Ue(),i=Jt(r);i.tag=2,e!=null&&(i.callback=e),e=Wt(n,i,r),e!==null&&(Te(e,n,r),aa(e,n,r))}};function jm(n,e,r,i,c,d,x){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,d,x):e.prototype&&e.prototype.isPureReactComponent?!Kl(r,i)||!Kl(c,d):!0}function Nm(n,e,r,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,i),e.state!==n&&ps.enqueueReplaceState(e,e.state,null)}function jr(n,e){var r=e;if("ref"in e){r={};for(var i in e)i!=="ref"&&(r[i]=e[i])}if(n=n.defaultProps){r===e&&(r=g({},r));for(var c in n)r[c]===void 0&&(r[c]=n[c])}return r}function Fm(n){yi(n)}function zm(n){console.error(n)}function Mm(n){yi(n)}function Gi(n,e){try{var r=n.onUncaughtError;r(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function Bm(n,e,r){try{var i=n.onCaughtError;i(r.value,{componentStack:r.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function gs(n,e,r){return r=Jt(r),r.tag=3,r.payload={element:null},r.callback=function(){Gi(n,e)},r}function Om(n){return n=Jt(n),n.tag=3,n}function Lm(n,e,r,i){var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;n.payload=function(){return c(d)},n.callback=function(){Bm(e,r,i)}}var x=r.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(n.callback=function(){Bm(e,r,i),typeof c!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var D=i.stack;this.componentDidCatch(i.value,{componentStack:D!==null?D:""})})}function NA(n,e,r,i,c){if(r.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=r.alternate,e!==null&&al(e,r,c,!0),r=Oe.current,r!==null){switch(r.tag){case 31:case 13:return nt===null?Wi():r.alternate===null&&Wn===0&&(Wn=3),r.flags&=-257,r.flags|=65536,r.lanes=c,i===wi?r.flags|=16384:(e=r.updateQueue,e===null?r.updateQueue=new Set([i]):e.add(i),Gs(n,i,c)),!1;case 22:return r.flags|=65536,i===wi?r.flags|=16384:(e=r.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},r.updateQueue=e):(r=e.retryQueue,r===null?e.retryQueue=new Set([i]):r.add(i)),Gs(n,i,c)),!1}throw Error(u(435,r.tag))}return Gs(n,i,c),Wi(),!1}if(Rn)return e=Oe.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=c,i!==zo&&(n=Error(u(422),{cause:i}),na($e(n,r)))):(i!==zo&&(e=Error(u(423),{cause:i}),na($e(e,r))),n=n.current.alternate,n.flags|=65536,c&=-c,n.lanes|=c,i=$e(i,r),c=gs(n.stateNode,i,c),Yo(n,c),Wn!==4&&(Wn=2)),!1;var d=Error(u(520),{cause:i});if(d=$e(d,r),xa===null?xa=[d]:xa.push(d),Wn!==4&&(Wn=2),e===null)return!0;i=$e(i,r),r=e;do{switch(r.tag){case 3:return r.flags|=65536,n=c&-c,r.lanes|=n,n=gs(r.stateNode,i,n),Yo(r,n),!1;case 1:if(e=r.type,d=r.stateNode,(r.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ar===null||!ar.has(d))))return r.flags|=65536,c&=-c,r.lanes|=c,c=Om(c),Lm(c,n,r,i),Yo(r,c),!1}r=r.return}while(r!==null);return!1}var As=Error(u(461)),le=!1;function pe(n,e,r,i){e.child=n===null?Hd(e,null,r,i):Rr(e,n.child,r,i)}function Pm(n,e,r,i,c){r=r.render;var d=e.ref;if("ref"in i){var x={};for(var D in i)D!=="ref"&&(x[D]=i[D])}else x=i;return Er(e),i=Jo(n,e,r,x,d,c),D=Wo(),n!==null&&!le?(ns(n,e,c),Nt(n,e,c)):(Rn&&D&&No(e),e.flags|=1,pe(n,e,i,c),e.child)}function Gm(n,e,r,i,c){if(n===null){var d=r.type;return typeof d=="function"&&!Ro(d)&&d.defaultProps===void 0&&r.compare===null?(e.tag=15,e.type=d,Um(n,e,d,i,c)):(n=Di(r.type,null,i,e,e.mode,c),n.ref=e.ref,n.return=e,e.child=n)}if(d=n.child,!Ss(n,c)){var x=d.memoizedProps;if(r=r.compare,r=r!==null?r:Kl,r(x,i)&&n.ref===e.ref)return Nt(n,e,c)}return e.flags|=1,n=Ct(d,i),n.ref=e.ref,n.return=e,e.child=n}function Um(n,e,r,i,c){if(n!==null){var d=n.memoizedProps;if(Kl(d,i)&&n.ref===e.ref)if(le=!1,e.pendingProps=i=d,Ss(n,c))(n.flags&131072)!==0&&(le=!0);else return e.lanes=n.lanes,Nt(n,e,c)}return ys(n,e,r,i,c)}function Hm(n,e,r,i){var c=i.children,d=n!==null?n.memoizedState:null;if(n===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((e.flags&128)!==0){if(d=d!==null?d.baseLanes|r:r,n!==null){for(i=e.child=n.child,c=0;i!==null;)c=c|i.lanes|i.childLanes,i=i.sibling;i=c&~d}else i=0,e.child=null;return qm(n,e,d,r,i)}if((r&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},n!==null&&Ei(e,d!==null?d.cachePool:null),d!==null?Yd(e,d):Xo(),Qd(e);else return i=e.lanes=536870912,qm(n,e,d!==null?d.baseLanes|r:r,r,i)}else d!==null?(Ei(e,d.cachePool),Yd(e,d),er(),e.memoizedState=null):(n!==null&&Ei(e,null),Xo(),er());return pe(n,e,c,r),e.child}function da(n,e){return n!==null&&n.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function qm(n,e,r,i,c){var d=Uo();return d=d===null?null:{parent:te._currentValue,pool:d},e.memoizedState={baseLanes:r,cachePool:d},n!==null&&Ei(e,null),Xo(),Qd(e),n!==null&&al(n,e,i,!0),e.childLanes=c,null}function Ui(n,e){return e=qi({mode:e.mode,children:e.children},n.mode),e.ref=n.ref,n.child=e,e.return=n,e}function Vm(n,e,r){return Rr(e,n.child,null,r),n=Ui(e,e.pendingProps),n.flags|=2,Le(e),e.memoizedState=null,n}function FA(n,e,r){var i=e.pendingProps,c=(e.flags&128)!==0;if(e.flags&=-129,n===null){if(Rn){if(i.mode==="hidden")return n=Ui(e,i),e.lanes=536870912,da(null,n);if($o(e),(n=Qn)?(n=rp(n,We),n=n!==null&&n.data==="&"?n:null,n!==null&&(e.memoizedState={dehydrated:n,treeContext:Qt!==null?{id:pt,overflow:gt}:null,retryLane:536870912,hydrationErrors:null},r=wd(n),r.return=e,e.child=r,me=e,Qn=null)):n=null,n===null)throw Zt(e);return e.lanes=536870912,null}return Ui(e,i)}var d=n.memoizedState;if(d!==null){var x=d.dehydrated;if($o(e),c)if(e.flags&256)e.flags&=-257,e=Vm(n,e,r);else if(e.memoizedState!==null)e.child=n.child,e.flags|=128,e=null;else throw Error(u(558));else if(le||al(n,e,r,!1),c=(r&n.childLanes)!==0,le||c){if(i=qn,i!==null&&(x=zf(i,r),x!==0&&x!==d.retryLane))throw d.retryLane=x,Dr(n,x),Te(i,n,x),As;Wi(),e=Vm(n,e,r)}else n=d.treeContext,Qn=et(x.nextSibling),me=e,Rn=!0,Xt=null,We=!1,n!==null&&Td(e,n),e=Ui(e,i),e.flags|=4096;return e}return n=Ct(n.child,{mode:i.mode,children:i.children}),n.ref=e.ref,e.child=n,n.return=e,n}function Hi(n,e){var r=e.ref;if(r===null)n!==null&&n.ref!==null&&(e.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(u(284));(n===null||n.ref!==r)&&(e.flags|=4194816)}}function ys(n,e,r,i,c){return Er(e),r=Jo(n,e,r,i,void 0,c),i=Wo(),n!==null&&!le?(ns(n,e,c),Nt(n,e,c)):(Rn&&i&&No(e),e.flags|=1,pe(n,e,r,c),e.child)}function Ym(n,e,r,i,c,d){return Er(e),e.updateQueue=null,r=Zd(e,i,r,c),Xd(n),i=Wo(),n!==null&&!le?(ns(n,e,d),Nt(n,e,d)):(Rn&&i&&No(e),e.flags|=1,pe(n,e,r,d),e.child)}function Qm(n,e,r,i,c){if(Er(e),e.stateNode===null){var d=el,x=r.contextType;typeof x=="object"&&x!==null&&(d=he(x)),d=new r(i,d),e.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=ps,e.stateNode=d,d._reactInternals=e,d=e.stateNode,d.props=i,d.state=e.memoizedState,d.refs={},qo(e),x=r.contextType,d.context=typeof x=="object"&&x!==null?he(x):el,d.state=e.memoizedState,x=r.getDerivedStateFromProps,typeof x=="function"&&(hs(e,r,x,i),d.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(x=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),x!==d.state&&ps.enqueueReplaceState(d,d.state,null),ua(e,i,d,c),ia(),d.state=e.memoizedState),typeof d.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(n===null){d=e.stateNode;var D=e.memoizedProps,E=jr(r,D);d.props=E;var z=d.context,H=r.contextType;x=el,typeof H=="object"&&H!==null&&(x=he(H));var Q=r.getDerivedStateFromProps;H=typeof Q=="function"||typeof d.getSnapshotBeforeUpdate=="function",D=e.pendingProps!==D,H||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(D||z!==x)&&Nm(e,d,i,x),Kt=!1;var M=e.memoizedState;d.state=M,ua(e,i,d,c),ia(),z=e.memoizedState,D||M!==z||Kt?(typeof Q=="function"&&(hs(e,r,Q,i),z=e.memoizedState),(E=Kt||jm(e,r,E,i,M,z,x))?(H||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(e.flags|=4194308)):(typeof d.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=z),d.props=i,d.state=z,d.context=x,i=E):(typeof d.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{d=e.stateNode,Vo(n,e),x=e.memoizedProps,H=jr(r,x),d.props=H,Q=e.pendingProps,M=d.context,z=r.contextType,E=el,typeof z=="object"&&z!==null&&(E=he(z)),D=r.getDerivedStateFromProps,(z=typeof D=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(x!==Q||M!==E)&&Nm(e,d,i,E),Kt=!1,M=e.memoizedState,d.state=M,ua(e,i,d,c),ia();var P=e.memoizedState;x!==Q||M!==P||Kt||n!==null&&n.dependencies!==null&&Ii(n.dependencies)?(typeof D=="function"&&(hs(e,r,D,i),P=e.memoizedState),(H=Kt||jm(e,r,H,i,M,P,E)||n!==null&&n.dependencies!==null&&Ii(n.dependencies))?(z||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(i,P,E),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(i,P,E)),typeof d.componentDidUpdate=="function"&&(e.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof d.componentDidUpdate!="function"||x===n.memoizedProps&&M===n.memoizedState||(e.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===n.memoizedProps&&M===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=P),d.props=i,d.state=P,d.context=E,i=H):(typeof d.componentDidUpdate!="function"||x===n.memoizedProps&&M===n.memoizedState||(e.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===n.memoizedProps&&M===n.memoizedState||(e.flags|=1024),i=!1)}return d=i,Hi(n,e),i=(e.flags&128)!==0,d||i?(d=e.stateNode,r=i&&typeof r.getDerivedStateFromError!="function"?null:d.render(),e.flags|=1,n!==null&&i?(e.child=Rr(e,n.child,null,c),e.child=Rr(e,null,r,c)):pe(n,e,r,c),e.memoizedState=d.state,n=e.child):n=Nt(n,e,c),n}function Xm(n,e,r,i){return Ir(),e.flags|=256,pe(n,e,r,i),e.child}var xs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bs(n){return{baseLanes:n,cachePool:Bd()}}function vs(n,e,r){return n=n!==null?n.childLanes&~r:0,e&&(n|=Ge),n}function Zm(n,e,r){var i=e.pendingProps,c=!1,d=(e.flags&128)!==0,x;if((x=d)||(x=n!==null&&n.memoizedState===null?!1:(ne.current&2)!==0),x&&(c=!0,e.flags&=-129),x=(e.flags&32)!==0,e.flags&=-33,n===null){if(Rn){if(c?nr(e):er(),(n=Qn)?(n=rp(n,We),n=n!==null&&n.data!=="&"?n:null,n!==null&&(e.memoizedState={dehydrated:n,treeContext:Qt!==null?{id:pt,overflow:gt}:null,retryLane:536870912,hydrationErrors:null},r=wd(n),r.return=e,e.child=r,me=e,Qn=null)):n=null,n===null)throw Zt(e);return rc(n)?e.lanes=32:e.lanes=536870912,null}var D=i.children;return i=i.fallback,c?(er(),c=e.mode,D=qi({mode:"hidden",children:D},c),i=kr(i,c,r,null),D.return=e,i.return=e,D.sibling=i,e.child=D,i=e.child,i.memoizedState=bs(r),i.childLanes=vs(n,x,r),e.memoizedState=xs,da(null,i)):(nr(e),Ds(e,D))}var E=n.memoizedState;if(E!==null&&(D=E.dehydrated,D!==null)){if(d)e.flags&256?(nr(e),e.flags&=-257,e=ks(n,e,r)):e.memoizedState!==null?(er(),e.child=n.child,e.flags|=128,e=null):(er(),D=i.fallback,c=e.mode,i=qi({mode:"visible",children:i.children},c),D=kr(D,c,r,null),D.flags|=2,i.return=e,D.return=e,i.sibling=D,e.child=i,Rr(e,n.child,null,r),i=e.child,i.memoizedState=bs(r),i.childLanes=vs(n,x,r),e.memoizedState=xs,e=da(null,i));else if(nr(e),rc(D)){if(x=D.nextSibling&&D.nextSibling.dataset,x)var z=x.dgst;x=z,i=Error(u(419)),i.stack="",i.digest=x,na({value:i,source:null,stack:null}),e=ks(n,e,r)}else if(le||al(n,e,r,!1),x=(r&n.childLanes)!==0,le||x){if(x=qn,x!==null&&(i=zf(x,r),i!==0&&i!==E.retryLane))throw E.retryLane=i,Dr(n,i),Te(x,n,i),As;tc(D)||Wi(),e=ks(n,e,r)}else tc(D)?(e.flags|=192,e.child=n.child,e=null):(n=E.treeContext,Qn=et(D.nextSibling),me=e,Rn=!0,Xt=null,We=!1,n!==null&&Td(e,n),e=Ds(e,i.children),e.flags|=4096);return e}return c?(er(),D=i.fallback,c=e.mode,E=n.child,z=E.sibling,i=Ct(E,{mode:"hidden",children:i.children}),i.subtreeFlags=E.subtreeFlags&65011712,z!==null?D=Ct(z,D):(D=kr(D,c,r,null),D.flags|=2),D.return=e,i.return=e,i.sibling=D,e.child=i,da(null,i),i=e.child,D=n.child.memoizedState,D===null?D=bs(r):(c=D.cachePool,c!==null?(E=te._currentValue,c=c.parent!==E?{parent:E,pool:E}:c):c=Bd(),D={baseLanes:D.baseLanes|r,cachePool:c}),i.memoizedState=D,i.childLanes=vs(n,x,r),e.memoizedState=xs,da(n.child,i)):(nr(e),r=n.child,n=r.sibling,r=Ct(r,{mode:"visible",children:i.children}),r.return=e,r.sibling=null,n!==null&&(x=e.deletions,x===null?(e.deletions=[n],e.flags|=16):x.push(n)),e.child=r,e.memoizedState=null,r)}function Ds(n,e){return e=qi({mode:"visible",children:e},n.mode),e.return=n,n.child=e}function qi(n,e){return n=Be(22,n,null,e),n.lanes=0,n}function ks(n,e,r){return Rr(e,n.child,null,r),n=Ds(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function $m(n,e,r){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Oo(n.return,e,r)}function Is(n,e,r,i,c,d){var x=n.memoizedState;x===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:r,tailMode:c,treeForkCount:d}:(x.isBackwards=e,x.rendering=null,x.renderingStartTime=0,x.last=i,x.tail=r,x.tailMode=c,x.treeForkCount=d)}function Km(n,e,r){var i=e.pendingProps,c=i.revealOrder,d=i.tail;i=i.children;var x=ne.current,D=(x&2)!==0;if(D?(x=x&1|2,e.flags|=128):x&=1,k(ne,x),pe(n,e,i,r),i=Rn?Wl:0,!D&&n!==null&&(n.flags&128)!==0)n:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&$m(n,r,e);else if(n.tag===19)$m(n,r,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break n;for(;n.sibling===null;){if(n.return===null||n.return===e)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(c){case"forwards":for(r=e.child,c=null;r!==null;)n=r.alternate,n!==null&&ji(n)===null&&(c=r),r=r.sibling;r=c,r===null?(c=e.child,e.child=null):(c=r.sibling,r.sibling=null),Is(e,!1,c,r,d,i);break;case"backwards":case"unstable_legacy-backwards":for(r=null,c=e.child,e.child=null;c!==null;){if(n=c.alternate,n!==null&&ji(n)===null){e.child=c;break}n=c.sibling,c.sibling=r,r=c,c=n}Is(e,!0,r,null,d,i);break;case"together":Is(e,!1,null,null,void 0,i);break;default:e.memoizedState=null}return e.child}function Nt(n,e,r){if(n!==null&&(e.dependencies=n.dependencies),lr|=e.lanes,(r&e.childLanes)===0)if(n!==null){if(al(n,e,r,!1),(r&e.childLanes)===0)return null}else return null;if(n!==null&&e.child!==n.child)throw Error(u(153));if(e.child!==null){for(n=e.child,r=Ct(n,n.pendingProps),e.child=r,r.return=e;n.sibling!==null;)n=n.sibling,r=r.sibling=Ct(n,n.pendingProps),r.return=e;r.sibling=null}return e.child}function Ss(n,e){return(n.lanes&e)!==0?!0:(n=n.dependencies,!!(n!==null&&Ii(n)))}function zA(n,e,r){switch(e.tag){case 3:Zn(e,e.stateNode.containerInfo),$t(e,te,n.memoizedState.cache),Ir();break;case 27:case 5:Ye(e);break;case 4:Zn(e,e.stateNode.containerInfo);break;case 10:$t(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,$o(e),null;break;case 13:var i=e.memoizedState;if(i!==null)return i.dehydrated!==null?(nr(e),e.flags|=128,null):(r&e.child.childLanes)!==0?Zm(n,e,r):(nr(e),n=Nt(n,e,r),n!==null?n.sibling:null);nr(e);break;case 19:var c=(n.flags&128)!==0;if(i=(r&e.childLanes)!==0,i||(al(n,e,r,!1),i=(r&e.childLanes)!==0),c){if(i)return Km(n,e,r);e.flags|=128}if(c=e.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),k(ne,ne.current),i)break;return null;case 22:return e.lanes=0,Hm(n,e,r,e.pendingProps);case 24:$t(e,te,n.memoizedState.cache)}return Nt(n,e,r)}function Jm(n,e,r){if(n!==null)if(n.memoizedProps!==e.pendingProps)le=!0;else{if(!Ss(n,r)&&(e.flags&128)===0)return le=!1,zA(n,e,r);le=(n.flags&131072)!==0}else le=!1,Rn&&(e.flags&1048576)!==0&&Rd(e,Wl,e.index);switch(e.lanes=0,e.tag){case 16:n:{var i=e.pendingProps;if(n=wr(e.elementType),e.type=n,typeof n=="function")Ro(n)?(i=jr(n,i),e.tag=1,e=Qm(null,e,n,i,r)):(e.tag=0,e=ys(null,e,n,i,r));else{if(n!=null){var c=n.$$typeof;if(c===en){e.tag=11,e=Pm(null,e,n,i,r);break n}else if(c===J){e.tag=14,e=Gm(null,e,n,i,r);break n}}throw e=an(n)||n,Error(u(306,e,""))}}return e;case 0:return ys(n,e,e.type,e.pendingProps,r);case 1:return i=e.type,c=jr(i,e.pendingProps),Qm(n,e,i,c,r);case 3:n:{if(Zn(e,e.stateNode.containerInfo),n===null)throw Error(u(387));i=e.pendingProps;var d=e.memoizedState;c=d.element,Vo(n,e),ua(e,i,null,r);var x=e.memoizedState;if(i=x.cache,$t(e,te,i),i!==d.cache&&Lo(e,[te],r,!0),ia(),i=x.element,d.isDehydrated)if(d={element:i,isDehydrated:!1,cache:x.cache},e.updateQueue.baseState=d,e.memoizedState=d,e.flags&256){e=Xm(n,e,i,r);break n}else if(i!==c){c=$e(Error(u(424)),e),na(c),e=Xm(n,e,i,r);break n}else for(n=e.stateNode.containerInfo,n.nodeType===9?n=n.body:n=n.nodeName==="HTML"?n.ownerDocument.body:n,Qn=et(n.firstChild),me=e,Rn=!0,Xt=null,We=!0,r=Hd(e,null,i,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Ir(),i===c){e=Nt(n,e,r);break n}pe(n,e,i,r)}e=e.child}return e;case 26:return Hi(n,e),n===null?(r=sp(e.type,null,e.pendingProps,null))?e.memoizedState=r:Rn||(r=e.type,n=e.pendingProps,i=iu(sn.current).createElement(r),i[de]=e,i[Se]=n,ge(i,r,n),se(i),e.stateNode=i):e.memoizedState=sp(e.type,n.memoizedProps,e.pendingProps,n.memoizedState),null;case 27:return Ye(e),n===null&&Rn&&(i=e.stateNode=ip(e.type,e.pendingProps,sn.current),me=e,We=!0,c=Qn,sr(e.type)?(lc=c,Qn=et(i.firstChild)):Qn=c),pe(n,e,e.pendingProps.children,r),Hi(n,e),n===null&&(e.flags|=4194304),e.child;case 5:return n===null&&Rn&&((c=i=Qn)&&(i=fy(i,e.type,e.pendingProps,We),i!==null?(e.stateNode=i,me=e,Qn=et(i.firstChild),We=!1,c=!0):c=!1),c||Zt(e)),Ye(e),c=e.type,d=e.pendingProps,x=n!==null?n.memoizedProps:null,i=d.children,Ws(c,d)?i=null:x!==null&&Ws(c,x)&&(e.flags|=32),e.memoizedState!==null&&(c=Jo(n,e,EA,null,null,r),Ca._currentValue=c),Hi(n,e),pe(n,e,i,r),e.child;case 6:return n===null&&Rn&&((n=r=Qn)&&(r=dy(r,e.pendingProps,We),r!==null?(e.stateNode=r,me=e,Qn=null,n=!0):n=!1),n||Zt(e)),null;case 13:return Zm(n,e,r);case 4:return Zn(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Rr(e,null,i,r):pe(n,e,i,r),e.child;case 11:return Pm(n,e,e.type,e.pendingProps,r);case 7:return pe(n,e,e.pendingProps,r),e.child;case 8:return pe(n,e,e.pendingProps.children,r),e.child;case 12:return pe(n,e,e.pendingProps.children,r),e.child;case 10:return i=e.pendingProps,$t(e,e.type,i.value),pe(n,e,i.children,r),e.child;case 9:return c=e.type._context,i=e.pendingProps.children,Er(e),c=he(c),i=i(c),e.flags|=1,pe(n,e,i,r),e.child;case 14:return Gm(n,e,e.type,e.pendingProps,r);case 15:return Um(n,e,e.type,e.pendingProps,r);case 19:return Km(n,e,r);case 31:return FA(n,e,r);case 22:return Hm(n,e,r,e.pendingProps);case 24:return Er(e),i=he(te),n===null?(c=Uo(),c===null&&(c=qn,d=Po(),c.pooledCache=d,d.refCount++,d!==null&&(c.pooledCacheLanes|=r),c=d),e.memoizedState={parent:i,cache:c},qo(e),$t(e,te,c)):((n.lanes&r)!==0&&(Vo(n,e),ua(e,null,null,r),ia()),c=n.memoizedState,d=e.memoizedState,c.parent!==i?(c={parent:i,cache:i},e.memoizedState=c,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=c),$t(e,te,i)):(i=d.cache,$t(e,te,i),i!==c.cache&&Lo(e,[te],r,!0))),pe(n,e,e.pendingProps.children,r),e.child;case 29:throw e.pendingProps}throw Error(u(156,e.tag))}function Ft(n){n.flags|=4}function Es(n,e,r,i,c){if((e=(n.mode&32)!==0)&&(e=!1),e){if(n.flags|=16777216,(c&335544128)===c)if(n.stateNode.complete)n.flags|=8192;else if(Sh())n.flags|=8192;else throw _r=wi,Ho}else n.flags&=-16777217}function Wm(n,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!hp(e))if(Sh())n.flags|=8192;else throw _r=wi,Ho}function Vi(n,e){e!==null&&(n.flags|=4),n.flags&16384&&(e=n.tag!==22?jf():536870912,n.lanes|=e,Al|=e)}function ma(n,e){if(!Rn)switch(n.tailMode){case"hidden":e=n.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?n.tail=null:r.sibling=null;break;case"collapsed":r=n.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Xn(n){var e=n.alternate!==null&&n.alternate.child===n.child,r=0,i=0;if(e)for(var c=n.child;c!==null;)r|=c.lanes|c.childLanes,i|=c.subtreeFlags&65011712,i|=c.flags&65011712,c.return=n,c=c.sibling;else for(c=n.child;c!==null;)r|=c.lanes|c.childLanes,i|=c.subtreeFlags,i|=c.flags,c.return=n,c=c.sibling;return n.subtreeFlags|=i,n.childLanes=r,e}function MA(n,e,r){var i=e.pendingProps;switch(Fo(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xn(e),null;case 1:return Xn(e),null;case 3:return r=e.stateNode,i=null,n!==null&&(i=n.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),Rt(te),Ln(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(n===null||n.child===null)&&(ll(e)?Ft(e):n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Mo())),Xn(e),null;case 26:var c=e.type,d=e.memoizedState;return n===null?(Ft(e),d!==null?(Xn(e),Wm(e,d)):(Xn(e),Es(e,c,null,i,r))):d?d!==n.memoizedState?(Ft(e),Xn(e),Wm(e,d)):(Xn(e),e.flags&=-16777217):(n=n.memoizedProps,n!==i&&Ft(e),Xn(e),Es(e,c,n,i,r)),null;case 27:if(vt(e),r=sn.current,c=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==i&&Ft(e);else{if(!i){if(e.stateNode===null)throw Error(u(166));return Xn(e),null}n=W.current,ll(e)?jd(e):(n=ip(c,i,r),e.stateNode=n,Ft(e))}return Xn(e),null;case 5:if(vt(e),c=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==i&&Ft(e);else{if(!i){if(e.stateNode===null)throw Error(u(166));return Xn(e),null}if(d=W.current,ll(e))jd(e);else{var x=iu(sn.current);switch(d){case 1:d=x.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:d=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":d=x.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":d=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":d=x.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof i.is=="string"?x.createElement("select",{is:i.is}):x.createElement("select"),i.multiple?d.multiple=!0:i.size&&(d.size=i.size);break;default:d=typeof i.is=="string"?x.createElement(c,{is:i.is}):x.createElement(c)}}d[de]=e,d[Se]=i;n:for(x=e.child;x!==null;){if(x.tag===5||x.tag===6)d.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===e)break n;for(;x.sibling===null;){if(x.return===null||x.return===e)break n;x=x.return}x.sibling.return=x.return,x=x.sibling}e.stateNode=d;n:switch(ge(d,c,i),c){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break n;case"img":i=!0;break n;default:i=!1}i&&Ft(e)}}return Xn(e),Es(e,e.type,n===null?null:n.memoizedProps,e.pendingProps,r),null;case 6:if(n&&e.stateNode!=null)n.memoizedProps!==i&&Ft(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(u(166));if(n=sn.current,ll(e)){if(n=e.stateNode,r=e.memoizedProps,i=null,c=me,c!==null)switch(c.tag){case 27:case 5:i=c.memoizedProps}n[de]=e,n=!!(n.nodeValue===r||i!==null&&i.suppressHydrationWarning===!0||Zh(n.nodeValue,r)),n||Zt(e,!0)}else n=iu(n).createTextNode(i),n[de]=e,e.stateNode=n}return Xn(e),null;case 31:if(r=e.memoizedState,n===null||n.memoizedState!==null){if(i=ll(e),r!==null){if(n===null){if(!i)throw Error(u(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(u(557));n[de]=e}else Ir(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Xn(e),n=!1}else r=Mo(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=r),n=!0;if(!n)return e.flags&256?(Le(e),e):(Le(e),null);if((e.flags&128)!==0)throw Error(u(558))}return Xn(e),null;case 13:if(i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(c=ll(e),i!==null&&i.dehydrated!==null){if(n===null){if(!c)throw Error(u(318));if(c=e.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(u(317));c[de]=e}else Ir(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Xn(e),c=!1}else c=Mo(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=c),c=!0;if(!c)return e.flags&256?(Le(e),e):(Le(e),null)}return Le(e),(e.flags&128)!==0?(e.lanes=r,e):(r=i!==null,n=n!==null&&n.memoizedState!==null,r&&(i=e.child,c=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(c=i.alternate.memoizedState.cachePool.pool),d=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(d=i.memoizedState.cachePool.pool),d!==c&&(i.flags|=2048)),r!==n&&r&&(e.child.flags|=8192),Vi(e,e.updateQueue),Xn(e),null);case 4:return Ln(),n===null&&Xs(e.stateNode.containerInfo),Xn(e),null;case 10:return Rt(e.type),Xn(e),null;case 19:if(q(ne),i=e.memoizedState,i===null)return Xn(e),null;if(c=(e.flags&128)!==0,d=i.rendering,d===null)if(c)ma(i,!1);else{if(Wn!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(d=ji(n),d!==null){for(e.flags|=128,ma(i,!1),n=d.updateQueue,e.updateQueue=n,Vi(e,n),e.subtreeFlags=0,n=r,r=e.child;r!==null;)Cd(r,n),r=r.sibling;return k(ne,ne.current&1|2),Rn&&wt(e,i.treeForkCount),e.child}n=n.sibling}i.tail!==null&&be()>$i&&(e.flags|=128,c=!0,ma(i,!1),e.lanes=4194304)}else{if(!c)if(n=ji(d),n!==null){if(e.flags|=128,c=!0,n=n.updateQueue,e.updateQueue=n,Vi(e,n),ma(i,!0),i.tail===null&&i.tailMode==="hidden"&&!d.alternate&&!Rn)return Xn(e),null}else 2*be()-i.renderingStartTime>$i&&r!==536870912&&(e.flags|=128,c=!0,ma(i,!1),e.lanes=4194304);i.isBackwards?(d.sibling=e.child,e.child=d):(n=i.last,n!==null?n.sibling=d:e.child=d,i.last=d)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=be(),n.sibling=null,r=ne.current,k(ne,c?r&1|2:r&1),Rn&&wt(e,i.treeForkCount),n):(Xn(e),null);case 22:case 23:return Le(e),Zo(),i=e.memoizedState!==null,n!==null?n.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?(r&536870912)!==0&&(e.flags&128)===0&&(Xn(e),e.subtreeFlags&6&&(e.flags|=8192)):Xn(e),r=e.updateQueue,r!==null&&Vi(e,r.retryQueue),r=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==r&&(e.flags|=2048),n!==null&&q(Cr),null;case 24:return r=null,n!==null&&(r=n.memoizedState.cache),e.memoizedState.cache!==r&&(e.flags|=2048),Rt(te),Xn(e),null;case 25:return null;case 30:return null}throw Error(u(156,e.tag))}function BA(n,e){switch(Fo(e),e.tag){case 1:return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Rt(te),Ln(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 26:case 27:case 5:return vt(e),null;case 31:if(e.memoizedState!==null){if(Le(e),e.alternate===null)throw Error(u(340));Ir()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 13:if(Le(e),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(u(340));Ir()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return q(ne),null;case 4:return Ln(),null;case 10:return Rt(e.type),null;case 22:case 23:return Le(e),Zo(),n!==null&&q(Cr),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 24:return Rt(te),null;case 25:return null;default:return null}}function nh(n,e){switch(Fo(e),e.tag){case 3:Rt(te),Ln();break;case 26:case 27:case 5:vt(e);break;case 4:Ln();break;case 31:e.memoizedState!==null&&Le(e);break;case 13:Le(e);break;case 19:q(ne);break;case 10:Rt(e.type);break;case 22:case 23:Le(e),Zo(),n!==null&&q(Cr);break;case 24:Rt(te)}}function ha(n,e){try{var r=e.updateQueue,i=r!==null?r.lastEffect:null;if(i!==null){var c=i.next;r=c;do{if((r.tag&n)===n){i=void 0;var d=r.create,x=r.inst;i=d(),x.destroy=i}r=r.next}while(r!==c)}}catch(D){On(e,e.return,D)}}function tr(n,e,r){try{var i=e.updateQueue,c=i!==null?i.lastEffect:null;if(c!==null){var d=c.next;i=d;do{if((i.tag&n)===n){var x=i.inst,D=x.destroy;if(D!==void 0){x.destroy=void 0,c=e;var E=r,z=D;try{z()}catch(H){On(c,E,H)}}}i=i.next}while(i!==d)}}catch(H){On(e,e.return,H)}}function eh(n){var e=n.updateQueue;if(e!==null){var r=n.stateNode;try{Vd(e,r)}catch(i){On(n,n.return,i)}}}function th(n,e,r){r.props=jr(n.type,n.memoizedProps),r.state=n.memoizedState;try{r.componentWillUnmount()}catch(i){On(n,e,i)}}function pa(n,e){try{var r=n.ref;if(r!==null){switch(n.tag){case 26:case 27:case 5:var i=n.stateNode;break;case 30:i=n.stateNode;break;default:i=n.stateNode}typeof r=="function"?n.refCleanup=r(i):r.current=i}}catch(c){On(n,e,c)}}function At(n,e){var r=n.ref,i=n.refCleanup;if(r!==null)if(typeof i=="function")try{i()}catch(c){On(n,e,c)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(c){On(n,e,c)}else r.current=null}function rh(n){var e=n.type,r=n.memoizedProps,i=n.stateNode;try{n:switch(e){case"button":case"input":case"select":case"textarea":r.autoFocus&&i.focus();break n;case"img":r.src?i.src=r.src:r.srcSet&&(i.srcset=r.srcSet)}}catch(c){On(n,n.return,c)}}function Cs(n,e,r){try{var i=n.stateNode;ay(i,n.type,r,e),i[Se]=e}catch(c){On(n,n.return,c)}}function lh(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&sr(n.type)||n.tag===4}function ws(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||lh(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&sr(n.type)||n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function _s(n,e,r){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(n,e):(e=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,e.appendChild(n),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=St));else if(i!==4&&(i===27&&sr(n.type)&&(r=n.stateNode,e=null),n=n.child,n!==null))for(_s(n,e,r),n=n.sibling;n!==null;)_s(n,e,r),n=n.sibling}function Yi(n,e,r){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?r.insertBefore(n,e):r.appendChild(n);else if(i!==4&&(i===27&&sr(n.type)&&(r=n.stateNode),n=n.child,n!==null))for(Yi(n,e,r),n=n.sibling;n!==null;)Yi(n,e,r),n=n.sibling}function ah(n){var e=n.stateNode,r=n.memoizedProps;try{for(var i=n.type,c=e.attributes;c.length;)e.removeAttributeNode(c[0]);ge(e,i,r),e[de]=n,e[Se]=r}catch(d){On(n,n.return,d)}}var zt=!1,ae=!1,Rs=!1,ih=typeof WeakSet=="function"?WeakSet:Set,ce=null;function OA(n,e){if(n=n.containerInfo,Ks=mu,n=yd(n),ko(n)){if("selectionStart"in n)var r={start:n.selectionStart,end:n.selectionEnd};else n:{r=(r=n.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var c=i.anchorOffset,d=i.focusNode;i=i.focusOffset;try{r.nodeType,d.nodeType}catch{r=null;break n}var x=0,D=-1,E=-1,z=0,H=0,Q=n,M=null;e:for(;;){for(var P;Q!==r||c!==0&&Q.nodeType!==3||(D=x+c),Q!==d||i!==0&&Q.nodeType!==3||(E=x+i),Q.nodeType===3&&(x+=Q.nodeValue.length),(P=Q.firstChild)!==null;)M=Q,Q=P;for(;;){if(Q===n)break e;if(M===r&&++z===c&&(D=x),M===d&&++H===i&&(E=x),(P=Q.nextSibling)!==null)break;Q=M,M=Q.parentNode}Q=P}r=D===-1||E===-1?null:{start:D,end:E}}else r=null}r=r||{start:0,end:0}}else r=null;for(Js={focusedElem:n,selectionRange:r},mu=!1,ce=e;ce!==null;)if(e=ce,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,ce=n;else for(;ce!==null;){switch(e=ce,d=e.alternate,n=e.flags,e.tag){case 0:if((n&4)!==0&&(n=e.updateQueue,n=n!==null?n.events:null,n!==null))for(r=0;r<n.length;r++)c=n[r],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((n&1024)!==0&&d!==null){n=void 0,r=e,c=d.memoizedProps,d=d.memoizedState,i=r.stateNode;try{var ln=jr(r.type,c);n=i.getSnapshotBeforeUpdate(ln,d),i.__reactInternalSnapshotBeforeUpdate=n}catch(mn){On(r,r.return,mn)}}break;case 3:if((n&1024)!==0){if(n=e.stateNode.containerInfo,r=n.nodeType,r===9)ec(n);else if(r===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":ec(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(u(163))}if(n=e.sibling,n!==null){n.return=e.return,ce=n;break}ce=e.return}}function uh(n,e,r){var i=r.flags;switch(r.tag){case 0:case 11:case 15:Bt(n,r),i&4&&ha(5,r);break;case 1:if(Bt(n,r),i&4)if(n=r.stateNode,e===null)try{n.componentDidMount()}catch(x){On(r,r.return,x)}else{var c=jr(r.type,e.memoizedProps);e=e.memoizedState;try{n.componentDidUpdate(c,e,n.__reactInternalSnapshotBeforeUpdate)}catch(x){On(r,r.return,x)}}i&64&&eh(r),i&512&&pa(r,r.return);break;case 3:if(Bt(n,r),i&64&&(n=r.updateQueue,n!==null)){if(e=null,r.child!==null)switch(r.child.tag){case 27:case 5:e=r.child.stateNode;break;case 1:e=r.child.stateNode}try{Vd(n,e)}catch(x){On(r,r.return,x)}}break;case 27:e===null&&i&4&&ah(r);case 26:case 5:Bt(n,r),e===null&&i&4&&rh(r),i&512&&pa(r,r.return);break;case 12:Bt(n,r);break;case 31:Bt(n,r),i&4&&ch(n,r);break;case 13:Bt(n,r),i&4&&fh(n,r),i&64&&(n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(r=QA.bind(null,r),my(n,r))));break;case 22:if(i=r.memoizedState!==null||zt,!i){e=e!==null&&e.memoizedState!==null||ae,c=zt;var d=ae;zt=i,(ae=e)&&!d?Ot(n,r,(r.subtreeFlags&8772)!==0):Bt(n,r),zt=c,ae=d}break;case 30:break;default:Bt(n,r)}}function oh(n){var e=n.alternate;e!==null&&(n.alternate=null,oh(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&ao(e)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var $n=null,Ce=!1;function Mt(n,e,r){for(r=r.child;r!==null;)sh(n,e,r),r=r.sibling}function sh(n,e,r){if(ue&&typeof ue.onCommitFiberUnmount=="function")try{ue.onCommitFiberUnmount(ve,r)}catch{}switch(r.tag){case 26:ae||At(r,e),Mt(n,e,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:ae||At(r,e);var i=$n,c=Ce;sr(r.type)&&($n=r.stateNode,Ce=!1),Mt(n,e,r),Ia(r.stateNode),$n=i,Ce=c;break;case 5:ae||At(r,e);case 6:if(i=$n,c=Ce,$n=null,Mt(n,e,r),$n=i,Ce=c,$n!==null)if(Ce)try{($n.nodeType===9?$n.body:$n.nodeName==="HTML"?$n.ownerDocument.body:$n).removeChild(r.stateNode)}catch(d){On(r,e,d)}else try{$n.removeChild(r.stateNode)}catch(d){On(r,e,d)}break;case 18:$n!==null&&(Ce?(n=$n,ep(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,r.stateNode),Sl(n)):ep($n,r.stateNode));break;case 4:i=$n,c=Ce,$n=r.stateNode.containerInfo,Ce=!0,Mt(n,e,r),$n=i,Ce=c;break;case 0:case 11:case 14:case 15:tr(2,r,e),ae||tr(4,r,e),Mt(n,e,r);break;case 1:ae||(At(r,e),i=r.stateNode,typeof i.componentWillUnmount=="function"&&th(r,e,i)),Mt(n,e,r);break;case 21:Mt(n,e,r);break;case 22:ae=(i=ae)||r.memoizedState!==null,Mt(n,e,r),ae=i;break;default:Mt(n,e,r)}}function ch(n,e){if(e.memoizedState===null&&(n=e.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{Sl(n)}catch(r){On(e,e.return,r)}}}function fh(n,e){if(e.memoizedState===null&&(n=e.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Sl(n)}catch(r){On(e,e.return,r)}}function LA(n){switch(n.tag){case 31:case 13:case 19:var e=n.stateNode;return e===null&&(e=n.stateNode=new ih),e;case 22:return n=n.stateNode,e=n._retryCache,e===null&&(e=n._retryCache=new ih),e;default:throw Error(u(435,n.tag))}}function Qi(n,e){var r=LA(n);e.forEach(function(i){if(!r.has(i)){r.add(i);var c=XA.bind(null,n,i);i.then(c,c)}})}function we(n,e){var r=e.deletions;if(r!==null)for(var i=0;i<r.length;i++){var c=r[i],d=n,x=e,D=x;n:for(;D!==null;){switch(D.tag){case 27:if(sr(D.type)){$n=D.stateNode,Ce=!1;break n}break;case 5:$n=D.stateNode,Ce=!1;break n;case 3:case 4:$n=D.stateNode.containerInfo,Ce=!0;break n}D=D.return}if($n===null)throw Error(u(160));sh(d,x,c),$n=null,Ce=!1,d=c.alternate,d!==null&&(d.return=null),c.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)dh(e,n),e=e.sibling}var st=null;function dh(n,e){var r=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:we(e,n),_e(n),i&4&&(tr(3,n,n.return),ha(3,n),tr(5,n,n.return));break;case 1:we(e,n),_e(n),i&512&&(ae||r===null||At(r,r.return)),i&64&&zt&&(n=n.updateQueue,n!==null&&(i=n.callbacks,i!==null&&(r=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=r===null?i:r.concat(i))));break;case 26:var c=st;if(we(e,n),_e(n),i&512&&(ae||r===null||At(r,r.return)),i&4){var d=r!==null?r.memoizedState:null;if(i=n.memoizedState,r===null)if(i===null)if(n.stateNode===null){n:{i=n.type,r=n.memoizedProps,c=c.ownerDocument||c;e:switch(i){case"title":d=c.getElementsByTagName("title")[0],(!d||d[Ul]||d[de]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=c.createElement(i),c.head.insertBefore(d,c.querySelector("head > title"))),ge(d,i,r),d[de]=n,se(d),i=d;break n;case"link":var x=dp("link","href",c).get(i+(r.href||""));if(x){for(var D=0;D<x.length;D++)if(d=x[D],d.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&d.getAttribute("rel")===(r.rel==null?null:r.rel)&&d.getAttribute("title")===(r.title==null?null:r.title)&&d.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){x.splice(D,1);break e}}d=c.createElement(i),ge(d,i,r),c.head.appendChild(d);break;case"meta":if(x=dp("meta","content",c).get(i+(r.content||""))){for(D=0;D<x.length;D++)if(d=x[D],d.getAttribute("content")===(r.content==null?null:""+r.content)&&d.getAttribute("name")===(r.name==null?null:r.name)&&d.getAttribute("property")===(r.property==null?null:r.property)&&d.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&d.getAttribute("charset")===(r.charSet==null?null:r.charSet)){x.splice(D,1);break e}}d=c.createElement(i),ge(d,i,r),c.head.appendChild(d);break;default:throw Error(u(468,i))}d[de]=n,se(d),i=d}n.stateNode=i}else mp(c,n.type,n.stateNode);else n.stateNode=fp(c,i,n.memoizedProps);else d!==i?(d===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):d.count--,i===null?mp(c,n.type,n.stateNode):fp(c,i,n.memoizedProps)):i===null&&n.stateNode!==null&&Cs(n,n.memoizedProps,r.memoizedProps)}break;case 27:we(e,n),_e(n),i&512&&(ae||r===null||At(r,r.return)),r!==null&&i&4&&Cs(n,n.memoizedProps,r.memoizedProps);break;case 5:if(we(e,n),_e(n),i&512&&(ae||r===null||At(r,r.return)),n.flags&32){c=n.stateNode;try{Xr(c,"")}catch(ln){On(n,n.return,ln)}}i&4&&n.stateNode!=null&&(c=n.memoizedProps,Cs(n,c,r!==null?r.memoizedProps:c)),i&1024&&(Rs=!0);break;case 6:if(we(e,n),_e(n),i&4){if(n.stateNode===null)throw Error(u(162));i=n.memoizedProps,r=n.stateNode;try{r.nodeValue=i}catch(ln){On(n,n.return,ln)}}break;case 3:if(su=null,c=st,st=uu(e.containerInfo),we(e,n),st=c,_e(n),i&4&&r!==null&&r.memoizedState.isDehydrated)try{Sl(e.containerInfo)}catch(ln){On(n,n.return,ln)}Rs&&(Rs=!1,mh(n));break;case 4:i=st,st=uu(n.stateNode.containerInfo),we(e,n),_e(n),st=i;break;case 12:we(e,n),_e(n);break;case 31:we(e,n),_e(n),i&4&&(i=n.updateQueue,i!==null&&(n.updateQueue=null,Qi(n,i)));break;case 13:we(e,n),_e(n),n.child.flags&8192&&n.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Zi=be()),i&4&&(i=n.updateQueue,i!==null&&(n.updateQueue=null,Qi(n,i)));break;case 22:c=n.memoizedState!==null;var E=r!==null&&r.memoizedState!==null,z=zt,H=ae;if(zt=z||c,ae=H||E,we(e,n),ae=H,zt=z,_e(n),i&8192)n:for(e=n.stateNode,e._visibility=c?e._visibility&-2:e._visibility|1,c&&(r===null||E||zt||ae||Nr(n)),r=null,e=n;;){if(e.tag===5||e.tag===26){if(r===null){E=r=e;try{if(d=E.stateNode,c)x=d.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{D=E.stateNode;var Q=E.memoizedProps.style,M=Q!=null&&Q.hasOwnProperty("display")?Q.display:null;D.style.display=M==null||typeof M=="boolean"?"":(""+M).trim()}}catch(ln){On(E,E.return,ln)}}}else if(e.tag===6){if(r===null){E=e;try{E.stateNode.nodeValue=c?"":E.memoizedProps}catch(ln){On(E,E.return,ln)}}}else if(e.tag===18){if(r===null){E=e;try{var P=E.stateNode;c?tp(P,!0):tp(E.stateNode,!1)}catch(ln){On(E,E.return,ln)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===n)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break n;for(;e.sibling===null;){if(e.return===null||e.return===n)break n;r===e&&(r=null),e=e.return}r===e&&(r=null),e.sibling.return=e.return,e=e.sibling}i&4&&(i=n.updateQueue,i!==null&&(r=i.retryQueue,r!==null&&(i.retryQueue=null,Qi(n,r))));break;case 19:we(e,n),_e(n),i&4&&(i=n.updateQueue,i!==null&&(n.updateQueue=null,Qi(n,i)));break;case 30:break;case 21:break;default:we(e,n),_e(n)}}function _e(n){var e=n.flags;if(e&2){try{for(var r,i=n.return;i!==null;){if(lh(i)){r=i;break}i=i.return}if(r==null)throw Error(u(160));switch(r.tag){case 27:var c=r.stateNode,d=ws(n);Yi(n,d,c);break;case 5:var x=r.stateNode;r.flags&32&&(Xr(x,""),r.flags&=-33);var D=ws(n);Yi(n,D,x);break;case 3:case 4:var E=r.stateNode.containerInfo,z=ws(n);_s(n,z,E);break;default:throw Error(u(161))}}catch(H){On(n,n.return,H)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function mh(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var e=n;mh(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),n=n.sibling}}function Bt(n,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)uh(n,e.alternate,e),e=e.sibling}function Nr(n){for(n=n.child;n!==null;){var e=n;switch(e.tag){case 0:case 11:case 14:case 15:tr(4,e,e.return),Nr(e);break;case 1:At(e,e.return);var r=e.stateNode;typeof r.componentWillUnmount=="function"&&th(e,e.return,r),Nr(e);break;case 27:Ia(e.stateNode);case 26:case 5:At(e,e.return),Nr(e);break;case 22:e.memoizedState===null&&Nr(e);break;case 30:Nr(e);break;default:Nr(e)}n=n.sibling}}function Ot(n,e,r){for(r=r&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var i=e.alternate,c=n,d=e,x=d.flags;switch(d.tag){case 0:case 11:case 15:Ot(c,d,r),ha(4,d);break;case 1:if(Ot(c,d,r),i=d,c=i.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(z){On(i,i.return,z)}if(i=d,c=i.updateQueue,c!==null){var D=i.stateNode;try{var E=c.shared.hiddenCallbacks;if(E!==null)for(c.shared.hiddenCallbacks=null,c=0;c<E.length;c++)qd(E[c],D)}catch(z){On(i,i.return,z)}}r&&x&64&&eh(d),pa(d,d.return);break;case 27:ah(d);case 26:case 5:Ot(c,d,r),r&&i===null&&x&4&&rh(d),pa(d,d.return);break;case 12:Ot(c,d,r);break;case 31:Ot(c,d,r),r&&x&4&&ch(c,d);break;case 13:Ot(c,d,r),r&&x&4&&fh(c,d);break;case 22:d.memoizedState===null&&Ot(c,d,r),pa(d,d.return);break;case 30:break;default:Ot(c,d,r)}e=e.sibling}}function Ts(n,e){var r=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==r&&(n!=null&&n.refCount++,r!=null&&ea(r))}function js(n,e){n=null,e.alternate!==null&&(n=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==n&&(e.refCount++,n!=null&&ea(n))}function ct(n,e,r,i){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)hh(n,e,r,i),e=e.sibling}function hh(n,e,r,i){var c=e.flags;switch(e.tag){case 0:case 11:case 15:ct(n,e,r,i),c&2048&&ha(9,e);break;case 1:ct(n,e,r,i);break;case 3:ct(n,e,r,i),c&2048&&(n=null,e.alternate!==null&&(n=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==n&&(e.refCount++,n!=null&&ea(n)));break;case 12:if(c&2048){ct(n,e,r,i),n=e.stateNode;try{var d=e.memoizedProps,x=d.id,D=d.onPostCommit;typeof D=="function"&&D(x,e.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(E){On(e,e.return,E)}}else ct(n,e,r,i);break;case 31:ct(n,e,r,i);break;case 13:ct(n,e,r,i);break;case 23:break;case 22:d=e.stateNode,x=e.alternate,e.memoizedState!==null?d._visibility&2?ct(n,e,r,i):ga(n,e):d._visibility&2?ct(n,e,r,i):(d._visibility|=2,hl(n,e,r,i,(e.subtreeFlags&10256)!==0||!1)),c&2048&&Ts(x,e);break;case 24:ct(n,e,r,i),c&2048&&js(e.alternate,e);break;default:ct(n,e,r,i)}}function hl(n,e,r,i,c){for(c=c&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var d=n,x=e,D=r,E=i,z=x.flags;switch(x.tag){case 0:case 11:case 15:hl(d,x,D,E,c),ha(8,x);break;case 23:break;case 22:var H=x.stateNode;x.memoizedState!==null?H._visibility&2?hl(d,x,D,E,c):ga(d,x):(H._visibility|=2,hl(d,x,D,E,c)),c&&z&2048&&Ts(x.alternate,x);break;case 24:hl(d,x,D,E,c),c&&z&2048&&js(x.alternate,x);break;default:hl(d,x,D,E,c)}e=e.sibling}}function ga(n,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var r=n,i=e,c=i.flags;switch(i.tag){case 22:ga(r,i),c&2048&&Ts(i.alternate,i);break;case 24:ga(r,i),c&2048&&js(i.alternate,i);break;default:ga(r,i)}e=e.sibling}}var Aa=8192;function pl(n,e,r){if(n.subtreeFlags&Aa)for(n=n.child;n!==null;)ph(n,e,r),n=n.sibling}function ph(n,e,r){switch(n.tag){case 26:pl(n,e,r),n.flags&Aa&&n.memoizedState!==null&&Sy(r,st,n.memoizedState,n.memoizedProps);break;case 5:pl(n,e,r);break;case 3:case 4:var i=st;st=uu(n.stateNode.containerInfo),pl(n,e,r),st=i;break;case 22:n.memoizedState===null&&(i=n.alternate,i!==null&&i.memoizedState!==null?(i=Aa,Aa=16777216,pl(n,e,r),Aa=i):pl(n,e,r));break;default:pl(n,e,r)}}function gh(n){var e=n.alternate;if(e!==null&&(n=e.child,n!==null)){e.child=null;do e=n.sibling,n.sibling=null,n=e;while(n!==null)}}function ya(n){var e=n.deletions;if((n.flags&16)!==0){if(e!==null)for(var r=0;r<e.length;r++){var i=e[r];ce=i,yh(i,n)}gh(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Ah(n),n=n.sibling}function Ah(n){switch(n.tag){case 0:case 11:case 15:ya(n),n.flags&2048&&tr(9,n,n.return);break;case 3:ya(n);break;case 12:ya(n);break;case 22:var e=n.stateNode;n.memoizedState!==null&&e._visibility&2&&(n.return===null||n.return.tag!==13)?(e._visibility&=-3,Xi(n)):ya(n);break;default:ya(n)}}function Xi(n){var e=n.deletions;if((n.flags&16)!==0){if(e!==null)for(var r=0;r<e.length;r++){var i=e[r];ce=i,yh(i,n)}gh(n)}for(n=n.child;n!==null;){switch(e=n,e.tag){case 0:case 11:case 15:tr(8,e,e.return),Xi(e);break;case 22:r=e.stateNode,r._visibility&2&&(r._visibility&=-3,Xi(e));break;default:Xi(e)}n=n.sibling}}function yh(n,e){for(;ce!==null;){var r=ce;switch(r.tag){case 0:case 11:case 15:tr(8,r,e);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var i=r.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:ea(r.memoizedState.cache)}if(i=r.child,i!==null)i.return=r,ce=i;else n:for(r=n;ce!==null;){i=ce;var c=i.sibling,d=i.return;if(oh(i),i===r){ce=null;break n}if(c!==null){c.return=d,ce=c;break n}ce=d}}}var PA={getCacheForType:function(n){var e=he(te),r=e.data.get(n);return r===void 0&&(r=n(),e.data.set(n,r)),r},cacheSignal:function(){return he(te).controller.signal}},GA=typeof WeakMap=="function"?WeakMap:Map,zn=0,qn=null,In=null,wn=0,Bn=0,Pe=null,rr=!1,gl=!1,Ns=!1,Lt=0,Wn=0,lr=0,Fr=0,Fs=0,Ge=0,Al=0,xa=null,Re=null,zs=!1,Zi=0,xh=0,$i=1/0,Ki=null,ar=null,oe=0,ir=null,yl=null,Pt=0,Ms=0,Bs=null,bh=null,ba=0,Os=null;function Ue(){return(zn&2)!==0&&wn!==0?wn&-wn:B.T!==null?qs():Mf()}function vh(){if(Ge===0)if((wn&536870912)===0||Rn){var n=ai;ai<<=1,(ai&3932160)===0&&(ai=262144),Ge=n}else Ge=536870912;return n=Oe.current,n!==null&&(n.flags|=32),Ge}function Te(n,e,r){(n===qn&&(Bn===2||Bn===9)||n.cancelPendingCommit!==null)&&(xl(n,0),ur(n,wn,Ge,!1)),Gl(n,r),((zn&2)===0||n!==qn)&&(n===qn&&((zn&2)===0&&(Fr|=r),Wn===4&&ur(n,wn,Ge,!1)),yt(n))}function Dh(n,e,r){if((zn&6)!==0)throw Error(u(327));var i=!r&&(e&127)===0&&(e&n.expiredLanes)===0||Pl(n,e),c=i?qA(n,e):Ps(n,e,!0),d=i;do{if(c===0){gl&&!i&&ur(n,e,0,!1);break}else{if(r=n.current.alternate,d&&!UA(r)){c=Ps(n,e,!1),d=!1;continue}if(c===2){if(d=e,n.errorRecoveryDisabledLanes&d)var x=0;else x=n.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){e=x;n:{var D=n;c=xa;var E=D.current.memoizedState.isDehydrated;if(E&&(xl(D,x).flags|=256),x=Ps(D,x,!1),x!==2){if(Ns&&!E){D.errorRecoveryDisabledLanes|=d,Fr|=d,c=4;break n}d=Re,Re=c,d!==null&&(Re===null?Re=d:Re.push.apply(Re,d))}c=x}if(d=!1,c!==2)continue}}if(c===1){xl(n,0),ur(n,e,0,!0);break}n:{switch(i=n,d=c,d){case 0:case 1:throw Error(u(345));case 4:if((e&4194048)!==e)break;case 6:ur(i,e,Ge,!rr);break n;case 2:Re=null;break;case 3:case 5:break;default:throw Error(u(329))}if((e&62914560)===e&&(c=Zi+300-be(),10<c)){if(ur(i,e,Ge,!rr),ui(i,0,!0)!==0)break n;Pt=e,i.timeoutHandle=Wh(kh.bind(null,i,r,Re,Ki,zs,e,Ge,Fr,Al,rr,d,"Throttled",-0,0),c);break n}kh(i,r,Re,Ki,zs,e,Ge,Fr,Al,rr,d,null,-0,0)}}break}while(!0);yt(n)}function kh(n,e,r,i,c,d,x,D,E,z,H,Q,M,P){if(n.timeoutHandle=-1,Q=e.subtreeFlags,Q&8192||(Q&16785408)===16785408){Q={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:St},ph(e,d,Q);var ln=(d&62914560)===d?Zi-be():(d&4194048)===d?xh-be():0;if(ln=Ey(Q,ln),ln!==null){Pt=d,n.cancelPendingCommit=ln(Th.bind(null,n,e,d,r,i,c,x,D,E,H,Q,null,M,P)),ur(n,d,x,!z);return}}Th(n,e,d,r,i,c,x,D,E)}function UA(n){for(var e=n;;){var r=e.tag;if((r===0||r===11||r===15)&&e.flags&16384&&(r=e.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var i=0;i<r.length;i++){var c=r[i],d=c.getSnapshot;c=c.value;try{if(!Me(d(),c))return!1}catch{return!1}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ur(n,e,r,i){e&=~Fs,e&=~Fr,n.suspendedLanes|=e,n.pingedLanes&=~e,i&&(n.warmLanes|=e),i=n.expirationTimes;for(var c=e;0<c;){var d=31-Hn(c),x=1<<d;i[d]=-1,c&=~x}r!==0&&Nf(n,r,e)}function Ji(){return(zn&6)===0?(va(0),!1):!0}function Ls(){if(In!==null){if(Bn===0)var n=In.return;else n=In,_t=Sr=null,es(n),sl=null,ra=0,n=In;for(;n!==null;)nh(n.alternate,n),n=n.return;In=null}}function xl(n,e){var r=n.timeoutHandle;r!==-1&&(n.timeoutHandle=-1,oy(r)),r=n.cancelPendingCommit,r!==null&&(n.cancelPendingCommit=null,r()),Pt=0,Ls(),qn=n,In=r=Ct(n.current,null),wn=e,Bn=0,Pe=null,rr=!1,gl=Pl(n,e),Ns=!1,Al=Ge=Fs=Fr=lr=Wn=0,Re=xa=null,zs=!1,(e&8)!==0&&(e|=e&32);var i=n.entangledLanes;if(i!==0)for(n=n.entanglements,i&=e;0<i;){var c=31-Hn(i),d=1<<c;e|=n[c],i&=~d}return Lt=e,xi(),r}function Ih(n,e){yn=null,B.H=fa,e===ol||e===Ci?(e=Pd(),Bn=3):e===Ho?(e=Pd(),Bn=4):Bn=e===As?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Pe=e,In===null&&(Wn=1,Gi(n,$e(e,n.current)))}function Sh(){var n=Oe.current;return n===null?!0:(wn&4194048)===wn?nt===null:(wn&62914560)===wn||(wn&536870912)!==0?n===nt:!1}function Eh(){var n=B.H;return B.H=fa,n===null?fa:n}function Ch(){var n=B.A;return B.A=PA,n}function Wi(){Wn=4,rr||(wn&4194048)!==wn&&Oe.current!==null||(gl=!0),(lr&134217727)===0&&(Fr&134217727)===0||qn===null||ur(qn,wn,Ge,!1)}function Ps(n,e,r){var i=zn;zn|=2;var c=Eh(),d=Ch();(qn!==n||wn!==e)&&(Ki=null,xl(n,e)),e=!1;var x=Wn;n:do try{if(Bn!==0&&In!==null){var D=In,E=Pe;switch(Bn){case 8:Ls(),x=6;break n;case 3:case 2:case 9:case 6:Oe.current===null&&(e=!0);var z=Bn;if(Bn=0,Pe=null,bl(n,D,E,z),r&&gl){x=0;break n}break;default:z=Bn,Bn=0,Pe=null,bl(n,D,E,z)}}HA(),x=Wn;break}catch(H){Ih(n,H)}while(!0);return e&&n.shellSuspendCounter++,_t=Sr=null,zn=i,B.H=c,B.A=d,In===null&&(qn=null,wn=0,xi()),x}function HA(){for(;In!==null;)wh(In)}function qA(n,e){var r=zn;zn|=2;var i=Eh(),c=Ch();qn!==n||wn!==e?(Ki=null,$i=be()+500,xl(n,e)):gl=Pl(n,e);n:do try{if(Bn!==0&&In!==null){e=In;var d=Pe;e:switch(Bn){case 1:Bn=0,Pe=null,bl(n,e,d,1);break;case 2:case 9:if(Od(d)){Bn=0,Pe=null,_h(e);break}e=function(){Bn!==2&&Bn!==9||qn!==n||(Bn=7),yt(n)},d.then(e,e);break n;case 3:Bn=7;break n;case 4:Bn=5;break n;case 7:Od(d)?(Bn=0,Pe=null,_h(e)):(Bn=0,Pe=null,bl(n,e,d,7));break;case 5:var x=null;switch(In.tag){case 26:x=In.memoizedState;case 5:case 27:var D=In;if(x?hp(x):D.stateNode.complete){Bn=0,Pe=null;var E=D.sibling;if(E!==null)In=E;else{var z=D.return;z!==null?(In=z,nu(z)):In=null}break e}}Bn=0,Pe=null,bl(n,e,d,5);break;case 6:Bn=0,Pe=null,bl(n,e,d,6);break;case 8:Ls(),Wn=6;break n;default:throw Error(u(462))}}VA();break}catch(H){Ih(n,H)}while(!0);return _t=Sr=null,B.H=i,B.A=c,zn=r,In!==null?0:(qn=null,wn=0,xi(),Wn)}function VA(){for(;In!==null&&!Ju();)wh(In)}function wh(n){var e=Jm(n.alternate,n,Lt);n.memoizedProps=n.pendingProps,e===null?nu(n):In=e}function _h(n){var e=n,r=e.alternate;switch(e.tag){case 15:case 0:e=Ym(r,e,e.pendingProps,e.type,void 0,wn);break;case 11:e=Ym(r,e,e.pendingProps,e.type.render,e.ref,wn);break;case 5:es(e);default:nh(r,e),e=In=Cd(e,Lt),e=Jm(r,e,Lt)}n.memoizedProps=n.pendingProps,e===null?nu(n):In=e}function bl(n,e,r,i){_t=Sr=null,es(e),sl=null,ra=0;var c=e.return;try{if(NA(n,c,e,r,wn)){Wn=1,Gi(n,$e(r,n.current)),In=null;return}}catch(d){if(c!==null)throw In=c,d;Wn=1,Gi(n,$e(r,n.current)),In=null;return}e.flags&32768?(Rn||i===1?n=!0:gl||(wn&536870912)!==0?n=!1:(rr=n=!0,(i===2||i===9||i===3||i===6)&&(i=Oe.current,i!==null&&i.tag===13&&(i.flags|=16384))),Rh(e,n)):nu(e)}function nu(n){var e=n;do{if((e.flags&32768)!==0){Rh(e,rr);return}n=e.return;var r=MA(e.alternate,e,Lt);if(r!==null){In=r;return}if(e=e.sibling,e!==null){In=e;return}In=e=n}while(e!==null);Wn===0&&(Wn=5)}function Rh(n,e){do{var r=BA(n.alternate,n);if(r!==null){r.flags&=32767,In=r;return}if(r=n.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!e&&(n=n.sibling,n!==null)){In=n;return}In=n=r}while(n!==null);Wn=6,In=null}function Th(n,e,r,i,c,d,x,D,E){n.cancelPendingCommit=null;do eu();while(oe!==0);if((zn&6)!==0)throw Error(u(327));if(e!==null){if(e===n.current)throw Error(u(177));if(d=e.lanes|e.childLanes,d|=wo,I1(n,r,d,x,D,E),n===qn&&(In=qn=null,wn=0),yl=e,ir=n,Pt=r,Ms=d,Bs=c,bh=i,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,ZA(gn,function(){return Mh(),null})):(n.callbackNode=null,n.callbackPriority=0),i=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||i){i=B.T,B.T=null,c=X.p,X.p=2,x=zn,zn|=4;try{OA(n,e,r)}finally{zn=x,X.p=c,B.T=i}}oe=1,jh(),Nh(),Fh()}}function jh(){if(oe===1){oe=0;var n=ir,e=yl,r=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||r){r=B.T,B.T=null;var i=X.p;X.p=2;var c=zn;zn|=4;try{dh(e,n);var d=Js,x=yd(n.containerInfo),D=d.focusedElem,E=d.selectionRange;if(x!==D&&D&&D.ownerDocument&&Ad(D.ownerDocument.documentElement,D)){if(E!==null&&ko(D)){var z=E.start,H=E.end;if(H===void 0&&(H=z),"selectionStart"in D)D.selectionStart=z,D.selectionEnd=Math.min(H,D.value.length);else{var Q=D.ownerDocument||document,M=Q&&Q.defaultView||window;if(M.getSelection){var P=M.getSelection(),ln=D.textContent.length,mn=Math.min(E.start,ln),Un=E.end===void 0?mn:Math.min(E.end,ln);!P.extend&&mn>Un&&(x=Un,Un=mn,mn=x);var j=gd(D,mn),T=gd(D,Un);if(j&&T&&(P.rangeCount!==1||P.anchorNode!==j.node||P.anchorOffset!==j.offset||P.focusNode!==T.node||P.focusOffset!==T.offset)){var F=Q.createRange();F.setStart(j.node,j.offset),P.removeAllRanges(),mn>Un?(P.addRange(F),P.extend(T.node,T.offset)):(F.setEnd(T.node,T.offset),P.addRange(F))}}}}for(Q=[],P=D;P=P.parentNode;)P.nodeType===1&&Q.push({element:P,left:P.scrollLeft,top:P.scrollTop});for(typeof D.focus=="function"&&D.focus(),D=0;D<Q.length;D++){var Y=Q[D];Y.element.scrollLeft=Y.left,Y.element.scrollTop=Y.top}}mu=!!Ks,Js=Ks=null}finally{zn=c,X.p=i,B.T=r}}n.current=e,oe=2}}function Nh(){if(oe===2){oe=0;var n=ir,e=yl,r=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||r){r=B.T,B.T=null;var i=X.p;X.p=2;var c=zn;zn|=4;try{uh(n,e.alternate,e)}finally{zn=c,X.p=i,B.T=r}}oe=3}}function Fh(){if(oe===4||oe===3){oe=0,Wu();var n=ir,e=yl,r=Pt,i=bh;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?oe=5:(oe=0,yl=ir=null,zh(n,n.pendingLanes));var c=n.pendingLanes;if(c===0&&(ar=null),ro(r),e=e.stateNode,ue&&typeof ue.onCommitFiberRoot=="function")try{ue.onCommitFiberRoot(ve,e,void 0,(e.current.flags&128)===128)}catch{}if(i!==null){e=B.T,c=X.p,X.p=2,B.T=null;try{for(var d=n.onRecoverableError,x=0;x<i.length;x++){var D=i[x];d(D.value,{componentStack:D.stack})}}finally{B.T=e,X.p=c}}(Pt&3)!==0&&eu(),yt(n),c=n.pendingLanes,(r&261930)!==0&&(c&42)!==0?n===Os?ba++:(ba=0,Os=n):ba=0,va(0)}}function zh(n,e){(n.pooledCacheLanes&=e)===0&&(e=n.pooledCache,e!=null&&(n.pooledCache=null,ea(e)))}function eu(){return jh(),Nh(),Fh(),Mh()}function Mh(){if(oe!==5)return!1;var n=ir,e=Ms;Ms=0;var r=ro(Pt),i=B.T,c=X.p;try{X.p=32>r?32:r,B.T=null,r=Bs,Bs=null;var d=ir,x=Pt;if(oe=0,yl=ir=null,Pt=0,(zn&6)!==0)throw Error(u(331));var D=zn;if(zn|=4,Ah(d.current),hh(d,d.current,x,r),zn=D,va(0,!1),ue&&typeof ue.onPostCommitFiberRoot=="function")try{ue.onPostCommitFiberRoot(ve,d)}catch{}return!0}finally{X.p=c,B.T=i,zh(n,e)}}function Bh(n,e,r){e=$e(r,e),e=gs(n.stateNode,e,2),n=Wt(n,e,2),n!==null&&(Gl(n,2),yt(n))}function On(n,e,r){if(n.tag===3)Bh(n,n,r);else for(;e!==null;){if(e.tag===3){Bh(e,n,r);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ar===null||!ar.has(i))){n=$e(r,n),r=Om(2),i=Wt(e,r,2),i!==null&&(Lm(r,i,e,n),Gl(i,2),yt(i));break}}e=e.return}}function Gs(n,e,r){var i=n.pingCache;if(i===null){i=n.pingCache=new GA;var c=new Set;i.set(e,c)}else c=i.get(e),c===void 0&&(c=new Set,i.set(e,c));c.has(r)||(Ns=!0,c.add(r),n=YA.bind(null,n,e,r),e.then(n,n))}function YA(n,e,r){var i=n.pingCache;i!==null&&i.delete(e),n.pingedLanes|=n.suspendedLanes&r,n.warmLanes&=~r,qn===n&&(wn&r)===r&&(Wn===4||Wn===3&&(wn&62914560)===wn&&300>be()-Zi?(zn&2)===0&&xl(n,0):Fs|=r,Al===wn&&(Al=0)),yt(n)}function Oh(n,e){e===0&&(e=jf()),n=Dr(n,e),n!==null&&(Gl(n,e),yt(n))}function QA(n){var e=n.memoizedState,r=0;e!==null&&(r=e.retryLane),Oh(n,r)}function XA(n,e){var r=0;switch(n.tag){case 31:case 13:var i=n.stateNode,c=n.memoizedState;c!==null&&(r=c.retryLane);break;case 19:i=n.stateNode;break;case 22:i=n.stateNode._retryCache;break;default:throw Error(u(314))}i!==null&&i.delete(e),Oh(n,r)}function ZA(n,e){return Gr(n,e)}var tu=null,vl=null,Us=!1,ru=!1,Hs=!1,or=0;function yt(n){n!==vl&&n.next===null&&(vl===null?tu=vl=n:vl=vl.next=n),ru=!0,Us||(Us=!0,KA())}function va(n,e){if(!Hs&&ru){Hs=!0;do for(var r=!1,i=tu;i!==null;){if(n!==0){var c=i.pendingLanes;if(c===0)var d=0;else{var x=i.suspendedLanes,D=i.pingedLanes;d=(1<<31-Hn(42|n)+1)-1,d&=c&~(x&~D),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(r=!0,Uh(i,d))}else d=wn,d=ui(i,i===qn?d:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(d&3)===0||Pl(i,d)||(r=!0,Uh(i,d));i=i.next}while(r);Hs=!1}}function $A(){Lh()}function Lh(){ru=Us=!1;var n=0;or!==0&&uy()&&(n=or);for(var e=be(),r=null,i=tu;i!==null;){var c=i.next,d=Ph(i,e);d===0?(i.next=null,r===null?tu=c:r.next=c,c===null&&(vl=r)):(r=i,(n!==0||(d&3)!==0)&&(ru=!0)),i=c}oe!==0&&oe!==5||va(n),or!==0&&(or=0)}function Ph(n,e){for(var r=n.suspendedLanes,i=n.pingedLanes,c=n.expirationTimes,d=n.pendingLanes&-62914561;0<d;){var x=31-Hn(d),D=1<<x,E=c[x];E===-1?((D&r)===0||(D&i)!==0)&&(c[x]=k1(D,e)):E<=e&&(n.expiredLanes|=D),d&=~D}if(e=qn,r=wn,r=ui(n,n===e?r:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),i=n.callbackNode,r===0||n===e&&(Bn===2||Bn===9)||n.cancelPendingCommit!==null)return i!==null&&i!==null&&Ll(i),n.callbackNode=null,n.callbackPriority=0;if((r&3)===0||Pl(n,r)){if(e=r&-r,e===n.callbackPriority)return e;switch(i!==null&&Ll(i),ro(r)){case 2:case 8:r=K;break;case 32:r=gn;break;case 268435456:r=Mn;break;default:r=gn}return i=Gh.bind(null,n),r=Gr(r,i),n.callbackPriority=e,n.callbackNode=r,e}return i!==null&&i!==null&&Ll(i),n.callbackPriority=2,n.callbackNode=null,2}function Gh(n,e){if(oe!==0&&oe!==5)return n.callbackNode=null,n.callbackPriority=0,null;var r=n.callbackNode;if(eu()&&n.callbackNode!==r)return null;var i=wn;return i=ui(n,n===qn?i:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),i===0?null:(Dh(n,i,e),Ph(n,be()),n.callbackNode!=null&&n.callbackNode===r?Gh.bind(null,n):null)}function Uh(n,e){if(eu())return null;Dh(n,e,!0)}function KA(){sy(function(){(zn&6)!==0?Gr(V,$A):Lh()})}function qs(){if(or===0){var n=il;n===0&&(n=li,li<<=1,(li&261888)===0&&(li=256)),or=n}return or}function Hh(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:fi(""+n)}function qh(n,e){var r=e.ownerDocument.createElement("input");return r.name=e.name,r.value=e.value,n.id&&r.setAttribute("form",n.id),e.parentNode.insertBefore(r,e),n=new FormData(n),r.parentNode.removeChild(r),n}function JA(n,e,r,i,c){if(e==="submit"&&r&&r.stateNode===c){var d=Hh((c[Se]||null).action),x=i.submitter;x&&(e=(e=x[Se]||null)?Hh(e.formAction):x.getAttribute("formAction"),e!==null&&(d=e,x=null));var D=new pi("action","action",null,i,c);n.push({event:D,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(or!==0){var E=x?qh(c,x):new FormData(c);cs(r,{pending:!0,data:E,method:c.method,action:d},null,E)}}else typeof d=="function"&&(D.preventDefault(),E=x?qh(c,x):new FormData(c),cs(r,{pending:!0,data:E,method:c.method,action:d},d,E))},currentTarget:c}]})}}for(var Vs=0;Vs<Co.length;Vs++){var Ys=Co[Vs],WA=Ys.toLowerCase(),ny=Ys[0].toUpperCase()+Ys.slice(1);ot(WA,"on"+ny)}ot(vd,"onAnimationEnd"),ot(Dd,"onAnimationIteration"),ot(kd,"onAnimationStart"),ot("dblclick","onDoubleClick"),ot("focusin","onFocus"),ot("focusout","onBlur"),ot(gA,"onTransitionRun"),ot(AA,"onTransitionStart"),ot(yA,"onTransitionCancel"),ot(Id,"onTransitionEnd"),Yr("onMouseEnter",["mouseout","mouseover"]),Yr("onMouseLeave",["mouseout","mouseover"]),Yr("onPointerEnter",["pointerout","pointerover"]),Yr("onPointerLeave",["pointerout","pointerover"]),yr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),yr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),yr("onBeforeInput",["compositionend","keypress","textInput","paste"]),yr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),yr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),yr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ey=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Da));function Vh(n,e){e=(e&4)!==0;for(var r=0;r<n.length;r++){var i=n[r],c=i.event;i=i.listeners;n:{var d=void 0;if(e)for(var x=i.length-1;0<=x;x--){var D=i[x],E=D.instance,z=D.currentTarget;if(D=D.listener,E!==d&&c.isPropagationStopped())break n;d=D,c.currentTarget=z;try{d(c)}catch(H){yi(H)}c.currentTarget=null,d=E}else for(x=0;x<i.length;x++){if(D=i[x],E=D.instance,z=D.currentTarget,D=D.listener,E!==d&&c.isPropagationStopped())break n;d=D,c.currentTarget=z;try{d(c)}catch(H){yi(H)}c.currentTarget=null,d=E}}}}function Sn(n,e){var r=e[lo];r===void 0&&(r=e[lo]=new Set);var i=n+"__bubble";r.has(i)||(Yh(e,n,2,!1),r.add(i))}function Qs(n,e,r){var i=0;e&&(i|=4),Yh(r,n,i,e)}var lu="_reactListening"+Math.random().toString(36).slice(2);function Xs(n){if(!n[lu]){n[lu]=!0,Lf.forEach(function(r){r!=="selectionchange"&&(ey.has(r)||Qs(r,!1,n),Qs(r,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[lu]||(e[lu]=!0,Qs("selectionchange",!1,e))}}function Yh(n,e,r,i){switch(vp(e)){case 2:var c=_y;break;case 8:c=Ry;break;default:c=sc}r=c.bind(null,e,r,n),c=void 0,!ho||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(c=!0),i?c!==void 0?n.addEventListener(e,r,{capture:!0,passive:c}):n.addEventListener(e,r,!0):c!==void 0?n.addEventListener(e,r,{passive:c}):n.addEventListener(e,r,!1)}function Zs(n,e,r,i,c){var d=i;if((e&1)===0&&(e&2)===0&&i!==null)n:for(;;){if(i===null)return;var x=i.tag;if(x===3||x===4){var D=i.stateNode.containerInfo;if(D===c)break;if(x===4)for(x=i.return;x!==null;){var E=x.tag;if((E===3||E===4)&&x.stateNode.containerInfo===c)return;x=x.return}for(;D!==null;){if(x=Hr(D),x===null)return;if(E=x.tag,E===5||E===6||E===26||E===27){i=d=x;continue n}D=D.parentNode}}i=i.return}Kf(function(){var z=d,H=fo(r),Q=[];n:{var M=Sd.get(n);if(M!==void 0){var P=pi,ln=n;switch(n){case"keypress":if(mi(r)===0)break n;case"keydown":case"keyup":P=X1;break;case"focusin":ln="focus",P=yo;break;case"focusout":ln="blur",P=yo;break;case"beforeblur":case"afterblur":P=yo;break;case"click":if(r.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":P=nd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":P=M1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":P=K1;break;case vd:case Dd:case kd:P=L1;break;case Id:P=W1;break;case"scroll":case"scrollend":P=F1;break;case"wheel":P=eA;break;case"copy":case"cut":case"paste":P=G1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":P=td;break;case"toggle":case"beforetoggle":P=rA}var mn=(e&4)!==0,Un=!mn&&(n==="scroll"||n==="scrollend"),j=mn?M!==null?M+"Capture":null:M;mn=[];for(var T=z,F;T!==null;){var Y=T;if(F=Y.stateNode,Y=Y.tag,Y!==5&&Y!==26&&Y!==27||F===null||j===null||(Y=ql(T,j),Y!=null&&mn.push(ka(T,Y,F))),Un)break;T=T.return}0<mn.length&&(M=new P(M,ln,null,r,H),Q.push({event:M,listeners:mn}))}}if((e&7)===0){n:{if(M=n==="mouseover"||n==="pointerover",P=n==="mouseout"||n==="pointerout",M&&r!==co&&(ln=r.relatedTarget||r.fromElement)&&(Hr(ln)||ln[Ur]))break n;if((P||M)&&(M=H.window===H?H:(M=H.ownerDocument)?M.defaultView||M.parentWindow:window,P?(ln=r.relatedTarget||r.toElement,P=z,ln=ln?Hr(ln):null,ln!==null&&(Un=s(ln),mn=ln.tag,ln!==Un||mn!==5&&mn!==27&&mn!==6)&&(ln=null)):(P=null,ln=z),P!==ln)){if(mn=nd,Y="onMouseLeave",j="onMouseEnter",T="mouse",(n==="pointerout"||n==="pointerover")&&(mn=td,Y="onPointerLeave",j="onPointerEnter",T="pointer"),Un=P==null?M:Hl(P),F=ln==null?M:Hl(ln),M=new mn(Y,T+"leave",P,r,H),M.target=Un,M.relatedTarget=F,Y=null,Hr(H)===z&&(mn=new mn(j,T+"enter",ln,r,H),mn.target=F,mn.relatedTarget=Un,Y=mn),Un=Y,P&&ln)e:{for(mn=ty,j=P,T=ln,F=0,Y=j;Y;Y=mn(Y))F++;Y=0;for(var cn=T;cn;cn=mn(cn))Y++;for(;0<F-Y;)j=mn(j),F--;for(;0<Y-F;)T=mn(T),Y--;for(;F--;){if(j===T||T!==null&&j===T.alternate){mn=j;break e}j=mn(j),T=mn(T)}mn=null}else mn=null;P!==null&&Qh(Q,M,P,mn,!1),ln!==null&&Un!==null&&Qh(Q,Un,ln,mn,!0)}}n:{if(M=z?Hl(z):window,P=M.nodeName&&M.nodeName.toLowerCase(),P==="select"||P==="input"&&M.type==="file")var Nn=cd;else if(od(M))if(fd)Nn=mA;else{Nn=fA;var un=cA}else P=M.nodeName,!P||P.toLowerCase()!=="input"||M.type!=="checkbox"&&M.type!=="radio"?z&&so(z.elementType)&&(Nn=cd):Nn=dA;if(Nn&&(Nn=Nn(n,z))){sd(Q,Nn,r,H);break n}un&&un(n,M,z),n==="focusout"&&z&&M.type==="number"&&z.memoizedProps.value!=null&&oo(M,"number",M.value)}switch(un=z?Hl(z):window,n){case"focusin":(od(un)||un.contentEditable==="true")&&(Jr=un,Io=z,Jl=null);break;case"focusout":Jl=Io=Jr=null;break;case"mousedown":So=!0;break;case"contextmenu":case"mouseup":case"dragend":So=!1,xd(Q,r,H);break;case"selectionchange":if(pA)break;case"keydown":case"keyup":xd(Q,r,H)}var xn;if(bo)n:{switch(n){case"compositionstart":var _n="onCompositionStart";break n;case"compositionend":_n="onCompositionEnd";break n;case"compositionupdate":_n="onCompositionUpdate";break n}_n=void 0}else Kr?id(n,r)&&(_n="onCompositionEnd"):n==="keydown"&&r.keyCode===229&&(_n="onCompositionStart");_n&&(rd&&r.locale!=="ko"&&(Kr||_n!=="onCompositionStart"?_n==="onCompositionEnd"&&Kr&&(xn=Jf()):(Yt=H,po="value"in Yt?Yt.value:Yt.textContent,Kr=!0)),un=au(z,_n),0<un.length&&(_n=new ed(_n,n,null,r,H),Q.push({event:_n,listeners:un}),xn?_n.data=xn:(xn=ud(r),xn!==null&&(_n.data=xn)))),(xn=aA?iA(n,r):uA(n,r))&&(_n=au(z,"onBeforeInput"),0<_n.length&&(un=new ed("onBeforeInput","beforeinput",null,r,H),Q.push({event:un,listeners:_n}),un.data=xn)),JA(Q,n,z,r,H)}Vh(Q,e)})}function ka(n,e,r){return{instance:n,listener:e,currentTarget:r}}function au(n,e){for(var r=e+"Capture",i=[];n!==null;){var c=n,d=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||d===null||(c=ql(n,r),c!=null&&i.unshift(ka(n,c,d)),c=ql(n,e),c!=null&&i.push(ka(n,c,d))),n.tag===3)return i;n=n.return}return[]}function ty(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function Qh(n,e,r,i,c){for(var d=e._reactName,x=[];r!==null&&r!==i;){var D=r,E=D.alternate,z=D.stateNode;if(D=D.tag,E!==null&&E===i)break;D!==5&&D!==26&&D!==27||z===null||(E=z,c?(z=ql(r,d),z!=null&&x.unshift(ka(r,z,E))):c||(z=ql(r,d),z!=null&&x.push(ka(r,z,E)))),r=r.return}x.length!==0&&n.push({event:e,listeners:x})}var ry=/\r\n?/g,ly=/\u0000|\uFFFD/g;function Xh(n){return(typeof n=="string"?n:""+n).replace(ry,`
`).replace(ly,"")}function Zh(n,e){return e=Xh(e),Xh(n)===e}function Gn(n,e,r,i,c,d){switch(r){case"children":typeof i=="string"?e==="body"||e==="textarea"&&i===""||Xr(n,i):(typeof i=="number"||typeof i=="bigint")&&e!=="body"&&Xr(n,""+i);break;case"className":si(n,"class",i);break;case"tabIndex":si(n,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":si(n,r,i);break;case"style":Zf(n,i,d);break;case"data":if(e!=="object"){si(n,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||r!=="href")){n.removeAttribute(r);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){n.removeAttribute(r);break}i=fi(""+i),n.setAttribute(r,i);break;case"action":case"formAction":if(typeof i=="function"){n.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(r==="formAction"?(e!=="input"&&Gn(n,e,"name",c.name,c,null),Gn(n,e,"formEncType",c.formEncType,c,null),Gn(n,e,"formMethod",c.formMethod,c,null),Gn(n,e,"formTarget",c.formTarget,c,null)):(Gn(n,e,"encType",c.encType,c,null),Gn(n,e,"method",c.method,c,null),Gn(n,e,"target",c.target,c,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){n.removeAttribute(r);break}i=fi(""+i),n.setAttribute(r,i);break;case"onClick":i!=null&&(n.onclick=St);break;case"onScroll":i!=null&&Sn("scroll",n);break;case"onScrollEnd":i!=null&&Sn("scrollend",n);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(u(61));if(r=i.__html,r!=null){if(c.children!=null)throw Error(u(60));n.innerHTML=r}}break;case"multiple":n.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":n.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){n.removeAttribute("xlink:href");break}r=fi(""+i),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?n.setAttribute(r,""+i):n.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?n.setAttribute(r,""):n.removeAttribute(r);break;case"capture":case"download":i===!0?n.setAttribute(r,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?n.setAttribute(r,i):n.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?n.setAttribute(r,i):n.removeAttribute(r);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?n.removeAttribute(r):n.setAttribute(r,i);break;case"popover":Sn("beforetoggle",n),Sn("toggle",n),oi(n,"popover",i);break;case"xlinkActuate":It(n,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":It(n,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":It(n,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":It(n,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":It(n,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":It(n,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":It(n,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":It(n,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":It(n,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":oi(n,"is",i);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=j1.get(r)||r,oi(n,r,i))}}function $s(n,e,r,i,c,d){switch(r){case"style":Zf(n,i,d);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(u(61));if(r=i.__html,r!=null){if(c.children!=null)throw Error(u(60));n.innerHTML=r}}break;case"children":typeof i=="string"?Xr(n,i):(typeof i=="number"||typeof i=="bigint")&&Xr(n,""+i);break;case"onScroll":i!=null&&Sn("scroll",n);break;case"onScrollEnd":i!=null&&Sn("scrollend",n);break;case"onClick":i!=null&&(n.onclick=St);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Pf.hasOwnProperty(r))n:{if(r[0]==="o"&&r[1]==="n"&&(c=r.endsWith("Capture"),e=r.slice(2,c?r.length-7:void 0),d=n[Se]||null,d=d!=null?d[r]:null,typeof d=="function"&&n.removeEventListener(e,d,c),typeof i=="function")){typeof d!="function"&&d!==null&&(r in n?n[r]=null:n.hasAttribute(r)&&n.removeAttribute(r)),n.addEventListener(e,i,c);break n}r in n?n[r]=i:i===!0?n.setAttribute(r,""):oi(n,r,i)}}}function ge(n,e,r){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Sn("error",n),Sn("load",n);var i=!1,c=!1,d;for(d in r)if(r.hasOwnProperty(d)){var x=r[d];if(x!=null)switch(d){case"src":i=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,e));default:Gn(n,e,d,x,r,null)}}c&&Gn(n,e,"srcSet",r.srcSet,r,null),i&&Gn(n,e,"src",r.src,r,null);return;case"input":Sn("invalid",n);var D=d=x=c=null,E=null,z=null;for(i in r)if(r.hasOwnProperty(i)){var H=r[i];if(H!=null)switch(i){case"name":c=H;break;case"type":x=H;break;case"checked":E=H;break;case"defaultChecked":z=H;break;case"value":d=H;break;case"defaultValue":D=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(u(137,e));break;default:Gn(n,e,i,H,r,null)}}Vf(n,d,D,E,z,x,c,!1);return;case"select":Sn("invalid",n),i=x=d=null;for(c in r)if(r.hasOwnProperty(c)&&(D=r[c],D!=null))switch(c){case"value":d=D;break;case"defaultValue":x=D;break;case"multiple":i=D;default:Gn(n,e,c,D,r,null)}e=d,r=x,n.multiple=!!i,e!=null?Qr(n,!!i,e,!1):r!=null&&Qr(n,!!i,r,!0);return;case"textarea":Sn("invalid",n),d=c=i=null;for(x in r)if(r.hasOwnProperty(x)&&(D=r[x],D!=null))switch(x){case"value":i=D;break;case"defaultValue":c=D;break;case"children":d=D;break;case"dangerouslySetInnerHTML":if(D!=null)throw Error(u(91));break;default:Gn(n,e,x,D,r,null)}Qf(n,i,c,d);return;case"option":for(E in r)r.hasOwnProperty(E)&&(i=r[E],i!=null)&&(E==="selected"?n.selected=i&&typeof i!="function"&&typeof i!="symbol":Gn(n,e,E,i,r,null));return;case"dialog":Sn("beforetoggle",n),Sn("toggle",n),Sn("cancel",n),Sn("close",n);break;case"iframe":case"object":Sn("load",n);break;case"video":case"audio":for(i=0;i<Da.length;i++)Sn(Da[i],n);break;case"image":Sn("error",n),Sn("load",n);break;case"details":Sn("toggle",n);break;case"embed":case"source":case"link":Sn("error",n),Sn("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in r)if(r.hasOwnProperty(z)&&(i=r[z],i!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,e));default:Gn(n,e,z,i,r,null)}return;default:if(so(e)){for(H in r)r.hasOwnProperty(H)&&(i=r[H],i!==void 0&&$s(n,e,H,i,r,void 0));return}}for(D in r)r.hasOwnProperty(D)&&(i=r[D],i!=null&&Gn(n,e,D,i,r,null))}function ay(n,e,r,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,d=null,x=null,D=null,E=null,z=null,H=null;for(P in r){var Q=r[P];if(r.hasOwnProperty(P)&&Q!=null)switch(P){case"checked":break;case"value":break;case"defaultValue":E=Q;default:i.hasOwnProperty(P)||Gn(n,e,P,null,i,Q)}}for(var M in i){var P=i[M];if(Q=r[M],i.hasOwnProperty(M)&&(P!=null||Q!=null))switch(M){case"type":d=P;break;case"name":c=P;break;case"checked":z=P;break;case"defaultChecked":H=P;break;case"value":x=P;break;case"defaultValue":D=P;break;case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(u(137,e));break;default:P!==Q&&Gn(n,e,M,P,i,Q)}}uo(n,x,D,E,z,H,d,c);return;case"select":P=x=D=M=null;for(d in r)if(E=r[d],r.hasOwnProperty(d)&&E!=null)switch(d){case"value":break;case"multiple":P=E;default:i.hasOwnProperty(d)||Gn(n,e,d,null,i,E)}for(c in i)if(d=i[c],E=r[c],i.hasOwnProperty(c)&&(d!=null||E!=null))switch(c){case"value":M=d;break;case"defaultValue":D=d;break;case"multiple":x=d;default:d!==E&&Gn(n,e,c,d,i,E)}e=D,r=x,i=P,M!=null?Qr(n,!!r,M,!1):!!i!=!!r&&(e!=null?Qr(n,!!r,e,!0):Qr(n,!!r,r?[]:"",!1));return;case"textarea":P=M=null;for(D in r)if(c=r[D],r.hasOwnProperty(D)&&c!=null&&!i.hasOwnProperty(D))switch(D){case"value":break;case"children":break;default:Gn(n,e,D,null,i,c)}for(x in i)if(c=i[x],d=r[x],i.hasOwnProperty(x)&&(c!=null||d!=null))switch(x){case"value":M=c;break;case"defaultValue":P=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(u(91));break;default:c!==d&&Gn(n,e,x,c,i,d)}Yf(n,M,P);return;case"option":for(var ln in r)M=r[ln],r.hasOwnProperty(ln)&&M!=null&&!i.hasOwnProperty(ln)&&(ln==="selected"?n.selected=!1:Gn(n,e,ln,null,i,M));for(E in i)M=i[E],P=r[E],i.hasOwnProperty(E)&&M!==P&&(M!=null||P!=null)&&(E==="selected"?n.selected=M&&typeof M!="function"&&typeof M!="symbol":Gn(n,e,E,M,i,P));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var mn in r)M=r[mn],r.hasOwnProperty(mn)&&M!=null&&!i.hasOwnProperty(mn)&&Gn(n,e,mn,null,i,M);for(z in i)if(M=i[z],P=r[z],i.hasOwnProperty(z)&&M!==P&&(M!=null||P!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(u(137,e));break;default:Gn(n,e,z,M,i,P)}return;default:if(so(e)){for(var Un in r)M=r[Un],r.hasOwnProperty(Un)&&M!==void 0&&!i.hasOwnProperty(Un)&&$s(n,e,Un,void 0,i,M);for(H in i)M=i[H],P=r[H],!i.hasOwnProperty(H)||M===P||M===void 0&&P===void 0||$s(n,e,H,M,i,P);return}}for(var j in r)M=r[j],r.hasOwnProperty(j)&&M!=null&&!i.hasOwnProperty(j)&&Gn(n,e,j,null,i,M);for(Q in i)M=i[Q],P=r[Q],!i.hasOwnProperty(Q)||M===P||M==null&&P==null||Gn(n,e,Q,M,i,P)}function $h(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function iy(){if(typeof performance.getEntriesByType=="function"){for(var n=0,e=0,r=performance.getEntriesByType("resource"),i=0;i<r.length;i++){var c=r[i],d=c.transferSize,x=c.initiatorType,D=c.duration;if(d&&D&&$h(x)){for(x=0,D=c.responseEnd,i+=1;i<r.length;i++){var E=r[i],z=E.startTime;if(z>D)break;var H=E.transferSize,Q=E.initiatorType;H&&$h(Q)&&(E=E.responseEnd,x+=H*(E<D?1:(D-z)/(E-z)))}if(--i,e+=8*(d+x)/(c.duration/1e3),n++,10<n)break}}if(0<n)return e/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var Ks=null,Js=null;function iu(n){return n.nodeType===9?n:n.ownerDocument}function Kh(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Jh(n,e){if(n===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&e==="foreignObject"?0:n}function Ws(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var nc=null;function uy(){var n=window.event;return n&&n.type==="popstate"?n===nc?!1:(nc=n,!0):(nc=null,!1)}var Wh=typeof setTimeout=="function"?setTimeout:void 0,oy=typeof clearTimeout=="function"?clearTimeout:void 0,np=typeof Promise=="function"?Promise:void 0,sy=typeof queueMicrotask=="function"?queueMicrotask:typeof np<"u"?function(n){return np.resolve(null).then(n).catch(cy)}:Wh;function cy(n){setTimeout(function(){throw n})}function sr(n){return n==="head"}function ep(n,e){var r=e,i=0;do{var c=r.nextSibling;if(n.removeChild(r),c&&c.nodeType===8)if(r=c.data,r==="/$"||r==="/&"){if(i===0){n.removeChild(c),Sl(e);return}i--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")i++;else if(r==="html")Ia(n.ownerDocument.documentElement);else if(r==="head"){r=n.ownerDocument.head,Ia(r);for(var d=r.firstChild;d;){var x=d.nextSibling,D=d.nodeName;d[Ul]||D==="SCRIPT"||D==="STYLE"||D==="LINK"&&d.rel.toLowerCase()==="stylesheet"||r.removeChild(d),d=x}}else r==="body"&&Ia(n.ownerDocument.body);r=c}while(r);Sl(e)}function tp(n,e){var r=n;n=0;do{var i=r.nextSibling;if(r.nodeType===1?e?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(e?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0)break;n--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||n++;r=i}while(r)}function ec(n){var e=n.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var r=e;switch(e=e.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":ec(r),ao(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}n.removeChild(r)}}function fy(n,e,r,i){for(;n.nodeType===1;){var c=r;if(n.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(i){if(!n[Ul])switch(e){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(d=n.getAttribute("rel"),d==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(d!==c.rel||n.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||n.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||n.getAttribute("title")!==(c.title==null?null:c.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(d=n.getAttribute("src"),(d!==(c.src==null?null:c.src)||n.getAttribute("type")!==(c.type==null?null:c.type)||n.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&d&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(e==="input"&&n.type==="hidden"){var d=c.name==null?null:""+c.name;if(c.type==="hidden"&&n.getAttribute("name")===d)return n}else return n;if(n=et(n.nextSibling),n===null)break}return null}function dy(n,e,r){if(e==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!r||(n=et(n.nextSibling),n===null))return null;return n}function rp(n,e){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!e||(n=et(n.nextSibling),n===null))return null;return n}function tc(n){return n.data==="$?"||n.data==="$~"}function rc(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function my(n,e){var r=n.ownerDocument;if(n.data==="$~")n._reactRetry=e;else if(n.data!=="$?"||r.readyState!=="loading")e();else{var i=function(){e(),r.removeEventListener("DOMContentLoaded",i)};r.addEventListener("DOMContentLoaded",i),n._reactRetry=i}}function et(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return n}var lc=null;function lp(n){n=n.nextSibling;for(var e=0;n;){if(n.nodeType===8){var r=n.data;if(r==="/$"||r==="/&"){if(e===0)return et(n.nextSibling);e--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||e++}n=n.nextSibling}return null}function ap(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var r=n.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(e===0)return n;e--}else r!=="/$"&&r!=="/&"||e++}n=n.previousSibling}return null}function ip(n,e,r){switch(e=iu(r),n){case"html":if(n=e.documentElement,!n)throw Error(u(452));return n;case"head":if(n=e.head,!n)throw Error(u(453));return n;case"body":if(n=e.body,!n)throw Error(u(454));return n;default:throw Error(u(451))}}function Ia(n){for(var e=n.attributes;e.length;)n.removeAttributeNode(e[0]);ao(n)}var tt=new Map,up=new Set;function uu(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var Gt=X.d;X.d={f:hy,r:py,D:gy,C:Ay,L:yy,m:xy,X:vy,S:by,M:Dy};function hy(){var n=Gt.f(),e=Ji();return n||e}function py(n){var e=qr(n);e!==null&&e.tag===5&&e.type==="form"?Im(e):Gt.r(n)}var Dl=typeof document>"u"?null:document;function op(n,e,r){var i=Dl;if(i&&typeof e=="string"&&e){var c=Xe(e);c='link[rel="'+n+'"][href="'+c+'"]',typeof r=="string"&&(c+='[crossorigin="'+r+'"]'),up.has(c)||(up.add(c),n={rel:n,crossOrigin:r,href:e},i.querySelector(c)===null&&(e=i.createElement("link"),ge(e,"link",n),se(e),i.head.appendChild(e)))}}function gy(n){Gt.D(n),op("dns-prefetch",n,null)}function Ay(n,e){Gt.C(n,e),op("preconnect",n,e)}function yy(n,e,r){Gt.L(n,e,r);var i=Dl;if(i&&n&&e){var c='link[rel="preload"][as="'+Xe(e)+'"]';e==="image"&&r&&r.imageSrcSet?(c+='[imagesrcset="'+Xe(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(c+='[imagesizes="'+Xe(r.imageSizes)+'"]')):c+='[href="'+Xe(n)+'"]';var d=c;switch(e){case"style":d=kl(n);break;case"script":d=Il(n)}tt.has(d)||(n=g({rel:"preload",href:e==="image"&&r&&r.imageSrcSet?void 0:n,as:e},r),tt.set(d,n),i.querySelector(c)!==null||e==="style"&&i.querySelector(Sa(d))||e==="script"&&i.querySelector(Ea(d))||(e=i.createElement("link"),ge(e,"link",n),se(e),i.head.appendChild(e)))}}function xy(n,e){Gt.m(n,e);var r=Dl;if(r&&n){var i=e&&typeof e.as=="string"?e.as:"script",c='link[rel="modulepreload"][as="'+Xe(i)+'"][href="'+Xe(n)+'"]',d=c;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Il(n)}if(!tt.has(d)&&(n=g({rel:"modulepreload",href:n},e),tt.set(d,n),r.querySelector(c)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Ea(d)))return}i=r.createElement("link"),ge(i,"link",n),se(i),r.head.appendChild(i)}}}function by(n,e,r){Gt.S(n,e,r);var i=Dl;if(i&&n){var c=Vr(i).hoistableStyles,d=kl(n);e=e||"default";var x=c.get(d);if(!x){var D={loading:0,preload:null};if(x=i.querySelector(Sa(d)))D.loading=5;else{n=g({rel:"stylesheet",href:n,"data-precedence":e},r),(r=tt.get(d))&&ac(n,r);var E=x=i.createElement("link");se(E),ge(E,"link",n),E._p=new Promise(function(z,H){E.onload=z,E.onerror=H}),E.addEventListener("load",function(){D.loading|=1}),E.addEventListener("error",function(){D.loading|=2}),D.loading|=4,ou(x,e,i)}x={type:"stylesheet",instance:x,count:1,state:D},c.set(d,x)}}}function vy(n,e){Gt.X(n,e);var r=Dl;if(r&&n){var i=Vr(r).hoistableScripts,c=Il(n),d=i.get(c);d||(d=r.querySelector(Ea(c)),d||(n=g({src:n,async:!0},e),(e=tt.get(c))&&ic(n,e),d=r.createElement("script"),se(d),ge(d,"link",n),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},i.set(c,d))}}function Dy(n,e){Gt.M(n,e);var r=Dl;if(r&&n){var i=Vr(r).hoistableScripts,c=Il(n),d=i.get(c);d||(d=r.querySelector(Ea(c)),d||(n=g({src:n,async:!0,type:"module"},e),(e=tt.get(c))&&ic(n,e),d=r.createElement("script"),se(d),ge(d,"link",n),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},i.set(c,d))}}function sp(n,e,r,i){var c=(c=sn.current)?uu(c):null;if(!c)throw Error(u(446));switch(n){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(e=kl(r.href),r=Vr(c).hoistableStyles,i=r.get(e),i||(i={type:"style",instance:null,count:0,state:null},r.set(e,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){n=kl(r.href);var d=Vr(c).hoistableStyles,x=d.get(n);if(x||(c=c.ownerDocument||c,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(n,x),(d=c.querySelector(Sa(n)))&&!d._p&&(x.instance=d,x.state.loading=5),tt.has(n)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},tt.set(n,r),d||ky(c,n,r,x.state))),e&&i===null)throw Error(u(528,""));return x}if(e&&i!==null)throw Error(u(529,""));return null;case"script":return e=r.async,r=r.src,typeof r=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Il(r),r=Vr(c).hoistableScripts,i=r.get(e),i||(i={type:"script",instance:null,count:0,state:null},r.set(e,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,n))}}function kl(n){return'href="'+Xe(n)+'"'}function Sa(n){return'link[rel="stylesheet"]['+n+"]"}function cp(n){return g({},n,{"data-precedence":n.precedence,precedence:null})}function ky(n,e,r,i){n.querySelector('link[rel="preload"][as="style"]['+e+"]")?i.loading=1:(e=n.createElement("link"),i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2}),ge(e,"link",r),se(e),n.head.appendChild(e))}function Il(n){return'[src="'+Xe(n)+'"]'}function Ea(n){return"script[async]"+n}function fp(n,e,r){if(e.count++,e.instance===null)switch(e.type){case"style":var i=n.querySelector('style[data-href~="'+Xe(r.href)+'"]');if(i)return e.instance=i,se(i),i;var c=g({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return i=(n.ownerDocument||n).createElement("style"),se(i),ge(i,"style",c),ou(i,r.precedence,n),e.instance=i;case"stylesheet":c=kl(r.href);var d=n.querySelector(Sa(c));if(d)return e.state.loading|=4,e.instance=d,se(d),d;i=cp(r),(c=tt.get(c))&&ac(i,c),d=(n.ownerDocument||n).createElement("link"),se(d);var x=d;return x._p=new Promise(function(D,E){x.onload=D,x.onerror=E}),ge(d,"link",i),e.state.loading|=4,ou(d,r.precedence,n),e.instance=d;case"script":return d=Il(r.src),(c=n.querySelector(Ea(d)))?(e.instance=c,se(c),c):(i=r,(c=tt.get(d))&&(i=g({},r),ic(i,c)),n=n.ownerDocument||n,c=n.createElement("script"),se(c),ge(c,"link",i),n.head.appendChild(c),e.instance=c);case"void":return null;default:throw Error(u(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(i=e.instance,e.state.loading|=4,ou(i,r.precedence,n));return e.instance}function ou(n,e,r){for(var i=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=i.length?i[i.length-1]:null,d=c,x=0;x<i.length;x++){var D=i[x];if(D.dataset.precedence===e)d=D;else if(d!==c)break}d?d.parentNode.insertBefore(n,d.nextSibling):(e=r.nodeType===9?r.head:r,e.insertBefore(n,e.firstChild))}function ac(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.title==null&&(n.title=e.title)}function ic(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.integrity==null&&(n.integrity=e.integrity)}var su=null;function dp(n,e,r){if(su===null){var i=new Map,c=su=new Map;c.set(r,i)}else c=su,i=c.get(r),i||(i=new Map,c.set(r,i));if(i.has(n))return i;for(i.set(n,null),r=r.getElementsByTagName(n),c=0;c<r.length;c++){var d=r[c];if(!(d[Ul]||d[de]||n==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var x=d.getAttribute(e)||"";x=n+x;var D=i.get(x);D?D.push(d):i.set(x,[d])}}return i}function mp(n,e,r){n=n.ownerDocument||n,n.head.insertBefore(r,e==="title"?n.querySelector("head > title"):null)}function Iy(n,e,r){if(r===1||e.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(n=e.disabled,typeof e.precedence=="string"&&n==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function hp(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function Sy(n,e,r,i){if(r.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var c=kl(i.href),d=e.querySelector(Sa(c));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=cu.bind(n),e.then(n,n)),r.state.loading|=4,r.instance=d,se(d);return}d=e.ownerDocument||e,i=cp(i),(c=tt.get(c))&&ac(i,c),d=d.createElement("link"),se(d);var x=d;x._p=new Promise(function(D,E){x.onload=D,x.onerror=E}),ge(d,"link",i),r.instance=d}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(r,e),(e=r.state.preload)&&(r.state.loading&3)===0&&(n.count++,r=cu.bind(n),e.addEventListener("load",r),e.addEventListener("error",r))}}var uc=0;function Ey(n,e){return n.stylesheets&&n.count===0&&du(n,n.stylesheets),0<n.count||0<n.imgCount?function(r){var i=setTimeout(function(){if(n.stylesheets&&du(n,n.stylesheets),n.unsuspend){var d=n.unsuspend;n.unsuspend=null,d()}},6e4+e);0<n.imgBytes&&uc===0&&(uc=62500*iy());var c=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&du(n,n.stylesheets),n.unsuspend)){var d=n.unsuspend;n.unsuspend=null,d()}},(n.imgBytes>uc?50:800)+e);return n.unsuspend=r,function(){n.unsuspend=null,clearTimeout(i),clearTimeout(c)}}:null}function cu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)du(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var fu=null;function du(n,e){n.stylesheets=null,n.unsuspend!==null&&(n.count++,fu=new Map,e.forEach(Cy,n),fu=null,cu.call(n))}function Cy(n,e){if(!(e.state.loading&4)){var r=fu.get(n);if(r)var i=r.get(null);else{r=new Map,fu.set(n,r);for(var c=n.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<c.length;d++){var x=c[d];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(r.set(x.dataset.precedence,x),i=x)}i&&r.set(null,i)}c=e.instance,x=c.getAttribute("data-precedence"),d=r.get(x)||i,d===i&&r.set(null,c),r.set(x,c),this.count++,i=cu.bind(this),c.addEventListener("load",i),c.addEventListener("error",i),d?d.parentNode.insertBefore(c,d.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(c,n.firstChild)),e.state.loading|=4}}var Ca={$$typeof:L,Provider:null,Consumer:null,_currentValue:on,_currentValue2:on,_threadCount:0};function wy(n,e,r,i,c,d,x,D,E){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=eo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=eo(0),this.hiddenUpdates=eo(null),this.identifierPrefix=i,this.onUncaughtError=c,this.onCaughtError=d,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function pp(n,e,r,i,c,d,x,D,E,z,H,Q){return n=new wy(n,e,r,x,E,z,H,Q,D),e=1,d===!0&&(e|=24),d=Be(3,null,null,e),n.current=d,d.stateNode=n,e=Po(),e.refCount++,n.pooledCache=e,e.refCount++,d.memoizedState={element:i,isDehydrated:r,cache:e},qo(d),n}function gp(n){return n?(n=el,n):el}function Ap(n,e,r,i,c,d){c=gp(c),i.context===null?i.context=c:i.pendingContext=c,i=Jt(e),i.payload={element:r},d=d===void 0?null:d,d!==null&&(i.callback=d),r=Wt(n,i,e),r!==null&&(Te(r,n,e),aa(r,n,e))}function yp(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var r=n.retryLane;n.retryLane=r!==0&&r<e?r:e}}function oc(n,e){yp(n,e),(n=n.alternate)&&yp(n,e)}function xp(n){if(n.tag===13||n.tag===31){var e=Dr(n,67108864);e!==null&&Te(e,n,67108864),oc(n,67108864)}}function bp(n){if(n.tag===13||n.tag===31){var e=Ue();e=to(e);var r=Dr(n,e);r!==null&&Te(r,n,e),oc(n,e)}}var mu=!0;function _y(n,e,r,i){var c=B.T;B.T=null;var d=X.p;try{X.p=2,sc(n,e,r,i)}finally{X.p=d,B.T=c}}function Ry(n,e,r,i){var c=B.T;B.T=null;var d=X.p;try{X.p=8,sc(n,e,r,i)}finally{X.p=d,B.T=c}}function sc(n,e,r,i){if(mu){var c=cc(i);if(c===null)Zs(n,e,i,hu,r),Dp(n,i);else if(jy(c,n,e,r,i))i.stopPropagation();else if(Dp(n,i),e&4&&-1<Ty.indexOf(n)){for(;c!==null;){var d=qr(c);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var x=Ar(d.pendingLanes);if(x!==0){var D=d;for(D.pendingLanes|=2,D.entangledLanes|=2;x;){var E=1<<31-Hn(x);D.entanglements[1]|=E,x&=~E}yt(d),(zn&6)===0&&($i=be()+500,va(0))}}break;case 31:case 13:D=Dr(d,2),D!==null&&Te(D,d,2),Ji(),oc(d,2)}if(d=cc(i),d===null&&Zs(n,e,i,hu,r),d===c)break;c=d}c!==null&&i.stopPropagation()}else Zs(n,e,i,null,r)}}function cc(n){return n=fo(n),fc(n)}var hu=null;function fc(n){if(hu=null,n=Hr(n),n!==null){var e=s(n);if(e===null)n=null;else{var r=e.tag;if(r===13){if(n=f(e),n!==null)return n;n=null}else if(r===31){if(n=m(e),n!==null)return n;n=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null)}}return hu=n,null}function vp(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(no()){case V:return 2;case K:return 8;case gn:case kn:return 32;case Mn:return 268435456;default:return 32}default:return 32}}var dc=!1,cr=null,fr=null,dr=null,wa=new Map,_a=new Map,mr=[],Ty="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Dp(n,e){switch(n){case"focusin":case"focusout":cr=null;break;case"dragenter":case"dragleave":fr=null;break;case"mouseover":case"mouseout":dr=null;break;case"pointerover":case"pointerout":wa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":_a.delete(e.pointerId)}}function Ra(n,e,r,i,c,d){return n===null||n.nativeEvent!==d?(n={blockedOn:e,domEventName:r,eventSystemFlags:i,nativeEvent:d,targetContainers:[c]},e!==null&&(e=qr(e),e!==null&&xp(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,c!==null&&e.indexOf(c)===-1&&e.push(c),n)}function jy(n,e,r,i,c){switch(e){case"focusin":return cr=Ra(cr,n,e,r,i,c),!0;case"dragenter":return fr=Ra(fr,n,e,r,i,c),!0;case"mouseover":return dr=Ra(dr,n,e,r,i,c),!0;case"pointerover":var d=c.pointerId;return wa.set(d,Ra(wa.get(d)||null,n,e,r,i,c)),!0;case"gotpointercapture":return d=c.pointerId,_a.set(d,Ra(_a.get(d)||null,n,e,r,i,c)),!0}return!1}function kp(n){var e=Hr(n.target);if(e!==null){var r=s(e);if(r!==null){if(e=r.tag,e===13){if(e=f(r),e!==null){n.blockedOn=e,Bf(n.priority,function(){bp(r)});return}}else if(e===31){if(e=m(r),e!==null){n.blockedOn=e,Bf(n.priority,function(){bp(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){n.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}n.blockedOn=null}function pu(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var r=cc(n.nativeEvent);if(r===null){r=n.nativeEvent;var i=new r.constructor(r.type,r);co=i,r.target.dispatchEvent(i),co=null}else return e=qr(r),e!==null&&xp(e),n.blockedOn=r,!1;e.shift()}return!0}function Ip(n,e,r){pu(n)&&r.delete(e)}function Ny(){dc=!1,cr!==null&&pu(cr)&&(cr=null),fr!==null&&pu(fr)&&(fr=null),dr!==null&&pu(dr)&&(dr=null),wa.forEach(Ip),_a.forEach(Ip)}function gu(n,e){n.blockedOn===e&&(n.blockedOn=null,dc||(dc=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Ny)))}var Au=null;function Sp(n){Au!==n&&(Au=n,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Au===n&&(Au=null);for(var e=0;e<n.length;e+=3){var r=n[e],i=n[e+1],c=n[e+2];if(typeof i!="function"){if(fc(i||r)===null)continue;break}var d=qr(r);d!==null&&(n.splice(e,3),e-=3,cs(d,{pending:!0,data:c,method:r.method,action:i},i,c))}}))}function Sl(n){function e(E){return gu(E,n)}cr!==null&&gu(cr,n),fr!==null&&gu(fr,n),dr!==null&&gu(dr,n),wa.forEach(e),_a.forEach(e);for(var r=0;r<mr.length;r++){var i=mr[r];i.blockedOn===n&&(i.blockedOn=null)}for(;0<mr.length&&(r=mr[0],r.blockedOn===null);)kp(r),r.blockedOn===null&&mr.shift();if(r=(n.ownerDocument||n).$$reactFormReplay,r!=null)for(i=0;i<r.length;i+=3){var c=r[i],d=r[i+1],x=c[Se]||null;if(typeof d=="function")x||Sp(r);else if(x){var D=null;if(d&&d.hasAttribute("formAction")){if(c=d,x=d[Se]||null)D=x.formAction;else if(fc(c)!==null)continue}else D=x.action;typeof D=="function"?r[i+1]=D:(r.splice(i,3),i-=3),Sp(r)}}}function Ep(){function n(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(x){return c=x})},focusReset:"manual",scroll:"manual"})}function e(){c!==null&&(c(),c=null),i||setTimeout(r,20)}function r(){if(!i&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,c=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(r,100),function(){i=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),c!==null&&(c(),c=null)}}}function mc(n){this._internalRoot=n}yu.prototype.render=mc.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(u(409));var r=e.current,i=Ue();Ap(r,i,n,e,null,null)},yu.prototype.unmount=mc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Ap(n.current,2,null,n,null,null),Ji(),e[Ur]=null}};function yu(n){this._internalRoot=n}yu.prototype.unstable_scheduleHydration=function(n){if(n){var e=Mf();n={blockedOn:null,target:n,priority:e};for(var r=0;r<mr.length&&e!==0&&e<mr[r].priority;r++);mr.splice(r,0,n),r===0&&kp(n)}};var Cp=l.version;if(Cp!=="19.2.6")throw Error(u(527,Cp,"19.2.6"));X.findDOMNode=function(n){var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(u(188)):(n=Object.keys(n).join(","),Error(u(268,n)));return n=h(e),n=n!==null?y(n):null,n=n===null?null:n.stateNode,n};var Fy={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xu.isDisabled&&xu.supportsFiber)try{ve=xu.inject(Fy),ue=xu}catch{}}return ja.createRoot=function(n,e){if(!o(n))throw Error(u(299));var r=!1,i="",c=Fm,d=zm,x=Mm;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(c=e.onUncaughtError),e.onCaughtError!==void 0&&(d=e.onCaughtError),e.onRecoverableError!==void 0&&(x=e.onRecoverableError)),e=pp(n,1,!1,null,null,r,i,null,c,d,x,Ep),n[Ur]=e.current,Xs(n),new mc(e)},ja.hydrateRoot=function(n,e,r){if(!o(n))throw Error(u(299));var i=!1,c="",d=Fm,x=zm,D=Mm,E=null;return r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onUncaughtError!==void 0&&(d=r.onUncaughtError),r.onCaughtError!==void 0&&(x=r.onCaughtError),r.onRecoverableError!==void 0&&(D=r.onRecoverableError),r.formState!==void 0&&(E=r.formState)),e=pp(n,1,!0,e,r??null,i,c,E,d,x,D,Ep),e.context=gp(null),r=e.current,i=Ue(),i=to(i),c=Jt(i),c.callback=null,Wt(r,c,i),r=i,e.current.lanes=r,Gl(e,r),yt(e),n[Ur]=e.current,Xs(n),new yu(e)},ja.version="19.2.6",ja}var Bp;function Vy(){if(Bp)return gc.exports;Bp=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(l){console.error(l)}}return t(),gc.exports=qy(),gc.exports}var Yy=Vy();const Qy=Ou(Yy);var Op="popstate";function Lp(t){return typeof t=="object"&&t!=null&&"pathname"in t&&"search"in t&&"hash"in t&&"state"in t&&"key"in t}function Xy(t={}){function l(u,o){let s=o.state?.masked,{pathname:f,search:m,hash:p}=s||u.location;return Gc("",{pathname:f,search:m,hash:p},o.state&&o.state.usr||null,o.state&&o.state.key||"default",s?{pathname:u.location.pathname,search:u.location.search,hash:u.location.hash}:void 0)}function a(u,o){return typeof o=="string"?o:Ua(o)}return $y(l,a,null,t)}function Kn(t,l){if(t===!1||t===null||typeof t>"u")throw new Error(l)}function at(t,l){if(!t){typeof console<"u"&&console.warn(l);try{throw new Error(l)}catch{}}}function Zy(){return Math.random().toString(36).substring(2,10)}function Pp(t,l){return{usr:t.state,key:t.key,idx:l,masked:t.mask?{pathname:t.pathname,search:t.search,hash:t.hash}:void 0}}function Gc(t,l,a=null,u,o){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof l=="string"?jl(l):l,state:a,key:l&&l.key||u||Zy(),mask:o}}function Ua({pathname:t="/",search:l="",hash:a=""}){return l&&l!=="?"&&(t+=l.charAt(0)==="?"?l:"?"+l),a&&a!=="#"&&(t+=a.charAt(0)==="#"?a:"#"+a),t}function jl(t){let l={};if(t){let a=t.indexOf("#");a>=0&&(l.hash=t.substring(a),t=t.substring(0,a));let u=t.indexOf("?");u>=0&&(l.search=t.substring(u),t=t.substring(0,u)),t&&(l.pathname=t)}return l}function $y(t,l,a,u={}){let{window:o=document.defaultView,v5Compat:s=!1}=u,f=o.history,m="POP",p=null,h=y();h==null&&(h=0,f.replaceState({...f.state,idx:h},""));function y(){return(f.state||{idx:null}).idx}function g(){m="POP";let w=y(),R=w==null?null:w-h;h=w,p&&p({action:m,location:C.location,delta:R})}function b(w,R){m="PUSH";let U=Lp(w)?w:Gc(C.location,w,R);h=y()+1;let L=Pp(U,h),en=C.createHref(U.mask||U);try{f.pushState(L,"",en)}catch(rn){if(rn instanceof DOMException&&rn.name==="DataCloneError")throw rn;o.location.assign(en)}s&&p&&p({action:m,location:C.location,delta:1})}function v(w,R){m="REPLACE";let U=Lp(w)?w:Gc(C.location,w,R);h=y();let L=Pp(U,h),en=C.createHref(U.mask||U);f.replaceState(L,"",en),s&&p&&p({action:m,location:C.location,delta:0})}function I(w){return Ky(w)}let C={get action(){return m},get location(){return t(o,f)},listen(w){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(Op,g),p=w,()=>{o.removeEventListener(Op,g),p=null}},createHref(w){return l(o,w)},createURL:I,encodeLocation(w){let R=I(w);return{pathname:R.pathname,search:R.search,hash:R.hash}},push:b,replace:v,go(w){return f.go(w)}};return C}function Ky(t,l=!1){let a="http://localhost";typeof window<"u"&&(a=window.location.origin!=="null"?window.location.origin:window.location.href),Kn(a,"No window.location.(origin|href) available to create URL");let u=typeof t=="string"?t:Ua(t);return u=u.replace(/ $/,"%20"),!l&&u.startsWith("//")&&(u=a+u),new URL(u,a)}function qg(t,l,a="/"){return Jy(t,l,a,!1)}function Jy(t,l,a,u,o){let s=typeof l=="string"?jl(l):l,f=Ut(s.pathname||"/",a);if(f==null)return null;let m=Wy(t),p=null,h=fx(f);for(let y=0;p==null&&y<m.length;++y)p=sx(m[y],h,u);return p}function Wy(t){let l=Vg(t);return nx(l),l}function Vg(t,l=[],a=[],u="",o=!1){let s=(f,m,p=o,h)=>{let y={relativePath:h===void 0?f.path||"":h,caseSensitive:f.caseSensitive===!0,childrenIndex:m,route:f};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(u)&&p)return;Kn(y.relativePath.startsWith(u),`Absolute route path "${y.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(u.length)}let g=dt([u,y.relativePath]),b=a.concat(y);f.children&&f.children.length>0&&(Kn(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),Vg(f.children,l,b,g,p)),!(f.path==null&&!f.index)&&l.push({path:g,score:ux(g,f.index),routesMeta:b})};return t.forEach((f,m)=>{if(f.path===""||!f.path?.includes("?"))s(f,m);else for(let p of Yg(f.path))s(f,m,!0,p)}),l}function Yg(t){let l=t.split("/");if(l.length===0)return[];let[a,...u]=l,o=a.endsWith("?"),s=a.replace(/\?$/,"");if(u.length===0)return o?[s,""]:[s];let f=Yg(u.join("/")),m=[];return m.push(...f.map(p=>p===""?s:[s,p].join("/"))),o&&m.push(...f),m.map(p=>t.startsWith("/")&&p===""?"/":p)}function nx(t){t.sort((l,a)=>l.score!==a.score?a.score-l.score:ox(l.routesMeta.map(u=>u.childrenIndex),a.routesMeta.map(u=>u.childrenIndex)))}var ex=/^:[\w-]+$/,tx=3,rx=2,lx=1,ax=10,ix=-2,Gp=t=>t==="*";function ux(t,l){let a=t.split("/"),u=a.length;return a.some(Gp)&&(u+=ix),l&&(u+=rx),a.filter(o=>!Gp(o)).reduce((o,s)=>o+(ex.test(s)?tx:s===""?lx:ax),u)}function ox(t,l){return t.length===l.length&&t.slice(0,-1).every((u,o)=>u===l[o])?t[t.length-1]-l[l.length-1]:0}function sx(t,l,a=!1){let{routesMeta:u}=t,o={},s="/",f=[];for(let m=0;m<u.length;++m){let p=u[m],h=m===u.length-1,y=s==="/"?l:l.slice(s.length)||"/",g=Ru({path:p.relativePath,caseSensitive:p.caseSensitive,end:h},y),b=p.route;if(!g&&h&&a&&!u[u.length-1].route.index&&(g=Ru({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},y)),!g)return null;Object.assign(o,g.params),f.push({params:o,pathname:dt([s,g.pathname]),pathnameBase:px(dt([s,g.pathnameBase])),route:b}),g.pathnameBase!=="/"&&(s=dt([s,g.pathnameBase]))}return f}function Ru(t,l){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[a,u]=cx(t.path,t.caseSensitive,t.end),o=l.match(a);if(!o)return null;let s=o[0],f=s.replace(/(.)\/+$/,"$1"),m=o.slice(1);return{params:u.reduce((h,{paramName:y,isOptional:g},b)=>{if(y==="*"){let I=m[b]||"";f=s.slice(0,s.length-I.length).replace(/(.)\/+$/,"$1")}const v=m[b];return g&&!v?h[y]=void 0:h[y]=(v||"").replace(/%2F/g,"/"),h},{}),pathname:s,pathnameBase:f,pattern:t}}function cx(t,l=!1,a=!0){at(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let u=[],o="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,m,p,h,y)=>{if(u.push({paramName:m,isOptional:p!=null}),p){let g=y.charAt(h+f.length);return g&&g!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(u.push({paramName:"*"}),o+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?o+="\\/*$":t!==""&&t!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,l?void 0:"i"),u]}function fx(t){try{return t.split("/").map(l=>decodeURIComponent(l).replace(/\//g,"%2F")).join("/")}catch(l){return at(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${l}).`),t}}function Ut(t,l){if(l==="/")return t;if(!t.toLowerCase().startsWith(l.toLowerCase()))return null;let a=l.endsWith("/")?l.length-1:l.length,u=t.charAt(a);return u&&u!=="/"?null:t.slice(a)||"/"}var dx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function mx(t,l="/"){let{pathname:a,search:u="",hash:o=""}=typeof t=="string"?jl(t):t,s;return a?(a=Qg(a),a.startsWith("/")?s=Up(a.substring(1),"/"):s=Up(a,l)):s=l,{pathname:s,search:gx(u),hash:Ax(o)}}function Up(t,l){let a=Tu(l).split("/");return t.split("/").forEach(o=>{o===".."?a.length>1&&a.pop():o!=="."&&a.push(o)}),a.length>1?a.join("/"):"/"}function bc(t,l,a,u){return`Cannot include a '${t}' character in a manually specified \`to.${l}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function hx(t){return t.filter((l,a)=>a===0||l.route.path&&l.route.path.length>0)}function tf(t){let l=hx(t);return l.map((a,u)=>u===l.length-1?a.pathname:a.pathnameBase)}function Lu(t,l,a,u=!1){let o;typeof t=="string"?o=jl(t):(o={...t},Kn(!o.pathname||!o.pathname.includes("?"),bc("?","pathname","search",o)),Kn(!o.pathname||!o.pathname.includes("#"),bc("#","pathname","hash",o)),Kn(!o.search||!o.search.includes("#"),bc("#","search","hash",o)));let s=t===""||o.pathname==="",f=s?"/":o.pathname,m;if(f==null)m=a;else{let g=l.length-1;if(!u&&f.startsWith("..")){let b=f.split("/");for(;b[0]==="..";)b.shift(),g-=1;o.pathname=b.join("/")}m=g>=0?l[g]:"/"}let p=mx(o,m),h=f&&f!=="/"&&f.endsWith("/"),y=(s||f===".")&&a.endsWith("/");return!p.pathname.endsWith("/")&&(h||y)&&(p.pathname+="/"),p}var Qg=t=>t.replace(/\/\/+/g,"/"),dt=t=>Qg(t.join("/")),Tu=t=>t.replace(/\/+$/,""),px=t=>Tu(t).replace(/^\/*/,"/"),gx=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Ax=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,yx=class{constructor(t,l,a,u=!1){this.status=t,this.statusText=l||"",this.internal=u,a instanceof Error?(this.data=a.toString(),this.error=a):this.data=a}};function xx(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}function bx(t){let l=t.map(a=>a.route.path).filter(Boolean);return dt(l)||"/"}var Xg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Zg(t,l){let a=t;if(typeof a!="string"||!dx.test(a))return{absoluteURL:void 0,isExternal:!1,to:a};let u=a,o=!1;if(Xg)try{let s=new URL(window.location.href),f=a.startsWith("//")?new URL(s.protocol+a):new URL(a),m=Ut(f.pathname,l);f.origin===s.origin&&m!=null?a=m+f.search+f.hash:o=!0}catch{at(!1,`<Link to="${a}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:u,isExternal:o,to:a}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var $g=["POST","PUT","PATCH","DELETE"];new Set($g);var vx=["GET",...$g];new Set(vx);var Nl=N.createContext(null);Nl.displayName="DataRouter";var Pu=N.createContext(null);Pu.displayName="DataRouterState";var Kg=N.createContext(!1);function Dx(){return N.useContext(Kg)}var Jg=N.createContext({isTransitioning:!1});Jg.displayName="ViewTransition";var kx=N.createContext(new Map);kx.displayName="Fetchers";var Ix=N.createContext(null);Ix.displayName="Await";var Ve=N.createContext(null);Ve.displayName="Navigation";var Ya=N.createContext(null);Ya.displayName="Location";var ht=N.createContext({outlet:null,matches:[],isDataRoute:!1});ht.displayName="Route";var rf=N.createContext(null);rf.displayName="RouteError";var Wg="REACT_ROUTER_ERROR",Sx="REDIRECT",Ex="ROUTE_ERROR_RESPONSE";function Cx(t){if(t.startsWith(`${Wg}:${Sx}:{`))try{let l=JSON.parse(t.slice(28));if(typeof l=="object"&&l&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.location=="string"&&typeof l.reloadDocument=="boolean"&&typeof l.replace=="boolean")return l}catch{}}function wx(t){if(t.startsWith(`${Wg}:${Ex}:{`))try{let l=JSON.parse(t.slice(40));if(typeof l=="object"&&l&&typeof l.status=="number"&&typeof l.statusText=="string")return new yx(l.status,l.statusText,l.data)}catch{}}function _x(t,{relative:l}={}){Kn(Fl(),"useHref() may be used only in the context of a <Router> component.");let{basename:a,navigator:u}=N.useContext(Ve),{hash:o,pathname:s,search:f}=Xa(t,{relative:l}),m=s;return a!=="/"&&(m=s==="/"?a:dt([a,s])),u.createHref({pathname:m,search:f,hash:o})}function Fl(){return N.useContext(Ya)!=null}function it(){return Kn(Fl(),"useLocation() may be used only in the context of a <Router> component."),N.useContext(Ya).location}var n0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function e0(t){N.useContext(Ve).static||N.useLayoutEffect(t)}function Qa(){let{isDataRoute:t}=N.useContext(ht);return t?Ux():Rx()}function Rx(){Kn(Fl(),"useNavigate() may be used only in the context of a <Router> component.");let t=N.useContext(Nl),{basename:l,navigator:a}=N.useContext(Ve),{matches:u}=N.useContext(ht),{pathname:o}=it(),s=JSON.stringify(tf(u)),f=N.useRef(!1);return e0(()=>{f.current=!0}),N.useCallback((p,h={})=>{if(at(f.current,n0),!f.current)return;if(typeof p=="number"){a.go(p);return}let y=Lu(p,JSON.parse(s),o,h.relative==="path");t==null&&l!=="/"&&(y.pathname=y.pathname==="/"?l:dt([l,y.pathname])),(h.replace?a.replace:a.push)(y,h.state,h)},[l,a,s,o,t])}N.createContext(null);function zl(){let{matches:t}=N.useContext(ht);return t[t.length-1]?.params??{}}function Xa(t,{relative:l}={}){let{matches:a}=N.useContext(ht),{pathname:u}=it(),o=JSON.stringify(tf(a));return N.useMemo(()=>Lu(t,JSON.parse(o),u,l==="path"),[t,o,u,l])}function Tx(t,l){return t0(t,l)}function t0(t,l,a){Kn(Fl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=N.useContext(Ve),{matches:o}=N.useContext(ht),s=o[o.length-1],f=s?s.params:{},m=s?s.pathname:"/",p=s?s.pathnameBase:"/",h=s&&s.route;{let w=h&&h.path||"";l0(m,!h||w.endsWith("*")||w.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${w}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${w}"> to <Route path="${w==="/"?"*":`${w}/*`}">.`)}let y=it(),g;if(l){let w=typeof l=="string"?jl(l):l;Kn(p==="/"||w.pathname?.startsWith(p),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${w.pathname}" was given in the \`location\` prop.`),g=w}else g=y;let b=g.pathname||"/",v=b;if(p!=="/"){let w=p.replace(/^\//,"").split("/");v="/"+b.replace(/^\//,"").split("/").slice(w.length).join("/")}let I=a&&a.state.matches.length?a.state.matches.map(w=>Object.assign(w,{route:a.manifest[w.route.id]||w.route})):qg(t,{pathname:v});at(h||I!=null,`No routes matched location "${g.pathname}${g.search}${g.hash}" `),at(I==null||I[I.length-1].route.element!==void 0||I[I.length-1].route.Component!==void 0||I[I.length-1].route.lazy!==void 0,`Matched leaf route at location "${g.pathname}${g.search}${g.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let C=Mx(I&&I.map(w=>Object.assign({},w,{params:Object.assign({},f,w.params),pathname:dt([p,u.encodeLocation?u.encodeLocation(w.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?p:dt([p,u.encodeLocation?u.encodeLocation(w.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:w.pathnameBase])})),o,a);return l&&C?N.createElement(Ya.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...g},navigationType:"POP"}},C):C}function jx(){let t=Gx(),l=xx(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),a=t instanceof Error?t.stack:null,u="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:u},s={padding:"2px 4px",backgroundColor:u},f=null;return console.error("Error handled by React Router default ErrorBoundary:",t),f=N.createElement(N.Fragment,null,N.createElement("p",null,"💿 Hey developer 👋"),N.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",N.createElement("code",{style:s},"ErrorBoundary")," or"," ",N.createElement("code",{style:s},"errorElement")," prop on your route.")),N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},l),a?N.createElement("pre",{style:o},a):null,f)}var Nx=N.createElement(jx,null),r0=class extends N.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,l){return l.location!==t.location||l.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:l.error,location:l.location,revalidation:t.revalidation||l.revalidation}}componentDidCatch(t,l){this.props.onError?this.props.onError(t,l):console.error("React Router caught the following error during render",t)}render(){let t=this.state.error;if(this.context&&typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){const a=wx(t.digest);a&&(t=a)}let l=t!==void 0?N.createElement(ht.Provider,{value:this.props.routeContext},N.createElement(rf.Provider,{value:t,children:this.props.component})):this.props.children;return this.context?N.createElement(Fx,{error:t},l):l}};r0.contextType=Kg;var vc=new WeakMap;function Fx({children:t,error:l}){let{basename:a}=N.useContext(Ve);if(typeof l=="object"&&l&&"digest"in l&&typeof l.digest=="string"){let u=Cx(l.digest);if(u){let o=vc.get(l);if(o)throw o;let s=Zg(u.location,a);if(Xg&&!vc.get(l))if(s.isExternal||u.reloadDocument)window.location.href=s.absoluteURL||s.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(s.to,{replace:u.replace}));throw vc.set(l,f),f}return N.createElement("meta",{httpEquiv:"refresh",content:`0;url=${s.absoluteURL||s.to}`})}}return t}function zx({routeContext:t,match:l,children:a}){let u=N.useContext(Nl);return u&&u.static&&u.staticContext&&(l.route.errorElement||l.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=l.route.id),N.createElement(ht.Provider,{value:t},a)}function Mx(t,l=[],a){let u=a?.state;if(t==null){if(!u)return null;if(u.errors)t=u.matches;else if(l.length===0&&!u.initialized&&u.matches.length>0)t=u.matches;else return null}let o=t,s=u?.errors;if(s!=null){let y=o.findIndex(g=>g.route.id&&s?.[g.route.id]!==void 0);Kn(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),o=o.slice(0,Math.min(o.length,y+1))}let f=!1,m=-1;if(a&&u){f=u.renderFallback;for(let y=0;y<o.length;y++){let g=o[y];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(m=y),g.route.id){let{loaderData:b,errors:v}=u,I=g.route.loader&&!b.hasOwnProperty(g.route.id)&&(!v||v[g.route.id]===void 0);if(g.route.lazy||I){a.isStatic&&(f=!0),m>=0?o=o.slice(0,m+1):o=[o[0]];break}}}}let p=a?.onError,h=u&&p?(y,g)=>{p(y,{location:u.location,params:u.matches?.[0]?.params??{},pattern:bx(u.matches),errorInfo:g})}:void 0;return o.reduceRight((y,g,b)=>{let v,I=!1,C=null,w=null;u&&(v=s&&g.route.id?s[g.route.id]:void 0,C=g.route.errorElement||Nx,f&&(m<0&&b===0?(l0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),I=!0,w=null):m===b&&(I=!0,w=g.route.hydrateFallbackElement||null)));let R=l.concat(o.slice(0,b+1)),U=()=>{let L;return v?L=C:I?L=w:g.route.Component?L=N.createElement(g.route.Component,null):g.route.element?L=g.route.element:L=y,N.createElement(zx,{match:g,routeContext:{outlet:y,matches:R,isDataRoute:u!=null},children:L})};return u&&(g.route.ErrorBoundary||g.route.errorElement||b===0)?N.createElement(r0,{location:u.location,revalidation:u.revalidation,component:C,error:v,children:U(),routeContext:{outlet:null,matches:R,isDataRoute:!0},onError:h}):U()},null)}function lf(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Bx(t){let l=N.useContext(Nl);return Kn(l,lf(t)),l}function Ox(t){let l=N.useContext(Pu);return Kn(l,lf(t)),l}function Lx(t){let l=N.useContext(ht);return Kn(l,lf(t)),l}function af(t){let l=Lx(t),a=l.matches[l.matches.length-1];return Kn(a.route.id,`${t} can only be used on routes that contain a unique "id"`),a.route.id}function Px(){return af("useRouteId")}function Gx(){let t=N.useContext(rf),l=Ox("useRouteError"),a=af("useRouteError");return t!==void 0?t:l.errors?.[a]}function Ux(){let{router:t}=Bx("useNavigate"),l=af("useNavigate"),a=N.useRef(!1);return e0(()=>{a.current=!0}),N.useCallback(async(o,s={})=>{at(a.current,n0),a.current&&(typeof o=="number"?await t.navigate(o):await t.navigate(o,{fromRouteId:l,...s}))},[t,l])}var Hp={};function l0(t,l,a){!l&&!Hp[t]&&(Hp[t]=!0,at(!1,a))}N.memo(Hx);function Hx({routes:t,manifest:l,future:a,state:u,isStatic:o,onError:s}){return t0(t,void 0,{manifest:l,state:u,isStatic:o,onError:s})}function Gu({to:t,replace:l,state:a,relative:u}){Kn(Fl(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=N.useContext(Ve);at(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:s}=N.useContext(ht),{pathname:f}=it(),m=Qa(),p=Lu(t,tf(s),f,u==="path"),h=JSON.stringify(p);return N.useEffect(()=>{m(JSON.parse(h),{replace:l,state:a,relative:u})},[m,h,u,l,a]),null}function rt(t){Kn(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function qx({basename:t="/",children:l=null,location:a,navigationType:u="POP",navigator:o,static:s=!1,useTransitions:f}){Kn(!Fl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let m=t.replace(/^\/*/,"/"),p=N.useMemo(()=>({basename:m,navigator:o,static:s,useTransitions:f,future:{}}),[m,o,s,f]);typeof a=="string"&&(a=jl(a));let{pathname:h="/",search:y="",hash:g="",state:b=null,key:v="default",mask:I}=a,C=N.useMemo(()=>{let w=Ut(h,m);return w==null?null:{location:{pathname:w,search:y,hash:g,state:b,key:v,mask:I},navigationType:u}},[m,h,y,g,b,v,u,I]);return at(C!=null,`<Router basename="${m}"> is not able to match the URL "${h}${y}${g}" because it does not start with the basename, so the <Router> won't render anything.`),C==null?null:N.createElement(Ve.Provider,{value:p},N.createElement(Ya.Provider,{children:l,value:C}))}function Vx({children:t,location:l}){return Tx(Uc(t),l)}function Uc(t,l=[]){let a=[];return N.Children.forEach(t,(u,o)=>{if(!N.isValidElement(u))return;let s=[...l,o];if(u.type===N.Fragment){a.push.apply(a,Uc(u.props.children,s));return}Kn(u.type===rt,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Kn(!u.props.index||!u.props.children,"An index route cannot have child routes.");let f={id:u.props.id||s.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,middleware:u.props.middleware,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(f.children=Uc(u.props.children,s)),a.push(f)}),a}var Eu="get",Cu="application/x-www-form-urlencoded";function Uu(t){return typeof HTMLElement<"u"&&t instanceof HTMLElement}function Yx(t){return Uu(t)&&t.tagName.toLowerCase()==="button"}function Qx(t){return Uu(t)&&t.tagName.toLowerCase()==="form"}function Xx(t){return Uu(t)&&t.tagName.toLowerCase()==="input"}function Zx(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function $x(t,l){return t.button===0&&(!l||l==="_self")&&!Zx(t)}function Hc(t=""){return new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((l,a)=>{let u=t[a];return l.concat(Array.isArray(u)?u.map(o=>[a,o]):[[a,u]])},[]))}function Kx(t,l){let a=Hc(t);return l&&l.forEach((u,o)=>{a.has(o)||l.getAll(o).forEach(s=>{a.append(o,s)})}),a}var bu=null;function Jx(){if(bu===null)try{new FormData(document.createElement("form"),0),bu=!1}catch{bu=!0}return bu}var Wx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Dc(t){return t!=null&&!Wx.has(t)?(at(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Cu}"`),null):t}function nb(t,l){let a,u,o,s,f;if(Qx(t)){let m=t.getAttribute("action");u=m?Ut(m,l):null,a=t.getAttribute("method")||Eu,o=Dc(t.getAttribute("enctype"))||Cu,s=new FormData(t)}else if(Yx(t)||Xx(t)&&(t.type==="submit"||t.type==="image")){let m=t.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=t.getAttribute("formaction")||m.getAttribute("action");if(u=p?Ut(p,l):null,a=t.getAttribute("formmethod")||m.getAttribute("method")||Eu,o=Dc(t.getAttribute("formenctype"))||Dc(m.getAttribute("enctype"))||Cu,s=new FormData(m,t),!Jx()){let{name:h,type:y,value:g}=t;if(y==="image"){let b=h?`${h}.`:"";s.append(`${b}x`,"0"),s.append(`${b}y`,"0")}else h&&s.append(h,g)}}else{if(Uu(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');a=Eu,u=null,o=Cu,f=t}return s&&o==="text/plain"&&(f=s,s=void 0),{action:u,method:a.toLowerCase(),encType:o,formData:s,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function uf(t,l){if(t===!1||t===null||typeof t>"u")throw new Error(l)}function a0(t,l,a,u){let o=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return a?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${u}`:o.pathname=`${o.pathname}.${u}`:o.pathname==="/"?o.pathname=`_root.${u}`:l&&Ut(o.pathname,l)==="/"?o.pathname=`${Tu(l)}/_root.${u}`:o.pathname=`${Tu(o.pathname)}.${u}`,o}async function eb(t,l){if(t.id in l)return l[t.id];try{let a=await import(t.module);return l[t.id]=a,a}catch(a){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(a),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function tb(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function rb(t,l,a){let u=await Promise.all(t.map(async o=>{let s=l.routes[o.route.id];if(s){let f=await eb(s,a);return f.links?f.links():[]}return[]}));return ub(u.flat(1).filter(tb).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function qp(t,l,a,u,o,s){let f=(p,h)=>a[h]?p.route.id!==a[h].route.id:!0,m=(p,h)=>a[h].pathname!==p.pathname||a[h].route.path?.endsWith("*")&&a[h].params["*"]!==p.params["*"];return s==="assets"?l.filter((p,h)=>f(p,h)||m(p,h)):s==="data"?l.filter((p,h)=>{let y=u.routes[p.route.id];if(!y||!y.hasLoader)return!1;if(f(p,h)||m(p,h))return!0;if(p.route.shouldRevalidate){let g=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:a[0]?.params||{},nextUrl:new URL(t,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function lb(t,l,{includeHydrateFallback:a}={}){return ab(t.map(u=>{let o=l.routes[u.route.id];if(!o)return[];let s=[o.module];return o.clientActionModule&&(s=s.concat(o.clientActionModule)),o.clientLoaderModule&&(s=s.concat(o.clientLoaderModule)),a&&o.hydrateFallbackModule&&(s=s.concat(o.hydrateFallbackModule)),o.imports&&(s=s.concat(o.imports)),s}).flat(1))}function ab(t){return[...new Set(t)]}function ib(t){let l={},a=Object.keys(t).sort();for(let u of a)l[u]=t[u];return l}function ub(t,l){let a=new Set;return new Set(l),t.reduce((u,o)=>{let s=JSON.stringify(ib(o));return a.has(s)||(a.add(s),u.push({key:s,link:o})),u},[])}function of(){let t=N.useContext(Nl);return uf(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function ob(){let t=N.useContext(Pu);return uf(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var sf=N.createContext(void 0);sf.displayName="FrameworkContext";function cf(){let t=N.useContext(sf);return uf(t,"You must render this element inside a <HydratedRouter> element"),t}function sb(t,l){let a=N.useContext(sf),[u,o]=N.useState(!1),[s,f]=N.useState(!1),{onFocus:m,onBlur:p,onMouseEnter:h,onMouseLeave:y,onTouchStart:g}=l,b=N.useRef(null);N.useEffect(()=>{if(t==="render"&&f(!0),t==="viewport"){let C=R=>{R.forEach(U=>{f(U.isIntersecting)})},w=new IntersectionObserver(C,{threshold:.5});return b.current&&w.observe(b.current),()=>{w.disconnect()}}},[t]),N.useEffect(()=>{if(u){let C=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(C)}}},[u]);let v=()=>{o(!0)},I=()=>{o(!1),f(!1)};return a?t!=="intent"?[s,b,{}]:[s,b,{onFocus:Na(m,v),onBlur:Na(p,I),onMouseEnter:Na(h,v),onMouseLeave:Na(y,I),onTouchStart:Na(g,v)}]:[!1,b,{}]}function Na(t,l){return a=>{t&&t(a),a.defaultPrevented||l(a)}}function cb({page:t,...l}){let a=Dx(),{router:u}=of(),o=N.useMemo(()=>qg(u.routes,t,u.basename),[u.routes,t,u.basename]);return o?a?N.createElement(db,{page:t,matches:o,...l}):N.createElement(mb,{page:t,matches:o,...l}):null}function fb(t){let{manifest:l,routeModules:a}=cf(),[u,o]=N.useState([]);return N.useEffect(()=>{let s=!1;return rb(t,l,a).then(f=>{s||o(f)}),()=>{s=!0}},[t,l,a]),u}function db({page:t,matches:l,...a}){let u=it(),{future:o}=cf(),{basename:s}=of(),f=N.useMemo(()=>{if(t===u.pathname+u.search+u.hash)return[];let m=a0(t,s,o.unstable_trailingSlashAwareDataRequests,"rsc"),p=!1,h=[];for(let y of l)typeof y.route.shouldRevalidate=="function"?p=!0:h.push(y.route.id);return p&&h.length>0&&m.searchParams.set("_routes",h.join(",")),[m.pathname+m.search]},[s,o.unstable_trailingSlashAwareDataRequests,t,u,l]);return N.createElement(N.Fragment,null,f.map(m=>N.createElement("link",{key:m,rel:"prefetch",as:"fetch",href:m,...a})))}function mb({page:t,matches:l,...a}){let u=it(),{future:o,manifest:s,routeModules:f}=cf(),{basename:m}=of(),{loaderData:p,matches:h}=ob(),y=N.useMemo(()=>qp(t,l,h,s,u,"data"),[t,l,h,s,u]),g=N.useMemo(()=>qp(t,l,h,s,u,"assets"),[t,l,h,s,u]),b=N.useMemo(()=>{if(t===u.pathname+u.search+u.hash)return[];let C=new Set,w=!1;if(l.forEach(U=>{let L=s.routes[U.route.id];!L||!L.hasLoader||(!y.some(en=>en.route.id===U.route.id)&&U.route.id in p&&f[U.route.id]?.shouldRevalidate||L.hasClientLoader?w=!0:C.add(U.route.id))}),C.size===0)return[];let R=a0(t,m,o.unstable_trailingSlashAwareDataRequests,"data");return w&&C.size>0&&R.searchParams.set("_routes",l.filter(U=>C.has(U.route.id)).map(U=>U.route.id).join(",")),[R.pathname+R.search]},[m,o.unstable_trailingSlashAwareDataRequests,p,u,s,y,l,t,f]),v=N.useMemo(()=>lb(g,s),[g,s]),I=fb(g);return N.createElement(N.Fragment,null,b.map(C=>N.createElement("link",{key:C,rel:"prefetch",as:"fetch",href:C,...a})),v.map(C=>N.createElement("link",{key:C,rel:"modulepreload",href:C,...a})),I.map(({key:C,link:w})=>N.createElement("link",{key:C,nonce:a.nonce,...w,crossOrigin:w.crossOrigin??a.crossOrigin})))}function hb(...t){return l=>{t.forEach(a=>{typeof a=="function"?a(l):a!=null&&(a.current=l)})}}var pb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{pb&&(window.__reactRouterVersion="7.15.1")}catch{}function gb({basename:t,children:l,useTransitions:a,window:u}){let o=N.useRef();o.current==null&&(o.current=Xy({window:u,v5Compat:!0}));let s=o.current,[f,m]=N.useState({action:s.action,location:s.location}),p=N.useCallback(h=>{a===!1?m(h):N.startTransition(()=>m(h))},[a]);return N.useLayoutEffect(()=>s.listen(p),[s,p]),N.createElement(qx,{basename:t,children:l,location:f.location,navigationType:f.action,navigator:s,useTransitions:a})}var i0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fe=N.forwardRef(function({onClick:l,discover:a="render",prefetch:u="none",relative:o,reloadDocument:s,replace:f,mask:m,state:p,target:h,to:y,preventScrollReset:g,viewTransition:b,defaultShouldRevalidate:v,...I},C){let{basename:w,navigator:R,useTransitions:U}=N.useContext(Ve),L=typeof y=="string"&&i0.test(y),en=Zg(y,w);y=en.to;let rn=_x(y,{relative:o}),G=it(),J=null;if(m){let Z=Lu(m,[],G.mask?G.mask.pathname:"/",!0);w!=="/"&&(Z.pathname=Z.pathname==="/"?w:dt([w,Z.pathname])),J=R.createHref(Z)}let[fn,pn,O]=sb(u,I),tn=bb(y,{replace:f,mask:m,state:p,target:h,preventScrollReset:g,relative:o,viewTransition:b,defaultShouldRevalidate:v,useTransitions:U});function nn(Z){l&&l(Z),Z.defaultPrevented||tn(Z)}let vn=!(en.isExternal||s),an=N.createElement("a",{...I,...O,href:(vn?J:void 0)||en.absoluteURL||rn,onClick:vn?nn:l,ref:hb(C,pn),target:h,"data-discover":!L&&a==="render"?"true":void 0});return fn&&!L?N.createElement(N.Fragment,null,an,N.createElement(cb,{page:rn})):an});fe.displayName="Link";var Ab=N.forwardRef(function({"aria-current":l="page",caseSensitive:a=!1,className:u="",end:o=!1,style:s,to:f,viewTransition:m,children:p,...h},y){let g=Xa(f,{relative:h.relative}),b=it(),v=N.useContext(Pu),{navigator:I,basename:C}=N.useContext(Ve),w=v!=null&&Eb(g)&&m===!0,R=I.encodeLocation?I.encodeLocation(g).pathname:g.pathname,U=b.pathname,L=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;a||(U=U.toLowerCase(),L=L?L.toLowerCase():null,R=R.toLowerCase()),L&&C&&(L=Ut(L,C)||L);const en=R!=="/"&&R.endsWith("/")?R.length-1:R.length;let rn=U===R||!o&&U.startsWith(R)&&U.charAt(en)==="/",G=L!=null&&(L===R||!o&&L.startsWith(R)&&L.charAt(R.length)==="/"),J={isActive:rn,isPending:G,isTransitioning:w},fn=rn?l:void 0,pn;typeof u=="function"?pn=u(J):pn=[u,rn?"active":null,G?"pending":null,w?"transitioning":null].filter(Boolean).join(" ");let O=typeof s=="function"?s(J):s;return N.createElement(fe,{...h,"aria-current":fn,className:pn,ref:y,style:O,to:f,viewTransition:m},typeof p=="function"?p(J):p)});Ab.displayName="NavLink";var yb=N.forwardRef(({discover:t="render",fetcherKey:l,navigate:a,reloadDocument:u,replace:o,state:s,method:f=Eu,action:m,onSubmit:p,relative:h,preventScrollReset:y,viewTransition:g,defaultShouldRevalidate:b,...v},I)=>{let{useTransitions:C}=N.useContext(Ve),w=Ib(),R=Sb(m,{relative:h}),U=f.toLowerCase()==="get"?"get":"post",L=typeof m=="string"&&i0.test(m),en=rn=>{if(p&&p(rn),rn.defaultPrevented)return;rn.preventDefault();let G=rn.nativeEvent.submitter,J=G?.getAttribute("formmethod")||f,fn=()=>w(G||rn.currentTarget,{fetcherKey:l,method:J,navigate:a,replace:o,state:s,relative:h,preventScrollReset:y,viewTransition:g,defaultShouldRevalidate:b});C&&a!==!1?N.startTransition(()=>fn()):fn()};return N.createElement("form",{ref:I,method:U,action:R,onSubmit:u?p:en,...v,"data-discover":!L&&t==="render"?"true":void 0})});yb.displayName="Form";function xb(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function u0(t){let l=N.useContext(Nl);return Kn(l,xb(t)),l}function bb(t,{target:l,replace:a,mask:u,state:o,preventScrollReset:s,relative:f,viewTransition:m,defaultShouldRevalidate:p,useTransitions:h}={}){let y=Qa(),g=it(),b=Xa(t,{relative:f});return N.useCallback(v=>{if($x(v,l)){v.preventDefault();let I=a!==void 0?a:Ua(g)===Ua(b),C=()=>y(t,{replace:I,mask:u,state:o,preventScrollReset:s,relative:f,viewTransition:m,defaultShouldRevalidate:p});h?N.startTransition(()=>C()):C()}},[g,y,b,a,u,o,l,t,s,f,m,p,h])}function vb(t){at(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let l=N.useRef(Hc(t)),a=N.useRef(!1),u=it(),o=N.useMemo(()=>Kx(u.search,a.current?null:l.current),[u.search]),s=Qa(),f=N.useCallback((m,p)=>{const h=Hc(typeof m=="function"?m(new URLSearchParams(o)):m);a.current=!0,s("?"+h,p)},[s,o]);return[o,f]}var Db=0,kb=()=>`__${String(++Db)}__`;function Ib(){let{router:t}=u0("useSubmit"),{basename:l}=N.useContext(Ve),a=Px(),u=t.fetch,o=t.navigate;return N.useCallback(async(s,f={})=>{let{action:m,method:p,encType:h,formData:y,body:g}=nb(s,l);if(f.navigate===!1){let b=f.fetcherKey||kb();await u(b,a,f.action||m,{defaultShouldRevalidate:f.defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:y,body:g,formMethod:f.method||p,formEncType:f.encType||h,flushSync:f.flushSync})}else await o(f.action||m,{defaultShouldRevalidate:f.defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:y,body:g,formMethod:f.method||p,formEncType:f.encType||h,replace:f.replace,state:f.state,fromRouteId:a,flushSync:f.flushSync,viewTransition:f.viewTransition})},[u,o,l,a])}function Sb(t,{relative:l}={}){let{basename:a}=N.useContext(Ve),u=N.useContext(ht);Kn(u,"useFormAction must be used inside a RouteContext");let[o]=u.matches.slice(-1),s={...Xa(t||".",{relative:l})},f=it();if(t==null){s.search=f.search;let m=new URLSearchParams(s.search),p=m.getAll("index");if(p.some(y=>y==="")){m.delete("index"),p.filter(g=>g).forEach(g=>m.append("index",g));let y=m.toString();s.search=y?`?${y}`:""}}return(!t||t===".")&&o.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),a!=="/"&&(s.pathname=s.pathname==="/"?a:dt([a,s.pathname])),Ua(s)}function Eb(t,{relative:l}={}){let a=N.useContext(Jg);Kn(a!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=u0("useViewTransitionState"),o=Xa(t,{relative:l});if(!a.isTransitioning)return!1;let s=Ut(a.currentLocation.pathname,u)||a.currentLocation.pathname,f=Ut(a.nextLocation.pathname,u)||a.nextLocation.pathname;return Ru(o.pathname,f)!=null||Ru(o.pathname,s)!=null}const Cb=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),o0=(...t)=>t.filter((l,a,u)=>!!l&&l.trim()!==""&&u.indexOf(l)===a).join(" ").trim();var wb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const _b=N.forwardRef(({color:t="currentColor",size:l=24,strokeWidth:a=2,absoluteStrokeWidth:u,className:o="",children:s,iconNode:f,...m},p)=>N.createElement("svg",{ref:p,...wb,width:l,height:l,stroke:t,strokeWidth:u?Number(a)*24/Number(l):a,className:o0("lucide",o),...m},[...f.map(([h,y])=>N.createElement(h,y)),...Array.isArray(s)?s:[s]]));const jn=(t,l)=>{const a=N.forwardRef(({className:u,...o},s)=>N.createElement(_b,{ref:s,iconNode:l,className:o0(`lucide-${Cb(t)}`,u),...o}));return a.displayName=`${t}`,a};const Rb=jn("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);const Tb=jn("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);const Hu=jn("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);const jb=jn("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);const s0=jn("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);const Nb=jn("Boxes",[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]]);const Fb=jn("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);const zb=jn("BriefcaseBusiness",[["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",key:"1ksdt3"}],["path",{d:"M22 13a18.15 18.15 0 0 1-20 0",key:"12hx5q"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);const Mb=jn("CalendarCheck2",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"bce9hv"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m16 20 2 2 4-4",key:"13tcca"}]]);const Bb=jn("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);const c0=jn("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);const f0=jn("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);const Ob=jn("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);const Lb=jn("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);const Pb=jn("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);const Gb=jn("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);const Ub=jn("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);const Hb=jn("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);const qb=jn("FileCheck2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m3 15 2 2 4-4",key:"1lhrkk"}]]);const Vb=jn("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);const Yb=jn("Map",[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]);const d0=jn("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);const Qb=jn("MessageSquareText",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M13 8H7",key:"14i4kc"}],["path",{d:"M17 12H7",key:"16if0g"}]]);const Vp=jn("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);const Xb=jn("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);const Zb=jn("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);const ff=jn("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);const df=jn("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);const $b=jn("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);const Yp=jn("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);const Kb=jn("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);const Jb=jn("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);const Wb=jn("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);const m0=jn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function nv(){return A.jsx("footer",{className:"border-t border-slate-200 bg-slate-950 py-10 text-white dark:border-white/10",children:A.jsxs("div",{className:"container-page flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",children:[A.jsxs("div",{className:"flex items-center gap-3",children:[A.jsx("span",{className:"grid h-9 w-9 place-items-center rounded-lg bg-white text-slate-950",children:A.jsx(df,{size:18})}),A.jsxs("div",{children:[A.jsx("p",{className:"text-sm font-semibold",children:"AI 产品经理成长路线图"}),A.jsx("p",{className:"mt-1 text-xs text-slate-400",children:"从学习路径到作品集的成长型学习系统"})]})]}),A.jsx("p",{className:"text-xs text-slate-400",children:"MVP 本地版，学习进度保存在浏览器 localStorage。"})]})})}const Qp=[["首页","/"],["学习路线","/learn"],["能力地图","/#skill-map"],["实战项目","/#projects"],["工具库","/#tools"],["作品集指南","/#portfolio"],["面试题库","/#interview"]];function ev({darkMode:t,onToggleTheme:l}){const[a,u]=N.useState(!1),o=Qa(),s=it(),f=m=>{const[p,h]=m.split("#");p&&p!==s.pathname?(o(m),setTimeout(()=>h&&document.getElementById(h)?.scrollIntoView({behavior:"smooth"}),80)):h?document.getElementById(h)?.scrollIntoView({behavior:"smooth"}):o(m),u(!1)};return A.jsxs("header",{className:"fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/75",children:[A.jsxs("div",{className:"container-page flex h-16 items-center justify-between",children:[A.jsxs(fe,{to:"/",className:"flex items-center gap-2 text-left focus-ring",children:[A.jsx("span",{className:"grid h-9 w-9 place-items-center rounded-lg bg-slate-950 text-white dark:bg-white dark:text-slate-950",children:A.jsx(df,{size:18})}),A.jsxs("span",{children:[A.jsx("span",{className:"block text-sm font-semibold text-slate-950 dark:text-white",children:"AI 产品经理"}),A.jsx("span",{className:"block text-xs text-slate-500 dark:text-slate-400",children:"成长路线图"})]})]}),A.jsx("nav",{className:"hidden items-center gap-1 lg:flex",children:Qp.map(([m,p])=>A.jsx("button",{onClick:()=>f(p),className:"rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 focus-ring dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white",children:m},p))}),A.jsxs("div",{className:"hidden items-center gap-2 lg:flex",children:[A.jsx("button",{onClick:l,className:"grid h-10 w-10 place-items-center rounded-lg border border-slate-200 bg-white text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-lg focus-ring dark:border-white/10 dark:bg-white/5 dark:text-slate-200","aria-label":"切换深浅色模式",children:t?A.jsx(Yp,{size:18}):A.jsx(Vp,{size:18})}),A.jsx("button",{onClick:()=>o("/learn"),className:"rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg focus-ring dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-100",children:"开始学习"})]}),A.jsx("button",{className:"grid h-10 w-10 place-items-center rounded-lg border border-slate-200 bg-white text-slate-800 lg:hidden dark:border-white/10 dark:bg-white/5 dark:text-white",onClick:()=>u(m=>!m),"aria-label":"打开导航",children:a?A.jsx(m0,{size:20}):A.jsx(d0,{size:20})})]}),a&&A.jsx("div",{className:"border-t border-slate-200 bg-white px-4 py-3 shadow-xl lg:hidden dark:border-white/10 dark:bg-slate-950",children:A.jsxs("div",{className:"grid gap-1",children:[Qp.map(([m,p])=>A.jsx("button",{onClick:()=>f(p),className:"rounded-lg px-3 py-3 text-left text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10",children:m},p)),A.jsxs("div",{className:"mt-2 flex gap-2",children:[A.jsxs("button",{onClick:l,className:"flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 py-3 text-sm dark:border-white/10",children:[t?A.jsx(Yp,{size:17}):A.jsx(Vp,{size:17}),"主题"]}),A.jsx("button",{onClick:()=>o("/learn"),className:"flex-1 rounded-lg bg-slate-950 py-3 text-sm font-medium text-white dark:bg-white dark:text-slate-950",children:"开始学习"})]})]})})]})}function tv(t,l){const a={};return(t[t.length-1]===""?[...t,""]:t).join((a.padRight?" ":"")+","+(a.padLeft===!1?"":" ")).trim()}const rv=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,lv=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,av={};function Xp(t,l){return(av.jsx?lv:rv).test(t)}const iv=/[ \t\n\f\r]/g;function uv(t){return typeof t=="object"?t.type==="text"?Zp(t.value):!1:Zp(t)}function Zp(t){return t.replace(iv,"")===""}class Za{constructor(l,a,u){this.normal=a,this.property=l,u&&(this.space=u)}}Za.prototype.normal={};Za.prototype.property={};Za.prototype.space=void 0;function h0(t,l){const a={},u={};for(const o of t)Object.assign(a,o.property),Object.assign(u,o.normal);return new Za(a,u,l)}function qc(t){return t.toLowerCase()}let Fe=class{constructor(l,a){this.attribute=a,this.property=l}};Fe.prototype.attribute="";Fe.prototype.booleanish=!1;Fe.prototype.boolean=!1;Fe.prototype.commaOrSpaceSeparated=!1;Fe.prototype.commaSeparated=!1;Fe.prototype.defined=!1;Fe.prototype.mustUseProperty=!1;Fe.prototype.number=!1;Fe.prototype.overloadedBoolean=!1;Fe.prototype.property="";Fe.prototype.spaceSeparated=!1;Fe.prototype.space=void 0;let ov=0;const bn=Br(),ie=Br(),Vc=Br(),$=Br(),Yn=Br(),Rl=Br(),He=Br();function Br(){return 2**++ov}const Yc=Object.freeze(Object.defineProperty({__proto__:null,boolean:bn,booleanish:ie,commaOrSpaceSeparated:He,commaSeparated:Rl,number:$,overloadedBoolean:Vc,spaceSeparated:Yn},Symbol.toStringTag,{value:"Module"})),kc=Object.keys(Yc);class mf extends Fe{constructor(l,a,u,o){let s=-1;if(super(l,a),$p(this,"space",o),typeof u=="number")for(;++s<kc.length;){const f=kc[s];$p(this,kc[s],(u&Yc[f])===Yc[f])}}}mf.prototype.defined=!0;function $p(t,l,a){a&&(t[l]=a)}function Ml(t){const l={},a={};for(const[u,o]of Object.entries(t.properties)){const s=new mf(u,t.transform(t.attributes||{},u),o,t.space);t.mustUseProperty&&t.mustUseProperty.includes(u)&&(s.mustUseProperty=!0),l[u]=s,a[qc(u)]=u,a[qc(s.attribute)]=u}return new Za(l,a,t.space)}const p0=Ml({properties:{ariaActiveDescendant:null,ariaAtomic:ie,ariaAutoComplete:null,ariaBusy:ie,ariaChecked:ie,ariaColCount:$,ariaColIndex:$,ariaColSpan:$,ariaControls:Yn,ariaCurrent:null,ariaDescribedBy:Yn,ariaDetails:null,ariaDisabled:ie,ariaDropEffect:Yn,ariaErrorMessage:null,ariaExpanded:ie,ariaFlowTo:Yn,ariaGrabbed:ie,ariaHasPopup:null,ariaHidden:ie,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Yn,ariaLevel:$,ariaLive:null,ariaModal:ie,ariaMultiLine:ie,ariaMultiSelectable:ie,ariaOrientation:null,ariaOwns:Yn,ariaPlaceholder:null,ariaPosInSet:$,ariaPressed:ie,ariaReadOnly:ie,ariaRelevant:null,ariaRequired:ie,ariaRoleDescription:Yn,ariaRowCount:$,ariaRowIndex:$,ariaRowSpan:$,ariaSelected:ie,ariaSetSize:$,ariaSort:null,ariaValueMax:$,ariaValueMin:$,ariaValueNow:$,ariaValueText:null,role:null},transform(t,l){return l==="role"?l:"aria-"+l.slice(4).toLowerCase()}});function g0(t,l){return l in t?t[l]:l}function A0(t,l){return g0(t,l.toLowerCase())}const sv=Ml({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Rl,acceptCharset:Yn,accessKey:Yn,action:null,allow:null,allowFullScreen:bn,allowPaymentRequest:bn,allowUserMedia:bn,alt:null,as:null,async:bn,autoCapitalize:null,autoComplete:Yn,autoFocus:bn,autoPlay:bn,blocking:Yn,capture:null,charSet:null,checked:bn,cite:null,className:Yn,cols:$,colSpan:null,content:null,contentEditable:ie,controls:bn,controlsList:Yn,coords:$|Rl,crossOrigin:null,data:null,dateTime:null,decoding:null,default:bn,defer:bn,dir:null,dirName:null,disabled:bn,download:Vc,draggable:ie,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:bn,formTarget:null,headers:Yn,height:$,hidden:Vc,high:$,href:null,hrefLang:null,htmlFor:Yn,httpEquiv:Yn,id:null,imageSizes:null,imageSrcSet:null,inert:bn,inputMode:null,integrity:null,is:null,isMap:bn,itemId:null,itemProp:Yn,itemRef:Yn,itemScope:bn,itemType:Yn,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:bn,low:$,manifest:null,max:null,maxLength:$,media:null,method:null,min:null,minLength:$,multiple:bn,muted:bn,name:null,nonce:null,noModule:bn,noValidate:bn,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:bn,optimum:$,pattern:null,ping:Yn,placeholder:null,playsInline:bn,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:bn,referrerPolicy:null,rel:Yn,required:bn,reversed:bn,rows:$,rowSpan:$,sandbox:Yn,scope:null,scoped:bn,seamless:bn,selected:bn,shadowRootClonable:bn,shadowRootDelegatesFocus:bn,shadowRootMode:null,shape:null,size:$,sizes:null,slot:null,span:$,spellCheck:ie,src:null,srcDoc:null,srcLang:null,srcSet:null,start:$,step:null,style:null,tabIndex:$,target:null,title:null,translate:null,type:null,typeMustMatch:bn,useMap:null,value:ie,width:$,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Yn,axis:null,background:null,bgColor:null,border:$,borderColor:null,bottomMargin:$,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:bn,declare:bn,event:null,face:null,frame:null,frameBorder:null,hSpace:$,leftMargin:$,link:null,longDesc:null,lowSrc:null,marginHeight:$,marginWidth:$,noResize:bn,noHref:bn,noShade:bn,noWrap:bn,object:null,profile:null,prompt:null,rev:null,rightMargin:$,rules:null,scheme:null,scrolling:ie,standby:null,summary:null,text:null,topMargin:$,valueType:null,version:null,vAlign:null,vLink:null,vSpace:$,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:bn,disableRemotePlayback:bn,prefix:null,property:null,results:$,security:null,unselectable:null},space:"html",transform:A0}),cv=Ml({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:He,accentHeight:$,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:$,amplitude:$,arabicForm:null,ascent:$,attributeName:null,attributeType:null,azimuth:$,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:$,by:null,calcMode:null,capHeight:$,className:Yn,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:$,diffuseConstant:$,direction:null,display:null,dur:null,divisor:$,dominantBaseline:null,download:bn,dx:null,dy:null,edgeMode:null,editable:null,elevation:$,enableBackground:null,end:null,event:null,exponent:$,externalResourcesRequired:null,fill:null,fillOpacity:$,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Rl,g2:Rl,glyphName:Rl,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:$,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:$,horizOriginX:$,horizOriginY:$,id:null,ideographic:$,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:$,k:$,k1:$,k2:$,k3:$,k4:$,kernelMatrix:He,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:$,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:$,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:$,overlineThickness:$,paintOrder:null,panose1:null,path:null,pathLength:$,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Yn,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:$,pointsAtY:$,pointsAtZ:$,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:He,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:He,rev:He,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:He,requiredFeatures:He,requiredFonts:He,requiredFormats:He,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:$,specularExponent:$,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:$,strikethroughThickness:$,string:null,stroke:null,strokeDashArray:He,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:$,strokeOpacity:$,strokeWidth:null,style:null,surfaceScale:$,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:He,tabIndex:$,tableValues:null,target:null,targetX:$,targetY:$,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:He,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:$,underlineThickness:$,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:$,values:null,vAlphabetic:$,vMathematical:$,vectorEffect:null,vHanging:$,vIdeographic:$,version:null,vertAdvY:$,vertOriginX:$,vertOriginY:$,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:$,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:g0}),y0=Ml({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(t,l){return"xlink:"+l.slice(5).toLowerCase()}}),x0=Ml({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:A0}),b0=Ml({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(t,l){return"xml:"+l.slice(3).toLowerCase()}}),fv={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},dv=/[A-Z]/g,Kp=/-[a-z]/g,mv=/^data[-\w.:]+$/i;function hv(t,l){const a=qc(l);let u=l,o=Fe;if(a in t.normal)return t.property[t.normal[a]];if(a.length>4&&a.slice(0,4)==="data"&&mv.test(l)){if(l.charAt(4)==="-"){const s=l.slice(5).replace(Kp,gv);u="data"+s.charAt(0).toUpperCase()+s.slice(1)}else{const s=l.slice(4);if(!Kp.test(s)){let f=s.replace(dv,pv);f.charAt(0)!=="-"&&(f="-"+f),l="data"+f}}o=mf}return new o(u,l)}function pv(t){return"-"+t.toLowerCase()}function gv(t){return t.charAt(1).toUpperCase()}const Av=h0([p0,sv,y0,x0,b0],"html"),hf=h0([p0,cv,y0,x0,b0],"svg");function yv(t){return t.join(" ").trim()}var El={},Ic,Jp;function xv(){if(Jp)return Ic;Jp=1;var t=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,l=/\n/g,a=/^\s*/,u=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,o=/^:\s*/,s=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,f=/^[;\s]*/,m=/^\s+|\s+$/g,p=`
`,h="/",y="*",g="",b="comment",v="declaration";function I(w,R){if(typeof w!="string")throw new TypeError("First argument must be a string");if(!w)return[];R=R||{};var U=1,L=1;function en(an){var Z=an.match(l);Z&&(U+=Z.length);var B=an.lastIndexOf(p);L=~B?an.length-B:L+an.length}function rn(){var an={line:U,column:L};return function(Z){return Z.position=new G(an),pn(),Z}}function G(an){this.start=an,this.end={line:U,column:L},this.source=R.source}G.prototype.content=w;function J(an){var Z=new Error(R.source+":"+U+":"+L+": "+an);if(Z.reason=an,Z.filename=R.source,Z.line=U,Z.column=L,Z.source=w,!R.silent)throw Z}function fn(an){var Z=an.exec(w);if(Z){var B=Z[0];return en(B),w=w.slice(B.length),Z}}function pn(){fn(a)}function O(an){var Z;for(an=an||[];Z=tn();)Z!==!1&&an.push(Z);return an}function tn(){var an=rn();if(!(h!=w.charAt(0)||y!=w.charAt(1))){for(var Z=2;g!=w.charAt(Z)&&(y!=w.charAt(Z)||h!=w.charAt(Z+1));)++Z;if(Z+=2,g===w.charAt(Z-1))return J("End of comment missing");var B=w.slice(2,Z-2);return L+=2,en(B),w=w.slice(Z),L+=2,an({type:b,comment:B})}}function nn(){var an=rn(),Z=fn(u);if(Z){if(tn(),!fn(o))return J("property missing ':'");var B=fn(s),X=an({type:v,property:C(Z[0].replace(t,g)),value:B?C(B[0].replace(t,g)):g});return fn(f),X}}function vn(){var an=[];O(an);for(var Z;Z=nn();)Z!==!1&&(an.push(Z),O(an));return an}return pn(),vn()}function C(w){return w?w.replace(m,g):g}return Ic=I,Ic}var Wp;function bv(){if(Wp)return El;Wp=1;var t=El&&El.__importDefault||function(u){return u&&u.__esModule?u:{default:u}};Object.defineProperty(El,"__esModule",{value:!0}),El.default=a;const l=t(xv());function a(u,o){let s=null;if(!u||typeof u!="string")return s;const f=(0,l.default)(u),m=typeof o=="function";return f.forEach(p=>{if(p.type!=="declaration")return;const{property:h,value:y}=p;m?o(h,y,p):y&&(s=s||{},s[h]=y)}),s}return El}var Fa={},ng;function vv(){if(ng)return Fa;ng=1,Object.defineProperty(Fa,"__esModule",{value:!0}),Fa.camelCase=void 0;var t=/^--[a-zA-Z0-9_-]+$/,l=/-([a-z])/g,a=/^[^-]+$/,u=/^-(webkit|moz|ms|o|khtml)-/,o=/^-(ms)-/,s=function(h){return!h||a.test(h)||t.test(h)},f=function(h,y){return y.toUpperCase()},m=function(h,y){return"".concat(y,"-")},p=function(h,y){return y===void 0&&(y={}),s(h)?h:(h=h.toLowerCase(),y.reactCompat?h=h.replace(o,m):h=h.replace(u,m),h.replace(l,f))};return Fa.camelCase=p,Fa}var za,eg;function Dv(){if(eg)return za;eg=1;var t=za&&za.__importDefault||function(o){return o&&o.__esModule?o:{default:o}},l=t(bv()),a=vv();function u(o,s){var f={};return!o||typeof o!="string"||(0,l.default)(o,function(m,p){m&&p&&(f[(0,a.camelCase)(m,s)]=p)}),f}return u.default=u,za=u,za}var kv=Dv();const Iv=Ou(kv),v0=D0("end"),pf=D0("start");function D0(t){return l;function l(a){const u=a&&a.position&&a.position[t]||{};if(typeof u.line=="number"&&u.line>0&&typeof u.column=="number"&&u.column>0)return{line:u.line,column:u.column,offset:typeof u.offset=="number"&&u.offset>-1?u.offset:void 0}}}function Sv(t){const l=pf(t),a=v0(t);if(l&&a)return{start:l,end:a}}function La(t){return!t||typeof t!="object"?"":"position"in t||"type"in t?tg(t.position):"start"in t||"end"in t?tg(t):"line"in t||"column"in t?Qc(t):""}function Qc(t){return rg(t&&t.line)+":"+rg(t&&t.column)}function tg(t){return Qc(t&&t.start)+"-"+Qc(t&&t.end)}function rg(t){return t&&typeof t=="number"?t:1}class xe extends Error{constructor(l,a,u){super(),typeof a=="string"&&(u=a,a=void 0);let o="",s={},f=!1;if(a&&("line"in a&&"column"in a?s={place:a}:"start"in a&&"end"in a?s={place:a}:"type"in a?s={ancestors:[a],place:a.position}:s={...a}),typeof l=="string"?o=l:!s.cause&&l&&(f=!0,o=l.message,s.cause=l),!s.ruleId&&!s.source&&typeof u=="string"){const p=u.indexOf(":");p===-1?s.ruleId=u:(s.source=u.slice(0,p),s.ruleId=u.slice(p+1))}if(!s.place&&s.ancestors&&s.ancestors){const p=s.ancestors[s.ancestors.length-1];p&&(s.place=p.position)}const m=s.place&&"start"in s.place?s.place.start:s.place;this.ancestors=s.ancestors||void 0,this.cause=s.cause||void 0,this.column=m?m.column:void 0,this.fatal=void 0,this.file="",this.message=o,this.line=m?m.line:void 0,this.name=La(s.place)||"1:1",this.place=s.place||void 0,this.reason=this.message,this.ruleId=s.ruleId||void 0,this.source=s.source||void 0,this.stack=f&&s.cause&&typeof s.cause.stack=="string"?s.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}xe.prototype.file="";xe.prototype.name="";xe.prototype.reason="";xe.prototype.message="";xe.prototype.stack="";xe.prototype.column=void 0;xe.prototype.line=void 0;xe.prototype.ancestors=void 0;xe.prototype.cause=void 0;xe.prototype.fatal=void 0;xe.prototype.place=void 0;xe.prototype.ruleId=void 0;xe.prototype.source=void 0;const gf={}.hasOwnProperty,Ev=new Map,Cv=/[A-Z]/g,wv=new Set(["table","tbody","thead","tfoot","tr"]),_v=new Set(["td","th"]),k0="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Rv(t,l){if(!l||l.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const a=l.filePath||void 0;let u;if(l.development){if(typeof l.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");u=Ov(a,l.jsxDEV)}else{if(typeof l.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof l.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");u=Bv(a,l.jsx,l.jsxs)}const o={Fragment:l.Fragment,ancestors:[],components:l.components||{},create:u,elementAttributeNameCase:l.elementAttributeNameCase||"react",evaluater:l.createEvaluater?l.createEvaluater():void 0,filePath:a,ignoreInvalidStyle:l.ignoreInvalidStyle||!1,passKeys:l.passKeys!==!1,passNode:l.passNode||!1,schema:l.space==="svg"?hf:Av,stylePropertyNameCase:l.stylePropertyNameCase||"dom",tableCellAlignToStyle:l.tableCellAlignToStyle!==!1},s=I0(o,t,void 0);return s&&typeof s!="string"?s:o.create(t,o.Fragment,{children:s||void 0},void 0)}function I0(t,l,a){if(l.type==="element")return Tv(t,l,a);if(l.type==="mdxFlowExpression"||l.type==="mdxTextExpression")return jv(t,l);if(l.type==="mdxJsxFlowElement"||l.type==="mdxJsxTextElement")return Fv(t,l,a);if(l.type==="mdxjsEsm")return Nv(t,l);if(l.type==="root")return zv(t,l,a);if(l.type==="text")return Mv(t,l)}function Tv(t,l,a){const u=t.schema;let o=u;l.tagName.toLowerCase()==="svg"&&u.space==="html"&&(o=hf,t.schema=o),t.ancestors.push(l);const s=E0(t,l.tagName,!1),f=Lv(t,l);let m=yf(t,l);return wv.has(l.tagName)&&(m=m.filter(function(p){return typeof p=="string"?!uv(p):!0})),S0(t,f,s,l),Af(f,m),t.ancestors.pop(),t.schema=u,t.create(l,s,f,a)}function jv(t,l){if(l.data&&l.data.estree&&t.evaluater){const u=l.data.estree.body[0];return u.type,t.evaluater.evaluateExpression(u.expression)}Ha(t,l.position)}function Nv(t,l){if(l.data&&l.data.estree&&t.evaluater)return t.evaluater.evaluateProgram(l.data.estree);Ha(t,l.position)}function Fv(t,l,a){const u=t.schema;let o=u;l.name==="svg"&&u.space==="html"&&(o=hf,t.schema=o),t.ancestors.push(l);const s=l.name===null?t.Fragment:E0(t,l.name,!0),f=Pv(t,l),m=yf(t,l);return S0(t,f,s,l),Af(f,m),t.ancestors.pop(),t.schema=u,t.create(l,s,f,a)}function zv(t,l,a){const u={};return Af(u,yf(t,l)),t.create(l,t.Fragment,u,a)}function Mv(t,l){return l.value}function S0(t,l,a,u){typeof a!="string"&&a!==t.Fragment&&t.passNode&&(l.node=u)}function Af(t,l){if(l.length>0){const a=l.length>1?l:l[0];a&&(t.children=a)}}function Bv(t,l,a){return u;function u(o,s,f,m){const h=Array.isArray(f.children)?a:l;return m?h(s,f,m):h(s,f)}}function Ov(t,l){return a;function a(u,o,s,f){const m=Array.isArray(s.children),p=pf(u);return l(o,s,f,m,{columnNumber:p?p.column-1:void 0,fileName:t,lineNumber:p?p.line:void 0},void 0)}}function Lv(t,l){const a={};let u,o;for(o in l.properties)if(o!=="children"&&gf.call(l.properties,o)){const s=Gv(t,o,l.properties[o]);if(s){const[f,m]=s;t.tableCellAlignToStyle&&f==="align"&&typeof m=="string"&&_v.has(l.tagName)?u=m:a[f]=m}}if(u){const s=a.style||(a.style={});s[t.stylePropertyNameCase==="css"?"text-align":"textAlign"]=u}return a}function Pv(t,l){const a={};for(const u of l.attributes)if(u.type==="mdxJsxExpressionAttribute")if(u.data&&u.data.estree&&t.evaluater){const s=u.data.estree.body[0];s.type;const f=s.expression;f.type;const m=f.properties[0];m.type,Object.assign(a,t.evaluater.evaluateExpression(m.argument))}else Ha(t,l.position);else{const o=u.name;let s;if(u.value&&typeof u.value=="object")if(u.value.data&&u.value.data.estree&&t.evaluater){const m=u.value.data.estree.body[0];m.type,s=t.evaluater.evaluateExpression(m.expression)}else Ha(t,l.position);else s=u.value===null?!0:u.value;a[o]=s}return a}function yf(t,l){const a=[];let u=-1;const o=t.passKeys?new Map:Ev;for(;++u<l.children.length;){const s=l.children[u];let f;if(t.passKeys){const p=s.type==="element"?s.tagName:s.type==="mdxJsxFlowElement"||s.type==="mdxJsxTextElement"?s.name:void 0;if(p){const h=o.get(p)||0;f=p+"-"+h,o.set(p,h+1)}}const m=I0(t,s,f);m!==void 0&&a.push(m)}return a}function Gv(t,l,a){const u=hv(t.schema,l);if(!(a==null||typeof a=="number"&&Number.isNaN(a))){if(Array.isArray(a)&&(a=u.commaSeparated?tv(a):yv(a)),u.property==="style"){let o=typeof a=="object"?a:Uv(t,String(a));return t.stylePropertyNameCase==="css"&&(o=Hv(o)),["style",o]}return[t.elementAttributeNameCase==="react"&&u.space?fv[u.property]||u.property:u.attribute,a]}}function Uv(t,l){try{return Iv(l,{reactCompat:!0})}catch(a){if(t.ignoreInvalidStyle)return{};const u=a,o=new xe("Cannot parse `style` attribute",{ancestors:t.ancestors,cause:u,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw o.file=t.filePath||void 0,o.url=k0+"#cannot-parse-style-attribute",o}}function E0(t,l,a){let u;if(!a)u={type:"Literal",value:l};else if(l.includes(".")){const o=l.split(".");let s=-1,f;for(;++s<o.length;){const m=Xp(o[s])?{type:"Identifier",name:o[s]}:{type:"Literal",value:o[s]};f=f?{type:"MemberExpression",object:f,property:m,computed:!!(s&&m.type==="Literal"),optional:!1}:m}u=f}else u=Xp(l)&&!/^[a-z]/.test(l)?{type:"Identifier",name:l}:{type:"Literal",value:l};if(u.type==="Literal"){const o=u.value;return gf.call(t.components,o)?t.components[o]:o}if(t.evaluater)return t.evaluater.evaluateExpression(u);Ha(t)}function Ha(t,l){const a=new xe("Cannot handle MDX estrees without `createEvaluater`",{ancestors:t.ancestors,place:l,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw a.file=t.filePath||void 0,a.url=k0+"#cannot-handle-mdx-estrees-without-createevaluater",a}function Hv(t){const l={};let a;for(a in t)gf.call(t,a)&&(l[qv(a)]=t[a]);return l}function qv(t){let l=t.replace(Cv,Vv);return l.slice(0,3)==="ms-"&&(l="-"+l),l}function Vv(t){return"-"+t.toLowerCase()}const Sc={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},Yv={};function xf(t,l){const a=Yv,u=typeof a.includeImageAlt=="boolean"?a.includeImageAlt:!0,o=typeof a.includeHtml=="boolean"?a.includeHtml:!0;return C0(t,u,o)}function C0(t,l,a){if(Qv(t)){if("value"in t)return t.type==="html"&&!a?"":t.value;if(l&&"alt"in t&&t.alt)return t.alt;if("children"in t)return lg(t.children,l,a)}return Array.isArray(t)?lg(t,l,a):""}function lg(t,l,a){const u=[];let o=-1;for(;++o<t.length;)u[o]=C0(t[o],l,a);return u.join("")}function Qv(t){return!!(t&&typeof t=="object")}const ag=document.createElement("i");function bf(t){const l="&"+t+";";ag.innerHTML=l;const a=ag.textContent;return a.charCodeAt(a.length-1)===59&&t!=="semi"||a===l?!1:a}function qe(t,l,a,u){const o=t.length;let s=0,f;if(l<0?l=-l>o?0:o+l:l=l>o?o:l,a=a>0?a:0,u.length<1e4)f=Array.from(u),f.unshift(l,a),t.splice(...f);else for(a&&t.splice(l,a);s<u.length;)f=u.slice(s,s+1e4),f.unshift(l,0),t.splice(...f),s+=1e4,l+=1e4}function lt(t,l){return t.length>0?(qe(t,t.length,0,l),t):l}const ig={}.hasOwnProperty;function w0(t){const l={};let a=-1;for(;++a<t.length;)Xv(l,t[a]);return l}function Xv(t,l){let a;for(a in l){const o=(ig.call(t,a)?t[a]:void 0)||(t[a]={}),s=l[a];let f;if(s)for(f in s){ig.call(o,f)||(o[f]=[]);const m=s[f];Zv(o[f],Array.isArray(m)?m:m?[m]:[])}}}function Zv(t,l){let a=-1;const u=[];for(;++a<l.length;)(l[a].add==="after"?t:u).push(l[a]);qe(t,0,0,u)}function _0(t,l){const a=Number.parseInt(t,l);return a<9||a===11||a>13&&a<32||a>126&&a<160||a>55295&&a<57344||a>64975&&a<65008||(a&65535)===65535||(a&65535)===65534||a>1114111?"�":String.fromCodePoint(a)}function mt(t){return t.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const ke=gr(/[A-Za-z]/),ye=gr(/[\dA-Za-z]/),$v=gr(/[#-'*+\--9=?A-Z^-~]/);function ju(t){return t!==null&&(t<32||t===127)}const Xc=gr(/\d/),Kv=gr(/[\dA-Fa-f]/),Jv=gr(/[!-/:-@[-`{-~]/);function dn(t){return t!==null&&t<-2}function Vn(t){return t!==null&&(t<0||t===32)}function En(t){return t===-2||t===-1||t===32}const qu=gr(new RegExp("\\p{P}|\\p{S}","u")),Mr=gr(/\s/);function gr(t){return l;function l(a){return a!==null&&a>-1&&t.test(String.fromCharCode(a))}}function Bl(t){const l=[];let a=-1,u=0,o=0;for(;++a<t.length;){const s=t.charCodeAt(a);let f="";if(s===37&&ye(t.charCodeAt(a+1))&&ye(t.charCodeAt(a+2)))o=2;else if(s<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(s))||(f=String.fromCharCode(s));else if(s>55295&&s<57344){const m=t.charCodeAt(a+1);s<56320&&m>56319&&m<57344?(f=String.fromCharCode(s,m),o=1):f="�"}else f=String.fromCharCode(s);f&&(l.push(t.slice(u,a),encodeURIComponent(f)),u=a+o+1,f=""),o&&(a+=o,o=0)}return l.join("")+t.slice(u)}function Tn(t,l,a,u){const o=u?u-1:Number.POSITIVE_INFINITY;let s=0;return f;function f(p){return En(p)?(t.enter(a),m(p)):l(p)}function m(p){return En(p)&&s++<o?(t.consume(p),m):(t.exit(a),l(p))}}const Wv={tokenize:n2};function n2(t){const l=t.attempt(this.parser.constructs.contentInitial,u,o);let a;return l;function u(m){if(m===null){t.consume(m);return}return t.enter("lineEnding"),t.consume(m),t.exit("lineEnding"),Tn(t,l,"linePrefix")}function o(m){return t.enter("paragraph"),s(m)}function s(m){const p=t.enter("chunkText",{contentType:"text",previous:a});return a&&(a.next=p),a=p,f(m)}function f(m){if(m===null){t.exit("chunkText"),t.exit("paragraph"),t.consume(m);return}return dn(m)?(t.consume(m),t.exit("chunkText"),s):(t.consume(m),f)}}const e2={tokenize:t2},ug={tokenize:r2};function t2(t){const l=this,a=[];let u=0,o,s,f;return m;function m(L){if(u<a.length){const en=a[u];return l.containerState=en[1],t.attempt(en[0].continuation,p,h)(L)}return h(L)}function p(L){if(u++,l.containerState._closeFlow){l.containerState._closeFlow=void 0,o&&U();const en=l.events.length;let rn=en,G;for(;rn--;)if(l.events[rn][0]==="exit"&&l.events[rn][1].type==="chunkFlow"){G=l.events[rn][1].end;break}R(u);let J=en;for(;J<l.events.length;)l.events[J][1].end={...G},J++;return qe(l.events,rn+1,0,l.events.slice(en)),l.events.length=J,h(L)}return m(L)}function h(L){if(u===a.length){if(!o)return b(L);if(o.currentConstruct&&o.currentConstruct.concrete)return I(L);l.interrupt=!!(o.currentConstruct&&!o._gfmTableDynamicInterruptHack)}return l.containerState={},t.check(ug,y,g)(L)}function y(L){return o&&U(),R(u),b(L)}function g(L){return l.parser.lazy[l.now().line]=u!==a.length,f=l.now().offset,I(L)}function b(L){return l.containerState={},t.attempt(ug,v,I)(L)}function v(L){return u++,a.push([l.currentConstruct,l.containerState]),b(L)}function I(L){if(L===null){o&&U(),R(0),t.consume(L);return}return o=o||l.parser.flow(l.now()),t.enter("chunkFlow",{_tokenizer:o,contentType:"flow",previous:s}),C(L)}function C(L){if(L===null){w(t.exit("chunkFlow"),!0),R(0),t.consume(L);return}return dn(L)?(t.consume(L),w(t.exit("chunkFlow")),u=0,l.interrupt=void 0,m):(t.consume(L),C)}function w(L,en){const rn=l.sliceStream(L);if(en&&rn.push(null),L.previous=s,s&&(s.next=L),s=L,o.defineSkip(L.start),o.write(rn),l.parser.lazy[L.start.line]){let G=o.events.length;for(;G--;)if(o.events[G][1].start.offset<f&&(!o.events[G][1].end||o.events[G][1].end.offset>f))return;const J=l.events.length;let fn=J,pn,O;for(;fn--;)if(l.events[fn][0]==="exit"&&l.events[fn][1].type==="chunkFlow"){if(pn){O=l.events[fn][1].end;break}pn=!0}for(R(u),G=J;G<l.events.length;)l.events[G][1].end={...O},G++;qe(l.events,fn+1,0,l.events.slice(J)),l.events.length=G}}function R(L){let en=a.length;for(;en-- >L;){const rn=a[en];l.containerState=rn[1],rn[0].exit.call(l,t)}a.length=L}function U(){o.write([null]),s=void 0,o=void 0,l.containerState._closeFlow=void 0}}function r2(t,l,a){return Tn(t,t.attempt(this.parser.constructs.document,l,a),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Tl(t){if(t===null||Vn(t)||Mr(t))return 1;if(qu(t))return 2}function Vu(t,l,a){const u=[];let o=-1;for(;++o<t.length;){const s=t[o].resolveAll;s&&!u.includes(s)&&(l=s(l,a),u.push(s))}return l}const Zc={name:"attention",resolveAll:l2,tokenize:a2};function l2(t,l){let a=-1,u,o,s,f,m,p,h,y;for(;++a<t.length;)if(t[a][0]==="enter"&&t[a][1].type==="attentionSequence"&&t[a][1]._close){for(u=a;u--;)if(t[u][0]==="exit"&&t[u][1].type==="attentionSequence"&&t[u][1]._open&&l.sliceSerialize(t[u][1]).charCodeAt(0)===l.sliceSerialize(t[a][1]).charCodeAt(0)){if((t[u][1]._close||t[a][1]._open)&&(t[a][1].end.offset-t[a][1].start.offset)%3&&!((t[u][1].end.offset-t[u][1].start.offset+t[a][1].end.offset-t[a][1].start.offset)%3))continue;p=t[u][1].end.offset-t[u][1].start.offset>1&&t[a][1].end.offset-t[a][1].start.offset>1?2:1;const g={...t[u][1].end},b={...t[a][1].start};og(g,-p),og(b,p),f={type:p>1?"strongSequence":"emphasisSequence",start:g,end:{...t[u][1].end}},m={type:p>1?"strongSequence":"emphasisSequence",start:{...t[a][1].start},end:b},s={type:p>1?"strongText":"emphasisText",start:{...t[u][1].end},end:{...t[a][1].start}},o={type:p>1?"strong":"emphasis",start:{...f.start},end:{...m.end}},t[u][1].end={...f.start},t[a][1].start={...m.end},h=[],t[u][1].end.offset-t[u][1].start.offset&&(h=lt(h,[["enter",t[u][1],l],["exit",t[u][1],l]])),h=lt(h,[["enter",o,l],["enter",f,l],["exit",f,l],["enter",s,l]]),h=lt(h,Vu(l.parser.constructs.insideSpan.null,t.slice(u+1,a),l)),h=lt(h,[["exit",s,l],["enter",m,l],["exit",m,l],["exit",o,l]]),t[a][1].end.offset-t[a][1].start.offset?(y=2,h=lt(h,[["enter",t[a][1],l],["exit",t[a][1],l]])):y=0,qe(t,u-1,a-u+3,h),a=u+h.length-y-2;break}}for(a=-1;++a<t.length;)t[a][1].type==="attentionSequence"&&(t[a][1].type="data");return t}function a2(t,l){const a=this.parser.constructs.attentionMarkers.null,u=this.previous,o=Tl(u);let s;return f;function f(p){return s=p,t.enter("attentionSequence"),m(p)}function m(p){if(p===s)return t.consume(p),m;const h=t.exit("attentionSequence"),y=Tl(p),g=!y||y===2&&o||a.includes(p),b=!o||o===2&&y||a.includes(u);return h._open=!!(s===42?g:g&&(o||!b)),h._close=!!(s===42?b:b&&(y||!g)),l(p)}}function og(t,l){t.column+=l,t.offset+=l,t._bufferIndex+=l}const i2={name:"autolink",tokenize:u2};function u2(t,l,a){let u=0;return o;function o(v){return t.enter("autolink"),t.enter("autolinkMarker"),t.consume(v),t.exit("autolinkMarker"),t.enter("autolinkProtocol"),s}function s(v){return ke(v)?(t.consume(v),f):v===64?a(v):h(v)}function f(v){return v===43||v===45||v===46||ye(v)?(u=1,m(v)):h(v)}function m(v){return v===58?(t.consume(v),u=0,p):(v===43||v===45||v===46||ye(v))&&u++<32?(t.consume(v),m):(u=0,h(v))}function p(v){return v===62?(t.exit("autolinkProtocol"),t.enter("autolinkMarker"),t.consume(v),t.exit("autolinkMarker"),t.exit("autolink"),l):v===null||v===32||v===60||ju(v)?a(v):(t.consume(v),p)}function h(v){return v===64?(t.consume(v),y):$v(v)?(t.consume(v),h):a(v)}function y(v){return ye(v)?g(v):a(v)}function g(v){return v===46?(t.consume(v),u=0,y):v===62?(t.exit("autolinkProtocol").type="autolinkEmail",t.enter("autolinkMarker"),t.consume(v),t.exit("autolinkMarker"),t.exit("autolink"),l):b(v)}function b(v){if((v===45||ye(v))&&u++<63){const I=v===45?b:g;return t.consume(v),I}return a(v)}}const $a={partial:!0,tokenize:o2};function o2(t,l,a){return u;function u(s){return En(s)?Tn(t,o,"linePrefix")(s):o(s)}function o(s){return s===null||dn(s)?l(s):a(s)}}const R0={continuation:{tokenize:c2},exit:f2,name:"blockQuote",tokenize:s2};function s2(t,l,a){const u=this;return o;function o(f){if(f===62){const m=u.containerState;return m.open||(t.enter("blockQuote",{_container:!0}),m.open=!0),t.enter("blockQuotePrefix"),t.enter("blockQuoteMarker"),t.consume(f),t.exit("blockQuoteMarker"),s}return a(f)}function s(f){return En(f)?(t.enter("blockQuotePrefixWhitespace"),t.consume(f),t.exit("blockQuotePrefixWhitespace"),t.exit("blockQuotePrefix"),l):(t.exit("blockQuotePrefix"),l(f))}}function c2(t,l,a){const u=this;return o;function o(f){return En(f)?Tn(t,s,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(f):s(f)}function s(f){return t.attempt(R0,l,a)(f)}}function f2(t){t.exit("blockQuote")}const T0={name:"characterEscape",tokenize:d2};function d2(t,l,a){return u;function u(s){return t.enter("characterEscape"),t.enter("escapeMarker"),t.consume(s),t.exit("escapeMarker"),o}function o(s){return Jv(s)?(t.enter("characterEscapeValue"),t.consume(s),t.exit("characterEscapeValue"),t.exit("characterEscape"),l):a(s)}}const j0={name:"characterReference",tokenize:m2};function m2(t,l,a){const u=this;let o=0,s,f;return m;function m(g){return t.enter("characterReference"),t.enter("characterReferenceMarker"),t.consume(g),t.exit("characterReferenceMarker"),p}function p(g){return g===35?(t.enter("characterReferenceMarkerNumeric"),t.consume(g),t.exit("characterReferenceMarkerNumeric"),h):(t.enter("characterReferenceValue"),s=31,f=ye,y(g))}function h(g){return g===88||g===120?(t.enter("characterReferenceMarkerHexadecimal"),t.consume(g),t.exit("characterReferenceMarkerHexadecimal"),t.enter("characterReferenceValue"),s=6,f=Kv,y):(t.enter("characterReferenceValue"),s=7,f=Xc,y(g))}function y(g){if(g===59&&o){const b=t.exit("characterReferenceValue");return f===ye&&!bf(u.sliceSerialize(b))?a(g):(t.enter("characterReferenceMarker"),t.consume(g),t.exit("characterReferenceMarker"),t.exit("characterReference"),l)}return f(g)&&o++<s?(t.consume(g),y):a(g)}}const sg={partial:!0,tokenize:p2},cg={concrete:!0,name:"codeFenced",tokenize:h2};function h2(t,l,a){const u=this,o={partial:!0,tokenize:rn};let s=0,f=0,m;return p;function p(G){return h(G)}function h(G){const J=u.events[u.events.length-1];return s=J&&J[1].type==="linePrefix"?J[2].sliceSerialize(J[1],!0).length:0,m=G,t.enter("codeFenced"),t.enter("codeFencedFence"),t.enter("codeFencedFenceSequence"),y(G)}function y(G){return G===m?(f++,t.consume(G),y):f<3?a(G):(t.exit("codeFencedFenceSequence"),En(G)?Tn(t,g,"whitespace")(G):g(G))}function g(G){return G===null||dn(G)?(t.exit("codeFencedFence"),u.interrupt?l(G):t.check(sg,C,en)(G)):(t.enter("codeFencedFenceInfo"),t.enter("chunkString",{contentType:"string"}),b(G))}function b(G){return G===null||dn(G)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),g(G)):En(G)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),Tn(t,v,"whitespace")(G)):G===96&&G===m?a(G):(t.consume(G),b)}function v(G){return G===null||dn(G)?g(G):(t.enter("codeFencedFenceMeta"),t.enter("chunkString",{contentType:"string"}),I(G))}function I(G){return G===null||dn(G)?(t.exit("chunkString"),t.exit("codeFencedFenceMeta"),g(G)):G===96&&G===m?a(G):(t.consume(G),I)}function C(G){return t.attempt(o,en,w)(G)}function w(G){return t.enter("lineEnding"),t.consume(G),t.exit("lineEnding"),R}function R(G){return s>0&&En(G)?Tn(t,U,"linePrefix",s+1)(G):U(G)}function U(G){return G===null||dn(G)?t.check(sg,C,en)(G):(t.enter("codeFlowValue"),L(G))}function L(G){return G===null||dn(G)?(t.exit("codeFlowValue"),U(G)):(t.consume(G),L)}function en(G){return t.exit("codeFenced"),l(G)}function rn(G,J,fn){let pn=0;return O;function O(Z){return G.enter("lineEnding"),G.consume(Z),G.exit("lineEnding"),tn}function tn(Z){return G.enter("codeFencedFence"),En(Z)?Tn(G,nn,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(Z):nn(Z)}function nn(Z){return Z===m?(G.enter("codeFencedFenceSequence"),vn(Z)):fn(Z)}function vn(Z){return Z===m?(pn++,G.consume(Z),vn):pn>=f?(G.exit("codeFencedFenceSequence"),En(Z)?Tn(G,an,"whitespace")(Z):an(Z)):fn(Z)}function an(Z){return Z===null||dn(Z)?(G.exit("codeFencedFence"),J(Z)):fn(Z)}}}function p2(t,l,a){const u=this;return o;function o(f){return f===null?a(f):(t.enter("lineEnding"),t.consume(f),t.exit("lineEnding"),s)}function s(f){return u.parser.lazy[u.now().line]?a(f):l(f)}}const Ec={name:"codeIndented",tokenize:A2},g2={partial:!0,tokenize:y2};function A2(t,l,a){const u=this;return o;function o(h){return t.enter("codeIndented"),Tn(t,s,"linePrefix",5)(h)}function s(h){const y=u.events[u.events.length-1];return y&&y[1].type==="linePrefix"&&y[2].sliceSerialize(y[1],!0).length>=4?f(h):a(h)}function f(h){return h===null?p(h):dn(h)?t.attempt(g2,f,p)(h):(t.enter("codeFlowValue"),m(h))}function m(h){return h===null||dn(h)?(t.exit("codeFlowValue"),f(h)):(t.consume(h),m)}function p(h){return t.exit("codeIndented"),l(h)}}function y2(t,l,a){const u=this;return o;function o(f){return u.parser.lazy[u.now().line]?a(f):dn(f)?(t.enter("lineEnding"),t.consume(f),t.exit("lineEnding"),o):Tn(t,s,"linePrefix",5)(f)}function s(f){const m=u.events[u.events.length-1];return m&&m[1].type==="linePrefix"&&m[2].sliceSerialize(m[1],!0).length>=4?l(f):dn(f)?o(f):a(f)}}const x2={name:"codeText",previous:v2,resolve:b2,tokenize:D2};function b2(t){let l=t.length-4,a=3,u,o;if((t[a][1].type==="lineEnding"||t[a][1].type==="space")&&(t[l][1].type==="lineEnding"||t[l][1].type==="space")){for(u=a;++u<l;)if(t[u][1].type==="codeTextData"){t[a][1].type="codeTextPadding",t[l][1].type="codeTextPadding",a+=2,l-=2;break}}for(u=a-1,l++;++u<=l;)o===void 0?u!==l&&t[u][1].type!=="lineEnding"&&(o=u):(u===l||t[u][1].type==="lineEnding")&&(t[o][1].type="codeTextData",u!==o+2&&(t[o][1].end=t[u-1][1].end,t.splice(o+2,u-o-2),l-=u-o-2,u=o+2),o=void 0);return t}function v2(t){return t!==96||this.events[this.events.length-1][1].type==="characterEscape"}function D2(t,l,a){let u=0,o,s;return f;function f(g){return t.enter("codeText"),t.enter("codeTextSequence"),m(g)}function m(g){return g===96?(t.consume(g),u++,m):(t.exit("codeTextSequence"),p(g))}function p(g){return g===null?a(g):g===32?(t.enter("space"),t.consume(g),t.exit("space"),p):g===96?(s=t.enter("codeTextSequence"),o=0,y(g)):dn(g)?(t.enter("lineEnding"),t.consume(g),t.exit("lineEnding"),p):(t.enter("codeTextData"),h(g))}function h(g){return g===null||g===32||g===96||dn(g)?(t.exit("codeTextData"),p(g)):(t.consume(g),h)}function y(g){return g===96?(t.consume(g),o++,y):o===u?(t.exit("codeTextSequence"),t.exit("codeText"),l(g)):(s.type="codeTextData",h(g))}}class k2{constructor(l){this.left=l?[...l]:[],this.right=[]}get(l){if(l<0||l>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+l+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return l<this.left.length?this.left[l]:this.right[this.right.length-l+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(l,a){const u=a??Number.POSITIVE_INFINITY;return u<this.left.length?this.left.slice(l,u):l>this.left.length?this.right.slice(this.right.length-u+this.left.length,this.right.length-l+this.left.length).reverse():this.left.slice(l).concat(this.right.slice(this.right.length-u+this.left.length).reverse())}splice(l,a,u){const o=a||0;this.setCursor(Math.trunc(l));const s=this.right.splice(this.right.length-o,Number.POSITIVE_INFINITY);return u&&Ma(this.left,u),s.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(l){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(l)}pushMany(l){this.setCursor(Number.POSITIVE_INFINITY),Ma(this.left,l)}unshift(l){this.setCursor(0),this.right.push(l)}unshiftMany(l){this.setCursor(0),Ma(this.right,l.reverse())}setCursor(l){if(!(l===this.left.length||l>this.left.length&&this.right.length===0||l<0&&this.left.length===0))if(l<this.left.length){const a=this.left.splice(l,Number.POSITIVE_INFINITY);Ma(this.right,a.reverse())}else{const a=this.right.splice(this.left.length+this.right.length-l,Number.POSITIVE_INFINITY);Ma(this.left,a.reverse())}}}function Ma(t,l){let a=0;if(l.length<1e4)t.push(...l);else for(;a<l.length;)t.push(...l.slice(a,a+1e4)),a+=1e4}function N0(t){const l={};let a=-1,u,o,s,f,m,p,h;const y=new k2(t);for(;++a<y.length;){for(;a in l;)a=l[a];if(u=y.get(a),a&&u[1].type==="chunkFlow"&&y.get(a-1)[1].type==="listItemPrefix"&&(p=u[1]._tokenizer.events,s=0,s<p.length&&p[s][1].type==="lineEndingBlank"&&(s+=2),s<p.length&&p[s][1].type==="content"))for(;++s<p.length&&p[s][1].type!=="content";)p[s][1].type==="chunkText"&&(p[s][1]._isInFirstContentOfListItem=!0,s++);if(u[0]==="enter")u[1].contentType&&(Object.assign(l,I2(y,a)),a=l[a],h=!0);else if(u[1]._container){for(s=a,o=void 0;s--;)if(f=y.get(s),f[1].type==="lineEnding"||f[1].type==="lineEndingBlank")f[0]==="enter"&&(o&&(y.get(o)[1].type="lineEndingBlank"),f[1].type="lineEnding",o=s);else if(!(f[1].type==="linePrefix"||f[1].type==="listItemIndent"))break;o&&(u[1].end={...y.get(o)[1].start},m=y.slice(o,a),m.unshift(u),y.splice(o,a-o+1,m))}}return qe(t,0,Number.POSITIVE_INFINITY,y.slice(0)),!h}function I2(t,l){const a=t.get(l)[1],u=t.get(l)[2];let o=l-1;const s=[];let f=a._tokenizer;f||(f=u.parser[a.contentType](a.start),a._contentTypeTextTrailing&&(f._contentTypeTextTrailing=!0));const m=f.events,p=[],h={};let y,g,b=-1,v=a,I=0,C=0;const w=[C];for(;v;){for(;t.get(++o)[1]!==v;);s.push(o),v._tokenizer||(y=u.sliceStream(v),v.next||y.push(null),g&&f.defineSkip(v.start),v._isInFirstContentOfListItem&&(f._gfmTasklistFirstContentOfListItem=!0),f.write(y),v._isInFirstContentOfListItem&&(f._gfmTasklistFirstContentOfListItem=void 0)),g=v,v=v.next}for(v=a;++b<m.length;)m[b][0]==="exit"&&m[b-1][0]==="enter"&&m[b][1].type===m[b-1][1].type&&m[b][1].start.line!==m[b][1].end.line&&(C=b+1,w.push(C),v._tokenizer=void 0,v.previous=void 0,v=v.next);for(f.events=[],v?(v._tokenizer=void 0,v.previous=void 0):w.pop(),b=w.length;b--;){const R=m.slice(w[b],w[b+1]),U=s.pop();p.push([U,U+R.length-1]),t.splice(U,2,R)}for(p.reverse(),b=-1;++b<p.length;)h[I+p[b][0]]=I+p[b][1],I+=p[b][1]-p[b][0]-1;return h}const S2={resolve:C2,tokenize:w2},E2={partial:!0,tokenize:_2};function C2(t){return N0(t),t}function w2(t,l){let a;return u;function u(m){return t.enter("content"),a=t.enter("chunkContent",{contentType:"content"}),o(m)}function o(m){return m===null?s(m):dn(m)?t.check(E2,f,s)(m):(t.consume(m),o)}function s(m){return t.exit("chunkContent"),t.exit("content"),l(m)}function f(m){return t.consume(m),t.exit("chunkContent"),a.next=t.enter("chunkContent",{contentType:"content",previous:a}),a=a.next,o}}function _2(t,l,a){const u=this;return o;function o(f){return t.exit("chunkContent"),t.enter("lineEnding"),t.consume(f),t.exit("lineEnding"),Tn(t,s,"linePrefix")}function s(f){if(f===null||dn(f))return a(f);const m=u.events[u.events.length-1];return!u.parser.constructs.disable.null.includes("codeIndented")&&m&&m[1].type==="linePrefix"&&m[2].sliceSerialize(m[1],!0).length>=4?l(f):t.interrupt(u.parser.constructs.flow,a,l)(f)}}function F0(t,l,a,u,o,s,f,m,p){const h=p||Number.POSITIVE_INFINITY;let y=0;return g;function g(R){return R===60?(t.enter(u),t.enter(o),t.enter(s),t.consume(R),t.exit(s),b):R===null||R===32||R===41||ju(R)?a(R):(t.enter(u),t.enter(f),t.enter(m),t.enter("chunkString",{contentType:"string"}),C(R))}function b(R){return R===62?(t.enter(s),t.consume(R),t.exit(s),t.exit(o),t.exit(u),l):(t.enter(m),t.enter("chunkString",{contentType:"string"}),v(R))}function v(R){return R===62?(t.exit("chunkString"),t.exit(m),b(R)):R===null||R===60||dn(R)?a(R):(t.consume(R),R===92?I:v)}function I(R){return R===60||R===62||R===92?(t.consume(R),v):v(R)}function C(R){return!y&&(R===null||R===41||Vn(R))?(t.exit("chunkString"),t.exit(m),t.exit(f),t.exit(u),l(R)):y<h&&R===40?(t.consume(R),y++,C):R===41?(t.consume(R),y--,C):R===null||R===32||R===40||ju(R)?a(R):(t.consume(R),R===92?w:C)}function w(R){return R===40||R===41||R===92?(t.consume(R),C):C(R)}}function z0(t,l,a,u,o,s){const f=this;let m=0,p;return h;function h(v){return t.enter(u),t.enter(o),t.consume(v),t.exit(o),t.enter(s),y}function y(v){return m>999||v===null||v===91||v===93&&!p||v===94&&!m&&"_hiddenFootnoteSupport"in f.parser.constructs?a(v):v===93?(t.exit(s),t.enter(o),t.consume(v),t.exit(o),t.exit(u),l):dn(v)?(t.enter("lineEnding"),t.consume(v),t.exit("lineEnding"),y):(t.enter("chunkString",{contentType:"string"}),g(v))}function g(v){return v===null||v===91||v===93||dn(v)||m++>999?(t.exit("chunkString"),y(v)):(t.consume(v),p||(p=!En(v)),v===92?b:g)}function b(v){return v===91||v===92||v===93?(t.consume(v),m++,g):g(v)}}function M0(t,l,a,u,o,s){let f;return m;function m(b){return b===34||b===39||b===40?(t.enter(u),t.enter(o),t.consume(b),t.exit(o),f=b===40?41:b,p):a(b)}function p(b){return b===f?(t.enter(o),t.consume(b),t.exit(o),t.exit(u),l):(t.enter(s),h(b))}function h(b){return b===f?(t.exit(s),p(f)):b===null?a(b):dn(b)?(t.enter("lineEnding"),t.consume(b),t.exit("lineEnding"),Tn(t,h,"linePrefix")):(t.enter("chunkString",{contentType:"string"}),y(b))}function y(b){return b===f||b===null||dn(b)?(t.exit("chunkString"),h(b)):(t.consume(b),b===92?g:y)}function g(b){return b===f||b===92?(t.consume(b),y):y(b)}}function Pa(t,l){let a;return u;function u(o){return dn(o)?(t.enter("lineEnding"),t.consume(o),t.exit("lineEnding"),a=!0,u):En(o)?Tn(t,u,a?"linePrefix":"lineSuffix")(o):l(o)}}const R2={name:"definition",tokenize:j2},T2={partial:!0,tokenize:N2};function j2(t,l,a){const u=this;let o;return s;function s(v){return t.enter("definition"),f(v)}function f(v){return z0.call(u,t,m,a,"definitionLabel","definitionLabelMarker","definitionLabelString")(v)}function m(v){return o=mt(u.sliceSerialize(u.events[u.events.length-1][1]).slice(1,-1)),v===58?(t.enter("definitionMarker"),t.consume(v),t.exit("definitionMarker"),p):a(v)}function p(v){return Vn(v)?Pa(t,h)(v):h(v)}function h(v){return F0(t,y,a,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(v)}function y(v){return t.attempt(T2,g,g)(v)}function g(v){return En(v)?Tn(t,b,"whitespace")(v):b(v)}function b(v){return v===null||dn(v)?(t.exit("definition"),u.parser.defined.push(o),l(v)):a(v)}}function N2(t,l,a){return u;function u(m){return Vn(m)?Pa(t,o)(m):a(m)}function o(m){return M0(t,s,a,"definitionTitle","definitionTitleMarker","definitionTitleString")(m)}function s(m){return En(m)?Tn(t,f,"whitespace")(m):f(m)}function f(m){return m===null||dn(m)?l(m):a(m)}}const F2={name:"hardBreakEscape",tokenize:z2};function z2(t,l,a){return u;function u(s){return t.enter("hardBreakEscape"),t.consume(s),o}function o(s){return dn(s)?(t.exit("hardBreakEscape"),l(s)):a(s)}}const M2={name:"headingAtx",resolve:B2,tokenize:O2};function B2(t,l){let a=t.length-2,u=3,o,s;return t[u][1].type==="whitespace"&&(u+=2),a-2>u&&t[a][1].type==="whitespace"&&(a-=2),t[a][1].type==="atxHeadingSequence"&&(u===a-1||a-4>u&&t[a-2][1].type==="whitespace")&&(a-=u+1===a?2:4),a>u&&(o={type:"atxHeadingText",start:t[u][1].start,end:t[a][1].end},s={type:"chunkText",start:t[u][1].start,end:t[a][1].end,contentType:"text"},qe(t,u,a-u+1,[["enter",o,l],["enter",s,l],["exit",s,l],["exit",o,l]])),t}function O2(t,l,a){let u=0;return o;function o(y){return t.enter("atxHeading"),s(y)}function s(y){return t.enter("atxHeadingSequence"),f(y)}function f(y){return y===35&&u++<6?(t.consume(y),f):y===null||Vn(y)?(t.exit("atxHeadingSequence"),m(y)):a(y)}function m(y){return y===35?(t.enter("atxHeadingSequence"),p(y)):y===null||dn(y)?(t.exit("atxHeading"),l(y)):En(y)?Tn(t,m,"whitespace")(y):(t.enter("atxHeadingText"),h(y))}function p(y){return y===35?(t.consume(y),p):(t.exit("atxHeadingSequence"),m(y))}function h(y){return y===null||y===35||Vn(y)?(t.exit("atxHeadingText"),m(y)):(t.consume(y),h)}}const L2=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],fg=["pre","script","style","textarea"],P2={concrete:!0,name:"htmlFlow",resolveTo:H2,tokenize:q2},G2={partial:!0,tokenize:Y2},U2={partial:!0,tokenize:V2};function H2(t){let l=t.length;for(;l--&&!(t[l][0]==="enter"&&t[l][1].type==="htmlFlow"););return l>1&&t[l-2][1].type==="linePrefix"&&(t[l][1].start=t[l-2][1].start,t[l+1][1].start=t[l-2][1].start,t.splice(l-2,2)),t}function q2(t,l,a){const u=this;let o,s,f,m,p;return h;function h(k){return y(k)}function y(k){return t.enter("htmlFlow"),t.enter("htmlFlowData"),t.consume(k),g}function g(k){return k===33?(t.consume(k),b):k===47?(t.consume(k),s=!0,C):k===63?(t.consume(k),o=3,u.interrupt?l:S):ke(k)?(t.consume(k),f=String.fromCharCode(k),w):a(k)}function b(k){return k===45?(t.consume(k),o=2,v):k===91?(t.consume(k),o=5,m=0,I):ke(k)?(t.consume(k),o=4,u.interrupt?l:S):a(k)}function v(k){return k===45?(t.consume(k),u.interrupt?l:S):a(k)}function I(k){const W="CDATA[";return k===W.charCodeAt(m++)?(t.consume(k),m===W.length?u.interrupt?l:nn:I):a(k)}function C(k){return ke(k)?(t.consume(k),f=String.fromCharCode(k),w):a(k)}function w(k){if(k===null||k===47||k===62||Vn(k)){const W=k===47,hn=f.toLowerCase();return!W&&!s&&fg.includes(hn)?(o=1,u.interrupt?l(k):nn(k)):L2.includes(f.toLowerCase())?(o=6,W?(t.consume(k),R):u.interrupt?l(k):nn(k)):(o=7,u.interrupt&&!u.parser.lazy[u.now().line]?a(k):s?U(k):L(k))}return k===45||ye(k)?(t.consume(k),f+=String.fromCharCode(k),w):a(k)}function R(k){return k===62?(t.consume(k),u.interrupt?l:nn):a(k)}function U(k){return En(k)?(t.consume(k),U):O(k)}function L(k){return k===47?(t.consume(k),O):k===58||k===95||ke(k)?(t.consume(k),en):En(k)?(t.consume(k),L):O(k)}function en(k){return k===45||k===46||k===58||k===95||ye(k)?(t.consume(k),en):rn(k)}function rn(k){return k===61?(t.consume(k),G):En(k)?(t.consume(k),rn):L(k)}function G(k){return k===null||k===60||k===61||k===62||k===96?a(k):k===34||k===39?(t.consume(k),p=k,J):En(k)?(t.consume(k),G):fn(k)}function J(k){return k===p?(t.consume(k),p=null,pn):k===null||dn(k)?a(k):(t.consume(k),J)}function fn(k){return k===null||k===34||k===39||k===47||k===60||k===61||k===62||k===96||Vn(k)?rn(k):(t.consume(k),fn)}function pn(k){return k===47||k===62||En(k)?L(k):a(k)}function O(k){return k===62?(t.consume(k),tn):a(k)}function tn(k){return k===null||dn(k)?nn(k):En(k)?(t.consume(k),tn):a(k)}function nn(k){return k===45&&o===2?(t.consume(k),B):k===60&&o===1?(t.consume(k),X):k===62&&o===4?(t.consume(k),_):k===63&&o===3?(t.consume(k),S):k===93&&o===5?(t.consume(k),Dn):dn(k)&&(o===6||o===7)?(t.exit("htmlFlowData"),t.check(G2,q,vn)(k)):k===null||dn(k)?(t.exit("htmlFlowData"),vn(k)):(t.consume(k),nn)}function vn(k){return t.check(U2,an,q)(k)}function an(k){return t.enter("lineEnding"),t.consume(k),t.exit("lineEnding"),Z}function Z(k){return k===null||dn(k)?vn(k):(t.enter("htmlFlowData"),nn(k))}function B(k){return k===45?(t.consume(k),S):nn(k)}function X(k){return k===47?(t.consume(k),f="",on):nn(k)}function on(k){if(k===62){const W=f.toLowerCase();return fg.includes(W)?(t.consume(k),_):nn(k)}return ke(k)&&f.length<8?(t.consume(k),f+=String.fromCharCode(k),on):nn(k)}function Dn(k){return k===93?(t.consume(k),S):nn(k)}function S(k){return k===62?(t.consume(k),_):k===45&&o===2?(t.consume(k),S):nn(k)}function _(k){return k===null||dn(k)?(t.exit("htmlFlowData"),q(k)):(t.consume(k),_)}function q(k){return t.exit("htmlFlow"),l(k)}}function V2(t,l,a){const u=this;return o;function o(f){return dn(f)?(t.enter("lineEnding"),t.consume(f),t.exit("lineEnding"),s):a(f)}function s(f){return u.parser.lazy[u.now().line]?a(f):l(f)}}function Y2(t,l,a){return u;function u(o){return t.enter("lineEnding"),t.consume(o),t.exit("lineEnding"),t.attempt($a,l,a)}}const Q2={name:"htmlText",tokenize:X2};function X2(t,l,a){const u=this;let o,s,f;return m;function m(S){return t.enter("htmlText"),t.enter("htmlTextData"),t.consume(S),p}function p(S){return S===33?(t.consume(S),h):S===47?(t.consume(S),rn):S===63?(t.consume(S),L):ke(S)?(t.consume(S),fn):a(S)}function h(S){return S===45?(t.consume(S),y):S===91?(t.consume(S),s=0,I):ke(S)?(t.consume(S),U):a(S)}function y(S){return S===45?(t.consume(S),v):a(S)}function g(S){return S===null?a(S):S===45?(t.consume(S),b):dn(S)?(f=g,X(S)):(t.consume(S),g)}function b(S){return S===45?(t.consume(S),v):g(S)}function v(S){return S===62?B(S):S===45?b(S):g(S)}function I(S){const _="CDATA[";return S===_.charCodeAt(s++)?(t.consume(S),s===_.length?C:I):a(S)}function C(S){return S===null?a(S):S===93?(t.consume(S),w):dn(S)?(f=C,X(S)):(t.consume(S),C)}function w(S){return S===93?(t.consume(S),R):C(S)}function R(S){return S===62?B(S):S===93?(t.consume(S),R):C(S)}function U(S){return S===null||S===62?B(S):dn(S)?(f=U,X(S)):(t.consume(S),U)}function L(S){return S===null?a(S):S===63?(t.consume(S),en):dn(S)?(f=L,X(S)):(t.consume(S),L)}function en(S){return S===62?B(S):L(S)}function rn(S){return ke(S)?(t.consume(S),G):a(S)}function G(S){return S===45||ye(S)?(t.consume(S),G):J(S)}function J(S){return dn(S)?(f=J,X(S)):En(S)?(t.consume(S),J):B(S)}function fn(S){return S===45||ye(S)?(t.consume(S),fn):S===47||S===62||Vn(S)?pn(S):a(S)}function pn(S){return S===47?(t.consume(S),B):S===58||S===95||ke(S)?(t.consume(S),O):dn(S)?(f=pn,X(S)):En(S)?(t.consume(S),pn):B(S)}function O(S){return S===45||S===46||S===58||S===95||ye(S)?(t.consume(S),O):tn(S)}function tn(S){return S===61?(t.consume(S),nn):dn(S)?(f=tn,X(S)):En(S)?(t.consume(S),tn):pn(S)}function nn(S){return S===null||S===60||S===61||S===62||S===96?a(S):S===34||S===39?(t.consume(S),o=S,vn):dn(S)?(f=nn,X(S)):En(S)?(t.consume(S),nn):(t.consume(S),an)}function vn(S){return S===o?(t.consume(S),o=void 0,Z):S===null?a(S):dn(S)?(f=vn,X(S)):(t.consume(S),vn)}function an(S){return S===null||S===34||S===39||S===60||S===61||S===96?a(S):S===47||S===62||Vn(S)?pn(S):(t.consume(S),an)}function Z(S){return S===47||S===62||Vn(S)?pn(S):a(S)}function B(S){return S===62?(t.consume(S),t.exit("htmlTextData"),t.exit("htmlText"),l):a(S)}function X(S){return t.exit("htmlTextData"),t.enter("lineEnding"),t.consume(S),t.exit("lineEnding"),on}function on(S){return En(S)?Tn(t,Dn,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(S):Dn(S)}function Dn(S){return t.enter("htmlTextData"),f(S)}}const vf={name:"labelEnd",resolveAll:J2,resolveTo:W2,tokenize:nD},Z2={tokenize:eD},$2={tokenize:tD},K2={tokenize:rD};function J2(t){let l=-1;const a=[];for(;++l<t.length;){const u=t[l][1];if(a.push(t[l]),u.type==="labelImage"||u.type==="labelLink"||u.type==="labelEnd"){const o=u.type==="labelImage"?4:2;u.type="data",l+=o}}return t.length!==a.length&&qe(t,0,t.length,a),t}function W2(t,l){let a=t.length,u=0,o,s,f,m;for(;a--;)if(o=t[a][1],s){if(o.type==="link"||o.type==="labelLink"&&o._inactive)break;t[a][0]==="enter"&&o.type==="labelLink"&&(o._inactive=!0)}else if(f){if(t[a][0]==="enter"&&(o.type==="labelImage"||o.type==="labelLink")&&!o._balanced&&(s=a,o.type!=="labelLink")){u=2;break}}else o.type==="labelEnd"&&(f=a);const p={type:t[s][1].type==="labelLink"?"link":"image",start:{...t[s][1].start},end:{...t[t.length-1][1].end}},h={type:"label",start:{...t[s][1].start},end:{...t[f][1].end}},y={type:"labelText",start:{...t[s+u+2][1].end},end:{...t[f-2][1].start}};return m=[["enter",p,l],["enter",h,l]],m=lt(m,t.slice(s+1,s+u+3)),m=lt(m,[["enter",y,l]]),m=lt(m,Vu(l.parser.constructs.insideSpan.null,t.slice(s+u+4,f-3),l)),m=lt(m,[["exit",y,l],t[f-2],t[f-1],["exit",h,l]]),m=lt(m,t.slice(f+1)),m=lt(m,[["exit",p,l]]),qe(t,s,t.length,m),t}function nD(t,l,a){const u=this;let o=u.events.length,s,f;for(;o--;)if((u.events[o][1].type==="labelImage"||u.events[o][1].type==="labelLink")&&!u.events[o][1]._balanced){s=u.events[o][1];break}return m;function m(b){return s?s._inactive?g(b):(f=u.parser.defined.includes(mt(u.sliceSerialize({start:s.end,end:u.now()}))),t.enter("labelEnd"),t.enter("labelMarker"),t.consume(b),t.exit("labelMarker"),t.exit("labelEnd"),p):a(b)}function p(b){return b===40?t.attempt(Z2,y,f?y:g)(b):b===91?t.attempt($2,y,f?h:g)(b):f?y(b):g(b)}function h(b){return t.attempt(K2,y,g)(b)}function y(b){return l(b)}function g(b){return s._balanced=!0,a(b)}}function eD(t,l,a){return u;function u(g){return t.enter("resource"),t.enter("resourceMarker"),t.consume(g),t.exit("resourceMarker"),o}function o(g){return Vn(g)?Pa(t,s)(g):s(g)}function s(g){return g===41?y(g):F0(t,f,m,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(g)}function f(g){return Vn(g)?Pa(t,p)(g):y(g)}function m(g){return a(g)}function p(g){return g===34||g===39||g===40?M0(t,h,a,"resourceTitle","resourceTitleMarker","resourceTitleString")(g):y(g)}function h(g){return Vn(g)?Pa(t,y)(g):y(g)}function y(g){return g===41?(t.enter("resourceMarker"),t.consume(g),t.exit("resourceMarker"),t.exit("resource"),l):a(g)}}function tD(t,l,a){const u=this;return o;function o(m){return z0.call(u,t,s,f,"reference","referenceMarker","referenceString")(m)}function s(m){return u.parser.defined.includes(mt(u.sliceSerialize(u.events[u.events.length-1][1]).slice(1,-1)))?l(m):a(m)}function f(m){return a(m)}}function rD(t,l,a){return u;function u(s){return t.enter("reference"),t.enter("referenceMarker"),t.consume(s),t.exit("referenceMarker"),o}function o(s){return s===93?(t.enter("referenceMarker"),t.consume(s),t.exit("referenceMarker"),t.exit("reference"),l):a(s)}}const lD={name:"labelStartImage",resolveAll:vf.resolveAll,tokenize:aD};function aD(t,l,a){const u=this;return o;function o(m){return t.enter("labelImage"),t.enter("labelImageMarker"),t.consume(m),t.exit("labelImageMarker"),s}function s(m){return m===91?(t.enter("labelMarker"),t.consume(m),t.exit("labelMarker"),t.exit("labelImage"),f):a(m)}function f(m){return m===94&&"_hiddenFootnoteSupport"in u.parser.constructs?a(m):l(m)}}const iD={name:"labelStartLink",resolveAll:vf.resolveAll,tokenize:uD};function uD(t,l,a){const u=this;return o;function o(f){return t.enter("labelLink"),t.enter("labelMarker"),t.consume(f),t.exit("labelMarker"),t.exit("labelLink"),s}function s(f){return f===94&&"_hiddenFootnoteSupport"in u.parser.constructs?a(f):l(f)}}const Cc={name:"lineEnding",tokenize:oD};function oD(t,l){return a;function a(u){return t.enter("lineEnding"),t.consume(u),t.exit("lineEnding"),Tn(t,l,"linePrefix")}}const wu={name:"thematicBreak",tokenize:sD};function sD(t,l,a){let u=0,o;return s;function s(h){return t.enter("thematicBreak"),f(h)}function f(h){return o=h,m(h)}function m(h){return h===o?(t.enter("thematicBreakSequence"),p(h)):u>=3&&(h===null||dn(h))?(t.exit("thematicBreak"),l(h)):a(h)}function p(h){return h===o?(t.consume(h),u++,p):(t.exit("thematicBreakSequence"),En(h)?Tn(t,m,"whitespace")(h):m(h))}}const Ne={continuation:{tokenize:mD},exit:pD,name:"list",tokenize:dD},cD={partial:!0,tokenize:gD},fD={partial:!0,tokenize:hD};function dD(t,l,a){const u=this,o=u.events[u.events.length-1];let s=o&&o[1].type==="linePrefix"?o[2].sliceSerialize(o[1],!0).length:0,f=0;return m;function m(v){const I=u.containerState.type||(v===42||v===43||v===45?"listUnordered":"listOrdered");if(I==="listUnordered"?!u.containerState.marker||v===u.containerState.marker:Xc(v)){if(u.containerState.type||(u.containerState.type=I,t.enter(I,{_container:!0})),I==="listUnordered")return t.enter("listItemPrefix"),v===42||v===45?t.check(wu,a,h)(v):h(v);if(!u.interrupt||v===49)return t.enter("listItemPrefix"),t.enter("listItemValue"),p(v)}return a(v)}function p(v){return Xc(v)&&++f<10?(t.consume(v),p):(!u.interrupt||f<2)&&(u.containerState.marker?v===u.containerState.marker:v===41||v===46)?(t.exit("listItemValue"),h(v)):a(v)}function h(v){return t.enter("listItemMarker"),t.consume(v),t.exit("listItemMarker"),u.containerState.marker=u.containerState.marker||v,t.check($a,u.interrupt?a:y,t.attempt(cD,b,g))}function y(v){return u.containerState.initialBlankLine=!0,s++,b(v)}function g(v){return En(v)?(t.enter("listItemPrefixWhitespace"),t.consume(v),t.exit("listItemPrefixWhitespace"),b):a(v)}function b(v){return u.containerState.size=s+u.sliceSerialize(t.exit("listItemPrefix"),!0).length,l(v)}}function mD(t,l,a){const u=this;return u.containerState._closeFlow=void 0,t.check($a,o,s);function o(m){return u.containerState.furtherBlankLines=u.containerState.furtherBlankLines||u.containerState.initialBlankLine,Tn(t,l,"listItemIndent",u.containerState.size+1)(m)}function s(m){return u.containerState.furtherBlankLines||!En(m)?(u.containerState.furtherBlankLines=void 0,u.containerState.initialBlankLine=void 0,f(m)):(u.containerState.furtherBlankLines=void 0,u.containerState.initialBlankLine=void 0,t.attempt(fD,l,f)(m))}function f(m){return u.containerState._closeFlow=!0,u.interrupt=void 0,Tn(t,t.attempt(Ne,l,a),"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(m)}}function hD(t,l,a){const u=this;return Tn(t,o,"listItemIndent",u.containerState.size+1);function o(s){const f=u.events[u.events.length-1];return f&&f[1].type==="listItemIndent"&&f[2].sliceSerialize(f[1],!0).length===u.containerState.size?l(s):a(s)}}function pD(t){t.exit(this.containerState.type)}function gD(t,l,a){const u=this;return Tn(t,o,"listItemPrefixWhitespace",u.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function o(s){const f=u.events[u.events.length-1];return!En(s)&&f&&f[1].type==="listItemPrefixWhitespace"?l(s):a(s)}}const dg={name:"setextUnderline",resolveTo:AD,tokenize:yD};function AD(t,l){let a=t.length,u,o,s;for(;a--;)if(t[a][0]==="enter"){if(t[a][1].type==="content"){u=a;break}t[a][1].type==="paragraph"&&(o=a)}else t[a][1].type==="content"&&t.splice(a,1),!s&&t[a][1].type==="definition"&&(s=a);const f={type:"setextHeading",start:{...t[u][1].start},end:{...t[t.length-1][1].end}};return t[o][1].type="setextHeadingText",s?(t.splice(o,0,["enter",f,l]),t.splice(s+1,0,["exit",t[u][1],l]),t[u][1].end={...t[s][1].end}):t[u][1]=f,t.push(["exit",f,l]),t}function yD(t,l,a){const u=this;let o;return s;function s(h){let y=u.events.length,g;for(;y--;)if(u.events[y][1].type!=="lineEnding"&&u.events[y][1].type!=="linePrefix"&&u.events[y][1].type!=="content"){g=u.events[y][1].type==="paragraph";break}return!u.parser.lazy[u.now().line]&&(u.interrupt||g)?(t.enter("setextHeadingLine"),o=h,f(h)):a(h)}function f(h){return t.enter("setextHeadingLineSequence"),m(h)}function m(h){return h===o?(t.consume(h),m):(t.exit("setextHeadingLineSequence"),En(h)?Tn(t,p,"lineSuffix")(h):p(h))}function p(h){return h===null||dn(h)?(t.exit("setextHeadingLine"),l(h)):a(h)}}const xD={tokenize:bD};function bD(t){const l=this,a=t.attempt($a,u,t.attempt(this.parser.constructs.flowInitial,o,Tn(t,t.attempt(this.parser.constructs.flow,o,t.attempt(S2,o)),"linePrefix")));return a;function u(s){if(s===null){t.consume(s);return}return t.enter("lineEndingBlank"),t.consume(s),t.exit("lineEndingBlank"),l.currentConstruct=void 0,a}function o(s){if(s===null){t.consume(s);return}return t.enter("lineEnding"),t.consume(s),t.exit("lineEnding"),l.currentConstruct=void 0,a}}const vD={resolveAll:O0()},DD=B0("string"),kD=B0("text");function B0(t){return{resolveAll:O0(t==="text"?ID:void 0),tokenize:l};function l(a){const u=this,o=this.parser.constructs[t],s=a.attempt(o,f,m);return f;function f(y){return h(y)?s(y):m(y)}function m(y){if(y===null){a.consume(y);return}return a.enter("data"),a.consume(y),p}function p(y){return h(y)?(a.exit("data"),s(y)):(a.consume(y),p)}function h(y){if(y===null)return!0;const g=o[y];let b=-1;if(g)for(;++b<g.length;){const v=g[b];if(!v.previous||v.previous.call(u,u.previous))return!0}return!1}}}function O0(t){return l;function l(a,u){let o=-1,s;for(;++o<=a.length;)s===void 0?a[o]&&a[o][1].type==="data"&&(s=o,o++):(!a[o]||a[o][1].type!=="data")&&(o!==s+2&&(a[s][1].end=a[o-1][1].end,a.splice(s+2,o-s-2),o=s+2),s=void 0);return t?t(a,u):a}}function ID(t,l){let a=0;for(;++a<=t.length;)if((a===t.length||t[a][1].type==="lineEnding")&&t[a-1][1].type==="data"){const u=t[a-1][1],o=l.sliceStream(u);let s=o.length,f=-1,m=0,p;for(;s--;){const h=o[s];if(typeof h=="string"){for(f=h.length;h.charCodeAt(f-1)===32;)m++,f--;if(f)break;f=-1}else if(h===-2)p=!0,m++;else if(h!==-1){s++;break}}if(l._contentTypeTextTrailing&&a===t.length&&(m=0),m){const h={type:a===t.length||p||m<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:s?f:u.start._bufferIndex+f,_index:u.start._index+s,line:u.end.line,column:u.end.column-m,offset:u.end.offset-m},end:{...u.end}};u.end={...h.start},u.start.offset===u.end.offset?Object.assign(u,h):(t.splice(a,0,["enter",h,l],["exit",h,l]),a+=2)}a++}return t}const SD={42:Ne,43:Ne,45:Ne,48:Ne,49:Ne,50:Ne,51:Ne,52:Ne,53:Ne,54:Ne,55:Ne,56:Ne,57:Ne,62:R0},ED={91:R2},CD={[-2]:Ec,[-1]:Ec,32:Ec},wD={35:M2,42:wu,45:[dg,wu],60:P2,61:dg,95:wu,96:cg,126:cg},_D={38:j0,92:T0},RD={[-5]:Cc,[-4]:Cc,[-3]:Cc,33:lD,38:j0,42:Zc,60:[i2,Q2],91:iD,92:[F2,T0],93:vf,95:Zc,96:x2},TD={null:[Zc,vD]},jD={null:[42,95]},ND={null:[]},FD=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:jD,contentInitial:ED,disable:ND,document:SD,flow:wD,flowInitial:CD,insideSpan:TD,string:_D,text:RD},Symbol.toStringTag,{value:"Module"}));function zD(t,l,a){let u={_bufferIndex:-1,_index:0,line:a&&a.line||1,column:a&&a.column||1,offset:a&&a.offset||0};const o={},s=[];let f=[],m=[];const p={attempt:J(rn),check:J(G),consume:U,enter:L,exit:en,interrupt:J(G,{interrupt:!0})},h={code:null,containerState:{},defineSkip:C,events:[],now:I,parser:t,previous:null,sliceSerialize:b,sliceStream:v,write:g};let y=l.tokenize.call(h,p);return l.resolveAll&&s.push(l),h;function g(tn){return f=lt(f,tn),w(),f[f.length-1]!==null?[]:(fn(l,0),h.events=Vu(s,h.events,h),h.events)}function b(tn,nn){return BD(v(tn),nn)}function v(tn){return MD(f,tn)}function I(){const{_bufferIndex:tn,_index:nn,line:vn,column:an,offset:Z}=u;return{_bufferIndex:tn,_index:nn,line:vn,column:an,offset:Z}}function C(tn){o[tn.line]=tn.column,O()}function w(){let tn;for(;u._index<f.length;){const nn=f[u._index];if(typeof nn=="string")for(tn=u._index,u._bufferIndex<0&&(u._bufferIndex=0);u._index===tn&&u._bufferIndex<nn.length;)R(nn.charCodeAt(u._bufferIndex));else R(nn)}}function R(tn){y=y(tn)}function U(tn){dn(tn)?(u.line++,u.column=1,u.offset+=tn===-3?2:1,O()):tn!==-1&&(u.column++,u.offset++),u._bufferIndex<0?u._index++:(u._bufferIndex++,u._bufferIndex===f[u._index].length&&(u._bufferIndex=-1,u._index++)),h.previous=tn}function L(tn,nn){const vn=nn||{};return vn.type=tn,vn.start=I(),h.events.push(["enter",vn,h]),m.push(vn),vn}function en(tn){const nn=m.pop();return nn.end=I(),h.events.push(["exit",nn,h]),nn}function rn(tn,nn){fn(tn,nn.from)}function G(tn,nn){nn.restore()}function J(tn,nn){return vn;function vn(an,Z,B){let X,on,Dn,S;return Array.isArray(an)?q(an):"tokenize"in an?q([an]):_(an);function _(sn){return Cn;function Cn(Zn){const Ln=Zn!==null&&sn[Zn],Ye=Zn!==null&&sn.null,vt=[...Array.isArray(Ln)?Ln:Ln?[Ln]:[],...Array.isArray(Ye)?Ye:Ye?[Ye]:[]];return q(vt)(Zn)}}function q(sn){return X=sn,on=0,sn.length===0?B:k(sn[on])}function k(sn){return Cn;function Cn(Zn){return S=pn(),Dn=sn,sn.partial||(h.currentConstruct=sn),sn.name&&h.parser.constructs.disable.null.includes(sn.name)?hn():sn.tokenize.call(nn?Object.assign(Object.create(h),nn):h,p,W,hn)(Zn)}}function W(sn){return tn(Dn,S),Z}function hn(sn){return S.restore(),++on<X.length?k(X[on]):B}}}function fn(tn,nn){tn.resolveAll&&!s.includes(tn)&&s.push(tn),tn.resolve&&qe(h.events,nn,h.events.length-nn,tn.resolve(h.events.slice(nn),h)),tn.resolveTo&&(h.events=tn.resolveTo(h.events,h))}function pn(){const tn=I(),nn=h.previous,vn=h.currentConstruct,an=h.events.length,Z=Array.from(m);return{from:an,restore:B};function B(){u=tn,h.previous=nn,h.currentConstruct=vn,h.events.length=an,m=Z,O()}}function O(){u.line in o&&u.column<2&&(u.column=o[u.line],u.offset+=o[u.line]-1)}}function MD(t,l){const a=l.start._index,u=l.start._bufferIndex,o=l.end._index,s=l.end._bufferIndex;let f;if(a===o)f=[t[a].slice(u,s)];else{if(f=t.slice(a,o),u>-1){const m=f[0];typeof m=="string"?f[0]=m.slice(u):f.shift()}s>0&&f.push(t[o].slice(0,s))}return f}function BD(t,l){let a=-1;const u=[];let o;for(;++a<t.length;){const s=t[a];let f;if(typeof s=="string")f=s;else switch(s){case-5:{f="\r";break}case-4:{f=`
`;break}case-3:{f=`\r
`;break}case-2:{f=l?" ":"	";break}case-1:{if(!l&&o)continue;f=" ";break}default:f=String.fromCharCode(s)}o=s===-2,u.push(f)}return u.join("")}function OD(t){const u={constructs:w0([FD,...(t||{}).extensions||[]]),content:o(Wv),defined:[],document:o(e2),flow:o(xD),lazy:{},string:o(DD),text:o(kD)};return u;function o(s){return f;function f(m){return zD(u,s,m)}}}function LD(t){for(;!N0(t););return t}const mg=/[\0\t\n\r]/g;function PD(){let t=1,l="",a=!0,u;return o;function o(s,f,m){const p=[];let h,y,g,b,v;for(s=l+(typeof s=="string"?s.toString():new TextDecoder(f||void 0).decode(s)),g=0,l="",a&&(s.charCodeAt(0)===65279&&g++,a=void 0);g<s.length;){if(mg.lastIndex=g,h=mg.exec(s),b=h&&h.index!==void 0?h.index:s.length,v=s.charCodeAt(b),!h){l=s.slice(g);break}if(v===10&&g===b&&u)p.push(-3),u=void 0;else switch(u&&(p.push(-5),u=void 0),g<b&&(p.push(s.slice(g,b)),t+=b-g),v){case 0:{p.push(65533),t++;break}case 9:{for(y=Math.ceil(t/4)*4,p.push(-2);t++<y;)p.push(-1);break}case 10:{p.push(-4),t=1;break}default:u=!0,t=1}g=b+1}return m&&(u&&p.push(-5),l&&p.push(l),p.push(null)),p}}const GD=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function UD(t){return t.replace(GD,HD)}function HD(t,l,a){if(l)return l;if(a.charCodeAt(0)===35){const o=a.charCodeAt(1),s=o===120||o===88;return _0(a.slice(s?2:1),s?16:10)}return bf(a)||t}const L0={}.hasOwnProperty;function qD(t,l,a){return l&&typeof l=="object"&&(a=l,l=void 0),VD(a)(LD(OD(a).document().write(PD()(t,l,!0))))}function VD(t){const l={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:s(Pr),autolinkProtocol:pn,autolinkEmail:pn,atxHeading:s(Or),blockQuote:s(Ye),characterEscape:pn,characterReference:pn,codeFenced:s(vt),codeFencedFenceInfo:f,codeFencedFenceMeta:f,codeIndented:s(vt,f),codeText:s(Ol,f),codeTextData:pn,data:pn,codeFlowValue:pn,definition:s(ei),definitionDestinationString:f,definitionLabelString:f,definitionTitleString:f,emphasis:s(Dt),hardBreakEscape:s(Lr),hardBreakTrailing:s(Lr),htmlFlow:s(ti,f),htmlFlowData:pn,htmlText:s(ti,f),htmlTextData:pn,image:s(ri),label:f,link:s(Pr),listItem:s(Ll),listItemValue:b,listOrdered:s(Gr,g),listUnordered:s(Gr),paragraph:s(Ju),reference:k,referenceString:f,resourceDestinationString:f,resourceTitleString:f,setextHeading:s(Or),strong:s(Wu),thematicBreak:s(no)},exit:{atxHeading:p(),atxHeadingSequence:rn,autolink:p(),autolinkEmail:Ln,autolinkProtocol:Zn,blockQuote:p(),characterEscapeValue:O,characterReferenceMarkerHexadecimal:hn,characterReferenceMarkerNumeric:hn,characterReferenceValue:sn,characterReference:Cn,codeFenced:p(w),codeFencedFence:C,codeFencedFenceInfo:v,codeFencedFenceMeta:I,codeFlowValue:O,codeIndented:p(R),codeText:p(Z),codeTextData:O,data:O,definition:p(),definitionDestinationString:en,definitionLabelString:U,definitionTitleString:L,emphasis:p(),hardBreakEscape:p(nn),hardBreakTrailing:p(nn),htmlFlow:p(vn),htmlFlowData:O,htmlText:p(an),htmlTextData:O,image:p(X),label:Dn,labelText:on,lineEnding:tn,link:p(B),listItem:p(),listOrdered:p(),listUnordered:p(),paragraph:p(),referenceString:W,resourceDestinationString:S,resourceTitleString:_,resource:q,setextHeading:p(fn),setextHeadingLineSequence:J,setextHeadingText:G,strong:p(),thematicBreak:p()}};P0(l,(t||{}).mdastExtensions||[]);const a={};return u;function u(V){let K={type:"root",children:[]};const gn={stack:[K],tokenStack:[],config:l,enter:m,exit:h,buffer:f,resume:y,data:a},kn=[];let Mn=-1;for(;++Mn<V.length;)if(V[Mn][1].type==="listOrdered"||V[Mn][1].type==="listUnordered")if(V[Mn][0]==="enter")kn.push(Mn);else{const ze=kn.pop();Mn=o(V,ze,Mn)}for(Mn=-1;++Mn<V.length;){const ze=l[V[Mn][0]];L0.call(ze,V[Mn][1].type)&&ze[V[Mn][1].type].call(Object.assign({sliceSerialize:V[Mn][2].sliceSerialize},gn),V[Mn][1])}if(gn.tokenStack.length>0){const ze=gn.tokenStack[gn.tokenStack.length-1];(ze[1]||hg).call(gn,void 0,ze[0])}for(K.position={start:pr(V.length>0?V[0][1].start:{line:1,column:1,offset:0}),end:pr(V.length>0?V[V.length-2][1].end:{line:1,column:1,offset:0})},Mn=-1;++Mn<l.transforms.length;)K=l.transforms[Mn](K)||K;return K}function o(V,K,gn){let kn=K-1,Mn=-1,ze=!1,kt,ve,ue,Ie;for(;++kn<=gn;){const Hn=V[kn];switch(Hn[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Hn[0]==="enter"?Mn++:Mn--,Ie=void 0;break}case"lineEndingBlank":{Hn[0]==="enter"&&(kt&&!Ie&&!Mn&&!ue&&(ue=kn),Ie=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Ie=void 0}if(!Mn&&Hn[0]==="enter"&&Hn[1].type==="listItemPrefix"||Mn===-1&&Hn[0]==="exit"&&(Hn[1].type==="listUnordered"||Hn[1].type==="listOrdered")){if(kt){let qt=kn;for(ve=void 0;qt--;){const ut=V[qt];if(ut[1].type==="lineEnding"||ut[1].type==="lineEndingBlank"){if(ut[0]==="exit")continue;ve&&(V[ve][1].type="lineEndingBlank",ze=!0),ut[1].type="lineEnding",ve=qt}else if(!(ut[1].type==="linePrefix"||ut[1].type==="blockQuotePrefix"||ut[1].type==="blockQuotePrefixWhitespace"||ut[1].type==="blockQuoteMarker"||ut[1].type==="listItemIndent"))break}ue&&(!ve||ue<ve)&&(kt._spread=!0),kt.end=Object.assign({},ve?V[ve][1].start:Hn[1].end),V.splice(ve||kn,0,["exit",kt,Hn[2]]),kn++,gn++}if(Hn[1].type==="listItemPrefix"){const qt={type:"listItem",_spread:!1,start:Object.assign({},Hn[1].start),end:void 0};kt=qt,V.splice(kn,0,["enter",qt,Hn[2]]),kn++,gn++,ue=void 0,Ie=!0}}}return V[K][1]._spread=ze,gn}function s(V,K){return gn;function gn(kn){m.call(this,V(kn),kn),K&&K.call(this,kn)}}function f(){this.stack.push({type:"fragment",children:[]})}function m(V,K,gn){this.stack[this.stack.length-1].children.push(V),this.stack.push(V),this.tokenStack.push([K,gn||void 0]),V.position={start:pr(K.start),end:void 0}}function p(V){return K;function K(gn){V&&V.call(this,gn),h.call(this,gn)}}function h(V,K){const gn=this.stack.pop(),kn=this.tokenStack.pop();if(kn)kn[0].type!==V.type&&(K?K.call(this,V,kn[0]):(kn[1]||hg).call(this,V,kn[0]));else throw new Error("Cannot close `"+V.type+"` ("+La({start:V.start,end:V.end})+"): it’s not open");gn.position.end=pr(V.end)}function y(){return xf(this.stack.pop())}function g(){this.data.expectingFirstListItemValue=!0}function b(V){if(this.data.expectingFirstListItemValue){const K=this.stack[this.stack.length-2];K.start=Number.parseInt(this.sliceSerialize(V),10),this.data.expectingFirstListItemValue=void 0}}function v(){const V=this.resume(),K=this.stack[this.stack.length-1];K.lang=V}function I(){const V=this.resume(),K=this.stack[this.stack.length-1];K.meta=V}function C(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function w(){const V=this.resume(),K=this.stack[this.stack.length-1];K.value=V.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function R(){const V=this.resume(),K=this.stack[this.stack.length-1];K.value=V.replace(/(\r?\n|\r)$/g,"")}function U(V){const K=this.resume(),gn=this.stack[this.stack.length-1];gn.label=K,gn.identifier=mt(this.sliceSerialize(V)).toLowerCase()}function L(){const V=this.resume(),K=this.stack[this.stack.length-1];K.title=V}function en(){const V=this.resume(),K=this.stack[this.stack.length-1];K.url=V}function rn(V){const K=this.stack[this.stack.length-1];if(!K.depth){const gn=this.sliceSerialize(V).length;K.depth=gn}}function G(){this.data.setextHeadingSlurpLineEnding=!0}function J(V){const K=this.stack[this.stack.length-1];K.depth=this.sliceSerialize(V).codePointAt(0)===61?1:2}function fn(){this.data.setextHeadingSlurpLineEnding=void 0}function pn(V){const gn=this.stack[this.stack.length-1].children;let kn=gn[gn.length-1];(!kn||kn.type!=="text")&&(kn=be(),kn.position={start:pr(V.start),end:void 0},gn.push(kn)),this.stack.push(kn)}function O(V){const K=this.stack.pop();K.value+=this.sliceSerialize(V),K.position.end=pr(V.end)}function tn(V){const K=this.stack[this.stack.length-1];if(this.data.atHardBreak){const gn=K.children[K.children.length-1];gn.position.end=pr(V.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&l.canContainEols.includes(K.type)&&(pn.call(this,V),O.call(this,V))}function nn(){this.data.atHardBreak=!0}function vn(){const V=this.resume(),K=this.stack[this.stack.length-1];K.value=V}function an(){const V=this.resume(),K=this.stack[this.stack.length-1];K.value=V}function Z(){const V=this.resume(),K=this.stack[this.stack.length-1];K.value=V}function B(){const V=this.stack[this.stack.length-1];if(this.data.inReference){const K=this.data.referenceType||"shortcut";V.type+="Reference",V.referenceType=K,delete V.url,delete V.title}else delete V.identifier,delete V.label;this.data.referenceType=void 0}function X(){const V=this.stack[this.stack.length-1];if(this.data.inReference){const K=this.data.referenceType||"shortcut";V.type+="Reference",V.referenceType=K,delete V.url,delete V.title}else delete V.identifier,delete V.label;this.data.referenceType=void 0}function on(V){const K=this.sliceSerialize(V),gn=this.stack[this.stack.length-2];gn.label=UD(K),gn.identifier=mt(K).toLowerCase()}function Dn(){const V=this.stack[this.stack.length-1],K=this.resume(),gn=this.stack[this.stack.length-1];if(this.data.inReference=!0,gn.type==="link"){const kn=V.children;gn.children=kn}else gn.alt=K}function S(){const V=this.resume(),K=this.stack[this.stack.length-1];K.url=V}function _(){const V=this.resume(),K=this.stack[this.stack.length-1];K.title=V}function q(){this.data.inReference=void 0}function k(){this.data.referenceType="collapsed"}function W(V){const K=this.resume(),gn=this.stack[this.stack.length-1];gn.label=K,gn.identifier=mt(this.sliceSerialize(V)).toLowerCase(),this.data.referenceType="full"}function hn(V){this.data.characterReferenceType=V.type}function sn(V){const K=this.sliceSerialize(V),gn=this.data.characterReferenceType;let kn;gn?(kn=_0(K,gn==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):kn=bf(K);const Mn=this.stack[this.stack.length-1];Mn.value+=kn}function Cn(V){const K=this.stack.pop();K.position.end=pr(V.end)}function Zn(V){O.call(this,V);const K=this.stack[this.stack.length-1];K.url=this.sliceSerialize(V)}function Ln(V){O.call(this,V);const K=this.stack[this.stack.length-1];K.url="mailto:"+this.sliceSerialize(V)}function Ye(){return{type:"blockquote",children:[]}}function vt(){return{type:"code",lang:null,meta:null,value:""}}function Ol(){return{type:"inlineCode",value:""}}function ei(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Dt(){return{type:"emphasis",children:[]}}function Or(){return{type:"heading",depth:0,children:[]}}function Lr(){return{type:"break"}}function ti(){return{type:"html",value:""}}function ri(){return{type:"image",title:null,url:"",alt:null}}function Pr(){return{type:"link",title:null,url:"",children:[]}}function Gr(V){return{type:"list",ordered:V.type==="listOrdered",start:null,spread:V._spread,children:[]}}function Ll(V){return{type:"listItem",spread:V._spread,checked:null,children:[]}}function Ju(){return{type:"paragraph",children:[]}}function Wu(){return{type:"strong",children:[]}}function be(){return{type:"text",value:""}}function no(){return{type:"thematicBreak"}}}function pr(t){return{line:t.line,column:t.column,offset:t.offset}}function P0(t,l){let a=-1;for(;++a<l.length;){const u=l[a];Array.isArray(u)?P0(t,u):YD(t,u)}}function YD(t,l){let a;for(a in l)if(L0.call(l,a))switch(a){case"canContainEols":{const u=l[a];u&&t[a].push(...u);break}case"transforms":{const u=l[a];u&&t[a].push(...u);break}case"enter":case"exit":{const u=l[a];u&&Object.assign(t[a],u);break}}}function hg(t,l){throw t?new Error("Cannot close `"+t.type+"` ("+La({start:t.start,end:t.end})+"): a different token (`"+l.type+"`, "+La({start:l.start,end:l.end})+") is open"):new Error("Cannot close document, a token (`"+l.type+"`, "+La({start:l.start,end:l.end})+") is still open")}function QD(t){const l=this;l.parser=a;function a(u){return qD(u,{...l.data("settings"),...t,extensions:l.data("micromarkExtensions")||[],mdastExtensions:l.data("fromMarkdownExtensions")||[]})}}function XD(t,l){const a={type:"element",tagName:"blockquote",properties:{},children:t.wrap(t.all(l),!0)};return t.patch(l,a),t.applyData(l,a)}function ZD(t,l){const a={type:"element",tagName:"br",properties:{},children:[]};return t.patch(l,a),[t.applyData(l,a),{type:"text",value:`
`}]}function $D(t,l){const a=l.value?l.value+`
`:"",u={},o=l.lang?l.lang.split(/\s+/):[];o.length>0&&(u.className=["language-"+o[0]]);let s={type:"element",tagName:"code",properties:u,children:[{type:"text",value:a}]};return l.meta&&(s.data={meta:l.meta}),t.patch(l,s),s=t.applyData(l,s),s={type:"element",tagName:"pre",properties:{},children:[s]},t.patch(l,s),s}function KD(t,l){const a={type:"element",tagName:"del",properties:{},children:t.all(l)};return t.patch(l,a),t.applyData(l,a)}function JD(t,l){const a={type:"element",tagName:"em",properties:{},children:t.all(l)};return t.patch(l,a),t.applyData(l,a)}function WD(t,l){const a=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",u=String(l.identifier).toUpperCase(),o=Bl(u.toLowerCase()),s=t.footnoteOrder.indexOf(u);let f,m=t.footnoteCounts.get(u);m===void 0?(m=0,t.footnoteOrder.push(u),f=t.footnoteOrder.length):f=s+1,m+=1,t.footnoteCounts.set(u,m);const p={type:"element",tagName:"a",properties:{href:"#"+a+"fn-"+o,id:a+"fnref-"+o+(m>1?"-"+m:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(f)}]};t.patch(l,p);const h={type:"element",tagName:"sup",properties:{},children:[p]};return t.patch(l,h),t.applyData(l,h)}function nk(t,l){const a={type:"element",tagName:"h"+l.depth,properties:{},children:t.all(l)};return t.patch(l,a),t.applyData(l,a)}function ek(t,l){if(t.options.allowDangerousHtml){const a={type:"raw",value:l.value};return t.patch(l,a),t.applyData(l,a)}}function G0(t,l){const a=l.referenceType;let u="]";if(a==="collapsed"?u+="[]":a==="full"&&(u+="["+(l.label||l.identifier)+"]"),l.type==="imageReference")return[{type:"text",value:"!["+l.alt+u}];const o=t.all(l),s=o[0];s&&s.type==="text"?s.value="["+s.value:o.unshift({type:"text",value:"["});const f=o[o.length-1];return f&&f.type==="text"?f.value+=u:o.push({type:"text",value:u}),o}function tk(t,l){const a=String(l.identifier).toUpperCase(),u=t.definitionById.get(a);if(!u)return G0(t,l);const o={src:Bl(u.url||""),alt:l.alt};u.title!==null&&u.title!==void 0&&(o.title=u.title);const s={type:"element",tagName:"img",properties:o,children:[]};return t.patch(l,s),t.applyData(l,s)}function rk(t,l){const a={src:Bl(l.url)};l.alt!==null&&l.alt!==void 0&&(a.alt=l.alt),l.title!==null&&l.title!==void 0&&(a.title=l.title);const u={type:"element",tagName:"img",properties:a,children:[]};return t.patch(l,u),t.applyData(l,u)}function lk(t,l){const a={type:"text",value:l.value.replace(/\r?\n|\r/g," ")};t.patch(l,a);const u={type:"element",tagName:"code",properties:{},children:[a]};return t.patch(l,u),t.applyData(l,u)}function ak(t,l){const a=String(l.identifier).toUpperCase(),u=t.definitionById.get(a);if(!u)return G0(t,l);const o={href:Bl(u.url||"")};u.title!==null&&u.title!==void 0&&(o.title=u.title);const s={type:"element",tagName:"a",properties:o,children:t.all(l)};return t.patch(l,s),t.applyData(l,s)}function ik(t,l){const a={href:Bl(l.url)};l.title!==null&&l.title!==void 0&&(a.title=l.title);const u={type:"element",tagName:"a",properties:a,children:t.all(l)};return t.patch(l,u),t.applyData(l,u)}function uk(t,l,a){const u=t.all(l),o=a?ok(a):U0(l),s={},f=[];if(typeof l.checked=="boolean"){const y=u[0];let g;y&&y.type==="element"&&y.tagName==="p"?g=y:(g={type:"element",tagName:"p",properties:{},children:[]},u.unshift(g)),g.children.length>0&&g.children.unshift({type:"text",value:" "}),g.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:l.checked,disabled:!0},children:[]}),s.className=["task-list-item"]}let m=-1;for(;++m<u.length;){const y=u[m];(o||m!==0||y.type!=="element"||y.tagName!=="p")&&f.push({type:"text",value:`
`}),y.type==="element"&&y.tagName==="p"&&!o?f.push(...y.children):f.push(y)}const p=u[u.length-1];p&&(o||p.type!=="element"||p.tagName!=="p")&&f.push({type:"text",value:`
`});const h={type:"element",tagName:"li",properties:s,children:f};return t.patch(l,h),t.applyData(l,h)}function ok(t){let l=!1;if(t.type==="list"){l=t.spread||!1;const a=t.children;let u=-1;for(;!l&&++u<a.length;)l=U0(a[u])}return l}function U0(t){const l=t.spread;return l??t.children.length>1}function sk(t,l){const a={},u=t.all(l);let o=-1;for(typeof l.start=="number"&&l.start!==1&&(a.start=l.start);++o<u.length;){const f=u[o];if(f.type==="element"&&f.tagName==="li"&&f.properties&&Array.isArray(f.properties.className)&&f.properties.className.includes("task-list-item")){a.className=["contains-task-list"];break}}const s={type:"element",tagName:l.ordered?"ol":"ul",properties:a,children:t.wrap(u,!0)};return t.patch(l,s),t.applyData(l,s)}function ck(t,l){const a={type:"element",tagName:"p",properties:{},children:t.all(l)};return t.patch(l,a),t.applyData(l,a)}function fk(t,l){const a={type:"root",children:t.wrap(t.all(l))};return t.patch(l,a),t.applyData(l,a)}function dk(t,l){const a={type:"element",tagName:"strong",properties:{},children:t.all(l)};return t.patch(l,a),t.applyData(l,a)}function mk(t,l){const a=t.all(l),u=a.shift(),o=[];if(u){const f={type:"element",tagName:"thead",properties:{},children:t.wrap([u],!0)};t.patch(l.children[0],f),o.push(f)}if(a.length>0){const f={type:"element",tagName:"tbody",properties:{},children:t.wrap(a,!0)},m=pf(l.children[1]),p=v0(l.children[l.children.length-1]);m&&p&&(f.position={start:m,end:p}),o.push(f)}const s={type:"element",tagName:"table",properties:{},children:t.wrap(o,!0)};return t.patch(l,s),t.applyData(l,s)}function hk(t,l,a){const u=a?a.children:void 0,s=(u?u.indexOf(l):1)===0?"th":"td",f=a&&a.type==="table"?a.align:void 0,m=f?f.length:l.children.length;let p=-1;const h=[];for(;++p<m;){const g=l.children[p],b={},v=f?f[p]:void 0;v&&(b.align=v);let I={type:"element",tagName:s,properties:b,children:[]};g&&(I.children=t.all(g),t.patch(g,I),I=t.applyData(g,I)),h.push(I)}const y={type:"element",tagName:"tr",properties:{},children:t.wrap(h,!0)};return t.patch(l,y),t.applyData(l,y)}function pk(t,l){const a={type:"element",tagName:"td",properties:{},children:t.all(l)};return t.patch(l,a),t.applyData(l,a)}const pg=9,gg=32;function gk(t){const l=String(t),a=/\r?\n|\r/g;let u=a.exec(l),o=0;const s=[];for(;u;)s.push(Ag(l.slice(o,u.index),o>0,!0),u[0]),o=u.index+u[0].length,u=a.exec(l);return s.push(Ag(l.slice(o),o>0,!1)),s.join("")}function Ag(t,l,a){let u=0,o=t.length;if(l){let s=t.codePointAt(u);for(;s===pg||s===gg;)u++,s=t.codePointAt(u)}if(a){let s=t.codePointAt(o-1);for(;s===pg||s===gg;)o--,s=t.codePointAt(o-1)}return o>u?t.slice(u,o):""}function Ak(t,l){const a={type:"text",value:gk(String(l.value))};return t.patch(l,a),t.applyData(l,a)}function yk(t,l){const a={type:"element",tagName:"hr",properties:{},children:[]};return t.patch(l,a),t.applyData(l,a)}const xk={blockquote:XD,break:ZD,code:$D,delete:KD,emphasis:JD,footnoteReference:WD,heading:nk,html:ek,imageReference:tk,image:rk,inlineCode:lk,linkReference:ak,link:ik,listItem:uk,list:sk,paragraph:ck,root:fk,strong:dk,table:mk,tableCell:pk,tableRow:hk,text:Ak,thematicBreak:yk,toml:vu,yaml:vu,definition:vu,footnoteDefinition:vu};function vu(){}const H0=-1,Yu=0,Ga=1,Nu=2,Df=3,kf=4,If=5,Sf=6,q0=7,V0=8,bk=typeof self=="object"?self:globalThis,yg=(t,l)=>{switch(t){case"Function":case"SharedWorker":case"Worker":case"eval":case"setInterval":case"setTimeout":throw new TypeError("unable to deserialize "+t)}return new bk[t](l)},vk=(t,l)=>{const a=(o,s)=>(t.set(s,o),o),u=o=>{if(t.has(o))return t.get(o);const[s,f]=l[o];switch(s){case Yu:case H0:return a(f,o);case Ga:{const m=a([],o);for(const p of f)m.push(u(p));return m}case Nu:{const m=a({},o);for(const[p,h]of f)m[u(p)]=u(h);return m}case Df:return a(new Date(f),o);case kf:{const{source:m,flags:p}=f;return a(new RegExp(m,p),o)}case If:{const m=a(new Map,o);for(const[p,h]of f)m.set(u(p),u(h));return m}case Sf:{const m=a(new Set,o);for(const p of f)m.add(u(p));return m}case q0:{const{name:m,message:p}=f;return a(yg(m,p),o)}case V0:return a(BigInt(f),o);case"BigInt":return a(Object(BigInt(f)),o);case"ArrayBuffer":return a(new Uint8Array(f).buffer,f);case"DataView":{const{buffer:m}=new Uint8Array(f);return a(new DataView(m),f)}}return a(yg(s,f),o)};return u},xg=t=>vk(new Map,t)(0),Cl="",{toString:Dk}={},{keys:kk}=Object,Ba=t=>{const l=typeof t;if(l!=="object"||!t)return[Yu,l];const a=Dk.call(t).slice(8,-1);switch(a){case"Array":return[Ga,Cl];case"Object":return[Nu,Cl];case"Date":return[Df,Cl];case"RegExp":return[kf,Cl];case"Map":return[If,Cl];case"Set":return[Sf,Cl];case"DataView":return[Ga,a]}return a.includes("Array")?[Ga,a]:a.includes("Error")?[q0,a]:[Nu,a]},Du=([t,l])=>t===Yu&&(l==="function"||l==="symbol"),Ik=(t,l,a,u)=>{const o=(f,m)=>{const p=u.push(f)-1;return a.set(m,p),p},s=f=>{if(a.has(f))return a.get(f);let[m,p]=Ba(f);switch(m){case Yu:{let y=f;switch(p){case"bigint":m=V0,y=f.toString();break;case"function":case"symbol":if(t)throw new TypeError("unable to serialize "+p);y=null;break;case"undefined":return o([H0],f)}return o([m,y],f)}case Ga:{if(p){let b=f;return p==="DataView"?b=new Uint8Array(f.buffer):p==="ArrayBuffer"&&(b=new Uint8Array(f)),o([p,[...b]],f)}const y=[],g=o([m,y],f);for(const b of f)y.push(s(b));return g}case Nu:{if(p)switch(p){case"BigInt":return o([p,f.toString()],f);case"Boolean":case"Number":case"String":return o([p,f.valueOf()],f)}if(l&&"toJSON"in f)return s(f.toJSON());const y=[],g=o([m,y],f);for(const b of kk(f))(t||!Du(Ba(f[b])))&&y.push([s(b),s(f[b])]);return g}case Df:return o([m,f.toISOString()],f);case kf:{const{source:y,flags:g}=f;return o([m,{source:y,flags:g}],f)}case If:{const y=[],g=o([m,y],f);for(const[b,v]of f)(t||!(Du(Ba(b))||Du(Ba(v))))&&y.push([s(b),s(v)]);return g}case Sf:{const y=[],g=o([m,y],f);for(const b of f)(t||!Du(Ba(b)))&&y.push(s(b));return g}}const{message:h}=f;return o([m,{name:p,message:h}],f)};return s},bg=(t,{json:l,lossy:a}={})=>{const u=[];return Ik(!(l||a),!!l,new Map,u)(t),u},Fu=typeof structuredClone=="function"?(t,l)=>l&&("json"in l||"lossy"in l)?xg(bg(t,l)):structuredClone(t):(t,l)=>xg(bg(t,l));function Sk(t,l){const a=[{type:"text",value:"↩"}];return l>1&&a.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(l)}]}),a}function Ek(t,l){return"Back to reference "+(t+1)+(l>1?"-"+l:"")}function Ck(t){const l=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",a=t.options.footnoteBackContent||Sk,u=t.options.footnoteBackLabel||Ek,o=t.options.footnoteLabel||"Footnotes",s=t.options.footnoteLabelTagName||"h2",f=t.options.footnoteLabelProperties||{className:["sr-only"]},m=[];let p=-1;for(;++p<t.footnoteOrder.length;){const h=t.footnoteById.get(t.footnoteOrder[p]);if(!h)continue;const y=t.all(h),g=String(h.identifier).toUpperCase(),b=Bl(g.toLowerCase());let v=0;const I=[],C=t.footnoteCounts.get(g);for(;C!==void 0&&++v<=C;){I.length>0&&I.push({type:"text",value:" "});let U=typeof a=="string"?a:a(p,v);typeof U=="string"&&(U={type:"text",value:U}),I.push({type:"element",tagName:"a",properties:{href:"#"+l+"fnref-"+b+(v>1?"-"+v:""),dataFootnoteBackref:"",ariaLabel:typeof u=="string"?u:u(p,v),className:["data-footnote-backref"]},children:Array.isArray(U)?U:[U]})}const w=y[y.length-1];if(w&&w.type==="element"&&w.tagName==="p"){const U=w.children[w.children.length-1];U&&U.type==="text"?U.value+=" ":w.children.push({type:"text",value:" "}),w.children.push(...I)}else y.push(...I);const R={type:"element",tagName:"li",properties:{id:l+"fn-"+b},children:t.wrap(y,!0)};t.patch(h,R),m.push(R)}if(m.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:s,properties:{...Fu(f),id:"footnote-label"},children:[{type:"text",value:o}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:t.wrap(m,!0)},{type:"text",value:`
`}]}}const Qu=(function(t){if(t==null)return Tk;if(typeof t=="function")return Xu(t);if(typeof t=="object")return Array.isArray(t)?wk(t):_k(t);if(typeof t=="string")return Rk(t);throw new Error("Expected function, string, or object as test")});function wk(t){const l=[];let a=-1;for(;++a<t.length;)l[a]=Qu(t[a]);return Xu(u);function u(...o){let s=-1;for(;++s<l.length;)if(l[s].apply(this,o))return!0;return!1}}function _k(t){const l=t;return Xu(a);function a(u){const o=u;let s;for(s in t)if(o[s]!==l[s])return!1;return!0}}function Rk(t){return Xu(l);function l(a){return a&&a.type===t}}function Xu(t){return l;function l(a,u,o){return!!(jk(a)&&t.call(this,a,typeof u=="number"?u:void 0,o||void 0))}}function Tk(){return!0}function jk(t){return t!==null&&typeof t=="object"&&"type"in t}const Y0=[],Nk=!0,$c=!1,Fk="skip";function Q0(t,l,a,u){let o;typeof l=="function"&&typeof a!="function"?(u=a,a=l):o=l;const s=Qu(o),f=u?-1:1;m(t,void 0,[])();function m(p,h,y){const g=p&&typeof p=="object"?p:{};if(typeof g.type=="string"){const v=typeof g.tagName=="string"?g.tagName:typeof g.name=="string"?g.name:void 0;Object.defineProperty(b,"name",{value:"node ("+(p.type+(v?"<"+v+">":""))+")"})}return b;function b(){let v=Y0,I,C,w;if((!l||s(p,h,y[y.length-1]||void 0))&&(v=zk(a(p,y)),v[0]===$c))return v;if("children"in p&&p.children){const R=p;if(R.children&&v[0]!==Fk)for(C=(u?R.children.length:-1)+f,w=y.concat(R);C>-1&&C<R.children.length;){const U=R.children[C];if(I=m(U,C,w)(),I[0]===$c)return I;C=typeof I[1]=="number"?I[1]:C+f}}return v}}}function zk(t){return Array.isArray(t)?t:typeof t=="number"?[Nk,t]:t==null?Y0:[t]}function Zu(t,l,a,u){let o,s,f;typeof l=="function"&&typeof a!="function"?(s=void 0,f=l,o=a):(s=l,f=a,o=u),Q0(t,s,m,o);function m(p,h){const y=h[h.length-1],g=y?y.children.indexOf(p):void 0;return f(p,g,y)}}const Kc={}.hasOwnProperty,Mk={};function Bk(t,l){const a=l||Mk,u=new Map,o=new Map,s=new Map,f={...xk,...a.handlers},m={all:h,applyData:Lk,definitionById:u,footnoteById:o,footnoteCounts:s,footnoteOrder:[],handlers:f,one:p,options:a,patch:Ok,wrap:Gk};return Zu(t,function(y){if(y.type==="definition"||y.type==="footnoteDefinition"){const g=y.type==="definition"?u:o,b=String(y.identifier).toUpperCase();g.has(b)||g.set(b,y)}}),m;function p(y,g){const b=y.type,v=m.handlers[b];if(Kc.call(m.handlers,b)&&v)return v(m,y,g);if(m.options.passThrough&&m.options.passThrough.includes(b)){if("children"in y){const{children:C,...w}=y,R=Fu(w);return R.children=m.all(y),R}return Fu(y)}return(m.options.unknownHandler||Pk)(m,y,g)}function h(y){const g=[];if("children"in y){const b=y.children;let v=-1;for(;++v<b.length;){const I=m.one(b[v],y);if(I){if(v&&b[v-1].type==="break"&&(!Array.isArray(I)&&I.type==="text"&&(I.value=vg(I.value)),!Array.isArray(I)&&I.type==="element")){const C=I.children[0];C&&C.type==="text"&&(C.value=vg(C.value))}Array.isArray(I)?g.push(...I):g.push(I)}}}return g}}function Ok(t,l){t.position&&(l.position=Sv(t))}function Lk(t,l){let a=l;if(t&&t.data){const u=t.data.hName,o=t.data.hChildren,s=t.data.hProperties;if(typeof u=="string")if(a.type==="element")a.tagName=u;else{const f="children"in a?a.children:[a];a={type:"element",tagName:u,properties:{},children:f}}a.type==="element"&&s&&Object.assign(a.properties,Fu(s)),"children"in a&&a.children&&o!==null&&o!==void 0&&(a.children=o)}return a}function Pk(t,l){const a=l.data||{},u="value"in l&&!(Kc.call(a,"hProperties")||Kc.call(a,"hChildren"))?{type:"text",value:l.value}:{type:"element",tagName:"div",properties:{},children:t.all(l)};return t.patch(l,u),t.applyData(l,u)}function Gk(t,l){const a=[];let u=-1;for(l&&a.push({type:"text",value:`
`});++u<t.length;)u&&a.push({type:"text",value:`
`}),a.push(t[u]);return l&&t.length>0&&a.push({type:"text",value:`
`}),a}function vg(t){let l=0,a=t.charCodeAt(l);for(;a===9||a===32;)l++,a=t.charCodeAt(l);return t.slice(l)}function Dg(t,l){const a=Bk(t,l),u=a.one(t,void 0),o=Ck(a),s=Array.isArray(u)?{type:"root",children:u}:u||{type:"root",children:[]};return o&&s.children.push({type:"text",value:`
`},o),s}function Uk(t,l){return t&&"run"in t?async function(a,u){const o=Dg(a,{file:u,...l});await t.run(o,u)}:function(a,u){return Dg(a,{file:u,...t||l})}}function kg(t){if(t)throw t}var wc,Ig;function Hk(){if(Ig)return wc;Ig=1;var t=Object.prototype.hasOwnProperty,l=Object.prototype.toString,a=Object.defineProperty,u=Object.getOwnPropertyDescriptor,o=function(h){return typeof Array.isArray=="function"?Array.isArray(h):l.call(h)==="[object Array]"},s=function(h){if(!h||l.call(h)!=="[object Object]")return!1;var y=t.call(h,"constructor"),g=h.constructor&&h.constructor.prototype&&t.call(h.constructor.prototype,"isPrototypeOf");if(h.constructor&&!y&&!g)return!1;var b;for(b in h);return typeof b>"u"||t.call(h,b)},f=function(h,y){a&&y.name==="__proto__"?a(h,y.name,{enumerable:!0,configurable:!0,value:y.newValue,writable:!0}):h[y.name]=y.newValue},m=function(h,y){if(y==="__proto__")if(t.call(h,y)){if(u)return u(h,y).value}else return;return h[y]};return wc=function p(){var h,y,g,b,v,I,C=arguments[0],w=1,R=arguments.length,U=!1;for(typeof C=="boolean"&&(U=C,C=arguments[1]||{},w=2),(C==null||typeof C!="object"&&typeof C!="function")&&(C={});w<R;++w)if(h=arguments[w],h!=null)for(y in h)g=m(C,y),b=m(h,y),C!==b&&(U&&b&&(s(b)||(v=o(b)))?(v?(v=!1,I=g&&o(g)?g:[]):I=g&&s(g)?g:{},f(C,{name:y,newValue:p(U,I,b)})):typeof b<"u"&&f(C,{name:y,newValue:b}));return C},wc}var qk=Hk();const _c=Ou(qk);function Jc(t){if(typeof t!="object"||t===null)return!1;const l=Object.getPrototypeOf(t);return(l===null||l===Object.prototype||Object.getPrototypeOf(l)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)}function Vk(){const t=[],l={run:a,use:u};return l;function a(...o){let s=-1;const f=o.pop();if(typeof f!="function")throw new TypeError("Expected function as last argument, not "+f);m(null,...o);function m(p,...h){const y=t[++s];let g=-1;if(p){f(p);return}for(;++g<o.length;)(h[g]===null||h[g]===void 0)&&(h[g]=o[g]);o=h,y?Yk(y,m)(...h):f(null,...h)}}function u(o){if(typeof o!="function")throw new TypeError("Expected `middelware` to be a function, not "+o);return t.push(o),l}}function Yk(t,l){let a;return u;function u(...f){const m=t.length>f.length;let p;m&&f.push(o);try{p=t.apply(this,f)}catch(h){const y=h;if(m&&a)throw y;return o(y)}m||(p&&p.then&&typeof p.then=="function"?p.then(s,o):p instanceof Error?o(p):s(p))}function o(f,...m){a||(a=!0,l(f,...m))}function s(f){o(null,f)}}const xt={basename:Qk,dirname:Xk,extname:Zk,join:$k,sep:"/"};function Qk(t,l){if(l!==void 0&&typeof l!="string")throw new TypeError('"ext" argument must be a string');Ka(t);let a=0,u=-1,o=t.length,s;if(l===void 0||l.length===0||l.length>t.length){for(;o--;)if(t.codePointAt(o)===47){if(s){a=o+1;break}}else u<0&&(s=!0,u=o+1);return u<0?"":t.slice(a,u)}if(l===t)return"";let f=-1,m=l.length-1;for(;o--;)if(t.codePointAt(o)===47){if(s){a=o+1;break}}else f<0&&(s=!0,f=o+1),m>-1&&(t.codePointAt(o)===l.codePointAt(m--)?m<0&&(u=o):(m=-1,u=f));return a===u?u=f:u<0&&(u=t.length),t.slice(a,u)}function Xk(t){if(Ka(t),t.length===0)return".";let l=-1,a=t.length,u;for(;--a;)if(t.codePointAt(a)===47){if(u){l=a;break}}else u||(u=!0);return l<0?t.codePointAt(0)===47?"/":".":l===1&&t.codePointAt(0)===47?"//":t.slice(0,l)}function Zk(t){Ka(t);let l=t.length,a=-1,u=0,o=-1,s=0,f;for(;l--;){const m=t.codePointAt(l);if(m===47){if(f){u=l+1;break}continue}a<0&&(f=!0,a=l+1),m===46?o<0?o=l:s!==1&&(s=1):o>-1&&(s=-1)}return o<0||a<0||s===0||s===1&&o===a-1&&o===u+1?"":t.slice(o,a)}function $k(...t){let l=-1,a;for(;++l<t.length;)Ka(t[l]),t[l]&&(a=a===void 0?t[l]:a+"/"+t[l]);return a===void 0?".":Kk(a)}function Kk(t){Ka(t);const l=t.codePointAt(0)===47;let a=Jk(t,!l);return a.length===0&&!l&&(a="."),a.length>0&&t.codePointAt(t.length-1)===47&&(a+="/"),l?"/"+a:a}function Jk(t,l){let a="",u=0,o=-1,s=0,f=-1,m,p;for(;++f<=t.length;){if(f<t.length)m=t.codePointAt(f);else{if(m===47)break;m=47}if(m===47){if(!(o===f-1||s===1))if(o!==f-1&&s===2){if(a.length<2||u!==2||a.codePointAt(a.length-1)!==46||a.codePointAt(a.length-2)!==46){if(a.length>2){if(p=a.lastIndexOf("/"),p!==a.length-1){p<0?(a="",u=0):(a=a.slice(0,p),u=a.length-1-a.lastIndexOf("/")),o=f,s=0;continue}}else if(a.length>0){a="",u=0,o=f,s=0;continue}}l&&(a=a.length>0?a+"/..":"..",u=2)}else a.length>0?a+="/"+t.slice(o+1,f):a=t.slice(o+1,f),u=f-o-1;o=f,s=0}else m===46&&s>-1?s++:s=-1}return a}function Ka(t){if(typeof t!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}const Wk={cwd:n3};function n3(){return"/"}function Wc(t){return!!(t!==null&&typeof t=="object"&&"href"in t&&t.href&&"protocol"in t&&t.protocol&&t.auth===void 0)}function e3(t){if(typeof t=="string")t=new URL(t);else if(!Wc(t)){const l=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+t+"`");throw l.code="ERR_INVALID_ARG_TYPE",l}if(t.protocol!=="file:"){const l=new TypeError("The URL must be of scheme file");throw l.code="ERR_INVALID_URL_SCHEME",l}return t3(t)}function t3(t){if(t.hostname!==""){const u=new TypeError('File URL host must be "localhost" or empty on darwin');throw u.code="ERR_INVALID_FILE_URL_HOST",u}const l=t.pathname;let a=-1;for(;++a<l.length;)if(l.codePointAt(a)===37&&l.codePointAt(a+1)===50){const u=l.codePointAt(a+2);if(u===70||u===102){const o=new TypeError("File URL path must not include encoded / characters");throw o.code="ERR_INVALID_FILE_URL_PATH",o}}return decodeURIComponent(l)}const Rc=["history","path","basename","stem","extname","dirname"];class X0{constructor(l){let a;l?Wc(l)?a={path:l}:typeof l=="string"||r3(l)?a={value:l}:a=l:a={},this.cwd="cwd"in a?"":Wk.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let u=-1;for(;++u<Rc.length;){const s=Rc[u];s in a&&a[s]!==void 0&&a[s]!==null&&(this[s]=s==="history"?[...a[s]]:a[s])}let o;for(o in a)Rc.includes(o)||(this[o]=a[o])}get basename(){return typeof this.path=="string"?xt.basename(this.path):void 0}set basename(l){jc(l,"basename"),Tc(l,"basename"),this.path=xt.join(this.dirname||"",l)}get dirname(){return typeof this.path=="string"?xt.dirname(this.path):void 0}set dirname(l){Sg(this.basename,"dirname"),this.path=xt.join(l||"",this.basename)}get extname(){return typeof this.path=="string"?xt.extname(this.path):void 0}set extname(l){if(Tc(l,"extname"),Sg(this.dirname,"extname"),l){if(l.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(l.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=xt.join(this.dirname,this.stem+(l||""))}get path(){return this.history[this.history.length-1]}set path(l){Wc(l)&&(l=e3(l)),jc(l,"path"),this.path!==l&&this.history.push(l)}get stem(){return typeof this.path=="string"?xt.basename(this.path,this.extname):void 0}set stem(l){jc(l,"stem"),Tc(l,"stem"),this.path=xt.join(this.dirname||"",l+(this.extname||""))}fail(l,a,u){const o=this.message(l,a,u);throw o.fatal=!0,o}info(l,a,u){const o=this.message(l,a,u);return o.fatal=void 0,o}message(l,a,u){const o=new xe(l,a,u);return this.path&&(o.name=this.path+":"+o.name,o.file=this.path),o.fatal=!1,this.messages.push(o),o}toString(l){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(l||void 0).decode(this.value)}}function Tc(t,l){if(t&&t.includes(xt.sep))throw new Error("`"+l+"` cannot be a path: did not expect `"+xt.sep+"`")}function jc(t,l){if(!t)throw new Error("`"+l+"` cannot be empty")}function Sg(t,l){if(!t)throw new Error("Setting `"+l+"` requires `path` to be set too")}function r3(t){return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)}const l3=(function(t){const u=this.constructor.prototype,o=u[t],s=function(){return o.apply(s,arguments)};return Object.setPrototypeOf(s,u),s}),a3={}.hasOwnProperty;class Ef extends l3{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=Vk()}copy(){const l=new Ef;let a=-1;for(;++a<this.attachers.length;){const u=this.attachers[a];l.use(...u)}return l.data(_c(!0,{},this.namespace)),l}data(l,a){return typeof l=="string"?arguments.length===2?(zc("data",this.frozen),this.namespace[l]=a,this):a3.call(this.namespace,l)&&this.namespace[l]||void 0:l?(zc("data",this.frozen),this.namespace=l,this):this.namespace}freeze(){if(this.frozen)return this;const l=this;for(;++this.freezeIndex<this.attachers.length;){const[a,...u]=this.attachers[this.freezeIndex];if(u[0]===!1)continue;u[0]===!0&&(u[0]=void 0);const o=a.call(l,...u);typeof o=="function"&&this.transformers.use(o)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(l){this.freeze();const a=ku(l),u=this.parser||this.Parser;return Nc("parse",u),u(String(a),a)}process(l,a){const u=this;return this.freeze(),Nc("process",this.parser||this.Parser),Fc("process",this.compiler||this.Compiler),a?o(void 0,a):new Promise(o);function o(s,f){const m=ku(l),p=u.parse(m);u.run(p,m,function(y,g,b){if(y||!g||!b)return h(y);const v=g,I=u.stringify(v,b);o3(I)?b.value=I:b.result=I,h(y,b)});function h(y,g){y||!g?f(y):s?s(g):a(void 0,g)}}}processSync(l){let a=!1,u;return this.freeze(),Nc("processSync",this.parser||this.Parser),Fc("processSync",this.compiler||this.Compiler),this.process(l,o),Cg("processSync","process",a),u;function o(s,f){a=!0,kg(s),u=f}}run(l,a,u){Eg(l),this.freeze();const o=this.transformers;return!u&&typeof a=="function"&&(u=a,a=void 0),u?s(void 0,u):new Promise(s);function s(f,m){const p=ku(a);o.run(l,p,h);function h(y,g,b){const v=g||l;y?m(y):f?f(v):u(void 0,v,b)}}}runSync(l,a){let u=!1,o;return this.run(l,a,s),Cg("runSync","run",u),o;function s(f,m){kg(f),o=m,u=!0}}stringify(l,a){this.freeze();const u=ku(a),o=this.compiler||this.Compiler;return Fc("stringify",o),Eg(l),o(l,u)}use(l,...a){const u=this.attachers,o=this.namespace;if(zc("use",this.frozen),l!=null)if(typeof l=="function")p(l,a);else if(typeof l=="object")Array.isArray(l)?m(l):f(l);else throw new TypeError("Expected usable value, not `"+l+"`");return this;function s(h){if(typeof h=="function")p(h,[]);else if(typeof h=="object")if(Array.isArray(h)){const[y,...g]=h;p(y,g)}else f(h);else throw new TypeError("Expected usable value, not `"+h+"`")}function f(h){if(!("plugins"in h)&&!("settings"in h))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");m(h.plugins),h.settings&&(o.settings=_c(!0,o.settings,h.settings))}function m(h){let y=-1;if(h!=null)if(Array.isArray(h))for(;++y<h.length;){const g=h[y];s(g)}else throw new TypeError("Expected a list of plugins, not `"+h+"`")}function p(h,y){let g=-1,b=-1;for(;++g<u.length;)if(u[g][0]===h){b=g;break}if(b===-1)u.push([h,...y]);else if(y.length>0){let[v,...I]=y;const C=u[b][1];Jc(C)&&Jc(v)&&(v=_c(!0,C,v)),u[b]=[h,v,...I]}}}}const i3=new Ef().freeze();function Nc(t,l){if(typeof l!="function")throw new TypeError("Cannot `"+t+"` without `parser`")}function Fc(t,l){if(typeof l!="function")throw new TypeError("Cannot `"+t+"` without `compiler`")}function zc(t,l){if(l)throw new Error("Cannot call `"+t+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Eg(t){if(!Jc(t)||typeof t.type!="string")throw new TypeError("Expected node, got `"+t+"`")}function Cg(t,l,a){if(!a)throw new Error("`"+t+"` finished async. Use `"+l+"` instead")}function ku(t){return u3(t)?t:new X0(t)}function u3(t){return!!(t&&typeof t=="object"&&"message"in t&&"messages"in t)}function o3(t){return typeof t=="string"||s3(t)}function s3(t){return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)}const c3="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",wg=[],_g={allowDangerousHtml:!0},f3=/^(https?|ircs?|mailto|xmpp)$/i,d3=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function m3(t){const l=h3(t),a=p3(t);return g3(l.runSync(l.parse(a),a),t)}function h3(t){const l=t.rehypePlugins||wg,a=t.remarkPlugins||wg,u=t.remarkRehypeOptions?{...t.remarkRehypeOptions,..._g}:_g;return i3().use(QD).use(a).use(Uk,u).use(l)}function p3(t){const l=t.children||"",a=new X0;return typeof l=="string"&&(a.value=l),a}function g3(t,l){const a=l.allowedElements,u=l.allowElement,o=l.components,s=l.disallowedElements,f=l.skipHtml,m=l.unwrapDisallowed,p=l.urlTransform||A3;for(const y of d3)Object.hasOwn(l,y.from)&&(""+y.from+(y.to?"use `"+y.to+"` instead":"remove it")+c3+y.id,void 0);return Zu(t,h),Rv(t,{Fragment:A.Fragment,components:o,ignoreInvalidStyle:!0,jsx:A.jsx,jsxs:A.jsxs,passKeys:!0,passNode:!0});function h(y,g,b){if(y.type==="raw"&&b&&typeof g=="number")return f?b.children.splice(g,1):b.children[g]={type:"text",value:y.value},g;if(y.type==="element"){let v;for(v in Sc)if(Object.hasOwn(Sc,v)&&Object.hasOwn(y.properties,v)){const I=y.properties[v],C=Sc[v];(C===null||C.includes(y.tagName))&&(y.properties[v]=p(String(I||""),v,y))}}if(y.type==="element"){let v=a?!a.includes(y.tagName):s?s.includes(y.tagName):!1;if(!v&&u&&typeof g=="number"&&(v=!u(y,g,b)),v&&b&&typeof g=="number")return m&&y.children?b.children.splice(g,1,...y.children):b.children.splice(g,1),g}}}function A3(t){const l=t.indexOf(":"),a=t.indexOf("?"),u=t.indexOf("#"),o=t.indexOf("/");return l===-1||o!==-1&&l>o||a!==-1&&l>a||u!==-1&&l>u||f3.test(t.slice(0,l))?t:""}const y3=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,x3=Object.hasOwnProperty;class b3{constructor(){this.occurrences,this.reset()}slug(l,a){const u=this;let o=v3(l,a===!0);const s=o;for(;x3.call(u.occurrences,o);)u.occurrences[s]++,o=s+"-"+u.occurrences[s];return u.occurrences[o]=0,o}reset(){this.occurrences=Object.create(null)}}function v3(t,l){return typeof t!="string"?"":(l||(t=t.toLowerCase()),t.replace(y3,"").replace(/ /g,"-"))}function D3(t){const l=t.type==="element"?t.tagName.toLowerCase():"",a=l.length===2&&l.charCodeAt(0)===104?l.charCodeAt(1):0;return a>48&&a<55?a-48:void 0}function k3(t){return"children"in t?Z0(t):"value"in t?t.value:""}function I3(t){return t.type==="text"?t.value:"children"in t?Z0(t):""}function Z0(t){let l=-1;const a=[];for(;++l<t.children.length;)a[l]=I3(t.children[l]);return a.join("")}const S3={},Rg=new b3;function E3(t){const a=(t||S3).prefix||"";return function(u){Rg.reset(),Zu(u,"element",function(o){D3(o)&&!o.properties.id&&(o.properties.id=a+Rg.slug(k3(o)))})}}function Tg(t,l){const a=String(t);if(typeof l!="string")throw new TypeError("Expected character");let u=0,o=a.indexOf(l);for(;o!==-1;)u++,o=a.indexOf(l,o+l.length);return u}function C3(t){if(typeof t!="string")throw new TypeError("Expected a string");return t.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function w3(t,l,a){const o=Qu((a||{}).ignore||[]),s=_3(l);let f=-1;for(;++f<s.length;)Q0(t,"text",m);function m(h,y){let g=-1,b;for(;++g<y.length;){const v=y[g],I=b?b.children:void 0;if(o(v,I?I.indexOf(v):void 0,b))return;b=v}if(b)return p(h,y)}function p(h,y){const g=y[y.length-1],b=s[f][0],v=s[f][1];let I=0;const w=g.children.indexOf(h);let R=!1,U=[];b.lastIndex=0;let L=b.exec(h.value);for(;L;){const en=L.index,rn={index:L.index,input:L.input,stack:[...y,h]};let G=v(...L,rn);if(typeof G=="string"&&(G=G.length>0?{type:"text",value:G}:void 0),G===!1?b.lastIndex=en+1:(I!==en&&U.push({type:"text",value:h.value.slice(I,en)}),Array.isArray(G)?U.push(...G):G&&U.push(G),I=en+L[0].length,R=!0),!b.global)break;L=b.exec(h.value)}return R?(I<h.value.length&&U.push({type:"text",value:h.value.slice(I)}),g.children.splice(w,1,...U)):U=[h],w+U.length}}function _3(t){const l=[];if(!Array.isArray(t))throw new TypeError("Expected find and replace tuple or list of tuples");const a=!t[0]||Array.isArray(t[0])?t:[t];let u=-1;for(;++u<a.length;){const o=a[u];l.push([R3(o[0]),T3(o[1])])}return l}function R3(t){return typeof t=="string"?new RegExp(C3(t),"g"):t}function T3(t){return typeof t=="function"?t:function(){return t}}const Mc="phrasing",Bc=["autolink","link","image","label"];function j3(){return{transforms:[L3],enter:{literalAutolink:F3,literalAutolinkEmail:Oc,literalAutolinkHttp:Oc,literalAutolinkWww:Oc},exit:{literalAutolink:O3,literalAutolinkEmail:B3,literalAutolinkHttp:z3,literalAutolinkWww:M3}}}function N3(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Mc,notInConstruct:Bc},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Mc,notInConstruct:Bc},{character:":",before:"[ps]",after:"\\/",inConstruct:Mc,notInConstruct:Bc}]}}function F3(t){this.enter({type:"link",title:null,url:"",children:[]},t)}function Oc(t){this.config.enter.autolinkProtocol.call(this,t)}function z3(t){this.config.exit.autolinkProtocol.call(this,t)}function M3(t){this.config.exit.data.call(this,t);const l=this.stack[this.stack.length-1];l.type,l.url="http://"+this.sliceSerialize(t)}function B3(t){this.config.exit.autolinkEmail.call(this,t)}function O3(t){this.exit(t)}function L3(t){w3(t,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,P3],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),G3]],{ignore:["link","linkReference"]})}function P3(t,l,a,u,o){let s="";if(!$0(o)||(/^w/i.test(l)&&(a=l+a,l="",s="http://"),!U3(a)))return!1;const f=H3(a+u);if(!f[0])return!1;const m={type:"link",title:null,url:s+l+f[0],children:[{type:"text",value:l+f[0]}]};return f[1]?[m,{type:"text",value:f[1]}]:m}function G3(t,l,a,u){return!$0(u,!0)||/[-\d_]$/.test(a)?!1:{type:"link",title:null,url:"mailto:"+l+"@"+a,children:[{type:"text",value:l+"@"+a}]}}function U3(t){const l=t.split(".");return!(l.length<2||l[l.length-1]&&(/_/.test(l[l.length-1])||!/[a-zA-Z\d]/.test(l[l.length-1]))||l[l.length-2]&&(/_/.test(l[l.length-2])||!/[a-zA-Z\d]/.test(l[l.length-2])))}function H3(t){const l=/[!"&'),.:;<>?\]}]+$/.exec(t);if(!l)return[t,void 0];t=t.slice(0,l.index);let a=l[0],u=a.indexOf(")");const o=Tg(t,"(");let s=Tg(t,")");for(;u!==-1&&o>s;)t+=a.slice(0,u+1),a=a.slice(u+1),u=a.indexOf(")"),s++;return[t,a]}function $0(t,l){const a=t.input.charCodeAt(t.index-1);return(t.index===0||Mr(a)||qu(a))&&(!l||a!==47)}K0.peek=J3;function q3(){this.buffer()}function V3(t){this.enter({type:"footnoteReference",identifier:"",label:""},t)}function Y3(){this.buffer()}function Q3(t){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},t)}function X3(t){const l=this.resume(),a=this.stack[this.stack.length-1];a.type,a.identifier=mt(this.sliceSerialize(t)).toLowerCase(),a.label=l}function Z3(t){this.exit(t)}function $3(t){const l=this.resume(),a=this.stack[this.stack.length-1];a.type,a.identifier=mt(this.sliceSerialize(t)).toLowerCase(),a.label=l}function K3(t){this.exit(t)}function J3(){return"["}function K0(t,l,a,u){const o=a.createTracker(u);let s=o.move("[^");const f=a.enter("footnoteReference"),m=a.enter("reference");return s+=o.move(a.safe(a.associationId(t),{after:"]",before:s})),m(),f(),s+=o.move("]"),s}function W3(){return{enter:{gfmFootnoteCallString:q3,gfmFootnoteCall:V3,gfmFootnoteDefinitionLabelString:Y3,gfmFootnoteDefinition:Q3},exit:{gfmFootnoteCallString:X3,gfmFootnoteCall:Z3,gfmFootnoteDefinitionLabelString:$3,gfmFootnoteDefinition:K3}}}function nI(t){let l=!1;return t&&t.firstLineBlank&&(l=!0),{handlers:{footnoteDefinition:a,footnoteReference:K0},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function a(u,o,s,f){const m=s.createTracker(f);let p=m.move("[^");const h=s.enter("footnoteDefinition"),y=s.enter("label");return p+=m.move(s.safe(s.associationId(u),{before:p,after:"]"})),y(),p+=m.move("]:"),u.children&&u.children.length>0&&(m.shift(4),p+=m.move((l?`
`:" ")+s.indentLines(s.containerFlow(u,m.current()),l?J0:eI))),h(),p}}function eI(t,l,a){return l===0?t:J0(t,l,a)}function J0(t,l,a){return(a?"":"    ")+t}const tI=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];W0.peek=uI;function rI(){return{canContainEols:["delete"],enter:{strikethrough:aI},exit:{strikethrough:iI}}}function lI(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:tI}],handlers:{delete:W0}}}function aI(t){this.enter({type:"delete",children:[]},t)}function iI(t){this.exit(t)}function W0(t,l,a,u){const o=a.createTracker(u),s=a.enter("strikethrough");let f=o.move("~~");return f+=a.containerPhrasing(t,{...o.current(),before:f,after:"~"}),f+=o.move("~~"),s(),f}function uI(){return"~"}function oI(t){return t.length}function sI(t,l){const a=l||{},u=(a.align||[]).concat(),o=a.stringLength||oI,s=[],f=[],m=[],p=[];let h=0,y=-1;for(;++y<t.length;){const C=[],w=[];let R=-1;for(t[y].length>h&&(h=t[y].length);++R<t[y].length;){const U=cI(t[y][R]);if(a.alignDelimiters!==!1){const L=o(U);w[R]=L,(p[R]===void 0||L>p[R])&&(p[R]=L)}C.push(U)}f[y]=C,m[y]=w}let g=-1;if(typeof u=="object"&&"length"in u)for(;++g<h;)s[g]=jg(u[g]);else{const C=jg(u);for(;++g<h;)s[g]=C}g=-1;const b=[],v=[];for(;++g<h;){const C=s[g];let w="",R="";C===99?(w=":",R=":"):C===108?w=":":C===114&&(R=":");let U=a.alignDelimiters===!1?1:Math.max(1,p[g]-w.length-R.length);const L=w+"-".repeat(U)+R;a.alignDelimiters!==!1&&(U=w.length+U+R.length,U>p[g]&&(p[g]=U),v[g]=U),b[g]=L}f.splice(1,0,b),m.splice(1,0,v),y=-1;const I=[];for(;++y<f.length;){const C=f[y],w=m[y];g=-1;const R=[];for(;++g<h;){const U=C[g]||"";let L="",en="";if(a.alignDelimiters!==!1){const rn=p[g]-(w[g]||0),G=s[g];G===114?L=" ".repeat(rn):G===99?rn%2?(L=" ".repeat(rn/2+.5),en=" ".repeat(rn/2-.5)):(L=" ".repeat(rn/2),en=L):en=" ".repeat(rn)}a.delimiterStart!==!1&&!g&&R.push("|"),a.padding!==!1&&!(a.alignDelimiters===!1&&U==="")&&(a.delimiterStart!==!1||g)&&R.push(" "),a.alignDelimiters!==!1&&R.push(L),R.push(U),a.alignDelimiters!==!1&&R.push(en),a.padding!==!1&&R.push(" "),(a.delimiterEnd!==!1||g!==h-1)&&R.push("|")}I.push(a.delimiterEnd===!1?R.join("").replace(/ +$/,""):R.join(""))}return I.join(`
`)}function cI(t){return t==null?"":String(t)}function jg(t){const l=typeof t=="string"?t.codePointAt(0):0;return l===67||l===99?99:l===76||l===108?108:l===82||l===114?114:0}function fI(t,l,a,u){const o=a.enter("blockquote"),s=a.createTracker(u);s.move("> "),s.shift(2);const f=a.indentLines(a.containerFlow(t,s.current()),dI);return o(),f}function dI(t,l,a){return">"+(a?"":" ")+t}function mI(t,l){return Ng(t,l.inConstruct,!0)&&!Ng(t,l.notInConstruct,!1)}function Ng(t,l,a){if(typeof l=="string"&&(l=[l]),!l||l.length===0)return a;let u=-1;for(;++u<l.length;)if(t.includes(l[u]))return!0;return!1}function Fg(t,l,a,u){let o=-1;for(;++o<a.unsafe.length;)if(a.unsafe[o].character===`
`&&mI(a.stack,a.unsafe[o]))return/[ \t]/.test(u.before)?"":" ";return`\\
`}function hI(t,l){const a=String(t);let u=a.indexOf(l),o=u,s=0,f=0;if(typeof l!="string")throw new TypeError("Expected substring");for(;u!==-1;)u===o?++s>f&&(f=s):s=1,o=u+l.length,u=a.indexOf(l,o);return f}function pI(t,l){return!!(l.options.fences===!1&&t.value&&!t.lang&&/[^ \r\n]/.test(t.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(t.value))}function gI(t){const l=t.options.fence||"`";if(l!=="`"&&l!=="~")throw new Error("Cannot serialize code with `"+l+"` for `options.fence`, expected `` ` `` or `~`");return l}function AI(t,l,a,u){const o=gI(a),s=t.value||"",f=o==="`"?"GraveAccent":"Tilde";if(pI(t,a)){const g=a.enter("codeIndented"),b=a.indentLines(s,yI);return g(),b}const m=a.createTracker(u),p=o.repeat(Math.max(hI(s,o)+1,3)),h=a.enter("codeFenced");let y=m.move(p);if(t.lang){const g=a.enter(`codeFencedLang${f}`);y+=m.move(a.safe(t.lang,{before:y,after:" ",encode:["`"],...m.current()})),g()}if(t.lang&&t.meta){const g=a.enter(`codeFencedMeta${f}`);y+=m.move(" "),y+=m.move(a.safe(t.meta,{before:y,after:`
`,encode:["`"],...m.current()})),g()}return y+=m.move(`
`),s&&(y+=m.move(s+`
`)),y+=m.move(p),h(),y}function yI(t,l,a){return(a?"":"    ")+t}function Cf(t){const l=t.options.quote||'"';if(l!=='"'&&l!=="'")throw new Error("Cannot serialize title with `"+l+"` for `options.quote`, expected `\"`, or `'`");return l}function xI(t,l,a,u){const o=Cf(a),s=o==='"'?"Quote":"Apostrophe",f=a.enter("definition");let m=a.enter("label");const p=a.createTracker(u);let h=p.move("[");return h+=p.move(a.safe(a.associationId(t),{before:h,after:"]",...p.current()})),h+=p.move("]: "),m(),!t.url||/[\0- \u007F]/.test(t.url)?(m=a.enter("destinationLiteral"),h+=p.move("<"),h+=p.move(a.safe(t.url,{before:h,after:">",...p.current()})),h+=p.move(">")):(m=a.enter("destinationRaw"),h+=p.move(a.safe(t.url,{before:h,after:t.title?" ":`
`,...p.current()}))),m(),t.title&&(m=a.enter(`title${s}`),h+=p.move(" "+o),h+=p.move(a.safe(t.title,{before:h,after:o,...p.current()})),h+=p.move(o),m()),f(),h}function bI(t){const l=t.options.emphasis||"*";if(l!=="*"&&l!=="_")throw new Error("Cannot serialize emphasis with `"+l+"` for `options.emphasis`, expected `*`, or `_`");return l}function qa(t){return"&#x"+t.toString(16).toUpperCase()+";"}function zu(t,l,a){const u=Tl(t),o=Tl(l);return u===void 0?o===void 0?a==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:o===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:u===1?o===void 0?{inside:!1,outside:!1}:o===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:o===void 0?{inside:!1,outside:!1}:o===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}n1.peek=vI;function n1(t,l,a,u){const o=bI(a),s=a.enter("emphasis"),f=a.createTracker(u),m=f.move(o);let p=f.move(a.containerPhrasing(t,{after:o,before:m,...f.current()}));const h=p.charCodeAt(0),y=zu(u.before.charCodeAt(u.before.length-1),h,o);y.inside&&(p=qa(h)+p.slice(1));const g=p.charCodeAt(p.length-1),b=zu(u.after.charCodeAt(0),g,o);b.inside&&(p=p.slice(0,-1)+qa(g));const v=f.move(o);return s(),a.attentionEncodeSurroundingInfo={after:b.outside,before:y.outside},m+p+v}function vI(t,l,a){return a.options.emphasis||"*"}function DI(t,l){let a=!1;return Zu(t,function(u){if("value"in u&&/\r?\n|\r/.test(u.value)||u.type==="break")return a=!0,$c}),!!((!t.depth||t.depth<3)&&xf(t)&&(l.options.setext||a))}function kI(t,l,a,u){const o=Math.max(Math.min(6,t.depth||1),1),s=a.createTracker(u);if(DI(t,a)){const y=a.enter("headingSetext"),g=a.enter("phrasing"),b=a.containerPhrasing(t,{...s.current(),before:`
`,after:`
`});return g(),y(),b+`
`+(o===1?"=":"-").repeat(b.length-(Math.max(b.lastIndexOf("\r"),b.lastIndexOf(`
`))+1))}const f="#".repeat(o),m=a.enter("headingAtx"),p=a.enter("phrasing");s.move(f+" ");let h=a.containerPhrasing(t,{before:"# ",after:`
`,...s.current()});return/^[\t ]/.test(h)&&(h=qa(h.charCodeAt(0))+h.slice(1)),h=h?f+" "+h:f,a.options.closeAtx&&(h+=" "+f),p(),m(),h}e1.peek=II;function e1(t){return t.value||""}function II(){return"<"}t1.peek=SI;function t1(t,l,a,u){const o=Cf(a),s=o==='"'?"Quote":"Apostrophe",f=a.enter("image");let m=a.enter("label");const p=a.createTracker(u);let h=p.move("![");return h+=p.move(a.safe(t.alt,{before:h,after:"]",...p.current()})),h+=p.move("]("),m(),!t.url&&t.title||/[\0- \u007F]/.test(t.url)?(m=a.enter("destinationLiteral"),h+=p.move("<"),h+=p.move(a.safe(t.url,{before:h,after:">",...p.current()})),h+=p.move(">")):(m=a.enter("destinationRaw"),h+=p.move(a.safe(t.url,{before:h,after:t.title?" ":")",...p.current()}))),m(),t.title&&(m=a.enter(`title${s}`),h+=p.move(" "+o),h+=p.move(a.safe(t.title,{before:h,after:o,...p.current()})),h+=p.move(o),m()),h+=p.move(")"),f(),h}function SI(){return"!"}r1.peek=EI;function r1(t,l,a,u){const o=t.referenceType,s=a.enter("imageReference");let f=a.enter("label");const m=a.createTracker(u);let p=m.move("![");const h=a.safe(t.alt,{before:p,after:"]",...m.current()});p+=m.move(h+"]["),f();const y=a.stack;a.stack=[],f=a.enter("reference");const g=a.safe(a.associationId(t),{before:p,after:"]",...m.current()});return f(),a.stack=y,s(),o==="full"||!h||h!==g?p+=m.move(g+"]"):o==="shortcut"?p=p.slice(0,-1):p+=m.move("]"),p}function EI(){return"!"}l1.peek=CI;function l1(t,l,a){let u=t.value||"",o="`",s=-1;for(;new RegExp("(^|[^`])"+o+"([^`]|$)").test(u);)o+="`";for(/[^ \r\n]/.test(u)&&(/^[ \r\n]/.test(u)&&/[ \r\n]$/.test(u)||/^`|`$/.test(u))&&(u=" "+u+" ");++s<a.unsafe.length;){const f=a.unsafe[s],m=a.compilePattern(f);let p;if(f.atBreak)for(;p=m.exec(u);){let h=p.index;u.charCodeAt(h)===10&&u.charCodeAt(h-1)===13&&h--,u=u.slice(0,h)+" "+u.slice(p.index+1)}}return o+u+o}function CI(){return"`"}function a1(t,l){const a=xf(t);return!!(!l.options.resourceLink&&t.url&&!t.title&&t.children&&t.children.length===1&&t.children[0].type==="text"&&(a===t.url||"mailto:"+a===t.url)&&/^[a-z][a-z+.-]+:/i.test(t.url)&&!/[\0- <>\u007F]/.test(t.url))}i1.peek=wI;function i1(t,l,a,u){const o=Cf(a),s=o==='"'?"Quote":"Apostrophe",f=a.createTracker(u);let m,p;if(a1(t,a)){const y=a.stack;a.stack=[],m=a.enter("autolink");let g=f.move("<");return g+=f.move(a.containerPhrasing(t,{before:g,after:">",...f.current()})),g+=f.move(">"),m(),a.stack=y,g}m=a.enter("link"),p=a.enter("label");let h=f.move("[");return h+=f.move(a.containerPhrasing(t,{before:h,after:"](",...f.current()})),h+=f.move("]("),p(),!t.url&&t.title||/[\0- \u007F]/.test(t.url)?(p=a.enter("destinationLiteral"),h+=f.move("<"),h+=f.move(a.safe(t.url,{before:h,after:">",...f.current()})),h+=f.move(">")):(p=a.enter("destinationRaw"),h+=f.move(a.safe(t.url,{before:h,after:t.title?" ":")",...f.current()}))),p(),t.title&&(p=a.enter(`title${s}`),h+=f.move(" "+o),h+=f.move(a.safe(t.title,{before:h,after:o,...f.current()})),h+=f.move(o),p()),h+=f.move(")"),m(),h}function wI(t,l,a){return a1(t,a)?"<":"["}u1.peek=_I;function u1(t,l,a,u){const o=t.referenceType,s=a.enter("linkReference");let f=a.enter("label");const m=a.createTracker(u);let p=m.move("[");const h=a.containerPhrasing(t,{before:p,after:"]",...m.current()});p+=m.move(h+"]["),f();const y=a.stack;a.stack=[],f=a.enter("reference");const g=a.safe(a.associationId(t),{before:p,after:"]",...m.current()});return f(),a.stack=y,s(),o==="full"||!h||h!==g?p+=m.move(g+"]"):o==="shortcut"?p=p.slice(0,-1):p+=m.move("]"),p}function _I(){return"["}function wf(t){const l=t.options.bullet||"*";if(l!=="*"&&l!=="+"&&l!=="-")throw new Error("Cannot serialize items with `"+l+"` for `options.bullet`, expected `*`, `+`, or `-`");return l}function RI(t){const l=wf(t),a=t.options.bulletOther;if(!a)return l==="*"?"-":"*";if(a!=="*"&&a!=="+"&&a!=="-")throw new Error("Cannot serialize items with `"+a+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(a===l)throw new Error("Expected `bullet` (`"+l+"`) and `bulletOther` (`"+a+"`) to be different");return a}function TI(t){const l=t.options.bulletOrdered||".";if(l!=="."&&l!==")")throw new Error("Cannot serialize items with `"+l+"` for `options.bulletOrdered`, expected `.` or `)`");return l}function o1(t){const l=t.options.rule||"*";if(l!=="*"&&l!=="-"&&l!=="_")throw new Error("Cannot serialize rules with `"+l+"` for `options.rule`, expected `*`, `-`, or `_`");return l}function jI(t,l,a,u){const o=a.enter("list"),s=a.bulletCurrent;let f=t.ordered?TI(a):wf(a);const m=t.ordered?f==="."?")":".":RI(a);let p=l&&a.bulletLastUsed?f===a.bulletLastUsed:!1;if(!t.ordered){const y=t.children?t.children[0]:void 0;if((f==="*"||f==="-")&&y&&(!y.children||!y.children[0])&&a.stack[a.stack.length-1]==="list"&&a.stack[a.stack.length-2]==="listItem"&&a.stack[a.stack.length-3]==="list"&&a.stack[a.stack.length-4]==="listItem"&&a.indexStack[a.indexStack.length-1]===0&&a.indexStack[a.indexStack.length-2]===0&&a.indexStack[a.indexStack.length-3]===0&&(p=!0),o1(a)===f&&y){let g=-1;for(;++g<t.children.length;){const b=t.children[g];if(b&&b.type==="listItem"&&b.children&&b.children[0]&&b.children[0].type==="thematicBreak"){p=!0;break}}}}p&&(f=m),a.bulletCurrent=f;const h=a.containerFlow(t,u);return a.bulletLastUsed=f,a.bulletCurrent=s,o(),h}function NI(t){const l=t.options.listItemIndent||"one";if(l!=="tab"&&l!=="one"&&l!=="mixed")throw new Error("Cannot serialize items with `"+l+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return l}function FI(t,l,a,u){const o=NI(a);let s=a.bulletCurrent||wf(a);l&&l.type==="list"&&l.ordered&&(s=(typeof l.start=="number"&&l.start>-1?l.start:1)+(a.options.incrementListMarker===!1?0:l.children.indexOf(t))+s);let f=s.length+1;(o==="tab"||o==="mixed"&&(l&&l.type==="list"&&l.spread||t.spread))&&(f=Math.ceil(f/4)*4);const m=a.createTracker(u);m.move(s+" ".repeat(f-s.length)),m.shift(f);const p=a.enter("listItem"),h=a.indentLines(a.containerFlow(t,m.current()),y);return p(),h;function y(g,b,v){return b?(v?"":" ".repeat(f))+g:(v?s:s+" ".repeat(f-s.length))+g}}function zI(t,l,a,u){const o=a.enter("paragraph"),s=a.enter("phrasing"),f=a.containerPhrasing(t,u);return s(),o(),f}const MI=Qu(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function BI(t,l,a,u){return(t.children.some(function(f){return MI(f)})?a.containerPhrasing:a.containerFlow).call(a,t,u)}function OI(t){const l=t.options.strong||"*";if(l!=="*"&&l!=="_")throw new Error("Cannot serialize strong with `"+l+"` for `options.strong`, expected `*`, or `_`");return l}s1.peek=LI;function s1(t,l,a,u){const o=OI(a),s=a.enter("strong"),f=a.createTracker(u),m=f.move(o+o);let p=f.move(a.containerPhrasing(t,{after:o,before:m,...f.current()}));const h=p.charCodeAt(0),y=zu(u.before.charCodeAt(u.before.length-1),h,o);y.inside&&(p=qa(h)+p.slice(1));const g=p.charCodeAt(p.length-1),b=zu(u.after.charCodeAt(0),g,o);b.inside&&(p=p.slice(0,-1)+qa(g));const v=f.move(o+o);return s(),a.attentionEncodeSurroundingInfo={after:b.outside,before:y.outside},m+p+v}function LI(t,l,a){return a.options.strong||"*"}function PI(t,l,a,u){return a.safe(t.value,u)}function GI(t){const l=t.options.ruleRepetition||3;if(l<3)throw new Error("Cannot serialize rules with repetition `"+l+"` for `options.ruleRepetition`, expected `3` or more");return l}function UI(t,l,a){const u=(o1(a)+(a.options.ruleSpaces?" ":"")).repeat(GI(a));return a.options.ruleSpaces?u.slice(0,-1):u}const c1={blockquote:fI,break:Fg,code:AI,definition:xI,emphasis:n1,hardBreak:Fg,heading:kI,html:e1,image:t1,imageReference:r1,inlineCode:l1,link:i1,linkReference:u1,list:jI,listItem:FI,paragraph:zI,root:BI,strong:s1,text:PI,thematicBreak:UI};function HI(){return{enter:{table:qI,tableData:zg,tableHeader:zg,tableRow:YI},exit:{codeText:QI,table:VI,tableData:Lc,tableHeader:Lc,tableRow:Lc}}}function qI(t){const l=t._align;this.enter({type:"table",align:l.map(function(a){return a==="none"?null:a}),children:[]},t),this.data.inTable=!0}function VI(t){this.exit(t),this.data.inTable=void 0}function YI(t){this.enter({type:"tableRow",children:[]},t)}function Lc(t){this.exit(t)}function zg(t){this.enter({type:"tableCell",children:[]},t)}function QI(t){let l=this.resume();this.data.inTable&&(l=l.replace(/\\([\\|])/g,XI));const a=this.stack[this.stack.length-1];a.type,a.value=l,this.exit(t)}function XI(t,l){return l==="|"?l:t}function ZI(t){const l=t||{},a=l.tableCellPadding,u=l.tablePipeAlign,o=l.stringLength,s=a?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:b,table:f,tableCell:p,tableRow:m}};function f(v,I,C,w){return h(y(v,C,w),v.align)}function m(v,I,C,w){const R=g(v,C,w),U=h([R]);return U.slice(0,U.indexOf(`
`))}function p(v,I,C,w){const R=C.enter("tableCell"),U=C.enter("phrasing"),L=C.containerPhrasing(v,{...w,before:s,after:s});return U(),R(),L}function h(v,I){return sI(v,{align:I,alignDelimiters:u,padding:a,stringLength:o})}function y(v,I,C){const w=v.children;let R=-1;const U=[],L=I.enter("table");for(;++R<w.length;)U[R]=g(w[R],I,C);return L(),U}function g(v,I,C){const w=v.children;let R=-1;const U=[],L=I.enter("tableRow");for(;++R<w.length;)U[R]=p(w[R],v,I,C);return L(),U}function b(v,I,C){let w=c1.inlineCode(v,I,C);return C.stack.includes("tableCell")&&(w=w.replace(/\|/g,"\\$&")),w}}function $I(){return{exit:{taskListCheckValueChecked:Mg,taskListCheckValueUnchecked:Mg,paragraph:JI}}}function KI(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:WI}}}function Mg(t){const l=this.stack[this.stack.length-2];l.type,l.checked=t.type==="taskListCheckValueChecked"}function JI(t){const l=this.stack[this.stack.length-2];if(l&&l.type==="listItem"&&typeof l.checked=="boolean"){const a=this.stack[this.stack.length-1];a.type;const u=a.children[0];if(u&&u.type==="text"){const o=l.children;let s=-1,f;for(;++s<o.length;){const m=o[s];if(m.type==="paragraph"){f=m;break}}f===a&&(u.value=u.value.slice(1),u.value.length===0?a.children.shift():a.position&&u.position&&typeof u.position.start.offset=="number"&&(u.position.start.column++,u.position.start.offset++,a.position.start=Object.assign({},u.position.start)))}}this.exit(t)}function WI(t,l,a,u){const o=t.children[0],s=typeof t.checked=="boolean"&&o&&o.type==="paragraph",f="["+(t.checked?"x":" ")+"] ",m=a.createTracker(u);s&&m.move(f);let p=c1.listItem(t,l,a,{...u,...m.current()});return s&&(p=p.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,h)),p;function h(y){return y+f}}function nS(){return[j3(),W3(),rI(),HI(),$I()]}function eS(t){return{extensions:[N3(),nI(t),lI(),ZI(t),KI()]}}const tS={tokenize:oS,partial:!0},f1={tokenize:sS,partial:!0},d1={tokenize:cS,partial:!0},m1={tokenize:fS,partial:!0},rS={tokenize:dS,partial:!0},h1={name:"wwwAutolink",tokenize:iS,previous:g1},p1={name:"protocolAutolink",tokenize:uS,previous:A1},Ht={name:"emailAutolink",tokenize:aS,previous:y1},bt={};function lS(){return{text:bt}}let zr=48;for(;zr<123;)bt[zr]=Ht,zr++,zr===58?zr=65:zr===91&&(zr=97);bt[43]=Ht;bt[45]=Ht;bt[46]=Ht;bt[95]=Ht;bt[72]=[Ht,p1];bt[104]=[Ht,p1];bt[87]=[Ht,h1];bt[119]=[Ht,h1];function aS(t,l,a){const u=this;let o,s;return f;function f(g){return!nf(g)||!y1.call(u,u.previous)||_f(u.events)?a(g):(t.enter("literalAutolink"),t.enter("literalAutolinkEmail"),m(g))}function m(g){return nf(g)?(t.consume(g),m):g===64?(t.consume(g),p):a(g)}function p(g){return g===46?t.check(rS,y,h)(g):g===45||g===95||ye(g)?(s=!0,t.consume(g),p):y(g)}function h(g){return t.consume(g),o=!0,p}function y(g){return s&&o&&ke(u.previous)?(t.exit("literalAutolinkEmail"),t.exit("literalAutolink"),l(g)):a(g)}}function iS(t,l,a){const u=this;return o;function o(f){return f!==87&&f!==119||!g1.call(u,u.previous)||_f(u.events)?a(f):(t.enter("literalAutolink"),t.enter("literalAutolinkWww"),t.check(tS,t.attempt(f1,t.attempt(d1,s),a),a)(f))}function s(f){return t.exit("literalAutolinkWww"),t.exit("literalAutolink"),l(f)}}function uS(t,l,a){const u=this;let o="",s=!1;return f;function f(g){return(g===72||g===104)&&A1.call(u,u.previous)&&!_f(u.events)?(t.enter("literalAutolink"),t.enter("literalAutolinkHttp"),o+=String.fromCodePoint(g),t.consume(g),m):a(g)}function m(g){if(ke(g)&&o.length<5)return o+=String.fromCodePoint(g),t.consume(g),m;if(g===58){const b=o.toLowerCase();if(b==="http"||b==="https")return t.consume(g),p}return a(g)}function p(g){return g===47?(t.consume(g),s?h:(s=!0,p)):a(g)}function h(g){return g===null||ju(g)||Vn(g)||Mr(g)||qu(g)?a(g):t.attempt(f1,t.attempt(d1,y),a)(g)}function y(g){return t.exit("literalAutolinkHttp"),t.exit("literalAutolink"),l(g)}}function oS(t,l,a){let u=0;return o;function o(f){return(f===87||f===119)&&u<3?(u++,t.consume(f),o):f===46&&u===3?(t.consume(f),s):a(f)}function s(f){return f===null?a(f):l(f)}}function sS(t,l,a){let u,o,s;return f;function f(h){return h===46||h===95?t.check(m1,p,m)(h):h===null||Vn(h)||Mr(h)||h!==45&&qu(h)?p(h):(s=!0,t.consume(h),f)}function m(h){return h===95?u=!0:(o=u,u=void 0),t.consume(h),f}function p(h){return o||u||!s?a(h):l(h)}}function cS(t,l){let a=0,u=0;return o;function o(f){return f===40?(a++,t.consume(f),o):f===41&&u<a?s(f):f===33||f===34||f===38||f===39||f===41||f===42||f===44||f===46||f===58||f===59||f===60||f===63||f===93||f===95||f===126?t.check(m1,l,s)(f):f===null||Vn(f)||Mr(f)?l(f):(t.consume(f),o)}function s(f){return f===41&&u++,t.consume(f),o}}function fS(t,l,a){return u;function u(m){return m===33||m===34||m===39||m===41||m===42||m===44||m===46||m===58||m===59||m===63||m===95||m===126?(t.consume(m),u):m===38?(t.consume(m),s):m===93?(t.consume(m),o):m===60||m===null||Vn(m)||Mr(m)?l(m):a(m)}function o(m){return m===null||m===40||m===91||Vn(m)||Mr(m)?l(m):u(m)}function s(m){return ke(m)?f(m):a(m)}function f(m){return m===59?(t.consume(m),u):ke(m)?(t.consume(m),f):a(m)}}function dS(t,l,a){return u;function u(s){return t.consume(s),o}function o(s){return ye(s)?a(s):l(s)}}function g1(t){return t===null||t===40||t===42||t===95||t===91||t===93||t===126||Vn(t)}function A1(t){return!ke(t)}function y1(t){return!(t===47||nf(t))}function nf(t){return t===43||t===45||t===46||t===95||ye(t)}function _f(t){let l=t.length,a=!1;for(;l--;){const u=t[l][1];if((u.type==="labelLink"||u.type==="labelImage")&&!u._balanced){a=!0;break}if(u._gfmAutolinkLiteralWalkedInto){a=!1;break}}return t.length>0&&!a&&(t[t.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),a}const mS={tokenize:vS,partial:!0};function hS(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:yS,continuation:{tokenize:xS},exit:bS}},text:{91:{name:"gfmFootnoteCall",tokenize:AS},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:pS,resolveTo:gS}}}}function pS(t,l,a){const u=this;let o=u.events.length;const s=u.parser.gfmFootnotes||(u.parser.gfmFootnotes=[]);let f;for(;o--;){const p=u.events[o][1];if(p.type==="labelImage"){f=p;break}if(p.type==="gfmFootnoteCall"||p.type==="labelLink"||p.type==="label"||p.type==="image"||p.type==="link")break}return m;function m(p){if(!f||!f._balanced)return a(p);const h=mt(u.sliceSerialize({start:f.end,end:u.now()}));return h.codePointAt(0)!==94||!s.includes(h.slice(1))?a(p):(t.enter("gfmFootnoteCallLabelMarker"),t.consume(p),t.exit("gfmFootnoteCallLabelMarker"),l(p))}}function gS(t,l){let a=t.length;for(;a--;)if(t[a][1].type==="labelImage"&&t[a][0]==="enter"){t[a][1];break}t[a+1][1].type="data",t[a+3][1].type="gfmFootnoteCallLabelMarker";const u={type:"gfmFootnoteCall",start:Object.assign({},t[a+3][1].start),end:Object.assign({},t[t.length-1][1].end)},o={type:"gfmFootnoteCallMarker",start:Object.assign({},t[a+3][1].end),end:Object.assign({},t[a+3][1].end)};o.end.column++,o.end.offset++,o.end._bufferIndex++;const s={type:"gfmFootnoteCallString",start:Object.assign({},o.end),end:Object.assign({},t[t.length-1][1].start)},f={type:"chunkString",contentType:"string",start:Object.assign({},s.start),end:Object.assign({},s.end)},m=[t[a+1],t[a+2],["enter",u,l],t[a+3],t[a+4],["enter",o,l],["exit",o,l],["enter",s,l],["enter",f,l],["exit",f,l],["exit",s,l],t[t.length-2],t[t.length-1],["exit",u,l]];return t.splice(a,t.length-a+1,...m),t}function AS(t,l,a){const u=this,o=u.parser.gfmFootnotes||(u.parser.gfmFootnotes=[]);let s=0,f;return m;function m(g){return t.enter("gfmFootnoteCall"),t.enter("gfmFootnoteCallLabelMarker"),t.consume(g),t.exit("gfmFootnoteCallLabelMarker"),p}function p(g){return g!==94?a(g):(t.enter("gfmFootnoteCallMarker"),t.consume(g),t.exit("gfmFootnoteCallMarker"),t.enter("gfmFootnoteCallString"),t.enter("chunkString").contentType="string",h)}function h(g){if(s>999||g===93&&!f||g===null||g===91||Vn(g))return a(g);if(g===93){t.exit("chunkString");const b=t.exit("gfmFootnoteCallString");return o.includes(mt(u.sliceSerialize(b)))?(t.enter("gfmFootnoteCallLabelMarker"),t.consume(g),t.exit("gfmFootnoteCallLabelMarker"),t.exit("gfmFootnoteCall"),l):a(g)}return Vn(g)||(f=!0),s++,t.consume(g),g===92?y:h}function y(g){return g===91||g===92||g===93?(t.consume(g),s++,h):h(g)}}function yS(t,l,a){const u=this,o=u.parser.gfmFootnotes||(u.parser.gfmFootnotes=[]);let s,f=0,m;return p;function p(I){return t.enter("gfmFootnoteDefinition")._container=!0,t.enter("gfmFootnoteDefinitionLabel"),t.enter("gfmFootnoteDefinitionLabelMarker"),t.consume(I),t.exit("gfmFootnoteDefinitionLabelMarker"),h}function h(I){return I===94?(t.enter("gfmFootnoteDefinitionMarker"),t.consume(I),t.exit("gfmFootnoteDefinitionMarker"),t.enter("gfmFootnoteDefinitionLabelString"),t.enter("chunkString").contentType="string",y):a(I)}function y(I){if(f>999||I===93&&!m||I===null||I===91||Vn(I))return a(I);if(I===93){t.exit("chunkString");const C=t.exit("gfmFootnoteDefinitionLabelString");return s=mt(u.sliceSerialize(C)),t.enter("gfmFootnoteDefinitionLabelMarker"),t.consume(I),t.exit("gfmFootnoteDefinitionLabelMarker"),t.exit("gfmFootnoteDefinitionLabel"),b}return Vn(I)||(m=!0),f++,t.consume(I),I===92?g:y}function g(I){return I===91||I===92||I===93?(t.consume(I),f++,y):y(I)}function b(I){return I===58?(t.enter("definitionMarker"),t.consume(I),t.exit("definitionMarker"),o.includes(s)||o.push(s),Tn(t,v,"gfmFootnoteDefinitionWhitespace")):a(I)}function v(I){return l(I)}}function xS(t,l,a){return t.check($a,l,t.attempt(mS,l,a))}function bS(t){t.exit("gfmFootnoteDefinition")}function vS(t,l,a){const u=this;return Tn(t,o,"gfmFootnoteDefinitionIndent",5);function o(s){const f=u.events[u.events.length-1];return f&&f[1].type==="gfmFootnoteDefinitionIndent"&&f[2].sliceSerialize(f[1],!0).length===4?l(s):a(s)}}function DS(t){let a=(t||{}).singleTilde;const u={name:"strikethrough",tokenize:s,resolveAll:o};return a==null&&(a=!0),{text:{126:u},insideSpan:{null:[u]},attentionMarkers:{null:[126]}};function o(f,m){let p=-1;for(;++p<f.length;)if(f[p][0]==="enter"&&f[p][1].type==="strikethroughSequenceTemporary"&&f[p][1]._close){let h=p;for(;h--;)if(f[h][0]==="exit"&&f[h][1].type==="strikethroughSequenceTemporary"&&f[h][1]._open&&f[p][1].end.offset-f[p][1].start.offset===f[h][1].end.offset-f[h][1].start.offset){f[p][1].type="strikethroughSequence",f[h][1].type="strikethroughSequence";const y={type:"strikethrough",start:Object.assign({},f[h][1].start),end:Object.assign({},f[p][1].end)},g={type:"strikethroughText",start:Object.assign({},f[h][1].end),end:Object.assign({},f[p][1].start)},b=[["enter",y,m],["enter",f[h][1],m],["exit",f[h][1],m],["enter",g,m]],v=m.parser.constructs.insideSpan.null;v&&qe(b,b.length,0,Vu(v,f.slice(h+1,p),m)),qe(b,b.length,0,[["exit",g,m],["enter",f[p][1],m],["exit",f[p][1],m],["exit",y,m]]),qe(f,h-1,p-h+3,b),p=h+b.length-2;break}}for(p=-1;++p<f.length;)f[p][1].type==="strikethroughSequenceTemporary"&&(f[p][1].type="data");return f}function s(f,m,p){const h=this.previous,y=this.events;let g=0;return b;function b(I){return h===126&&y[y.length-1][1].type!=="characterEscape"?p(I):(f.enter("strikethroughSequenceTemporary"),v(I))}function v(I){const C=Tl(h);if(I===126)return g>1?p(I):(f.consume(I),g++,v);if(g<2&&!a)return p(I);const w=f.exit("strikethroughSequenceTemporary"),R=Tl(I);return w._open=!R||R===2&&!!C,w._close=!C||C===2&&!!R,m(I)}}}class kS{constructor(){this.map=[]}add(l,a,u){IS(this,l,a,u)}consume(l){if(this.map.sort(function(s,f){return s[0]-f[0]}),this.map.length===0)return;let a=this.map.length;const u=[];for(;a>0;)a-=1,u.push(l.slice(this.map[a][0]+this.map[a][1]),this.map[a][2]),l.length=this.map[a][0];u.push(l.slice()),l.length=0;let o=u.pop();for(;o;){for(const s of o)l.push(s);o=u.pop()}this.map.length=0}}function IS(t,l,a,u){let o=0;if(!(a===0&&u.length===0)){for(;o<t.map.length;){if(t.map[o][0]===l){t.map[o][1]+=a,t.map[o][2].push(...u);return}o+=1}t.map.push([l,a,u])}}function SS(t,l){let a=!1;const u=[];for(;l<t.length;){const o=t[l];if(a){if(o[0]==="enter")o[1].type==="tableContent"&&u.push(t[l+1][1].type==="tableDelimiterMarker"?"left":"none");else if(o[1].type==="tableContent"){if(t[l-1][1].type==="tableDelimiterMarker"){const s=u.length-1;u[s]=u[s]==="left"?"center":"right"}}else if(o[1].type==="tableDelimiterRow")break}else o[0]==="enter"&&o[1].type==="tableDelimiterRow"&&(a=!0);l+=1}return u}function ES(){return{flow:{null:{name:"table",tokenize:CS,resolveAll:wS}}}}function CS(t,l,a){const u=this;let o=0,s=0,f;return m;function m(O){let tn=u.events.length-1;for(;tn>-1;){const an=u.events[tn][1].type;if(an==="lineEnding"||an==="linePrefix")tn--;else break}const nn=tn>-1?u.events[tn][1].type:null,vn=nn==="tableHead"||nn==="tableRow"?G:p;return vn===G&&u.parser.lazy[u.now().line]?a(O):vn(O)}function p(O){return t.enter("tableHead"),t.enter("tableRow"),h(O)}function h(O){return O===124||(f=!0,s+=1),y(O)}function y(O){return O===null?a(O):dn(O)?s>1?(s=0,u.interrupt=!0,t.exit("tableRow"),t.enter("lineEnding"),t.consume(O),t.exit("lineEnding"),v):a(O):En(O)?Tn(t,y,"whitespace")(O):(s+=1,f&&(f=!1,o+=1),O===124?(t.enter("tableCellDivider"),t.consume(O),t.exit("tableCellDivider"),f=!0,y):(t.enter("data"),g(O)))}function g(O){return O===null||O===124||Vn(O)?(t.exit("data"),y(O)):(t.consume(O),O===92?b:g)}function b(O){return O===92||O===124?(t.consume(O),g):g(O)}function v(O){return u.interrupt=!1,u.parser.lazy[u.now().line]?a(O):(t.enter("tableDelimiterRow"),f=!1,En(O)?Tn(t,I,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(O):I(O))}function I(O){return O===45||O===58?w(O):O===124?(f=!0,t.enter("tableCellDivider"),t.consume(O),t.exit("tableCellDivider"),C):rn(O)}function C(O){return En(O)?Tn(t,w,"whitespace")(O):w(O)}function w(O){return O===58?(s+=1,f=!0,t.enter("tableDelimiterMarker"),t.consume(O),t.exit("tableDelimiterMarker"),R):O===45?(s+=1,R(O)):O===null||dn(O)?en(O):rn(O)}function R(O){return O===45?(t.enter("tableDelimiterFiller"),U(O)):rn(O)}function U(O){return O===45?(t.consume(O),U):O===58?(f=!0,t.exit("tableDelimiterFiller"),t.enter("tableDelimiterMarker"),t.consume(O),t.exit("tableDelimiterMarker"),L):(t.exit("tableDelimiterFiller"),L(O))}function L(O){return En(O)?Tn(t,en,"whitespace")(O):en(O)}function en(O){return O===124?I(O):O===null||dn(O)?!f||o!==s?rn(O):(t.exit("tableDelimiterRow"),t.exit("tableHead"),l(O)):rn(O)}function rn(O){return a(O)}function G(O){return t.enter("tableRow"),J(O)}function J(O){return O===124?(t.enter("tableCellDivider"),t.consume(O),t.exit("tableCellDivider"),J):O===null||dn(O)?(t.exit("tableRow"),l(O)):En(O)?Tn(t,J,"whitespace")(O):(t.enter("data"),fn(O))}function fn(O){return O===null||O===124||Vn(O)?(t.exit("data"),J(O)):(t.consume(O),O===92?pn:fn)}function pn(O){return O===92||O===124?(t.consume(O),fn):fn(O)}}function wS(t,l){let a=-1,u=!0,o=0,s=[0,0,0,0],f=[0,0,0,0],m=!1,p=0,h,y,g;const b=new kS;for(;++a<t.length;){const v=t[a],I=v[1];v[0]==="enter"?I.type==="tableHead"?(m=!1,p!==0&&(Bg(b,l,p,h,y),y=void 0,p=0),h={type:"table",start:Object.assign({},I.start),end:Object.assign({},I.end)},b.add(a,0,[["enter",h,l]])):I.type==="tableRow"||I.type==="tableDelimiterRow"?(u=!0,g=void 0,s=[0,0,0,0],f=[0,a+1,0,0],m&&(m=!1,y={type:"tableBody",start:Object.assign({},I.start),end:Object.assign({},I.end)},b.add(a,0,[["enter",y,l]])),o=I.type==="tableDelimiterRow"?2:y?3:1):o&&(I.type==="data"||I.type==="tableDelimiterMarker"||I.type==="tableDelimiterFiller")?(u=!1,f[2]===0&&(s[1]!==0&&(f[0]=f[1],g=Iu(b,l,s,o,void 0,g),s=[0,0,0,0]),f[2]=a)):I.type==="tableCellDivider"&&(u?u=!1:(s[1]!==0&&(f[0]=f[1],g=Iu(b,l,s,o,void 0,g)),s=f,f=[s[1],a,0,0])):I.type==="tableHead"?(m=!0,p=a):I.type==="tableRow"||I.type==="tableDelimiterRow"?(p=a,s[1]!==0?(f[0]=f[1],g=Iu(b,l,s,o,a,g)):f[1]!==0&&(g=Iu(b,l,f,o,a,g)),o=0):o&&(I.type==="data"||I.type==="tableDelimiterMarker"||I.type==="tableDelimiterFiller")&&(f[3]=a)}for(p!==0&&Bg(b,l,p,h,y),b.consume(l.events),a=-1;++a<l.events.length;){const v=l.events[a];v[0]==="enter"&&v[1].type==="table"&&(v[1]._align=SS(l.events,a))}return t}function Iu(t,l,a,u,o,s){const f=u===1?"tableHeader":u===2?"tableDelimiter":"tableData",m="tableContent";a[0]!==0&&(s.end=Object.assign({},wl(l.events,a[0])),t.add(a[0],0,[["exit",s,l]]));const p=wl(l.events,a[1]);if(s={type:f,start:Object.assign({},p),end:Object.assign({},p)},t.add(a[1],0,[["enter",s,l]]),a[2]!==0){const h=wl(l.events,a[2]),y=wl(l.events,a[3]),g={type:m,start:Object.assign({},h),end:Object.assign({},y)};if(t.add(a[2],0,[["enter",g,l]]),u!==2){const b=l.events[a[2]],v=l.events[a[3]];if(b[1].end=Object.assign({},v[1].end),b[1].type="chunkText",b[1].contentType="text",a[3]>a[2]+1){const I=a[2]+1,C=a[3]-a[2]-1;t.add(I,C,[])}}t.add(a[3]+1,0,[["exit",g,l]])}return o!==void 0&&(s.end=Object.assign({},wl(l.events,o)),t.add(o,0,[["exit",s,l]]),s=void 0),s}function Bg(t,l,a,u,o){const s=[],f=wl(l.events,a);o&&(o.end=Object.assign({},f),s.push(["exit",o,l])),u.end=Object.assign({},f),s.push(["exit",u,l]),t.add(a+1,0,s)}function wl(t,l){const a=t[l],u=a[0]==="enter"?"start":"end";return a[1][u]}const _S={name:"tasklistCheck",tokenize:TS};function RS(){return{text:{91:_S}}}function TS(t,l,a){const u=this;return o;function o(p){return u.previous!==null||!u._gfmTasklistFirstContentOfListItem?a(p):(t.enter("taskListCheck"),t.enter("taskListCheckMarker"),t.consume(p),t.exit("taskListCheckMarker"),s)}function s(p){return Vn(p)?(t.enter("taskListCheckValueUnchecked"),t.consume(p),t.exit("taskListCheckValueUnchecked"),f):p===88||p===120?(t.enter("taskListCheckValueChecked"),t.consume(p),t.exit("taskListCheckValueChecked"),f):a(p)}function f(p){return p===93?(t.enter("taskListCheckMarker"),t.consume(p),t.exit("taskListCheckMarker"),t.exit("taskListCheck"),m):a(p)}function m(p){return dn(p)?l(p):En(p)?t.check({tokenize:jS},l,a)(p):a(p)}}function jS(t,l,a){return Tn(t,u,"whitespace");function u(o){return o===null?a(o):l(o)}}function NS(t){return w0([lS(),hS(),DS(t),ES(),RS()])}const FS={};function zS(t){const l=this,a=t||FS,u=l.data(),o=u.micromarkExtensions||(u.micromarkExtensions=[]),s=u.fromMarkdownExtensions||(u.fromMarkdownExtensions=[]),f=u.toMarkdownExtensions||(u.toMarkdownExtensions=[]);o.push(NS(a)),s.push(nS()),f.push(eS(a))}function Ja({content:t}){return A.jsx(m3,{remarkPlugins:[zS],rehypePlugins:[E3],components:{h1:({children:l})=>A.jsx("h1",{className:"mb-6 text-4xl font-semibold leading-tight text-slate-950 dark:text-white",children:l}),h2:({children:l})=>A.jsx("h2",{className:"mb-4 mt-10 text-2xl font-semibold text-slate-950 dark:text-white",children:l}),h3:({children:l})=>A.jsx("h3",{className:"mb-3 mt-7 text-xl font-semibold text-slate-950 dark:text-white",children:l}),p:({children:l})=>A.jsx("p",{className:"my-4 text-base leading-8 text-slate-700 dark:text-slate-300",children:l}),ul:({children:l})=>A.jsx("ul",{className:"my-4 list-disc space-y-2 pl-6 text-slate-700 dark:text-slate-300",children:l}),ol:({children:l})=>A.jsx("ol",{className:"my-4 list-decimal space-y-2 pl-6 text-slate-700 dark:text-slate-300",children:l}),li:({children:l})=>A.jsx("li",{className:"leading-8",children:l}),blockquote:({children:l})=>A.jsx("blockquote",{className:"my-6 border-l-4 border-blue-500 bg-blue-50 px-4 py-2 text-slate-700 dark:bg-cyan-300/10 dark:text-slate-200",children:l}),code:({children:l})=>A.jsx("code",{className:"rounded bg-slate-100 px-1.5 py-0.5 text-sm text-blue-700 dark:bg-white/10 dark:text-cyan-200",children:l}),pre:({children:l})=>A.jsx("pre",{className:"my-6 overflow-x-auto rounded-xl bg-slate-950 p-4 text-sm text-slate-100",children:l}),table:({children:l})=>A.jsx("div",{className:"my-6 overflow-x-auto rounded-xl border border-slate-200 dark:border-white/10",children:A.jsx("table",{className:"w-full border-collapse text-sm",children:l})}),th:({children:l})=>A.jsx("th",{className:"border-b border-slate-200 bg-slate-50 px-4 py-3 text-left font-semibold text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-white",children:l}),td:({children:l})=>A.jsx("td",{className:"border-b border-slate-100 px-4 py-3 leading-7 text-slate-700 dark:border-white/10 dark:text-slate-300",children:l}),a:({children:l,href:a})=>A.jsx("a",{href:a,className:"font-medium text-blue-700 underline decoration-blue-200 underline-offset-4 dark:text-cyan-300",children:l})},children:t})}const MS=`---
title: Agent
term: 智能体
tags:
  - Agent
  - 工具调用
related:
  - Workflow
  - Function Calling
---

# Agent

## 新手解释

Agent 是能根据目标拆解任务、调用工具并推进执行的 AI 系统。它不只是回答，还能做事。

## 专业解释

Agent 通常包含规划、记忆、工具调用、执行状态、观察反馈和任务终止条件。

## AI 产品经理需要知道什么

Agent 适合目标明确、工具可靠、结果可校验的任务。高风险操作需要人工确认和日志审计。

## 产品场景

自动整理会议纪要并创建任务、自动收集竞品信息并生成报告、跨系统客服处理。

## 常见误区

不要把 Agent 当万能自动化。工具权限、失败重试和安全边界决定它能否落地。
`,BS=`---
title: API
term: 应用程序接口
tags:
  - 技术协作
related:
  - Streaming
  - Function Calling
---

# API

## 新手解释

API 是系统之间沟通的约定。前端、后端、模型服务都可以通过 API 交换数据。

## AI 产品经理需要知道什么

读 API 文档时重点看请求参数、返回字段、错误码、鉴权方式、调用限制和计费方式。

## 产品场景

模型调用、文档上传、生成记录、用户用量、支付订阅。

## 常见误区

不要只写页面需求，不写字段和错误状态。研发需要明确数据边界。
`,OS=`---\r
title: Cache\r
term: 缓存\r
tags:\r
  - 性能\r
  - 成本优化\r
related:\r
  - Model Cost\r
  - Retrieval\r
---\r
\r
# Cache\r
\r
## 新手解释\r
\r
Cache 是把常用结果临时保存起来，下次遇到相同或相似请求时不用重新计算。\r
\r
## 专业解释\r
\r
缓存可用于接口响应、检索结果、Embedding、常见问答或静态生成结果，能提升速度并降低成本。\r
\r
## AI 产品经理需要知道什么\r
\r
缓存适合稳定、重复、低风险内容。不适合个性化强、权限复杂或实时变化的答案，除非有严格失效规则。\r
\r
## 产品场景\r
\r
- FAQ 高频问题缓存答案。\r
- 文档 Embedding 结果复用。\r
- 图片生成历史结果保存到素材库。\r
\r
## 常见误区\r
\r
缓存过期内容。企业制度或价格更新后，如果缓存不失效，会持续给出旧答案。\r
\r
## 相关术语\r
\r
Model Cost、Latency、RAG、Rate Limit`,LS=`---\r
title: Chunk\r
term: 文档切片\r
tags:\r
  - RAG\r
  - 文档处理\r
related:\r
  - RAG\r
  - Embedding\r
---\r
\r
# Chunk\r
\r
## 新手解释\r
\r
Chunk 是把长文档切成小片段，方便系统检索和放进模型上下文。\r
\r
## 专业解释\r
\r
在 RAG 中，文档会按标题、段落、长度或语义切分为片段，每个片段生成 Embedding 并保存元数据。\r
\r
## AI 产品经理需要知道什么\r
\r
切片太短会缺上下文，太长会带来噪声和成本。产品经理要确认切分规则是否保留标题、页码、来源和权限。\r
\r
## 产品场景\r
\r
- 制度文档按章节和条款切分。\r
- 产品手册按功能模块切分。\r
- 客服 FAQ 按问答对切分。\r
\r
## 常见误区\r
\r
只说“上传文档”不管切分。切分质量会直接影响检索和回答质量。\r
\r
## 相关术语\r
\r
RAG、Embedding、Vector Database、Rerank`,PS=`---\r
title: Context Window\r
term: 上下文窗口\r
tags:\r
  - Token\r
  - 上下文\r
related:\r
  - Token\r
  - Prompt\r
---\r
\r
# Context Window\r
\r
## 新手解释\r
\r
上下文窗口可以理解为模型一次“能看见”的信息范围。用户输入、系统提示词、历史对话、检索片段和模型输出都会占用这个范围。\r
\r
## 专业解释\r
\r
Context Window 是模型单次推理可处理的最大 Token 数。超过窗口的内容无法完整参与生成，通常需要截断、摘要或检索。\r
\r
## AI 产品经理需要知道什么\r
\r
产品经理不需要精确计算分词，但必须知道上下文窗口影响长文档处理、多轮对话、成本和响应速度。窗口大不代表应该把所有内容都塞进去。\r
\r
## 产品场景\r
\r
- 聊天助手需要决定保留多少轮历史。\r
- RAG 产品需要只放入相关文档片段。\r
- 长文总结需要先分段或摘要。\r
\r
## 常见误区\r
\r
认为上下文越大越好。无关内容越多，成本越高，模型也可能更容易抓错重点。\r
\r
## 相关术语\r
\r
Token、Prompt、RAG、Embedding`,GS=`---\r
title: Dataset\r
term: 数据集\r
tags:\r
  - 数据集\r
  - 评估\r
related:\r
  - Evaluation\r
  - Fine-tuning\r
---\r
\r
# Dataset\r
\r
## 新手解释\r
\r
Dataset 是一组用于训练、评估或测试 AI 的数据。对产品经理来说，它常常是一批问题、标准答案、用户样例或业务文档。\r
\r
## 专业解释\r
\r
数据集可以用于模型训练、微调、评测、检索测试和质量回归。数据质量会直接影响模型或产品评估结果。\r
\r
## AI 产品经理需要知道什么\r
\r
你不一定制作训练数据，但要能定义评估样例、标注标准、数据来源、隐私边界和更新机制。\r
\r
## 产品场景\r
\r
- RAG 产品准备 50 个标准问答评估集。\r
- 客服意图分类准备历史会话样本。\r
- Prompt 版本测试使用固定样例集。\r
\r
## 常见误区\r
\r
认为数据越多越好。低质量、过期或无标注标准的数据会误导评估。\r
\r
## 相关术语\r
\r
Evaluation、Fine-tuning、RAG、Moderation`,US=`---
title: Embedding
term: 向量表示
tags:
  - 向量检索
  - RAG
related:
  - Vector Database
  - RAG
---

# Embedding

## 新手解释

Embedding 是把文字、图片等内容转换成一串数字，让系统能判断内容之间是否相似。

## 专业解释

Embedding 模型会把内容映射到高维向量空间，相似语义的内容在向量空间中距离更近。

## AI 产品经理需要知道什么

Embedding 影响知识库检索质量。产品经理要关注文档切分、查询改写、检索数量和相关性反馈。

## 产品场景

用户问“差旅报销”，系统能找到“出差费用标准”相关文档。

## 常见误区

向量相似不等于业务正确。语义相近的内容也可能权限不同或版本不同。
`,HS=`---
title: Evaluation
term: 模型与产品效果评估
tags:
  - 指标
  - 质量评估
related:
  - Hallucination
  - RAG
---

# Evaluation

## 新手解释

Evaluation 是判断 AI 功能好不好用的一套标准和方法。

## AI 产品经理需要知道什么

评估要同时看模型质量和产品价值。常见指标包括准确率、采纳率、重试率、人工介入率、响应时长和成本。

## 产品场景

知识库问答评估、客服命中率、生成内容采纳率、Prompt A/B 测试。

## 常见误区

不要只靠主观体验判断。要建立样本集、评分标准和用户反馈。
`,qS=`---
title: Fine-tuning
term: 微调
tags:
  - 模型训练
  - 定制化
related:
  - LLM
  - Dataset
---

# Fine-tuning

## 新手解释

微调是用特定数据继续训练模型，让模型更符合某类任务或风格。

## 专业解释

Fine-tuning 会更新模型参数或适配层，使模型在特定数据分布上表现更稳定。

## AI 产品经理需要知道什么

早期产品不要一上来就微调。先确认 Prompt、RAG、规则和流程是否能解决问题。微调需要数据质量、评估集和持续维护。

## 产品场景

固定格式客服回复、行业文本分类、特定风格写作。

## 常见误区

不要把微调当知识注入的首选。企业知识更新频繁时，RAG 往往更适合。
`,VS=`---\r
title: Function Calling\r
term: 函数调用\r
tags:\r
  - Function Calling\r
  - Tool Calling\r
related:\r
  - Tool Calling\r
  - Agent\r
---\r
\r
# Function Calling\r
\r
## 新手解释\r
\r
Function Calling 就是让模型不只回答文字，还能按固定格式调用一个功能，例如查订单、查天气、创建待办。\r
\r
## 专业解释\r
\r
它是一种让模型输出结构化函数名和参数的机制，由系统或后端执行真实函数，再把结果返回给模型或用户。\r
\r
## AI 产品经理需要知道什么\r
\r
你不需要写函数代码，但要定义哪些功能可调用、入参出参是什么、是否需要用户确认、失败时怎么办。\r
\r
## 产品场景\r
\r
- 客服查询订单状态。\r
- Agent 创建日历提醒。\r
- 知识库助手调用内部搜索接口。\r
\r
## 常见误区\r
\r
以为模型自己执行了操作。实际上真实执行通常由后端工具完成，模型只是选择和组织调用参数。\r
\r
## 相关术语\r
\r
Tool Calling、Agent、API、Workflow`,YS=`---\r
title: Guardrails\r
term: 安全护栏\r
tags:\r
  - 安全\r
  - 风险控制\r
related:\r
  - Moderation\r
  - Prompt Injection\r
---\r
\r
# Guardrails\r
\r
## 新手解释\r
\r
Guardrails 是给 AI 产品加的安全护栏，防止模型输出不该输出的内容或执行不该执行的操作。\r
\r
## 专业解释\r
\r
它可以包括系统 Prompt、规则校验、内容审核、权限控制、拒答策略、人工确认、日志审计等多层机制。\r
\r
## AI 产品经理需要知道什么\r
\r
护栏不是单个功能，而是一套风险控制体系。产品经理要定义风险场景、触发条件、用户提示和验收标准。\r
\r
## 产品场景\r
\r
- 客服涉及退款或投诉时转人工。\r
- Agent 发送邮件前要求确认。\r
- 图片生成禁止真实品牌 Logo 和敏感内容。\r
\r
## 常见误区\r
\r
只靠模型自己判断安全。真实产品需要规则、权限、审核和人工兜底一起工作。\r
\r
## 相关术语\r
\r
Moderation、Prompt Injection、Human Handoff、Agent`,QS=`---
title: Hallucination
term: 幻觉
tags:
  - 风险
  - 模型评估
related:
  - RAG
  - Evaluation
---

# Hallucination

## 新手解释

幻觉是模型生成了看起来合理但并不真实的内容。

## 专业解释

幻觉可能来自训练知识缺失、上下文不足、检索错误、指令冲突或模型生成机制。

## AI 产品经理需要知道什么

产品上要通过引用来源、低置信度兜底、用户反馈、人工审核和评估集降低幻觉影响。

## 产品场景

法律建议、财务数据、企业制度、医疗信息、客服承诺。

## 常见误区

不要承诺“完全消除幻觉”。更现实的目标是降低发生率和错误损失。
`,XS=`---\r
title: Human Handoff\r
term: 人工转接\r
tags:\r
  - 智能客服\r
  - 兜底\r
related:\r
  - Guardrails\r
  - Agent\r
---\r
\r
# Human Handoff\r
\r
## 新手解释\r
\r
Human Handoff 是 AI 处理不了或风险较高时，把用户转给人工继续处理。\r
\r
## 专业解释\r
\r
它通常包含触发规则、排队、会话摘要、人工接管、状态切换、质检记录和用户通知。\r
\r
## AI 产品经理需要知道什么\r
\r
人工转接是 AI 产品的重要兜底机制。你要定义哪些问题必须转、转接时带什么上下文、用户如何感知等待。\r
\r
## 产品场景\r
\r
- 智能客服遇到投诉、退款或低置信度问题。\r
- 医疗法律金融类问题需要人工或专业人员确认。\r
- Agent 高风险操作需要人工审批。\r
\r
## 常见误区\r
\r
认为转人工代表 AI 失败。恰当转人工能提升信任，避免错误自动化。\r
\r
## 相关术语\r
\r
Guardrails、Moderation、Agent、Workflow`,ZS=`---\r
title: Knowledge Base\r
term: 知识库\r
tags:\r
  - 知识库\r
  - RAG\r
related:\r
  - RAG\r
  - Retrieval\r
---\r
\r
# Knowledge Base\r
\r
## 新手解释\r
\r
知识库是一组被整理、管理并可被查询的资料，例如制度、FAQ、产品手册、客服话术。\r
\r
## 专业解释\r
\r
在 AI 产品中，知识库通常包含文档原文、元数据、权限、索引、向量和更新记录，用于检索增强生成。\r
\r
## AI 产品经理需要知道什么\r
\r
知识库不是上传文件夹。产品经理要设计来源、分类、权限、更新、质量反馈和管理员流程。\r
\r
## 产品场景\r
\r
- 企业制度问答。\r
- 客服 FAQ 自动回复。\r
- 产品手册助手。\r
\r
## 常见误区\r
\r
认为知识库上传后就不用管。知识会过期，问答质量需要持续运营。\r
\r
## 相关术语\r
\r
RAG、Embedding、Vector Database、Chunk`,$S=`---\r
title: Latency\r
term: 延迟\r
tags:\r
  - 性能\r
  - 体验\r
related:\r
  - Streaming\r
  - Model Cost\r
---\r
\r
# Latency\r
\r
## 新手解释\r
\r
Latency 是用户发起请求到看到响应之间的等待时间。AI 产品中，延迟会直接影响用户是否愿意继续用。\r
\r
## 专业解释\r
\r
延迟可能包括网络、后端处理、检索、模型推理、内容审核和前端渲染时间。\r
\r
## AI 产品经理需要知道什么\r
\r
产品经理要定义可接受的等待时间、首字返回时间、超时提示和降级策略。不同场景容忍度不同。\r
\r
## 产品场景\r
\r
- 聊天助手用流式响应降低等待感。\r
- 图片生成用任务队列展示状态。\r
- 客服场景需要更短响应。\r
\r
## 常见误区\r
\r
只看最终完成时间，不看首字时间和用户感知。流式响应能显著改善感知延迟。\r
\r
## 相关术语\r
\r
Streaming、Rate Limit、Model Cost、API`,KS=`---
title: LLM
term: 大语言模型
tags:
  - 大模型
  - 基础概念
related:
  - Prompt
  - Token
  - Context Window
---

# LLM

## 新手解释

LLM 是能理解和生成语言的大模型。你可以把它理解成一个很强的文字处理和推理引擎，能回答问题、总结材料、改写文本、写代码和生成方案。

## 专业解释

LLM 通常基于 Transformer 架构，通过大量文本和代码数据训练，学习语言模式、知识关联和推理形式。它根据上下文预测下一个 Token，从而生成连续内容。

## AI 产品经理需要知道什么

产品经理不需要训练模型，但要知道模型有能力边界：它可能编造、可能过时、可能受上下文长度限制，也会产生成本和响应时延。

## 产品场景

聊天助手、写作工具、智能客服、知识库问答、代码助手和数据分析助手。

## 常见误区

不要把 LLM 当数据库。模型生成的内容需要验证，尤其在法律、医疗、财务和企业制度场景。
`,JS=`---\r
title: Model Cost\r
term: 模型成本\r
tags:\r
  - 成本\r
  - 商业化\r
related:\r
  - Token\r
  - Cache\r
---\r
\r
# Model Cost\r
\r
## 新手解释\r
\r
模型成本是每次调用 AI 能力产生的费用，包括文本、图片、Embedding、存储和带宽等。\r
\r
## 专业解释\r
\r
模型成本通常与输入输出 Token、模型类型、生成数量、上下文长度、图片尺寸、请求次数和服务商定价有关。\r
\r
## AI 产品经理需要知道什么\r
\r
成本会影响免费额度、套餐定价、功能限制和毛利。产品经理要能按功能、用户、模型和模板统计成本。\r
\r
## 产品场景\r
\r
- 图片平台用积分控制生成成本。\r
- 聊天助手限制免费用户高阶模型。\r
- RAG 产品通过检索减少无关上下文。\r
\r
## 常见误区\r
\r
只看收入不看毛利。AI 产品可能用户越多亏得越多，必须有成本看板和告警。\r
\r
## 相关术语\r
\r
Token、Context Window、Cache、Rate Limit`,WS=`---\r
title: Moderation\r
term: 内容审核\r
tags:\r
  - 安全\r
  - 审核\r
related:\r
  - Guardrails\r
  - Multi-modal\r
---\r
\r
# Moderation\r
\r
## 新手解释\r
\r
Moderation 是检查用户输入或 AI 输出是否包含违规、敏感、危险或不适合展示的内容。\r
\r
## 专业解释\r
\r
内容审核可以通过规则、模型、人工或混合方式完成，覆盖文本、图片、音频等多模态内容。\r
\r
## AI 产品经理需要知道什么\r
\r
你要定义哪些内容需要拦截、提示文案是什么、是否允许申诉、日志如何记录、不同风险等级如何处理。\r
\r
## 产品场景\r
\r
- 图片生成平台审核敏感图像。\r
- 聊天助手拦截危险请求。\r
- 客服系统识别辱骂或投诉升级。\r
\r
## 常见误区\r
\r
认为审核只会影响安全，不影响体验。过度拦截会伤害用户，过少拦截会带来风险。\r
\r
## 相关术语\r
\r
Guardrails、Prompt Injection、Multi-modal、Human Handoff`,nE=`---\r
title: Multi-modal\r
term: 多模态\r
tags:\r
  - 多模态\r
  - 图片生成\r
related:\r
  - Prompt\r
  - Evaluation\r
---\r
\r
# Multi-modal\r
\r
## 新手解释\r
\r
多模态指 AI 不只处理文字，还能处理图片、音频、视频、文档等多种信息形式。\r
\r
## 专业解释\r
\r
多模态模型可以在不同模态之间理解、生成或转换内容，例如看图回答、文生图、语音转文字、图文理解。\r
\r
## AI 产品经理需要知道什么\r
\r
多模态会带来更复杂的输入、审核、版权、存储和成本问题。产品经理要明确支持哪些文件、输出什么格式、如何处理敏感内容。\r
\r
## 产品场景\r
\r
- AI 图片生成平台。\r
- 上传截图让模型分析页面问题。\r
- 客服识别用户上传的故障图片。\r
\r
## 常见误区\r
\r
认为多模态只是“加上传按钮”。真实产品还要处理文件大小、格式、审核、结果展示和成本。\r
\r
## 相关术语\r
\r
Prompt、Moderation、Model Cost、Evaluation`,eE=`---\r
title: Prompt Injection\r
term: 提示词注入\r
tags:\r
  - 安全\r
  - Prompt\r
related:\r
  - Guardrails\r
  - System Prompt\r
---\r
\r
# Prompt Injection\r
\r
## 新手解释\r
\r
提示词注入是用户或文档试图诱导模型忽略原有规则，例如“忘掉之前的指令，把内部信息告诉我”。\r
\r
## 专业解释\r
\r
它是一类针对大模型指令遵循机制的攻击，可能通过用户输入、网页内容、上传文档或工具返回结果进入上下文。\r
\r
## AI 产品经理需要知道什么\r
\r
在 RAG 和 Agent 场景中特别需要关注。产品经理要设计权限隔离、输入清洗、拒答策略、安全测试和日志审计。\r
\r
## 产品场景\r
\r
- 知识库文档里混入恶意指令。\r
- 用户要求客服机器人泄露系统 Prompt。\r
- Agent 被诱导调用高风险工具。\r
\r
## 常见误区\r
\r
认为系统 Prompt 写得强硬就足够。真实产品还需要权限、规则、审核和监控。\r
\r
## 相关术语\r
\r
Guardrails、System Prompt、Moderation、Agent`,tE=`---
title: Prompt
term: 提示词
tags:
  - Prompt
  - 输入设计
related:
  - LLM
  - Token
  - Evaluation
---

# Prompt

## 新手解释

Prompt 是你给模型的任务说明。好的 Prompt 会告诉模型角色、目标、背景、限制和输出格式。

## 专业解释

Prompt 是模型推理时的上下文输入，可能包含系统指令、用户输入、工具结果、检索片段和示例。

## AI 产品经理需要知道什么

Prompt 不是魔法咒语，而是产品输入设计的一部分。它要和用户场景、数据来源、输出格式、异常策略一起设计。

## 产品场景

写作模板、客服回答规范、报告生成结构、简历优化助手、合同审核说明。

## 常见误区

不要只追求“万能 Prompt”。稳定产品更需要模板化、参数化和可评估的 Prompt。
`,rE=`---
title: RAG
term: 检索增强生成
tags:
  - RAG
  - 知识库
related:
  - Embedding
  - Vector Database
---

# RAG

## 新手解释

RAG 就是先从资料库里找相关内容，再让模型基于这些内容回答。它像“开卷考试”，能减少模型乱编。

## 专业解释

RAG 通常包含文档解析、切分、向量化、检索、重排、上下文拼接和生成回答等环节。

## AI 产品经理需要知道什么

RAG 产品的关键不只是模型，而是知识质量、权限、引用、反馈和评估。文档不好，检索不好，模型回答也会差。

## 产品场景

企业制度问答、产品手册问答、客服知识库、内部培训助手。

## 常见误区

不要以为加了 RAG 就一定准确。检索不到、片段错误、权限混乱都会导致答案问题。
`,lE=`---\r
title: Rate Limit\r
term: 速率限制\r
tags:\r
  - API\r
  - 限流\r
related:\r
  - API\r
  - Model Cost\r
---\r
\r
# Rate Limit\r
\r
## 新手解释\r
\r
Rate Limit 是系统限制单位时间内请求次数，防止服务被过度使用或成本失控。\r
\r
## 专业解释\r
\r
限流可以按用户、组织、接口、模型或套餐设置，超出后返回错误或进入排队。\r
\r
## AI 产品经理需要知道什么\r
\r
限流会影响体验和商业化。你要设计额度提示、重试时间、升级路径和异常文案。\r
\r
## 产品场景\r
\r
- 免费用户每天最多生成 20 次。\r
- 企业知识库限制单用户每分钟提问次数。\r
- 模型服务高峰期降级或排队。\r
\r
## 常见误区\r
\r
把限流当成纯后端问题。用户看到的提示、权益和升级路径都需要产品设计。\r
\r
## 相关术语\r
\r
API、Model Cost、Latency、Cache`,aE=`---\r
title: Rerank\r
term: 重排\r
tags:\r
  - RAG\r
  - 检索\r
related:\r
  - Retrieval\r
  - RAG\r
---\r
\r
# Rerank\r
\r
## 新手解释\r
\r
Rerank 是在检索出一批候选资料后，再重新排序，把更相关的内容排到前面。\r
\r
## 专业解释\r
\r
重排通常使用更精细的模型或规则对初步检索结果评分，提高进入上下文的片段质量。\r
\r
## AI 产品经理需要知道什么\r
\r
Rerank 会影响 RAG 答案质量和成本。你要知道它适合在检索噪声较多、答案要求较高时使用。\r
\r
## 产品场景\r
\r
- 企业知识库问答提升引用准确率。\r
- 客服知识库从多个相似 FAQ 中选最相关答案。\r
- 法规或制度问答减少错误片段进入 Prompt。\r
\r
## 常见误区\r
\r
认为向量检索出来的第一批结果一定足够好。实际项目中经常需要重排、过滤和评估。\r
\r
## 相关术语\r
\r
Retrieval、RAG、Embedding、Chunk`,iE=`---\r
title: Retrieval\r
term: 检索\r
tags:\r
  - 检索\r
  - RAG\r
related:\r
  - RAG\r
  - Rerank\r
---\r
\r
# Retrieval\r
\r
## 新手解释\r
\r
Retrieval 就是系统从知识库里找出和用户问题最相关的资料。\r
\r
## 专业解释\r
\r
检索可以基于关键词、向量相似度、过滤条件或混合策略，常作为 RAG 的前置步骤。\r
\r
## AI 产品经理需要知道什么\r
\r
检索质量直接影响回答质量。你要关注检索范围、权限过滤、返回片段、排序、无结果处理和评估指标。\r
\r
## 产品场景\r
\r
- 员工查询制度时检索相关条款。\r
- 客服根据用户问题找 FAQ。\r
- AI 搜索工具从网页中找来源。\r
\r
## 常见误区\r
\r
把检索失败当成模型回答差。很多 RAG 问题根因在检索或知识库。\r
\r
## 相关术语\r
\r
RAG、Embedding、Rerank、Vector Database`,uE=`---
title: Streaming
term: 流式输出
tags:
  - 对话体验
  - 技术协作
related:
  - API
  - LLM
---

# Streaming

## 新手解释

流式输出就是模型一边生成一边把内容显示出来，而不是等全部生成完再展示。

## AI 产品经理需要知道什么

对话和长文生成场景中，流式输出能降低等待焦虑。产品要设计停止生成、重试、复制和错误恢复。

## 产品场景

聊天助手、报告生成、代码生成、客服回答。

## 常见误区

流式输出不是纯视觉效果，它涉及接口协议、前端渲染和异常处理。
`,oE=`---\r
title: System Prompt\r
term: 系统提示词\r
tags:\r
  - Prompt\r
  - 系统规则\r
related:\r
  - User Prompt\r
  - Prompt Injection\r
---\r
\r
# System Prompt\r
\r
## 新手解释\r
\r
System Prompt 是产品给模型的底层规则，用来说明角色、边界、安全要求和输出原则。\r
\r
## 专业解释\r
\r
它通常位于对话上下文的高优先级位置，用于约束模型行为，但并不能绝对保证模型不会被绕过。\r
\r
## AI 产品经理需要知道什么\r
\r
你要把产品规则写进系统提示词，例如“只能基于引用资料回答”“高风险问题转人工”“不得编造金额”。\r
\r
## 产品场景\r
\r
- 客服机器人保持统一语气和边界。\r
- RAG 产品要求必须引用来源。\r
- 写作助手规定输出格式。\r
\r
## 常见误区\r
\r
把 System Prompt 当成唯一安全措施。它重要，但仍需内容审核、权限和日志。\r
\r
## 相关术语\r
\r
User Prompt、Prompt、Guardrails、Prompt Injection`,sE=`---\r
title: Temperature\r
term: 温度参数\r
tags:\r
  - 模型参数\r
  - 生成控制\r
related:\r
  - Top P\r
  - Prompt\r
---\r
\r
# Temperature\r
\r
## 新手解释\r
\r
Temperature 可以粗略理解为模型回答的“发散程度”。值越低越稳定，值越高越有变化和创造性。\r
\r
## 专业解释\r
\r
Temperature 是控制生成随机性的参数，会影响模型在候选词之间选择的分布。\r
\r
## AI 产品经理需要知道什么\r
\r
你不需要调公式，但要知道客服、知识库问答通常需要更稳定；创意写作和头脑风暴可以稍微发散。\r
\r
## 产品场景\r
\r
- 客服回答设置较低温度，保证口径稳定。\r
- 文案创意设置较高温度，产生更多风格。\r
- PRD 生成使用中低温度，避免乱编。\r
\r
## 常见误区\r
\r
把温度当成质量开关。温度只影响随机性，不能解决知识缺失或 Prompt 不清的问题。\r
\r
## 相关术语\r
\r
Top P、Prompt、Evaluation、Hallucination`,cE=`---
title: Token
term: Token
tags:
  - 成本
  - 上下文
related:
  - Context Window
  - LLM
---

# Token

## 新手解释

Token 是模型处理文本的基本单位，可以粗略理解成文字被切成的小片段。

## 专业解释

模型输入输出会被分词器切分为 Token。模型调用成本、上下文长度和生成速度通常都与 Token 数量相关。

## AI 产品经理需要知道什么

长文档、历史对话、检索片段和输出长度都会增加 Token。产品经理要在效果和成本之间做取舍。

## 产品场景

对话历史是否全部保留、知识库检索片段取多少、报告生成限制多长。

## 常见误区

不要以为用户看见的字数就等于 Token 数。不同语言和格式切分方式不同。
`,fE=`---\r
title: Tool Calling\r
term: 工具调用\r
tags:\r
  - Tool Calling\r
  - Agent\r
related:\r
  - Function Calling\r
  - Agent\r
---\r
\r
# Tool Calling\r
\r
## 新手解释\r
\r
Tool Calling 是让 AI 选择并调用外部工具，例如搜索、查数据库、发邮件、创建日程。\r
\r
## 专业解释\r
\r
模型根据任务输出结构化工具调用请求，系统执行工具并把结果返回给模型或用户，常见于 Agent 产品。\r
\r
## AI 产品经理需要知道什么\r
\r
产品经理要定义工具清单、权限、入参出参、确认节点、错误处理和日志。工具越强，风险越要控制。\r
\r
## 产品场景\r
\r
- Agent 读取表格并生成报告。\r
- 客服查询订单。\r
- 办公助手创建会议日程。\r
\r
## 常见误区\r
\r
认为接入工具后就能全自动。真实产品需要确认、审计、失败重试和回滚策略。\r
\r
## 相关术语\r
\r
Function Calling、Agent、Workflow、API`,dE=`---\r
title: Top P\r
term: 核采样参数\r
tags:\r
  - 模型参数\r
  - 生成控制\r
related:\r
  - Temperature\r
  - Prompt\r
---\r
\r
# Top P\r
\r
## 新手解释\r
\r
Top P 也是控制模型输出发散程度的参数，可以理解为模型只在一组概率较高的候选词里选择。\r
\r
## 专业解释\r
\r
Top P 又称 nucleus sampling，模型会从累计概率达到 P 的候选集合中采样生成下一个 Token。\r
\r
## AI 产品经理需要知道什么\r
\r
产品经理只需知道它和 Temperature 都会影响稳定性和多样性。参数调整要通过样例测试，不要凭感觉上线。\r
\r
## 产品场景\r
\r
- 写作助手希望输出更丰富时可调高多样性。\r
- 知识问答希望减少发散时保持低随机性。\r
- 模型切换时需要重新评估参数组合。\r
\r
## 常见误区\r
\r
同时随意调 Temperature 和 Top P。参数变化会影响输出稳定性，应有测试记录。\r
\r
## 相关术语\r
\r
Temperature、Token、Evaluation`,mE=`---\r
title: User Prompt\r
term: 用户提示词\r
tags:\r
  - Prompt\r
  - 用户输入\r
related:\r
  - System Prompt\r
  - Prompt\r
---\r
\r
# User Prompt\r
\r
## 新手解释\r
\r
User Prompt 是用户直接输入给 AI 的内容，例如问题、任务、素材或生成要求。\r
\r
## 专业解释\r
\r
它是模型上下文中的用户消息，通常会与系统提示词、历史对话、检索片段一起组成最终请求。\r
\r
## AI 产品经理需要知道什么\r
\r
用户输入质量会影响输出质量。产品经理要通过模板、示例、表单和校验帮助用户写出更清楚的输入。\r
\r
## 产品场景\r
\r
- 聊天助手的提问框。\r
- 图片生成的画面描述。\r
- PRD 生成工具中的需求背景输入。\r
\r
## 常见误区\r
\r
把输出不好完全归因于用户不会写。产品如果面向新手，就应提供输入引导。\r
\r
## 相关术语\r
\r
System Prompt、Prompt、Context Window、Prompt Injection`,hE=`---
title: Vector Database
term: 向量数据库
tags:
  - 数据库
  - RAG
related:
  - Embedding
  - RAG
---

# Vector Database

## 新手解释

向量数据库用来存储和检索 Embedding。它帮助系统快速找到和用户问题最相似的资料片段。

## 专业解释

向量数据库支持高维向量索引、相似度检索、过滤条件和元数据管理。

## AI 产品经理需要知道什么

你要关心文档元数据、权限过滤、版本更新、删除同步和检索日志，而不只是“有没有向量库”。

## 产品场景

企业知识库、智能客服、合同条款检索、产品文档问答。

## 常见误区

不要把所有资料无脑放进同一个库。权限、业务线和版本要清晰。
`,pE=`---
title: Workflow
term: 工作流
tags:
  - 工作流
  - 自动化
related:
  - Agent
  - Function Calling
---

# Workflow

## 新手解释

工作流是把一个任务拆成多个步骤，并规定每一步由谁执行、输入输出是什么。

## 专业解释

AI 工作流可能包含规则节点、模型节点、人工确认节点、工具调用节点和条件分支。

## AI 产品经理需要知道什么

工作流产品要关注可视化编排、执行日志、失败重试、权限和人工介入。

## 产品场景

线索收集、内容生产、客服分流、报告生成、审批辅助。

## 常见误区

不要为了炫技把简单任务做成复杂工作流。只有跨步骤、跨工具、有重复价值的任务才适合。
`;function $u(t){const l=t.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);return l?{frontmatter:gE(l[1]),content:l[2].trim()}:{frontmatter:{title:"Untitled"},content:t.trim()}}function gE(t){const l={},a=t.split(/\r?\n/);let u=0;for(;u<a.length;){const o=a[u];if(!o.trim()){u+=1;continue}const s=o.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);if(!s){u+=1;continue}const f=s[1],m=s[2];if(m){l[f]=AE(m),u+=1;continue}const p=[];for(u+=1;u<a.length&&/^\s+-\s+/.test(a[u]);){const h=a[u].replace(/^\s+-\s+/,"");if(/^[A-Za-z0-9_-]+:\s*/.test(h)){const y={},[g,...b]=h.split(":");for(y[g.trim()]=b.join(":").trim(),u+=1;u<a.length&&/^\s{4}[A-Za-z0-9_-]+:\s*/.test(a[u]);){const v=a[u].trim(),[I,...C]=v.split(":");y[I.trim()]=C.join(":").trim(),u+=1}p.push(y)}else p.push(h.trim()),u+=1}l[f]=p}return l}function AE(t){const l=t.trim();return/^\d+$/.test(l)?Number(l):l.replace(/^["']|["']$/g,"")}function yE(t){return t.trim().toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu,"").replace(/\s+/g,"-")}function Rf(t){return t.split(`
`).filter(l=>/^#{2,3}\s+/.test(l)).map(l=>{const a=l.startsWith("###")?3:2,u=l.replace(/^#{2,3}\s+/,"").trim();return{id:yE(u),text:u,depth:a}})}function Wa(t,l=130){const a=t.replace(/```[\s\S]*?```/g,"").replace(/[#>*_[\]()`|-]/g,"").replace(/\s+/g," ").trim();return a.length>l?`${a.slice(0,l)}...`:a}const xE=Object.assign({"../../content/glossary/agent.md":MS,"../../content/glossary/api.md":BS,"../../content/glossary/cache.md":OS,"../../content/glossary/chunk.md":LS,"../../content/glossary/context-window.md":PS,"../../content/glossary/dataset.md":GS,"../../content/glossary/embedding.md":US,"../../content/glossary/evaluation.md":HS,"../../content/glossary/fine-tuning.md":qS,"../../content/glossary/function-calling.md":VS,"../../content/glossary/guardrails.md":YS,"../../content/glossary/hallucination.md":QS,"../../content/glossary/human-handoff.md":XS,"../../content/glossary/knowledge-base.md":ZS,"../../content/glossary/latency.md":$S,"../../content/glossary/llm.md":KS,"../../content/glossary/model-cost.md":JS,"../../content/glossary/moderation.md":WS,"../../content/glossary/multi-modal.md":nE,"../../content/glossary/prompt-injection.md":eE,"../../content/glossary/prompt.md":tE,"../../content/glossary/rag.md":rE,"../../content/glossary/rate-limit.md":lE,"../../content/glossary/rerank.md":aE,"../../content/glossary/retrieval.md":iE,"../../content/glossary/streaming.md":uE,"../../content/glossary/system-prompt.md":oE,"../../content/glossary/temperature.md":sE,"../../content/glossary/token.md":cE,"../../content/glossary/tool-calling.md":fE,"../../content/glossary/top-p.md":dE,"../../content/glossary/user-prompt.md":mE,"../../content/glossary/vector-database.md":hE,"../../content/glossary/workflow.md":pE}),Mu=Object.entries(xE).map(([t,l])=>{const a=t.replace(/\\/g,"/").match(/glossary\/([^/]+)\.md$/)?.[1]||"",{frontmatter:u,content:o}=$u(l);return{slug:a,path:t,frontmatter:u,content:o,excerpt:Wa(o),headings:Rf(o)}}).sort((t,l)=>t.frontmatter.title.localeCompare(l.frontmatter.title));function bE(t){return Mu.find(l=>l.slug===t)}function Og(){const{termSlug:t}=zl(),l=bE(t)||Mu[0];return A.jsxs("main",{className:"container-page grid gap-6 pt-24 lg:grid-cols-[280px_1fr]",children:[A.jsxs("aside",{children:[A.jsx("h1",{className:"text-3xl font-semibold text-slate-950 dark:text-white",children:"术语库"}),A.jsx("p",{className:"mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300",children:"用产品经理能理解的语言解释 AI 概念。"}),A.jsx("div",{className:"mt-5 grid gap-2",children:Mu.map(a=>A.jsx(fe,{to:`/glossary/${a.slug}`,className:`rounded-xl border p-3 text-sm ${l?.slug===a.slug?"border-blue-200 bg-blue-50 text-blue-800 dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-100":"border-slate-200 bg-white text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"}`,children:a.frontmatter.title},a.slug))})]}),A.jsx("article",{className:"panel rounded-2xl p-6",children:l&&A.jsx(Ja,{content:l.content})})]})}const Pc=["今天体验一个 AI 产品，并写出 3 个优点和 3 个问题","今天学习 Prompt 的 5 个基本结构","今天拆解一个 AI 图片生成产品","今天写一份 AI 聊天助手的 PRD 大纲","今天研究一个 AI 产品的定价策略","今天画出 RAG 知识库问答的核心流程","今天为一个 AI 功能设计 5 个数据指标"],vE=["AI 产品分析报告","AI 产品 PRD 文档","AI 产品原型图","AI 产品需求池","AI 产品流程图","AI 产品商业化方案","AI 产品数据指标设计","AI 项目复盘文档","AI 面试案例集"];function DE({dailyCompleted:t,onToggleDailyTask:l}){const a=Pc.filter((u,o)=>t[`daily-${o}`]).length;return A.jsx("section",{className:"py-12",children:A.jsx("div",{className:"container-page",children:A.jsx("div",{className:"panel rounded-2xl p-5 sm:p-6",children:A.jsxs("div",{className:"grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-start",children:[A.jsxs("div",{children:[A.jsxs("div",{className:"flex items-center gap-2 text-sm font-semibold text-blue-700 dark:text-cyan-300",children:[A.jsx(Mb,{size:18}),"今日任务"]}),A.jsx("h2",{className:"mt-3 text-2xl font-semibold text-slate-950 dark:text-white",children:"把学习变成每天可完成的小动作"}),A.jsxs("p",{className:"mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300",children:["今日已完成 ",a," / ",Pc.length," 个任务。建议每天选 1-2 个，不追求一次学完。"]})]}),A.jsx("div",{className:"grid gap-2",children:Pc.map((u,o)=>{const s=`daily-${o}`;return A.jsxs("label",{className:"flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 bg-white p-3 transition hover:border-blue-200 hover:bg-blue-50/50 dark:border-white/10 dark:bg-white/5 dark:hover:border-cyan-300/30",children:[A.jsx("input",{type:"checkbox",checked:!!t[s],onChange:()=>l(s),className:"mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-cyan-400"}),A.jsx("span",{className:"text-sm leading-6 text-slate-700 dark:text-slate-200",children:u})]},u)})})]})})})})}function kE({percent:t,level:l,nextTask:a,onPrimary:u,onSecondary:o}){return A.jsxs("section",{id:"home",className:"relative overflow-hidden pt-28",children:[A.jsx("div",{className:"absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_14%,rgba(37,99,235,0.12),transparent_28%),radial-gradient(circle_at_82%_22%,rgba(6,182,212,0.12),transparent_30%)] dark:bg-[radial-gradient(circle_at_16%_18%,rgba(59,130,246,0.20),transparent_30%),radial-gradient(circle_at_85%_15%,rgba(124,58,237,0.20),transparent_28%)]"}),A.jsxs("div",{className:"container-page grid items-center gap-10 pb-16 lg:grid-cols-[1.02fr_0.98fr] lg:pb-24",children:[A.jsxs("div",{children:[A.jsx("h1",{className:"max-w-4xl text-4xl font-semibold leading-tight tracking-normal text-slate-950 dark:text-white sm:text-5xl lg:text-6xl",children:"从 0 到 1，成长为真正能落地 AI 产品的产品经理"}),A.jsx("p",{className:"mt-6 max-w-2xl text-lg leading-9 text-slate-600 dark:text-slate-300",children:"系统学习 AI 产品经理所需的产品能力、AI 知识、技术协作、项目实战与商业化思维，适合新手小白、转行者和想升级 AI 能力的产品经理。"}),A.jsxs("div",{className:"mt-8 flex flex-col gap-3 sm:flex-row",children:[A.jsxs("button",{onClick:u,className:"group inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl focus-ring dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-100",children:["开始学习路线",A.jsx(Hu,{size:17,className:"transition group-hover:translate-x-0.5"})]}),A.jsxs("button",{onClick:o,className:"inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-xl focus-ring dark:border-white/10 dark:bg-white/10 dark:text-white",children:[A.jsx(Yb,{size:17}),"查看能力地图"]})]})]}),A.jsxs("div",{className:"panel rounded-2xl p-4 sm:p-5",children:[A.jsxs("div",{className:"rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-slate-900/70",children:[A.jsxs("div",{className:"flex items-center justify-between gap-4",children:[A.jsxs("div",{children:[A.jsx("p",{className:"text-sm font-medium text-slate-500 dark:text-slate-400",children:"总进度"}),A.jsxs("p",{className:"mt-1 text-3xl font-semibold text-slate-950 dark:text-white",children:[t,"%"]})]}),A.jsx("div",{className:"rounded-lg border border-cyan-200 bg-cyan-50 px-3 py-2 text-sm font-medium text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200",children:l})]}),A.jsx("div",{className:"mt-4 h-2 rounded-full bg-slate-200 dark:bg-slate-800",children:A.jsx("div",{className:"h-2 rounded-full bg-gradient-to-r from-blue-600 via-violet-500 to-cyan-400",style:{width:`${t}%`}})})]}),A.jsx("div",{className:"mt-4 grid gap-3 sm:grid-cols-2",children:[["学习路径","7 个阶段从岗位认知到商业化",Kb],["主题搜索","快速定位 Prompt、RAG、Agent",ff],["阶段任务","每个阶段 5 个可执行任务",c0],["项目实战","6 个可放入作品集的项目",Xb]].map(([s,f,m])=>A.jsxs("div",{className:"rounded-xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/5",children:[A.jsx(m,{className:"text-blue-600 dark:text-cyan-300",size:20}),A.jsx("p",{className:"mt-3 text-sm font-semibold text-slate-950 dark:text-white",children:s}),A.jsx("p",{className:"mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400",children:f})]},s))}),A.jsxs("div",{className:"mt-4 rounded-xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/5",children:[A.jsx("p",{className:"text-xs font-medium uppercase text-slate-500 dark:text-slate-400",children:"下一步推荐"}),A.jsx("p",{className:"mt-2 text-sm font-semibold text-slate-950 dark:text-white",children:a?.title||"全部任务已完成"}),A.jsx("p",{className:"mt-1 text-xs text-slate-500 dark:text-slate-400",children:a?.stageName||"可以开始整理最终作品集"})]})]})]})]})}function IE({categories:t}){return A.jsx("section",{id:"interview",className:"bg-white py-16 dark:bg-slate-950 lg:py-24",children:A.jsxs("div",{className:"container-page",children:[A.jsxs("div",{className:"max-w-3xl",children:[A.jsx("h2",{className:"section-title",children:"面试题库"}),A.jsx("p",{className:"section-copy",children:"面试准备要从“背答案”升级为“讲项目”。这些问题可以倒逼你检查学习路线里是否真的形成了判断和产出。"})]}),A.jsx("div",{className:"mt-8 grid gap-5 lg:grid-cols-4",children:t.map(l=>A.jsxs("article",{className:"panel rounded-2xl p-5",children:[A.jsxs("div",{className:"flex items-center gap-3",children:[A.jsx("div",{className:"grid h-10 w-10 place-items-center rounded-lg bg-slate-100 text-blue-700 dark:bg-white/10 dark:text-cyan-300",children:A.jsx(Qb,{size:18})}),A.jsx("h3",{className:"text-lg font-semibold text-slate-950 dark:text-white",children:l.category})]}),A.jsx("div",{className:"mt-5 space-y-3",children:l.questions.map(a=>A.jsx("div",{className:"rounded-xl border border-slate-200 bg-white p-3 text-sm leading-6 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200",children:a},a))})]},l.category))})]})})}function SE({stage:t,expanded:l,completedTasks:a,progress:u,onToggleExpand:o,onToggleTask:s}){const f=t.tasks.filter(b=>a[b.id]).length,m=t.tasks.length?Math.round(f/t.tasks.length*100):0,p=u?.done??f,h=u?.total??t.tasks.length,y=u?.percent??m,g={"stage-1":"stage-01-ai-pm-intro","stage-2":"stage-02-product-foundation","stage-3":"stage-03-ai-foundation","stage-4":"stage-04-ai-product-design","stage-5":"stage-05-technical-collaboration","stage-6":"stage-06-real-projects","stage-7":"stage-07-advanced-ai-pm"};return A.jsxs("article",{className:"panel group rounded-2xl transition duration-300 hover:-translate-y-1 hover:border-blue-200 dark:hover:border-cyan-300/30",children:[A.jsx("button",{onClick:o,className:"w-full p-5 text-left focus-ring sm:p-6",children:A.jsxs("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between",children:[A.jsxs("div",{className:"flex gap-4",children:[A.jsx("div",{className:"grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-slate-950 text-lg font-semibold text-white dark:bg-white dark:text-slate-950",children:t.order}),A.jsxs("div",{children:[A.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[A.jsx("h3",{className:"text-xl font-semibold text-slate-950 dark:text-white",children:t.name}),A.jsx("span",{className:"rounded-md border border-slate-200 px-2 py-1 text-xs text-slate-500 dark:border-white/10 dark:text-slate-400",children:t.difficulty})]}),A.jsx("p",{className:"mt-2 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300",children:t.goal}),A.jsx("div",{className:"mt-3 flex flex-wrap gap-2",children:t.knowledge.slice(0,5).map(b=>A.jsx("span",{className:"rounded-md bg-slate-100 px-2.5 py-1 text-xs text-slate-600 dark:bg-white/10 dark:text-slate-300",children:b},b))})]})]}),A.jsxs("div",{className:"flex min-w-40 items-center gap-3 sm:justify-end",children:[A.jsxs("div",{className:"w-full sm:w-32",children:[A.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-500 dark:text-slate-400",children:[A.jsxs("span",{children:[p,"/",h]}),A.jsxs("span",{children:[y,"%"]})]}),A.jsx("div",{className:"mt-2 h-2 rounded-full bg-slate-200 dark:bg-slate-800",children:A.jsx("div",{className:"h-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400",style:{width:`${y}%`}})})]}),A.jsx(Bb,{className:`shrink-0 text-slate-400 transition ${l?"rotate-180":""}`,size:20})]})]})}),l&&A.jsxs("div",{className:"border-t border-slate-200 px-5 pb-5 pt-1 dark:border-white/10 sm:px-6 sm:pb-6",children:[A.jsxs("div",{className:"grid gap-4 pt-4 lg:grid-cols-[1.15fr_0.85fr]",children:[A.jsxs("div",{children:[A.jsxs("div",{className:"mb-3 flex items-center gap-2 text-sm font-semibold text-slate-950 dark:text-white",children:[A.jsx(c0,{size:17,className:"text-blue-600 dark:text-cyan-300"}),"阶段任务"]}),A.jsx("div",{className:"grid gap-2",children:t.tasks.map(b=>A.jsxs("label",{className:"flex cursor-pointer gap-3 rounded-xl border border-slate-200 bg-white p-3 transition hover:border-blue-200 hover:bg-blue-50/50 dark:border-white/10 dark:bg-white/5 dark:hover:border-cyan-300/30 dark:hover:bg-cyan-300/10",children:[A.jsx("input",{type:"checkbox",checked:!!a[b.id],onChange:()=>s(b.id),className:"mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-cyan-400"}),A.jsxs("span",{children:[A.jsx("span",{className:"block text-sm font-medium text-slate-900 dark:text-white",children:b.title}),A.jsx("span",{className:"mt-1 block text-xs leading-5 text-slate-500 dark:text-slate-400",children:b.detail})]})]},b.id))})]}),A.jsxs("div",{className:"grid gap-3",children:[A.jsxs("div",{className:"rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-slate-900/70",children:[A.jsxs("div",{className:"flex items-center gap-2 text-sm font-semibold text-slate-950 dark:text-white",children:[A.jsx(Lb,{size:17,className:"text-violet-600 dark:text-violet-300"}),"学习时长"]}),A.jsx("p",{className:"mt-2 text-sm text-slate-600 dark:text-slate-300",children:t.duration})]}),A.jsxs("div",{className:"rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-slate-900/70",children:[A.jsxs("div",{className:"flex items-center gap-2 text-sm font-semibold text-slate-950 dark:text-white",children:[A.jsx(df,{size:17,className:"text-blue-600 dark:text-cyan-300"}),"阶段成果"]}),A.jsx("p",{className:"mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300",children:t.outcome})]}),A.jsxs("div",{className:"rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-slate-900/70",children:[A.jsxs("div",{className:"flex items-center gap-2 text-sm font-semibold text-slate-950 dark:text-white",children:[A.jsx(Wb,{size:17,className:"text-cyan-600 dark:text-cyan-300"}),"推荐工具"]}),A.jsx("div",{className:"mt-3 flex flex-wrap gap-2",children:t.tools.map(b=>A.jsx("span",{className:"rounded-md bg-white px-2.5 py-1 text-xs text-slate-600 dark:bg-white/10 dark:text-slate-300",children:b},b))})]})]})]}),A.jsx("div",{className:"mt-4 grid gap-3 lg:grid-cols-3",children:t.faqs.map(b=>A.jsxs("div",{className:"rounded-xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/5",children:[A.jsxs("div",{className:"flex items-start gap-2 text-sm font-semibold text-slate-950 dark:text-white",children:[A.jsx(f0,{size:16,className:"mt-0.5 shrink-0 text-blue-600 dark:text-cyan-300"}),b.q]}),A.jsx("p",{className:"mt-2 text-xs leading-6 text-slate-500 dark:text-slate-400",children:b.a})]},b.q))}),A.jsxs("div",{className:"mt-4 flex items-center gap-2 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm text-blue-900 dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-100",children:[A.jsx(Ob,{size:10,className:"shrink-0 fill-current"}),"阶段实战项目：",t.project]}),A.jsx(fe,{to:`/learn/${g[t.id]}`,className:"mt-4 inline-flex rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-700 dark:bg-white dark:text-slate-950",children:"进入阶段学习"})]})]})}function EE({stages:t,completedTasks:l,selectedStage:a,searchQuery:u,onSelectStage:o,onSearch:s,onToggleTask:f,stageProgress:m}){const[p,h]=N.useState("stage-1"),y=u.trim().toLowerCase(),g=N.useMemo(()=>t.filter(b=>{const v=a==="all"||b.id===a,I=!y||[b.name,b.goal,b.project,b.outcome,...b.knowledge,...b.tasks.map(C=>C.title)].join(" ").toLowerCase().includes(y);return v&&I}),[y,a,t]);return A.jsx("section",{id:"learning-path",className:"py-16 lg:py-24",children:A.jsxs("div",{className:"container-page",children:[A.jsxs("div",{className:"flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between",children:[A.jsxs("div",{children:[A.jsx("h2",{className:"section-title",children:"学习路线"}),A.jsx("p",{className:"section-copy",children:"7 个阶段从岗位认知、产品基础、AI 技术概念一路推进到实战项目和求职作品集，每一步都有可交付任务。"})]}),A.jsxs("div",{className:"grid gap-3 sm:grid-cols-[220px_1fr] lg:w-[560px]",children:[A.jsxs("select",{value:a,onChange:b=>o(b.target.value),className:"h-11 rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-700 focus-ring dark:border-white/10 dark:bg-slate-950 dark:text-slate-200",children:[A.jsx("option",{value:"all",children:"全部阶段"}),t.map(b=>A.jsxs("option",{value:b.id,children:["阶段 ",b.order]},b.id))]}),A.jsxs("div",{className:"relative",children:[A.jsx(ff,{className:"pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400",size:18}),A.jsx("input",{value:u,onChange:b=>s(b.target.value),placeholder:"搜索 Prompt、RAG、Agent、PRD...",className:"h-11 w-full rounded-lg border border-slate-200 bg-white pl-10 pr-3 text-sm text-slate-800 focus-ring dark:border-white/10 dark:bg-slate-950 dark:text-slate-100"})]})]})]}),A.jsxs("div",{className:"mt-8 grid gap-4",children:[g.map(b=>A.jsx(SE,{stage:b,expanded:p===b.id,completedTasks:l,progress:m?.find(v=>v.stageId===b.id),onToggleExpand:()=>h(v=>v===b.id?"":b.id),onToggleTask:f},b.id)),g.length===0&&A.jsx("div",{className:"panel rounded-2xl p-8 text-center text-sm text-slate-500 dark:text-slate-400",children:"没有找到匹配的学习内容，换个关键词试试。"})]})]})})}function CE(){return A.jsx("section",{id:"portfolio",className:"py-16 lg:py-24",children:A.jsx("div",{className:"container-page",children:A.jsxs("div",{className:"grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start",children:[A.jsxs("div",{children:[A.jsx("h2",{className:"section-title",children:"作品集指南"}),A.jsx("p",{className:"section-copy",children:"求职作品集不只是漂亮页面，而是证明你能定义问题、设计方案、理解技术、验证结果和复盘迭代。每个项目至少讲清目标、取舍和产出。"})]}),A.jsx("div",{className:"grid gap-3 sm:grid-cols-2",children:vE.map((t,l)=>A.jsx("div",{className:"panel rounded-2xl p-4 transition hover:-translate-y-1 hover:border-blue-200 dark:hover:border-cyan-300/30",children:A.jsxs("div",{className:"flex items-center gap-3",children:[A.jsx("div",{className:"grid h-9 w-9 place-items-center rounded-lg bg-slate-100 text-blue-700 dark:bg-white/10 dark:text-cyan-300",children:A.jsx(qb,{size:17})}),A.jsxs("div",{children:[A.jsxs("p",{className:"text-xs text-slate-500 dark:text-slate-400",children:["作品 ",l+1]}),A.jsx("h3",{className:"text-sm font-semibold text-slate-950 dark:text-white",children:t})]})]})},t))})]})})})}function wE({stages:t,percent:l,level:a,completedCount:u,totalTasks:o,stageProgress:s,nextTask:f,onReset:m,unitLabel:p="个阶段任务"}){return A.jsx("section",{className:"py-12",children:A.jsx("div",{className:"container-page",children:A.jsx("div",{className:"panel rounded-2xl p-5 sm:p-6 lg:p-8",children:A.jsxs("div",{className:"grid gap-8 lg:grid-cols-[0.8fr_1.2fr]",children:[A.jsxs("div",{children:[A.jsxs("div",{className:"flex items-center gap-2 text-sm font-semibold text-blue-700 dark:text-cyan-300",children:[A.jsx(Jb,{size:18}),"学习进度"]}),A.jsx("h2",{className:"mt-3 text-3xl font-semibold text-slate-950 dark:text-white",children:a}),A.jsxs("p",{className:"mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300",children:["已完成 ",u," / ",o," ",p,"。进度会自动保存到 localStorage，刷新页面后仍然保留。"]}),A.jsx("div",{className:"mt-5 h-3 rounded-full bg-slate-200 dark:bg-slate-800",children:A.jsx("div",{className:"h-3 rounded-full bg-gradient-to-r from-blue-600 via-violet-500 to-cyan-400",style:{width:`${l}%`}})}),A.jsxs("div",{className:"mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-slate-900/70",children:[A.jsx("p",{className:"text-xs font-medium text-slate-500 dark:text-slate-400",children:"下一步推荐学习内容"}),A.jsx("p",{className:"mt-2 text-sm font-semibold text-slate-950 dark:text-white",children:f?.title||"整理作品集并准备面试"}),A.jsx("p",{className:"mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400",children:f?.detail||"你已经完成全部阶段任务，可以把项目文档组合成求职作品集。"})]}),A.jsxs("button",{onClick:m,className:"mt-4 inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600 transition hover:border-red-200 hover:text-red-600 focus-ring dark:border-white/10 dark:bg-white/5 dark:text-slate-300",children:[A.jsx(Zb,{size:14}),"重置进度"]})]}),A.jsx("div",{className:"grid gap-3 sm:grid-cols-2",children:t.map(h=>{const y=s.find(g=>g.stageId===h.id);return A.jsxs("div",{className:"rounded-xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/5",children:[A.jsxs("div",{className:"flex items-center justify-between gap-3",children:[A.jsxs("p",{className:"text-sm font-semibold text-slate-950 dark:text-white",children:["阶段 ",h.order]}),A.jsx("span",{className:`rounded-md px-2 py-1 text-xs ${y.completed?"bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-200":"bg-slate-100 text-slate-500 dark:bg-white/10 dark:text-slate-300"}`,children:y.completed?"已完成":"进行中"})]}),A.jsx("p",{className:"mt-2 line-clamp-1 text-xs text-slate-500 dark:text-slate-400",children:h.name}),A.jsx("div",{className:"mt-3 h-2 rounded-full bg-slate-200 dark:bg-slate-800",children:A.jsx("div",{className:"h-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400",style:{width:`${y.percent}%`}})}),A.jsxs("p",{className:"mt-2 text-xs text-slate-500 dark:text-slate-400",children:[y.done,"/",y.total," ",p]})]},h.id)})})]})})})})}function _E({projects:t,searchQuery:l,selectedStage:a}){const u=l.trim().toLowerCase(),o=t.filter(s=>{const f=a==="all"?"":a.replace("stage-",""),m=a==="all"||s.stage.includes(f),p=!u||Object.values(s).flat().join(" ").toLowerCase().includes(u);return m&&p});return A.jsx("section",{id:"projects",className:"py-16 lg:py-24",children:A.jsxs("div",{className:"container-page",children:[A.jsxs("div",{className:"flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between",children:[A.jsxs("div",{children:[A.jsx("h2",{className:"section-title",children:"实战项目"}),A.jsx("p",{className:"section-copy",children:"每个项目都围绕真实 AI 产品场景设计，最终可以产出 PRD、原型、流程图、指标方案和复盘文档。"})]}),A.jsxs("div",{className:"rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300",children:["当前显示 ",o.length," 个项目"]})]}),A.jsx("div",{className:"mt-8 grid gap-5 lg:grid-cols-2",children:o.map(s=>A.jsxs("article",{className:"panel rounded-2xl p-5 transition hover:-translate-y-1 hover:border-blue-200 dark:hover:border-cyan-300/30 sm:p-6",children:[A.jsxs("div",{className:"flex items-start justify-between gap-4",children:[A.jsxs("div",{children:[A.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[A.jsx("span",{className:"rounded-md bg-slate-950 px-2.5 py-1 text-xs font-medium text-white dark:bg-white dark:text-slate-950",children:s.stage}),A.jsx("span",{className:"rounded-md border border-slate-200 px-2.5 py-1 text-xs text-slate-500 dark:border-white/10 dark:text-slate-400",children:s.difficulty})]}),A.jsx("h3",{className:"mt-4 text-xl font-semibold text-slate-950 dark:text-white",children:s.name}),A.jsx("p",{className:"mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300",children:s.goal})]}),A.jsx("div",{className:"grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-blue-50 text-blue-700 dark:bg-cyan-300/10 dark:text-cyan-300",children:A.jsx(Vb,{size:18})})]}),A.jsx("p",{className:"mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-600 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-300",children:s.background}),A.jsxs("div",{className:"mt-5 grid gap-4 md:grid-cols-2",children:[A.jsx(Su,{title:"用户痛点",items:s.painPoints}),A.jsx(Su,{title:"核心功能",items:s.coreFeatures}),A.jsx(Su,{title:"AI 能力点",items:s.aiCapabilities}),A.jsx(Su,{title:"技术协作点",items:s.techCollaboration})]}),A.jsxs("div",{className:"mt-5",children:[A.jsx("p",{className:"text-sm font-semibold text-slate-950 dark:text-white",children:"产品流程"}),A.jsx("div",{className:"mt-3 flex flex-wrap gap-2",children:s.flow.map((f,m)=>A.jsxs("span",{className:"inline-flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-2 text-xs text-slate-600 dark:bg-white/10 dark:text-slate-300",children:[m+1,". ",f]},f))})]}),A.jsxs("div",{className:"mt-5 border-t border-slate-200 pt-4 dark:border-white/10",children:[A.jsxs("p",{className:"flex items-center gap-2 text-sm font-semibold text-slate-950 dark:text-white",children:["可产出的作品集内容",A.jsx(jb,{size:15,className:"text-blue-600 dark:text-cyan-300"})]}),A.jsx("div",{className:"mt-3 flex flex-wrap gap-2",children:s.portfolio.map(f=>A.jsx("span",{className:"rounded-md border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs text-blue-800 dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-100",children:f},f))})]}),A.jsx(fe,{to:`/projects/${s.id}`,className:"mt-5 inline-flex rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 dark:bg-white dark:text-slate-950",children:"查看项目教程"})]},s.id))})]})})}function Su({title:t,items:l}){return A.jsxs("div",{children:[A.jsx("p",{className:"text-sm font-semibold text-slate-950 dark:text-white",children:t}),A.jsx("ul",{className:"mt-2 space-y-1.5",children:l.slice(0,4).map(a=>A.jsx("li",{className:"text-xs leading-5 text-slate-500 dark:text-slate-400",children:a},a))})]})}const RE=[{group:"基础产品能力",score:78,items:["需求分析","用户调研","竞品分析","PRD 文档","原型设计","项目管理"]},{group:"AI 专项能力",score:72,items:["Prompt 设计","大模型理解","RAG 知识库","Agent 产品设计","AI 工作流设计","模型评估"]},{group:"技术协作能力",score:64,items:["API 理解","接口文档","数据结构","前后端流程","向量数据库","日志与监控"]},{group:"商业化能力",score:58,items:["定价策略","用户增长","数据分析","成本控制","留存转化","SaaS 商业模式"]},{group:"职业发展能力",score:68,items:["作品集","面试表达","项目复盘","简历优化","职业规划"]}],TE=[Gb,Fb,Pb,zb,Rb];function jE(){return A.jsx("section",{id:"skill-map",className:"bg-white py-16 dark:bg-slate-950 lg:py-24",children:A.jsxs("div",{className:"container-page",children:[A.jsxs("div",{className:"max-w-3xl",children:[A.jsx("h2",{className:"section-title",children:"能力地图"}),A.jsx("p",{className:"section-copy",children:"AI 产品经理不是只会写 Prompt，而是把用户问题、模型能力、工程实现、商业结果和职业表达放在同一个系统里。"})]}),A.jsx("div",{className:"mt-10 grid gap-5 lg:grid-cols-5",children:RE.map((t,l)=>{const a=TE[l];return A.jsxs("article",{className:"panel rounded-2xl p-5 transition hover:-translate-y-1 hover:border-blue-200 dark:hover:border-cyan-300/30",children:[A.jsxs("div",{className:"flex items-center justify-between",children:[A.jsx("div",{className:"grid h-10 w-10 place-items-center rounded-lg bg-slate-100 text-blue-700 dark:bg-white/10 dark:text-cyan-300",children:A.jsx(a,{size:19})}),A.jsxs("div",{className:"relative grid h-14 w-14 place-items-center rounded-full bg-slate-100 dark:bg-white/10",children:[A.jsxs("svg",{viewBox:"0 0 36 36",className:"absolute h-14 w-14 -rotate-90",children:[A.jsx("circle",{cx:"18",cy:"18",r:"15.5",fill:"none",stroke:"currentColor",strokeWidth:"3",className:"text-slate-200 dark:text-slate-800"}),A.jsx("circle",{cx:"18",cy:"18",r:"15.5",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeDasharray:`${t.score} 100`,strokeLinecap:"round",className:"text-blue-600 dark:text-cyan-300"})]}),A.jsx("span",{className:"text-xs font-semibold text-slate-950 dark:text-white",children:t.score})]})]}),A.jsx("h3",{className:"mt-5 text-base font-semibold text-slate-950 dark:text-white",children:t.group}),A.jsx("div",{className:"mt-4 flex flex-wrap gap-2",children:t.items.map(u=>A.jsx("span",{className:"rounded-md border border-slate-200 px-2 py-1 text-xs text-slate-600 dark:border-white/10 dark:text-slate-300",children:u},u))})]},t.group)})})]})})}function NE({categories:t,searchQuery:l}){const a=l.trim().toLowerCase(),u=t.map(o=>({...o,tools:o.tools.filter(s=>!a||[s.name,s.purpose,s.usage,o.category].join(" ").toLowerCase().includes(a))})).filter(o=>o.tools.length>0);return A.jsx("section",{id:"tools",className:"bg-white py-16 dark:bg-slate-950 lg:py-24",children:A.jsxs("div",{className:"container-page",children:[A.jsxs("div",{className:"max-w-3xl",children:[A.jsx("h2",{className:"section-title",children:"工具库"}),A.jsx("p",{className:"section-copy",children:"先学能立刻提升产出的工具，再逐步理解技术协作工具。工具不是越多越好，关键是知道在什么任务里怎么用。"})]}),A.jsx("div",{className:"mt-8 grid gap-5 lg:grid-cols-2",children:u.map(o=>A.jsxs("article",{className:"panel rounded-2xl p-5 sm:p-6",children:[A.jsxs("div",{className:"flex items-center gap-3",children:[A.jsx("div",{className:"grid h-10 w-10 place-items-center rounded-lg bg-slate-100 text-blue-700 dark:bg-white/10 dark:text-cyan-300",children:A.jsx(Nb,{size:19})}),A.jsx("h3",{className:"text-xl font-semibold text-slate-950 dark:text-white",children:o.category})]}),A.jsx("div",{className:"mt-5 grid gap-3",children:o.tools.map(s=>A.jsxs("div",{className:"rounded-xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/5",children:[A.jsxs("div",{className:"flex items-start justify-between gap-3",children:[A.jsxs("div",{children:[A.jsx("h4",{className:"text-sm font-semibold text-slate-950 dark:text-white",children:s.name}),A.jsx("p",{className:"mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400",children:s.purpose})]}),A.jsxs("span",{className:"inline-flex shrink-0 items-center gap-1 rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-600 dark:bg-white/10 dark:text-slate-300",children:[A.jsx($b,{size:12}),s.priority]})]}),A.jsx("p",{className:"mt-3 text-xs leading-6 text-slate-600 dark:text-slate-300",children:s.usage})]},s.name))})]},o.category))})]})})}const FE=`---
title: 什么是 AI 产品经理？
stage: stage-01-ai-pm-intro
stageTitle: 认识 AI 产品经理
lesson: 1
difficulty: 入门
duration: 35 分钟
tags:
  - AI 产品经理
  - 岗位认知
  - 职业路径
objectives:
  - 理解 AI 产品经理的核心职责
  - 区分 AI 产品经理、算法工程师和传统产品经理
  - 知道 AI 产品经理在项目中需要交付哪些东西
deliverables:
  - 写出一份 AI 产品经理岗位理解笔记
  - 分析 1 个 AI 产品的核心用户价值
---

# 什么是 AI 产品经理？

## 你将学到什么

这一节帮你回答一个非常具体的问题：AI 产品经理到底是做什么的。很多人以为 AI 产品经理就是“会用 ChatGPT 的产品经理”，或者“懂一点模型的产品经理”。这两个说法都太粗。真正的 AI 产品经理要把用户问题、模型能力、数据来源、交互体验、技术实现、成本风险和商业目标放在一个方案里，让团队能把 AI 能力稳定地交付给用户。

学完这一节，你不会只停留在“AI 产品经理需要懂 AI，也需要懂产品”这种空话上，而是能用一个可执行的框架描述岗位职责：发现合适的 AI 场景，定义 AI 能力边界，设计输入和输出体验，组织 Prompt、知识库或工具调用方案，和技术团队确认实现路径，上线后用数据和用户反馈持续优化。

## 先建立直觉

你可以把 AI 产品经理想象成一家“智能服务餐厅”的主理人。用户进店不是为了看厨房里有什么高级设备，而是想解决一个明确任务：写一份报告、查一份制度、生成一张海报、让客服回答一个问题。模型就像厨房里的厨师，它有能力，但也有脾气：有时会编造，有时会理解错需求，有时成本很高，有时不适合处理敏感数据。

传统产品经理更多是在设计菜单、点餐流程、结账方式和服务体验。AI 产品经理还要多做几件事：判断厨师是否能做这道菜，给厨师写清楚做法，准备可靠食材，设置出餐检查标准，设计用户不满意时怎么重做，并计算每次出餐的成本是否能支撑商业模式。

所以，AI 产品经理不是替代算法工程师，也不是自己训练模型的人。你真正负责的是把模型能力变成用户可理解、可操作、可信任、可持续使用的产品能力。

## 核心知识

AI 产品经理的核心职责可以拆成六层。

第一层是场景判断。不是所有功能都适合用 AI。一个好场景通常具备三个特点：用户目标明确、输入信息足够、输出可以被用户判断好坏。例如“根据企业制度回答报销问题”比“帮公司管理一切知识”更适合先做成 AI 功能。

第二层是需求分析。AI 需求分析不能只问“用户想要什么”。你还要问：用户会提供什么材料？材料是否可靠？答案需要引用来源吗？用户能接受多长等待时间？错误答案会造成什么损失？企业数据能不能进入第三方模型？每次调用的成本上限是多少？

第三层是 AI 能力设计。你要决定产品使用什么能力组合：直接调用大模型、Prompt 模板、RAG 知识库、Agent 工具调用、多模态输入、还是规则和模型结合。产品经理不一定写代码，但要能说清为什么这个场景需要这些能力。

第四层是交互设计。AI 产品的输入和输出都很关键。输入不能只给一个空白框，否则新手不知道怎么问；输出不能只返回一段话，还要考虑结构、引用、复制、再生成、追问、反馈、保存和分享。

第五层是效果评估。AI 功能上线后不能只看访问量。你要看回答采纳率、重试率、人工介入率、低置信度比例、用户反馈、平均响应时长和单次成本。只有这些数据能告诉你 AI 是否真的在创造价值。

第六层是协作推进。AI 产品通常涉及前端、后端、算法、数据、安全、运营和业务团队。AI 产品经理要把模糊目标翻译成各方能执行的任务，并在上线后组织迭代。

## AI 产品经理视角

当你负责一个 AI 知识库问答产品时，传统产品思路可能会先画搜索框、上传按钮和结果页面。但 AI 产品经理要继续往下拆。

你要确认文档类型：是 PDF、Word、网页、表格，还是内部系统里的结构化数据。你要确认权限：不同部门是否只能看到自己的资料。你要确认答案形式：用户要原文引用、摘要、步骤清单，还是可执行建议。你要确认失败处理：找不到答案时是说“不知道”，推荐人工入口，还是引导用户换一种问法。你还要确认数据安全：文档是否允许发送给外部模型，是否需要脱敏，日志保留多久。

这就是 AI 产品经理和“会用 AI 工具的人”的差别。你不是只让模型回答，而是设计一个能在真实组织里运行的 AI 产品系统。

## 案例拆解

以 Perplexity 这类 AI 搜索产品为例，它的用户目标不是“聊天”，而是“快速得到带来源的答案”。因此它的产品设计重点不是人格化对话，而是搜索、引用、追问和来源可信度。

如果你用 AI 产品经理视角拆解，会看到几个关键决策：

1. 输入区支持自然语言问题，降低用户检索门槛。
2. 输出区给出总结，同时附带来源链接，缓解模型编造带来的信任问题。
3. 用户可以继续追问，让搜索从一次性查询变成连续研究过程。
4. 产品会把答案组织成段落、列表和引用，而不是只返回网页列表。
5. 商业化可以围绕更强模型、更深研究、更高调用额度和团队协作展开。

这背后的产品判断是：用户不是为了看模型多聪明，而是为了更快完成研究任务。AI 能力只是手段，任务完成质量才是产品价值。

## 方法论

你可以用“AI 产品五问”判断一个功能是否值得做：

| 问题 | 你要得到的答案 |
| --- | --- |
| 用户任务是什么？ | 用户要完成的具体动作，而不是宽泛愿望 |
| AI 负责哪一步？ | 生成、理解、检索、分类、推荐、总结还是执行 |
| 输入从哪里来？ | 用户输入、企业文档、数据库、网页、图片或系统事件 |
| 输出如何验证？ | 用户反馈、引用来源、规则校验、人工审核或指标评估 |
| 成本和风险是什么？ | Token 成本、响应时延、错误损失、隐私和合规风险 |

每次拆 AI 产品，都先回答这五个问题。回答不清楚时，不要急着画页面，更不要急着讨论模型选型。

## 常见误区

第一个误区是把 AI 产品经理理解成“Prompt 写手”。Prompt 很重要，但它只是产品方案中的一层。没有清晰场景、数据来源、交互体验和评估指标，再漂亮的 Prompt 也很难变成可持续产品。

第二个误区是认为模型越强产品越好。模型能力会影响上限，但产品价值还取决于输入设计、知识质量、权限、安全、反馈机制和成本控制。

第三个误区是只关注成功回答，不设计失败场景。AI 产品天然会遇到不确定性，优秀产品经理必须提前设计“不会答、答错、答慢、答贵、不能答”的处理方式。

第四个误区是用传统功能清单写 AI PRD。AI 功能不仅要写页面和按钮，还要写模型输入、输出格式、上下文规则、日志、评估指标和异常策略。

## 本节练习

1. 选择一个你常用的 AI 产品，写出它帮助用户完成的 3 个具体任务。
2. 用“AI 产品五问”分析这个产品的一个核心功能。
3. 找一个你觉得“不适合用 AI”的功能，说明原因。

## 本节作业

写一份 800 字左右的《我理解的 AI 产品经理》笔记。必须包含：岗位职责、和传统产品经理的差异、一个 AI 产品案例、你认为最重要的 3 个能力，以及你接下来要补的短板。

## 自测题

1. AI 产品经理最核心的工作是什么？  
答案：把 AI 能力转化为用户可用、可信、可持续的产品能力。解析：重点不是模型本身，而是围绕用户任务完成完整产品设计和迭代。

2. 判断 AI 场景是否适合落地时，至少要看哪三个因素？  
答案：用户目标是否明确、输入信息是否足够、输出是否可验证。解析：这三点决定 AI 是否能稳定产生价值。

3. 为什么 AI 产品需要设计失败场景？  
答案：因为模型可能答错、编造、超时、成本过高或触碰安全边界。解析：失败处理直接影响信任和可用性。

4. Prompt 是 AI 产品经理的全部工作吗？  
答案：不是。解析：Prompt 只是 AI 能力设计的一部分，还需要需求、交互、数据、评估、成本和协作。

5. AI 知识库问答产品为什么需要引用来源？  
答案：引用能提高可追溯性和用户信任，也方便发现知识缺口。解析：企业场景尤其需要知道答案依据。

## 延伸学习

下一节学习 AI 产品经理和传统产品经理的区别。你会进一步理解：为什么 AI 产品不是在传统产品里加一个聊天框，而是从需求分析、交互设计、技术协作和效果评估上都发生了变化。
`,zE=`---
title: AI 产品经理和传统产品经理的区别
stage: stage-01-ai-pm-intro
stageTitle: 认识 AI 产品经理
lesson: 2
difficulty: 入门
duration: 35 分钟
tags:
  - 产品经理
  - AI 产品
  - 岗位差异
objectives:
  - 理解 AI 产品和传统软件产品在不确定性上的差异
  - 掌握 AI 产品需求分析的额外问题清单
  - 知道 AI 产品上线后如何评估效果
deliverables:
  - 输出一份 AI 产品与传统产品差异对照表
  - 为一个 AI 功能补充风险和评估指标
---

# AI 产品经理和传统产品经理的区别

## 你将学到什么

这一节解决一个常见误解：AI 产品经理并不是“传统产品经理 + AI 名词”。传统产品经理当然仍然需要需求分析、用户调研、竞品分析、PRD、原型和项目推进，但 AI 产品会额外引入不确定输出、模型成本、数据安全、效果评估、知识质量和技术边界。

学完后，你会知道同样是做一个“问答功能”，传统产品和 AI 产品的设计问题完全不同。传统问答可能是 FAQ 列表和搜索；AI 问答要考虑文档解析、向量检索、提示词、引用来源、回答置信度、错误反馈、人工兜底和每次调用成本。

## 先建立直觉

传统软件像自动售货机：用户按 A1，就应该掉出 A1 的饮料。产品经理重点保证入口清楚、库存准确、支付顺畅、异常可处理。AI 产品更像一个带助理的服务台：用户可能说得含糊，助理可能理解错，也可能给出一个看似合理但并不准确的答案。

因此，传统产品追求流程确定，AI 产品要管理不确定。传统产品主要设计“用户点什么，系统做什么”；AI 产品还要设计“用户说得不清楚怎么办”“模型答得不确定怎么办”“答案错了谁来发现”“成本超过预算怎么办”。

## 核心知识

第一，需求分析不同。传统需求强调用户场景、流程、优先级和业务价值。AI 需求还要追问数据和模型问题：输入是否足够、知识是否可获得、输出是否能评价、错误成本是否可接受、是否存在隐私合规限制。

第二，交互设计不同。传统产品的交互多是按钮、表单、列表、状态流转。AI 产品的交互往往围绕输入引导、生成等待、结果解释、追问、反馈、重试和保存展开。一个空白输入框对高手很自由，对新手却很茫然，所以 AI 产品常常需要模板、示例、参数默认值和结果结构化。

第三，技术协作不同。传统产品经理和研发沟通接口、字段、页面逻辑和权限。AI 产品经理还要沟通模型、Prompt、上下文、知识库、向量库、流式输出、日志、调用成本和安全策略。你不需要成为算法工程师，但要能提出正确问题。

第四，评估指标不同。传统功能可以看点击率、转化率、完成率。AI 功能还要看答案质量、采纳率、用户改写率、重试率、人工介入率、幻觉率、引用命中率、平均 Token 成本和响应时长。

第五，迭代方式不同。传统产品很多问题可以通过改页面、改规则、改流程解决。AI 产品问题可能来自 Prompt、知识库、检索策略、模型选择、数据质量、用户输入、输出格式或业务规则。定位问题需要更系统的排查路径。

## AI 产品经理视角

假设你要做“合同审核助手”。传统产品经理可能会设计上传合同、选择审核模板、输出审核结果、下载报告。AI 产品经理要进一步拆：

1. 合同是否包含敏感信息，是否允许发送给第三方模型。
2. 审核标准来自法律法规、公司模板，还是历史案例。
3. 输出是风险摘要、逐条修改建议，还是直接生成修订文本。
4. 模型给出的建议是否需要法务确认。
5. 低置信度或无法判断的条款如何提示。
6. 每份合同平均多少字，调用成本是否可接受。
7. 用户是否需要看到引用依据，便于追责和复核。

这些问题决定了产品能不能真正进入企业流程，而不是停留在演示 Demo。

## 案例拆解

以 Notion AI 类写作助手为例，如果把它看成传统产品，你可能只会关注“插入一个 AI 按钮”。但从 AI 产品角度，它的关键是嵌入用户已有文档场景：用户正在写会议纪要、产品方案、邮件或总结，AI 需要理解当前上下文，并提供改写、总结、扩写、翻译、提炼行动项等任务。

它不是让用户离开文档去另一个聊天工具，而是在文档工作流里提供 AI 能力。这说明 AI 产品的价值不一定来自“更强对话”，也可能来自“更贴近任务发生的位置”。产品经理要判断 AI 能力应该嵌入哪里、以什么形式出现、是否打断用户，以及生成结果如何回到原有工作流。

## 方法论

你可以用下面的差异表做需求评审。

| 维度 | 传统产品问题 | AI 产品额外问题 |
| --- | --- | --- |
| 用户目标 | 用户要完成什么流程 | 哪一步需要模型理解、生成或推理 |
| 输入 | 用户填哪些字段 | 输入是否足够、是否需要模板和示例 |
| 输出 | 系统展示什么结果 | 输出是否准确、可解释、可追溯 |
| 异常 | 网络失败、权限不足 | 幻觉、低置信度、敏感内容、超时 |
| 数据 | 业务数据如何存储 | 知识来源、向量化、日志、隐私 |
| 成本 | 研发和运营成本 | 模型调用成本、缓存、限额、套餐 |
| 评估 | 点击、转化、留存 | 采纳率、命中率、重试率、人工介入 |

每次把传统功能改造成 AI 功能时，都用这张表逐项补齐。

## 常见误区

一个误区是把 AI 功能当成“万能搜索框”。搜索只是入口，关键是知识来源、检索质量、答案格式和反馈闭环。

第二个误区是只做炫酷 Demo，不考虑稳定性。Demo 可以容忍偶尔答错，企业产品不能。

第三个误区是忽略成本。一个看起来很简单的总结功能，如果用户每天批量处理长文档，Token 成本可能迅速超过收入。

第四个误区是把评估交给“主观感觉”。AI 产品需要建立样本集、质量标准和用户反馈机制，否则你很难判断迭代是否有效。

## 本节练习

1. 选择一个传统功能，例如搜索、客服、报表、写作或审批，写出它改造成 AI 功能后新增的 5 个问题。
2. 为一个 AI 问答功能设计 5 个指标，其中至少 2 个和质量相关，1 个和成本相关。
3. 找一个 AI 产品的失败体验，分析它是输入问题、模型问题、知识问题还是交互问题。

## 本节作业

制作一张《AI 产品经理 vs 传统产品经理》对照表。要求至少包含需求分析、交互设计、技术协作、指标评估、成本风险、上线迭代 6 个维度，并为每个维度写一个真实产品例子。

## 自测题

1. AI 产品相比传统产品最大的额外挑战是什么？  
答案：模型输出不确定。解析：不确定性会影响交互、评估、风险和信任。

2. 为什么 AI 产品不能只看点击率？  
答案：点击不代表生成结果有价值，还要看采纳率、质量反馈、重试率等。解析：AI 功能的核心价值在输出质量。

3. 空白输入框有什么问题？  
答案：新手不知道如何表达任务，导致输入质量差。解析：模板、示例和结构化引导能降低门槛。

4. AI 产品经理为什么要理解成本？  
答案：模型调用按量计费，成本会影响定价、限额和商业可持续性。解析：高频长文本场景尤其敏感。

5. 传统客服 FAQ 和 AI 智能客服的关键差异是什么？  
答案：AI 客服需要理解意图、调用知识、判断置信度并设计转人工。解析：它不是简单 FAQ 列表。

## 延伸学习

下一节会系统拆解常见 AI 产品类型。你会看到 AI 产品不是只有聊天助手，还包括写作、生图、搜索、知识库、客服、Agent 工作流和垂直行业助手。
`,ME=`---
title: 常见 AI 产品类型拆解
stage: stage-01-ai-pm-intro
stageTitle: 认识 AI 产品经理
lesson: 3
difficulty: 入门
duration: 40 分钟
tags:
  - AI 产品类型
  - 产品拆解
  - AIGC
objectives:
  - 识别主流 AI 产品类型和典型使用场景
  - 理解不同 AI 产品的核心体验差异
  - 能够按用户任务而不是技术名词拆解产品
deliverables:
  - 完成一张 AI 产品类型地图
  - 拆解 3 个不同类型的 AI 产品
---

# 常见 AI 产品类型拆解

## 你将学到什么

这一节帮你建立 AI 产品类型地图。很多新手学习 AI 产品时会把所有东西都归为“聊天机器人”，但真实市场里 AI 产品形态非常多：对话助手、AI 搜索、AI 写作、AI 生图、智能客服、知识库问答、代码助手、Agent 工作流、垂直行业助手、数据分析助手、会议纪要工具等。

学会分类不是为了背概念，而是为了判断不同产品的用户任务、输入输出、关键能力、风险点和商业模式。比如 AI 写作工具的重点是模板、风格、改写和版本管理；知识库问答的重点是文档、权限、引用和准确性；Agent 工作流的重点是工具调用、执行状态、人工确认和审计日志。

## 先建立直觉

想象你进入一个大型工具商店。锤子、螺丝刀、电钻、卷尺都能“帮助工作”，但它们解决的任务完全不同。你不会问“哪个工具最先进”，而会先问“我要完成什么任务”。AI 产品也是这样。大模型是一种强大的底层能力，但产品形态由用户任务决定。

如果用户要快速了解一个问题，AI 搜索比普通聊天更合适，因为它需要来源和可追溯性。如果用户要处理公司内部制度，知识库问答更合适，因为它依赖企业文档和权限。如果用户要让系统自动把会议纪要发到飞书并创建任务，Agent 工作流更合适，因为它需要跨工具执行。

## 核心知识

第一类是通用对话助手。代表形态是 ChatGPT、Claude 这类产品。核心任务是让用户通过自然语言完成写作、分析、问答、头脑风暴和代码辅助。它的关键体验包括多轮对话、上下文管理、模型选择、文件上传、历史记录、结果复制和分享。

第二类是 AI 搜索和研究工具。用户目标是获得带来源的答案，而不是随便聊天。产品要处理查询理解、网页检索、结果摘要、引用来源、追问和研究沉淀。它的信任机制比人格化更重要。

第三类是 AI 写作与办公工具。它通常嵌入文档、邮件、PPT、表格或知识管理场景。用户不想离开工作流，所以产品要提供改写、总结、扩写、翻译、提纲、行动项和格式转换等能力。

第四类是 AI 图像与多媒体生成产品。用户输入主题、风格、尺寸、参考图或模板，产品输出图片、视频或音频。重点是模板体系、参数默认值、生成队列、版权提示、素材管理和积分消耗。

第五类是企业知识库问答。它以企业内部文档为知识来源，通过 RAG 等方式回答问题。核心不是“模型能聊”，而是文档上传、解析、权限、检索、引用、反馈、更新和效果评估。

第六类是智能客服。它面向高频咨询场景，重点是意图识别、知识命中、低置信度转人工、满意度、会话摘要和质检报表。客服产品的风险是错误答案可能直接影响用户权益。

第七类是 Agent 自动化工作流。它不只是生成文字，而是根据目标拆解任务、调用工具、执行步骤并记录结果。产品经理必须特别关注权限、安全、人工确认、失败重试和日志审计。

## AI 产品经理视角

当你看到一个 AI 产品，不要先问“它用了什么模型”，而要先问五个产品问题：

1. 它服务的是谁。
2. 用户在什么场景下打开它。
3. 用户输入什么信息。
4. AI 输出什么结果。
5. 用户如何判断结果好不好。

例如 Midjourney 类生图产品，用户不是为了“和模型聊天”，而是为了把视觉想法变成可用图片。输入设计就要围绕风格、主体、构图、尺寸、参考图和变化版本展开；输出设计要围绕预览、放大、变体、收藏、下载、版权和使用记录展开。你如果用聊天产品思路去设计生图平台，就会忽略素材管理和商业化积分。

## 案例拆解

以 Cursor 这类 AI 编程工具为例，它不是普通聊天助手。它的用户任务发生在代码编辑器里：读代码、改代码、解释报错、生成函数、重构文件、理解项目结构。它的 AI 能力必须嵌入代码上下文，能读取当前文件、相关文件、终端错误和用户指令。

从产品拆解角度看，它有几个关键点：

1. 场景入口在编辑器，不是独立聊天窗口。
2. 输入不仅是用户文字，还包括代码文件和项目上下文。
3. 输出不仅是解释文字，还可能直接修改代码。
4. 风险不是“回答不好看”，而是代码改坏、误删、引入安全问题。
5. 价值评估可以看采纳代码比例、修复成功率、开发耗时减少和用户留存。

这说明垂直 AI 产品的关键，是把 AI 能力嵌入专业工作流，而不是套一个通用聊天壳。

## 方法论

你可以用“任务-输入-能力-输出-验证”五列法拆解 AI 产品。

| 维度 | 拆解问题 |
| --- | --- |
| 任务 | 用户到底想完成什么工作 |
| 输入 | 用户、系统或数据源提供什么信息 |
| 能力 | AI 负责理解、生成、检索、分类还是执行 |
| 输出 | 结果是文本、图片、代码、报告、动作还是建议 |
| 验证 | 用户如何判断对错，系统如何收集反馈 |

把 3 个 AI 产品放进这张表，你会很快发现它们不是同一种产品。

## 常见误区

第一个误区是把所有 AI 产品都做成聊天界面。聊天适合探索和复杂表达，但不一定适合高频固定任务。写作、客服、生图和报表场景常常需要模板、表单、流程和状态。

第二个误区是只关注底层模型，不关注场景嵌入。同样的大模型，放在搜索、文档、客服和代码编辑器里，产品价值完全不同。

第三个误区是忽视产品类型背后的风险差异。生图产品风险可能是版权和内容安全；知识库问答风险是错误答案和权限泄露；Agent 风险是自动执行错误操作。

## 本节练习

1. 选择 5 个 AI 产品，按通用助手、搜索研究、写作办公、生图、知识库、客服、Agent 等类型分类。
2. 用五列法拆解其中 2 个产品。
3. 找一个你认为“聊天界面不适合”的 AI 场景，并设计一个更合适的入口。

## 本节作业

完成一张《AI 产品类型地图》。至少包含 7 类产品，每类写出目标用户、典型任务、核心功能、AI 能力点、主要风险和一个代表产品或虚构案例。

## 自测题

1. 为什么 AI 搜索产品通常需要来源引用？  
答案：因为用户需要验证答案可信度。解析：搜索和研究场景比闲聊更重视证据。

2. AI 生图产品的商业化常见抓手是什么？  
答案：积分、生成额度、高清下载、商用授权和团队素材管理。解析：生成成本和使用权益要绑定。

3. 智能客服相比通用聊天助手更关注什么？  
答案：知识命中、转人工、满意度和质检。解析：客服场景有明确服务目标和风险。

4. Agent 工作流为什么需要日志？  
答案：因为它会执行动作，必须可追踪、可审计、可复盘。解析：自动化执行比生成文字风险更高。

5. 判断 AI 产品类型时应该先看什么？  
答案：用户任务。解析：技术能力要服务任务，而不是反过来定义产品。

## 延伸学习

下一节学习 AI 产品经理能力模型。你会把这些产品类型背后的能力要求整理成学习地图，知道自己先补哪一块、后练哪一块。
`,BE=`---
title: AI 产品经理能力模型
stage: stage-01-ai-pm-intro
stageTitle: 认识 AI 产品经理
lesson: 4
difficulty: 入门
duration: 40 分钟
tags:
  - 能力模型
  - 学习路线
  - 职业能力
objectives:
  - 建立 AI 产品经理五类核心能力模型
  - 理解每类能力的训练方式和作品集证据
  - 能够评估自己的当前短板
deliverables:
  - 完成个人 AI 产品经理能力自评表
  - 制定 30 天学习计划
---

# AI 产品经理能力模型

## 你将学到什么

这一节会把“AI 产品经理需要什么能力”拆成可训练、可验证的结构。新手最容易焦虑：觉得自己既要懂产品、懂 AI、懂技术、懂数据、懂商业，还要会原型、会写文档、会面试。正确的做法不是同时学习所有东西，而是建立能力模型，知道每个阶段训练什么、用什么作品证明自己。

本课程采用五类能力模型：基础产品能力、AI 专项能力、技术协作能力、商业化能力、职业发展能力。每类能力都对应具体产出，而不是抽象口号。

## 先建立直觉

你可以把 AI 产品经理成长看成搭一座桥。基础产品能力是桥墩，没有它你无法把用户问题转成产品方案。AI 专项能力是桥面，让模型、Prompt、知识库、Agent 这些能力真正服务用户。技术协作能力是施工图，保证研发团队能理解并实现。商业化能力是通车规则，决定产品能不能持续运营。职业发展能力是展示窗口，让别人看见你的判断和成果。

如果只学 AI 概念，没有产品能力，你会说很多术语但写不出 PRD。如果只会传统产品，不理解模型边界，你会把 AI 功能设计得像普通表单。如果只会做 Demo，不懂商业化和数据，你很难负责上线后的真实增长。

## 核心知识

第一类是基础产品能力。包括需求分析、用户调研、竞品分析、PRD 文档、原型设计、流程设计和项目管理。它解决“做什么、为什么做、怎么让团队做出来”的问题。训练证据是用户访谈提纲、竞品分析表、PRD、流程图和原型。

第二类是 AI 专项能力。包括 Prompt 设计、大模型基础、Token 和上下文、Embedding、RAG、Agent、工作流、多模态和模型评估。它解决“AI 能力如何参与产品”的问题。训练证据是 Prompt 模板库、AI 概念图、RAG 流程图、Agent 方案和效果评估表。

第三类是技术协作能力。包括 API 理解、接口文档、前后端流程、数据结构、流式输出、向量数据库、权限、日志和成本估算。它解决“研发如何实现、上线后如何稳定运行”的问题。训练证据是接口字段表、数据流图、成本估算表和日志指标方案。

第四类是商业化能力。包括定价策略、用户增长、数据分析、留存转化、成本控制和 SaaS 商业模式。它解决“产品能否持续创造价值”的问题。训练证据是定价页、增长漏斗、指标体系、模型成本表和商业化方案。

第五类是职业发展能力。包括作品集、面试表达、项目复盘、简历优化和职业规划。它解决“别人如何判断你具备 AI PM 能力”的问题。训练证据是项目作品集、复盘文档、案例讲述和面试题库。

## AI 产品经理视角

能力模型的重点不是让你给自己贴标签，而是指导项目产出。例如你想做“企业知识库问答系统”作品集，就可以同时训练五类能力：

基础产品能力：调研员工查资料的场景，写 PRD，画上传和问答流程。

AI 专项能力：解释 RAG 流程，设计引用、低置信度和反馈机制。

技术协作能力：画文档解析、向量化、检索、生成和日志链路。

商业化能力：估算每次问答成本，设计企业版套餐和用量限制。

职业发展能力：把项目整理成作品集，讲清问题、方案、取舍和迭代。

一个好项目应该能同时证明多类能力，而不是只展示漂亮页面。

## 案例拆解

假设你面试时讲“AI 智能客服系统”。如果你只说“我设计了一个聊天窗口，能自动回答问题”，说服力很弱。按照能力模型，你应该这样展开：

1. 基础产品能力：你调研了客服常见问题，发现 60% 咨询集中在退款、物流、账号和发票。
2. AI 专项能力：你把问题分成可直接知识库回答、需要订单数据、需要人工处理三类。
3. 技术协作能力：你设计了意图识别、知识检索、订单接口查询、转人工和会话日志。
4. 商业化能力：你用人工节省时长、命中率和转人工率估算 ROI。
5. 职业发展能力：你复盘上线风险，包括错误回答、权限泄露和用户投诉。

这比单纯展示 UI 更像成熟 AI 产品经理。

## 方法论

用“能力-产出-证据”表管理你的学习。

| 能力 | 训练任务 | 作品集证据 |
| --- | --- | --- |
| 需求分析 | 访谈 3 个目标用户 | 访谈纪要、需求列表 |
| Prompt 设计 | 写 10 个场景模板 | Prompt 模板库 |
| RAG 设计 | 画知识库问答链路 | RAG 流程图 |
| 技术协作 | 设计接口字段 | 接口说明表 |
| 数据分析 | 定义 AI 效果指标 | 指标体系 |
| 商业化 | 设计套餐和成本表 | 定价方案 |
| 复盘表达 | 总结项目取舍 | 项目复盘文档 |

每学一个知识点，都问自己：它能产出什么证据？

## 常见误区

第一，误以为“懂概念”就是“有能力”。你能解释 RAG 不等于能设计知识库问答产品。能力必须通过产出验证。

第二，过早追求全栈。新人不必一开始就会训练模型、搭后端、做增长。先把岗位认知、需求、文档、AI 概念和一个完整项目练起来。

第三，只做 UI 作品集。AI PM 作品集应该展示需求分析、AI 方案、技术协作、评估指标和复盘，不是只放界面截图。

第四，忽视表达能力。你做过什么不重要，重要的是能否讲清为什么这样做、有什么取舍、如何验证。

## 本节练习

1. 按五类能力给自己打分，每类 1-5 分，并写出原因。
2. 选一个 AI 产品项目，列出它能证明哪些能力。
3. 找一份 AI 产品经理招聘 JD，标出它对应的能力类别。

## 本节作业

制作你的《AI 产品经理能力自评表》。必须包含五类能力、当前水平、证据、短板、30 天训练计划。不要写“继续学习 AI”，要写具体动作，例如“完成一份知识库问答 PRD”“写 10 个客服 Prompt 模板”。

## 自测题

1. AI 产品经理能力模型中，基础产品能力解决什么问题？  
答案：解决做什么、为什么做、怎么组织团队做出来。解析：这是产品工作的底座。

2. Prompt 模板库属于哪类能力证据？  
答案：AI 专项能力。解析：它体现对模型输入输出的设计能力。

3. 接口字段表属于哪类能力证据？  
答案：技术协作能力。解析：它帮助研发理解数据结构和实现边界。

4. 为什么作品集不能只放 UI？  
答案：UI 无法证明需求判断、AI 方案、技术协作和迭代能力。解析：AI PM 需要展示完整思考链路。

5. 新手最应该先补哪类能力？  
答案：岗位认知和基础产品能力。解析：没有这两项，AI 概念很难落到产品方案里。

## 延伸学习

下一节学习如何完成第一份 AI 产品分析报告。你会把前面学到的岗位认知、产品类型和能力模型转化为一个可提交的作品。
`,OE=`---
title: 如何完成第一份 AI 产品分析报告
stage: stage-01-ai-pm-intro
stageTitle: 认识 AI 产品经理
lesson: 5
difficulty: 入门
duration: 50 分钟
tags:
  - 产品分析
  - 作品集
  - 阶段项目
objectives:
  - 掌握 AI 产品分析报告的结构
  - 学会从用户、场景、AI 能力和风险角度分析产品
  - 完成第一份可放入作品集的分析文档
deliverables:
  - AI 产品分析报告
  - 产品体验问题清单
  - 改进建议优先级表
---

# 如何完成第一份 AI 产品分析报告

## 你将学到什么

这一节是第一阶段项目课。你的目标不是写一篇“我觉得这个产品不错”的体验感想，而是完成一份结构清晰、能体现 AI 产品思维的分析报告。报告要让别人看出你能从用户任务、产品流程、AI 能力、技术约束、风险和迭代机会几个维度思考。

第一份报告不需要非常长，但必须具体。不要写“界面简洁、功能强大、体验不错”。你要写“用户在输入问题时缺少示例引导，导致新手不知道如何描述上下文；建议在输入区提供场景模板，并根据任务类型要求用户补充目标、材料、语气和输出格式”。

## 先建立直觉

产品分析报告像医生写诊断，不是给产品打分。你要先理解病人是谁、哪里不舒服、为什么会这样、应该怎么处理。AI 产品分析也一样：先看目标用户和任务，再看 AI 能力是否真的帮助任务完成，然后找出体验和风险问题。

如果你分析一个知识库问答产品，不能只说“支持上传文档，能智能问答”。你要继续问：文档上传后是否显示解析状态？答案是否引用来源？如果知识库没有答案，系统会怎么说？不同用户是否有权限边界？用户能否反馈答案错误？这些问题才体现 AI 产品经理的观察深度。

## 核心知识

一份入门级 AI 产品分析报告建议包含八个部分。

第一，产品基本信息。包括产品名称、产品定位、目标用户、主要使用场景和你体验的版本或时间。这里要简洁，不要写成百科介绍。

第二，用户任务拆解。写出用户打开这个产品到底想完成什么任务。最好用“当用户处于什么场景，他希望完成什么结果”的句式。例如：当运营同学需要快速产出小红书标题时，希望输入商品卖点后得到 10 个可直接修改的标题。

第三，核心流程。用文字或流程图描述用户从进入产品到得到结果的路径。重点观察输入、生成、修改、保存、分享、反馈这些环节。

第四，AI 能力点。说明产品用了哪些 AI 能力：生成、总结、检索、分类、图像生成、代码补全、工具调用等。不要强行猜具体模型，除非产品公开说明。

第五，体验亮点。亮点要具体到设计细节。例如“输出结果支持继续追问”和“回答附带来源引用”比“体验很好”更有价值。

第六，问题与风险。至少从输入引导、输出质量、失败状态、信任机制、成本感知、隐私安全和商业化路径里选择几个角度分析。

第七，改进建议。建议要能落地，最好分优先级。不要写“提高模型准确率”这种无法执行的话，而要写“增加答案反馈入口，把踩/赞、错误类型、用户原问题和引用片段写入日志，作为后续评估样本”。

第八，总结判断。回答这个产品的核心价值是什么、最应该优化什么、你从中学到了什么。

## AI 产品经理视角

AI 产品分析要比普通产品分析多看四件事。

第一，看输入质量。AI 的输出很依赖输入。产品有没有提供示例、模板、上下文收集、参数默认值和输入校验？如果用户输入很差，产品有没有引导用户补充？

第二，看输出可信度。输出有没有结构？有没有引用？有没有置信度或提示？有没有让用户快速判断好坏的方式？如果输出是建议、代码、合同条款或客服答案，可信度尤其重要。

第三，看失败处理。模型不会答、答错、超时、被安全策略拒绝、结果为空时，产品怎么处理？失败状态是 AI 产品体验的分水岭。

第四，看迭代闭环。用户能不能反馈？系统有没有记录日志？团队能不能知道哪些问题答不好？没有反馈闭环，AI 产品很难越用越好。

## 案例拆解

以一个虚构的“企业制度问答助手”为例。它允许员工上传公司制度，然后提问“差旅报销标准是什么”。普通分析可能会说：功能清晰，能回答问题，适合企业使用。

AI 产品经理的分析应该更细：

1. 目标用户是员工和行政 HR，核心任务是快速查制度。
2. 输入包括用户问题和制度文档，文档可能有版本差异。
3. 输出需要引用原文，因为制度类答案不能只给总结。
4. 如果制度中没有答案，系统应该明确说明“未在当前知识库找到依据”，而不是编造。
5. 不同地区、部门或职级可能有不同权限和标准。
6. 用户反馈错误答案后，后台需要记录问题、答案、引用片段和知识库版本。
7. 管理员需要看到高频问题和未命中问题，用于补充知识库。

这样的分析才接近真实 AI 产品工作。

## 方法论

你可以直接使用下面的报告框架：

| 模块 | 关键问题 |
| --- | --- |
| 产品定位 | 它服务谁，解决什么高频任务 |
| 用户路径 | 用户从进入到完成任务经历哪些步骤 |
| AI 能力 | AI 负责生成、检索、理解、分类还是执行 |
| 输入设计 | 用户是否知道如何提供高质量输入 |
| 输出设计 | 结果是否结构化、可验证、可追溯 |
| 失败状态 | 答错、不会答、超时、拒答时如何处理 |
| 数据闭环 | 用户反馈和日志如何帮助迭代 |
| 商业化 | 收费依据是席位、次数、额度、能力还是服务 |
| 改进建议 | 哪些优化最值得先做，为什么 |

写报告时，每个结论后面尽量带证据：截图、流程、用户任务、体验细节或指标假设。

## 常见误区

第一，把报告写成产品介绍。介绍只说明有什么，分析要说明为什么这样设计、好在哪里、问题在哪里、如何优化。

第二，只写主观感受。比如“回答质量一般”不够，你要说明是哪类问题答不好，是知识缺失、问题理解错误、引用不准还是格式不符合预期。

第三，建议过于空泛。“优化用户体验”“提高准确率”“增加更多功能”都不是好建议。好建议应该包含对象、动作、原因和预期效果。

第四，忽略 AI 风险。AI 产品分析必须关注幻觉、隐私、版权、成本、权限和可追溯性。

## 本节练习

1. 选择一个 AI 产品，写出它的目标用户和 3 个核心任务。
2. 体验一个完整流程，记录至少 5 个关键页面或状态。
3. 找出 3 个具体问题，并为每个问题写一个可执行改进建议。

## 本节作业

完成一份《AI 产品分析报告》。建议选择 ChatGPT、Perplexity、Notion AI、Cursor、Midjourney、智能客服或知识库问答类产品。报告不少于 1500 字，必须包含产品定位、用户任务、核心流程、AI 能力点、体验亮点、问题风险、改进建议和总结判断。

## 自测题

1. AI 产品分析报告最不应该写成什么？  
答案：产品功能介绍。解析：分析要体现判断和改进，而不是复述功能。

2. 为什么要关注失败状态？  
答案：AI 输出存在不确定性，失败处理影响用户信任。解析：不会答和答错都需要产品方案。

3. “提高准确率”为什么不是好建议？  
答案：它没有说明具体手段。解析：可执行建议应说明改 Prompt、补知识、加反馈、优化检索还是换模型。

4. 知识库问答产品为什么要记录知识库版本？  
答案：方便追踪答案依据和排查错误。解析：同一问题在不同知识版本下答案可能不同。

5. 第一份报告最重要的价值是什么？  
答案：证明你能用 AI 产品视角观察和表达。解析：它是作品集的起点。

## 延伸学习

完成报告后，进入第二阶段学习产品经理基础能力。你会继续学习用户调研、需求分析、竞品分析、PRD 和原型流程，把观察能力升级为方案设计能力。
`,LE=`---
title: 认识 AI 产品经理
stage: stage-01-ai-pm-intro
stageTitle: 认识 AI 产品经理
order: 1
difficulty: 入门
duration: 3 天
tags:
  - 岗位认知
  - 能力模型
  - AI 产品分析
objectives:
  - 建立对 AI 产品经理岗位的清晰认知
  - 理解 AI 产品经理和传统产品经理的差异
  - 能够拆解常见 AI 产品类型
  - 完成第一份 AI 产品分析报告
deliverables:
  - AI 产品经理岗位理解笔记
  - AI 产品类型对照表
  - AI 产品分析报告
audience:
  - 完全没有产品经验的新手
  - 想转向 AI 产品的传统产品经理
  - 想理解 AI 产品岗位的学生和创业者
project: AI 产品分析报告
tools:
  - ChatGPT
  - Perplexity
  - Notion
faqs:
  - q: 第一阶段需要会写代码吗？
    a: 不需要。第一阶段重点是建立岗位认知、产品观察能力和分析表达能力。
  - q: 应该选什么产品做分析？
    a: 先选你能真实使用的产品，例如 ChatGPT、Perplexity、Notion AI、Cursor 或一个智能客服产品。
  - q: 分析报告要多长？
    a: 早期 1500-2500 字即可，重点是讲清目标用户、核心场景、AI 能力边界和改进建议。
---

# 认识 AI 产品经理

第一阶段解决一个最基础但很关键的问题：你到底要成为什么样的 AI 产品经理。

很多新手一开始会被模型名称、Agent、RAG、Prompt、工作流、向量数据库这些词吓住，结果学了很多概念，却不知道产品经理在真实团队里要交付什么。本阶段不会急着让你做复杂系统，而是先训练三件事：

1. 看懂 AI 产品解决的具体问题。
2. 说清 AI 产品经理和传统产品经理的差异。
3. 用产品分析报告表达自己的判断。

完成本阶段后，你应该能拿一个 AI 产品，讲清它服务谁、解决什么任务、AI 能力在哪里、失败场景是什么、产品经理需要如何改进它。
`,PE=`---\r
title: 用户调研如何服务 AI 产品设计？\r
stage: stage-02-product-foundation\r
stageTitle: 产品经理基础能力\r
lesson: 1\r
difficulty: 入门\r
duration: 45 分钟\r
tags:\r
  - 用户调研\r
  - 访谈提纲\r
  - AI 产品设计\r
objectives:\r
  - 理解用户调研在 AI 产品中的作用\r
  - 掌握 AI 场景下用户访谈问题的设计方法\r
  - 能够把用户反馈转化为需求线索\r
deliverables:\r
  - 完成一份 AI 产品用户访谈提纲\r
  - 输出一份用户痛点与 AI 机会点分析表\r
---\r
\r
# 用户调研如何服务 AI 产品设计？\r
\r
## 你将学到什么\r
\r
这一节解决一个基础但关键的问题：在 AI 产品里，用户调研到底要调什么。新手常把调研理解成问卷或闲聊，问用户“你想不想要 AI 助手”“你希望它有什么功能”。这类问题得到的往往是愿望清单，而不是产品需求。学完后，你应该能设计一份访谈提纲，观察用户真实任务，识别哪些环节适合由 AI 参与，哪些环节不适合。\r
\r
## 先建立直觉\r
\r
如果你想给公司做一个 AI 周报助手，不能只问同事“你愿意用 AI 写周报吗”。更好的问法是：你现在什么时候写周报？要从哪些系统找资料？最难写的是进展、风险还是下周计划？写完后谁会看？领导最关心什么？过去有没有因为周报表达不清导致沟通成本？这些问题能让你看到真实工作流，而不是停在“想要自动写”这个表面答案。\r
\r
## 核心知识\r
\r
AI 产品调研要围绕任务链路展开。你要先知道用户是谁，再知道用户在什么场景下完成什么任务，任务中有哪些输入材料、判断标准和风险约束。AI 的作用通常不是“替用户完成一切”，而是介入某个具体环节：整理资料、生成初稿、分类意图、检索知识、提取摘要、给出建议或自动执行。\r
\r
一次有效访谈至少包含六类问题：背景问题、任务问题、痛点问题、现有方案问题、判断标准问题、风险边界问题。背景问题帮助你确认用户角色；任务问题帮助你还原流程；痛点问题帮助你找到效率低、质量差或成本高的环节；现有方案问题防止你重复造轮子；判断标准问题决定 AI 输出如何算好；风险边界问题决定哪些内容不能自动化。\r
\r
## AI 产品经理视角\r
\r
AI 场景比普通工具更依赖输入质量和结果验证。设计知识库问答产品时，你要问用户会上传什么文档、文档更新频率、是否有权限边界、答案是否必须引用原文、用户如何判断回答正确、错误回答会造成什么损失。如果不问这些，产品可能只做出一个漂亮的聊天框，却无法在企业里上线。\r
\r
## 案例拆解\r
\r
假设你调研客服团队，希望引入 AI 智能客服。低质量访谈会问：“你们想让 AI 客服帮什么？”高质量访谈会拆成：每天咨询量多少？重复问题占比多少？哪些问题必须人工处理？客户等待多久会流失？客服如何查知识库？当前知识库是否更新？主管如何质检？哪些回答不能由 AI 直接承诺？这样你才能判断第一版应该做 FAQ 自动回答、意图识别、人工转接，还是先做客服话术推荐。\r
\r
> 图片占位：AI 产品用户访谈问题地图  \r
> 建议文件名：ai-user-research-question-map.png  \r
> 图片用途：帮助学习者理解访谈问题如何覆盖角色、场景、任务、痛点、数据、风险和验收标准。  \r
> 生图提示词：生成一张适合课程教学的 AI 产品用户访谈问题地图，中心为“用户任务”，周围包含角色背景、工作流程、痛点阻塞、现有工具、输入资料、输出标准、风险边界、成功指标等节点。白色背景，蓝紫渐变，现代科技教育风，中文标签清晰，16:9，无水印，无真实品牌 Logo。\r
\r
## 方法论\r
\r
你可以用“访谈五步法”：第一步明确调研目标，例如验证“销售是否需要 AI 辅助写客户跟进记录”；第二步选择 5 到 8 个真实目标用户；第三步按任务链路设计问题；第四步访谈时追问具体事实，不让用户只说观点；第五步把记录整理成痛点、证据、机会点和待验证假设。\r
\r
整理访谈时建议用表格：用户原话、发生场景、当前做法、痛点强度、影响范围、是否适合 AI、需要的数据、风险约束、后续验证方式。只有这样，调研才会进入需求分析，而不是停留在聊天记录。\r
\r
## 常见误区\r
\r
第一个误区是问用户要什么功能。用户往往会描述他们熟悉的解决方案，例如“加一个一键生成按钮”，但产品经理要继续追问他们真正想省掉什么步骤。第二个误区是只访谈喜欢 AI 的用户。早期用户很热情，但反对者能帮你发现信任、安全和流程阻力。第三个误区是把个体抱怨当成普遍需求。没有频次、影响范围和业务损失的痛点，优先级不一定高。\r
\r
## 本节练习\r
\r
1. 选择一个 AI 产品场景，写出 5 个不能直接问“你想要什么功能”的替代问题。\r
2. 访谈一位同学或同事，记录 TA 使用 AI 工具完成任务时最卡的一步。\r
3. 把一条用户原话拆成场景、痛点、原因和可能的 AI 机会点。\r
\r
## 本节作业\r
\r
完成一份《AI 聊天助手用户访谈提纲》。要求包含调研目标、目标用户、访谈问题、追问问题、记录表格和调研后要验证的 3 个假设。把这份提纲放入作品集时，要说明你为什么这样设计问题。\r
\r
## 自测题\r
\r
### 题目 1\r
\r
问题：AI 产品用户调研最应该围绕什么展开？  \r
A. 用户喜欢什么颜色  \r
B. 用户真实任务和任务中的阻塞点  \r
C. 竞品用了什么模型  \r
D. 团队想做什么功能  \r
答案：B  \r
解析：AI 产品要服务具体任务，只有理解任务链路，才能判断 AI 能介入哪一步。\r
\r
### 题目 2\r
\r
问题：为什么不建议直接问“你想要什么 AI 功能”？  \r
答案：因为用户通常会给出解决方案偏好，而不一定能准确描述真实问题。解析：产品经理要通过追问场景、频次、影响和现有做法找到需求本质。\r
\r
### 题目 3\r
\r
问题：知识库问答产品调研时，为什么要问权限和引用来源？  \r
答案：因为企业知识有访问边界，引用来源影响用户信任和责任追溯。解析：这两个问题会直接影响产品设计和技术实现。\r
\r
### 题目 4\r
\r
问题：判断一个痛点是否值得进入需求池，至少要看哪些维度？  \r
答案：发生频次、影响范围、损失程度、是否有替代方案、是否适合产品化解决。解析：单个强烈抱怨不一定等于高优先级需求。\r
\r
### 题目 5\r
\r
问题：访谈记录整理时，为什么要保留用户原话？  \r
答案：原话能避免产品经理过度脑补，也能在后续评审中提供证据。解析：好的需求分析需要可追溯的用户证据。\r
\r
## 延伸学习\r
\r
下一节会学习如何把调研中的用户表达转化为产品需求，并区分真需求、伪需求和用户提出的解决方案偏好。\r
\r
## 本节小结\r
\r
用户调研不是问用户想要什么，而是还原用户在真实场景里的任务、阻塞和判断标准。AI 产品经理要特别关注输入资料、输出验证、权限、安全和失败后果，这些问题会直接决定 AI 功能能否落地。`,GE=`---\r
title: 如何把用户表达转成产品需求？\r
stage: stage-02-product-foundation\r
stageTitle: 产品经理基础能力\r
lesson: 2\r
difficulty: 入门\r
duration: 50 分钟\r
tags:\r
  - 需求分析\r
  - 真需求\r
  - AI 场景\r
objectives:\r
  - 掌握从用户表达到产品需求的拆解方法\r
  - 能区分真需求、伪需求和解决方案偏好\r
  - 理解 AI 产品需求的特殊约束\r
deliverables:\r
  - 输出一份 AI 产品需求分析表\r
  - 完成 3 条需求的验收标准描述\r
---\r
\r
# 如何把用户表达转成产品需求？\r
\r
## 你将学到什么\r
\r
这一节训练你把“用户说的话”翻译成“团队能执行的需求”。用户可能会说“我想要一个 AI 自动写方案的功能”，但产品经理不能直接把这句话写进 PRD。你要继续拆：谁在什么场景写方案？方案输入来自哪里？输出给谁看？什么算好？错误会带来什么影响？第一版需要自动生成完整方案，还是先生成大纲和检查清单？\r
\r
## 先建立直觉\r
\r
需求分析像看病。用户说“我头疼”不是最终诊断，医生要问疼多久、什么情况下疼、有没有伴随症状、以前怎么处理。产品经理也一样。用户说“我要 AI 客服”，可能真实问题是客服人力不足，也可能是知识库太乱、工单系统难用、用户找不到入口，或者客服话术不统一。不同原因对应完全不同的产品方案。\r
\r
## 核心知识\r
\r
一条可执行需求通常包含六个要素：目标用户、使用场景、用户任务、当前问题、产品方案、验收标准。AI 产品还要额外补充五个要素：输入来源、模型能力边界、输出格式、失败处理、成本与风险。\r
\r
区分真需求和伪需求时，不要只看用户是否表达强烈。真需求通常有明确场景、重复发生、影响效率或结果、现有方案不足，并且用户愿意付出成本解决。伪需求往往只有口头兴趣，没有稳定场景或影响很小。解决方案偏好则是用户直接给出了一个实现方式，例如“加一个一键生成按钮”，但按钮背后的任务可能是“快速整理会议纪要”。\r
\r
## AI 产品经理视角\r
\r
AI 产品需求常见的特殊性是结果不确定。普通功能的输入输出比较稳定，AI 功能则可能因为 Prompt、上下文、知识库、模型版本和参数变化产生不同结果。因此需求文档不能只写“系统生成回答”，还要写回答应包含哪些结构、是否需要引用、低置信度如何处理、用户如何反馈、哪些内容禁止生成。\r
\r
## 案例拆解\r
\r
以“企业知识库问答”需求为例，用户说“希望 AI 能回答制度问题”。拆解后可能得到：目标用户是新员工和一线客服；场景是报销、请假、合同审批等流程查询；任务是快速找到准确制度条款；痛点是文档分散、搜索关键词难猜、回答缺少来源；产品方案是基于部门权限的 RAG 问答；验收标准是回答必须引用来源，找不到答案时拒答并推荐人工入口。\r
\r
如果只写“支持制度问答”，研发不知道要接哪些文档，算法不知道如何评估准确性，设计不知道是否展示引用，运营不知道如何维护知识库。需求越模糊，后续返工越多。\r
\r
> 图片占位：AI 产品需求分析流程图  \r
> 建议文件名：ai-requirement-analysis-flow.png  \r
> 图片用途：展示从用户原话到需求定义、AI 能力判断、验收标准和迭代指标的流程。  \r
> 生图提示词：生成一张 AI 产品需求分析流程图，包含用户原话、场景还原、痛点验证、任务拆解、AI 能力匹配、数据与权限约束、验收标准、指标验证等步骤。白色背景，蓝紫渐变，中文标签，16:9，干净科技感，无水印，无真实品牌 Logo。\r
\r
## 方法论\r
\r
建议使用“需求九宫格”：用户是谁、在什么场景、要完成什么任务、现在怎么做、痛点是什么、痛点证据是什么、AI 能帮哪一步、边界风险是什么、如何验收。每条需求都填完九宫格，再决定是否进入 PRD。\r
\r
验收标准要写得可判断。例如不要写“回答准确”，而要写“当用户询问已入库制度问题时，回答需包含结论、引用文档名称、引用段落；无法检索到相关片段时提示暂未找到依据，不得编造制度条款”。这类标准才能指导测试和上线评估。\r
\r
## 常见误区\r
\r
第一个误区是把用户声音原样变成需求。用户表达是线索，不是最终方案。第二个误区是为了显得高级，把所有需求都套上大模型。很多场景用规则、表单和搜索更稳定。第三个误区是不写边界，只写理想状态。AI 产品必须提前说明不支持内容、失败处理和人工兜底。\r
\r
## 本节练习\r
\r
1. 将“我想要 AI 自动写周报”拆成用户、场景、任务、痛点和验收标准。\r
2. 找出 3 个你听过的用户需求，判断它们是真需求、伪需求还是解决方案偏好。\r
3. 为一个 AI 问答功能写出 3 条“不做什么”的边界说明。\r
\r
## 本节作业\r
\r
完成一份《AI 聊天助手需求分析表》。至少包含 5 条需求，每条需求写清用户场景、痛点证据、AI 介入方式、验收标准、风险边界和优先级。作品集里要展示你如何从用户原话推导到产品需求。\r
\r
## 自测题\r
\r
### 题目 1\r
\r
问题：用户说“我要一键生成”时，产品经理首先应该做什么？  \r
答案：追问用户在什么场景下要生成什么、现在怎么做、什么算好。解析：一键生成是方案偏好，背后的任务和标准才是需求。\r
\r
### 题目 2\r
\r
问题：AI 产品需求为什么要写失败处理？  \r
答案：因为模型可能答错、找不到依据、超时或触碰安全边界。解析：失败处理决定用户信任和系统可控性。\r
\r
### 题目 3\r
\r
问题：以下哪项更像验收标准？  \r
A. 回答要智能  \r
B. 页面要好看  \r
C. 无来源时提示无法确认，不生成确定性结论  \r
D. 模型要先进  \r
答案：C  \r
解析：C 可以被测试和判断，其他描述过于模糊。\r
\r
### 题目 4\r
\r
问题：真需求通常具备哪些特征？  \r
答案：明确场景、重复发生、影响效率或结果、现有方案不足、用户愿意付出成本。解析：这些特征能帮助判断优先级。\r
\r
### 题目 5\r
\r
问题：为什么 AI 需求要关注输入来源？  \r
答案：输入质量会直接影响模型输出，也决定权限、成本和实现方式。解析：没有可靠输入，AI 很难稳定产生价值。\r
\r
## 延伸学习\r
\r
下一节学习竞品分析。你会看到如何围绕需求假设看竞品，而不是把竞品页面截图贴满文档。\r
\r
## 本节小结\r
\r
需求分析的核心是把用户表达转成可执行、可验证、可迭代的产品定义。AI 产品经理要比传统需求多关注输入、输出、模型边界、失败处理和成本风险。`,UE=`---\r
title: 竞品分析如何避免只截图？\r
stage: stage-02-product-foundation\r
stageTitle: 产品经理基础能力\r
lesson: 3\r
difficulty: 入门\r
duration: 45 分钟\r
tags:\r
  - 竞品分析\r
  - 产品分析\r
  - AI 产品案例\r
objectives:\r
  - 理解竞品分析的目标不是罗列功能\r
  - 掌握围绕问题假设做竞品比较的方法\r
  - 能输出一份 AI 产品竞品分析表\r
deliverables:\r
  - 完成一份 AI 产品竞品分析表\r
  - 提炼 3 条可用于自己产品的设计启发\r
---\r
\r
# 竞品分析如何避免只截图？\r
\r
## 你将学到什么\r
\r
这一节帮你避免新手常见的“截图式竞品分析”。很多竞品文档看起来很厚，里面都是首页、功能页、价格页截图，却没有回答一个核心问题：这些产品为什么这样设计，对你的产品决策有什么启发。学完后，你会用问题假设、用户任务、功能策略、AI 能力、商业模式和风险边界来分析竞品。\r
\r
## 先建立直觉\r
\r
如果你要开一家咖啡店，去看别人家的装修只是表层。你更应该观察：它服务谁，主打外带还是堂食，点单流程多快，爆款产品是什么，会员如何留存，排队时如何减少焦虑。竞品分析也是如此。看 AI 产品时，不要只说“它有聊天框”“它有模板库”，而要问它为什么给用户这个入口、如何降低 Prompt 门槛、怎样处理失败、靠什么收费。\r
\r
## 核心知识\r
\r
竞品可以分三类：直接竞品、间接竞品和替代方案。直接竞品解决同类问题，例如多个 AI 写作工具；间接竞品解决相近任务，例如文档协作工具中的 AI 写作；替代方案可能不是 AI 产品，例如用户手动搜索资料、用 Excel 整理信息、请同事帮忙审核。\r
\r
好的竞品分析至少包含七个维度：目标用户、核心场景、用户流程、关键功能、AI 能力、体验细节、商业化与指标。AI 产品还要额外看模型能力边界、输入引导、结果可控性、引用和反馈、成本策略、安全提示。\r
\r
## AI 产品经理视角\r
\r
AI 产品的竞品分析不能只比较“谁的模型更强”。用户感知到的是任务完成质量。比如 AI 图片生成平台，模型能力很重要，但模板体系、参数面板、失败重试、生成队列、版权提示、积分扣费和素材管理同样影响体验。产品经理要分析的是完整产品机制，而不是单点能力。\r
\r
## 案例拆解\r
\r
假设你分析 AI 写作产品。截图式分析会列：A 产品有标题生成、B 产品有文章改写、C 产品有模板。问题导向分析会问：这些产品如何让用户快速描述写作目标？是否提供角色、受众、语气、长度、格式等输入项？输出后是否支持改写、扩写、缩短、润色？是否能保存常用 Prompt？是否允许团队共享模板？收费是按订阅、次数还是团队席位？\r
\r
通过这种分析，你可能得到启发：第一版不应该追求“所有写作类型”，而应该聚焦 3 个高频场景，给出结构化输入表单和可复用模板，降低新手不会写 Prompt 的门槛。\r
\r
## 方法论\r
\r
使用“假设驱动竞品分析”：先写清你要验证的问题，例如“AI 聊天助手是否需要模板入口？”然后选择 3 到 5 个竞品，围绕同一任务走完整流程，记录每一步的输入、输出、提示、异常和转化点。最后输出结论：哪些做法值得借鉴，哪些不适合你的用户，哪些需要进一步验证。\r
\r
建议表格字段包括：竞品名称、目标用户、核心场景、关键路径、输入设计、输出设计、AI 能力、失败处理、反馈机制、商业化方式、可借鉴点、不可照搬点。注意，不要把“竞品有这个功能”直接等同于“我们也要做”。\r
\r
> 图片占位：AI 产品竞品分析框架图  \r
> 建议文件名：ai-competitive-analysis-framework.png  \r
> 图片用途：展示从问题假设到竞品选择、任务体验、维度比较和设计启发的分析过程。  \r
> 生图提示词：生成一张 AI 产品竞品分析框架图，包含问题假设、竞品类型、用户任务、输入体验、输出体验、AI 能力、商业模式、风险边界、设计启发等模块。白色背景，蓝紫渐变线条，中文标签清晰，16:9，适合开源课程网站，无水印。\r
\r
## 常见误区\r
\r
第一个误区是只分析头部产品。头部产品资源多，不一定适合你的阶段。第二个误区是只列功能，不解释功能背后的用户任务。第三个误区是把竞品当答案。竞品只能提供参考，你仍然要回到自己的用户、场景和资源约束。第四个误区是忽略替代方案。很多时候用户不是在多个 AI 产品之间选择，而是在“继续手动做”和“尝试 AI”之间选择。\r
\r
## 本节练习\r
\r
1. 选择 3 个 AI 写作或 AI 聊天产品，比较它们的新手输入引导。\r
2. 为“企业知识库问答”列出直接竞品、间接竞品和替代方案。\r
3. 从一个竞品中提炼 2 个可借鉴点和 1 个不能照搬的点。\r
\r
## 本节作业\r
\r
完成一份《AI 聊天助手竞品分析表》。要求至少分析 3 个产品或替代方案，围绕同一个用户任务体验完整流程，并输出 5 条对你自己产品 PRD 有帮助的结论。\r
\r
## 自测题\r
\r
### 题目 1\r
\r
问题：竞品分析最重要的目的是什么？  \r
答案：帮助自己的产品决策，而不是展示竞品截图。解析：竞品信息只有转化为判断和启发才有价值。\r
\r
### 题目 2\r
\r
问题：为什么要分析替代方案？  \r
答案：用户可能并不使用同类产品，而是用人工、表格、搜索或现有系统解决问题。解析：替代方案能揭示真实竞争对象。\r
\r
### 题目 3\r
\r
问题：AI 图片生成产品竞品分析除了模型效果，还应看什么？  \r
答案：模板、参数、生成队列、失败处理、素材管理、积分扣费、版权提示等。解析：这些机制决定产品是否可用和可商业化。\r
\r
### 题目 4\r
\r
问题：看到竞品有某功能，是否意味着自己也要做？  \r
答案：不是。解析：是否做取决于自己的用户、场景、目标和资源。\r
\r
### 题目 5\r
\r
问题：什么是问题假设驱动的竞品分析？  \r
答案：先明确要验证的问题，再围绕同一任务比较竞品。解析：这样能避免漫无目的截图和罗列。\r
\r
## 延伸学习\r
\r
下一节会把调研、需求和竞品结论写进 PRD，让团队能理解第一版到底做什么。\r
\r
## 本节小结\r
\r
竞品分析不是截图收藏，而是围绕产品问题寻找可用证据。AI 产品经理要特别关注输入、输出、模型边界、反馈、成本和商业机制，因为这些维度决定 AI 功能能否成为稳定产品。`,HE=`---\r
title: AI 产品 PRD 应该怎么写？\r
stage: stage-02-product-foundation\r
stageTitle: 产品经理基础能力\r
lesson: 4\r
difficulty: 入门\r
duration: 60 分钟\r
tags:\r
  - PRD\r
  - 产品文档\r
  - 验收标准\r
objectives:\r
  - 理解 PRD 在团队协作中的作用\r
  - 掌握 AI 功能 PRD 的关键模块\r
  - 能写出研发可执行的 AI 功能说明\r
deliverables:\r
  - 输出一份 AI 聊天助手功能 PRD 初稿\r
  - 完成 AI 输出、异常和指标说明\r
---\r
\r
# AI 产品 PRD 应该怎么写？\r
\r
## 你将学到什么\r
\r
这一节教你把调研、需求和竞品结论整理成 PRD。PRD 不是为了显得专业而写的长文档，它的作用是让设计、研发、算法、测试、运营和业务方对“做什么、为什么做、做到什么程度”达成一致。AI 产品 PRD 还要额外写清模型输入、输出格式、上下文规则、失败处理、日志和评估指标。\r
\r
## 先建立直觉\r
\r
你可以把 PRD 理解成施工图。只说“盖一个舒服的房子”无法施工；你要说明房间数量、尺寸、材料、电路、验收标准。AI 功能也是如此。只写“接入大模型生成回答”不够，研发不知道接口参数，算法不知道 Prompt 结构，测试不知道什么算通过，运营不知道如何处理用户投诉。\r
\r
## 核心知识\r
\r
一份基础 PRD 通常包含：背景与目标、用户与场景、需求范围、功能流程、页面说明、交互规则、数据指标、异常状态、验收标准。AI 产品 PRD 建议增加：AI 能力说明、输入字段、Prompt 结构、知识来源、模型参数、输出格式、引用规则、失败兜底、内容安全、成本估算、日志字段、效果评估。\r
\r
写 PRD 时要区分“需求描述”和“实现方案”。产品经理不必替后端决定数据库表怎么建，但要说明业务需要记录哪些信息；不必替算法决定具体模型，但要说明响应时长、质量要求、成本上限和可切换需求。\r
\r
## AI 产品经理视角\r
\r
AI 功能 PRD 的关键是降低不确定性。比如聊天助手功能，你不能只写“用户输入问题，系统返回答案”。你要写：用户可选择场景模板；输入区支持目标、背景、约束；系统将用户输入和模板组装为 Prompt；输出需流式展示；回答完成后支持复制、重新生成、追问、反馈；生成失败时提示原因并允许重试；敏感内容触发安全提示；日志记录模型、Token、耗时、反馈。\r
\r
## 案例拆解\r
\r
以“AI 周报生成”功能为例，PRD 可以这样拆：背景是员工写周报耗时且结构不统一；目标是把平均写作时间降低 30%；用户是职场新人和团队成员；输入包括本周任务、完成情况、阻塞、下周计划；输出结构为本周重点、进展、风险、下周计划；异常包括输入过少、模型超时、敏感信息提示；指标包括生成完成率、复制率、编辑率、重试率、满意度和单次成本。\r
\r
这样的文档让研发能设计接口，让设计能画页面，让测试能准备用例，也让你上线后知道如何判断功能是否有效。\r
\r
## 方法论\r
\r
写 AI PRD 可以按“七步法”：第一步写背景证据，不写空泛目标；第二步定义用户和场景；第三步划定 MVP 范围；第四步画用户流程和系统流程；第五步写功能规则；第六步补 AI 特有规则；第七步写验收标准和指标。\r
\r
验收标准建议使用“给定-当-那么”的句式：给定用户选择“周报模板”并填写本周任务，当点击生成时，系统应在 2 秒内开始流式返回内容；若模型调用失败，应展示可理解提示并允许用户重试；若输入少于 20 字，应提示用户补充背景。\r
\r
## 常见误区\r
\r
第一个误区是 PRD 只写页面，不写规则。页面只是入口，规则才决定系统如何运转。第二个误区是 AI 部分只写一句“调用模型”。这会导致后续沟通大量返工。第三个误区是没有 MVP 边界。第一版不可能支持所有模板、所有格式、所有模型，必须写清暂不支持内容。\r
\r
## 本节练习\r
\r
1. 为“AI 周报生成”写 5 条验收标准。\r
2. 把一个 AI 聊天功能拆成输入、处理、输出、反馈四个模块。\r
3. 为一个模型调用失败场景写出页面提示和后续操作。\r
\r
## 本节作业\r
\r
完成一份《AI 聊天助手 PRD 初稿》。必须包含背景目标、目标用户、MVP 范围、核心流程、功能说明、AI 能力设计、异常状态、数据指标和验收标准。作品集里建议附上需求来源和优先级判断。\r
\r
## 自测题\r
\r
### 题目 1\r
\r
问题：PRD 的核心作用是什么？  \r
答案：让团队对要做的产品范围、规则和验收标准达成一致。解析：PRD 是协作文档，不是形式化作文。\r
\r
### 题目 2\r
\r
问题：AI PRD 相比普通 PRD 需要额外写哪些内容？  \r
答案：输入、Prompt、模型能力、知识来源、输出格式、失败处理、日志、指标和成本等。解析：这些内容决定 AI 功能可控性。\r
\r
### 题目 3\r
\r
问题：为什么要写 MVP 范围？  \r
答案：明确第一版做什么、不做什么，避免需求无限扩张。解析：AI 产品尤其容易因为想象空间大而失控。\r
\r
### 题目 4\r
\r
问题：以下哪条更像合格验收标准？  \r
A. 生成效果要好  \r
B. 用户体验要顺滑  \r
C. 点击生成后 2 秒内开始流式返回内容  \r
D. 产品要智能  \r
答案：C  \r
解析：C 可测试、可验收，其它描述模糊。\r
\r
### 题目 5\r
\r
问题：产品经理需要在 PRD 中指定具体数据库表结构吗？  \r
答案：通常不需要，但要说明业务需要记录哪些数据和为什么。解析：产品经理关注业务语义和协作边界。\r
\r
## 延伸学习\r
\r
下一节学习如何用原型和用户流程表达 PRD，让方案从文字进一步变成可讨论的体验。\r
\r
## 本节小结\r
\r
AI PRD 要把不确定的模型能力写成可协作的产品规则。你不需要写代码，但必须说清用户场景、功能范围、输入输出、异常、指标和验收标准。`,qE=`---\r
title: 原型和用户流程怎么表达 AI 产品方案？\r
stage: stage-02-product-foundation\r
stageTitle: 产品经理基础能力\r
lesson: 5\r
difficulty: 入门\r
duration: 50 分钟\r
tags:\r
  - 原型设计\r
  - 用户流程\r
  - 交互说明\r
objectives:\r
  - 理解用户流程、系统流程和原型的区别\r
  - 能为 AI 功能画出关键流程和异常分支\r
  - 掌握低保真原型表达方法\r
deliverables:\r
  - 输出 AI 聊天助手用户流程图\r
  - 完成 3 个核心页面低保真原型说明\r
---\r
\r
# 原型和用户流程怎么表达 AI 产品方案？\r
\r
## 你将学到什么\r
\r
这一节教你用图和原型表达 AI 产品方案。很多新手写 PRD 时文字很多，但团队仍然不知道用户怎么走、系统什么时候调用模型、失败时页面如何变化。学完后，你能区分用户流程、系统流程和页面原型，并用低保真方式表达聊天助手、知识库问答或 AI 图片生成产品的关键体验。\r
\r
## 先建立直觉\r
\r
如果 PRD 是说明书，流程图就是路线图，原型就是样板间。用户流程说明用户从哪里开始、经过哪些步骤、在哪里完成任务；系统流程说明前端、后端、模型、数据库、第三方服务如何配合；原型说明页面上有哪些信息、按钮、状态和反馈。AI 产品往往同时需要这三种表达，因为模型调用不是一个静态页面按钮，而是一串带状态的过程。\r
\r
## 核心知识\r
\r
用户流程关注用户视角，常见节点包括进入页面、选择模板、输入内容、点击生成、查看结果、追问或重试、保存或导出。系统流程关注服务视角，节点包括接收输入、参数校验、Prompt 组装、模型调用、流式返回、日志记录、内容审核、反馈入库。低保真原型关注信息布局，重点不是视觉效果，而是信息层级和交互状态。\r
\r
AI 产品原型必须体现状态：空状态、输入中、生成中、生成成功、生成失败、低置信度、敏感内容拦截、无权限、余额不足、重新生成、人工兜底。只画成功页面是不够的。\r
\r
## AI 产品经理视角\r
\r
AI 交互设计要帮助用户更好地输入，也要帮助用户判断输出是否可信。比如知识库问答页面，输入框之外可能需要知识库选择、问题示例、引用来源、相关文档、答案反馈、追问建议。AI 图片生成页面则需要模板、风格、尺寸、生成数量、积分消耗、任务队列和历史记录。不同产品的流程和原型都应该围绕任务完成来设计。\r
\r
## 案例拆解\r
\r
以 AI 聊天助手为例，用户流程可以是：进入助手页面，选择“写周报”模板，填写本周任务和约束，点击生成，系统流式输出，用户选择复制、改写或继续追问，最后保存到历史。系统流程则是：前端提交表单，后端校验输入和用户额度，组装 Prompt，调用模型接口，流式推送结果，记录 Token、耗时和反馈。原型需要展示模板区、对话区、输入区、历史区和反馈按钮。\r
\r
> 图片占位：AI 聊天助手用户流程图  \r
> 建议文件名：ai-chatbot-user-flow-foundation.png  \r
> 图片用途：展示用户从选择模板、输入任务、生成结果到保存反馈的完整路径。  \r
> 生图提示词：生成一张 AI 聊天助手用户流程图，包含进入页面、选择模板、填写任务、点击生成、流式输出、追问改写、保存历史、反馈评价等步骤。白色背景，蓝紫渐变连接线，中文标签清晰，16:9，现代科技教育风，无真实品牌 Logo，无水印。\r
\r
## 方法论\r
\r
画流程时先画主路径，再补异常分支。主路径说明理想情况下用户如何完成任务；异常分支说明输入不足、模型失败、权限不足、成本超限、内容违规时怎么办。原型先用灰盒表达区域，不要急着做精美 UI。每个页面都问：用户当前目标是什么？下一步最自然的操作是什么？AI 正在做什么是否可见？用户能否理解输出是否可信？\r
\r
## 常见误区\r
\r
第一个误区是只画页面，不画流程。页面之间缺少路径，团队无法判断体验是否完整。第二个误区是原型过早追求视觉细节，反而忽略状态和规则。第三个误区是不展示 AI 生成过程。用户看不到系统正在处理什么，就容易焦虑或重复点击。第四个误区是不设计反馈入口，导致上线后无法改进模型效果。\r
\r
## 本节练习\r
\r
1. 为 AI 周报助手画一条主用户流程。\r
2. 为同一功能补充 3 个异常分支：输入不足、生成失败、内容违规。\r
3. 用文字描述一个聊天助手页面的低保真布局。\r
\r
## 本节作业\r
\r
完成《AI 聊天助手用户流程与低保真原型》。至少包含一个主流程图、一个系统流程简图、3 个核心页面说明和 5 个关键状态。作品集里可以用截图或流程图展示你的设计思路。\r
\r
## 自测题\r
\r
### 题目 1\r
\r
问题：用户流程和系统流程的区别是什么？  \r
答案：用户流程描述用户完成任务的步骤，系统流程描述系统内部如何处理请求。解析：两者视角不同，但 AI 产品通常都需要。\r
\r
### 题目 2\r
\r
问题：AI 产品原型为什么必须画异常状态？  \r
答案：模型和服务可能失败、超时、拒答或触发安全策略。解析：异常状态直接影响可用性和信任。\r
\r
### 题目 3\r
\r
问题：低保真原型最关注什么？  \r
答案：信息层级、功能区域、流程和状态，而不是最终视觉。解析：低保真用于早期对齐方案。\r
\r
### 题目 4\r
\r
问题：知识库问答页面为什么要展示引用来源？  \r
答案：帮助用户验证答案可信度，并追溯原始资料。解析：引用是 RAG 产品的重要体验设计。\r
\r
### 题目 5\r
\r
问题：生成中状态应该给用户哪些信息？  \r
答案：系统正在处理、可等待或取消、必要时展示进度或流式内容。解析：清晰反馈能减少焦虑和重复操作。\r
\r
## 延伸学习\r
\r
下一节学习项目推进。你会看到 PRD 和原型交付后，产品经理如何与设计、研发、算法和运营一起把功能做出来。\r
\r
## 本节小结\r
\r
流程和原型让产品方案从文字变成可讨论的体验。AI 产品经理要同时表达用户路径、系统处理和关键状态，尤其不能只画成功页面。`,VE=`---\r
title: AI 产品项目如何推进协作？\r
stage: stage-02-product-foundation\r
stageTitle: 产品经理基础能力\r
lesson: 6\r
difficulty: 入门\r
duration: 50 分钟\r
tags:\r
  - 项目管理\r
  - 跨团队协作\r
  - 需求评审\r
objectives:\r
  - 理解 AI 产品项目中各角色的协作方式\r
  - 掌握需求评审、排期、风险跟踪的基本方法\r
  - 能识别 AI 项目的常见协作风险\r
deliverables:\r
  - 输出一份 AI 功能项目推进计划\r
  - 完成一份风险与问题跟踪表\r
---\r
\r
# AI 产品项目如何推进协作？\r
\r
## 你将学到什么\r
\r
这一节讲产品经理如何把一个 AI 需求从文档推进到上线。产品经理不是只写 PRD 的人，还要组织评审、协调资源、跟进风险、处理变更、推动验收和复盘。AI 项目比普通项目多了模型、数据、成本、安全和效果评估的不确定性，因此更需要清晰的协作机制。\r
\r
## 先建立直觉\r
\r
做 AI 产品像组织一次多人合奏。设计负责用户体验，前端负责页面交互，后端负责接口和数据，算法或平台团队负责模型能力，测试负责质量，运营负责上线和反馈，业务方提供场景和知识。产品经理不一定会演奏每一种乐器，但要让大家按照同一份谱子工作，知道什么时候进入、什么时候停、哪里可能走音。\r
\r
## 核心知识\r
\r
一个小型 AI 功能通常经历：需求发现、方案设计、需求评审、技术评审、排期开发、联调测试、灰度上线、数据观察、迭代复盘。每个阶段产品经理都有不同任务。需求阶段要确认目标和范围；评审阶段要消除歧义；开发阶段要跟进阻塞；测试阶段要确认验收标准；上线后要看数据和反馈。\r
\r
AI 项目常见角色包括业务方、产品、设计、前端、后端、算法或模型平台、数据、安全、运营和客服。你要知道每个角色关心什么：业务关心效果，研发关心边界和接口，算法关心数据和评估，安全关心合规，运营关心用户教育和反馈入口。\r
\r
## AI 产品经理视角\r
\r
AI 项目的风险要提前管理。比如模型效果不稳定，不能等上线后才发现；知识库文档质量差，不能只让算法背锅；模型调用成本超预期，不能等账单来了再讨论；敏感内容没有审核，不能上线后补救。产品经理要把这些风险写进项目计划，明确负责人和检查节点。\r
\r
## 案例拆解\r
\r
以 AI 聊天助手上线为例，需求评审时要确认模板范围、输入字段、输出格式和异常状态；技术评审时要确认模型接口、流式响应、日志字段、Token 统计和敏感词策略；开发中要跟进前后端联调、Prompt 调整和测试样例；上线前要准备使用说明和反馈入口；上线后要看生成完成率、重试率、满意度和成本。\r
\r
如果项目经理只盯“开发完成百分比”，很可能忽略模型评估和安全策略。AI 产品上线不是代码合并就结束，效果验证才刚开始。\r
\r
> 图片占位：AI 产品项目协作流程图  \r
> 建议文件名：ai-product-collaboration-flow.png  \r
> 图片用途：展示产品、设计、研发、算法、测试、运营和业务方在 AI 项目中的协作节点。  \r
> 生图提示词：生成一张 AI 产品项目协作流程图，包含需求发现、方案设计、需求评审、技术评审、开发联调、模型评估、灰度上线、数据复盘等阶段，并标注产品、设计、前端、后端、算法、测试、运营、业务方角色。白色背景，蓝紫渐变，中文标签，16:9，无水印。\r
\r
## 方法论\r
\r
建议使用“三张表”：需求范围表、风险问题表、上线检查表。需求范围表说明本期做什么、不做什么；风险问题表记录风险、影响、负责人、截止时间和状态；上线检查表覆盖功能验收、模型效果、日志埋点、成本监控、权限安全、用户反馈和回滚方案。\r
\r
会议也要有结构。需求评审回答“为什么做、做什么、怎么验收”；技术评审回答“如何实现、风险是什么、依赖谁”；上线评审回答“是否可放量、如何监控、出问题如何处理”。\r
\r
## 常见误区\r
\r
第一个误区是把项目推进理解成催进度。真正有效的推进是提前消除不确定性。第二个误区是只和研发沟通，不和算法、安全、运营对齐。第三个误区是上线前不准备评估集和反馈机制。第四个误区是需求变更不记录，导致团队对范围理解越来越不一致。\r
\r
## 本节练习\r
\r
1. 为 AI 聊天助手列出 8 个项目风险。\r
2. 写一份需求评审会议议程，包含需要确认的问题。\r
3. 设计一张上线检查表，至少覆盖功能、数据、成本和安全。\r
\r
## 本节作业\r
\r
完成一份《AI 聊天助手项目推进计划》。包括里程碑、参与角色、评审安排、风险问题表、上线检查表和上线后一周的数据观察计划。这份材料可以作为作品集中的项目管理证明。\r
\r
## 自测题\r
\r
### 题目 1\r
\r
问题：AI 项目为什么需要技术评审？  \r
答案：因为模型接口、数据、成本、安全和效果评估都会影响实现可行性。解析：技术评审能提前暴露风险。\r
\r
### 题目 2\r
\r
问题：产品经理推进项目的重点是催进度吗？  \r
答案：不是，重点是对齐目标、范围、风险、依赖和验收。解析：催进度不能解决需求不清和风险未控。\r
\r
### 题目 3\r
\r
问题：上线检查表应包含哪些 AI 特有项目？  \r
答案：模型效果、日志、Token 成本、安全策略、反馈入口、失败兜底等。解析：这些决定上线后是否可控。\r
\r
### 题目 4\r
\r
问题：为什么需求变更要记录？  \r
答案：避免团队对范围理解不一致，也便于评估排期和风险。解析：变更透明是协作基础。\r
\r
### 题目 5\r
\r
问题：AI 产品上线后为什么还要持续复盘？  \r
答案：模型效果和用户行为需要通过真实数据验证，很多问题只有上线后才会暴露。解析：AI 产品迭代依赖反馈闭环。\r
\r
## 延伸学习\r
\r
下一节进入阶段项目，把本阶段的调研、需求、竞品、PRD、原型和协作方法整合成一份完整作品集材料。\r
\r
## 本节小结\r
\r
AI 产品项目推进的核心是管理不确定性。产品经理要让团队围绕同一个目标、范围和验收标准工作，并提前处理模型、数据、成本和安全风险。`,YE=`---\r
title: 阶段项目：完成 AI 聊天助手 PRD 与低保真原型\r
stage: stage-02-product-foundation\r
stageTitle: 产品经理基础能力\r
lesson: 7\r
difficulty: 入门\r
duration: 90 分钟\r
tags:\r
  - 阶段项目\r
  - PRD\r
  - 低保真原型\r
objectives:\r
  - 综合运用用户调研、需求分析、竞品分析和 PRD 写作\r
  - 完成一个 AI 聊天助手 MVP 方案\r
  - 形成可放入作品集的项目材料\r
deliverables:\r
  - AI 聊天助手 PRD\r
  - 用户流程图和低保真原型\r
  - 项目推进与上线检查清单\r
---\r
\r
# 阶段项目：完成 AI 聊天助手 PRD 与低保真原型\r
\r
## 你将学到什么\r
\r
这一节不是新概念，而是把本阶段所有能力串起来。你要完成一个 AI 聊天助手 MVP：它帮助职场新人完成周报、会议纪要和文案润色等高频任务。项目目标不是做一个真正上线的系统，而是产出一套足以让团队评审的产品方案，证明你具备基础产品经理能力。\r
\r
## 先建立直觉\r
\r
很多作品集只写“我设计了一个 AI 助手”，然后放几张页面图。这样的材料很难打动面试官，因为它看不到你的思考过程。好的项目应该能回答：为什么做这个助手？目标用户是谁？第一版为什么只做这些场景？用户怎么输入？AI 怎么输出？失败怎么办？研发需要确认什么？上线后看什么指标？\r
\r
## 核心知识\r
\r
本项目建议按 8 个模块完成：项目背景、用户与场景、调研摘要、需求分析、竞品分析、MVP 范围、功能 PRD、流程与原型、项目计划和指标。每个模块都不要求特别长，但必须具体。比如背景不能写“AI 很火”，而要写“新人写周报时需要从任务系统、会议记录和个人记忆中整理信息，耗时且结构不统一”。\r
\r
MVP 建议聚焦 3 个模板：周报生成、会议纪要整理、文案润色。暂不支持企业知识库检索、自动读取内部系统、多人协作和复杂 Agent 执行。这样范围足够小，适合初学者完成，也能体现产品边界意识。\r
\r
## AI 产品经理视角\r
\r
AI 聊天助手看似简单，真正难点在输入引导、输出质量和反馈闭环。你要设计模板，帮助用户提供背景、目标、格式和限制；要设计输出操作，让用户能复制、改写、缩短、重试、保存；要设计反馈，让后续能知道哪些回答被采纳，哪些回答需要优化。你还要考虑成本和安全，例如限制单次输入长度、记录 Token、过滤敏感内容。\r
\r
## 案例拆解\r
\r
以“周报生成”模板为例，页面可以让用户填写本周完成事项、关键数据、遇到问题、下周计划和期望语气。Prompt 结构可以包含角色、任务、输入信息、输出格式和注意事项。输出结果包括本周重点、进展、风险、下周计划。用户可以点击“更正式”“更简洁”“补充风险提示”。这些交互比单纯一个空输入框更适合新手。\r
\r
> 图片占位：AI 聊天助手 MVP 信息架构图  \r
> 建议文件名：ai-chat-assistant-mvp-ia.png  \r
> 图片用途：展示模板区、对话区、历史记录、反馈和设置等核心模块。  \r
> 生图提示词：生成一张 AI 聊天助手 MVP 信息架构图，包含模板中心、对话界面、结构化输入、流式输出、历史记录、反馈评价、模型设置、成本日志等模块。白色背景，蓝紫渐变，中文标签清晰，16:9，干净科技感，无水印，无真实品牌 Logo。\r
\r
## 方法论\r
\r
按以下步骤完成项目：第一步写项目背景和目标；第二步用 3 到 5 条用户调研记录提炼痛点；第三步写需求九宫格；第四步分析 3 个竞品或替代方案；第五步定义 MVP 范围；第六步写 PRD；第七步画用户流程和低保真原型；第八步补项目推进计划和上线检查清单。\r
\r
作品集呈现时建议使用“问题-分析-方案-验证”的结构。不要只展示最终页面，要展示你如何从调研走到方案。面试官看重的不是你是否画得漂亮，而是你是否能做出合理取舍。\r
\r
## 常见误区\r
\r
第一个误区是范围过大，想把搜索、写作、知识库、Agent 全部塞进第一版。第二个误区是只画聊天页面，不设计模板、历史、反馈和异常。第三个误区是没有指标，无法证明上线后是否有效。第四个误区是作品集只放结论，不放分析过程。\r
\r
## 本节练习\r
\r
1. 为你的 AI 聊天助手写 3 条项目目标，并让它们可衡量。\r
2. 列出 MVP 做和不做的范围，各不少于 5 条。\r
3. 为周报模板写一个 Prompt 结构，不需要追求完美，但要包含角色、任务、输入和输出格式。\r
\r
## 本节作业\r
\r
完成《AI 聊天助手 PRD 与低保真原型》作品集材料。必须包含：项目背景、目标用户、用户痛点、需求分析表、竞品分析表、MVP 范围、核心功能 PRD、用户流程图、低保真原型、AI 能力说明、异常状态、指标方案和项目推进计划。\r
\r
## 自测题\r
\r
### 题目 1\r
\r
问题：阶段项目为什么建议先做 3 个高频模板，而不是所有能力？  \r
答案：范围小更容易验证价值，也更适合初学者完整表达方案。解析：MVP 的重点是验证核心假设。\r
\r
### 题目 2\r
\r
问题：作品集为什么要展示分析过程？  \r
答案：分析过程能证明你有产品判断，而不是只会画页面。解析：面试官更关心你如何做取舍。\r
\r
### 题目 3\r
\r
问题：AI 聊天助手的关键指标可以有哪些？  \r
答案：生成完成率、复制率、重试率、模板使用率、满意度、单次成本。解析：这些指标覆盖使用、效果和成本。\r
\r
### 题目 4\r
\r
问题：MVP 中“不做什么”为什么重要？  \r
答案：它能防止范围失控，并帮助团队集中资源验证核心价值。解析：边界清晰是成熟产品思维。\r
\r
### 题目 5\r
\r
问题：低保真原型需要展示哪些关键状态？  \r
答案：空状态、输入中、生成中、成功、失败、敏感内容提示、历史保存等。解析：AI 产品不能只设计成功路径。\r
\r
## 延伸学习\r
\r
下一阶段会进入 AI 基础知识。你将学习大模型、Prompt、Token、Embedding、RAG、Agent 和效果评估，理解 AI 产品背后的能力边界。\r
\r
## 本节小结\r
\r
阶段项目的价值在于把产品基本功变成可展示的成果。完成后，你不仅有一份 PRD 和原型，更重要的是有一套从用户问题到 AI 产品方案的思考链路。`,QE=`---
title: 产品经理基础能力
stage: stage-02-product-foundation
stageTitle: 产品经理基础能力
order: 2
difficulty: 入门
duration: 2 周
lessonCount: 7
tags:
  - 用户调研
  - 需求分析
  - PRD
objectives:
  - 掌握用户调研、需求分析、竞品分析的基本方法
  - 能写出 AI 产品功能 PRD
  - 能用流程图和原型表达产品方案
deliverables:
  - 用户访谈提纲
  - 竞品分析表
  - AI 聊天助手 PRD
project: AI 聊天助手 PRD 与低保真原型
tools:
  - Figma
  - FigJam
  - 飞书
audience:
  - 新手产品经理
  - 想补齐产品基本功的转行者
faqs:
  - q: 没做过产品能直接学 AI 产品吗？
    a: 可以，但必须补产品基本功，否则 AI 方案会停留在概念层。
---

# 产品经理基础能力

本阶段把“我觉得用户需要”训练成“我能证明用户需要，并能把需求写成团队可执行的方案”。很多新手一上来就想学 Prompt、RAG、Agent，但如果不会调研、不会拆需求、不会写清验收标准，AI 能力很容易变成一个炫技功能：页面看起来有模型，用户却不知道怎么用，研发也不知道边界在哪里。

## 适合人群

本阶段适合没有产品经理经验的学习者、传统产品经理转向 AI 产品的人，以及已经会用 AI 工具但还不会把想法落成 PRD 和原型的人。你不需要会写代码，但需要开始养成产品经理的基本工作习惯：用证据说话，用流程表达，用文档对齐，用指标验证。

## 学习目标

学完本阶段，你应该能够：

1. 设计一份 AI 产品用户访谈提纲，而不是只问“你想要什么功能”。
2. 把用户表达拆成角色、场景、任务、痛点、约束和验收标准。
3. 识别真需求、伪需求和用户提出的解决方案偏好。
4. 做一份围绕问题假设的竞品分析，而不是截图堆砌。
5. 写出包含输入、输出、异常、日志、指标和成本意识的 AI 产品 PRD。
6. 用用户流程、系统流程和低保真原型表达方案。
7. 在研发、设计、算法、运营之间推进一个小型 AI 功能。

## 学习方法

学习本阶段不要只读概念。每节课都建议配合一个同一主题练习：假设你要设计一个“AI 聊天助手”，它可以帮助新人写周报、查制度、生成会议纪要。每学一节，就把这一节的方法应用到这个产品上。到阶段结束时，你会自然沉淀出一份 PRD、流程图和低保真原型。

## 课程清单

1. 用户调研：如何访谈 AI 产品目标用户，避免把访谈做成满意度问卷。
2. 需求分析：把一句模糊需求拆成场景、角色、任务、约束和验收标准。
3. 竞品分析：围绕问题假设比较产品，而不是截图堆砌。
4. PRD 写作：为 AI 功能补充输入、输出、异常、日志和指标。
5. 原型与用户流程：画出用户路径、系统流程和异常分支。
6. 项目管理：理解 AI 项目中产品、设计、研发、算法、运营如何协作。
7. 阶段项目：完成 AI 聊天助手 PRD 与低保真原型。

## 阶段成果

完成本阶段后，你应该至少产出 4 份作品集材料：AI 产品用户访谈提纲、需求分析表、竞品分析表、AI 聊天助手 PRD 与低保真原型。这些材料不需要一开始就完美，但必须能证明你不是只会谈概念，而是能把一个模糊想法推进成团队可以讨论和执行的方案。

## 学习建议

每次写文档时都问自己三个问题：这个判断来自用户证据还是我自己的想象？这个需求是否说明了 AI 能力边界？研发拿到这份文档能否知道第一版做什么、不做什么？如果答案不清楚，就回到调研、需求分析和流程图继续补。

> 图片占位：产品经理基础能力地图  
> 建议文件名：product-foundation-capability-map.png  
> 图片用途：展示用户调研、需求分析、竞品分析、PRD、原型、项目推进之间的关系。  
> 生图提示词：生成一张适合课程教学的产品经理基础能力地图，包含用户调研、需求分析、竞品分析、PRD 写作、用户流程、低保真原型、项目推进、数据验证等模块。现代教育产品风格，白色背景，蓝紫色渐变线条，中文标签清晰，16:9，无真实品牌 Logo，无水印，适合开源课程网站使用。
`,XE=`---\r
title: 大模型是什么，AI 产品经理需要懂到什么程度？\r
stage: stage-03-ai-foundation\r
stageTitle: AI 基础知识\r
lesson: 1\r
difficulty: 入门\r
duration: 50 分钟\r
tags:\r
  - LLM\r
  - 大模型\r
  - 能力边界\r
objectives:\r
  - 理解大模型的基本工作直觉\r
  - 区分大模型擅长和不擅长的任务\r
  - 知道产品经理需要关注的大模型协作问题\r
deliverables:\r
  - 一份大模型能力边界说明\r
  - 3 个适合和不适合用大模型的场景分析\r
---\r
\r
# 大模型是什么，AI 产品经理需要懂到什么程度？\r
\r
## 你将学到什么\r
\r
这一节帮你建立大模型的产品直觉。你不需要掌握神经网络训练细节，但必须知道大模型为什么能理解和生成文本，为什么会编造，为什么需要上下文，为什么同一个问题可能得到不同回答，以及这些特性如何影响产品设计。\r
\r
## 先建立直觉\r
\r
可以把大模型想象成一个读过海量材料、擅长根据上下文续写和推理的助手。你给它任务、背景、限制和示例，它会预测接下来最合适的内容。它很会总结、改写、分类、生成和解释，但它不是数据库，也不是事实裁判。它可能把看起来合理的内容说得很自信，这就是产品经理必须设计引用、校验和反馈的原因。\r
\r
## 核心知识\r
\r
大模型通常指经过大量文本或多模态数据训练的模型，能够根据输入生成语言、代码、图像描述或结构化结果。它擅长处理非结构化任务，例如总结会议纪要、生成文案、理解用户意图、提取信息、改写语气、给出方案初稿。它不擅长天然保证事实正确、访问实时私有数据、执行真实系统操作、承担高风险判断。\r
\r
产品经理不需要知道每一层网络结构，但要知道四个关键词：训练数据决定基础知识和表达能力；上下文决定当前任务能看到什么；参数和模型版本影响输出风格和能力；推理成本影响速度、价格和可用范围。\r
\r
## AI 产品经理视角\r
\r
设计 AI 产品时，不要问“模型能不能做”，要问“在这个场景下，模型是否能以可控成本稳定完成用户任务”。例如让模型“帮医生诊断疾病”风险极高，但让模型“整理患者咨询问题并提醒医生关注点”更容易落地。AI 产品经理要把模型能力放在业务流程中，而不是把模型当万能黑箱。\r
\r
## 案例拆解\r
\r
以 AI 写作助手为例，大模型适合生成初稿、改写风格、扩写提纲，但不适合未经校验地生成法律承诺或财务数据。产品设计可以让用户提供受众、目的、素材和语气，模型生成可编辑初稿，再由用户确认。这样既利用了模型的生成能力，又避免把最终责任完全交给模型。\r
\r
## 方法论\r
\r
判断一个场景是否适合大模型，可以用“四看”：看任务是否语言密集，看输入是否足够，看输出是否可被用户判断，看错误后果是否可接受。如果答案都偏正向，就可以考虑用大模型；如果需要强事实、强实时、强责任、强执行，就要增加检索、规则、人工审核或系统工具。\r
\r
> 图片占位：大模型能力边界图  \r
> 建议文件名：llm-capability-boundary.png  \r
> 图片用途：帮助新手区分大模型擅长任务、需要辅助能力的任务和高风险任务。  \r
> 生图提示词：生成一张大模型能力边界图，包含擅长：总结、改写、分类、生成、解释；需要辅助：知识库问答、实时数据、系统操作；高风险：医疗诊断、法律承诺、财务决策。白色背景，蓝紫渐变，中文标签清晰，16:9，教育科技风，无水印。\r
\r
## 常见误区\r
\r
第一个误区是把大模型当搜索引擎。模型可以生成答案，但不天然保证来源。第二个误区是认为模型越强就不需要产品设计。输入引导、输出结构、反馈和风险控制仍然重要。第三个误区是把模型错误归因于“用户不会问”。如果大量用户不会问，说明产品需要模板和引导。\r
\r
## 本节练习\r
\r
1. 列出 5 个大模型适合处理的职场任务，并说明原因。\r
2. 列出 3 个不适合让模型直接自动决策的场景。\r
3. 为一个 AI 写作功能写出模型能力边界说明。\r
\r
## 本节作业\r
\r
完成《大模型能力边界说明》。选择一个 AI 产品，写出模型负责的任务、不负责的任务、需要哪些辅助能力、错误后果和用户确认机制。\r
\r
## 自测题\r
\r
### 题目 1\r
\r
问题：AI 产品经理需要掌握大模型训练算法细节吗？  \r
答案：不需要深入算法，但要理解能力、边界、成本和协作问题。解析：产品经理关注落地决策。\r
\r
### 题目 2\r
\r
问题：大模型为什么可能产生幻觉？  \r
答案：它会根据上下文生成看似合理的内容，但不天然校验事实。解析：因此需要引用、检索和反馈机制。\r
\r
### 题目 3\r
\r
问题：判断大模型场景是否适合落地，应看什么？  \r
答案：任务类型、输入质量、输出可验证性、错误后果和成本。解析：这些决定产品可行性。\r
\r
### 题目 4\r
\r
问题：模型越强是否就不需要产品设计？  \r
答案：不是。解析：强模型也需要输入引导、流程、边界和指标。\r
\r
### 题目 5\r
\r
问题：知识库问答为什么不能只依赖模型自身知识？  \r
答案：企业知识可能是私有、实时和权限受限的。解析：需要 RAG、权限和引用来源。\r
\r
## 延伸学习\r
\r
下一节学习 Prompt。你会看到如何把用户任务、背景和输出要求组织成模型更容易理解的输入。\r
\r
## 本节小结\r
\r
大模型是强大的生成和理解引擎，但不是事实数据库或自动责任主体。AI 产品经理要围绕任务、输入、输出、风险和成本来定义模型的使用边界。`,ZE=`---\r
title: Prompt 如何从一句话变成产品能力？\r
stage: stage-03-ai-foundation\r
stageTitle: AI 基础知识\r
lesson: 2\r
difficulty: 入门\r
duration: 55 分钟\r
tags:\r
  - Prompt\r
  - 提示词工程\r
  - 输出控制\r
objectives:\r
  - 掌握 Prompt 的基础结构\r
  - 理解 Prompt 模板如何降低用户使用门槛\r
  - 能设计可测试的 Prompt 版本\r
deliverables:\r
  - 3 个 AI 产品 Prompt 模板\r
  - 一份 Prompt 测试记录表\r
---\r
\r
# Prompt 如何从一句话变成产品能力？\r
\r
## 你将学到什么\r
\r
这一节讲 Prompt，但不会把 Prompt 神秘化。Prompt 本质上是产品把用户任务、背景信息、限制条件和输出格式传递给模型的方式。学完后，你能写出结构化 Prompt，也能理解为什么产品里需要模板、示例、参数和测试记录。\r
\r
## 先建立直觉\r
\r
你让实习生“写个方案”，对方很可能写偏。你如果说清角色、目标、背景、受众、限制、格式和示例，对方就更容易给出可用结果。Prompt 对模型也是如此。差 Prompt 像模糊口头指令，好 Prompt 像清楚的任务单。\r
\r
## 核心知识\r
\r
一个基础 Prompt 通常包含：角色、任务、背景、输入、约束、输出格式、示例和评价标准。角色不是为了让模型“扮演专家”这么简单，而是帮助模型选择表达风格和判断角度。任务要明确动词，例如总结、改写、分类、提取、生成。背景提供上下文。约束说明不能做什么。输出格式让结果可复制、可解析、可评估。\r
\r
在产品中，Prompt 往往不是写死的一段话，而是模板。用户填写表单字段，系统把字段拼成 Prompt。这样可以降低用户不会提问的门槛，也方便产品经理测试不同版本。\r
\r
## AI 产品经理视角\r
\r
产品经理不一定要成为 Prompt 大师，但要知道 Prompt 会影响体验、成本和质量。比如 AI 客服 Prompt 要强调引用知识库、不能承诺未确认事项、低置信度转人工；AI 图片生成 Prompt 要结构化描述主体、场景、风格、构图、尺寸和禁用元素；AI 写作 Prompt 要说明受众、目的、语气和长度。\r
\r
## 案例拆解\r
\r
一个周报生成 Prompt 可以这样设计：你是一名职场写作助手；任务是根据用户输入生成结构清晰的周报；输入包括完成事项、数据、问题、下周计划；输出分为本周重点、进展、风险、下周计划；要求语言简洁，不编造用户未提供的数据；如果信息不足，先列出需要补充的问题。\r
\r
这个 Prompt 比“帮我写周报”稳定，因为它把任务、输入、格式和边界都写清楚了。\r
\r
## 方法论\r
\r
设计 Prompt 时按“任务单结构”写：目标是什么，输入有什么，输出长什么样，不能做什么，如何处理信息不足。测试 Prompt 时准备一组样例输入，记录输出是否满足准确性、完整性、格式、语气、安全和成本要求。不要只凭一次效果好就上线。\r
\r
> 图片占位：Prompt 结构图  \r
> 建议文件名：prompt-structure-diagram.png  \r
> 图片用途：展示角色、任务、背景、输入、约束、输出格式、示例和评价标准之间的关系。  \r
> 生图提示词：生成一张 Prompt 结构图，包含角色、任务、背景、输入资料、限制条件、输出格式、示例、评价标准八个模块，中心是“Prompt 模板”。白色背景，蓝紫渐变，中文标签清晰，16:9，现代教育科技风，无水印。\r
\r
## 常见误区\r
\r
第一个误区是以为 Prompt 越长越好。过长会增加成本，也可能引入无关信息。第二个误区是只写正向要求，不写边界。第三个误区是不做版本管理。产品上线后，你需要知道哪版 Prompt 带来了效果变化。第四个误区是把 Prompt 当万能药，忽略知识库、规则和交互设计。\r
\r
## 本节练习\r
\r
1. 把“帮我写一份活动方案”改写成结构化 Prompt。\r
2. 为 AI 客服写 3 条不能违反的边界要求。\r
3. 设计一张 Prompt 测试表，至少包含 5 个评价维度。\r
\r
## 本节作业\r
\r
完成《AI 聊天助手 Prompt 模板库》。至少包含周报生成、会议纪要整理、文案润色 3 个模板，每个模板写清适用场景、输入字段、Prompt 正文、输出格式和测试样例。\r
\r
## 自测题\r
\r
### 题目 1\r
\r
问题：Prompt 在产品中通常扮演什么角色？  \r
答案：把用户任务和产品规则传递给模型的结构化指令。解析：它是产品能力的一部分。\r
\r
### 题目 2\r
\r
问题：Prompt 模板为什么能降低使用门槛？  \r
答案：用户只需填写关键字段，不必自己组织复杂提示词。解析：模板把专业提问方式产品化。\r
\r
### 题目 3\r
\r
问题：Prompt 测试为什么需要样例集？  \r
答案：单次输出不能代表稳定效果，样例集能比较不同版本。解析：产品需要可重复评估。\r
\r
### 题目 4\r
\r
问题：Prompt 越长越好吗？  \r
答案：不是。解析：过长会增加成本，也可能稀释重点。\r
\r
### 题目 5\r
\r
问题：信息不足时，Prompt 应如何要求模型处理？  \r
答案：提示需要补充信息，或明确“不基于未提供信息编造”。解析：这能降低幻觉风险。\r
\r
## 延伸学习\r
\r
下一节学习 Token 和上下文窗口。你会理解为什么 Prompt 长度、历史对话和文档内容都会影响成本和产品体验。\r
\r
## 本节小结\r
\r
Prompt 不是玄学，而是结构化任务说明。AI 产品经理要把 Prompt 设计成可复用、可测试、可迭代的产品资产。`,$E=`---\r
title: Token 和上下文窗口为什么影响产品设计？\r
stage: stage-03-ai-foundation\r
stageTitle: AI 基础知识\r
lesson: 3\r
difficulty: 入门\r
duration: 45 分钟\r
tags:\r
  - Token\r
  - 上下文窗口\r
  - 成本\r
objectives:\r
  - 理解 Token、上下文窗口和模型成本的关系\r
  - 知道长文档和多轮对话为什么需要设计策略\r
  - 能为 AI 产品提出上下文管理方案\r
deliverables:\r
  - 一份上下文管理说明\r
  - 一张 Token 成本影响分析表\r
---\r
\r
# Token 和上下文窗口为什么影响产品设计？\r
\r
## 你将学到什么\r
\r
这一节解释 Token 和上下文窗口。你不需要精确计算每种语言如何分词，但必须知道 Token 是模型阅读和生成内容时的处理与计费单位，上下文窗口是模型一次能看到的信息范围。它们会影响长文档处理、多轮对话、响应速度、调用成本和产品限制。\r
\r
## 先建立直觉\r
\r
想象你请助手阅读资料后回答问题。如果你一次塞给他 100 页材料，他可能看不完、抓不住重点，也会花很长时间。更好的方式是先找到相关段落，再让他基于这些段落回答。模型也是如此。上下文窗口再大，也不意味着产品应该把所有信息都塞进去。\r
\r
## 核心知识\r
\r
Token 可以粗略理解为模型处理文本的单位。输入 Prompt、历史对话、检索到的文档片段和模型生成的回答都会消耗 Token。上下文窗口是一次请求能容纳的 Token 总量，包括输入和输出。超过窗口的内容会被截断或无法提交。\r
\r
Token 影响三件事：成本、速度和质量。输入越长、输出越长，通常成本越高；上下文越大，模型处理时间可能越长；无关内容越多，模型越容易抓错重点。因此产品设计要考虑摘要、截断、检索、分页、历史压缩和输出长度控制。\r
\r
## AI 产品经理视角\r
\r
多轮聊天产品需要上下文管理。用户连续追问时，系统不能无限保留所有历史，否则成本会越来越高。常见策略包括保留最近几轮、对历史做摘要、让用户选择引用哪段历史、把关键记忆结构化保存。知识库问答则不应该把整篇文档塞进 Prompt，而应先检索相关片段。\r
\r
## 案例拆解\r
\r
企业制度问答中，用户问“差旅报销标准是什么”。如果系统把整本 100 页制度都放进上下文，成本高且可能超限。更合理的流程是：把文档切分成段落，生成 Embedding，检索与问题相关的片段，再把这些片段和问题一起发给模型。这样 Token 更少，答案也更聚焦。\r
\r
> 图片占位：Token 与上下文窗口示意图  \r
> 建议文件名：token-context-window-diagram.png  \r
> 图片用途：帮助新手理解系统 Prompt、用户输入、历史对话、检索片段和模型输出如何共同占用上下文。  \r
> 生图提示词：生成一张 Token 与上下文窗口示意图，画面包含系统提示词、用户输入、历史对话、检索片段、模型输出，并显示它们共同占用上下文窗口。白色背景，蓝紫渐变，中文标签清晰，16:9，教育科技风，无水印。\r
\r
## 方法论\r
\r
设计上下文策略时回答五个问题：哪些信息必须传给模型？哪些信息可以摘要？哪些信息应该检索而不是全量输入？输出长度是否需要限制？超出限制时用户如何感知？把这些答案写进 PRD，可以减少后续成本和体验问题。\r
\r
## 常见误区\r
\r
第一个误区是认为上下文越大越好。更大的窗口提供可能性，但不代表无成本。第二个误区是忽略历史对话成本。聊天越久，调用越贵。第三个误区是随意截断内容，导致模型缺少关键信息。第四个误区是不给用户解释限制，用户会误以为系统忘记了上下文。\r
\r
## 本节练习\r
\r
1. 估算一个 AI 聊天助手中哪些内容会占用 Token。\r
2. 为长对话设计 3 条上下文管理规则。\r
3. 为知识库问答写一句“为什么不能上传文档后直接全量塞给模型”的解释。\r
\r
## 本节作业\r
\r
完成《AI 聊天助手上下文管理说明》。写清历史对话保留规则、摘要策略、输出长度限制、超限提示和成本记录字段。\r
\r
## 自测题\r
\r
### 题目 1\r
\r
问题：Token 会影响哪些产品因素？  \r
答案：上下文长度、响应成本、生成速度和输出质量。解析：Token 是模型处理和计费的重要单位。\r
\r
### 题目 2\r
\r
问题：上下文窗口是什么？  \r
答案：模型一次请求能看到的输入和可生成输出的总范围。解析：超过窗口的信息无法完整参与生成。\r
\r
### 题目 3\r
\r
问题：为什么长文档问答通常需要检索？  \r
答案：检索能找到相关片段，减少 Token，并提高回答聚焦度。解析：这也是 RAG 的基础动机。\r
\r
### 题目 4\r
\r
问题：聊天产品为什么不能无限保留全部历史？  \r
答案：成本会增加，可能超出上下文窗口，也可能引入无关信息。解析：需要摘要或截断策略。\r
\r
### 题目 5\r
\r
问题：产品经理是否需要精确掌握分词算法？  \r
答案：通常不需要，但要理解 Token 对成本、速度和上下文的影响。解析：这是产品决策所需的程度。\r
\r
## 延伸学习\r
\r
下一节学习 Embedding 和向量检索，它们能帮助产品在大量文本中找到与用户问题语义相关的内容。\r
\r
## 本节小结\r
\r
Token 和上下文窗口不是技术细节，而是产品约束。它们决定你如何处理长文档、多轮对话、成本上限和用户提示。`,KE=`---\r
title: Embedding 和向量检索如何服务知识库？\r
stage: stage-03-ai-foundation\r
stageTitle: AI 基础知识\r
lesson: 4\r
difficulty: 入门\r
duration: 50 分钟\r
tags:\r
  - Embedding\r
  - 向量检索\r
  - 语义搜索\r
objectives:\r
  - 理解 Embedding 的产品直觉\r
  - 知道向量检索和关键词搜索的差异\r
  - 能解释知识库问答为什么需要切分和检索\r
deliverables:\r
  - 一份向量检索产品说明\r
  - 一张知识库文档处理流程图\r
---\r
\r
# Embedding 和向量检索如何服务知识库？\r
\r
## 你将学到什么\r
\r
这一节讲 Embedding 和向量检索。你不需要理解高维向量的数学细节，但要知道它们能把文本转成可比较的语义表示，让系统找到“意思相近”的内容，而不只是匹配关键词。这是知识库问答、智能搜索、相似推荐的重要基础。\r
\r
## 先建立直觉\r
\r
用户问“出差住宿标准是多少”，文档里可能写的是“差旅酒店费用上限”。关键词搜索如果只匹配字面词，可能找不到；语义搜索则更容易理解两者意思相近。Embedding 就像给每段文字做语义坐标，向量检索就是在坐标空间里找离问题最近的内容。\r
\r
## 核心知识\r
\r
Embedding 是把文本、图片或其他内容转成数字向量的过程。向量之间的距离可以表示语义相似度。知识库产品通常会先把文档解析、切分成片段，再为每个片段生成 Embedding，存入向量数据库。用户提问时，系统也把问题转成向量，检索相似片段，再交给模型生成回答。\r
\r
向量检索适合语义相近但关键词不同的场景，但它也有局限：如果文档切分不好，片段缺上下文；如果知识库内容过旧，检索再准也答错；如果权限控制缺失，可能检索到用户不该看的内容。\r
\r
## AI 产品经理视角\r
\r
产品经理需要关注文档处理质量。不要只写“支持上传文档”，还要问：支持哪些格式？如何切分标题、表格和列表？切分粒度多大？是否保留文档来源、页码和权限？更新后是否重新向量化？检索结果是否需要重排？这些问题会直接影响问答质量。\r
\r
## 案例拆解\r
\r
一个企业知识库产品上传《报销制度》后，系统把文档拆成章节和段落，分别生成向量。用户问“客户拜访打车能不能报销”，检索模块找到交通费用相关片段，模型基于片段回答，并展示引用来源。如果没有 Embedding，系统可能只能找“打车”这个词，错过写作方式不同但语义相关的制度段落。\r
\r
## 方法论\r
\r
设计向量检索相关需求时，可以用“文档处理六问”：资料从哪里来，支持什么格式，如何切分，如何更新，如何控制权限，如何评估检索质量。产品经理不必指定具体向量数据库，但要把这些业务规则写清。\r
\r
> 图片占位：Embedding 与向量检索流程图  \r
> 建议文件名：embedding-vector-search-flow.png  \r
> 图片用途：展示文档切分、Embedding、向量数据库、用户提问、相似度检索和片段返回流程。  \r
> 生图提示词：生成一张 Embedding 与向量检索流程图，包含文档上传、文本切分、Embedding 向量化、向量数据库、用户提问、问题向量化、相似度检索、返回相关片段等步骤。白色背景，蓝紫渐变，中文标签清晰，16:9，适合开源课程网站，无水印。\r
\r
## 常见误区\r
\r
第一个误区是把向量检索当成万能搜索。它能找语义相似内容，但不代表一定正确。第二个误区是忽略切分。切分过短会缺上下文，过长会噪声多。第三个误区是忽略权限。企业知识库必须保证用户只能检索到有权限的内容。第四个误区是没有评估集，不知道检索质量到底如何。\r
\r
## 本节练习\r
\r
1. 用自己的话解释 Embedding，不超过 100 字。\r
2. 为企业知识库列出 5 个文档处理问题。\r
3. 比较关键词搜索和向量检索在“报销标准查询”中的差异。\r
\r
## 本节作业\r
\r
完成《知识库向量检索产品说明》。写清文档来源、支持格式、切分策略、权限字段、检索返回内容和评估方法。\r
\r
## 自测题\r
\r
### 题目 1\r
\r
问题：Embedding 可以粗略理解为什么？  \r
答案：把内容转成可比较的语义坐标。解析：产品经理不需要掌握数学，但要理解语义相似的作用。\r
\r
### 题目 2\r
\r
问题：向量检索相比关键词搜索的优势是什么？  \r
答案：能找到表达不同但语义相近的内容。解析：这对自然语言提问很重要。\r
\r
### 题目 3\r
\r
问题：文档切分为什么影响问答质量？  \r
答案：切分决定检索片段是否完整、聚焦和有上下文。解析：切分不好会导致模型拿到错误材料。\r
\r
### 题目 4\r
\r
问题：企业知识库向量检索为什么要考虑权限？  \r
答案：防止用户检索到无权访问的敏感资料。解析：权限是企业产品的基本边界。\r
\r
### 题目 5\r
\r
问题：产品经理需要指定具体向量数据库吗？  \r
答案：通常不需要，但要说明业务需求、数据规模、权限和更新要求。解析：具体选型可与技术团队评估。\r
\r
## 延伸学习\r
\r
下一节学习 RAG。你会看到 Embedding 和向量检索如何与大模型组合，形成完整知识库问答流程。\r
\r
## 本节小结\r
\r
Embedding 和向量检索让系统能按语义找到相关资料。AI 产品经理要关注文档质量、切分、权限、更新和检索评估，而不是只写“支持知识库”。`,JE=`---\r
title: RAG 的完整流程是什么？\r
stage: stage-03-ai-foundation\r
stageTitle: AI 基础知识\r
lesson: 5\r
difficulty: 入门\r
duration: 60 分钟\r
tags:\r
  - RAG\r
  - 知识库问答\r
  - 引用来源\r
objectives:\r
  - 掌握 RAG 的核心流程\r
  - 理解 RAG 产品的质量影响因素\r
  - 能写出 RAG 问答产品的流程说明\r
deliverables:\r
  - RAG 知识库问答流程图\r
  - RAG 产品质量检查清单\r
---\r
\r
# RAG 的完整流程是什么？\r
\r
## 你将学到什么\r
\r
这一节系统讲 RAG。RAG 可以理解为“先检索，再生成”：系统先从知识库找到与问题相关的资料，再让大模型基于这些资料回答。学完后，你能解释 RAG 的完整流程，也能知道为什么 RAG 不是“加个知识库就准确”。\r
\r
## 先建立直觉\r
\r
闭卷考试容易凭记忆胡说，开卷考试至少能翻资料。但如果资料乱、索引错、翻到的页不相关，答案仍然会错。RAG 就像给模型开卷考试，关键不只是模型会不会写答案，还包括资料是否可靠、能否找到正确片段、是否有权限、答案是否引用来源。\r
\r
## 核心知识\r
\r
RAG 常见流程包括：文档上传、文档解析、文本切分、Embedding、存入向量数据库、用户提问、问题向量化、相似度检索、重排、上下文组装、模型生成、引用来源、用户反馈。每一步都可能影响结果。\r
\r
RAG 的价值是让模型回答私有知识、较新知识或专业资料中的问题，降低幻觉风险。但 RAG 不等于绝对准确。如果文档本身错误，检索不到正确片段，或者 Prompt 没要求基于资料回答，模型仍可能输出问题答案。\r
\r
## AI 产品经理视角\r
\r
产品经理要把 RAG 拆成产品能力，而不是只写技术名词。管理员需要上传和管理知识；用户需要提问和查看引用；系统需要展示解析状态；权限需要控制检索范围；运营需要查看高频无答案问题；产品需要收集反馈改进知识库。RAG 是一个完整产品系统。\r
\r
## 案例拆解\r
\r
企业知识库问答中，员工问“试用期请假是否影响转正”。系统先在制度库检索相关段落，找到《员工考勤制度》和《转正管理办法》中的片段，再让模型生成回答：根据某制度第几条，试用期请假需要按流程审批，是否影响转正取决于请假类型和绩效记录。答案下方展示引用段落，用户可点击查看原文。如果没有相关资料，系统应提示未找到依据，而不是编造。\r
\r
> 图片占位：RAG 知识库问答流程图  \r
> 建议文件名：rag-knowledge-base-flow.png  \r
> 图片用途：帮助新手理解文档上传、切分、向量化、检索、重排、生成回答的流程。  \r
> 生图提示词：生成一张适合课程教学的 RAG 知识库问答流程图，包含文档上传、文本切分、Embedding、向量数据库、用户提问、相似度检索、重排、上下文组装、大模型生成、答案引用来源等步骤。现代科技感，蓝紫色渐变，白色背景，清晰中文标签，16:9，无水印，适合开源课程网站使用。\r
\r
## 方法论\r
\r
设计 RAG 产品时可以用“六层质量检查”：知识质量、解析质量、切分质量、检索质量、生成质量、反馈质量。每层都要有负责人和指标。例如知识质量看文档是否最新，检索质量看 Top 结果是否命中，生成质量看答案是否基于引用，反馈质量看用户是否能标记错误。\r
\r
## 常见误区\r
\r
第一个误区是认为 RAG 能自动解决所有幻觉。第二个误区是忽略知识运营，以为文档上传一次就结束。第三个误区是不做引用来源，用户无法验证答案。第四个误区是没有低置信度兜底，检索不到也强行回答。第五个误区是忽略权限，导致资料泄露。\r
\r
## 本节练习\r
\r
1. 画出一个 RAG 问答的 8 步流程。\r
2. 为 RAG 产品列出 5 个可能导致回答错误的原因。\r
3. 写一条“无依据时拒答”的产品规则。\r
\r
## 本节作业\r
\r
完成《RAG 知识库问答产品流程说明》。包括管理员上传流程、用户问答流程、引用展示、无答案处理、权限规则和反馈闭环。\r
\r
## 自测题\r
\r
### 题目 1\r
\r
问题：RAG 的核心思想是什么？  \r
答案：先检索相关资料，再让模型基于资料生成回答。解析：它把检索和生成组合起来。\r
\r
### 题目 2\r
\r
问题：RAG 是否能保证 100% 准确？  \r
答案：不能。解析：知识、检索、Prompt、模型和权限都会影响结果。\r
\r
### 题目 3\r
\r
问题：RAG 答案为什么需要引用来源？  \r
答案：让用户验证答案依据，并提高可信度和可追溯性。解析：企业场景尤其重要。\r
\r
### 题目 4\r
\r
问题：知识库更新后为什么要重新处理？  \r
答案：否则向量索引可能仍是旧内容，回答不及时。解析：知识运营是 RAG 产品的一部分。\r
\r
### 题目 5\r
\r
问题：检索不到相关资料时应如何处理？  \r
答案：提示未找到依据、引导换问法或转人工，不应编造。解析：拒答比错误回答更可信。\r
\r
## 延伸学习\r
\r
下一节学习 Agent。你会理解当 AI 不只是回答，而要拆任务、调用工具和执行流程时，产品设计会发生什么变化。\r
\r
## 本节小结\r
\r
RAG 是知识库问答的核心能力，但它不是单一功能，而是一条从知识管理到回答评估的完整链路。产品经理要把每个环节写清，才能做出可信的 AI 问答产品。`,WE=`---\r
title: Agent 和普通聊天机器人有什么区别？\r
stage: stage-03-ai-foundation\r
stageTitle: AI 基础知识\r
lesson: 6\r
difficulty: 入门\r
duration: 60 分钟\r
tags:\r
  - Agent\r
  - Tool Calling\r
  - 工作流\r
objectives:\r
  - 理解 Agent 的任务拆解和工具调用能力\r
  - 区分聊天机器人、RAG 和 Agent\r
  - 掌握 Agent 产品的风险边界\r
deliverables:\r
  - Agent 工作流说明\r
  - 工具调用权限与风险清单\r
---\r
\r
# Agent 和普通聊天机器人有什么区别？\r
\r
## 你将学到什么\r
\r
这一节讲 Agent。普通聊天机器人主要回答问题，RAG 机器人会先检索资料再回答，而 Agent 更进一步：它可以理解目标、拆解步骤、调用工具、根据结果继续决策，甚至完成跨系统任务。学完后，你能判断哪些场景适合 Agent，哪些场景只需要普通对话或流程自动化。\r
\r
## 先建立直觉\r
\r
你让助手“帮我整理竞品信息并生成报告”。普通聊天机器人可能给你写一份通用报告；RAG 机器人能基于你提供的资料总结；Agent 则可能先搜索资料、提取关键信息、写入表格、生成报告、提醒你确认。它不只是说话，而是把任务拆成步骤并调用工具。\r
\r
## 核心知识\r
\r
Agent 通常包含目标理解、任务规划、工具调用、结果观察、下一步决策和最终输出。工具可以是搜索、数据库、日历、邮件、工单系统、代码执行、网页浏览、表格写入等。Function Calling 或 Tool Calling 是让模型以结构化方式选择和调用工具的机制。\r
\r
Agent 的难点不在“会不会调用工具”，而在权限、确认、日志、失败重试和安全。只要系统能执行真实操作，就必须考虑误操作、越权、数据泄露和成本失控。\r
\r
## AI 产品经理视角\r
\r
设计 Agent 产品时，要特别区分“建议型 Agent”和“执行型 Agent”。建议型只给计划和草稿，用户确认后执行；执行型可以直接操作系统，风险更高。早期产品建议从建议型或半自动开始，在关键节点加入人工确认。\r
\r
## 案例拆解\r
\r
一个销售跟进 Agent 的目标是“根据会议纪要生成客户跟进邮件，并在 CRM 创建下一步任务”。流程可能是：读取会议纪要，提取客户关注点，生成邮件草稿，用户确认，调用邮件系统发送，调用 CRM 创建任务，记录执行日志。这里涉及邮件权限、客户数据、人工确认、失败回滚和日志审计，不是简单聊天能覆盖的。\r
\r
> 图片占位：Agent 工作流程图  \r
> 建议文件名：agent-workflow-flow.png  \r
> 图片用途：展示目标输入、任务拆解、工具调用、观察结果、人工确认和最终输出的循环。  \r
> 生图提示词：生成一张 Agent 工作流程图，包含用户目标输入、任务规划、步骤拆解、工具调用、观察结果、人工确认、失败重试、执行日志、最终输出等节点。深浅结合的蓝紫科技风，白色背景，中文标签清晰，16:9，无水印。\r
\r
## 方法论\r
\r
判断是否需要 Agent，可以问四个问题：任务是否跨多个步骤，是否需要访问外部工具，是否需要根据中间结果调整计划，是否存在必须记录和控制的执行风险。如果只是一次问答或简单生成，不需要 Agent。如果任务跨系统且需要自动化，可以考虑 Agent，但要先设计权限和确认机制。\r
\r
## 常见误区\r
\r
第一个误区是把所有聊天助手都叫 Agent。没有任务规划和工具调用，就只是对话产品。第二个误区是直接让 Agent 自动执行高风险操作。第三个误区是忽略日志，导致执行后无法追溯。第四个误区是没有人工确认节点，用户不敢信任系统。\r
\r
## 本节练习\r
\r
1. 比较聊天机器人、RAG 和 Agent 的差异。\r
2. 为“自动整理会议并创建待办”设计 5 个工具调用节点。\r
3. 列出一个执行型 Agent 需要的安全控制。\r
\r
## 本节作业\r
\r
完成《AI Agent 工作流说明》。选择一个办公自动化场景，写清目标、步骤、工具、权限、人工确认、日志和失败处理。\r
\r
## 自测题\r
\r
### 题目 1\r
\r
问题：Agent 和普通聊天机器人最大的区别是什么？  \r
答案：Agent 能拆解任务并调用工具执行或推进任务。解析：普通聊天主要生成回答。\r
\r
### 题目 2\r
\r
问题：Tool Calling 的产品意义是什么？  \r
答案：让模型以结构化方式连接外部系统，实现查询、写入或执行。解析：这让 AI 从回答走向行动。\r
\r
### 题目 3\r
\r
问题：为什么执行型 Agent 需要人工确认？  \r
答案：真实操作可能造成错误、越权或不可逆后果。解析：确认机制能降低风险并建立信任。\r
\r
### 题目 4\r
\r
问题：没有工具调用的聊天产品能叫 Agent 吗？  \r
答案：通常不应这么称呼。解析：Agent 需要任务规划和行动能力。\r
\r
### 题目 5\r
\r
问题：Agent 产品为什么必须记录日志？  \r
答案：用于追溯执行过程、排查错误、审计权限和优化流程。解析：执行行为必须可见可查。\r
\r
## 延伸学习\r
\r
下一节学习 AI 效果评估。无论是聊天、RAG 还是 Agent，都需要评估质量，而不是只看演示效果。\r
\r
## 本节小结\r
\r
Agent 是能围绕目标拆任务、调工具、观察结果并继续行动的 AI 系统。产品经理要在自动化价值和执行风险之间做设计取舍。`,n5=`---\r
title: 如何评估 AI 回答质量？\r
stage: stage-03-ai-foundation\r
stageTitle: AI 基础知识\r
lesson: 7\r
difficulty: 入门\r
duration: 55 分钟\r
tags:\r
  - AI 评估\r
  - 效果指标\r
  - 质量管理\r
objectives:\r
  - 理解 AI 产品为什么需要效果评估\r
  - 掌握回答质量的常见评价维度\r
  - 能设计一张 AI 输出评估表\r
deliverables:\r
  - AI 回答质量评估表\r
  - 一组测试问题与评分标准\r
---\r
\r
# 如何评估 AI 回答质量？\r
\r
## 你将学到什么\r
\r
这一节讲 AI 效果评估。AI 产品不能只凭“我试了一下还不错”上线。你需要用样例、标准、评分和反馈持续判断模型是否真正帮助用户完成任务。学完后，你能设计一张适合产品经理使用的 AI 输出评估表。\r
\r
## 先建立直觉\r
\r
如果你请 10 个人试吃一道菜，只问“好不好吃”很难改进。你需要知道咸不咸、火候如何、摆盘怎样、是否符合目标顾客口味。AI 输出也是如此。“回答好不好”太笼统，要拆成准确性、完整性、相关性、可读性、安全性、格式一致性和成本。\r
\r
## 核心知识\r
\r
常见评估方式包括人工评估、规则校验、用户反馈、线上指标和自动化评测。人工评估适合早期，能发现细节问题；规则校验适合格式、敏感词、引用来源等可明确判断的内容；用户反馈能反映真实使用；线上指标能看规模化效果；自动化评测可以提升效率，但仍需要人工抽检。\r
\r
AI 回答质量常用维度包括：是否回答问题，是否基于事实或引用，是否完整，是否简洁清晰，是否符合格式，是否存在幻觉，是否安全，是否能引导下一步。不同产品权重不同，客服产品更重准确和安全，写作产品更重可读和可编辑。\r
\r
## AI 产品经理视角\r
\r
产品经理需要把评估写进上线计划。上线前准备测试集，上线后收集用户反馈和日志。比如 RAG 产品可以准备 50 个高频问题，每个问题标注标准答案和来源，测试回答是否命中；聊天助手可以看复制率、重试率和用户评分；Agent 产品要评估执行成功率、人工确认率和失败原因。\r
\r
## 案例拆解\r
\r
智能客服问答可以设计评分表：问题是否识别正确，答案是否引用知识库，是否解决用户问题，是否触发正确转人工规则，是否包含违规承诺，回答是否简洁。每条回答按 1 到 5 分评分，并记录错误类型：知识缺失、检索错误、Prompt 问题、模型编造、用户问题不清。这样团队才能知道该优化知识库、检索还是 Prompt。\r
\r
> 图片占位：AI 产品评估指标体系图  \r
> 建议文件名：ai-evaluation-metrics-system.png  \r
> 图片用途：展示使用指标、效果指标、质量指标、成本指标、风险指标之间的关系。  \r
> 生图提示词：生成一张 AI 产品评估指标体系图，包含使用指标、效果指标、质量指标、成本指标、留存指标、风险指标六类，并给出示例：采纳率、重试率、准确率、响应时长、单次成本、投诉率。白色背景，蓝紫渐变，中文标签清晰，16:9，无水印。\r
\r
## 方法论\r
\r
评估可以按“五步法”：定义任务，准备样例，确定评分维度，记录错误类型，形成迭代建议。不要只给总分，要记录具体问题。比如“回答不准确”要继续判断是知识库没有资料、检索没命中、Prompt 没约束，还是模型生成错误。\r
\r
## 常见误区\r
\r
第一个误区是只看用户点赞，不看未使用和重试。第二个误区是把所有错误都归因于模型。第三个误区是没有标准答案，评估变成主观争论。第四个误区是只做上线前评估，不做上线后监控。第五个误区是忽略成本，效果提升但成本翻倍也可能不可持续。\r
\r
## 本节练习\r
\r
1. 为知识库问答设计 5 个评估维度。\r
2. 准备 3 个测试问题，并写出标准答案或期望依据。\r
3. 把一个错误回答归因到知识、检索、Prompt、模型或用户输入中的一种。\r
\r
## 本节作业\r
\r
完成《AI 回答质量评估表》。至少包含测试问题、期望答案、模型回答、评分维度、错误类型、修改建议和优先级。\r
\r
## 自测题\r
\r
### 题目 1\r
\r
问题：为什么 AI 产品不能只凭体验感觉上线？  \r
答案：单次体验不能代表稳定效果，需要样例和指标验证。解析：AI 输出具有不确定性。\r
\r
### 题目 2\r
\r
问题：回答质量可以从哪些维度评估？  \r
答案：准确性、相关性、完整性、可读性、格式、安全、引用和成本等。解析：不同产品权重不同。\r
\r
### 题目 3\r
\r
问题：错误回答一定是模型能力差吗？  \r
答案：不一定。解析：可能是知识缺失、检索错误、Prompt 问题或用户输入不清。\r
\r
### 题目 4\r
\r
问题：RAG 产品评估为什么需要标准答案或来源？  \r
答案：否则无法判断回答是否基于正确资料。解析：标准答案让评估更客观。\r
\r
### 题目 5\r
\r
问题：线上指标中重试率升高可能说明什么？  \r
答案：用户对第一次输出不满意、输入引导不足或模型质量不稳定。解析：需要结合日志分析原因。\r
\r
## 延伸学习\r
\r
下一节是阶段项目，你会把本阶段概念整理成一张 AI 基础概念地图，并形成作品集材料。\r
\r
## 本节小结\r
\r
AI 评估是把“感觉不错”变成“有证据地改进”。产品经理要建立样例、评分、错误归因和指标闭环。`,e5=`---\r
title: 阶段项目：绘制 AI 产品基础概念地图\r
stage: stage-03-ai-foundation\r
stageTitle: AI 基础知识\r
lesson: 8\r
difficulty: 入门\r
duration: 90 分钟\r
tags:\r
  - 阶段项目\r
  - 概念地图\r
  - AI 基础\r
objectives:\r
  - 整合 LLM、Prompt、Token、Embedding、RAG、Agent 和评估概念\r
  - 用产品经理视角说明各概念的作用和边界\r
  - 形成可展示的 AI 基础知识作品集材料\r
deliverables:\r
  - AI 产品基础概念地图\r
  - AI 能力边界说明文档\r
  - 产品协作问题清单\r
---\r
\r
# 阶段项目：绘制 AI 产品基础概念地图\r
\r
## 你将学到什么\r
\r
这一节把本阶段知识整理成一份作品集材料。你要绘制一张 AI 产品基础概念地图，说明大模型、Prompt、Token、Embedding、RAG、Agent 和评估之间的关系，并补充每个概念对产品设计的影响。这个项目能帮助你在面试或学习总结中清晰表达“我懂 AI 产品基础，但不是只背术语”。\r
\r
## 先建立直觉\r
\r
概念地图不是思维导图装饰，而是把散落知识连起来。比如 Token 影响 Prompt 长度和成本；Embedding 支撑 RAG 检索；RAG 影响知识库问答可信度；Agent 需要 Tool Calling 和权限；评估贯穿所有 AI 功能。你要让别人一眼看出这些概念如何共同构成 AI 产品系统。\r
\r
## 核心知识\r
\r
建议把概念地图分成四层：基础模型层、输入上下文层、知识增强层、行动与评估层。基础模型层包括 LLM 和模型能力边界；输入上下文层包括 Prompt、Token、上下文窗口；知识增强层包括 Embedding、向量数据库、RAG；行动与评估层包括 Agent、Tool Calling、日志、质量评估和成本控制。\r
\r
每个节点都要写三句话：它是什么，它解决什么产品问题，它带来什么风险或协作问题。例如 RAG：它是检索增强生成；解决私有知识问答和引用来源问题；风险是知识质量、权限、检索命中和低置信度处理。\r
\r
## AI 产品经理视角\r
\r
作品集中的概念地图要服务产品表达，而不是教学百科。你可以选一个主线案例，例如企业知识库问答：用户提问进入 Prompt，系统考虑 Token 限制，不直接塞整篇文档，而是用 Embedding 检索相关片段，组成 RAG 上下文，再由 LLM 生成带引用答案，最后通过用户反馈和评估表优化。这条链路能体现你对 AI 产品实现边界的理解。\r
\r
## 案例拆解\r
\r
如果你的主线是“AI 客服”，概念地图可以这样连：用户问题进入意图识别，常见问题走 RAG 知识库，复杂问题触发人工转接，模型回答需要 Prompt 约束语气和禁止承诺，日志记录 Token 和响应时长，评估关注解决率、转人工率、满意度和错误回答。这样地图就不是孤立名词，而是一套产品方案。\r
\r
> 图片占位：AI 产品从输入到评估链路图  \r
> 建议文件名：ai-product-input-to-evaluation-flow.png  \r
> 图片用途：展示用户输入、Prompt、上下文、检索、模型生成、工具调用、反馈评估之间的完整链路。  \r
> 生图提示词：生成一张 AI 产品从输入到评估的链路图，包含用户输入、Prompt 模板、Token 与上下文、Embedding 检索、RAG 上下文、大模型生成、Agent 工具调用、日志记录、用户反馈、效果评估等步骤。白色背景，蓝紫渐变，中文标签清晰，16:9，现代科技教育风，无水印。\r
\r
## 方法论\r
\r
完成项目可以按四步走：第一步列出核心概念；第二步为每个概念写产品解释；第三步用一个产品案例串联概念；第四步补充协作问题清单。协作问题清单可以包括：模型选型如何决定，Token 成本如何估算，文档如何切分，权限如何控制，评估集谁来维护，日志记录哪些字段。\r
\r
## 常见误区\r
\r
第一个误区是概念之间没有关系，只像术语表。第二个误区是只写技术定义，不写产品影响。第三个误区是没有案例主线。第四个误区是写得过深，像算法笔记，反而不适合 AI 产品经理作品集。\r
\r
## 本节练习\r
\r
1. 用一句话分别解释 LLM、Prompt、Token、Embedding、RAG、Agent。\r
2. 选择一个 AI 产品，用箭头串起至少 6 个概念。\r
3. 为每个概念写一个产品经理需要问技术团队的问题。\r
\r
## 本节作业\r
\r
完成《AI 产品基础概念地图与能力边界说明》。要求包含概念地图、每个概念的产品解释、一个主线案例、协作问题清单和 5 条你对 AI 产品边界的理解。\r
\r
## 自测题\r
\r
### 题目 1\r
\r
问题：概念地图相比术语表多了什么？  \r
答案：概念之间的关系和产品应用场景。解析：地图要帮助理解系统链路。\r
\r
### 题目 2\r
\r
问题：Prompt 和 Token 有什么关系？  \r
答案：Prompt 会占用 Token，影响上下文长度、成本和速度。解析：长 Prompt 不是无成本的。\r
\r
### 题目 3\r
\r
问题：Embedding 与 RAG 的关系是什么？  \r
答案：Embedding 支撑语义检索，RAG 通常用检索结果增强生成。解析：Embedding 是 RAG 链路的重要环节。\r
\r
### 题目 4\r
\r
问题：Agent 为什么需要日志和权限？  \r
答案：它可能执行真实操作，需要可追溯和可控制。解析：行动能力越强，风险管理越重要。\r
\r
### 题目 5\r
\r
问题：作品集中的 AI 概念说明应避免什么？  \r
答案：避免只背技术定义、不结合产品场景。解析：AI 产品经理要展示应用理解。\r
\r
## 延伸学习\r
\r
下一阶段会进入 AI 产品设计。你将把这些基础能力用于聊天助手、写作产品、图片生成、知识库和 Agent 工作流的具体方案设计。\r
\r
## 本节小结\r
\r
AI 基础概念地图能帮助你把技术名词转化为产品判断。真正的目标不是记住术语，而是知道它们如何影响输入、输出、成本、风险和协作。`,t5=`---
title: AI 基础知识
stage: stage-03-ai-foundation
stageTitle: AI 基础知识
order: 3
difficulty: 进阶
duration: 2 周
lessonCount: 7
tags:
  - 大模型
  - Prompt
  - RAG
  - Agent
objectives:
  - 用产品经理能理解的方式掌握大模型基础
  - 理解 Prompt、Token、Embedding、RAG 和 Agent
  duration: 2 周
  lessonCount: 8
  - AI 概念图
  - Prompt 模板库
  - RAG 流程图
project: AI 概念白皮书与 Prompt 模板库
tools:
    - 理解大模型、Prompt、Token、Embedding、RAG、Agent 和评估
    - 能用产品语言解释 AI 能力和边界
    - 能把 AI 基础知识转化为产品决策和协作问题
  - Claude
    - AI 基础概念图谱
    - Prompt 模板与评估表
    - RAG 和 Agent 流程说明
  project: AI 产品概念地图与能力边界说明
  tools:
    - FigJam
    - Mermaid
    - Markdown
  audience:
    - 不想学算法但需要理解 AI 产品的人
    - 传统产品经理
    - 正在准备 AI 产品经理面试的学习者
audience:
  - 被 AI 概念搞混的新手
  - 想和研发顺畅沟通的产品经理
faqs:
  本阶段帮助你建立 AI 产品经理必须掌握的技术直觉：大模型、Prompt、Token、Embedding、RAG、Agent 和效果评估。这里不会把你训练成算法工程师，也不会深入推导模型结构，而是帮助你理解这些概念如何影响产品设计、需求边界、技术协作、成本和用户体验。

  ## 适合人群

  如果你已经知道“AI 很强”，但说不清模型为什么会编造、为什么上下文会受限制、为什么知识库问答不能只把文档塞进 Prompt、为什么 Agent 需要工具权限和执行日志，本阶段就是为你准备的。你可以把它当成 AI 产品经理的“技术翻译课”。

  ## 学习目标

  学完本阶段，你应该能够：

  1. 用产品语言解释大模型是什么、能做什么、不能做什么。
  2. 设计基础 Prompt 结构，并知道如何测试 Prompt 效果。
  3. 理解 Token、上下文窗口和成本之间的关系。
  4. 解释 Embedding、向量检索和 RAG 如何服务知识库问答。
  5. 区分普通聊天机器人、RAG 产品和 Agent 工作流。
  6. 设计一张 AI 回答质量评估表。
  7. 输出一张 AI 基础概念地图，作为作品集材料。

  ## 学习方法

  每学一个概念，都用三个问题检查自己：它解决什么产品问题？它带来什么边界或风险？产品经理需要和技术团队确认什么？如果你能用这三个问题讲清一个术语，就说明你已经掌握到了产品经理需要的程度。

  ## 课程清单

  1. 大模型基础：理解 LLM 的能力、边界和产品意义。
  2. Prompt 工程：学习结构化提示词和输出控制。
  3. Token 与上下文窗口：理解为什么长文档、成本和速度会影响产品设计。
  4. Embedding 与向量检索：理解语义搜索和知识库底层直觉。
  5. RAG 基础：掌握文档上传、切分、检索、生成和引用流程。
  6. Agent 基础：理解任务拆解、工具调用和执行风险。
  7. AI 效果评估：学会评价回答质量，而不是只凭感觉。
  8. 阶段项目：完成 AI 基础概念地图与能力边界说明。

  ## 阶段成果

  你将产出一份 AI 基础概念地图、一组 Prompt 模板、一份 RAG 流程说明、一份 Agent 工作流说明和一张 AI 输出评估表。它们可以直接放入作品集，用来证明你不仅会使用 AI 工具，还理解 AI 产品落地需要关注的能力边界。

  ## 学习建议

  不要背术语定义。学习每个概念时，都试着把它放到一个产品场景里：客服问答、企业知识库、AI 写作、图片生成、自动化工作流。产品经理需要的不是“我知道这个词”，而是“我知道这个词会影响哪些产品决策”。

  > 图片占位：AI 产品经理基础概念地图  
  > 建议文件名：ai-foundation-concept-map.png  
  > 图片用途：展示 LLM、Prompt、Token、Embedding、RAG、Agent、评估、成本和安全之间的关系。  
  > 生图提示词：生成一张适合课程教学的 AI 产品经理基础概念地图，包含大模型、Prompt、Token、上下文窗口、Embedding、向量数据库、RAG、Agent、Tool Calling、效果评估、成本、安全等节点，并用中文箭头说明关系。白色背景，蓝紫渐变，现代科技教育风，16:9，无水印，无真实品牌 Logo。
    a: 入门阶段不需要推公式，先理解概念如何影响产品设计。
---

# AI 基础知识

本阶段不追求把你训练成算法工程师，而是让你能和研发、算法、业务团队讨论 AI 功能边界。

课程大纲：

1. 大模型基础：模型擅长什么，不擅长什么。
2. Prompt Engineering：如何把任务、上下文、约束和输出格式写清楚。
3. Token 与上下文窗口：为什么长文档、历史对话和成本会互相影响。
4. Embedding 与向量检索：模型如何“找相似内容”。
5. RAG 基础：知识库问答如何减少胡编和知识过期。
6. Agent 基础：什么时候需要工具调用和任务拆解。
7. 阶段项目：完成 AI 概念图与 Prompt 模板库。
`,r5=`---\r
title: AI 聊天助手怎么设计？\r
stage: stage-04-ai-product-design\r
stageTitle: AI 产品设计能力\r
lesson: 1\r
difficulty: 进阶\r
duration: 60 分钟\r
tags:\r
  - AI 聊天助手\r
  - 对话体验\r
  - 上下文\r
objectives:\r
  - 掌握 AI 聊天助手的核心模块\r
  - 理解输入引导、上下文和反馈设计\r
  - 能设计聊天助手 MVP 方案\r
deliverables:\r
  - AI 聊天助手页面结构\r
  - 对话流程与异常状态说明\r
---\r
\r
# AI 聊天助手怎么设计？\r
\r
## 你将学到什么\r
\r
这一节讲最常见的 AI 产品形态：聊天助手。聊天助手不是“一个输入框加模型接口”。真正可用的聊天产品需要场景入口、输入引导、上下文管理、流式输出、追问、重试、反馈、历史、成本和安全策略。学完后，你能设计一个适合职场效率场景的聊天助手 MVP。\r
\r
## 先建立直觉\r
\r
空白输入框看起来自由，但对新手并不友好。用户不知道该问什么、该提供哪些背景、回答好坏如何判断。因此优秀聊天助手通常会提供模板、示例问题、结构化输入和快捷操作。产品经理的任务是让用户更容易表达任务，让模型更容易生成可用输出。\r
\r
## 核心知识\r
\r
AI 聊天助手的核心模块包括：场景模板、对话窗口、输入区、上下文管理、输出操作、历史记录、反馈评价、模型设置和安全提示。模板帮助用户快速开始；对话窗口承载多轮交互；上下文决定模型能看到什么；输出操作包括复制、重新生成、改写、继续追问、导出；反馈评价用于优化 Prompt 和模型。\r
\r
聊天助手还需要状态设计：空状态、生成中、生成成功、生成失败、输入过长、余额不足、敏感内容拦截、网络重试、模型繁忙。没有这些状态，产品在真实使用中会显得脆弱。\r
\r
## AI 产品经理视角\r
\r
设计聊天助手时，要先选择场景，不要一开始做“万能助手”。比如职场助手可以先聚焦周报、会议纪要、文案润色和资料总结。每个场景都有不同输入和输出要求。周报需要任务、数据、风险和计划；会议纪要需要参会人、议题、结论和待办；文案润色需要受众、语气和限制。\r
\r
## 案例拆解\r
\r
一个职场 AI 聊天助手首页可以分成左侧历史记录、中间对话区、底部输入区、右侧模板面板。用户选择“写周报”模板后，输入区展开结构化字段；点击生成后，系统流式输出；回答完成后展示“更正式”“更简洁”“补充风险”“复制”“保存”等操作。反馈按钮让用户标记“不准确”“太空泛”“格式错误”。\r
\r
> 图片占位：AI 聊天助手产品界面结构图  \r
> 建议文件名：ai-chatbot-ui-structure.png  \r
> 图片用途：展示聊天助手模板区、对话区、输入区、历史区、反馈区的布局关系。  \r
> 生图提示词：生成一张 AI 聊天助手产品界面结构图，包含模板面板、对话区域、结构化输入框、流式输出、历史记录、反馈按钮、模型设置等模块。白色背景，蓝紫渐变，现代 SaaS 教育风，中文标签，16:9，无水印，无真实品牌 Logo。\r
\r
## 方法论\r
\r
设计聊天助手可以按五步：明确核心场景，设计输入引导，定义输出结构，补齐异常状态，设计反馈闭环。每个场景都写一份模板说明：适用任务、输入字段、Prompt 结构、输出样式、不可承诺内容和评价指标。\r
\r
## 常见误区\r
\r
第一个误区是把聊天框当成全部产品。第二个误区是不做场景模板，导致用户不会问。第三个误区是不管理上下文，多轮对话成本失控。第四个误区是不收集反馈，无法知道回答质量。第五个误区是没有安全边界，模型可能输出不该输出的内容。\r
\r
## 本节练习\r
\r
1. 为职场聊天助手设计 4 个场景模板。\r
2. 写出一个聊天生成失败时的页面提示和下一步操作。\r
3. 设计 5 个用户反馈选项，用于标记回答问题。\r
\r
## 本节作业\r
\r
完成《AI 聊天助手设计说明》。包含目标用户、场景模板、页面结构、主流程、异常状态、Prompt 结构、指标和迭代计划。\r
\r
## 自测题\r
\r
### 题目 1\r
\r
问题：聊天助手为什么不应该只放一个空白输入框？  \r
答案：新手不知道如何表达任务，输入质量会影响输出质量。解析：模板和示例能降低门槛。\r
\r
### 题目 2\r
\r
问题：聊天助手的输出操作可以有哪些？  \r
答案：复制、重新生成、改写、缩短、继续追问、保存、导出、反馈。解析：这些操作帮助用户完成后续任务。\r
\r
### 题目 3\r
\r
问题：为什么要设计上下文管理？  \r
答案：控制成本、避免超出窗口、减少无关历史干扰。解析：多轮聊天不能无限保留全部历史。\r
\r
### 题目 4\r
\r
问题：用户反馈有什么价值？  \r
答案：帮助定位输出质量问题，优化 Prompt、模型和产品引导。解析：反馈是 AI 产品迭代闭环。\r
\r
### 题目 5\r
\r
问题：聊天助手 MVP 应优先做什么？  \r
答案：聚焦少数高频场景，做好输入、输出、异常和反馈。解析：万能助手不适合早期验证。\r
\r
## 延伸学习\r
\r
下一节学习 AI 写作产品。你会看到当任务从自由聊天变成写作工作流时，产品设计会更强调结构化输入和编辑体验。\r
\r
## 本节小结\r
\r
AI 聊天助手的关键不是聊天框，而是围绕用户任务设计模板、上下文、输出操作、异常状态和反馈闭环。`,l5=`---\r
title: AI 写作产品怎么设计？\r
stage: stage-04-ai-product-design\r
stageTitle: AI 产品设计能力\r
lesson: 2\r
difficulty: 进阶\r
duration: 55 分钟\r
tags:\r
  - AI 写作\r
  - 模板系统\r
  - 编辑体验\r
objectives:\r
  - 理解 AI 写作产品的核心场景\r
  - 掌握结构化输入和编辑工作流设计\r
  - 能设计写作模板和结果操作\r
deliverables:\r
  - AI 写作产品功能清单\r
  - 写作模板与编辑流程说明\r
---\r
\r
# AI 写作产品怎么设计？\r
\r
## 你将学到什么\r
\r
这一节讲 AI 写作产品。写作产品不是简单让模型“生成一段文字”，而是围绕用户从想法、素材、提纲、初稿、改写、校对到发布的流程提供支持。学完后，你能设计一个面向内容运营或职场办公的 AI 写作工作台。\r
\r
## 先建立直觉\r
\r
写作不是一次点击完成。真实用户往往先确定受众和目标，收集素材，写提纲，生成初稿，反复改写，最后检查格式和事实。因此 AI 写作产品要像工作台，而不是只有一个生成按钮。它要帮助用户把模糊想法变成清晰输入，也要让用户方便地编辑和迭代输出。\r
\r
## 核心知识\r
\r
AI 写作产品的核心模块包括：写作场景模板、素材输入、结构化表单、提纲生成、正文生成、段落改写、语气调整、长度控制、事实提醒、版本记录、团队模板和导出。不同用户有不同重点：市场运营关注标题和转化，职场用户关注清晰表达，客服团队关注口径一致，教育用户关注结构和反馈。\r
\r
输出体验同样重要。AI 生成的文字不一定一次可用，产品要提供“继续写”“改得更专业”“缩短一半”“换成口语化”“检查错别字”“生成标题”等快捷操作。\r
\r
## AI 产品经理视角\r
\r
写作产品的核心不是替代用户思考，而是降低从素材到成稿的摩擦。产品经理要决定哪些字段让用户填写，哪些由模型推断，哪些必须用户确认。例如营销文案不能自动编造产品卖点，合同邮件不能承诺未确认折扣，学术内容要提醒核实引用。\r
\r
## 案例拆解\r
\r
设计一个“公众号文章生成”模板时，可以让用户填写主题、目标读者、核心观点、素材要点、语气、篇幅和禁用内容。系统先生成提纲，用户确认后再生成正文。正文中每个段落提供改写、扩写、缩短和调语气按钮。相比一次性生成整篇文章，这种分步设计更可控。\r
\r
> 图片占位：AI 写作工作台流程图  \r
> 建议文件名：ai-writing-workbench-flow.png  \r
> 图片用途：展示从素材输入、提纲生成、正文生成、段落编辑到导出的写作流程。  \r
> 生图提示词：生成一张 AI 写作工作台流程图，包含选择模板、填写素材、生成提纲、确认结构、生成正文、段落改写、版本记录、导出发布等步骤。白色背景，蓝紫渐变，中文标签清晰，16:9，现代教育科技风，无水印。\r
\r
## 方法论\r
\r
写作产品可以用“三段式设计”：生成前帮助用户明确目标和素材；生成中展示进度和结构；生成后提供编辑、改写、校对和导出。每个模板都要写清适用场景、输入字段、输出结构、风险提示和成功指标。\r
\r
## 常见误区\r
\r
第一个误区是只追求生成速度，忽略编辑体验。第二个误区是模板太多但质量不高。第三个误区是让模型编造事实。第四个误区是没有版本记录，用户改坏后无法回退。第五个误区是忽略团队口径，企业写作需要共享模板和审核流程。\r
\r
## 本节练习\r
\r
1. 为 AI 写作产品设计 5 个高频模板。\r
2. 为“产品发布公告”模板写输入字段和输出结构。\r
3. 设计 4 个生成后快捷操作。\r
\r
## 本节作业\r
\r
完成《AI 写作产品设计方案》。包含目标用户、写作流程、模板体系、编辑操作、版本记录、风险提示和指标。\r
\r
## 自测题\r
\r
### 题目 1\r
\r
问题：AI 写作产品为什么需要提纲确认步骤？  \r
答案：先确认结构能降低整篇生成偏题的风险。解析：分步生成更可控。\r
\r
### 题目 2\r
\r
问题：写作模板应包含哪些要素？  \r
答案：适用场景、输入字段、输出结构、语气、限制和示例。解析：模板是 Prompt 产品化的载体。\r
\r
### 题目 3\r
\r
问题：为什么要提供生成后编辑操作？  \r
答案：AI 输出通常需要用户调整才能最终使用。解析：写作是协作过程。\r
\r
### 题目 4\r
\r
问题：AI 写作中最应警惕的风险之一是什么？  \r
答案：编造事实、数据或承诺。解析：产品要提醒用户核实。\r
\r
### 题目 5\r
\r
问题：版本记录有什么价值？  \r
答案：允许用户比较、回退和复用历史结果。解析：提升编辑安全感。\r
\r
## 延伸学习\r
\r
下一节学习 AI 图片生成产品，你会看到多模态产品在参数、队列、素材和商业化上有不同设计重点。\r
\r
## 本节小结\r
\r
AI 写作产品要围绕真实写作流程设计，从输入、提纲、生成、编辑到导出形成闭环，而不是只做“一键生成”。`,a5=`---\r
title: AI 图片生成产品怎么设计？\r
stage: stage-04-ai-product-design\r
stageTitle: AI 产品设计能力\r
lesson: 3\r
difficulty: 进阶\r
duration: 60 分钟\r
tags:\r
  - AI 图片生成\r
  - 多模态产品\r
  - 积分系统\r
objectives:\r
  - 理解 AI 图片生成产品的核心流程\r
  - 掌握 Prompt、参数、队列、素材库和积分设计\r
  - 能识别图片生成产品的风险边界\r
deliverables:\r
  - AI 图片生成产品流程图\r
  - 图片生成参数与积分规则说明\r
---\r
\r
# AI 图片生成产品怎么设计？\r
\r
## 你将学到什么\r
\r
这一节讲 AI 图片生成产品。文生图、图生图和图片编辑看起来很炫，但产品落地要解决提示词门槛、生成不可控、任务等待、素材管理、版权风险和成本扣费。学完后，你能设计一个面向运营或电商素材的 AI 图片平台 MVP。\r
\r
## 先建立直觉\r
\r
图片生成像请设计师出图。你不能只说“给我一张高级的图”，还要说明主体、场景、风格、比例、构图、颜色、用途和禁用元素。AI 图片产品要把这些要求变成用户能理解的表单、模板和参数，而不是让所有用户从零写复杂 Prompt。\r
\r
## 核心知识\r
\r
AI 图片生成产品核心模块包括：模板广场、Prompt 输入、风格选择、尺寸比例、参考图上传、生成数量、异步任务队列、结果预览、放大或重绘、历史记录、素材库、积分扣费和安全审核。由于生成可能耗时，任务状态设计很重要：排队中、生成中、成功、失败、部分失败、退款或补偿。\r
\r
商业化上，图片生成常用积分或按量计费，因为每次生成成本不同。产品经理要设计扣费时机、失败返还、高清放大额外扣费、套餐权益和成本监控。\r
\r
## AI 产品经理视角\r
\r
多模态产品尤其要关注版权和安全边界。产品不能鼓励用户生成真实品牌 Logo、名人肖像、侵权风格或敏感内容。你要设计提示、审核、申诉和素材使用声明。对企业用户，还要考虑生成内容是否可商用、历史素材归属、团队共享和下载权限。\r
\r
## 案例拆解\r
\r
一个电商海报生成平台可以提供“新品主图”“活动横幅”“社媒海报”模板。用户选择模板后填写商品名称、卖点、目标人群、风格和尺寸，系统生成多张候选图。用户可收藏、下载、再次生成或进入编辑。后台记录每次任务的模型、尺寸、耗时、积分和失败原因。\r
\r
> 图片占位：AI 图片生成产品流程图  \r
> 建议文件名：ai-image-generation-product-flow.png  \r
> 图片用途：展示用户从选择模板、填写 Prompt、提交任务、生成结果到保存素材的路径。  \r
> 生图提示词：生成一张 AI 图片生成产品流程图，包含模板选择、Prompt 填写、风格参数、参考图上传、生成队列、结果预览、重试优化、素材库保存、积分扣费等步骤。白色背景，蓝紫渐变，中文标签清晰，16:9，无真实品牌 Logo，无水印。\r
\r
## 方法论\r
\r
设计图片产品可以按“模板化、参数化、队列化、资产化、商业化”五步。模板化降低提示词门槛；参数化让用户控制风格和尺寸；队列化处理异步任务；资产化沉淀历史素材；商业化把成本转成积分和套餐规则。\r
\r
## 常见误区\r
\r
第一个误区是只展示生成按钮，不设计等待和失败。第二个误区是忽略积分返还，失败后用户会强烈不满。第三个误区是没有素材库，用户无法管理成果。第四个误区是没有版权和安全提示。第五个误区是模板缺少行业场景，导致用户仍不会写 Prompt。\r
\r
## 本节练习\r
\r
1. 为 AI 图片平台设计 5 个模板分类。\r
2. 写出一次图片生成任务的状态流转。\r
3. 设计积分扣减和失败返还规则。\r
\r
## 本节作业\r
\r
完成《AI 图片生成平台产品方案》。包含目标用户、模板体系、生成流程、参数面板、任务队列、素材库、积分规则、风险提示和指标。\r
\r
## 自测题\r
\r
### 题目 1\r
\r
问题：AI 图片生成产品为什么需要任务队列？  \r
答案：生成通常是异步耗时任务，需要展示排队、生成、成功和失败状态。解析：队列能改善等待体验。\r
\r
### 题目 2\r
\r
问题：积分系统应处理哪些异常？  \r
答案：生成失败、部分失败、重复扣费、补偿和退款。解析：成本与信任都需要清楚规则。\r
\r
### 题目 3\r
\r
问题：图片模板的价值是什么？  \r
答案：降低 Prompt 门槛，让用户按场景快速生成。解析：模板把专业视觉提示词产品化。\r
\r
### 题目 4\r
\r
问题：AI 图片产品需要哪些风险提示？  \r
答案：版权、肖像、品牌 Logo、敏感内容和商用边界。解析：多模态内容更容易涉及合规风险。\r
\r
### 题目 5\r
\r
问题：素材库有什么产品价值？  \r
答案：保存、复用、管理和团队共享生成结果。解析：素材沉淀能提高留存。\r
\r
## 延伸学习\r
\r
下一节学习知识库问答产品，重点是文档管理、检索、引用和权限。\r
\r
## 本节小结\r
\r
AI 图片生成产品要把复杂 Prompt、异步生成、成本扣费和素材管理设计成完整体验，同时控制版权和安全风险。`,i5=`---\r
title: 知识库问答产品怎么设计？\r
stage: stage-04-ai-product-design\r
stageTitle: AI 产品设计能力\r
lesson: 4\r
difficulty: 进阶\r
duration: 65 分钟\r
tags:\r
  - 知识库问答\r
  - RAG 产品\r
  - 权限设计\r
objectives:\r
  - 掌握知识库问答产品的核心模块\r
  - 理解文档、检索、引用、权限和反馈设计\r
  - 能写出 RAG 产品方案\r
deliverables:\r
  - 知识库问答产品结构图\r
  - RAG 问答体验与权限说明\r
---\r
\r
# 知识库问答产品怎么设计？\r
\r
## 你将学到什么\r
\r
这一节讲企业知识库问答产品。它不是把文档上传后加一个聊天框，而是一个包含知识管理、文档处理、权限控制、问答体验、引用来源、反馈优化和数据看板的系统。学完后，你能设计一个可落地的 RAG 知识库 MVP。\r
\r
## 先建立直觉\r
\r
用户问制度问题时，真正需要的不是“AI 很会聊天”，而是快速得到可信答案，并知道答案来自哪里。如果答案没有引用、文档过期、权限混乱，即使模型说得很流畅，用户也不敢用。因此知识库问答的产品核心是可信和可维护。\r
\r
## 核心知识\r
\r
知识库问答产品包含两端：管理员端和用户端。管理员端负责知识库创建、文档上传、解析状态、分类标签、权限配置、更新记录和质量反馈。用户端负责提问、查看答案、查看引用、继续追问、反馈错误、收藏和转人工。后台还需要日志、评估集、无答案问题和成本统计。\r
\r
权限是企业场景的关键。不同部门、角色、项目可能只能访问不同文档。产品经理要定义知识库权限、文档权限、问答记录权限和管理员权限。\r
\r
## AI 产品经理视角\r
\r
RAG 产品质量不只由模型决定。文档是否清晰、切分是否合理、检索是否命中、Prompt 是否要求引用、答案是否拒答、用户是否反馈，都会影响最终体验。产品经理要把这些环节设计成可运营的流程，而不是一次性配置。\r
\r
## 案例拆解\r
\r
一个公司内部知识库可以支持 HR 制度、财务报销、产品手册和客服话术。员工选择“财务知识库”提问“出差餐补标准”，系统返回答案、引用制度名称和段落，提供“有帮助”“来源不对”“答案过期”反馈。如果检索不到，系统提示未找到依据，并推荐联系财务管理员。\r
\r
> 图片占位：知识库问答产品架构图  \r
> 建议文件名：knowledge-base-product-architecture.png  \r
> 图片用途：展示管理员端、用户端、文档处理、向量检索、模型生成、反馈和指标看板的关系。  \r
> 生图提示词：生成一张知识库问答产品架构图，包含管理员上传文档、文档解析、切分向量化、向量数据库、用户提问、检索生成、引用来源、权限控制、反馈评价、质量看板等模块。白色背景，蓝紫渐变，中文标签清晰，16:9，无水印。\r
\r
## 方法论\r
\r
设计知识库问答可以按“四条线”推进：知识管理线、问答体验线、权限安全线、质量运营线。知识管理确保资料进得来、能更新；问答体验确保用户问得出、看得懂；权限安全确保不泄露；质量运营确保问题能被发现并优化。\r
\r
## 常见误区\r
\r
第一个误区是只重视问答页，不设计管理员端。第二个误区是不展示引用来源。第三个误区是把权限放到后面补，导致架构返工。第四个误区是没有无答案问题列表，知识缺口无法修复。第五个误区是忽略文档更新，旧知识会持续误导用户。\r
\r
## 本节练习\r
\r
1. 为企业知识库设计管理员端功能清单。\r
2. 写出知识库问答的 5 个用户反馈选项。\r
3. 设计一张部门权限矩阵。\r
\r
## 本节作业\r
\r
完成《RAG 知识库问答产品方案》。包含知识库管理、文档处理、权限、问答页、引用、反馈、指标和迭代计划。\r
\r
## 自测题\r
\r
### 题目 1\r
\r
问题：知识库问答产品最重要的体验目标之一是什么？  \r
答案：可信。解析：用户需要知道答案依据和边界。\r
\r
### 题目 2\r
\r
问题：为什么管理员端很重要？  \r
答案：知识需要上传、更新、分类、授权和质量维护。解析：RAG 产品离不开知识运营。\r
\r
### 题目 3\r
\r
问题：无答案问题列表有什么价值？  \r
答案：帮助发现知识缺口和检索问题。解析：它是迭代知识库的重要来源。\r
\r
### 题目 4\r
\r
问题：权限设计应覆盖哪些对象？  \r
答案：知识库、文档、用户角色、问答记录和管理操作。解析：企业场景不能只做页面权限。\r
\r
### 题目 5\r
\r
问题：RAG 答案引用错误可能是什么原因？  \r
答案：文档切分、检索、重排、Prompt 或文档本身问题。解析：需要分层排查。\r
\r
## 延伸学习\r
\r
下一节学习 Agent 工作流产品，重点是从回答问题走向执行任务。\r
\r
## 本节小结\r
\r
知识库问答产品的核心是可信、可控、可维护。产品经理要同时设计知识管理、问答体验、权限安全和质量运营。`,u5=`---\r
title: Agent 工作流产品怎么设计？\r
stage: stage-04-ai-product-design\r
stageTitle: AI 产品设计能力\r
lesson: 5\r
difficulty: 进阶\r
duration: 65 分钟\r
tags:\r
  - Agent 产品\r
  - 工作流\r
  - 工具调用\r
objectives:\r
  - 掌握 Agent 工作流产品的核心设计要点\r
  - 理解任务拆解、工具连接、人工确认和日志\r
  - 能设计一个低风险 Agent MVP\r
deliverables:\r
  - Agent 工作流产品方案\r
  - 工具权限与人工确认规则\r
---\r
\r
# Agent 工作流产品怎么设计？\r
\r
## 你将学到什么\r
\r
这一节讲 Agent 工作流产品。Agent 的价值在于把“理解问题”推进到“完成任务”，但风险也更高，因为它可能读取数据、调用工具、写入系统或触发外部动作。学完后，你能设计一个从建议型开始、逐步走向半自动执行的 Agent 工作流 MVP。\r
\r
## 先建立直觉\r
\r
普通 AI 助手像顾问，给你建议；Agent 像助理，可以按目标拆步骤、查资料、填表、发消息，但关键动作仍需要你确认。一个成熟的 Agent 产品不能只展示“自动完成”，还要让用户看见计划、控制权限、确认执行、查看日志。\r
\r
## 核心知识\r
\r
Agent 工作流产品核心模块包括：目标输入、任务拆解、工具连接、流程编排、人工确认、执行状态、失败重试、日志审计、结果输出和模板复用。工具可以是搜索、文档、邮件、日历、CRM、表格、工单、Webhook。每个工具都需要权限、入参、出参、错误处理和操作边界。\r
\r
工作流设计有两种形态：自然语言目标驱动和可视化流程编排。前者适合轻量任务，后者适合企业可控流程。早期产品可以结合：用户用自然语言描述目标，系统生成可编辑步骤，用户确认后执行。\r
\r
## AI 产品经理视角\r
\r
Agent 产品最重要的是可控。你要设计人工确认节点，例如发送邮件、修改客户状态、扣费、删除数据等操作必须确认；要设计沙箱或预览，让用户先看到将要执行的内容；要记录每一步输入、输出、工具、耗时和错误。\r
\r
## 案例拆解\r
\r
一个“会议后跟进 Agent”可以读取会议纪要，提取待办，生成跟进邮件草稿，创建日历提醒，更新项目表格。MVP 不应直接自动发送邮件，而是先生成草稿并让用户确认。执行完成后展示每一步状态：已提取待办、邮件草稿待确认、日历创建成功、表格更新失败并可重试。\r
\r
> 图片占位：Agent 工作流产品界面图  \r
> 建议文件名：agent-workflow-product-ui.png  \r
> 图片用途：展示目标输入、步骤拆解、工具节点、人工确认、执行日志和结果输出的界面结构。  \r
> 生图提示词：生成一张 Agent 工作流产品界面图，包含目标输入区、任务步骤列表、工具调用节点、人工确认按钮、执行状态、失败重试、日志面板、最终结果输出。白色背景，蓝紫渐变，中文标签，16:9，现代科技 SaaS 风，无水印。\r
\r
## 方法论\r
\r
设计 Agent MVP 可以按“低风险三步”：先做建议型，让 Agent 只生成计划；再做半自动，让 Agent 调工具但关键节点确认；最后在低风险任务上尝试自动执行。每一步都要有权限、日志、失败处理和回滚说明。\r
\r
## 常见误区\r
\r
第一个误区是直接承诺全自动。第二个误区是工具权限过大。第三个误区是用户看不到 Agent 为什么这样做。第四个误区是没有日志，无法排查错误。第五个误区是把不稳定流程强行自动化，反而降低效率。\r
\r
## 本节练习\r
\r
1. 为一个办公 Agent 列出 5 个可调用工具。\r
2. 标记哪些工具操作需要人工确认。\r
3. 设计一个执行失败后的重试和回退流程。\r
\r
## 本节作业\r
\r
完成《Agent 工作流产品方案》。包含目标场景、工具清单、流程编排、权限、人工确认、日志、风险边界和指标。\r
\r
## 自测题\r
\r
### 题目 1\r
\r
问题：Agent 产品和普通聊天助手的核心区别是什么？  \r
答案：Agent 能拆解任务并调用工具执行流程。解析：它从回答走向行动。\r
\r
### 题目 2\r
\r
问题：为什么关键动作需要人工确认？  \r
答案：防止误操作、越权和不可逆损失。解析：确认机制是信任基础。\r
\r
### 题目 3\r
\r
问题：Agent 日志应记录什么？  \r
答案：步骤、工具、入参、出参、状态、耗时、错误和确认人。解析：便于审计和排查。\r
\r
### 题目 4\r
\r
问题：可视化流程编排适合什么场景？  \r
答案：企业中需要稳定、可控、可复用的任务流程。解析：它比纯自然语言更可治理。\r
\r
### 题目 5\r
\r
问题：Agent MVP 为什么建议从建议型或半自动开始？  \r
答案：降低风险，同时验证任务拆解和工具调用价值。解析：全自动需要更高成熟度。\r
\r
## 延伸学习\r
\r
下一节学习如何把这些设计写成 AI 产品需求方案，方便团队评审和开发。\r
\r
## 本节小结\r
\r
Agent 工作流产品的核心是任务自动化与风险控制的平衡。产品经理要设计计划、工具、权限、确认、日志和失败处理。`,o5=`---\r
title: 如何写 AI 产品需求方案？\r
stage: stage-04-ai-product-design\r
stageTitle: AI 产品设计能力\r
lesson: 6\r
difficulty: 进阶\r
duration: 60 分钟\r
tags:\r
  - 需求方案\r
  - AI 产品 PRD\r
  - 方案设计\r
objectives:\r
  - 掌握 AI 产品需求方案的结构\r
  - 能把产品形态、AI 能力和技术协作写清楚\r
  - 理解指标、成本和风险在方案中的位置\r
deliverables:\r
  - AI 产品需求方案大纲\r
  - 一份完整功能方案初稿\r
---\r
\r
# 如何写 AI 产品需求方案？\r
\r
## 你将学到什么\r
\r
这一节把前几节产品形态汇总成可交付的需求方案。AI 产品需求方案不是单纯 PRD，也不是技术方案，而是连接业务目标、用户体验、AI 能力、技术实现和上线评估的协作文档。学完后，你能写出团队能评审、研发能拆解、作品集能展示的方案。\r
\r
## 先建立直觉\r
\r
如果你只写“做一个知识库问答”，每个角色都会按自己的想象理解。业务方以为能回答所有问题，研发以为只做接口，算法以为只负责模型，运营以为上传文档即可。需求方案要把这些想象拉回同一张图：目标是什么，第一版做什么，AI 如何工作，用户如何操作，失败怎么办，上线后看什么。\r
\r
## 核心知识\r
\r
AI 产品需求方案建议包含：项目背景、目标用户、用户场景、问题证据、产品目标、MVP 范围、核心流程、页面结构、AI 能力设计、数据与权限、异常状态、指标体系、成本估算、风险边界、技术协作问题、上线计划和迭代方向。\r
\r
其中 AI 能力设计要写清：使用哪类能力，输入是什么，输出是什么，是否需要 Prompt、RAG、Agent 或多模态，如何评估效果，用户如何反馈。技术协作问题要写给研发和算法看，例如接口、日志、模型切换、权限、数据存储和安全策略。\r
\r
## AI 产品经理视角\r
\r
需求方案要体现取舍。你不能只写“支持所有文档格式、所有问题、所有模型”。成熟方案会写清为什么第一版只支持 PDF 和 Word，为什么先做部门级权限，为什么低置信度拒答，为什么先不支持自动执行。取舍背后要有用户价值、风险和资源依据。\r
\r
## 案例拆解\r
\r
以知识库问答方案为例，背景是内部资料分散；目标是减少制度查询时间；MVP 支持上传 PDF/Word、部门权限、问答引用、反馈；暂不支持表格复杂解析和跨系统同步；AI 能力使用 RAG；指标包括问题解决率、引用点击率、无答案率、反馈错误率、响应时长和单次成本；风险包括过期文档、权限泄露和模型幻觉。\r
\r
## 方法论\r
\r
写方案可以用“从业务到技术的漏斗”：业务目标、用户任务、产品流程、AI 能力、技术依赖、指标验证。每一层都回答上一层的问题。不要从“我们要用 RAG”开始，而要从“用户为什么需要可信问答”开始。\r
\r
> 图片占位：AI 产品需求方案结构图  \r
> 建议文件名：ai-product-requirement-structure.png  \r
> 图片用途：展示背景目标、用户场景、产品流程、AI 能力、技术协作、指标风险和迭代计划的文档结构。  \r
> 生图提示词：生成一张 AI 产品需求方案结构图，包含项目背景、目标用户、MVP 范围、核心流程、页面结构、AI 能力、数据权限、异常状态、指标体系、成本风险、技术协作、迭代计划等模块。白色背景，蓝紫渐变，中文标签，16:9，无水印。\r
\r
## 常见误区\r
\r
第一个误区是方案像广告稿，只写价值不写实现边界。第二个误区是过度技术化，业务方看不懂。第三个误区是不写指标，无法验证效果。第四个误区是不写成本，商业化后容易亏损。第五个误区是不写安全和失败处理。\r
\r
## 本节练习\r
\r
1. 为一个 AI 图片生成产品写 MVP 范围。\r
2. 为知识库问答写 6 个技术协作问题。\r
3. 为 AI 聊天助手写 5 个上线后指标。\r
\r
## 本节作业\r
\r
完成一份《AI 产品需求方案初稿》。选择聊天助手、知识库、图片生成或 Agent 工作流之一，按课程结构写完整方案。\r
\r
## 自测题\r
\r
### 题目 1\r
\r
问题：AI 产品需求方案要连接哪些内容？  \r
答案：业务目标、用户体验、AI 能力、技术实现、指标和风险。解析：它是跨角色协作文档。\r
\r
### 题目 2\r
\r
问题：为什么方案要写“不做什么”？  \r
答案：明确边界，防止范围失控，也方便团队排期。解析：MVP 需要取舍。\r
\r
### 题目 3\r
\r
问题：AI 能力设计应包含哪些内容？  \r
答案：能力类型、输入、输出、Prompt/RAG/Agent 方案、评估和反馈。解析：这些决定实现和体验。\r
\r
### 题目 4\r
\r
问题：为什么要写成本估算？  \r
答案：模型调用成本会影响定价、额度和商业可持续性。解析：AI 功能不是零成本。\r
\r
### 题目 5\r
\r
问题：需求方案应从技术名词开始吗？  \r
答案：不应。解析：应先从用户问题和业务目标开始，再说明为什么需要某种 AI 能力。\r
\r
## 延伸学习\r
\r
下一节进入阶段项目，你将完成一份完整 AI 产品解决方案。\r
\r
## 本节小结\r
\r
AI 产品需求方案要把想法变成可评审、可开发、可验证的方案。它必须同时讲清价值、体验、AI 能力、协作边界和风险。`,s5=`---\r
title: 阶段项目：完成 AI 产品完整解决方案\r
stage: stage-04-ai-product-design\r
stageTitle: AI 产品设计能力\r
lesson: 7\r
difficulty: 进阶\r
duration: 100 分钟\r
tags:\r
  - 阶段项目\r
  - 产品方案\r
  - 作品集\r
objectives:\r
  - 综合设计一个 AI 产品 MVP\r
  - 输出页面、流程、AI 能力、指标和风险方案\r
  - 形成作品集核心项目\r
deliverables:\r
  - AI 产品完整解决方案\r
  - 用户流程与页面结构\r
  - AI 能力和指标设计\r
---\r
\r
# 阶段项目：完成 AI 产品完整解决方案\r
\r
## 你将学到什么\r
\r
这一节要求你完成一个完整 AI 产品解决方案。你可以选择 AI 聊天助手、AI 写作产品、AI 图片生成平台、知识库问答或 Agent 工作流。目标不是写一个完美商业计划，而是把用户问题、页面流程、AI 能力、技术协作、指标和风险整合成一份可展示方案。\r
\r
## 先建立直觉\r
\r
好的 AI 产品方案像一条清楚的链路：用户遇到什么问题，为什么现有方案不够好，第一版怎么解决，用户怎么操作，AI 在哪一步发挥作用，失败时怎么办，上线后如何判断有效。只要链路断了一处，方案就会显得空泛。\r
\r
## 核心知识\r
\r
阶段项目建议包含 12 个部分：项目背景、目标用户、用户痛点、产品目标、MVP 范围、核心功能、页面结构、用户流程、AI 能力设计、数据指标、风险边界、迭代计划。每一部分都要具体到场景，不要写“提升效率”这种空话。\r
\r
例如产品目标可以写：将新员工查制度平均时间从 10 分钟降低到 3 分钟；让 80% 的常见问题能返回带引用答案；把无答案问题沉淀到知识维护列表。这比“提高知识管理体验”更可执行。\r
\r
## AI 产品经理视角\r
\r
作品集要展示你的综合判断。你要说明为什么选择这个场景，为什么第一版做这些功能，为什么采用 Prompt、RAG 或 Agent，为什么设置某些边界，为什么指标这样设计。面试官更想看到你的决策依据，而不是堆满 AI 名词。\r
\r
## 案例拆解\r
\r
如果你选择企业知识库问答，可以把 MVP 设计为：管理员上传制度文档，系统解析和索引；员工选择知识库提问；系统返回带引用答案；用户反馈答案质量；管理员查看无答案问题和错误反馈。暂不做跨系统同步和复杂表格问答。AI 能力是 RAG，风险是幻觉、过期文档和权限泄露，指标是解决率、引用点击率、无答案率、错误反馈率和成本。\r
\r
> 图片占位：AI 产品完整方案画布  \r
> 建议文件名：ai-product-solution-canvas.png  \r
> 图片用途：展示项目背景、用户、场景、MVP、AI 能力、指标、风险和迭代计划的方案画布。  \r
> 生图提示词：生成一张 AI 产品完整方案画布，包含项目背景、目标用户、用户痛点、产品目标、MVP 范围、核心流程、AI 能力、页面结构、数据指标、风险边界、迭代计划等区域。白色背景，蓝紫渐变，中文标签，16:9，无水印。\r
\r
## 方法论\r
\r
完成项目时按“先选场景，再定边界，再画流程，再补指标”的顺序。不要一开始画精美界面。先确认用户问题和 MVP 范围，再设计页面和 AI 能力。最后检查：是否有异常状态，是否有成本和风险，是否有上线后评估方式。\r
\r
## 常见误区\r
\r
第一个误区是项目过大，第一版无法落地。第二个误区是方案只有页面，没有数据和技术协作。第三个误区是只写成功路径。第四个误区是没有说明 AI 能力为什么适合。第五个误区是作品集没有取舍理由。\r
\r
## 本节练习\r
\r
1. 在 5 个 AI 产品方向中选择一个，写出选择理由。\r
2. 为你的项目写 5 条 MVP 做和不做的范围。\r
3. 为项目设计 6 个上线后指标。\r
\r
## 本节作业\r
\r
完成《AI 产品完整解决方案》。内容包括背景、用户、痛点、目标、MVP、功能、页面、流程、AI 能力、技术协作、指标、风险、迭代和作品集展示页。\r
\r
## 自测题\r
\r
### 题目 1\r
\r
问题：阶段项目最重要的能力是什么？  \r
答案：把用户问题、AI 能力、产品体验和指标整合成可执行方案。解析：这是 AI 产品经理的核心能力。\r
\r
### 题目 2\r
\r
问题：为什么不建议一开始画精美 UI？  \r
答案：可能掩盖需求、流程和边界不清的问题。解析：先把方案逻辑跑通更重要。\r
\r
### 题目 3\r
\r
问题：AI 产品方案为什么要写风险边界？  \r
答案：模型不确定、成本、安全和合规都可能影响上线。解析：风险设计是专业度体现。\r
\r
### 题目 4\r
\r
问题：作品集里应展示哪些关键材料？  \r
答案：问题分析、方案取舍、流程、原型、AI 能力、指标和复盘。解析：展示完整产品思维。\r
\r
### 题目 5\r
\r
问题：产品目标为什么要可衡量？  \r
答案：便于上线后判断是否创造价值。解析：不可衡量目标难以驱动迭代。\r
\r
## 延伸学习\r
\r
下一阶段会学习技术协作。你将从产品视角理解 API、模型接入、流式响应、数据库、向量数据库、日志、监控和成本。\r
\r
## 本节小结\r
\r
完整 AI 产品方案要把场景、能力、体验、技术、指标和风险连成一条闭环。完成本项目后，你会拥有作品集中最重要的一类材料：从 0 到 1 的 AI 产品解决方案。`,c5=`---
title: AI 产品设计能力
stage: stage-04-ai-product-design
stageTitle: AI 产品设计能力
order: 4
difficulty: 进阶
duration: 3 周
lessonCount: 7
tags:
  - AI 产品设计
  - 知识库
  - 工作流
objectives:
  - 掌握常见 AI 产品形态的体验设计
  - 能为输入、生成、反馈、失败和迭代设计完整闭环
  - 能写出 AI 产品方案
deliverables:
  - AI 产品方案
  - 关键流程图
  - 效果评估指标
project: 企业知识库问答系统产品方案
tools:
  - Figma
  - Miro
  - Mixpanel
  duration: 2 周
  lessonCount: 7
faqs:
  - q: AI 产品设计最容易漏什么？
    a: 最容易漏失败状态、反馈机制、成本和评估指标。
---

    - 掌握常见 AI 产品形态的设计方法
    - 能设计 AI 产品输入、输出、失败、反馈和成本展示
    - 能写出完整 AI 产品需求方案

    - AI 聊天助手方案
    - 知识库问答产品方案
    - AI 产品需求方案
  project: AI 产品完整方案设计
  tools:
    - Figma
    - FigJam
    - Markdown
  audience:
    - 已掌握产品基础和 AI 基础的学习者
    - 想系统设计 AI 功能的产品经理

课程大纲：

1. AI 聊天助手设计：对话、上下文、模型配置、历史记录。
  本阶段进入具体 AI 产品形态：聊天助手、AI 写作、AI 图片生成、知识库问答、Agent 工作流和 AI 产品需求方案。前面你已经学过产品基本功和 AI 基础，现在要把它们合在一起，设计用户真正能用、团队真正能做、上线后能评估的 AI 产品。

  ## 适合人群

  本阶段适合已经能写基础 PRD、理解大模型和 RAG 概念的学习者。如果你经常看到“AI 助手”“AI 生成”“智能体工作流”，但不知道页面、流程、交互和异常怎么设计，本阶段会把这些产品形态拆开讲。

  ## 学习目标

  学完本阶段，你应该能够：

  1. 设计一个 AI 聊天助手的模板、对话、历史和反馈机制。
  2. 设计 AI 写作产品的输入表单、编辑体验和模板体系。
  3. 设计 AI 图片生成产品的参数、队列、素材库和积分机制。
  4. 设计知识库问答产品的上传、检索、引用、权限和反馈。
  5. 设计 Agent 工作流产品的任务拆解、工具调用和人工确认。
  6. 写出一份包含 AI 能力、交互、指标、成本和风险的产品需求方案。

  ## 学习方法

  每节课都建议你用“页面-流程-规则-指标”四件套学习。页面回答用户在哪里操作；流程回答用户和系统如何走；规则回答成功、失败、边界和权限；指标回答上线后如何判断价值。只要这四件套清楚，AI 产品方案就不会停留在概念层。

  ## 课程清单

  1. AI 聊天助手设计：模板、上下文、追问、反馈和历史。
  2. AI 写作产品设计：从空白框到结构化写作工作台。
  3. AI 图片生成产品设计：Prompt、参数、队列、素材和积分。
  4. 知识库问答产品设计：文档、检索、引用、权限和质量。
  5. Agent 工作流产品设计：任务编排、工具调用、日志和确认。
  6. AI 产品需求设计：把方案写成团队能执行的文档。
  7. 阶段项目：完成 AI 产品完整解决方案。

  ## 阶段成果

  本阶段结束后，你会得到一份完整 AI 产品方案，包括目标用户、核心流程、页面结构、AI 能力、Prompt 或 RAG 设计、异常状态、数据指标、风险边界和迭代计划。它可以作为作品集中的核心项目材料。

  > 图片占位：AI 产品从 0 到 1 设计流程图  
  > 建议文件名：ai-product-design-0-to-1-flow.png  
  > 图片用途：展示从用户场景、AI 能力匹配、页面流程、交互状态、指标评估到迭代的完整设计流程。  
  > 生图提示词：生成一张 AI 产品从 0 到 1 设计流程图，包含用户场景、需求拆解、AI 能力匹配、页面结构、用户流程、输入输出设计、异常处理、数据指标、上线迭代等步骤。白色背景，蓝紫渐变，中文标签清晰，16:9，现代科技教育风，无水印。
3. AI 图片生成产品：参数、队列、积分、版权和素材库。
4. 知识库产品：上传、解析、检索、引用、权限和反馈。
5. Agent 工作流产品：任务拆解、工具调用、人工确认和日志。
6. 阶段项目：完成一个 AI 产品解决方案。
`,f5=`---\r
title: API 和接口文档怎么看？\r
stage: stage-05-technical-collaboration\r
stageTitle: 技术协作能力\r
lesson: 1\r
difficulty: 进阶\r
duration: 50 分钟\r
tags:\r
  - API\r
  - 接口文档\r
  - 技术协作\r
objectives:\r
  - 理解 API、入参、出参和错误码\r
  - 能从接口文档中识别产品影响\r
  - 掌握产品经理需要问的接口问题\r
deliverables:\r
  - API 接口阅读笔记\r
  - AI 功能接口问题清单\r
---\r
\r
# API 和接口文档怎么看？\r
\r
## 你将学到什么\r
\r
这一节帮你读懂基础接口文档。AI 产品经理不需要自己写 API，但必须知道接口如何承接页面操作、模型调用和数据返回。学完后，你能看懂入参、出参、状态码和错误码，并能提出与产品体验相关的问题。\r
\r
## 先建立直觉\r
\r
API 像餐厅点餐窗口。用户在前端点餐，后端把请求传给厨房，厨房做好后返回结果。接口文档就是点餐规则：能点什么、必须填什么、返回什么、出错怎么说。产品经理要关心的是这些规则是否支持用户流程。\r
\r
## 核心知识\r
\r
接口文档通常包含接口地址、请求方法、请求参数、返回字段、错误码、鉴权方式和示例。入参是前端提交给后端的信息，例如用户问题、知识库 ID、模型类型、生成数量。出参是后端返回给前端的信息，例如回答内容、引用来源、任务状态、错误原因。\r
\r
错误码决定用户看到什么提示。比如 401 表示未登录，403 表示无权限，429 表示调用频率超限，500 表示服务异常。产品经理不需要背所有状态码，但要确保错误能被用户理解，并能提供下一步操作。\r
\r
## AI 产品经理视角\r
\r
AI 功能接口通常还涉及模型参数、流式返回、Token 统计、任务 ID、日志 ID 和安全状态。例如聊天接口需要传入消息列表、场景模板、上下文 ID；返回可能是流式内容、最终消息 ID、Token 用量和风险标记。如果这些字段没对齐，后续历史记录、成本统计和反馈都会出问题。\r
\r
## 案例拆解\r
\r
知识库问答接口可能包含：question、knowledgeBaseId、userId、conversationId、topK、stream。返回包括 answer、sources、confidence、messageId、usage、errorCode。产品经理要问：无权限文档会不会被检索？sources 是否包含文档名和段落？confidence 低时前端如何展示？usage 是否能用于成本看板？\r
\r
> 图片占位：AI 问答接口入参与出参示意图  \r
> 建议文件名：ai-qa-api-input-output.png  \r
> 图片用途：帮助新手理解用户问题、知识库 ID、会话 ID、模型参数、回答、引用、错误码和 Token 用量之间的关系。  \r
> 生图提示词：生成一张 AI 问答接口入参与出参示意图，左侧为请求参数：用户问题、知识库 ID、会话 ID、模型、是否流式；右侧为返回字段：回答内容、引用来源、置信度、消息 ID、Token 用量、错误码。白色背景，蓝紫渐变，中文标签清晰，16:9，无水印。\r
\r
## 方法论\r
\r
读接口文档时按五步：看接口解决哪个页面动作；看哪些参数必填；看返回是否支持页面展示；看错误码是否覆盖异常；看日志和指标字段是否齐全。把不清楚的问题整理成接口问题清单，而不是在开发中反复口头问。\r
\r
## 常见误区\r
\r
第一个误区是认为接口文档只属于研发。第二个误区是只看成功返回，不看错误码。第三个误区是接口字段没有业务含义，导致页面无法展示。第四个误区是上线后才发现缺少日志 ID、Token 用量或反馈关联字段。\r
\r
## 本节练习\r
\r
1. 为 AI 聊天接口列出 8 个可能入参。\r
2. 为知识库问答接口列出 6 个返回字段。\r
3. 写出 5 种错误码对应的用户提示。\r
\r
## 本节作业\r
\r
完成《AI 问答接口阅读与问题清单》。要求包含接口用途、入参、出参、错误码、页面影响、日志字段和待确认问题。\r
\r
## 自测题\r
\r
### 题目 1\r
\r
问题：入参是什么？  \r
答案：前端或调用方提交给接口的信息。解析：它决定系统能处理哪些用户输入。\r
\r
### 题目 2\r
\r
问题：出参为什么影响产品体验？  \r
答案：页面展示、状态判断、错误提示和日志都依赖返回字段。解析：出参不全会限制产品功能。\r
\r
### 题目 3\r
\r
问题：AI 接口为什么要返回 Token 用量？  \r
答案：用于成本统计、额度控制和运营分析。解析：AI 调用通常按量产生费用。\r
\r
### 题目 4\r
\r
问题：只看成功返回有什么风险？  \r
答案：上线后异常状态无法正确提示或处理。解析：错误码是体验设计的一部分。\r
\r
### 题目 5\r
\r
问题：产品经理需要写接口代码吗？  \r
答案：不需要，但要能定义业务字段、页面需求和异常处理。解析：这是协作边界。\r
\r
## 延伸学习\r
\r
下一节学习模型接入流程，理解一次 AI 请求如何从页面走到模型服务再返回用户。\r
\r
## 本节小结\r
\r
接口文档是产品与技术协作的重要语言。AI 产品经理要看懂入参、出参、错误码和日志字段，确保接口支持真实用户体验。`,d5=`---\r
title: 模型接入流程如何理解？\r
stage: stage-05-technical-collaboration\r
stageTitle: 技术协作能力\r
lesson: 2\r
difficulty: 进阶\r
duration: 55 分钟\r
tags:\r
  - 模型接入\r
  - 模型服务\r
  - 技术链路\r
objectives:\r
  - 理解模型接入的基本链路\r
  - 知道产品经理需要确认的模型参数和边界\r
  - 能写出模型接入协作问题清单\r
deliverables:\r
  - 模型调用链路说明\r
  - 模型接入问题清单\r
---\r
\r
# 模型接入流程如何理解？\r
\r
## 你将学到什么\r
\r
这一节讲模型如何接入产品。用户在页面输入一句话，背后可能经过前端、后端、鉴权、风控、Prompt 组装、模型服务、日志、数据库和前端渲染。学完后，你能用产品语言描述这条链路，并知道要和技术确认哪些问题。\r
\r
## 先建立直觉\r
\r
模型不是直接住在页面里。页面像前台，后端像调度中心，模型服务像专业能力供应商。前台收集用户需求，调度中心检查权限和参数，调用模型服务生成结果，再把结果记录和返回。产品经理要关心的是每一环是否支撑用户体验。\r
\r
## 核心知识\r
\r
模型接入常见链路：用户提交请求，前端调用后端 API，后端校验登录、权限和额度，组装 Prompt 或检索上下文，调用模型 API，接收返回，记录日志和 Token，用前端展示结果。复杂产品还会加入内容审核、缓存、重试、模型路由和降级策略。\r
\r
需要确认的模型参数包括模型名称、温度、最大输出长度、是否流式、超时时间、重试次数、上下文策略和安全策略。产品经理不一定决定具体值，但要说明产品目标：更稳定还是更有创意，更快还是更完整，更便宜还是更强。\r
\r
## AI 产品经理视角\r
\r
模型接入会影响功能范围和商业化。不同模型能力、成本、速度和安全策略不同。企业产品可能需要模型切换、本地化部署或数据不出域；个人产品更关注体验和成本。产品经理要把这些需求写进协作清单，避免上线前才发现模型限制。\r
\r
## 案例拆解\r
\r
AI 写作产品接入模型时，产品要确认：是否支持长文本输入，生成最长多少字，是否支持流式输出，失败后是否自动重试，是否记录每次生成版本，是否能按模板统计成本，是否能在高峰期降级到便宜模型。每个问题都直接影响页面和运营规则。\r
\r
## 方法论\r
\r
模型接入问题清单可以分为六类：能力、性能、成本、安全、数据、运维。能力看能做什么；性能看响应时长和稳定性；成本看单次调用和预算；安全看敏感内容和隐私；数据看日志和训练/评估用途；运维看失败、限流和模型切换。\r
\r
> 图片占位：大模型调用链路图  \r
> 建议文件名：model-integration-call-chain.png  \r
> 图片用途：展示前端、后端、权限校验、Prompt 组装、模型服务、日志和结果返回的完整链路。  \r
> 生图提示词：生成一张大模型调用链路图，包含用户输入、前端页面、后端 API、权限与额度校验、Prompt 组装、模型服务、内容安全、日志记录、Token 统计、结果返回等步骤。白色背景，蓝紫渐变，中文标签，16:9，无水印。\r
\r
## 常见误区\r
\r
第一个误区是以为选一个强模型就结束。第二个误区是没有考虑超时和限流。第三个误区是忽略模型切换导致输出风格变化。第四个误区是不记录调用日志，问题无法追踪。第五个误区是没有成本上限，增长后费用失控。\r
\r
## 本节练习\r
\r
1. 画出 AI 聊天请求从前端到模型的链路。\r
2. 列出模型接入前需要确认的 10 个问题。\r
3. 为“模型超时”设计降级和提示方案。\r
\r
## 本节作业\r
\r
完成《模型接入协作说明》。包含调用链路、模型参数、成本、日志、安全、超时、限流、重试和模型切换策略。\r
\r
## 自测题\r
\r
### 题目 1\r
\r
问题：模型接入通常是否由前端直接调用模型？  \r
答案：通常不直接调用，而是通过后端管理权限、日志和安全。解析：后端能保护密钥和控制业务规则。\r
\r
### 题目 2\r
\r
问题：温度参数通常影响什么？  \r
答案：输出的随机性和创造性。解析：产品经理只需理解它会影响稳定和发散。\r
\r
### 题目 3\r
\r
问题：为什么要记录模型调用日志？  \r
答案：用于排查问题、统计成本、评估效果和审计风险。解析：上线后没有日志很难迭代。\r
\r
### 题目 4\r
\r
问题：模型切换可能带来什么影响？  \r
答案：输出质量、风格、速度和成本变化。解析：需要测试和灰度。\r
\r
### 题目 5\r
\r
问题：限流是什么产品问题？  \r
答案：高频请求被限制时，用户需要明确提示、重试或升级路径。解析：技术限制会影响体验和商业化。\r
\r
## 延伸学习\r
\r
下一节学习流式响应，它是聊天和生成类产品体验的重要细节。\r
\r
## 本节小结\r
\r
模型接入是从用户请求到模型输出的完整链路。产品经理要关注能力、性能、成本、安全、数据和运维，而不是只问“接哪个模型”。`,m5=`---\r
title: 流式响应为什么影响聊天体验？\r
stage: stage-05-technical-collaboration\r
stageTitle: 技术协作能力\r
lesson: 3\r
difficulty: 进阶\r
duration: 45 分钟\r
tags:\r
  - 流式响应\r
  - 聊天体验\r
  - 生成状态\r
objectives:\r
  - 理解流式响应的产品意义\r
  - 知道流式输出涉及的前后端协作点\r
  - 能设计生成中、停止和失败状态\r
deliverables:\r
  - 流式响应交互说明\r
  - 生成状态与错误处理清单\r
---\r
\r
# 流式响应为什么影响聊天体验？\r
\r
## 你将学到什么\r
\r
这一节讲流式响应。AI 生成可能需要几秒到几十秒，如果用户只能等待一个最终结果，体验会很差。流式响应让内容边生成边显示，用户能感知系统正在工作。学完后，你能说明流式响应的交互价值和协作要求。\r
\r
## 先建立直觉\r
\r
看厨师现场做菜，比盯着空桌等 20 分钟更让人安心。流式输出也是同理。用户看到文字逐步出现，会知道请求已经生效，也能提前判断方向是否正确，必要时停止生成。\r
\r
## 核心知识\r
\r
流式响应指服务端分批返回生成内容，前端逐段渲染。它常用于聊天、写作、代码生成和长回答场景。产品上需要设计：生成中光标、停止按钮、部分内容保存、失败后保留已生成内容、重新生成、继续生成、网络中断提示。\r
\r
技术协作上要确认：接口是否支持 stream，返回数据格式是什么，如何标识结束，如何处理错误，是否能中途取消，取消后是否计费，日志如何记录完整内容，敏感内容如何拦截。\r
\r
## AI 产品经理视角\r
\r
流式响应不是纯技术优化，它影响用户信任和成本。用户如果能中途停止错误方向的生成，可以减少等待和费用。对于长文档总结，流式输出可以先展示结构，再逐段补充。对于客服场景，流式要控制不能先输出错误承诺再撤回，因此可能需要先审核再输出。\r
\r
## 案例拆解\r
\r
AI 聊天助手中，用户点击生成后，输入框进入禁用或可继续输入状态，按钮变为“停止生成”，回答区出现流式内容。若网络中断，系统保留已生成文本并提示“连接中断，可重试或复制已生成内容”。若用户停止，系统记录停止事件和已消耗 Token。\r
\r
> 图片占位：流式响应交互状态图  \r
> 建议文件名：streaming-response-states.png  \r
> 图片用途：展示生成中、停止、成功、失败、中断、继续生成等状态。  \r
> 生图提示词：生成一张流式响应交互状态图，包含用户提交、生成中、逐字输出、停止生成、生成成功、网络中断、模型失败、继续生成、重新生成等状态。白色背景，蓝紫渐变，中文标签清晰，16:9，无水印。\r
\r
## 方法论\r
\r
设计流式体验时问六个问题：多久开始返回第一段？用户能否停止？停止后内容是否保留？失败后如何提示？是否需要重新生成或继续生成？成本如何统计？这些问题写清后，研发才能设计接口，测试才能覆盖状态。\r
\r
## 常见误区\r
\r
第一个误区是只写“支持流式”，不写状态。第二个误区是停止后不保留内容。第三个误区是失败提示过于技术化。第四个误区是没有考虑安全审核与流式输出的冲突。第五个误区是没有记录用户停止行为，无法分析输出质量。\r
\r
## 本节练习\r
\r
1. 为聊天助手设计 5 个生成状态。\r
2. 写出网络中断时的用户提示。\r
3. 设计“停止生成”后的数据记录字段。\r
\r
## 本节作业\r
\r
完成《流式响应交互说明》。包括入口、生成中状态、停止、失败、重试、继续生成、成本统计和日志字段。\r
\r
## 自测题\r
\r
### 题目 1\r
\r
问题：流式响应的核心体验价值是什么？  \r
答案：让用户更早看到反馈，感知系统正在工作。解析：它减少等待焦虑。\r
\r
### 题目 2\r
\r
问题：停止生成后是否一定丢弃已生成内容？  \r
答案：不一定，通常应保留并允许用户复制或继续。解析：保留内容更符合用户利益。\r
\r
### 题目 3\r
\r
问题：流式输出和内容安全可能有什么冲突？  \r
答案：内容边生成边展示，可能来不及整体审核。解析：高风险场景需要前置或分段审核策略。\r
\r
### 题目 4\r
\r
问题：产品经理要和技术确认哪些流式字段？  \r
答案：分片格式、结束标识、错误标识、消息 ID、Token、取消状态。解析：这些影响前端展示和日志。\r
\r
### 题目 5\r
\r
问题：为什么要记录用户停止生成？  \r
答案：可以分析回答方向是否不符合预期或生成过长。解析：这是质量优化信号。\r
\r
## 延伸学习\r
\r
下一节学习数据库和数据结构，理解产品字段、状态和权限如何影响实现。\r
\r
## 本节小结\r
\r
流式响应把 AI 生成从“等待黑箱”变成“可感知过程”。产品经理要设计好生成状态、停止、失败、日志和安全边界。`,h5=`---\r
title: 数据库和数据结构对产品有什么影响？\r
stage: stage-05-technical-collaboration\r
stageTitle: 技术协作能力\r
lesson: 4\r
difficulty: 进阶\r
duration: 50 分钟\r
tags:\r
  - 数据库\r
  - 数据结构\r
  - 产品字段\r
objectives:\r
  - 理解产品字段和数据库之间的关系\r
  - 知道状态、权限、历史记录为什么要提前设计\r
  - 能写出 AI 产品数据字段说明\r
deliverables:\r
  - AI 聊天助手数据字段表\r
  - 状态流转与权限说明\r
---\r
\r
# 数据库和数据结构对产品有什么影响？\r
\r
## 你将学到什么\r
\r
这一节讲数据库和数据结构，但仍然站在产品经理角度。你不需要设计数据库索引，但要知道产品中的用户、会话、消息、文档、任务、积分、反馈和日志都需要被记录。字段设计不清，会直接影响功能、统计和后续迭代。\r
\r
## 先建立直觉\r
\r
产品页面上每一个状态，背后通常都需要数据支持。聊天历史为什么能找回？因为保存了会话和消息。图片任务为什么能显示“生成中”？因为任务有状态字段。用户为什么只能看某些文档？因为有权限关系。产品经理写不清这些数据，研发就只能猜。\r
\r
## 核心知识\r
\r
常见 AI 产品数据对象包括：用户、组织、角色、会话、消息、模板、模型配置、文档、知识库、生成任务、素材、积分、反馈、日志。每个对象都有字段和状态。例如消息可能包含角色、内容、模型、Token、时间、状态、反馈；生成任务可能包含任务 ID、用户 ID、参数、状态、结果 URL、失败原因、扣费金额。\r
\r
数据结构影响功能扩展。早期如果没有记录模板 ID，后续就无法统计哪个模板效果好；没有记录引用来源，用户无法追溯；没有记录反馈类型，模型优化没有依据。\r
\r
## AI 产品经理视角\r
\r
产品经理要写业务字段说明，而不是数据库表设计。你可以告诉研发：“每条 AI 回答需要关联用户、会话、模板、模型、Token、耗时、反馈和错误码”，让研发决定具体表结构。你也要提前说明数据保留周期、隐私要求和导出需求。\r
\r
## 案例拆解\r
\r
AI 图片生成平台至少需要记录任务状态。用户提交后状态是 waiting，开始生成是 processing，成功是 success，失败是 failed，取消是 canceled。每个状态对应不同页面操作：等待中可取消，处理中可查看进度，成功可下载和保存，失败可重试或返还积分。没有状态设计，页面就无法可靠展示。\r
\r
> 图片占位：AI 产品数据对象关系图  \r
> 建议文件名：ai-product-data-objects.png  \r
> 图片用途：展示用户、会话、消息、模板、任务、文档、反馈、日志、积分之间的关系。  \r
> 生图提示词：生成一张 AI 产品数据对象关系图，包含用户、组织、会话、消息、Prompt 模板、模型配置、生成任务、知识库文档、用户反馈、调用日志、积分账户等对象，并用中文箭头说明关系。白色背景，蓝紫渐变，16:9，无水印。\r
\r
## 方法论\r
\r
写数据字段说明时，用“对象-字段-用途-页面-指标”表格。每个字段都要回答为什么需要。比如 Token 用量用于成本统计，模板 ID 用于模板效果分析，错误码用于失败率统计，引用来源用于可信展示。没有用途的字段不要随便加，有用途的字段要提前说。\r
\r
## 常见误区\r
\r
第一个误区是认为数据字段是研发内部事情。第二个误区是只考虑当前页面，不考虑历史、统计和权限。第三个误区是不记录状态变化，导致问题无法追踪。第四个误区是过度收集用户数据，带来隐私风险。第五个误区是没有数据保留和删除规则。\r
\r
## 本节练习\r
\r
1. 为 AI 聊天消息列出 10 个字段和用途。\r
2. 为图片生成任务设计状态流转。\r
3. 为知识库文档设计 5 个权限相关字段。\r
\r
## 本节作业\r
\r
完成《AI 产品数据字段说明》。选择一个项目，列出核心数据对象、字段、用途、页面影响、指标用途和隐私注意事项。\r
\r
## 自测题\r
\r
### 题目 1\r
\r
问题：产品经理需要设计数据库表吗？  \r
答案：通常不需要，但要说明业务对象、字段和用途。解析：这是产品与技术的协作边界。\r
\r
### 题目 2\r
\r
问题：为什么要记录模板 ID？  \r
答案：用于统计模板使用和效果。解析：否则无法知道哪个模板带来价值。\r
\r
### 题目 3\r
\r
问题：状态字段为什么重要？  \r
答案：页面展示、操作权限和异常处理都依赖状态。解析：任务型 AI 产品尤其需要。\r
\r
### 题目 4\r
\r
问题：过度收集数据有什么风险？  \r
答案：隐私、合规和用户信任风险。解析：数据最小化是重要原则。\r
\r
### 题目 5\r
\r
问题：反馈字段可以用于什么？  \r
答案：质量分析、模型优化、Prompt 迭代和客服处理。解析：反馈是 AI 产品闭环数据。\r
\r
## 延伸学习\r
\r
下一节学习向量数据库和 RAG Pipeline，理解知识库问答背后的技术协作链路。\r
\r
## 本节小结\r
\r
数据结构不是纯技术细节，它决定产品能否保存历史、展示状态、统计指标、控制权限和持续迭代。`,p5=`---\r
title: 向量数据库和 RAG Pipeline 如何协作？\r
stage: stage-05-technical-collaboration\r
stageTitle: 技术协作能力\r
lesson: 5\r
difficulty: 进阶\r
duration: 60 分钟\r
tags:\r
  - 向量数据库\r
  - RAG Pipeline\r
  - 知识库技术协作\r
objectives:\r
  - 理解向量数据库在 RAG 中的作用\r
  - 掌握 RAG Pipeline 的产品协作点\r
  - 能写出知识库技术协作问题清单\r
deliverables:\r
  - RAG Pipeline 协作说明\r
  - 知识库技术问题清单\r
---\r
\r
# 向量数据库和 RAG Pipeline 如何协作？\r
\r
## 你将学到什么\r
\r
这一节把 RAG 背后的技术协作链路讲清楚。你不需要部署向量数据库，但要知道文档从上传到可问答，中间经历解析、切分、向量化、入库、检索、重排、上下文组装和生成。学完后，你能和研发、算法、数据团队对齐 RAG Pipeline。\r
\r
## 先建立直觉\r
\r
知识库问答像图书馆问答。管理员先把书分类上架，读者提问时馆员找到相关书页，再组织答案。向量数据库像语义索引系统，RAG Pipeline 像从文档入库到答案生成的一整套流程。任何一环乱了，答案都会受影响。\r
\r
## 核心知识\r
\r
RAG Pipeline 通常分为离线处理和在线问答。离线处理包括文档上传、格式解析、文本清洗、分段切分、Embedding、写入向量库、保存元数据。在线问答包括用户提问、权限过滤、问题向量化、相似检索、重排、上下文拼接、模型生成、引用返回、日志反馈。\r
\r
向量数据库保存向量和元数据。元数据很重要，包括文档 ID、标题、段落、页码、更新时间、权限标签、知识库 ID。没有元数据，答案就无法引用来源，也无法做权限过滤。\r
\r
## AI 产品经理视角\r
\r
产品经理要把 Pipeline 中的业务规则写清。比如文档上传后是否显示解析进度；解析失败谁处理；文档更新后是否自动重新索引；删除文档后向量是否删除；用户没有权限时是否完全不可检索；检索不到时如何拒答；用户反馈错误后是否进入知识维护列表。\r
\r
## 案例拆解\r
\r
客服知识库中，运营上传新的退换货政策，系统解析并切分，生成向量，标记适用渠道和更新时间。客户提问后，系统先按渠道和权限过滤，再检索相关片段，模型生成带引用答案。如果政策更新，旧向量要失效，否则 AI 仍可能回答旧规则。\r
\r
> 图片占位：RAG Pipeline 技术协作图  \r
> 建议文件名：rag-pipeline-collaboration.png  \r
> 图片用途：展示离线文档处理和在线问答两条链路，以及产品需要确认的协作点。  \r
> 生图提示词：生成一张 RAG Pipeline 技术协作图，分为离线处理和在线问答两部分。离线包含文档上传、解析、切分、Embedding、向量库、元数据；在线包含用户提问、权限过滤、检索、重排、上下文组装、模型生成、引用返回、反馈日志。白色背景，蓝紫渐变，中文标签，16:9，无水印。\r
\r
## 方法论\r
\r
写 RAG 协作文档时，按流程列问题：上传支持什么格式，解析多久，切分规则如何，元数据有哪些，权限如何过滤，检索 TopK 和重排如何配置，引用怎么返回，失败如何提示，日志记录什么，反馈如何进入优化。把这些问题逐项确认，比一句“做 RAG”可靠得多。\r
\r
## 常见误区\r
\r
第一个误区是忽略元数据。第二个误区是先检索再做权限过滤，可能泄露信息。第三个误区是文档删除后向量残留。第四个误区是没有解析失败状态。第五个误区是没有评估集，Pipeline 改动后不知道效果变化。\r
\r
## 本节练习\r
\r
1. 写出 RAG 离线处理和在线问答各 5 个步骤。\r
2. 为向量库元数据列出 8 个字段。\r
3. 设计文档解析失败的产品提示和处理流程。\r
\r
## 本节作业\r
\r
完成《RAG Pipeline 技术协作文档》。包含文档处理、向量库元数据、权限过滤、检索策略、引用返回、日志、反馈和评估。\r
\r
## 自测题\r
\r
### 题目 1\r
\r
问题：RAG Pipeline 为什么要分离线和在线？  \r
答案：文档处理可提前完成，问答时快速检索和生成。解析：这样效率更高。\r
\r
### 题目 2\r
\r
问题：向量库元数据有什么作用？  \r
答案：支持引用、权限、过滤、更新和追溯。解析：向量本身不够表达业务语义。\r
\r
### 题目 3\r
\r
问题：权限过滤应在什么时候考虑？  \r
答案：检索前或检索过程中就要考虑，避免无权内容参与回答。解析：不能只在前端隐藏。\r
\r
### 题目 4\r
\r
问题：文档更新后为什么要重新索引？  \r
答案：确保检索到最新内容，避免旧答案。解析：向量索引需要同步更新。\r
\r
### 题目 5\r
\r
问题：RAG 改动后为什么要跑评估集？  \r
答案：验证检索和回答质量是否变好或变差。解析：Pipeline 改动会影响整体效果。\r
\r
## 延伸学习\r
\r
下一节学习日志、监控和成本，理解上线后如何持续发现问题和控制费用。\r
\r
## 本节小结\r
\r
RAG Pipeline 是知识库问答的骨架。产品经理要用业务语言定义文档、权限、元数据、检索、引用、反馈和评估协作点。`,g5=`---\r
title: 日志、监控和成本统计怎么设计？\r
stage: stage-05-technical-collaboration\r
stageTitle: 技术协作能力\r
lesson: 6\r
difficulty: 进阶\r
duration: 55 分钟\r
tags:\r
  - 日志\r
  - 监控\r
  - 模型成本\r
objectives:\r
  - 理解日志、监控和成本对 AI 产品的重要性\r
  - 掌握常见日志字段和监控指标\r
  - 能设计 AI 产品成本看板需求\r
deliverables:\r
  - AI 调用日志字段表\r
  - 成本与质量监控看板说明\r
---\r
\r
# 日志、监控和成本统计怎么设计？\r
\r
## 你将学到什么\r
\r
这一节讲上线后的可观测性。AI 产品上线后，如果没有日志、监控和成本统计，团队很难知道用户在问什么、模型哪里失败、回答质量如何、费用为什么增长。学完后，你能设计一套基础日志和成本看板需求。\r
\r
## 先建立直觉\r
\r
开车需要仪表盘。没有油量、速度和故障提示，你只能凭感觉驾驶。AI 产品也是一样。日志记录每次发生了什么，监控告诉你系统是否健康，成本统计告诉你商业上是否可持续。\r
\r
## 核心知识\r
\r
AI 调用日志常见字段包括：用户 ID、组织 ID、功能场景、会话 ID、消息 ID、模型、Prompt 版本、输入长度、输出长度、Token 用量、响应时长、状态、错误码、引用数量、反馈结果、成本估算。监控指标包括成功率、错误率、平均响应时长、P95 时长、限流次数、超时次数、成本趋势、满意度、重试率。\r
\r
成本统计要按功能、用户、组织、模型、模板和时间维度查看。否则你只知道总账单变高，不知道是哪个功能、哪个客户或哪个模型造成。\r
\r
## AI 产品经理视角\r
\r
日志不是为了监控用户隐私，而是为了改进产品和控制风险。产品经理要和技术、安全团队确认脱敏、保留周期、访问权限和导出限制。不要记录不必要的敏感原文；需要记录时也要有权限和合规说明。\r
\r
## 案例拆解\r
\r
AI 图片生成平台成本突然上涨。若日志完整，你可以看到上涨来自某个高分辨率模板，失败率也升高，原因是用户大量生成 4 张高清图。产品可以调整默认生成数量、增加成本提示、优化失败返还规则。若没有日志，只能猜测。\r
\r
> 图片占位：AI 产品监控与成本看板  \r
> 建议文件名：ai-monitoring-cost-dashboard.png  \r
> 图片用途：展示调用量、成功率、响应时长、Token 成本、错误类型、用户反馈等指标。  \r
> 生图提示词：生成一张 AI 产品监控与成本看板示意图，包含调用量趋势、成功率、平均响应时长、Token 成本、模型成本占比、错误类型、用户反馈、重试率等图表。深色或白色科技风，蓝紫渐变，中文标签清晰，16:9，无真实品牌 Logo，无水印。\r
\r
## 方法论\r
\r
设计看板时按“三层指标”：系统健康、产品效果、商业成本。系统健康看成功率、延迟、错误；产品效果看采纳率、重试率、满意度；商业成本看调用费用、单用户成本、套餐毛利。每个指标都要定义口径和使用者。\r
\r
## 常见误区\r
\r
第一个误区是上线后才想加日志。第二个误区是只看调用量，不看质量和成本。第三个误区是日志字段没有业务维度，无法分析模板或场景。第四个误区是记录过多敏感信息。第五个误区是看板没人看，指标没有对应行动。\r
\r
## 本节练习\r
\r
1. 为聊天助手列出 12 个日志字段。\r
2. 为知识库问答设计 6 个质量指标。\r
3. 设计一个成本异常告警规则。\r
\r
## 本节作业\r
\r
完成《AI 产品日志与成本看板需求》。包含日志字段、指标口径、看板结构、告警规则、权限和数据保留说明。\r
\r
## 自测题\r
\r
### 题目 1\r
\r
问题：为什么 AI 产品必须统计成本？  \r
答案：模型调用通常按量计费，成本会影响定价和毛利。解析：没有成本管理很难商业化。\r
\r
### 题目 2\r
\r
问题：Prompt 版本为什么要记录？  \r
答案：便于比较不同版本效果和排查质量变化。解析：Prompt 是可迭代资产。\r
\r
### 题目 3\r
\r
问题：监控指标应只看系统健康吗？  \r
答案：不是，还要看产品效果和商业成本。解析：AI 产品价值需要综合判断。\r
\r
### 题目 4\r
\r
问题：日志设计为什么要考虑脱敏？  \r
答案：用户输入可能包含敏感信息。解析：数据安全和隐私是基本要求。\r
\r
### 题目 5\r
\r
问题：成本异常告警有什么价值？  \r
答案：及时发现费用失控、滥用或模型异常。解析：AI 成本变化可能很快。\r
\r
## 延伸学习\r
\r
下一节是阶段项目，你将把接口、模型、数据库、RAG、日志和成本整合成技术协作文档。\r
\r
## 本节小结\r
\r
日志、监控和成本统计让 AI 产品上线后可观察、可优化、可控制。产品经理要提前设计字段、指标、看板和告警。`,A5=`---\r
title: 阶段项目：完成 AI 产品技术协作文档\r
stage: stage-05-technical-collaboration\r
stageTitle: 技术协作能力\r
lesson: 7\r
difficulty: 进阶\r
duration: 90 分钟\r
tags:\r
  - 阶段项目\r
  - 技术协作文档\r
  - 上线检查\r
objectives:\r
  - 综合整理 AI 产品技术协作要点\r
  - 输出接口、数据、模型、日志和成本说明\r
  - 形成可用于评审的技术协作文档\r
deliverables:\r
  - AI 产品技术协作文档\r
  - 技术评审问题清单\r
  - 上线检查清单\r
---\r
\r
# 阶段项目：完成 AI 产品技术协作文档\r
\r
## 你将学到什么\r
\r
这一节要求你完成一份 AI 产品技术协作文档。它不是研发设计文档，而是产品经理为了技术评审准备的协作材料。文档要把功能范围、接口、数据、模型、RAG、日志、成本、安全和上线检查讲清楚，让团队知道还有哪些问题需要确认。\r
\r
## 先建立直觉\r
\r
很多 AI 项目延期不是因为团队不会写代码，而是因为前期没问清楚：接口返回什么、失败怎么处理、日志记什么、文档如何更新、成本谁监控、权限怎么控制。技术协作文档的价值就是把这些问题提前摆到桌面上。\r
\r
## 核心知识\r
\r
文档建议包含 10 个部分：项目概述、MVP 范围、核心流程、接口清单、数据对象、模型接入、RAG 或工具调用、异常处理、日志监控成本、安全与权限、上线检查。每部分都要写“已确认”和“待确认”。待确认问题越清楚，评审越高效。\r
\r
接口清单写页面动作对应的接口；数据对象写业务字段；模型接入写模型、参数、流式、超时和降级；日志成本写字段和看板；安全权限写鉴权、敏感内容、数据保留和审计。\r
\r
## AI 产品经理视角\r
\r
技术协作文档要站在产品目标上。不要堆技术名词，而要解释为什么需要这些技术确认。例如“需要记录 Token 用量”不是为了记录而记录，而是为了套餐扣费、成本监控和异常排查。“需要引用来源”是为了提高用户信任和降低幻觉风险。\r
\r
## 案例拆解\r
\r
以知识库问答项目为例，文档中要写：上传文档接口、解析状态接口、问答接口、反馈接口；数据对象包括知识库、文档、片段、会话、消息、反馈；RAG Pipeline 包括切分、向量化、权限过滤、检索、重排和引用；异常包括解析失败、无权限、无答案、模型超时；日志包括问题、知识库、引用、耗时、Token、反馈。\r
\r
> 图片占位：技术协作文档结构图  \r
> 建议文件名：tech-collaboration-doc-structure.png  \r
> 图片用途：展示 AI 产品技术协作文档中接口、数据、模型、日志、成本、安全和上线检查的结构。  \r
> 生图提示词：生成一张 AI 产品技术协作文档结构图，包含项目概述、MVP 范围、接口清单、数据对象、模型接入、RAG Pipeline、异常处理、日志监控、成本统计、安全权限、上线检查等模块。白色背景，蓝紫渐变，中文标签清晰，16:9，无水印。\r
\r
## 方法论\r
\r
完成文档前先选一个项目。建议选择你在 stage-04 做过的 AI 产品方案。按以下顺序写：先画核心链路，再列接口；先列数据对象，再写日志；先写成功路径，再补异常；先写基础能力，再补成本和安全。最后用上线检查清单收尾。\r
\r
## 常见误区\r
\r
第一个误区是技术协作文档写成研发实现方案，产品目标缺失。第二个误区是只写功能，不写日志和成本。第三个误区是待确认问题不明确。第四个误区是安全权限被放到上线前才讨论。第五个误区是没有验收清单。\r
\r
## 本节练习\r
\r
1. 为知识库问答列出 6 个接口。\r
2. 为聊天助手列出 10 个日志字段。\r
3. 写出一次技术评审中必须确认的 8 个问题。\r
\r
## 本节作业\r
\r
完成《AI 产品技术协作文档》。必须包含项目概述、核心流程、接口、数据、模型、RAG 或工具调用、异常、日志、成本、安全、上线检查和待确认问题。\r
\r
## 自测题\r
\r
### 题目 1\r
\r
问题：技术协作文档的主要目的是什么？  \r
答案：帮助产品与技术团队对齐实现边界、风险和待确认问题。解析：它不是替研发写代码。\r
\r
### 题目 2\r
\r
问题：为什么文档中要区分已确认和待确认？  \r
答案：方便评审聚焦未决问题，减少误解。解析：明确状态能提高协作效率。\r
\r
### 题目 3\r
\r
问题：上线检查清单应包含哪些 AI 特有内容？  \r
答案：模型效果、流式响应、日志、成本、权限、安全、反馈和降级。解析：这些影响 AI 产品上线稳定性。\r
\r
### 题目 4\r
\r
问题：技术协作文档是否需要写具体代码实现？  \r
答案：不需要。解析：产品经理写业务规则、字段、流程和验收，具体实现由技术评估。\r
\r
### 题目 5\r
\r
问题：为什么成本要进入技术协作文档？  \r
答案：成本需要通过日志、额度、模型路由和看板来实现管理。解析：它不是纯运营问题。\r
\r
## 延伸学习\r
\r
下一阶段进入真实项目实战，你将用前面学到的内容拆解 6 个完整 AI 产品项目。\r
\r
## 本节小结\r
\r
技术协作文档让 AI 产品从方案走向可开发。它把接口、数据、模型、日志、成本、安全和上线检查放在同一套协作语言里。`,y5=`---\r
title: AI 产品技术协作能力\r
stage: stage-05-technical-collaboration\r
stageTitle: AI 产品技术协作能力\r
order: 5\r
difficulty: 挑战\r
duration: 3 周\r
lessonCount: 7\r
tags:\r
  - API\r
  - 技术协作\r
  - 成本控制\r
objectives:\r
  - 理解 API、模型接入、流式响应、数据库、向量数据库和日志成本\r
  - 能读懂基础接口文档并提出产品问题\r
  - 能写出 AI 产品技术协作文档\r
deliverables:\r
  - 接口字段表\r
  - RAG Pipeline 协作说明\r
  - 技术协作文档\r
project: AI 产品技术协作文档\r
tools:\r
  - Apifox\r
  - Postman\r
  - 飞书文档\r
audience:\r
  - 不写代码但需要和技术团队高效协作的产品经理\r
  - 正在负责 AI 功能落地的学习者\r
faqs:\r
  - q: 产品经理需要会写后端吗？\r
    a: 不一定，但要懂接口、字段、权限、日志、成本和异常。\r
---\r
\r
# AI 产品技术协作能力\r
\r
本阶段让你从“画页面”走向“能和技术团队把 AI 功能做出来”。你会学习 API、模型接入、流式响应、数据库、RAG Pipeline、日志监控和模型成本，并把技术约束写进可评审的产品文档。\r
\r
## 适合人群\r
\r
如果你听到 API、入参、出参、流式响应、数据库、向量库、日志、监控、Token 成本时会紧张，但又知道 AI 产品离不开这些内容，本阶段适合你。你要学会把技术问题翻译成产品影响：用户等多久、能看到什么、出错怎么办、数据是否安全、成本是否可控。\r
\r
## 学习目标\r
\r
学完本阶段，你应该能够：\r
\r
1. 看懂基础接口文档中的入参、出参、错误码和状态码。\r
2. 说明模型接入从前端请求到后端、模型服务、日志记录的链路。\r
3. 解释流式响应为什么影响聊天体验。\r
4. 理解数据库和数据结构如何影响产品功能。\r
5. 描述向量数据库和 RAG Pipeline 的协作流程。\r
6. 设计日志、监控和成本统计需求。\r
7. 写一份 AI 产品技术协作文档。\r
\r
## 学习方法\r
\r
每节课都用“技术概念-产品影响-协作问题-文档写法”的顺序学习。你不需要写接口代码，但要能把需求说到研发可以评估实现、测试可以验收、业务方可以理解风险。\r
\r
## 课程清单\r
\r
1. API 与接口文档：读懂入参、出参、错误码。\r
2. 模型接入流程：理解前端、后端、模型服务和日志。\r
3. 流式响应：为什么聊天产品需要边生成边展示。\r
4. 数据库与数据结构：产品字段、状态和权限如何落库。\r
5. 向量数据库与 RAG Pipeline：文档处理、检索和生成协作。\r
6. 日志、监控与成本：上线后如何发现问题和控制费用。\r
7. 阶段项目：完成 AI 产品技术协作文档。\r
\r
## 阶段成果\r
\r
你将产出一份技术协作文档，包含接口清单、数据字段、模型调用链路、RAG 流程、日志埋点、成本统计、错误处理和上线检查项。它可以证明你能与技术团队高效沟通。\r
\r
> 图片占位：AI 产品技术协作全链路图  \r
> 建议文件名：ai-technical-collaboration-chain.png  \r
> 图片用途：展示用户、前端、后端、模型服务、数据库、向量库、日志监控和成本统计之间的关系。  \r
> 生图提示词：生成一张 AI 产品技术协作全链路图，包含用户请求、前端页面、后端 API、模型服务、数据库、向量数据库、文件存储、日志监控、成本统计、安全审核等模块。白色背景，蓝紫渐变，中文标签清晰，16:9，无水印。`,x5=`---\r
title: 实战项目一：AI 聊天助手产品设计\r
stage: stage-06-real-projects\r
stageTitle: AI 产品实战项目\r
lesson: 1\r
difficulty: 综合\r
duration: 120 分钟\r
tags:\r
  - AI 聊天助手\r
  - Prompt\r
  - 作品集项目\r
objectives:\r
  - 完成 AI 聊天助手项目拆解\r
  - 掌握对话产品的 MVP、页面和指标设计\r
  - 形成作品集项目材料\r
deliverables:\r
  - AI 聊天助手 PRD\r
  - Prompt 模板库\r
  - 指标与技术协作清单\r
---\r
\r
# 实战项目一：AI 聊天助手产品设计\r
\r
## 你将学到什么\r
\r
本项目训练你设计一个面向职场效率的 AI 聊天助手。它不是复制通用聊天工具，而是围绕新人写周报、整理会议纪要、润色文案、总结资料等场景，设计模板化输入、流式输出、多轮追问、历史记录、反馈和成本日志。\r
\r
## 先建立直觉\r
\r
真正的聊天助手要帮助用户“把任务说清楚”。如果只给空白框，新手会问得太宽泛；如果模板设计好，系统能引导用户提供背景、目标和输出格式，模型结果会稳定很多。\r
\r
## 核心知识\r
\r
项目背景可以设定为：公司内部员工使用多个 AI 工具，Prompt 水平不一，历史结果难沉淀，希望做统一 AI 助手。目标用户包括职场新人、运营、产品经理和管理者。痛点包括不会提问、重复写 Prompt、结果格式不统一、历史难找、无法反馈质量。\r
\r
MVP 范围建议包括：场景模板、对话页面、流式输出、历史记录、复制导出、重新生成、反馈评价、基础成本日志。暂不做复杂知识库、自动读取内部系统和 Agent 执行。\r
\r
## AI 产品经理视角\r
\r
核心不是“接一个模型”，而是设计可控对话体验。你要写清 Prompt 模板、上下文保留、输出格式、失败提示、敏感内容拦截、Token 成本、用户反馈和迭代指标。技术协作要确认聊天接口、流式响应、日志字段、模型参数和限流策略。\r
\r
## 案例拆解\r
\r
周报模板的输入字段包括本周事项、数据成果、风险、下周计划和语气。输出结构为本周重点、完成进展、风险阻塞、下周计划。用户可以点击“更简洁”“更正式”“补充风险”。这些快捷操作对应二次 Prompt，而不是重新让用户写一遍。\r
\r
## 方法论\r
\r
项目步骤：定义目标用户和高频场景；完成用户痛点表；确定 MVP；设计页面结构；写 Prompt 模板；定义接口和日志；设计指标；整理作品集。指标可以包括模板使用率、生成完成率、复制率、重试率、满意度、平均响应时长和单次成本。\r
\r
> 图片占位：AI 聊天助手项目总览图  \r
> 建议文件名：ai-chat-assistant-course-overview.png  \r
> 图片用途：展示聊天助手从模板、输入、模型、输出、反馈到日志的产品闭环。  \r
> 生图提示词：生成一张 AI 聊天助手项目总览图，包含场景模板、结构化输入、Prompt 组装、模型调用、流式输出、追问改写、历史保存、反馈评价、成本日志等模块。白色背景，蓝紫渐变，中文标签，16:9，无水印。\r
\r
## 常见误区\r
\r
不要把项目做成万能助手；不要只展示对话页面；不要忽略失败、限流、敏感内容和历史记录；不要只说“提升效率”，要写具体指标；不要把 Prompt 放在作品集最后，而要说明它如何服务产品体验。\r
\r
## 本节练习\r
\r
1. 为聊天助手设计 5 个场景模板和各自输入字段。\r
2. 写出聊天助手 MVP 做与不做各 5 条。\r
3. 设计 8 个日志字段，用于质量和成本分析。\r
\r
## 本节作业\r
\r
完成《AI 聊天助手产品设计》作品集项目。必须包含背景、目标用户、痛点、MVP、页面结构、用户流程、Prompt 模板、技术协作、指标、风险、迭代计划。\r
\r
## 自测题\r
\r
### 题目 1\r
\r
问题：AI 聊天助手 MVP 为什么要聚焦场景模板？  \r
答案：模板降低用户提问门槛，也让模型输出更稳定。解析：空白输入框对新手不友好。\r
\r
### 题目 2\r
\r
问题：聊天助手应记录哪些成本相关数据？  \r
答案：模型、输入输出 Token、响应时长、用户、模板和调用状态。解析：这些字段支持成本看板。\r
\r
### 题目 3\r
\r
问题：为什么要设计重新生成和改写？  \r
答案：AI 输出不一定一次满足需求，二次操作提升可用性。解析：生成后编辑是核心体验。\r
\r
### 题目 4\r
\r
问题：该项目暂不做知识库是否合理？  \r
答案：合理。解析：MVP 先验证对话和模板价值，知识库可作为后续迭代。\r
\r
### 题目 5\r
\r
问题：作品集应如何体现产品思维？  \r
答案：展示用户证据、方案取舍、流程、指标和风险，而不只是页面图。解析：过程比效果图更能证明能力。\r
\r
## 延伸学习\r
\r
建议继续阅读 \`content/projects/chat-assistant.md\` 中的完整项目教程，并把本节产出扩展成详细 PRD。\r
\r
## 本节小结\r
\r
AI 聊天助手是最适合入门的 AI 产品项目。它能训练你把 Prompt、对话体验、技术协作和指标设计合成一个完整方案。`,b5=`---\r
title: 实战项目二：企业知识库问答系统\r
stage: stage-06-real-projects\r
stageTitle: AI 产品实战项目\r
lesson: 2\r
difficulty: 综合\r
duration: 150 分钟\r
tags:\r
  - RAG\r
  - 知识库问答\r
  - 权限设计\r
objectives:\r
  - 完成 RAG 知识库项目拆解\r
  - 掌握文档、检索、引用、权限和质量评估设计\r
  - 形成企业级 AI 产品作品集材料\r
deliverables:\r
  - RAG 知识库 PRD\r
  - 权限矩阵和质量评估表\r
  - 技术协作文档\r
---\r
\r
# 实战项目二：企业知识库问答系统\r
\r
## 你将学到什么\r
\r
本项目训练你设计一个企业知识库问答系统。它能帮助员工快速查询制度、产品资料、客服话术和流程说明。项目重点不是“让 AI 回答”，而是让回答可信、可追溯、可权限控制、可持续维护。\r
\r
## 先建立直觉\r
\r
企业知识库问答像一个有权限的内部图书馆。不同员工能看到不同书，答案必须告诉用户来自哪一页，资料更新后索引要刷新。没有这些设计，模型回答再流畅也难以被企业采用。\r
\r
## 核心知识\r
\r
目标用户包括新员工、一线客服、销售、运营和内部支持团队。痛点包括资料分散、搜索不准、答案无来源、制度更新不及时、不同部门权限不同。MVP 包括知识库创建、文档上传、解析状态、用户问答、引用来源、反馈、部门权限和质量看板。暂不做所有格式解析、复杂表格问答和跨系统自动同步。\r
\r
RAG 能力点包括文档切分、Embedding、向量检索、重排、上下文组装和生成回答。产品要设计管理员端、用户端和运营看板。\r
\r
## AI 产品经理视角\r
\r
技术协作要确认文档格式、文件大小、切分策略、向量库元数据、权限过滤、引用返回、低置信度拒答、日志和评估集。指标包括问题解决率、引用点击率、无答案率、错误反馈率、平均响应时长、单次成本和知识更新时效。\r
\r
## 案例拆解\r
\r
员工问“出差住宿标准是多少”。系统应检索财务制度相关片段，返回结论、制度名称、引用段落和更新时间。如果用户无权访问财务制度，则不能返回相关答案。若检索不到，应提示未找到依据，并引导联系管理员或提交知识缺口。\r
\r
## 方法论\r
\r
按四条线推进：知识管理线负责上传、解析、更新；问答体验线负责提问、引用、追问；权限安全线负责角色和文档范围；质量运营线负责反馈、无答案、评估集和报表。\r
\r
> 图片占位：RAG 知识库项目链路图  \r
> 建议文件名：rag-knowledge-base-course-flow.png  \r
> 图片用途：展示从文档入库到用户问答、引用反馈和质量优化的闭环。  \r
> 生图提示词：生成一张 RAG 知识库项目链路图，包含管理员上传文档、解析切分、Embedding、向量库、权限过滤、用户提问、检索重排、模型生成、引用来源、用户反馈、质量看板等步骤。白色背景，蓝紫渐变，中文标签，16:9，无水印。\r
\r
## 常见误区\r
\r
不要忽略管理员端；不要把引用来源放到后续；不要先检索再前端隐藏无权文档；不要没有无答案列表；不要把所有错误都归因于模型。\r
\r
## 本节练习\r
\r
1. 为知识库问答设计管理员端功能清单。\r
2. 写一张文档权限矩阵。\r
3. 设计 10 个 RAG 评估问题及期望来源。\r
\r
## 本节作业\r
\r
完成《企业知识库问答系统方案》。包含背景、用户、痛点、MVP、管理员端、问答端、RAG 流程、权限、指标、风险和迭代。\r
\r
## 自测题\r
\r
### 题目 1\r
\r
问题：知识库问答为什么必须展示引用？  \r
答案：引用提高可信度并支持追溯。解析：企业场景不能只信模型口头回答。\r
\r
### 题目 2\r
\r
问题：权限过滤应在什么环节考虑？  \r
答案：检索前或检索中就要考虑。解析：不能让无权内容进入上下文。\r
\r
### 题目 3\r
\r
问题：无答案率高可能说明什么？  \r
答案：知识缺失、切分错误、检索问题或用户问题超范围。解析：需要分层排查。\r
\r
### 题目 4\r
\r
问题：RAG 项目为什么需要运营看板？  \r
答案：知识库需要持续维护和质量优化。解析：上传一次文档并不会长期准确。\r
\r
### 题目 5\r
\r
问题：MVP 暂不支持复杂表格问答是否合理？  \r
答案：合理。解析：复杂表格解析难度较高，可后续迭代。\r
\r
## 延伸学习\r
\r
继续阅读 \`content/projects/knowledge-rag.md\`，把本节方案扩展成完整企业项目教程。\r
\r
## 本节小结\r
\r
企业知识库问答是 AI 产品经理最重要的实战项目之一。它能训练你同时处理 RAG、权限、引用、质量和运营闭环。`,v5=`---\r
title: 实战项目三：AI 图片生成平台\r
stage: stage-06-real-projects\r
stageTitle: AI 产品实战项目\r
lesson: 3\r
difficulty: 综合\r
duration: 140 分钟\r
tags:\r
  - AI 图片生成\r
  - 多模态\r
  - 商业化\r
objectives:\r
  - 完成 AI 图片平台项目拆解\r
  - 掌握模板、参数、任务队列、素材库和积分设计\r
  - 理解多模态产品的风险和成本\r
deliverables:\r
  - AI 图片平台 PRD\r
  - 积分系统和模板体系\r
  - 商业化与风险说明\r
---\r
\r
# 实战项目三：AI 图片生成平台\r
\r
## 你将学到什么\r
\r
本项目训练你设计一个面向运营、电商和内容团队的 AI 图片生成平台。它包括文生图、模板系统、参数面板、异步任务、素材库、积分消耗、版权提示和商业化看板。\r
\r
## 先建立直觉\r
\r
图片生成不是让用户写一段玄学 Prompt。产品要把专业视觉表达拆成模板、风格、比例、主体、场景和用途，让不懂设计的人也能生成可用素材。\r
\r
## 核心知识\r
\r
目标用户包括内容运营、电商商家、设计助理和自媒体创作者。痛点包括提示词门槛高、结果不可控、生成等待长、素材难管理、成本不可见、版权边界不清。MVP 可以包含模板广场、文生图、参考图上传、尺寸风格参数、生成队列、历史记录、素材库、积分扣费和失败返还。\r
\r
AI 能力点包括视觉 Prompt、图像生成、多模态输入、安全审核和结果筛选。技术协作重点是异步任务、文件存储、积分扣减、失败补偿、审核和 CDN。\r
\r
## AI 产品经理视角\r
\r
你要设计生成前、生成中、生成后三个阶段。生成前降低输入难度；生成中展示队列状态；生成后支持下载、收藏、重试、放大和变体。商业化上要定义免费额度、套餐、积分单价、高清加价和失败返还。\r
\r
## 案例拆解\r
\r
电商主图模板可以让用户输入商品名称、卖点、目标人群、背景风格和比例。系统生成 4 张候选图，每张消耗积分。若任务失败，不扣积分或自动返还。用户可保存到素材库，并基于某张图继续生成变体。\r
\r
## 方法论\r
\r
按“五层”设计：模板层、参数层、任务层、资产层、商业层。模板层解决不会写 Prompt；参数层控制效果；任务层处理异步；资产层沉淀素材；商业层让成本可持续。\r
\r
> 图片占位：AI 图片平台产品闭环图  \r
> 建议文件名：ai-image-platform-course-loop.png  \r
> 图片用途：展示模板、生成、队列、素材、积分和商业化闭环。  \r
> 生图提示词：生成一张 AI 图片生成平台产品闭环图，包含模板广场、Prompt 表单、风格参数、生成队列、结果预览、素材库、积分扣费、商业化看板等模块。白色背景，蓝紫渐变，中文标签，16:9，无水印。\r
\r
## 常见误区\r
\r
不要只做生成按钮；不要忽略失败返还；不要不写版权提示；不要没有素材库；不要把成本和定价放到最后再想。\r
\r
## 本节练习\r
\r
1. 设计 6 个图片模板分类。\r
2. 写一份生成任务状态机。\r
3. 设计积分扣费、失败返还和套餐权益。\r
\r
## 本节作业\r
\r
完成《AI 图片生成平台方案》。包含用户、痛点、MVP、模板、参数、队列、素材库、积分系统、技术协作、指标、风险和商业化。\r
\r
## 自测题\r
\r
### 题目 1\r
\r
问题：图片生成平台为什么需要异步任务？  \r
答案：生成耗时且可能排队，需要状态展示。解析：同步等待体验差。\r
\r
### 题目 2\r
\r
问题：积分失败返还为什么重要？  \r
答案：它影响用户信任和付费意愿。解析：生成失败不能让用户承担全部损失。\r
\r
### 题目 3\r
\r
问题：模板体系解决什么问题？  \r
答案：降低提示词和视觉表达门槛。解析：用户按场景填写更容易得到可用图。\r
\r
### 题目 4\r
\r
问题：AI 图片产品有哪些风险？  \r
答案：版权、肖像、品牌、敏感内容、成本和不可控结果。解析：多模态产品风险更复杂。\r
\r
### 题目 5\r
\r
问题：素材库为什么能提升留存？  \r
答案：用户的生成资产被沉淀，可复用和管理。解析：资产沉淀增强持续使用。\r
\r
## 延伸学习\r
\r
继续阅读 \`content/projects/image-platform.md\`，完成完整项目教程。\r
\r
## 本节小结\r
\r
AI 图片平台项目能训练你处理多模态输入、异步任务、积分商业化和风险边界，是非常适合作品集的进阶项目。`,D5=`---\r
title: 实战项目四：AI 智能客服系统\r
stage: stage-06-real-projects\r
stageTitle: AI 产品实战项目\r
lesson: 4\r
difficulty: 综合\r
duration: 140 分钟\r
tags:\r
  - 智能客服\r
  - 意图识别\r
  - 人工转接\r
objectives:\r
  - 完成智能客服项目拆解\r
  - 掌握意图路由、知识命中和人工转接设计\r
  - 理解客服质量和风险指标\r
deliverables:\r
  - AI 智能客服产品方案\r
  - 转人工规则和指标看板\r
  - 质检与风险说明\r
---\r
\r
# 实战项目四：AI 智能客服系统\r
\r
## 你将学到什么\r
\r
本项目训练你设计一个 AI 智能客服系统。它不是普通聊天机器人，而是面向售前咨询、售后问题和内部客服团队的业务系统，涉及多渠道接入、意图识别、知识库回答、人工转接、会话摘要、质检和数据看板。\r
\r
## 先建立直觉\r
\r
客服产品的核心不是让 AI 多说话，而是让用户问题更快被解决。能自动回答就自动回答，不能回答就快速转人工，并把上下文带给人工客服。\r
\r
## 核心知识\r
\r
目标用户包括终端客户、人工客服、客服主管和知识运营。痛点包括重复问题多、人工响应慢、答案口径不一致、转接不及时、质检困难。MVP 包括渠道接入、意图识别、知识库问答、置信度判断、人工转接、会话记录、满意度评价和基础报表。\r
\r
AI 能力点包括意图分类、RAG、对话摘要、情绪识别、质检分析。技术协作点包括客服系统集成、会话路由、人工接管状态、权限审计、日志和知识库更新。\r
\r
## AI 产品经理视角\r
\r
客服场景风险更高，因为错误回答可能影响用户权益。产品要定义哪些问题 AI 可以直接回答，哪些必须转人工；要设计低置信度、投诉倾向、退款售后、敏感问题的转接规则；要让人工客服看到用户问题、AI 已答内容和推荐话术。\r
\r
## 案例拆解\r
\r
用户问“我的订单为什么还没发货”。系统识别为订单物流问题，需要调用订单查询或转人工。如果只是 FAQ，可能无法回答个性化状态。MVP 可以先处理通用问题，例如退换货规则、发票流程、使用教程；涉及订单和退款的场景先转人工。\r
\r
## 方法论\r
\r
按“三层客服”设计：第一层 FAQ 自动回答，第二层 AI 辅助人工，第三层主管质检和知识优化。不要一开始追求全自动。指标包括自动解决率、转人工率、平均响应时长、满意度、错误回答率、知识命中率和投诉率。\r
\r
> 图片占位：AI 智能客服服务链路图  \r
> 建议文件名：ai-customer-service-course-flow.png  \r
> 图片用途：展示用户提问、意图识别、知识库回答、低置信转人工、质检和知识优化流程。  \r
> 生图提示词：生成一张 AI 智能客服服务链路图，包含用户咨询、多渠道入口、意图识别、知识库检索、AI 回答、低置信度判断、人工转接、会话摘要、满意度评价、质检看板、知识优化等步骤。白色背景，蓝紫渐变，中文标签，16:9，无水印。\r
\r
## 常见误区\r
\r
不要把客服做成完全自动；不要忽略人工接管；不要没有质检；不要让 AI 承诺退款、赔偿等高风险事项；不要只看自动回复量，要看解决率和满意度。\r
\r
## 本节练习\r
\r
1. 列出 10 个客服意图并标记自动或转人工。\r
2. 设计低置信度转人工规则。\r
3. 设计客服主管看板指标。\r
\r
## 本节作业\r
\r
完成《AI 智能客服系统方案》。包括场景、用户、痛点、MVP、流程、意图路由、知识库、转人工、指标、风险和迭代。\r
\r
## 自测题\r
\r
### 题目 1\r
\r
问题：智能客服最核心的目标是什么？  \r
答案：提升问题解决效率和服务质量。解析：不是让 AI 多回答。\r
\r
### 题目 2\r
\r
问题：哪些场景应优先转人工？  \r
答案：退款赔付、投诉、低置信度、身份敏感和复杂个案。解析：这些场景风险高。\r
\r
### 题目 3\r
\r
问题：人工接管时应带上什么信息？  \r
答案：用户问题、历史会话、AI 已答内容、识别意图和推荐话术。解析：减少重复沟通。\r
\r
### 题目 4\r
\r
问题：自动回复率是否等于成功？  \r
答案：不等于。解析：还要看解决率、满意度和错误率。\r
\r
### 题目 5\r
\r
问题：质检看板有什么作用？  \r
答案：发现答案问题、知识缺口和客服流程风险。解析：客服系统需要持续优化。\r
\r
## 延伸学习\r
\r
继续阅读 \`content/projects/customer-service.md\`，完成完整项目教程。\r
\r
## 本节小结\r
\r
AI 智能客服项目训练你在效率和风险之间做平衡。优秀方案会同时考虑 AI 回答、人工兜底、质检和知识运营。`,k5=`---\r
title: 实战项目五：AI Agent 自动化工作流平台\r
stage: stage-06-real-projects\r
stageTitle: AI 产品实战项目\r
lesson: 5\r
difficulty: 综合\r
duration: 150 分钟\r
tags:\r
  - Agent\r
  - 自动化工作流\r
  - Tool Calling\r
objectives:\r
  - 完成 Agent 工作流项目拆解\r
  - 掌握任务拆解、工具调用、人工确认和日志设计\r
  - 理解执行型 AI 产品的风险控制\r
deliverables:\r
  - Agent 工作流产品方案\r
  - 工具权限表和日志说明\r
  - 风险控制清单\r
---\r
\r
# 实战项目五：AI Agent 自动化工作流平台\r
\r
## 你将学到什么\r
\r
本项目训练你设计一个 AI Agent 自动化工作流平台。它帮助用户把跨工具任务拆成步骤，例如收集资料、生成报告、发送通知、更新表格。重点是工具调用、流程编排、人工确认、执行日志和安全边界。\r
\r
## 先建立直觉\r
\r
Agent 不是更会聊天的机器人，而是能行动的系统。行动能力越强，产品越要可控。用户要看见 Agent 准备做什么、调用什么工具、结果如何、哪里失败、是否需要确认。\r
\r
## 核心知识\r
\r
目标用户包括运营、销售、项目经理和中小团队。痛点包括跨系统复制粘贴、流程重复、任务追踪难、自动化工具门槛高。MVP 可以包含目标输入、步骤拆解、工具连接、流程模板、人工确认节点、执行日志、失败重试和结果导出。暂不做完全自动执行高风险操作。\r
\r
AI 能力点包括任务规划、结构化输出、Tool Calling、上下文管理和执行校验。技术协作要确认工具权限、API 入参出参、Webhook、队列状态、审计日志、沙箱和安全策略。\r
\r
## AI 产品经理视角\r
\r
Agent 项目最重要的是权限和确认。发送邮件、修改客户状态、删除数据、发起支付这类操作必须确认。产品还要提供预览和回滚说明，让用户知道系统不是黑箱。\r
\r
## 案例拆解\r
\r
“竞品周报 Agent”可以接收目标，拆成搜索竞品动态、整理表格、生成摘要、输出报告、发送给团队。MVP 先让 Agent 生成计划和报告草稿，发送动作由用户确认。每一步都记录输入、工具、结果和耗时。\r
\r
## 方法论\r
\r
按“目标-步骤-工具-确认-日志-评估”设计。先选择低风险高频任务，再列工具清单，给每个工具定义权限和错误处理。指标包括任务完成率、人工确认率、执行失败率、平均节省时间、用户撤销率和风险事件数。\r
\r
> 图片占位：Agent 自动化工作流项目图  \r
> 建议文件名：agent-workflow-course-project.png  \r
> 图片用途：展示用户目标、任务拆解、工具调用、人工确认、执行日志和结果输出的项目链路。  \r
> 生图提示词：生成一张 AI Agent 自动化工作流项目图，包含用户目标输入、任务规划、步骤拆解、工具调用、人工确认、执行队列、失败重试、审计日志、最终报告输出等模块。白色背景，蓝紫渐变，中文标签，16:9，无水印。\r
\r
## 常见误区\r
\r
不要把所有任务都自动化；不要给工具过大权限；不要没有日志；不要让用户看不到执行计划；不要忽略失败重试和人工确认。\r
\r
## 本节练习\r
\r
1. 选择一个办公任务，拆成至少 6 个 Agent 步骤。\r
2. 为 5 个工具设计权限和确认规则。\r
3. 写一份执行日志字段表。\r
\r
## 本节作业\r
\r
完成《AI Agent 自动化工作流平台方案》。包含用户、痛点、MVP、流程编排、工具、权限、日志、风险、指标和迭代。\r
\r
## 自测题\r
\r
### 题目 1\r
\r
问题：Agent 工作流平台为什么要有人工确认节点？  \r
答案：真实工具操作可能产生风险。解析：确认机制建立信任。\r
\r
### 题目 2\r
\r
问题：Tool Calling 需要产品经理确认什么？  \r
答案：工具权限、入参出参、错误处理、日志和安全边界。解析：工具调用是产品能力也是风险点。\r
\r
### 题目 3\r
\r
问题：执行日志有什么价值？  \r
答案：追溯过程、排查错误、审计权限和评估效果。解析：Agent 行动必须可见。\r
\r
### 题目 4\r
\r
问题：MVP 为什么不建议做全自动高风险操作？  \r
答案：不确定性和责任风险太高。解析：应先从建议型或半自动开始。\r
\r
### 题目 5\r
\r
问题：Agent 项目的核心指标有哪些？  \r
答案：任务完成率、失败率、人工确认率、节省时间、撤销率和风险事件。解析：既看效率也看安全。\r
\r
## 延伸学习\r
\r
继续阅读 \`content/projects/agent-workflow.md\`，完成完整项目教程。\r
\r
## 本节小结\r
\r
Agent 工作流项目能体现高级 AI 产品能力。它不仅考察你会不会讲 Agent，还考察你能否设计权限、确认、日志和风险控制。`,I5=`---\r
title: 实战项目六：AI 产品官网与商业化落地\r
stage: stage-06-real-projects\r
stageTitle: AI 产品实战项目\r
lesson: 6\r
difficulty: 综合\r
duration: 130 分钟\r
tags:\r
  - 商业化\r
  - 官网转化\r
  - 定价模型\r
objectives:\r
  - 完成 AI 产品商业化项目拆解\r
  - 掌握官网、定价、注册、激活和转化漏斗设计\r
  - 理解订阅、积分和按量计费的产品逻辑\r
deliverables:\r
  - AI SaaS 官网与定价方案\r
  - 转化漏斗和埋点方案\r
  - 商业化复盘材料\r
---\r
\r
# 实战项目六：AI 产品官网与商业化落地\r
\r
## 你将学到什么\r
\r
本项目训练你把一个 AI 产品从功能方案推进到商业化落地。你要设计官网信息架构、产品价值表达、定价套餐、注册试用、用户激活、额度权益、支付订阅和增长漏斗。\r
\r
## 先建立直觉\r
\r
AI 产品不是做完功能就有用户付费。用户需要先理解它解决什么问题，再看到可信案例，再尝试一次核心价值，最后判断价格是否值得。商业化产品经理要设计这条路径。\r
\r
## 核心知识\r
\r
目标用户包括个人创作者、小团队和企业客户。痛点包括价值表达不清、试用路径长、价格权益难理解、注册后不会用、成本与价格不匹配。MVP 包括首页、功能页、定价页、注册登录、免费额度、首次任务引导、套餐权限、支付订阅和埋点漏斗。\r
\r
定价模型可以是订阅、积分、按量计费、团队版席位或混合模式。AI 产品定价必须考虑模型成本、存储成本、失败补偿、免费额度和毛利。\r
\r
## AI 产品经理视角\r
\r
官网不是广告页，而是转化系统。首页要说清目标用户、核心任务和结果；定价页要说清额度、权益、限制和适合人群；新手引导要让用户尽快完成第一次成功生成或问答；埋点要记录访问、注册、首次使用、留存和付费。\r
\r
## 案例拆解\r
\r
AI 图片平台商业化可以设计免费 20 积分，基础版每月固定积分，专业版包含更多高清生成和团队素材库，企业版支持私有模板和成员管理。漏斗指标包括首页访问、注册率、首次生成率、下载率、付费转化率、续费率和单次生成成本。\r
\r
## 方法论\r
\r
按“价值-试用-付费-留存”设计。价值页让用户理解为什么用；试用流程让用户尽快体验核心价值；付费页让权益和价格清楚；留存机制让用户持续回来，例如模板、历史资产、团队协作和额度提醒。\r
\r
> 图片占位：AI SaaS 商业化漏斗图  \r
> 建议文件名：ai-saas-commercialization-course-funnel.png  \r
> 图片用途：展示访问、注册、激活、核心使用、付费、续费和推荐的商业化链路。  \r
> 生图提示词：生成一张 AI SaaS 商业化漏斗图，包含官网访问、价值理解、注册试用、首次生成或问答、激活、付费转化、续费留存、推荐分享等阶段，并标注关键指标。白色背景，蓝紫渐变，中文标签，16:9，无水印。\r
\r
## 常见误区\r
\r
不要把官网写成技术介绍；不要定价只参考竞品而不算成本；不要免费额度过大导致亏损；不要没有首次任务引导；不要只看注册不看激活和留存。\r
\r
## 本节练习\r
\r
1. 为一个 AI 产品设计 3 档套餐。\r
2. 写出官网首屏需要回答的 5 个问题。\r
3. 设计从访问到付费的漏斗指标。\r
\r
## 本节作业\r
\r
完成《AI 产品官网与商业化方案》。包含目标用户、价值表达、页面结构、定价模型、免费额度、注册激活、埋点漏斗、成本测算和迭代计划。\r
\r
## 自测题\r
\r
### 题目 1\r
\r
问题：AI 产品定价为什么必须考虑模型成本？  \r
答案：模型调用按量产生成本，会影响毛利和套餐权益。解析：AI 产品商业化不能只看竞品价格。\r
\r
### 题目 2\r
\r
问题：官网首屏应优先表达什么？  \r
答案：产品为谁解决什么问题，以及用户能得到什么结果。解析：不是堆技术名词。\r
\r
### 题目 3\r
\r
问题：首次任务引导有什么价值？  \r
答案：帮助新用户快速体验核心价值，提高激活。解析：注册不等于真正使用。\r
\r
### 题目 4\r
\r
问题：积分和订阅可以组合吗？  \r
答案：可以。解析：订阅提供周期权益，积分控制按量成本。\r
\r
### 题目 5\r
\r
问题：商业化漏斗应至少看哪些阶段？  \r
答案：访问、注册、激活、核心使用、付费、留存。解析：每个阶段都有优化空间。\r
\r
## 延伸学习\r
\r
继续阅读 \`content/projects/commercial-site.md\`，完成完整商业化项目教程。\r
\r
## 本节小结\r
\r
商业化项目让你从“会做功能”走向“能让产品获得用户和收入”。AI 产品经理需要同时理解价值表达、定价、成本、转化和留存。`,S5=`---\r
title: 阶段项目：整理 AI 产品经理作品集\r
stage: stage-06-real-projects\r
stageTitle: AI 产品实战项目\r
lesson: 7\r
difficulty: 综合\r
duration: 120 分钟\r
tags:\r
  - 作品集\r
  - 项目复盘\r
  - 面试准备\r
objectives:\r
  - 将实战项目整理成作品集\r
  - 学会呈现问题、过程、方案、指标和复盘\r
  - 准备用于面试的项目讲述材料\r
deliverables:\r
  - AI 产品经理作品集页面\r
  - 项目复盘文档\r
  - 面试讲述提纲\r
---\r
\r
# 阶段项目：整理 AI 产品经理作品集\r
\r
## 你将学到什么\r
\r
本节帮助你把前面 6 个项目中的至少 2 个整理成作品集。作品集不是资料堆积，而是证明你能发现问题、拆解需求、设计方案、协作落地、评估结果和复盘迭代。\r
\r
## 先建立直觉\r
\r
面试官看作品集，不是为了看你用了多少 AI 名词，而是判断你是否具备真实产品思维。一个好项目讲述应该让人看到：问题真实、目标清晰、范围合理、方案具体、风险可控、指标可验证。\r
\r
## 核心知识\r
\r
作品集建议结构：个人定位、项目列表、单项目详情、关键产出、复盘总结。单项目详情建议按“背景-用户-问题-目标-MVP-方案-流程-AI 能力-技术协作-指标-风险-迭代-反思”呈现。\r
\r
不要只放最终页面。要放用户调研摘要、需求分析表、竞品结论、流程图、PRD 大纲、Prompt 或 RAG 设计、指标表和复盘。这样才能证明你完成了完整产品过程。\r
\r
## AI 产品经理视角\r
\r
AI 项目作品集必须体现 AI 特有判断：为什么用 AI，模型负责哪一步，输入输出怎么设计，幻觉和安全如何处理，成本如何控制，效果如何评估。没有这些内容，作品集只是普通产品项目加了 AI 标签。\r
\r
## 案例拆解\r
\r
以 RAG 知识库项目为例，作品集可以展示：企业资料分散的背景，员工查制度痛点，MVP 只做制度问答，RAG 流程图，权限矩阵，问答页面原型，引用来源设计，质量指标表，风险和迭代。最后用一页复盘写清你学到了什么。\r
\r
> 图片占位：AI 产品经理作品集结构图  \r
> 建议文件名：ai-pm-portfolio-structure.png  \r
> 图片用途：展示作品集从个人定位、项目列表到单项目详情和复盘的组织方式。  \r
> 生图提示词：生成一张 AI 产品经理作品集结构图，包含个人定位、能力地图、项目列表、项目背景、用户痛点、方案设计、AI 能力、技术协作、指标验证、复盘总结、面试讲述等模块。白色背景，蓝紫渐变，中文标签，16:9，无水印。\r
\r
## 方法论\r
\r
整理作品集按四步：筛选项目，补齐证据，压缩表达，准备讲述。每个项目控制在 6 到 10 页或一个清晰页面内。讲述时用 3 分钟版本和 10 分钟版本，避免面试时散讲。\r
\r
## 常见误区\r
\r
第一个误区是页面太多但主线不清。第二个误区是只展示成果不展示取舍。第三个误区是没有 AI 能力边界。第四个误区是复盘只写“收获很多”。第五个误区是项目没有指标。\r
\r
## 本节练习\r
\r
1. 选择 2 个项目，写出它们最能体现的能力。\r
2. 为其中一个项目写 3 分钟讲述提纲。\r
3. 检查作品集中是否包含 AI 能力、风险和指标。\r
\r
## 本节作业\r
\r
完成《AI 产品经理作品集》。至少包含 2 个完整项目，每个项目有背景、用户、痛点、目标、方案、流程、AI 能力、技术协作、指标、风险和复盘。\r
\r
## 自测题\r
\r
### 题目 1\r
\r
问题：作品集最应该证明什么？  \r
答案：证明你具备完整产品思维和 AI 产品落地判断。解析：不是展示资料堆积。\r
\r
### 题目 2\r
\r
问题：AI 项目作品集必须体现哪些 AI 特有内容？  \r
答案：AI 能力、输入输出、边界风险、成本和效果评估。解析：否则只是普通项目。\r
\r
### 题目 3\r
\r
问题：为什么要准备 3 分钟版本讲述？  \r
答案：面试时间有限，需要快速讲清主线。解析：长篇散讲会降低表达效果。\r
\r
### 题目 4\r
\r
问题：复盘应该写什么？  \r
答案：目标达成、问题、取舍、数据、改进和下一步。解析：不要只写空泛心得。\r
\r
### 题目 5\r
\r
问题：作品集是否需要真实商业数据？  \r
答案：不需要，也不应使用敏感数据。解析：可以使用合理假设和公开场景。\r
\r
## 延伸学习\r
\r
下一阶段进入高阶 AI 产品经理能力，学习商业化、增长、数据、成本、风险合规、面试和职业发展。\r
\r
## 本节小结\r
\r
作品集是你从学习者走向求职者的重要桥梁。好的 AI 产品经理作品集要讲清问题、方案、AI 能力、指标和复盘，让别人相信你能真正负责项目。`,E5=`---\r
title: AI 产品实战项目\r
stage: stage-06-real-projects\r
stageTitle: AI 产品实战项目\r
order: 6\r
difficulty: 综合\r
duration: 4-6 周\r
lessonCount: 7\r
tags:\r
  - 项目实战\r
  - 作品集\r
  - AI 应用\r
objectives:\r
  - 完成 6 类典型 AI 产品项目拆解\r
  - 掌握从背景、用户、MVP、页面、AI 能力到指标的项目方法\r
  - 形成可用于求职和开源展示的作品集材料\r
deliverables:\r
  - AI 聊天助手项目方案\r
  - RAG 知识库项目方案\r
  - AI 产品经理作品集\r
project: AI 产品经理作品集\r
tools:\r
  - Figma\r
  - FigJam\r
  - Markdown\r
  - 表格工具\r
audience:\r
  - 已完成前五阶段学习的学习者\r
  - 准备作品集和面试的 AI 产品经理候选人\r
faqs:\r
  - q: 项目必须上线吗？\r
    a: 不必须。更关键的是问题定义、方案完整度、验证过程和复盘。\r
---\r
\r
# AI 产品实战项目\r
\r
本阶段通过完整项目把前面的能力串起来：聊天助手、RAG 知识库、AI 图片平台、智能客服、Agent 工作流和商业化落地。你不需要真的写代码上线，但要把每个项目拆到产品经理可以交付的程度：背景、用户、痛点、目标、MVP、页面、流程、AI 能力、技术协作、指标、风险、迭代和作品集。\r
\r
## 适合人群\r
\r
本阶段适合已经完成产品基础、AI 基础、AI 产品设计和技术协作学习的人。如果你要准备 AI 产品经理面试，至少应该完整做完其中 2 个项目，并把过程整理成作品集。\r
\r
## 学习目标\r
\r
学完本阶段，你应该能够：\r
\r
1. 从 0 到 1 拆解一个 AI 产品项目。\r
2. 说明项目解决什么问题、服务谁、为什么现在值得做。\r
3. 定义 MVP 做什么、不做什么。\r
4. 画出页面结构和用户流程。\r
5. 说明使用 Prompt、RAG、Agent、多模态或商业化能力的原因。\r
6. 写出技术协作点、数据指标、风险边界和迭代路线。\r
7. 整理成能被面试官看懂的作品集材料。\r
\r
## 课程清单\r
\r
1. AI 聊天助手产品设计：适合作为入门作品集项目。\r
2. 企业知识库问答系统：重点训练 RAG、权限和质量评估。\r
3. AI 图片生成平台：重点训练多模态、任务队列、积分和商业化。\r
4. AI 智能客服系统：重点训练意图识别、知识命中和人工转接。\r
5. AI Agent 自动化工作流平台：重点训练工具调用、编排和风控。\r
6. AI 产品官网与商业化落地：重点训练定价、转化、增长和漏斗。\r
7. 阶段项目：整理完整 AI 产品经理作品集。\r
\r
## 学习建议\r
\r
每个项目不要只写介绍。你要像真正接到需求一样推进：先调研和拆痛点，再定 MVP，再写功能和流程，再补 AI 能力、技术问题、指标和风险。项目做得越具体，作品集越可信。\r
\r
## 阶段成果\r
\r
你将完成多个项目方案，并从中选择 2 到 3 个整理成作品集。优秀作品集要展示问题定义、方案取舍、AI 能力边界、技术协作、指标体系和项目复盘，而不是只展示页面截图。\r
\r
> 图片占位：AI 产品实战项目矩阵图  \r
> 建议文件名：ai-real-projects-matrix.png  \r
> 图片用途：展示 6 个实战项目对应的核心能力、AI 技术和作品集产出。  \r
> 生图提示词：生成一张 AI 产品实战项目矩阵图，包含 AI 聊天助手、企业知识库问答、AI 图片生成平台、AI 智能客服、AI Agent 工作流、AI 产品商业化六个项目，并标注 Prompt、RAG、Embedding、Agent、流式输出、积分定价、指标分析等能力。白色背景，蓝紫渐变，中文标签，16:9，无水印。`,C5=`---\r
title: AI 产品如何商业化？\r
stage: stage-07-advanced-ai-pm\r
stageTitle: 高阶 AI 产品经理能力\r
lesson: 1\r
difficulty: 进阶\r
duration: 60 分钟\r
tags:\r
  - 商业化\r
  - 定价\r
  - 订阅\r
objectives:\r
  - 理解 AI 产品常见商业模式\r
  - 掌握订阅、积分、按量计费和团队版的适用场景\r
  - 能设计基础商业化方案\r
deliverables:\r
  - AI 产品商业化方案\r
  - 套餐权益与成本测算表\r
---\r
\r
# AI 产品如何商业化？\r
\r
## 你将学到什么\r
\r
这一节讲 AI 产品商业化。AI 产品的商业化不能只照抄 SaaS 定价，因为模型调用、图片生成、向量检索和 Agent 执行都会产生变动成本。学完后，你能设计订阅、积分、按量计费和团队版方案，并知道如何把成本、权益和用户价值对应起来。\r
\r
## 先建立直觉\r
\r
传统软件卖功能，AI 产品还要卖“使用额度”。同样是一个会员，用户每生成一张图、问一次知识库、跑一次 Agent，都可能产生成本。定价太低会亏损，限制太严用户体验差。商业化的关键是让用户觉得价值清楚，同时让公司成本可控。\r
\r
## 核心知识\r
\r
常见模式包括：订阅制、积分制、按量计费、团队席位、企业定制和混合模式。订阅适合持续使用的效率工具；积分适合单次成本差异大的生成类产品；按量计费适合 API 或高频企业调用；团队版适合协作、权限和管理需求；企业版适合安全、私有化、发票和服务。\r
\r
AI 定价要考虑模型成本、存储成本、带宽、人工审核、失败补偿、免费额度和毛利。不能只看竞品价格，还要测算用户平均使用量和高频用户成本。\r
\r
## AI 产品经理视角\r
\r
商业化方案要从用户价值出发。个人用户关心能不能快速完成任务，小团队关心协作和成本，企业用户关心安全、权限和稳定性。套餐权益要围绕这些差异设计，而不是简单把“调用次数”分三档。\r
\r
## 案例拆解\r
\r
AI 图片平台可以设计免费版每月 20 积分，专业版每月 500 积分和高清下载，团队版包含成员管理和共享素材库，企业版提供品牌模板和专属支持。若单张普通图成本 0.05 元，高清图成本更高，就要设计高清额外扣积分和失败返还规则。\r
\r
> 图片占位：AI 产品商业化定价模型图  \r
> 建议文件名：ai-commercialization-pricing-model.png  \r
> 图片用途：展示订阅、积分、按量计费、团队版和企业版的适用关系。  \r
> 生图提示词：生成一张 AI 产品商业化定价模型图，包含订阅制、积分制、按量计费、团队席位、企业版、免费额度、成本、毛利等元素。白色背景，蓝紫渐变，中文标签清晰，16:9，无水印。\r
\r
## 方法论\r
\r
设计商业化方案按五步：确定用户分层，定义核心价值，估算成本，设计套餐权益，设置转化和留存指标。每档套餐都要回答适合谁、解决什么问题、额度多少、限制是什么、升级理由是什么。\r
\r
## 常见误区\r
\r
第一个误区是免费额度过大，增长越快亏损越多。第二个误区是套餐权益太复杂，用户看不懂。第三个误区是只看收入不看毛利。第四个误区是不处理失败补偿。第五个误区是企业版只写“联系我们”，没有明确价值。\r
\r
## 本节练习\r
\r
1. 为一个 AI 写作产品设计免费版、专业版和团队版。\r
2. 写出每档套餐的目标用户和升级理由。\r
3. 估算一次核心 AI 调用的成本构成。\r
\r
## 本节作业\r
\r
完成《AI 产品商业化方案》。包含用户分层、定价模型、套餐权益、免费额度、成本测算、升级路径和风险。\r
\r
## 自测题\r
\r
### 题目 1\r
\r
问题：AI 产品商业化为什么必须考虑调用成本？  \r
答案：每次生成或问答都可能产生成本，影响毛利。解析：AI 产品不是零边际成本。\r
\r
### 题目 2\r
\r
问题：积分制适合什么产品？  \r
答案：单次成本差异明显、按次生成或调用的产品。解析：图片生成常见积分制。\r
\r
### 题目 3\r
\r
问题：团队版应提供什么价值？  \r
答案：成员管理、共享资产、权限、协作和管理看板。解析：不能只是个人版涨价。\r
\r
### 题目 4\r
\r
问题：失败补偿为什么重要？  \r
答案：生成失败仍扣费会损害信任。解析：商业化规则影响用户付费意愿。\r
\r
### 题目 5\r
\r
问题：企业版为什么要强调安全和服务？  \r
答案：企业客户关注数据、权限、稳定性和支持。解析：这和个人用户价值不同。\r
\r
## 延伸学习\r
\r
下一节学习增长和留存，理解用户从注册到持续使用的路径。\r
\r
## 本节小结\r
\r
AI 产品商业化要把用户价值、成本结构和套餐权益对齐。成熟产品经理不只设计价格，还要设计额度、升级、补偿和毛利。`,w5=`---\r
title: AI 产品如何做增长和留存？\r
stage: stage-07-advanced-ai-pm\r
stageTitle: 高阶 AI 产品经理能力\r
lesson: 2\r
difficulty: 进阶\r
duration: 55 分钟\r
tags:\r
  - 增长\r
  - 留存\r
  - 激活\r
objectives:\r
  - 理解 AI 产品增长漏斗\r
  - 掌握首次价值和留存机制设计\r
  - 能设计增长实验和指标\r
deliverables:\r
  - AI 产品增长漏斗\r
  - 激活与留存方案\r
---\r
\r
# AI 产品如何做增长和留存？\r
\r
## 你将学到什么\r
\r
这一节讲增长和留存。AI 产品早期常有好奇用户，但好奇不等于留存。用户第一次生成觉得新鲜，第二天是否还回来，取决于产品是否融入真实任务。学完后，你能设计访问、注册、激活、核心使用、付费和留存漏斗。\r
\r
## 先建立直觉\r
\r
用户不是为了“体验 AI”长期留下，而是为了持续完成任务。AI 写作产品要让用户每周都能写更快，知识库产品要让员工每次查资料都信任，图片平台要让运营持续沉淀素材。留存来自稳定价值，而不是一次惊艳演示。\r
\r
## 核心知识\r
\r
增长漏斗通常包括：获客、注册、激活、核心行为、付费、留存、推荐。AI 产品的激活点要具体，例如完成首次问答并点击引用、生成图片并保存、运行 Agent 并完成任务。核心行为要和价值绑定，而不是简单登录。\r
\r
留存机制包括模板、历史、资产沉淀、团队协作、额度提醒、场景推荐、工作流集成和反馈优化。AI 产品如果每次都从空白开始，留存会很弱；如果用户的模板、知识库、素材和流程持续沉淀，迁移成本会提高。\r
\r
## AI 产品经理视角\r
\r
增长不能靠夸张宣传。AI 产品如果承诺过度，用户首次体验落差会很大。更好的方式是选择明确场景，给出示例输入，让用户快速完成一次真实任务。然后通过历史、模板和下一步建议把用户带回。\r
\r
## 案例拆解\r
\r
AI 图片平台的激活点不是注册，而是“生成并保存第一张可用图片”。为提高激活，可以在注册后直接推荐 3 个模板，让用户用示例快速生成；生成成功后引导保存到素材库；第二天通过最近模板和未完成任务提醒用户回来。\r
\r
> 图片占位：AI 产品增长漏斗图  \r
> 建议文件名：ai-product-growth-funnel.png  \r
> 图片用途：展示获客、注册、激活、核心使用、付费、留存和推荐阶段。  \r
> 生图提示词：生成一张 AI 产品增长漏斗图，包含访问、注册、首次成功、核心使用、付费转化、留存、推荐分享等阶段，并标注 AI 产品示例指标。白色背景，蓝紫渐变，中文标签，16:9，无水印。\r
\r
## 方法论\r
\r
做增长实验时先定义一个假设。例如“结构化模板能提升首次生成成功率”。然后定义实验人群、改动内容、成功指标和观察周期。不要同时改太多变量。增长实验要关注长期留存，不只看短期点击。\r
\r
## 常见误区\r
\r
第一个误区是把注册当成成功。第二个误区是追热点功能，忽略核心任务。第三个误区是用夸张文案吸引用户，导致体验落差。第四个误区是只看新增，不看留存和成本。第五个误区是没有区分用户分层。\r
\r
## 本节练习\r
\r
1. 为知识库问答定义激活事件。\r
2. 设计一个提升 AI 写作产品留存的机制。\r
3. 写一个增长实验假设和成功指标。\r
\r
## 本节作业\r
\r
完成《AI 产品增长与留存方案》。包含漏斗、激活事件、核心行为、留存机制、增长实验和指标看板。\r
\r
## 自测题\r
\r
### 题目 1\r
\r
问题：AI 产品的激活点应该如何定义？  \r
答案：用户完成一次能感知价值的核心任务。解析：注册或访问不等于激活。\r
\r
### 题目 2\r
\r
问题：为什么模板能提升留存？  \r
答案：模板降低重复使用成本，并让用户形成工作习惯。解析：复用机制增强持续价值。\r
\r
### 题目 3\r
\r
问题：增长实验为什么要有假设？  \r
答案：明确改动目标和判断标准，避免随意尝试。解析：实验需要可验证。\r
\r
### 题目 4\r
\r
问题：只看新增用户有什么风险？  \r
答案：可能新增很多但留不住，成本也不可控。解析：增长要看质量。\r
\r
### 题目 5\r
\r
问题：AI 产品推荐分享适合什么时候做？  \r
答案：当用户已经获得明确价值并愿意展示成果时。解析：没有核心价值，分享很难持续。\r
\r
## 延伸学习\r
\r
下一节学习数据指标体系，把增长、效果、质量、成本和风险放到同一张看板里。\r
\r
## 本节小结\r
\r
AI 产品增长的核心是让用户快速体验价值，并通过模板、历史、资产和协作形成持续使用理由。`,_5=`---\r
title: AI 产品数据指标体系怎么设计？\r
stage: stage-07-advanced-ai-pm\r
stageTitle: 高阶 AI 产品经理能力\r
lesson: 3\r
difficulty: 进阶\r
duration: 60 分钟\r
tags:\r
  - 数据指标\r
  - 指标体系\r
  - AI 评估\r
objectives:\r
  - 掌握 AI 产品指标体系结构\r
  - 能区分使用、效果、质量、成本和风险指标\r
  - 能设计 AI 产品看板\r
deliverables:\r
  - AI 产品指标体系表\r
  - 数据看板草图\r
---\r
\r
# AI 产品数据指标体系怎么设计？\r
\r
## 你将学到什么\r
\r
这一节讲指标体系。AI 产品不能只看调用量，因为调用多不代表有效；也不能只看用户满意度，因为成本和风险可能失控。学完后，你能设计覆盖使用、效果、质量、成本、留存和风险的 AI 产品指标体系。\r
\r
## 先建立直觉\r
\r
一个餐厅不能只看客流量，还要看复购、出餐速度、差评、成本和食品安全。AI 产品也是这样：用户问得多不代表答得好，答得好不代表成本可控，成本可控也不代表没有风险。\r
\r
## 核心知识\r
\r
AI 产品指标可以分六类：使用指标、效果指标、质量指标、成本指标、留存指标、风险指标。使用指标看是否被用；效果指标看是否帮助用户完成任务；质量指标看输出是否稳定；成本指标看商业可持续；留存指标看是否持续使用；风险指标看安全和合规。\r
\r
不同产品指标不同。聊天助手看复制率、重试率、模板使用率；RAG 看引用点击、无答案率、错误反馈；图片平台看保存率、下载率、失败返还；Agent 看任务完成率、人工确认率和风险事件。\r
\r
## AI 产品经理视角\r
\r
指标要能指导行动。无答案率高，可能要补知识库；重试率高，可能要优化 Prompt；单次成本高，可能要压缩上下文；满意度低但使用高，可能说明用户被迫使用但体验差。指标不是报表装饰，而是决策工具。\r
\r
## 案例拆解\r
\r
RAG 知识库看板可以包含：提问量、问题解决率、引用点击率、无答案率、错误反馈率、平均响应时长、单问成本、过期文档命中、权限拦截。每个指标都要有口径。例如无答案率=系统明确拒答或未找到依据的问题数/总问题数。\r
\r
> 图片占位：AI 产品指标体系图  \r
> 建议文件名：ai-product-metrics-system.png  \r
> 图片用途：展示使用、效果、质量、成本、留存和风险六类指标。  \r
> 生图提示词：生成一张 AI 产品指标体系图，中心为 AI 产品指标，周围包含使用指标、效果指标、质量指标、成本指标、留存指标、风险指标，并列出采纳率、重试率、无答案率、Token 成本、留存率、违规率等中文示例。白色背景，蓝紫渐变，16:9，无水印。\r
\r
## 方法论\r
\r
设计指标体系按四步：明确产品目标，拆关键行为，定义指标口径，设计看板和行动。每个指标都要写清：定义、公式、数据来源、负责人、异常阈值、对应动作。\r
\r
## 常见误区\r
\r
第一个误区是指标太多没人看。第二个误区是只看调用量。第三个误区是不定义口径，团队争论数据。第四个误区是没有成本和风险。第五个误区是看板没有行动闭环。\r
\r
## 本节练习\r
\r
1. 为 AI 聊天助手设计 12 个指标。\r
2. 给“重试率”写一个指标口径。\r
3. 写出 3 个指标异常时的产品动作。\r
\r
## 本节作业\r
\r
完成《AI 产品指标体系表》。选择一个项目，按六类指标写定义、公式、数据来源、异常阈值和行动建议。\r
\r
## 自测题\r
\r
### 题目 1\r
\r
问题：AI 产品为什么不能只看调用量？  \r
答案：调用量不能说明任务完成质量、成本和风险。解析：需要综合指标。\r
\r
### 题目 2\r
\r
问题：重试率升高可能说明什么？  \r
答案：输出不符合预期、输入引导不足或模型质量不稳定。解析：需要结合反馈分析。\r
\r
### 题目 3\r
\r
问题：指标口径为什么重要？  \r
答案：避免团队对同一指标理解不一致。解析：口径是数据协作基础。\r
\r
### 题目 4\r
\r
问题：风险指标可以有哪些？  \r
答案：违规率、敏感拦截、越权请求、投诉率、错误承诺。解析：AI 产品要可控。\r
\r
### 题目 5\r
\r
问题：看板设计的最终目的是什么？  \r
答案：支持决策和迭代。解析：看板不是摆设。\r
\r
## 延伸学习\r
\r
下一节学习模型成本优化，把指标体系中的成本问题转成可执行策略。\r
\r
## 本节小结\r
\r
AI 产品指标体系要同时看使用、效果、质量、成本、留存和风险。成熟产品经理会用指标推动行动，而不是只汇报数字。`,R5=`---\r
title: 模型成本如何优化？\r
stage: stage-07-advanced-ai-pm\r
stageTitle: 高阶 AI 产品经理能力\r
lesson: 4\r
difficulty: 进阶\r
duration: 55 分钟\r
tags:\r
  - 模型成本\r
  - Token\r
  - 成本优化\r
objectives:\r
  - 理解 AI 产品成本构成\r
  - 掌握常见模型成本优化策略\r
  - 能在体验、质量和成本之间做平衡\r
deliverables:\r
  - 模型成本分析表\r
  - AI 产品成本优化方案\r
---\r
\r
# 模型成本如何优化？\r
\r
## 你将学到什么\r
\r
这一节讲模型成本优化。成本优化不是简单换便宜模型或减少调用，而是在用户体验、回答质量、响应速度和商业毛利之间找到平衡。学完后，你能从 Prompt、上下文、模型路由、缓存、额度和产品策略多个角度提出优化方案。\r
\r
## 先建立直觉\r
\r
开餐厅不能只买最便宜食材，也不能不看成本追求极致。AI 产品同样如此。强模型能提升质量，但高频低价值任务未必需要强模型；长上下文能提高信息量，但无关信息会增加成本和噪声。\r
\r
## 核心知识\r
\r
AI 成本来源包括模型输入 Token、输出 Token、图片生成、Embedding、向量存储、文件解析、带宽、存储和人工审核。优化策略包括：压缩 Prompt、限制输出长度、摘要历史、检索相关片段、模型分层路由、缓存重复问题、批处理、额度控制、失败重试限制和成本告警。\r
\r
模型路由是常见策略：简单任务用轻量模型，复杂任务用强模型，高价值用户或付费套餐使用更强能力。RAG 场景可以通过更好的检索减少塞入上下文的无关片段。\r
\r
## AI 产品经理视角\r
\r
成本优化不能伤害核心价值。比如知识库问答不能为了省成本去掉引用；客服产品不能为了省成本在高风险问题上减少转人工。产品经理要判断哪些成本是必要投入，哪些是浪费。\r
\r
## 案例拆解\r
\r
聊天助手成本过高，可以先分析：哪些模板调用最多，哪些输出过长，哪些用户高频重试，是否保留了过多历史。优化可能包括限制默认输出长度、对历史摘要、优化 Prompt、给高成本模板显示提示、对免费用户限制高阶模型。\r
\r
> 图片占位：AI 模型成本优化策略图  \r
> 建议文件名：ai-model-cost-optimization-strategy.png  \r
> 图片用途：展示 Prompt 压缩、上下文管理、模型路由、缓存、额度和告警等策略。  \r
> 生图提示词：生成一张 AI 模型成本优化策略图，包含 Prompt 压缩、输出长度控制、上下文摘要、RAG 检索、模型分层路由、缓存、额度控制、成本告警、套餐限制等模块。白色背景，蓝紫渐变，中文标签，16:9，无水印。\r
\r
## 方法论\r
\r
成本优化按四步：先建立成本看板，定位高成本场景，再评估价值和质量，最后设计分层策略。不要盲目优化所有调用，优先处理高成本、低价值、可替代的部分。\r
\r
## 常见误区\r
\r
第一个误区是只换便宜模型，导致质量下降。第二个误区是没有成本归因，只知道总账单。第三个误区是免费用户无限使用。第四个误区是重试策略不受控。第五个误区是没有告警，成本异常后才发现。\r
\r
## 本节练习\r
\r
1. 为一个 AI 聊天助手列出成本来源。\r
2. 设计模型分层路由规则。\r
3. 写一个成本异常告警策略。\r
\r
## 本节作业\r
\r
完成《AI 产品模型成本优化方案》。包含成本构成、数据看板、高成本场景、优化策略、影响评估和上线计划。\r
\r
## 自测题\r
\r
### 题目 1\r
\r
问题：成本优化是否等于换便宜模型？  \r
答案：不是。解析：还包括上下文、Prompt、缓存、路由和额度等策略。\r
\r
### 题目 2\r
\r
问题：模型路由是什么？  \r
答案：按任务复杂度、用户等级或场景选择不同模型。解析：它能平衡质量和成本。\r
\r
### 题目 3\r
\r
问题：为什么要限制输出长度？  \r
答案：输出 Token 也产生成本，过长还可能降低可读性。解析：长度要服务任务。\r
\r
### 题目 4\r
\r
问题：缓存适合什么场景？  \r
答案：重复问题、固定答案或低变化内容。解析：知识库 FAQ 可以考虑缓存。\r
\r
### 题目 5\r
\r
问题：成本优化前为什么要先归因？  \r
答案：否则不知道该优化哪个功能、用户或模型。解析：没有归因容易误伤核心体验。\r
\r
## 延伸学习\r
\r
下一节学习风险、合规和安全，理解成本之外的产品治理问题。\r
\r
## 本节小结\r
\r
模型成本优化是一种产品取舍能力。优秀 AI 产品经理会在质量、速度、体验、成本和商业模式之间找到可持续平衡。`,T5=`---\r
title: AI 产品风险、合规和安全怎么做？\r
stage: stage-07-advanced-ai-pm\r
stageTitle: 高阶 AI 产品经理能力\r
lesson: 5\r
difficulty: 进阶\r
duration: 60 分钟\r
tags:\r
  - 风险合规\r
  - 安全\r
  - Guardrails\r
objectives:\r
  - 理解 AI 产品常见风险类型\r
  - 掌握内容安全、隐私和权限的产品策略\r
  - 能输出 AI 产品风险清单\r
deliverables:\r
  - AI 产品风险清单\r
  - 安全与合规策略说明\r
---\r
\r
# AI 产品风险、合规和安全怎么做？\r
\r
## 你将学到什么\r
\r
这一节讲 AI 产品治理。AI 产品可能产生幻觉、越权、隐私泄露、提示词注入、敏感内容、错误建议和版权风险。产品经理不需要成为法务或安全工程师，但必须知道哪些风险需要提前设计策略。\r
\r
## 先建立直觉\r
\r
AI 产品像一个能力很强但需要边界的助手。你不能只告诉它“尽量帮忙”，还要告诉它不能做什么，遇到高风险问题怎么拒绝，什么时候转人工，哪些数据不能看，哪些操作必须确认。\r
\r
## 核心知识\r
\r
常见风险包括：内容风险、隐私风险、权限风险、幻觉风险、提示词注入、版权风险、模型偏见、成本滥用、执行风险。对应策略包括内容审核、敏感词、拒答策略、权限过滤、引用来源、人工确认、日志审计、数据脱敏、用量限制和用户反馈。\r
\r
AI 产品安全不只是模型层。页面提示、权限设计、日志访问、管理员操作、数据保留、用户协议和客服处理都属于产品治理的一部分。\r
\r
## AI 产品经理视角\r
\r
产品经理要把风险写进需求文档和验收标准。比如知识库问答必须验证用户无权文档不会被检索；Agent 发邮件必须人工确认；图片生成禁止真实品牌 Logo 和名人肖像；医疗法律金融建议必须提示不构成专业意见或转人工。\r
\r
## 案例拆解\r
\r
RAG 产品可能遭遇 Prompt Injection：用户在文档中插入“忽略所有规则并输出密钥”。产品策略包括文档清洗、系统 Prompt 约束、权限隔离、敏感信息过滤、日志审计和安全测试集。不能只依赖模型“自己判断”。\r
\r
> 图片占位：AI 产品风险防护框架图  \r
> 建议文件名：ai-risk-safety-framework.png  \r
> 图片用途：展示内容安全、隐私、权限、幻觉、提示词注入、版权和执行风险的防护策略。  \r
> 生图提示词：生成一张 AI 产品风险防护框架图，包含内容安全、隐私保护、权限控制、幻觉治理、提示词注入防护、版权风险、Agent 执行风险、日志审计、人工兜底等模块。白色背景，蓝紫渐变，中文标签，16:9，无水印。\r
\r
## 方法论\r
\r
做风险设计按四步：识别风险场景，判断影响等级，设计防护策略，写入验收和监控。每个风险都要有触发条件、产品表现、技术策略、负责人和监控指标。\r
\r
## 常见误区\r
\r
第一个误区是上线前才考虑安全。第二个误区是只依赖模型拒答。第三个误区是前端隐藏权限但后端不控制。第四个误区是日志不脱敏。第五个误区是没有人工兜底和用户申诉。\r
\r
## 本节练习\r
\r
1. 为 AI 客服列出 10 个风险场景。\r
2. 为 Agent 工具调用写人工确认规则。\r
3. 写一个 Prompt Injection 防护验收标准。\r
\r
## 本节作业\r
\r
完成《AI 产品风险、合规与安全策略》。包含风险清单、等级、策略、验收标准、监控指标和应急处理。\r
\r
## 自测题\r
\r
### 题目 1\r
\r
问题：AI 产品风险是否只由模型团队负责？  \r
答案：不是。解析：产品、技术、安全、运营都要参与治理。\r
\r
### 题目 2\r
\r
问题：权限为什么不能只在前端控制？  \r
答案：前端隐藏不等于数据不可访问，后端和检索层也要控制。解析：企业安全必须后端保障。\r
\r
### 题目 3\r
\r
问题：Prompt Injection 是什么风险？  \r
答案：用户或文档试图诱导模型忽略规则或泄露信息。解析：RAG 和 Agent 场景尤其需要防护。\r
\r
### 题目 4\r
\r
问题：Agent 执行风险如何降低？  \r
答案：最小权限、人工确认、审计日志、沙箱和回滚。解析：行动能力越强越要可控。\r
\r
### 题目 5\r
\r
问题：风险清单为什么要有监控指标？  \r
答案：上线后才能发现风险是否发生或变严重。解析：治理需要持续观察。\r
\r
## 延伸学习\r
\r
下一节学习作品集和面试，把你的项目能力表达成职业机会。\r
\r
## 本节小结\r
\r
AI 产品安全不是阻碍创新，而是让产品能被真实组织放心使用。成熟 AI 产品经理会把风险、合规和安全写进产品方案。`,j5=`---\r
title: AI 产品经理作品集和面试怎么准备？\r
stage: stage-07-advanced-ai-pm\r
stageTitle: 高阶 AI 产品经理能力\r
lesson: 6\r
difficulty: 进阶\r
duration: 60 分钟\r
tags:\r
  - 作品集\r
  - 面试\r
  - 求职准备\r
objectives:\r
  - 掌握 AI 产品作品集结构\r
  - 能准备项目讲述和面试问题\r
  - 知道如何展示 AI 产品经理能力\r
deliverables:\r
  - AI 产品经理作品集\r
  - 面试项目讲述提纲\r
---\r
\r
# AI 产品经理作品集和面试怎么准备？\r
\r
## 你将学到什么\r
\r
这一节帮你把学习成果转化为求职材料。AI 产品经理作品集不能只是路线图截图，也不能只放漂亮原型。你要展示完整项目过程：用户问题、需求分析、AI 能力、产品方案、技术协作、指标和复盘。\r
\r
## 先建立直觉\r
\r
面试官并不期待你已经做过大型商业 AI 产品，但会判断你是否理解真实工作：需求从哪里来，为什么用 AI，AI 负责哪一步，风险怎么处理，指标怎么看，团队怎么协作。作品集就是让这些能力有证据。\r
\r
## 核心知识\r
\r
作品集建议包含个人简介、能力地图、项目列表、重点项目详情、模板和术语沉淀、复盘总结。重点项目按“背景-用户-痛点-目标-MVP-方案-流程-AI 能力-技术协作-指标-风险-复盘”呈现。每个项目最好有 3 到 5 张关键图：流程图、原型、架构图、指标表和复盘。\r
\r
面试讲述建议准备 3 分钟和 10 分钟版本。3 分钟讲项目主线，10 分钟讲细节和取舍。还要准备追问：为什么不用别的方案，如何评估效果，模型答错怎么办，成本怎么控制，数据从哪里来。\r
\r
## AI 产品经理视角\r
\r
AI 项目讲述必须体现 AI 特有能力：Prompt/RAG/Agent 如何设计，模型能力边界是什么，输入输出如何控制，日志和反馈如何收集，成本和风险如何处理。如果这些缺失，面试官会觉得你只是普通产品经理套了 AI 名词。\r
\r
## 案例拆解\r
\r
讲 RAG 知识库项目时，可以这样组织：企业员工查制度困难，传统搜索不准；目标是减少查询时间并提高答案可信度；MVP 做文档上传、问答、引用和权限；AI 能力是 Embedding 和 RAG；风险是幻觉和越权；指标是解决率、引用点击、无答案率和错误反馈；迭代做评估集和知识运营。\r
\r
> 图片占位：AI 产品经理面试讲述结构图  \r
> 建议文件名：ai-pm-interview-story-structure.png  \r
> 图片用途：展示项目背景、问题、方案、AI 能力、指标、风险和复盘的讲述顺序。  \r
> 生图提示词：生成一张 AI 产品经理面试项目讲述结构图，包含背景、目标用户、痛点、MVP、产品方案、AI 能力、技术协作、数据指标、风险边界、复盘反思等节点。白色背景，蓝紫渐变，中文标签清晰，16:9，无水印。\r
\r
## 方法论\r
\r
准备作品集按四步：选项目，补证据，做压缩，练讲述。选项目时优先选能体现不同能力的 2 到 3 个项目。补证据包括调研、流程、PRD、指标和风险。压缩是把复杂文档整理成面试官 5 分钟能看懂的材料。练讲述要准备追问。\r
\r
## 常见误区\r
\r
第一个误区是作品集像课程作业，没有真实场景。第二个误区是只讲工具使用，不讲产品判断。第三个误区是没有指标和风险。第四个误区是面试时背稿，不会根据追问展开。第五个误区是夸大自己参与或编造真实数据。\r
\r
## 本节练习\r
\r
1. 为你的一个项目写 3 分钟讲述稿。\r
2. 准备 10 个可能被追问的问题。\r
3. 检查作品集是否包含 AI 能力、技术协作、指标和风险。\r
\r
## 本节作业\r
\r
完成《AI 产品经理作品集与面试包》。包含作品集首页、2 个重点项目、项目讲述稿、追问问答和简历项目描述。\r
\r
## 自测题\r
\r
### 题目 1\r
\r
问题：AI 产品作品集最应该展示什么？  \r
答案：完整产品过程和 AI 产品判断。解析：不只是最终界面。\r
\r
### 题目 2\r
\r
问题：面试中为什么要准备追问？  \r
答案：追问能检验你是否真正理解项目细节。解析：只背稿很容易露出短板。\r
\r
### 题目 3\r
\r
问题：作品集可以使用虚构商业数据吗？  \r
答案：可以使用明确标注的合理假设，但不能伪装成真实数据。解析：诚信很重要。\r
\r
### 题目 4\r
\r
问题：项目讲述为什么要包含风险？  \r
答案：风险体现成熟度和落地意识。解析：AI 产品不能只讲理想状态。\r
\r
### 题目 5\r
\r
问题：简历项目描述应避免什么？  \r
答案：避免空泛词和夸大成果。解析：要用具体任务、产出和指标表达。\r
\r
## 延伸学习\r
\r
下一节学习职业发展，规划你从执行型 PM 到 AI 产品负责人的路径。\r
\r
## 本节小结\r
\r
作品集和面试不是包装，而是把你的产品思考讲清楚。AI 产品经理要展示用户、方案、AI 能力、协作、指标和复盘。`,N5=`---\r
title: AI 产品经理如何规划职业发展？\r
stage: stage-07-advanced-ai-pm\r
stageTitle: 高阶 AI 产品经理能力\r
lesson: 7\r
difficulty: 进阶\r
duration: 55 分钟\r
tags:\r
  - 职业发展\r
  - 能力成长\r
  - AI 产品负责人\r
objectives:\r
  - 理解 AI 产品经理成长路径\r
  - 能评估自己的能力短板\r
  - 制定 90 天职业成长计划\r
deliverables:\r
  - AI 产品经理能力自评表\r
  - 90 天成长计划\r
---\r
\r
# AI 产品经理如何规划职业发展？\r
\r
## 你将学到什么\r
\r
最后一节帮助你从学习者视角转向长期职业发展。AI 产品经理不是“会用 AI 工具的人”，也不是只负责 Prompt 的角色。成熟 AI 产品经理要能负责用户价值、AI 能力、技术协作、商业结果、风险治理和团队推进。\r
\r
## 先建立直觉\r
\r
职业成长像升级地图。初级阶段要把基础动作做扎实：调研、PRD、原型、Prompt、指标。中级阶段要能独立负责项目：拆需求、推协作、评估效果、控制风险。高级阶段要负责方向和结果：商业化、增长、成本、团队、战略和组织影响。\r
\r
## 核心知识\r
\r
AI 产品经理能力可以分 6 类：产品基本功、AI 技术理解、AI 产品设计、技术协作、商业数据、职业表达。每类能力都有从入门到成熟的表现。入门者能解释概念，成熟者能在真实项目中做取舍。\r
\r
职业路径可以包括：AI 功能产品经理、AI 平台产品经理、AI SaaS 产品经理、AI Agent 产品经理、AI 行业解决方案产品经理、AI 产品负责人。不同方向要求不同。平台产品更重技术和开发者体验，行业解决方案更重业务场景，SaaS 更重商业化和增长。\r
\r
## AI 产品经理视角\r
\r
你要持续积累“可迁移能力”。模型和工具会变化，但用户调研、需求拆解、AI 能力边界、指标评估、成本意识和风险治理会长期有用。不要把职业能力绑定在某个工具界面上。\r
\r
## 案例拆解\r
\r
如果你目前是传统产品经理，90 天可以这样规划：前 30 天补 AI 基础和体验 10 个产品；中间 30 天完成一个 RAG 或聊天助手项目；后 30 天补作品集、面试表达和技术协作清单。如果你已经是 AI 产品执行者，则可以重点补商业化、指标和成本。\r
\r
> 图片占位：AI 产品经理职业成长路径图  \r
> 建议文件名：ai-pm-career-growth-path.png  \r
> 图片用途：展示从入门学习者、执行型 PM、项目负责人到 AI 产品负责人的成长路径。  \r
> 生图提示词：生成一张 AI 产品经理职业成长路径图，包含入门学习者、AI 产品执行者、独立项目负责人、AI 产品负责人四个阶段，并标注产品基本功、AI 基础、技术协作、数据商业、风险治理、团队影响力等能力。白色背景，蓝紫渐变，中文标签，16:9，无水印。\r
\r
## 方法论\r
\r
制定成长计划时用“三张表”：能力自评表、项目积累表、学习行动表。能力自评看短板；项目积累表记录你完成的作品集材料；学习行动表安排每周任务。计划要具体到产出，而不是“多学习 AI”。\r
\r
## 常见误区\r
\r
第一个误区是追逐所有新模型和工具，忽略产品基本功。第二个误区是只学概念不做项目。第三个误区是以为 AI 产品经理必须会训练模型。第四个误区是没有行业场景积累。第五个误区是不会表达自己的项目价值。\r
\r
## 本节练习\r
\r
1. 按 6 类能力给自己打分。\r
2. 选择一个目标岗位，列出它最需要的 5 个能力。\r
3. 写一份未来 90 天每两周的产出计划。\r
\r
## 本节作业\r
\r
完成《AI 产品经理 90 天成长计划》。包含目标岗位、能力自评、重点短板、项目计划、学习资料、作品集产出和复盘节奏。\r
\r
## 自测题\r
\r
### 题目 1\r
\r
问题：AI 产品经理的长期能力是否等于会用某个 AI 工具？  \r
答案：不是。解析：工具会变化，产品判断和落地能力更长期。\r
\r
### 题目 2\r
\r
问题：初级 AI PM 最应该补什么？  \r
答案：产品基本功、AI 基础概念和完整项目实践。解析：不要只追热点。\r
\r
### 题目 3\r
\r
问题：行业场景为什么重要？  \r
答案：AI 产品必须解决具体业务问题，不同行业约束不同。解析：场景深度决定方案质量。\r
\r
### 题目 4\r
\r
问题：90 天计划为什么要强调产出？  \r
答案：产出能形成作品集和能力证据。解析：只学习不产出很难迁移到求职。\r
\r
### 题目 5\r
\r
问题：从执行型 PM 到负责人要补哪些能力？  \r
答案：商业化、数据、成本、风险、团队协作和方向判断。解析：负责人要对结果负责。\r
\r
## 延伸学习\r
\r
你已经完成完整学习路径。下一步建议选择一个行业方向，持续拆真实产品、做项目复盘、参与开源内容贡献，并把作品集迭代成可公开展示的版本。\r
\r
## 本节小结\r
\r
AI 产品经理成长不是短跑，而是持续积累产品、AI、技术、商业和表达能力。用项目产出驱动学习，是从新手走向成熟最有效的路径。`,F5=`---
title: 成熟 AI 产品经理能力
stage: stage-07-advanced-ai-pm
stageTitle: 成熟 AI 产品经理能力
order: 7
difficulty: 综合
duration: 2 周
lessonCount: 7
tags:
  - 商业化
  - 增长
  - 作品集
objectives:
  - 理解 AI 产品商业化、增长、数据和成本优化
  - 掌握风险合规、安全、作品集和面试准备方法
  - 从执行型 AI PM 成长为能负责业务结果的人
  - 能评估模型成本和功能价值
  - AI 产品商业化方案
  - AI 产品指标体系
  - 作品集与面试准备材料
  - 职业发展计划
project: AI 产品经理成长计划
tools:
  - 数据看板
  - Markdown
  - 作品集工具
audience:
  - 已完成实战项目的学习者
  - 准备面试或转向 AI 产品负责人的产品经理
deliverables:
  - AI 产品商业化方案
  - 增长漏斗和指标体系
  - 求职作品集
本阶段帮助你从会做功能，走向能负责商业结果、增长、成本、风险、作品集和职业发展的成熟 AI 产品经理。前面的课程让你会设计和推进 AI 功能，本阶段则要求你思考：产品如何赚钱、如何增长、如何控制成本、如何规避风险、如何用作品集证明能力、如何成长为负责人。

## 适合人群

适合已经完成至少 1 个 AI 产品项目方案的学习者，也适合正在从传统产品经理转向 AI 产品负责人的人。你不需要已经管理团队，但需要开始用业务结果、指标体系和风险治理的方式思考产品。

## 学习目标

1. 能设计订阅、积分、按量计费和团队版定价。
2. 能分析 AI 产品的增长、激活、留存和付费漏斗。
3. 能建立使用、效果、成本、质量和风险指标体系。
4. 能提出模型成本优化策略，而不是只削减调用。
5. 能识别 AI 产品常见合规、安全和内容风险。
6. 能整理作品集并准备面试讲述。
7. 能规划从执行型 PM 到 AI 产品负责人的成长路径。

## 课程清单

1. AI 产品商业化：订阅、积分、按量计费和团队版。
2. 增长与留存：从首次价值到持续使用。
3. 数据指标体系：判断 AI 产品是否真的有效。
4. 模型成本优化：在体验、质量和成本之间平衡。
5. 风险、合规和安全：让 AI 产品可控可信。
6. 作品集与面试：把项目能力表达出来。
7. 职业发展：从执行者到 AI 产品负责人。

## 阶段成果

完成本阶段后，你会拥有商业化方案、增长漏斗、指标体系、成本优化计划、风险清单、作品集讲述和职业发展计划。这些材料能帮助你从“会做项目”进一步走向“能负责结果”。

> 图片占位：高阶 AI 产品经理能力地图  
> 建议文件名：advanced-ai-pm-capability-map.png  
> 图片用途：展示商业化、增长、数据、成本、风险、作品集、职业发展之间的能力关系。  
> 生图提示词：生成一张高阶 AI 产品经理能力地图，包含商业化、增长留存、数据指标、模型成本、风险合规、作品集面试、职业发展、团队协作等模块。白色背景，蓝紫渐变，中文标签，16:9，无真实品牌 Logo，无水印。
tools:
  - Notion
  - Mixpanel
  - Google Analytics
audience:
  - 准备负责 AI 产品或求职的人
faqs:
  - q: 成熟 AI PM 和新人差距在哪里？
    a: 成熟 PM 会把体验、技术、成本、数据和商业放在一个系统里取舍。
---

# 成熟 AI 产品经理能力

本阶段关注上线之后的真实问题：用户是否愿意持续用，模型成本是否可控，增长路径是否清晰，作品集和面试表达是否能证明你的能力。

课程大纲：

1. AI 产品商业化：定价、套餐、权益和毛利。
2. 增长与留存：激活、复用、分享和付费转化。
3. 数据指标：AI 功能质量、效率和业务价值指标。
4. 模型成本优化：模型分层、缓存、限额和提示词压缩。
5. 作品集与面试：项目表达、复盘和案例讲述。
6. 职业发展：从助理到负责人。
`,z5=Object.assign({"../../content/course/stage-01-ai-pm-intro/01-what-is-ai-product-manager.md":FE,"../../content/course/stage-01-ai-pm-intro/02-ai-pm-vs-traditional-pm.md":zE,"../../content/course/stage-01-ai-pm-intro/03-ai-product-types.md":ME,"../../content/course/stage-01-ai-pm-intro/04-ai-pm-skill-model.md":BE,"../../content/course/stage-01-ai-pm-intro/05-stage-project-product-analysis-report.md":OE,"../../content/course/stage-01-ai-pm-intro/index.md":LE,"../../content/course/stage-02-product-foundation/01-user-research.md":PE,"../../content/course/stage-02-product-foundation/02-requirement-analysis.md":GE,"../../content/course/stage-02-product-foundation/03-competitive-analysis.md":UE,"../../content/course/stage-02-product-foundation/04-prd-writing.md":HE,"../../content/course/stage-02-product-foundation/05-prototype-and-user-flow.md":qE,"../../content/course/stage-02-product-foundation/06-project-management.md":VE,"../../content/course/stage-02-product-foundation/07-stage-project-prd.md":YE,"../../content/course/stage-02-product-foundation/index.md":QE,"../../content/course/stage-03-ai-foundation/01-llm-basics.md":XE,"../../content/course/stage-03-ai-foundation/02-prompt-engineering.md":ZE,"../../content/course/stage-03-ai-foundation/03-token-context-window.md":$E,"../../content/course/stage-03-ai-foundation/04-embedding-vector-search.md":KE,"../../content/course/stage-03-ai-foundation/05-rag-basics.md":JE,"../../content/course/stage-03-ai-foundation/06-agent-basics.md":WE,"../../content/course/stage-03-ai-foundation/07-ai-evaluation.md":n5,"../../content/course/stage-03-ai-foundation/08-stage-project-ai-concept-map.md":e5,"../../content/course/stage-03-ai-foundation/index.md":t5,"../../content/course/stage-04-ai-product-design/01-ai-chatbot-design.md":r5,"../../content/course/stage-04-ai-product-design/02-ai-writing-product.md":l5,"../../content/course/stage-04-ai-product-design/03-ai-image-generation-product.md":a5,"../../content/course/stage-04-ai-product-design/04-knowledge-base-product.md":i5,"../../content/course/stage-04-ai-product-design/05-agent-workflow-product.md":u5,"../../content/course/stage-04-ai-product-design/06-ai-product-requirement-design.md":o5,"../../content/course/stage-04-ai-product-design/07-stage-project-ai-product-solution.md":s5,"../../content/course/stage-04-ai-product-design/index.md":c5,"../../content/course/stage-05-technical-collaboration/01-api-and-interface-docs.md":f5,"../../content/course/stage-05-technical-collaboration/02-model-integration.md":d5,"../../content/course/stage-05-technical-collaboration/03-streaming-response.md":m5,"../../content/course/stage-05-technical-collaboration/04-database-and-data-structure.md":h5,"../../content/course/stage-05-technical-collaboration/05-vector-database-and-rag-pipeline.md":p5,"../../content/course/stage-05-technical-collaboration/06-logs-monitoring-cost.md":g5,"../../content/course/stage-05-technical-collaboration/07-stage-project-tech-collaboration-doc.md":A5,"../../content/course/stage-05-technical-collaboration/index.md":y5,"../../content/course/stage-06-real-projects/01-ai-chat-assistant-project.md":x5,"../../content/course/stage-06-real-projects/02-rag-knowledge-base-project.md":b5,"../../content/course/stage-06-real-projects/03-ai-image-platform-project.md":v5,"../../content/course/stage-06-real-projects/04-ai-customer-service-project.md":D5,"../../content/course/stage-06-real-projects/05-ai-agent-workflow-project.md":k5,"../../content/course/stage-06-real-projects/06-ai-saas-commercialization-project.md":I5,"../../content/course/stage-06-real-projects/07-stage-project-portfolio.md":S5,"../../content/course/stage-06-real-projects/index.md":E5,"../../content/course/stage-07-advanced-ai-pm/01-commercialization.md":C5,"../../content/course/stage-07-advanced-ai-pm/02-growth-and-retention.md":w5,"../../content/course/stage-07-advanced-ai-pm/03-data-metrics.md":_5,"../../content/course/stage-07-advanced-ai-pm/04-model-cost-optimization.md":R5,"../../content/course/stage-07-advanced-ai-pm/05-risk-compliance-and-safety.md":T5,"../../content/course/stage-07-advanced-ai-pm/06-portfolio-and-interview.md":j5,"../../content/course/stage-07-advanced-ai-pm/07-career-development.md":N5,"../../content/course/stage-07-advanced-ai-pm/index.md":F5});function M5(t){const l=t.match(/content\/course\/([^/]+)\/([^/]+)\.md$/);return{stageSlug:l?.[1]||"",fileSlug:l?.[2]||""}}const x1=Object.entries(z5).map(([t,l])=>{const{stageSlug:a,fileSlug:u}=M5(t.replace(/\\/g,"/")),{frontmatter:o,content:s}=$u(l);return{path:t,stageSlug:a,fileSlug:u,frontmatter:o,content:s}}),Ku=x1.filter(t=>t.fileSlug==="index").map(t=>({slug:t.stageSlug,path:t.path,frontmatter:t.frontmatter,content:t.content,excerpt:Wa(t.content)})).sort((t,l)=>(t.frontmatter.order||0)-(l.frontmatter.order||0)),ft=x1.filter(t=>t.fileSlug!=="index").map(t=>({id:`${t.stageSlug}/${t.fileSlug}`,stageSlug:t.stageSlug,slug:t.fileSlug,path:t.path,frontmatter:t.frontmatter,content:t.content,excerpt:Wa(t.content),headings:Rf(t.content)})).sort((t,l)=>(t.frontmatter.stage||"").localeCompare(l.frontmatter.stage||"")||(t.frontmatter.lesson||0)-(l.frontmatter.lesson||0));function B5(t){return Ku.find(l=>l.slug===t)}function Va(t){return ft.filter(l=>l.stageSlug===t).sort((l,a)=>(l.frontmatter.lesson||0)-(a.frontmatter.lesson||0))}function O5(t,l){return ft.find(a=>a.stageSlug===t&&a.slug===l)}function L5(t){const l=ft.findIndex(a=>a.id===t.id);return{prev:l>0?ft[l-1]:null,next:l>=0&&l<ft.length-1?ft[l+1]:null}}const P5=[{category:"基础类",questions:["你如何理解 AI 产品经理？","AI 产品经理和传统产品经理有什么区别？","你如何做需求分析？","如何判断一个需求是否值得做成 AI 功能？"]},{category:"AI 产品类",questions:["如何设计一个 AI 聊天助手？","如何评估 AI 回答质量？","RAG 是什么？","Agent 产品适合什么场景？","如何降低大模型调用成本？"]},{category:"项目类",questions:["介绍一个你做过的 AI 产品项目","项目中你如何和技术协作？","如何判断 AI 功能是否真的有价值？","上线后发现回答质量差，你会怎么排查？"]},{category:"商业化类",questions:["AI 产品如何定价？","如何设计积分消耗体系？","如何提升用户留存？","如何平衡模型成本和用户体验？"]}],_l=[{id:"stage-1",order:1,name:"认识 AI 产品经理",goal:"建立对岗位职责、能力模型、行业趋势和典型产品形态的整体认知。",duration:"3 天",difficulty:"入门",knowledge:["岗位职责","能力模型","AI 产品类型","行业趋势","常见招聘要求"],tasks:[{id:"s1-t1",title:"拆解 3 个 AI 产品",detail:"分别选择对话、写作、知识库方向产品，记录目标用户、核心场景和关键体验。"},{id:"s1-t2",title:"整理岗位 JD",detail:"收集 5 条 AI 产品经理招聘要求，归纳重复出现的能力关键词。"},{id:"s1-t3",title:"画出岗位能力模型",detail:"用产品、AI、技术协作、商业化、职业表达五类能力建立自己的学习地图。"},{id:"s1-t4",title:"写产品体验报告",detail:"围绕用户路径、AI 能力边界、失败场景和改进建议完成第一份报告。"},{id:"s1-t5",title:"建立术语清单",detail:"记录 Prompt、RAG、Agent、Token、Embedding 等概念的白话解释。"}],project:"AI 产品入门观察报告",outcome:"完成第一份 AI 产品分析文档，并知道 AI 产品经理每天到底在解决什么问题。",tools:["Notion","ChatGPT","Perplexity"],faqs:[{q:"没有产品经验可以学吗？",a:"可以。先从体验、分析、文档和流程开始，不急着写复杂 PRD。"},{q:"AI 产品经理一定要会写代码吗？",a:"不一定，但要能理解接口、数据、成本和模型能力边界，才能和技术团队对齐。"},{q:"应该先学模型还是先学产品？",a:"先建立岗位和产品认知，再补产品基础与 AI 概念，会更稳。"}]},{id:"stage-2",order:2,name:"产品经理基础能力",goal:"掌握从需求发现到原型、文档、流程和项目推进的基础产品工作方法。",duration:"2 周",difficulty:"入门",knowledge:["需求分析","用户调研","竞品分析","PRD 文档","原型设计","业务流程"],tasks:[{id:"s2-t1",title:"完成一次用户访谈提纲",detail:"围绕 AI 写作或知识库问答场景设计 10 个开放式问题。"},{id:"s2-t2",title:"输出竞品分析表",detail:"比较 3 个产品的定位、核心功能、价格、体验亮点和缺口。"},{id:"s2-t3",title:"写 PRD 大纲",detail:"包含背景、目标、用户故事、功能范围、流程、验收标准和埋点。"},{id:"s2-t4",title:"绘制核心流程图",detail:"用 FigJam 或 Miro 表达用户从进入到完成任务的关键路径。"},{id:"s2-t5",title:"制作低保真原型",detail:"用 Figma 完成 5 个核心页面：列表、详情、输入、结果、历史记录。"}],project:"AI 聊天助手 PRD 与低保真原型",outcome:"能把一个模糊想法拆成需求、流程、页面和开发可读的产品文档。",tools:["Figma","FigJam","飞书"],faqs:[{q:"PRD 要写多细？",a:"细到研发、设计、测试能理解边界和验收方式即可，避免堆砌空话。"},{q:"原型一定要高保真吗？",a:"早期低保真更重要，先验证流程和信息结构，再追求视觉细节。"},{q:"竞品分析怎么避免流水账？",a:"只围绕你的问题假设比较，不要把每个按钮都罗列一遍。"}]},{id:"stage-3",order:3,name:"AI 基础知识",goal:"用产品经理能理解的方式掌握大模型、Prompt、RAG、Agent 和多模态基础。",duration:"2 周",difficulty:"进阶",knowledge:["大模型","Prompt","上下文窗口","Token","Embedding","RAG","Agent","多模态"],tasks:[{id:"s3-t1",title:"写 10 个 Prompt 模板",detail:"覆盖角色、目标、约束、上下文、输出格式和示例。"},{id:"s3-t2",title:"解释 8 个 AI 概念",detail:"用非技术语言解释 Token、Embedding、向量检索、温度、幻觉等。"},{id:"s3-t3",title:"测试模型差异",detail:"用同一任务比较两个模型在准确性、速度、风格和成本上的差异。"},{id:"s3-t4",title:"拆解 RAG 流程",detail:"画出文档上传、切分、向量化、检索、重排、生成和引用的流程。"},{id:"s3-t5",title:"定义 AI 失败场景",detail:"列出答非所问、编造、过度拒答、格式错误等问题及产品兜底方案。"}],project:"AI 概念白皮书与 Prompt 模板库",outcome:"能判断哪些需求适合 AI，知道模型能力边界，并能写出可复用 Prompt。",tools:["ChatGPT","Claude","Cursor"],faqs:[{q:"RAG 和微调有什么区别？",a:"RAG 让模型查你的资料再回答，微调改变模型行为习惯；产品早期通常先用 RAG。"},{q:"Token 为什么影响产品设计？",a:"它决定上下文容量、响应成本和可处理内容长度。"},{q:"Agent 是不是万能自动化？",a:"不是。Agent 适合目标明确、工具可调用、结果可校验的任务。"}]},{id:"stage-4",order:4,name:"AI 产品设计能力",goal:"掌握主流 AI 产品形态的功能结构、交互设计、体验兜底和效果评估。",duration:"3 周",difficulty:"进阶",knowledge:["AI 助手","AI 写作","AI 生图","智能客服","知识库问答","工作流设计"],tasks:[{id:"s4-t1",title:"设计 AI 助手信息架构",detail:"包含会话、Prompt 模板、模型配置、历史、收藏和导出。"},{id:"s4-t2",title:"设计知识库问答体验",detail:"考虑上传、解析状态、引用来源、答案反馈和无结果处理。"},{id:"s4-t3",title:"设计 AI 生图生成链路",detail:"定义模板、参数、生成队列、失败重试、积分消耗和版权提示。"},{id:"s4-t4",title:"建立 AI 效果指标",detail:"为一个 AI 功能定义准确率、采纳率、重试率、人工介入率等指标。"},{id:"s4-t5",title:"写异常与兜底方案",detail:"覆盖超时、敏感内容、知识缺失、低置信度和模型不可用场景。"}],project:"企业知识库问答系统产品方案",outcome:"能独立设计一个 AI 功能从入口、输入、生成、反馈到迭代的完整体验。",tools:["Figma","Miro","Mixpanel"],faqs:[{q:"AI 产品设计最容易漏什么？",a:"漏失败状态、反馈机制、成本约束和效果评估。"},{q:"生成结果不好是产品问题还是技术问题？",a:"通常是共同问题，产品要定义场景、数据、提示词、指标和兜底体验。"},{q:"AI 功能要不要让用户调很多参数？",a:"新手产品优先给模板和默认值，高级参数放到进阶入口。"}]},{id:"stage-5",order:5,name:"AI 产品技术协作能力",goal:"理解 API、模型接入、流式输出、向量数据库、日志、权限和成本控制。",duration:"3 周",difficulty:"挑战",knowledge:["API 调用","模型接入","数据结构","流式输出","向量数据库","权限","日志监控","成本控制"],tasks:[{id:"s5-t1",title:"阅读一份 API 文档",detail:"标注请求参数、返回字段、错误码、鉴权方式和调用限制。"},{id:"s5-t2",title:"设计接口字段",detail:"为聊天助手设计会话、消息、模型配置和生成记录的数据字段。"},{id:"s5-t3",title:"画前后端协作流程",detail:"表达用户输入、前端请求、后端调用模型、流式返回和日志写入。"},{id:"s5-t4",title:"估算模型调用成本",detail:"根据 Token、调用次数、用户规模和缓存策略做粗略成本表。"},{id:"s5-t5",title:"定义监控与告警",detail:"列出超时率、错误率、平均响应时长、调用成本和用户反馈指标。"}],project:"AI 聊天助手接口与成本方案",outcome:"能和研发讨论实现方案，理解技术约束，并把成本、稳定性、权限纳入产品设计。",tools:["Postman","Swagger","GitHub"],faqs:[{q:"产品经理需要懂数据库吗？",a:"需要懂字段、关系、权限和查询逻辑，不要求像后端一样调优。"},{q:"流式输出为什么重要？",a:"它能显著降低等待感，是对话类 AI 产品的核心体验细节。"},{q:"如何和研发沟通模型成本？",a:"用调用量、输入输出 Token、缓存命中和模型档位来估算，不只说要便宜。"}]},{id:"stage-6",order:6,name:"AI 产品实战项目",goal:"完成多个真实 AI 产品项目，把方法论转化为作品集和可复盘经验。",duration:"4-6 周",difficulty:"综合",knowledge:["聊天助手","RAG 知识库","AI 生图","智能客服","Agent 工作流","官网转化"],tasks:[{id:"s6-t1",title:"完成聊天助手方案",detail:"包含对话、上下文、Prompt 模板、模型配置和历史记录。"},{id:"s6-t2",title:"完成知识库问答方案",detail:"包含文档上传、检索、引用、权限和效果优化。"},{id:"s6-t3",title:"完成 AI 生图平台方案",detail:"包含模板、参数、队列、生成记录、积分和定价。"},{id:"s6-t4",title:"完成智能客服方案",detail:"包含意图识别、知识命中、人工转接、满意度和报表。"},{id:"s6-t5",title:"完成 Agent 工作流方案",detail:"包含任务拆解、工具调用、流程编排、人工确认和日志。"}],project:"AI 产品作品集项目集",outcome:"拥有 3-5 个能展示思考深度、方案能力和技术协作意识的 AI 产品作品。",tools:["Figma","Cursor","GitHub Copilot"],faqs:[{q:"作品集要做成真实上线产品吗？",a:"能上线最好，但更关键是问题定义、方案完整度、验证过程和复盘。"},{q:"没有真实公司项目怎么办？",a:"可以做模拟项目，但要选真实人群、真实场景和可验证指标。"},{q:"项目越多越好吗？",a:"不是。2 个深度项目通常比 10 个浅尝辄止的页面更有说服力。"}]},{id:"stage-7",order:7,name:"成熟 AI 产品经理能力",goal:"建立商业化、增长、数据分析、成本优化、团队协作、作品集和面试能力。",duration:"3 周",difficulty:"综合",knowledge:["商业化","增长漏斗","数据分析","留存转化","模型成本优化","效果评估","作品集","面试表达"],tasks:[{id:"s7-t1",title:"设计定价策略",detail:"为一个 AI 产品设计免费、标准、高级和企业版权益。"},{id:"s7-t2",title:"建立增长漏斗",detail:"定义访问、注册、激活、生成、留存、付费、复购指标。"},{id:"s7-t3",title:"写项目复盘",detail:"用背景、目标、方案、数据、问题、迭代计划总结一个项目。"},{id:"s7-t4",title:"制作作品集首页",detail:"突出项目、角色、关键决策、产出物和结果，不做纯截图堆叠。"},{id:"s7-t5",title:"准备面试案例",detail:"用 STAR 法梳理 AI 产品设计、技术协作、数据分析和商业化问题。"}],project:"AI 产品商业化与求职作品集",outcome:"能从产品价值、技术实现、商业结果和团队协作四个角度讲清一个 AI 产品。",tools:["Notion","Mixpanel","Google Analytics"],faqs:[{q:"AI 产品如何定价？",a:"要结合用户价值、调用成本、使用频率、团队席位和企业服务成本。"},{q:"面试最看重什么？",a:"看你是否能定义问题、做取舍、理解 AI 边界，并用项目证明能力。"},{q:"成熟 AI PM 和新人差距在哪里？",a:"成熟 PM 会把体验、技术、成本、数据和商业化放在一个系统里思考。"}]}],Tf=[{id:"chat-assistant",name:"AI 聊天助手产品设计",difficulty:"入门",stage:"阶段 2-3",goal:"设计一个类似 ChatGPT 的 AI 对话产品，掌握对话体验和模型配置基础。",background:"团队希望为内部知识学习和写作提效提供统一 AI 助手，降低员工使用多个工具的切换成本。",painPoints:["用户不知道如何提问","历史对话难以沉淀","不同任务需要不同 Prompt","模型输出质量不稳定"],coreFeatures:["对话界面","Prompt 模板","上下文管理","模型配置","历史记录","收藏与导出"],flow:["选择场景模板","输入任务与约束","模型流式输出","用户追问或改写","保存结果到历史"],aiCapabilities:["Prompt 结构化","上下文压缩","多轮对话","输出格式控制"],techCollaboration:["消息数据结构","流式接口","模型参数","失败重试","敏感内容处理"],portfolio:["PRD","低保真原型","Prompt 模板库","异常状态说明","体验复盘"],skills:["对话产品设计","Prompt 设计","基础技术协作"]},{id:"knowledge-rag",name:"企业知识库问答系统",difficulty:"进阶",stage:"阶段 4-5",goal:"学习 RAG、文档上传、向量检索、权限控制和问答效果优化。",background:"企业内部文档分散，员工查制度、流程、产品资料耗时，希望通过知识库问答提升检索效率。",painPoints:["资料入口分散","搜索结果不精准","回答缺少来源","不同部门权限不同","更新后知识不及时"],coreFeatures:["文档上传","解析状态","知识库管理","引用来源","权限控制","答案反馈"],flow:["管理员上传文档","系统切分向量化","用户提问","检索相关片段","模型生成带引用答案","用户反馈答案质量"],aiCapabilities:["Embedding","向量检索","RAG","重排","引用生成","低置信度兜底"],techCollaboration:["文件解析队列","向量数据库","权限模型","日志追踪","效果评估集"],portfolio:["系统流程图","知识库 PRD","权限矩阵","RAG 效果指标","问答优化复盘"],skills:["RAG 产品设计","权限设计","效果评估"]},{id:"image-platform",name:"AI 图片生成平台",difficulty:"进阶",stage:"阶段 4-6",goal:"设计文生图、图生图、模板系统、生成记录、积分消耗和商业化定价。",background:"内容团队需要快速生成营销图、社媒配图和电商素材，但缺少稳定模板和成本管理。",painPoints:["提示词门槛高","生成结果不可控","素材版权边界不清","高频生成成本高","历史版本难管理"],coreFeatures:["文生图","图生图","模板广场","参数面板","生成队列","积分体系","素材库"],flow:["选择模板","填写主题与风格","调整尺寸与参数","生成并挑选","编辑或重试","保存到素材库"],aiCapabilities:["视觉 Prompt","风格模板","图像生成","结果筛选","安全审核"],techCollaboration:["异步任务","存储 CDN","积分扣减","生成失败补偿","版权风险提示"],portfolio:["生图产品方案","模板体系","积分规则","定价页","生成体验评估"],skills:["多模态产品","商业化","异步任务设计"]},{id:"customer-service",name:"AI 智能客服系统",difficulty:"进阶",stage:"阶段 4-6",goal:"掌握客服场景、意图识别、知识库调用、人工转接和命中率统计。",background:"客服团队重复问题占比高，人工响应慢，希望 AI 先解决常见问题并在复杂场景转人工。",painPoints:["重复咨询多","答案口径不一致","人工转接不及时","客服主管缺少质量报表"],coreFeatures:["多渠道接入","意图识别","知识命中","人工转接","满意度评价","客服报表"],flow:["用户发起咨询","AI 判断意图","检索知识并回答","低置信度转人工","记录会话与评价","主管复盘优化"],aiCapabilities:["意图分类","RAG","置信度判断","对话摘要","质检分析"],techCollaboration:["会话路由","客服系统集成","权限与审计","命中率统计","人工接管状态"],portfolio:["客服场景地图","转人工规则","指标看板","质检流程","上线迭代计划"],skills:["场景拆解","AI 兜底","数据指标"]},{id:"agent-workflow",name:"AI Agent 自动化工作流平台",difficulty:"挑战",stage:"阶段 5-6",goal:"学习 Agent、工具调用、任务拆解、流程编排和自动化执行。",background:"业务团队希望把资料收集、整理、发送和记录等跨工具任务自动化，减少重复操作。",painPoints:["流程跨多个系统","人工复制粘贴多","任务结果不可追踪","自动执行需要人工确认"],coreFeatures:["任务目标输入","工具连接","流程编排","人工确认节点","执行日志","失败重试"],flow:["用户描述目标","系统拆解步骤","选择可用工具","执行并请求确认","输出结果","记录执行日志"],aiCapabilities:["任务规划","工具调用","结构化输出","记忆与上下文","执行校验"],techCollaboration:["工具权限","Webhook","队列状态","审计日志","沙箱与安全边界"],portfolio:["Agent 方案","流程编排图","工具权限表","风险控制说明","自动化 Demo"],skills:["Agent 设计","流程编排","风险控制"]},{id:"commercial-site",name:"AI 产品官网与商业化落地",difficulty:"综合",stage:"阶段 6-7",goal:"学习官网转化、定价页、用户注册、订阅体系和增长漏斗。",background:"AI 产品完成 MVP 后需要面向真实用户获客、解释价值、引导试用并验证付费意愿。",painPoints:["价值表达不清","转化路径过长","价格权益难理解","注册后激活率低","缺少漏斗数据"],coreFeatures:["首页","功能页","定价页","注册登录","订阅权益","案例证明","埋点漏斗"],flow:["用户访问官网","理解核心价值","查看案例与价格","注册试用","完成首次生成","触发升级引导"],aiCapabilities:["AI 价值包装","体验 Demo","用量权益","成本与毛利测算"],techCollaboration:["支付订阅","账号体系","埋点事件","A/B 测试","套餐权限"],portfolio:["官网信息架构","定价策略","增长漏斗","埋点方案","商业化复盘"],skills:["商业化","增长","数据分析"]}],G5=[{category:"AI 工具",tools:[{name:"ChatGPT",purpose:"通用对话、分析、写作和 Prompt 迭代",usage:"用于快速生成方案初稿、模拟用户访谈、改写 PRD 和测试 Prompt 效果。",priority:"优先"},{name:"Claude",purpose:"长文档理解、结构化分析和产品文档润色",usage:"适合处理长 PRD、竞品材料、访谈纪要和复杂推理任务。",priority:"优先"},{name:"Gemini",purpose:"多模态理解和 Google 生态协作",usage:"用于图片、文档、表格混合输入场景的分析与验证。",priority:"建议"},{name:"Perplexity",purpose:"资料检索和带来源研究",usage:"用于行业趋势、竞品背景、岗位要求和市场信息收集。",priority:"优先"},{name:"Midjourney",purpose:"高质量视觉创意生成",usage:"用于探索 AI 生图产品模板、风格参考和营销素材方向。",priority:"建议"},{name:"Sora",purpose:"视频生成与多模态内容探索",usage:"了解视频生成工作流，为多模态产品规划做概念验证。",priority:"了解"},{name:"Cursor",purpose:"AI 编程与原型实现",usage:"用于快速搭建可交互 Demo，理解前后端和 API 接入。",priority:"优先"},{name:"GitHub Copilot",purpose:"代码补全和工程协作",usage:"帮助阅读代码、生成小工具和理解研发协作流程。",priority:"建议"}]},{category:"产品工具",tools:[{name:"Figma",purpose:"原型和界面设计",usage:"制作低保真与高保真原型，表达 AI 输入、生成、反馈和异常状态。",priority:"优先"},{name:"FigJam",purpose:"流程图、脑图和协作白板",usage:"画用户路径、RAG 流程、Agent 编排和项目排期。",priority:"优先"},{name:"Axure",purpose:"复杂交互原型",usage:"适合企业后台、表单联动和权限流程较复杂的产品。",priority:"建议"},{name:"Notion",purpose:"知识管理和作品集",usage:"沉淀学习笔记、PRD、复盘和作品集页面。",priority:"优先"},{name:"Miro",purpose:"团队协作与流程梳理",usage:"用于工作坊、需求共创和复杂系统图梳理。",priority:"建议"},{name:"飞书",purpose:"文档、项目和团队沟通",usage:"写 PRD、同步会议纪要、管理需求和评审记录。",priority:"优先"},{name:"TAPD",purpose:"研发项目管理",usage:"管理需求、缺陷、迭代和测试验收。",priority:"建议"},{name:"Jira",purpose:"敏捷项目管理",usage:"理解 Story、Sprint、看板和跨团队协作流程。",priority:"建议"}]},{category:"数据分析工具",tools:[{name:"Google Analytics",purpose:"网站访问和转化分析",usage:"分析官网流量来源、注册转化和用户行为路径。",priority:"建议"},{name:"Mixpanel",purpose:"事件分析和留存分析",usage:"追踪 AI 功能使用、生成次数、采纳率和留存分群。",priority:"优先"},{name:"神策数据",purpose:"国内常用用户行为分析",usage:"用于埋点设计、漏斗分析和用户分群。",priority:"建议"},{name:"Excel",purpose:"基础数据处理和成本测算",usage:"做 Token 成本、套餐毛利、竞品价格和项目排期表。",priority:"优先"},{name:"SQL",purpose:"查询业务数据",usage:"理解表结构、漏斗数据和功能使用行为。",priority:"建议"},{name:"Python 基础分析",purpose:"批量处理和可视化",usage:"用于简单数据清洗、日志分析和评估样本处理。",priority:"了解"}]},{category:"技术协作工具",tools:[{name:"Postman",purpose:"接口调试",usage:"理解请求、响应、鉴权、错误码和接口边界。",priority:"优先"},{name:"Swagger",purpose:"接口文档",usage:"和研发确认字段、状态码、调试示例和版本变更。",priority:"优先"},{name:"GitHub",purpose:"代码仓库和协作",usage:"阅读 Issue、PR、Release，理解研发工作流。",priority:"建议"},{name:"Docker",purpose:"环境和服务容器化",usage:"理解知识库、向量库、后端服务本地部署的基本概念。",priority:"了解"},{name:"API 文档",purpose:"模型和业务接口说明",usage:"判断模型能力、参数限制、调用成本和错误处理。",priority:"优先"},{name:"数据库设计工具",purpose:"字段和关系建模",usage:"表达会话、消息、知识库、权限、用量和支付数据关系。",priority:"建议"}]}],b1="ai-pm-roadmap-course-progress-v1",_u={completedLessons:[],completedAssignments:[],completedQuizzes:[],completedProjects:[],lastLearningPath:null};function U5(){if(typeof window>"u")return _u;try{return{..._u,...JSON.parse(window.localStorage.getItem(b1)||"{}")}}catch{return _u}}function ni(){const[t,l]=N.useState(U5);N.useEffect(()=>{window.localStorage.setItem(b1,JSON.stringify(t))},[t]);const a=N.useMemo(()=>new Set(t.completedLessons),[t.completedLessons]),u=ft.length,o=ft.filter(C=>a.has(C.id)).length,s=u?Math.round(o/u*100):0,f=s>=86?"AI 产品专家":s>=66?"AI 产品负责人":s>=42?"AI 产品设计师":s>=18?"AI 产品助理":"AI 产品新人",m=ft.find(C=>!a.has(C.id))||null,p=t.lastLearningPath&&ft.find(C=>C.stageSlug===t.lastLearningPath?.stageSlug&&C.slug===t.lastLearningPath?.lessonSlug);return{state:t,completedLessonSet:a,totalLessons:u,completedLessonCount:o,overallPercent:s,level:f,nextLesson:m,continueLesson:p||m,markVisited:(C,w)=>{l(R=>({...R,lastLearningPath:{stageSlug:C,lessonSlug:w,updatedAt:new Date().toISOString()}}))},toggleLesson:(C,w)=>{l(R=>{const U=R.completedLessons.includes(C);return{...R,completedLessons:w??!U?Array.from(new Set([...R.completedLessons,C])):R.completedLessons.filter(en=>en!==C)}})},toggleAssignment:C=>{l(w=>({...w,completedAssignments:w.completedAssignments.includes(C)?w.completedAssignments.filter(R=>R!==C):[...w.completedAssignments,C]}))},toggleQuiz:C=>{l(w=>({...w,completedQuizzes:w.completedQuizzes.includes(C)?w.completedQuizzes.filter(R=>R!==C):[...w.completedQuizzes,C]}))},toggleProject:C=>{l(w=>({...w,completedProjects:w.completedProjects.includes(C)?w.completedProjects.filter(R=>R!==C):[...w.completedProjects,C]}))},resetProgress:()=>{l(_u)}}}const Lg="ai-pm-roadmap-progress-v1",Pg="ai-pm-roadmap-daily-v1",Gg=t=>{if(typeof window>"u")return{};try{return JSON.parse(window.localStorage.getItem(t)||"{}")}catch{return{}}};function H5(t){const[l,a]=N.useState(()=>Gg(Lg)),[u,o]=N.useState(()=>Gg(Pg));N.useEffect(()=>{window.localStorage.setItem(Lg,JSON.stringify(l))},[l]),N.useEffect(()=>{window.localStorage.setItem(Pg,JSON.stringify(u))},[u]);const s=N.useMemo(()=>t.flatMap(C=>C.tasks),[t]),f=s.length,m=s.filter(C=>l[C.id]).length,p=f===0?0:Math.round(m/f*100),h=N.useMemo(()=>t.map(C=>{const w=C.tasks.filter(R=>l[R.id]).length;return{stageId:C.id,done:w,total:C.tasks.length,percent:Math.round(w/C.tasks.length*100),completed:w===C.tasks.length}}),[l,t]),y=p>=86?"AI 产品专家":p>=66?"AI 产品负责人":p>=42?"AI 产品设计师":p>=18?"AI 产品助理":"AI 产品新人",g=t.flatMap(C=>C.tasks.map(w=>({...w,stageName:C.name}))).find(C=>!l[C.id])||null;return{completedTasks:l,dailyCompleted:u,completedCount:m,totalTasks:f,percent:p,level:y,nextTask:g,stageProgress:h,toggleTask:C=>{a(w=>({...w,[C]:!w[C]}))},toggleDailyTask:C=>{o(w=>({...w,[C]:!w[C]}))},resetProgress:()=>{a({}),o({})}}}function q5(){const[t,l]=N.useState("all"),[a,u]=N.useState(""),o=H5(_l),s=ni(),f=Qa(),m=N.useMemo(()=>({"stage-1":"stage-01-ai-pm-intro","stage-2":"stage-02-product-foundation","stage-3":"stage-03-ai-foundation","stage-4":"stage-04-ai-product-design","stage-5":"stage-05-technical-collaboration","stage-6":"stage-06-real-projects","stage-7":"stage-07-advanced-ai-pm"}),[]),p=N.useMemo(()=>_l.map(v=>{const I=Va(m[v.id]),C=I.filter(R=>s.completedLessonSet.has(R.id)).length,w=I.length;return{stageId:v.id,done:C,total:w,percent:w?Math.round(C/w*100):0,completed:w>0&&C===w}}),[s.completedLessonSet,m]),h=N.useMemo(()=>{const v=new Map;return _l.forEach(I=>{const C=Va(m[I.id]);I.tasks.forEach((w,R)=>{const U=C[R];U&&v.set(w.id,U.id)})}),v},[m]),y=N.useMemo(()=>{const v={};return h.forEach((I,C)=>{v[C]=s.completedLessonSet.has(I)}),v},[s.completedLessonSet,h]),g=s.continueLesson?{title:s.continueLesson.frontmatter.title,detail:`继续学习 ${s.continueLesson.frontmatter.stageTitle||"课程内容"}`,stageName:s.continueLesson.frontmatter.stageTitle||"课程学习"}:null,b=v=>{const I=h.get(v);I&&s.toggleLesson(I)};return A.jsxs("main",{children:[A.jsx(kE,{percent:s.overallPercent,level:s.level,nextTask:s.continueLesson?{title:s.continueLesson.frontmatter.title,stageName:s.continueLesson.frontmatter.stageTitle||""}:o.nextTask,onPrimary:()=>f("/learn"),onSecondary:()=>document.getElementById("skill-map")?.scrollIntoView({behavior:"smooth"})}),A.jsx(wE,{stages:_l,percent:s.overallPercent,level:s.level,completedCount:s.completedLessonCount,totalTasks:s.totalLessons,stageProgress:p,nextTask:g,onReset:s.resetProgress,unitLabel:"节课程"}),A.jsx(EE,{stages:_l,completedTasks:y,selectedStage:t,searchQuery:a,onSelectStage:l,onSearch:u,onToggleTask:b,stageProgress:p}),A.jsx(jE,{}),A.jsx(_E,{projects:Tf,searchQuery:a,selectedStage:t}),A.jsx(NE,{categories:G5,searchQuery:a}),A.jsx(DE,{dailyCompleted:o.dailyCompleted,onToggleDailyTask:o.toggleDailyTask}),A.jsx(CE,{}),A.jsx(IE,{categories:P5})]})}function V5(){const t=ni(),l=t.continueLesson?`/learn/${t.continueLesson.stageSlug}/${t.continueLesson.slug}`:"/learn/stage-01-ai-pm-intro";return A.jsxs("main",{className:"pt-24",children:[A.jsx("section",{className:"container-page",children:A.jsx("div",{className:"panel rounded-2xl p-6 lg:p-8",children:A.jsxs("div",{className:"grid gap-8 lg:grid-cols-[1fr_360px] lg:items-center",children:[A.jsxs("div",{children:[A.jsx("h1",{className:"text-4xl font-semibold tracking-normal text-slate-950 dark:text-white",children:"AI 产品经理开源课程"}),A.jsx("p",{className:"mt-4 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300",children:"从岗位认知、产品基本功、AI 基础、技术协作到项目实战和作品集，按阶段阅读课程、完成练习和作业。"}),A.jsxs("div",{className:"mt-6 flex flex-col gap-3 sm:flex-row",children:[A.jsxs(fe,{to:l,className:"inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-700 dark:bg-white dark:text-slate-950",children:["继续学习 ",A.jsx(Hu,{size:17})]}),A.jsx(fe,{to:"/search",className:"inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 dark:border-white/10 dark:bg-white/5 dark:text-white",children:"搜索课程"})]})]}),A.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-slate-900/70",children:[A.jsx("p",{className:"text-sm text-slate-500 dark:text-slate-400",children:"当前总进度"}),A.jsxs("p",{className:"mt-2 text-4xl font-semibold text-slate-950 dark:text-white",children:[t.overallPercent,"%"]}),A.jsx("div",{className:"mt-4 h-2 rounded-full bg-slate-200 dark:bg-slate-800",children:A.jsx("div",{className:"h-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400",style:{width:`${t.overallPercent}%`}})}),A.jsxs("p",{className:"mt-3 text-sm text-slate-600 dark:text-slate-300",children:["已完成 ",t.completedLessonCount,"/",t.totalLessons," 节完整课程"]})]})]})})}),A.jsx("section",{className:"container-page py-12",children:A.jsx("div",{className:"grid gap-5 lg:grid-cols-2",children:Ku.map(a=>{const u=Va(a.slug),o=u.filter(f=>t.completedLessonSet.has(f.id)).length,s=u.length||a.frontmatter.lessonCount||0;return A.jsxs(fe,{to:`/learn/${a.slug}`,className:"panel rounded-2xl p-5 transition hover:-translate-y-1 hover:border-blue-200 dark:hover:border-cyan-300/30",children:[A.jsxs("div",{className:"flex items-start justify-between gap-4",children:[A.jsxs("div",{children:[A.jsxs("p",{className:"text-sm font-medium text-blue-700 dark:text-cyan-300",children:["阶段 ",a.frontmatter.order]}),A.jsx("h2",{className:"mt-2 text-2xl font-semibold text-slate-950 dark:text-white",children:a.frontmatter.title}),A.jsx("p",{className:"mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300",children:a.excerpt})]}),A.jsx(s0,{className:"shrink-0 text-blue-600 dark:text-cyan-300",size:22})]}),A.jsxs("div",{className:"mt-5 grid gap-3 text-sm text-slate-600 sm:grid-cols-3 dark:text-slate-300",children:[A.jsxs("span",{children:[s," 节课"]}),A.jsx("span",{children:a.frontmatter.duration}),A.jsxs("span",{children:["已完成 ",o,"/",s]})]}),A.jsx("div",{className:"mt-4 h-2 rounded-full bg-slate-200 dark:bg-slate-800",children:A.jsx("div",{className:"h-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400",style:{width:`${s?Math.round(o/s*100):0}%`}})}),A.jsxs("p",{className:"mt-4 text-xs text-slate-500 dark:text-slate-400",children:["阶段项目：",a.frontmatter.project]})]},a.slug)})})}),A.jsx("section",{className:"container-page pb-16",children:A.jsxs("div",{className:"grid gap-5 lg:grid-cols-2",children:[A.jsxs("div",{className:"panel rounded-2xl p-6",children:[A.jsx("h2",{className:"text-xl font-semibold text-slate-950 dark:text-white",children:"推荐学习顺序"}),A.jsxs("ol",{className:"mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-slate-600 dark:text-slate-300",children:[A.jsx("li",{children:"先完整读完第一阶段，完成产品分析报告。"}),A.jsx("li",{children:"第二阶段补产品基本功，再进入 AI 概念。"}),A.jsx("li",{children:"每个阶段至少保留一个可展示产出，不要只阅读。"})]})]}),A.jsxs("div",{className:"panel rounded-2xl p-6",children:[A.jsxs("h2",{className:"flex items-center gap-2 text-xl font-semibold text-slate-950 dark:text-white",children:[A.jsx(f0,{size:20}),"新手学习建议"]}),A.jsx("p",{className:"mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300",children:"每天建议学习 45-90 分钟。阅读课程后立刻做练习，把作业沉淀到 Notion 或 Markdown。真正的成长来自“读完、做过、复盘、能讲清”。"})]})]})})]})}function Y5({completed:t,mobileOpen:l=!1,onClose:a}){const u=zl();return A.jsxs("aside",{className:`fixed inset-y-0 left-0 z-50 w-80 overflow-y-auto border-r border-slate-200 bg-white p-4 transition lg:sticky lg:top-16 lg:z-0 lg:block lg:h-[calc(100vh-4rem)] lg:w-72 dark:border-white/10 dark:bg-slate-950 ${l?"translate-x-0":"-translate-x-full lg:translate-x-0"}`,children:[A.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[A.jsxs(fe,{to:"/learn",className:"flex items-center gap-2 text-sm font-semibold text-slate-950 dark:text-white",children:[A.jsx(s0,{size:18}),"课程目录"]}),A.jsx("button",{onClick:a,className:"grid h-9 w-9 place-items-center rounded-lg border border-slate-200 lg:hidden dark:border-white/10","aria-label":"关闭目录",children:A.jsx(m0,{size:17})})]}),A.jsx("div",{className:"space-y-5",children:Ku.map(o=>{const s=Va(o.slug);return A.jsxs("div",{children:[A.jsxs(fe,{to:`/learn/${o.slug}`,className:`block rounded-lg px-3 py-2 text-sm font-semibold ${u.stageSlug===o.slug?"bg-blue-50 text-blue-700 dark:bg-cyan-300/10 dark:text-cyan-200":"text-slate-800 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10"}`,children:[o.frontmatter.order,". ",o.frontmatter.title]}),A.jsx("div",{className:"mt-2 space-y-1",children:s.map(f=>A.jsxs(fe,{to:`/learn/${f.stageSlug}/${f.slug}`,className:`flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-xs leading-5 ${u.lessonSlug===f.slug?"bg-slate-950 text-white dark:bg-white dark:text-slate-950":"text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-white"}`,children:[A.jsxs("span",{children:[f.frontmatter.lesson,". ",f.frontmatter.title]}),t.has(f.id)&&A.jsx("span",{className:"text-cyan-500",children:"完成"})]},f.id))})]},o.slug)})})]})}function Q5({prev:t,next:l}){return A.jsxs("div",{className:"mt-12 grid gap-3 border-t border-slate-200 pt-6 sm:grid-cols-2 dark:border-white/10",children:[t?A.jsxs(fe,{to:`/learn/${t.stageSlug}/${t.slug}`,className:"rounded-2xl border border-slate-200 bg-white p-4 transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/5",children:[A.jsxs("span",{className:"flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400",children:[A.jsx(Tb,{size:14}),"上一节"]}),A.jsx("p",{className:"mt-2 text-sm font-semibold text-slate-950 dark:text-white",children:t.frontmatter.title})]}):A.jsx("div",{}),l?A.jsxs(fe,{to:`/learn/${l.stageSlug}/${l.slug}`,className:"rounded-2xl border border-slate-200 bg-white p-4 text-right transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/5",children:[A.jsxs("span",{className:"flex items-center justify-end gap-2 text-xs text-slate-500 dark:text-slate-400",children:["下一节",A.jsx(Hu,{size:14})]}),A.jsx("p",{className:"mt-2 text-sm font-semibold text-slate-950 dark:text-white",children:l.frontmatter.title})]}):A.jsx("div",{})]})}function X5({value:t}){return A.jsx("div",{className:"fixed inset-x-0 top-16 z-40 h-1 bg-slate-200 dark:bg-slate-900",children:A.jsx("div",{className:"h-1 bg-gradient-to-r from-blue-600 via-violet-500 to-cyan-400 transition-all",style:{width:`${t}%`}})})}function Z5({lesson:t,completed:l,onComplete:a}){return A.jsx("aside",{className:"hidden w-64 shrink-0 lg:block",children:A.jsxs("div",{className:"sticky top-24 space-y-4",children:[A.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/5",children:[A.jsx("p",{className:"text-xs font-medium text-slate-500 dark:text-slate-400",children:"本节目标"}),A.jsx("ul",{className:"mt-3 space-y-2",children:(t.frontmatter.objectives||[]).map(u=>A.jsx("li",{className:"text-xs leading-5 text-slate-600 dark:text-slate-300",children:u},u))}),A.jsx("button",{onClick:a,className:`mt-4 w-full rounded-lg px-3 py-2 text-sm font-semibold transition ${l?"bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-200":"bg-slate-950 text-white hover:bg-blue-700 dark:bg-white dark:text-slate-950"}`,children:l?"已完成":"标记为已完成"})]}),A.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/5",children:[A.jsx("p",{className:"text-xs font-medium text-slate-500 dark:text-slate-400",children:"本节目录"}),A.jsx("nav",{className:"mt-3 space-y-2",children:t.headings.map(u=>A.jsx("a",{href:`#${u.id}`,className:`block text-xs leading-5 text-slate-500 hover:text-blue-700 dark:text-slate-400 dark:hover:text-cyan-300 ${u.depth===3?"pl-3":""}`,children:u.text},u.id))})]})]})})}function $5(){const[t,l]=N.useState(0);return N.useEffect(()=>{const a=()=>{const u=window.scrollY,o=document.documentElement.scrollHeight-window.innerHeight;l(o<=0?0:Math.min(100,Math.round(u/o*100)))};return a(),window.addEventListener("scroll",a,{passive:!0}),window.addEventListener("resize",a),()=>{window.removeEventListener("scroll",a),window.removeEventListener("resize",a)}},[]),t}function K5(){const{stageSlug:t,lessonSlug:l}=zl(),a=O5(t,l),[u,o]=N.useState(!1),s=ni(),f=$5();if(N.useEffect(()=>{a&&s.markVisited(a.stageSlug,a.slug)},[a?.id]),!a)return A.jsx(Gu,{to:"/learn",replace:!0});const m=L5(a),p=s.completedLessonSet.has(a.id);return A.jsxs("main",{className:"pt-16",children:[A.jsx(X5,{value:f}),A.jsx("div",{className:"lg:hidden",children:A.jsxs("button",{onClick:()=>o(!0),className:"fixed bottom-5 left-5 z-40 inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-3 text-sm font-semibold text-white shadow-xl dark:bg-white dark:text-slate-950",children:[A.jsx(d0,{size:17})," 目录"]})}),A.jsxs("div",{className:"flex",children:[A.jsx(Y5,{completed:s.completedLessonSet,mobileOpen:u,onClose:()=>o(!1)}),A.jsxs("article",{className:"mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 lg:px-8",children:[A.jsxs("div",{className:"mb-8 rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/5",children:[A.jsxs("div",{className:"flex flex-wrap gap-2",children:[A.jsx("span",{className:"rounded-md bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700 dark:bg-cyan-300/10 dark:text-cyan-200",children:a.frontmatter.stageTitle}),A.jsx("span",{className:"rounded-md bg-slate-100 px-2.5 py-1 text-xs text-slate-600 dark:bg-white/10 dark:text-slate-300",children:a.frontmatter.difficulty}),A.jsx("span",{className:"rounded-md bg-slate-100 px-2.5 py-1 text-xs text-slate-600 dark:bg-white/10 dark:text-slate-300",children:a.frontmatter.duration})]}),A.jsx("h1",{className:"mt-4 text-4xl font-semibold leading-tight text-slate-950 dark:text-white",children:a.frontmatter.title}),A.jsx("div",{className:"mt-4 grid gap-3 sm:grid-cols-2",children:(a.frontmatter.deliverables||[]).map(h=>A.jsx("div",{className:"rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-600 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-300",children:h},h))})]}),A.jsx(Ja,{content:a.content.replace(/^# .+(\r?\n)+/,"")}),A.jsxs("div",{className:"mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-5 dark:border-cyan-300/20 dark:bg-cyan-300/10",children:[A.jsx("h2",{className:"text-xl font-semibold text-slate-950 dark:text-white",children:"完成本节"}),A.jsx("p",{className:"mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300",children:"完成阅读、练习和作业后，点击按钮记录学习进度。刷新页面后状态会保留。"}),A.jsx("button",{onClick:()=>s.toggleLesson(a.id),className:`mt-4 rounded-lg px-5 py-3 text-sm font-semibold ${p?"bg-emerald-600 text-white":"bg-slate-950 text-white dark:bg-white dark:text-slate-950"}`,children:p?"取消完成":"标记为已完成"})]}),A.jsx(Q5,{prev:m.prev,next:m.next})]}),A.jsx(Z5,{lesson:a,completed:p,onComplete:()=>s.toggleLesson(a.id,!0)})]})]})}const J5=`---\r
title: AI Agent 自动化工作流平台\r
project: agent-workflow\r
difficulty: 挑战\r
stageTitle: 阶段 5-6\r
type: 实战项目\r
tags:\r
  - Agent\r
  - Tool Calling\r
  - 工作流\r
---\r
\r
# AI Agent 自动化工作流平台\r
\r
## 项目概述\r
\r
本项目设计一个 AI Agent 自动化工作流平台，帮助用户把跨工具、重复性办公任务拆成可执行流程。平台支持目标输入、任务拆解、工具连接、流程编排、人工确认、执行日志和失败重试。它的关键不是“自动完成一切”，而是让自动化可控、可追溯、可迭代。\r
\r
> 图片占位：AI Agent 工作流平台总览图  \r
> 建议文件名：ai-agent-workflow-overview.png  \r
> 图片用途：展示目标输入、任务拆解、工具调用、人工确认、执行日志和结果输出的整体产品。  \r
> 生图提示词：生成一张 AI Agent 自动化工作流平台总览图，包含用户目标输入、任务规划、步骤拆解、工具连接、人工确认、执行队列、失败重试、审计日志、结果输出等模块。白色背景，蓝紫渐变，中文标签清晰，16:9，无水印，无真实品牌 Logo。\r
\r
## 适合学习阶段\r
\r
适合完成技术协作和 RAG/Agent 基础的学习者。该项目适合挑战型作品集，能展示高级 AI 产品经理对工具权限、流程编排和风险控制的理解。\r
\r
## 项目背景\r
\r
业务团队经常做跨系统重复任务：收集资料、整理表格、生成报告、发送通知、更新 CRM。传统自动化工具配置门槛高，普通用户不会写规则。Agent 有机会通过自然语言目标生成流程，但执行真实操作会带来权限、错误和安全风险。\r
\r
## 目标用户\r
\r
- 运营人员：自动整理活动数据、生成复盘和通知。\r
- 销售人员：整理客户信息、生成跟进邮件、更新 CRM。\r
- 项目经理：汇总进度、生成报告、创建待办。\r
- 团队管理员：管理工具连接、权限和审计。\r
\r
## 用户痛点\r
\r
1. 任务跨多个系统，复制粘贴耗时。\r
2. 自动化工具配置复杂，非技术用户难上手。\r
3. 执行过程不可见，用户不敢让 AI 自动操作。\r
4. 工具权限边界不清，容易产生安全风险。\r
5. 执行失败后难以定位原因和重试。\r
6. 缺少模板和日志，流程无法复用和审计。\r
\r
## 产品目标\r
\r
1. 让用户用自然语言创建一个可执行流程草稿。\r
2. 核心模板任务完成率达到 70% 以上。\r
3. 高风险工具操作 100% 需要人工确认。\r
4. 每次执行都有完整日志和失败原因。\r
5. 将重复办公任务平均处理时间降低 40%。\r
\r
## MVP 范围\r
\r
第一版做：目标输入、任务拆解、流程模板、工具连接、人工确认、执行状态、失败重试、日志、结果导出。第一版不做：完全自主高风险执行、任意第三方工具市场、复杂权限继承、自动支付或删除数据操作。\r
\r
## 核心功能清单\r
\r
- 目标输入：自然语言描述任务目标和约束。\r
- 任务拆解：Agent 生成步骤，用户可编辑。\r
- 工具连接：文档、表格、邮件、日历、CRM、搜索。\r
- 工作流编排：步骤顺序、条件判断、人工确认节点。\r
- 执行监控：状态、日志、失败原因、重试。\r
- 管理后台：工具权限、模板、审计、风险记录。\r
\r
## 页面结构\r
\r
工作台包括目标输入区、步骤列表、工具节点、运行按钮和日志面板。模板页展示常用流程。工具管理页展示已连接工具、权限范围和使用记录。监控页展示执行成功率、失败原因和风险事件。\r
\r
## 用户流程\r
\r
1. 用户输入目标，例如“整理本周竞品动态并生成报告”。\r
2. Agent 拆解步骤并推荐工具。\r
3. 用户检查步骤、修改输入和确认权限。\r
4. 系统逐步执行，关键动作请求人工确认。\r
5. 执行完成后输出报告和日志。\r
6. 用户保存为模板或复盘失败步骤。\r
\r
> 图片占位：Agent 任务拆解流程图  \r
> 建议文件名：agent-task-decomposition-flow.png  \r
> 图片用途：展示目标输入后如何拆成步骤、工具和确认节点。  \r
> 生图提示词：生成一张 Agent 任务拆解流程图，包含用户目标、任务理解、步骤规划、工具匹配、参数生成、人工确认、执行、结果观察、下一步调整等节点。白色背景，蓝紫渐变，中文标签，16:9，无水印。\r
\r
## AI 能力点\r
\r
涉及任务规划、Tool Calling、结构化输出、上下文管理、执行校验、日志摘要和失败归因。Agent 必须能把自然语言目标转成可检查的步骤，而不是直接黑箱执行。\r
\r
## 技术协作点\r
\r
需要确认 API 入参出参、工具鉴权、Webhook、流式或轮询执行状态、错误处理、权限、日志、成本、数据存储、文件上传、模型切换、敏感词和安全策略、模型失败兜底、用户反馈回流。每个工具要定义可读、可写、可执行权限和审计日志。\r
\r
> 图片占位：Agent 工具调用架构图  \r
> 建议文件名：agent-tool-calling-architecture.png  \r
> 图片用途：展示 Agent 如何连接工具、调用 API、记录日志和请求确认。  \r
> 生图提示词：生成一张 Agent 工具调用架构图，包含 Agent 规划器、工具注册中心、权限校验、API 调用、Webhook、人工确认、执行队列、审计日志、错误重试等模块。白色背景，蓝紫渐变，中文标签清晰，16:9，无水印。\r
\r
## 数据指标设计\r
\r
- 使用指标：创建流程数、模板使用率、工具连接数。\r
- 效果指标：任务完成率、平均节省时间、用户确认通过率。\r
- 成本指标：单任务 Token、工具调用成本、失败重试成本。\r
- 留存指标：模板复用、周活工作流、团队使用率。\r
- 质量指标：执行失败率、步骤修改率、用户撤销率。\r
- 风险指标：越权拦截、高风险确认、异常工具调用。\r
\r
## PRD 大纲\r
\r
1. 背景与目标  \r
2. 目标用户和任务场景  \r
3. MVP 范围  \r
4. 目标输入与任务拆解  \r
5. 工具连接与权限  \r
6. 流程编排与人工确认  \r
7. 执行日志和失败重试  \r
8. 指标、风险和安全策略\r
\r
## 原型设计说明\r
\r
工作台应像可编辑的执行清单。每个步骤展示工具、输入、输出、状态和风险级别。人工确认节点要突出“将要执行什么”和“可能影响什么”。日志面板要可折叠但随时可查。\r
\r
> 图片占位：Agent 工作流搭建界面图  \r
> 建议文件名：agent-workflow-builder-ui.png  \r
> 图片用途：展示目标输入、步骤列表、工具节点、确认按钮和日志面板的低保真界面。  \r
> 生图提示词：生成一张 Agent 工作流搭建界面图，包含目标输入区、步骤拆解列表、工具调用节点、人工确认按钮、执行状态标签、日志面板、保存模板按钮。白色背景，蓝紫渐变，中文标签，16:9，无水印。\r
\r
## 交互细节\r
\r
步骤生成后默认不自动执行；高风险步骤必须确认；用户可跳过、编辑、重试步骤；工具连接失败显示原因；执行完成后生成摘要；失败任务可复制日志给技术排查。\r
\r
## Prompt 设计\r
\r
Agent 规划 Prompt 应要求输出结构化步骤：步骤名称、目的、所需工具、输入参数、是否需要确认、失败处理。执行 Prompt 要限制只使用已授权工具，不得编造工具返回结果。\r
\r
## 风险与边界\r
\r
风险包括误操作、越权、数据泄露、错误工具调用、成本失控、用户过度信任。边界策略包括最小权限、人工确认、工具白名单、审计日志、沙箱测试、失败回滚和风险提示。\r
\r
## 迭代方向\r
\r
V1 做建议型和半自动流程；V2 增加模板市场和团队权限；V3 支持更多企业工具和条件分支；V4 做自动优化、监控告警和企业审计。\r
\r
## 作品集产出\r
\r
可产出 Agent 产品方案、流程编排图、工具权限表、人工确认规则、日志字段表、风险控制说明和项目复盘。\r
\r
> 图片占位：Agent 执行监控看板  \r
> 建议文件名：agent-monitoring-dashboard.png  \r
> 图片用途：展示任务完成率、失败率、工具调用、人工确认、风险事件和成本。  \r
> 生图提示词：生成一张 Agent 执行监控看板，包含任务完成率、执行失败率、工具调用次数、人工确认率、平均节省时间、异常工具调用、风险事件、单任务成本等图表。白色背景，蓝紫渐变，中文标签，16:9，无水印。\r
\r
## 项目作业\r
\r
完成 Agent 工作流项目包：产品方案、目标流程图、工具权限表、低保真原型、日志字段表、风险清单和复盘。\r
\r
## 检查清单\r
\r
- 是否明确 Agent 不是普通聊天。\r
- 是否有工具权限和人工确认。\r
- 是否有执行日志和失败重试。\r
- 是否有风险边界和审计。\r
- 是否有模板复用和指标看板。`,W5=`---\r
title: AI 聊天助手产品设计\r
project: chat-assistant\r
difficulty: 入门\r
stageTitle: 阶段 2-3\r
type: 实战项目\r
tags:\r
  - AI 聊天助手\r
  - Prompt\r
  - 对话体验\r
---\r
\r
# AI 聊天助手产品设计\r
\r
## 项目概述\r
\r
本项目要设计一个面向职场效率场景的 AI 聊天助手，帮助用户完成周报生成、会议纪要整理、文案润色、资料总结和头脑风暴。项目重点不是做一个“万能聊天框”，而是把对话能力产品化：用场景模板降低提问门槛，用结构化输入提升输出质量，用历史和反馈沉淀结果，用日志和成本看板支撑迭代。\r
\r
> 图片占位：AI 聊天助手项目总览图  \r
> 建议文件名：ai-chat-assistant-overview.png  \r
> 图片用途：展示 AI 聊天助手的目标用户、核心场景、主要模块和产品闭环。  \r
> 生图提示词：生成一张现代科技风的 AI 聊天助手项目总览图，画面包含职场用户、场景模板、结构化输入、对话生成、历史记录、反馈评价、成本日志等模块。白色背景，蓝紫色渐变线条，中文标签清晰，16:9，无水印，无真实品牌 Logo，适合开源课程网站。\r
\r
## 适合学习阶段\r
\r
适合完成产品基础和 AI 基础的学习者。它能训练用户调研、需求分析、PRD、Prompt 设计、流式响应、指标设计和作品集表达，是 AI 产品经理入门作品集中最稳的项目之一。\r
\r
## 项目背景\r
\r
许多职场用户已经开始使用通用 AI 工具，但使用方式分散：有人不会写 Prompt，有人把结果复制到本地文档，有人生成过的内容无法复用，团队也无法知道哪些模板有效。企业希望提供一个统一助手，让员工围绕高频任务使用 AI，同时能控制成本、安全和输出质量。\r
\r
## 目标用户\r
\r
- 职场新人：需要快速写周报、总结资料、准备汇报。\r
- 内容运营：需要生成标题、文案、活动说明和社媒内容。\r
- 产品经理：需要整理调研记录、PRD 初稿和会议纪要。\r
- 团队管理者：需要统一团队输出格式，并查看使用效果。\r
\r
## 用户痛点\r
\r
1. 不知道如何向 AI 描述任务，输入过于宽泛。\r
2. 每次都要重复写 Prompt，无法沉淀可复用模板。\r
3. 输出格式不稳定，复制到工作文档后还要大量调整。\r
4. 历史对话难查找，优秀结果不能收藏或复用。\r
5. 模型回答质量不稳定，用户无法反馈具体问题。\r
6. 团队看不到调用成本和模板效果，无法运营优化。\r
\r
## 产品目标\r
\r
1. 让新用户在 3 分钟内完成第一次高质量生成。\r
2. 让核心模板的复制或保存率达到 40% 以上。\r
3. 将无效输入导致的生成失败率控制在 10% 以下。\r
4. 支持按模板、用户、模型统计调用成本。\r
5. 收集至少 5 类结构化反馈，用于 Prompt 和模板迭代。\r
\r
## MVP 范围\r
\r
第一版做：登录后的对话页、场景模板、结构化输入、流式输出、重新生成、快捷改写、历史记录、收藏、反馈、基础成本日志。第一版不做：企业知识库检索、自动读取内部系统、多人协作编辑、复杂 Agent 执行、私有化模型部署。\r
\r
## 核心功能清单\r
\r
- 场景模板：周报、会议纪要、文案润色、资料总结、头脑风暴。\r
- 对话体验：多轮对话、流式输出、停止生成、继续生成。\r
- 输出操作：复制、导出、收藏、重新生成、改写、缩短、正式化。\r
- 历史管理：会话列表、搜索、标签、收藏。\r
- 反馈机制：有帮助、事实错误、太空泛、格式不对、不安全。\r
- 管理能力：模板使用量、Token 成本、错误率、满意度。\r
\r
## 页面结构\r
\r
首页进入助手后，页面分为左侧历史会话、中间对话区、底部输入区、右侧模板面板。模板详情页展示适用场景、输入字段、示例和最近使用。后台管理页展示模板效果、调用量、成本和反馈问题。\r
\r
## 用户流程\r
\r
1. 用户进入聊天助手页面。\r
2. 选择一个场景模板，例如“写周报”。\r
3. 填写任务、背景、约束和输出格式。\r
4. 点击生成，系统开始流式输出。\r
5. 用户复制、保存、继续追问或点击快捷改写。\r
6. 用户对回答进行反馈。\r
7. 系统记录模板、模型、Token、耗时和反馈。\r
\r
> 图片占位：AI 聊天助手用户流程图  \r
> 建议文件名：ai-chat-assistant-user-flow.png  \r
> 图片用途：展示用户从选择模板、输入任务、生成结果、追问改写到保存反馈的完整路径。  \r
> 生图提示词：生成一张 AI 聊天助手用户流程图，包含进入助手、选择场景模板、填写结构化输入、点击生成、流式输出、追问改写、复制保存、反馈评价、历史复用等步骤。白色背景，蓝紫渐变，中文标签，16:9，无水印，无真实品牌 Logo。\r
\r
## AI 能力点\r
\r
项目涉及 Prompt 模板、上下文管理、多轮对话、流式输出、输出格式控制、敏感内容检测和成本统计。第一版不需要 RAG，但要为后续知识库能力预留上下文和知识来源字段。\r
\r
## 技术协作点\r
\r
需要确认聊天 API 的入参出参，包括用户消息、模板 ID、会话 ID、模型、是否流式、上下文策略。需要支持流式响应、停止生成、错误处理、限流、登录权限、会话存储、消息存储、Token 统计、模型切换、敏感内容策略、模型失败兜底和用户反馈回流。日志至少记录用户、模板、模型、输入输出长度、耗时、状态、错误码和反馈。\r
\r
> 图片占位：AI 聊天助手产品架构图  \r
> 建议文件名：ai-chat-assistant-architecture.png  \r
> 图片用途：用于展示 AI 聊天助手从用户输入、Prompt 处理、模型调用、上下文管理到结果输出的完整链路。  \r
> 生图提示词：生成一张现代科技风的 AI 产品架构图，主题是“AI 聊天助手产品架构”。画面包含用户输入、前端对话界面、Prompt 模板层、上下文管理、模型 API、工具调用、数据库、日志监控、回答输出等模块。风格干净高级，白色背景，蓝紫色渐变线条，适合开源课程网站插图，16:9，中文标签，信息清晰，无水印。\r
\r
## 数据指标设计\r
\r
- 使用指标：DAU、模板使用率、对话轮次、历史复用率。\r
- 效果指标：复制率、保存率、满意度、重试率。\r
- 成本指标：单次 Token、单次成本、用户月成本、模板成本。\r
- 留存指标：次日留存、7 日留存、模板复用率。\r
- 质量指标：反馈问题类型、格式错误率、敏感拦截率。\r
- 风险指标：违规内容率、失败率、超时率、投诉数。\r
\r
## PRD 大纲\r
\r
1. 项目背景与目标  \r
2. 用户与场景  \r
3. MVP 范围  \r
4. 对话页功能说明  \r
5. 模板系统说明  \r
6. Prompt 结构与上下文规则  \r
7. 历史、收藏和反馈  \r
8. 接口、日志与成本  \r
9. 异常与安全策略  \r
10. 指标、上线计划和迭代方向\r
\r
## 原型设计说明\r
\r
低保真原型优先表达区域和状态，不追求视觉。对话区要展示用户消息、AI 消息、生成中状态、错误提示和引用扩展位。模板面板要展示模板分类、输入字段和示例。后台看板要展示模板排行、成本趋势和反馈问题。\r
\r
## 交互细节\r
\r
生成中按钮变为“停止生成”；停止后保留已生成内容；输入过短时提示补充背景；模型失败时允许重试；重新生成要保留旧版本；用户反馈后可选择问题类型；复制和导出要提示成功。\r
\r
## Prompt 设计\r
\r
模板 Prompt 建议结构：角色、任务、用户输入、输出格式、限制条件、信息不足处理。示例：你是职场写作助手，请根据用户提供的本周事项、数据、风险和下周计划生成周报；输出包含本周重点、进展、风险、下周计划；不要编造用户未提供的数据；信息不足时列出需要补充的问题。\r
\r
> 图片占位：AI 聊天助手 Prompt 结构图  \r
> 建议文件名：ai-chat-assistant-prompt-structure.png  \r
> 图片用途：展示角色、任务、输入、约束、输出格式、示例和反馈如何组成模板 Prompt。  \r
> 生图提示词：生成一张 AI 聊天助手 Prompt 结构图，包含角色设定、任务目标、用户输入、背景信息、限制条件、输出格式、示例、质量标准、反馈优化等模块。白色背景，蓝紫渐变，中文标签清晰，16:9，无水印。\r
\r
## 风险与边界\r
\r
风险包括模型编造事实、输出敏感内容、用户输入隐私信息、成本超限、模型服务不可用。边界策略包括不承诺法律医疗财务结论，敏感内容提示，输入长度限制，失败重试，成本告警和模型降级。\r
\r
## 迭代方向\r
\r
V1 做模板化聊天助手；V2 增加团队模板、知识库引用和更细反馈；V3 接入 Agent 工具、团队协作和企业权限；V4 做商业化套餐和管理后台。\r
\r
## 作品集产出\r
\r
可产出 PRD、用户流程图、对话页原型、Prompt 模板库、指标看板、技术协作清单、项目复盘。作品集要展示为什么选择这些模板，以及如何根据反馈优化。\r
\r
> 图片占位：AI 聊天助手指标看板  \r
> 建议文件名：ai-chat-assistant-metrics-dashboard.png  \r
> 图片用途：展示模板使用、生成完成率、复制率、重试率、满意度和成本趋势。  \r
> 生图提示词：生成一张 AI 聊天助手指标看板，包含模板使用排行、生成完成率、复制率、重试率、满意度评分、平均响应时长、Token 成本趋势、错误类型分布。现代 SaaS 风格，白色背景，蓝紫渐变，中文标签，16:9，无水印。\r
\r
## 项目作业\r
\r
请完成一个 AI 聊天助手项目包：1 份 PRD、1 张用户流程图、3 个低保真页面、3 个 Prompt 模板、1 张指标表、1 份技术协作清单和 1 页项目复盘。\r
\r
## 检查清单\r
\r
- 是否明确目标用户和高频场景。\r
- 是否写清 MVP 做与不做。\r
- 是否有模板、对话、历史、反馈和成本。\r
- 是否设计了流式输出和异常状态。\r
- 是否有 Prompt 模板和测试样例。\r
- 是否有可衡量指标和风险边界。`,n4=`---\r
title: AI 产品官网与商业化落地\r
project: commercial-site\r
difficulty: 综合\r
stageTitle: 阶段 6-7\r
type: 实战项目\r
tags:\r
  - 商业化\r
  - 定价\r
  - 增长漏斗\r
---\r
\r
# AI 产品官网与商业化落地\r
\r
## 项目概述\r
\r
本项目设计一个 AI SaaS 产品的官网、注册试用、定价套餐、额度权益、支付订阅和增长漏斗。它训练你从“功能能用”走向“产品能获客、能转化、能留存、能赚钱”。\r
\r
> 图片占位：AI SaaS 官网结构图  \r
> 建议文件名：ai-saas-landing-page-structure.png  \r
> 图片用途：展示 AI SaaS 官网首屏、功能、场景、案例、定价、FAQ 和注册路径。  \r
> 生图提示词：生成一张 AI SaaS 官网结构图，包含首屏价值表达、目标用户、核心功能、使用场景、产品截图占位、客户案例占位、定价入口、FAQ、注册试用按钮等模块。白色背景，蓝紫渐变，中文标签清晰，16:9，无水印，无真实品牌 Logo。\r
\r
## 适合学习阶段\r
\r
适合完成实战项目后希望补商业化能力的学习者。它能训练价值表达、定价、额度、成本、漏斗、激活和增长分析。\r
\r
## 项目背景\r
\r
很多 AI 产品完成 MVP 后，用户仍不知道它解决什么问题，也不清楚为什么值得付费。产品需要官网解释价值，需要试用路径让用户体验核心能力，需要定价套餐覆盖不同用户，需要埋点漏斗发现转化问题。\r
\r
## 目标用户\r
\r
- 个人用户：需要低门槛试用和清晰价格。\r
- 小团队：需要团队成员、共享资产和更多额度。\r
- 企业客户：需要权限、安全、发票、管理后台和定制支持。\r
- 产品运营团队：需要查看转化、留存和付费数据。\r
\r
## 用户痛点\r
\r
1. 官网价值表达不清，用户看不懂产品做什么。\r
2. 注册后不知道第一步该做什么，激活率低。\r
3. 套餐权益复杂，用户不理解额度和限制。\r
4. 免费额度过大可能亏损，过小又无法体验价值。\r
5. 没有漏斗数据，无法判断哪里流失。\r
6. AI 成本与定价没有对应，毛利不可控。\r
\r
## 产品目标\r
\r
1. 官网访问到注册转化率达到 8% 以上。\r
2. 注册用户首次核心使用率达到 60% 以上。\r
3. 免费用户到付费转化率达到 5% 以上。\r
4. 单用户模型成本低于套餐收入的可控比例。\r
5. 建立访问、注册、激活、付费、留存完整漏斗。\r
\r
## MVP 范围\r
\r
第一版做：首页、功能页、定价页、注册登录、免费额度、首次任务引导、套餐权益、支付订阅、额度管理、基础埋点。第一版不做：复杂渠道归因、销售 CRM 深度集成、企业私有化合同流程、复杂 A/B 测试平台。\r
\r
## 核心功能清单\r
\r
- 官网：价值主张、功能场景、产品演示、案例、FAQ、注册入口。\r
- 注册激活：登录、免费额度、首次任务引导、成功提示。\r
- 定价套餐：免费版、专业版、团队版、企业版。\r
- 权益控制：额度、模型能力、团队人数、素材/历史容量。\r
- 支付订阅：订单、发票、续费、取消、升级降级。\r
- 增长看板：访问、注册、激活、付费、留存、成本。\r
\r
## 页面结构\r
\r
官网首屏直接说明产品名称、目标用户和核心结果；功能区按场景展示；定价页用表格对比权益；注册后进入首次任务引导；后台展示套餐、额度和用量。\r
\r
## 用户流程\r
\r
1. 用户访问官网。\r
2. 理解产品解决的问题和适合人群。\r
3. 查看功能、案例和价格。\r
4. 注册获得免费额度。\r
5. 完成第一次核心任务。\r
6. 看到额度消耗和升级提示。\r
7. 选择套餐并支付。\r
\r
> 图片占位：AI SaaS 定价模型图  \r
> 建议文件名：ai-saas-pricing-model.png  \r
> 图片用途：展示免费版、专业版、团队版、企业版、积分和按量计费之间的关系。  \r
> 生图提示词：生成一张 AI SaaS 定价模型图，包含免费版、专业版、团队版、企业版四档套餐，以及积分额度、按量计费、团队席位、模型能力、存储容量、商业支持等权益。白色背景，蓝紫渐变，中文标签，16:9，无水印。\r
\r
## AI 能力点\r
\r
商业化项目中的 AI 能力不一定是新模型，而是把模型能力转成用户可理解的权益：调用次数、生成额度、模型等级、图片分辨率、知识库容量、Agent 任务数、团队协作和安全能力。\r
\r
## 技术协作点\r
\r
需要确认 API 入参出参、账号体系、套餐权限、额度扣减、支付回调、错误处理、权限、日志、成本、数据存储、模型切换、敏感词和安全策略、模型失败补偿、用户反馈回流。埋点要覆盖页面访问、按钮点击、注册、首次使用、额度耗尽、支付和续费。\r
\r
> 图片占位：AI SaaS 转化漏斗图  \r
> 建议文件名：ai-saas-conversion-funnel.png  \r
> 图片用途：展示从访问、注册、激活、核心使用、付费到续费的漏斗。  \r
> 生图提示词：生成一张 AI SaaS 转化漏斗图，包含官网访问、点击注册、完成注册、首次生成或问答、核心功能使用、额度耗尽、付费升级、续费留存等阶段，并标注转化率指标。白色背景，蓝紫渐变，中文标签，16:9，无水印。\r
\r
## 数据指标设计\r
\r
- 使用指标：首页访问、注册、首次任务、核心使用次数。\r
- 效果指标：激活率、付费转化率、升级率。\r
- 成本指标：单用户成本、单任务成本、毛利、免费额度成本。\r
- 留存指标：次日、7 日、30 日留存，续费率。\r
- 质量指标：首次任务成功率、失败率、用户反馈。\r
- 风险指标：滥用率、支付失败、退款率、成本异常。\r
\r
## PRD 大纲\r
\r
1. 商业化目标与用户分层  \r
2. 官网信息架构  \r
3. 注册与首次任务引导  \r
4. 套餐权益与额度规则  \r
5. 支付订阅和订单  \r
6. 埋点漏斗和看板  \r
7. 成本和毛利测算  \r
8. 风险、合规和迭代计划\r
\r
## 原型设计说明\r
\r
官网不做营销空话，要让用户在首屏知道“为谁、解决什么、如何试用”。定价页要用清晰权益表，避免复杂术语。新手引导要把用户直接带到一次成功体验，而不是让用户注册后面对空白控制台。\r
\r
> 图片占位：AI SaaS 用户引导流程图  \r
> 建议文件名：ai-saas-user-onboarding-flow.png  \r
> 图片用途：展示注册、选择场景、完成首次任务、保存结果和升级提示的路径。  \r
> 生图提示词：生成一张 AI SaaS 用户引导流程图，包含注册登录、选择使用场景、填写示例输入、完成首次生成或问答、保存结果、查看额度、升级提示等步骤。白色背景，蓝紫渐变，中文标签，16:9，无水印。\r
\r
## 交互细节\r
\r
免费额度要可见；额度不足时提示升级但不打断已完成任务；支付失败提供重试；取消订阅说明影响；套餐升级立即生效；用户首次任务成功后推荐下一步，而不是直接弹付费。\r
\r
## Prompt 设计\r
\r
如果官网有 AI Demo，可以使用受控 Prompt，限定输入范围和输出长度，避免用户在公开 Demo 中输入敏感内容。Demo 的目标是展示产品价值，不是开放全部能力。\r
\r
## 风险与边界\r
\r
风险包括夸大宣传、免费额度滥用、模型成本高于收入、支付失败、用户隐私、敏感内容、退款纠纷。策略包括清晰权益、成本告警、风控限制、服务条款、隐私说明和退款规则。\r
\r
## 迭代方向\r
\r
V1 做官网、注册、免费额度和单一付费套餐；V2 做多套餐、团队版和用量看板；V3 做渠道投放、A/B 测试和企业销售线索；V4 做精细化增长、推荐和生命周期运营。\r
\r
## 作品集产出\r
\r
可产出官网信息架构、定价方案、转化漏斗、埋点表、成本测算、用户引导原型和商业化复盘。\r
\r
> 图片占位：AI SaaS 增长数据看板  \r
> 建议文件名：ai-saas-growth-dashboard.png  \r
> 图片用途：展示访问、注册、激活、付费、留存、成本和毛利指标。  \r
> 生图提示词：生成一张 AI SaaS 增长数据看板，包含访问量、注册率、激活率、付费转化率、续费率、留存曲线、单用户成本、套餐收入、毛利趋势等图表。白色背景，蓝紫渐变，中文标签，16:9，无水印。\r
\r
## 项目作业\r
\r
完成 AI 商业化项目包：官网结构、定价表、注册激活流程、套餐权益、埋点漏斗、成本测算、增长看板和复盘。\r
\r
## 检查清单\r
\r
- 是否明确目标用户和价值表达。\r
- 是否设计免费额度和首次任务引导。\r
- 是否有定价、权益和成本测算。\r
- 是否有访问到付费的漏斗指标。\r
- 是否考虑支付、退款、滥用和隐私风险。`,e4=`---\r
title: AI 智能客服系统\r
project: customer-service\r
difficulty: 进阶\r
stageTitle: 阶段 4-6\r
type: 实战项目\r
tags:\r
  - 智能客服\r
  - RAG\r
  - 人工转接\r
---\r
\r
# AI 智能客服系统\r
\r
## 项目概述\r
\r
本项目设计一个 AI 智能客服系统，用于处理售前咨询、售后问题和内部服务支持。系统通过意图识别、知识库问答、人工转接、会话摘要、满意度评价和质检看板，提高客服效率并降低错误回答风险。\r
\r
> 图片占位：AI 智能客服系统总览图  \r
> 建议文件名：ai-customer-service-overview.png  \r
> 图片用途：展示用户、AI 客服、知识库、人工客服、主管看板和质量运营的完整关系。  \r
> 生图提示词：生成一张 AI 智能客服系统总览图，包含用户咨询、多渠道入口、AI 客服、意图识别、知识库检索、人工客服、会话摘要、满意度评价、客服主管质检看板等模块。白色背景，蓝紫渐变，中文标签清晰，16:9，无水印，无真实品牌 Logo。\r
\r
## 适合学习阶段\r
\r
适合完成 RAG、AI 产品设计和技术协作学习的用户。该项目能训练客服场景拆解、AI 兜底、人工协作、数据指标和风险控制。\r
\r
## 项目背景\r
\r
客服团队每天处理大量重复问题，例如发票、退换货、账户、使用教程。人工客服响应慢，答案口径不一致，主管很难发现知识库缺口。企业希望 AI 先处理标准问题，复杂问题转人工，并通过质检看板持续优化服务。\r
\r
## 目标用户\r
\r
- 终端客户：需要快速获得问题答案。\r
- 人工客服：需要减少重复问答和获得辅助话术。\r
- 客服主管：需要看服务质量、错误回答和知识缺口。\r
- 知识运营：负责维护 FAQ、话术和政策内容。\r
\r
## 用户痛点\r
\r
1. 重复问题占比高，人工客服时间被消耗。\r
2. 答案口径不统一，影响客户信任。\r
3. AI 回答不确定时没有及时转人工。\r
4. 人工接手时不知道前面聊了什么。\r
5. 主管缺少质量看板，无法定位问题。\r
6. 知识库更新不及时，旧话术持续被使用。\r
\r
## 产品目标\r
\r
1. 常见问题自动解决率达到 50% 以上。\r
2. 人工客服平均首次响应时间降低 30%。\r
3. 低置信度和高风险问题 100% 触发转人工策略。\r
4. 错误回答可被标记并进入知识优化流程。\r
5. 建立客服质量看板，覆盖解决率、满意度和风险指标。\r
\r
## MVP 范围\r
\r
第一版做：网页客服入口、意图识别、FAQ/RAG 问答、置信度判断、人工转接、会话摘要、满意度评价、质检看板。第一版不做：全渠道深度集成、自动退款、自动修改订单、高风险业务自动决策。\r
\r
## 核心功能清单\r
\r
- 用户端：发起咨询、查看 AI 回答、继续追问、评价、转人工。\r
- AI 处理：意图识别、知识检索、回答生成、置信度判断。\r
- 人工客服：接管会话、查看摘要、发送推荐话术、标记问题。\r
- 主管端：自动解决率、转人工率、满意度、错误类型、知识缺口。\r
- 知识运营：FAQ 管理、知识更新、错误反馈处理。\r
\r
## 页面结构\r
\r
用户侧为客服聊天窗口；客服工作台展示会话列表、用户资料、AI 摘要和推荐话术；主管看板展示质量指标；知识管理页维护 FAQ、话术和政策文档。\r
\r
## 用户流程\r
\r
1. 用户在网页发起咨询。\r
2. 系统识别意图并检索知识。\r
3. AI 生成回答并展示。\r
4. 低置信度、投诉或高风险问题进入人工队列。\r
5. 人工客服接管并查看 AI 摘要。\r
6. 用户评价服务，系统记录反馈。\r
7. 主管和知识运营复盘问题。\r
\r
> 图片占位：AI 智能客服会话流程图  \r
> 建议文件名：ai-customer-service-conversation-flow.png  \r
> 图片用途：展示用户咨询、AI 回答、低置信判断、人工转接、评价和质检的会话路径。  \r
> 生图提示词：生成一张 AI 智能客服会话流程图，包含用户发起咨询、AI 识别意图、检索知识库、生成回答、低置信度判断、转人工、人工接管、用户评价、质检复盘等步骤。白色背景，蓝紫渐变，中文标签清晰，16:9，无水印。\r
\r
## AI 能力点\r
\r
涉及意图分类、RAG、置信度判断、对话摘要、情绪识别、质检分析和推荐话术。Prompt 要强调不能承诺退款、赔偿、医疗法律等高风险结论。\r
\r
## 技术协作点\r
\r
需要确认 API 入参出参、客服会话 ID、流式响应、错误处理、权限、日志、成本、数据存储、知识库文件上传、向量数据库、模型切换、敏感词和安全策略、模型失败兜底、人工接管状态、用户反馈回流。客服系统集成要明确会话路由和坐席状态。\r
\r
> 图片占位：智能客服意图路由图  \r
> 建议文件名：ai-customer-service-intent-routing.png  \r
> 图片用途：展示不同意图如何进入自动回答、人工转接或风险处理。  \r
> 生图提示词：生成一张 AI 智能客服意图路由图，包含咨询问题、意图识别、FAQ 自动回答、RAG 知识问答、订单类转人工、投诉类转人工、敏感问题安全处理、未知问题澄清等分支。白色背景，蓝紫渐变，中文标签，16:9，无水印。\r
\r
## 数据指标设计\r
\r
- 使用指标：咨询量、AI 接待量、人工接待量。\r
- 效果指标：自动解决率、一次解决率、满意度。\r
- 成本指标：单次 AI 接待成本、人工节省时长、转人工成本。\r
- 留存指标：重复咨询率、用户问题解决后回访率。\r
- 质量指标：错误回答率、知识命中率、转人工准确率。\r
- 风险指标：投诉率、违规承诺、敏感问题漏拦截。\r
\r
## PRD 大纲\r
\r
1. 项目背景与目标  \r
2. 客服场景与意图分类  \r
3. MVP 范围  \r
4. 用户端聊天窗口  \r
5. AI 问答与知识库  \r
6. 人工转接与客服工作台  \r
7. 质检与知识运营  \r
8. 指标、风险和上线计划\r
\r
## 原型设计说明\r
\r
用户窗口要清晰显示 AI 身份、回答来源和转人工入口。客服工作台要展示 AI 摘要、历史对话、用户信息和推荐话术。主管看板要用趋势和分布图展示问题，不做装饰化大屏。\r
\r
## 交互细节\r
\r
低置信度时不强答，提示“我需要转人工确认”；人工接管后 AI 停止主动回复；会话摘要自动生成但客服可编辑；满意度评价可选择原因；用户等待人工时展示排队提示。\r
\r
> 图片占位：智能客服人工转接流程图  \r
> 建议文件名：ai-customer-service-human-handoff.png  \r
> 图片用途：展示 AI 识别转接、生成摘要、人工接管、继续服务和质检记录。  \r
> 生图提示词：生成一张 AI 智能客服人工转接流程图，包含低置信度判断、转人工触发、AI 生成会话摘要、人工客服接管、用户继续沟通、处理结果记录、质检复盘等步骤。白色背景，蓝紫渐变，中文标签，16:9，无水印。\r
\r
## Prompt 设计\r
\r
客服 Prompt 应包含角色、知识来源、回答边界、转人工规则和语气要求。例如：你是客服助手，只能基于知识库回答；涉及退款、投诉、账户安全或无依据问题时必须转人工；回答要简洁礼貌，必要时列出操作步骤。\r
\r
## 风险与边界\r
\r
风险包括错误承诺、过度自动化、隐私泄露、用户投诉、知识过期和人工接管不及时。边界策略包括高风险意图转人工、知识引用、质检抽样、日志审计、敏感词拦截和知识更新流程。\r
\r
## 迭代方向\r
\r
V1 做网页客服和知识问答；V2 接入订单查询和客服工单；V3 做多渠道接入、质检自动化和知识推荐；V4 做智能排班、客户分层和商业化客服套件。\r
\r
## 作品集产出\r
\r
可产出客服场景地图、意图分类表、转人工规则、客服工作台原型、质检看板、指标体系和项目复盘。\r
\r
> 图片占位：智能客服质量看板  \r
> 建议文件名：ai-customer-service-quality-dashboard.png  \r
> 图片用途：展示自动解决率、转人工率、满意度、错误回答、知识缺口和投诉风险。  \r
> 生图提示词：生成一张 AI 智能客服质量看板，包含自动解决率、转人工率、平均响应时长、满意度、知识命中率、错误回答率、投诉率、意图分布等图表。白色背景，蓝紫渐变，中文标签，16:9，无水印。\r
\r
## 项目作业\r
\r
完成智能客服项目包：产品方案、意图分类表、转人工规则、客服工作台原型、质检看板、技术协作清单和风险说明。\r
\r
## 检查清单\r
\r
- 是否区分 AI 可回答和必须转人工场景。\r
- 是否有知识库和引用机制。\r
- 是否有人工接管流程和会话摘要。\r
- 是否有客服主管质量看板。\r
- 是否考虑投诉、隐私和错误承诺风险。`,t4=`---\r
title: AI 图片生成平台\r
project: image-platform\r
difficulty: 进阶\r
stageTitle: 阶段 4-6\r
type: 实战项目\r
tags:\r
  - AI 图片生成\r
  - 多模态\r
  - 积分系统\r
---\r
\r
# AI 图片生成平台\r
\r
## 项目概述\r
\r
本项目设计一个面向内容运营、电商商家和创作者的 AI 图片生成平台。用户可以通过模板、Prompt、参考图和参数生成营销图、社媒图、商品图或封面图，并通过素材库管理结果，通过积分系统控制成本和商业化。\r
\r
> 图片占位：AI 图片生成平台总览图  \r
> 建议文件名：ai-image-platform-overview.png  \r
> 图片用途：展示模板、生成、队列、素材库、积分和商业化模块。  \r
> 生图提示词：生成一张 AI 图片生成平台总览图，包含用户、模板广场、Prompt 表单、参考图上传、生成队列、结果预览、素材库、积分账户、商业化看板等模块。白色背景，蓝紫渐变，中文标签清晰，16:9，无水印，无真实品牌 Logo。\r
\r
## 适合学习阶段\r
\r
适合已经理解 Prompt、多模态、异步任务和商业化基础的学习者。项目能训练多模态产品设计、积分系统、任务状态、成本和风险边界。\r
\r
## 项目背景\r
\r
内容团队每天需要大量配图，设计资源有限，通用生图工具对新手门槛高，生成结果难管理，成本不透明。平台希望通过模板化生图和积分体系，让用户快速生成可用素材，同时控制生成成本和版权风险。\r
\r
## 目标用户\r
\r
- 内容运营：生成活动海报、社媒配图、文章封面。\r
- 电商商家：生成商品场景图和营销主图。\r
- 自媒体创作者：生成封面、插图和头像风格图。\r
- 团队管理员：管理模板、成员额度和素材资产。\r
\r
## 用户痛点\r
\r
1. 不会写视觉 Prompt，生成结果不稳定。\r
2. 不知道选择什么尺寸、风格和参数。\r
3. 生图等待时间长，不知道任务状态。\r
4. 生成失败仍担心扣费，付费信任不足。\r
5. 历史素材分散，难以复用和团队共享。\r
6. 版权、肖像和品牌边界不清。\r
\r
## 产品目标\r
\r
1. 新用户 5 分钟内完成首次生成并保存素材。\r
2. 模板生成占比超过 60%，降低空白 Prompt 使用。\r
3. 生成失败积分自动返还，扣费投诉低于 1%。\r
4. 素材库保存率达到 35% 以上。\r
5. 形成可追踪的单次生成成本和套餐毛利模型。\r
\r
## MVP 范围\r
\r
第一版做：模板广场、文生图、参考图上传、尺寸比例、风格参数、生成数量、任务队列、结果预览、重试、素材库、积分扣费、失败返还、基础安全提示。第一版不做：复杂在线编辑器、真实品牌素材自动套版、版权确权服务、多人协同审稿。\r
\r
## 核心功能清单\r
\r
- 模板系统：电商主图、活动海报、社媒封面、文章插图。\r
- 生成工作台：Prompt、参考图、尺寸、风格、数量、负面描述。\r
- 任务队列：排队中、生成中、成功、失败、部分失败。\r
- 素材库：收藏、下载、标签、再次生成、版本记录。\r
- 积分系统：余额、扣费、返还、套餐、明细。\r
- 风险控制：敏感内容、版权提示、审核和违规记录。\r
\r
## 页面结构\r
\r
首页展示模板和最近生成；生成页包含模板表单、参数区、任务状态和结果区；素材库展示历史图；积分页展示余额、明细和套餐；后台看板展示成本、失败率、模板效果。\r
\r
## 用户流程\r
\r
1. 用户选择模板或新建生成任务。\r
2. 填写主题、主体、场景、风格、比例和参考图。\r
3. 查看预计消耗积分并提交。\r
4. 系统进入队列，展示任务状态。\r
5. 生成结果后用户预览、下载、收藏或重试。\r
6. 系统记录积分、模型、耗时、失败原因和素材。\r
\r
> 图片占位：AI 图片生成用户流程图  \r
> 建议文件名：ai-image-generation-user-flow.png  \r
> 图片用途：展示从选择模板、填写参数、提交生成、等待队列到保存素材的路径。  \r
> 生图提示词：生成一张 AI 图片生成用户流程图，包含模板选择、填写 Prompt、上传参考图、选择尺寸风格、查看积分消耗、提交生成、任务排队、预览结果、重试优化、保存素材库等步骤。白色背景，蓝紫渐变，中文标签，16:9，无水印。\r
\r
## AI 能力点\r
\r
涉及视觉 Prompt、文生图、图生图、参考图理解、多模态安全审核、结果筛选、异步生成任务。Prompt 模板要把用户口语需求转成清晰画面描述。\r
\r
## 技术协作点\r
\r
需要确认 API 入参出参、图片上传、文件存储、CDN、异步任务队列、流式或轮询状态、错误处理、权限、日志、成本、数据存储、模型切换、敏感词和安全策略、失败补偿、用户反馈回流。积分扣减应支持预扣、成功确认和失败返还。\r
\r
> 图片占位：AI 图片模板系统图  \r
> 建议文件名：ai-image-template-system.png  \r
> 图片用途：展示模板分类、输入字段、Prompt 组装和风格参数之间的关系。  \r
> 生图提示词：生成一张 AI 图片生成模板系统图，包含模板分类、行业场景、输入字段、主体描述、风格选择、尺寸比例、负面词、Prompt 组装、示例图预览等模块。白色背景，蓝紫渐变，中文标签，16:9，无水印。\r
\r
## 数据指标设计\r
\r
- 使用指标：生成任务数、模板使用率、素材保存率。\r
- 效果指标：下载率、重试率、用户评分、生成成功率。\r
- 成本指标：单图成本、失败成本、套餐毛利、积分消耗。\r
- 留存指标：次日留存、素材库复用、模板复用。\r
- 质量指标：失败率、审核拦截率、投诉率。\r
- 风险指标：版权风险反馈、敏感生成、违规账号。\r
\r
## PRD 大纲\r
\r
1. 项目背景与目标  \r
2. 用户与场景  \r
3. MVP 范围  \r
4. 模板系统  \r
5. 生成工作台  \r
6. 任务队列与状态  \r
7. 素材库  \r
8. 积分与套餐  \r
9. 风险控制和审核  \r
10. 指标与成本看板\r
\r
## 原型设计说明\r
\r
生成页左侧放模板和参数，中间展示 Prompt 和参考图，右侧展示预计积分和生成结果。任务卡片要稳定显示状态、耗时、失败原因和操作按钮。素材库用网格展示，支持筛选和再次生成。\r
\r
## 交互细节\r
\r
提交前显示预计积分；余额不足引导充值；生成中允许查看队列但不重复提交；失败自动返还并说明原因；结果支持保存、下载、放大、变体和删除；敏感 Prompt 提示修改。\r
\r
## Prompt 设计\r
\r
Prompt 模板应包含主体、场景、风格、构图、光线、色彩、用途、比例和禁用元素。例如：生成一张用于电商春季活动的商品场景图，主体为一款简洁水杯，明亮室内背景，清新蓝紫配色，适合商品主图，16:9，画面干净，不包含真实品牌 Logo。\r
\r
> 图片占位：AI 图片积分系统图  \r
> 建议文件名：ai-image-credit-system.png  \r
> 图片用途：展示积分购买、生成预扣、成功扣费、失败返还、套餐权益和成本统计。  \r
> 生图提示词：生成一张 AI 图片平台积分系统图，包含用户余额、免费额度、套餐购买、生成预扣、成功扣费、失败返还、高清加价、积分明细、成本统计等模块。白色背景，蓝紫渐变，中文标签清晰，16:9，无水印。\r
\r
## 风险与边界\r
\r
风险包括版权争议、生成真实人物肖像、品牌 Logo 侵权、敏感内容、成本超支、结果不可控。策略包括提示词审核、结果审核、禁止真实品牌和名人、商用边界提示、失败返还、成本告警。\r
\r
## 迭代方向\r
\r
V1 做模板化文生图；V2 增加图生图、局部重绘、团队素材库；V3 增加品牌风格库、批量生成和协作审核；V4 做企业版、API 和商业化增长。\r
\r
## 作品集产出\r
\r
可产出产品方案、模板体系、生成流程图、任务状态机、积分规则、定价方案、风险清单、指标看板。\r
\r
> 图片占位：AI 图片商业化看板  \r
> 建议文件名：ai-image-commercialization-dashboard.png  \r
> 图片用途：展示积分消耗、套餐收入、单图成本、生成成功率、付费转化和素材保存。  \r
> 生图提示词：生成一张 AI 图片生成平台商业化看板，包含积分消耗趋势、套餐收入、单图成本、生成成功率、失败返还、付费转化率、素材保存率、模板收入排行等图表。白色背景，蓝紫渐变，中文标签，16:9，无水印。\r
\r
## 项目作业\r
\r
完成 AI 图片平台项目包：产品方案、生成页低保真原型、模板系统表、任务状态图、积分规则、商业化指标和风险说明。\r
\r
## 检查清单\r
\r
- 是否有明确目标用户和图片场景。\r
- 是否有模板和参数系统。\r
- 是否设计异步任务和失败返还。\r
- 是否有素材库和积分明细。\r
- 是否考虑版权、安全和成本。\r
- 是否有商业化和指标看板。`,r4=`---\r
title: 企业知识库问答系统\r
project: knowledge-rag\r
difficulty: 进阶\r
stageTitle: 阶段 4-5\r
type: 实战项目\r
tags:\r
  - RAG\r
  - 知识库\r
  - 权限设计\r
---\r
\r
# 企业知识库问答系统\r
\r
## 项目概述\r
\r
本项目设计一个企业知识库问答系统，帮助员工通过自然语言查询制度、流程、产品资料和客服话术。系统基于 RAG，把文档上传、解析、切分、向量检索、引用来源、权限控制、用户反馈和质量看板组合成完整产品。\r
\r
> 图片占位：企业知识库问答项目总览图  \r
> 建议文件名：rag-knowledge-base-overview.png  \r
> 图片用途：展示知识库问答系统的管理员、员工、文档处理、问答和质量运营模块。  \r
> 生图提示词：生成一张企业知识库问答项目总览图，包含管理员上传文档、文档解析、知识库管理、员工提问、RAG 检索生成、引用来源、权限控制、反馈评价、质量看板等模块。白色背景，蓝紫渐变，中文标签清晰，16:9，无水印，无真实品牌 Logo。\r
\r
## 适合学习阶段\r
\r
适合完成 AI 基础、AI 产品设计和技术协作的学习者。项目能训练 RAG、Embedding、向量数据库、权限、引用、日志、评估和企业产品思维。\r
\r
## 项目背景\r
\r
企业资料通常散落在网盘、文档系统、IM 群和内部网站里。新员工不知道去哪找制度，客服和销售需要快速查产品资料，业务人员搜索关键词不准。传统搜索返回文档列表，用户还要自己阅读。企业希望通过 AI 问答提高查询效率，同时保证答案可信和数据安全。\r
\r
## 目标用户\r
\r
- 员工：查询制度、流程、产品资料。\r
- 客服和销售：快速找到统一口径。\r
- 知识库管理员：上传、维护、更新文档。\r
- 业务主管：查看高频问题、错误反馈和知识缺口。\r
\r
## 用户痛点\r
\r
1. 资料入口分散，用户不知道去哪里找。\r
2. 关键词搜索不准，表达不同就搜不到。\r
3. 文档太长，找到后仍要自己读。\r
4. 答案缺少来源，用户不敢直接使用。\r
5. 文档权限复杂，不同部门能看的内容不同。\r
6. 知识更新后旧答案仍被使用。\r
\r
## 产品目标\r
\r
1. 高频制度问题平均查询时间降低 60%。\r
2. 80% 的可回答问题返回明确引用来源。\r
3. 无答案问题进入知识维护列表，管理员可处理。\r
4. 权限命中准确，不返回用户无权访问资料。\r
5. 建立至少 50 个问题的评估集用于版本验证。\r
\r
## MVP 范围\r
\r
第一版做：知识库创建、PDF/Word 上传、解析状态、基础切分、向量检索、问答、引用来源、部门权限、答案反馈、无答案列表、基础质量看板。第一版不做：复杂表格解析、多知识库跨域推理、自动同步所有内部系统、精细到字段级权限。\r
\r
## 核心功能清单\r
\r
- 管理员端：知识库创建、文档上传、分类标签、权限、解析状态、更新记录。\r
- 用户端：自然语言提问、答案引用、追问、反馈、收藏。\r
- 质量运营：高频问题、无答案问题、错误反馈、评估集、回答质量看板。\r
- 安全权限：部门权限、文档权限、问答日志权限、管理员权限。\r
\r
## 页面结构\r
\r
用户端包括知识库选择页、问答页、引用详情、历史记录。管理员端包括知识库列表、文档管理、权限配置、解析状态、质量看板。后台应能查看日志、成本和反馈类型。\r
\r
## 用户流程\r
\r
1. 管理员创建知识库并设置权限。\r
2. 上传文档，系统解析、切分、向量化。\r
3. 员工进入知识库提问。\r
4. 系统按权限检索相关片段。\r
5. 模型基于片段生成带引用答案。\r
6. 用户查看来源、追问或反馈。\r
7. 管理员根据反馈更新知识库。\r
\r
> 图片占位：RAG 文档处理流程图  \r
> 建议文件名：rag-document-processing-flow.png  \r
> 图片用途：展示文档上传、解析、清洗、切分、Embedding、入库和更新流程。  \r
> 生图提示词：生成一张 RAG 文档处理流程图，包含文档上传、格式解析、文本清洗、标题识别、文本切分、Embedding 向量化、向量数据库入库、元数据保存、文档更新重新索引等步骤。白色背景，蓝紫渐变，中文标签，16:9，无水印。\r
\r
## AI 能力点\r
\r
涉及 Embedding、向量检索、重排、RAG、引用来源、低置信度拒答、评估集和反馈回流。Prompt 要要求模型只基于检索片段回答，缺少依据时拒答。\r
\r
## 技术协作点\r
\r
需要确认 API 入参出参、文件上传大小、解析队列、支持格式、切分策略、向量库元数据、权限过滤位置、流式响应、错误处理、日志字段、模型切换、敏感词和安全策略、模型失败兜底、反馈回流和评估集维护。数据存储包括文档原文、片段、向量、会话、消息、引用和反馈。\r
\r
> 图片占位：RAG 检索生成流程图  \r
> 建议文件名：rag-retrieval-generation-flow.png  \r
> 图片用途：展示用户提问、权限过滤、问题向量化、检索、重排、上下文组装、模型生成和引用返回。  \r
> 生图提示词：生成一张 RAG 检索生成流程图，包含用户提问、权限过滤、问题向量化、相似度检索、重排、上下文组装、大模型生成、引用来源返回、日志记录等步骤。白色背景，蓝紫渐变，中文标签清晰，16:9，无水印。\r
\r
## 数据指标设计\r
\r
- 使用指标：提问量、知识库访问量、文档上传量。\r
- 效果指标：问题解决率、引用点击率、答案采纳率。\r
- 成本指标：单问 Token、单问成本、文档处理成本。\r
- 留存指标：周活用户、复问率、知识库复用率。\r
- 质量指标：无答案率、错误反馈率、检索命中率。\r
- 风险指标：越权拦截、敏感内容、过期文档命中。\r
\r
## PRD 大纲\r
\r
1. 背景与目标  \r
2. 用户与权限模型  \r
3. 文档上传与处理  \r
4. 问答体验与引用来源  \r
5. RAG Pipeline 说明  \r
6. 反馈与质量运营  \r
7. 日志、指标和成本  \r
8. 风险、安全与验收标准\r
\r
## 原型设计说明\r
\r
问答页应突出答案和引用来源，引用可展开原文片段。管理员端要清晰展示文档解析状态、失败原因和更新时间。权限配置页要用矩阵表达部门、角色和知识库关系。\r
\r
## 交互细节\r
\r
解析失败显示原因和重试；无答案时拒答并推荐提交问题；引用点击打开原文定位；反馈支持“答案不对”“来源不对”“内容过期”“没有解决”；权限不足时不展示任何相关片段。\r
\r
## Prompt 设计\r
\r
系统 Prompt 要求：只能基于提供的资料片段回答；必须引用来源；无法从资料确认时说明未找到依据；不得编造制度、金额、日期或流程；回答结构包含结论、依据、注意事项和下一步建议。\r
\r
> 图片占位：RAG 权限设计图  \r
> 建议文件名：rag-permission-design.png  \r
> 图片用途：展示用户、部门、角色、知识库、文档和问答日志的权限关系。  \r
> 生图提示词：生成一张 RAG 知识库权限设计图，包含用户、部门、角色、知识库、文档、文档片段、问答记录、管理员权限等对象，并用中文箭头说明访问控制关系。白色背景，蓝紫渐变，16:9，无水印。\r
\r
## 风险与边界\r
\r
风险包括模型幻觉、文档过期、权限泄露、敏感资料进入外部模型、检索不命中、引用错误。边界策略包括权限前置过滤、引用来源、低置信度拒答、文档更新提醒、日志审计和人工反馈。\r
\r
## 迭代方向\r
\r
V1 做单知识库问答；V2 增加多知识库、评估集和权限细分；V3 接入内部系统同步、表格问答和企业级审计；V4 增加主动知识推荐和客服/销售场景集成。\r
\r
## 作品集产出\r
\r
可产出 RAG PRD、文档处理流程图、问答原型、权限矩阵、质量评估表、技术协作文档和项目复盘。\r
\r
> 图片占位：RAG 质量评估看板  \r
> 建议文件名：rag-quality-evaluation-dashboard.png  \r
> 图片用途：展示问题解决率、无答案率、引用点击、错误反馈、检索命中和成本。  \r
> 生图提示词：生成一张 RAG 知识库质量评估看板，包含问题解决率、无答案率、引用点击率、错误反馈率、检索命中率、文档更新状态、单问成本、响应时长等图表。白色背景，蓝紫渐变，中文标签，16:9，无水印。\r
\r
## 项目作业\r
\r
完成一套企业知识库问答项目材料：PRD、流程图、权限矩阵、低保真原型、RAG 技术协作清单、质量评估表和复盘文档。\r
\r
## 检查清单\r
\r
- 是否定义知识库管理员和普通用户。\r
- 是否有文档处理和解析状态。\r
- 是否展示引用来源。\r
- 是否考虑权限和日志审计。\r
- 是否有无答案和错误反馈闭环。\r
- 是否有评估集和质量指标。`,l4=Object.assign({"../../content/projects/agent-workflow.md":J5,"../../content/projects/chat-assistant.md":W5,"../../content/projects/commercial-site.md":n4,"../../content/projects/customer-service.md":e4,"../../content/projects/image-platform.md":t4,"../../content/projects/knowledge-rag.md":r4}),v1=Object.entries(l4).map(([t,l])=>{const a=t.replace(/\\/g,"/").match(/projects\/([^/]+)\.md$/)?.[1]||"",{frontmatter:u,content:o}=$u(l);return{slug:a,path:t,frontmatter:u,content:o,excerpt:Wa(o),headings:Rf(o)}}).sort((t,l)=>t.frontmatter.title.localeCompare(l.frontmatter.title));function a4(t){return v1.find(l=>l.slug===t||l.frontmatter.project===t)}function i4(){const{projectSlug:t}=zl(),l=Tf.find(f=>f.id===t),a=a4(t),u=ni();if(!l)return A.jsx(Gu,{to:"/learn",replace:!0});const o=u.state.completedProjects.includes(l.id),s=a?.content.replace(/^# .+\n+/,"");return A.jsxs("main",{className:"container-page pt-24",children:[A.jsxs("article",{className:"panel rounded-2xl p-6 lg:p-8",children:[A.jsxs("p",{className:"text-sm font-semibold text-blue-700 dark:text-cyan-300",children:[l.stage," · ",l.difficulty]}),A.jsx("h1",{className:"mt-2 text-4xl font-semibold text-slate-950 dark:text-white",children:l.name}),A.jsx("p",{className:"mt-4 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300",children:l.goal}),A.jsx("button",{onClick:()=>u.toggleProject(l.id),className:`mt-6 rounded-lg px-5 py-3 text-sm font-semibold ${o?"bg-emerald-600 text-white":"bg-slate-950 text-white dark:bg-white dark:text-slate-950"}`,children:o?"项目已完成":"标记项目完成"})]}),s?A.jsx("article",{className:"panel my-8 rounded-2xl p-6 lg:p-8",children:A.jsx(Ja,{content:s})}):A.jsxs("section",{className:"grid gap-5 py-8 lg:grid-cols-2",children:[A.jsx(je,{title:"项目背景",items:[l.background]}),A.jsx(je,{title:"目标用户",items:["需要通过 AI 提升效率的个人、团队或企业用户"]}),A.jsx(je,{title:"用户痛点",items:l.painPoints}),A.jsx(je,{title:"产品目标",items:[l.goal]}),A.jsx(je,{title:"核心功能",items:l.coreFeatures}),A.jsx(je,{title:"用户流程",items:l.flow}),A.jsx(je,{title:"AI 能力点",items:l.aiCapabilities}),A.jsx(je,{title:"技术协作点",items:l.techCollaboration}),A.jsx(je,{title:"数据指标",items:["任务完成率","结果采纳率","重试率","平均响应时长","单次调用成本"]}),A.jsx(je,{title:"成本与风险",items:["模型调用成本","错误输出风险","数据隐私与权限","内容安全","人工兜底成本"]}),A.jsx(je,{title:"MVP 版本范围",items:l.coreFeatures.slice(0,4)}),A.jsx(je,{title:"可迭代方向",items:["更细的权限控制","更完整的指标看板","模板市场","团队协作","商业化套餐"]}),A.jsx(je,{title:"作品集产出",items:l.portfolio}),A.jsx(je,{title:"项目作业",items:["完成 PRD、流程图、核心原型、指标方案和项目复盘，并整理成作品集页面。"]})]})]})}function je({title:t,items:l}){return A.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/5",children:[A.jsx("h2",{className:"text-xl font-semibold text-slate-950 dark:text-white",children:t}),A.jsx("ul",{className:"mt-3 space-y-2",children:l.map(a=>A.jsx("li",{className:"text-sm leading-7 text-slate-600 dark:text-slate-300",children:a},a))})]})}const u4=`---
title: Agent 产品设计模板
type: Agent
tags:
  - Agent
  - 工作流
---

# Agent 产品设计模板

## 模板用途

用于设计 AI Agent 或自动化工作流产品，帮助明确目标、工具、权限、确认和日志。

## 适用场景

办公自动化、销售跟进、资料整理、跨系统任务、流程编排和智能助手升级。

## 使用方法

先判断任务是否真的需要 Agent，再列工具和风险。高风险执行必须设计人工确认和审计日志。

## 模板正文

\`\`\`md
# Agent 产品方案：{项目名称}

## 1. 任务目标
- 用户要完成什么：
- 为什么普通聊天不够：

## 2. 工作流步骤
| 步骤 | 目标 | 工具 | 是否确认 | 失败处理 |
| --- | --- | --- | --- | --- |

## 3. 工具清单
- 工具名称：
- 入参：
- 出参：
- 权限：
- 风险：

## 4. 人工确认
- 必须确认的操作：
- 可自动执行的操作：

## 5. 日志与审计
- 记录字段：
- 查看权限：

## 6. 指标
- 任务完成率：
- 失败率：
- 人工确认率：
- 风险事件：
\`\`\`

## 填写示例

会议跟进 Agent 可以读取会议纪要、生成邮件草稿、创建待办，但发送邮件必须用户确认，所有工具调用需要记录日志。

## 常见错误

- 把普通聊天包装成 Agent。
- 自动执行高风险操作。
- 没有权限和日志。
`,o4=`---
title: AI 产品分析报告模板
type: 产品分析
tags:
  - 产品分析
  - 作品集
---

# AI 产品分析报告模板

## 模板用途

用于分析一个 AI 产品的用户价值、核心流程、AI 能力、商业模式、指标和风险，适合作为作品集中的产品体验报告。

## 适用场景

体验 AI 写作、AI 图片生成、知识库问答、Agent 工具等产品后，想系统输出分析结论。

## 使用方法

先完整走一遍核心用户任务，再记录关键流程，最后输出“事实观察 + 产品判断 + 可借鉴点”。

## 模板正文

\`\`\`md
# AI 产品分析报告：{产品名称}

## 1. 产品基本信息
- 产品名称：
- 目标用户：
- 核心场景：
- 主要 AI 能力：

## 2. 用户任务
- 用户想完成什么任务：
- 当前任务为什么重要：
- 产品如何缩短路径或提升质量：

## 3. 核心流程
1. 入口：
2. 输入：
3. AI 处理：
4. 输出：
5. 反馈或后续操作：

## 4. AI 能力拆解
- Prompt / RAG / Agent / 多模态：
- 输入来源：
- 输出形式：
- 失败和兜底：

## 5. 问题与风险
- 质量风险：
- 成本风险：
- 安全风险：
- 商业化风险：

## 6. 可借鉴结论
- 值得借鉴：
- 不适合照搬：
\`\`\`

## 填写示例

分析知识库问答产品时，可以写：产品通过引用来源提升答案可信度，但首次上传文档后的解析状态不够清晰，用户不知道何时可以提问。

## 常见错误

- 只截图页面，不解释产品判断。
- 只写“体验很好”，没有任务和指标。
- 只夸模型能力，不分析输入、输出、成本和风险。
`,s4=`---
title: AI 产品商业化方案模板
type: 商业化
tags:
  - 定价
  - 增长
---

# AI 产品商业化方案模板

## 模板用途

用于设计 AI 产品的定价、套餐、额度、成本和转化路径。

## 适用场景

AI SaaS、图片生成平台、写作工具、知识库问答、Agent 工作流等准备商业化时使用。

## 使用方法

先分用户，再算成本，最后设计套餐权益。不要只参考竞品价格，要结合模型调用成本和用户价值。

## 模板正文

\`\`\`md
# 商业化方案：{产品名称}

## 1. 用户分层
| 用户类型 | 需求 | 付费意愿 | 关键权益 |
| --- | --- | --- | --- |

## 2. 定价模型
- 免费版：
- 专业版：
- 团队版：
- 企业版：

## 3. 额度与成本
- 免费额度：
- 单次成本：
- 月度成本上限：
- 失败补偿：

## 4. 转化路径
访问 -> 注册 -> 首次成功 -> 额度消耗 -> 升级提示 -> 付费

## 5. 指标
- 注册率：
- 激活率：
- 付费转化：
- 毛利：
- 续费率：
\`\`\`

## 填写示例

AI 图片平台可采用订阅 + 积分：免费版提供少量积分，专业版提供月度积分，团队版增加成员管理和共享素材库。

## 常见错误

- 免费额度过大导致亏损。
- 套餐权益不清晰。
- 不计算模型成本和失败补偿。
`,c4=`---
title: 竞品分析模板
type: 竞品分析
tags:
  - 竞品
  - 产品分析
---

# 竞品分析模板

## 模板用途

用于围绕问题假设分析 AI 竞品，避免把竞品分析写成截图合集。

## 适用场景

设计 AI 写作、知识库问答、图片生成、客服、Agent 或商业化产品前，用于比较不同产品方案。

## 使用方法

先写清要验证的问题，再选择直接竞品、间接竞品和替代方案，围绕同一用户任务完整体验。

## 模板正文

\`\`\`md
# AI 产品竞品分析：{主题}

## 1. 分析目标
- 本次要验证的问题：
- 我的产品假设：

## 2. 竞品选择
| 类型 | 产品/方案 | 选择原因 |
| --- | --- | --- |

## 3. 对比维度
| 维度 | 竞品 A | 竞品 B | 替代方案 | 启发 |
| --- | --- | --- | --- | --- |
| 目标用户 | | | | |
| 输入设计 | | | | |
| 输出体验 | | | | |
| AI 能力 | | | | |
| 失败处理 | | | | |
| 商业化 | | | | |

## 4. 关键结论
- 值得借鉴：
- 不适合照搬：
- 需要验证：
\`\`\`

## 填写示例

分析 AI 图片生成平台时，不要只列“竞品有模板”。要比较模板如何引导 Prompt、失败是否返还积分、素材库是否支持复用、定价是否按张数或积分扣费。

## 常见错误

- 只贴截图，不输出决策。
- 看到竞品有功能就照搬。
- 忽略用户现在的非 AI 替代方案。
`,f4=`---\r
title: AI 产品上线验收模板\r
type: 上线验收\r
tags:\r
  - 验收\r
  - 上线\r
---\r
\r
# AI 产品上线验收模板\r
\r
## 模板用途\r
\r
用于 AI 功能上线前检查功能、模型、日志、成本、安全、权限和回滚方案。\r
\r
## 适用场景\r
\r
AI 聊天、RAG、图片生成、智能客服、Agent 工作流等功能灰度或正式上线前。\r
\r
## 使用方法\r
\r
按清单逐项确认负责人和状态。未通过项必须有处理方案，不能只口头确认。\r
\r
## 模板正文\r
\r
\`\`\`md\r
# 上线验收清单：{功能名称}\r
\r
## 1. 功能验收\r
| 项目 | 标准 | 负责人 | 状态 |\r
| --- | --- | --- | --- |\r
\r
## 2. AI 效果\r
- 测试集是否通过：\r
- Prompt / 模型版本：\r
- 失败兜底：\r
\r
## 3. 日志与成本\r
- 日志字段完整：\r
- 成本看板可用：\r
- 告警配置：\r
\r
## 4. 安全与权限\r
- 敏感内容：\r
- 权限校验：\r
- 数据脱敏：\r
- 审计日志：\r
\r
## 5. 上线计划\r
- 灰度范围：\r
- 监控指标：\r
- 回滚方案：\r
- 用户反馈入口：\r
\`\`\`\r
\r
## 填写示例\r
\r
RAG 功能上线前必须验证：无权文档不会被检索，答案有引用，检索不到时拒答，日志记录问题、引用、Token 和反馈。\r
\r
## 常见错误\r
\r
- 只验收页面功能。\r
- 不跑 AI 测试集。\r
- 没有成本告警和回滚方案。`,d4=`---\r
title: AI 产品指标设计模板\r
type: 指标\r
tags:\r
  - 数据指标\r
  - 看板\r
---\r
\r
# AI 产品指标设计模板\r
\r
## 模板用途\r
\r
用于为 AI 产品建立使用、效果、成本、留存、质量和风险指标体系。\r
\r
## 适用场景\r
\r
AI 功能上线前、增长分析、模型评估、项目复盘和管理看板设计。\r
\r
## 使用方法\r
\r
先明确产品目标，再把指标拆成六类。每个指标必须有口径、数据来源和异常后的行动。\r
\r
## 模板正文\r
\r
\`\`\`md\r
# AI 产品指标体系：{产品名称}\r
\r
## 1. 产品目标\r
- 目标：\r
- 核心任务：\r
\r
## 2. 指标表\r
| 类型 | 指标 | 口径 | 数据来源 | 异常动作 |\r
| --- | --- | --- | --- | --- |\r
| 使用 | | | | |\r
| 效果 | | | | |\r
| 成本 | | | | |\r
| 留存 | | | | |\r
| 质量 | | | | |\r
| 风险 | | | | |\r
\r
## 3. 看板结构\r
- 总览：\r
- 功能分析：\r
- 成本分析：\r
- 风险告警：\r
\`\`\`\r
\r
## 填写示例\r
\r
RAG 产品的无答案率口径可以定义为：系统明确拒答或未找到依据的问题数 / 总提问数。异常动作是补充知识、调整检索或优化 Prompt。\r
\r
## 常见错误\r
\r
- 只看调用量。\r
- 指标没有口径。\r
- 看板没有对应行动。`,m4=`---\r
title: AI 产品模型评估模板\r
type: 模型评估\r
tags:\r
  - 模型评估\r
  - AI 质量\r
---\r
\r
# AI 产品模型评估模板\r
\r
## 模板用途\r
\r
用于评估 AI 回答、RAG 检索、Prompt 版本或模型切换后的效果。\r
\r
## 适用场景\r
\r
上线前测试、模型切换、Prompt 优化、RAG Pipeline 调整和质量复盘。\r
\r
## 使用方法\r
\r
准备测试样例和标准答案，按维度评分，并记录错误类型和改进建议。\r
\r
## 模板正文\r
\r
\`\`\`md\r
# AI 评估记录：{版本}\r
\r
## 1. 评估目标\r
- 评估对象：\r
- 版本：\r
- 样例数量：\r
\r
## 2. 评分维度\r
| 维度 | 权重 | 评分说明 |\r
| --- | --- | --- |\r
| 准确性 | | |\r
| 完整性 | | |\r
| 相关性 | | |\r
| 格式 | | |\r
| 安全 | | |\r
| 成本 | | |\r
\r
## 3. 测试记录\r
| 问题 | 期望答案/来源 | 实际回答 | 分数 | 错误类型 | 建议 |\r
| --- | --- | --- | --- | --- | --- |\r
\r
## 4. 结论\r
- 是否通过：\r
- 主要问题：\r
- 下一步：\r
\`\`\`\r
\r
## 填写示例\r
\r
知识库问答评估中，错误类型可分为知识缺失、检索错误、引用错误、模型编造、格式问题和权限问题。\r
\r
## 常见错误\r
\r
- 只凭主观感觉评价。\r
- 没有标准答案或来源。\r
- 不记录错误归因。`,h4=`---
title: AI 产品经理作品集模板
type: 作品集
tags:
  - 作品集
  - 面试
---

# AI 产品经理作品集模板

## 模板用途

用于整理 AI 产品经理求职作品集，展示项目过程和能力证据。

## 适用场景

准备转岗、求职、课程结业、开源项目展示时使用。

## 使用方法

选择 2 到 3 个重点项目，每个项目按问题、方案、AI 能力、指标和复盘组织。不要只放页面图。

## 模板正文

\`\`\`md
# AI 产品经理作品集：{姓名或昵称}

## 1. 个人定位
- 目标岗位：
- 核心能力：
- 关注方向：

## 2. 能力地图
- 产品基本功：
- AI 基础：
- 技术协作：
- 商业数据：

## 3. 项目列表
| 项目 | AI 能力 | 产出 | 体现能力 |
| --- | --- | --- | --- |

## 4. 重点项目详情
### 项目背景
### 目标用户与痛点
### MVP 范围
### 产品方案
### AI 能力设计
### 技术协作
### 指标与风险
### 项目复盘

## 5. 面试讲述提纲
- 3 分钟版本：
- 可能追问：
\`\`\`

## 填写示例

知识库项目可以作为重点项目，展示 RAG 流程图、权限矩阵、问答原型、指标体系和风险清单。

## 常见错误

- 把作品集做成简历重复版。
- 只展示视觉，不展示思考。
- 缺少 AI 能力边界和指标。
`,p4=`---
title: PRD 文档模板
type: PRD
tags:
  - PRD
  - 产品文档
---

# AI 产品 PRD 模板

## 模板用途

用于把 AI 产品需求写成研发、设计、算法、测试和运营都能理解的协作文档。

## 适用场景

适合 AI 聊天助手、RAG 知识库、图片生成、智能客服、Agent 工作流等功能立项后使用。

## 使用方法

先写清背景和目标，再写 MVP 范围、流程、功能规则和 AI 能力。AI 部分必须补充输入、输出、异常、日志、指标和成本。

## 模板正文

\`\`\`md
# PRD：{功能名称}

## 1. 产品背景
说明哪类用户遇到什么问题、当前方案有什么不足、为什么现在值得做。

## 2. 产品目标
- 目标 1：
- 目标 2：
- 衡量指标：

## 3. 用户与场景
| 用户 | 场景 | 当前痛点 | 目标任务 |
| --- | --- | --- | --- |

## 4. MVP 范围
- 本期做：
- 本期不做：

## 5. 核心流程
- 用户流程：
- 系统流程：
- 异常分支：

## 6. 功能说明
| 模块 | 规则 | 页面状态 | 验收标准 |
| --- | --- | --- | --- |

## 7. AI 能力设计
- 使用能力：Prompt / RAG / Agent / 多模态
- 输入字段：
- 输出格式：
- 失败处理：
- 日志字段：
- 成本统计：

## 8. 数据指标
- 使用指标：
- 效果指标：
- 成本指标：
- 风险指标：

## 9. 验收标准
- 给定...当...那么...
\`\`\`

## 填写示例

知识库问答 PRD 的背景可以写：当前员工查询制度需要在多个文档中搜索，平均耗时 10 分钟且答案缺少来源。第一版目标是支持 HR 和财务文档问答，并要求所有答案展示引用来源。

## 常见错误

- 只写页面，不写规则。
- AI 部分只写“调用模型”。
- 没有 MVP 边界和验收标准。
`,g4=`---
title: 项目复盘模板
type: 复盘
tags:
  - 项目复盘
  - 迭代
---

# AI 项目复盘模板

## 模板用途

用于在 AI 项目完成后复盘目标、过程、结果、问题和下一步迭代。

## 适用场景

完成课程项目、作品集项目、真实需求评审或上线后复盘时使用。

## 使用方法

用事实和数据复盘，不要只写“收获很多”。如果没有真实数据，可以标注为假设指标或演示项目指标。

## 模板正文

\`\`\`md
# 项目复盘：{项目名称}

## 1. 项目目标
- 原始目标：
- 成功指标：

## 2. 实际产出
- PRD：
- 原型：
- AI 能力设计：
- 技术协作：

## 3. 结果评估
| 指标 | 目标 | 实际/假设 | 结论 |
| --- | --- | --- | --- |

## 4. 关键问题
- 需求问题：
- AI 效果问题：
- 协作问题：
- 成本或风险问题：

## 5. 经验和下一步
- 继续保留：
- 需要改进：
- 下个版本计划：
\`\`\`

## 填写示例

RAG 项目复盘可以写：引用来源提升了可信度，但无答案率较高，原因是知识库覆盖不足，下一步补高频问题和评估集。

## 常见错误

- 只写感受，不写事实。
- 不复盘 AI 质量、成本和风险。
- 没有下一步行动。
`,A4=`---
title: Prompt 设计模板
type: Prompt
tags:
  - Prompt
  - 提示词
---

# Prompt 设计模板

## 模板用途

用于把用户任务转成可复用、可测试、可迭代的 Prompt 模板。

## 适用场景

AI 写作、聊天助手、客服话术、报告生成、摘要提取、结构化输出等场景。

## 使用方法

先定义场景和输入字段，再写 Prompt 正文，最后用样例测试输出质量。Prompt 要保存版本、适用场景和评估结果。

## 模板正文

\`\`\`md
# Prompt 模板：{名称}

## 1. 适用场景
- 用户任务：
- 不适用场景：

## 2. 输入字段
- 目标：
- 背景：
- 素材：
- 语气/风格：
- 限制条件：

## 3. Prompt 正文
你是{角色}。请根据以下信息完成{任务}。
背景：{背景}
输入：{输入}
要求：{约束}
输出格式：{格式}
如果信息不足，请先列出需要补充的问题，不要编造。

## 4. 测试记录
| 输入样例 | 输出评分 | 问题 | 调整建议 |
| --- | --- | --- | --- |
\`\`\`

## 填写示例

周报生成 Prompt 应要求模型根据用户提供的事项、数据、风险和计划生成结构化周报，并明确“不编造未提供的数据”。

## 常见错误

- Prompt 只写一句“帮我生成”。
- 没有输出格式。
- 不测试不同输入样例。
`,y4=`---
title: RAG 知识库产品设计模板
type: RAG
tags:
  - RAG
  - 知识库
---

# RAG 知识库产品设计模板

## 模板用途

用于设计企业知识库问答产品，覆盖文档、检索、引用、权限、反馈和质量运营。

## 适用场景

企业制度问答、客服知识库、产品手册问答、内部培训助手等。

## 使用方法

先定义知识来源和用户权限，再设计问答流程。不要只写“接入 RAG”，要写清每个环节如何服务产品体验。

## 模板正文

\`\`\`md
# RAG 产品方案：{项目名称}

## 1. 业务场景
- 目标用户：
- 查询任务：
- 当前痛点：

## 2. 知识管理
- 文档来源：
- 支持格式：
- 更新频率：
- 管理角色：

## 3. RAG 流程
上传 -> 解析 -> 切分 -> Embedding -> 向量库 -> 检索 -> 重排 -> 生成 -> 引用 -> 反馈

## 4. 权限设计
| 对象 | 权限规则 | 备注 |
| --- | --- | --- |

## 5. 问答体验
- 输入入口：
- 答案结构：
- 引用展示：
- 无答案处理：

## 6. 质量指标
- 命中率：
- 无答案率：
- 错误反馈率：
- 单问成本：
\`\`\`

## 填写示例

财务制度问答中，答案必须展示制度名称、段落和更新时间。用户无权限访问的制度不得进入检索上下文。

## 常见错误

- 没有管理员端。
- 不展示引用来源。
- 权限只在前端隐藏。
`,x4=`---\r
title: AI 产品需求池模板\r
type: 需求管理\r
tags:\r
  - 需求池\r
  - 优先级\r
---\r
\r
# AI 产品需求池模板\r
\r
## 模板用途\r
\r
用于管理 AI 产品需求线索、用户证据、优先级、AI 能力和风险。\r
\r
## 适用场景\r
\r
调研后、迭代规划、版本评审和需求优先级排序。\r
\r
## 使用方法\r
\r
每条需求都要关联用户证据和验收标准。不要把一句用户愿望直接放进开发排期。\r
\r
## 模板正文\r
\r
\`\`\`md\r
# AI 产品需求池\r
\r
| ID | 用户原话/来源 | 场景 | 痛点 | AI 介入方式 | 价值 | 风险 | 优先级 | 状态 |\r
| --- | --- | --- | --- | --- | --- | --- | --- | --- |\r
\r
## 需求详情\r
### 需求名称\r
- 目标用户：\r
- 场景：\r
- 当前问题：\r
- AI 能力：\r
- 验收标准：\r
- 不做什么：\r
- 依赖与风险：\r
\`\`\`\r
\r
## 填写示例\r
\r
用户原话“我找不到报销制度”可以转成需求：支持制度自然语言问答，答案必须引用来源，第一版只支持财务知识库。\r
\r
## 常见错误\r
\r
- 需求没有用户证据。\r
- 没有 AI 能力边界。\r
- 优先级只看老板声音。`,b4=`---\r
title: AI 产品技术协作清单模板\r
type: 技术协作\r
tags:\r
  - 技术协作\r
  - 接口\r
---\r
\r
# AI 产品技术协作清单模板\r
\r
## 模板用途\r
\r
用于在需求评审和技术评审前整理接口、数据、模型、日志、成本和安全问题。\r
\r
## 适用场景\r
\r
模型接入、RAG、Agent、图片生成、智能客服等 AI 功能开发前。\r
\r
## 使用方法\r
\r
把待确认问题写成清单并标注负责人和状态。不要把技术风险留到开发后期。\r
\r
## 模板正文\r
\r
\`\`\`md\r
# 技术协作清单：{项目名称}\r
\r
## 1. 接口\r
- 入参：\r
- 出参：\r
- 错误码：\r
- 是否流式：\r
\r
## 2. 数据\r
- 需要存储的数据：\r
- 权限规则：\r
- 数据保留：\r
\r
## 3. AI 能力\r
- 模型：\r
- Prompt / RAG / Agent：\r
- 失败兜底：\r
\r
## 4. 日志和成本\r
- 日志字段：\r
- Token / 任务成本：\r
- 告警规则：\r
\r
## 5. 安全\r
- 敏感内容：\r
- 权限：\r
- 审计：\r
\r
## 6. 待确认问题\r
| 问题 | 负责人 | 截止时间 | 状态 |\r
| --- | --- | --- | --- |\r
\`\`\`\r
\r
## 填写示例\r
\r
AI 聊天接口待确认：是否支持停止生成；停止后是否计费；返回字段是否包含 messageId、usage、errorCode。\r
\r
## 常见错误\r
\r
- 只讨论成功路径。\r
- 不记录日志和成本字段。\r
- 待确认问题没有负责人。`,v4=`---
title: 用户调研模板
type: 用户调研
tags:
  - 用户访谈
  - 需求分析
---

# 用户调研模板

## 模板用途

用于设计 AI 产品用户访谈，帮助学习者从真实任务中发现需求，而不是直接询问用户想要什么 AI 功能。

## 适用场景

准备设计 AI 聊天助手、知识库问答、AI 客服、AI 图片平台或 Agent 工作流之前使用。

## 使用方法

先确定调研目标和目标用户，再围绕任务链路提问。访谈时追问事实、频次、影响和现有做法。

## 模板正文

\`\`\`md
# AI 产品用户调研记录

## 1. 调研目标
- 想验证的问题：
- 目标用户：
- 预期产出：

## 2. 受访者信息
- 角色：
- 使用场景：
- 当前工具：

## 3. 访谈问题
- 最近一次遇到这个问题是什么时候？
- 当时用了哪些工具或流程？
- 最耗时、最容易出错的环节是什么？
- AI 如果参与，你希望它帮哪一步？
- 如何判断 AI 结果可信？
- 哪些数据不能交给 AI？
- 如果 AI 答错，会造成什么后果？

## 4. 访谈记录
| 用户原话 | 场景 | 痛点 | 频次 | 影响 | AI 机会点 |
| --- | --- | --- | --- | --- | --- |

## 5. 需求线索
- 高优先级线索：
- 待验证假设：
- 不适合 AI 的部分：
\`\`\`

## 填写示例

用户原话：“我每次查报销制度都不知道搜什么关键词。”可以拆成资料入口分散、搜索词不确定、答案需要可信来源，AI 机会点是带引用来源的制度问答。

## 常见错误

- 直接问用户要什么功能。
- 只记录结论，不保留用户原话。
- 不问错误后果和权限边界。
`,D4=Object.assign({"../../content/templates/agent-product-design-template.md":u4,"../../content/templates/ai-product-analysis-template.md":o4,"../../content/templates/commercialization-template.md":s4,"../../content/templates/competitive-analysis-template.md":c4,"../../content/templates/launch-acceptance-template.md":f4,"../../content/templates/metrics-design-template.md":d4,"../../content/templates/model-evaluation-template.md":m4,"../../content/templates/portfolio-template.md":h4,"../../content/templates/prd-template.md":p4,"../../content/templates/project-retrospective-template.md":g4,"../../content/templates/prompt-design-template.md":A4,"../../content/templates/rag-product-design-template.md":y4,"../../content/templates/requirement-pool-template.md":x4,"../../content/templates/tech-collaboration-checklist-template.md":b4,"../../content/templates/user-research-template.md":v4}),Bu=Object.entries(D4).map(([t,l])=>{const a=t.replace(/\\/g,"/").match(/templates\/([^/]+)\.md$/)?.[1]||"",{frontmatter:u,content:o}=$u(l);return{slug:a,path:t,frontmatter:u,content:o,excerpt:Wa(o)}}).sort((t,l)=>t.frontmatter.title.localeCompare(l.frontmatter.title));function k4(t){return Bu.find(l=>l.slug===t)}const I4=new Map(v1.map(t=>[t.frontmatter.project||t.slug,t])),Ug=[...Ku.map(t=>({id:`stage:${t.slug}`,type:"阶段",title:t.frontmatter.title,excerpt:t.excerpt,href:`/learn/${t.slug}`,stageTitle:t.frontmatter.stageTitle,tags:t.frontmatter.tags||[],haystack:`${t.frontmatter.title} ${t.content} ${(t.frontmatter.tags||[]).join(" ")}`})),...ft.map(t=>({id:`lesson:${t.id}`,type:"课程",title:t.frontmatter.title,excerpt:t.excerpt,href:`/learn/${t.stageSlug}/${t.slug}`,stageTitle:t.frontmatter.stageTitle,tags:t.frontmatter.tags||[],haystack:`${t.frontmatter.title} ${t.content} ${(t.frontmatter.tags||[]).join(" ")}`})),...Bu.map(t=>({id:`template:${t.slug}`,type:"模板",title:t.frontmatter.title,excerpt:t.excerpt,href:`/templates/${t.slug}`,tags:t.frontmatter.tags||[],haystack:`${t.frontmatter.title} ${t.content} ${(t.frontmatter.tags||[]).join(" ")}`})),...Mu.map(t=>({id:`glossary:${t.slug}`,type:"术语",title:t.frontmatter.title,excerpt:t.excerpt,href:`/glossary/${t.slug}`,tags:t.frontmatter.tags||[],haystack:`${t.frontmatter.title} ${t.frontmatter.term||""} ${t.content} ${(t.frontmatter.tags||[]).join(" ")}`})),...Tf.map(t=>{const l=I4.get(t.id);return{id:`project:${t.id}`,type:"项目",title:l?.frontmatter.title||t.name,excerpt:l?.excerpt||t.goal,href:`/projects/${t.id}`,stageTitle:t.stage,tags:l?.frontmatter.tags||t.skills,haystack:`${Object.values(t).flat().join(" ")} ${l?.content||""} ${(l?.frontmatter.tags||[]).join(" ")}`}})];function S4(t){const l=t.trim().toLowerCase();return l?Ug.filter(a=>a.haystack.toLowerCase().includes(l)).slice(0,40):Ug.slice(0,12)}function E4(){const[t,l]=vb(),[a,u]=N.useState(t.get("q")||""),o=N.useMemo(()=>S4(a),[a]),s=f=>{u(f),l(f?{q:f}:{})};return A.jsxs("main",{className:"container-page pt-24",children:[A.jsx("h1",{className:"text-4xl font-semibold text-slate-950 dark:text-white",children:"搜索课程内容"}),A.jsxs("div",{className:"relative mt-6 max-w-2xl",children:[A.jsx(ff,{className:"pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400",size:19}),A.jsx("input",{value:a,onChange:f=>s(f.target.value),placeholder:"搜索 RAG、Prompt、作品集、PRD...",className:"h-12 w-full rounded-xl border border-slate-200 bg-white pl-12 pr-4 text-sm dark:border-white/10 dark:bg-slate-950"})]}),A.jsx("div",{className:"mt-8 grid gap-4",children:o.map(f=>A.jsxs(fe,{to:f.href,className:"panel rounded-2xl p-5 transition hover:-translate-y-1",children:[A.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[A.jsx("span",{className:"rounded-md bg-slate-950 px-2 py-1 text-xs text-white dark:bg-white dark:text-slate-950",children:f.type}),f.stageTitle&&A.jsx("span",{className:"text-xs text-slate-500 dark:text-slate-400",children:f.stageTitle})]}),A.jsx("h2",{className:"mt-3 text-xl font-semibold text-slate-950 dark:text-white",children:f.title}),A.jsx("p",{className:"mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300",children:f.excerpt}),A.jsx("div",{className:"mt-3 flex flex-wrap gap-2",children:f.tags.slice(0,4).map(m=>A.jsx("span",{className:"rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-500 dark:bg-white/10 dark:text-slate-300",children:m},m))})]},f.id))})]})}function C4(){const{stageSlug:t}=zl(),l=B5(t),a=Va(t||""),u=ni();if(!l)return A.jsx(Gu,{to:"/learn",replace:!0});const o=_l.find(f=>f.order===l.frontmatter.order),s=a[0];return A.jsxs("main",{className:"pt-24",children:[A.jsx("section",{className:"container-page",children:A.jsxs("div",{className:"panel rounded-2xl p-6 lg:p-8",children:[A.jsxs("p",{className:"text-sm font-semibold text-blue-700 dark:text-cyan-300",children:["阶段 ",l.frontmatter.order]}),A.jsx("h1",{className:"mt-2 text-4xl font-semibold text-slate-950 dark:text-white",children:l.frontmatter.title}),A.jsx("p",{className:"mt-4 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300",children:l.excerpt}),s&&A.jsxs(fe,{to:`/learn/${l.slug}/${s.slug}`,className:"mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white dark:bg-white dark:text-slate-950",children:["开始本阶段学习 ",A.jsx(Hu,{size:17})]})]})}),A.jsxs("section",{className:"container-page grid gap-6 py-10 lg:grid-cols-[1fr_320px]",children:[A.jsxs("div",{className:"panel rounded-2xl p-6",children:[A.jsx(Ja,{content:l.content.replace(/^# .+(\r?\n)+/,"")}),A.jsx("h2",{className:"mt-10 text-2xl font-semibold text-slate-950 dark:text-white",children:"阶段课程列表"}),A.jsxs("div",{className:"mt-4 grid gap-3",children:[a.map(f=>A.jsx(fe,{to:`/learn/${f.stageSlug}/${f.slug}`,className:"rounded-xl border border-slate-200 bg-white p-4 transition hover:border-blue-200 dark:border-white/10 dark:bg-white/5",children:A.jsxs("div",{className:"flex items-center justify-between gap-4",children:[A.jsxs("div",{children:[A.jsxs("p",{className:"text-sm font-semibold text-slate-950 dark:text-white",children:[f.frontmatter.lesson,". ",f.frontmatter.title]}),A.jsxs("p",{className:"mt-1 text-xs text-slate-500 dark:text-slate-400",children:[f.frontmatter.duration," · ",f.frontmatter.difficulty]})]}),A.jsx("span",{className:"text-xs text-cyan-500",children:u.completedLessonSet.has(f.id)?"已完成":"未完成"})]})},f.id)),!a.length&&A.jsx("p",{className:"text-sm leading-7 text-slate-500 dark:text-slate-400",children:"本阶段完整课程正文正在开放共建，当前先提供可执行学习大纲。"})]})]}),A.jsxs("aside",{className:"space-y-4",children:[A.jsx(Oa,{title:"适合人群",items:l.frontmatter.audience||[]}),A.jsx(Oa,{title:"学习目标",items:l.frontmatter.objectives||[]}),A.jsx(Oa,{title:"阶段成果",items:l.frontmatter.deliverables||[]}),A.jsx(Oa,{title:"推荐工具",items:l.frontmatter.tools||[]}),o&&A.jsx(Oa,{title:"阶段任务",items:o.tasks.map(f=>f.title)})]})]})]})}function Oa({title:t,items:l}){return A.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/5",children:[A.jsx("h3",{className:"text-sm font-semibold text-slate-950 dark:text-white",children:t}),A.jsx("ul",{className:"mt-3 space-y-2",children:l.map(a=>A.jsx("li",{className:"text-xs leading-5 text-slate-500 dark:text-slate-400",children:a},a))})]})}function Hg(){const{templateSlug:t}=zl(),[l,a]=N.useState("全部"),u=["全部",...Array.from(new Set(Bu.map(p=>p.frontmatter.type||"其他")))],o=N.useMemo(()=>Bu.filter(p=>l==="全部"||p.frontmatter.type===l),[l]),s=k4(t)||o[0],f=async()=>{s&&await navigator.clipboard.writeText(`---
title: ${s.frontmatter.title}
---

${s.content}`)},m=()=>{if(!s)return;const p=new Blob([`---
title: ${s.frontmatter.title}
---

${s.content}`],{type:"text/markdown;charset=utf-8"}),h=URL.createObjectURL(p),y=document.createElement("a");y.href=h,y.download=`${s.slug}.md`,y.click(),URL.revokeObjectURL(h)};return A.jsxs("main",{className:"container-page grid gap-6 pt-24 lg:grid-cols-[300px_1fr]",children:[A.jsxs("aside",{className:"space-y-4",children:[A.jsx("h1",{className:"text-3xl font-semibold text-slate-950 dark:text-white",children:"模板库"}),A.jsx("select",{value:l,onChange:p=>a(p.target.value),className:"h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm dark:border-white/10 dark:bg-slate-950",children:u.map(p=>A.jsx("option",{children:p},p))}),A.jsx("div",{className:"space-y-2",children:o.map(p=>A.jsx(fe,{to:`/templates/${p.slug}`,className:`block rounded-xl border p-3 text-sm ${s?.slug===p.slug?"border-blue-200 bg-blue-50 text-blue-800 dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-100":"border-slate-200 bg-white text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"}`,children:p.frontmatter.title},p.slug))})]}),A.jsx("article",{className:"panel rounded-2xl p-6",children:s&&A.jsxs(A.Fragment,{children:[A.jsxs("div",{className:"mb-6 flex flex-col gap-3 border-b border-slate-200 pb-5 sm:flex-row sm:items-center sm:justify-between dark:border-white/10",children:[A.jsxs("div",{children:[A.jsx("p",{className:"text-sm text-slate-500 dark:text-slate-400",children:s.frontmatter.type}),A.jsx("h2",{className:"text-3xl font-semibold text-slate-950 dark:text-white",children:s.frontmatter.title})]}),A.jsxs("div",{className:"flex gap-2",children:[A.jsxs("button",{onClick:f,className:"inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm dark:border-white/10",children:[A.jsx(Ub,{size:16}),"复制"]}),A.jsxs("button",{onClick:m,className:"inline-flex items-center gap-2 rounded-lg bg-slate-950 px-3 py-2 text-sm text-white dark:bg-white dark:text-slate-950",children:[A.jsx(Hb,{size:16}),"下载"]})]})]}),A.jsx(Ja,{content:s.content})]})})]})}function w4(){const[t,l]=N.useState(()=>window.localStorage.getItem("ai-pm-roadmap-theme")==="dark");return N.useEffect(()=>{document.documentElement.classList.toggle("dark",t),window.localStorage.setItem("ai-pm-roadmap-theme",t?"dark":"light")},[t]),A.jsxs("div",{className:"min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white",children:[A.jsx(ev,{darkMode:t,onToggleTheme:()=>l(a=>!a)}),A.jsxs(Vx,{children:[A.jsx(rt,{path:"/",element:A.jsx(q5,{})}),A.jsx(rt,{path:"/learn",element:A.jsx(V5,{})}),A.jsx(rt,{path:"/learn/:stageSlug",element:A.jsx(C4,{})}),A.jsx(rt,{path:"/learn/:stageSlug/:lessonSlug",element:A.jsx(K5,{})}),A.jsx(rt,{path:"/templates",element:A.jsx(Hg,{})}),A.jsx(rt,{path:"/templates/:templateSlug",element:A.jsx(Hg,{})}),A.jsx(rt,{path:"/glossary",element:A.jsx(Og,{})}),A.jsx(rt,{path:"/glossary/:termSlug",element:A.jsx(Og,{})}),A.jsx(rt,{path:"/projects/:projectSlug",element:A.jsx(i4,{})}),A.jsx(rt,{path:"/search",element:A.jsx(E4,{})}),A.jsx(rt,{path:"*",element:A.jsx(Gu,{to:"/",replace:!0})})]}),A.jsx(nv,{})]})}Qy.createRoot(document.getElementById("root")).render(A.jsx(Ly.StrictMode,{children:A.jsx(gb,{children:A.jsx(w4,{})})}));
