import{_ as R,I as O,a as G,B as X,b as U}from"./index-c3ff26f1.js";import{B as $}from"./BasicSelect-463aef97.js";import{F as q}from"./FormInvalid-07654431.js";import{F as z}from"./FormInvalidMessage-3fd5cb40.js";import{F as D,a as W}from"./FormListItem-57fcd1d9.js";import{P as j}from"./PageContents-897c30c0.js";import{L as J}from"./LocationBar-d0b62166.js";import{S as Q}from"./StepProgress-8354ea96.js";import{N as Y,a as Z}from"./NavTabButton-b8ebcb73.js";import{P as ee,a as le}from"./PageTitle-e870b4a0.js";import{P as te}from"./PageHeadRow-118f9226.js";import{P as ae}from"./PageMainText-0ce3bc83.js";import{B as se,a as oe}from"./ButtonListItem-3caa5ae9.js";import{B as re}from"./BasicButton-c7dbf20b.js";import{B as ne}from"./BasicBox-9b01a4ea.js";import{B as ie,a as _e}from"./BasicBoxHeadLeft-aee087c4.js";import{C as ue}from"./CarEmblem-ea9ecc77.js";import{K as de,a as ce,b as me,c as fe}from"./KeyValueText-5a0c23cf.js";import{S as be,a as pe}from"./SelectTableRow-3f68597a.js";import{f as ge,I as ve,r as ye,h as a,k as Be,w as l,o as he,i as e,l as s,a as t,n}from"./vendor-afc869d0.js";import"./UiTabButton-cd34c422.js";const xe={"basic-list":"_basic-list_33gnr_1","basic-list__item":"_basic-list__item_33gnr_7","basic-list__symbol":"_basic-list__symbol_33gnr_26","basic-list__content":"_basic-list__content_33gnr_80","basic-list--regular":"_basic-list--regular_33gnr_85","basic-list--medium":"_basic-list--medium_33gnr_96","basic-list--regular-margin":"_basic-list--regular-margin_33gnr_110","basic-list--normal-margin":"_basic-list--normal-margin_33gnr_113","basic-list--small-margin":"_basic-list--small-margin_33gnr_116"},Te={components:{PageContents:j,LocationBar:J,PageHead:ee,PageTitle:le,PageHeadRow:te,StepProgress:Q,PageMainText:ae,NavTab:Y,NavTabButton:Z,FormList:D,FormListItem:W,FormInvalid:q,InputBlock:O,InputBlockCell:G,BasicSelect:$,FormInvalidMessage:z,BasicInput:X,ButtonList:se,ButtonListItem:oe,BasicButton:re,BasicBox:ne,BasicBoxHead:ie,BasicBoxHeadLeft:_e,CarEmblem:ue,KeyValue:de,KeyValueItem:ce,KeyValueTitle:me,KeyValueText:fe,SelectTable:be,SelectTableRow:pe},setup(){const o={ui:{header:U()}};return ge(()=>{o.ui.header.setActive(()=>"auto")}),ve(()=>{o.ui.header.setActive()}),{state:ye({brandError:!1,modelError:!1,yearError:!1,engineTypeError:!1,detailError:!1,carNumberError:!1})}}},Pe={class:"row-margin-block-small row-margin-bottom-none"},Ie=t("col",{style:{width:"142px"}},null,-1),Ee=t("col",null,null,-1),Fe=t("col",{style:{width:"180px"}},null,-1),we=t("tr",null,[t("th",null,"제조사"),t("th",null,"모델명"),t("th",null,"차량 금액")],-1),Se=t("td",null,"푸조",-1),Le=t("td",null,"508(2세대) SW 1.5 블루 HDi",-1),Ne=t("td",null,"43,100,000 원",-1),Ae=t("td",null,"포르쉐",-1),Ve=t("td",null,"718 박스터(3세대) GTS 40",-1),Me=t("td",null,"108,200,000 원",-1),He=t("td",null,"포르쉐",-1),Ce=t("td",null,"718 박스터(3세대)S 2.5",-1),Ke=t("td",null,"88,400,000 원",-1),ke=t("td",null,"포르쉐",-1),Re=t("td",null,"718 박스터(3세대)S 2.5",-1),Oe=t("td",null,"88,400,000 원",-1),Ge=t("td",null,"포르쉐",-1),Xe=t("td",null,"718 박스터(3세대)S 2.5",-1),Ue=t("td",null,"88,400,000 원",-1),$e={class:"row-margin-block-small"},qe=t("div",{class:"row-margin-contents"},[t("h3",{class:"text-title-1 row-margin-small"},"차량번호 조회 결과"),t("p",{class:"text-body-1 color-gray-secondary font-weight-light"}," 선택한 차량과 입력한 차량번호의 차량이 맞는지 확인해 주세요. ")],-1),ze={class:"flex-box row-margin-small"},De={class:"flex-box__cell"},We=t("div",{class:"flex-box__cell flex-box__cell--small"},[t("p",{class:"text-body-4 font-weight-light"},"2020년식")],-1),je=t("h4",{class:"text-title-2 font-weight-medium"},"16노2109",-1),Je=t("div",{class:"text-body-3 color-gray-tertiary row-margin-item-small"}," 쏘나타 뉴 라이즈 1.6T-Gdi 스마트 (마이 스마트 핏) ",-1);function Qe(o,x,Ze,r,el,ll){const T=a("LocationBar"),P=a("PageTitle"),I=a("StepProgress"),E=a("PageHeadRow"),F=a("PageMainText"),w=a("PageHead"),h=a("NavTabButton"),S=a("NavTab"),m=a("BasicSelect"),i=a("InputBlockCell"),_=a("InputBlock"),u=a("FormInvalidMessage"),d=a("FormInvalid"),c=a("FormListItem"),L=a("BasicInput"),N=a("FormList"),b=a("BasicButton"),p=a("ButtonListItem"),B=a("ButtonList"),f=a("SelectTableRow"),A=a("SelectTable"),V=a("CarEmblem"),M=a("BasicBoxHeadLeft"),H=a("BasicBoxHead"),g=a("KeyValueTitle"),v=a("KeyValueText"),y=a("KeyValueItem"),C=a("KeyValue"),K=a("BasicBox"),k=a("PageContents");return he(),Be(k,null,{head:l(()=>[e(T,{data:[{text:"홈",to:"/main/home"},{text:"오토금융",to:"/"},{text:"중고차오토론",to:"/"}]})]),default:l(()=>[e(w,null,{default:l(()=>[e(E,null,{right:l(()=>[e(I,{total:4,current:1})]),default:l(()=>[e(P,{align:"left"},{default:l(()=>[s("중고차오토론")]),_:1})]),_:1}),e(F,{align:"left"},{default:l(()=>[s("차량을 선택해 주세요")]),_:1})]),_:1}),t("ul",{class:n([o.$style["basic-list"],o.$style["basic-list--regular"],o.$style["basic-list--regular-margin"]])},[t("li",{class:n([o.$style["basic-list__item"],"text-body-3","font-weight-regular"])},[t("div",{class:n(o.$style["basic-list__symbol"])},null,2),t("div",{class:n(o.$style["basic-list__content"])}," 한도조회만 하는 경우, 고객님의 신용도에 전혀 영향이 없습니다. ",2)],2),t("li",{class:n([o.$style["basic-list__item"],"text-body-3","font-weight-regular"])},[t("div",{class:n(o.$style["basic-list__symbol"])},null,2),t("div",{class:n(o.$style["basic-list__content"])}," 상품용 차량이 아닐 경우, 대출진행이 불가합니다. ",2)],2)],2),t("div",Pe,[e(S,null,{default:l(()=>[e(h,{tagName:"button",type:"button",active:!0,disabled:!1},{default:l(()=>[s(" 국산차 ")]),_:1}),e(h,{tagName:"button",type:"button",disabled:!1},{default:l(()=>[s("수입차")]),_:1})]),_:1}),e(N,null,{default:l(()=>[e(c,{titleText:"브랜드",target:"#AF_P06_p003_brand",selectOnly:!0,disabled:!1},{default:l(()=>[e(d,{error:r.state.brandError},{default:l(()=>[e(_,{error:r.state.brandError,disabled:!1},{default:l(()=>[e(i,{flexible:!0},{default:l(()=>[e(m,{options:[{value:"1",label:"현대"},{value:"2",label:"기아"},{value:"3",label:"제네시스"},{value:"4",label:"쉐보레"}],title:"브랜드 선택하기",inputId:"AF_P06_p003_brand",disabled:!1})]),_:1})]),_:1},8,["error"]),e(u,null,{default:l(()=>[s("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(c,{titleText:"모델명",target:"#AF_P06_p003_model",selectOnly:!0,disabled:!1},{default:l(()=>[e(d,{error:r.state.modelError},{default:l(()=>[e(_,{error:r.state.modelError,disabled:!1},{default:l(()=>[e(i,{flexible:!0},{default:l(()=>[e(m,{options:[{value:"1",label:"쏘나타"},{value:"2",label:"그랜저"},{value:"3",label:"아반떼"}],title:"모델명 선택하기",inputId:"AF_P06_p003_model",disabled:!1})]),_:1})]),_:1},8,["error"]),e(u,null,{default:l(()=>[s("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(c,{titleText:"연식",target:"#AF_P06_p003_year",selectOnly:!0,disabled:!1},{default:l(()=>[e(d,{error:r.state.yearError},{default:l(()=>[e(_,{error:r.state.yearError,disabled:!1},{default:l(()=>[e(i,{flexible:!0},{default:l(()=>[e(m,{options:[{value:"1",label:"2023년"},{value:"2",label:"2022년"},{value:"3",label:"2021년"},{value:"4",label:"2020년"},{value:"5",label:"2019년"},{value:"6",label:"2018년"},{value:"7",label:"2017년"},{value:"8",label:"2016년"},{value:"9",label:"2015년"},{value:"10",label:"2014년"},{value:"11",label:"2013년"},{value:"12",label:"2012년"},{value:"13",label:"2011년"},{value:"14",label:"2010년"},{value:"15",label:"2009년"},{value:"16",label:"2008년"},{value:"17",label:"2007년"},{value:"18",label:"2006년"},{value:"19",label:"2005년"}],title:"연식 선택하기",inputId:"AF_P06_p003_year",disabled:!1})]),_:1})]),_:1},8,["error"]),e(u,null,{default:l(()=>[s("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(c,{titleText:"엔진타입",target:"#AF_P06_p003_engineType",selectOnly:!0,disabled:!1},{default:l(()=>[e(d,{error:r.state.engineTypeError},{default:l(()=>[e(_,{error:r.state.engineTypeError,disabled:!1},{default:l(()=>[e(i,{flexible:!0},{default:l(()=>[e(m,{options:[{value:"1",label:"2967cc"},{value:"2",label:"가솔린"},{value:"3",label:"디젤"},{value:"4",label:"전기"}],title:"엔진타입 선택하기",inputId:"AF_P06_p003_engineType",disabled:!1})]),_:1})]),_:1},8,["error"]),e(u,null,{default:l(()=>[s("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(c,{titleText:"세부모델",target:"#AF_P06_p003_detail",selectOnly:!0,disabled:!1},{default:l(()=>[e(d,{error:r.state.detailError},{default:l(()=>[e(_,{error:r.state.detailError,disabled:!1},{default:l(()=>[e(i,{flexible:!0},{default:l(()=>[e(m,{options:[{value:"1",label:"쏘나타 뉴 라이즈 1.6T-Gdi 스마트"},{value:"2",label:"봉고3 트럭 다용도복합 냉동탑차 1톤"},{value:"3",label:"봉고3 EV 리스"},{value:"4",label:"봉고3 윙바디"}],title:"세부모델 선택하기",inputId:"AF_P06_p003_detail",disabled:!1})]),_:1})]),_:1},8,["error"]),e(u,null,{default:l(()=>[s("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(c,{titleText:"차량번호",target:"#AF_P06_p003_carNumber",disabled:!1},{default:l(()=>[e(d,{error:r.state.carNumberError},{default:l(()=>[e(_,{error:r.state.carNumberError,disabled:!1},{default:l(()=>[e(i,{flexible:!0},{default:l(()=>[e(L,{title:"차량번호",id:"AF_P06_p003_carNumber",disabled:!1})]),_:1})]),_:1},8,["error"]),e(u,null,{default:l(()=>[s("Error Message")]),_:1})]),_:1},8,["error"])]),_:1})]),_:1}),e(B,null,{default:l(()=>[e(p,null,{default:l(()=>[e(b,{line:!0},{default:l(()=>[s("조회")]),_:1})]),_:1})]),_:1}),e(A,{classNames:{wrap:"row-margin-block-small"},disabled:!1},{colgroup:l(()=>[Ie,Ee,Fe]),head:l(()=>[we]),default:l(()=>[e(f,{initialActive:!0,disabled:!1},{default:l(()=>[Se,Le,Ne]),_:1}),e(f,{disabled:!1},{default:l(()=>[Ae,Ve,Me]),_:1}),e(f,{disabled:!1},{default:l(()=>[He,Ce,Ke]),_:1}),e(f,{disabled:!1},{default:l(()=>[ke,Re,Oe]),_:1}),e(f,{disabled:!1},{default:l(()=>[Ge,Xe,Ue]),_:1})]),_:1}),e(B,null,{default:l(()=>[e(p,null,{default:l(()=>[e(b,null,{default:l(()=>[s("다음")]),_:1})]),_:1})]),_:1}),t("section",$e,[qe,e(K,null,{default:l(()=>[e(H,null,{default:l(()=>[e(M,null,{default:l(()=>[t("div",ze,[t("div",De,[e(V,{src:"/images/_dummy/car-emblem.png",name:"현대"})]),We]),je,Je]),_:1})]),_:1}),e(C,{wrap:!0},{default:l(()=>[e(y,null,{default:l(()=>[e(g,null,{default:l(()=>[s("배기량")]),_:1}),e(v,null,{default:l(()=>[s("2967cc")]),_:1})]),_:1}),e(y,null,{default:l(()=>[e(g,null,{default:l(()=>[s("사고이력(내차피해)")]),_:1}),e(v,null,{default:l(()=>[s("0회 / 0원")]),_:1})]),_:1}),e(y,null,{default:l(()=>[e(g,null,{default:l(()=>[s("전손/침수/도난")]),_:1}),e(v,null,{default:l(()=>[s("X/X/X")]),_:1})]),_:1}),e(y,null,{default:l(()=>[e(g,null,{default:l(()=>[s("사고이력(타차가해)")]),_:1}),e(v,null,{default:l(()=>[s("0회 / 0원")]),_:1})]),_:1})]),_:1})]),_:1})])]),e(B,null,{default:l(()=>[e(p,null,{default:l(()=>[e(b,{line:!0,theme:"quaternary"},{default:l(()=>[s("재선택")]),_:1})]),_:1}),e(p,null,{default:l(()=>[e(b,null,{default:l(()=>[s("다음")]),_:1})]),_:1})]),_:1})]),_:1})}const Ye={$style:xe},Tl=R(Te,[["render",Qe],["__cssModules",Ye]]);export{Tl as default};
//# sourceMappingURL=AF_P06_p003-7ac41a1e.js.map
