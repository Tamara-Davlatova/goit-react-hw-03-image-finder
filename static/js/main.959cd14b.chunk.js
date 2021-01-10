(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__3p3am",Modal:"Modal_Modal__3yRpO",image:"Modal_image__N76yX"}},18:function(e,t,a){e.exports={GalleryItem:"ImageGalleryItem_GalleryItem__1NWRQ",Image:"ImageGalleryItem_Image__2ftq5"}},19:function(e,t,a){e.exports={container:"Button_container__15rqm",Button:"Button_Button__2X3SG"}},24:function(e,t,a){e.exports={Gallery:"ImageGallery_Gallery__3hgpL"}},26:function(e,t,a){e.exports={loader:"Loader_loader__2hkUO"}},33:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),c=a.n(r),o=a(3),i=a.n(o),s=(a(33),a(4)),l=a(5),u=a(7),m=a(6),h=a(11),g=(a(34),a(8)),b=a.n(g),j=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={imageTitle:""},e.handleInputChange=function(t){e.setState({imageTitle:t.target.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.imageTitle.trim()?(e.props.onSubmit(e.state.imageTitle),e.setState({imageTitle:""})):h.b.error("Enter image title")},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("header",{className:b.a.Searchbar,children:Object(n.jsxs)("form",{onSubmit:this.handleSubmit,className:b.a.SearchForm,children:[Object(n.jsx)("button",{type:"submit",className:b.a.button,children:Object(n.jsx)("span",{className:b.a.button_label,children:"Search"})}),Object(n.jsx)("input",{onChange:this.handleInputChange,className:b.a.input,type:"text",autoComplete:"off",autoFocus:!0,value:this.state.imageTitle,placeholder:"Search images and photos"})]})})}}]),a}(r.Component),d=a(20),p=a(18),f=a.n(p),O=a(12),_=a.n(O);function v(e){var t=e.onClose,a=e.src,r=e.alt;return Object(n.jsx)("div",{className:_.a.Overlay,onClick:function(e){e.target===e.currentTarget&&t()},children:Object(n.jsx)("div",{className:_.a.Modal,children:Object(n.jsx)("img",{src:a,alt:r,className:_.a.image})})})}var x=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={showModal:!1},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.galeryImage,r=e.alt,c=e.modalImg,o=this.state.showModal;return Object(n.jsxs)("li",{className:f.a.Item,children:[Object(n.jsx)("img",{src:a,alt:r,className:f.a.Image,onClick:this.toggleModal}),o&&Object(n.jsx)(v,{onClose:this.toggleModal,src:c,alt:r})]},t)}}]),a}(r.Component),y=a(24),S=a.n(y);function I(e){var t=e.images;return Object(n.jsx)("ul",{className:S.a.Gallery,children:t.map((function(e){return Object(n.jsx)(x,{galeryImage:e.webformatURL,alt:e.tags,modalImg:e.largeImageURL},e.id)}))})}var T=a(19),w=a.n(T),C=a(25);function M(e){var t=e.onLoadMore;return Object(n.jsx)("div",{className:w.a.container,children:Object(n.jsx)("button",{type:"submit",className:w.a.Button,onClick:function(){t(),C.animateScroll.scrollToBottom()},children:"Load more"})})}function N(e,t){return fetch("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat("19126072-909a19c03a0eedac828ee6eb3","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Error!"))}))}a(45);var k=a(26),F=a.n(k),L=a(27),G=a.n(L);function B(){return Object(n.jsx)("div",{className:F.a.loader,children:Object(n.jsx)(G.a,{type:"Oval",color:"#3f51b5",height:150,width:150})})}var A=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={images:[],page:1,error:null,status:"idle"},e.fetchImage=function(){e.setState({status:"pending"}),N(e.props.imageTitle,e.state.page).then((function(t){return e.setState((function(e){return{images:[].concat(Object(d.a)(e.images),Object(d.a)(t.hits)),page:e.page+1,status:"resolved"}}))})).catch((function(t){return e.setState({error:t,status:"rejected"})}))},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){e.imageTitle!==this.props.imageTitle&&this.setState({images:[],page:1,error:null}),e.imageTitle!==this.props.imageTitle&&this.fetchImage()}},{key:"render",value:function(){var e=this.state,t=e.status,a=e.error,r=e.images;return"idle"===t?Object(n.jsx)("h1",{style:{textAlign:"center"},children:"Enter image title"}):"pending"===t?Object(n.jsx)(B,{}):("rejected"===t&&a.message,"resolved"===t?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(I,{images:r}),Object(n.jsx)(M,{onLoadMore:this.fetchImage})]}):void 0)}}]),a}(r.Component),E=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={imageTitle:""},e.handleSearhSubmit=function(t){e.setState({imageTitle:t})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(j,{onSubmit:this.handleSearhSubmit}),Object(n.jsx)(A,{imageTitle:this.state.imageTitle}),Object(n.jsx)(h.a,{})]})}}]),a}(r.Component),q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,68)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),c(e),o(e)}))};i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(E,{})}),document.getElementById("root")),q()},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2Kgqw",SearchForm:"Searchbar_SearchForm__2KJjN",button:"Searchbar_button__17VMC",button_label:"Searchbar_button_label__2KlM9",input:"Searchbar_input__3-w3m"}}},[[65,1,2]]]);
//# sourceMappingURL=main.959cd14b.chunk.js.map