# Count the smiley faces challenge Instructions
Given an array (arr) as an argument complete the function `countSmileys` that should return the total number of smiling faces.
Rules for a smiling face:
-Each smiley face must contain a valid pair of eyes. Eyes can be marked as `:` or `;`
-A smiley face can have a nose but it does not have to. Valid characters for a nose are `-` or `~`
-Every smiling face must have a smiling mouth that should be marked with either `)` or `D`.
No additional characters are allowed except for those mentioned.
Valid smiley face examples:
`:)` `:D` `;-D` `:~)`
Invalid smiley faces:
`;(` `:>` `:}` `:]`

## Pseudocode
- Take an array.
- Declare a counter to keep track of the number of valid smiley faces.
- If the array is empty, return 0.
- Else, declare an array of valid smiley faces.
- check if there is an element in the provided array that is also in the valid smiley faces array.
- Increase the counter for every element that is found or leave the counter at the previous value if no element is found.
- Return the counter
