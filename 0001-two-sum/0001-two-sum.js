/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    //this function for storing the hashmap, we used it for finding the value without looping twice so the big o notation will be linear
    let map = new Map();
    
    //we will do the loop for finding the complement, complement is from target minus nums[i], and after that we will store it in the map, and find in the map for the same value with complement
    for(let i = 0; i <= nums.length; i++) {
        let complement = target - nums[i];

        if(map.has(complement)) {
            return [i, map.get(complement)];
        } else {
            map.set(nums[i], i);
        }
    }
};