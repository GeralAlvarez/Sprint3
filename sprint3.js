document.addEventListener("DOMContentLoaded", function () {
  const input_name = document.querySelector("#cardholder_name");
  const nombre_tarjeta = document.querySelector("#nombre_tarjeta");
  const nombreError = document.querySelector(".tarjeta_nombre_error");
  const input_number = document.querySelector("#cardholder_number");
  const numero_tarjeta = document.querySelector("#numero_tarjeta");
  const numeroError = document.querySelector(".tarjeta_numero_error");
  const input_mes = document.querySelector("#mes");
  const mes_tarjeta = document.querySelector("#mes_tarjeta");
  const mesError = document.querySelector(".mes_error");
  const input_año = document.querySelector("#año");
  const año_tarjeta = document.querySelector("#año_tarjeta");
  const añoError = document.querySelector(".año_error");
  const input_cvc = document.querySelector("#cvc");
  const cvc_tarjeta = document.querySelector("#cvc_tarjeta");
  const cvcError = document.querySelector(".cvc_error");
  const confirmBtn = document.querySelector("#btn");

  // Ingreso Nombre
  input_name.addEventListener("input", () => {
    if (input_name.value == "") {
      nombre_tarjeta.innerText = "JANE APPLESEED";
    } else {
      nombre_tarjeta.innerText = input_name.value;
    }
  });

  // Ingreso Numero
  input_number.addEventListener('input', (event) => {
    
    let inputValue = event.target.value;
    
    numero_tarjeta.innerText = input_number.value; //Actualización de la tarjeta

    if (input_number.value == "") {
      //Mostrar los 0000 0000 0000 0000 por defecto cuando no se ingresa nada
      numero_tarjeta.innerText = "0000 0000 0000 0000";
    }

    let regExp = /[A-z]/g; //Error al ingresar una letra
    if (regExp.test(input_number.value)) {
      numeroError.innerText = "El numero ingresado es incorrecto";
    } else {
      input_number.value = inputValue.replace(/\s/g, '').replace(/([0-9]{4})/g, '$1 ').trim(); //El primer repleace remplaza los espacios y el segundo agregara 1 espacio cada 5 numeros. El trim elimina el ultimo espacio.
      numeroError.innerText = "";
    }
  });

  // Ingreso Mes
  input_mes.addEventListener("input", () => {
    mes_tarjeta.innerText = input_mes.value;
    if (input_mes.value == "") {
      //Mostrar los 00 por defecto cuando no se ingresa nada
      mes_tarjeta.innerText = "00";
    }

    let regExp = /[A-z]/g; //Error al ingresar una letra
    if (regExp.test(input_mes.value)) {
      mesError.innerText = "El numero ingresado es incorrecto";
    } else {
      mesError.innerText = "";
    }
  });

  // Ingreso año
  input_año.addEventListener("input", () => {
    año_tarjeta.innerText = input_año.value;
    if (input_año.value == "") {
      //Mostrar los 00 por defecto cuando no se ingresa nada
      año_tarjeta.innerText = "00";
    }

    let regExp = /[A-z]/g; //Error al ingresar una letra
    if (regExp.test(input_año.value)) {
      añoError.innerText = "El numero ingresado es incorrecto";
    } else {
      añoError.innerText = "";
    }
  });

  // Ingreso cvc
  input_cvc.addEventListener("input", () => {
    cvc_tarjeta.innerText = input_cvc.value;
    if (input_cvc.value == "") {
      //Mostrar los 000 por defecto cuando no se ingresa nada
      cvc_tarjeta.innerText = "000";
    }

    let regExp = /[A-z]/g; //Error al ingresar una letra
    if (regExp.test(input_cvc.value)) {
      cvcError.innerText = "El numero ingresado es incorrecto";
    } else {
      cvcError.innerText = "";
    }
  });

  // Confirmación del Botón
  

  confirmBtn.addEventListener("click", (event) => {
    event.preventDefault();
    let nombreValido = false;
    let numeroValido = false;
    let mesValido = false;
    let añoValido = false;
    let cvcValido = false;

    //Validar nombre
    if (verificarFallas(input_name, nombreError)) {
      nombreValido = true;
    } else {
      nombreValido = false;
    }

    //Validar numero
    if (verificarFallas(input_number, numeroError)) {
      numeroValido = true;
    } else {
      numeroValido = false;
    }

    // Validar mes
    if (verificarFallas(input_mes, mesError)) {
      mesValido = true;
    } else {
      mesValido = false;
    }

    // Validar año
    if (verificarFallas(input_año, añoError)) {
      añoValido = true;
    } else {
      añoValido = false;
    }

    // Validar cvc
    if (verificarFallas(input_cvc, cvcError)) {
      cvcValido = true;
    } else {
      cvcValido = false;
    }

    if (nombreValido && numeroValido && mesValido && añoValido && cvcValido) {
      alert("Los datos se han ingresado correctamente");
      return;
    } else {
      alert("Algunos datos no son válidos. Por favor, verifícalos.");
    }
  });

  // Funciones de error
  function errores(divError, msgError, muestra) {
    if (muestra) {
      divError.innerText = msgError;
    } else {
      divError.innerText = msgError;
    }
  }
  function verificarFallas(divInput, divError) {
    if (divInput.value.length > 0 && divError.innerText.length == 0) {
      errores( divError, "", false);
      return true;
    } else {
      errores(divError, "Este campo es obligatorio.", true);
      return false;
    }
  }
});
