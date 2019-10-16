import { TweenMax } from 'gsap'

type box = ClientRect & {
  doctop: number
  docleft: number
}

class Joystick {
  centerY: number
  centerX: number
  pointerY: number
  pointerX: number
  padDown: boolean

  constructor() {
    this.centerY = 0
    this.centerX = 0
    this.pointerY = 0
    this.pointerX = 0
    this.padDown = false

    TweenMax.selector = document.querySelectorAll
    const pad = document.getElementById("pad")
    if (pad) {
      const padCoords = this.getCoords(pad)
        this.centerY = padCoords.top + (padCoords.height / 2);
        this.centerX =  padCoords.left + (padCoords.width / 2);
        document.onmouseup = this.mouseUp;
        document.onmousemove = this.handleMouseMove;

        pad.onmousedown = this.padMouseDown;
    }
  }

  mouseUp() {
    this.padDown = false;
    TweenMax.to("#pad", 0.50, {left: 0, bottom: 0 })
  }

  padMouseDown(event: any) {
    this.padDown = true;
  }

  mouseMoved() {
    if (this.padDown) {
      var left = this.pointerX - this.centerX;
      var bottom = this.centerY - this.pointerY;
      TweenMax.to("#pad", 0.25, {left: left, bottom: bottom })
    }
  }

  handleMouseMove(event: any) {
    let eventDoc, doc, body, pageX, pageY;

    event = event || window.event;

    if (event && event.pageX == null && event.clientX != null) {
        eventDoc = (event.target && event.target.ownerDocument) || document;
        doc = eventDoc.documentElement;
        body = eventDoc.body;

        event.pageX = event.clientX +
          (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
          (doc && doc.clientLeft || body && body.clientLeft || 0);
        event.pageY = event.clientY +
          (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
          (doc && doc.clientTop  || body && body.clientTop  || 0 );
    }
    this.pointerX = event.pageX;
    this.pointerY = event.pageY;
  }

  getCoords(elem: HTMLElement): box {
    var box = elem.getBoundingClientRect()
    return {
      bottom: box.bottom,
      height: box.height,
      left: box.left,
      right: box.right,
      top: box.top,
      width: box.width,
      doctop: box.top + pageYOffset,
      docleft: box.left + pageXOffset,
    } as box
  }
}

document.onload = () => {
  console.log("happen")
  new Joystick()
}
