const toggler = document.getElementById('toggle')

if (localStorage.getItem('mode') === 'dark') {
  toggler.classList.add('active')
  document.body.classList.add('dark')
}

toggler.addEventListener('click', function () {
  toggler.classList.toggle('active')
  document.body.classList.toggle('dark')

  if (localStorage.getItem('mode') === 'dark') localStorage.setItem('mode', 'light')
  else localStorage.setItem('mode', 'dark')
})