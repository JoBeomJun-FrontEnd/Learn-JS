'use strict';

// 숫자
let number = 2;
const number2 = 1.2;
console.log(number2);
console.log(5 / 0);
console.log(-5 / 0);
let nan = 'hello' / 5;
console.log(nan);
console.log(typeof nan);

// 문자
const name1 = '홍길동';
const name2 = '홍길동';
const name3 = `홍길동`;
const name = '홍길동';
const age = 25;

console.log(
  '안녕하세요 제 이름은 ' + name + ' 입니다. 나이는' + age + '살 이에요.'
);
console.log('---------------');
console.log(`안녕하세요 제 이름은 ${name}입니다. 나이는 ${age}살 이에요.`);
const message = `안녕하세요

이렇게 표현할 수 있어요.`;
console.log(message);
const hello = "안녕하세요\n제 이름은 '홍길동' 입니다.";
console.log(hello);

// 불리언
const isProgrmer = true;
const isDesign = false;
console.log('isProgrmer: ', isProgrmer);
console.log('isDesign: ', isDesign);
if (isProgrmer) {
  console.log('프로그래머 입니다.');
} else {
  console.log('디자이너 입니다.');
}

// null, undefined
const username = null;
let message2;
console.log(username);
console.log(message2);
console.log(typeof username);

const person = {
  name: '홍길동',
  age: 25,
  isProgrmer: true,
  say() {
    console.log('Hello~!');
  },
};

const arr = [1, 2, 3, 4, 5];

console.log(arr.length);
arr.push(88);
console.log(arr);
