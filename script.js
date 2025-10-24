function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
function sendMessage(event) {
  event.preventDefault();
  alert('Thank you! Your message has been sent.');
}