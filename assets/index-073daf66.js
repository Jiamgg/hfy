import{_ as L,r as g,a as i,o as y,c as U,b as o,w as n,e as u,x as D,z as M,F as G,g as N,h as $,t as z,d as c,H as h,E as R,p as q,l as H,A as P}from"./index-365a55f3.js";import{r as J}from"./index-47b51506.js";const x=m=>(q("data-v-a681fdaf"),m=m(),H(),m),K={class:"common-layout"},Q=x(()=>c("h2",null,"摄像头",-1)),W=x(()=>c("h3",null,"选定图片区",-1)),X={ref:"canvas",width:"640",height:"480"},Y=x(()=>c("h3",null,"拍摄区",-1)),Z={ref:"video",width:"640",height:"480",autoplay:""},ee={__name:"Camera",setup(m){const f=g([]),d=g(!1),k=g(!0),w=g(""),{proxy:s}=P(),I=()=>{navigator.mediaDevices.getUserMedia({video:!0}).then(t=>{s.$refs.video.srcObject=t,s.$refs.video.play(),d.value=!0}).catch(t=>{h({message:"摄像头开启失败，请检查是否开启权限",type:"warning"})})},O=async()=>{try{const t=await navigator.mediaDevices.getUserMedia({video:!0});if(w.value=t.id,t){s.$refs.canvas.getContext("2d").drawImage(s.$refs.video,0,0,640,480);let a=s.$refs.canvas.toDataURL("image/jpeg",.7),l=V(a,"摄像头拍摄"),r=new FormData;r.append("files",l),r.append("module",113),J("post","http://localhost:81/dev-api/common/uploadMore",r)}}catch(t){h({message:"摄像头开启失败，请检查是否开启权限",type:"warning"});const e=navigator.userAgent;e.indexOf("Chrome")>-1?console.log("chrome://settings/content/camera"):e.indexOf("Firefox")>-1?console.log("firefox://settings/content/camera"):e.indexOf("Safari")>-1?console.log("safari://settings/content/camera"):e.indexOf("Opera")>-1?console.log("opera://settings/content/camera"):e.indexOf("Edge")>-1?console.log("edge://settings/content/camera"):console.log("无法识别的浏览器")}},j=()=>{w.value?R.prompt("请输入此文件的名字","Tip",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(({value:t})=>{let e=document.createElement("a");e.href=s.$refs.canvas.toDataURL("image/jpg",.7),e.download=t+".jpeg",e.click(),h({type:"success",message:"下载成功"})}):h({message:"请进行拍照后再尝试下载",type:"warning"})},B=()=>{if(!s.$refs.video.srcObject)return;s.$refs.video.srcObject.getTracks().forEach(a=>{a.stop(),d.value=!1}),s.$refs.video.srcObject=null},C=()=>{navigator.mediaDevices.enumerateDevices().then(t=>{f.value=[],t.forEach(e=>{e.kind=="videoinput"&&f.value.push({label:e.label,id:e.deviceId})})}).catch(function(t){console.log(t)})},E=t=>{const e={};t===""?e.facingMode="environment":(e.deviceId={exact:t},d.value=!0);var a={video:e};A(a)},A=(t,e,a)=>{navigator.mediaDevices.getUserMedia?navigator.mediaDevices.getUserMedia(t).then(l=>{s.$refs.video.srcObject=l,s.$refs.video.play()}).catch(a):navigator.webkitGetUserMedia?navigator.webkitGetUserMedia(t,e,a):navigator.mozGetUserMedia?navigator.mozGetUserMedia(t,e,a):navigator.getUserMedia&&navigator.getUserMedia(t,e,a)},V=(t,e)=>{let a=t.split(","),l=a[0].match(/:(.*?);/)[1],r=atob(a[1]),_=r.length,v=new Uint8Array(_);for(;_--;)v[_]=r.charCodeAt(_);return new File([v],e,{type:l})};return C(),(t,e)=>{const a=i("el-header"),l=i("el-button"),r=i("el-divider"),_=i("el-link"),v=i("el-tooltip"),F=i("el-aside"),S=i("el-main"),b=i("el-container"),T=i("el-dialog");return y(),U("div",K,[o(T,{width:"80%",modelValue:k.value,"onUpdate:modelValue":e[0]||(e[0]=p=>k.value=p),title:"Tips","lock-scroll":""},{default:n(()=>[o(b,null,{default:n(()=>[o(a,null,{default:n(()=>[Q]),_:1}),o(b,null,{default:n(()=>[o(F,{width:"200px"},{default:n(()=>[o(l,{onClick:I,type:"primary",plain:""},{default:n(()=>[u("开启摄像头")]),_:1}),o(l,{onClick:C,type:"primary",plain:"",disabled:""},{default:n(()=>[u("切换摄像头")]),_:1}),o(l,{onClick:B,type:"primary",plain:""},{default:n(()=>[u("关闭摄像头")]),_:1}),D(o(l,{type:"primary",onClick:O,plain:""},{default:n(()=>[u("拍照")]),_:1},512),[[M,d.value]]),D(o(l,{type:"primary",onClick:j,plain:""},{default:n(()=>[u("下载")]),_:1},512),[[M,d.value]]),o(r),(y(!0),U(G,null,N(f.value,p=>(y(),$(v,{class:"box-item",effect:"dark",content:p.label,placement:"right-end",key:p.id},{default:n(()=>[o(_,{onClick:ae=>E(p.id),underline:!1,class:"ovhd"},{default:n(()=>[u(z(p.label),1)]),_:2},1032,["onClick"])]),_:2},1032,["content"]))),128))]),_:1}),o(S,null,{default:n(()=>[c("div",null,[W,c("canvas",X,null,512)]),c("div",null,[Y,c("video",Z,null,512)])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])}}},te=L(ee,[["__scopeId","data-v-a681fdaf"]]),se={__name:"index",setup(m){return(f,d)=>(y(),$(te))}};export{se as default};
