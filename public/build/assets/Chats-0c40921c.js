import{q as g,j as r,y as b,Y as y}from"./app-7fdd65f2.js";import{f as N}from"./formatoChat-b8c6c052.js";import{G as v}from"./GuestLayout-66c1f056.js";import"./zod-714b6d98.js";import"./Modal-26da4432.js";import"./transition-56dda76a.js";import"./dialog-6e03c62a.js";import"./Input-d30d9cf5.js";import"./index-4c44a9fb.js";import"./Dropdown-298e1f8d.js";import"./Select-aa7ab740.js";import"./Dropzone-8df24cde.js";import"./TextArea-d260559b.js";import"./ModalForm-f5b283e8.js";/* empty css                */function w({chat:e,notRead:o=!1}){var i,l,n,d,p,x,t,j,u;const{auth:s}=g().props,m=f=>{f.stopPropagation(),b.visit(`/chats/${e==null?void 0:e.id}`)};return r.jsxs("div",{className:`flex items-center gap-2 border-b-2 py-2 cursor-pointer ${o?"bg-blue-50":""}`,onClick:m,children:[r.jsxs("div",{className:"flex items-center gap-2 w-1/3",children:[(i=e==null?void 0:e.person)!=null&&i.foto?r.jsx("img",{src:(l=e==null?void 0:e.person)==null?void 0:l.foto,alt:"profile image",className:"rounded-full w-10 h-10"}):r.jsx("div",{className:"bg-blue-500 text-white font-bold flex justify-center items-center rounded-full w-10 h-10 aspect-square text-sm",children:(d=(n=e==null?void 0:e.person)==null?void 0:n.nombre)==null?void 0:d.charAt(0)}),r.jsx("p",{className:"font-bold truncate",children:(p=e==null?void 0:e.person)==null?void 0:p.nombre})]}),r.jsxs("p",{className:`w-1/3 ${o?"font-bold":"text-gray-400 font-light"}`,children:[((x=s==null?void 0:s.user)==null?void 0:x.id)===((t=e==null?void 0:e.ultimo_mensaje)==null?void 0:t.user_id)?"Tú: ":"",(j=e==null?void 0:e.ultimo_mensaje)==null?void 0:j.contenido]}),r.jsx("p",{className:`w-1/3 ${o?"font-bold":"font-light text-gray-400"}`,children:N((u=e==null?void 0:e.ultimo_mensaje)==null?void 0:u.created_at)})]})}const _=({chats:e,notificaciones:o})=>r.jsxs(r.Fragment,{children:[r.jsx(y,{title:"Bandeja de mensajes"}),r.jsxs("div",{className:"p-12 mt-10",children:[r.jsx("h1",{className:"text-3xl font-bold text-gray-700 my-5",children:"Bandeja de mensajes"}),r.jsx("div",{children:(e==null?void 0:e.length)===0?r.jsx("p",{children:"No hay mensajes"}):r.jsx("div",{children:e==null?void 0:e.map(s=>r.jsx(w,{chat:s,notRead:o==null?void 0:o.some(m=>m.data.chat_id===s.id)},s==null?void 0:s.id))})})]})]});_.layout=e=>r.jsx(v,{children:e});export{_ as default};