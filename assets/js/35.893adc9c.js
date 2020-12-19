(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{244:function(e,t,s){"use strict";s.r(t);var a=s(6),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"portability"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#portability"}},[e._v("#")]),e._v(" Portability")]),e._v(" "),s("p",[e._v("With AssemblyScript using a stricter variant of TypeScript's syntax with just a few semantic differences, there comes the opportunity to compile the same code to JavaScript with "),s("code",[e._v("tsc")]),e._v(" and WebAssembly with "),s("code",[e._v("asc")]),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"portable-stdlib"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#portable-stdlib"}},[e._v("#")]),e._v(" Portable Stdlib")]),e._v(" "),s("p",[e._v("Besides the full standard library, AssemblyScript provides a portable variant of the functionality that is present in both JavaScript and WebAssembly. In addition to that, the portable library lifts some of the functionality that is only available with "),s("code",[e._v("asc")]),e._v(" to JavaScript, like the portable conversions mentioned below.")]),e._v(" "),s("p",[e._v("To use the portable library, add the following somewhere along your build step so the portable features are present in the environment")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"assemblyscript/std/portable"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),s("p",[e._v("and extend "),s("code",[e._v("assemblyscript/std/portable.json")]),e._v(" instead of "),s("code",[e._v("assemblyscript/std/assembly.json")]),e._v(" within your "),s("code",[e._v("tsconfig.json")]),e._v(". The AssemblyScript compiler itself is an example of how this can be done.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("The portable standard library is still pretty much a work in progress and we are extending it as we go while working on the compiler. If you need something specific, feel free to improve "),s("a",{attrs:{href:"https://github.com/AssemblyScript/assemblyscript/tree/master/std/portable",target:"_blank",rel:"noopener noreferrer"}},[e._v("its definitions and feature set"),s("OutboundLink")],1),e._v(".")])]),e._v(" "),s("h2",{attrs:{id:"differences"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#differences"}},[e._v("#")]),e._v(" Differences")]),e._v(" "),s("p",[e._v("There are a few semantics differences that must be taken care of.")]),e._v(" "),s("h3",{attrs:{id:"conversions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#conversions"}},[e._v("#")]),e._v(" Conversions")]),e._v(" "),s("p",[e._v("While "),s("code",[e._v("asc")]),e._v(" understands the meaning of")]),e._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// non-portable")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" someFloat"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("f32")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.5")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" someInt"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("i32")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("i32")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("someFloat\n")])])]),s("p",[e._v("and then inserts the correct conversion steps, "),s("code",[e._v("tsc")]),e._v(" does not because all numeric types are just aliases of "),s("code",[e._v("number")]),e._v(". Hence, when targeting JavaScript with "),s("code",[e._v("tsc")]),e._v(", the above will result in")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" someFloat "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.5")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" someInt "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" someFloat\n")])])]),s("p",[e._v("which is obviously wrong. To account for this, portable conversions can be used, resulting in actually portable code. For example")]),e._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// portable")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" someFloat"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("f32")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.5")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" someInt"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("i32")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("i32")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("someFloat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),s("p",[e._v("will essentially result in")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" someFloat "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.5")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" someInt "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" someFloat "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\n")])])]),s("p",[e._v("which is correct. The best way of dealing with this is asking yourself the question: What would this code do when compiled to JavaScript?")]),e._v(" "),s("h3",{attrs:{id:"overflows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overflows"}},[e._v("#")]),e._v(" Overflows")]),e._v(" "),s("p",[e._v("Likewise, again because "),s("code",[e._v("asc")]),e._v(" knows the meaning but "),s("code",[e._v("tsc")]),e._v(" does not, overflows must be handled explicitly:")]),e._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// non-portable")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" someU8"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("u8")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("255")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" someOtherU8"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("u8")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" someU8 "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n")])])]),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// portable")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" someU8"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("u8")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("255")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" someOtherU8"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("u8")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("u8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("someU8 "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),s("p",[e._v("essentially resulting in")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" someU8 "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("255")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" someOtherU8 "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("someU8 "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0xff")]),e._v("\n")])])]),s("h3",{attrs:{id:"api-features"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api-features"}},[e._v("#")]),e._v(" API features")]),e._v(" "),s("p",[e._v("In JavaScript, some parts of the standard library function a little more loosely than how they would when compiling to WebAssembly. While the portable definitions try to take care of this, one example where this can happen is "),s("code",[e._v("Map#get")]),e._v(" returning "),s("code",[e._v("undefined")]),e._v(" when a key cannot be found in JavaScript, while resulting in an abort in WebAssembly, where it is necessary to first check that the key exists using "),s("code",[e._v("Map#has")]),e._v(". The best way of dealing with this is asking yourself the question: What would this code do when compiled to WebAssembly?")]),e._v(" "),s("h2",{attrs:{id:"limitations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#limitations"}},[e._v("#")]),e._v(" Limitations")]),e._v(" "),s("p",[e._v("In JavaScript, all numeric values are IEEE754 doubles that cannot represent the full range of values fitting in a 64-bit integer ("),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER",target:"_blank",rel:"noopener noreferrer"}},[e._v("max. safe integer"),s("OutboundLink")],1),e._v(" is "),s("code",[e._v("2^53 - 1")]),e._v("). Hence "),s("code",[e._v("i64")]),e._v(" and "),s("code",[e._v("u64")]),e._v(" are not portable and not present in "),s("code",[e._v("std/portable")]),e._v(". There are several ways to deal with this. One is to use an i64 polyfill like "),s("a",{attrs:{href:"https://github.com/AssemblyScript/examples/tree/master/i64",target:"_blank",rel:"noopener noreferrer"}},[e._v("in this example"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("Other than that, portable code (JavaScript) does not have a concept of memory, so there are no "),s("code",[e._v("load")]),e._v(" and "),s("code",[e._v("store")]),e._v(" implementations. Technically this can be polyfilled in various ways, but no default is provided since actual implementations are expected to be relatively specific (for instance: the portable compiler accesses Binaryen's memory).")])])}),[],!1,null,null,null);t.default=r.exports}}]);