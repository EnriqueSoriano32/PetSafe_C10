import{j as e,Y as d}from"./app-0e80d3ae.js";import{O as p}from"./OrgLayout-20a39454.js";import{I as t}from"./Input-0efc5f8c.js";import{M as g}from"./Map-c8caa6c9.js";import{z as i,u,t as x}from"./zod-cf63341f.js";import{T as b}from"./TextArea-bbd5ce0a.js";import f from"./UpdateProfileImage-8ba2d7e2.js";import"./Dropdown-3ade979b.js";import"./transition-a27f3241.js";import"./ResponsiveNavLink-42653e20.js";import"./index-4ac6d278.js";/* empty css                */import"./sweetalert2.esm.all-dd0c4ce7.js";const h=i.object({nombre_organizacion:i.string().min(1,{message:"El nombre es obligatorio"}).max(255,{message:"El nombre no puede exceder 255 caracteres"}),latLng:i.object({lat:i.number().min(-90).max(90,{message:"La latitud debe estar entre -90 y 90."}),lng:i.number().min(-180).max(180,{message:"La longitud debe estar entre -180 y 180."})}).optional().refine(a=>a&&a.lat!==void 0&&a.lng!==void 0,{message:"Selecciona el punto en el mapa"}),telefono:i.string().min(1,{message:"El teléfono es obligatorio"}).max(20,{message:"El teléfono no puede exceder 20 caracteres"}),ubicacion:i.string().min(1,{message:"La ubicación es obligatoria"}).max(255,{message:"La ubicación no puede exceder 255 caracteres"}),email:i.string().email({message:"El email no es válido"}),descripcion:i.string().min(10,{message:"La descripción debe tener al menos 10 caracteres"}).max(280,{message:"La descripción no puede tener más de 280 caracteres"}).optional().or(i.literal(""))}),j=({org:a})=>{console.log(a);const{register:s,reset:y,setValue:n,watch:l,handleSubmit:L,formState:{errors:r,isSubmitting:o}}=u({mode:"onChange",resolver:x(h),defaultValues:{nombre_organizacion:a.nombre_organizacion,ubicacion:a.ubicacion,telefono:a.telefono,latLng:{lat:a.latitud,lng:a.longitud},descripcion:a.descripcion}}),m=l("latLng");return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Perfil"}),e.jsx("div",{className:"py-12",children:e.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6",children:[e.jsx("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:e.jsxs("section",{className:"max-w-xl",children:[e.jsxs("header",{children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Información de la organización"}),e.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Actualiza la información de la organización"})]}),e.jsxs("form",{className:"mt-6 space-y-6",children:[e.jsx(t,{id:"nombre_organizacion",label:"Nombre",required:!0,type:"text",errors:r.nombre_organizacion,disabled:o,register:s}),e.jsx(t,{id:"ubicacion",label:"Ubicación",required:!0,type:"text",errors:r.ubicacion,disabled:o,register:s}),e.jsx(t,{id:"telefono",label:"Teléfono",required:!0,type:"number",errors:r.telefono,disabled:o,register:s}),e.jsx(b,{id:"descripcion",label:"Descripción",required:!0,type:"text",errors:r.descripcion,disabled:o,register:s}),e.jsx(g,{label:"Selecciona la ubicación en el mapa",errors:r.latLng,value:m,setValue:c=>n("latLng",c,{shouldValidate:!0})})]})]})}),e.jsx("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:e.jsx(f,{coverImage:a.cover_photo,profileImage:a.photo})})]})})]})};j.layout=a=>e.jsx(p,{children:a,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Perfil"})});export{j as default};
