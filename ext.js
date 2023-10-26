//global variables
		var x = 100;
		var y = 500;
		function greet() {

			//local variables
			var j = 300;
			var k = 700;
			document.write("JavaScript fimple function");
			document.write("<br>"+(j+k));
			document.write("<br>"+(x+y));
		}

		function mOperations()
		{
			document.write("<br>"+(x+y));

			//document.write("<br>"+(j+k));
		}
  // + add, - sub, / div, * mul

		//conditional statements 

		function validateVoter()
		{
			var age = 22;

		if(age == 18)
		{
			alert("just eligible for voter ID");
		}
		else if(age > 18)
		{
			alert("most eligible for voter ID");
		}
		else
		{
			alert("not eligible for the voter ID");
		}
		}