import{u as F,C as q,r as w,b as K,e as C,D as O,f as E,E as j,z,q as T,h as D,o as u,c as r,a as _,n as i,t as f,G as c,i as A,w as G,H,v as P,m as U}from"./vendor-afc869d0.js";import{F as J}from"./FormInvalid-07654431.js";import{_ as Q}from"./index-c3ff26f1.js";const R="_input_13x0s_1",W="_input__title_13x0s_4",X="_input__contents_13x0s_10",Y="_input__input_13x0s_13",Z="_input__bottom_13x0s_89",$="_input__count_13x0s_97",tt="_input__help_13x0s_108",et="_input__invalid_13x0s_108",ot={input:R,input__title:W,input__contents:X,input__input:Y,"input--focus":"_input--focus_13x0s_81","input--error":"_input--error_13x0s_86",input__bottom:Z,"input__bottom-left":"_input__bottom-left_13x0s_93",input__count:$,"input__count-current":"_input__count-current_13x0s_105",input__help:tt,input__invalid:et,"input--inputed":"_input--inputed_13x0s_111","input--disabled":"_input--disabled_13x0s_117"},x=()=>({item:"",title:"",titleText:"",titleOptionalText:"",require:"",requireText:"",contents:"",input:"",bottom:"",bottomLeft:"",count:"",countCurrent:""}),nt={components:{FormInvalid:J},inheritAttrs:!1,props:{classNames:{Type:Object,default(){return x()}},require:{Type:Boolean,default:!1},titleText:{Type:String,default:""},titleOptionalText:{Type:String,default:null},disabled:{Type:Boolean,default:!1},count:{Type:Boolean,default:!1},error:{Type:Boolean,default:!1},maxlength:{Type:Number,default:null},defaultValue:{Type:String,default:null},modelValue:{Type:String}},setup(e,s){const{emit:n}=s;let t=null;const y=F(),p=q("formListStyleModule"),a=w({isFocus:!1,isInputed:!1,val:"",count:e.modelValue?e.modelValue.length:0}),o=K(null),N=C(()=>{const{classNames:l}=e;return Object.assign(x(),l)}),g=C(()=>!!s.slots.bottom),S=()=>o.value,b=()=>{o.value.focus()},M=()=>{b()},m=()=>{const{maxlength:l}=e;if(typeof l!="number")return;const d=o.value.value;if(d.length>l){o.value.value=d.substr(0,l);const V=new Event("input");o.value.dispatchEvent(V)}},v=()=>{const l=o.value.value.length;a.isInputed=!!l,a.count=l},I=()=>{clearTimeout(t),m(),a.isFocus=!0,a.isInputed=!!o.value.value.length},L=()=>{clearTimeout(t),m(),t=setTimeout(()=>{a.isFocus=!1,clearTimeout(t)},50)},h=l=>{const{value:d}=l.target;a.val=d,n("update:modelValue",d)},k=()=>{m()},B=()=>{m(),v()};return O(()=>{a.val=e.modelValue||e.defaultValue||""}),E(()=>{m(),v()}),j(()=>{m()}),z(()=>e.modelValue,l=>{a.val=l,U(()=>{v()})}),T("formListItem",{helpClass:p.form__help}),T("basicTextarea",{helpClass:y.input__help,invalidClass:y.input__invalid}),{formListStyleModule:p,state:a,input:o,customClassNames:N,isBottom:g,getInputElement:S,focus:b,labelClick:M,onfocusin:I,onInput:h,onKeydown:k,onKeyup:B,onfocusout:L}}},st=["value","disabled"],lt={key:0};function it(e,s,n,t,y,p){const a=D("FormInvalid");return u(),r("div",{class:i([t.formListStyleModule.form__item,{[t.formListStyleModule["form__item--focus"]]:t.state.isFocus,[t.formListStyleModule["form__item--inputed"]]:t.state.isInputed,[t.formListStyleModule["form__item--error"]]:n.error,[t.formListStyleModule["form__item--disabled"]]:n.disabled},e.$style.input,{[e.$style["input--focus"]]:t.state.isFocus,[e.$style["input--inputed"]]:t.state.isInputed,[e.$style["input--error"]]:n.error,[e.$style["input--disabled"]]:n.disabled},t.customClassNames.item])},[_("dt",{class:i([t.formListStyleModule.form__title,e.$style.input__title,t.customClassNames.title]),onClick:s[0]||(s[0]=(...o)=>t.labelClick&&t.labelClick(...o))},[_("span",{class:i([t.formListStyleModule["form__title-text"],t.customClassNames.titleText])},f(n.titleText),3),n.titleOptionalText?(u(),r("span",{key:0,class:i([t.formListStyleModule["form__title-optional"],t.customClassNames.titleOptionalText])},f(n.titleOptionalText),3)):c("",!0),n.require?(u(),r("span",{key:1,class:i([t.formListStyleModule.form__require,t.customClassNames.require])},[_("span",{class:i([t.formListStyleModule["form__require-text"],t.customClassNames.requireText])}," (필수) ",2)],2)):c("",!0)],2),_("dd",{class:i([t.formListStyleModule.form__contents,e.$style.input__contents,t.customClassNames.contents])},[A(a,{error:n.error},{default:G(()=>[_("div",{class:i([e.$style.input__input,t.customClassNames.input])},[_("textarea",H({ref:"input"},e.$attrs,{value:n.modelValue||t.state.val,disabled:n.disabled,onInput:s[1]||(s[1]=(...o)=>t.onInput&&t.onInput(...o)),onFocusin:s[2]||(s[2]=(...o)=>t.onfocusin&&t.onfocusin(...o)),onFocusout:s[3]||(s[3]=(...o)=>t.onfocusout&&t.onfocusout(...o)),onKeydown:s[4]||(s[4]=(...o)=>t.onKeydown&&t.onKeydown(...o)),onKeyup:s[5]||(s[5]=(...o)=>t.onKeyup&&t.onKeyup(...o))}),null,16,st)],2),t.isBottom||n.count?(u(),r("div",{key:0,class:i([e.$style.input__bottom,t.customClassNames.bottom])},[t.isBottom?(u(),r("div",{key:0,class:i([e.$style["input__bottom-left"],t.customClassNames.bottom])},[P(e.$slots,"bottom")],2)):c("",!0),n.count?(u(),r("div",{key:1,class:i([e.$style.input__count,t.customClassNames.bottom])},[_("span",{class:i([e.$style["input__count-current"],t.customClassNames.countCurrent])},f(t.state.count),3),n.maxlength?(u(),r("span",lt,"/"+f(n.maxlength),1)):c("",!0)],2)):c("",!0)],2)):c("",!0)]),_:3},8,["error"])],2)],2)}const at={$style:ot},mt=Q(nt,[["render",it],["__cssModules",at]]);export{mt as B};
//# sourceMappingURL=BasicTextarea-f326af3d.js.map
