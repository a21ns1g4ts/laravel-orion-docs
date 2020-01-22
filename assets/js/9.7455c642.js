(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{209:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"query-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters"}},[t._v("#")]),t._v(" Query Parameters")]),t._v(" "),s("p",[t._v("Laravel Orion allows consumers of your API to use query parameters for working with soft deletable models and including other related resources (defined as relations on a particular model) together in response.")]),t._v(" "),s("p",[t._v("But first, allowed set of relations to be used in query parameters needs to be defined in controller.")]),t._v(" "),s("h2",{attrs:{id:"including-relations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#including-relations"}},[t._v("#")]),t._v(" Including Relations")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Controllers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("API")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Orion"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Controllers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Controller")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PostsController")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Controller")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n    * The relations that are allowed to be included together with a resource.\n    *\n    * @return array\n    */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("includes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'user'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'meta'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Sometimes you may want to include relationships together with the returned resources. To do that, url needs to contain "),s("code",[t._v("include")]),t._v(" query parameter with a comma separated list of relations.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GET"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" https://myapp.com/api/posts?include"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("user,meta\n")])])]),s("h2",{attrs:{id:"soft-deletes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#soft-deletes"}},[t._v("#")]),t._v(" Soft Deletes")]),t._v(" "),s("h3",{attrs:{id:"returning-trashed-resources"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#returning-trashed-resources"}},[t._v("#")]),t._v(" Returning trashed resources")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("with_trashed")]),t._v(" query parameter allows you to return all resources, even the deleted ones.")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("only_trashed")]),t._v(" query parameters instructs the API to return only soft deleted resources.")]),t._v(" "),s("p",[t._v("These parameters are accepted on "),s("code",[t._v("index")]),t._v(", "),s("code",[t._v("search")]),t._v(", and "),s("code",[t._v("show")]),t._v(" endpoints of both "),s("router-link",{attrs:{to:"/guide/models.html#soft-deletes"}},[t._v("standard")]),t._v(" and "),s("router-link",{attrs:{to:"/guide/relationships.html#soft-deletes"}},[t._v("relation")]),t._v(" resources.")],1),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GET"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" https://myapp.com/api/posts?with_trashed\n")])])]),s("h3",{attrs:{id:"force-deleting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#force-deleting"}},[t._v("#")]),t._v(" Force deleting")]),t._v(" "),s("p",[t._v("The last, but not least, "),s("code",[t._v("force")]),t._v(" query parameter allows you to permanently delete a resource. The parameter is accepted on the "),s("code",[t._v("destroy")]),t._v(" endpoint of both "),s("router-link",{attrs:{to:"/guide/models.html#soft-deletes"}},[t._v("standard")]),t._v(" and "),s("router-link",{attrs:{to:"/guide/relationships.html#soft-deletes"}},[t._v("relation")]),t._v(" resources.")],1),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DELETE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" https://myapp.com/api/posts/5?force\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);