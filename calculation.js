function find_max(nums) {
    let max_num = Number.NEGATIVE_INFINITY;
    for (let num of nums) {
        if (num > max_num) {
            max_num = num;
        }
    }
    return max_num;
}

nums = []
topo = 1000000
for (let i = 0; i < 1000; i++) {
    nums[i] = Math.floor(Math.random() * topo) + 1
}

the_max = find_max(nums)

top_num = Number.NEGATIVE_INFINITY;
nums.forEach((element) => {
    if (top_num < element) {
        top_num = element;
    }
});

/* (function (a) {
    return a + 100;
});

a => a + 100; */

console.log(the_max, top_num)