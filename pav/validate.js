window.dataLayer = window.dataLayer || [];
var client;

function reportValidationError(event) {
  dataLayer.push({
    event:"form - validation error",
    errorMessage: event
  });
}

// function repportInvalidInputValue(type, value) {
//   $.ajax({
//     dataType: "json",
//     data: JSON.stringify({
//       type: type,
//       value: value,
//       os: client.getOS(),
//       browser: client.getBrowser(),
//       engine: client.getEngine(),
//       device: client.getDevice(),
//       screen: client.getScreenPrint(),
//       pathname: window.location.pathname,
//       date: new Date(),
//     }),
//     url: "https://hooks.zapier.com/hooks/catch/2736426/fmdpao/silent/",
//     method: "POST",
//   });
// }

function validatePhoneAreaCode (areaCode) {
  return areaCodes.find(function (element) {
    return element === areaCode
  })
}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function findRepeatingNumber (phone) {
  var re = /(\d){4}\1+/;
  return re.test(String(phone));
}

$('document').ready(function () {
  client = new ClientJS();
  $('#Telephone').inputmask("(999) 999-9999");

  $('a[data-ix="new-interaction-2"]').click(function () {
    $('.mobile #Telephone').inputmask("(999) 999-9999");

    $(".mobile #Telephone").on("keyup", function(event) {
      if (!validatePhoneAreaCode(this.value.substr(1, 3)) || !libphonenumber.isValidNumber(this.value, "CA") || findRepeatingNumber(this.value)) {
        this.setCustomValidity("Numéro de téléphone invalide.");
      } else {
        this.setCustomValidity("");
      }
    });

    $(".mobile #Telephone").on("focusout", function(event) {
      if (!validatePhoneAreaCode(this.value.substr(1, 3)) || !libphonenumber.isValidNumber(this.value, "CA") || findRepeatingNumber(this.value)) {
        repportInvalidInputValue("phone", this.value);
        reportValidationError("Numéro de téléphone invalide.");
      }
    });

    // $(".mobile input[name='Courriel']").on("keyup", function(event) {
    //   if (!validateEmail(this.value)) {
    //     this.setCustomValidity("Adresse courriel invalide.");
    //   } else {
    //     this.setCustomValidity("");
    //   }
    // });
    //
    // $(".mobile input[name='Courriel']").on("focusout", function(event) {
    //   if (!validateEmail(this.value)) {
    //     repportInvalidInputValue("email", this.value);
    //     reportValidationError("Adresse courriel invalide.");
    //   }
    // });
  })

  $("#Telephone").on("keyup", function(event) {
    if (!validatePhoneAreaCode(this.value.substr(1, 3)) || !libphonenumber.isValidNumber(this.value, "CA") || findRepeatingNumber(this.value)) {
      this.setCustomValidity("Numéro de téléphone invalide.");
    } else {
      this.setCustomValidity("");
    }
  });

  $("#Telephone").on("focusout", function(event) {
    if (!validatePhoneAreaCode(this.value.substr(1, 3)) || !libphonenumber.isValidNumber(this.value, "CA") || findRepeatingNumber(this.value)) {
      repportInvalidInputValue("phone", this.value);
      reportValidationError("Numéro de téléphone invalide.");
    }
  });

  // $("[name='Courriel']").on("keyup", function(event) {
  //   if (!validateEmail(this.value)) {
  //     this.setCustomValidity("Adresse courriel invalide.");
  //   } else {
  //     this.setCustomValidity("");
  //   }
  // });
  //
  // $("[name='Courriel']").on("focusout", function(event) {
  //   if (!validateEmail(this.value)) {
  //     repportInvalidInputValue("email", this.value);
  //     reportValidationError("Adresse courriel invalide.");
  //   }
  // });

});

var areaCodes = [
  '204',
  '226',
  '236',
  '250',
  '249',
  '289',
  '306',
  '343',
  '365',
  '367',
  '403',
  '416',
  '418',
  '431',
  '437',
  '438',
  '450',
  '506',
  '514',
  '519',
  '548',
  '579',
  '581',
  '587',
  '604',
  '613',
  '639',
  '647',
  '705',
  '709',
  '778',
  '780',
  '782',
  '807',
  '819',
  '825',
  '867',
  '873',
  '902',
  '905'
];
