!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.components},function(e,t,n){var a=n(4),r=n(5),l=n(6),o=n(8);e.exports=function(e,t){return a(e)||r(e,t)||l(e,t)||o()},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(a=n.next()).done)&&(l.push(a.value),!t||l.length!==t);o=!0);}catch(e){i=!0,r=e}finally{try{o||null==n.return||n.return()}finally{if(i)throw r}}return l}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){var a=n(7);e.exports=function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),l=n(2),o=n.n(l),i=function(e){var t,n=e.department,l=e.setAttributes,i=e.label,c=e.disabled,s=void 0!==c&&c,u=Object(a.useState)([]),d=o()(u,2),b=d[0],p=d[1];if(void 0===n){var m=Object(a.useState)("---"),f=o()(m,2);f[0],t=f[1],l({department:"---"})}else{var O=Object(a.useState)(n),v=o()(O,2);v[0],t=v[1]}return Object(a.useEffect)((function(){fetch("/wp-json/ucscgutenbergblocks/v1/departmentcode").then((function(e){return e.text()})).then((function(e){var t=JSON.parse(e);p(t)}))}),[]),Object(a.createElement)(a.Fragment,null,Object(a.createElement)("div",{style:{width:"max-content"}},b.length>0&&Object(a.createElement)(r.SelectControl,{label:i,value:n,options:b,onChange:function(e){l({department:e}),t(e)},disabled:s}),!b.length&&Object(a.createElement)("span",null,"Subject Dropdown Loading...")))},c=function(){wp.blocks.registerBlockType("ucscblocks/coursecatalog",{title:"Course Catalog",icon:"book-alt",category:"common",attributes:{department:{type:"string"}},edit:function(e){var t=e.setAttributes,n=e.attributes.department;return Object(a.createElement)(a.Fragment,null,Object(a.createElement)(r.Panel,{header:"Course Catalog Block"},Object(a.createElement)(r.PanelBody,{title:"Set Subject",initialOpen:!0},Object(a.createElement)(i,{label:"Subject",department:n,setAttributes:t}))))},save:function(e){return null}})},s=function(e){var t,n=e.department,l=e.setAttributes,i=e.label,c=e.disabled,s=void 0!==c&&c,u=Object(a.useState)([]),d=o()(u,2),b=d[0],p=d[1];if(void 0===n){var m=Object(a.useState)("---"),f=o()(m,2);f[0],t=f[1],l({department:"---"})}else{var O=Object(a.useState)(n),v=o()(O,2);v[0],t=v[1]}return Object(a.useEffect)((function(){fetch("/wp-json/ucscgutenbergblocks/v1/cddepartmentcode").then((function(e){return e.text()})).then((function(e){var t=JSON.parse(e);p(t)}))}),[]),Object(a.createElement)(a.Fragment,null,Object(a.createElement)("div",{style:{width:"max-content"}},b.length>0&&Object(a.createElement)(r.SelectControl,{label:i,value:n,options:b,onChange:function(e){l({department:e}),t(e)},disabled:s}),!b.length&&Object(a.createElement)("span",null,"Department Dropdown Loading...")))},u=function(e){var t,n=e.division,l=e.setAttributes,i=e.label,c=e.disabled,s=void 0!==c&&c,u=Object(a.useState)([]),d=o()(u,2),b=d[0],p=d[1];if(void 0===n){var m=Object(a.useState)("---"),f=o()(m,2);f[0],t=f[1],l({division:"---"})}else{var O=Object(a.useState)(n),v=o()(O,2);v[0],t=v[1]}return Object(a.useEffect)((function(){fetch("/wp-json/ucscgutenbergblocks/v1/divisioncode").then((function(e){return e.text()})).then((function(e){var t=JSON.parse(e);p(t)}))}),[]),Object(a.createElement)(a.Fragment,null,Object(a.createElement)("div",{style:{width:"max-content"}},b.length>0&&Object(a.createElement)(r.SelectControl,{label:i,value:n,options:b,onChange:function(e){l({division:e}),t(e)},disabled:s}),!b.length&&Object(a.createElement)("span",null,"Divisions Dropdown Loading...")))},d=function(e){var t,n,l=e.pageLayout,i=e.setAttributes;if(void 0===l){var c=Object(a.useState)("list"),s=o()(c,2);t=s[0],n=s[1],i({pageLayout:"list"})}else{var u=Object(a.useState)(l),d=o()(u,2);t=d[0],n=d[1]}return Object(a.createElement)("div",{className:"vertical_radio"},Object(a.createElement)(r.RadioControl,{selected:t,onChange:function(e){n(e),i({pageLayout:e})},options:[{label:"List Layout",value:"list"},{label:"Tiled Layout",value:"tiled"},{label:"Table Layout",value:"table"}]}))},b=function(e){var t=e.setAttributes,n=e.currentAttributes,l=e.arrOfLabels,o=e.flexCheckboxes,i=e.attributeStr,c=e.checkedByDefault,s=[];if(l.map((function(e){return s.push({label:e})})),void 0===n){var u={};l.map((function(e){u[e]=void 0!==c&&c.includes(e)}));var d={};d[i]=JSON.stringify(u),t(d)}return s.map((function(e){if(void 0===n)e.arrCheckedState=void 0===c?Object(a.useState)(!1):Object(a.useState)(c.includes(e.label));else{var t=JSON.parse(n);e.arrCheckedState=Object(a.useState)(t[e.label])}})),Object(a.createElement)("div",{className:o?"flex-checkboxes":""},s.map((function(e){return Object(a.createElement)(r.CheckboxControl,{label:e.label,checked:e.arrCheckedState[0],onChange:function(a){e.arrCheckedState[1](a);var r=JSON.parse(n);r[e.label]=a;var l={};l[i]=JSON.stringify(r),t(l)}})})))},p=function(e){var t=e.setAttributes,n=e.strFacultyTypes,r=e.strStaffTypes,l=e.strGradTypes;return Object(a.createElement)("div",{className:"flex-labels"},Object(a.createElement)("h5",null,"Faculty Types"),Object(a.createElement)(b,{setAttributes:t,currentAttributes:n,arrOfLabels:["All","Regular Faculty","Lecturer","Emeriti","Research Professor","Researcher","Adjunct Faculty","Visiting Scholar","Graduate Student Instructor","Retired"],attributeStr:"strFacultyTypes"}),Object(a.createElement)("h5",null,"Staff Types"),Object(a.createElement)(b,{setAttributes:t,currentAttributes:r,arrOfLabels:["Regular Staff","Researcher","Postdoctoral Scholar"],attributeStr:"strStaffTypes",flexCheckboxes:!0}),Object(a.createElement)("h5",null,"Graduate Students"),Object(a.createElement)(b,{setAttributes:t,currentAttributes:l,arrOfLabels:["Grad Students"],attributeStr:"strGradTypes"}))},m=function(e){var t,n,l=e.setAttributes,i=e.linkToProfile,c=e.strInformationTypes;if(void 0===i){var s=Object(a.useState)(!0),u=o()(s,2);t=u[0],n=u[1],l({linkToProfile:!0})}else{var d=Object(a.useState)(i),p=o()(d,2);t=p[0],n=p[1]}return Object(a.createElement)("div",null,Object(a.createElement)("h5",null,"Link Name to Individual Profile?"),Object(a.createElement)("p",null,Object(a.createElement)("i",null,"In a small number of cases, units do not want a person's name to link to a more detailed profile page.")),Object(a.createElement)("div",{className:"vertical_radio"},Object(a.createElement)(r.RadioControl,{selected:t,onChange:function(e){n("true"===e),l({linkToProfile:"true"===e})},options:[{label:"Yes",value:!0},{label:"No",value:!1}]})),Object(a.createElement)("div",{className:"flex-labels"},Object(a.createElement)("h5",null,"List Layout Information to Display"),Object(a.createElement)(b,{setAttributes:l,currentAttributes:c,arrOfLabels:["Pronouns","Photo","Title","Department","Phone","Email","Fax","Website","Office Location","Office Hours","Mailstop","Mailing Address","Faculty Areas of Expertise","Summary of Expertise"],attributeStr:"strInformationTypes",checkedByDefault:["Photo","Title","Department","Phone","Email","Website","Office Location","Office Hours"]})))},f=function(e){var t,n,l=e.setAttributes,i=e.linkToProfile,c=e.strInformationTypesTable;if(void 0===i){var s=Object(a.useState)(!0),u=o()(s,2);t=u[0],n=u[1],l({linkToProfile:!0})}else{var d=Object(a.useState)(i),p=o()(d,2);t=p[0],n=p[1]}return Object(a.createElement)("div",null,Object(a.createElement)("h5",null,"Link Name to Individual Profile?"),Object(a.createElement)("p",null,Object(a.createElement)("i",null,"In a small number of cases, units do not want a person's name to link to a more detailed profile page.")),Object(a.createElement)("div",{className:"vertical_radio"},Object(a.createElement)(r.RadioControl,{selected:t,onChange:function(e){n("true"===e),l({linkToProfile:"true"===e})},options:[{label:"Yes",value:!0},{label:"No",value:!1}]})),Object(a.createElement)("div",{className:"flex-labels"},Object(a.createElement)("h5",null,"List Layout Information to Display"),Object(a.createElement)(b,{setAttributes:l,currentAttributes:c,arrOfLabels:["Pronouns","Title","Department","Phone","Email","Fax","Website","Office Location","Office Hours","Mailstop","Mailing Address","Faculty Areas of Expertise","Summary of Expertise"],attributeStr:"strInformationTypesTable",checkedByDefault:["Title","Department","Phone","Email"]})))},O=function(e){var t,n,l,i,c,s,u,d,b,O,v,y,j=e.setAttributes,E=e.automatedFeeds,h=e.cruzidList,g=e.strFacultyTypes,S=e.strStaffTypes,T=e.strGradTypes,C=e.manualAdd,x=e.addCruzids,A=e.excludeCruzids,k=e.displayDeptartmentAffiliates,P=e.linkToProfile,L=e.strInformationTypes,w=e.strInformationTypesTable,D=e.pageLayout;if(void 0===E){var I=Object(a.useState)(!0),F=o()(I,2);t=F[0],n=F[1],j({automatedFeeds:!0})}else{var _=Object(a.useState)(E),N=o()(_,2);t=N[0],n=N[1]}if(void 0===C){var z=Object(a.useState)(!1),B=o()(z,2);l=B[0],i=B[1],j({manualAdd:!1})}else{var M=Object(a.useState)(C),R=o()(M,2);l=R[0],i=R[1]}if(void 0===h){var G=Object(a.useState)(""),J=o()(G,2);c=J[0],s=J[1],j({cruzidList:""})}else{var H=Object(a.useState)(h),U=o()(H,2);c=U[0],s=U[1]}if(void 0===x){var W=Object(a.useState)(""),Y=o()(W,2);u=Y[0],d=Y[1],j({addCruzids:""})}else{var q=Object(a.useState)(x),K=o()(q,2);u=K[0],d=K[1]}if(void 0===A){var V=Object(a.useState)(""),$=o()(V,2);b=$[0],O=$[1],j({excludeCruzids:""})}else{var Q=Object(a.useState)(A),X=o()(Q,2);b=X[0],O=X[1]}if(void 0===k){var Z=Object(a.useState)(!1),ee=o()(Z,2);v=ee[0],y=ee[1],j({displayDeptartmentAffiliates:!1})}else{var te=Object(a.useState)(k),ne=o()(te,2);v=ne[0],y=ne[1]}return Object(a.createElement)("div",null,Object(a.createElement)("div",{className:"vertical_radio"},Object(a.createElement)(r.RadioControl,{selected:t,onChange:function(e){n("true"===e),j({automatedFeeds:"true"===e})},options:[{label:"Use Automated Feed(s)",value:!0},{label:"Create My Own List of People to Display",value:!1}]})),!t&&Object(a.createElement)("div",null,Object(a.createElement)("h5",null,"List Individuals (Enter CruzIDs separated by commas)"),Object(a.createElement)("p",null,Object(a.createElement)("i",null,"List individuals in the order you'd like them to appear on the page.")),Object(a.createElement)(r.TextareaControl,{value:c,onChange:function(e){s(e),j({cruzidList:e})}})),t&&Object(a.createElement)("div",null,Object(a.createElement)(p,{setAttributes:j,strFacultyTypes:g,strStaffTypes:S,strGradTypes:T}),Object(a.createElement)("h5",null,"Manually Add or Exclude Individuals from the feed?"),Object(a.createElement)("div",{className:"vertical_radio"},Object(a.createElement)(r.RadioControl,{selected:l,onChange:function(e){i("true"===e),j({manualAdd:"true"===e})},options:[{label:"Yes",value:!0},{label:"No",value:!1}]})),l&&Object(a.createElement)("div",null,Object(a.createElement)("h5",null,"Add Individuals to the Feed. (Enter CruzIDs separated by commas)"),Object(a.createElement)(r.TextareaControl,{value:u,onChange:function(e){d(e),j({addCruzids:e})}}),Object(a.createElement)("h5",null,"Exclude Individuals from the Feed. (Enter CruzIDs separated by commas)"),Object(a.createElement)(r.TextareaControl,{value:b,onChange:function(e){O(e),j({excludeCruzids:e})}})),Object(a.createElement)("div",null,Object(a.createElement)("h5",null,"Display Department Affiliates? (Rare for administrative units.)"),Object(a.createElement)("p",null,Object(a.createElement)("i",null,"For example, a faculty member is officially associated with the History Department but is also affiliated with College Nine because they teach a College Nine Core Course.")),Object(a.createElement)("div",{className:"flex-labels"},Object(a.createElement)(r.CheckboxControl,{label:"Display Affiliates",checked:v,onChange:function(e){y(e),j({displayDeptartmentAffiliates:e})}})))),"table"!==D?Object(a.createElement)(m,{setAttributes:j,linkToProfile:P,strInformationTypes:L}):Object(a.createElement)(f,{setAttributes:j,linkToProfile:P,strInformationTypesTable:w}))},v=function(){wp.blocks.registerBlockType("ucscblocks/campusdirectory",{title:"Campus Directory",icon:"welcome-learn-more",category:"common",attributes:{pageLayout:{type:"string"},automatedFeeds:{type:"boolean"},cruzidList:{type:"string"},strFacultyTypes:{type:"string"},strStaffTypes:{type:"string"},strGradTypes:{type:"string"},manualAdd:{type:"boolean"},addCruzids:{type:"string"},excludeCruzids:{type:"string"},displayDeptartmentAffiliates:{type:"boolean"},linkToProfile:{type:"boolean"},strInformationTypes:{type:"string"},strInformationTypesTable:{type:"string"},department:{type:"string"},division:{type:"string"},deptOrDiv:{type:"string"}},edit:function(e){var t,n=e.setAttributes,l=e.attributes,i=l.pageLayout,c=l.automatedFeeds,b=l.cruzidList,p=l.strFacultyTypes,m=l.strStaffTypes,f=l.strGradTypes,v=l.manualAdd,y=l.addCruzids,j=l.excludeCruzids,E=l.displayDeptartmentAffiliates,h=l.linkToProfile,g=l.strInformationTypes,S=l.strInformationTypesTable,T=l.department,C=l.division,x=l.deptOrDiv,A=Object(a.useState)(!0),k=o()(A,2),P=k[0],L=k[1],w=Object(a.useState)({}),D=o()(w,2),I=D[0],F=D[1];if(void 0===x){var _=Object(a.useState)("dept"),N=o()(_,2);N[0],t=N[1],n({deptOrDiv:"dept"})}else{var z=Object(a.useState)(x),B=o()(z,2);B[0],t=B[1]}return Object(a.useEffect)((function(){fetch("/wp-json/ucscgutenbergblocks/v1/campusdirectoryrequirements").then((function(e){return e.text()})).then((function(e){var t=JSON.parse(e);t.ldap_pass||L(!1),F(t)}))}),[]),Object(a.createElement)(a.Fragment,null,P&&Object(a.createElement)(r.Panel,{className:"directory-block",header:"Directory Block"},Object(a.createElement)(r.PanelBody,{title:"Set Department or Division",initialOpen:!0},Object(a.createElement)(r.RadioControl,{selected:x,options:[{label:"Department",value:"dept"},{label:"Division",value:"div"}],onChange:function(e){n({deptOrDiv:e}),t(e)}}),Object(a.createElement)("hr",null),Object(a.createElement)(s,{label:"Department",department:T,setAttributes:n,disabled:!("dept"===x)}),Object(a.createElement)(u,{label:"Division",division:C,setAttributes:n,disabled:!("div"===x)})),Object(a.createElement)(r.PanelBody,{title:"Layout Type",initialOpen:!0},Object(a.createElement)(r.PanelRow,null,Object(a.createElement)(d,{setAttributes:n,pageLayout:i}))),Object(a.createElement)(r.PanelBody,{title:"People and Information to Display",initialOpen:!0},Object(a.createElement)(r.PanelRow,null,Object(a.createElement)(O,{setAttributes:n,automatedFeeds:c,cruzidList:b,strFacultyTypes:p,strStaffTypes:m,strGradTypes:f,manualAdd:v,addCruzids:y,excludeCruzids:j,displayDeptartmentAffiliates:E,linkToProfile:h,strInformationTypes:g,strInformationTypesTable:S,pageLayout:i})))),!P&&Object(a.createElement)(a.Fragment,null,Object(a.createElement)("h2",null,"This Block is not Configured Correctly"),!I.ldap_pass&&I.multisite&&Object(a.createElement)(a.Fragment,null,Object(a.createElement)("h4",null,"The LDAP password can be set at the network level ",Object(a.createElement)("a",{target:"_blank",href:"/wp-admin/network/settings.php?page=ucsc-gutenberg-blocks-network-settings"},"here.")),Object(a.createElement)("h6",null,"Or the LDAP password can be set at the site level below.")),!I.ldap_pass&&Object(a.createElement)("h4",null,"The LDAP password needs to be set here ",Object(a.createElement)("a",{target:"_blank",href:"/wp-admin/options-general.php?page=ucsc_gutenberg_blocks_settings_page"},"here."))))},save:function(e){return null}})},y=function(){wp.blocks.registerBlockType("ucscblocks/classschedule",{title:"Class Schedule",icon:"smiley",category:"common",attributes:{department:{type:"string"}},edit:function(e){var t=e.setAttributes,n=e.attributes.department;return Object(a.createElement)(a.Fragment,null,Object(a.createElement)(r.Panel,{header:"Class Schedule Block"},Object(a.createElement)(r.PanelBody,{title:"Set Subject",initialOpen:!0},Object(a.createElement)(i,{label:"Subject",department:n,setAttributes:t}))))},save:function(e){return null}})},j=n(3),E=function(){wp.blocks.registerBlockType("ucscblocks/accordion",{title:"Accordion",icon:"menu",category:"common",attributes:{openOnPageLoad:{type:"boolean"},title:{type:"string"}},edit:function(e){var t=e.setAttributes,n=e.attributes;return Object(a.createElement)(a.Fragment,null,Object(a.createElement)(j.InspectorControls,{key:"setting"},Object(a.createElement)(r.Panel,null,Object(a.createElement)(r.PanelBody,null,Object(a.createElement)(r.CheckboxControl,{label:"Open on page load",checked:n.openOnPageLoad,onChange:function(e){return t({openOnPageLoad:e})}})))),Object(a.createElement)("details",{className:"ucsc-accordion",open:"true"},Object(a.createElement)("summary",null,Object(a.createElement)("input",{placeholder:"Accordion Item Title",value:n.title,onKeyUp:function(e){e.preventDefault()},onChange:function(e){return t({title:e.target.value})}})),Object(a.createElement)(j.InnerBlocks,null)))},save:function(){return Object(a.createElement)("div",null,Object(a.createElement)(j.InnerBlocks.Content,null))}})};c(),v(),y(),E()}]);