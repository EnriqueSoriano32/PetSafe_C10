import{g as mr,r as p,R as yr,j as E}from"./app-0e80d3ae.js";var Ve={exports:{}},vr="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",br=vr,hr=br;function Je(){}function Xe(){}Xe.resetWarningCache=Je;var Dr=function(){function e(n,i,o,c,l,g){if(g!==hr){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function r(){return e}var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:Xe,resetWarningCache:Je};return t.PropTypes=t,t};Ve.exports=Dr();var wr=Ve.exports;const d=mr(wr);function R(e,r,t,n){function i(o){return o instanceof t?o:new t(function(c){c(o)})}return new(t||(t=Promise))(function(o,c){function l(f){try{u(n.next(f))}catch(v){c(v)}}function g(f){try{u(n.throw(f))}catch(v){c(v)}}function u(f){f.done?o(f.value):i(f.value).then(l,g)}u((n=n.apply(e,r||[])).next())})}function I(e,r){var t={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,c=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return c.next=l(0),c.throw=l(1),c.return=l(2),typeof Symbol=="function"&&(c[Symbol.iterator]=function(){return this}),c;function l(u){return function(f){return g([u,f])}}function g(u){if(n)throw new TypeError("Generator is already executing.");for(;c&&(c=0,u[0]&&(t=0)),t;)try{if(n=1,i&&(o=u[0]&2?i.return:u[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;switch(i=0,o&&(u=[u[0]&2,o.value]),u[0]){case 0:case 1:o=u;break;case 4:return t.label++,{value:u[1],done:!1};case 5:t.label++,i=u[1],u=[0];continue;case 7:u=t.ops.pop(),t.trys.pop();continue;default:if(o=t.trys,!(o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){t=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){t.label=u[1];break}if(u[0]===6&&t.label<o[1]){t.label=o[1],o=u;break}if(o&&t.label<o[2]){t.label=o[2],t.ops.push(u);break}o[2]&&t.ops.pop(),t.trys.pop();continue}u=r.call(e,t)}catch(f){u=[6,f],i=0}finally{n=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function Le(e,r){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var n=t.call(e),i,o=[],c;try{for(;(r===void 0||r-- >0)&&!(i=n.next()).done;)o.push(i.value)}catch(l){c={error:l}}finally{try{i&&!i.done&&(t=n.return)&&t.call(n)}finally{if(c)throw c.error}}return o}function Me(e,r,t){if(t||arguments.length===2)for(var n=0,i=r.length,o;n<i;n++)(o||!(n in r))&&(o||(o=Array.prototype.slice.call(r,0,n)),o[n]=r[n]);return e.concat(o||Array.prototype.slice.call(r))}var xr=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function W(e,r){var t=Er(e);if(typeof t.path!="string"){var n=e.webkitRelativePath;Object.defineProperty(t,"path",{value:typeof r=="string"?r:typeof n=="string"&&n.length>0?n:e.name,writable:!1,configurable:!1,enumerable:!0})}return t}function Er(e){var r=e.name,t=r&&r.lastIndexOf(".")!==-1;if(t&&!e.type){var n=r.split(".").pop().toLowerCase(),i=xr.get(n);i&&Object.defineProperty(e,"type",{value:i,writable:!1,configurable:!1,enumerable:!0})}return e}var Ar=[".DS_Store","Thumbs.db"];function Or(e){return R(this,void 0,void 0,function(){return I(this,function(r){return X(e)&&Fr(e.dataTransfer)?[2,Sr(e.dataTransfer,e.type)]:jr(e)?[2,_r(e)]:Array.isArray(e)&&e.every(function(t){return"getFile"in t&&typeof t.getFile=="function"})?[2,Pr(e)]:[2,[]]})})}function Fr(e){return X(e)}function jr(e){return X(e)&&X(e.target)}function X(e){return typeof e=="object"&&e!==null}function _r(e){return me(e.target.files).map(function(r){return W(r)})}function Pr(e){return R(this,void 0,void 0,function(){var r;return I(this,function(t){switch(t.label){case 0:return[4,Promise.all(e.map(function(n){return n.getFile()}))];case 1:return r=t.sent(),[2,r.map(function(n){return W(n)})]}})})}function Sr(e,r){return R(this,void 0,void 0,function(){var t,n;return I(this,function(i){switch(i.label){case 0:return e.items?(t=me(e.items).filter(function(o){return o.kind==="file"}),r!=="drop"?[2,t]:[4,Promise.all(t.map(Tr))]):[3,2];case 1:return n=i.sent(),[2,$e(Qe(n))];case 2:return[2,$e(me(e.files).map(function(o){return W(o)}))]}})})}function $e(e){return e.filter(function(r){return Ar.indexOf(r.name)===-1})}function me(e){if(e===null)return[];for(var r=[],t=0;t<e.length;t++){var n=e[t];r.push(n)}return r}function Tr(e){if(typeof e.webkitGetAsEntry!="function")return Ke(e);var r=e.webkitGetAsEntry();return r&&r.isDirectory?Ze(r):Ke(e)}function Qe(e){return e.reduce(function(r,t){return Me(Me([],Le(r),!1),Le(Array.isArray(t)?Qe(t):[t]),!1)},[])}function Ke(e){var r=e.getAsFile();if(!r)return Promise.reject("".concat(e," is not a File"));var t=W(r);return Promise.resolve(t)}function Cr(e){return R(this,void 0,void 0,function(){return I(this,function(r){return[2,e.isDirectory?Ze(e):Rr(e)]})})}function Ze(e){var r=e.createReader();return new Promise(function(t,n){var i=[];function o(){var c=this;r.readEntries(function(l){return R(c,void 0,void 0,function(){var g,u,f;return I(this,function(v){switch(v.label){case 0:if(l.length)return[3,5];v.label=1;case 1:return v.trys.push([1,3,,4]),[4,Promise.all(i)];case 2:return g=v.sent(),t(g),[3,4];case 3:return u=v.sent(),n(u),[3,4];case 4:return[3,6];case 5:f=Promise.all(l.map(Cr)),i.push(f),o(),v.label=6;case 6:return[2]}})})},function(l){n(l)})}o()})}function Rr(e){return R(this,void 0,void 0,function(){return I(this,function(r){return[2,new Promise(function(t,n){e.file(function(i){var o=W(i,e.fullPath);t(o)},function(i){n(i)})})]})})}var Ir=function(e,r){if(e&&r){var t=Array.isArray(r)?r:r.split(","),n=e.name||"",i=(e.type||"").toLowerCase(),o=i.replace(/\/.*$/,"");return t.some(function(c){var l=c.trim().toLowerCase();return l.charAt(0)==="."?n.toLowerCase().endsWith(l):l.endsWith("/*")?o===l.replace(/\/.*$/,""):i===l})}return!0};function Ne(e){return Lr(e)||zr(e)||rr(e)||kr()}function kr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Lr(e){if(Array.isArray(e))return ye(e)}function We(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function He(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?We(Object(t),!0).forEach(function(n){er(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):We(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function er(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function N(e,r){return Kr(e)||$r(e,r)||rr(e,r)||Mr()}function Mr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rr(e,r){if(e){if(typeof e=="string")return ye(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ye(e,r)}}function ye(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function $r(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var n=[],i=!0,o=!1,c,l;try{for(t=t.call(e);!(i=(c=t.next()).done)&&(n.push(c.value),!(r&&n.length===r));i=!0);}catch(g){o=!0,l=g}finally{try{!i&&t.return!=null&&t.return()}finally{if(o)throw l}}return n}}function Kr(e){if(Array.isArray(e))return e}var Nr="file-invalid-type",Wr="file-too-large",Hr="file-too-small",Br="too-many-files",Ur=function(r){r=Array.isArray(r)&&r.length===1?r[0]:r;var t=Array.isArray(r)?"one of ".concat(r.join(", ")):r;return{code:Nr,message:"File type must be ".concat(t)}},Be=function(r){return{code:Wr,message:"File is larger than ".concat(r," ").concat(r===1?"byte":"bytes")}},Ue=function(r){return{code:Hr,message:"File is smaller than ".concat(r," ").concat(r===1?"byte":"bytes")}},Yr={code:Br,message:"Too many files"};function tr(e,r){var t=e.type==="application/x-moz-file"||Ir(e,r);return[t,t?null:Ur(r)]}function nr(e,r,t){if(_(e.size))if(_(r)&&_(t)){if(e.size>t)return[!1,Be(t)];if(e.size<r)return[!1,Ue(r)]}else{if(_(r)&&e.size<r)return[!1,Ue(r)];if(_(t)&&e.size>t)return[!1,Be(t)]}return[!0,null]}function _(e){return e!=null}function qr(e){var r=e.files,t=e.accept,n=e.minSize,i=e.maxSize,o=e.multiple,c=e.maxFiles,l=e.validator;return!o&&r.length>1||o&&c>=1&&r.length>c?!1:r.every(function(g){var u=tr(g,t),f=N(u,1),v=f[0],O=nr(g,n,i),k=N(O,1),z=k[0],L=l?l(g):null;return v&&z&&!L})}function Q(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function J(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(r){return r==="Files"||r==="application/x-moz-file"}):!!e.target&&!!e.target.files}function Ye(e){e.preventDefault()}function Gr(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function Vr(e){return e.indexOf("Edge/")!==-1}function Jr(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return Gr(e)||Vr(e)}function A(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(n){for(var i=arguments.length,o=new Array(i>1?i-1:0),c=1;c<i;c++)o[c-1]=arguments[c];return r.some(function(l){return!Q(n)&&l&&l.apply(void 0,[n].concat(o)),Q(n)})}}function Xr(){return"showOpenFilePicker"in window}function Qr(e){if(_(e)){var r=Object.entries(e).filter(function(t){var n=N(t,2),i=n[0],o=n[1],c=!0;return or(i)||(console.warn('Skipped "'.concat(i,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),c=!1),(!Array.isArray(o)||!o.every(ir))&&(console.warn('Skipped "'.concat(i,'" because an invalid file extension was provided.')),c=!1),c}).reduce(function(t,n){var i=N(n,2),o=i[0],c=i[1];return He(He({},t),{},er({},o,c))},{});return[{description:"Files",accept:r}]}return e}function Zr(e){if(_(e))return Object.entries(e).reduce(function(r,t){var n=N(t,2),i=n[0],o=n[1];return[].concat(Ne(r),[i],Ne(o))},[]).filter(function(r){return or(r)||ir(r)}).join(",")}function et(e){return e instanceof DOMException&&(e.name==="AbortError"||e.code===e.ABORT_ERR)}function rt(e){return e instanceof DOMException&&(e.name==="SecurityError"||e.code===e.SECURITY_ERR)}function or(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||/\w+\/[-+.\w]+/g.test(e)}function ir(e){return/^.*\.[\w]+$/.test(e)}var tt=["children"],nt=["open"],ot=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],it=["refKey","onChange","onClick"];function at(e){return st(e)||ut(e)||ar(e)||ct()}function ct(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ut(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function st(e){if(Array.isArray(e))return ve(e)}function ge(e,r){return pt(e)||ft(e,r)||ar(e,r)||lt()}function lt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ar(e,r){if(e){if(typeof e=="string")return ve(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ve(e,r)}}function ve(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function ft(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var n=[],i=!0,o=!1,c,l;try{for(t=t.call(e);!(i=(c=t.next()).done)&&(n.push(c.value),!(r&&n.length===r));i=!0);}catch(g){o=!0,l=g}finally{try{!i&&t.return!=null&&t.return()}finally{if(o)throw l}}return n}}function pt(e){if(Array.isArray(e))return e}function qe(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function m(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?qe(Object(t),!0).forEach(function(n){be(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):qe(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function be(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function Z(e,r){if(e==null)return{};var t=dt(e,r),n,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}function dt(e,r){if(e==null)return{};var t={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(r.indexOf(i)>=0)&&(t[i]=e[i]);return t}var De=p.forwardRef(function(e,r){var t=e.children,n=Z(e,tt),i=ur(n),o=i.open,c=Z(i,nt);return p.useImperativeHandle(r,function(){return{open:o}},[o]),yr.createElement(p.Fragment,null,t(m(m({},c),{},{open:o})))});De.displayName="Dropzone";var cr={disabled:!1,getFilesFromEvent:Or,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};De.defaultProps=cr;De.propTypes={children:d.func,accept:d.objectOf(d.arrayOf(d.string)),multiple:d.bool,preventDropOnDocument:d.bool,noClick:d.bool,noKeyboard:d.bool,noDrag:d.bool,noDragEventsBubbling:d.bool,minSize:d.number,maxSize:d.number,maxFiles:d.number,disabled:d.bool,getFilesFromEvent:d.func,onFileDialogCancel:d.func,onFileDialogOpen:d.func,useFsAccessApi:d.bool,autoFocus:d.bool,onDragEnter:d.func,onDragLeave:d.func,onDragOver:d.func,onDrop:d.func,onDropAccepted:d.func,onDropRejected:d.func,onError:d.func,validator:d.func};var he={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function ur(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=m(m({},cr),e),t=r.accept,n=r.disabled,i=r.getFilesFromEvent,o=r.maxSize,c=r.minSize,l=r.multiple,g=r.maxFiles,u=r.onDragEnter,f=r.onDragLeave,v=r.onDragOver,O=r.onDrop,k=r.onDropAccepted,z=r.onDropRejected,L=r.onFileDialogCancel,ee=r.onFileDialogOpen,we=r.useFsAccessApi,xe=r.autoFocus,re=r.preventDropOnDocument,Ee=r.noClick,te=r.noKeyboard,Ae=r.noDrag,F=r.noDragEventsBubbling,ne=r.onError,M=r.validator,$=p.useMemo(function(){return Zr(t)},[t]),Oe=p.useMemo(function(){return Qr(t)},[t]),oe=p.useMemo(function(){return typeof ee=="function"?ee:Ge},[ee]),H=p.useMemo(function(){return typeof L=="function"?L:Ge},[L]),h=p.useRef(null),x=p.useRef(null),sr=p.useReducer(gt,he),Fe=ge(sr,2),ie=Fe[0],D=Fe[1],lr=ie.isFocused,je=ie.isFileDialogActive,B=p.useRef(typeof window<"u"&&window.isSecureContext&&we&&Xr()),_e=function(){!B.current&&je&&setTimeout(function(){if(x.current){var s=x.current.files;s.length||(D({type:"closeDialog"}),H())}},300)};p.useEffect(function(){return window.addEventListener("focus",_e,!1),function(){window.removeEventListener("focus",_e,!1)}},[x,je,H,B]);var P=p.useRef([]),Pe=function(s){h.current&&h.current.contains(s.target)||(s.preventDefault(),P.current=[])};p.useEffect(function(){return re&&(document.addEventListener("dragover",Ye,!1),document.addEventListener("drop",Pe,!1)),function(){re&&(document.removeEventListener("dragover",Ye),document.removeEventListener("drop",Pe))}},[h,re]),p.useEffect(function(){return!n&&xe&&h.current&&h.current.focus(),function(){}},[h,xe,n]);var j=p.useCallback(function(a){ne?ne(a):console.error(a)},[ne]),Se=p.useCallback(function(a){a.preventDefault(),a.persist(),G(a),P.current=[].concat(at(P.current),[a.target]),J(a)&&Promise.resolve(i(a)).then(function(s){if(!(Q(a)&&!F)){var y=s.length,b=y>0&&qr({files:s,accept:$,minSize:c,maxSize:o,multiple:l,maxFiles:g,validator:M}),w=y>0&&!b;D({isDragAccept:b,isDragReject:w,isDragActive:!0,type:"setDraggedFiles"}),u&&u(a)}}).catch(function(s){return j(s)})},[i,u,j,F,$,c,o,l,g,M]),Te=p.useCallback(function(a){a.preventDefault(),a.persist(),G(a);var s=J(a);if(s&&a.dataTransfer)try{a.dataTransfer.dropEffect="copy"}catch{}return s&&v&&v(a),!1},[v,F]),Ce=p.useCallback(function(a){a.preventDefault(),a.persist(),G(a);var s=P.current.filter(function(b){return h.current&&h.current.contains(b)}),y=s.indexOf(a.target);y!==-1&&s.splice(y,1),P.current=s,!(s.length>0)&&(D({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),J(a)&&f&&f(a))},[h,f,F]),U=p.useCallback(function(a,s){var y=[],b=[];a.forEach(function(w){var K=tr(w,$),C=ge(K,2),ce=C[0],ue=C[1],se=nr(w,c,o),V=ge(se,2),le=V[0],fe=V[1],pe=M?M(w):null;if(ce&&le&&!pe)y.push(w);else{var de=[ue,fe];pe&&(de=de.concat(pe)),b.push({file:w,errors:de.filter(function(gr){return gr})})}}),(!l&&y.length>1||l&&g>=1&&y.length>g)&&(y.forEach(function(w){b.push({file:w,errors:[Yr]})}),y.splice(0)),D({acceptedFiles:y,fileRejections:b,type:"setFiles"}),O&&O(y,b,s),b.length>0&&z&&z(b,s),y.length>0&&k&&k(y,s)},[D,l,$,c,o,g,O,k,z,M]),Y=p.useCallback(function(a){a.preventDefault(),a.persist(),G(a),P.current=[],J(a)&&Promise.resolve(i(a)).then(function(s){Q(a)&&!F||U(s,a)}).catch(function(s){return j(s)}),D({type:"reset"})},[i,U,j,F]),S=p.useCallback(function(){if(B.current){D({type:"openDialog"}),oe();var a={multiple:l,types:Oe};window.showOpenFilePicker(a).then(function(s){return i(s)}).then(function(s){U(s,null),D({type:"closeDialog"})}).catch(function(s){et(s)?(H(s),D({type:"closeDialog"})):rt(s)?(B.current=!1,x.current?(x.current.value=null,x.current.click()):j(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):j(s)});return}x.current&&(D({type:"openDialog"}),oe(),x.current.value=null,x.current.click())},[D,oe,H,we,U,j,Oe,l]),Re=p.useCallback(function(a){!h.current||!h.current.isEqualNode(a.target)||(a.key===" "||a.key==="Enter"||a.keyCode===32||a.keyCode===13)&&(a.preventDefault(),S())},[h,S]),Ie=p.useCallback(function(){D({type:"focus"})},[]),ke=p.useCallback(function(){D({type:"blur"})},[]),ze=p.useCallback(function(){Ee||(Jr()?setTimeout(S,0):S())},[Ee,S]),T=function(s){return n?null:s},ae=function(s){return te?null:T(s)},q=function(s){return Ae?null:T(s)},G=function(s){F&&s.stopPropagation()},fr=p.useMemo(function(){return function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=a.refKey,y=s===void 0?"ref":s,b=a.role,w=a.onKeyDown,K=a.onFocus,C=a.onBlur,ce=a.onClick,ue=a.onDragEnter,se=a.onDragOver,V=a.onDragLeave,le=a.onDrop,fe=Z(a,ot);return m(m(be({onKeyDown:ae(A(w,Re)),onFocus:ae(A(K,Ie)),onBlur:ae(A(C,ke)),onClick:T(A(ce,ze)),onDragEnter:q(A(ue,Se)),onDragOver:q(A(se,Te)),onDragLeave:q(A(V,Ce)),onDrop:q(A(le,Y)),role:typeof b=="string"&&b!==""?b:"presentation"},y,h),!n&&!te?{tabIndex:0}:{}),fe)}},[h,Re,Ie,ke,ze,Se,Te,Ce,Y,te,Ae,n]),pr=p.useCallback(function(a){a.stopPropagation()},[]),dr=p.useMemo(function(){return function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=a.refKey,y=s===void 0?"ref":s,b=a.onChange,w=a.onClick,K=Z(a,it),C=be({accept:$,multiple:l,type:"file",style:{display:"none"},onChange:T(A(b,Y)),onClick:T(A(w,pr)),tabIndex:-1},y,x);return m(m({},C),K)}},[x,t,l,Y,n]);return m(m({},ie),{},{isFocused:lr&&!n,getRootProps:fr,getInputProps:dr,rootRef:h,inputRef:x,open:T(S)})}function gt(e,r){switch(r.type){case"focus":return m(m({},e),{},{isFocused:!0});case"blur":return m(m({},e),{},{isFocused:!1});case"openDialog":return m(m({},he),{},{isFileDialogActive:!0});case"closeDialog":return m(m({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return m(m({},e),{},{isDragActive:r.isDragActive,isDragAccept:r.isDragAccept,isDragReject:r.isDragReject});case"setFiles":return m(m({},e),{},{acceptedFiles:r.acceptedFiles,fileRejections:r.fileRejections});case"reset":return m({},he);default:return e}}function Ge(){}function yt({dragText:e="Suelta las imagenes aquí...",inputText:r="Arrastre y suelte algunos archivos aquí o haga clic para seleccionar archivos",uploadImages:t,removeImage:n,images:i=[],errors:o,isDisabled:c=!1}){const{getRootProps:l,getInputProps:g,isDragActive:u}=ur({onDrop:t,accept:{"image/jpeg":[".jpeg",".jpg"],"image/png":[".png"]},maxFiles:5,maxSize:5242880,disabled:!(i.length<5)});return E.jsxs(E.Fragment,{children:[E.jsxs("div",{...l(),className:`${u&&"border-indigo-500 bg-indigo-50"}
                    w-full flex flex-col gap-4 p-5 border-dashed border-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 items-center justify-center cursor-pointer`,children:[E.jsx("input",{...g()}),u?E.jsx("p",{className:"font-medium text-sm text-indigo-700",children:e}):E.jsx("p",{className:"font-medium text-xs text-gray-600",children:r}),E.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-4",children:i.map((f,v)=>E.jsxs("div",{className:"relative",children:[E.jsx("img",{src:(f==null?void 0:f.url)||URL.createObjectURL(f),alt:"Uploaded Preview",className:"w-28 h-28 object-cover rounded-lg"}),E.jsx("button",{type:"button",onClick:O=>{O.stopPropagation(),n((f==null?void 0:f.name)||(f==null?void 0:f.id))},className:"absolute top-1 right-1 w-6 h-6 bg-red-500 text-white p-1 rounded-full text-xs focus:outline-none hover:bg-red-600",children:"X"})]},v))})]}),o&&E.jsx("p",{className:"text-sm text-red-500",children:o.message})]})}export{yt as D};
