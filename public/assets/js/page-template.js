const makeHTMLpage = (teamArray) => {
    var cardsArray = []
    teamArray.forEach((item) => {
        var cardHTML
        switch (item.role) {
            case "Manager":
                cardHTML = generators.manager(item);
                break;
            case "Engineer":
                cardHTML = generators.engineer(item);
                break
            case "Intern":
                cardHTML = generators.intern(item);
                break
        }
        cardsArray.push(cardHTML);
    });
    return cardsArray;
}
const generateManagerCard = ({ name, id, email, managerphone }) => {
    return `
    <div class="card" style="width: 25rem; text-align: center; margin-bottom:2em; box-shadow:10px 10px 10px rgba(0, 0, 0, .5)">
    <div class="card-header" style="background-color: lightgray">
    <h4 class="card-title" style="font-family: 'Patua One', cursive;">${name}</h5>
    <h6 class="card-subtitle mb-2 text-muted style="margin-top: 5px">Manager</h6>
    <span class="oi oi-briefcase" style="padding:.5em"></span>
    </div>
    <div class="card-body">
    <ul class="list-group list-group-flush">
    <li class="list-group-item"><strong>ID: </strong>${id}</li>
    <li class="list-group-item"><strong>Email: </strong><a href="mailto:${email}" class="card-link">${email}</a></li>
    <li class="list-group-item"><strong>Office: </strong>${managerphone}</li>
     </ul> </div></div>`;
};

const generateEngineerCard = ({ name, id, email, github }) => {
    return `
    <div class="card" style="width: 18rem; text-align: center; margin:1em 1em; box-shadow:10px 10px 10px rgba(0, 0, 0, .5)">
    <div class="card-header" style="background-color: aliceblue">
    <h4 class="card-title" style="font-family: 'Patua One', cursive;">${name}</h5>
    <h6 class="card-subtitle mb-2 text-muted" style="margin-top: 5px">Engineer</h6>
    <span class="oi oi-terminal" style="padding:.5em"></span>
    </div>
    <div class="card-body">
    <ul class="list-group list-group-flush">
    <li class="list-group-item"><strong>ID: </strong>${id}</li>
    <li class="list-group-item"><strong>Email: </strong><a href="mailto:${email}" class="card-link">${email}</a></li>
    <li class="list-group-item"><strong>GitHub: </strong><a href="https://github.com/${github}" target="_blank" class="card-link">${github}</a>
    </ul> </div></div>`;
};

const generateInternCard = ({ name, id, email, school }) => {
    return `
    <div class="card" style="width: 18rem; text-align: center; margin:1em 1em; box-shadow:10px 10px 10px rgba(0, 0, 0, .5)">
        <div class="card-header">
          <h4 class="card-title" style="font-family: 'Patua One', cursive;">${name}</h5>
            <h6 class="card-subtitle mb-2 text-muted" style="margin-top: 5px">Intern</h6>
            <span class="oi oi-monitor" style="padding:.5em"></span>
        </div>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><strong>ID: </strong>${id}</li>
            <li class="list-group-item"><strong>Email: </strong><a href="mailto:${email}" class="card-link">${email}</a></li>
            <li class="list-group-item"><strong>School: </strong>${school}</li>
          </ul></div></div>`
};

const generators = { Manager: generateManagerCard, Engineer: generateEngineerCard, Intern: generateInternCard }
module.exports = templateData => {
    let cardTemplates = makeHTMLpage(templateData);
    let managerCard = cardTemplates.shift();
    let otherCards = cardTemplates.join();
    return `
    <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meet the Team</title>
  <link href="https://fonts.googleapis.com/css2?family=Patua+One&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
  <link rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css"
    integrity="sha256-BJ/G+e+y7bQdrYkS2RBTyNfBHpA9IuGaPmf9htub5MQ=" crossorigin="anonymous" />
</head>
<body>
  <header>
    <div class="jumbotron jumbotron-fluid" style="text-align:center; background-color:cadetblue; color:white">
      <div class="container">
        <h1 class="display-4" style="font-family: 'Patua One', cursive;">Meet the Team</h1>
      </div>
    </div>
  </header>
  <div class="container">
  <div id="mgr-row" class="row row-cols-1 row-cols-sm-2 row-cols-md-3" style="justify-content:center">
  ${managerCard}
  </div>
  <div id="ranknfile-row" class="row row-cols-1 row-cols-sm-2 row-cols-md-3" style="justify-content:center">
  ${otherCards}
  </div>
  </div>
  </body>
  </html>
    `;
};