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
  container: box
  socket: WebSocket

  constructor() {
    const container = document.getElementById("container")
    this.container = this.getCoords(container || document.createElement("error"))
    this.centerY = 0
    this.centerX = 0
    this.pointerY = 0
    this.pointerX = 0
    this.padDown = false
    this.socket = new WebSocket("ws://127.0.0.1:3000/ws")
    console.log("SOCKET CALL", this.socket)

    this.socket.onopen = this.socketOnOpen
    this.socket.onclose = this.socketOnClose
    this.socket.onerror = this.socketOnError

    TweenMax.selector = document.querySelectorAll
    const pad = document.getElementById("pad")
    if (pad) {
      const padCoords = this.getCoords(pad)
      this.centerY = padCoords.top + (padCoords.height / 2)
      this.centerX =  padCoords.left + (padCoords.width / 2)
      document.onmouseup = this.mouseUp
      document.onmousemove = this.handleMouseMove

      pad.onmousedown = this.padMouseDown

      setInterval(this.mouseMoved, 120)
    }
  }

  socketOnOpen = () => {
    console.log("Successfully Connected")
    this.socket.send("Hi From the Client!")
  }

  socketOnClose = (event: Event) => {
    console.log("Socket Closed Connection: ", event)
    this.socket.send("Client Closed!")
  }

  socketOnError = (error: Event) => {
    console.log("Socket Error: ", error)
  }

  mouseUp = () => {
    this.padDown = false
    TweenMax.to("#pad", 0.50, {left: 0, bottom: 0 })
  }

  padMouseDown = (event: any) => {
    this.padDown = true
  }

  mouseMoved = () => {
    if (this.padDown) {
      let left = this.pointerX - this.centerX
      if (this.pointerX < this.container.left) {
        left = this.container.width / -2
      }
      if (this.pointerX > this.container.right) {
        left = this.container.width / 2
      }

      let bottom = this.centerY - this.pointerY
      if (this.pointerY < this.container.top) {
        bottom = this.container.height / 2
      }
      if (this.pointerY > this.container.bottom) {
        bottom = this.container.height / -2
      }

      this.socket.send(`left: ${left}, bottom: ${bottom}`)

      TweenMax.to("#pad", 0.15, {left: left, bottom: bottom })
    }
  }

  handleMouseMove = (event: any) => {
    let eventDoc, doc, body, pageX, pageY

    event = event || window.event

    if (event && event.pageX == null && event.clientX != null) {
        eventDoc = (event.target && event.target.ownerDocument) || document
        doc = eventDoc.documentElement
        body = eventDoc.body

        event.pageX = event.clientX +
          (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
          (doc && doc.clientLeft || body && body.clientLeft || 0)
        event.pageY = event.clientY +
          (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
          (doc && doc.clientTop  || body && body.clientTop  || 0 )
    }
    this.pointerX = event.pageX
    this.pointerY = event.pageY
  }

  getCoords(elem: HTMLElement): box {
    let box = elem.getBoundingClientRect()
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

  currentPadCoords = (): box => {
    return this.getCoords(document.getElementById("pad") || document.createElement("error"))
  }
}

window.onload = () => {
  new Joystick()
}
