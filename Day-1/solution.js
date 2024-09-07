var twoSum = function(nums, target) {
let twoSum = []
for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<nums.length;j++){
    if(nums[i] + nums[j] === target){
        twoSum.push(i,j)
        break;
    }
    }
}
console.log("Two Sum",twoSum);

return twoSum;
    
};

// Example input for testing
let nums = [2, 7, 11, 15];
let target = 9;

// Call the function with the example input
twoSum(nums, target);
