  var shuffle = function(nums, n) {
    let result=[];
    for(let i=0;i<n;i++){
    result.push(nums[i]);//0,1,2 -- 2,5,1
    result.push(nums[i+n]);
    

    }
    return result; 

  };
  console.log(shuffle([2,5,1,3,4,7],3));

/*
time complexity  o(n)
space complexity
*/