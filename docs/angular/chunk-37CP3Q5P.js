import{a as f,b as _,e as b,h as g,i as v,l as y}from"./chunk-AZX6VB5M.js";import{Ba as t,Ca as n,Da as h,Ia as l,Ka as i,Ma as C,Qa as d,T as m,pa as u,xa as p}from"./chunk-FT6SFVFK.js";var E=(()=>{let e=class e{constructor(){this.step=1,this.counter=0,this.inputControl=new b(this.step),this.onValueChange=o=>{!o||o<1?this.step=1:this.step=o,this.inputControl.value!==this.step&&this.inputControl.setValue(this.step)}}ngOnInit(){this.inputControl.valueChanges.subscribe(this.onValueChange)}increment(){this.counter+=this.step}decrement(){this.counter-=this.step}reset(){this.counter=0}};e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=m({type:e,selectors:[["app-counter"]],standalone:!0,features:[d],decls:12,vars:2,consts:[[3,"click"],["type","number","type","number",3,"formControl"]],template:function(s,r){s&1&&(t(0,"h2"),i(1),n(),t(2,"section")(3,"button",0),l("click",function(){return r.decrement()}),i(4,"-"),n(),t(5,"button",0),l("click",function(){return r.increment()}),i(6,"+"),n(),t(7,"p"),i(8," Increment / Decrement by "),h(9,"input",1),n(),t(10,"button",0),l("click",function(){return r.reset()}),i(11,"Reset"),n()()),s&2&&(u(1),C(" ",r.counter,`
`),u(8),p("formControl",r.inputControl))},dependencies:[y,f,g,_,v],changeDetection:0});let c=e;return c})();export{E as CounterComponent};