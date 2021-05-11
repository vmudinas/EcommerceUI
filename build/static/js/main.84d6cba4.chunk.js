(this["webpackJsonpwelcomedev-react-starter"]=this["webpackJsonpwelcomedev-react-starter"]||[]).push([[0],{112:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(9),i=n.n(r),s=(n(84),n(85),n(71)),o=n(11),u=n(34),d=n.n(u),j=n(42),l=n(23),b=n(65),p=n(66),g=n(52),h=n.n(g),O=function(){function e(){Object(b.a)(this,e),h.a.defaults.baseURL="http://localhost:3005/api"}return Object(p.a)(e,[{key:"GetProducts",value:function(){var e=Object(j.a)(d.a.mark((function e(t,n,a){var c,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h()({url:"/inventory",headers:{"Content-Type":"application/x-www-form-urlencoded"},params:{f:a,pageNumber:t,pageSize:n}});case 2:return c=e.sent,r=JSON.parse(c.headers.pagination),console.log("asd"),console.log(c.data),e.abrupt("return",{data:c.data,pagination:r});case 7:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}()}]),e}(),x=n(152),f=n(154),m=n(155),v=n(156),P=n(157),S=n(160),w=n(161),I=n(162),y=n(163),N=n(164),C=n(166),D=(n(48),n(6)),z={productPagination:{pageNumber:1,pageSize:10},changeProductPageNumber:function(){},changeProductPageSize:function(){}};var E=Object(a.createContext)(z),F=n(149),k=n(167),T=Object(F.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200}}})),L=[{id:"productId",alignment:"left",label:"Product ID"},{id:"productName",alignment:"left",label:"Product Name"},{id:"inventoryQuantity",alignment:"left",label:"Inventory Quantitty"},{id:"expectedShipDate",alignment:"left",label:"Expectect Ship Date"}],Q=function(){var e=Object(a.useState)(1),t=Object(l.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(),s=Object(l.a)(i,2),o=s[0],u=s[1],b=Object(a.useContext)(E),p=b.productPagination,g=b.changeProductPageSize,h=b.changeProductPageNumber,z=p.pageNumber,F=p.pageSize,Q=c.a.useState(""),J=Object(l.a)(Q,2),R=J[0],B=J[1],G=T(),A=Object(a.useState)(!1),M=Object(l.a)(A,2),U=M[0],V=M[1],W=Object(a.useState)(!1),q=Object(l.a)(W,2),H=q[0],K=q[1],X=Object(a.useState)(!1),Y=Object(l.a)(X,2),Z=Y[0],$=Y[1];function _(){Object(j.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new O,e.next=3,t.GetProducts(z,F,R);case 3:n=e.sent,u(n.data),r(n.pagination.totalItems);case 6:case"end":return e.stop()}}),e)})))()}Object(a.useEffect)((function(){_()}),[z,p.pageSize,u,r]),Object(a.useEffect)((function(){_(),V(!1)}),[U]),Object(a.useEffect)((function(){_(),K(!1)}),[H]),Object(a.useEffect)((function(){_(),$(!1)}),[Z]);return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(x.a,{}),Object(D.jsx)("br",{}),Object(D.jsxs)(f.a,{container:!0,spacing:1,children:[Object(D.jsx)(f.a,{container:!0,item:!0,xs:3,spacing:3}),Object(D.jsxs)(f.a,{item:!0,xs:6,children:[Object(D.jsx)(x.a,{}),Object(D.jsx)(f.a,{container:!0,spacing:6,children:Object(D.jsx)(f.a,{item:!0,xs:12,children:Object(D.jsx)("div",{children:Object(D.jsxs)(m.a,{children:[Object(D.jsx)(v.a,{children:Object(D.jsxs)(f.a,{container:!0,spacing:6,children:[Object(D.jsx)(f.a,{item:!0,xs:8,children:Object(D.jsx)(P.a,{variant:"h6",id:"tableTitle",children:"Products"})}),Object(D.jsx)(f.a,{item:!0,xs:4,children:Object(D.jsx)(P.a,{variant:"h6",id:"tableTitle",children:Object(D.jsx)(k.a,{id:"date",label:"Order Date",type:"date",defaultValue:(new Date).toISOString().split("T")[0],onChange:function(e){console.log("handleDateChange"),console.log(e.target.value),B(e.target.value.toString()),$(!0)},className:G.textField,InputLabelProps:{shrink:!0}})})})]})}),Object(D.jsx)(S.a,{children:Object(D.jsxs)(w.a,{size:"medium",children:[Object(D.jsx)(I.a,{children:Object(D.jsx)(y.a,{children:L.map((function(e){return Object(D.jsx)(N.a,{align:e.alignment,children:e.label},e.id)}))})}),Object(D.jsx)(I.a,{children:o&&o.length&&o.map((function(e){return Object(D.jsxs)(y.a,{children:[Object(D.jsx)(N.a,{children:e.productId},e.productId),Object(D.jsx)(N.a,{children:e.productName},e.productId+"Name"),Object(D.jsx)(N.a,{children:e.inventoryQuantity},e.productId+"InventoryQuantity"),Object(D.jsx)(N.a,{children:e.expectedShipDate},e.productId+"ExpectedShipDate")]})}))})]})}),o&&o.length&&Object(D.jsx)(C.a,{count:n||1,onChangePage:function(e,t){p.pageNumber=t+1,h(t+1),V(!0)},page:z?z-1:0,rowsPerPage:F,rowsPerPageOptions:[1,5,10,25],component:"div",onChangeRowsPerPage:function(e){p.pageSize=parseInt(e.target.value),g(parseInt(e.target.value)),h(z),K(!0)}})]})})})})]})]})]})};var J=function(){return Object(D.jsx)("div",{className:"App",children:Object(D.jsx)("div",{className:"wrapper",children:Object(D.jsx)(s.a,{children:Object(D.jsx)(o.c,{children:Object(D.jsx)(o.a,{path:"/",children:Object(D.jsx)(Q,{})})})})})})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,169)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(D.jsx)(c.a.StrictMode,{children:Object(D.jsx)(J,{})}),document.getElementById("root")),R()},84:function(e,t,n){},85:function(e,t,n){}},[[112,1,2]]]);
//# sourceMappingURL=main.84d6cba4.chunk.js.map