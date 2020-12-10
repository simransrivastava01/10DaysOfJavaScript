


function modifyArray(nums) {
    var n = nums.length;
    for(var i=0;i<n;i++)
    {
        if(nums[i]%2==0)
        {
            nums[i]=nums[i]*2;
        }
        else
        {
            nums[i]=nums[i]*3;
        }
    }
    return nums;
}