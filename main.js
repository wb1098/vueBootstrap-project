var businesses = [
    {
        cardImg: `http://lorempixel.com/400/200`,
        cardTitle: 'Quick Trip to Google',
        cardText: `Some quick example text to build on the card title and make up the bulk of the card 's content.`,
        buttonURL: "https://www.google.com",
        buttonText: 'Google Something?'

},
    {
        cardImg: `http://lorempixel.com/400/200/abstract/${Math.floor(Math.random()*10)}`,
        cardTitle: 'Ski Season - Enuff Said!',
        cardText: `Steep and deep bonk baker mountain boyne mountain sitzmark lifts. Mt. ashland mikaela shiffrin barbara cochran eaton mountain seth morrison chowder murray wais stein eriksen ajax cliff drop.`,
        buttonURL: "https://www.powder.com",
        buttonText: 'Powder Time'

},
    {
        cardImg: `http://lorempixel.com/400/200/abstract/${Math.floor(Math.random()*10)}/Have-Fun`,
        cardTitle: 'Go Somewhere Fun!',
        cardText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie vestibulum dolor, sit amet ornare ante maximus non. Nulla id neque imperdiet, sodales urna ut, fermentum elit. Cras mi quam, auctor eu consectetur nec, lobortis vel enim. Maecenas sit amet blandit libero. `,
        buttonURL: "http://www.thetravelmagazine.net",
        buttonText: 'Travel Anyone!'

},
    {
        cardImg: `http://lorempixel.com/400/200/sports/${Math.floor(Math.random()*10)}`,
        cardTitle: 'Tis the season of Joy',
        cardText: `In sit amet lobortis nisl, sagittis rutrum risus. Proin iaculis vitae lectus vel ultricies. Mauris vel porttitor magna. Aliquam ac orci eget enim lacinia rutrum.`,
        buttonURL: "https://en.wikipedia.org/wiki/Christmas",
        buttonText: 'Christmas Cheer'

}
];

Vue.component('displaycardcomp', {
    template: '#display-card',
    props: {
        data: Array
    }
})


var mainVM = new Vue({
    el: '#bus-card',
    data: {
        businessList: businesses
    }

});
