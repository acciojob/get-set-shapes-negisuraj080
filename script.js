//complete this code
class Rectangle {
  _width;
  _height;
  constructor(width,height){
  this.width = width;
  this.height = height;
  }

  get width(){
    return this._width
  }
  set width(w){
    this._width = w;
  }

  get height(){
    return this._height
  }
  set height(h){
    this._height = h;
  }

  getArea(){
    return this._height * this._width;
  }

}

class Square extends Rectangle {
  constructor(side){
   super(side,side);
   this.side = side;
  }

  getPerimeter(){
    return 4 * this.side;
  }

}


// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
