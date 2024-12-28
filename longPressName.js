var isLongPressedName = function(name, typed) {
    let i = 0; // Pointer for 'name'
    let j = 0; // Pointer for 'typed'

    while (j < typed.length) {
        if (i < name.length && name[i] === typed[j]) {
            // Characters match; move both pointers
            i++;
            j++;
        } else if (j > 0 && typed[j] === typed[j - 1]) {
            // Current 'typed[j]' is a long press of the previous character
            j++;
        } else {
            // Mismatch and not a valid long press
            return false;
        }
    }

    // Check if all characters in 'name' were matched
    return i === name.length;
};

// Example usage:
console.log(isLongPressedName("alex", "aaleex")); // Output: true
console.log(isLongPressedName("saeed", "ssaaedd")); // Output: false
