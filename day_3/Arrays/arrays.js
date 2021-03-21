
function getSecondLargest(nums) {
    let num;
    
    // remove duplicates
    nums = [...new Set(nums)];
    
    // order asc
    nums = nums.sort((a, b) => a - b);
    
    // reverse order
    nums = nums.reverse();
    
    // get second
    num = nums[1];
    
    return num;
    
    // SOLUTION 2
    let num2;
    num2 = nums.pop(Math.max.apply(null, [...new Set(nums)]));
    num2 = Math.max.apply(null, [...new Set(nums)]);
}

