function leftPad(num) {
	num = num + "";
	while(num.length < 4) {
		num = "0" + num;
	}
	return num;
}

function downToUp(num) {
	return parseInt((num + "").split("").sort().join(""), 10);
}

function upToDown(num) {
	return parseInt((num + "").split("").sort().reverse().join(""), 10);
}

var total = 0, count = 0;
for(var i = 0;i<10000;i++) {
	var num = i;
	num = leftPad(num);
	var parsedInt = parseInt(num, 10);
	if(isNaN(parsedInt)) {
		//console.log("Please enter a valid number.");
	}
	else if(parsedInt < 1 || parsedInt > 9998) {
		//console.log("Pick a four digit number whose digits are not all the same.");
	}
	else {
		var firstNum = num[0];
		if(num.split(firstNum).length == 5) {
			//console.log("The number needs to have digits that are not all the same.");
		}
		else {
			var step = 1;
			while(parsedInt != 6174 && step < 20) {
				var temp = leftPad(parsedInt);
				var down = downToUp(temp);
				var up = upToDown(temp);
				//console.log(step + ": (" + temp + ") " + up + " - " + down + " = " + (up - down));
				parsedInt = up - down;
				step++;
			}
			if(step >= 20) console.log("Could not complete " + i);
			else {
				console.log(i + " took " + step + " step(s)");
				total += step;
				count++;
			}
			//if(step > 8) console.log(i);
		}
	}
}

console.log(total + " steps taken on " + count + " numbers. Average of " + (total / count));