'use strict';
const week = ['Sunday', 'Monday',	'Tuesday', 'Wednes­day', 'Thursday', 'Friday', 'Saturday'],
      days = document.querySelector('.days'),
      daysNewString = document.querySelector('.days-new-string'),
      weekend = document.querySelector('.weekend'),
      weekendDay = document.querySelector('.weekend-day'),
      thisDay = document.querySelector('.this-day');

let joinArray = function () {
  days.textContent = week;
  daysNewString.innerHTML = week.join('<br>');

  for (let i = 0; i < week.length; i++) {
    let elem = (week[i] + ', ');

    if ( i > 5 || i < 1) {
      elem = elem.italics();
    }
    
    let item = document.createElement('span');

    item.innerHTML = elem;

    weekendDay.append(item);   

  }
  let date = new Date();  

  for (let i = 0; i < week.length; i++) {    

    let elem = (week[i] + ', ');


    if ( i === date.getUTCDay()) {
      elem = elem.bold();
    }
    
    let item = document.createElement('span');

    item.innerHTML = elem;

    thisDay.append(item);

  }
  
};

joinArray();


