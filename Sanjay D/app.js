const result = document.getElementById('calculate');
const pointer = document.getElementById('pointer');
const mes = document.getElementById('message');

const credits = {
  osTheory: 3,
  osPractical: 1,
  tocTheory: 4,
  m4Theory: 4,
  seTheory: 3,
  sePractical: 1,
  dbmsTheory: 4,
  dbmsPractical: 1,
  cl3Practical: 1,
  seminarPractical: 1
}

const {
  osTheory,
  osPractical,
  tocTheory,
  m4Theory,
  seTheory,
  sePractical,
  dbmsTheory,
  dbmsPractical,
  cl3Practical,
  seminarPractical
} = credits;


function grade(g) {
  if (g == 'A+')
    return 10;
  else if (g == 'A')
    return 9;
  else if (g == 'B+')
    return 8;
  else if (g == 'B')
    return 7;
  else if (g == 'C+')
    return 6;
  else if (g == 'C')
    return 5;
  else if (g == 'D')
    return 4;
  else
    return 0;
}



result.addEventListener('click', function () {
  const m4th = document.getElementById('m4th').value,
    osth = document.getElementById('osth').value,
    tocth = document.getElementById('tocth').value,
    dbmsth = document.getElementById('dbmsth').value,
    seth = document.getElementById('seth').value,
    sempr = document.getElementById('sempr').value,
    cl3pr = document.getElementById('cl3pr').value,
    ospr = document.getElementById('ospr').value,
    sepr = document.getElementById('sepr').value,
    dbmspr = document.getElementById('dbmspr').value;

  if (osth === 'Theory' || ospr === 'Practical') {
    showOutputOnUI(-1);
  } else {
    const calculate = ((grade(osth) * osTheory) + (grade(ospr) * osPractical) + (grade(tocth) * tocTheory) + (grade(seth) * seTheory) + (grade(sepr) * sePractical) + (grade(dbmsth) * dbmsTheory) + (grade(dbmspr) * dbmsPractical) + (grade(m4th) * m4Theory) + (grade(sempr) * seminarPractical) + (grade(cl3pr) * cl3Practical));
    const sgpa = calculate / 23;
    const calulatedsgpa = parseFloat(sgpa).toFixed(2);
    showOutputOnUI(calulatedsgpa);
  }
});


function showOutputOnUI(sgpa) {

  if (sgpa == -1) {
    mes.innerHTML = `Please, Select proper Grade`;
    animate(mes, 'heartBeat');
    pointer.innerHTML = '';
    animate(pointer, 'rubberBand');
  } else {
    let message = '';
    mes.innerHTML = message;
    animate(mes, 'flipInY');
    pointer.innerHTML = sgpa +
      `<span class="outof">/10</span>`;
    animate(pointer, 'wobble');
  }
}

function animate(element, animation) {
  element.classList.add('animated', animation);
  const wait = setTimeout(() => {
    element.classList.remove('animated', animation);
  }, 1000);
}


document.oncontextmenu = function () {
  return false;
}

document.onkeydown = function (event) {
  if (event.which == 123)
    return false;
  else if (event.ctrlKey && event.shiftKey && event.keyCode == 73)
    return false;
  else if (event.ctrlKey && event.which == 85)
    return false;
}