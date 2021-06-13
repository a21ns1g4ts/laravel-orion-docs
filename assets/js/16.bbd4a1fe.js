(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{362:function(t,s,a){"use strict";a.r(s);var e=a(42),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"security"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#security"}},[t._v("#")]),t._v(" Security")]),t._v(" "),a("h2",{attrs:{id:"authentication"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authentication"}},[t._v("#")]),t._v(" Authentication")]),t._v(" "),a("p",[t._v("Laravel Orion does not provide any authentication perks at the moment, assuming that developer is responsible for setting up the desired app's authentication capabilities. Hovewer, we recommend using "),a("a",{attrs:{href:"https://github.com/laravel/passport",target:"_blank",rel:"noopener noreferrer"}},[t._v("Laravel Passport"),a("OutboundLink")],1),t._v(" or "),a("a",{attrs:{href:"https://github.com/laravel/sanctum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Laravel Sanctum"),a("OutboundLink")],1),t._v(" for this purpose.")]),t._v(" "),a("h2",{attrs:{id:"authorization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authorization"}},[t._v("#")]),t._v(" Authorization")]),t._v(" "),a("p",[t._v("Both "),a("RouterLink",{attrs:{to:"/v1.x/guide/models.html"}},[t._v("model")]),t._v(" and "),a("RouterLink",{attrs:{to:"/v1.x/guide/relationships.html"}},[t._v("relation")]),t._v(" controllers rely on "),a("a",{attrs:{href:"https://laravel.com/docs/master/authorization#creating-policies",target:"_blank",rel:"noopener noreferrer"}},[t._v("model policies"),a("OutboundLink")],1),t._v(" to determine whether currently authenticated user is allowed to perform certain actions or not.")],1),t._v(" "),a("p",[t._v("While it is not recommended, but in some situations you may want to disable authorization checks on a particular controller. To do so, you can use "),a("code",[t._v("Orion\\Concerns\\DisableAuthorization")]),t._v(" trait.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Controllers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Api")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Models"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Post")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Orion"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Concerns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("DisableAuthorization")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PostsController")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ApiController")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("DisableAuthorization")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * @var string $model\n     */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$model")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Post")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"usage-with-sanctum-or-any-other-custom-auth-guard"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-with-sanctum-or-any-other-custom-auth-guard"}},[t._v("#")]),t._v(" Usage with Sanctum (or any other custom Auth guard)")]),t._v(" "),a("p",[t._v("By default, "),a("code",[t._v("api")]),t._v(" guard is used to resolve the currently authenticated user for authorization.")]),t._v(" "),a("p",[t._v("However, you can change the way the user is resolved by overriding "),a("code",[t._v("resolveUser")]),t._v(" method on a controller.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Controllers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Api")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Models"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Post")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PostsController")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ApiController")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * @var string $model\n     */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$model")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Post")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * Retrieves currently authenticated user based on the guard.\n     *\n     * @return \\Illuminate\\Contracts\\Auth\\Authenticatable|null\n     */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolveUser")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Auth")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("guard")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'sanctum'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("user")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"validation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validation"}},[t._v("#")]),t._v(" Validation")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("ATTENTION")]),t._v(" "),a("p",[t._v("Request classes "),a("strong",[t._v("must")]),t._v(" extend "),a("code",[t._v("Orion\\Http\\Requests\\Request")]),t._v(" class instead of "),a("code",[t._v("Illuminate\\Foundation\\Http\\FormRequest")]),t._v(".")])]),t._v(" "),a("p",[t._v("To validate incoming requests data to "),a("code",[t._v("store")]),t._v(" and "),a("code",[t._v("update")]),t._v(" endpoints, Laravel Orion will try to find "),a("a",{attrs:{href:"https://laravel.com/docs/master/validation#form-request-validation",target:"_blank",rel:"noopener noreferrer"}},[t._v("request class"),a("OutboundLink")],1),t._v(" for resource model following the class name pattern:\n"),a("code",[t._v("App\\Http\\Requests\\<model>Request")]),t._v(".")]),t._v(" "),a("p",[t._v("For example, if you have "),a("code",[t._v("App\\Models\\Message")]),t._v(" model, the related request class would be "),a("code",[t._v("App\\Http\\Requests\\MessageRequest")]),t._v(".")]),t._v(" "),a("p",[t._v("If request class names in your app do not follow this naming convention or if you just would like to be more explicit, set "),a("code",[t._v("protected $request")]),t._v(" property on controller to a fully-qualified request class name.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Controllers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Api")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Models"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Message")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Requests"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("CustomMessageRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MessagesController")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ApiController")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * @var string $model\n     */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$model")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Message")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n    * @var string $request\n    */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("CustomMessageRequest")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("The request class is then binded using Laravel "),a("a",{attrs:{href:"https://laravel.com/docs/master/container",target:"_blank",rel:"noopener noreferrer"}},[t._v("Service Container"),a("OutboundLink")],1),t._v(" and used in "),a("code",[t._v("store")]),t._v(" and "),a("code",[t._v("update")]),t._v(" methods to validate request data the same way as if you would explicitly set it in method signature:")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("store")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[t._v("CustomMessageRequest")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"validation-rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validation-rules"}},[t._v("#")]),t._v(" Validation rules")]),t._v(" "),a("h4",{attrs:{id:"defining-rules-for-store-and-update-endpoints"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#defining-rules-for-store-and-update-endpoints"}},[t._v("#")]),t._v(" Defining rules for "),a("code",[t._v("store")]),t._v(" and "),a("code",[t._v("update")]),t._v(" endpoints")]),t._v(" "),a("p",[t._v("Laravel Orion provides "),a("code",[t._v("Orion\\Http\\Requests\\Request")]),t._v(" class with a handful of methods to specify validation rules.")]),t._v(" "),a("p",[t._v("To define common rules for both "),a("code",[t._v("store")]),t._v(" and "),a("code",[t._v("update")]),t._v(" endpoints you can use "),a("code",[t._v("commonRules")]),t._v(" method.\nIf you would like to define rules specific to endpoint you can use "),a("code",[t._v("storeRules")]),t._v(" and "),a("code",[t._v("updateRules")]),t._v(" methods.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("ATTENTION")]),t._v(" "),a("p",[t._v("Rules specified in "),a("code",[t._v("storeRules")]),t._v(" and "),a("code",[t._v("updateRules")]),t._v(" methods are merged with rules from "),a("code",[t._v("commonRules")]),t._v(" method.")])]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Requests")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Orion"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Requests"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PostRequest")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Request")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("commonRules")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword return-type"}},[t._v("array")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'title'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'required'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("storeRules")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword return-type"}},[t._v("array")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'status'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'required|in:draft,review'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),a("p",[t._v("In this example, when request is made to "),a("code",[t._v("store")]),t._v(" endpoint, both "),a("code",[t._v("title")]),t._v(" and "),a("code",[t._v("status")]),t._v(" fields will be required. However, when request method is made to "),a("code",[t._v("update")]),t._v(" endpoint, only "),a("code",[t._v("title")]),t._v(" field would be required, because there is no other rules defined in "),a("code",[t._v("updateRules")]),t._v(" method and "),a("code",[t._v("title")]),t._v(" field is marked as required in the "),a("code",[t._v("commonRules")]),t._v(" method.")]),t._v(" "),a("h4",{attrs:{id:"defining-rules-for-relation-methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#defining-rules-for-relation-methods"}},[t._v("#")]),t._v(" Defining rules for relation methods")]),t._v(" "),a("p",[t._v("You can also define rules for relation specific endpoints: "),a("code",[t._v("associateRules")]),t._v(", "),a("code",[t._v("attachRules")]),t._v(", "),a("code",[t._v("detachRules")]),t._v(", "),a("code",[t._v("syncRules")]),t._v(", "),a("code",[t._v("toggleRules")]),t._v(", "),a("code",[t._v("updatePivotRules")]),t._v(".")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("ATTENTION")]),t._v(" "),a("p",[t._v("Rules specified in these methods are "),a("strong",[t._v("NOT")]),t._v(" merged with rules from "),a("code",[t._v("commonRules")]),t._v(" method.")])]),t._v(" "),a("h4",{attrs:{id:"defining-rules-for-batch-operations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#defining-rules-for-batch-operations"}},[t._v("#")]),t._v(" Defining rules for batch operations")]),t._v(" "),a("p",[t._v("You can also define rules for batch endpoints: "),a("code",[t._v("batchStore")]),t._v(", "),a("code",[t._v("batchUpdate")]),t._v(".")])])}),[],!1,null,null,null);s.default=n.exports}}]);