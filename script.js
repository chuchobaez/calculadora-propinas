function calcularPropina() {
    // Obtener los valores ingresados por el usuario
    var total = parseFloat(document.getElementById("total").value);
    var personas = parseInt(document.getElementById("personas").value);
    var porcentajePropina = parseFloat(document.getElementById("propina").value);
  
    // Calcular la propina y los totales
    var totalPropina = total * (porcentajePropina);
    var totalConPropina = total + totalPropina;
  
    // Verificar que los valores sean válidos
    if (isNaN(total) || isNaN(personas)) {
      document.getElementById("resultados").innerHTML = "<div class='alert alert-danger' role='alert'>Ingrese valores numéricos para el total y la cantidad de personas</div>";
      return;
    }
    if (total <= 0 || personas <= 0) {
      document.getElementById("resultados").innerHTML = "<div class='alert alert-danger' role='alert'>El total y la cantidad de personas deben ser mayores a cero</div>";
      return;
    }
  
    // Mostrar los resultados
    document.getElementById("resultados").innerHTML = "<div class='alert alert-success' role='alert'>Total sin propina: Guaraníes " + total.toFixed(2) + "</div>" +
                                                       "<div class='alert alert-success' role='alert'>Total de propina: Guaraníes " + totalPropina.toFixed(2) + "</div>" +
                                                       "<div class='alert alert-success' role='alert'>Total con propina: Guaraníes " + totalConPropina.toFixed(2) + "</div>" +
                                                       "<div class='alert alert-success' role='alert'>Total por persona con propina: Guaraníes " + (totalConPropina / personas).toFixed(2) + "</div>";
  }
  