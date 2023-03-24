# Week 07
## Phase 1: Time Machine
- Create a costom hook which stores the last value of a state, and is generically typed for the value that will be stored inside.
- Based on the implementation, expand it so that it keeps track of all the changes a specific value has received, storing the newest value at position of the list.
- Now using our created time machine, create a grid 4x4 of alterning colors which the user can click over. Every time the user clicks on a color the time machine will keep track of the colors the user has clicked on.
There should be a right sidebar with 3 buttons, "Next", "Previous", and "Resume" where the first one allows the user to focus the next selected color, the second goes to the last selected color and resume will bring the user back to where it left.
### Requirements
- User cannot click on new colors while traversing in time, unless user clicks on the resume button.
- If user is in the present, then the next button should be disabled.
- If the user is in the oldest entry in time, the previous button should be disabled.
- The Resume button must be enabled only when traveling in time, and should be return to the present doesn't matter where the user is.
- The current color should be the one in focus, all other color should have an opacity of 50%.
- When the user selects another square, the previous selected square should get opacity of 50% and the new one should have the focus.
- The user can select as many squares as he wants, you only need to validate that the user doesn't select the same square two or more times in a row.

---
## Phase 2: Tic Tac Toe that travels in time
Build a Tic Tac Toe board that allows move traveling and replaying the game when a winner is determined
### Requeriments
- Record the movements of the game until a winner is determined
- Ability to replay the game after a winner is determined, the replay button should replace the resume button and only visible when game ends, when clicked it should show each move from start to end with half a second between each
- Can move backwards and forwards on move's history using the previous and next buttons
- User can restart a new game at any time and the state should be cleared out
- There should be a window that shows who's turn goes next either the O or X
