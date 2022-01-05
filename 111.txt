<html>
<head><title>SGPA Calculator</title>
 <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
 </head>
 <body><center>
 <script>
    function myFunc(){
	if(value==4){
	document.getElementById("4scale").innerHTML;}
	if(value==10){
	document.getElementById("10scale").innerHTML;}}
 </script>
<form method="post">
<img src="DCi.png">
<h2 style="color:green;"><center>SGPA/CGPA/PERCENTAGE Calculator</center></h2>
<marquee>A Development of DCi Private Limited 2015-2016&copy </marquee>
<div class="btn-group">
  <button type="button" class="btn btn-success" onclick=myFunc() value="4">4.0 Scale</button>
  <button type="button" class="btn btn-warning" onclick=myFunc() value="10">10.0 Scale</button>
</div>
<p id="4scale">
<table border="2">
<tr><th><h4 style="text-align:center;">Grade Point</h4></th><th><h4 style="text-align:center;">Credit</h4></th></td>
<tr><td>Subject 1: &nbsp;<select name="d1">
  <option value="4">A</option>  <option value="3.7">A-</option>  <option value="3.3">B+</option>
  <option value="3.0">B</option> <option value="2.7">B-</option> <option value="2.3">C+</option>
<option value="2">C</option> <option value="1.7">C-</option>  <option value="1.3">D+</option> <option value="1">D</option>
<option value="0">F</option>  </select></td><td><input type="text" name="n1"/></td></tr>
<tr><td>Subject 2: &nbsp;<select name="d2">
  <option value="4">A</option>  <option value="3.7">A-</option>  <option value="3.3">B+</option>
  <option value="3.0">B</option> <option value="2.7">B-</option> <option value="2.3">C+</option>
<option value="2">C</option> <option value="1.7">C-</option>  <option value="1.3">D+</option> <option value="1">D</option>
<option value="0">F</option>  </select></td><td><input type="text" name="n2"/></td></tr>
<tr><td>Subject 3: &nbsp;<select name="d3">
  <option value="4">A</option>  <option value="3.7">A-</option>  <option value="3.3">B+</option>
  <option value="3.0">B</option> <option value="2.7">B-</option> <option value="2.3">C+</option>
<option value="2">C</option> <option value="1.7">C-</option>  <option value="1.3">D+</option> <option value="1">D</option>
<option value="0">F</option>  </select></td><td><input type="text" name="n3"/></td></tr>
<tr><td>Subject 4: &nbsp;<select name="d4">
  <option value="4">A</option>  <option value="3.7">A-</option>  <option value="3.3">B+</option>
  <option value="3.0">B</option> <option value="2.7">B-</option> <option value="2.3">C+</option>
<option value="2">C</option> <option value="1.7">C-</option>  <option value="1.3">D+</option> <option value="1">D</option>
<option value="0">F</option>  </select></td><td><input type="text" name="n4"/></td></tr>
<tr><td>Subject 5: &nbsp;<select name="d5">
  <option value="4">A</option>  <option value="3.7">A-</option>  <option value="3.3">B+</option>
  <option value="3.0">B</option> <option value="2.7">B-</option> <option value="2.3">C+</option>
<option value="2">C</option> <option value="1.7">C-</option>  <option value="1.3">D+</option> <option value="1">D</option>
<option value="0">F</option>  </select></td><td><input type="text" name="n5"/></td></tr>
<tr><td>Subject 6: &nbsp;<select name="d6">
  <option value="4">A</option>  <option value="3.7">A-</option>  <option value="3.3">B+</option>
  <option value="3.0">B</option> <option value="2.7">B-</option> <option value="2.3">C+</option>
<option value="2">C</option> <option value="1.7">C-</option>  <option value="1.3">D+</option> <option value="1">D</option>
<option value="0">F</option>  </select></td><td><input type="text" name="n6"/></td><td align="center" colspan="2">CGPA and Percentage Calculator</td></tr>
<tr><td>Subject 7: &nbsp;<select name="d7">
  <option value="4">A</option>  <option value="3.7">A-</option>  <option value="3.3">B+</option>
  <option value="3.0">B</option> <option value="2.7">B-</option> <option value="2.3">C+</option>
<option value="2">C</option> <option value="1.7">C-</option>  <option value="1.3">D+</option> <option value="1">D</option>
<option value="0">F</option>  </select></td><td><input type="text" name="n7"/></td><td>SGPA of First: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="s1"/></td>
<td>Credits:<input type="text" name="c1"/></td></tr>
<tr><td>Subject 8: &nbsp;<select name="d8">
  <option value="4">A</option>  <option value="3.7">A-</option>  <option value="3.3">B+</option>
  <option value="3.0">B</option> <option value="2.7">B-</option> <option value="2.3">C+</option>
<option value="2">C</option> <option value="1.7">C-</option>  <option value="1.3">D+</option> <option value="1">D</option>
<option value="0">F</option>  </select></td><td><input type="text" name="n8"/></td><td>SGPA of Second: &nbsp;<input type="text" name="s2"/></td>
<td>Credits:<input type="text" name="c2"/></td></tr></tr>
<tr><td>Subject 9: &nbsp;<select name="d9">
  <option value="4">A</option>  <option value="3.7">A-</option>  <option value="3.3">B+</option>
  <option value="3.0">B</option> <option value="2.7">B-</option> <option value="2.3">C+</option>
<option value="2">C</option> <option value="1.7">C-</option>  <option value="1.3">D+</option> <option value="1">D</option>
<option value="0">F</option>  </select></td><td><input type="text" name="n9"/></td><td colspan="2" align="center"><input type="submit"  class="btn btn-primary active" name="send" value="send"></td></tr>
<tr><td>Subject 10:<select name="d10">
  <option value="4">A</option>  <option value="3.7">A-</option>  <option value="3.3">B+</option>
  <option value="3.0">B</option> <option value="2.7">B-</option> <option value="2.3">C+</option>
