import{_ as L,q as w,r as c,a as l,o as t,c as s,b as d,w as g,d as e,e as y,t as u,F as x,g as k,h as N,y as P,p as q,l as V}from"./index-d97ca0a3.js";import{r as I}from"./index-36f464b5.js";const f=a=>(q("data-v-447d6d2c"),a=a(),V(),a),b={class:"box"},F=f(()=>e("h2",null,"评论",-1)),$={class:"oneDiv"},E=["src"],G=f(()=>e("span",null,"商品名称：",-1)),R={class:"twoDiv"},T=["src","onClick"],j={key:0},z={__name:"index",setup(a){const p=w(),r=c([]),i=c([]),_=c(""),m=c(),C=()=>{m.value=P.service({lock:!0,text:"Loading"})};return(()=>{C(),I("get",`/Product/GetProductPublic?id=${p.query.id}`).then(n=>{_.value=n.data.Data.Banners[0].ImgSrc,r.value=n.data.Data}),I("get",`/ProductComment/GetProductCommentList?role=20&productid=${p.query.id}`).then(n=>{i.value=n.data.Data,m.value.close()})})(),(n,H)=>{const D=l("el-header"),v=l("el-divider"),S=l("el-empty"),B=l("el-main");return t(),s("div",b,[d(D,null,{default:g(()=>[F]),_:1}),d(B,null,{default:g(()=>[e("div",$,[e("img",{src:_.value,alt:""},null,8,E),d(v,{direction:"vertical"}),e("div",null,[e("p",null,[G,y(" "+u(r.value.Name),1)]),e("div",R,[(t(!0),s(x,null,k(r.value.Banners,o=>(t(),s("img",{src:o.ImgSrc,alt:"",key:o.ID,onClick:h=>_.value=o.ImgSrc},null,8,T))),128))]),i.value.length>=1?(t(),s("ul",j,[(t(!0),s(x,null,k(i.value,(o,h)=>(t(),s("li",{key:o.ID},[e("span",null,"No."+u(h+1),1),y(" "+u(o.Content)+" ",1),d(v)]))),128))])):(t(),N(S,{key:1,description:"暂无评论"}))])])]),_:1})])}}},M=L(z,[["__scopeId","data-v-447d6d2c"]]);export{M as default};
