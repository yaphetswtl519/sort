//传统冒泡排序中每一趟排序操作只能找到一个最大值或最小值,我们考虑利用在每趟排序中进行正向和反向两遍冒泡的方法一次可以得到两个最终值(最大者和最小者) , 从而使排序趟数几乎减少了一半。
//最佳情况：T(n) = O(n) 当输入的数据已经是正序时（都已经是正序了，为毛何必还排序呢….）
//最差情况：T(n) = O(n2) 当输入的数据是反序时(卧槽，我直接反序不就完了….)
//平均情况：T(n) = O(n2)

function bubbleSort(arr) {
    var low = 0;
    var high= arr.length-1; //设置变量的初始值
    var tmp,j;
    while (low < high) {
        for (j= low; j< high; ++j) { //正向冒泡,找到最大者
            if (arr[j]> arr[j+1]) {
                tmp = arr[j]; arr[j]=arr[j+1];arr[j+1]=tmp;
            }
        }
        --high;                 //修改high值, 前移一位
        for (j=high; j>low; --j) {//反向冒泡,找到最小者
            if (arr[j]<arr[j-1]) {
                tmp = arr[j]; arr[j]=arr[j-1];arr[j-1]=tmp;
            }
        }
        ++low;                  //修改low值,后移一位
    }
    return arr;
}