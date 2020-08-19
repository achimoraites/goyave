(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{401:function(t,e,s){"use strict";s.r(e);var a=s(25),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),s("p",[t._v("This guide will walk you through the installation process. The rest of the guide assumes you are using the template project, as it is the recommended option.")]),t._v(" "),s("h2",{attrs:{id:"requirements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),s("ul",[s("li",[t._v("Go 1.13+")]),t._v(" "),s("li",[t._v("Go modules")])]),t._v(" "),s("h2",{attrs:{id:"template-project"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#template-project"}},[t._v("#")]),t._v(" Template project")]),t._v(" "),s("p",[t._v("You can bootstrap your project using the "),s("strong",[s("a",{attrs:{href:"https://github.com/System-Glitch/goyave-template",target:"_blank",rel:"noopener noreferrer"}},[t._v("Goyave template project"),s("OutboundLink")],1)]),t._v(". This project has a complete directory structure already set up for you.")]),t._v(" "),s("h4",{attrs:{id:"linux-macos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux-macos"}},[t._v("#")]),t._v(" Linux / MacOS")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ curl https://raw.githubusercontent.com/System-Glitch/goyave/master/install.sh | bash -s my-project\n")])])]),s("h4",{attrs:{id:"windows-powershell"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows-powershell"}},[t._v("#")]),t._v(" Windows (Powershell)")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('> & ([scriptblock]::Create((curl "https://raw.githubusercontent.com/System-Glitch/goyave/master/install.ps1").Content)) -projectName my-project\n')])])]),s("hr"),t._v(" "),s("p",[t._v("Run "),s("code",[t._v("go run my-project")]),t._v(" in your project's directory to start the server, then try to request the "),s("code",[t._v("hello")]),t._v(" route.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ curl http://localhost:8080/hello\nHi!\n")])])]),s("p",[t._v("There is also an "),s("code",[t._v("echo")]),t._v(" route, with basic validation of query parameters.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ curl http://localhost:8080/echo?text=abc%20123\nabc 123\n")])])]),s("h2",{attrs:{id:"from-scratch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#from-scratch"}},[t._v("#")]),t._v(" From scratch")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("Installing your project from scratch is not recommended as you will likely not use the same directory structure as the template project. Respecting the standard "),s("RouterLink",{attrs:{to:"/guide/architecture-concepts.html#directory-structure"}},[t._v("directory structure")]),t._v(" is important and helps keeping a consistent environment across the Goyave applications.")],1)]),t._v(" "),s("p",[t._v("If you prefer to setup your project from scratch, for example if you don't plan on using some of the framework's features or if you want to use a different directory structure, you can!")]),t._v(" "),s("p",[t._v("In a terminal, run:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ mkdir myproject && cd myproject\n$ go mod init my-project\n$ go get -u github.com/System-Glitch/goyave/v2\n")])])]),s("p",[t._v("Now that your project directory is set up and the dependencies are installed, let's start with the program entry point, "),s("code",[t._v("kernel.go")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my-project/http/route"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/System-Glitch/goyave/v2"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" goyave"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("route"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Register"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Exit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("goyave"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ExitCode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[s("code",[t._v("goyave.Start()")]),t._v(" is blocking. You can run it in a goroutine if you want to process other things in the background. See the "),s("RouterLink",{attrs:{to:"/guide/advanced/multi-services.html"}},[t._v("multi-services")]),t._v(" section for more details.")],1)]),t._v(" "),s("p",[t._v("Now we need to create the package in which we will register our routes. Create a new package "),s("code",[t._v("http/route")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ mkdir http\n$ mkdir http/route\n")])])]),s("p",[t._v("Create "),s("code",[t._v("http/route/route.go")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" routes\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/System-Glitch/goyave/v2"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Register all the routes")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Register")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("router "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("goyave"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Router"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\trouter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GET"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/hello"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Handler function for the "/hello" route')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hello")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("goyave"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" request "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("goyave"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tresponse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("StatusOK"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hi!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v('Here we registered a very simple route displaying "Hi!". Learn more about routing '),s("RouterLink",{attrs:{to:"/guide/basics/routing.html"}},[t._v("here")]),t._v(".")],1),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Your routes definitions should be separated from the handler functions. Handlers should be defined in a "),s("code",[t._v("http/controller")]),t._v(" directory.")])]),t._v(" "),s("p",[t._v("Run your server and request your route:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ go run my-project\n\n# In another terminal:\n$ curl http://localhost:8080/hello\nHi!\n")])])]),s("p",[t._v("You should also create a config file for your application. Learn more "),s("RouterLink",{attrs:{to:"/guide/configuration.html"}},[t._v("here")]),t._v(".")],1),t._v(" "),s("p",[t._v("It is a good practice to ignore the actual config to prevent it being added to the version control system. Each developer may have different settings for their environment. To do so, add "),s("code",[t._v("config.json")]),t._v(" to your "),s("code",[t._v(".gitignore")]),t._v(".")])])}),[],!1,null,null,null);e.default=r.exports}}]);