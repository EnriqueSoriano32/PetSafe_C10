import{j as e,r as s}from"./app-0e80d3ae.js";import{q as t}from"./transition-a27f3241.js";import{_ as a}from"./dialog-675031af.js";function f({children:r,title:o,description:l=null,show:m=!1,maxWidth:n="lg",closeable:i=!0,onClose:x=()=>{}}){const c=()=>{i&&x()},d={sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[n];return e.jsx(t,{show:m,as:s.Fragment,leave:"duration-200",children:e.jsxs(a,{as:"div",id:"modal",className:"fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all",onClose:c,children:[e.jsx(t.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"absolute inset-0 bg-gray-500/75"})}),e.jsx(t.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:e.jsxs(a.Panel,{className:`mb-6 flex flex-col bg-white rounded-2xl overflow-x-hidden shadow-xl transform transition-all w-full h-auto max-h-[95%] sm:mx-auto ${d}`,children:[e.jsx(a.Title,{className:"text-center text-2xl text-custom-brown p-5",children:o}),l&&e.jsx(a.Description,{className:"mb-4 px-5 text-sm text-gray-600",children:l}),r]})})]})})}export{f as M};
