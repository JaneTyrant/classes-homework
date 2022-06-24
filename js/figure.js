"use strict";

class Figure3D {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  getVolume() {
    return null;
  }
  static isFigure3D(obj) {
    return obj instanceof Figure3D;
  }
}

class Sphere extends Figure3D {
  constructor(radius) {
    super("Sphere");
    this.radius = radius;
  }
  getVolume() {
    return (4 / 3) * Math.PI * Math.pow(this.radius, 3);
  }
}

class Cylinder extends Figure3D {
  constructor(baseArea, height) {
    super("Cylinder");
    this.baseArea = baseArea;
    this.height = height;
  }
  getVolume() {
    return this.baseArea * this.height;
  }
}

class Cube extends Figure3D {
  constructor(side) {
    super("Cylinder");
    this.side = side;
  }
  getVolume() {
    return Math.pow(this.side, 3);
  }
}

const sphere = new Sphere(2);
console.log(sphere.getVolume());

const cylinder = new Cylinder(5, 10);
console.log(cylinder.getVolume());

const cube = new Cube(3);
console.log(cube.getVolume());
