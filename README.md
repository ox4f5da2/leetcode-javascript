# leetcode-javascript

![](https://img.shields.io/badge/language-javaScript-brightgreen) ![](https://img.shields.io/badge/keyword-leetcode-important) ![](https://img.shields.io/badge/keyword-data%20structure-informational) ![](https://img.shields.io/badge/license-MIT-ff69b4)

这个repository包括了：

- JavaScript封装数据结构：
  - [二叉搜索树](./src/binaryTree.js)
  - [字典]('./src/dictionary.js')
  - [哈希表]('./src/hashMap.js')
  - [单向链表]('./src/linkedList.js')
  - [集合]('./src/set.js')
  - [栈]('./src/stack.js')
  - [最小栈]('./src/minStack.js')
  - [队列]('./src/queue.js')
  - [优先队列]('./src/priorityQueue.js')
  - [使用示例]('./example')
- [排序算法]('./src/sort.js')：
  - 冒泡排序
  - 选择排序
  - 插入排序
  - 希尔排序
  - 快速排序
- [leetCode的Hot 100算法题]('./leetcode/Hot100')(部分，还没写完，会继续更新)
- [leetCode辅助函数]('./utils')的封装
  - 数组转链表以及链表的打印
  - 数组转二叉树以及二叉树的打印
- [相关书籍]('./PDF')
  - 数据结构与算法JavaScript描述
  - 大话设计模式
  - 大话数据结构



## 数据结构类的使用

### 二叉搜索树

- 类名：BinaryTree

- 相关函数

| 函数                    | 功能                    |
| ----------------------- | ----------------------- |
| insert(val)             | 插入树的节点            |
| getMin()                | 获取BST中的最小值       |
| getMax()                | 获取BST中的最大值       |
| has(val)                | 判断指定的val值是否存在 |
| remove(val)             | 删除指定值的节点        |
| inOrderTraversal()      | 中序遍历                |
| preOrderTraversal()     | 先序遍历                |
| postOrderTraversal()    | 后序遍历                |
| toString(initDepth = 0) | 打印树结构              |

- 例子：

```js
import BinaryTree from "../src/binaryTree.js";
let bst = new BinaryTree();
bst.insert(10);
bst.insert(5);
bst.insert(17);
bst.insert(7);
bst.insert(14);
bst.insert(3);
bst.insert(16);
bst.insert(1);
bst.toString();
console.log("------------------------");
console.log("max:", bst.getMax());
console.log("min:", bst.getMin());
console.log("------------------------");
console.log(bst.has(1));
console.log(bst.has(2));
console.log(bst.has(3));
console.log(bst.has(4));
console.log(bst.has(8));
console.log(bst.has(12));
console.log(bst.has(16));
console.log("------------------------");
bst.remove(1);
bst.remove(5);
bst.remove(17);
bst.remove(10);
bst.toString();
```



### 字典

- 类名：Dictionary

- 相关函数

| 函数          | 功能                         |
| ------------- | ---------------------------- |
| has(key)      | 判断是否存在键值             |
| set(key, val) | 增加(相同键名则会后者被覆盖) |
| find(key)     | 查找指定键的值               |
| remove(key)   | 删除指定键的值               |
| length()      | 获取字典中键值对的个数       |
| toString()    | 展示字典的键值对             |
| clear()       | 清空字典                     |
| sort()        | 按键值排序                   |

- 例子：

```js
import Dictionary from "../src/dictionary.js";
let dictionary = new Dictionary([{ key: 2, val: 1 }, { key: 'hahaha', val: 'xixixi' }]);
dictionary.toString();
dictionary.set(666, "999");
dictionary.set("key", "value");
dictionary.set(666, "888");
dictionary.set([1,2,3], true);
dictionary.toString();
console.log(dictionary.has(666));
console.log(dictionary.has("keys"));
console.log(dictionary.has("key"));
console.log(dictionary.find("key"));
console.log(dictionary.find("keys"));
dictionary.remove("key");
dictionary.remove("keys");
dictionary.toString();
console.log(dictionary.length());
dictionary.sort();
dictionary.clear();
dictionary.toString();
console.log(dictionary.length());
```



### 哈希表

- 类名：HashMap
- 相关函数

| 函数             | 功能                                           |
| ---------------- | ---------------------------------------------- |
| add(key, value)  | 增加: 如果不存在则添加，如果存在则把值进行修改 |
| getValue(key)    | 根据属性名获取键值对                           |
| update(key, val) | 更新键值对                                     |
| remove(key)      | 根据属性名删除键值对                           |
| toString()       | 展示哈希表的键值对                             |
| length()         | 获取哈希表中键值对的个数                       |
| isEmpty()        | 判断哈希表是否为空                             |

- 例子：

```js
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
```



### 单向链表

- 类名：LinkedList
- 相关函数

| 函数                                | 功能                                     |
| ----------------------------------- | ---------------------------------------- |
| append(val)                         | 向链表尾部添加节点                       |
| insert(position, val)               | 在指定下标处插入节点                     |
| getValByPosition(position)          | 获取指定下标元素的值                     |
| indexOf(val)                        | 查找指定元素对应的第一个下标             |
| has(key)                            | 查找指定键是否存在                       |
| getValue(key)                       | 查找指定键对应的值                       |
| updateVal(position, val)            | 更新指定下标节点的值                     |
| removeByPosition(position)          | 删除指定下标的元素                       |
| removeByVal(val)                    | 删除第一个指定元素的值                   |
| **static** reverseList(oldHead)     | 翻转链表                                 |
| removeNthFromEnd(n)                 | 删除倒数第n个节点(不包括head节点)        |
| length()                            | 获取链表的元素个数(除了head节点外的个数) |
| getHeadNode()                       | 获取链表的头节点                         |
| toString()                          | 将链表以字符串形式打印                   |
| **static** linkedListToString(head) | 将链表以字符串形式打印                   |

- 例子：

```js
import LinkedList from "../src/linkedList.js";
let linkedlist = new LinkedList([1, 2, 3, 4, 5, 6]);
linkedlist.toString();
console.log(linkedlist.length());
linkedlist.append(7);
linkedlist.append(8);
linkedlist.toString();
console.log(linkedlist.length());
console.log("------------------------");
linkedlist.insert(0, 666);
linkedlist.insert(4, 9);
linkedlist.insert(10, 10);
linkedlist.toString();
// linkedlist.insert(12, 9); 会有报错提示
console.log("------------------------");
console.log(linkedlist.getValByPosition(0));
console.log(linkedlist.getValByPosition(3));
console.log(linkedlist.length());
console.log(linkedlist.getValByPosition(linkedlist.length()));
console.log("------------------------");
console.log(linkedlist.indexOf('head'));
console.log(linkedlist.indexOf(0));
console.log(linkedlist.indexOf(2));
console.log(linkedlist.indexOf(9));
console.log(linkedlist.indexOf(6));
console.log("------------------------");
linkedlist.updateVal(0, "newHead");
linkedlist.updateVal(3, 999);
linkedlist.updateVal(8, 888);
linkedlist.toString();
console.log("------------------------");
linkedlist.removeByPosition(1);
linkedlist.toString();
linkedlist.removeByPosition(3);
linkedlist.toString();
linkedlist.removeByPosition(7);
linkedlist.toString();
linkedlist.removeByPosition(linkedlist.length());
linkedlist.toString();
console.log("------------------------");
linkedlist.removeByVal(888);
linkedlist.removeByVal(1);
linkedlist.removeByVal(5);
linkedlist.toString();
// linkedlist.removeByVal(666);
console.log("------------------------");
console.log(LinkedList.linkedListToString(LinkedList.reverseList(linkedlist.getHeadNode())));
console.log("------------------------");
linkedlist.toString();
linkedlist.removeNthFromEnd(2);
linkedlist.toString();
console.log("------------------------");
let ll = new LinkedList();
ll.append([1, 2, 3]);
console.log(LinkedList.linkedListToString(ll.getHeadNode()));
console.log(ll.indexOf([1, 2, 3, 4]));
console.log(ll.indexOf([1, 2, 3]));
console.log("------------------------");
let lll = new LinkedList();
lll.append([1, 2]);
lll.append(["key", 666]);
lll.append(["haha", true]);
console.log(lll.has(1));
console.log(lll.has(2));
console.log(lll.has("key"));
console.log(lll.has("hahaha"));
console.log("------------------------");
```



### 集合

- 类名：MySet
- 相关函数

| 函数                              | 功能                         |
| --------------------------------- | ---------------------------- |
| type()                            | 判断集合是纯数字还是纯字符串 |
| sort(methods)                     | 集合排序                     |
| add(data)                         | 添加元素                     |
| remove(data)                      | 删除元素                     |
| union(target)                     | 并集                         |
| interesct(target)                 | 交集                         |
| subset(target)                    | 子集                         |
| difference (smallRange, bigRange) | 补集                         |
| toString ()                       | 将集合以字符串展示           |
| getSet ()                         | 将集合以数组展示             |

- 例子：

```js
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
```



### 栈

- 类名：Stack
- 相关函数

| 函数          | 功能                     |
| ------------- | ------------------------ |
| push(element) | 入栈                     |
| top ()        | 返回栈顶元素             |
| pop ()        | 弹出栈顶元素             |
| length ()     | 返回栈的元素个数         |
| clear ()      | 清空栈中所有元素         |
| toString ()   | 以字符串形式打印栈中元素 |

- 例子：

```js
import Stack from '../src/stack.js';
let stack = new Stack();
stack.push([1, 2, 3, 4]);
stack.toString();
console.log(stack.top());
console.log(stack.pop());
stack.toString();
console.log(stack.length());
stack.clear();
console.log(stack.length());
console.log("------------------------");
stack.push([1, 2, 3]);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.length());
stack.toString();
console.log("------------------------");
stack.push([1, 3]);
console.log(stack.length());
console.log(stack.top());
```



### 最小栈

- 类名：MinStack
- 相关函数

| 函数        | 功能                     |
| ----------- | ------------------------ |
| push(val)   | 压入栈                   |
| pop()       | 弹出栈顶元素             |
| top()       | 获取栈顶元素             |
| getMin()    | 获取当前栈内最小值       |
| toString () | 以字符串形式打印栈中元素 |
| length ()   | 返回栈的元素个数         |
| clear ()    | 清空栈中所有元素         |

- 例子：

```js
import MinStack from "../src/minStack.js";
let minStack = new MinStack();
minStack.push([6, 4, 2, 3, 1, 6]);
minStack.toString();
while (minStack.length()) {
  minStack.toString();
  console.log("当前栈内元素最小值为:" + minStack.getMin());
  minStack.pop();
}
minStack.push([1, 2, 3]);
console.log(minStack.top());
minStack.clear();
console.log(minStack.length());
minStack.toString();
```



### 队列

- 类名：Queue
- 相关函数

| 函数             | 功能                     |
| ---------------- | ------------------------ |
| enqueue(element) | 入队                     |
| dequeue()        | 出队                     |
| front()          | 查看队列第一个元素       |
| length ()        | 返回栈的元素个数         |
| clear ()         | 清空队列中所有元素       |
| toString ()      | 以字符串形式打印栈中元素 |

- 例子：

```js
import Queue from '../src/queue.js';
let queue = new Queue();
queue.enqueue([1, 2, 3, 4]);
queue.toString();
console.log(queue.front());
console.log(queue.dequeue());
queue.toString();
console.log(queue.length());
queue.clear();
console.log(queue.length());
console.log("------------------------");
queue.enqueue([1, 2, 3]);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.length());
queue.toString();
console.log("------------------------");
queue.enqueue([1, 3]);
console.log(queue.length());
console.log(queue.front());
```



### 优先队列

- 类名：PriorityQueue
- 相关函数

| 函数             | 功能                     |
| ---------------- | ------------------------ |
| enqueue(element) | 入队                     |
| dequeue()        | 出队                     |
| front()          | 查看队列第一个元素       |
| length ()        | 返回栈的元素个数         |
| clear ()         | 清空队列中所有元素       |
| toString ()      | 以字符串形式打印栈中元素 |

- 例子：

```js
import PriorityQueue from '../src/priorityQueue.js';
let queue = new PriorityQueue();
queue.enqueue([{val: 'a', priority: 1}, {val: 'b', priority: 2}, {val: 'c', priority: 3}]);
queue.toString();
console.log(queue.front());
console.log(queue.dequeue());
queue.toString();
console.log(queue.length());
queue.clear();
console.log(queue.length());
console.log("------------------------");
queue.enqueue([{ val: 'aa', priority: 3 }, { val: 'ba', priority: 1 }, { val: 'ac', priority: 1 }]);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.length());
queue.toString();
console.log("------------------------");
queue.enqueue([{val: 666, priority: 1}, {val: 'b', priority: 2}]);
console.log(queue.length());
console.log(queue.front());
```



## leetCode刷题辅助函数

### 1. 链表

- 类名：LinkedListHelper

#### 1.1 constructor

**参数：**

`array`：{number[] | string[]} 想要转成链表的元素所组成的数组

`...args`： {number}【可选】环形链表的入环点的下标，范围是[0, list.length)

#### 1.2 相关函数

| 函数                     | 功能                     |
| ------------------------ | ------------------------ |
| arrayToLinkedList(array) | 将数组转化成链表         |
| toString()               | 将环形链表或普通链表打印 |

#### 1.3 arrayToLinkedList

**功能：**将数组转化成链表

**参数：**

`array`：{number[] | string[] | boolean[]} 含有原始值的数组

**返回值：**{ListNode} 链表的头

**例子：**

```js
import LinkedListHelper from './linkedList.js';
let list1 = new LinkedListHelper([2, 4, 6, 5, 3]); // 普通链表
list1.toString(); 
// 2 --> 4 --> 6 --> 5 --> 3
let list2 = new LinkedListHelper([2, 4, 6, 5, 3], 2); // 环形链表
list2.toString(); 
// 2 --> 4 --> 6 --> 5 --> 3 --> [Circular *3 from index=2] 6...
```



### 2. 二叉树

- 类名：BinaryTreeHelper

#### 2.1 constructor

**参数：**

`array`：{number[] | string[]} 想要转成二叉树的元素所组成的数组

> 数组的个数必须满足$2^{depth+1}-1$，其中$depth$是二叉树的层数，根节点层数为$0$，如果没有值用$null$代替

#### 2.2 相关函数

| 函数                     | 功能               |
| ------------------------ | ------------------ |
| arrayToBinaryTree(array) | 将数组转化为二叉树 |
| logTree(initDepth = 0)   | 打印树结构         |
| inOrderTraversal()       | 中序遍历           |
| preOrderTraversal()      | 先序遍历           |

#### 2.3 arrayToBinaryTree

**功能：**将数组转化成链表

**参数：**

`array`：{number[] | string[] | boolean[]} 含有原始值的数组

**返回值：**{TreeNode} 二叉树的root节点

**例子：**

```js
import BinaryTreeHelper from './binaryTree.js';
let bst = new BinaryTreeHelper([1, 2, null, 6, 5, 7, 9]);
```

#### 2.4 arrayToBinaryTree

**功能：**将数组转化成链表

**参数：**

`initDepth`：{number} `可选 ` 从第$initDepth$层开始展示的二叉树

> initDepth范围：[0, 层数]，层数的计算root算第**0**层

**返回值：**{void} 无返回值

**例子：**

```js
import BinaryTreeHelper from './binaryTree.js';
let bst = new BinaryTreeHelper([1, 2, null, 6, 5, 7, 9]);
bst.logTree();
/*
Binary Tree Map(Parent Node / subtree)
  第1层
    (null / root) 1
  第2层
    (1 / left) 2
  第3层
    (2 / left) 6
    (2 / right) 5
*/
bst.logTree(2);
/*
Binary Tree Map(Parent Node / subtree)
  第3层
    (2 / left) 6
    (2 / right) 5
*/
```



## License

[MIT]('./LICENSE')
