

function GetPost(){
	
	var con = 0;
	var div = document.getElementById("tablee");	
	
	fetch('https://jsonplaceholder.typicode.com/posts')
	.then((res)=>{
		return res.json();
	})
	.then((post)=>{
		for ( let index = 0; index < post.length; index++ )
		{
			div.innerHTML += '<tr onclick=\" window.location.href = \'details.html?id=' + post[con].id + '\'; \"><td>' + post[con].userId + '</td><td>' + post[con].id + '</td></td><td>' + post[con].title + '</td><td>' + post[con].body + '</td></tr>'
			
			con= con + 1;
		}
	})
	.catch((error)=>{
		console.log(error);
	})
	
	
}

function GetDetails(id){
	
	var con = 0;
	var div = document.getElementById("tablee");	
	
	fetch('https://jsonplaceholder.typicode.com/posts?id=' + id + '')
	.then((res)=>{
		return res.json();
	})
	.then((post)=>{
		for ( let index = 0; index < post.length; index++ )
		{
			div.innerHTML += '<tr><td>' + post[con].userId + '</td><td>' + post[con].id + '</td></td><td>' + post[con].title + '</td><td>' + post[con].body + '</td></tr>'
			
			con= con + 1;
		}
	})
	.catch((error)=>{
		console.log(error);
	})
}

function New(e) {
	e.preventDefault() 
	var new_userId = document.getElementById("new_userId").value;
	var new_title = document.getElementById("new_title").value;
	var new_body = document.getElementById("new_body").value;
	var alert_label = document.getElementById("alert_label");
	
	if (new_userId == "") 
		alert_label.innerHTML = "Įveskite userId!";
	else if (new_title == "") 
		alert_label.innerHTML = "Įveskite title!";
	else if (new_body == "") 
		alert_label.innerHTML = "Įveskite body!";
	
	else
	{
		alert_label.innerHTML = "Palaukite..."; 
		document.getElementById("add_new_btn").disabled = true;
		document.getElementById("add_new_btn").style = "background:grey; opacity: 0.2";
		
		console.log("Input Data: " + new_userId + " " + new_title + " " + new_body);

			fetch('https://jsonplaceholder.typicode.com/posts', {
				method: 'POST',
				body: JSON.stringify({
				title: new_title,
				body: new_body,
				userId: new_userId
			}),
				headers: {
					"Content-type": "application/json; charset=UTF-8"
				}
			})
			.then(response => response.json())
			.then(json => {
				console.log('response: ' + JSON.stringify(json));
				window.alert("Įrašas sėkmingai pridėtas");
				alert_label.innerHTML = ""; 
				document.getElementById("add_form").reset();
				document.getElementById("add_new_btn").disabled = false;
				document.getElementById("add_new_btn").style = "background:linear-gradient(to bottom, #ea5408 5%, #612203 100%); opacity: 1";
			}) 
			.catch((error)=>{
				console.log(error);
				alert_label.innerHTML = ""; 
				document.getElementById("add_form").reset();
				document.getElementById("add_new_btn").disabled = false;
				document.getElementById("add_new_btn").style = "background:linear-gradient(to bottom, #ea5408 5%, #612203 100%); opacity: 1";
			})
			
	}
}
	
jQuery(document).ready(function() {
 jQuery("[required]").after("<span class='required'>*</span>");
});