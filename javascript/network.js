// Define the function to start the speed test
function startSpeedTest() {
  // Get information about the user's network connection
  const connection =
    navigator.connection ||
    navigator.mozConnection ||
    navigator.webkitConnection;
  const effectiveType = connection.effectiveType;
  const rtt = connection.rtt;
  const downlinkSpeed = connection.downlink;

  // Display the result
  document.getElementById(
    "result"
  ).textContent = `${downlinkSpeed} Mbps ${rtt} ms`;
}

window.onload = startSpeedTest;
