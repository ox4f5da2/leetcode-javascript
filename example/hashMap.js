import HashMap from "../src/hashMap.js";
let map = new HashMap();
map.add("666", "hahaha");
map.add("6", true);
map.add("iloveyou", "zy");
map.add("test", 666);
map.add("hashMap", [1, 2, 3]);
map.toString();
map.add("hashMap", [1, 2, 3, 4]);
map.add("test", "cover");
map.toString();
console.log("------------------------");
console.log(map.getValue("test"));
console.log(map.getValue("test1"));
console.log(map.getValue("iloveyou"));
console.log("------------------------");
map.update("66", "hahaha");
map.update("6", "9")
console.log(map.getValue("6"));
console.log("------------------------");
console.log(map.getValue("test"));
map.remove("test");
console.log(map.getValue("test"));
map.toString();
console.log(map.length());
console.log(map.isEmpty());