<option value="2">C</option> <option value="1.7">C-</option>  <option value="1.3">D+</option> <option value="1">D</option>
<option value="0">F</option>  </select></td><td><input type="text" name="n10"/></td><td colspan="2" align="center">Solution Center</td></tr>
<tr><td>Subject 11:<select name="d11">
  <option value="4">A</option>  <option value="3.7">A-</option>  <option value="3.3">B+</option>
  <option value="3.0">B</option> <option value="2.7">B-</option> <option value="2.3">C+</option>
<option value="2">C</option> <option value="1.7">C-</option>  <option value="1.3">D+</option> <option value="1">D</option>
<option value="0">F</option>  </select></td><td><input type="text" name="n11"/></td>
<?php
if(isset($_POST['submit'])){
@$a1=$_POST['d1']; @$a2=$_POST['d2']; @$a3=$_POST['d3']; @$a4=$_POST['d4']; @$a5=$_POST['d5']; @$a6=$_POST['d6']; @$a7=$_POST['d7']; @$a8=$_POST['d8'];
@$a9=$_POST['d9']; @$a10=$_POST['d10']; @$a11=$_POST['d11']; @$a12=$_POST['d12']; @$a13=$_POST['d13']; @$a14=$_POST['d14']; @$a15=$_POST['d15'];
  @$b1=$_POST['n1']; @$b2=$_POST['n2']; @$b3=$_POST['n3']; @$b4=$_POST['n4'];@$b5=$_POST['n5']; @$b6=$_POST['n6']; @$b7=$_POST['n7']; @$b8=$_POST['n8'];
  @$b9=$_POST['n9']; @$b10=$_POST['n10']; @$b11=$_POST['n11']; @$b12=$_POST['n12']; @$b13=$_POST['n13']; @$b14=$_POST['n14']; @$b15=$_POST['n15']; 
if($a1==0 or $a2==0 or $a3==0 or $a4==0 or $a5==0 or $a6==0 or $a7==0 or $a8==0 or $a9==0 or $a10==0 or $a11==0 or $a12==0 or $a13==0 or $a14==0 or $a15==0){
 @$ans = "Failed";
 echo"<td colspan=2><center>SGPA:<input type=text value= $ans ></center></td>";
 }
 else{
 @$sum1=$a1*$b1+$a2*$b2+$a3*$b3+$a4*$b4+$a5*$b5+$a6*$b6+$a7*$b7+$a8*$b8+$a9*$b9+$a10*$b10+$a11*$b11+$a12*$b12+$a13*$b13+$a14*$b14+$a15*$b15;
 @$sum2=$b1+$b2+$b3+$b4+$b5+$b6+$b7+$b8+$b9+$b10+$b11+$b12+$b13+$b14+$b15;
 @$ans= $sum1/$sum2;
 echo"<td colspan=2><center>SGPA:<input type=text value= $ans ></center></td>";}
}
elseif(isset($_POST['send'])){
@$d1=$_POST['s1'];@$d2=$_POST['s2'];@$e1=$_POST['c1'];@$e2=$_POST['c2'];
@$cg1=$d1*$e1; @$cg2=$d2*$e2; @$cg3=$e1+$e2; @$cg4=$cg1+$cg2;
@$cgpa=$cg4/$cg3; $per=$cgpa*25;
echo"<td colspan=2><center>CGPA of these <input type=text value=$cgpa ></center></td>";
}
?></tr>
<tr><td>Subject 12:<select name="d12">
  <option value="4">A</option>  <option value="3.7">A-</option>  <option value="3.3">B+</option>
  <option value="3.0">B</option> <option value="2.7">B-</option> <option value="2.3">C+</option>
<option value="2">C</option> <option value="1.7">C-</option>  <option value="1.3">D+</option> <option value="1">D</option>
<option value="0">F</option>  </select></td><td><input type="text" name="n12"/></td><?php if(isset($_POST['send'])){
echo "<td colspan=2><center>Percentage is: &nbsp;&nbsp;&nbsp;<input type=text value=$per ></center></td>";}?></tr>
<tr><td>Subject 13:<select name="d13">
  <option value="4">A</option>  <option value="3.7">A-</option>  <option value="3.3">B+</option>
  <option value="3.0">B</option> <option value="2.7">B-</option> <option value="2.3">C+</option>
<option value="2">C</option> <option value="1.7">C-</option>  <option value="1.3">D+</option> <option value="1">D</option>
<option value="0">F</option>  </select></td><td><input type="text" name="n13"/></td></tr>
<tr><td>Subject 14:<select name="d14">
  <option value="4">A</option>  <option value="3.7">A-</option>  <option value="3.3">B+</option>
  <option value="3.0">B</option> <option value="2.7">B-</option> <option value="2.3">C+</option>
<option value="2">C</option> <option value="1.7">C-</option>  <option value="1.3">D+</option> <option value="1">D</option>
<option value="0">F</option>  </select></td><td><input type="text" name="n14"/></td></tr>
<tr><td>Subject 15:<select name="d15">
  <option value="4">A</option>  <option value="3.7">A-</option>  <option value="3.3">B+</option>
  <option value="3.0">B</option> <option value="2.7">B-</option> <option value="2.3">C+</option>
<option value="2">C</option> <option value="1.7">C-</option>  <option value="1.3">D+</option> <option value="1">D</option>
<option value="0">F</option>  </select></td><td><input type="text" name="n15"/></td></tr>
</center></body>
<tr><td colspan="2"><center><input type="submit" class="btn btn-info" name="submit" value="submit"></center></td></tr></p>
<p id="10scale"> yooyo</p>
</form></html>