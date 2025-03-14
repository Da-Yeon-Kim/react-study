// 참조형의 얕은 복사
const user1 = {
    name: 'kim',
    age: 24,
};

let user2 = user1;
user2.name = 'lee';

console.log(user1);
console.log(user2);
console.log(user1 === user2);
console.log(user1.name === user2.name, '\n');

// 방법 1: Array.prototype.slice() 이용
const original = [
    {
        a: 1,
        b: 2,
    },
    true,
];
const copy = original.slice();

console.log(JSON.stringify(original) === JSON.stringify(copy));

copy[0].a = 99;   // 함께 변경 (2차원이기 때문)
copy[1] = false;  // copy만 변경 (1차원이기 때문)

console.log(original);
console.log(copy);
console.log(JSON.stringify(original) === JSON.stringify(copy), '\n');

// 방법 2: Object.assign() 이용
const obj = {
    a: 1,
    b: {
        c: 2,
    },
};
const obj2 = Object.assign({}, obj);
obj2.a = 5;
obj2.b.c = 3;

console.log(obj);
console.log(obj2);
console.log(obj === obj2);
console.log(obj.a === obj2.a);
console.log(obj.b.c === obj2.b.c, '\n');

// 방법 3: 전개 연산자(...) 이용
const obj3 = { ...obj };
obj3.a = 10;
obj3.b.c = 20;

console.log(obj);
console.log(obj3);
console.log(obj === obj3);
console.log(obj.a === obj3.a);
console.log(obj.b.c === obj3.b.c);