const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */

const chainMaker = {
    arrString : [],  
    getLength() {
        let str = '';
        this.arrString.forEach(e => str +='( ' + e + ' )~~' );
        return str.slice(0, -2).length;
    },
    addLink(value) {
      this.arrString.push(value);
      return this;
    },
    removeLink(position) {
        if(this.arrString.length < position
            || position <= 0 || isNaN(position)){
                this.arrString = [];
            throw new Error('You can\'t remove incorrect link!');
        }
        this.arrString.splice(position-1, 1);

      return this;
    },
    reverseChain() {
      this.arrString.reverse();
      return this;
    },
    finishChain() {
        let str = '';
        this.arrString.forEach(e => str +='( ' + e + ' )~~' );
        this.arrString = [];
        return str.slice(0, -2);
    }
};

module.exports = {
  chainMaker,
};
