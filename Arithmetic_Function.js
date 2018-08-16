exports.arthimetic_calculations = function(opeType, numberOne, NumberTwo) {

  if(!isNaN(numberOne)&&!isNaN(NumberTwo)){
    switch (opeType) {
      case "+":
        return numberOne + NumberTwo;
        break;
      case "-":
        return numberOne - NumberTwo;
        break;
      case "*":
        return numberOne * NumberTwo;
        break;
      case "/":
        if (NumberTwo != 0) {
          return numberOne / NumberTwo;
        } else {
          return "Can not divide by 0";
        }
        break;
      default:
        return "Wrong Operation Type";
        break;
    }
  }
  else{
    return "Must pass numbers as params";
  }   


  };