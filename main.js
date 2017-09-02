var project = document.querySelector('.project-detail');
var goback = document.querySelector('.goback');

project.addEventListener('click', function () {
  event.stopPropagation();
  if (project.classList.contains('fill')) return;
  project.classList.remove('defill');
  project.classList.add('fill');
});
goback.addEventListener('click', function () {
  event.stopPropagation();
  project.classList.remove('fill');
  project.classList.add('defill');
});