(this.webpackJsonpreact_recipe_app=this.webpackJsonpreact_recipe_app||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),i=c.n(a),r=c(6),s=c.n(r),o=(c(13),c(4)),l=c.n(o),p=c(7),u=c(3),d=c(2),j=c.n(d),h=function(e){var t=e.title,c=e.calories,a=e.image,i=e.ingredients;return Object(n.jsxs)("div",{className:j.a.recipe,children:[Object(n.jsx)("h1",{className:j.a.title,children:t}),Object(n.jsx)("img",{className:j.a.image,src:a,alt:""}),Object(n.jsx)("ol",{className:j.a.ingredients,children:i.map((function(e){return Object(n.jsx)("li",{children:e.text})}))}),Object(n.jsxs)("p",{children:["Calories: ",c]})]})},m=(c(15),function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),c=t[0],i=t[1],r=Object(a.useState)(""),s=Object(u.a)(r,2),o=s[0],d=s[1],j=Object(a.useState)("vegetarian"),m=Object(u.a)(j,2),b=m[0],f=m[1];Object(a.useEffect)((function(){O()}),[b]);var O=function(){var e=Object(p.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(b,"&app_id=").concat("5d6b459f","&app_key=").concat("fe9cfd9aa805ebddf4681c57fb2c8eaf"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,i(c.hits),console.log(c.hits);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("h1",{className:"title",children:"Find ingredients of your favorite dish"}),Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),f(o),d("")},className:"search-form",children:[Object(n.jsx)("input",{className:"search-bar",type:"text",value:o,onChange:function(e){d(e.target.value)}}),Object(n.jsx)("button",{className:"search-button",type:"submit",children:"Search"})]}),Object(n.jsx)("div",{className:"recipes",children:c.map((function(e){return Object(n.jsx)(h,{title:e.recipe.label,calories:e.recipe.calories.toFixed(),image:e.recipe.image,ingredients:e.recipe.ingredients},e.recipe.label)}))})]})});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(m,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},2:function(e,t,c){e.exports={recipe:"recipe_recipe__2Q8SA",image:"recipe_image__hks-O",title:"recipe_title__1m_2d",ingredients:"recipe_ingredients__23mEU"}}},[[16,1,2]]]);
//# sourceMappingURL=main.3b050c52.chunk.js.map