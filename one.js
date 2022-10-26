function productOfAll(arr,n)
    {
        let result = 1;
        for (let i = 0; i < n; i++)
            result = result * arr[i];
        return result;
    }
     
        let arr = [ 1, 2, 3, 4, 5, 6 ];
        let n = arr.length;
        console.log(productOfAll(arr, n));   