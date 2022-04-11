import MySet from '../src/set.js';
let set = new MySet();
// let set = new MySet([1, 2, 3], [11, 12, 13]);
console.log(set.type());
set.add(1);
set.add(1);
set.add(2);
set.add(2);
set.add(3);
set.toString();
console.log("------------------------");
set.remove(4);
set.remove(1);
set.remove(2);
set.getSet();
console.log(set.type());
set.add("aaa");
console.log(set.type());
console.log("------------------------");
set.remove("aaa");
set.add(1);
set.add(2);
set.add(3);
set.add(4);
set.add(5);
set.add(6);
set.sort().toString();
console.log("---------------------");
set.union(new MySet([])).toString();
set.union(new MySet([1, 2, 3])).toString();
set.union(new MySet([1, 2, 3, 7, 8, 9])).toString();
console.log("------------------------");
set.interesct(new MySet([])).toString();
set.interesct(new MySet([1, 2, 3])).toString();
set.interesct(new MySet([1, 2, 3, 7, 8, 9])).toString();
console.log("------------------------");
console.log(set.subset(new MySet([1, 2, 3, 4, 9])));
console.log(set.subset(new MySet([1, 2, 3])));
console.log(set.subset(new MySet([1])));
console.log(set.subset(new MySet([])));
console.log("------------------------");
set.difference(set, new MySet([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toString();
set.difference(set, new MySet([1, 2, 3, 4, 5, 6])).toString();
// set.difference(set, new MySet([1, 2, 3, 4, 5])).toString(); 会报错提示
set.getSet();