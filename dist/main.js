import { TweenMax } from 'gsap';
var Joystick = /** @class */ (function () {
    function Joystick() {
        this.centerY = 0;
        this.centerX = 0;
        this.pointerY = 0;
        this.pointerX = 0;
        this.padDown = false;
        TweenMax.selector = document.querySelectorAll;
        var pad = document.getElementById("pad");
        if (pad) {
            var padCoords = this.getCoords(pad);
            this.centerY = padCoords.top + (padCoords.height / 2);
            this.centerX = padCoords.left + (padCoords.width / 2);
            document.onmouseup = this.mouseUp;
            document.onmousemove = this.handleMouseMove;
            pad.onmousedown = this.padMouseDown;
        }
    }
    Joystick.prototype.mouseUp = function () {
        this.padDown = false;
        TweenMax.to("#pad", 0.50, { left: 0, bottom: 0 });
    };
    Joystick.prototype.padMouseDown = function (event) {
        this.padDown = true;
    };
    Joystick.prototype.mouseMoved = function () {
        if (this.padDown) {
            var left = this.pointerX - this.centerX;
            var bottom = this.centerY - this.pointerY;
            TweenMax.to("#pad", 0.25, { left: left, bottom: bottom });
        }
    };
    Joystick.prototype.handleMouseMove = function (event) {
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
        this.pointerX = event.pageX;
        this.pointerY = event.pageY;
    };
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
            docleft: box.left + pageXOffset,
        };
    };
    return Joystick;
}());
document.onload = function () {
    console.log("happen");
    new Joystick();
};
//# sourceMappingURL=main.js.map