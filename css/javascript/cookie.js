const cookieBanner = document.getElementById("cook_card");
const acceptCookie = document.getElementById("accept");

acceptCookie.addEventListener("click", () => {
  // Set a cookie to remember that the user has accepted cookies
  document.cookie =
    "cookie-accepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";

  // Remove the cookie banner from the DOM
  cookieBanner.remove();
});

// Check if the cookie has been accepted
if (document.cookie.includes("cookie-accepted=true")) {
  // console.log("cookie status : true")
  cookieBanner.remove();
}
