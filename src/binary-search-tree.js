const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.treeRoot = null 
  }

  root() {
    return this.treeRoot 
  }

  add(data) {

    let node = new Node(data)
    let newCurr = this.treeRoot

    if (this.treeRoot == null) this.treeRoot = node
    while (newCurr != undefined) {
      if (newCurr.data == data) return null
      if (newCurr.data > data) {
        if (newCurr.left == null) newCurr.left = node
        else if (newCurr.left == null) return data
        else newCurr = newCurr.left
      } 
      if (newCurr.data < data) {
        if (newCurr.right == null) newCurr.right = node
        else if (newCurr.right == null) return data
        else newCurr = newCurr.right
      }
    }

  }

  has(data) {
    if(this.find(data) == null) return false
    else return true
  }

  find(data) {
    let search = null
    let newCurr = this.treeRoot

    if (this.treeRoot == null) return search
    while (search == undefined && newCurr != undefined) {
      if (newCurr.data < data) newCurr = newCurr.right
      else if (newCurr.data > data) newCurr = newCurr.left
      else search = newCurr
    }
    return search
  }

  remove(data) {
    this.treeRoot = this.removeRec(this.treeRoot, data)
  }

  removeRec(node, newData){
    if (newData == node.data) {
      if (!node.left) return null || node.right 
      if (!node.right) return null || node.left 
      else {
        let minNode = this.min(node.right.data)
        node.right = this.removeRec(node.right, minNode)
        node.data = minNode

        return node
      }
    } 
    if (node.data > newData) {
      node.left = this.removeRec(node.left, newData)
      return node
    } 
    else {
      node.right = this.removeRec(node.right, newData)
      return node
    }
  }

  min(newCurr = this.treeRoot) {
    if (this.treeRoot != newCurr) newCurr = this.find(newCurr)
    while (newCurr.left) {
      newCurr = newCurr.left
    }
    return newCurr.data
  }

  max(newCurr = this.treeRoot) {
    while (newCurr.right) {
      newCurr = newCurr.right
    }
    return newCurr.data
  }
  
}

module.exports = {
  BinarySearchTree
};