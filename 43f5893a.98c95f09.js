(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{69:function(o,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return d}));var e=t(2),r=t(6),i=(t(0),t(91)),a={id:"encoders",title:"Rotary Encoders",sidebar_label:"Rotary Encoders"},s={unversionedId:"testing_hardware/encoders",id:"testing_hardware/encoders",isDocsHomePage:!1,title:"Rotary Encoders",description:"Rotary Encoder",source:"@site/docs/testing_hardware/encoder.md",slug:"/testing_hardware/encoders",permalink:"/docs/testing_hardware/encoders",editUrl:"https://github.com/jpconstantineau/pykey/tree/main/documentation/docs/testing_hardware/encoder.md",version:"current",sidebar_label:"Rotary Encoders",sidebar:"someSidebar",previous:{title:"Basic GPIOs",permalink:"/docs/testing_hardware/basic"},next:{title:"Analog Input and Outputs",permalink:"/docs/testing_hardware/analog"}},p=[{value:"Rotary Encoder",id:"rotary-encoder",children:[]},{value:"Basic Test",id:"basic-test",children:[]}],c={rightToc:p};function d(o){var n=o.components,t=Object(r.a)(o,["components"]);return Object(i.b)("wrapper",Object(e.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"rotary-encoder"},"Rotary Encoder"),Object(i.b)("p",null,"For basic information on rotary encoders, refer to this great tutorial from ",Object(i.b)("a",Object(e.a)({parentName:"p"},{href:"https://learn.adafruit.com/rotary-encoder"}),"Adafruit")),Object(i.b)("h2",{id:"basic-test"},"Basic Test"),Object(i.b)("pre",null,Object(i.b)("code",Object(e.a)({parentName:"pre"},{className:"language-python"}),"import board\nimport rotaryio\n\n# Encoder Setup\nencoder = rotaryio.IncrementalEncoder(board.P0_26, board.P0_06)\nlast_position = None\nwhile True:\n    position = encoder.position\n    if last_position is None or position != last_position:\n        print(position)\n    last_position = position\n\n")),Object(i.b)("p",null,"If you want to see an example of how to read a rotary encoder, see this ",Object(i.b)("a",Object(e.a)({parentName:"p"},{href:"https://youtu.be/4BNkuLonIVM?list=PLjF7R1fz_OOWFqZfqW9jlvQSIUmwn9lWr"}),"video")),Object(i.b)("p",null,"CircuitPython seems to only support up to 4 rotary encoders."),Object(i.b)("pre",null,Object(i.b)("code",Object(e.a)({parentName:"pre"},{className:"language-python"}),"import board\nimport rotaryio\n\n# Encoder Setup\nencoder1 = rotaryio.IncrementalEncoder(board.P0_26, board.P0_06)\nencoder2 = rotaryio.IncrementalEncoder(board.P0_08, board.P0_29)\nencoder3 = rotaryio.IncrementalEncoder(board.P0_15, board.P0_02)\nencoder4 = rotaryio.IncrementalEncoder(board.P0_17, board.P0_20)\nencoder5 = rotaryio.IncrementalEncoder(board.P0_09, board.P0_13)\n\nlast_position1 = None\nlast_position2 = None\nlast_position3 = None\nlast_position4 = None\nlast_position5 = None\nwhile True:\n    position1 = encoder1.position\n    position2 = encoder2.position\n    position3 = encoder3.position\n    position4 = encoder4.position\n    position5 = encoder5.position\n    if last_position1 is None or position1 != last_position1:\n        print(position1, position2, position3, position4, position5)\n    if last_position2 is None or position2 != last_position2:\n        print(position1, position2, position3, position4, position5)\n    if last_position3 is None or position3 != last_position3:\n        print(position1, position2, position3, position4, position5)\n    if last_position4 is None or position4 != last_position4:\n        print(position1, position2, position3, position4, position5)\n    if last_position5 is None or position5 != last_position5:\n        print(position1, position2, position3, position4, position5)\n    last_position1 = position1\n    last_position2 = position2\n    last_position3 = position3\n    last_position4 = position4\n    last_position5 = position5\n")))}d.isMDXComponent=!0},91:function(o,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return f}));var e=t(0),r=t.n(e);function i(o,n,t){return n in o?Object.defineProperty(o,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):o[n]=t,o}function a(o,n){var t=Object.keys(o);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(o);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(o,n).enumerable}))),t.push.apply(t,e)}return t}function s(o){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(o,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(o,n,Object.getOwnPropertyDescriptor(t,n))}))}return o}function p(o,n){if(null==o)return{};var t,e,r=function(o,n){if(null==o)return{};var t,e,r={},i=Object.keys(o);for(e=0;e<i.length;e++)t=i[e],n.indexOf(t)>=0||(r[t]=o[t]);return r}(o,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(o);for(e=0;e<i.length;e++)t=i[e],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(o,t)&&(r[t]=o[t])}return r}var c=r.a.createContext({}),d=function(o){var n=r.a.useContext(c),t=n;return o&&(t="function"==typeof o?o(n):s(s({},n),o)),t},l=function(o){var n=d(o.components);return r.a.createElement(c.Provider,{value:n},o.children)},u={inlineCode:"code",wrapper:function(o){var n=o.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(o,n){var t=o.components,e=o.mdxType,i=o.originalType,a=o.parentName,c=p(o,["components","mdxType","originalType","parentName"]),l=d(t),b=e,f=l["".concat(a,".").concat(b)]||l[b]||u[b]||i;return t?r.a.createElement(f,s(s({ref:n},c),{},{components:t})):r.a.createElement(f,s({ref:n},c))}));function f(o,n){var t=arguments,e=n&&n.mdxType;if("string"==typeof o||e){var i=t.length,a=new Array(i);a[0]=b;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=o,s.mdxType="string"==typeof o?o:e,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);