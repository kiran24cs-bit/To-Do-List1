function adding() {
  let allactivitydiv = document.getElementById("allactivitydiv");
  let name = document.getElementById("activityinput").value.toUpperCase().trim();
  if(name==""){
    document.getElementById("action").innerHTML = "EMPTY ACTIVITY";
    return;
  }
  let activities = allactivitydiv.querySelectorAll("div");
  for (let i = 0; i < activities.length; i++) {
    if (activities[i].id == name) {
      document.getElementById("action").innerHTML = "ALREADY PRESENT";
      return;
    }
  }
  document.getElementById("action").innerHTML = "ADDED";

  let subdiv = document.createElement("div");
  subdiv.id = name;
  subdiv.className = "activitysub";

  let activitytext = document.createElement("div");

  let activity = document.createElement("p");
  activity.textContent = name;

  activitytext.appendChild(activity);

  let buttondiv = document.createElement("div");
  let donebutton = document.createElement("button");
  donebutton.innerHTML = "DONE";
  donebutton.className = "donebutton";
  donebutton.id=name+"done";
  donebutton.onclick=function(){
    doneactivity(name);
  }

  let deletebutton = document.createElement("button");
  deletebutton.innerHTML = "DELETE";
  deletebutton.className = "deletebutton";

  deletebutton.onclick=function(){
    deleteactivity(name);
  }

  buttondiv.appendChild(donebutton);
  buttondiv.appendChild(deletebutton);

  subdiv.appendChild(activitytext);
  subdiv.appendChild(buttondiv);

  allactivitydiv.appendChild(subdiv);
  document.getElementById("activityinput").value=null;
}

function addactivity(event) {
  if (event.key == "Enter") {
    adding();
  }
}
function deleteactivity(name){
    document.getElementById(name).remove();
}
function doneactivity(name){
    document.getElementById(name+"done").innerHTML="✅";
}
