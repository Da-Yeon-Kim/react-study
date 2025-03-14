// 참조형의 깊은 복사

function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    let copy = {};
    for (let key in obj) {
        copy[key] = deepCopy(obj[key]);
    }
    return copy;
}

const obj = {
    a: 1,
    b: {
        c: 2,
    },
    func: function () {
        return this.a;
    },
};

const copy = deepCopy(obj);

copy.b.c = 3;

console.log(obj);
console.log(copy);
console.log(obj === copy);
console.log(obj.b.c === copy.b.c);