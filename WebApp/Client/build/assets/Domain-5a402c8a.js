import{j as e,a,F as i,N as o,c as m,g as c}from"./index-85fdd556.js";/* empty css                  */import{S as r}from"./developpement-web-featured-1ff69bef.js";function n(t){return e("div",{className:"formation__container",children:a("div",{className:"formation__content",children:[e("div",{className:"formation__image",children:e("img",{src:r,alt:"code"})}),a("div",{className:"formation__detail",children:[a("div",{className:"formation__theme",children:[t.theme?t.theme:"Programmation"," "]}),a("div",{className:"formation__title",children:[t.title?t.title:"Cours de développement web"," "]}),a("div",{className:"formation__author",children:[t.author?t.author:"Jean Clenche"," "]}),a("div",{className:"formation__price",children:[t.prix?t.prix:"100"," €"]})]})]})})}function s(t){return a(i,{children:[e(o,{}),e("div",{className:"domain__container",children:a("div",{className:"domain__content",children:[a("div",{className:"domain__theme",children:[e("div",{className:"domain__theme__title",children:"Quelle domaine vous passionne ?"}),a("div",{className:"domain__theme__body",children:[e("button",{className:"domain__theme__button",children:"Developpement"}),e("button",{className:"domain__theme__button",children:"Réseau"}),e("button",{className:"domain__theme__button",children:"Electronique"}),e("button",{className:"domain__theme__button",children:"Adminstration"}),e("button",{className:"domain__theme__button",children:"AI"}),e("button",{className:"domain__theme__button",children:"Electricité"}),e("button",{className:"domain__theme__button",children:"Mobile"})]})]}),a("div",{className:"domain__formation",children:[e(n,{}),e(n,{}),e(n,{}),e(n,{}),e(n,{}),e(n,{})]})]})})]})}const _=t=>({formations:t.formationState.formations}),d=t=>({getFormations:()=>t(c())}),l=m(_,d),v=l(s);export{v as default};