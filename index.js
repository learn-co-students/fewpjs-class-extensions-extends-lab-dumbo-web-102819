class Polygon {
  constructor (intArray) {
    this.sides = intArray
  }

  get countSides () {
    return this.sides.length
  }

  get perimeter () {
    return this.sides.reduce((total, side) => total += side)
  }
}

class Triangle extends Polygon {
  get isValid () {
    // const valid = ((this.sides[0] + this.sides[1]) > this.sides[2])
    return (this.sides[0] + this.sides[1]) > this.sides[2] && (this.sides[1] + this.sides[2]) > this.sides[0] && (this.sides[0] + this.sides[2]) > this.sides[1]
    // this is gross and i hate it but i cant remember how permutations work
    // !!valid
  }
}

class Square extends Polygon {
  get isValid () {
    // const valid = (this.sides.every(side => side === this.sides[0]))
    return this.sides.every(side => side === this.sides[0])
    // !!valid
  }

  get area () {
    return this.sides[0] ** 2
  }
}
