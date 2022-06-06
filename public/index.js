let convert = {}; // For testing purposes, I'm creating an empty object named convert. Will make each function a method of the object. Then I will expose our convert object with the exports keyword. This is an easy way to tell JavaScript that we want to export a function. This will allow us to hook up all our functions in the test module.

// Utility functon to get random number 50/50
convert.randomCount = function () {
  return Math.random() > 0.5 ? 1 : 0;
};

// We need to specific a time to expire for the cookie to be removed
convert.setCookie = function (name, value) {
  const date = new Date();
  date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`; // The cookie will expire in 24 hours
  document.cookie = `${name}=${value}; ${expires}; path=/`; // The cookie will be available for the entire domain
};

// To get the cookie we need to split the string into an array of cookies because each cookie is separated by a semi-colon
// The first element of the array is the cookie name and the second element is the cookie value
//If the length of the array is less than 2, then the cookie does not exist, otherwise it does and we return the second element of the array which is the cookie value

//document.cookie will return a string of all the cookies
convert.getCookie = function (name) {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split('=');
    if (cookie[0].trim() === name) {
      return cookie[1];
    }
  }
  return null;
};
// IF we don't have a cookie assigned to the ball - then randomly assign a color to the ball and set the cookie to the color
//Using the random Count utility function to set the initial cookie color for that session. We then set the cookie color to the ball color
convert.getBallColor = function () {
  let cookieColor = convert.getCookie('ballColor');
  if (cookieColor === null) {
    cookieColor = convert.randomCount() ? 'red' : 'blue';
    convert.setCookie('ballColor', cookieColor);
  }
  return cookieColor;
};

convert.displayImg = function (color) {
  // We need to get the element that we want to display the image which is currently being hidden in the CSS
  //; If the color is red, then we need to display the red ball image to the DOM. Otherwise we need to display the blue ball image
  color === 'red'
    ? (ballImg.style.display = 'block')
    : (ballImg.style.display = 'block');
};

//If we already have a cookie of the ball count, then increment by 1 each time the page is loaded. Otherwise, set the cookie to 1
convert.incrementBallCount = function () {
  let cookieCount = convert.getCookie('ballCount');
  cookieCount ? cookieCount++ : (cookieCount = 1);
  convert.setCookie('ballCount', cookieCount); // We need to set the cookie again because we are incrementing the count
  return cookieCount;
};

// Painting the results to the DOM

//Running the getBallColor function, which will return the color of the ball and trigger the div id to be (red)Ball or (blue)Ball
const ballImg = document.getElementById(`${convert.getBallColor()}Ball`);
const ballCount = document.getElementById('ballCount');
ballImg.innerHTML = `${convert.displayImg()}`;
ballCount.innerHTML = `Red Ball, Blue Ball! You viewed ${convert.getBallColor()} ${convert.incrementBallCount()} times, I recall!`;

module.exports = convert;
