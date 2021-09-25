(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{103:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),s=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=s(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=s(t),b=r,f=l["".concat(i,".").concat(b)]||l[b]||d[b]||a;return t?o.a.createElement(f,c(c({ref:n},p),{},{components:t})):o.a.createElement(f,c({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=b;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},95:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return s}));var r=t(2),o=t(6),a=(t(0),t(103)),i={id:"sound",title:"Sound and Buzzers",sidebar_label:"Sounds"},c={unversionedId:"testing_hardware/sound",id:"testing_hardware/sound",isDocsHomePage:!1,title:"Sound and Buzzers",description:"If you have a buzzer connected to a GPIO, you can play tunes on it.",source:"@site/docs/testing_hardware/sound.md",slug:"/testing_hardware/sound",permalink:"/docs/testing_hardware/sound",editUrl:"https://github.com/jpconstantineau/pykey/tree/main/documentation/docs/testing_hardware/sound.md",version:"current",sidebar_label:"Sounds",sidebar:"someSidebar",previous:{title:"NeoPixels - RGB LEDs",permalink:"/docs/testing_hardware/neopixels"},next:{title:"Sleep and Power",permalink:"/docs/testing_hardware/sleep"}},u=[],p={rightToc:u};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"If you have a buzzer connected to a GPIO, you can play tunes on it."),Object(a.b)("p",null,"Try the example below by changing the pin definition"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"import board\nimport time\nimport pwmio\n\n\n# define audio hardware\nbuzzer = pwmio.PWMOut(board.P1_13, variable_frequency=True)\nOFF = 0\nON = 2**15\nnot_sleeping = True\n\n\n# End of Setup Music\nbuzzer.duty_cycle = ON\nbuzzer.frequency = 440 # \ntime.sleep(0.05)\nbuzzer.frequency = 880 # \ntime.sleep(0.05)\nbuzzer.frequency = 440 # \ntime.sleep(0.05)\nbuzzer.duty_cycle = OFF\n")))}s.isMDXComponent=!0}}]);