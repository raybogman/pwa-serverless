/*!
 * @version v10.0.0-52-gbc6bd9fde-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"+sGa":function(e,t,n){(t=e.exports=n("JPst")(!1)).push([e.i,".myAccount-root-NhM {\n    display: grid;\n    grid-auto-flow: row;\n    row-gap: 1.5rem;\n}\n",""]),t.locals={root:"myAccount-root-NhM"}},"K+Bs":function(e,t,n){(t=e.exports=n("JPst")(!1)).i(n("uFFw"),""),t.i(n("ysJs"),""),t.push([e.i,".authModal-root-1aT {\n    display: block;\n}\n\n.authModal-createAccountActions-1fu {\n    grid-auto-flow: row;\n}\n\n.authModal-createAccountSubmitButton-3TV {\n    grid-column-start: auto;\n}\n",""]),t.locals={root:"authModal-root-1aT",createAccountActions:"authModal-createAccountActions-1fu "+n("uFFw").locals.actions,createAccountSubmitButton:"authModal-createAccountSubmitButton-3TV "+n("ysJs").locals.root_highPriority}},"yu8+":function(e,t,n){"use strict"
n.r(t),n.d(t,"default",function(){return U})
var o=n("q1tI"),a=n.n(o),c=n("17x9"),s=n("o0o1"),u=n.n(s),r=n("yXPU"),i=n.n(r),l=n("J4zp"),h=n.n(l),d=n("Ty5D"),O=n("VX74"),b=n("y1Xp"),w=n("FITH"),g=n("VkAN"),f=n.n(g)
function _templateObject(){var e=f()(["\n    mutation SignOutFromModal {\n        revokeCustomerToken {\n            result\n        }\n    }\n"])
return _templateObject=function _templateObject(){return e},e}var A={signOutMutation:Object(O.gql)(_templateObject())},m=["CREATE_ACCOUNT","FORGOT_PASSWORD","SIGN_IN"],C=n("+h8t"),p=n("jBXQ"),j=n("OlZo"),S=n("1Ek8"),M=n("LboF"),y=n.n(M),T=n("+sGa"),k=n.n(T),v={injectType:"singletonStyleTag",insert:"head",singleton:!0},_=(y()(k.a,v),k.a.locals||{}),E=function MyAccount(e){var t=e.classes,n=e.onSignOut,c=e.onClose,s=Object(b.a)(_,t),u=function useMyAccount(e){var t=e.onSignOut,n=Object(j.b)(),a=h()(n,2)[1].closeDrawer,c=Object(d.h)(),s=Object(o.useRef)(!1),u=Object(o.useCallback)(function(){a(),t()},[a,t])
return Object(o.useEffect)(function(){s.current?a():s.current=!0},[a,c.key]),{handleSignOut:u}}({onSignOut:n,onClose:c}),r=u.handleSignOut,i=u.handleClose
return a.a.createElement("div",{className:s.root},a.a.createElement(S.a,{onSignOut:r,onClose:i}))},F=E
E.propTypes={classes:Object(c.shape)({actions:c.string,root:c.string,subtitle:c.string,title:c.string,user:c.string}),onSignOut:c.func.isRequired}
var R=n("i8h6"),N=n("K+Bs"),P=n.n(N),q={injectType:"singletonStyleTag",insert:"head",singleton:!0},B=(y()(P.a,q),P.a.locals||{}),I=function AuthModal(e){var t=function useAuthModal(e){var t=e.closeDrawer,n=e.showCreateAccount,a=e.showForgotPassword,c=e.showMainMenu,s=e.showMyAccount,r=e.showSignIn,l=e.view,g=Object(b.a)(A,e.operations).signOutMutation,f=Object(o.useState)(!1),C=h()(f,2),p=C[0],j=C[1],S=Object(o.useState)(""),M=h()(S,2),y=M[0],T=M[1],k=Object(w.b)(),v=h()(k,2),_=v[0],E=_.currentUser,F=_.isSignedIn,R=v[1].signOut,N=Object(O.useMutation)(g),P=h()(N,1)[0],q=Object(d.g)()
Object(o.useEffect)(function(){E&&E.email&&m.includes(l)&&s()},[E,s,l]),Object(o.useEffect)(function(){F||"MY_ACCOUNT"!==l||p||c()},[F,p,c,l])
var B=Object(o.useCallback)(function(){c(),t()},[t,c])
return{handleCancel:Object(o.useCallback)(function(){r()},[r]),handleClose:B,handleCreateAccount:Object(o.useCallback)(function(){s()},[s]),handleSignOut:Object(o.useCallback)(i()(u.a.mark(function _callee(){return u.a.wrap(function _callee$(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,R({revokeToken:P})
case 3:q.go(0)
case 4:case"end":return e.stop()}},_callee)})),[q,P,R]),setUsername:T,showCreateAccount:n,showForgotPassword:a,showMyAccount:s,username:y}}(e),n=t.handleCancel,c=t.handleCreateAccount,s=t.handleSignOut,r=t.setUsername,l=t.showCreateAccount,g=t.showForgotPassword,f=t.showMyAccount,j=t.username,S=Object(b.a)(B,e.classes),M=null
switch(e.view){case"CREATE_ACCOUNT":M=a.a.createElement(C.a,{classes:{actions:S.createAccountActions,submitButton:S.createAccountSubmitButton},initialValues:{email:j},isCancelButtonHidden:!1,onSubmit:c,onCancel:n})
break
case"FORGOT_PASSWORD":M=a.a.createElement(p.a,{initialValues:{email:j},onCancel:n})
break
case"MY_ACCOUNT":M=a.a.createElement(F,{onSignOut:s})
break
case"SIGN_IN":default:M=a.a.createElement(R.a,{setDefaultUsername:r,showCreateAccount:l,showForgotPassword:g,showMyAccount:f})}return a.a.createElement("div",{className:S.root},M)},U=I
I.propTypes={classes:Object(c.shape)({root:c.string}),closeDrawer:c.func.isRequired,showCreateAccount:c.func.isRequired,showForgotPassword:c.func.isRequired,showMyAccount:c.func.isRequired,showMainMenu:c.func.isRequired,showSignIn:c.func.isRequired,view:c.string}}}])
