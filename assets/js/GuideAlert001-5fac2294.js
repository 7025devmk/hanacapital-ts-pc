import{P as u}from"./PageContents-897c30c0.js";import{B as _}from"./BasicButton-c7dbf20b.js";import{B as f,a as B}from"./ButtonListItem-3caa5ae9.js";import{A as d}from"./AlertSystem-e2cd7eac.js";import{_ as g}from"./index-c3ff26f1.js";import{b as C,h as o,k,w as e,o as A,i as n,l as L}from"./vendor-afc869d0.js";import"./PopupTitle-d363441b.js";import"./PopupText-258e55df.js";import"./AlertPopup-1d2ee97c.js";const x={components:{PageContents:u,BasicButton:_,ButtonList:f,ButtonListItem:B,AlertSystem:d},setup(){const s=C(null),a=t=>{s.value.open(t)};return{alert:s,alertOpen001:()=>{a({title:"타이틀",message:`여기에 내용이 표시될 예정입니다.
줄바꿈은 \\n 이용.
세 줄일 경우는 이렿게 표시됩니다.`,buttons:[{callback:t=>{console.log("확인"),t()},closeAfterCallback:()=>{console.log("[확인] 닫는 애니메이션 끝난 후 호출 될 함수")}}]})}}}};function b(s,a,r,t,w,O){const l=o("BasicButton"),c=o("ButtonListItem"),m=o("ButtonList"),i=o("AlertSystem"),p=o("PageContents");return A(),k(p,null,{default:e(()=>[n(m,{classNames:{wrap:"row-margin-none"},align:"full"},{default:e(()=>[n(c,null,{default:e(()=>[n(l,{onClick:t.alertOpen001},{default:e(()=>[L("얼럿")]),_:1},8,["onClick"])]),_:1})]),_:1}),n(i,{ref:"alert"},null,512)]),_:1})}const G=g(x,[["render",b]]);export{G as default};
//# sourceMappingURL=GuideAlert001-5fac2294.js.map
