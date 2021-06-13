(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{371:function(e,t,a){"use strict";a.r(t);var s=a(42),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"hooks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hooks"}},[e._v("#")]),e._v(" Hooks")]),e._v(" "),a("p",[e._v("One of the powerful features of Laravel Orion is Hooks. It allows you to tap into the flow inside a particular (or multiple) endpoints without the need to override a method itself.")]),e._v(" "),a("p",[e._v("Here is a common use case: imagine you have an API controller for blog posts and whenever a blog post is created, it needs to be associated with the currently authenticated user. To accomplish that, simply add "),a("code",[e._v("beforeSave")]),e._v(" hook and associate user with the post:")]),e._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[e._v("<?php")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("namespace")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[e._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Controllers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Api")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("use")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[e._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Models"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Post")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("use")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[e._v("Orion"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Requests"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("use")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[e._v("Orion"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Controllers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Controller")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("PostsController")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("extends")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Controller")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * @var string|null $model\n     */")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("protected")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$model")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[e._v("Post")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("::")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * @param Request $request\n     * @param Post $post\n     */")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("protected")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("beforeSave")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[e._v("Request")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$post")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$post")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("user")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("associate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$request")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("user")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])]),a("h2",{attrs:{id:"on-model-controllers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#on-model-controllers"}},[e._v("#")]),e._v(" On model controllers")]),e._v(" "),a("ul",[a("li",[e._v("beforeIndex - executed before retrieving the list of models.")]),e._v(" "),a("li",[e._v("afterIndex - executed after retrieveing the list of models, but before building response.")]),e._v(" "),a("li",[e._v("beforeShow - executed before retrieving a model.")]),e._v(" "),a("li",[e._v("afterShow - executed after retrieving a model, but before building response.")]),e._v(" "),a("li",[e._v("beforeStore - executed before creating a new model instance and filling out attributes.")]),e._v(" "),a("li",[e._v("afterStore - executed after storing a model, but before building response.")]),e._v(" "),a("li",[e._v("beforeUpdate - executed before retrieving a model and filling out attributes.")]),e._v(" "),a("li",[e._v("afterUpdate - executed after updating a model, but before building response.")]),e._v(" "),a("li",[e._v("beforeSave - executed before model is saved, but after "),a("code",[e._v("beforeStore")]),e._v(" and "),a("code",[e._v("beforeUpdate")]),e._v(".")]),e._v(" "),a("li",[e._v("afterSave - executed after model is saved, but before "),a("code",[e._v("afterStore")]),e._v(" and "),a("code",[e._v("afterUpdate")]),e._v(".")]),e._v(" "),a("li",[e._v("beforeDestroy - executed before retrieving a model and deleting it.")]),e._v(" "),a("li",[e._v("afterDestroy - executed after deleting a model, but before building response.")]),e._v(" "),a("li",[e._v("beforeRestore - executed before retrieving a model and restoring it.")]),e._v(" "),a("li",[e._v("afterRestore - executed after restoring a model, but before building response.")])]),e._v(" "),a("p",[a("strong",[e._v("Batch hooks:")])]),e._v(" "),a("ul",[a("li",[e._v("beforeBatchStore - executed before creating new models.")]),e._v(" "),a("li",[e._v("afterBatchStore - executed after storing new models, but before building response.")]),e._v(" "),a("li",[e._v("beforeBatchUpdate - executed before retrieving models for updating.")]),e._v(" "),a("li",[e._v("afterBatchUpdate - executed after updating the models, but before building response.")]),e._v(" "),a("li",[e._v("beforeBatchDestroy - executed before retrieving models for deleting.")]),e._v(" "),a("li",[e._v("afterBatchDestroy - executed after deleting the models, but before building response.")]),e._v(" "),a("li",[e._v("beforeBatchRestore - executed before retrieving models for restoring.")]),e._v(" "),a("li",[e._v("afterBatchRestore - executed after restoring the models, but before building response.")])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("ATTENTION")]),e._v(" "),a("p",[e._v('Related "before" and "after" hooks (e.g. '),a("code",[e._v("beforeStore")]),e._v(", "),a("code",[e._v("afterStore")]),e._v(") as well as "),a("code",[e._v("beforeSave")]),e._v(" and "),a("code",[e._v("afterSave")]),e._v(" are also executed for each model in batch operations.")])]),e._v(" "),a("h2",{attrs:{id:"on-relationship-controllers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#on-relationship-controllers"}},[e._v("#")]),e._v(" On relationship controllers")]),e._v(" "),a("p",[a("strong",[e._v("All types:")]),e._v(" relation controllers have before and after hooks for CRUD operations - same as model controllers.")]),e._v(" "),a("p",[a("strong",[e._v("One-to-many:")])]),e._v(" "),a("ul",[a("li",[e._v("beforeAssociate - executed after retrieving both models, but before associating a child model.")]),e._v(" "),a("li",[e._v("afterAssociate - executed after saving a relation model with associated child model id, but before building response.")]),e._v(" "),a("li",[e._v("beforeDissociate - executed after retrieving both models, but before dissociating a child model.")]),e._v(" "),a("li",[e._v("afterDissociate - executed after saving a relation model with associated child model id, but before building response.")])]),e._v(" "),a("p",[a("strong",[e._v("Many-to-many:")])]),e._v(" "),a("ul",[a("li",[e._v("beforeSync - executed before retrieving a relation model.")]),e._v(" "),a("li",[e._v("afterSync - executed after syncing related models, but before building response.")]),e._v(" "),a("li",[e._v("beforeToggle - executed before retrieving a relation model.")]),e._v(" "),a("li",[e._v("afterToggle - executed after toggling related models, but before building response.")]),e._v(" "),a("li",[e._v("beforeAttach - executed before retrieving a relation model.")]),e._v(" "),a("li",[e._v("afterAttach - executed after attaching related model(s) to a relation model, but before building response.")]),e._v(" "),a("li",[e._v("beforeDetach - executed before retrieving a relation model.")]),e._v(" "),a("li",[e._v("afterDetach - executed after detaching related model(s) from a relation model, but before building response.")]),e._v(" "),a("li",[e._v("beforeUpdatePivot - executed before retrieving a relation model.")]),e._v(" "),a("li",[e._v("afterUpdatePivot - executed after updating pivot of related model, but before building response.")])])])}),[],!1,null,null,null);t.default=r.exports}}]);