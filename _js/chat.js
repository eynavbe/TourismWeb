// window.onload = function() {

  function top12(){
    id_containerAll.scrollTop = id_containerAll.scrollHeight - id_containerAll.clientHeight; 
  }
function openForm() {
  $('#back2Top').hide();
    document.getElementById("myForm").style.display = "block";
    document.getElementById("id_containerBig1").innerHTML = "";
    setTimeout(messageFromMe1, 800);
    setTimeout(messageFromMe2, 2000);
  }
  function messageFromMe1(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var newBox1=document.createElement("div");
    newBox1.className="container";
    id_containerBig1.appendChild(newBox1);
    newBox1.innerHTML+="<img style='width:100%;' src='../_images/Israel.png'>";
    newBox1.innerHTML+="<p>שלום ברוך הבא לאתר שלי</p>";
    newBox1.innerHTML+="<span class='time-right'>"+hours+":"+minutes+"</span>";
  }
  function messageFromMe2(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var newBox2=document.createElement("div");
    newBox2.className="container";
    id_containerBig1.appendChild(newBox2);
    newBox2.innerHTML+="<img style='width:100%;' src='../_images/Israel.png'>";
    newBox2.innerHTML+="<p>איך אני יכולה לעזור לך?</p>";
    newBox2.innerHTML+="<span class='time-right'>"+hours+":"+minutes+"</span>";
  }
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
    $('#back2Top').show();
  }
  function sendForm() {
    var textareaMessage = document.getElementById("id_textarea").value;
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var newBox3=document.createElement("div");
    newBox3.className="container darker";
    id_containerBig1.appendChild(newBox3);
    newBox3.innerHTML+="<img class='right' style='width:100%;' src='../_images/questionMark.jpg'>";
    newBox3.innerHTML+="<p>"+textareaMessage+"</p>";
    newBox3.innerHTML+="<span class='time-left'>"+hours+":"+minutes+"</span>";
    document.getElementById("id_textarea").value = "";
    top12();
  }
