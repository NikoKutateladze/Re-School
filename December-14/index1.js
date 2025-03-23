var arr = [5, 3, 4, 10, 1, 2, 7, 11, 0]

function CalculateSum(nums) {
    var length = nums.length;
    var halfLength = Math.floor(length / 2);


    var leftSum = 0;
    var rightSum = 0;

    for (var i = 0; i < halfLength; i++) {
        leftSum = leftSum + nums[i];
    }

    var startPoint = halfLength;

    if (length % 2 === 1) {
        startPoint = startPoint + 1;
    }

    for (var i = startPoint; i < length; i++) {
        rightSum = rightSum + nums[i];
    }

    if (length % 2 === 1) {
        leftSum = leftSum + nums[halfLength];
        rightSum = rightSum + nums[halfLength];
    }
    console.log(length, halfLength, leftSum, rightSum)

    return Math.max(leftSum, rightSum)
}

console.log(CalculateSum(arr))