var team = "";
var other = "";
var email = "";
var password = "";


function validateLogin()
{
	
	email = document.getElementById("email").value;
	password = document.getElementById("pass").value;
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var valid = true;
	
	if(email == null || email =="")
	{
		document.getElementById("email-field").className = "wrap-input100 validate-input alert-validate";
		valid = false;		
	}else if (!email.match(mailformat))
	{
		document.getElementById("email-field").className = "wrap-input100 validate-input alert-validate";
		valid = false;
	}
	if(password.length<6)
	{
		document.getElementById("pass-field").className = "wrap-input100 validate-input alert-validate";
		valid = false;
	}
	
	return valid;
}

function resetAlert(input)
{
	if(document.getElementById(input).className == "wrap-input100 validate-input alert-validate")
	{
		document.getElementById(input).className = "wrap-input100 validate-input";
	}
	
}

function checkvalue(value)
{
	if(value=='Others')
	{
		document.getElementById("other-field").className = "wrap-input100 validate-input";
	}
	else
	{
		document.getElementById("other-field").className = "wrap-input100 validate-input hidden";
	}

}

function validateTeam()
{
	team = document.getElementById("team").value;
	other = document.getElementById("other").value;
	
	var valid = true;
	
	if(team == null || team =="")
	{
		document.getElementById("team-field").className = "wrap-input100 validate-input alert-validate";
		valid = false;		
	}
	if(team == "Others" && (other == null || other ==""))
	{
		document.getElementById("other-field").className = "wrap-input100 validate-input alert-validate";
		valid = false;
	}
	return valid;
}


function forgotPwdFn() {
    var useruniqueid = document.getElementById('uniqueID').value;
    var valid = true;
    var newpassword = document.getElementById('Password').value;
    var confirmpassword = document.getElementById('confirmPwd').value;
    if (useruniqueid == "" ){
    	document.getElementById('useruniqueid').className =  "wrap-input100 validate-input alert-validate";
    	valid = false;
}
    if(newpassword == "" ){
    	document.getElementById('newPassword').className =  "wrap-input100 validate-input alert-validate";
    	valid = false;
    	}
    if(confirmpassword == "" || (newpassword != confirmpassword) ){
    	document.getElementById('confirmPassword').className =  "wrap-input100 validate-input alert-validate";
    	valid = false;
    }
    
   /* if(valid==true){
       	ReplaceContentInContainer('forgotpwd-content','Your password has been changed successfully.');
       }*/
       
   
   
   return valid;
  
    }
    
  function tooltip()
  {
	  document.getElementById('tip').className =  "tooltiptextvisible";
  }

  function refreshIframe() {
	    var ifr = document.getElementById('devices');
	    ifr.src = ifr.src;
	}
  
  
  function CreateTableFromJSON() {

      var myDevice = [
          {
              "Device Name": "iphone6",
              "Operating System": "iOS",
              "Status": "Available",
              "User": ""
          },
          {
              "Device Name": "iphone6",
              "Operating System": "iOS",
              "Status": "Requested",
              "User": "Rohit"
          },
          {
              "Device Name": "iphone6",
              "Operating System": "iOS",
              "Status": "Booked",
              "User": "Rohit"
          },
          {
              "Device Name": "iphone6",
              "Operating System": "iOS",
              "Status": "Releasing",
              "User": "Rohit"
          },
          {
              "Device Name": "iphone6",
              "Operating System": "iOS",
              "Status": "Releasing",
              "User": "Rohit"
          }

      ]

      // EXTRACT VALUE FOR HTML HEADER.
      // ('Book ID', 'Book Name', 'Category' and 'Price')
      var col = [];
      for (var i = 0; i < myDevice.length; i++) {
          for (var key in myDevice[i]) {
              if (col.indexOf(key) === -1) {
                  col.push(key);
              }
          }
      }

      //ADDING EXTRA HEADER FOR TABLE
      col.push("Reservation");
      col.push("Approve");
      col.push("Reject");

      // CREATE DYNAMIC TABLE.
      var table = document.createElement("table");

      // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

      var tr = table.insertRow(-1);                   // TABLE ROW.

      for (var i = 0; i < 7; i++) {
          var th = document.createElement("th");      // TABLE HEADER.
          th.innerHTML = col[i];
          tr.appendChild(th);
      }

      // ADD JSON DATA TO THE TABLE AS ROWS.
      for (var i = 0; i < myDevice.length; i++) {

          tr = table.insertRow(-1);

          for (var j = 0; j < 4; j++) {
              var tabCell = tr.insertCell(-1);
              tabCell.innerHTML = myDevice[i][col[j]];
          }
          if (myDevice[i][col[2]] === "Available")
          {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = "<button type='button' class='Reserve' id='Reserve' name='button'>Reserve</button>";
            tabCell = tr.insertCell(-1);
            tabCell.innerHTML = "<button type='button' class='Approve' id='Approve' name='button'>Approve</button>";
            tabCell = tr.insertCell(-1);
            tabCell.innerHTML = "<button type='button' class='Reject'  id='Reject' name='button'>Reject</button>";
          }
          else if (myDevice[i][col[2]] === "Booked") {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = "<button type='button' class='Release' id='Release' name='button'>Release</button>";
            tabCell = tr.insertCell(-1);
            tabCell.innerHTML = "<button type='button' class='Approve' id='Approve' name='button'>Approve</button>";
            tabCell = tr.insertCell(-1);
            tabCell.innerHTML = "<button type='button' class='Reject' id='Reject' name='button'>Reject</button>";
          }
          else if (myDevice[i][col[2]] === "Releasing") {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = "<button type='button' class='Releasing' id='Releasing' name='button'>Reserve</button>";
            tabCell = tr.insertCell(-1);
            tabCell.innerHTML = "<button type='button' class='Approve' id='Approve' name='button'>Approve</button>";
            tabCell = tr.insertCell(-1);
            tabCell.innerHTML = "<button type='button' class='Reject' id='Reject' name='button'>Reject</button>";
          }
          else if (myDevice[i][col[2]] === "Requested") {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = "<button type='button' class='Requested' id='Requested' name='button'>Release</button>";
            tabCell = tr.insertCell(-1);
            tabCell.innerHTML = "<button type='button' class='Approve' id='Approve' name='button'>Approve</button>";
            tabCell = tr.insertCell(-1);
            tabCell.innerHTML = "<button type='button' class='Reject' id='Reject' name='button'>Reject</button>";
          }
      }

      // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
      var divContainer = document.getElementById("showData");
      divContainer.innerHTML = "";
      divContainer.appendChild(table);

      var buttons = document.getElementsByClassName('Releasing');

      for(var i = 0; i < buttons.length; i++)
      {
        var button = buttons[i];
        button.disabled = true;
      }

      var buttons = document.getElementsByClassName('Requested');

      for(var i = 0; i < buttons.length; i++)
      {
        var button = buttons[i];
        button.disabled = true;
      }
      // document.getElementById("Releasing").disabled = true;
      // document.getElementById("Requested").disabled = true;
  }
 
 
  function ReplaceContentInContainer(id,content) {
	  var container = document.getElementById(id);
	  container.innerHTML = content;
	  return forgotPwdFn();
 
 
  }
  

