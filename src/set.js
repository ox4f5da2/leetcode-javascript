/**
 * @class 集合
 */
export default class MySet {
  /**
   * 集合
   * @param {number[], string[]} 传入纯数字数组或者纯字符串数组
   */
  constructor(...arr) {
    this.dataStore = [];
    this.size = 0;
    this.init(arr);
  }
  init(arr) {
    this.dataStore = arr && [].concat(...arr);
  }

  /**
   * 判断集合是纯数字还是纯字符串
   * @param {void} 无需传入参数
   * @returns {"string" | "number" | "both" | "none"} 集合的类型
   */
  type() {
    if (this.dataStore.length === 0) return 'none';
    let judge1 = this.dataStore.every(item => typeof item === 'string');
    let judge2 = this.dataStore.every(item => typeof item === 'number');
    if (judge1) return 'string';
    if (judge2) return 'number';
    return 'both';
  }

  /**
   * 集合排序
   * @param {"desc" | "asc"} methods 排序方式
   * @returns {Set} 排序后的集合
   */
  sort(methods) {
    if (this.type() === 'number') {
      switch (methods) {
        case 'desc': this.dataStore = this.dataStore.sort((a, b) => a - b); break;
        case 'asc': this.dataStore = this.dataStore.sort((a, b) => b - a); break;
        default: break;
      }
    }
    else if (this.type() === 'string') {
      switch (methods) {
        case 'desc': this.dataStore = this.dataStore.sort().reverse(); break;
        case 'asc': this.dataStore = this.dataStore.sort(); break;
        default: break;
      }
    }
    else {
      throw new Error('混合型集合不能排序!');
    }
    return this;
  }

  /**
   * 添加元素
   * @param {number | string} data 
   * @returns {boolean} 是否添加成功
   */
  add(data) {
    if (this.dataStore.indexOf(data) === -1) {
      this.dataStore.push(data);
      console.log('元素[' + data + ']添加成功');
      return true;
    }
    console.log(`集合内已经有${data}元素`);
    return false;
  }

  /**
   * 删除元素
   * @param {number | string} data 
   * @returns {boolean} 是否删除成功
   */
  remove(data) {
    let index = this.dataStore.indexOf(data);
    if (index !== -1) {
      this.dataStore.splice(index, 1);
      console.log(data + '删除成功');
      return true;
    }
    console.log(`集合内没有${data}元素`);
    return false;
  }

  /**
   * 并集
   * @param {MySet} target 待求并集的MySet对象实例
   * @returns {MySet} 并集对象集合
   */
  union(target) {
    if (target.length === 0) return this;
    let set = new MySet();
    set.dataStore = this.dataStore.concat(target.dataStore.filter(item => this.dataStore.indexOf(item) < 0));
    return set;
  }

  /**
   * 交集
   * @param {MySet} target 待求交集的MySet对象实例
   * @returns {MySet} 交集对象集合
   */
  interesct(target) {
    let set = new MySet();
    set.dataStore = target.dataStore.filter(item => this.dataStore.indexOf(item) >= 0);
    return set;
  }

  /**
   * 判断是否为该集合的子集
   * @param {MySet} target 待求子集的MySet对象实例
   * @returns {boolean} 判断结果
   */
  subset(target) {
    return target.dataStore.every(item => this.dataStore.indexOf(item) >= 0);
  }

  /**
   * 补集
   * @param {MySet} smallRange 小范围的集合
   * @param {MySet} bigRange 大范围的集合
   * @returns {MySet} 补集的集合
   */
  difference = function (smallRange, bigRange) {
    if (!bigRange.subset(smallRange)) throw new Error("第一个集合不是第二个集合的子集");
    let smallData = smallRange.dataStore;
    return new MySet(bigRange.dataStore.filter(item => !smallData.includes(item)));
  }

  /**
   * 将集合以字符串展示
   * @param {void} 无需传入参数
   * @returns {string} 集合的字符串形式
   */
  toString () {
    console.log(this.dataStore.toString());
  }
  
  /**
   * 将集合以数组展示
   * @param {void} 无需传入参数
   * @returns {number[] | string[]} 集合的数组形式
   */
   getSet () {
    console.log(this.dataStore);
  }
}
