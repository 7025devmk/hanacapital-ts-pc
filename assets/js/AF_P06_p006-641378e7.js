import{_ as D,I as q,a as G,B as j,b as z}from"./index-c3ff26f1.js";import{P as J}from"./PageContents-897c30c0.js";import{L as O}from"./LocationBar-d0b62166.js";import{P as Q,a as W}from"./PageTitle-e870b4a0.js";import{P as X}from"./PageHeadRow-118f9226.js";import{S as Y}from"./StepProgress-8354ea96.js";import{P as Z}from"./PageMainText-0ce3bc83.js";import{P as $}from"./PageSubText-6e96782a.js";import{B as ee}from"./BasicBox-9b01a4ea.js";import{B as te,a as oe}from"./BasicBoxHeadLeft-aee087c4.js";import{C as ae}from"./CarEmblem-ea9ecc77.js";import{K as ne,a as le,b as se,c as re}from"./KeyValueText-5a0c23cf.js";import{U as _e}from"./UnitText-1667071c.js";import{F as ce,a as ie}from"./FormListItem-57fcd1d9.js";import{F as me}from"./FormInvalid-07654431.js";import{F as ue}from"./FormInvalidMessage-3fd5cb40.js";import{F as de}from"./FormHelpText-1d7583b6.js";import{N as fe}from"./NoticeText-660d0ef0.js";import{B as pe,a as xe}from"./BoxCheckListItem-6e3de9b3.js";import{B as Be,a as ge}from"./BoxCheckLabel-9326bb1c.js";import{B as he,a as Pe}from"./ButtonListItem-3caa5ae9.js";import{B as Le}from"./BasicButton-c7dbf20b.js";import{f as Fe,I as Ce,r as ke,h as o,k as Ie,w as e,o as Te,i as t,l as a,a as n}from"./vendor-afc869d0.js";const Ae={components:{PageContents:J,LocationBar:O,PageHead:Q,PageTitle:W,PageHeadRow:X,StepProgress:Y,PageMainText:Z,PageSubText:$,BasicBox:ee,BasicBoxHead:te,BasicBoxHeadLeft:oe,CarEmblem:ae,KeyValue:ne,KeyValueItem:le,KeyValueTitle:se,KeyValueText:re,UnitText:_e,FormList:ce,FormListItem:ie,FormInvalid:me,InputBlock:q,InputBlockCell:G,BasicInput:j,FormInvalidMessage:ue,FormHelpText:de,NoticeText:fe,BoxCheckList:pe,BoxCheckListItem:xe,BoxCheck:Be,BoxCheckLabel:ge,ButtonList:he,ButtonListItem:Pe,BasicButton:Le},setup(){const c={ui:{header:z()}};return Fe(()=>{c.ui.header.setActive(()=>"auto")}),Ce(()=>{c.ui.header.setActive()}),{state:ke({carAmountError:!1,loanAmountError:!1,typeError:!1})}}},be={class:"flex-box row-margin-small"},ye={class:"flex-box__cell"},ve=n("div",{class:"flex-box__cell flex-box__cell--small"},[n("p",{class:"text-body-4 font-weight-light"},"2020년식")],-1),He=n("h4",{class:"text-title-2 font-weight-medium"}," 쏘나타 뉴 라이즈 1.6T-Gdi 스마트 (마이 스마트 핏) ",-1),Ve=n("strong",null,"23,500,000",-1),we={class:"row-margin-container-medium row-margin-bottom-none"},Ee=n("div",{class:"text-body-1"},"만원",-1),Ke=n("div",{class:"text-body-1"},"만원",-1);function Se(c,B,Ne,l,Me,Ue){const g=o("LocationBar"),h=o("PageTitle"),P=o("StepProgress"),L=o("PageHeadRow"),F=o("PageMainText"),C=o("PageSubText"),k=o("PageHead"),I=o("CarEmblem"),T=o("BasicBoxHeadLeft"),A=o("BasicBoxHead"),b=o("KeyValueTitle"),y=o("UnitText"),v=o("KeyValueText"),H=o("KeyValueItem"),V=o("KeyValue"),w=o("BasicBox"),d=o("BasicInput"),f=o("InputBlockCell"),p=o("InputBlock"),i=o("FormInvalidMessage"),x=o("FormHelpText"),m=o("FormInvalid"),u=o("FormListItem"),E=o("NoticeText"),s=o("BoxCheckLabel"),r=o("BoxCheck"),_=o("BoxCheckListItem"),K=o("BoxCheckList"),S=o("FormList"),N=o("BasicButton"),M=o("ButtonListItem"),U=o("ButtonList"),R=o("PageContents");return Te(),Ie(R,null,{head:e(()=>[t(g,{data:[{text:"홈",to:"/main/home"},{text:"오토금융",to:"/"},{text:"중고차오토론",to:"/"}]})]),default:e(()=>[t(k,null,{default:e(()=>[t(L,null,{right:e(()=>[t(P,{total:4,current:2})]),default:e(()=>[t(h,{align:"left"},{default:e(()=>[a("중고차오토론")]),_:1})]),_:1}),t(F,{align:"left"},{default:e(()=>[a("신청정보를 입력해 주세요")]),_:1}),t(C,{align:"left"},{default:e(()=>[a(" 고객님의 신용등급에 따라 금리와 한도가 달라질 수 있습니다. ")]),_:1})]),_:1}),t(w,null,{default:e(()=>[t(A,null,{default:e(()=>[t(T,null,{default:e(()=>[n("div",be,[n("div",ye,[t(I,{src:"/images/_dummy/car-emblem.png",name:"현대"})]),ve]),He]),_:1})]),_:1}),t(V,{verticalAlign:"center"},{default:e(()=>[t(H,null,{default:e(()=>[t(b,{classNames:{title:"color-black"}},{default:e(()=>[a(" 차량 가격 ")]),_:1}),t(v,null,{default:e(()=>[t(y,{rightUnit:"원",align:"right"},{default:e(()=>[Ve]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),n("div",we,[t(S,null,{default:e(()=>[t(u,{titleText:"차량구입금액",require:!0,target:"#AF_P06_p006_carAmount",forceFocus:!0},{default:e(()=>[t(m,{error:l.state.carAmountError},{default:e(()=>[t(p,{error:l.state.carAmountError},{innerRight:e(()=>[Ee]),default:e(()=>[t(f,{flexible:!0},{default:e(()=>[t(d,{align:"right",useDelete:!1,pattern:"\\d*",title:"차량구입금액",placeholder:"매매계약서상 매매금액을 입력해 주세요.",id:"AF_P06_p006_carAmount"})]),_:1})]),_:1},8,["error"]),t(i,null,{default:e(()=>[a("Error Message")]),_:1}),t(x,{classNames:{wrap:"align-right"}},{default:e(()=>[a("천오백삼십만원")]),_:1})]),_:1},8,["error"])]),_:1}),t(u,{titleText:"대출신청금액",target:"#AF_P06_p006_loanAmount",forceFocus:!0},{default:e(()=>[t(m,{error:l.state.loanAmountError},{default:e(()=>[t(p,{error:l.state.loanAmountError},{innerRight:e(()=>[Ke]),default:e(()=>[t(f,{flexible:!0},{default:e(()=>[t(d,{align:"right",useDelete:!1,pattern:"\\d*",title:"대출신청금액",placeholder:"최소 대출금액은 200만원 입니다.",id:"AF_P06_p006_loanAmount"})]),_:1})]),_:1},8,["error"]),t(i,null,{default:e(()=>[a("Error Message")]),_:1}),t(x,{classNames:{wrap:"align-right"}},{default:e(()=>[a("천삼백만원")]),_:1}),t(E,{classNames:{wrap:"row-margin-item-medium"}},{default:e(()=>[a(" 대출신청금액은 차량 기준가격과 차량구입비용을 초과할 수 없습니다. ")]),_:1})]),_:1},8,["error"])]),_:1}),t(u,{titleText:"대출신청기간",forceFocus:!0},{default:e(()=>[t(m,{error:l.state.typeError},{default:e(()=>[t(K,null,{default:e(()=>[t(_,null,{default:e(()=>[t(r,{minSide:!0,name:"AF_P06_p006_BoxCheckList001",id:"AF_P06_p006_BoxCheckList001_001"},{default:e(()=>[t(s,null,{default:e(()=>[a("24개월")]),_:1})]),_:1})]),_:1}),t(_,null,{default:e(()=>[t(r,{minSide:!0,name:"AF_P06_p006_BoxCheckList001",id:"AF_P06_p006_BoxCheckList001_002",defaultChecked:!0},{default:e(()=>[t(s,null,{default:e(()=>[a("36개월")]),_:1})]),_:1})]),_:1}),t(_,null,{default:e(()=>[t(r,{minSide:!0,name:"AF_P06_p006_BoxCheckList001",id:"AF_P06_p006_BoxCheckList001_003"},{default:e(()=>[t(s,null,{default:e(()=>[a("48개월")]),_:1})]),_:1})]),_:1}),t(_,null,{default:e(()=>[t(r,{minSide:!0,name:"AF_P06_p006_BoxCheckList001",id:"AF_P06_p006_BoxCheckList001_004"},{default:e(()=>[t(s,null,{default:e(()=>[a("60개월")]),_:1})]),_:1})]),_:1}),t(_,null,{default:e(()=>[t(r,{minSide:!0,name:"AF_P06_p006_BoxCheckList001",id:"AF_P06_p006_BoxCheckList001_005"},{default:e(()=>[t(s,null,{default:e(()=>[a("72개월")]),_:1})]),_:1})]),_:1})]),_:1}),t(i,null,{default:e(()=>[a("Error Message")]),_:1})]),_:1},8,["error"])]),_:1})]),_:1})]),t(U,null,{default:e(()=>[t(M,null,{default:e(()=>[t(N,null,{default:e(()=>[a("다음")]),_:1})]),_:1})]),_:1})]),_:1})}const ct=D(Ae,[["render",Se]]);export{ct as default};
//# sourceMappingURL=AF_P06_p006-641378e7.js.map
