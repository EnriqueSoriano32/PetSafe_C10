import{j as a,Y as c,a as l,y as n}from"./app-7c405e1f.js";import{P as d}from"./PetCard-5c7db75e.js";import{A as m}from"./AdminLayout-1593f367.js";import{S as i}from"./sweetalert2.esm.all-dd0c4ce7.js";import"./Carousel-ecd0b6d7.js";import"./Dropdown-fbe8b0d2.js";import"./transition-7667c26b.js";import"./ResponsiveNavLink-4c29dad9.js";import"./index-b22aba16.js";const p=({mascotas:o})=>{const s=async t=>{i.fire({title:"Publicar mascota",text:"La mascota será publicada para su adopción",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, publicar!",cancelButtonText:"Cancelar"}).then(r=>{r.isConfirmed&&l.post("/panel/admin/adopciones/publicar",{mascotaId:t}).then(()=>{i.fire({title:"Mascota publicada!",text:"La mascota ha sida publicada para su adopción.",icon:"success"}),n.reload({only:["mascotas"]})}).catch(e=>{console.log(e),i.fire({title:"Error!",text:"Algo salió mal.",icon:"error"})})})};return a.jsxs(a.Fragment,{children:[a.jsx(c,{title:"Mis mascotas"}),a.jsx("div",{className:"p-12",children:a.jsx("div",{className:"grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3",children:o.map(t=>a.jsx(d,{mascota:t,type:"admin",publishFunction:()=>s(t.id)},t.id))})})]})};p.layout=o=>a.jsx(m,{children:o,header:a.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Adopciones"})});export{p as default};