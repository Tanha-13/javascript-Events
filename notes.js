// Javascript is a sequentially run language
// browser events invoked based on any activity

//approach 01
/**
 * problem: onClick = 'direct code' . this approach is not scalable. 
 * imp: react code is scalable when code is directly included in onClick.
 */

//approach 02
/**
 *  document.getElementById("owl").onclick = function(){
 *      alert('owl click');
 *  }
 * problem: this approach is also problematic because of onclick. You won't get enough information or features.
 */

//approach 03 - using addeventlistener
/**
 * 01. you will get the information about propagation.
 * 02. addEventListener - can listen to events.
 * element.addEventListener('event name', callback function, false(default))
 * 
 */

//approach 04 - attachEvent()
//approach 05 - jQuery - onEventListener

// browser events and environments event
/**
 * todo: event types, timestamp, defaultPrevented, 
 * todo: target, toElement, srcElement, currentTarget, 
 * todo: clientX, clientY, offset, screenX, screenY, 
 * todo: altKey, ctrlKey, shiftKey, keyCode
 */

//topic: event propagation
/**
 * depends on use case
 * 01. event bubbling - false ( third parameter(default)). from bottom to top
 * 02. event capturing - true (third parameter). from top to bottom
 * 
 */