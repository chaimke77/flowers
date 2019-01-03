let x = -1, images = [];
images[0] = '/images/images (11).jpg';
images[1] = '/images/images (10).jpg';
images[2] = '/images/header_homepage_003.jpg';

function displayNextImage() {
	x = (x === images.length - 1) ? 0 : x + 1;
	document.getElementById('img').src = images[x];
}
let refreshIntervalId = setInterval(displayNextImage, 5000);


function onSubmit(event){
	event.preventDefault();
	let isValid;
	$("input").each(function() {
		let element = $(this);
		if (element.val() == "") {
			isValid = false;
		}
	});
	if (isValid) {
		alert('some fields are empty!');
		return false;
	}
	let url ="/login";
	let data = {userName: $("#userName").val() , password: $("#password").val()}
	fetch(url, {method : "POST",
		headers: {
			'Accept': 'application/json', 
			'Content-Type': 'application/json'
			},
		body: JSON.stringify(data)
		}).then(function(response) {
			
			return response.json();
		}).then(function(myJson) {
			if(!myJson.userExist)
				alert("user not exists");
			else
			{	
				$("#id01").modal("hide");
				$("#loginNav").toggleClass("hide");
				$("#logoutNav").toggleClass("hide");
				$("#linksUl").empty();
				myJson.links.forEach(function(link){
					$("#linksUl").append("<li><a id=" + link.id + " href='#' >" + link.name + "</a></li>");
					$("#" + link.id).click( function(e) {e.preventDefault(); navigation(link.id, myJson.isManager ); return false; });
				});
				
			}
		}).catch(function(error) {
        console.log(error);
		});
}
function navigation(name, category){
    clearInterval(refreshIntervalId);
    $("main").load(name, {category:category});
    return false;
}
	
function addShowBranch()
{	
	category = $("#addCategory").val();
	if(category == "Manager" || category == "Worker")
	{
		
		$("#branch").removeClass("hide");
	}
	else
	{
		
		$("#branch").addClass("hide");
	}
}

function updateShowBranch()
{	

	category = $("#UpdateCategory").val();
	if(category == "Manager" || category == "Worker")
	{
		$("#editBranch").removeClass("hide");
		
	}
	else
	{
		$("#editBranch").addClass("hide");
		
	}
}
			
	


/*function logout()
{
	$("#loginNav").toggleClass("hide");
	$("#logoutNav").toggleClass("hide");
	fetch("/logout").then(function(response) {
			return response.json();
		}) 
		.then(function(myJson) {
			$("#linksUl").empty();
						myJson.links.forEach(function(link){
							$("#linksUl").append("<li><a id=" + link.id + " href='#' >" + link.name + "</a></li>");
							$("#" + link.id).click( function(e) {e.preventDefault(); navigation(link.id); return false; });
						});
			
		});

}*/


function conactUsOnClick(event){
	event.preventDefault();
	let name = document.getElementById('name').value,
		email = document.getElementById('email').value,
		phoneNumber = document.getElementById('phoneNumber').value,
		message = document.getElementById('message').value;
	if(name == "" || email == "" || phoneNumber == "" || message == "")
	{
		alert("one of fields is empty");
		return false;
	}
	else
	{
		let url = "/conactUsMessage";
		let data = {
			name:name,
			email:email,
			phoneNumber:phoneNumber,
			message:message
		}
		fetch(url, {method : "POST",
		headers: {
			'Accept': 'application/json', 
			'Content-Type': 'application/json'
			},
		body: JSON.stringify(data)
		}).then(function(response) {
		if (response.status !== 200) 
			throw new Error("Not 200 response");
		else
			return response.json();
		}).then(function(myJson) {
			if(!myJson.isEmail)
				alert("the email is invalid");
			else if(!myJson.isPhoneNumber)
				alert("the phoneNumber is invalid");
			else{
				alert("We received your message\nthank you");
				$("main").load("/conactUs", {isManager:0});
			}
		}).catch(function(error) {
        console.log(error);
		});
				
	}	
}