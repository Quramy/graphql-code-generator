(self.webpackChunk_graphql_codegen_website=self.webpackChunk_graphql_codegen_website||[]).push([[9564],{35318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||p;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,i=new Array(p);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<p;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27257:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var a=n(29603),r=n(50120),p=(n(27378),n(35318)),i=["components"],o={id:"typescript-rtk-query",title:"TypeScript RTK-Query"},s={unversionedId:"plugins/typescript-rtk-query",id:"plugins/typescript-rtk-query",isDocsHomePage:!1,title:"TypeScript RTK-Query",description:"{@import ../plugins/client-note.md}",source:"@site/docs/plugins/typescript-rtk-query.md",sourceDirName:"plugins",slug:"/plugins/typescript-rtk-query",permalink:"/docs/plugins/typescript-rtk-query",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/plugins/typescript-rtk-query.md",version:"current",frontMatter:{id:"typescript-rtk-query",title:"TypeScript RTK-Query"},sidebar:"sidebar",previous:{title:"TypeScript Stencil Apollo",permalink:"/docs/plugins/typescript-stencil-apollo"},next:{title:"TypeScript 1.0 Compatibility",permalink:"/docs/plugins/typescript-compatibility"}},l=[{value:"Usage Examples",id:"usage-examples",children:[{value:"Using <code>graphql-request</code>",id:"using-graphql-request",children:[]},{value:"Extending generated code",id:"extending-generated-code",children:[]}]}],c={toc:l};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,p.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("div",{parentName:"p",className:"admonition admonition-caution alert alert--warning"},(0,p.kt)("div",{parentName:"div",className:"admonition-heading"},(0,p.kt)("h5",{parentName:"div"},(0,p.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,p.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,p.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Usage Requirements")),(0,p.kt)("div",{parentName:"div",className:"admonition-content"},(0,p.kt)("p",{parentName:"div"},"In order to use this GraphQL Codegen plugin, please make sure that you have GraphQL operations (",(0,p.kt)("inlineCode",{parentName:"p"},"query")," / ",(0,p.kt)("inlineCode",{parentName:"p"},"mutation")," / ",(0,p.kt)("inlineCode",{parentName:"p"},"subscription")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"fragment"),") set as ",(0,p.kt)("inlineCode",{parentName:"p"},"documents: ...")," in your ",(0,p.kt)("inlineCode",{parentName:"p"},"codegen.yml"),"."),(0,p.kt)("p",{parentName:"div"},"Without loading your GraphQL operations (query, mutation, subscription and fragment), you won't see any change in the generated output.")))),(0,p.kt)("p",null,(0,p.kt)("h2",{parentName:"p"},"Installation"),(0,p.kt)("img",{alt:"typescript-rtk-query plugin version",src:"https://img.shields.io/npm/v/@graphql-codegen/typescript-rtk-query?color=%23e15799&label=plugin\xa0version&style=for-the-badge"}),(0,p.kt)("div",{parentName:"p",className:"admonition admonition-shell"},(0,p.kt)("div",{parentName:"div",className:"admonition-heading"},(0,p.kt)("h5",{parentName:"div"},(0,p.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,p.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"},(0,p.kt)("path",{parentName:"svg",d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"}),(0,p.kt)("path",{parentName:"svg",d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"}))),"Using ",(0,p.kt)("inlineCode",{parentName:"h5"},"yarn"))),(0,p.kt)("div",{parentName:"div",className:"admonition-content"},(0,p.kt)("pre",{parentName:"div"},(0,p.kt)("code",{parentName:"pre"},"yarn add -D @graphql-codegen/typescript-rtk-query\n")))),(0,p.kt)("h2",{parentName:"p"},"API Reference"),(0,p.kt)("h3",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"h3"},"importBaseApiFrom")),(0,p.kt)("p",{parentName:"p"},"type: ",(0,p.kt)("inlineCode",{parentName:"p"},"string")),(0,p.kt)("p",{parentName:"p"},"Define where to import the base api to inject endpoints into"),(0,p.kt)("h4",{parentName:"p"},"Usage Examples"),(0,p.kt)("pre",{parentName:"p"},(0,p.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\n  ./src/app/api/generated.ts:\n    plugins:\n      - typescript\n      - typescript-operations\n      - typescript-rtk-query:\n          importBaseApiFrom: 'src/app/api/baseApi'\n")),(0,p.kt)("h3",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"h3"},"exportHooks")),(0,p.kt)("p",{parentName:"p"},"type: ",(0,p.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,p.kt)("inlineCode",{parentName:"p"},"false")),(0,p.kt)("p",{parentName:"p"},"Whether to export React Hooks from the generated api. Enable only when using the ",(0,p.kt)("inlineCode",{parentName:"p"},'"@reduxjs/toolkit/query/react"')," import of ",(0,p.kt)("inlineCode",{parentName:"p"},"createApi")),(0,p.kt)("h4",{parentName:"p"},"Usage Examples"),(0,p.kt)("pre",{parentName:"p"},(0,p.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\n  ./src/app/api/generated.ts:\n    plugins:\n      - typescript\n      - typescript-operations\n      - typescript-rtk-query:\n          importBaseApiFrom: 'src/app/api/baseApi'\n          exportHooks: true\n")),(0,p.kt)("h3",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"h3"},"overrideExisting")),(0,p.kt)("p",{parentName:"p"},"type: ",(0,p.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,p.kt)("inlineCode",{parentName:"p"},"undefined")),(0,p.kt)("p",{parentName:"p"},"Sets the ",(0,p.kt)("inlineCode",{parentName:"p"},"overrideExisting")," option, for example to allow for hot module reloading when running graphql-codegen in watch mode.\nWill directly be injected as code."),(0,p.kt)("h4",{parentName:"p"},"Usage Examples"),(0,p.kt)("pre",{parentName:"p"},(0,p.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\n  ./src/app/api/generated.ts:\n    plugins:\n      - add:\n          content: 'module.hot?.accept();'\n      - typescript\n      - typescript-operations\n      - typescript-rtk-query:\n          importBaseApiFrom: 'src/app/api/baseApi'\n          overrideExisting: 'module.hot?.status() === \"apply\"'\n"))),(0,p.kt)("h2",{id:"usage-examples"},"Usage Examples"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"Note: this plugin just injects new endpoints into an existing API you created with ",(0,p.kt)("inlineCode",{parentName:"p"},"createApi"),", so\nyou still have to define that - but also have all freedom on how to do that.")),(0,p.kt)("h3",{id:"using-graphql-request"},"Using ",(0,p.kt)("inlineCode",{parentName:"h3"},"graphql-request")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yml"},"schema: MY_SCHEMA_PATH\ndocuments: './src/**/*.graphql'\ngenerates:\n  ./src/app/api/generated.ts:\n    plugins:\n      - typescript\n      - typescript-operations\n      - typescript-rtk-query:\n          importBaseApiFrom: 'src/app/api/baseApi'\n          exportHooks: true\n")),(0,p.kt)("p",null,"The generated ",(0,p.kt)("inlineCode",{parentName:"p"},"src/app/api/generated.ts")," would try to ",(0,p.kt)("inlineCode",{parentName:"p"},"import { api } from 'src/app/api/baseApi'"),", so you have to create that file:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app/api/baseApi.ts"',title:'"src/app/api/baseApi.ts"'},"import { createApi } from '@reduxjs/toolkit/query/react';\nimport { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';\nimport { GraphQLClient } from 'graphql-request';\n\nexport const client = new GraphQLClient('/graphql');\n// highlight-start\nexport const api = createApi({\n  baseQuery: graphqlRequestBaseQuery({ client }),\n  endpoints: () => ({}),\n});\n// highlight-end\n")),(0,p.kt)("p",null,"From that point on, you can import the generated hooks from ",(0,p.kt)("inlineCode",{parentName:"p"},"src/app/api/generated.ts"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/components/MyComponent.ts"',title:'"src/components/MyComponent.ts"'},"import { useMyQuery } from 'src/app/api/generated';\n\nexport const MyComponent = () => {\n  // highlight-start\n  const { data, isLoading } = useMyQuery({ page: 5 });\n  // highlight-end\n};\n")),(0,p.kt)("h3",{id:"extending-generated-code"},"Extending generated code"),(0,p.kt)("p",null,"You can import the generated code into a new file and use ",(0,p.kt)("inlineCode",{parentName:"p"},"api.enhanceEndpoints")," to add lifecycle hooks or ",(0,p.kt)("inlineCode",{parentName:"p"},"providesTags"),"/",(0,p.kt)("inlineCode",{parentName:"p"},"invalidatedTags")," information to your api:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app/api/enhanced.ts"',title:'"src/app/api/enhanced.ts"'},"import { api as generatedApi } from 'src/app/api/generated';\n\nexport const api = generatedApi.enhanceEndpoints({\n  addTagTypes: ['User'],\n  endpoints: {\n    GetUserById: {\n      providesTags: (result, error, arg) => [{ type: 'User', id: arg.userId }],\n    },\n  },\n});\n\nexport const { useGetUserByIdQuery } = api;\n")),(0,p.kt)("p",null,"Make sure that this file is referenced from your code so that the enhanced endpoints are usable. The easiest way to do this is to re-export the hooks in this file and import them exclusively from it."),(0,p.kt)("h4",{id:"setting-an-authentication-header-after-a-mutation"},"Setting an authentication header after a Mutation"),(0,p.kt)("p",null,'You can also use this to set an "authentication" header after a login mutation:'),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"import { api as generatedApi } from 'src/app/api/generated';\nimport { client } from 'src/app/api/baseApi';\n\nexport const api = generatedApi.enhanceEndpoints({\n  endpoints: {\n    Login: {\n      // highlight-start\n      async onQueryStarted(arg, { queryFulfilled }) {\n        const { data } = await queryFulfilled;\n        client.setHeader('authentication', `Bearer ${data.token}`);\n      },\n      // highlight-end\n    },\n  },\n});\n\nexport const { useLoginMutation } = api;\n")))}d.isMDXComponent=!0}}]);