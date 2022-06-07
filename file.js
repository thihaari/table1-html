// // // // // // // // let employee=[
// // // // // // // //     { 
// // // // // // // //         id:101,
// // // // // // // //         name:"lavish",
// // // // // // // //         Designation:"FSD",
// // // // // // // //         yearsofexperience:12,
// // // // // // // //     },
// // // // // // // //   {
// // // // // // // //       id:102,
// // // // // // // //       name:"SWapil",
// // // // // // // //       Designation:"sde-2",
// // // // // // // //       yearsofexperience:10,
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //       id:103,
// // // // // // // //       name:"pavan",
// // // // // // // //       Designation:"Linux Adminstrator",
// // // // // // // //       yearsofexperience:14,
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //       id:104,
// // // // // // // //       name:"Shiva",
// // // // // // // //       Designation:"Sde-1",
// // // // // // // //       yearsofexperience:5,
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //       id:105,
// // // // // // // //       name:"Sai",
// // // // // // // //       Designation:"Automation Tester",
// // // // // // // //       yearsofexperience:10,
// // // // // // // //   },

// // // // // // // // ]
// // // // // // // // // let employeeid =[];
// // // // // // // // // employee.forEach(function(employee) {
// // // // // // // // //     employeeid.push(employee.id);;
// // // // // // // // // })
// // // // // // // // //  console.log(employeename);
// // // // // // // // // let employeeid = employee.map(function(data) {
// // // // // // // // //      return data.id; });
// // // // // // // // // //      console.log(employeeid);
// // // // // // // // // let employeeid=employee.map((x) =>x.id);
// // // // // // // // // console.log(employeeid);
// // // // // // // // //TotalExp=employee.reduce((acc, employee) => acc+employee.yearsofexperience,0);
// // // // // // // // //console.log(TotalExp);
// // // // // // // const employees=[
// // // // // // //     {
// // // // // // //       name:"john",
// // // // // // //       year:2014,
// // // // // // //       rank:2
// // // // // // //     },
  
// // // // // // //     {
// // // // // // //       name:"kohn",
// // // // // // //       year:2018,
// // // // // // //       rank:1
// // // // // // //     },
  
// // // // // // //     {
// // // // // // //       name:"Mohn",
// // // // // // //       year:2020,
// // // // // // //       rank:3
// // // // // // //     },
  
// // // // // // //     {
// // // // // // //       name:"pavan",
// // // // // // //       year:2022,
// // // // // // //       rank:5
// // // // // // //     },
  
  
// // // // // // //   ]
  
// // // // // // //   let data = employees.filter((employee) => employee.year===2014 || employee.rank===1).sort((a,b)=>a.rank-b.rank).map((employee)=> employee.name);

// // // // // // //   console.log(data);
// // // // // // let data=[
// // // // // //     {
// // // // // //       name:"joey",
// // // // // //       age:3,
// // // // // //       type:"dog"
  
// // // // // //     },
// // // // // //     {
// // // // // //       name:"Lizzy",
// // // // // //       age:6,
// // // // // //       type:"dog"
      
// // // // // //     },
// // // // // //     {
// // // // // //       name:"red",
// // // // // //       age:2,
// // // // // //       type:"dog"
      
// // // // // //     },
// // // // // //     {
// // // // // //       name:"Sheru",
// // // // // //       age:4,
// // // // // //       type:"dog"
      
// // // // // //     },
// // // // // //     {
// // // // // //       name:"Butters",
// // // // // //       age:6,
// // // // // //       type:"dog"
      
// // // // // //     },
  
// // // // // //     {
// // // // // //       name:"John",
// // // // // //       age:45,
// // // // // //       type:"human"
      
// // // // // //     }
// // // // // //   ]
// // // // // //   let result =data.filter((d)=>{
// // // // // //       return d.type ==="dog"
// // // // // // }).map((d)=>{
// // // // // //     return d.age*7;
// // // // // // }).reduce((sum, d)=>{
// // // // // //     return sum + d;
// // // // // // })
// // // // // // console.log(result);
// // // // // function add(a,b,c){
// // // // //     return a+b+c;

// // // // // }
// // // // // let numbers=[1,2,3,4,5];
// // // // // console.log(add(...numbers));
// // // // function numbers(a,b,...rest){
// // // //     console.log(a);
// // // //     console.log(b);
// // // //     console.log(rest);
// // // // }
// // // // numbers(1,2,3,4);
// // // function sum(...args){
// // //     let result=0;
// // //     for( let arg of args ){
// // //         result=result+arg;
// // //   }
// // //   console.log(result);
// // // }
// // // sum(1,2,3);
// // // sum(1,2,3,4,5,6);
// // let{firstname,rest}={
// //     firstname : "rahul",
// //     lastname :"attuluri",
// //     age :27
// // }
// // console.log(firstname);
// // console.log(rest);
// var request =new XMLHttpRequest();
// request.open('GET',"https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
// request.send();
// request.onload = function(){
//     var data=Json.parse(request.response);
//     console.log(data);
// }


// // {
// //     let a=data.filter((d) => {return d.type ===a});
// // }
// // console.log(a);
fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
.then(Response=>{return Response.json()}).then(data => {console.log(data)});
