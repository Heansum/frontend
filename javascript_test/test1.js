// 자바스크립트 = 인터프리터 언어
// 타입추론

let int_num = 1;
let double_num = 1.0;
let bool_data = true;
let string_data = "안녕";
let char_data = "가";
let back_data = `백틱 ${int_num}`;
let list_data = [1,2,3,4];
let object_data = {
    id: 1,
    username: "ssar",
    ass: ()=>{}
};

// console.log(int_num);

// for(let i=0; i<list_data.length; i++){
//     console.log(list_data[i]);
// }

let newPrint = (value) => {
    console.log(value);
}

// 1. 반복문
list_data.forEach(newPrint);

let newHello = (value, index) => value+100;

let newHello2 = (value, index) => {
    value = (parameter) value: any
    return value+100;
}

let component_list = ["", "", "", ""];

// 2. 리턴이 있는 반복문
let new_data = list_data.map((value, index) => value+100);

console.log(new_data);
