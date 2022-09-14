const confirm = (buttonNumber) => {
  const btn1 = document.getElementById('content__result--btn1');
  const btn2 = document.getElementById('content__result--btn2');
  const btn3 = document.getElementById('content__result--btn3');

  if (buttonNumber === 1) {
    btn1.innerText = 'Clicou no botão 1: ' + true
    btn2.innerText = 'Clicou no botão 2: ' + false
    btn3.innerText = 'Clicou no botão 3: ' + false
  } else if (buttonNumber === 2) {
    btn1.innerText = 'Clicou no botão 1: ' + false
    btn2.innerText = 'Clicou no botão 2: ' + true
    btn3.innerText = 'Clicou no botão 3: ' + false
  } else if (buttonNumber === 3) {
    btn1.innerText = 'Clicou no botão 1: ' + false
    btn2.innerText = 'Clicou no botão 2: ' + false
    btn3.innerText = 'Clicou no botão 3: ' + true
  }
}

/*
1 - colocar em array
2 - iterar array e fazer a ação desejada

[btn1, btn2, btn3]
*/

const refactoredConfirm = (buttonNumber) => {
  const results = document.getElementsByClassName('content__result');

  Array.prototype.map.call(results, (element, index) => {
    element.innerText = `Clicou no botão ${index + 1}: ${buttonNumber === index + 1}`;
  })
}