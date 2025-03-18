import{P as C}from"./PageContents-897c30c0.js";import{L as E}from"./LocationBar-d0b62166.js";import{P as M,a as k}from"./PageTitle-e870b4a0.js";import{P as H}from"./PageHeadRow-118f9226.js";import{P as v}from"./PageMainText-0ce3bc83.js";import{P as b}from"./PageSubText-6e96782a.js";import{S}from"./StepProgress-8354ea96.js";import{B as h}from"./BasicButton-c7dbf20b.js";import{B as R,a as y}from"./ButtonListItem-3caa5ae9.js";import{_ as N,I as V,a as D,B as j}from"./index-c3ff26f1.js";import{F as q,a as z}from"./FormListItem-57fcd1d9.js";import{F as A}from"./FormInvalid-07654431.js";import{F as G}from"./FormInvalidMessage-3fd5cb40.js";import{F as J}from"./FormHelpText-1d7583b6.js";import{r as K,h as e,k as O,w as o,o as Q,i as t,l as r}from"./vendor-afc869d0.js";const U={components:{PageContents:C,LocationBar:E,PageHead:M,PageHeadRow:H,PageTitle:k,PageMainText:v,PageSubText:b,StepProgress:S,BasicButton:h,ButtonList:R,ButtonListItem:y,InputBlock:V,InputBlockCell:D,FormList:q,FormListItem:z,FormInvalid:A,FormInvalidMessage:G,FormHelpText:J,BasicInput:j},setup(){return{state:K({idError:!1,passwordError:!1,passwordConfirmError:!1})}}};function W(p,X,Y,a,Z,$){const d=e("LocationBar"),u=e("PageTitle"),f=e("StepProgress"),g=e("PageHeadRow"),B=e("PageMainText"),P=e("PageSubText"),x=e("PageHead"),n=e("BasicInput"),s=e("InputBlockCell"),l=e("InputBlock"),i=e("FormInvalidMessage"),m=e("FormInvalid"),_=e("FormListItem"),I=e("FormHelpText"),c=e("FormList"),F=e("BasicButton"),w=e("ButtonListItem"),L=e("ButtonList"),T=e("PageContents");return Q(),O(T,null,{head:o(()=>[t(d,{data:[{text:"홈",to:"/main/home"},{text:"회원관리"},{text:"회원가입",to:"/"}]})]),default:o(()=>[t(x,null,{default:o(()=>[t(g,null,{right:o(()=>[t(f,{total:3,current:2})]),default:o(()=>[t(u,{align:"left"},{default:o(()=>[r("회원가입")]),_:1})]),_:1}),t(B,{align:"left"},{default:o(()=>[r(" 아이디와 비밀번호를 입력해 주세요 ")]),_:1}),t(P,{align:"left"},{default:o(()=>[r(" 비밀번호는 반복/연속 된 문자, ID와 동일한 문자, 4자리 이상 숫자 및 지정된 특수문자 ~’!@#$%^*_-+=.?{} 이외의 문자는 사용할 수 없습니다. ")]),_:1})]),_:1}),t(c,null,{default:o(()=>[t(c,null,{default:o(()=>[t(_,{titleText:"아이디",target:"#id"},{default:o(()=>[t(m,{error:a.state.idError},{default:o(()=>[t(l,{error:a.state.idError},{default:o(()=>[t(s,{flexible:!0},{default:o(()=>[t(n,{title:"아이디",id:"id"})]),_:1})]),_:1},8,["error"]),t(i,null,{default:o(()=>[r("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),t(_,{titleText:"신규 비밀번호",target:"#password"},{default:o(()=>[t(m,{error:a.state.passwordError},{default:o(()=>[t(l,{error:a.state.passwordError},{default:o(()=>[t(s,{flexible:!0},{default:o(()=>[t(n,{type:"password",title:"신규 비밀번호",id:"password"})]),_:1})]),_:1},8,["error"]),t(i,null,{default:o(()=>[r("Error Message")]),_:1}),t(I,null,{default:o(()=>[r(" 비밀번호 8~16자리(영문/숫자/특수문자 혼합) ")]),_:1})]),_:1},8,["error"])]),_:1}),t(_,{titleText:"신규 비밀번호 확인",target:"#passwordConfirm"},{default:o(()=>[t(m,{error:a.state.passwordConfirmError},{default:o(()=>[t(l,{error:a.state.passwordConfirmError},{default:o(()=>[t(s,{flexible:!0},{default:o(()=>[t(n,{type:"password",title:"신규 비밀번호 확인",id:"passwordConfirm"})]),_:1})]),_:1},8,["error"]),t(i,null,{default:o(()=>[r("Error Message")]),_:1})]),_:1},8,["error"])]),_:1})]),_:1})]),_:1}),t(L,null,{default:o(()=>[t(w,null,{default:o(()=>[t(F,null,{default:o(()=>[r("확인")]),_:1})]),_:1})]),_:1})]),_:1})}const ft=N(U,[["render",W]]);export{ft as default};
//# sourceMappingURL=Member_P05_p002-99f7fe78.js.map
