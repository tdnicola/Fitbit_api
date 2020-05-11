var url = window.location.href;
//getting the access token from url
var access_token = url.split('#')[1].split('=')[1].split('&')[0];
// get the userid
var userId = url.split('#')[1].split('=')[2].split('&')[0];
console.log(access_token);
console.log(userId);
