// console.log(Boolean({}))
const obj1 = {
    aa: 'aaa',
    bb: 'bbb',
    cc: 'ccc',
    '11': {
        hi:'你好'
    },
    '22': 22
}

const obj2 = {
    aa: 'aaa',
    bb: 'bbb',
    '11': {
        hi:'你好'
    },
    '22': 22,
    cc: 'ccc'
}

const obj3 = Object.assign(obj1, obj2);
console.log('obj3 === obj1 :>> ', obj3 === obj1);

// console.log('obj1 :>> ', Object.entries(obj1).join(','));
// console.log('obj2 :>> ', Object.entries(obj2).join(','));
