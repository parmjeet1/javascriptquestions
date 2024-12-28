var productExceptSelf = function(nums) {
    let n = nums.length;
    let answer = new Array(n).fill(1);

    // Compute left product for each index
    let left = 1;
    for (let i = 0; i < n; i++) {
        answer[i] = left;
        left *= nums[i];
    }

    // Compute right product for each index and multiply with the left product
    let right = 1;
    for (let i = n - 1; i >= 0; i--) {
        answer[i] *= right;
        right *= nums[i];
    }

    return answer;
};

// Example usage:
console.log(productExceptSelf([1, 2, 3, 4])); // Output: [24, 12, 8, 6]
