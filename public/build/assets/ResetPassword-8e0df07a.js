import{W as w,r as f,j as s,Y as x}from"./app-0790a752.js";import{G as j}from"./GuestLayout-04092561.js";import{T as t,I as m}from"./TextInput-6add660e.js";import{I as i}from"./InputLabel-8e67738b.js";import{P as v}from"./PrimaryButton-8ac4a976.js";import"./zod-1718372a.js";import"./Modal-0185d27a.js";import"./transition-929ee72c.js";import"./dialog-c96a8114.js";import"./Input-b95ba44b.js";import"./index-68efb1f0.js";import"./Dropdown-f13830da.js";import"./Select-6e46269d.js";import"./Dropzone-22cfb416.js";import"./TextArea-d4ec2322.js";import"./ModalForm-986fc5f3.js";/* empty css                */function L({token:l,email:p}){const{data:e,setData:r,post:n,processing:d,errors:o,reset:c}=w({token:l,email:p,password:"",password_confirmation:""});f.useEffect(()=>()=>{c("password","password_confirmation")},[]);const u=a=>{a.preventDefault(),n(route("password.store"))};return s.jsxs(j,{children:[s.jsx(x,{title:"Reset Password"}),s.jsxs("form",{onSubmit:u,children:[s.jsxs("div",{children:[s.jsx(i,{htmlFor:"email",value:"Email"}),s.jsx(t,{id:"email",type:"email",name:"email",value:e.email,className:"mt-1 block w-full",autoComplete:"username",onChange:a=>r("email",a.target.value)}),s.jsx(m,{message:o.email,className:"mt-2"})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx(i,{htmlFor:"password",value:"Password"}),s.jsx(t,{id:"password",type:"password",name:"password",value:e.password,className:"mt-1 block w-full",autoComplete:"new-password",isFocused:!0,onChange:a=>r("password",a.target.value)}),s.jsx(m,{message:o.password,className:"mt-2"})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx(i,{htmlFor:"password_confirmation",value:"Confirm Password"}),s.jsx(t,{type:"password",name:"password_confirmation",value:e.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:a=>r("password_confirmation",a.target.value)}),s.jsx(m,{message:o.password_confirmation,className:"mt-2"})]}),s.jsx("div",{className:"flex items-center justify-end mt-4",children:s.jsx(v,{className:"ms-4",disabled:d,children:"Reset Password"})})]})]})}export{L as default};