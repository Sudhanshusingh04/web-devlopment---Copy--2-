// let id =Symbol("453")
// let anotherid =Symbol("453")
// console.log(id);
// console.log(anotherid);
// console.log(id===anotherid);
// let url="https://sudhanshusingh1505@gmail.com"
// console.log(url.replace("1505", "________________"))
// console.log(url.includes("om namh sivAYA"));

// let newbalance = 20000;
// // console.log(newbalance.toString().length);
// console.log(typeof(newbalance.toString()));
// console.log();

// let value = 3000000000000;
// console.log(value);
// let math=123
// Math=34
// console.log(Math.random()*10+1);
// const max=1000
// const min=100
// console.log(Math.floor(Math.random()*(max-min)+min))
// const myarr=[0,1,2,3,4,5,6 ]
// console.log(typeof[myarr]);
// myarr.shift()
// console.log( "A",myarr);
// const myn1=myarr.slice(1,3)
// console.log("b",myn1);

// const myn2=myarr.splice(1,4)
// console.log("c",myarr);
// console.log( "s",myn2);
// const hero=["men","women","play" ,"basketball"];
// const vilen=["one" ,"two", "three"]
// console.log(hero);
//  const newhero=hero.concat(vilen)
// console.log(newhero);
// const allhero=[...hero,...vilen]
// console.log(allhero);
// const realarr=[1,2,[1,4,7,[20,43,343,8,9,10]]]
// const orignal=realarr.flat(Infinity)
// console.log(orignal);
// console.log(Array.isArray ("sudhanshu"));
// console.log(Array.from("sudhanshu"));
 


//object literals/
// const sym=Symbol("key")
// console.log(typeof sym);

// const users={
//     Name:"sudhanshu singh",
//     age:21,
//     email:"sudhanshusingh@gmail.com",
//     place:"bihar",
//     Name:"sambsadashiv" ,
//     "full name":"kumar",
//     ["mysym"]:"mykey"
// }
//    Object.freeze(users).email="kuku singh"
// console.log(users);
// console.log(users.place);

// console.log(users["Name"]);
// console.log(users["full name"]);
// console.log(users["mysym"]);
// users.check=function(){
    // console.log("hello users");
    // console.log(this.Name);
    

    
// }
// console.log(users.check());



// const tinderusers={}
// tinderusers.name="sudhanshu singh"
// tinderusers.age=21
// tinderusers.email="sudhanshusingh@gmail.com"
// Object.freeze(tinderusers).email
// tinderusers.email="kykusingh@gmail.com"

// console.log(tinderusers);
// console.log(tinderusers.name);
// console.log(Object.keys(tinderusers));
// console.log(Object.values(tinderusers));
// console.log(Object.entries(tinderusers));


//  const regularusre={
// email:"sudhanshu@iasofficers",

//   fullname:{
//     firstname:"sudhanshu",
//     lastname:"singh",

// }

// }
// console.log(regularusre.fullname.firstname);

// const obj1={1:"a",2:"b"}
// const obj2={3:"c",4:"d"}
// obj3={obj1,obj2}

// const obj3= Object.assign({},obj1,obj2)
// const obj3={...obj1,...obj2}
// console.log(obj3);
// const course ={
//    coursename:"js in hindi",
//    price:999,
//    teacher:"hitesh sir",
// }
// const {teacher:guru} = course
// console.log(guru);
// const {price}=course
// console.log(price);

//function
// function myname(){
// console.log("s");
// console.log("u");
// console.log("d");
// console.log("h");
// console.log("a");
// console.log("n");
// console.log("s");
// console.log("h");
// console.log("u");
// }
// myname()
// console.log(myname);


// function addnumbers(number1,number2){
// console.log(number1+number2);

// }
// addnumbers(3,4)


// function addnumbers(number1,number2){
//    let result=number1+number2
//    return result
// //    console.log(sudhanshu);====>will not print after return/

// }
// const result=addnumbers(3,4)
// console.log( "Result:",result);

// function logginusername(username){
// if(username===undefined){
    // console.log("pls enter user");
    
// }
//    return `${username} just logged in`

// }
// console.log(logginusername("sudhanshu"))
// console.log(logginusername())

// function calculateprice(...num1){
// return num1
// }
// console.log(calculateprice(300,200,100));

// const user={
// name:"sudhanshu singh",
// price:"free"

// }
// function handleobject(anyobj){
//     // console.log(`name is ${anyobj.name} and price is ${anyobj.price}`);
    
// }
// // handleobject(user)
// handleobject({
//     name:"sam",
//     price:990,
// })



// const myarr=[100,200,300,400]
// function getsecvalue(getarr){
//     return getarr[1]
// }
// console.log(getsecvalue(myarr));

// let a=200;
// const b=400;
// var c=400;
// if(true){
//     console.log(a);
//     console.log(b);
//     console.log(c);
    
// }


