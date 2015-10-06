
function mathOrArt() {
    var entry = prompt('Do you prefer math or art?').trim();
    if (entry == 'math' || entry == 'art') {
        mathOrArt.promptBasedOnPreference(entry);
    } else {
        alert('I\'m sorry, I didn\'t recognize your answer! Please try again.');
    }
}

mathOrArt.promptBasedOnPreference = function(preference) {
    if (preference == 'math')
        math();
    else
        art();
};

function math() {
    var getNumbers = prompt('Please input two numbers you\'d like to add (separate with a space).');
    var numbers = getNumbers.trim().replace(/\s+/g, ' ').split(' ');
    if (numbers.length !== 2) {
        alert('Sorry -- I didn\'t two numbers there. Please try again!');
        math();
    } else {
        var sum = parseFloat(numbers[0]) + parseFloat(numbers[1]);
        console.log(numbers[0]);
        console.log(numbers[1]);
        alert('The sum of your two numbers is: ' + sum + ".");
    }
}

function art() {
    var styles = art.getStyles();
    var favorites = art.getFavoriteOrder(styles);
    alert('Your favorite art styles, in order, are ' + favorites[0] + ', followed by ' + favorites[1] + ".");
}

art.getStyles = function() {
    var getStyles = prompt('What are your two favorite art styles? (separate with a space).');
    var styles = getStyles.trim().split(' ');
    if (styles.length !== 2) {
        alert('I\'m sorry, it doesn\'t seem like two styles were entered. Please try again.');
        styles = art.getStyles();
    }
    return styles;
};

art.getFavoriteOrder = function(styles) {
    var favorites = [];
    var entry = prompt('Which is your favorite art style -- ' + styles[0] + ', or ' + styles[1] + '?');
    if (entry == styles[0] || entry == styles[1]) {
        var favorite = entry;
        var secondFavorite = styles[Math.abs(styles.indexOf(favorite) - 1)];
        favorites = [favorite, secondFavorite];
    } else {
        alert("Sorry, your favorite doesn't match your previous entries!");
        return art.getFavoriteOrder(styles);
    }
    return favorites;
};