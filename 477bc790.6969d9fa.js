(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var o=n(2),a=n(6),r=(n(0),n(92)),s={title:"RPC nodes",author:"Roxane Letourneau"},c={unversionedId:"rpc_nodes_integration_test",id:"rpc_nodes_integration_test",isDocsHomePage:!1,title:"RPC nodes",description:"Steps to run the tests",source:"@site/../docs/rpc_nodes_integration_test.md",slug:"/rpc_nodes_integration_test",permalink:"/docs/rpc_nodes_integration_test",version:"current",sidebar:"docs",previous:{title:"Ledger",permalink:"/docs/ledger_integration_test"},next:{title:"Upgrading version 7",permalink:"/docs/v7_breaking_changes"}},i=[{value:"Steps to run the tests",id:"steps-to-run-the-tests",children:[]}],l={rightToc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"steps-to-run-the-tests"},"Steps to run the tests"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"The RPC nodes' integration tests are disabled by default.",Object(r.b)("br",{parentName:"li"}),"Remove ",Object(r.b)("inlineCode",{parentName:"li"},"./rpc-nodes.spec.ts")," from ",Object(r.b)("inlineCode",{parentName:"li"},'"testPathIgnorePatterns"')," in the package.json."),Object(r.b)("li",{parentName:"ol"},"In the integration test folder, run one of the following commands: ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Carthagenet"),": ",Object(r.b)("inlineCode",{parentName:"li"},"npm run test:carthagenet rpc-nodes.spec.ts")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Delphinet"),": ",Object(r.b)("inlineCode",{parentName:"li"},"npm run test:delphinet rpc-nodes.spec.ts")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Both protocols"),": ",Object(r.b)("inlineCode",{parentName:"li"},"npm run test rpc-nodes.spec.ts"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"When all endpoints are accessible for a node, you will obtain :")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"Test calling all methods from RPC node: https://a-node\n    \u2713 Get the head block hash (1376 ms)\n    \u2713 List the ancestors of the head block (1010 ms)\n    \u2713 Access the balance of an address (1024 ms)\n    \u2713 Access the data of a contract (1022 ms)\n    \u2713 Access the code and data of a contract (1096 ms)\n    \u2713 Access the complete status of a contract (1057 ms)\n    \u2713 Access the manager key of a contract (1023 ms)\n    \u2713 Access the delegate of a contract (1023 ms)\n    \u2713 Access the value associated with a key in a big map (3927 ms)\n    \u2713 Fetches information about a delegate from RPC (1590 ms)\n    \u2713 Get all constants from RPC (938 ms)\n    \u2713 Get all the information about a block (1021 ms)\n    \u2713 Get the whole block header (1125 ms)\n    \u2713 Get all the metadata associated to the block (918 ms)\n    \u2713 Retrieves the list of delegates allowed to bake a block (912 ms)\n    \u2713 Retrieves the list of delegates allowed to endorse a block (971 ms)\n    \u2713 Get ballots casted so far during a voting period (1059 ms)\n    \u2713 Get sum of ballots casted so far during a voting period (904 ms)\n    \u2713 Get current period kind (907 ms)\n    \u2713 Get current proposal under evaluation (986 ms)\n    \u2713 Get current expected quorum (920 ms)\n    \u2713 List of delegates with their voting weight, in number of rolls (923 ms)\n    \u2713 List of proposals with number of supporters (1023 ms)\n    \u2713 Forge an operation returning the unsigned bytes (1026 ms)\n    \u2713 Inject an operation in node and broadcast it (1127 ms)\n    \u2713 Simulate the validation of an operation (1022 ms)\n    \u2713 Get the list of entrypoints of the contract (1023 ms)\n    \u2713 Get chain ID (896 ms)\n    \u2713 Run an operation without signature checks (948 ms)\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Otherwise, you will see which endpoints do not work for a specific node:"),"  "),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"Test calling all methods from RPC node: https://another-node\n    \u2713 Get the head block hash (888 ms)\n    \u2713 List the ancestors of the head block (782 ms)\n    \u2713 Access the balance of an address (779 ms)\n    \u2713 Access the data of a contract (636 ms)\n    \u2713 Access the code and data of a contract (801 ms)\n    \u2713 Access the complete status of a contract (638 ms)\n    \u2713 Access the manager key of a contract (771 ms)\n    \u2713 Access the delegate of a contract (682 ms)\n    \u2713 Access the value associated with a key in a big map (4200 ms)\n    \u2713 Fetches information about a delegate from RPC (739 ms)\n    \u2713 Get all constants from RPC (633 ms)\n    \u2713 Get all the information about a block (673 ms)\n    \u2713 Get the whole block header (648 ms)\n    \u2713 Get all the metadata associated to the block (646 ms)\n    \u2713 Retrieves the list of delegates allowed to bake a block (814 ms)\n    \u2713 Retrieves the list of delegates allowed to endorse a block (649 ms)\n    \u2715 Get ballots casted so far during a voting period (634 ms)\n    \u2715 Get sum of ballots casted so far during a voting period (707 ms)\n    \u2715 Get current period kind (766 ms)\n    \u2715 Get current proposal under evaluation (654 ms)\n    \u2715 Get current expected quorum (639 ms)\n    \u2715 List of delegates with their voting weight, in number of rolls (630 ms)\n    \u2715 List of proposals with number of supporters (699 ms)\n    \u2713 Forge an operation returning the unsigned bytes (641 ms)\n    \u2713 Inject an operation in node and broadcast it (655 ms)\n    \u2713 Simulate the validation of an operation (653 ms)\n    \u2713 Get the list of entrypoints of the contract (625 ms)\n    \u2713 Get chain ID (636 ms)\n    \u2713 Run an operation without signature checks (626 ms)\n")))}p.isMDXComponent=!0},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(n),u=o,b=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return n?a.a.createElement(b,c(c({ref:t},l),{},{components:n})):a.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var l=2;l<r;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);