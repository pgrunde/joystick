"use strict";
exports.__esModule = true;
var gsap_1 = require("gsap");
var Joystick = /** @class */ (function () {
    function Joystick() {
        var _this = this;
        this.mouseUp = function () {
            _this.padDown = false;
            gsap_1.TweenMax.to("#pad", 0.50, { left: 0, bottom: 0 });
        };
        this.padMouseDown = function (event) {
            _this.padDown = true;
        };
        this.mouseMoved = function () {
            if (_this.padDown) {
                var left = _this.pointerX - _this.centerX;
                if (_this.pointerX < _this.container.left) {
                    left = _this.container.width / -2;
                }
                if (_this.pointerX > _this.container.right) {
                    left = _this.container.width / 2;
                }
                var bottom = _this.centerY - _this.pointerY;
                if (_this.pointerY < _this.container.top) {
                    bottom = _this.container.height / 2;
                }
                if (_this.pointerY > _this.container.bottom) {
                    bottom = _this.container.height / -2;
                }
                gsap_1.TweenMax.to("#pad", 0.15, { left: left, bottom: bottom });
            }
        };
        this.handleMouseMove = function (event) {
            var eventDoc, doc, body, pageX, pageY;
            event = event || window.event;
            if (event && event.pageX == null && event.clientX != null) {
                eventDoc = (event.target && event.target.ownerDocument) || document;
                doc = eventDoc.documentElement;
                body = eventDoc.body;
                event.pageX = event.clientX +
                    (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
                    (doc && doc.clientLeft || body && body.clientLeft || 0);
                event.pageY = event.clientY +
                    (doc && doc.scrollTop || body && body.scrollTop || 0) -
                    (doc && doc.clientTop || body && body.clientTop || 0);
            }
            _this.pointerX = event.pageX;
            _this.pointerY = event.pageY;
        };
        this.currentPadCoords = function () {
            return _this.getCoords(document.getElementById("pad") || document.createElement("error"));
        };
        var container = document.getElementById("container");
        this.container = this.getCoords(container || document.createElement("error"));
        this.centerY = 0;
        this.centerX = 0;
        this.pointerY = 0;
        this.pointerX = 0;
        this.padDown = false;
        this.socket = new WebSocket("ws://127.0.0.1:3000/ws");
        this.socket.onopen = function () {
            console.log("Successfully Connected");
            _this.socket.send("Hi From the Client!");
        };
        this.socket.onclose = function (event) {
            console.log("Socket Closed Connection: ", event);
            _this.socket.send("Client Closed!");
        };
        this.socket.onerror = function (error) {
            console.log("Socket Error: ", error);
        };
        gsap_1.TweenMax.selector = document.querySelectorAll;
        var pad = document.getElementById("pad");
        if (pad) {
            var padCoords = this.getCoords(pad);
            this.centerY = padCoords.top + (padCoords.height / 2);
            this.centerX = padCoords.left + (padCoords.width / 2);
            document.onmouseup = this.mouseUp;
            document.onmousemove = this.handleMouseMove;
            pad.onmousedown = this.padMouseDown;
            setInterval(this.mouseMoved, 120);
        }
    }
    Joystick.prototype.getCoords = function (elem) {
        var box = elem.getBoundingClientRect();
        return {
            bottom: box.bottom,
            height: box.height,
            left: box.left,
            right: box.right,
            top: box.top,
            width: box.width,
            doctop: box.top + pageYOffset,
            docleft: box.left + pageXOffset
        };
    };
    return Joystick;
}());
window.onload = function () {
    new Joystick();
};
