//adding tasks
function add() {

    var inputlist = document.getElementById("box").value;
   
    if (inputlist === "") {
        alert("Enter Todays task");
    }
    else {
        
        const inputlist = document.createTextNode(box.value);
        const listLIitem = document.getElementById('list-item');
        let LI = document.createElement("li");
        LI.appendChild(inputlist);
        listLIitem.appendChild(LI);
        document.getElementById("button2-list").style.visibility="visible";
         
//close button     
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("U+1F468 U+1F44D ");
  span.className = "close";
  span.appendChild(txt);
  LI.appendChild(span);

  var close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }; 
  }
    }
    document.getElementById("box").value = "";  
}

//delete all
function deleteall_item() { 
    if (confirm("Are you sure you want to delete all the task?")=== true){
    var list=document.getElementById("list-item");
    list.innerHTML="";
    document.getElementById("button2-list").style.visibility="hidden";
        }
   
    else{
        alert("Complete your pending task and then delete it.");
        document.getElementById("button2-list").style.visibility="visible";
    }
}






