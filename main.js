function padMouseDown(e) {
  document.padDown = true;
};

function mouseUp(e) {
  document.padDown = false;
  TweenMax.to("#pad", 0.50, {left:0, bottom: 0 })
};

function mouseMoved() {
  if (document.padDown) {
    var left = document.pointerX - document.centerX;
    var bottom = document.centerY - document.pointerY;
    TweenMax.to("#pad", 0.25, {left: left, bottom: bottom })
  }
}

function getCoords(elem) {
  var box = elem.getBoundingClientRect();
  box.doctop = box.top + pageYOffset;
  box.docleft = box.left + pageXOffset;
	return box
}

// https://stackoverflow.com/questions/7790725/javascript-track-mouse-position
// Tracks mouse movement on the document
function handleMouseMove(event) {
  var eventDoc, doc, body, pageX, pageY;

  event = event || window.event; // IE-ism

	// If pageX/Y aren't available and clientX/Y are,
	// calculate pageX/Y - logic taken from jQuery.
	// (This is to support old IE)
	if (event.pageX == null && event.clientX != null) {
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
	document.pointerX = event.pageX;
	document.pointerY = event.pageY;
}

(function() {
  TweenMax.selector = document.querySelectorAll;
  let pad = document.getElementById("pad");
  padCoords = getCoords(pad);
  // set globals
  document.centerY = padCoords.top + (padCoords.height / 2);
  document.centerX =  padCoords.left + (padCoords.width / 2);
  document.onmouseup = mouseUp;
  document.onmousemove = handleMouseMove;
  document.padDown = false;

  pad.onmousedown = padMouseDown;

  setInterval(mouseMoved, 120);
})();
