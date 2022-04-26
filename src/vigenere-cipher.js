const { NotImplementedError } = require("../extensions/index.js")

class VigenereCipheringMachine {
  constructor(value = true) {
    this.value = value
    this.shifre = {
      a: 0,
      b: 1,
      c: 2,
      d: 3,
      e: 4,
      f: 5,
      g: 6,
      h: 7,
      i: 8,
      j: 9,
      k: 10,
      l: 11,
      m: 12,
      n: 13,
      o: 14,
      p: 15,
      q: 16,
      r: 17,
      s: 18,
      t: 19,
      u: 20,
      v: 21,
      w: 22,
      x: 23,
      y: 24,
      z: 25,
    }
    this.deshifre = {
      0: "A",
      1: "B",
      2: "C",
      3: "D",
      4: "E",
      5: "F",
      6: "G",
      7: "H",
      8: "I",
      9: "J",
      10: "K",
      11: "L",
      12: "M",
      13: "N",
      14: "O",
      15: "P",
      16: "Q",
      17: "R",
      18: "S",
      19: "T",
      20: "U",
      21: "V",
      22: "W",
      23: "X",
      24: "Y",
      25: "Z",
    }
  }

  encrypt(message, key) {
    let crypt = true

    return (this.value
      ? this.method(message, key, crypt)
      : this.method(message, key, crypt).reverse()
    ).join``
  }
  decrypt(message, key) {
    let crypt = false

    return (this.value
      ? this.method(message, key, crypt)
      : this.method(message, key, crypt).reverse()
    ).join``
  }

  method(message, key, crypt) {
    if (!message || !key) throw new Error(`Incorrect arguments!`)

    message = message.toLowerCase()

    key = key.toLowerCase()
    key = new Array(...key)

    let keyPos = new Array()

    let mesPos = new Array(...message).map((item) =>
      this.shifre[item] === undefined ? item : this.shifre[item]
    )

    let subKey

    mesPos.forEach((item, index) => {
      index = index % key.length
      keyPos.push(key[index])
    })

    for (let i = 0; i < mesPos.length; i++) {
      if (typeof mesPos[i] !== "number") {
        let subKey = keyPos.slice(i, mesPos.length - 1)
        keyPos = keyPos.slice(0, i)
        keyPos.push(mesPos[i])
        keyPos = keyPos.concat(subKey)
      }
    }

    keyPos = keyPos.map((item) =>
      this.shifre[item] === undefined ? item : this.shifre[item]
    )

    return crypt === true
      ? mesPos
          .map((item, index) =>
            typeof item === "number" ? (item + keyPos[index]) % 26 : item
          )
          .map((item) =>
            this.deshifre[item] === undefined || typeof item !== "number"
              ? item
              : this.deshifre[item]
          )
      : mesPos
          .map((item, index) =>
            typeof item === "number" && item - keyPos[index] >= 0
              ? (item - keyPos[index]) % 26
              : typeof item === "number" && item - keyPos[index] < 0
              ? (26 + item - keyPos[index]) % 26
              : item
          )
          .map((item) =>
            this.deshifre[item] === undefined || typeof item !== "number"
              ? item
              : this.deshifre[item]
          )
  }
}

module.exports = {
  VigenereCipheringMachine,
}
