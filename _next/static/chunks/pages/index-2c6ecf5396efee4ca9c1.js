_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"05Qm":function(e,t){e.exports="/_next/static/images/UrcheckinTwinTower-3f232ea509a79d03f2f825e340ec3bdf.png"},"1YQk":function(e,t){e.exports="/_next/static/images/snailer_ui_home-d59ce9d4733bca31fac732bf98cffc89.png"},"3tc/":function(e,t){e.exports="/_next/static/images/Snailer-473993fc8c141e6c6d97299882c77d3d.gif"},"915Z":function(e,t){e.exports="/_next/static/images/side-7a426f9c8342efa8ccf8352ded243c7a.png"},DYp7:function(e,t){e.exports="/_next/static/images/SnailerGrocery-2c53b4c71f92f8d5126b282c54709026.png"},K6tJ:function(e,t){e.exports="/_next/static/images/urcheckin-logo-b46c01aed6fc1db122bdba1a3145cf60.png"},MhUV:function(e,t,n){e.exports={"welcome-container":"LandingSection_welcome-container__13o4t","text-wrapper":"LandingSection_text-wrapper__3nD1d","i-am-text":"LandingSection_i-am-text__ToQzX","i-am-text-title":"LandingSection_i-am-text-title__2QbS7","welcome-title-text-container":"LandingSection_welcome-title-text-container__38V5X","welcome-phone-container":"LandingSection_welcome-phone-container__3Nxl_","welcome-phone":"LandingSection_welcome-phone__1VFxg"}},Phl1:function(e,t){e.exports="/_next/static/images/strived-logo-b2e412518602e9493134f3eac8541f40.png"},QKmo:function(e,t){e.exports="/_next/static/images/SnailerFood-f4a293309b11536dba645683f334b8a7.png"},QLaP:function(e,t,n){"use strict";e.exports=function(e,t,n,i,r,a,o,s){if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,i,r,a,o,s],u=0;(c=new Error(t.replace(/%s/g,(function(){return l[u++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},RJUo:function(e,t){e.exports="/_next/static/images/strived_ui_home-ea4708f88e01208d21f8cd5995ed3b85.png"},RXBc:function(e,t,n){"use strict";n.r(t);var i=n("q1tI"),r=n.n(i),a=n("9a8T"),o=n.n(a),s=n("djf4");function c(e,t,n,i){e.style.transition=`${t} ${n}ms ${i}`}function l(e,t,n){return Math.min(Math.max(e,t),n)}class u{constructor(e,t){this.glareAngle=0,this.glareOpacity=0,this.calculateGlareSize=e=>{const{width:t,height:n}=e,i=Math.sqrt(Math.pow(t,2)+Math.pow(n,2));return{width:i,height:i}},this.setSize=e=>{const t=this.calculateGlareSize(e);this.glareEl.style.width=t.width+"px",this.glareEl.style.height=t.height+"px"},this.update=(e,t,n,i)=>{this.updateAngle(e,t.glareReverse),this.updateOpacity(e,t,n,i)},this.updateAngle=(e,t)=>{const{xPercentage:n,yPercentage:i}=e,r=180/Math.PI,a=n?Math.atan2(i,-n)*r:0;this.glareAngle=a-(t?180:0)},this.updateOpacity=(e,t,n,i)=>{const{xPercentage:r,yPercentage:a}=e,{glarePosition:o,glareReverse:s,glareMaxOpacity:c}=t,u=n?-1:1,d=i?-1:1,p=s?-1:1;let h;switch(o){case"top":h=-r*u*p;break;case"right":h=a*d*p;break;case"bottom":default:h=r*u*p;break;case"left":h=-a*d*p;break;case"all":h=Math.hypot(r,a)}const f=l(h,0,100);this.glareOpacity=f*c/100},this.render=e=>{const{glareColor:t}=e;this.glareEl.style.transform=`rotate(${this.glareAngle}deg) translate(-50%, -50%)`,this.glareEl.style.opacity=this.glareOpacity.toString(),this.glareEl.style.background=`linear-gradient(0deg, rgba(255,255,255,0) 0%, ${t} 100%)`},this.glareWrapperEl=document.createElement("div"),this.glareEl=document.createElement("div"),this.glareWrapperEl.appendChild(this.glareEl),this.glareWrapperEl.className="glare-wrapper",this.glareEl.className="glare";const n={position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden",borderRadius:t,WebkitMaskImage:"-webkit-radial-gradient(white, black)"},i=this.calculateGlareSize(e),r={position:"absolute",top:"50%",left:"50%",transformOrigin:"0% 0%",pointerEvents:"none",width:i.width+"px",height:i.height+"px"};Object.assign(this.glareWrapperEl.style,n),Object.assign(this.glareEl.style,r)}}class d{constructor(){this.glareAngle=0,this.glareOpacity=0,this.tiltAngleX=0,this.tiltAngleY=0,this.tiltAngleXPercentage=0,this.tiltAngleYPercentage=0,this.update=(e,t)=>{this.updateTilt(e,t),this.updateTiltManualInput(e,t),this.updateTiltReverse(t),this.updateTiltLimits(t)},this.updateTilt=(e,t)=>{const{xPercentage:n,yPercentage:i}=e,{tiltMaxAngleX:r,tiltMaxAngleY:a}=t;this.tiltAngleX=n*r/100,this.tiltAngleY=i*a/100*-1},this.updateTiltManualInput=(e,t)=>{const{tiltAngleXManual:n,tiltAngleYManual:i,tiltMaxAngleX:r,tiltMaxAngleY:a}=t;(null!==n||null!==i)&&(this.tiltAngleX=null!==n?n:0,this.tiltAngleY=null!==i?i:0,e.xPercentage=100*this.tiltAngleX/r,e.yPercentage=100*this.tiltAngleY/a)},this.updateTiltReverse=e=>{const t=e.tiltReverse?-1:1;this.tiltAngleX=t*this.tiltAngleX,this.tiltAngleY=t*this.tiltAngleY},this.updateTiltLimits=e=>{const{tiltAxis:t}=e;this.tiltAngleX=l(this.tiltAngleX,-90,90),this.tiltAngleY=l(this.tiltAngleY,-90,90),t&&(this.tiltAngleX="x"===t?this.tiltAngleX:0,this.tiltAngleY="y"===t?this.tiltAngleY:0)},this.updateTiltAnglesPercentage=e=>{const{tiltMaxAngleX:t,tiltMaxAngleY:n}=e;this.tiltAngleXPercentage=this.tiltAngleX/t*100,this.tiltAngleYPercentage=this.tiltAngleY/n*100},this.render=e=>{e.style.transform+=`rotateX(${this.tiltAngleX}deg) rotateY(${this.tiltAngleY}deg) `}}}const p=Object.assign(Object.assign({scale:1,perspective:1e3,flipVertically:!1,flipHorizontally:!1,reset:!0,transitionEasing:"cubic-bezier(.03,.98,.52,.99)",transitionSpeed:400,trackOnWindow:!1,gyroscope:!1},{tiltEnable:!0,tiltReverse:!1,tiltAngleXInitial:0,tiltAngleYInitial:0,tiltMaxAngleX:20,tiltMaxAngleY:20,tiltAxis:null,tiltAngleXManual:null,tiltAngleYManual:null}),{glareEnable:!1,glareMaxOpacity:.7,glareColor:"#ffffff",glarePosition:"bottom",glareReverse:!1,glareBorderRadius:"0"});class h extends i.PureComponent{constructor(){super(...arguments),this.wrapperEl={node:null,size:{width:0,height:0,left:0,top:0},clientPosition:{x:null,y:null,xPercentage:0,yPercentage:0},updateAnimationId:null,scale:1},this.tilt=null,this.glare=null,this.addDeviceOrientationEventListener=()=>{return e=this,t=void 0,i=function*(){if(window.DeviceOrientationEvent,"function"==typeof DeviceOrientationEvent.requestPermission)try{return void("granted"===(yield DeviceOrientationEvent.requestPermission())&&window.addEventListener("deviceorientation",this.onMove))}catch(e){return void console.error(e)}window.addEventListener("deviceorientation",this.onMove)},new((n=void 0)||(n=Promise))((function(r,a){function o(e){try{c(i.next(e))}catch(e){a(e)}}function s(e){try{c(i.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}c((i=i.apply(e,t||[])).next())}));var e,t,n,i},this.setSize=()=>{this.setWrapperElSize(),this.glare&&this.glare.setSize(this.wrapperEl.size)},this.mainLoop=e=>{null!==this.wrapperEl.updateAnimationId&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.processInput(e),this.update(e.type),this.wrapperEl.updateAnimationId=requestAnimationFrame(this.renderFrame)},this.onEnter=e=>{const{onEnter:t}=this.props;this.setSize(),this.wrapperEl.node.style.willChange="transform",this.setTransitions(),t&&t(e.type)},this.onMove=e=>{this.mainLoop(e),this.emitOnMove(e)},this.onLeave=e=>{const{onLeave:t}=this.props;if(this.setTransitions(),t&&t(e.type),this.props.reset){const e=new CustomEvent("autoreset");this.onMove(e)}},this.processInput=e=>{const{scale:t}=this.props;switch(e.type){case"mousemove":this.wrapperEl.clientPosition.x=e.pageX,this.wrapperEl.clientPosition.y=e.pageY,this.wrapperEl.scale=t;break;case"touchmove":this.wrapperEl.clientPosition.x=e.touches[0].pageX,this.wrapperEl.clientPosition.y=e.touches[0].pageY,this.wrapperEl.scale=t;break;case"deviceorientation":this.processInputDeviceOrientation(e),this.wrapperEl.scale=t;break;case"autoreset":const{tiltAngleXInitial:n,tiltAngleYInitial:i,tiltMaxAngleX:r,tiltMaxAngleY:a}=this.props,o=i/a*100;this.wrapperEl.clientPosition.xPercentage=l(n/r*100,-100,100),this.wrapperEl.clientPosition.yPercentage=l(o,-100,100),this.wrapperEl.scale=1}},this.processInputDeviceOrientation=e=>{if(!e.gamma||!e.beta||!this.props.gyroscope)return;const{tiltMaxAngleX:t,tiltMaxAngleY:n}=this.props,i=e.gamma;this.wrapperEl.clientPosition.xPercentage=e.beta/t*100,this.wrapperEl.clientPosition.yPercentage=i/n*100,this.wrapperEl.clientPosition.xPercentage=l(this.wrapperEl.clientPosition.xPercentage,-100,100),this.wrapperEl.clientPosition.yPercentage=l(this.wrapperEl.clientPosition.yPercentage,-100,100)},this.update=e=>{const{tiltEnable:t,flipVertically:n,flipHorizontally:i}=this.props;"autoreset"!==e&&"deviceorientation"!==e&&"propChanged"!==e&&this.updateClientInput(),t&&this.tilt.update(this.wrapperEl.clientPosition,this.props),this.updateFlip(),this.tilt.updateTiltAnglesPercentage(this.props),this.glare&&this.glare.update(this.wrapperEl.clientPosition,this.props,n,i)},this.updateClientInput=()=>{const{trackOnWindow:e}=this.props;let t,n;if(e){const{x:e,y:i}=this.wrapperEl.clientPosition;t=i/window.innerHeight*200-100,n=e/window.innerWidth*200-100}else{const{size:{width:e,height:i,left:r,top:a},clientPosition:{x:o,y:s}}=this.wrapperEl;t=(s-a)/i*200-100,n=(o-r)/e*200-100}this.wrapperEl.clientPosition.xPercentage=l(t,-100,100),this.wrapperEl.clientPosition.yPercentage=l(n,-100,100)},this.updateFlip=()=>{const{flipVertically:e,flipHorizontally:t}=this.props;e&&(this.tilt.tiltAngleX+=180,this.tilt.tiltAngleY*=-1),t&&(this.tilt.tiltAngleY+=180)},this.renderFrame=()=>{this.resetWrapperElTransform(),this.renderPerspective(),this.tilt.render(this.wrapperEl.node),this.renderScale(),this.glare&&this.glare.render(this.props)}}componentDidMount(){this.tilt=new d,this.initGlare(),this.addEventListeners();const e=new CustomEvent("autoreset");this.mainLoop(e);const t=new CustomEvent("initial");this.emitOnMove(t)}componentWillUnmount(){null!==this.wrapperEl.updateAnimationId&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.removeEventListeners()}componentDidUpdate(){const e=new CustomEvent("propChanged");this.mainLoop(e)}addEventListeners(){const{trackOnWindow:e,gyroscope:t}=this.props;window.addEventListener("resize",this.setSize),e&&(window.addEventListener("mouseenter",this.onEnter),window.addEventListener("mousemove",this.onMove),window.addEventListener("mouseout",this.onLeave),window.addEventListener("touchstart",this.onEnter),window.addEventListener("touchmove",this.onMove),window.addEventListener("touchend",this.onLeave)),t&&this.addDeviceOrientationEventListener()}removeEventListeners(){const{trackOnWindow:e,gyroscope:t}=this.props;window.removeEventListener("resize",this.setSize),e&&(window.removeEventListener("mouseenter",this.onEnter),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseout",this.onLeave),window.removeEventListener("touchstart",this.onEnter),window.removeEventListener("touchmove",this.onMove),window.removeEventListener("touchend",this.onLeave)),t&&window.DeviceOrientationEvent&&window.removeEventListener("deviceorientation",this.onMove)}setWrapperElSize(){const e=this.wrapperEl.node.getBoundingClientRect();this.wrapperEl.size.width=this.wrapperEl.node.offsetWidth,this.wrapperEl.size.height=this.wrapperEl.node.offsetHeight,this.wrapperEl.size.left=e.left+window.scrollX,this.wrapperEl.size.top=e.top+window.scrollY}initGlare(){const{glareEnable:e,glareBorderRadius:t}=this.props;e&&(this.glare=new u(this.wrapperEl.size,t),this.wrapperEl.node.appendChild(this.glare.glareWrapperEl))}emitOnMove(e){const{onMove:t}=this.props;if(!t)return;let n=0,i=0;this.glare&&(n=this.glare.glareAngle,i=this.glare.glareOpacity),t(this.tilt.tiltAngleX,this.tilt.tiltAngleY,this.tilt.tiltAngleXPercentage,this.tilt.tiltAngleYPercentage,n,i,e.type)}resetWrapperElTransform(){this.wrapperEl.node.style.transform=""}renderPerspective(){const{perspective:e}=this.props;this.wrapperEl.node.style.transform+=`perspective(${e}px) `}renderScale(){const{scale:e}=this.wrapperEl;this.wrapperEl.node.style.transform+=`scale3d(${e},${e},${e})`}setTransitions(){const{transitionSpeed:e,transitionEasing:t}=this.props;c(this.wrapperEl.node,"all",e,t),this.glare&&c(this.glare.glareEl,"opacity",e,t)}render(){const{children:e,className:t,style:n}=this.props;return r.a.createElement("div",{ref:e=>this.wrapperEl.node=e,onMouseEnter:this.onEnter,onMouseMove:this.onMove,onMouseLeave:this.onLeave,onTouchStart:this.onEnter,onTouchMove:this.onMove,onTouchEnd:this.onLeave,className:t,style:n},e)}}h.defaultProps=p;var f=n("6diz"),g=n("ELNm"),m=n.n(g),v=n("MhUV"),b=n.n(v),x=n("vcij"),w=n.n(x),E=n("nKUr"),j=function(){Object(i.useEffect)((function(){var t=new m.a(e,{strings:["Jia Sheng","UI Designer","UI Developer","Creative Lead"],typeSpeed:100,backSpeed:100,loop:!0});return function(){t.destroy()}}),[]);var e=Object(i.useRef)();return Object(E.jsx)(E.Fragment,{children:Object(E.jsx)("section",{className:b.a["welcome-container"],id:b.a.welcome,children:Object(E.jsx)(h,{tiltReverse:!0,tiltMaxAngleY:15,tiltMaxAngleX:0,children:Object(E.jsxs)("div",{className:b.a["welcome-title-text-container"],children:[Object(E.jsx)("div",{className:b.a["welcome-phone-container"],"data-aos":"fade-up","data-aos-delay":"100","data-aos-duration":"500",children:Object(E.jsx)(f.a,{src:w.a,className:b.a["welcome-phone"]})}),Object(E.jsx)("div",{"data-aos":"fade-right","data-aos-delay":"800",className:b.a["text-wrapper"],children:Object(E.jsxs)("h1",{className:b.a["i-am-text"],children:["I am",Object(E.jsx)("br",{}),Object(E.jsx)("span",{className:b.a["i-am-text-title"],ref:function(t){return e=t}})]})})]})})})})},y=n("xI4t"),O=n.n(y),_=n("mP5I"),k=n.n(_),S=n("915Z"),A=n.n(S),N=function(){return Object(E.jsx)("div",{className:O.a["about-left-container"],"data-aos":"fade-right",children:Object(E.jsx)(h,{tiltReverse:!0,tiltMaxAngleY:5,tiltMaxAngleX:0,children:Object(E.jsx)(f.a,{src:k.a,className:O.a["about-iphone"],"data-aos-delay":"100"})})})},C=function(){return Object(E.jsxs)("div",{className:O.a["about-right-container"],"data-aos":"fade-up",children:[Object(E.jsx)("h2",{className:O.a["about-header"],children:"Hey There!"}),Object(E.jsx)("h2",{className:O.a["about-subhead"],children:"I'm Yeap Jia Sheng"}),Object(E.jsx)("p",{className:O.a["about-right-content"],children:"I am currently a Creative Lead in TTRacing. I am also a UI/UX Designer and Developer focused on creating user-centric experiences and aesthetic visuals. I have a strong passion for Web Design, UI/UX Design, Illustration, Motion Graphics, and Animation. I pay attention to details and put priority on overall UI design consistency. I am not afraid to challenge conventional UI design patterns and making bold choices. I am always learning and striving hard to improve myself everyday."})]})},P=function(){return Object(E.jsxs)("section",{className:O.a["about-container"],id:O.a.about,children:[Object(E.jsx)(f.a,{src:A.a,className:O.a["about-side-top-right"]}),Object(E.jsx)(f.a,{src:A.a,className:O.a["about-side-top-left"]}),Object(E.jsx)(f.a,{src:A.a,className:O.a["about-side-bottom-right"]}),Object(E.jsx)(f.a,{src:A.a,className:O.a["about-side-bottom-left"]}),Object(E.jsxs)("div",{className:O.a["about-wrap"],children:[Object(E.jsx)(N,{}),Object(E.jsx)(C,{})]})]})},M=n("YFqc"),I=n.n(M);function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function L(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}var R=function(e){var t=Object(i.useRef)(e);return Object(i.useEffect)((function(){t.current=e}),[e]),t};function X(e){var t=R(e);return Object(i.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}var D=function(e,t){var n=Object(i.useRef)(!0);Object(i.useEffect)((function(){if(!n.current)return e();n.current=!1}),t)};function Y(e){var t=function(e){var t=Object(i.useRef)(e);return t.current=e,t}(e);Object(i.useEffect)((function(){return function(){return t.current()}}),[])}var W=Math.pow(2,31)-1;function F(){var e=function(){var e=Object(i.useRef)(!0),t=Object(i.useRef)((function(){return e.current}));return Object(i.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}(),t=Object(i.useRef)();return Y((function(){return clearTimeout(t.current)})),Object(i.useMemo)((function(){var n=function(){return clearTimeout(t.current)};return{set:function(i,r){void 0===r&&(r=0),e()&&(n(),r<=W?t.current=setTimeout(i,r):function e(t,n,i){var r=i-Date.now();t.current=r<=W?setTimeout(n,r):setTimeout((function(){return e(t,n,i)}),W)}(t,i,Date.now()+r))},clear:n}}),[])}var U=n("eC2I"),z=n.n(U);function V(e,t){return(V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function G(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,V(e,t)}var J=n("i8i4"),K=n.n(J),H=!1,Q=r.a.createContext(null),$=function(e){function t(t,n){var i;i=e.call(this,t,n)||this;var r,a=n&&!n.isMounting?t.enter:t.appear;return i.appearStatus=null,t.in?a?(r="exited",i.appearStatus="entering"):r="entered":r=t.unmountOnExit||t.mountOnEnter?"unmounted":"exited",i.state={status:r},i.nextCallback=null,i}G(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:"exited"}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(t="entering"):"entering"!==n&&"entered"!==n||(t="exiting")}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,i=this.props.timeout;return e=t=n=i,null!=i&&"number"!==typeof i&&(e=i.exit,t=i.enter,n=void 0!==i.appear?i.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),"entering"===t?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},n.performEnter=function(e){var t=this,n=this.props.enter,i=this.context?this.context.isMounting:e,r=this.props.nodeRef?[i]:[K.a.findDOMNode(this),i],a=r[0],o=r[1],s=this.getTimeouts(),c=i?s.appear:s.enter;!e&&!n||H?this.safeSetState({status:"entered"},(function(){t.props.onEntered(a)})):(this.props.onEnter(a,o),this.safeSetState({status:"entering"},(function(){t.props.onEntering(a,o),t.onTransitionEnd(c,(function(){t.safeSetState({status:"entered"},(function(){t.props.onEntered(a,o)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),i=this.props.nodeRef?void 0:K.a.findDOMNode(this);t&&!H?(this.props.onExit(i),this.safeSetState({status:"exiting"},(function(){e.props.onExiting(i),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:"exited"},(function(){e.props.onExited(i)}))}))}))):this.safeSetState({status:"exited"},(function(){e.props.onExited(i)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(i){n&&(n=!1,t.nextCallback=null,e(i))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:K.a.findDOMNode(this),i=null==e&&!this.props.addEndListener;if(n&&!i){if(this.props.addEndListener){var r=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],a=r[0],o=r[1];this.props.addEndListener(a,o)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,n=t.children,i=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,L(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return r.a.createElement(Q.Provider,{value:null},"function"===typeof n?n(e,i):r.a.cloneElement(r.a.Children.only(n),i))},t}(r.a.Component);function q(){}$.contextType=Q,$.propTypes={},$.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:q,onEntering:q,onEntered:q,onExit:q,onExiting:q,onExited:q},$.UNMOUNTED="unmounted",$.EXITED="exited",$.ENTERING="entering",$.ENTERED="entered",$.EXITING="exiting";var Z=$,B=n("17x9"),ee=n.n(B);n("QLaP");function te(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function ne(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!==typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function ie(e,t){return Object.keys(t).reduce((function(n,r){var a,o=n,s=o[te(r)],c=o[r],l=L(o,[te(r),r].map(ne)),u=t[r],d=function(e,t,n){var r=Object(i.useRef)(void 0!==e),a=Object(i.useState)(t),o=a[0],s=a[1],c=void 0!==e,l=r.current;return r.current=c,!c&&l&&o!==t&&s(t),[c?e:o,Object(i.useCallback)((function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),r=1;r<t;r++)i[r-1]=arguments[r];n&&n.apply(void 0,[e].concat(i)),s(e)}),[n])]}(c,s,e[u]),p=d[0],h=d[1];return T({},l,((a={})[r]=p,a[u]=h,a))}),e)}n("VCL8");var re=/-(.)/g;var ae=r.a.createContext({});ae.Consumer,ae.Provider;function oe(e,t){var n=Object(i.useContext)(ae);return e||n[t]||t}var se=["className","bsPrefix","as"],ce=function(e){return e[0].toUpperCase()+(t=e,t.replace(re,(function(e,t){return t.toUpperCase()}))).slice(1);var t};var le=function(e,t){var n=void 0===t?{}:t,i=n.displayName,a=void 0===i?ce(e):i,o=n.Component,s=n.defaultProps,c=r.a.forwardRef((function(t,n){var i=t.className,a=t.bsPrefix,s=t.as,c=void 0===s?o||"div":s,l=L(t,se),u=oe(a,e);return r.a.createElement(c,T({ref:n,className:z()(i,u)},l))}));return c.defaultProps=s,c.displayName=a,c}("carousel-caption"),ue=["as","bsPrefix","children","className"],de=r.a.forwardRef((function(e,t){var n=e.as,i=void 0===n?"div":n,a=e.bsPrefix,o=e.children,s=e.className,c=L(e,ue),l=z()(s,oe(a,"carousel-item"));return r.a.createElement(i,T({ref:t},c,{className:l}),o)}));de.displayName="CarouselItem";var pe=de;function he(e,t){var n=0;return r.a.Children.map(e,(function(e){return r.a.isValidElement(e)?t(e,n++):e}))}var fe=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];e.apply(this,i),t.apply(this,i)}}),null)},ge=["as","disabled","onKeyDown"];function me(e){return!e||"#"===e.trim()}var ve=r.a.forwardRef((function(e,t){var n=e.as,i=void 0===n?"a":n,a=e.disabled,o=e.onKeyDown,s=L(e,ge),c=function(e){var t=s.href,n=s.onClick;(a||me(t))&&e.preventDefault(),a?e.stopPropagation():n&&n(e)};return me(s.href)&&(s.role=s.role||"button",s.href=s.href||"#"),a&&(s.tabIndex=-1,s["aria-disabled"]=!0),r.a.createElement(i,T({ref:t},s,{onClick:c,onKeyDown:fe((function(e){" "===e.key&&(e.preventDefault(),c(e))}),o)}))}));ve.displayName="SafeAnchor";var be=ve;function xe(e){var t=function(e){return e&&e.ownerDocument||document}(e);return t&&t.defaultView||window}var we=/([A-Z])/g;var Ee=/^ms-/;function je(e){return function(e){return e.replace(we,"-$1").toLowerCase()}(e).replace(Ee,"-ms-")}var ye=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var Oe=function(e,t){var n="",i="";if("string"===typeof t)return e.style.getPropertyValue(je(t))||function(e,t){return xe(e).getComputedStyle(e,t)}(e).getPropertyValue(je(t));Object.keys(t).forEach((function(r){var a=t[r];a||0===a?!function(e){return!(!e||!ye.test(e))}(r)?n+=je(r)+": "+a+";":i+=r+"("+a+") ":e.style.removeProperty(je(r))})),i&&(n+="transform: "+i+";"),e.style.cssText+=";"+n},_e=!("undefined"===typeof window||!window.document||!window.document.createElement),ke=!1,Se=!1;try{var Ae={get passive(){return ke=!0},get once(){return Se=ke=!0}};_e&&(window.addEventListener("test",Ae,Ae),window.removeEventListener("test",Ae,!0))}catch(Et){}var Ne=function(e,t,n,i){if(i&&"boolean"!==typeof i&&!Se){var r=i.once,a=i.capture,o=n;!Se&&r&&(o=n.__once||function e(i){this.removeEventListener(t,e,a),n.call(this,i)},n.__once=o),e.addEventListener(t,o,ke?i:a)}e.addEventListener(t,n,i)};var Ce=function(e,t,n,i){var r=i&&"boolean"!==typeof i?i.capture:i;e.removeEventListener(t,n,r),n.__once&&e.removeEventListener(t,n.__once,r)};var Pe=function(e,t,n,i){return Ne(e,t,n,i),function(){Ce(e,t,n,i)}};function Me(e,t,n){void 0===n&&(n=5);var i=!1,r=setTimeout((function(){i||function(e,t,n,i){if(void 0===n&&(n=!1),void 0===i&&(i=!0),e){var r=document.createEvent("HTMLEvents");r.initEvent(t,n,i),e.dispatchEvent(r)}}(e,"transitionend",!0)}),t+n),a=Pe(e,"transitionend",(function(){i=!0}),{once:!0});return function(){clearTimeout(r),a()}}function Ie(e,t,n,i){null==n&&(n=function(e){var t=Oe(e,"transitionDuration")||"",n=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*n}(e)||0);var r=Me(e,n,i),a=Pe(e,"transitionend",t);return function(){r(),a()}}function Te(e,t){var n=Oe(e,t)||"",i=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*i}function Le(e,t){var n=Te(e,"transitionDuration"),i=Te(e,"transitionDelay"),r=Ie(e,(function(n){n.target===e&&(r(),t(n))}),n+i)}var Re=["as","bsPrefix","slide","fade","controls","indicators","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","className","children"],Xe={bsPrefix:ee.a.string,as:ee.a.elementType,slide:ee.a.bool,fade:ee.a.bool,controls:ee.a.bool,indicators:ee.a.bool,activeIndex:ee.a.number,onSelect:ee.a.func,onSlide:ee.a.func,onSlid:ee.a.func,interval:ee.a.number,keyboard:ee.a.bool,pause:ee.a.oneOf(["hover",!1]),wrap:ee.a.bool,touch:ee.a.bool,prevIcon:ee.a.node,prevLabel:ee.a.string,nextIcon:ee.a.node,nextLabel:ee.a.string},De={slide:!0,fade:!1,controls:!0,indicators:!0,defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:r.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:r.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};function Ye(e,t){var n=ie(e,{activeIndex:"onSelect"}),a=n.as,o=void 0===a?"div":a,s=n.bsPrefix,c=n.slide,l=n.fade,u=n.controls,d=n.indicators,p=n.activeIndex,h=n.onSelect,f=n.onSlide,g=n.onSlid,m=n.interval,v=n.keyboard,b=n.onKeyDown,x=n.pause,w=n.onMouseOver,E=n.onMouseOut,j=n.wrap,y=n.touch,O=n.onTouchStart,_=n.onTouchMove,k=n.onTouchEnd,S=n.prevIcon,A=n.prevLabel,N=n.nextIcon,C=n.nextLabel,P=n.className,M=n.children,I=L(n,Re),Y=oe(s,"carousel"),W=Object(i.useRef)(null),U=Object(i.useState)("next"),V=U[0],G=U[1],J=Object(i.useState)(!1),K=J[0],H=J[1],Q=Object(i.useState)(!1),$=Q[0],q=Q[1],B=Object(i.useState)(p||0),ee=B[0],te=B[1];$||p===ee||(W.current?G(W.current):G((p||0)>ee?"next":"prev"),c&&q(!0),te(p||0)),Object(i.useEffect)((function(){W.current&&(W.current=null)}));var ne,re=0;!function(e,t){var n=0;r.a.Children.forEach(e,(function(e){r.a.isValidElement(e)&&t(e,n++)}))}(M,(function(e,t){++re,t===p&&(ne=e.props.interval)}));var ae=R(ne),se=Object(i.useCallback)((function(e){if(!$){var t=ee-1;if(t<0){if(!j)return;t=re-1}W.current="prev",h&&h(t,e)}}),[$,ee,h,j,re]),ce=X((function(e){if(!$){var t=ee+1;if(t>=re){if(!j)return;t=0}W.current="next",h&&h(t,e)}})),le=Object(i.useRef)();Object(i.useImperativeHandle)(t,(function(){return{element:le.current,prev:se,next:ce}}));var ue=X((function(){!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;var t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(le.current)&&ce()})),de="next"===V?"left":"right";D((function(){c||(f&&f(ee,de),g&&g(ee,de))}),[ee]);var pe=Y+"-item-"+V,fe=Y+"-item-"+de,ge=Object(i.useCallback)((function(e){!function(e){e.offsetHeight}(e),f&&f(ee,de)}),[f,ee,de]),me=Object(i.useCallback)((function(){q(!1),g&&g(ee,de)}),[g,ee,de]),ve=Object(i.useCallback)((function(e){if(v&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void se(e);case"ArrowRight":return e.preventDefault(),void ce(e)}b&&b(e)}),[v,b,se,ce]),xe=Object(i.useCallback)((function(e){"hover"===x&&H(!0),w&&w(e)}),[x,w]),we=Object(i.useCallback)((function(e){H(!1),E&&E(e)}),[E]),Ee=Object(i.useRef)(0),je=Object(i.useRef)(0),ye=F(),Oe=Object(i.useCallback)((function(e){Ee.current=e.touches[0].clientX,je.current=0,"hover"===x&&H(!0),O&&O(e)}),[x,O]),_e=Object(i.useCallback)((function(e){e.touches&&e.touches.length>1?je.current=0:je.current=e.touches[0].clientX-Ee.current,_&&_(e)}),[_]),ke=Object(i.useCallback)((function(e){if(y){var t=je.current;Math.abs(t)>40&&(t>0?se(e):ce(e))}"hover"===x&&ye.set((function(){H(!1)}),m||void 0),k&&k(e)}),[y,x,se,ce,ye,m,k]),Se=null!=m&&!K&&!$,Ae=Object(i.useRef)();Object(i.useEffect)((function(){var e,t;if(Se)return Ae.current=window.setInterval(document.visibilityState?ue:ce,null!=(e=null!=(t=ae.current)?t:m)?e:void 0),function(){null!==Ae.current&&clearInterval(Ae.current)}}),[Se,ce,ae,m,ue]);var Ne=Object(i.useMemo)((function(){return d&&Array.from({length:re},(function(e,t){return function(e){h&&h(t,e)}}))}),[d,re,h]);return r.a.createElement(o,T({ref:le},I,{onKeyDown:ve,onMouseOver:xe,onMouseOut:we,onTouchStart:Oe,onTouchMove:_e,onTouchEnd:ke,className:z()(P,Y,c&&"slide",l&&Y+"-fade")}),d&&r.a.createElement("ol",{className:Y+"-indicators"},he(M,(function(e,t){return r.a.createElement("li",{key:t,className:t===ee?"active":void 0,onClick:Ne?Ne[t]:void 0})}))),r.a.createElement("div",{className:Y+"-inner"},he(M,(function(e,t){var n=t===ee;return c?r.a.createElement(Z,{in:n,onEnter:n?ge:void 0,onEntered:n?me:void 0,addEndListener:Le},(function(t){return r.a.cloneElement(e,{className:z()(e.props.className,n&&"entered"!==t&&pe,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&fe)})})):r.a.cloneElement(e,{className:z()(e.props.className,n&&"active")})}))),u&&r.a.createElement(r.a.Fragment,null,(j||0!==p)&&r.a.createElement(be,{className:Y+"-control-prev",onClick:se},S,A&&r.a.createElement("span",{className:"sr-only"},A)),(j||p!==re-1)&&r.a.createElement(be,{className:Y+"-control-next",onClick:ce},N,C&&r.a.createElement("span",{className:"sr-only"},C))))}var We=r.a.forwardRef(Ye);We.displayName="Carousel",We.propTypes=Xe,We.defaultProps=De,We.Caption=le,We.Item=pe;var Fe=We,Ue=n("sKvG"),ze=n.n(Ue),Ve=n("3tc/"),Ge=n.n(Ve),Je=n("K6tJ"),Ke=n.n(Je),He=n("Tjhe"),Qe=n.n(He),$e=n("Phl1"),qe=n.n($e),Ze=n("QKmo"),Be=n.n(Ze),et=n("DYp7"),tt=n.n(et),nt=n("a7oz"),it=n.n(nt),rt=n("u8rN"),at=n.n(rt),ot=n("05Qm"),st=n.n(ot),ct=n("hQAX"),lt=n.n(ct),ut=(n("mnh4"),n("1YQk")),dt=n.n(ut),pt=n("vJ8P"),ht=n.n(pt),ft=n("umnk"),gt=n.n(ft),mt=n("RJUo"),vt=n.n(mt),bt=function(e){var t=e.item;return Object(E.jsx)("div",{children:Object(E.jsxs)("div",{className:ze.a["work-card-container"],style:{backgroundColor:t.backgroundColor,color:t.fontColor},"data-aos":"fade-up","data-aos-delay":"200",children:[Object(E.jsxs)("div",{className:ze.a["work-card-body"],children:[Object(E.jsxs)("div",{children:[Object(E.jsxs)("div",{className:ze.a["work-title-row"],children:[Object(E.jsx)("div",{"data-aos":"fade-right","data-aos-delay":"700",children:Object(E.jsx)(f.a,{src:t.logo,className:ze.a["work-gif-logo"]})}),Object(E.jsx)("p",{className:ze.a["work-card-title"],children:t.title})]}),Object(E.jsx)("p",{className:ze.a["work-card-subtitle"],children:t.subtitle})]}),!0===t.description_image?Object(E.jsxs)("div",{className:ze.a["work-card-image-container"],children:[Object(E.jsx)("div",{className:ze.a["work-card-image-wrapper"],"data-aos":"fade-up","data-aos-delay":"700",children:Object(E.jsx)(f.a,{src:t.image1,className:ze.a["work-card-image-1"]})}),Object(E.jsx)("div",{className:ze.a["work-card-image-wrapper"],"data-aos":"fade-up","data-aos-delay":"700",children:Object(E.jsx)(f.a,{src:t.image2,className:ze.a["work-card-image-1"]})}),Object(E.jsx)("div",{className:ze.a["work-card-image-wrapper"],"data-aos":"fade-up","data-aos-delay":"700",children:Object(E.jsx)(f.a,{src:t.image3,className:ze.a["work-card-image-1"]})})]}):null,Object(E.jsx)(I.a,{href:t.href,children:Object(E.jsx)("button",{className:ze.a["work-button"],children:Object(E.jsx)("p",{className:ze.a["work-button-text"],style:{color:t.backgroundColor,backgroundColor:t.fontColor},children:"Check it Out"})})})]}),Object(E.jsx)("div",{"data-aos":"fade-left","data-aos-delay":"700",className:ze.a["work-card-phone"],children:Object(E.jsx)(f.a,{src:t.phone,className:ze.a["work-card-phone-image"]})})]})})},xt=function(){var e=[{logo:Ge.a,title:"Snailer",subtitle:"Took part in UI design and development for Snailer - a white-labeled food/grocery delivery and vehicle hiring app based in Johor, Malaysia. The app and website is designed using playful, clean and modern approach.",backgroundColor:"#468d65",fontColor:"#FFFFFF",description_image:!0,phone:dt.a,image1:Be.a,image2:tt.a,image3:it.a,href:"/portfolio/Snailer"},{logo:Ke.a,title:"Urcheckin",subtitle:"Took part in UI development for Urcheckin - A lodging app which offers arrangement for vacation rental, primarily homestays, or tourism experiences.",backgroundColor:"#E9493C",fontColor:"#FFFFFF",description_image:!0,phone:ht.a,image1:lt.a,image2:at.a,image3:st.a,href:"/portfolio/Urcheckin"},{logo:Qe.a,title:"TTRacing",subtitle:"Constantly take part and improving in the entire Shopify UI/UX design and development for TTRacing - a gaming chair company that strives to give everyone the best comfort experience for when they\u2019re working or playing for long hours.",backgroundColor:"#FFFFFF",fontColor:"#000000",phone:gt.a,href:"/portfolio/ttracing"},{logo:qe.a,title:"Strived",subtitle:"Took part in the entire Shopify UI/UX design and development for Strived - a fully customised gift shop that focuses on providing unique and high-quality products.",backgroundColor:"#000000",fontColor:"#FFFFFF",phone:vt.a,href:"/portfolio/strived"}],t=Object(i.useState)(0),n=t[0],r=t[1];return Object(E.jsx)("section",{className:ze.a["work-container"],id:"work",children:Object(E.jsxs)("div",{className:ze.a["work-wrap"],children:[Object(E.jsx)("div",{children:Object(E.jsx)("h1",{className:ze.a["my-work-header"],children:"Check Out My Work!"})}),Object(E.jsx)("div",{className:ze.a["carousel-container"],children:Object(E.jsxs)(Fe,{activeIndex:n,onSelect:function(e,t){r(e)},interval:1e4,children:[Object(E.jsx)(Fe.Item,{children:Object(E.jsx)(bt,{item:e[0]})}),Object(E.jsx)(Fe.Item,{children:Object(E.jsx)(bt,{item:e[1]})}),Object(E.jsx)(Fe.Item,{children:Object(E.jsx)(bt,{item:e[2]})}),Object(E.jsx)(Fe.Item,{children:Object(E.jsx)(bt,{item:e[3]})})]})})]})})},wt=n("uX36");t.default=function(){return Object(i.useEffect)((function(){o.a.init({})}),[]),Object(E.jsxs)(s.a,{title:"Jia Sheng Yeap",keywords:"Creative Lead, UI Designer and Developer",description:"Creative Lead, UI Designer and Developer",children:[Object(E.jsx)(j,{}),Object(E.jsx)(P,{}),Object(E.jsx)(xt,{}),Object(E.jsx)(wt.a,{})]})}},Tjhe:function(e,t){e.exports="/_next/static/images/ttracing-logo-c4ebe1d458f066f06a7d705b0a7eeb4a.png"},a7oz:function(e,t){e.exports="/_next/static/images/SnailerCar-3a39b461685032225cbce67bfeb68ae8.png"},eC2I:function(e,t,n){var i;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var a=typeof i;if("string"===a||"number"===a)e.push(i);else if(Array.isArray(i)){if(i.length){var o=r.apply(null,i);o&&e.push(o)}}else if("object"===a)if(i.toString===Object.prototype.toString)for(var s in i)n.call(i,s)&&i[s]&&e.push(s);else e.push(i.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(i=function(){return r}.apply(t,[]))||(e.exports=i)}()},hQAX:function(e,t){e.exports="/_next/static/images/UrcheckinRoadSign-a00c5e82a7ec4ec7661e0eee42138883.png"},mP5I:function(e,t){e.exports="/_next/static/images/PhoneGIF-7c88226cb30a9a0f6b965d7c1b6e016a.gif"},mnh4:function(e,t){e.exports="/_next/static/images/iphonexmock-6575e5445e9da0c39f5464882d1f9932.png"},sKvG:function(e,t,n){e.exports={"my-work-header":"WorkSection_my-work-header__2YxEO","work-container":"WorkSection_work-container__1Usfb","work-wrap":"WorkSection_work-wrap__1CuTf","carousel-container":"WorkSection_carousel-container__3RZt3","carousel-control-prev-icon":"WorkSection_carousel-control-prev-icon__3vVwX","carousel-control-next-icon":"WorkSection_carousel-control-next-icon__2ZzRK",work:"WorkSection_work__17dbT","work-card-container":"WorkSection_work-card-container__3Lxu5","work-card-body":"WorkSection_work-card-body__6WHNc","work-title-row":"WorkSection_work-title-row__3fFfn","work-gif-logo":"WorkSection_work-gif-logo__3AmC_","work-card-title":"WorkSection_work-card-title__3qY6q","work-card-subtitle":"WorkSection_work-card-subtitle__2tnRO","work-card-image-1":"WorkSection_work-card-image-1__332kk","work-card-image-wrapper":"WorkSection_work-card-image-wrapper__37EDj","work-card-image-container":"WorkSection_work-card-image-container__2iVJD","work-button-text":"WorkSection_work-button-text__8HHTM","work-button":"WorkSection_work-button__EOnj6","work-card-phone":"WorkSection_work-card-phone__RXGQr","work-card-phone-image":"WorkSection_work-card-phone-image__3Sgg_"}},u8rN:function(e,t){e.exports="/_next/static/images/UrcheckinWalao-2c286442bdab3382ef07eb2ce2967f12.png"},umnk:function(e,t){e.exports="/_next/static/images/ttracing_ui_home-c381284865e5fcf4e93e1ec389527e71.png"},vJ8P:function(e,t){e.exports="/_next/static/images/urcheckin_ui_home-19509a8ffc4344171a454f3869f2c09a.png"},vcij:function(e,t){e.exports="/_next/static/images/imacmock-b4c1a14eaa3e310efc86da8834986935.png"},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RXBc")}])},xI4t:function(e,t,n){e.exports={"about-container":"About_about-container__3cC-P","about-iphone":"About_about-iphone__1a_4T","about-header":"About_about-header__aNS-g","about-subhead":"About_about-subhead__3OiyU","about-right-content":"About_about-right-content__1sgJU",about:"About_about__3Mph5","about-side-top-right":"About_about-side-top-right__3H6_j","about-side-top-left":"About_about-side-top-left__3c65y","about-side-bottom-right":"About_about-side-bottom-right__33NWi","about-side-bottom-left":"About_about-side-bottom-left__MF3mG","about-wrap":"About_about-wrap__3s7yt","about-right-container":"About_about-right-container__2_htx"}}},[["vlRD",0,2,1,3,4,5]]]);