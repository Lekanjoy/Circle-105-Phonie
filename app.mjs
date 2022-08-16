
function startApp() {
  const getValueInput = () => {
    let inputValue = document.getElementById("phone_number").value; 
    let firstDigit = inputValue.slice(0, 1);
    let firstDigitPrefix = inputValue.slice(1, 4);
    let firstDigitPrefixFour = inputValue.slice(1, 5);
    

    let firstIsNotZeroPrefix = inputValue.slice(0, 3);
    let firstIsNotZeroPrefixForFourDigit = inputValue.slice(0, 4);

    let firstIsNotZeroPrefixOne = inputValue.slice(1, 1);
    let firstIsNotZeroPrefixTwo = inputValue.slice(1, 2);
    let firstIsNotZeroPrefixThree = inputValue.slice(1, 3);
    let firstIsNotZeroPrefixFour = inputValue.slice(1, 4);
    let firstIsNotZeroPrefixFive = inputValue.slice(1, 5);
    let firstIsNotZeroPrefixSix = inputValue.slice(1, 6);
    let firstIsNotZeroPrefixSeven = inputValue.slice(1, 7);


    if (inputValue.length <= 11 && firstDigit == 0){
        // For four numbered prefix determinant
    switch (firstDigitPrefix ) {
        // Airtel
        case "701":
        case "708":
        case "802":
        case "808":
        case "812":
        case "901":
        case "902":
        case "907":
        case "912":
        case "912":
            document.getElementById("logo").src = "./images/airtel_logo.png";
          break;
        // Globacom
        case "705":
        case "805":
        case "807":
        case "811":
        case "815":
        case "905":
        case "915":
            document.getElementById("logo").src = "./images/glo_logo.png";
          break;
        // 9Mobile
        case "809":
        case "817":
        case "818":
        case "908":
        case "909":
            document.getElementById("logo").src = "./images/etisalat_logo.png";
          break;
        // MTel
        case "804":
            document.getElementById("logo").src = "./images/mtel_logo.png";
          break;
           // ZoomMobile
        case "707":
            document.getElementById("logo").src = "./images/zoomMobile_logo.png";
          break;
             // Multi Links
        case "709":
            document.getElementById("logo").src = "./images/multiLinks_logo.png";
          break;
             // Starcomms
        case "819":
            document.getElementById("logo").src = "./images/starcomms_logo.png";
          break;
           // MTN
        case "703":
        case "704":
        case "706":
        case "803":
        case "806":
        case "810":
        case "813":
        case "814":
        case "816":
        case "903":
        case "906":
        case "913":
        case "916":
            document.getElementById("logo").src = "./images/mtn_logo.png";
          break;
         default:
            // For five numbered prefix determinant
            switch (firstDigitPrefixFour){
                // MTN
                case "7025":
                case "7026":
                    document.getElementById("logo").src = "./images/mtn_logo.png";
                  break;
                    // Smile
                case "7020":
                    document.getElementById("logo").src = "./images/smile_logo.png";
                  break;
                    // Starcomms
                case "7028":
                case "7029":
                    document.getElementById("logo").src = "./images/starcomms_logo.png";
                  break;
                   // Multi Links
                case "7027":
                    document.getElementById("logo").src = "./images/multiLinks_logo.png";
                  break;
                default:
                    document.getElementById("logo").src = "./images/no_exist_logo.png";
            }
      }
    } else if (firstDigit != 0 && inputValue.length <= 10){
        switch (firstIsNotZeroPrefix ) {
            // Airtel
            case "701":
            case "708":
            case "802":
            case "808":
            case "812":
            case "901":
            case "902":
            case "907":
            case "912":
            case "912":
                document.getElementById("logo").src = "./images/airtel_logo.png";
              break;
            // Globacom
            case "705":
            case "805":
            case "807":
            case "811":
            case "815":
            case "905":
            case "915":
                document.getElementById("logo").src = "./images/glo_logo.png";
              break;
            // 9Mobile
            case "809":
            case "817":
            case "818":
            case "908":
            case "909":
                document.getElementById("logo").src = "./images/etisalat_logo.png";
              break;
            // MTel
            case "804":
                document.getElementById("logo").src = "./images/mtel_logo.png";
              break;
               // ZoomMobile
            case "707":
                document.getElementById("logo").src = "./images/zoomMobile_logo.png";
              break;
                 // Multi Links
            case "709":
                document.getElementById("logo").src = "./images/multiLinks_logo.png";
              break;
                 // Starcomms
            case "819":
                document.getElementById("logo").src = "./images/starcomms_logo.png";
              break;
               // MTN
            case "703":
            case "704":
            case "706":
            case "803":
            case "806":
            case "810":
            case "813":
            case "814":
            case "816":
            case "903":
            case "906":
            case "913":
            case "916":
                document.getElementById("logo").src = "./images/mtn_logo.png";
              break;
             default:
                // For five numbered prefix determinant
                switch (firstIsNotZeroPrefixForFourDigit){
                    // MTN
                    case "7025":
                    case "7026":
                        document.getElementById("logo").src = "./images/mtn_logo.png";
                      break;
                        // Smile
                    case "7020":
                        document.getElementById("logo").src = "./images/smile_logo.png";
                      break;
                        // Starcomms
                    case "7028":
                    case "7029":
                        document.getElementById("logo").src = "./images/starcomms_logo.png";
                      break;
                       // Multi Links
                    case "7027":
                        document.getElementById("logo").src = "./images/multiLinks_logo.png";
                      break;
                    default:
                        document.getElementById("logo").src = "./images/no_exist_logo.png";
                }
          }
    }
else if (firstDigit != 0 && inputValue.length <= 10){
    switch (firstIsNotZeroPrefix ) {
        // Airtel
        case "701":
        case "708":
        case "802":
        case "808":
        case "812":
        case "901":
        case "902":
        case "907":
        case "912":
        case "912":
            document.getElementById("logo").src = "./images/airtel_logo.png";
          break;
        // Globacom
        case "705":
        case "805":
        case "807":
        case "811":
        case "815":
        case "905":
        case "915":
            document.getElementById("logo").src = "./images/glo_logo.png";
          break;
        // 9Mobile
        case "809":
        case "817":
        case "818":
        case "908":
        case "909":
            document.getElementById("logo").src = "./images/etisalat_logo.png";
          break;
        // MTel
        case "804":
            document.getElementById("logo").src = "./images/mtel_logo.png";
          break;
           // ZoomMobile
        case "707":
            document.getElementById("logo").src = "./images/zoomMobile_logo.png";
          break;
             // Multi Links
        case "709":
            document.getElementById("logo").src = "./images/multiLinks_logo.png";
          break;
             // Starcomms
        case "819":
            document.getElementById("logo").src = "./images/starcomms_logo.png";
          break;
           // MTN
        case "703":
        case "704":
        case "706":
        case "803":
        case "806":
        case "810":
        case "813":
        case "814":
        case "816":
        case "903":
        case "906":
        case "913":
        case "916":
            document.getElementById("logo").src = "./images/mtn_logo.png";
          break;
         default:
            // For five numbered prefix determinant
            switch (firstIsNotZeroPrefixForFourDigit){
                // MTN
                case "7025":
                case "7026":
                    document.getElementById("logo").src = "./images/mtn_logo.png";
                  break;
                    // Smile
                case "7020":
                    document.getElementById("logo").src = "./images/smile_logo.png";
                  break;
                    // Starcomms
                case "7028":
                case "7029":
                    document.getElementById("logo").src = "./images/starcomms_logo.png";
                  break;
                   // Multi Links
                case "7027":
                    document.getElementById("logo").src = "./images/multiLinks_logo.png";
                  break;
                default:
                    document.getElementById("logo").src = "./images/no_exist_logo.png";
            }
      }
    } else {
        alert("Please enter number.");
    }
  }

let inputBox = document.getElementById("phone_number");
inputBox.addEventListener("input", getValueInput);



  
 
  };







  // ======= DO NOT EDIT ============== //
  export default startApp;
  // ======= EEND DO NOT EDIT ========= //

// e.preventDefault();
//   //console.log(e)
  
//   let userInput = telNumInput.value;
//   console.log(userInput)
//   if(!userInput){
//     alert('Please enter a Phone Number');
//     return
//   };