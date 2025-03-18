import{_ as N,b as V}from"./index-c3ff26f1.js";import{P as K}from"./PageContents-897c30c0.js";import{L as H}from"./LocationBar-d0b62166.js";import{P as L,a as U}from"./PageTitle-e870b4a0.js";import{S as b}from"./StepProgress-8354ea96.js";import{P as I}from"./PageHeadRow-118f9226.js";import{P as k}from"./PageMainText-0ce3bc83.js";import{N as v}from"./NoticeText-660d0ef0.js";import{B as C}from"./BasicBox-9b01a4ea.js";import{K as M,a as S,b as A,c as $}from"./KeyValueText-5a0c23cf.js";import{U as R}from"./UnitText-1667071c.js";import{B as q}from"./BasicHr-6bfc67a9.js";import{B as j,a as z}from"./ButtonListItem-3caa5ae9.js";import{B as D}from"./BasicButton-c7dbf20b.js";import{f as E,I as F,h as o,k as G,w as e,o as J,i as t,l as a,a as c}from"./vendor-afc869d0.js";const O={components:{PageContents:K,LocationBar:H,PageHead:L,PageTitle:U,PageHeadRow:I,StepProgress:b,PageMainText:k,NoticeText:v,BasicBox:C,KeyValue:M,KeyValueItem:S,KeyValueTitle:A,KeyValueText:$,UnitText:R,BasicHr:q,ButtonList:j,ButtonListItem:z,BasicButton:D},setup(){const i={ui:{header:V()}};E(()=>{i.ui.header.setActive(()=>"onlineBranch")}),F(()=>{i.ui.header.setActive()})}},Q={class:"row-margin-block-small"},W=c("h3",{class:"text-title-1 row-margin-contents"},"구매 예상 정산 비용",-1),X=c("h3",{class:"text-title-1 row-margin-contents"}," 세금계산서 발행 금액(잔존가치) ",-1);function Y(i,Z,tt,et,at,ot){const d=o("LocationBar"),f=o("PageTitle"),p=o("StepProgress"),g=o("PageHeadRow"),B=o("PageMainText"),x=o("PageHead"),n=o("KeyValueTitle"),l=o("KeyValueText"),s=o("KeyValueItem"),u=o("KeyValue"),r=o("BasicBox"),_=o("UnitText"),m=o("BasicHr"),h=o("NoticeText"),P=o("BasicButton"),T=o("ButtonListItem"),w=o("ButtonList"),y=o("PageContents");return J(),G(y,null,{head:e(()=>[t(d,{data:[{text:"홈",to:"/main/home"},{text:"온라인 지점",to:"/"},{text:"계약정보"},{text:"만기후처리"},{text:"구매 신청",to:"/"}]})]),default:e(()=>[t(x,null,{default:e(()=>[t(g,null,{right:e(()=>[t(p,{total:5,current:2})]),default:e(()=>[t(f,{align:"left"},{default:e(()=>[a("만기후처리 구매 신청")]),_:1})]),_:1}),t(B,{align:"left"},{default:e(()=>[a("구매 예상 비용을 확인해 주세요")]),_:1})]),_:1}),t(r,null,{default:e(()=>[t(u,{wrap:!0},{default:e(()=>[t(s,null,{default:e(()=>[t(n,null,{default:e(()=>[a("만기일자")]),_:1}),t(l,null,{default:e(()=>[a("2023.01.05")]),_:1})]),_:1}),t(s,null,{default:e(()=>[t(n,null,{default:e(()=>[a("최종결제일자")]),_:1}),t(l,null,{default:e(()=>[a("2023.01.05")]),_:1})]),_:1})]),_:1})]),_:1}),c("section",Q,[W,t(r,{className:"row-margin-contents-small"},{default:e(()=>[t(u,{verticalAlign:"center"},{default:e(()=>[t(s,{classNames:{item:"text-title-2"}},{default:e(()=>[t(n,{classNames:{title:"color-black font-weight-medium"}},{default:e(()=>[a(" 예상비용(입금/지급) ")]),_:1}),t(l,null,{default:e(()=>[t(_,{rightUnit:"원",align:"right"},{default:e(()=>[a("99,999,999")]),_:1})]),_:1})]),_:1})]),_:1}),t(m,{theme:"quaternary",className:"row-margin-contents"}),t(u,{wrap:!0},{default:e(()=>[t(s,null,{default:e(()=>[t(n,null,{default:e(()=>[a("제세금(a)")]),_:1}),t(l,null,{default:e(()=>[a("0 원")]),_:1})]),_:1}),t(s,null,{default:e(()=>[t(n,null,{default:e(()=>[a("보증금(b)")]),_:1}),t(l,null,{default:e(()=>[a("99,999,999 원")]),_:1})]),_:1}),t(s,null,{default:e(()=>[t(n,null,{default:e(()=>[a("잔존가치(c)")]),_:1}),t(l,null,{default:e(()=>[a("99,999,999 원")]),_:1})]),_:1})]),_:1}),t(m,{type:"contents",theme:"quaternary",className:"row-margin-contents"}),t(u,null,{default:e(()=>[t(s,null,{default:e(()=>[t(n,null,{default:e(()=>[a("합계 (a-b+c)")]),_:1}),t(l,null,{default:e(()=>[a("99,999,999 원")]),_:1})]),_:1})]),_:1})]),_:1}),t(h,null,{default:e(()=>[a(" 정산금액은 (만기일자) 기준으로 기준일자에 따라 변경될 수 있습니다. ")]),_:1})]),c("section",null,[X,t(r,{className:"row-margin-contents-small"},{default:e(()=>[t(u,{verticalAlign:"center"},{default:e(()=>[t(s,{classNames:{item:"text-title-2"}},{default:e(()=>[t(n,{classNames:{title:"color-black font-weight-medium"}},{default:e(()=>[a(" 잔존가치 ")]),_:1}),t(l,null,{default:e(()=>[t(_,{rightUnit:"원",align:"right"},{default:e(()=>[a("99,999,999")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),t(w,null,{default:e(()=>[t(T,null,{default:e(()=>[t(P,null,{default:e(()=>[a("구매신청")]),_:1})]),_:1})]),_:1})]),_:1})}const ht=N(O,[["render",Y]]);export{ht as default};
//# sourceMappingURL=My_P08_p018-1509eed5.js.map
