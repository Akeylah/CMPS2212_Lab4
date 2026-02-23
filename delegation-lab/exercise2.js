// exercise2.js
const tagInput = document.querySelector('#tag-input');
const tagContainer = document.querySelector('#tag-container');

// -- Add a tag when Enter is pressed --
if (!tagInput || !tagContainer) {
  console.error('The Input and Container Tag not found');
} 
else {
tagInput.addEventListener('keydown', function(event) {

if (event.key !== 'Enter') return;
const value = tagInput.value.trim();

if (!value) return;
const divs = document.createElement('div');
divs.classList.add('tag');
divs.innerHTML = `${value} <span class="tag-remove">&times;</span>`;

tagContainer.appendChild(divs);
tagInput.value = '';
});

// -- Remove a tag via delegation --

tagContainer.addEventListener('click', function(event) {
if (!event.target.matches('.tag-remove')) return;
const tag = event.target.closest('.tag');
if (!tag) {
console.error('Tag was not found');
return;
}
tag.remove();
});
}

/*Expected Behaviour
• Typing a word and pressing Enter adds a styled pill tag to the container.
• Clicking the × on any tag removes only that tag.
• The input is cleared after each addition.
• Duplicate tag text is allowed (no validation required) */


 // 1. Create a div with class "tag"
 // 2. Set its innerHTML to include the label text
 // and a <span class="tag-remove">&times;</span>
 // 3. Append the tag to tagContainer
 // 4. Clear the input
