var sortColors = function(nums) {
    let low = 0, current = 0, high = nums.length - 1;

    while (current <= high) {
        if (nums[current] === 0) {
            // Swap nums[current] and nums[low]
            [nums[current], nums[low]] = [nums[low], nums[current]];
            low++;
            current++;
        } else if (nums[current] === 2) {
            // Swap nums[current] and nums[high]
            [nums[current], nums[high]] = [nums[high], nums[current]];
            high--;
        } else {
            // Just move the current pointer for nums[current] === 1
            current++;
        }
    }
    return nums; // The array is sorted in-place
};

// Example usage:
console.log(sortColors([2, 0, 2, 1, 1, 0])); // Output: [0, 0, 1, 1, 2, 2]
console.log(sortColors([2, 0, 1]));          // Output: [0, 1, 2]
