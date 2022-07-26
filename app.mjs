 let telNumInput = document.getElementById('numInput');
let form = document.getElementById('myForm');

form.addEventListener('submit',startApp)


function startApp(e) {
e.preventDefault();
  //console.log(e)
  
  let userInput = telNumInput.value;
  console.log(userInput)
  if(!userInput){
    alert('Please enter a Phone Number');
    return
  };


  
 
  };







  // ======= DO NOT EDIT ============== //
  export default startApp;
  // ======= EEND DO NOT EDIT ========= //