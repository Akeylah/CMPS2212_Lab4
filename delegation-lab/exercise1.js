// exercise1.js
const accordion = document.querySelector('.accordion');

if (!accordion) {
console.error('Accordion element was not found');
} 
else {
accordion.addEventListener('click', function(event) {
const trigger = event.target.closest('.accordion-trigger');

if (!trigger) {
console.error('Accordion trigger not clicked');
return;
}

const item = trigger.closest('.accordion-item');

if (!item) {
console.error('Accordion item was not found');
return;
}

const items = document.querySelectorAll('.accordion-item');

items.forEach (function(i) {
if (i !== item) {
i.classList.remove('open');
}
});

item.classList.toggle('open');
});
}

// 1. Find the closest trigger from event.target
// If null, the click was not on a trigger - return early.
// 2. From the trigger, find the closest .accordion-item
// 3. Close ALL accordion items (querySelectorAll + forEach + remove class)
// 4. Toggle .open on the clicked item only

/*Expected Behaviour
• Clicking a trigger opens its panel and closes any previously open panel.
• Clicking an already-open trigger closes it.
• The page loads with all panels closed.*/