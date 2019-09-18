(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(23)},,,,,function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(4),s=a.n(i),o=(a(16),a(2)),l=a(5),c=a(6),u=a(9),m=a(7),d=a(10),h=a(8),p=(a(17),a(1)),g=a.n(p);g.a.arrayOf(g.a.object).isRequired,g.a.shape({id:g.a.number,title:g.a.string,user:g.a.object}).isRequired,g.a.shape({name:g.a.string,email:g.a.string,website:g.a.string}).isRequired,g.a.arrayOf(g.a.object).isRequired,g.a.func.isRequired,g.a.func.isRequired,g.a.func.isRequired,g.a.string.isRequired,g.a.number.isRequired,g.a.bool.isRequired,g.a.bool.isRequired;var b=function(e){var t=e.user;return n.a.createElement(n.a.Fragment,null,n.a.createElement("p",{className:"user-name"},t.name),n.a.createElement("p",{className:"user-mail"},t.email),n.a.createElement("p",{className:"user-website"},t.website))};a(20);var f=function(e){var t=e.todo;return n.a.createElement("li",{className:t.completed?"todo-item completed":"todo-item"},n.a.createElement("div",{className:"drawing-pin"},n.a.createElement("img",{className:"drawing-pin__img",alt:"drawing-pin",src:"./images/Drawing-Pin.png"})),n.a.createElement("h1",{className:"item-title"},t.title),n.a.createElement("div",{className:"item-user"},n.a.createElement(b,{user:t.user})))};a(21);var y=function(e){var t=e.todos;return n.a.createElement("ul",{className:"todo-list"},t.map(function(e){return n.a.createElement(f,{todo:e,key:e.id})}))},v=(a(22),function(e){var t=e.users,a=e.handleSubmitNewTodo,r=e.handleInputChange,i=e.handleSelectChange,s=e.titleValue,o=e.userValue,l=e.isErrorTitle,c=e.isErrorUser;return n.a.createElement("div",{className:"wrapper"},n.a.createElement("h1",{className:"header"},"Static list of todos"),n.a.createElement("div",{className:"form-container"},n.a.createElement("h2",{className:"form-heading"},"Add new todo"),n.a.createElement("form",{onSubmit:a,className:"form"},n.a.createElement("div",{className:"form-item"},n.a.createElement("label",null,n.a.createElement("input",{className:"form-input",type:"text",name:"title",value:s,onChange:function(e){return r(e.target.value)},maxLength:25,placeholder:"Enter what to do"})),n.a.createElement("p",{className:l?"form-error":"form-error hidden"},"Please enter the title")),n.a.createElement("div",{className:"form-item"},n.a.createElement("label",null,n.a.createElement("select",{className:"form-select",name:"user",value:o,onChange:function(e){return i(e.target.value)}},n.a.createElement("option",{value:0},"Choose a user"),t.map(function(e){return n.a.createElement("option",{key:e.id,value:e.id},e.name)}))),n.a.createElement("p",{className:c?"form-error":"form-error hidden"},"Please choose a user")),n.a.createElement("button",{type:"submit",className:"form-btn"},"Add"))))}),E=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}];function w(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}var S,N=(S=E,[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}].map(function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?w(a,!0).forEach(function(t){Object(h.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):w(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e,{user:S.find(function(t){return t.id===e.userId})})})),C=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={todosList:N,usersList:Object(o.a)(E),titleValue:"",userValue:0,isErrorTitle:!1,isErrorUser:!1},a.handleSubmitNewTodo=function(e){e.preventDefault();var t=e.target,r=t.title,n=t.user;r.value.length>0&&0!==+n.value&&a.setState(function(e){return{todosList:[].concat(Object(o.a)(e.todosList),[{userId:+n.value,id:e.todosList.length+1,title:r.value,completed:!1,user:e.usersList.find(function(e){return e.id===+n.value})}]),titleValue:"",userValue:0}}),r.value.length<=0&&0===+n.value&&a.setState({isErrorTitle:!0,isErrorUser:!0}),r.value.length<=0&&a.setState({isErrorTitle:!0}),0===+n.value&&a.setState({isErrorUser:!0})},a.handleInputChange=function(e){a.setState({titleValue:e.replace(/[^ \w]+/g,""),isErrorTitle:!1})},a.handleSelectChange=function(e){a.setState({userValue:+e,isErrorUser:!1})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.todosList,a=e.usersList,r=e.titleValue,i=e.userValue,s=e.isErrorTitle,o=e.isErrorUser;return n.a.createElement("div",null,n.a.createElement(v,{users:a,handleSubmitNewTodo:this.handleSubmitNewTodo,handleInputChange:this.handleInputChange,handleSelectChange:this.handleSelectChange,titleValue:r,userValue:i,isErrorTitle:s,isErrorUser:o}),n.a.createElement(y,{todos:t}))}}]),t}(n.a.Component);s.a.render(n.a.createElement(C,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.95b41dda.chunk.js.map