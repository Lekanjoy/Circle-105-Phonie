let numInput = document.getElementById("num");
let logo = document.getElementById("img");
let errorMsg = document.getElementById("invalid");

// 3 digits Prefix Carrier Details
const Mtn_3_Prefix = [ 810, 703, 706, 816, 803, 903, 806, 813, 814, 906, 916, 913, 704];
const Glo_3_Prefix = [805, 905, 807, 811, 705, 815, 915];
const Airtel_3_Prefix = [907, 708, 802, 902, 812, 808, 701, 912, 901];
const mobile9_3_Prefix = [909, 908, 818, 809, 817];

// 4 digits Prefix Carrier Details
const Mtn_4_Format = [7025, 7026];
const Glo_4_Format = [];
const Airtel_4_Format = [];
const mobile9_4_Format = [];


function startApp() {
  
 /*function getValueInput() {
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


        if (inputValue.length <= 11 && firstDigit == 0) {
            // For four numbered prefix determinant
            switch (firstDigitPrefix) {
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
                    switch (firstDigitPrefixFour) {
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
        } else if (firstDigit != 0 && inputValue.length <= 10) {
            switch (firstIsNotZeroPrefix) {
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
                    switch (firstIsNotZeroPrefixForFourDigit) {
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
        else if (firstDigit != 0 && inputValue.length <= 10) {
            switch (firstIsNotZeroPrefix) {
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
                    switch (firstIsNotZeroPrefixForFourDigit) {
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
    }*/
/*let inputBox = document.getElementById("phone_number");
inputBox.addEventListener("input", getValueInput);*/

numInput.addEventListener("keyup", () => {
  let userNumber = numInput.value;

  // Check if the user starts entry with or without XYZ code
  if (userNumber[0] != undefined && userNumber[0] == 0) {
    getThreeNumberPrefix(userNumber);
    getFourNumberPrefix(userNumber);
  } else if (userNumber[0] == 2) {
    getCountryCode(userNumber);
  } else {
    logo.style.display = "none";
    errorMsg.style.display = "block";
    numInput.style.outline = "1px solid red";
  }
});


// 3 digits Prefix Carrier Function
function getThreeNumberPrefix(userNumber) {
  // Check to throw error on invalid entry
  if (userNumber.length < 11 || userNumber.length >= 12) {
    logo.style.display = "none";
    errorMsg.style.display = "block";
    numInput.style.outline = "1px solid red";
  }

  // Looping through all possible carrier format and matching user Phone Number.
  Mtn_3_Prefix.forEach((num) => {
    if (userNumber.slice(1, 4) == num && userNumber.length === 11) {
      logo.src = "/images/mtn.png";
      displayLogo();
    }
  });

  Glo_3_Prefix.forEach((num) => {
    if (userNumber.slice(1, 4) == num && userNumber.length === 11) {
      logo.src = "/images/glo.jpeg";
      displayLogo();
    }
  });

  Airtel_3_Prefix.forEach((num) => {
    if (userNumber.slice(1, 4) == num && userNumber.length === 11) {
      logo.src = "/images/airtel.png";
      displayLogo();
    }
  });

  mobile9_3_Prefix.forEach((num) => {
    if (userNumber.slice(1, 4) == num && userNumber.length === 11) {
      logo.src = "/images/9mobile.jpeg";
      displayLogo();
    }
  });
}
// 4 digits Prefix Carrier Function
function getFourNumberPrefix(userNumber) {
  Mtn_4_Format.forEach((num) => {
    if (userNumber.slice(1, 5) == num && userNumber.length === 11) {
      logo.src = "/images/mtn.png";
      displayLogo();
    }
  });
}

// XYZ country code(+234) Function
function getCountryCode(userNumber) {
  // Check to throw error on invalid entry
  if (userNumber.length < 13 || userNumber.length >= 14) {
    logo.style.display = "none";
    errorMsg.style.display = "block";
    numInput.style.outline = "1px solid red";
  }

  let sliced_3_Num = userNumber.slice(3, 6); //Getting first 3 digits after the XYZ code

  Mtn_3_Prefix.forEach((num) => {
    if (sliced_3_Num == num && userNumber.length === 13) {
      logo.src = "/images/mtn.png";
      displayLogo();
    }
  });

  Glo_3_Prefix.forEach((num) => {
    if (sliced_3_Num == num && userNumber.length === 13) {
      logo.src = "/images/glo.jpeg";
      displayLogo();
    }
  });

  Airtel_3_Prefix.forEach((num) => {
    if (sliced_3_Num == num && userNumber.length === 13) {
      logo.src = "/images/airtel.png";
      displayLogo();
    }
  });

  mobile9_3_Prefix.forEach((num) => {
    if (sliced_3_Num == num && userNumber.length === 13) {
      logo.src = "/images/9mobile.jpeg";
      displayLogo();
    }
  });



  let sliced_4_Num = userNumber.slice(3, 7); //Getting first 4 digits after the XYZ code

  Mtn_4_Format.forEach((num) => {
    if (sliced_4_Num == num && userNumber.length === 13) {
      logo.src = "/images/mtn.png";
      displayLogo()
    }
  });
}

// Show Logo and Message Visibility.
function displayLogo() {
  logo.style.display = "flex";
  numInput.style.outline = "1px solid green";
  errorMsg.style.display = "none";
}

  
 
  };







  // ======= DO NOT EDIT ============== //
  export default startApp;
  // ======= EEND DO NOT EDIT ========= //

