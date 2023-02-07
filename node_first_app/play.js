// const person = {
//     name:'kazi',
//     age:29,
//     greet(){
//         console.log('Hi,I am ' + this.name);
//     }
// };
// person.greet();


const student = {
    name:'kazi',
    age:29,
    rollno:56,
    studentDetails:function(){
        console.log('Student name is:' + this.name + 'and roll no is:'+this.rollno);
    }
}
student.studentDetails();
