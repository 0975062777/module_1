		
function myDienTich() {
	var cw = document.getElementById("cwidth").value;
	var cc = document.getElementById("cheight").value;
	var w = parseInt(cw);
	var c = parseInt(cc);
	var dt = w*c;
	return document.getElementById("demo").innerHTML = "Diện tích hình chữ nhật là:" + dt;
}
