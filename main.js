function submit() {
  student_array = [];
     display_array = [];
    for (var j = 1; j <= 4; j++) {
        var student_name = document.getElementById("name_" + j).value;
        console.log(student_name);
        student_array.push(student_name);
    }
for(var k=0; k<student_array.length;k++){
    display_array.push("<h4> NAME- "+ student_array[k]+"</h4>");
    console.log(display_array);
}
document.getElementById("display_name_with_commas").innerHTML=display_array;
var remove_comma=display_array.join(" ");
console.log(remove_comma);
document.getElementById("display_name_without_commas").innerHTML=remove_comma;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    student_array.sort();
    console.log(student_array);
    var display_sorting=[];
    for(var k=0; k<student_array.length;k++){
        display_sorting.push("<h4> NAME- "+ student_array[k]+"</h4>");
        console.log(display_sorting);0
    }
    var remove_comma1=display_sorting.join(" ");
    console.log(remove_comma1);
    document.getElementById("display_name_without_commas").innerHTML=remove_comma1;   
}