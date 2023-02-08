//const hobbies = ['sports','coocking'];
// for(let hobby of hobbies){
//     console.log(hobby);
// }

// console.log(hobbies.map(hobby=>'Hobby:'+hobby));
// console.log(hobbies);


// array = ['apple', 'oranges' , '', 'mango', '' , 'lemon'];

//  const newArray = array.map(fruit=>{
//     if (fruit == ''){
//         return 'empty string';
//     }else{
//         return fruit;
//     }
//  });

//  console.log(newArray);


//const newArray = hobbies.slice();//copy hobbies full portion into newArray if no argument passed
// const newArray = [...hobbies];//spread operater copy hobbies to newArray,same for object
// console.log(newArray);


// const toArray = (...args)=>{        //rest use in function as argument
//     return args;
// };

// console.log(toArray(1,2,3,4));

// const person = {
//     name:'kazi',
//     age:29,
//     greet(){
//         console.log('Hi,I am'+this.name);
//     }
// };

// const printName = ({name})=>{
//     console.log(name);
// };
// printName(person);

// const {name,age} = person;
// console.log(name,age);



// const obj1 = {'key1': 1};
// const obj2 = { ...obj1};
// if(obj2 === obj1){
// console.log('same objects');
// }
// else{
// console.log('different objects');//as referance is stored in obj
// }

//some desut question

// const obj1 = {'key1': 1 , 'key2' : 2};
// const obj2 = { ...obj1, key1: 1000};
// console.log(obj1);//{ key1: 1, key2: 2 }
// console.log(obj2);//{ key1: 1000, key2: 2 }


// const obj1 = {'key1': 1, "key2": 2, "key3": 1000};
// const { key1, key3} = { ...obj1};
// console.log(key1, key3);//1,1000

// const arr1 = ['value1', 'value2'];
// const [ val1, val2 ] = arr1;
// console.log(val1);
// console.log(val2);


// const obj1 = {'key1': 1, "key2": 2, "key3": 1000};
// let { key1, key3} = obj1;
// key1 = 20;
// key3 = 123;
// console.log(obj1.key1, obj1.key3);//1,1000
// console.log(key1,key3);//20,123