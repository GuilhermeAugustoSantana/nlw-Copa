function createGame(player1, hours, player2) {
   return `
   <li>
      <img src="./assets/icon-${player1}.svg" alt="bandeira do ${player1}">
      <strong>${hours}</strong>
      <img src="./assets/icon-${player2}.svg" alt="bandeira da ${player2}">
   </li>
   `
}

let delay = -0.3;
function createCard(data, day, games) {
   delay = delay + 0.3
   return `
   <div class="card" style="animation-delay: ${delay}s">
      <h2>${data}<span>${day}</span></h2>
      <ul>
         ${games}
      </ul>
   </div>
   `
}

document.querySelector('#cards').innerHTML =
   createCard("24/11", "quinta", createGame('brazil', '16:00', 'serbia') + createGame('portugal', '18:00', 'uruguay')) +

   createCard("28/11", "segunda", createGame('brazil', '13:00', 'switzerland')) +

   createCard("28/11", "segunda", createGame('brazil', '13:00', 'camaroon'));