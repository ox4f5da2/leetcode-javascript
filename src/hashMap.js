// 哈希表: 使用【数组 + 链表】结构
// 引入链表
import LinkedList from './linkedList.js';

// 参数定义
const scaleFactor = 37;
const loadFactor_max = 0.75;
const loadFactor_min = 0.25;
const defaultCapacity = 7;

/* 
  哈希表参数说明:
  1. 默认容量 capacity = 16
  2. 负载因子 loadFactor = 0.75 大于0.75时扩容，小于0.25时缩容（开放地址法）
  3. 阈值 threshold = capacity * loadFactor = 12

  哈希表的长度都为素数，且当哈希表扩容时，长度都为素数，产生哈希冲突时用链地址法，所以loadFactor可以大于1

  a = 33, 37, 39, 41, 哈希函数中a取37
*/

/**
 * @class 哈希表
 */
export default class HashMap {
  /**
   * 哈希表
   * @param {void} 无需传入参数
   */
  constructor() {
    this.dataStore = [];
    this.count = 0;
    this.limit = defaultCapacity;
  }

  /**
   * 哈希函数
   * @param {string} str 要转换的字符串
   * @param {number} length 哈希表的长度
   * @returns 
   */
  hashCode(str, length) {
    return str.split('').map(item => item = item.charCodeAt()).reduce((prev, curr) => prev * scaleFactor + curr) % length;
  }

  /**
   * 判断素数
   * @param {number} num 数字
   * @returns {boolean}
   */
  isPrime(num) {
    if (num === 2) return true;
    else if (num <= 1 || num % 2 === 0) return false;
    else {
      for (let i = 2, tmp = Math.sqrt(num); i <= tmp; i++) {
        if (num % i === 0) return false;
      }
      return true;
    }
  }

  /**
   * 素数长度的产生
   * @param {number} nowLength 
   * @returns 新的表长
   */
  generatePrime(nowLength) {
    while (!this.isPrime(++nowLength));
    return nowLength;
  }

  /**
   * 哈希表扩容
   * @param {"expansion" | "reduction"} methods 扩容方式
   */
  resize(methods) {
    let startTime = + new Date(), newLimit;
    switch (methods) {
      case 'expansion': newLimit = this.generatePrime(this.limit * 2); break;
      case 'reduction': newLimit = this.generatePrime(Math.floor(this.limit / 2)); break;
      default: {
        if (this.count < this.limit * loadFactor_max && this.count > this.limit * loadFactor_min) return;
      }
    }
    let [oldStorage, newStorage] = [this.dataStore, []];
    oldStorage.forEach(item => {
      if (item !== undefined) {
        let currentNode = item.head.next;
        while (currentNode) {
          let temp = currentNode.val;
          let newIndex = this.hashCode(temp[0], newLimit);
          if (newStorage[newIndex] !== undefined) {
            newStorage[newIndex].append(temp);
          }
          else {
            let newBucket = new LinkedList();
            newStorage[newIndex] = newBucket;
            newBucket.append(temp);
          }
          currentNode = currentNode.next;
        }
      }
    })
    this.dataStore = newStorage;
    this.limit = newLimit;
    let endTime = + new Date();
    console.log(`哈希表的扩容完成，用时${((endTime - startTime) / 1000).toFixed(2)}s`);
  }

  /**
   * 获取对应的bucket
   * @param {number | string} key 键
   * @returns {ListNode} 链表的头节点
   */
  getBucket(key) {
    let index = this.hashCode(key, this.limit);
    let bucket = this.dataStore[index];
    return {index, bucket}
  }

  /**
   * 增加: 如果不存在则添加，如果存在则把值进行修改
   * @param {string} key 键
   * @param {any} value 值
   */
  add(key, value) {
    let { bucket, index } = this.getBucket(key);
    if (bucket === undefined) {
      bucket = new LinkedList();
      bucket.append([key, value]);
      this.dataStore[index] = bucket;
      ++this.count;
    }
    else {
      if (bucket.has(key)) {
        this.update(key, value);
      }
      else {
        bucket.append([key, value]);
        ++this.count;
      }
    }
    if (this.count >= this.limit * loadFactor_max) {
      this.resize('expansion');
    }
  }

  /**
   * 根据属性名获取键值对
   * @param {string | number} key 键
   * @returns 返回对应键的值
   */
  getValue(key) {
    let { bucket } = this.getBucket(key);
    if(bucket === undefined) return '哈希表内查找不到属性为"' + key + '"的值';
    let value = bucket.getValue(key);
    return value === undefined ? `哈希表内查找不到属性为"${key}"的值` : `查找结果: ["${key}": ${value}]`;
  }

  /**
   * 更新键值对
   * @param {number | string} key 键
   * @param {number | string} val 值
   * @returns {void} 无返回值
   */
  update(key, val) {
    let { bucket } = this.getBucket(key);
    if (bucket === undefined) console.log("哈希表中没有该键值对"); 
    else {
      if (bucket.has(key)) {
        let currentNode = bucket.getHeadNode();
        while (currentNode) {
          if (currentNode.val[0] === key) {
            currentNode.val[1] = val;
            break;
          }
          currentNode = currentNode.next;
        }
      }
      else {
        console.log("哈希表中没有该键值对");
      }
    }
  }

  /**
   * 根据属性名删除键值对
   * @param {number | string} key 键
   * @returns {void} 无返回值
   */
  remove(key) {
    let { bucket, index } = this.getBucket(key);
    if (bucket === undefined) {
      console.log(`哈希表内无属性为"${key}"的键值对!`);
    }
    else {
      let currentNode = bucket.getHeadNode(), flag = false, value = undefined;
      while (currentNode) {
        if (currentNode.next.val[0] === key) {
          value = currentNode.next.val[1];
          currentNode.next = currentNode.next.next;
          flag = true;
          --this.count;
          --bucket.size;
          break;
        }
        currentNode = currentNode.next;
      }
      console.log(bucket.length());
      flag ? console.log(`删除["${key}": ${value}]成功!`) : console.log(`哈希表内无属性为"${key}"的键值对!`);
    }
    if (bucket.length() === 0) {
      this.dataStore[index] = undefined;
    }
    if (this.count <= this.limit * loadFactor_min) {
      this.resize('reduction');
    }
  }

  /**
   * 展示哈希表的键值对
   * @param {void} 无需传入参数
   * @returns {void} 无返回值
   */
  toString() {
    console.groupCollapsed(`This hashMap has ${this.count} ${this.count > 1 ? 'elements' : 'element'}`);
    for (let i = 0; i < this.limit; i++) {
      let bucket = this.dataStore[i];
      if (bucket !== undefined) {
        console.groupCollapsed(`[${i}]`);
        console.log(`${LinkedList.linkedListToString(bucket.getHeadNode())}`);
        console.groupEnd();
      }
      else {
        console.groupCollapsed(`[${i}]`);
        console.log("null");
        console.groupEnd();
      }
    }
    console.groupEnd();
  }

  /**
   * 获取哈希表中键值对的个数
   * @param {void} 无需传入参数
   * @returns {number} 返回哈希表中键值对的个数
   */
  length() {
    return this.count;
  }

  /**
   * 判断哈希表是否为空
   * @param {void} 无需传入参数
   * @returns {boolean} 是否为空
   */
  isEmpty() {
    return this.count === 0;
  }
}