import{r as c,q as d,j as e,Y as x,a as m}from"./app-0790a752.js";import{C as p}from"./ChatInput-3751fa58.js";import{C as h}from"./Carousel-e5ed0e54.js";import{u as g,L as j,G as u}from"./GuestLayout-04092561.js";import"./zod-1718372a.js";import"./Modal-0185d27a.js";import"./transition-929ee72c.js";import"./dialog-c96a8114.js";import"./Input-b95ba44b.js";import"./index-68efb1f0.js";import"./Dropdown-f13830da.js";import"./Select-6e46269d.js";import"./Dropzone-22cfb416.js";import"./TextArea-d4ec2322.js";import"./ModalForm-986fc5f3.js";/* empty css                */const f=({mascota:s})=>{const[i,a]=c.useState(!1),{auth:t}=d().props,{setLoginModal:r,setRegisterModal:l}=g(),n=o=>{a(!0),m.post("/send/message",{contenido:o,mascotaId:s.id}).then(()=>{}).catch(()=>{}).finally(()=>{a(!1)})};return e.jsxs(e.Fragment,{children:[e.jsx(x,{title:"Mascotas en adopción"}),e.jsxs("div",{className:"p-12 mt-10",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-700 my-5",children:s.tipo.nombre}),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("div",{className:"w-2/3",children:[e.jsx(h,{images:s==null?void 0:s.imagenes,type:"show"}),e.jsxs("div",{className:"mt-8",children:[e.jsxs("p",{className:"text-xl",children:[s.tipo.nombre,"• Sexo: ",s.sexo,"• Edad: ",s.edad," meses • Peso: ",s.peso," kg"]}),e.jsx("p",{className:"text-md text-gray-500",children:s.descripcion})]})]}),e.jsxs("div",{className:"w-1/3 shadow-2xl flex flex-col border rounded-lg p-5",children:[e.jsx("h2",{className:"text-lg font-bold text-center",children:"Enviar mensaje"}),t!=null&&t.user?e.jsxs("div",{className:"h-full flex flex-col bg-gray-100",children:[e.jsx("div",{className:"flex-1 flex items-center justify-center",children:e.jsx("p",{className:"text-md text-gray-500 text-center",children:"No compartas información delicada y respeta las normas de la comunidad"})}),e.jsx(p,{onSendMessage:n,disabled:i})]}):e.jsxs("div",{className:"h-full flex flex-col gap-4 items-center justify-center",children:[e.jsx("p",{className:"text-md text-gray-500",children:"Inicia sesión para contactar por esta mascota"}),e.jsxs("p",{className:"text-md text-gray-500",children:["¿Aún no tienes una cuenta?",e.jsx("span",{className:"cursor-pointer text-custom-gold",onClick:()=>l(!0),children:" Registrate"})]}),e.jsx("button",{className:"text-md text-custom-gold",onClick:()=>r(!0),children:"Iniciar sesión"}),e.jsx(j,{text:"Inicia sesión con Google"})]})]})]})]})]})};f.layout=s=>e.jsx(u,{children:s});export{f as default};