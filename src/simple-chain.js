const { NotImplementedError } = require("../extensions/index.js")

const chainMaker = {
  chain: new Array(),
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    this.chain.push(`( ${value} )`)
    return this
  },
  removeLink(position) {
    if (!this.chain[position - 1]) {
      this.chain = []
      throw new Error(`You can't remove incorrect link!`)
    }
    this.chain.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    let output = this.chain
    this.chain = []
    return output.join("~~")
  },
}

module.exports = {
  chainMaker,
}
