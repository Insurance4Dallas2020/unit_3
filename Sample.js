// alert("Connected");
var dict = {
1 : [133.27,144.24,149.80,162.67],
18 : [141.12,150.52,160.00,170.82],
19 : [152.04,161.44,170.92,181.74],
20 : [152.04,161.44,170.92,181.74],
21 : [152.04,161.44,170.92,181.74],
22 : [152.04,161.44,170.92,181.74],
23 : [152.04,161.44,170.92,181.74],
24 : [152.04,161.44,170.92,181.74],
25 : [152.04,161.44,170.92,181.74],
26 : [154.00,163.56,173.29,184.28],
27 : [155.99,165.66,175.65,186.78],
28 : [157.97,167.77,178.04,189.34],
29 : [159.94,169.91,180.44,191.85],
30 : [162.14,172.16,182.99,194.58],
31 : [164.58,174.58,186.90,198.06],
32 : [167.06,177.04,190.85,201.61],
33 : [169.50,179.46,194.82,205.16],
34 : [172.01,181.88,198.77,208.73],
35 : [174.48,184.36,202.68,212.25],
36 : [179.93,189.66,209.20,218.55],
37 : [185.43,195.01,215.78,224.94],
38 : [190.90,200.39,222.31,231.33],
39 : [196.41,205.82,228.90,237.82],
40 : [201.94,211.18,235.48,244.25],
41 : [208.98,218.40,245.11,253.66],
42 : [216.12,225.70,254.89,263.20],
43 : [223.43,233.08,264.90,272.87],
44 : [230.90,240.67,275.07,282.71],
45 : [238.43,248.21,285.32,292.59],
46 : [248.11,255.91,297.99,302.54],
47 : [257.75,263.59,310.61,312.50],
48 : [267.42,271.27,323.29,322.45],
49 : [277.12,278.94,336.06,332.41],
50 : [286.90,286.68,348.80,342.44],
51 : [298.37,294.71,363.58,352.80],
52 : [309.84,302.71,378.36,363.23],
53 : [321.37,310.73,393.25,373.65],
54 : [332.92,318.76,408.15,384.09],
55 : [344.42,326.87,423.03,394.58],
56 : [360.50,338.82,443.17,409.11],
57 : [376.84,350.97,463.55,423.78],
58 : [393.34,363.17,484.15,438.51],
59 : [410.07,375.52,505.02,453.42],
60 : [426.90,388.03,525.92,468.66],
61 : [444.17,400.25,547.82,484.10],
62 : [461.58,412.57,569.84,499.61],
63 : [478.94,424.99,591.83,515.26],
64 : [496.49,437.39,614.02,530.91],
};

var submit = document.querySelector("#submit");
var male = document.querySelector("#male");
var female = document.querySelector("#female");
var age = document.querySelector("#age");
var tno = document.querySelector("#tno");
var tyes = document.querySelector("#tyes");
var answer = document.querySelector("#final");

var ind = 0;
var final = "";
submit.addEventListener("click",function() {
if(male.checked == false && female.checked == false){
	alert("Please select either Male or Female.")
	return;
}
if(age.value == ""){
	alert("Please enter your age.")
	return;
}
if(tno.checked == false && tyes.checked == false){
	alert("Please select either Yes or No for tobacco.")
	return;
}
if(male.checked == true){
	if(tno.checked == true)
		ind = 0;
	else
		ind = 2;
}
else{
	if(tno.checked == true)
		ind = 1;
	else
		ind = 3;
}
var A = age.value;
if(A <= 17)
	Age = 1;
else
	Age = A;
ans = dict[Age][ind];
final = "Here's your quote  $" +  ans;
alert(final);
});