// let c=1000
// if (true) {
//     let a=200;
//     const b=400;
//      c=400;
// }
// console.log(c);


// let a=2000===>>global scope
// if (true) {
//         let a=200;
//         const b=400;              ====>    inside if is local scope or block scope
//          c=400;
// }

// console.log(a);

// function one(){
//    username= "sudhanshu singh"
    // function two(){
        // const website="youtube"
        // console.log(username);
    // }
    // console.log(website);
    // two()

// }
// one()

// if (true) {
    // username="sudhanshu singh"
    // if (username==="sudhanshu singh") {
    //     const website="youtube"
        // console.log(username+website);
        
    // }
    // console.log(website);  ====> will not print because it is outside.

    
    // console.log(username);
// }

// function addone(num){
//     return num+1;
// }
// console.log(addone(5))

// const addtwo=function (num){
    // return num+3
// }
// console.log(addtwo(5))
 
       
// const user={
    // username:"sudhanshu singh",
    // price:"free",
    // welcome:function(){
    //        console.log(`${this.username} welcome to our website`);
    //        console.log(this);
           
           
    // }
// }
// console.log(user.welcome());
// user.username="kuku"
// user.welcome()
// console.log(this);


// function chai(){
    // console.log(this);
    
// }
// chai()

// function chai (){
//   let  Username="sudhanshu singh"
//     console.log(this.Username);
    
    
// }
// chai()

// const chai=()=>{                    ===>AERO FUNCTION

//     let  Username="sudhanshu singh"
//         console.log(this);

// }
// chai()

// const addtwo=(num1,num2)=>{
// return num1+num2
// }
// console.log(addtwo(1,5))
 

// const addtwonumber=(num1,num2)=>num1+num2
// console.log(addtwon nuumber(20,20))

// const addtwonumber=(num1,num2)=> ({  username:"sudhanshu"} 
// )

// console.log(addtwonumber(20,20))

//  function addnumbers(num1,num2){
//         return num1+num2
        
//  }
//  console.log(addnumbers(2,4));
 
// (function chai(name){
    // console.log(`DB CONNECTED ${name}`);
    
// })
//  ("sudhanshu");

//  ( (chai)=>{
//     console.log(`db2 ${chai}`);
//  })
//  (8)

// l

// if (true) {
//     console.log("execute");
    
// }
// if (2=="2") {
//     console.log("execute");
    
// }
// const tempreture=40
//  if (tempreture==50) {
//     console.log("grater");
       
//  }else if(tempreture==30){
//     console.log("less");
    
//  }else{
//     console.log("print");
    
//  }

//   const score=300
//  if (score>200) {
//     let power="fly"
//     console.log(`user power: ${power}`);
    
//  }

//   const loggedInfromgoogle=false
//   const loggedInfromemail=true
//   if (loggedInfromemail&&loggedInfromgoogle) {
//     console.log("yes allow to logged");
    
//   }

//   const loggedInfromgoogle=false
//   const loggedInfromemail=true
//   if (loggedInfromemail||loggedInfromgoogle) {          ===>|| is called OR oprater
//     console.log("yes allow to logged");
    
//   }
// const month=3
// switch (month) {
//     case 1:
//         console.log("jan");
        
//         break;
//     case 2:
//         console.log("feb");
        
//         break;
//     case 3:
//         console.log("march");
        
//         break;
//     case 4:
//         console.log("april");
        
//         break;

//     default:
//         console.log("default");
        
//         break;
// }

// const useremail=""
// if (useremail) {
//     console.log("got user email");
    
// }else{
//     console.log("did'nt got email");
    
// }

//falsy value
//==>false,0,-0,BigInt on, "",null,undefined,NaN
 

// truthy value
// true,"0","false","" , [] ,  {}  , function(){}

// if (useremail.length==0) {
//     console.log("print length");
// }


// const emptyobj={}
// if (Object.keys(emptyobj).length==0 ){
//     console.log("empty");
    
// }
 

// if (false==0) {
//     console.log("it will give true");
    
// }
// if (''==0) {
//     console.log("it will give true");
    
// }


// let val;
// val1=20??10
// val2=null??undefined
// val3=null??30
// val4=null??40??100
// console.log(val1);
// console.log(val2);
// console.log(val3);
// console.log(val4);

// for (let index = 0; index <=20; index++) {
//     const element = index;
//     console.log(element);
    
// }

// for (let i = 0; i<=10; i++) {
//     const element = i;
//     console.log(`outer loop value ${i}`);
    
//     for (let j = 0; j <=10; j++) {
//         const element = j;
//         console.log(`inner loop value ${j}`);
        
//     }
// }

//  for (let i = 0; i<=10; i++) {
//     console.log(`multiple of ${i}`);
    
//     for (let j = 0;  j<= 10; j++) {
//        console.log(i+'*'+j+ '=' +i*j);
       
       
       
//     }
    
//  }

