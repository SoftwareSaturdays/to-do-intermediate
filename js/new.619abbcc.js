(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["new"],{"0eaf":function(t,e,i){},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,i){var r=i("1d80"),s=i("577e"),n=i("5899"),o="["+n+"]",a=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),u=function(t){return function(e){var i=s(r(e));return 1&t&&(i=i.replace(a,"")),2&t&&(i=i.replace(c,"")),i}};t.exports={start:u(1),end:u(2),trim:u(3)}},"67bf":function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"list-wrapper"},[i("h3",[t._v("New ToDo Title")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"text-wrapper",attrs:{placeholder:"Title of task..."},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),i("br"),i("br"),i("h3",[t._v("New ToDo Description")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"text-wrapper",attrs:{rows:"5",placeholder:"Description of task..."},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}}),i("div",{staticClass:"button button-edit",on:{click:t.submit_todo}},[t._v("Save ToDo")]),i("br"),i("br"),!t.valid_title&&t.fix_title?i("span",{staticClass:"msg msg-bad"},[t._v("You must enter a title!")]):t._e(),i("br"),!t.valid_description&&t.fix_description?i("span",{staticClass:"msg msg-bad"},[t._v("You must enter a description!")]):t._e(),i("br"),t.errors?i("span",{staticClass:"msg msg-bad"},[t._v(t._s(t.errors_msg))]):t._e()])},s=[],n=(i("a9e3"),i("a4d3"),i("e01a"),i("0d8f")),o={name:"New",props:{nxtID:Number},data:function(){return{title:"",description:"",valid_title:!0,valid_description:!0,errors:!1,errors_msg:""}},methods:{submit_todo:function(){if(void 0==this.nxtID)return this.errors=!0,void(this.errors_msg="ID is undefined, return to the home page!");this.valid_title=""!=this.title,this.valid_description=""!=this.description,this.valid_title&&this.valid_description&&(Object(n["b"])(this.title,this.description),this.$router.push({name:"Home"}))}},computed:{fix_title:function(){return!this.valid_title&&""==this.title},fix_description:function(){return!this.valid_description&&""==this.description}}},a=o,c=(i("7255"),i("2877")),u=Object(c["a"])(a,r,s,!1,null,"b3df456c",null);e["default"]=u.exports},7156:function(t,e,i){var r=i("861d"),s=i("d2bb");t.exports=function(t,e,i){var n,o;return s&&"function"==typeof(n=e.constructor)&&n!==i&&r(o=n.prototype)&&o!==i.prototype&&s(t,o),t}},7255:function(t,e,i){"use strict";i("0eaf")},a9e3:function(t,e,i){"use strict";var r=i("83ab"),s=i("da84"),n=i("94ca"),o=i("6eeb"),a=i("5135"),c=i("c6b6"),u=i("7156"),l=i("d9b5"),p=i("c04e"),d=i("d039"),f=i("7c73"),v=i("241c").f,m=i("06cf").f,_=i("9bf2").f,h=i("58a8").trim,b="Number",g=s[b],N=g.prototype,I=c(f(N))==b,w=function(t){if(l(t))throw TypeError("Cannot convert a Symbol value to a number");var e,i,r,s,n,o,a,c,u=p(t,"number");if("string"==typeof u&&u.length>2)if(u=h(u),e=u.charCodeAt(0),43===e||45===e){if(i=u.charCodeAt(2),88===i||120===i)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:r=2,s=49;break;case 79:case 111:r=8,s=55;break;default:return+u}for(n=u.slice(2),o=n.length,a=0;a<o;a++)if(c=n.charCodeAt(a),c<48||c>s)return NaN;return parseInt(n,r)}return+u};if(n(b,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var x,E=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof E&&(I?d((function(){N.valueOf.call(i)})):c(i)!=b)?u(new g(w(e)),i,E):w(e)},C=r?v(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),T=0;C.length>T;T++)a(g,x=C[T])&&!a(E,x)&&_(E,x,m(g,x));E.prototype=N,N.constructor=E,o(s,b,E)}}}]);
//# sourceMappingURL=new.619abbcc.js.map