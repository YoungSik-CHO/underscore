

// underscore 쓰기
// _ 라는 객체로 선언됨  _.method~~ 이렇게 쓰면됨


// some : Array를 넣어서 하나라도 참이면 true를 return
// 문자는 true로 인식함
// 0이 아닌 숫자도 true로 인식함
// false로 인식하는거 : null , 0 , undefined, false
/*
let someArr = [null , 0 , undefined, false];
console.log(_.some(someArr));

console.log(_.some(someArr, (el) => { return el == 0  }))
*/

/*
// Every는 Some과 사용하는 방법은 동일하지만 모든 인자가 조건을 만족해야 true를 리턴한다.
let everyArr = [1, 2, 3, 0];
console.log(_.every(everyArr));

console.log(_.every(everyArr, (el) => { return el > -1 }) );
*/

// pluck : Object Array를 원하는 키를 가진 배열로 리턴받을 수 있다.
// console.log(_.pluck(pluckData, 'name'));

// where 
//console.log(_.where(pluckData, {name : 'kim', "age" : 19}));

// partition : array를 두 그룹으로 묶음.
// [[만족 array], [불만족array]]로 리턴
//let partitionArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//console.log(_.partition(partitionArray, (el) => { return el % 2 == 0}));






//compact : 배열 내 값들중 값이 false 인 데이터를 제외하여 리턴
/*
let compactArr = [0, 1 , false, 2, 'a' , 50];
console.log(_.compact(compactArr));
*/
/*
// range : from ~ to 까지 숫자배열 필요할때 쓰자
console.log(_.range(10));
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(_.range(30));
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
console.log(_.range(1, 15));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
console.log(_.range(1, 15, 2));
// [1, 3, 5, 7, 9, 11, 13]
*/


// uniq : 중복제거해줌, 정렬도 해줌
/*
let uniqArr = [1, 16, 4, 11, 7, 11, 2, 3, 4]
console.log(_.uniq(uniqArr));
// 이미 정렬된 배열이라면 true 넣어라 - 더 빠른속도
// 정렬 안된 배열인데 true 넣으면 중복제거 제대로 안된다~
let sortedArr = _.sortBy(uniqArr); 
console.log(_.uniq(sortedArr, true));
*/

// without - 이 값 아닌 값들만 리턴
/*
let withoutArr = [1, 2 ,3, 4, 5, 6, 8, 9, 10]
console.log(_.without(withoutArr, 1,2,8,9,10));
*/

// flatten : array depth 제거 해서 리턴
// 두번째 parameter에 true 넣으면 1 depth만 제거해서 리턴

let flattenArr = [1, [2], [3, 4], [5, [6, [7]]]]
console.log(_.flatten(flattenArr))
console.log(JSON.stringify(_.flatten(flattenArr , true)))

