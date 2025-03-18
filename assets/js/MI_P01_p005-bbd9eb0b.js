import{_ as v,I as S,a as N,B as T,b as L}from"./index-c3ff26f1.js";import{P as F}from"./PageContents-897c30c0.js";import{L as z}from"./LocationBar-d0b62166.js";import{P as k,a as C}from"./PageTitle-e870b4a0.js";import{P as H}from"./PageHeadRow-118f9226.js";import{S as R}from"./StepProgress-8354ea96.js";import{P as A}from"./PageMainText-0ce3bc83.js";import{T as U}from"./TextButton-1241ab31.js";import{F as D,a as j}from"./FormListItem-57fcd1d9.js";import{F as q}from"./FormInvalid-07654431.js";import{B as G}from"./BasicSelect-463aef97.js";import{F as J}from"./FormInvalidMessage-3fd5cb40.js";import{B as K,a as O}from"./ButtonListItem-3caa5ae9.js";import{B as Q}from"./BasicButton-c7dbf20b.js";import{r as W,f as X,I as Y,h as d,k as Z,w as r,o as $,i as e,l as o,a as i,n as c}from"./vendor-afc869d0.js";const ee={"basic-list":"_basic-list_33gnr_1","basic-list__item":"_basic-list__item_33gnr_7","basic-list__symbol":"_basic-list__symbol_33gnr_26","basic-list__content":"_basic-list__content_33gnr_80","basic-list--regular":"_basic-list--regular_33gnr_85","basic-list--medium":"_basic-list--medium_33gnr_96","basic-list--regular-margin":"_basic-list--regular-margin_33gnr_110","basic-list--normal-margin":"_basic-list--normal-margin_33gnr_113","basic-list--small-margin":"_basic-list--small-margin_33gnr_116"},re={components:{PageContents:F,LocationBar:z,PageHead:k,PageTitle:C,PageHeadRow:H,StepProgress:R,PageMainText:A,TextButton:U,FormList:D,FormListItem:j,FormInvalid:q,InputBlock:S,InputBlockCell:N,BasicInput:T,BasicSelect:G,FormInvalidMessage:J,ButtonList:K,ButtonListItem:O,BasicButton:Q},setup(){const u={ui:{header:L()}},g=W({addressError001:!1,addressError002:!1,addressError003:!1,addressError004:!1,addressError005:!1,addressError006:!1,addressError007:!1,addressError008:!1,addressError009:!1,addressError010:!1,mailError:!1});return X(()=>{u.ui.header.setActive(()=>"onlineBranch")}),Y(()=>{u.ui.header.setActive()}),{state:g}}},te={class:"flex-box"},ae=i("div",{class:"flex-box__cell flex-1"}," 청구지의 주소를 확인하고 변경할 수 있습니다. ",-1),le={class:"flex-box__cell flex-box__cell--medium"},se=i("div",{class:"row-margin-contents"},[i("h3",{class:"text-title-1 row-margin-small"},"이메일 변경"),i("p",{class:"text-body-1 color-gray-secondary font-weight-light"}," E-Mail 주소를 확인하고 변경할 수 있습니다. ")],-1);function oe(u,g,ie,t,ue,ne){const p=d("LocationBar"),w=d("PageTitle"),E=d("StepProgress"),h=d("PageHeadRow"),x=d("PageMainText"),B=d("PageHead"),I=d("TextButton"),l=d("BasicInput"),a=d("InputBlockCell"),n=d("BasicButton"),s=d("InputBlock"),_=d("FormInvalidMessage"),m=d("FormInvalid"),f=d("FormListItem"),b=d("FormList"),P=d("BasicSelect"),M=d("ButtonListItem"),y=d("ButtonList"),V=d("PageContents");return $(),Z(V,null,{head:r(()=>[e(p,{data:[{text:"홈",to:"/main/home"},{text:"온라인지점",to:"/"},{text:"내정보관리"},{text:"주소지/연락처 변경",to:"/"}]})]),default:r(()=>[e(B,null,{default:r(()=>[e(h,null,{right:r(()=>[e(E,{total:3,current:1})]),default:r(()=>[e(w,{align:"left"},{default:r(()=>[o("주소지/연락처 변경")]),_:1})]),_:1}),e(x,{align:"left"},{default:r(()=>[o("주소지를 변경해 주세요")]),_:1})]),_:1}),i("ul",{class:c([u.$style["basic-list"],u.$style["basic-list--regular"],u.$style["basic-list--regular-margin"]])},[i("li",{class:c([u.$style["basic-list__item"],"font-weight-regular"])},[i("div",{class:c(u.$style["basic-list__symbol"])},null,2),i("div",{class:c(u.$style["basic-list__content"])},[i("div",te,[ae,i("div",le,[e(I,{textSize:"regular",theme:"secondary",underline:!0,block:!0},{default:r(()=>[o(" 이동하기 ")]),_:1})])])],2)],2),i("li",{class:c([u.$style["basic-list__item"],"font-weight-regular"])},[i("div",{class:c(u.$style["basic-list__symbol"])},null,2),i("div",{class:c(u.$style["basic-list__content"])}," 주소 변경 시, 각 계약별로 설정되어 있는 청구지 주소도 함께 변경됩니다. ",2)],2),i("li",{class:c([u.$style["basic-list__item"],"font-weight-regular"])},[i("div",{class:c(u.$style["basic-list__symbol"])},null,2),i("div",{class:c(u.$style["basic-list__content"])}," 각 계약별로 설정된 청구지 주소 확인은 [계약정보 > 청구방법/청구지변경] 메뉴를 이용하세요. ",2)],2)],2),e(b,{classNames:{wrap:"row-margin-block-small"}},{default:r(()=>[e(f,{titleText:"등본지",target:"#MI_P01_p005_addressSerach001Button"},{default:r(()=>[e(m,{error:t.state.addressError001},{default:r(()=>[e(s,{error:t.state.addressError001},{right:r(()=>[e(n,{size:"small",theme:"tertiary",id:"MI_P01_p005_addressSerach001Button"},{default:r(()=>[o("검색")]),_:1})]),default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(l,{title:"등본지 - 우편번호",defaultValue:"12345",disabled:!0})]),_:1})]),_:1},8,["error"]),e(s,{error:t.state.addressError001,disabled:!0,classNames:{wrap:"row-margin-item-group row-margin-bottom-none"}},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(l,{title:"등본지 - 주소",defaultValue:"인천광역시 서구 에코로 181",disabled:!0})]),_:1})]),_:1},8,["error"]),e(s,{error:t.state.addressError001,disabled:!0,classNames:{wrap:"row-margin-item-group row-margin-bottom-none"}},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(l,{title:"등본지 - 상세주소",defaultValue:"하나아파트 835동 4590호",disabled:!0})]),_:1})]),_:1},8,["error"]),e(_,null,{default:r(()=>[o("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(f,{titleText:"실거주지",target:"#MI_P01_p005_addressSerach002Button"},{default:r(()=>[e(m,{error:t.state.addressError002},{default:r(()=>[e(s,{error:t.state.addressError002},{right:r(()=>[e(n,{size:"small",theme:"tertiary",id:"MI_P01_p005_addressSerach002Button"},{default:r(()=>[o("검색")]),_:1})]),default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(l,{title:"실거주지 - 우편번호",defaultValue:"12345",disabled:!0})]),_:1})]),_:1},8,["error"]),e(s,{error:t.state.addressError002,disabled:!0,classNames:{wrap:"row-margin-item-group row-margin-bottom-none"}},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(l,{title:"실거주지 - 주소",defaultValue:"인천광역시 서구 에코로 181",disabled:!0})]),_:1})]),_:1},8,["error"]),e(s,{error:t.state.addressError002,disabled:!0,classNames:{wrap:"row-margin-item-group row-margin-bottom-none"}},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(l,{title:"실거주지 - 상세주소",defaultValue:"하나아파트 835동 4590호",disabled:!0})]),_:1})]),_:1},8,["error"]),e(_,null,{default:r(()=>[o("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(f,{titleText:"직장주소",target:"#MI_P01_p005_addressSerach003Button"},{default:r(()=>[e(m,{error:t.state.addressError003},{default:r(()=>[e(s,{error:t.state.addressError003},{right:r(()=>[e(n,{size:"small",theme:"tertiary",id:"MI_P01_p005_addressSerach003Button"},{default:r(()=>[o("검색")]),_:1})]),default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(l,{title:"직장주소 - 우편번호",defaultValue:"12345",disabled:!0})]),_:1})]),_:1},8,["error"]),e(s,{error:t.state.addressError003,disabled:!0,classNames:{wrap:"row-margin-item-group row-margin-bottom-none"}},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(l,{title:"직장주소 - 주소",defaultValue:"인천광역시 서구 에코로 181",disabled:!0})]),_:1})]),_:1},8,["error"]),e(s,{error:t.state.addressError003,disabled:!0,classNames:{wrap:"row-margin-item-group row-margin-bottom-none"}},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(l,{title:"직장주소 - 상세주소",defaultValue:"하나아파트 835동 4590호",disabled:!0})]),_:1})]),_:1},8,["error"]),e(_,null,{default:r(()=>[o("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(f,{titleText:"기타주소1",target:"#MI_P01_p005_addressSerach004Button"},{default:r(()=>[e(m,{error:t.state.addressError004},{default:r(()=>[e(s,{error:t.state.addressError004},{right:r(()=>[e(n,{size:"small",theme:"tertiary",id:"MI_P01_p005_addressSerach004Button"},{default:r(()=>[o("검색")]),_:1})]),default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(l,{title:"기타주소1 - 우편번호",defaultValue:"12345",disabled:!0})]),_:1})]),_:1},8,["error"]),e(s,{error:t.state.addressError004,disabled:!0,classNames:{wrap:"row-margin-item-group row-margin-bottom-none"}},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(l,{title:"기타주소1 - 주소",defaultValue:"인천광역시 서구 에코로 181",disabled:!0})]),_:1})]),_:1},8,["error"]),e(s,{error:t.state.addressError004,disabled:!0,classNames:{wrap:"row-margin-item-group row-margin-bottom-none"}},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(l,{title:"기타주소1 - 상세주소",defaultValue:"하나아파트 835동 4590호",disabled:!0})]),_:1})]),_:1},8,["error"]),e(_,null,{default:r(()=>[o("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(f,{titleText:"기타주소2",target:"#MI_P01_p005_addressSerach005Button"},{default:r(()=>[e(m,{error:t.state.addressError005},{default:r(()=>[e(s,{error:t.state.addressError005},{right:r(()=>[e(n,{size:"small",theme:"tertiary",id:"MI_P01_p005_addressSerach005Button"},{default:r(()=>[o("검색")]),_:1})]),default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(l,{title:"기타주소2 - 우편번호",defaultValue:"12345",disabled:!0})]),_:1})]),_:1},8,["error"]),e(s,{error:t.state.addressError005,disabled:!0,classNames:{wrap:"row-margin-item-group row-margin-bottom-none"}},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(l,{title:"기타주소2 - 주소",defaultValue:"인천광역시 서구 에코로 181",disabled:!0})]),_:1})]),_:1},8,["error"]),e(s,{error:t.state.addressError005,disabled:!0,classNames:{wrap:"row-margin-item-group row-margin-bottom-none"}},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(l,{title:"기타주소2 - 상세주소",defaultValue:"하나아파트 835동 4590호",disabled:!0})]),_:1})]),_:1},8,["error"]),e(_,null,{default:r(()=>[o("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(f,{titleText:"사업장",target:"#MI_P01_p005_addressSerach006Button"},{default:r(()=>[e(m,{error:t.state.addressError006},{default:r(()=>[e(s,{error:t.state.addressError006},{right:r(()=>[e(n,{size:"small",theme:"tertiary",id:"MI_P01_p005_addressSerach006Button"},{default:r(()=>[o("검색")]),_:1})]),default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(l,{title:"사업장 - 우편번호",defaultValue:"12345",disabled:!0})]),_:1})]),_:1},8,["error"]),e(s,{error:t.state.addressError006,disabled:!0,classNames:{wrap:"row-margin-item-group row-margin-bottom-none"}},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(l,{title:"사업장 - 주소",defaultValue:"인천광역시 서구 에코로 181",disabled:!0})]),_:1})]),_:1},8,["error"]),e(s,{error:t.state.addressError006,disabled:!0,classNames:{wrap:"row-margin-item-group row-margin-bottom-none"}},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(l,{title:"사업장 - 상세주소",defaultValue:"하나아파트 835동 4590호",disabled:!0})]),_:1})]),_:1},8,["error"]),e(_,null,{default:r(()=>[o("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(f,{titleText:"본점",target:"#MI_P01_p005_addressSerach007Button"},{default:r(()=>[e(m,{error:t.state.addressError007},{default:r(()=>[e(s,{error:t.state.addressError007},{right:r(()=>[e(n,{size:"small",theme:"tertiary",id:"MI_P01_p005_addressSerach007Button"},{default:r(()=>[o("검색")]),_:1})]),default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(l,{title:"본점 - 우편번호",defaultValue:"12345",disabled:!0})]),_:1})]),_:1},8,["error"]),e(s,{error:t.state.addressError007,disabled:!0,classNames:{wrap:"row-margin-item-group row-margin-bottom-none"}},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(l,{title:"본점 - 주소",defaultValue:"인천광역시 서구 에코로 181",disabled:!0})]),_:1})]),_:1},8,["error"]),e(s,{error:t.state.addressError007,disabled:!0,classNames:{wrap:"row-margin-item-group row-margin-bottom-none"}},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(l,{title:"본점 - 상세주소",defaultValue:"하나아파트 835동 4590호",disabled:!0})]),_:1})]),_:1},8,["error"]),e(_,null,{default:r(()=>[o("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(f,{titleText:"등본지",target:"#MI_P01_p005_addressSerach008Button"},{default:r(()=>[e(m,{error:t.state.addressError008},{default:r(()=>[e(s,{error:t.state.addressError008},{right:r(()=>[e(n,{size:"small",theme:"tertiary",id:"MI_P01_p005_addressSerach008Button"},{default:r(()=>[o("검색")]),_:1})]),default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(l,{title:"등본지 - 우편번호",defaultValue:"12345",disabled:!0})]),_:1})]),_:1},8,["error"]),e(s,{error:t.state.addressError008,disabled:!0,classNames:{wrap:"row-margin-item-group row-margin-bottom-none"}},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(l,{title:"등본지 - 주소",defaultValue:"인천광역시 서구 에코로 181",disabled:!0})]),_:1})]),_:1},8,["error"]),e(s,{error:t.state.addressError008,disabled:!0,classNames:{wrap:"row-margin-item-group row-margin-bottom-none"}},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(l,{title:"등본지 - 상세주소",defaultValue:"하나아파트 835동 4590호",disabled:!0})]),_:1})]),_:1},8,["error"]),e(_,null,{default:r(()=>[o("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(f,{titleText:"실거주지",target:"#MI_P01_p005_addressSerach009Button"},{default:r(()=>[e(m,{error:t.state.addressError009},{default:r(()=>[e(s,{error:t.state.addressError009},{right:r(()=>[e(n,{size:"small",theme:"tertiary",id:"MI_P01_p005_addressSerach009Button"},{default:r(()=>[o("검색")]),_:1})]),default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(l,{title:"실거주지 - 우편번호",defaultValue:"12345",disabled:!0})]),_:1})]),_:1},8,["error"]),e(s,{error:t.state.addressError009,disabled:!0,classNames:{wrap:"row-margin-item-group row-margin-bottom-none"}},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(l,{title:"실거주지 - 주소",defaultValue:"인천광역시 서구 에코로 181",disabled:!0})]),_:1})]),_:1},8,["error"]),e(s,{error:t.state.addressError009,disabled:!0,classNames:{wrap:"row-margin-item-group row-margin-bottom-none"}},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(l,{title:"실거주지 - 상세주소",defaultValue:"하나아파트 835동 4590호",disabled:!0})]),_:1})]),_:1},8,["error"]),e(_,null,{default:r(()=>[o("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(f,{titleText:"기타주소",target:"#MI_P01_p005_addressSerach010Button"},{default:r(()=>[e(m,{error:t.state.addressError010},{default:r(()=>[e(s,{error:t.state.addressError010},{right:r(()=>[e(n,{size:"small",theme:"tertiary",id:"MI_P01_p005_addressSerach010Button"},{default:r(()=>[o("검색")]),_:1})]),default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(l,{title:"기타주소 - 우편번호",defaultValue:"12345",disabled:!0})]),_:1})]),_:1},8,["error"]),e(s,{error:t.state.addressError010,disabled:!0,classNames:{wrap:"row-margin-item-group row-margin-bottom-none"}},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(l,{title:"기타주소 - 주소",defaultValue:"인천광역시 서구 에코로 181",disabled:!0})]),_:1})]),_:1},8,["error"]),e(s,{error:t.state.addressError010,disabled:!0,classNames:{wrap:"row-margin-item-group row-margin-bottom-none"}},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(l,{title:"기타주소 - 상세주소",defaultValue:"하나아파트 835동 4590호",disabled:!0})]),_:1})]),_:1},8,["error"]),e(_,null,{default:r(()=>[o("Error Message")]),_:1})]),_:1},8,["error"])]),_:1})]),_:1}),i("section",null,[se,e(b,null,{default:r(()=>[e(f,{titleText:"이메일",target:"#MI_P01_p005_EmailId"},{default:r(()=>[e(m,{error:t.state.mailError},{default:r(()=>[e(s,{error:t.state.mailError},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(l,{title:"이메일 아이디",id:"MI_P01_p005_EmailId"})]),_:1}),e(a,{margin:"regular"},{default:r(()=>[o("@")]),_:1}),e(a,{margin:"regular",flexible:!0},{default:r(()=>[e(P,{options:[{value:"1",label:"naver.com"},{value:"2",label:"hanmail.net"},{value:"3",label:"gmail.com"},{value:"4",label:"nate.com"},{value:"5",label:"paran.com"},{value:"6",label:"dreamwiz.com"},{value:"7",label:"yahoo.com"},{value:"8",label:"freechal.com"},{value:"9",label:"직접입력"}],title:"이메일 도메인",placeholder:"선택"},null,8,["options"])]),_:1})]),_:1},8,["error"]),e(s,{error:t.state.mailError,classNames:{wrap:"row-margin-item-group row-margin-bottom-none"}},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(l,{title:"이메일 도메인 직접입력",id:"MI_P01_p005_EmailDomainSelf"})]),_:1})]),_:1},8,["error"]),e(_,null,{default:r(()=>[o("Error Message")]),_:1})]),_:1},8,["error"])]),_:1})]),_:1})]),e(y,null,{default:r(()=>[e(M,null,{default:r(()=>[e(n,null,{default:r(()=>[o("변경하기")]),_:1})]),_:1})]),_:1})]),_:1})}const de={$style:ee},ye=v(re,[["render",oe],["__cssModules",de]]);export{ye as default};
//# sourceMappingURL=MI_P01_p005-bbd9eb0b.js.map
