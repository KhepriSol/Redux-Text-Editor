"use strict";

var butInstall = document.getElementById('buttonInstall'); // Logic for installing the PWA

window.addEventListener('beforeinstallprompt', function (event) {
  event.preventDefault();
  butInstall.style.visibility = 'visible';
  butInstall.textContent = 'Install!';
}); //Implement a click event handler on the `butInstall` element

butInstall.addEventListener('click', function _callee() {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          butInstall.setAttribute('disabled', true);
          butInstall.textContent = 'Installed!';

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
}); // Add an handler for the `appinstalled` event

window.addEventListener('appinstalled', function (event) {
  console.log('(*ᴗ͈ˬᴗ͈)ꕤ*.ﾟ', 'appinstalled', event);
});
//# sourceMappingURL=install.dev.js.map
