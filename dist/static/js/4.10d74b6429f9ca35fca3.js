webpackJsonp([4],{483:function(e,t,o){o(596);var n=o(329)(o(528),o(649),"data-v-71e48ee4",null);e.exports=n.exports},493:function(e,t,o){o(497);var n=o(329)(o(495),o(498),"data-v-58c6066e",null);e.exports=n.exports},495:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["onClick","icon","text","styles"]}},496:function(e,t,o){t=e.exports=o(471)(),t.push([e.i,".dialogueBTN[data-v-58c6066e]{outline:none!important;box-shadow:none!important;border:0;border-radius:40px;font-weight:500;height:45px;border-bottom-right-radius:0;padding-left:20px;padding-right:20px;min-width:150px}","",{version:3,sources:["C:/xampp/htdocs/askthepros.com/src/modules/generic/dialogueBtn.vue"],names:[],mappings:"AACA,8BAA8B,uBAAwB,0BAA2B,SAAW,mBAAmB,gBAAgB,YAAY,6BAA+B,kBAAkB,mBAAmB,eAAe,CAC7N",file:"dialogueBtn.vue",sourcesContent:["\n.dialogueBTN[data-v-58c6066e]{outline:none !important;box-shadow:none !important;border:0px;border-radius:40px;font-weight:500;height:45px;border-bottom-right-radius:0px;padding-left:20px;padding-right:20px;min-width:150px\n}\n"],sourceRoot:""}])},497:function(e,t,o){var n=o(496);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);o(472)("404493b2",n,!0)},498:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("button",{staticClass:"btn dialogueBTN",style:e.styles,on:{click:e.onClick}},[e._v("\n  "+e._s(e.text)+" \n  "),o("i",{class:e.icon,staticStyle:{"margin-left":"20px"}})])},staticRenderFns:[]}},501:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["onClick","icon","text","styles","icon_position"]}},502:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["type","styles","placeholder","classes"],methods:{onChange:function(e){this.$emit("input",e.target.value)}}}},503:function(e,t,o){t=e.exports=o(471)(),t.push([e.i,".dialogueBTN[data-v-79004f1a]{outline:none!important;box-shadow:none!important;border:0;border-radius:40px;font-weight:500;height:45px;padding-left:20px;padding-right:20px;min-width:150px}","",{version:3,sources:["C:/xampp/htdocs/askthepros.com/src/modules/generic/roundedBtn.vue"],names:[],mappings:"AACA,8BAA8B,uBAAwB,0BAA2B,SAAW,mBAAmB,gBAAgB,YAAY,kBAAkB,mBAAmB,eAAe,CAC9L",file:"roundedBtn.vue",sourcesContent:["\n.dialogueBTN[data-v-79004f1a]{outline:none !important;box-shadow:none !important;border:0px;border-radius:40px;font-weight:500;height:45px;padding-left:20px;padding-right:20px;min-width:150px\n}\n"],sourceRoot:""}])},504:function(e,t,o){t=e.exports=o(471)(),t.push([e.i,".roudedInput[data-v-890d5ff0]{outline:none!important;box-shadow:none!important;height:45px!important;border-radius:40px!important;border:1px solid #ccc!important}","",{version:3,sources:["C:/xampp/htdocs/askthepros.com/src/modules/generic/roundedInput.vue"],names:[],mappings:"AACA,8BAA8B,uBAAwB,0BAA2B,sBAAuB,6BAA8B,+BAAgC,CACrK",file:"roundedInput.vue",sourcesContent:["\n.roudedInput[data-v-890d5ff0]{outline:none !important;box-shadow:none !important;height:45px !important;border-radius:40px !important;border:1px solid #ccc !important\n}\n"],sourceRoot:""}])},505:function(e,t,o){var n=o(503);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);o(472)("ed38191a",n,!0)},506:function(e,t,o){var n=o(504);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);o(472)("a77c599e",n,!0)},507:function(e,t,o){o(505);var n=o(329)(o(501),o(509),"data-v-79004f1a",null);e.exports=n.exports},508:function(e,t,o){o(506);var n=o(329)(o(502),o(510),"data-v-890d5ff0",null);e.exports=n.exports},509:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("button",{staticClass:"btn dialogueBTN",style:e.styles,on:{click:e.onClick}},["left"==e.icon_position?o("i",{class:e.icon,staticStyle:{"margin-right":"10px"}}):e._e(),e._v("\n  "+e._s(e.text)+" \n  "),"left"==!e.icon_position?o("i",{class:e.icon,staticStyle:{"margin-left":"20px"}}):e._e()])},staticRenderFns:[]}},510:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",{class:"form-control roudedInput "+e.classes,style:e.styles,attrs:{type:e.type?e.type:"text",placeholder:e.placeholder},on:{input:e.onChange}})},staticRenderFns:[]}},528:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(493),a=o.n(n),i=o(508),r=o.n(i),s=o(507),d=o.n(s),l=o(66);t.default={data:function(){return{username:"",password:"",errorMessage:"",isValid:!0}},components:{dialogueBtn:a.a,roundedInput:r.a,roundedBtn:d.a},created:function(){if(new RegExp(/\?.+=.*/g).test(window.location.href)&&localStorage.getItem("login_with")){var e=window.location.href,t=e.substring(e.indexOf("?")+1);this.APIRequest("social_lite/authenticate/linkedin/callback?"+t,{},function(e){console.log("Verifying authentication response: ",e),localStorage.removeItem("login_with")},function(e){console.log("Verifying authentication error! ",e)})}},methods:{login:function(e){var t=this;""!==this.username&&""!==this.password?(this.isValid=!0,l.a.authenticate(this.username,this.password,function(e){t.$router.push("dashboard")},function(e,o){$("#loading").css({display:"none"}),401===o?t.errorMessage="Username and Password did not match.":402===o&&(t.errorMessage=e.error)})):this.isValid=!1},register:function(e){console.log("register:::"),this.$router.push("/signup")},forgotPassword:function(e){console.log("forgot password:::"),this.$router.push("/request_reset_password")},gmailLogin:function(e){console.log("gmail login:::")},fbLogin:function(e){console.log("facebook login:::"),localStorage.setItem("login_with","facebook"),this.APIRequest("social_lite/authenticate/facebook/redirect",{},function(e){e.data&&e.data.url&&(console.log("Authentication with facebook response: ",e),window.location.href=e.data.url)},function(e){console.log("Authentication with facebook error! ",e)})},linkedInLogin:function(e){console.log("linkedin login:::"),localStorage.setItem("login_with","linkedin"),this.APIRequest("social_lite/authenticate/linkedin/redirect",{},function(e){e.data&&e.data.url&&(console.log("Authentication with linkedin response: ",e),window.location.href=e.data.url)},function(e){console.log("Authentication with linkedin error! ",e)})}}}},566:function(e,t,o){t=e.exports=o(471)(),t.push([e.i,".errorMessage[data-v-71e48ee4]{margin-top:-14px;color:red;font-size:10px;margin-bottom:25px!important;text-align:center}.invalidEmail[data-v-71e48ee4]{color:red;font-size:10px;margin-left:20px;margin-bottom:25px!important}.orSeparatorA[data-v-71e48ee4]{margin-top:35px;margin-bottom:15px}.orSeparatorB[data-v-71e48ee4]{margin-top:15px;margin-bottom:35px}.LoginField[data-v-71e48ee4]{margin-bottom:35px}.QouteText[data-v-71e48ee4]{font-size:50px}.SubQoute[data-v-71e48ee4]{text-align:center}.QouteCard[data-v-71e48ee4]{width:80%!important}.LoginCard[data-v-71e48ee4]{width:475px;background-color:#fff;border-radius:20px;box-shadow:3px 3px 1px -2px rgba(1,0,154,.75);-webkit-box-shadow:3px 3px 1px -2px rgba(1,0,154,.75);-moz-box-shadow:3px 3px 1px -2px rgba(1,0,154,.75)}.LoginContainer[data-v-71e48ee4]{min-height:85vh}.RowContainer[data-v-71e48ee4]{background:none}.QouteCardContainer[data-v-71e48ee4]{display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:center!important;justify-content:center!important;-ms-flex-align:center!important;align-items:center!important;background:none}.LoginCardContainer[data-v-71e48ee4]{background:none}@media (max-width:500px){.LoginCard[data-v-71e48ee4]{width:100%}}@media (max-width:1200px){.QouteCardContainer[data-v-71e48ee4]{width:90%!important}}@media (max-width:1150px){.LoginCardContainer[data-v-71e48ee4],.QouteCardContainer[data-v-71e48ee4]{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}}@media (max-width:950px){.QouteCardContainer[data-v-71e48ee4]{-ms-flex:0 0 40%;flex:0 0 40%;max-width:40%}.LoginCardContainer[data-v-71e48ee4]{-ms-flex:0 0 60%;flex:0 0 60%;max-width:60%}}@media (max-width:768px){.LoginCardContainer[data-v-71e48ee4],.QouteCardContainer[data-v-71e48ee4]{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}}","",{version:3,sources:["C:/xampp/htdocs/askthepros.com/src/modules/account/login.vue"],names:[],mappings:"AACA,+BAA+B,iBAAiB,UAAU,eAAe,6BAA8B,iBAAiB,CACvH,AACD,+BAA+B,UAAU,eAAe,iBAAiB,4BAA6B,CACrG,AACD,+BAA+B,gBAAgB,kBAAkB,CAChE,AACD,+BAA+B,gBAAgB,kBAAkB,CAChE,AACD,6BAA6B,kBAAkB,CAC9C,AACD,4BAA4B,cAAc,CACzC,AACD,2BAA2B,iBAAiB,CAC3C,AACD,4BAA4B,mBAAoB,CAC/C,AACD,4BAA4B,YAAY,sBAAuB,mBAAmB,8CAA+C,sDAAuD,kDAAmD,CAC1O,AACD,iCAAiC,eAAe,CAC/C,AACD,+BAA+B,eAAe,CAC7C,AACD,qCAAqC,8BAA+B,uBAAwB,+BAAgC,iCAAkC,gCAAiC,6BAA8B,eAAe,CAC3O,AACD,qCAAqC,eAAe,CACnD,AACD,yBACA,4BAA4B,UAAU,CACrC,CACA,AACD,0BACA,qCAAqC,mBAAoB,CACxD,CACA,AACD,0BAGA,0EAAqC,iBAAiB,aAAa,aAAa,CAC/E,CACA,AACD,yBACA,qCAAqC,iBAAiB,aAAa,aAAa,CAC/E,AACD,qCAAqC,iBAAiB,aAAa,aAAa,CAC/E,CACA,AACD,yBAGA,0EAAqC,kBAAkB,cAAc,cAAc,CAClF,CACA",file:"login.vue",sourcesContent:["\n.errorMessage[data-v-71e48ee4]{margin-top:-14px;color:red;font-size:10px;margin-bottom:25px !important;text-align:center\n}\n.invalidEmail[data-v-71e48ee4]{color:red;font-size:10px;margin-left:20px;margin-bottom:25px !important\n}\n.orSeparatorA[data-v-71e48ee4]{margin-top:35px;margin-bottom:15px\n}\n.orSeparatorB[data-v-71e48ee4]{margin-top:15px;margin-bottom:35px\n}\n.LoginField[data-v-71e48ee4]{margin-bottom:35px\n}\n.QouteText[data-v-71e48ee4]{font-size:50px\n}\n.SubQoute[data-v-71e48ee4]{text-align:center\n}\n.QouteCard[data-v-71e48ee4]{width:80% !important\n}\n.LoginCard[data-v-71e48ee4]{width:475px;background-color:white;border-radius:20px;box-shadow:3px 3px 1px -2px rgba(1,0,154,0.75);-webkit-box-shadow:3px 3px 1px -2px rgba(1,0,154,0.75);-moz-box-shadow:3px 3px 1px -2px rgba(1,0,154,0.75)\n}\n.LoginContainer[data-v-71e48ee4]{min-height:85vh\n}\n.RowContainer[data-v-71e48ee4]{background:none\n}\n.QouteCardContainer[data-v-71e48ee4]{display:-ms-flexbox !important;display:flex !important;-ms-flex-pack:center !important;justify-content:center !important;-ms-flex-align:center !important;align-items:center !important;background:none\n}\n.LoginCardContainer[data-v-71e48ee4]{background:none\n}\n@media (max-width: 500px){\n.LoginCard[data-v-71e48ee4]{width:100%\n}\n}\n@media (max-width: 1200px){\n.QouteCardContainer[data-v-71e48ee4]{width:90% !important\n}\n}\n@media (max-width: 1150px){\n.QouteCardContainer[data-v-71e48ee4]{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%\n}\n.LoginCardContainer[data-v-71e48ee4]{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%\n}\n}\n@media (max-width: 950px){\n.QouteCardContainer[data-v-71e48ee4]{-ms-flex:0 0 40%;flex:0 0 40%;max-width:40%\n}\n.LoginCardContainer[data-v-71e48ee4]{-ms-flex:0 0 60%;flex:0 0 60%;max-width:60%\n}\n}\n@media (max-width: 768px){\n.QouteCardContainer[data-v-71e48ee4]{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%\n}\n.LoginCardContainer[data-v-71e48ee4]{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%\n}\n}\n"],sourceRoot:""}])},596:function(e,t,o){var n=o(566);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);o(472)("53635128",n,!0)},649:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"LoginContainer col-sm-12"},[o("div",{staticClass:"row RowContainer"},[e._m(0),e._v(" "),o("div",{staticClass:"col-sm-5 col-md-5 col-lg-5 col-xl-5 col-xs-5 d-flex justify-content-center LoginCardContainer mb-5"},[o("div",{staticClass:"card LoginCard"},[o("div",{staticClass:"card-body LoginCardBody"},[e._m(1),e._v(" "),o("div",[""!=e.errorMessage?o("p",{staticClass:"mb-2 pb-0 errorMessage"},[e._v(e._s(e.errorMessage))]):e._e(),e._v(" "),o("roundedInput",{class:this.isValid||""!=e.username?" LoginField":"mb-0 ",attrs:{type:"text",placeholder:"Username",styles:{border:this.isValid||""!=e.username?"none":"1px solid red !important"}},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),e._v(" "),this.isValid||""!=e.username?e._e():o("p",{staticClass:"mb-0 pb-0 invalidEmail"},[e._v("Required Field")]),e._v(" "),o("roundedInput",{class:this.isValid||""!=e.password?" LoginField":"mb-0 ",attrs:{type:"password",placeholder:"Password",styles:{border:this.isValid||""!=e.password?"none":"1px solid red !important"}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),this.isValid||""!=e.password?e._e():o("p",{staticClass:"mb-0 pb-0 invalidEmail"},[e._v("Required Field")])],1),e._v(" "),o("div",{staticClass:"d-flex justify-content-between"},[o("roundedBtn",{attrs:{onClick:e.forgotPassword,text:"Forgot your password?",styles:{background:"none",color:"272727"}}}),e._v(" "),o("dialogueBtn",{attrs:{onClick:e.login,icon:"fas fa-sign-in-alt",text:"Login",styles:{backgroundColor:"#01009A",color:"white"}}})],1),e._v(" "),e._m(2),e._v(" "),o("div",{staticClass:"col-sm-12"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-sm-4 col-md-4 col-lg-4"},[o("roundedBtn",{attrs:{onClick:e.gmailLogin,icon:"fab fa-google",text:"Sign In",styles:{background:"none",color:"272727",width:"100% !important",minWidth:"100% !important",border:"1px solid #84868B"},icon_position:"left"}})],1),e._v(" "),o("div",{staticClass:"col-sm-4 col-md-4 col-lg-4"},[o("roundedBtn",{attrs:{onClick:e.fbLogin,icon:"fab fa-facebook-f",text:"Sign In",styles:{background:"none",color:"272727",width:"100% !important",minWidth:"100% !important",border:"1px solid #84868B"},icon_position:"left"}})],1),e._v(" "),o("div",{staticClass:"col-sm-4 col-md-4 col-lg-4"},[o("roundedBtn",{attrs:{onClick:e.linkedInLogin,icon:"fab fa-linkedin-in",text:"Sign In",styles:{background:"none",color:"272727",width:"100% !important",minWidth:"100% !important",border:"1px solid #84868B"},icon_position:"left"}})],1)])]),e._v(" "),e._m(3),e._v(" "),o("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 d-flex justify-content-center"},[o("dialogueBtn",{attrs:{onClick:e.register,icon:"fas fa-sign-in-alt",text:"Register Now",styles:{backgroundColor:"#F1B814",color:"white"}}})],1)])])])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"col-sm-7 col-md-7 col-lg-7 col-xl-7 col-xs-7 QouteCardContainer mb-5"},[o("div",{staticClass:"QouteCard"},[o("div",{staticClass:"SubQoute"},[o("h1",{staticClass:"QouteText",staticStyle:{color:"#01004E"}},[e._v("Become A Local Expert")])]),e._v(" "),o("div",{staticClass:"SubQoute"},[o("h1",{staticClass:"QouteText",staticStyle:{color:"#01009A"}},[e._v("With Automated Social Media Posting.")])])])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"d-flex justify-content-center pt-5 pb-5 mb-3"},[o("b",[e._v("Login with AskThePros")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"d-flex justify-content-center orSeparatorA"},[o("b",[e._v("OR")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"d-flex justify-content-center orSeparatorB"},[o("b",[e._v("OR")])])}]}}});
//# sourceMappingURL=4.10d74b6429f9ca35fca3.js.map