(self.webpackChunkhackatalk_website=self.webpackChunkhackatalk_website||[]).push([[2363],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,h=d["".concat(l,".").concat(f)]||d[f]||s[f]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6986:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return s}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o={id:"integrate-with-backend",title:"Backend \uc5f0\ub3d9",sidebar_label:"Backend \uc5f0\ub3d9"},c=void 0,l={unversionedId:"client/integrate-with-backend",id:"client/integrate-with-backend",isDocsHomePage:!1,title:"Backend \uc5f0\ub3d9",description:"Graphql Client",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/client/integrate-with-backend.md",sourceDirName:"client",slug:"/client/integrate-with-backend",permalink:"/ko/docs/client/integrate-with-backend",editUrl:"https://github.com/dooboolab/hackatalk/tree/master/website/docs/client/integrate-with-backend.md",version:"current",frontMatter:{id:"integrate-with-backend",title:"Backend \uc5f0\ub3d9",sidebar_label:"Backend \uc5f0\ub3d9"},sidebar:"docs",previous:{title:"\ucef4\ud3ec\ub10c\ud2b8",permalink:"/ko/docs/client/components"},next:{title:"\uc0ac\uc6a9\uc790 \uac80\uc0c9",permalink:"/ko/docs/client/search-users"}},u=[{value:"Graphql Client",id:"graphql-client",children:[]}],p={toc:u};function s(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"graphql-client"},"Graphql Client"),(0,i.kt)("p",null,"We are using ",(0,i.kt)("a",{parentName:"p",href:"https://relay.dev"},"Relay")," as our graphql client. Since we are only trying to use ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-intro.html"},"react-hook")," in our project, we're only considering using ",(0,i.kt)("inlineCode",{parentName:"p"},"relay-hook")," either which was in ",(0,i.kt)("a",{parentName:"p",href:"https://relay.dev/docs/en/experimental/a-guided-tour-of-relay"},"relay experimental")," but it is now relased in ",(0,i.kt)("inlineCode",{parentName:"p"},"relay >= 11.+"),". Please do not get confused with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/relay-tools/relay-hooks"},"relay-hooks")," which is a different library."))}s.isMDXComponent=!0}}]);