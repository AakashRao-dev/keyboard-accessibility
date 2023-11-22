// Define key codes for left and right arrow keys
const KEY_CODES = {
  LEFT: 37,
  RIGHT: 39,
};

// Select the toolbar and add event listeners
const toolbar = document.querySelector('.toolbar');
toolbar.addEventListener('keydown', handleKeyEvent);
toolbar.addEventListener('click', handleClickEvent);

// Handle key events for left and right arrow keys
function handleKeyEvent(event) {
  // Check if the pressed key is the left or right arrow key
  const isLeftArrow = event.keyCode === KEY_CODES.LEFT;
  const isRightArrow = event.keyCode === KEY_CODES.RIGHT;

  // If it's a left or right arrow key, prevent the default action and move focus
  if (isLeftArrow || isRightArrow) {
    event.preventDefault();
    const direction = isRightArrow ? 1 : -1;
    moveFocusByDirection(direction);
  }
}

// Handle click events on the toolbar buttons
function handleClickEvent(event) {
  // Find the closest button element to the clicked target
  const clickedButton = event.target.closest('button');
  if (clickedButton) {
    activateButton(clickedButton);
  }
}

// Move focus to the next or previous button based on the given direction
function moveFocusByDirection(direction) {
  const currentButton = document.activeElement;
  const targetButton =
    direction === 1
      ? currentButton.nextElementSibling
      : currentButton.previousElementSibling;

  // If there's a target button, activate it
  if (targetButton) {
    activateButton(targetButton);
  }
}

// Activate the given button: update tabindex, focus, and show corresponding content
function activateButton(button) {
  // Set all buttons to tabindex -1
  toolbar.querySelectorAll('button').forEach(btn => (btn.tabIndex = -1));

  // Set the tabindex of the current button to 0, focus on it, and highlight it
  button.tabIndex = 0;
  button.focus();
  highlightActiveTab(button);

  // Toggle the "active" class on content elements based on the selected tab
  const contentId = button.getAttribute('data-content');
  document
    .querySelectorAll('.content')
    .forEach(content => content.classList.remove('active'));
  document.getElementById(contentId).classList.add('active');
}

// Highlight the active tab by changing its background color
function highlightActiveTab(activeButton) {
  // Reset background color for all buttons
  toolbar.querySelectorAll('button').forEach(btn => {
    btn.style.color = '';
    btn.style.backgroundColor = '';
  });

  // Set a background color for the active button
  activeButton.style.backgroundColor = '#222222';
  activeButton.style.color = '#f7f7f7';
}
