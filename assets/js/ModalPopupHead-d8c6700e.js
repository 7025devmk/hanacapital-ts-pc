import{s as O,r as B,b as y,e as a,f as T,D as N,E as C,q as f,u as j,h as $,o as u,c as l,n as p,v as _,G as i,a as m,i as E,w as I,C as H}from"./vendor-afc869d0.js";import{_ as S}from"./index-c3ff26f1.js";const L="_popup_1uaiv_1",V="_popup__head_1uaiv_26",F="_popup__body_1uaiv_29",P="_popup__foot_1uaiv_108",R="_popup__header_1uaiv_112",q="_popup__title_1uaiv_137",D="_popup__text_1uaiv_152",G={popup:L,"popup__outer-bottom":"_popup__outer-bottom_1uaiv_11","popup__bg-bottom":"_popup__bg-bottom_1uaiv_19",popup__head:V,popup__body:F,"popup__body-scroll":"_popup__body-scroll_1uaiv_37","popup__body-inner":"_popup__body-inner_1uaiv_81",popup__foot:P,popup__header:R,"popup__header-row":"_popup__header-row_1uaiv_116","popup__header-left":"_popup__header-left_1uaiv_121","popup__header-right":"_popup__header-right_1uaiv_127","popup__header-sub":"_popup__header-sub_1uaiv_134",popup__title:q,"popup__sub-title":"_popup__sub-title_1uaiv_145",popup__text:D,"popup--fix":"_popup--fix_1uaiv_161","popup--size-regular":"_popup--size-regular_1uaiv_170","popup--size-large":"_popup--size-large_1uaiv_173","popup--size-wide":"_popup--size-wide_1uaiv_176","popup--line-secondary":"_popup--line-secondary_1uaiv_179"},h=()=>({wrap:"",outerBottom:"",bgBottom:"",head:"",body:"",bodyInner:"",bodyScroll:"",foot:""}),c=s=>{if(!s||typeof s!="function")return!1;const t=s();let e=0;return t.forEach(o=>o.children==="v-if"&&e++),t.length!==e},U={components:{Simplebar:O},props:{classNames:{Type:Object,default(){return h()}},bg:{Type:String,default:null},fix:{Type:Boolean,default:!1},size:{Type:String,default:null},line:{Type:String,default:null}},setup(s,{slots:t}){const e=B({head:{value:null},body:{value:null},bodyScroll:{value:null},slots:{}}),o=y(null),r=y(null),n=y(null),d=a(()=>{const{classNames:k}=s;return Object.assign(h(),k)}),b=a(()=>c(e.slots.outerBottom)),M=a(()=>c(e.slots.bgBottom)),w=a(()=>c(e.slots.head)),z=a(()=>c(e.slots.foot));return T(()=>{e.head.value=o,e.body.value=r,e.bodyScroll.value=n}),N(()=>{e.slots.outerBottom=t.outerBottom,e.slots.bgBottom=t.bgBottom,e.slots.head=t.head,e.slots.foot=t.foot}),C(()=>{e.slots.outerBottom=t.outerBottom,e.slots.bgBottom=t.bgBottom,e.slots.head=t.head,e.slots.foot=t.foot}),f("popupStyleModule",j()),f("popupLayout",{head:e.head,body:e.body,bodyScroll:e.bodyScroll}),{head:o,body:r,bodyScroll:n,customClassNames:d,isOuterBottom:b,isBgBottom:M,isHead:w,isFoot:z}}};function A(s,t,e,o,r,n){const d=$("Simplebar");return u(),l("div",{class:p([s.$style.popup,{[s.$style[`popup--bg-${e.bg}`]]:e.bg,[s.$style["popup--fix"]]:e.fix,[s.$style[`popup--size-${e.size}`]]:e.size,[s.$style[`popup--line-${e.line}`]]:e.line},o.customClassNames.wrap])},[o.isHead?(u(),l("div",{key:0,ref:"head",class:p([s.$style.popup__head,o.customClassNames.head])},[_(s.$slots,"head")],2)):i("",!0),m("div",{ref:"body",class:p([s.$style.popup__body,o.customClassNames.body])},[E(d,{ref:"bodyScroll","data-simplebar-auto-hide":"false",class:p([s.$style["popup__body-scroll"],o.customClassNames.bodyScroll])},{default:I(()=>[m("div",{class:p([s.$style["popup__body-inner"],o.customClassNames.bodyInner])},[_(s.$slots,"default")],2)]),_:3},8,["class"])],2),o.isFoot?(u(),l("div",{key:1,class:p([s.$style.popup__foot,o.customClassNames.foot])},[_(s.$slots,"foot")],2)):i("",!0),o.isBgBottom?(u(),l("div",{key:2,class:p([s.$style["popup__bg-bottom"],o.customClassNames.bgBottom])},[_(s.$slots,"bgBottom")],2)):i("",!0),o.isOuterBottom?(u(),l("div",{key:3,class:p([s.$style["popup__outer-bottom"],o.customClassNames.outerBottom])},[_(s.$slots,"outerBottom")],2)):i("",!0)],2)}const J={$style:G},Y=S(U,[["render",A],["__cssModules",J]]),v=()=>({wrap:"",row:"",left:"",right:"",sub:""}),g=s=>{if(!s||typeof s!="function")return!1;const t=s();let e=0;return t.forEach(o=>o.children==="v-if"&&e++),t.length!==e},K={props:{classNames:{Type:Object,default(){return v()}}},setup(s,{slots:t}){const e=H("popupStyleModule"),o=B({slots:{}}),r=a(()=>{const{classNames:b}=s;return Object.assign(v(),b)}),n=a(()=>g(o.slots.right)),d=a(()=>g(o.slots.sub));return N(()=>{o.slots.right=t.right,o.slots.sub=t.sub}),C(()=>{o.slots.right=t.right,o.slots.sub=t.sub}),{styleModule:e,customClassNames:r,isRight:n,isSub:d}}};function Q(s,t,e,o,r,n){return u(),l("div",{class:p([o.styleModule.popup__header,o.customClassNames.wrap])},[m("div",{class:p([o.styleModule["popup__header-row"],o.customClassNames.row])},[m("div",{class:p([o.styleModule["popup__header-left"],o.customClassNames.left])},[_(s.$slots,"default")],2),o.isRight?(u(),l("div",{key:0,class:p([o.styleModule["popup__header-right"],o.customClassNames.right])},[_(s.$slots,"right")],2)):i("",!0)],2),o.isSub?(u(),l("div",{key:0,class:p([o.styleModule["popup__header-sub"],o.customClassNames.sub])},[_(s.$slots,"sub")],2)):i("",!0)],2)}const Z=S(K,[["render",Q]]);export{Y as M,Z as a};
//# sourceMappingURL=ModalPopupHead-d8c6700e.js.map
