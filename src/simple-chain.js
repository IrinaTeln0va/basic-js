const chainMaker = {
  getLength() {
    return this.chainArr.length;
  },
  addLink(value) {
    this.chainArr.push(value);
    return this;
  },
  removeLink(position) {
    if (!(position-1 in this.chainArr)) {
      this.chainArr = [];
      throw new Error();
    }

    this.chainArr.splice(position - 1, 1);

    return this;
  },
  reverseChain() {
    this.chainArr.reverse();

    return this;
  },
  finishChain() {
    const result = this.chainArr.map((elem) => {
      return `( ${elem} )`;
    }).join('~~');
    
    this.chainArr = [];
    
    return result;
  },
  chainArr: []
};

chainMaker.chainArr = [];

module.exports = chainMaker;
