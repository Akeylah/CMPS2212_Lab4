// exercise3.js
const filterBar = document.querySelector('#filter-bar');
const cards = document.querySelectorAll('.card');
const filterBtns = document.querySelectorAll('.filter-btn');

if (!filterBar || !filterBtns.length || !cards.length ) {
console.error(' Card elements was not found');
} 

else {
filterBar.addEventListener('click', function(event) {

if (!event.target.matches('.filter-btn')) return;

filterBtns.forEach(function(i) {
i.classList.remove('active');
});

event.target.classList.add('active');
const cardfilter = event.target.dataset.filter;
cards.forEach(function(card) {

if (cardfilter === 'all') {
card.classList.remove('hidden');
} 
else {
const data = card.dataset.category;
if (data === cardfilter) {
card.classList.remove('hidden');
} 
else {
card.classList.add('hidden');
}}
});
});
}


/*Expected Behaviour
• Clicking 'All' shows every card.
• Clicking 'Design' shows only the two design cards and hides the rest.
• The active filter button has a dark background; the others do not.
• Clicking anywhere else in the filter bar area (but not on a button) does nothing */

// 1. Guard: if event.target does not match '.filter-btn', return
 // 2. Update active class on all buttons
 // 3. Read the filter value from event.target.dataset.filter
 // 4. Loop through cards
 // - If filter === 'all': remove .hidden from every card
 // - Otherwise: compare card.dataset.category to filter
 // add .hidden if no match, remove .hidden if match