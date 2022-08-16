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

var oldRequest = new XMLHttpRequest()
oldRequest.open('GET', "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BRL-EUR", true)

oldRequest.onload = function () {
    myData = this.response
    correctData = JSON.parse(myData)
    console.log((correctData.EURBRL.bid))
}

oldRequest.send()

the_max = find_max(nums)

top_num = Number.NEGATIVE_INFINITY;
nums.forEach((element) => {
    if (top_num < element) {
        top_num = element;
    }
});

var request = new XMLHttpRequest()
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

request.onload = function () {
    myData = this.response
    //data = myData.split("},")
    //console.log(data)
    correctData = JSON.parse(myData)
    console.log((correctData[0].title))
}

request.send()



/* (function (a) {
    return a + 100;
});

a => a + 100; */

console.log(the_max, top_num)