(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{218:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(17),o=n.n(i),c=(n(93),n(94),n(37)),s=n(77),l=n.n(s),m=n(78),u=n.n(m),p=n(79),d=n.n(p),h=n(16),v=n.n(h),f=n(82),g=n.n(f),b=n(21),E=n(45),w=n(80),k=n.n(w),O=n(81),j=n.n(O),N=Object(E.withStyles)(function(e){return Object(E.createStyles)({root:{width:"100%"},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},title:Object(c.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(c.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(b.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(b.fade)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing.unit,width:"auto"}),searchIcon:{width:9*e.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(c.a)({paddingTop:e.spacing.unit,paddingRight:e.spacing.unit,paddingBottom:e.spacing.unit,paddingLeft:10*e.spacing.unit,transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:120,"&:focus":{width:200}})})})(function(e){var t=e.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(l.a,{position:"static"},r.a.createElement(u.a,null,r.a.createElement(d.a,{className:t.menuButton,color:"inherit","aria-label":"Open drawer"},r.a.createElement(k.a,null)),r.a.createElement(v.a,{className:t.title,variant:"h6",color:"inherit",noWrap:!0},"Movies API Demo"),r.a.createElement("div",{className:t.grow}),r.a.createElement("div",{className:t.search},r.a.createElement("div",{className:t.searchIcon},r.a.createElement(j.a,null)),r.a.createElement(g.a,{placeholder:"Search\u2026",classes:{root:t.inputRoot,input:t.inputInput}})))))}),M=n(15),_=n(23),y=n(22),B=n(24),D=n(29),U=n.n(D),C=n(46),I="ec100598eff80eb95917837627303bb3",R="https://api.themoviedb.org/3/",x="discover/movie",A="search/movie/?query=",P=function(e){return"".concat(R).concat(e,"?api_key=").concat(I)},S=function(e){if(e.status>=400)throw new Error("Bad response from server");return e.json()},W=function e(){Object(M.a)(this,e),this.discoverMovies=Object(C.a)(U.a.mark(function e(){return U.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(P(x)).then(function(e){return S(e)}).then(function(e){return e.results});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)})),this.search=function(){var e=Object(C.a)(U.a.mark(function e(t){return U.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(P(A+t)).then(function(e){return S(e)}).then(function(e){return e.results});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},T=n(83),L=n.n(T),q=n(84),H=n.n(q),J=n(86),z=n.n(J),F=n(85),G=n.n(F),K=n(87),Q=n.n(K),X=n(25),$=n.n(X),V=n(36),Y=n.n(V),Z=function e(){Object(M.a)(this,e),this.makePosterUrl=function(e){return"https://image.tmdb.org/t/p/w185_and_h278_bestv2/".concat(e)},this.makeBackdropUrl=function(e){return"https://image.tmdb.org/t/p/w1400_and_h450_face/".concat(e)}},ee=function(e){function t(e){var n;return Object(M.a)(this,t),(n=Object(_.a)(this,Object(y.a)(t).call(this,e))).makePosterUrl=function(e){return(new Z).makePosterUrl(e)},n.makeBackdropUrl=function(e){return(new Z).makeBackdropUrl(e)},n.render=function(){return a.createElement("div",{className:"MovieDetails"},a.createElement(Y.a,{className:"MovieDetails-paper"},a.createElement(v.a,{variant:"h5",component:"h2",className:"MovieDetails-title"},a.createElement("b",null,n.props.item.title)),a.createElement($.a,null),a.createElement("div",{className:"MovieDetails-overview"},a.createElement("div",{className:"MovieDetails-overview-image"},a.createElement("img",{src:n.makePosterUrl(n.props.item.poster_path)})),a.createElement("div",{className:"MovieDetails-overview-description"},a.createElement(v.a,{component:"p",className:"MovieDetails-rating"},"Rating: ",a.createElement("i",null,n.props.item.vote_average)),a.createElement($.a,null),a.createElement(v.a,{component:"p",className:"MovieDetails-release"},"Release date: ",a.createElement("b",null,n.props.item.release_date)),a.createElement($.a,null),a.createElement(v.a,{component:"p",className:"MovieDetails-overview-text"},n.props.item.overview))),a.createElement($.a,null),a.createElement("div",{className:"MovieDetails-backdrop"},a.createElement("img",{src:n.makeBackdropUrl(n.props.item.backdrop_path),alt:"backdrop"})),a.createElement($.a,null)))},n.state={},n}return Object(B.a)(t,e),t}(a.Component),te=function(e){function t(e){var n;return Object(M.a)(this,t),(n=Object(_.a)(this,Object(y.a)(t).call(this,e))).makeImageUrl=function(e){return(new Z).makePosterUrl(e)},n.handleOpen=function(){n.setState({modalOpen:!0})},n.handleClose=function(){n.setState({modalOpen:!1})},n.render=function(){return a.createElement("div",{className:"MovieCard"},a.createElement(L.a,{onClick:n.handleOpen},a.createElement(H.a,null,a.createElement(G.a,{component:"img",className:"card-media-image",image:n.makeImageUrl(n.props.item.poster_path),title:n.props.item.title}),a.createElement(z.a,null,a.createElement(v.a,{gutterBottom:!0,variant:"h5",component:"h2",className:"MovieCard-title"},n.props.item.title)))),a.createElement(Q.a,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:n.state.modalOpen,onClose:n.handleClose},a.createElement(ee,{item:n.props.item})))},n.state={modalOpen:!1},n}return Object(B.a)(t,e),t}(a.Component),ne={vote_count:4845,id:299534,video:!1,vote_average:8.6,title:"Avengers: Endgame",popularity:303.658,poster_path:"/or06FN3Dka5tukK1e9sl16pB3iy.jpg",original_language:"en",original_title:"Avengers: Endgame",genre_ids:[12,878,28],backdrop_path:"/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",adult:!1,overview:"After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",release_date:"2019-04-24"},ae=function(e){function t(e){var n;return Object(M.a)(this,t),(n=Object(_.a)(this,Object(y.a)(t).call(this,e))).discover=function(){(new W).discoverMovies().then(function(e){console.warn(e),n.setState({items:e})})},n.componentWillMount=function(){return n.discover()},n.render=function(){return a.createElement("div",{className:"Movies"},a.createElement("h2",null,"Movies"),a.createElement("ul",{className:"Movies-list"},n.state.items.map(function(e){return a.createElement("li",{className:"Movies-list_item"},a.createElement(te,{item:e}))})))},n.state={items:[ne]},n}return Object(B.a)(t,e),t}(a.Component),re=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(N,null),r.a.createElement(ae,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},88:function(e,t,n){e.exports=n(218)},93:function(e,t,n){},94:function(e,t,n){}},[[88,1,2]]]);
//# sourceMappingURL=main.7dd9fa18.chunk.js.map