const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor(){
    this.newArr = new Array()
  }

  getUnderlyingList() {
    let listArr = this.newArr
    let list = new ListNode(listArr[0]) 
    let nodeList = list 
    listArr.shift()
    listArr.forEach(elem => {
      nodeList.next = new ListNode(elem)
      nodeList = nodeList.next 
    })
    return list
  }

  enqueue(value) {
    return this.newArr.push(value)
  }

  dequeue() {
    return this.newArr.shift()
  }
}

module.exports = {
  Queue
};
