function print(printForm) {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = printForm;
}

printForm ='<label for="feedback">General Comments:</label><br>'
printForm +='<input type="comment" id="feedback" name="guestFeedback"><br>'
printForm +='<label>Beverages Consumed:</label><br>'
printForm +='<input type="checkbox" id="cocaCola" name="cocaCola"><label for="cocaCola">Coca Cola</label><br>'
printForm +='<input type="checkbox" id="dietCoke" name="dietCoke"><label for="dietCoke">Diet Coke</label><br>'
printForm +='<input type="checkbox" id="sprite" name="sprite"><label for="sprite">Sprite</label><br>'
printForm +='<input type="checkbox" id="dietSprite" name="dietSprite"><label for="dietSprite">Diet Sprite</label><br>'
printForm +='<input type="checkbox" id="drPepper" name="drPepper"><label for="drPepper">Dr. Pepper</label><br>'
printForm +='<input type="checkbox" id="dietDrPepper" name="dietDrPepper"><label for="dietDrPepper">Diet Dr. Pepper</label><br>'
printForm +='<input type="checkbox" id="mtnDew" name="mtnDew"><label for="mtnDew">Mountain Dew</label><br>'
printForm +='<input type="checkbox" id="dietMtnDew" name="dietMtnDew"><label for="dietMtnDew">Diet Mountain Dew</label><br>'
printForm +='<input type="checkbox" id="water" name="water"><label for="water">Water</label><br>'
printForm +='<input type="checkbox" id="coffee" name="coffee"><label for="coffee">Coffee</label><br>'
printForm +='<label for="slices">Slices of Pizza Eaten:</label><br>'
printForm +='<select name="slices" id="slices">'
printForm +='<option value="one">1</option>'
printForm +='<option value="two">2</option>'
printForm +='<option value="three">3</option>'
printForm +='<option value="fourPlus">4+</option>'
printForm +='</select><br>'
printForm +='<label for="breakfast">Breakfast Foods Eaten:</label><br>'
printForm +='<input type="checkbox" id="granolaBar" name="granolaBar"><label for="granolaBar">Granola Bars</label><br>'
printForm +='<input type="checkbox" id="popTarts" name="popTarts"><label for="popTarts">Pop Tarts</label><br>'
printForm +='<input type="checkbox" id="glutenFree" name="glutenFree"><label for="glutenFree">Gluten Free Option</label><br>'
printForm +='<input type="checkbox" id="nutFree" name="nutFree"><label for="nutFree">Nut Free Option</label><br>'


// function printMonth() {
//   var sept = document.getElementById("sept").checked;
//   if (sept == true) {
//     print(printForm);
//   }
// }

function printMonth() {
  var calendar = [
    ['sept', 'September'],
    ['oct', 'October'],
    ['dec', 'December'],
    ['jan', 'January'],
    ['feb', 'February'],
    ['apr', 'April']
  ];
  
  var calLen = calendar.length;
  var outputSurvey = '';

  for (i = 0; i < calLen; i+=1) {
    var monthCal = calendar[i][0];
    var monthName = calendar[i][1];
    monthCal = document.getElementById(monthCal).checked;
    if (monthCal == true) { 
      outputSurvey = outputSurvey + '<h3>' + monthName + '</h3>' + printForm;
      print(outputSurvey);
    }
  }
}