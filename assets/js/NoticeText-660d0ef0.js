import{o,c as a,a as e,e as p,h as i,k as _,n as l,v as u}from"./vendor-afc869d0.js";import{_ as f}from"./index-c3ff26f1.js";const h={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},w=e("path",{fill:"#9E9E9E",d:"M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"},null,-1),v=e("path",{fill:"#fff",d:"M11 7a1 1 0 1 1 2 0v6a1 1 0 1 1-2 0V7ZM10.75 16.75a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Z"},null,-1),x=[w,v];function y(t,s){return o(),a("svg",h,x)}const C={render:y},N={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},g=e("path",{fill:"#143B75",d:"M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"},null,-1),$=e("path",{fill:"#fff","fill-rule":"evenodd",d:"M17.208 8.544a1 1 0 0 1-.002 1.414l-5.86 5.85a1 1 0 0 1-1.415-.002l-3.14-3.15a1 1 0 1 1 1.417-1.412l2.433 2.441 5.152-5.143a1 1 0 0 1 1.415.002Z","clip-rule":"evenodd"},null,-1),k=[g,$];function B(t,s){return o(),a("svg",N,k)}const M={render:B},j="_notice_1j4d6_1",Z="_notice__icon_1j4d6_9",E="_notice__text_1j4d6_25",S={notice:j,notice__icon:Z,notice__text:E},r=()=>({wrap:"",icon:"",text:""}),I={components:{iconImportant:C,iconComplete:M},props:{classNames:{Type:Object,default(){return r()}},type:{Type:String,default:null}},setup(t){return{customClassNames:p(()=>{const{classNames:n}=t;return Object.assign(r(),n)})}}};function T(t,s,n,c,O,V){const d=i("iconComplete"),m=i("iconImportant");return o(),a("div",{class:l([t.$style.notice,c.customClassNames.wrap])},[e("div",{class:l([t.$style.notice__icon,c.customClassNames.icon])},[n.type==="check"?(o(),_(d,{key:0})):(o(),_(m,{key:1}))],2),e("p",{class:l([t.$style.notice__text,c.customClassNames.text])},[u(t.$slots,"default")],2)],2)}const b={$style:S},A=f(I,[["render",T],["__cssModules",b]]);export{A as N};
//# sourceMappingURL=NoticeText-660d0ef0.js.map
