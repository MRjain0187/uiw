(this["webpackJsonp@example/uiw"]=this["webpackJsonp@example/uiw"]||[]).push([[78],{880:function(e,n){!function(e){function n(e,n){return e.replace(/<<(\d+)>>/g,(function(e,s){return"(?:"+n[+s]+")"}))}function s(e,s,a){return RegExp(n(e,s),a||"")}function a(e,n){for(var s=0;s<n;s++)e=e.replace(/<<self>>/g,(function(){return"(?:"+e+")"}));return e.replace(/<<self>>/g,"[^\\s\\S]")}var t="bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",i="class enum interface struct",r="add alias ascending async await by descending from get global group into join let nameof notnull on orderby partial remove select set unmanaged value when where where",o="abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";function l(e){return"\\b(?:"+e.trim().replace(/ /g,"|")+")\\b"}var d=l(i),p=RegExp(l(t+" "+i+" "+r+" "+o)),c=l(i+" "+r+" "+o),u=l(t+" "+i+" "+o),g=a("<(?:[^<>;=+\\-*/%&|^]|<<self>>)*>",2),b=a("\\((?:[^()]|<<self>>)*\\)",2),h="@?\\b[A-Za-z_]\\w*\\b",f=n("<<0>>(?:\\s*<<1>>)?",[h,g]),m=n("(?!<<0>>)<<1>>(?:\\s*\\.\\s*<<1>>)*",[c,f]),k="\\[\\s*(?:,\\s*)*\\]",y=n("(?:<<0>>|<<1>>)(?:\\s*(?:\\?\\s*)?<<2>>)*(?:\\s*\\?)?",[n("\\(<<0>>+(?:,<<0>>+)+\\)",[n("[^,()<>[\\];=+\\-*/%&|^]|<<0>>|<<1>>|<<2>>",[g,b,k])]),m,k]),w={keyword:p,punctuation:/[<>()?,.:[\]]/},v="'(?:[^\r\n'\\\\]|\\\\.|\\\\[Uux][\\da-fA-F]{1,8})'",x='"(?:\\\\.|[^\\\\"\r\n])*"';e.languages.csharp=e.languages.extend("clike",{string:[{pattern:s("(^|[^$\\\\])<<0>>",['@"(?:""|\\\\[\\s\\S]|[^\\\\"])*"(?!")']),lookbehind:!0,greedy:!0},{pattern:s("(^|[^@$\\\\])<<0>>",[x]),lookbehind:!0,greedy:!0},{pattern:RegExp(v),greedy:!0,alias:"character"}],"class-name":[{pattern:s("(\\busing\\s+static\\s+)<<0>>(?=\\s*;)",[m]),lookbehind:!0,inside:w},{pattern:s("(\\busing\\s+<<0>>\\s*=\\s*)<<1>>(?=\\s*;)",[h,y]),lookbehind:!0,inside:w},{pattern:s("(\\busing\\s+)<<0>>(?=\\s*=)",[h]),lookbehind:!0},{pattern:s("(\\b<<0>>\\s+)<<1>>",[d,f]),lookbehind:!0,inside:w},{pattern:s("(\\bcatch\\s*\\(\\s*)<<0>>",[m]),lookbehind:!0,inside:w},{pattern:s("(\\bwhere\\s+)<<0>>",[h]),lookbehind:!0},{pattern:s("(\\b(?:is|as)\\s+)<<0>>",[y]),lookbehind:!0,inside:w},{pattern:s("\\b<<0>>(?=\\s+(?!<<1>>)<<2>>(?:\\s*[=,;:{)\\]]|\\s+in))",[y,u,h]),inside:w}],keyword:p,number:/(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:ul|lu|[dflmu])?\b/i,operator:/>>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,punctuation:/\?\.?|::|[{}[\];(),.:]/}),e.languages.insertBefore("csharp","number",{range:{pattern:/\.\./,alias:"operator"}}),e.languages.insertBefore("csharp","punctuation",{"named-parameter":{pattern:s("([(,]\\s*)<<0>>(?=\\s*:)",[h]),lookbehind:!0,alias:"punctuation"}}),e.languages.insertBefore("csharp","class-name",{namespace:{pattern:s("(\\b(?:namespace|using)\\s+)<<0>>(?:\\s*\\.\\s*<<0>>)*(?=\\s*[;{])",[h]),lookbehind:!0,inside:{punctuation:/\./}},"type-expression":{pattern:s("(\\b(?:default|typeof|sizeof)\\s*\\(\\s*)(?:[^()\\s]|\\s(?!\\s*\\))|<<0>>)*(?=\\s*\\))",[b]),lookbehind:!0,alias:"class-name",inside:w},"return-type":{pattern:s("<<0>>(?=\\s+(?:<<1>>\\s*(?:=>|[({]|\\.\\s*this\\s*\\[)|this\\s*\\[))",[y,m]),inside:w,alias:"class-name"},"constructor-invocation":{pattern:s("(\\bnew\\s+)<<0>>(?=\\s*[[({])",[y]),lookbehind:!0,inside:w,alias:"class-name"},"generic-method":{pattern:s("<<0>>\\s*<<1>>(?=\\s*\\()",[h,g]),inside:{function:s("^<<0>>",[h]),generic:{pattern:RegExp(g),alias:"class-name",inside:w}}},"type-list":{pattern:s("\\b((?:<<0>>\\s+<<1>>|where\\s+<<2>>)\\s*:\\s*)(?:<<3>>|<<4>>)(?:\\s*,\\s*(?:<<3>>|<<4>>))*(?=\\s*(?:where|[{;]|=>|$))",[d,f,h,y,p.source]),lookbehind:!0,inside:{keyword:p,"class-name":{pattern:RegExp(y),greedy:!0,inside:w},punctuation:/,/}},preprocessor:{pattern:/(^\s*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(\s*#)\b(?:define|elif|else|endif|endregion|error|if|line|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}});var $=x+"|"+v,_=n("\\/(?![*/])|\\/\\/[^\r\n]*[\r\n]|\\/\\*[\\s\\S]*?\\*\\/|<<0>>",[$]),B=a(n("[^\"'/()]|<<0>>|\\(<<self>>*\\)",[_]),2),E="\\b(?:assembly|event|field|method|module|param|property|return|type)\\b",R=n("<<0>>(?:\\s*\\(<<1>>*\\))?",[m,B]);e.languages.insertBefore("csharp","class-name",{attribute:{pattern:s("((?:^|[^\\s\\w>)?])\\s*\\[\\s*)(?:<<0>>\\s*:\\s*)?<<1>>(?:\\s*,\\s*<<1>>)*(?=\\s*\\])",[E,R]),lookbehind:!0,greedy:!0,inside:{target:{pattern:s("^<<0>>(?=\\s*:)",[E]),alias:"keyword"},"attribute-arguments":{pattern:s("\\(<<0>>*\\)",[B]),inside:e.languages.csharp},"class-name":{pattern:RegExp(m),inside:{punctuation:/\./}},punctuation:/[:,]/}}});var S=":[^}\r\n]+",P=a(n("[^\"'/()]|<<0>>|\\(<<self>>*\\)",[_]),2),z=n("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}",[P,S]),j=a(n("[^\"'/()]|\\/(?!\\*)|\\/\\*.*?\\*\\/|<<0>>|\\(<<self>>*\\)",[$]),2),A=n("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}",[j,S]);function J(n,a){return{interpolation:{pattern:s("([^{](?:\\{\\{)*)<<0>>",[n]),lookbehind:!0,inside:{"format-string":{pattern:s("(^\\{(?:(?![}:])<<0>>)*)<<1>>(?=\\}$)",[a,S]),lookbehind:!0,inside:{punctuation:/^:/}},punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-csharp",inside:e.languages.csharp}}},string:/[\s\S]+/}}e.languages.insertBefore("csharp","string",{"interpolation-string":[{pattern:s('(^|[^\\\\])(?:\\$@|@\\$)"(?:""|\\\\[\\s\\S]|\\{\\{|<<0>>|[^\\\\{"])*"',[z]),lookbehind:!0,greedy:!0,inside:J(z,P)},{pattern:s('(^|[^@\\\\])\\$"(?:\\\\.|\\{\\{|<<0>>|[^\\\\"{])*"',[A]),lookbehind:!0,greedy:!0,inside:J(A,j)}]})}(Prism),Prism.languages.dotnet=Prism.languages.cs=Prism.languages.csharp}}]);