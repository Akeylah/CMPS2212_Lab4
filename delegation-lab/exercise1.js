// exercise1.js
const accordion = document.querySelector('.accordion');
accordion.addEventListener('click', function(event) {
// 1. Find the closest trigger from event.target
// If null, the click was not on a trigger - return early.
// 2. From the trigger, find the closest .accordion-item
// 3. Close ALL accordion items (querySelectorAll + forEach + remove class)
// 4. Toggle .open on the clicked item only
});