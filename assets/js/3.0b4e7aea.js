(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{366:function(t,s,a){t.exports=a.p+"assets/img/burp-dir.96e9209c.jpg"},367:function(t,s,a){t.exports=a.p+"assets/img/burp-dir-1.066d0d07.jpg"},368:function(t,s,a){t.exports=a.p+"assets/img/burp-dir-2.939632ee.jpg"},369:function(t,s,a){t.exports=a.p+"assets/img/burp-text.178495a4.jpg"},370:function(t,s,a){t.exports=a.p+"assets/img/burp-text-1.5e92268f.jpg"},371:function(t,s,a){t.exports=a.p+"assets/img/burp-url.c8860efe.jpg"},372:function(t,s,a){t.exports=a.p+"assets/img/burp-url-1.c0af82e0.jpg"},373:function(t,s,a){t.exports=a.p+"assets/img/burp-server.73a215a4.jpg"},374:function(t,s,a){t.exports=a.p+"assets/img/burp-server-1.f67f5374.jpg"},375:function(t,s,a){t.exports=a.p+"assets/img/burp-param-append.e955469c.jpg"},376:function(t,s,a){t.exports=a.p+"assets/img/burp-param-append-1.e1e2e43c.jpg"},377:function(t,s,a){t.exports=a.p+"assets/img/burp-param-replace.4b72f8e7.jpg"},378:function(t,s,a){t.exports=a.p+"assets/img/burp-param-replace-1.ba55c278.jpg"},379:function(t,s,a){t.exports=a.p+"assets/img/burp-script.79b4b807.jpg"},380:function(t,s,a){t.exports=a.p+"assets/img/burp-script-1.110122c2.jpg"},381:function(t,s,a){t.exports=a.p+"assets/img/yaml.e6783a86.gif"},393:function(t,s,a){"use strict";a.r(s);var e=a(44),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"poc编辑手册"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#poc编辑手册"}},[t._v("#")]),t._v(" poc编辑手册")]),t._v(" "),e("h2",{attrs:{id:"_0x01-规则体系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0x01-规则体系"}},[t._v("#")]),t._v(" 0x01 规则体系")]),t._v(" "),e("p",[t._v("pocassist 借鉴了 xray 的 poc 框架 phantasm ，通过 CEL 表达式定义 poc。")]),t._v(" "),e("p",[t._v("用一句话来讲，就是根据"),e("code",[t._v("自定义的规则")]),t._v("对"),e("code",[t._v("原始请求")]),t._v("变形，然后获取变形后的响应，再检查响应是否匹配规则中定义的表达式。")]),t._v(" "),e("h3",{attrs:{id:"_1-1-rules"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-rules"}},[t._v("#")]),t._v(" 1-1 rules")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("pocassist 使用单个"),e("code",[t._v("rule")]),t._v("定义单个请求。使用"),e("code",[t._v("rules")]),t._v("定义一组请求。")])]),t._v(" "),e("p",[t._v("如果当前"),e("code",[t._v("rule")]),t._v("表达式匹配成功，就进行下一个"),e("code",[t._v("rule")]),t._v("，如果不匹配则退出执行。 如果成功执行完了最后一个 "),e("code",[t._v("rule")]),t._v("，那么代表目标存在漏洞。")]),t._v(" "),e("h3",{attrs:{id:"_1-2-groups"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-groups"}},[t._v("#")]),t._v(" 1-2 groups")]),t._v(" "),e("p",[t._v("当多种情况都是为了检测同一个漏洞时，可以使用"),e("code",[t._v("groups")]),t._v("。"),e("code",[t._v("groups")]),t._v("可以理解为一组"),e("code",[t._v("rules")]),t._v("。只要有一组规则执行成功，该漏洞就认为存在。")]),t._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("因此："),e("code",[t._v("groups")]),t._v(" 与 "),e("code",[t._v("rules")]),t._v(" 应当只存在一个。pocassist 也做了限制，只能选择一种类型。")])]),t._v(" "),e("h3",{attrs:{id:"_1-3-前端字段与xray对比"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-前端字段与xray对比"}},[t._v("#")]),t._v(" 1-3 前端字段与xray对比")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("pocassist前端字段名")]),t._v(" "),e("th",[t._v("xray yaml 字段名")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("名称")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://docs.xray.cool/#/guide/poc?id=poc-%e7%bb%93%e6%9e%84",target:"_blank",rel:"noopener noreferrer"}},[t._v("name"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("规则类型 roles/groups")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://docs.xray.cool/#/guide/poc?id=poc-%e7%bb%93%e6%9e%84",target:"_blank",rel:"noopener noreferrer"}},[t._v("rules / groups"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("添加变量")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://docs.xray.cool/#/guide/poc?id=%e8%87%aa%e5%ae%9a%e4%b9%89%e5%8f%98%e9%87%8f",target:"_blank",rel:"noopener noreferrer"}},[t._v("set"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("请求方法")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://docs.xray.cool/#/guide/poc?id=rule",target:"_blank",rel:"noopener noreferrer"}},[t._v("method"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("请求路径")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://docs.xray.cool/#/guide/poc?id=rule",target:"_blank",rel:"noopener noreferrer"}},[t._v("path"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("请求头")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://docs.xray.cool/#/guide/poc?id=rule",target:"_blank",rel:"noopener noreferrer"}},[t._v("headers"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("请求体")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://docs.xray.cool/#/guide/poc?id=rule",target:"_blank",rel:"noopener noreferrer"}},[t._v("body"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("跟随跳转")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://docs.xray.cool/#/guide/poc?id=rule",target:"_blank",rel:"noopener noreferrer"}},[t._v("follow_redirects"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("提取规则")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://docs.xray.cool/#/guide/poc?id=search%e7%9a%84%e4%bd%9c%e7%94%a8",target:"_blank",rel:"noopener noreferrer"}},[t._v("search"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("表达式")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://docs.xray.cool/#/guide/poc?id=%e5%a6%82%e4%bd%95%e7%bc%96%e5%86%99expression%e8%a1%a8%e8%be%be%e5%bc%8f",target:"_blank",rel:"noopener noreferrer"}},[t._v("expression"),e("OutboundLink")],1)])])])]),t._v(" "),e("p",[t._v("支持 "),e("a",{attrs:{href:"https://docs.xray.cool/#/guide/poc?id=%e5%86%85%e9%83%a8%e5%8f%98%e9%87%8f%e4%b8%8e%e5%87%bd%e6%95%b0%e9%80%9f%e6%9f%a5",target:"_blank",rel:"noopener noreferrer"}},[t._v("xray 所有内部变量和表达式函数"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"_0x02-规则类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0x02-规则类型"}},[t._v("#")]),t._v(" 0x02 规则类型")]),t._v(" "),e("p",[t._v("与 xray 不同的是，pocassist 定义了一个变量，叫"),e("code",[t._v("规则类型")]),t._v("。")]),t._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[e("strong",[t._v("规则类型将直接决定 rule 如何对原始请求变形。")])])]),t._v(" "),e("p",[t._v("对于原始请求，pocassist 支持解析完整请求报文，和根据url生成GET请求报文。")]),t._v(" "),e("p",[t._v("例如测试目标为"),e("code",[t._v("testphp.vulnweb.com")]),t._v("，则原始请求报文为：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("GET / HTTP/1.1\nHost: testphp.vulnweb.com\nUser-Agent: 配置文件里的UA\nConnection: close\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("p",[t._v("::tip")]),t._v(" "),e("p",[t._v("pocassist 的规则体系中，内置了以下几种规则类型。接下来我们看下同一条规则在不同类型下，是如何对原始请求进行变形的。")]),t._v(" "),e("p",[t._v(":::")]),t._v(" "),e("p",[t._v("为了观察 pocassist 的发包情况，可在"),e("code",[t._v("config.yaml")]),t._v("中设置burpsuite代理：")]),t._v(" "),e("p",[e("code",[t._v('proxy: "127.0.0.1:8080"')])]),t._v(" "),e("h3",{attrs:{id:"_2-1-directory"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-directory"}},[t._v("#")]),t._v(" 2-1 directory")]),t._v(" "),e("p",[t._v("目录级扫描。pocassist 将认为检测目标为目录，即使是普通 url 也认为是目录。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("变形后的请求路径："),e("code",[t._v('原始请求路径 + "/" + 规则中定义的path')]),t._v("。")]),t._v(" "),e("p",[t._v("变形后的请求头：使用规则定义。")])]),t._v(" "),e("p",[t._v("举例：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(366),alt:"burp-dir"}})]),t._v(" "),e("p",[t._v("发出的请求：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(367),alt:"burp-dir-1"}})]),t._v(" "),e("p",[t._v('由于响应中有"not found"字样，所以命中了规则')]),t._v(" "),e("p",[e("img",{attrs:{src:a(368),alt:"burp-dir-2"}})]),t._v(" "),e("h3",{attrs:{id:"_2-2-text"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-text"}},[t._v("#")]),t._v(" 2-2 text")]),t._v(" "),e("p",[t._v("内容检测。pocassist 将认为检测目标为原始请求的响应，所以将直接发起原始请求。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("也就是说该类型的poc只需要定义cel表达式。（其他字段即使填写也会被忽略）")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(369),alt:"burp-text"}})]),t._v(" "),e("p",[t._v("发出的请求：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(370),alt:"burp-text-1"}})]),t._v(" "),e("h3",{attrs:{id:"_2-3-url"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-url"}},[t._v("#")]),t._v(" 2-3 url")]),t._v(" "),e("p",[t._v("url级漏洞检测。pocassist 将认为检测目标为原始请求的uri。因此变形后的请求路径为原始请求的uri，除了路径外，均使用规则定义。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v('也就是说该类型的path指定为"/"即可，即使输出"/anything"，后面的也会被忽略。')])]),t._v(" "),e("p",[e("img",{attrs:{src:a(371),alt:"burp-url"}})]),t._v(" "),e("p",[t._v("发出的请求：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(372),alt:"burp-url-1"}})]),t._v(" "),e("h3",{attrs:{id:"_2-4-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-server"}},[t._v("#")]),t._v(" 2-4 server")]),t._v(" "),e("p",[t._v("服务级漏洞检测。pocassist 将认为检测目标运行在一级目录下，也就是"),e("code",[t._v("host:port/")]),t._v("下。")]),t._v(" "),e("p",[t._v("因此变形后的请求路径为"),e("code",[t._v("host:port/")]),t._v("+规则定义的path，请求头、请求body均使用规则定义。")]),t._v(" "),e("p",[t._v("举例：")]),t._v(" "),e("p",[t._v("目标url为")]),t._v(" "),e("p",[e("code",[t._v("https://jweny.top/aaa/bbb.cc.php")]),t._v(" ，")]),t._v(" "),e("p",[t._v("规则中定义的path为")]),t._v(" "),e("p",[e("code",[t._v("/user/zs.php?do=save")])]),t._v(" "),e("p",[t._v("规则运行时变形的请求为")]),t._v(" "),e("p",[e("code",[t._v("https://jweny.top/user/zs.php?do=save")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(373),alt:"burp-server"}})]),t._v(" "),e("p",[t._v("发出的请求将直接忽略域名后的子目录：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(374),alt:"burp-server-1"}})]),t._v(" "),e("h3",{attrs:{id:"_2-5-param"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-param"}},[t._v("#")]),t._v(" 2-5 param")]),t._v(" "),e("p",[t._v("参数级漏洞检测。pocassist 将认为检测目标为原始请求中的参数。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("pocassist 目前仅支持解析"),e("code",[t._v("query string")]),t._v("和"),e("code",[t._v("post body")]),t._v(" 中的"),e("code",[t._v("form data")]),t._v("（"),e("code",[t._v("json")]),t._v("解析已在计划中）。")])]),t._v(" "),e("p",[t._v("参数级漏洞检测只需要在前端配置"),e("code",[t._v("payload")]),t._v("列表，pocassist 将依次将每个参数根据"),e("code",[t._v("payload")]),t._v("列表进行变形。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("也就是说，参数级检测发起的请求数为：参数个数 * payload个数")])]),t._v(" "),e("p",[t._v("参数变形目前内置了两种类型")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("appendparam")]),t._v(" 在原参数值后面拼接"),e("code",[t._v("payload")])]),t._v(" "),e("li",[e("code",[t._v("replaceparam")]),t._v("  将原参数直接替换为"),e("code",[t._v("payload")])])]),t._v(" "),e("h4",{attrs:{id:"_2-5-1-appendparam"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-1-appendparam"}},[t._v("#")]),t._v(" 2-5-1 appendparam")]),t._v(" "),e("p",[e("code",[t._v("appendparam")]),t._v("类型将遍历每个参数和payload，并将payload拼接在原始参数之后。")]),t._v(" "),e("p",[t._v("举例：检测带回显的sql报错注入。")]),t._v(" "),e("p",[t._v("定义payload（多个payload使用"),e("code",[t._v(",")]),t._v("分隔开）为"),e("code",[t._v("'")]),t._v(" / "),e("code",[t._v("%2527")]),t._v("。")]),t._v(" "),e("p",[t._v("原始请求为"),e("code",[t._v("?aaa=bbb&ccc=ddd")]),t._v("。")]),t._v(" "),e("p",[t._v("那么poc运行时会依次发四个请求：")]),t._v(" "),e("ol",[e("li",[e("code",[t._v("?aaa=bbb'&ccc=ddd")])]),t._v(" "),e("li",[e("code",[t._v("?aaa=bbb%2327&ccc=ddd")])]),t._v(" "),e("li",[e("code",[t._v("?aaa=bbb?ccc=ddd'")])]),t._v(" "),e("li",[e("code",[t._v("?aaa=bbb?ccc=ddd%2327")])])]),t._v(" "),e("p",[e("img",{attrs:{src:a(375),alt:"burp-param-append"}})]),t._v(" "),e("p",[e("img",{attrs:{src:a(376),alt:"burp-param-append-1"}})]),t._v(" "),e("h4",{attrs:{id:"_2-5-2-replaceparam"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-2-replaceparam"}},[t._v("#")]),t._v(" 2-5-2 replaceparam")]),t._v(" "),e("p",[e("code",[t._v("replaceparam")]),t._v("类型将遍历每个参数和payload，并使用payload直接替换原始参数。")]),t._v(" "),e("p",[t._v("举例：通过"),e("code",[t._v("dnslog")]),t._v("检测"),e("code",[t._v("ssrf")]),t._v("。")]),t._v(" "),e("p",[t._v("先添加变量，定义dnslog域名：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("reverse newReverse()\nreverseDomain reverse.domain\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("然后设置payload为reverseDomain。")]),t._v(" "),e("p",[t._v("原始请求为"),e("code",[t._v("?aaa=bbb&ccc=ddd")]),t._v("。")]),t._v(" "),e("p",[t._v("那么poc运行时会依次发两个请求：")]),t._v(" "),e("ol",[e("li",[e("code",[t._v("?aaa=reverseDomain&ccc=ddd")])]),t._v(" "),e("li",[e("code",[t._v("?aaa=bbb&ccc=reverseDomain")])])]),t._v(" "),e("p",[e("img",{attrs:{src:a(377),alt:"burp-param-replace"}})]),t._v(" "),e("p",[e("img",{attrs:{src:a(378),alt:"burp-param-replace-1"}})]),t._v(" "),e("h3",{attrs:{id:"_2-6-script"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-script"}},[t._v("#")]),t._v(" 2.6 script")]),t._v(" "),e("p",[t._v("如果以上所有模式都漫步足疗你的需求，比如你要进行tcp发包，那么可以了解一下写go脚本。")]),t._v(" "),e("p",[t._v("脚本检测目前只支持开发者模式，也就是说直接使用release二进制状态下不支持动态加载go脚本到引擎中的。该缺陷正在研究修复。")]),t._v(" "),e("p",[t._v("先在前端配置基础信息，规则内容只填名称即可。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(379),alt:"burp-script"}})]),t._v(" "),e("p",[t._v("然后在scripts目录下编写go脚本。源码中已提供两个demo，一个是检测memcached未授权，一个是检测tomcat弱口令。")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('// tomcat 弱口令\nfunc TomcatWeakPass(args *ScriptScanArgs) (*util.ScanResult, error) {\n\t// 定义报文列表\n\tvar respList []*proto.Response\n\n\tfastReq := fasthttp.AcquireRequest()\n\tdefer fasthttp.ReleaseRequest(fastReq)\n\n\tvar rawurl = ConstructUrl(args, "/")\n\tvar fl = []string{"Application Manager", "Welcome to Tomcat"}\n\tvar wl = []string{"admin:admin", "tomcat:tomcat", "admin:123456", "admin:", "root:root",\n\t\t"root:", "tomcat:", "tomcat:s3cret"}\n\tvar buf bytes.Buffer\n\tbuf.WriteString(rawurl)\n\tbuf.WriteString("/manager/html")\n\tloginurl := buf.String()\n\n\tfastReq.SetRequestURI(loginurl)\n\tfastReq.Header.SetMethod(fasthttp.MethodGet)\n\n\tfor _, value := range wl {\n\t\tauthValue := "Basic " + base64.StdEncoding.EncodeToString([]byte(value))\n\t\tfastReq.Header.Set("Authorization", authValue)\n\n\t\tresp, err := util.DoFasthttpRequest(fastReq, true)\n\t\tif err != nil {\n\t\t\treturn nil, err\n\t\t}\n\t\tif resp.Status == 401 || resp.Status == 403 {\n\t\t\tutil.ResponsePut(resp)\n\t\t\tcontinue\n\t\t}\n\n\t\tif resp.Status == 404 {\n\t\t\tutil.ResponsePut(resp)\n\t\t\treturn &util.InVulnerableResult, nil\n\t\t}\n\t\tfor _, flag := range fl {\n\t\t\tif bytes.Contains(resp.Body, []byte(flag)) {\n\t\t\t\trespList = append(respList, resp)\n\t\t\t\treturn util.VulnerableHttpResult(loginurl,"user:pass is"+value, respList), nil\n\t\t\t}\n\t\t}\n\t\tutil.ResponsePut(resp)\n\t}\n\n\treturn &util.InVulnerableResult, nil\n}\n\nfunc init() {\n\tScriptRegister("poc-go-tomcat-weak-pass", TomcatWeakPass)\n}\n\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br"),e("span",{staticClass:"line-number"},[t._v("21")]),e("br"),e("span",{staticClass:"line-number"},[t._v("22")]),e("br"),e("span",{staticClass:"line-number"},[t._v("23")]),e("br"),e("span",{staticClass:"line-number"},[t._v("24")]),e("br"),e("span",{staticClass:"line-number"},[t._v("25")]),e("br"),e("span",{staticClass:"line-number"},[t._v("26")]),e("br"),e("span",{staticClass:"line-number"},[t._v("27")]),e("br"),e("span",{staticClass:"line-number"},[t._v("28")]),e("br"),e("span",{staticClass:"line-number"},[t._v("29")]),e("br"),e("span",{staticClass:"line-number"},[t._v("30")]),e("br"),e("span",{staticClass:"line-number"},[t._v("31")]),e("br"),e("span",{staticClass:"line-number"},[t._v("32")]),e("br"),e("span",{staticClass:"line-number"},[t._v("33")]),e("br"),e("span",{staticClass:"line-number"},[t._v("34")]),e("br"),e("span",{staticClass:"line-number"},[t._v("35")]),e("br"),e("span",{staticClass:"line-number"},[t._v("36")]),e("br"),e("span",{staticClass:"line-number"},[t._v("37")]),e("br"),e("span",{staticClass:"line-number"},[t._v("38")]),e("br"),e("span",{staticClass:"line-number"},[t._v("39")]),e("br"),e("span",{staticClass:"line-number"},[t._v("40")]),e("br"),e("span",{staticClass:"line-number"},[t._v("41")]),e("br"),e("span",{staticClass:"line-number"},[t._v("42")]),e("br"),e("span",{staticClass:"line-number"},[t._v("43")]),e("br"),e("span",{staticClass:"line-number"},[t._v("44")]),e("br"),e("span",{staticClass:"line-number"},[t._v("45")]),e("br"),e("span",{staticClass:"line-number"},[t._v("46")]),e("br"),e("span",{staticClass:"line-number"},[t._v("47")]),e("br"),e("span",{staticClass:"line-number"},[t._v("48")]),e("br"),e("span",{staticClass:"line-number"},[t._v("49")]),e("br"),e("span",{staticClass:"line-number"},[t._v("50")]),e("br"),e("span",{staticClass:"line-number"},[t._v("51")]),e("br"),e("span",{staticClass:"line-number"},[t._v("52")]),e("br"),e("span",{staticClass:"line-number"},[t._v("53")]),e("br")])]),e("p",[t._v("说明：")]),t._v(" "),e("ul",[e("li",[t._v("脚本的入参必须为"),e("code",[t._v("*ScriptScanArgs")]),t._v("，返回值必须为"),e("code",[t._v("(*util.ScanResult, error)")]),t._v("。")]),t._v(" "),e("li",[t._v("脚本中必须定义"),e("code",[t._v("init")]),t._v("方法用来注册脚本，"),e("code",[t._v("ScriptRegister")]),t._v("方法的第一个参数为规则名称，第二个参数为方法名。")]),t._v(" "),e("li",[t._v("脚本编写完之后需要重新编译pocassist。"),e("code",[t._v("go build -o pocassist")]),t._v("。")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(380),alt:"burp-script-1"}})]),t._v(" "),e("h3",{attrs:{id:"_2-7-导入xray-yaml规则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-导入xray-yaml规则"}},[t._v("#")]),t._v(" 2.7 导入xray yaml规则")]),t._v(" "),e("p",[t._v("点击上传，选择yaml文件后，yaml内容将自动刷新到"),e("code",[t._v("规则内容")]),t._v("。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("ol",[e("li",[t._v("注意：规则类型、漏洞描述需要手动编辑")]),t._v(" "),e("li",[t._v("编辑完成之后点击保存才会保存至数据库")])])]),t._v(" "),e("p",[e("img",{attrs:{src:a(381),alt:"yaml"}})]),t._v(" "),e("h3",{attrs:{id:"_2-8-下载-yaml-规则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-8-下载-yaml-规则"}},[t._v("#")]),t._v(" 2.8 下载 yaml 规则")]),t._v(" "),e("p",[t._v("点击下载yaml规则，即可下载当前页面编辑好的规则。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("注意：pocassist 完全兼容 xray ，但是部分细节还是有差异，例如 "),e("code",[t._v("params")]),t._v("等差。因此下载后需人工检查后，方可通过xray运行。")])])])}),[],!1,null,null,null);s.default=r.exports}}]);