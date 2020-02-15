(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{20:function(e,t,n){e.exports=n(32)},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(7),o=n.n(c),i=n(2),s=n.n(i),u=n(3),l=n(12),p=n(13),E=n(18),d=n(14),m=n(19),f=n(1),y=function(){return{type:"FETCH_POKEMON_LIST_BEGIN"}},h=function(e){return{type:"FETCH_POKEMON_LIST_SUCCESS",payload:e}},_=function(e){return{type:"FETCH_POKEMON_LIST_FAILURE",payload:{error:e}}},S=function(e){return{type:"POKEMON_LIST_ADD_FILTER",payload:e}},v=function(){return{type:"FETCH_POKEMON_BEGIN"}},C=function(e){return{type:"FETCH_POKEMON_SUCCESS",payload:e}},O=function(e){return{type:"FETCH_POKEMON_FAILURE",payload:e}},g=function(){return{type:"FETCH_POKEMON_SPECIES_BEGIN"}},N=function(e){return{type:"FETCH_POKEMON_SPECIES_SUCCESS",payload:e}},k=function(e){return{type:"FETCH_POKEMON_SPECIES_FAILURE",payload:{error:e}}},I=function(e){return{type:"FETCH_ABILITY_SUCCESS",payload:e}},b=function(e){return{type:"FETCH_TYPE_SUCCESS",payload:e}};var T,R=Object(f.b)((function(e){return{sprites:e.pokemonReducer.sprites,currentIndex:e.pokemonReducer.currentIndex,name:e.pokemonReducer.pokemon.name}}))((function(e){return a.a.createElement("div",{className:"sprites"},a.a.createElement("img",{alt:e.name,src:e.sprites[e.currentIndex]}),a.a.createElement("input",{className:"spriteButton",type:"button",value:"<=",onClick:function(){return function(e){e.currentIndex>0&&e.dispatch({type:"SPRITE_DECREMENT"})}(e)}}),a.a.createElement("input",{className:"spriteButton",type:"button",value:"=>",onClick:function(){return function(e){e.currentIndex<3&&e.dispatch({type:"SPRITE_INCREMENT"})}(e)}}))})),L=(T=function(){var e=Object(u.a)(s.a.mark((function e(t,n){var r,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.dispatch({type:"ABILITY_SCREEN_SHOW"}),t.dispatch({type:"FETCH_ABILITY_BEGIN"}),e.next=4,fetch(n.target.id);case 4:return r=e.sent,e.next=7,r.json();case 7:return a=e.sent,e.next=10,t.dispatch(I(a));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),function(e,t){return T(e,t).catch((function(t){return e.dispatch(function(e){return{type:"FETCH_ABILITY_FAILURE",payload:{error:e}}}(String(t)))}))});var F=Object(f.b)((function(e){return{abilities:e.pokemonReducer.pokemon.abilities}}))((function(e){return a.a.createElement("div",{className:"abilities"},a.a.createElement("div",null,"ABILITIES:"),e.abilities.map((function(t){return a.a.createElement("li",{key:t.ability.name,id:t.ability.url,onClick:function(t){return L(e,t)}},t.ability.name.toUpperCase().replace(/-/," "))})))})),P=function(){var e=Object(u.a)(s.a.mark((function e(t,n){var r,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.dispatch({type:"FETCH_TYPE_BEGIN"}),t.dispatch({type:"TYPE_SCREEN_SHOW"}),e.next=4,fetch(n.target.id);case 4:return r=e.sent,e.next=7,r.json();case 7:return a=e.sent,e.next=10,t.dispatch(b(a));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),A=Object(f.b)((function(e){return{types:e.pokemonReducer.pokemon.types}}))((function(e){return a.a.createElement("div",{className:"types"},a.a.createElement("div",null,"TYPES:"),e.types.map((function(t){return a.a.createElement("li",{key:t.type.name,id:t.type.url,onClick:function(t){return P(e,t).catch((function(t){return e.dispatch(function(e){return{type:"FETCH_TYPE_FAILURE",payload:{error:e}}}(String(t)))}))}},t.type.name.toUpperCase())})))})),x=Object(f.b)((function(e){return{stats:e.pokemonReducer.pokemon.stats}}))((function(e){return a.a.createElement("div",{className:"stats"},a.a.createElement("div",null,"HP: ",e.stats[5].base_stat),a.a.createElement("div",null,"ATTACK: ",e.stats[4].base_stat),a.a.createElement("div",null,"DEFENSE: ",e.stats[3].base_stat),a.a.createElement("div",null,"SPECIAL ATTACK: ",e.stats[2].base_stat),a.a.createElement("div",null,"SPECIAL DEFENSE: ",e.stats[1].base_stat),a.a.createElement("div",null,"SPEED: ",e.stats[0].base_stat))})),w=function(e){e.dispatch({type:"CLOSE_ALL_SCREENS"}),e.dispatch({type:"ABILITY_SCREEN_CLEAR"})};var j=Object(f.b)((function(e){return{ability:e.abilityScreenReducer.ability,ready:e.abilityScreenReducer.ready,isFetching:e.abilityScreenReducer.isFetching,error:e.abilityScreenReducer.error}}))((function(e){return null!==e.error?a.a.createElement("div",{className:"screen"},a.a.createElement("p",null,"The following error was found during loading:"),a.a.createElement("p",null,e.error),a.a.createElement("p",{className:"screen-close",onClick:function(){return w(e)}},"Close screen")):e.ready?a.a.createElement("div",{className:"screen"},a.a.createElement("div",{className:"screen-text"},"ABILITY NAME: ",e.ability.name.toUpperCase().replace(/-/," ")," "),a.a.createElement("div",{className:"screen-text"},"ID: ",e.ability.id),a.a.createElement("div",{className:"screen-text"},"EFFECT: ",e.ability.effect_entries[0].effect),a.a.createElement("div",{className:"screen-text"},"USERS: ",e.ability.pokemon.map((function(e){return String(e.pokemon.name.toUpperCase())+" "}))),a.a.createElement("button",{className:"screen-close",onClick:function(){return w(e)}},"Close screen")):a.a.createElement("div",{className:"screen"},a.a.createElement("p",null,"Loading..."),a.a.createElement("p",{className:"screen-close",onClick:function(){return w(e)}},"Close screen"))})),M=function(e){e.dispatch({type:"CLOSE_ALL_SCREENS"}),e.dispatch({type:"TYPE_SCREEN_CLEAR"})};var U=Object(f.b)((function(e){return{type:e.typeScreenReducer.type,ready:e.typeScreenReducer.ready,isFetching:e.typeScreenReducer.isFetching,error:e.typeScreenReducer.error}}))((function(e){return null!==e.error?a.a.createElement("div",{className:"screen"},a.a.createElement("p",null,"The following error was found during loading:"),a.a.createElement("p",null,e.error),a.a.createElement("p",{className:"screen-close",onClick:function(){return M(e)}},"Close screen")):e.ready?a.a.createElement("div",{className:"screen"},a.a.createElement("div",{className:"screen-text"},"TYPE NAME: ",e.type.name.toUpperCase()),a.a.createElement("div",{className:"screen-text"},"ID: ",e.type.id),a.a.createElement("div",{className:"screen-text"},"2x DAMAGE FROM: ",e.type.damage_relations.double_damage_from.map((function(e){return String(e.name.toUpperCase())+" "})),a.a.createElement("br",null),"2x DAMAGE TO: ",e.type.damage_relations.double_damage_to.map((function(e){return String(e.name.toUpperCase())+" "}))),a.a.createElement("div",{className:"screen-text"},"1/2 DAMAGE FROM: ",e.type.damage_relations.half_damage_from.map((function(e){return String(e.name.toUpperCase())+" "})),a.a.createElement("br",null),"1/2 DAMAGE TO: ",e.type.damage_relations.half_damage_to.map((function(e){return String(e.name.toUpperCase())+" "}))),a.a.createElement("div",{className:"screen-text"},"NO DAMAGE FROM: ",e.type.damage_relations.no_damage_from.map((function(e){return String(e.name.toUpperCase())+" "})),a.a.createElement("br",null),"NO DAMAGE TO: ",e.type.damage_relations.no_damage_to.map((function(e){return String(e.name.toUpperCase())+" "}))),a.a.createElement("p",{onClick:function(){return M(e)},className:"screen-close"},"Close screen")):a.a.createElement("div",{className:"screen"},a.a.createElement("p",null,"Loading..."),a.a.createElement("p",{onClick:function(){return M(e)},className:"screen-close"},"Close screen"))}));var H=Object(f.b)((function(e){return{moves:e.pokemonReducer.pokemon.moves}}))((function(e){var t=[];return e.moves.map((function(e){return t.push([e.version_group_details[0].level_learned_at,e.move.name])})),function(e){var t,n=e.length-1;do{t=!1;for(var r=0;r<n;r++)if(e[r][0]>e[r+1][0]){var a=e[r];e[r]=e[r+1],e[r+1]=a,t=!0}}while(t)}(t),function(e){for(var t=e.length,n=0,r=0;r<t;r++)0===e[r][0]&&n++;var a=e.splice(0,n);e=e.concat(a)}(t),a.a.createElement("div",{className:"screen"},t.map((function(e){return a.a.createElement("div",{key:e[1]}," ",e[1].toUpperCase().replace(/-/," ")," learned at: ",e[0])})),a.a.createElement("p",{onClick:function(){return e.dispatch({type:"CLOSE_ALL_SCREENS"})},className:"screen-close"}," Close screen"))}));var D=Object(f.b)((function(e){return{species:e.pokemonSpeciesReducer.species}}))((function(e){return a.a.createElement("div",{className:"description"},e.species.flavor_text_entries.filter((function(e){return"en"===e.language.name&&void 0!==e.flavor_text}))[0].flavor_text)}));var B=Object(f.b)((function(e){return{pokemon:e.pokemonReducer.pokemon,pokemonIsReady:e.pokemonReducer.ready,speciesIsReady:e.pokemonSpeciesReducer.ready,error:e.error,UIReducer:e.UIReducer}}))((function(e){return e.pokemonIsReady&&e.speciesIsReady?a.a.createElement("div",{className:"app"},a.a.createElement("div",{className:"main"},a.a.createElement(R,null),a.a.createElement("div",{className:"name",id:"name"},e.pokemon.name.toUpperCase()),a.a.createElement("div",{className:"height"},"HEIGHT: ",e.pokemon.height/10," METRE"),a.a.createElement("div",{className:"weight"},"WEIGHT: ",e.pokemon.weight/10," KG."),a.a.createElement("div",{className:"number"},"No. ",function(e){for(var t=String(e);t.length<3;)t="0"+t;return t}(e.pokemon.id)),a.a.createElement(A,null),a.a.createElement(F,null),a.a.createElement("div",{className:"moves",onClick:function(){return e.dispatch({type:"MOVE_SCREEN_SHOW"})}},"MOVELIST"),a.a.createElement(x,null),a.a.createElement(D,null),e.UIReducer.showTypeScreen&&a.a.createElement(U,null),e.UIReducer.showAbilityScreen&&a.a.createElement(j,null),e.UIReducer.showMoveScreen&&a.a.createElement(H,null))):a.a.createElement("div",null,"Loading...")}));var K=Object(f.b)((function(e){return{results:e.pokemonListReducer.pokemonList.results}}))((function(e){return a.a.createElement("div",{className:"searcher"},a.a.createElement("input",{id:"page-searcher",type:"text",defaultValue:"Filter by name:",onClick:function(e){return e.target.value=""},onChange:function(t){return function(e,t){""===t.target.value?e.dispatch(S(null)):e.dispatch(S(t.target.value.toLowerCase().split("")))}(e,t)}}))})),Y=function(e,t,n){var r=function(e,t){var n=[];if(void 0!==t.pokemon[e.join("")])return[e.join("")];e.forEach((function(e){void 0!==t.letters[e]&&t.letters[e].forEach((function(e){return n.push(e)}))}));for(var r={},a=0;a<n.length;a++)void 0===r[n[a]]?r[n[a]]=1:r[n[a]]++;return Object.keys(r).filter((function(t){return r[t]>=e.length}))}(t,n),a=Object.keys(e).filter((function(t){return-1!==r.indexOf(e[t].name)})),c=[];return a.forEach((function(t){return c.push(e[t])})),c},G=function(){var e=Object(u.a)(s.a.mark((function e(t,n){var r,a,c,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.dispatch(v()),e.next=3,fetch("https://pokeapi.co/api/v2/pokemon/"+n.target.id);case 3:return r=e.sent,e.next=6,r.json();case 6:return a=e.sent,e.next=9,t.dispatch(C(a));case 9:return t.dispatch(g()),e.next=12,fetch(a.species.url);case 12:return c=e.sent,e.next=15,c.json();case 15:return o=e.sent,e.next=18,t.dispatch(N(o));case 18:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();var W=Object(f.b)((function(e){return{pokemonList:e.pokemonListReducer.pokemonList,ready:e.pokemonListReducer.ready,filter:e.pokemonListReducer.filter,results:e.pokemonListReducer.pokemonList.results}}))((function(e){if(!e.ready)return a.a.createElement("p",null," Loading...");var t=function(e){var t={},n={};return e.map((function(e){return t[e.name]=new Set(e.name.split(""))})),Object.keys(t).forEach((function(e){return Array.from(t[e]).map((function(t){void 0===n[t]&&(n[t]=[]),n[t].push(e)}))})),{pokemon:t,letters:n}}(e.pokemonList.results),n=null!==e.filter?Y(e.pokemonList.results,e.filter,t):e.pokemonList.results;return n.length<1?a.a.createElement("div",{className:"pokemon-list"},a.a.createElement("p",null,"No results found!")):a.a.createElement("div",{className:"pokemon-list"},n.map((function(t){return a.a.createElement("input",{readOnly:!0,key:t.name,value:t.name.toUpperCase(),id:t.name,className:"pokemonButton",onClick:function(t){return G(e,t).catch((function(t){return function(e,t){e.dispatch(O(String(t))),e.dispatch(k(String(t)))}(e,t)}))}})})))})),V=function(){return a.a.createElement("div",{className:"sidebar"},a.a.createElement(W,null),a.a.createElement(K,null))},X=(n(31),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(E.a)(this,Object(d.a)(t).call(this,e))).componentDidMount=function(e){n.fetchPokemonAPI().catch((function(t){return e.dispatch(_(String(t)))}))},n.fetchPokemonAPI=Object(u.a)(s.a.mark((function e(){var t,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.props.dispatch(y()),e.next=3,fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=964");case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,e.next=9,n.props.dispatch(h(r));case 9:return e.next=11,n.fetchPokemon(1).catch((function(e){n.props.dispatch(O(String(e))),n.props.dispatch(k(String(e)))}));case 11:case"end":return e.stop()}}),e)}))),n.fetchPokemon=function(){var e=Object(u.a)(s.a.mark((function e(t){var r,a,c,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.props.dispatch(v()),e.next=3,fetch("https://pokeapi.co/api/v2/pokemon/"+t);case 3:return r=e.sent,e.next=6,r.json();case 6:return a=e.sent,e.next=9,n.props.dispatch(C(a));case 9:return n.props.dispatch(g()),e.next=12,fetch(a.species.url);case 12:return c=e.sent,e.next=15,c.json();case 15:return o=e.sent,e.next=18,n.props.dispatch(N(o));case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={},n}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return this.props.error.filter((function(e){return null!==e})).length>0?a.a.createElement("div",null,a.a.createElement("p",null,"The following errors were found:"),this.props.error.map((function(e){return null!==e?a.a.createElement("p",{key:e},e):null}))):this.props.ready.filter((function(e){return!0!==e})).length>0?a.a.createElement("div",null,a.a.createElement("p",null,"Loading...")):a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"logo"},a.a.createElement("a",{href:"https://pokeapi.co"},"Pok\xe9API")),a.a.createElement("div",{className:"header"},a.a.createElement("h1",null,"POK\xe9DEX")),a.a.createElement(V,null),a.a.createElement(B,null))}}]),t}(a.a.Component));var J=Object(f.b)((function(e){return{pokemonList:e.pokemonListReducer.pokemonList,ready:[e.pokemonListReducer.ready,e.pokemonReducer.ready,e.pokemonSpeciesReducer.ready],error:[e.pokemonListReducer.error,e.pokemonReducer.error,e.pokemonSpeciesReducer.error],screen:e.UIReducer.screen}}))(X),q=n(5),z=n(16),Q=n(17);function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(n,!0).forEach((function(t){Object(Q.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ee={showMoveScreen:!1,showAbilityScreen:!1,showTypeScreen:!1},te={ready:!1,error:null,isFetching:!1,pokemonList:{},filter:null,filteredList:null},ne={pokemon:{},isFetching:!1,sprites:[],currentIndex:0,ready:!1,error:null},re={species:{},isFetching:!1,ready:!1,error:null},ae={isFetching:!1,ready:!1,error:null,ability:{}},ce={isFetching:!1,ready:!1,error:null,type:{}},oe=Object(q.c)({pokemonListReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_POKEMON_LIST_BEGIN":return $({},e,{isFetching:!0,error:null});case"FETCH_POKEMON_LIST_SUCCESS":return $({},e,{isFetching:!1,ready:!0,pokemonList:t.payload});case"FETCH_POKEMON_LIST_FAILURE":return $({},e,{isFetching:!1,ready:!1,pokemonList:{},error:t.payload.error});case"POKEMON_LIST_ADD_FILTER":return $({},e,{filter:t.payload});case"POKEMON_LIST_FILTER":return $({},e,{filteredList:t.payload});default:return e}},pokemonReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_POKEMON_BEGIN":return $({},e,{isFetching:!0});case"FETCH_POKEMON_SUCCESS":return $({},e,{pokemon:t.payload,isFetching:!1,sprites:[t.payload.sprites.front_default,t.payload.sprites.back_default,t.payload.sprites.front_shiny,t.payload.sprites.back_shiny],currentIndex:0,ready:!0});case"FETCH_POKEMON_FAILURE":return $({},e,{isFetching:!1,ready:!1,error:t.payload});case"SPRITE_INCREMENT":return $({},e,{currentIndex:e.currentIndex+1});case"SPRITE_DECREMENT":return $({},e,{currentIndex:e.currentIndex-1});default:return e}},pokemonSpeciesReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_POKEMON_SPECIES_BEGIN":return $({},e,{isFetching:!0});case"FETCH_POKEMON_SPECIES_SUCCESS":return $({},e,{isFetching:!1,ready:!0,species:t.payload});case"FETCH_POKEMON_SPECIES_FAILURE":return $({},e,{isFetching:!1,ready:!1,error:t.payload.error});default:return e}},abilityScreenReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ABILITY_BEGIN":return $({},e,{isFetching:!0});case"FETCH_ABILITY_SUCCESS":return $({},e,{isFetching:!1,ready:!0,ability:t.payload});case"FETCH_ABILITY_FAILURE":return $({},e,{isFetching:!1,ready:!1,error:t.payload.error});case"ABILITY_SCREEN_CLEAR":return ae;default:return e}},typeScreenReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_TYPE_BEGIN":return $({},e,{isFetching:!0});case"FETCH_TYPE_SUCCESS":return $({},e,{isFetching:!1,ready:!0,type:t.payload});case"FETCH_TYPE_FAILURE":return $({},e,{isFetching:!1,ready:!1,error:t.payload.error});case"TYPE_SCREEN_CLEAR":return ce;default:return e}},UIReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MOVE_SCREEN_SHOW":return $({},e,{showMoveScreen:!0});case"ABILITY_SCREEN_SHOW":return $({},e,{showAbilityScreen:!0});case"TYPE_SCREEN_SHOW":return $({},e,{showTypeScreen:!0});case"CLOSE_ALL_SCREENS":return $({},e,{showAbilityScreen:!1,showMoveScreen:!1,showTypeScreen:!1});default:return e}}}),ie=Object(q.e)(oe,Object(q.d)(Object(q.a)(z.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));o.a.render(a.a.createElement(f.a,{store:ie},a.a.createElement(J,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.677eb657.chunk.js.map