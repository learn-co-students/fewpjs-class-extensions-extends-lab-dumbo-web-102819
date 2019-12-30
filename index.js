// Your code here
class Polygon {
    
    constructor(arr) {
        this.sides = arr;
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce((accum, num) => accum + num);
    }
}

class Triangle extends Polygon {

    get isValid() {
        let side1 = this.sides[0];
        let side2 = this.sides[1];
        let side3 = this.sides[2];
    
        if((side1 + side2) > side3 && (side2 + side3) > side1) {
          return true
        } else {
          return false
        }
    }
}

class Square extends Polygon {

    get isValid() {
      let arr = this.sides.filter((e, i, a) => {
        return a.indexOf(e) === i;
      });
      return arr.length === 1 ? true : false;
    }
    
    get area() {
        return Math.pow(this.sides[0], 2);
    }
  }
