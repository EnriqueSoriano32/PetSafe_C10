import{r as m,j as e,Y as j,a as x,y as p}from"./app-d5549e23.js";import{C as f}from"./Carousel-c6cb7aa7.js";import{A as w}from"./AdminLayout-4a24a3a0.js";import{S as s}from"./sweetalert2.esm.all-dd0c4ce7.js";import{X as C}from"./index.es-60a9f209.js";import{M as b}from"./Modal-90278108.js";import"./Dropdown-59417614.js";import"./transition-ab35fa89.js";import"./ResponsiveNavLink-f9744a9b.js";import"./index-76830549.js";import"./dialog-752e7445.js";const v=(n,o,r)=>[{name:"Tipo",selector:t=>t.tipo.nombre},{name:"Sexo",selector:t=>t.sexo},{name:"Edad",selector:t=>t.edad},{name:"Peso",selector:t=>t.peso},{name:"Descripción",selector:t=>t.descripcion,cell:t=>e.jsx("div",{className:"break-words max-w-xs overflow-hidden",children:t.descripcion})},{name:"Usuario",selector:t=>t.usuario.name},{name:"Acciones",cell:t=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>n(t.id),children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75"})})}),e.jsx("button",{onClick:()=>o(t.id),children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"})})}),e.jsx("button",{onClick:()=>r(t),children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"})]})})]}),ignoreRowClick:!0,allowoverflow:!0}],k={rows:{style:{minHeight:"72px"}},headCells:{style:{fontSize:"16px",fontWeight:"bold",backgroundColor:"#BF9F63",textColor:"white"}},cells:{style:{fontSize:"14px"}}},L=({mascotas:n})=>{var d;const[o,r]=m.useState(null),[t,c]=m.useState(!1),h=async a=>{s.fire({title:"Publicar mascota",text:"La mascota será publicada para su adopción",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, publicar!",cancelButtonText:"Cancelar"}).then(i=>{i.isConfirmed&&x.post("/panel/admin/adopciones/publicar",{mascotaId:a}).then(()=>{s.fire({title:"Mascota publicada!",text:"La mascota ha sida publicada para su adopción.",icon:"success"}),p.reload({only:["mascotas"]})}).catch(l=>{console.log(l),s.fire({title:"Error!",text:"Algo salió mal.",icon:"error"})})})},u=async a=>{s.fire({title:"Eliminar mascota",text:"La mascota será eliminada",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, eliminar!",cancelButtonText:"Cancelar"}).then(i=>{i.isConfirmed&&x.post("",{mascotaId:a}).then(()=>{s.fire({title:"Mascota eliminad!",text:"La mascota ha sida eliminada correctamente.",icon:"success"}),p.reload({only:["mascotas"]})}).catch(l=>{console.log(l),s.fire({title:"Error!",text:"Algo salió mal.",icon:"error"})})})},g=a=>{r(a),c(!0)};return e.jsxs(e.Fragment,{children:[e.jsx(j,{title:"Mis mascotas"}),e.jsx(b,{title:"Mascota",show:t,onClose:()=>{c(!1),r(null)},children:e.jsxs("div",{className:"w-full pb-5 px-5",children:[e.jsx("h5",{className:"text-2xl font-bold tracking-tight text-custom-brown",children:(d=o==null?void 0:o.tipo)==null?void 0:d.nombre}),e.jsxs("p",{className:"text-custom-brown text-sm leading-relaxed",children:[e.jsx("strong",{children:"Edad:"})," ",o==null?void 0:o.edad," meses"]}),e.jsxs("p",{className:"text-custom-brown text-sm leading-relaxed",children:[e.jsx("strong",{children:"Peso:"})," ",o==null?void 0:o.peso," kg"]}),e.jsxs("p",{className:"text-custom-brown text-sm leading-relaxed",children:[e.jsx("strong",{children:"Sexo:"})," ",o==null?void 0:o.sexo]}),e.jsxs("p",{className:"text-custom-brown text-sm leading-relaxed",children:[e.jsx("strong",{children:"Descripción:"})," ",o==null?void 0:o.descripcion]}),e.jsx(f,{images:(o==null?void 0:o.imagenes)||[]})]})}),e.jsx("div",{className:"p-12",children:e.jsx(C,{columns:v(h,u,g),data:n,highlightOnHover:!0,striped:!0,noDataComponent:e.jsx("div",{style:{padding:"10px",color:"red"},children:"No hay datos disponibles"}),customStyles:k})})]})};L.layout=n=>e.jsx(w,{children:n,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Adopciones"})});export{L as default};
