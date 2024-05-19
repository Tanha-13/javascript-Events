// Document Object Model -> Interfaces -> Event and EventTarget
// Topic: Introduction to Events
/**
 * Web Events are not part of the core javascript language. They are defined as the part of APIs.
 * 
 * Events are things that happen in the system when programming - the system produces or fires a signal of something when an event occurs. Events are fired inside the browser window.
 * Examples of events - 
 *  the user chooses a key on the keyboard
 *  the user resizes or closes the browser window.
 *  a webpage finishes loading
 *  a form is submitted
 *  a video is played, paused, or ends
 *  an error occurs
 * 
 * to react to an event, you can attach an event handler to it. 
 * When a block of code is defined to run in response to an event, we say we are registering an event handler. 
 * 
 * Event handlers and event listeners are pretty much interchangeable. But they are not similar. Event listener listen out for the event happening, and the handler is the code that is run in response to it happening.
 */

// topic: addEventListener()
/**
 * html objects that can fire events have an addEventListener() method and this is recommended mechanism for adding/registering event handlers.
 * first parameter - events: indicates that which event to listen.
 * second parameter - function: a function to call when the event happens. 
 * 
 *  i. to remove a eventListener, removeEventListener() method is used.
 * ii. 
 * 
 * addEventListener() vs event handler properties like onclick
 *  i. multiple handler can be added in a single event using addEventListener method whereas using properties for events, the earlier handlers will be overwrite.
 * 
 * problem: You should never use the HTML event handler properties because they quickly become unmanageable, outdated and inefficient and using them is a bad practice. Mixing HTML and javascript makes it hard to read. Keeping js code separate is a good practice. Many common server configurations will disallow inline JavaScript.
 */
// topic: focus and blur


//topic: event object
/**
 * event object is automatically passed to event handlers as a parameter to provide extra features and information. the common name of event object is e/evt/event. 
 * the target property of the event object is always a reference to the element the event occurred upon. 
 * event object have a standard set of properties and methods available.
 */

//topic: Event Bubbling and event capture
/**
 * it describes how the browsers handles events targeted at nested elements.
 * todo: target vs currentTarget
 * 
 * event.stopPropagation()
 * event capture is reversed form of event bubbling. Event capture is disabled by default. To enable it , use {capture: true}
 * 
 * By default almost all event handlers are registered in the bubbling phase.
 */

//imp: adding event handlers in three ways - using inline event handler attribute, using event handlers properties and using addEventListener().
// Event reference - https://developer.mozilla.org/en-US/docs/Web/Events