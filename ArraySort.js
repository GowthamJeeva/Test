function sortedArray(arr){
	var count = 1;
	var count5 =2;
	var freq = arr ;
	var res = [];
	var endLoop = false;
	for(var i=0;i<arr.length;i++){
		for(j=i+1; j<arr.length;j++)
		{
			if(arr[i]==arr[j])
			{
			count++;
			freq[i] = -55;
			}
			}
			if(freq[i] !=-55){
			freq[i] = count;
			}	   
	}

	for(var i=0;i<arr.length;i++){
		var j = i+1;
		while(true){
			if(j>arr.length-1){
				endLoop = true;
				break;
			}
			if(freq[i] >= freq[j] && freq[i]!= -55 && freq[j]!= -55)
			   {
			   var temp = freq[i];
			    freq[i] = freq[i+1];
				freq[i+1] = temp;
			var temp1 = arr[i];
			    arr[i] = arr[i+1];
				arr[i+1] = temp1;
			break;
			}
			else
			   j = i+2;
			}
		if(endLoop)
		break;

	}
	for(var i=0;i<arr.length;i++)
		if(freq[i] != -55){
			for(var j=0;j<freq[i];j++){
					res.push(arr[i]);
			}
		}

return res;
}