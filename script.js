
$.getJSON("http://codeforces.com/api/user.rating?handle=Decayed",function(data){
	console.log(data);
	let contestDetails = data.result;
	let temp = "";
	let contestNo = contestDetails.length;
	for(let i=contestNo-1;i>=0;i--)
	{
		temp += "<tr>";
		temp += "<th>" + contestNo + "</th>";
		temp += "<td>" + contestDetails[i].contestName + "</td>";
		temp += "<td>" + contestDetails[i].rank + "</td>";
		let ratingChange = contestDetails[i].oldRating + " -> " + contestDetails[i].newRating;
		temp += "<td>" + ratingChange + "</td>";
		temp += "</tr>";
		contestNo--;
	}
	$('.contestData').append(temp);
});