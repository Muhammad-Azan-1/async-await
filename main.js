"use strict";
// // ASYCN - AWAIT
Object.defineProperty(exports, "__esModule", { value: true });
// //--Just like .then and .catch method asycn await are also used to handle the promises
// //--- Asycn and await are two keywords which can be used to make asycnchornous programing much easier then call back hell  and Promises
// //aysc :
// // asycn keyword is used with functions. we can make any normal function a async function, async function always returns a Promise
// //with normal function
// async function myFunc1(){}
// //with arrow function
// let arrowFunc = async ()=>{}
// // await :
// //await keyword make javascript to wait until the promise is settled and return its value.
// //lets practice some questions
// //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// //1)
// let promise: Promise<string> = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Task is completed")
//             resolve("Sucessfully")                  // what ever value we pass in resolve() that value assign to the variable inside async function  in our case it is  (response)
//         },3000)
// });
// async function myFunc2(){
//         let response =  await promise1    // await wait until the promise is setled(either reject or fullfilled) as the promise setled await work in done then the next instrcution executes
//         console.log(response)              
// }
// myFunc2()
// //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// //2)
// interface User {
//     userName: string;
//     age: number;
//     clas: number;
//     address: {
//         city: string;
//         country: string;
//     };
// }
// let promise1 : Promise<User> = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//        let error = false
//        if(!error){
//         resolve({
//         userName: "Azan",
//             age: 20,
//             clas: 12,
//             address: {
//                 city: "Karachi",
//                 country: "Pakistan"
//             }
//         });
//        }else{
//       console.log("ERORR: Something went wrong")
//        }
//     },3000)
// })
// async function myFunc3() {
//     try{
//     let response = await promise1    // we have whole object inside response
//     console.log(response)          
//      console.log(response.address.country)  // getting a value of object(Pakistan)
//     }catch(err){
//         console.log( err)   // if promise rejected this will log ("ERORR: Something went wrong")
//     }
// }
// myFunc3()
// //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// // Now Understand how return works inside the async function
// //3)Taking Same Example (2)
// let promise2 : Promise<User> = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//        let error = false
//        if(!error){
//         resolve({
//         userName: "Azan",
//             age: 20,
//             clas: 12,
//             address: {
//                 city: "Karachi",
//                 country: "Pakistan"
//             }
//         });
//        }else{
//       console.log("ERORR: Something went wrong")
//        }
//     },3000)
// })
// async function myFunc4() {
//     try{
//     let response = await promise2 
//     console.log(response)  
//     return response.userName      // await wait until the promise setled as the promise resolved next instruction executes, in next istruction we are returning a value
//                                  // so remember in async function when ever a promise is resolved  and we return a value so async function reuturns a resolved promise
//                                   // which contains that value 
//     }catch(err){
//         return(err)   
//     }
// }
// let returnPromise = myFunc4()
//  console.log( returnPromise ) 
// //  so when you console this you will see a resolved promise that contains the value that we return in try block like this
// // [[Prototype]]
// // : Promise
// // [[PromiseState]]
// // :"fulfilled"
// // [[PromiseResult]]
// // : "Azan"
// // as the async function returns a resolved promise that contains the value we return so we can use .then() method to prints that value becuase .then()  executes when promise resolved
// returnPromise.then((userName:any)=>{
//     console.log(userName) // Azan
// })
// //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// //SIMILARLY FOR CATCH
// let promise3 : Promise<User> = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//        let error = false
//        if(!error){
//         resolve({
//         userName: "Azan",
//             age: 20,
//             clas: 12,
//             address: {
//                 city: "Karachi",
//                 country: "Pakistan"
//             }
//         });
//        }else{
//       reject("ERORR: Something went wrong")
//        }
//     },3000)
// })
// async function myFunc5() {
//     try{
//     let response = await promise3     
//     console.log(response)  
//     return response.userName       // await wait until the promise settled as the promise rejected so await through an rejected promise which is caught by the catch method and then catch block  executes, in catch bloack we are  returning a value
//                                       // so remember in async function when ever a promise is rejected and we return a value so async function reuturns a rejected promise
//                                          // which contains that value 
//     }catch(err){                                    
//         return(err)   
//     }
// }
// let returnPromise2 = myFunc4()
//  console.log( returnPromise ) 
// // so when you console this you will see a resolved promise that contains the value that we return in try block like this
// // [[Prototype]]
// // : Promise
// // [[PromiseState]]
// // :"rejected"
// // [[PromiseResult]]
// // : "ERORR: Something went wrong"
// returnPromise2.catch((err) =>{
//     console.log(err) // ERORR: Something went wrong
// })
// // as the async function returns a rejected promise that contains the value we return so we can use .catch() method to prints that value becuase .catch()  executes when promise rejected
// //------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// //AS WE DO CALL BACK HELL AND PROMISE CHAIN NOW WE DO SAME THI BY ASYCN FUNCTION
// function getData(DataId:number){
//     return new Promise<void>((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Data = ",DataId);
//             resolve()
//         },3000);
//     });
// }
// async function myFunc6(){
//      console.log("Fetching data1...")
//     let data1 = await getData(1)
//     console.log("Data 1 fetched")
//     console.log("Fetching data2...")
//     let data2 = await getData(2)
//     console.log("Data 2 fetched")
//     console.log("Fetching data3...")
//     let data3 = await getData(3)
//     console.log("Data 3 fetched")
//     console.log("Fetching data4...")
//     let data4 = await getData(4)
//     console.log("Data 4 fetched")
//     console.log("Fetching data5...")
//     let data5 = await getData(5)
//     console.log("Data 5 fetched")
// }
// // myFunc6() // This thing become more simple by asycn function
// //  we can also executes asycn function without calling it. this method is called IIFE(Immediately invoked function) this function can only be used ones
//  //syntax for Normal function (function(){anywork})()
//   //syntax for ARROW function (=>(){anywork})()  
//  //syntax in case of asycn function (async function(){anywork})() 
//  // (async () => {anywork})()
// (async function(){
//     console.log("Fetching data1...")
//    let data1 = await getData(1)
//    console.log("Data 1 fetched")
//    console.log("Fetching data2...")
//    let data2 = await getData(2)
//    console.log("Data 2 fetched")                   
//    console.log("Fetching data3...")
//    let data3 = await getData(3)
//    console.log("Data 3 fetched")                                   
//    console.log("Fetching data4...")
//    let data4 = await getData(4)
//    console.log("Data 4 fetched")
//    console.log("Fetching data5...")
//    let data5 = await getData(5)
//    console.log("Data 5 fetched")
// })();
// // we dont neeed to call this function it can be called by it self
function hobbies(...myHobbies) {
    console.log(myHobbies);
    myHobbies.forEach(element => {
        console.log(`I enjoy ${element}`);
    });
}
hobbies("learning", "Researching", "playing", "swiming");
