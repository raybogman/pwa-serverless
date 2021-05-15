/*!
 * @version v10.0.0-52-gbc6bd9fde-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"+qE3":function(e,t,n){"use strict"
var r,i="object"==typeof Reflect?Reflect:null,s=i&&"function"==typeof i.apply?i.apply:function ReflectApply(e,t,n){return Function.prototype.apply.call(e,t,n)}
r=i&&"function"==typeof i.ownKeys?i.ownKeys:Object.getOwnPropertySymbols?function ReflectOwnKeys(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function ReflectOwnKeys(e){return Object.getOwnPropertyNames(e)}
var o=Number.isNaN||function NumberIsNaN(e){return e!=e}
function EventEmitter(){EventEmitter.init.call(this)}e.exports=EventEmitter,EventEmitter.EventEmitter=EventEmitter,EventEmitter.prototype._events=void 0,EventEmitter.prototype._eventsCount=0,EventEmitter.prototype._maxListeners=void 0
var a=10
function checkListener(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function _getMaxListeners(e){return void 0===e._maxListeners?EventEmitter.defaultMaxListeners:e._maxListeners}function _addListener(e,t,n,r){var i,s,o
if(checkListener(n),void 0===(s=e._events)?(s=e._events=Object.create(null),e._eventsCount=0):(void 0!==s.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),s=e._events),o=s[t]),void 0===o)o=s[t]=n,++e._eventsCount
else if("function"==typeof o?o=s[t]=r?[n,o]:[o,n]:r?o.unshift(n):o.push(n),(i=_getMaxListeners(e))>0&&o.length>i&&!o.warned){o.warned=!0
var a=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit")
a.name="MaxListenersExceededWarning",a.emitter=e,a.type=t,a.count=o.length,function ProcessEmitWarning(e){console&&console.warn}()}return e}function _onceWrap(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},i=function onceWrapper(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}.bind(r)
return i.listener=n,r.wrapFn=i,i}function _listeners(e,t,n){var r=e._events
if(void 0===r)return[]
var i=r[t]
return void 0===i?[]:"function"==typeof i?n?[i.listener||i]:[i]:n?function unwrapListeners(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n]
return t}(i):arrayClone(i,i.length)}function listenerCount(e){var t=this._events
if(void 0!==t){var n=t[e]
if("function"==typeof n)return 1
if(void 0!==n)return n.length}return 0}function arrayClone(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r]
return n}Object.defineProperty(EventEmitter,"defaultMaxListeners",{enumerable:!0,get:function(){return a},set:function(e){if("number"!=typeof e||e<0||o(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".")
a=e}}),EventEmitter.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},EventEmitter.prototype.setMaxListeners=function setMaxListeners(e){if("number"!=typeof e||e<0||o(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".")
return this._maxListeners=e,this},EventEmitter.prototype.getMaxListeners=function getMaxListeners(){return _getMaxListeners(this)},EventEmitter.prototype.emit=function emit(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n])
var r="error"===e,i=this._events
if(void 0!==i)r=r&&void 0===i.error
else if(!r)return!1
if(r){var o
if(t.length>0&&(o=t[0]),o instanceof Error)throw o
var a=new Error("Unhandled error."+(o?" ("+o.message+")":""))
throw a.context=o,a}var c=i[e]
if(void 0===c)return!1
if("function"==typeof c)s(c,this,t)
else{var l=c.length,u=arrayClone(c,l)
for(n=0;n<l;++n)s(u[n],this,t)}return!0},EventEmitter.prototype.addListener=function addListener(e,t){return _addListener(this,e,t,!1)},EventEmitter.prototype.on=EventEmitter.prototype.addListener,EventEmitter.prototype.prependListener=function prependListener(e,t){return _addListener(this,e,t,!0)},EventEmitter.prototype.once=function once(e,t){return checkListener(t),this.on(e,_onceWrap(this,e,t)),this},EventEmitter.prototype.prependOnceListener=function prependOnceListener(e,t){return checkListener(t),this.prependListener(e,_onceWrap(this,e,t)),this},EventEmitter.prototype.removeListener=function removeListener(e,t){var n,r,i,s,o
if(checkListener(t),void 0===(r=this._events))return this
if(void 0===(n=r[e]))return this
if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t))
else if("function"!=typeof n){for(i=-1,s=n.length-1;s>=0;s--)if(n[s]===t||n[s].listener===t){o=n[s].listener,i=s
break}if(i<0)return this
0===i?n.shift():function spliceOne(e,t){for(;t+1<e.length;t++)e[t]=e[t+1]
e.pop()}(n,i),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,o||t)}return this},EventEmitter.prototype.off=EventEmitter.prototype.removeListener,EventEmitter.prototype.removeAllListeners=function removeAllListeners(e){var t,n,r
if(void 0===(n=this._events))return this
if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this
if(0===arguments.length){var i,s=Object.keys(n)
for(r=0;r<s.length;++r)"removeListener"!==(i=s[r])&&this.removeAllListeners(i)
return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t)
else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r])
return this},EventEmitter.prototype.listeners=function listeners(e){return _listeners(this,e,!0)},EventEmitter.prototype.rawListeners=function rawListeners(e){return _listeners(this,e,!1)},EventEmitter.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):listenerCount.call(e,t)},EventEmitter.prototype.listenerCount=listenerCount,EventEmitter.prototype.eventNames=function eventNames(){return this._eventsCount>0?r(this._events):[]}},"+sVj":function(e,t,n){"use strict"
n.d(t,"a",function(){return i})
var r=function toString(e){var t=e.graphQLErrors,n=e.message
return t&&t.length?t.map(function(e){return e.message}).join(", "):n},i=function deriveErrorMessage(e){var t=[],n=!0,i=!1,s=void 0
try{for(var o,a=e[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var c=o.value
c&&t.push(r(c))}}catch(e){i=!0,s=e}finally{try{n||null==a.return||a.return()}finally{if(i)throw s}}return t.join(", ")}},"7X3U":function(e,t,n){"use strict"
var r=n("q1tI"),i=n.n(r),s=n("kriW"),o=n("17x9"),a=n("y1Xp"),c=n("LboF"),l=n.n(c),u=n("JEzH"),m=n.n(u),p={injectType:"singletonStyleTag",insert:"head",singleton:!0},f=(l()(m.a,p),m.a.locals||{}),d=function Field(e){var t=e.children,n=e.id,r=e.label,o=e.optional,c=Object(a.a)(f,e.classes),l=o?i.a.createElement("span",{className:c.optional},i.a.createElement(s.a,{id:"field.optional",defaultMessage:"Optional"})):null
return i.a.createElement("div",{className:c.root},i.a.createElement("label",{className:c.label,htmlFor:n},r,l),t)}
d.propTypes={children:o.node,classes:Object(o.shape)({label:o.string,root:o.string}),id:o.string,label:o.node,optional:o.bool}
t.a=d},NYgU:function(e,t,n){"use strict"
n.r(t),n.d(t,"default",function(){return R})
var r=n("J4zp"),i=n.n(r),s=n("q1tI"),o=n.n(s),a=n("dDsW"),c=n("kriW"),l=n("8UhI"),u=n("Ty5D"),m=n("J3e4"),p=n("o0o1"),f=n.n(p),d=n("yXPU"),g=n.n(d),h=n("VX74"),b=n("y1Xp"),v=n("FITH"),y=n("VkAN"),E=n.n(y)
function _templateObject2(){var e=E()(["\n    query GetCustomerSubscription {\n        customer {\n            id\n            is_subscribed\n        }\n    }\n"])
return _templateObject2=function _templateObject2(){return e},e}function _templateObject(){var e=E()(["\n    mutation SetNewsletterSubscription($isSubscribed: Boolean!) {\n        updateCustomer(input: { is_subscribed: $isSubscribed }) {\n            customer {\n                id\n                is_subscribed\n            }\n        }\n    }\n"])
return _templateObject=function _templateObject(){return e},e}var x=Object(h.gql)(_templateObject()),j={getCustomerSubscriptionQuery:Object(h.gql)(_templateObject2()),setNewsletterSubscriptionMutation:x},O=n("ACyH"),_=n("Ri9G"),L=n("7X3U"),w=n("dTQg"),k=n("UPvi"),S=n("DUu4"),M=n("LboF"),C=n.n(M),N=n("he9K"),P=n.n(N),T={injectType:"singletonStyleTag",insert:"head",singleton:!0},W=(C()(P.a,T),P.a.locals||{}),R=function CommunicationsPage(e){var t=Object(a.a)().formatMessage,n=Object(b.a)(W,e.classes),r=Object(m.a)(),p=i()(r,2)[1].addToast,d=function useCommunicationsPage(e){var t,n=e.afterSubmit,r=Object(b.a)(j,e.operations),o=r.getCustomerSubscriptionQuery,a=r.setNewsletterSubscriptionMutation,c=Object(v.b)(),l=i()(c,1)[0].isSignedIn,u=Object(h.useQuery)(o,{skip:!l}),m=u.data,p=u.error,d=Object(s.useMemo)(function(){if(m)return{isSubscribed:m.customer.is_subscribed}},[m]),y=Object(h.useMutation)(a),E=i()(y,2),x=E[0],O=E[1],_=O.error,L=O.loading
return{formErrors:[_,p],initialValues:d,handleSubmit:Object(s.useCallback)((t=g()(f.a.mark(function _callee(e){return f.a.wrap(function _callee$(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x({variables:e})
case 3:t.next=8
break
case 5:return t.prev=5,t.t0=t.catch(0),t.abrupt("return")
case 8:n&&n()
case 9:case"end":return t.stop()}},_callee,null,[[0,5]])})),function(e){return t.apply(this,arguments)}),[x,n]),isDisabled:L,isSignedIn:l}}({afterSubmit:Object(s.useCallback)(function(){p({type:"info",message:t({id:"communicationsPage.preferencesText",defaultMessage:"Your preferences have been updated."}),timeout:5e3})},[p,t])}),y=d.formErrors,E=d.handleSubmit,x=d.initialValues,M=d.isDisabled
if(!d.isSignedIn)return o.a.createElement(u.a,{to:"/"})
if(!x)return S.a
var C=t({id:"communicationsPage.title",defaultMessage:"Communications"})
return o.a.createElement("div",{className:n.root},o.a.createElement(k.b,null,C),o.a.createElement("h1",{className:n.title},o.a.createElement(c.a,{id:"communicationsPage.communicationsText",defaultMessage:"Communications"})),o.a.createElement("p",null,o.a.createElement(c.a,{id:"communicationsPage.optInText",defaultMessage:"We'd like to stay in touch. Please check the boxes next to the communications you'd like to receive."})),o.a.createElement(w.a,{errors:y}),o.a.createElement(l.f,{className:n.form,onSubmit:E,initialValues:x},o.a.createElement(L.a,{id:"isSubscribed",label:t({id:"communicationsPage.eNewsletterText",defaultMessage:"Venia E-Newsletter"})},o.a.createElement(_.a,{field:"isSubscribed",label:t({id:"communicationsPage.subscribeText",defaultMessage:"Stay on the cutting edge of fashion; subscribe to the monthly Venia Newsletter."})})),o.a.createElement("div",{className:n.buttonsContainer},o.a.createElement(O.a,{disabled:M,type:"submit",priority:"high"},t(M?{id:"communicationsPage.savingText",defaultMessage:"Saving"}:{id:"communicationsPage.changesText",defaultMessage:"Save Changes"})))))}},Ri9G:function(e,t,n){"use strict"
var r=n("pVnL"),i=n.n(r),s=n("QILm"),o=n.n(s),a=n("lwsE"),c=n.n(a),l=n("W8MJ"),u=n.n(l),m=n("a1gu"),p=n.n(m),f=n("Nsbk"),d=n.n(f),g=n("7W2i"),h=n.n(g),b=n("lSNA"),v=n.n(b),y=n("q1tI"),E=n.n(y),x=n("17x9"),j=n("8UhI"),O=n("ANjH"),_=n("iBQN"),L=n("gpca"),w=n("/Gi5"),k=n("ZRVi"),S=n("LboF"),M=n.n(S),C=n("tNJM"),N=n.n(C),P={injectType:"singletonStyleTag",insert:"head",singleton:!0},T=(M()(N.a,P),N.a.locals||{}),W=E.a.createElement(w.a,null),R=E.a.createElement(k.a,null),F=function(e){function Checkbox(){return c()(this,Checkbox),p()(this,d()(Checkbox).apply(this,arguments))}return h()(Checkbox,e),u()(Checkbox,[{key:"render",value:function render(){var e=this.props,t=e.classes,n=e.fieldState,r=e.id,s=e.label,a=e.message,c=o()(e,["classes","fieldState","id","label","message"]),l=n.value?W:R
return E.a.createElement(y.Fragment,null,E.a.createElement("label",{className:t.root,htmlFor:r},E.a.createElement(j.a,i()({},c,{className:t.input,fieldState:n,id:r})),E.a.createElement("span",{className:t.icon},l),E.a.createElement("span",{className:t.label},s)),E.a.createElement(L.a,{fieldState:n},a))}}]),Checkbox}(y.Component)
v()(F,"propTypes",{classes:Object(x.shape)({icon:x.string,input:x.string,label:x.string,message:x.string,root:x.string}),field:x.string.isRequired,fieldState:Object(x.shape)({value:x.bool}).isRequired,id:x.string,label:x.node.isRequired,message:x.node})
t.a=Object(O.d)(Object(_.a)(T),j.k)(F)},SWJs:function(e,t,n){(e.exports=n("JPst")(!1)).push([e.i,"",""])},Y9xl:function(e,t,n){(t=e.exports=n("JPst")(!1)).push([e.i,".message-root-3-g {\n    color: rgb(var(--venia-global-color-text));\n    font-size: 0.875rem;\n    font-weight: 400;\n    line-height: 1rem;\n    padding: 0.625rem 0.125rem 0.125rem;\n}\n\n.message-root-3-g:empty {\n    display: none;\n}\n\n.message-root_error-1hZ {\n    color: rgb(var(--venia-global-color-error));\n    font-weight: var(--venia-global-fontWeight-semibold);\n}\n",""]),t.locals={root:"message-root-3-g",root_error:"message-root_error-1hZ message-root-3-g"}},dTQg:function(e,t,n){"use strict"
var r=n("q1tI"),i=n.n(r),s=n("17x9"),o=n("+sVj"),a={behavior:"smooth",block:"center"},c=n("y1Xp"),l=n("LboF"),u=n.n(l),m=n("h8ee"),p=n.n(m),f={injectType:"singletonStyleTag",insert:"head",singleton:!0},d=(u()(p.a,f),p.a.locals||{}),g=i.a.forwardRef(function(e,t){var n=e.children,r=Object(c.a)(d,e.classes)
return i.a.createElement("div",{className:r.root,ref:t},i.a.createElement("span",{className:r.errorMessage},n))}),h=g
g.propTypes={classes:Object(s.shape)({root:s.string,errorMessage:s.string}),children:s.node}
var b=n("SWJs"),v=n.n(b),y={injectType:"singletonStyleTag",insert:"head",singleton:!0},E=(u()(v.a,y),v.a.locals||{}),x=function FormError(e){var t=e.classes,n=e.errors,s=e.scrollOnError,l=function useFormError(e){var t=e.errors
return{errorMessage:Object(r.useMemo)(function(){return Object(o.a)(t)},[t])}}({errors:n}).errorMessage,u=Object(r.useRef)(null)
!function useScrollIntoView(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a
Object(r.useEffect)(function(){e.current&&e.current instanceof HTMLElement&&t&&e.current.scrollIntoView(n)},[n,e,t])}(u,s&&l)
var m=Object(c.a)(E,t)
return l?i.a.createElement(h,{classes:m,ref:u},l):null}
t.a=x
x.propTypes={classes:Object(s.shape)({root:s.string,errorMessage:s.string}),errors:Object(s.arrayOf)(Object(s.instanceOf)(Error)),scrollOnError:s.bool},x.defaultProps={scrollOnError:!0}},gpca:function(e,t,n){"use strict"
var r=n("q1tI"),i=n.n(r),s=n("dDsW"),o=n("17x9"),a=n("LboF"),c=n.n(a),l=n("Y9xl"),u=n.n(l),m={injectType:"singletonStyleTag",insert:"head",singleton:!0},p=(c()(u.a,m),u.a.locals||{}),f=n("y1Xp"),d=function Message(e){var t,n=e.children,r=e.classes,o=e.fieldState,a=Object(s.a)().formatMessage,c=o.error,l=Object(f.a)(p,r),u=c?l.root_error:l.root
return c&&(t=a({id:c.id,defaultMessage:c.defaultMessage},{value:c.value})),i.a.createElement("p",{className:u},t||n)}
t.a=d
d.defaultProps={fieldState:{}},d.propTypes={children:o.node,classes:Object(o.shape)({root:o.string,root_error:o.string}),fieldState:Object(o.shape)({error:Object(o.shape)({id:o.string,defaultMessage:o.string,value:Object(o.oneOfType)([o.number,o.string])})})}},h8ee:function(e,t,n){(t=e.exports=n("JPst")(!1)).push([e.i,".errorMessage-root-1cS {\n}\n\n.errorMessage-errorMessage-3sE {\n    color: rgb(var(--venia-global-color-error));\n    font-size: var(--venia-typography-body-S-fontSize);\n    font-weight: var(--venia-global-fontWeight-semibold);\n    line-height: var(--venia-global-lineHeight-300);\n}\n",""]),t.locals={root:"errorMessage-root-1cS",errorMessage:"errorMessage-errorMessage-3sE"}},he9K:function(e,t,n){(t=e.exports=n("JPst")(!1)).push([e.i,".communicationsPage-root--lW {\n    display: grid;\n    padding: 2.5rem 3rem;\n    row-gap: 2rem;\n}\n\n.communicationsPage-title-1fw {\n    justify-self: center;\n    font-family: var(--venia-global-fontFamily-serif);\n    font-weight: var(--venia-global-fontWeight-bold);\n}\n\n.communicationsPage-form-1fu {\n    display: grid;\n    row-gap: 2rem;\n}\n\n.communicationsPage-buttonsContainer-4ij {\n    display: flex;\n    justify-content: flex-start;\n}\n\n@media (max-width: 960px) {\n    .communicationsPage-root--lW {\n        padding-left: 1.5rem;\n        padding-right: 1.5rem;\n    }\n\n    .communicationsPage-buttonsContainer-4ij {\n        justify-content: center;\n    }\n}\n",""]),t.locals={root:"communicationsPage-root--lW",title:"communicationsPage-title-1fw",form:"communicationsPage-form-1fu",buttonsContainer:"communicationsPage-buttonsContainer-4ij"}},tNJM:function(e,t,n){(t=e.exports=n("JPst")(!1)).push([e.i,".checkbox-root-ZAW {\n    --stroke: var(--venia-global-color-gray-600);\n    align-items: center;\n    color: rgb(var(--venia-global-color-gray-900));\n    display: grid;\n    gap: calc(0.875rem - 5px);\n    grid-auto-flow: column;\n    grid-template-areas: 'input label';\n    grid-template-columns: min-content 1fr;\n    justify-items: center;\n    line-height: 1.5rem;\n}\n\n.checkbox-input-h8k {\n    -webkit-appearance: none;\n    background: none;\n    border: 2px solid transparent;\n    border-radius: 4px;\n    cursor: pointer;\n    grid-area: input;\n    height: 1.5rem;\n    width: 1.5rem;\n}\n\n.checkbox-icon-3R- {\n    grid-area: input;\n    height: 1.5rem;\n    pointer-events: none;\n    width: 1.5rem;\n}\n\n.checkbox-icon-3R- svg {\n    stroke: rgb(var(--stroke));\n}\n\n.checkbox-label-3c_ {\n    cursor: pointer;\n    font-size: var(--venia-typography-body-M-fontSize);\n    grid-area: label;\n    justify-self: start;\n}\n\n.checkbox-input-h8k:disabled {\n    cursor: default;\n}\n\n/* When the input is disabled, update the cursor on the sibling label element. */\n.checkbox-input-h8k:disabled ~ .checkbox-label-3c_ {\n    cursor: default;\n}\n\n.checkbox-input-h8k:checked:enabled + .checkbox-icon-3R- {\n    --stroke: var(--venia-brand-color-1-700);\n}\n\n.checkbox-input-h8k:active:enabled,\n.checkbox-input-h8k:focus:enabled {\n    box-shadow: -3px 3px rgb(var(--venia-brand-color-1-100));\n    outline: none;\n}\n",""]),t.locals={root:"checkbox-root-ZAW",input:"checkbox-input-h8k",icon:"checkbox-icon-3R-",label:"checkbox-label-3c_"}}}])
