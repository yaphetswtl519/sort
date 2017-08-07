//最佳情况：T(n) = O(nlog2 n)
//最坏情况：T(n) = O(nlog2 n)
//平均情况：T(n) =O(nlog n)

function shellSort(arr) {
    var len = arr.length,
        temp,
        gap = 1;
    while(gap < len/5) {          //动态定义间隔序列
        gap =gap*5+1;
    }
    for (gap; gap > 0; gap = Math.floor(gap/5)) {
        for (var i = gap; i < len; i++) {
            temp = arr[i];
            for (var j = i-gap; j >= 0 && arr[j] > temp; j-=gap) {
                arr[j+gap] = arr[j];
            }
            arr[j+gap] = temp;
        }
    }
    return arr;
}