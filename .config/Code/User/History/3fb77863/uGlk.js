function findMax(nums){
    let max_num = Number.NEGATIVE_INFINITY;
    for (let num of nums){
        if (num > max_num){
            max_num = num
        }
    }
    console.log(max_num)
}
let arr = [8,2,3,4]
findMax(arr)