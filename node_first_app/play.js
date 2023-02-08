//async code

// const fetchData = () =>{
//     const promise = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//            resolve("Done!");
//         },1500);
    
//     });
//     return promise;

// };

// setTimeout(()=>{
//     console.log("Timer is done!");
//     fetchData().then(text=>{
//         console.log(text);
//         return fetchData();
//     }).then(text2=>{
//         console.log(text2);
//         return fetchData();
//     });
// },2000);

// console.log('a');
// console.log('b');
// setTimeout(()=>console.log('c'),3000);
// setTimeout(()=>console.log('d'),0);
// console.log('e');//abedc





const fetch1 = () => {
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      res("c");
    }, 3000);
   
  });
  return promise;
  
};
const fetch2 = () => {
  const promise2 = new Promise((res, rej) => {
    setTimeout(() => {
        res("d");
      }, 0);
      
    });
    return promise2;
  
};

async function printData() {
  console.log("a");
  console.log("b");
  const f1 = await fetch1();
  console.log(f1);
  const f2 = await fetch2();
  console.log(f2);
  console.log("e");
}

printData();
