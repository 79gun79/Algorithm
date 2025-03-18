function solution(nums) {
    const toSet = new Set(nums);
    const canGet = nums.length / 2
    const res = toSet.size >= canGet ? canGet : toSet.size;
    
    return res
}