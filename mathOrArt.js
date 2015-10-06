
function mathOrArt() {
    var preference = prompt("Do you prefer math or art?");
};

function math() {
    var getNumbers = prompt('Please input two numbers you\'d like to add (separate with a space).');
    var numbers = getNumbers.trim().split(' ');
    var sum = parseFloat(numbers[0]) + parseFloat(numbers[1]);
    alert('The sum of your two numbers is: ' + sum);
}

function art() {
    var styles = art.getStyles();
    var favorites = art.getFavoriteOrder(styles);
    alert('Your favorite art styles, in order, are ' + favorites[0] + ', followed by ' + favorites[1]);
}

art.getStyles = function() {
    var getStyles = prompt('What are your two favorite art styles? (separate with a space).');
    var styles = getStyles.trim().split(' ');
    return styles;
};

art.getFavoriteOrder = function(styles) {
    var entry = prompt('Which is your favorite art style -- ' + styles[0] + ', or ' + styles[1] + '?');
    if (entry == styles[0] || entry == styles[1]) {
        var favorite = entry;
        var secondFavorite = styles[Math.abs(styles.indexOf(favorite) - 1)];
    } else {
        alert("Sorry, your favorite doesn't match your previous entries!");
        //TODO - below returns undefined and undefined!
        art.getFavoriteOrder(styles);
    }
    return [favorite, secondFavorite];
};