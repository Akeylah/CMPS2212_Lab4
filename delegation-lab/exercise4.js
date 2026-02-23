// exercise4.js
const editList = document.querySelector('#edit-list');
if (!editList) {
 console.error('Edit list not found');

} 
else {
editList.addEventListener('dblclick', function(event) {
 // 1. Find closest .edit-item from event.target; return if null
 // 2. Return early if item already has .editing class
 // 3. Save original text, clear item, create and append input
 const item = event.target.closest('.edit-item');
 if(!item){
    return;
 }
 if(item.classList.contains('editing')){
    return;
 } 
 const originalText = item.textContent;
 item.textContent = '';
 const input = document.createElement('input');
 input.value = originalText;
 item.appendChild(input);
 item.classList.add('editing');
 input.focus();
 // -- Helper: commit the edit --
 function commitEdit() { const newText = input.value.trim() || originalText;
 // 4. Set item.textContent to newText, remove .editing
  item.textContent = newText;
  item.classList.remove('editing');
 }
 // -- Helper: cancel the edit --
 function cancelEdit() {
 // 5. Restore originalText, remove .editing
 item.textContent = originalText;
 item.classList.remove('editing');
 }
 // 6. Listen for 'keydown' on input
 // Enter -> commitEdit()
 // Escape -> cancelEdit()
 input.addEventListener('keydown', function(event) {
if (event.key === 'Enter') {
commitEdit();
}

if (event.key === 'Escape') {
cancelEdit();
}
});
 // 7. Listen for 'blur' on input -> commitEdit()
input.addEventListener('blur', function() {
commitEdit();
});
});
}

/*Expected Behaviour
• Double-clicking an item replaces its text with an active input field (blue border from
CSS).
• Pressing Enter saves the new text; the item returns to view mode.
• Pressing Escape restores the original text; the item returns to view mode.
• Clicking away (blur) saves the current input value.
• If the input is cleared and committed, the original text is preserved*/