// let array=["men","women","boy"]
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);
    
// }

// for (let index = 1; index <= 30; index++) {
//     const element = index;
//     console.log(element);
//     if (index==10) {
//         console.log(`detected: ${index}`);
//         break
//     }
//     console.log(`value of i is ${index}`);
    
// }


// for (let index = 1; index <= 10; index++) {
//     const element = index;
//     console.log(element);
//     if (index==6) {
//         console.log(`detected: ${index}`);
//         continue
//     }
//     console.log(`value of i is: ${index}`);
    
// }

// let index=1;
// while (index <=10) {
//     console.log(`value of index is: ${index}`);
//     index=index+2
// }

// let Array=["mobile" ,"charger","baittery","camera"]
//   let arr=0
// while(arr<Array.length){
// console.log(` index of ${arr}  ${Array[arr]}`);
// arr=arr+1
// arr++              ===> ANY ONE EITHER 
// }

// let score=1
// do {
//     console.log(`score is ${score}`);
//     score++
    
// } while (score<=10);

// let time=11
// do {
//     console.log("sudhanshu");
//     time=time+2
// } while (time<=10);


//  let arr=[0,1,2,3]
 

// for (const myarr of arr) {
    // console.log(myarr);
    
// }


 
// let mystring="hello world"

// for (const element of mystring) {
//     console.log(`each char is ${element}`);
    
// }

// const map=new Map()
// map.set('iN','INDIA')
// map.set('US','AMERICA')
// map.set('FR','FRANCE')
// map.set('rs','rasia')
// map.set('rs','rasia')
// // console.log(map);

// for (const [key,value] of map) {
//     console.log(key,"-",value);
//     console.log();
    
    
// }
// const myobj={
//     js:"java script",
//     cp:"c++",
//     rb:"ruby",
//     mb:"mango db"
// }

// for (const key in myobj) {
    // console.log(myobj[key]);
    // console.log(`${key} short cort for ${myobj[key]}`);
    
    
// }

// const coding=["js","py","ruby","c"]
// coding.forEach(function(val){
    // console.log(val);
    
// })
// coding.forEach((item)=>{
    // console.log(item);
    
// })
// function printme(item) {
    // console.log(item);
    
// }
// coding.forEach(printme)
 
// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
    
// })

// const lerncode=[{
//                  languagename:"java script" ,
//                  filename:"java"
//              },
//              {
//                 languagename:"java" ,
//                  filename:"java"
//              },
//              {
//                 languagename:"python" ,
//                  filename:"py"
//              }

// ]
// lerncode.forEach((item)=>{
//     console.log(item.filename);
//     console.log(item.languagename);
    
    
// })

// const coding=["js","py","ruby","c"]
//  const values=coding.forEach((item)=>{
//     console.log(item);
//     return item
    
// })
// console.log(values);

// const mynums=[1,2,3,4,5,6,7,8,9,10]
//  const newnums=mynums.filter((num)=>(num>4))
//     console.log(newnums);
    
//     const mynums=[1,2,3,4,5,6,7,8,9,10]
//    const newnums= mynums.filter((num)=>{
//       return num>5
    
      
//     })
//     console.log(newnums);
    
    // const mynums=[1,2,3,4,5,6,7,8,9,10]
    // const newnums=[]
    // mynums.forEach((num)=>{
    //     if (num>3) {
    //         newnums.push(num)
    //     }
    // })
    // console.log(newnums);

    // const mynums=[1,2,3,4,5,6,7,8,9,10]
    //  const newarr=[]
    //  mynums.forEach((num)=>{
    //     if (num>5) {
    //        newarr.push(num)
    //     }
      

    //  })
    
    // console.log(newarr);
    
//     const mynums=[1,2,3,4,5,6,7,8,9,10]
//   const newnum=  mynums.map((num)=>{
//     return num+10
//   }
// )
//     console.log(newnum);
      
//   const mynums=[1,2,3,4,5,6,7,8,9,10]
//   const newnum=   mynums 
//                    .map((num)=>{return num*10 })
//                    .map((num)=>num+1)
//                    .filter((num)=>{return num>50})
  
    //   console.log(newnum);
      

     
// const arr1=[1,2,3,4,5,6]
// const print=arr1.reduce(function (initial,final) {
//     console.log(`value of initial ${initial} and final ${final}`);
    
//       return initial+final
// },20)


// console.log(print)

// const arr1=[1,2,3,4,5,6]
// const newval=arr1.reduce((initial,final)=>{ 
// console.log(`initial ${initial} final ${final}`);
// return initial+final
// },200)
// console.log(newval);


//     const shopingcart=[{
//         course: "js",
//         price:2000},
//         {
//             course: "py",
//             price:3000},  
//             {
//                 course: "c",
//                 price:3000},  
//     ]
//    const total=  shopingcart.reduce((initial,final)=> initial+final.price,0  )
//     console.log(total);
    
    


































































