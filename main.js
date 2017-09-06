var project = document.querySelector('.project-detail');
var goback = document.getElementsByClassName('goback')[0];
// Get from server
var projects = {};
var hashes = [];
for (var i = 0; i < 10; i++) {
  var p = loremProject();
  hashes.push(p['hash']);
  projects[p['hash']] = p;
};
generateProjectList();

var filled = 0;
goback.addEventListener('click', function () {
  filled = 0;
  event.stopPropagation();
  project.classList.remove('fill');
  project.classList.add('defill');
});
project.addEventListener('click', function (e) {
  if (filled && e.target.classList.contains("goback")) {
    console.log("AA");
    goback.click();
    return;
  };
  event.stopPropagation();
  if (project.classList.contains('fill')) return;
  project.classList.remove('defill');
  project.classList.add('fill');
  filled = 1;
});

function generateProjectList() {
  for (var i = 0; i < hashes.length; i++) {
    var h = hashes[i];
    projectlist.innerHTML += "<li><a href='"+projects[h]['hash']+"'>"+projects[h]['title']+"</a></li>";
  }
}

function loremProject() {
  this.x = (this.x + 1) | 0;
  return new Project(x, "Project #"+this.x, "JavaScript HTML CSS", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est ex in quos autem suscipit tempora. Temporibus autem necessitatibus, assumenda iure, hic nihil suscipit culpa soluta, perferendis tempore porro natus blanditiis.", "http://lorempixel.com/600/600/nature/");
}

function Project(hash, title, tools, desc, img) {
  this.hash = "#" + hash;
  this.title = title;
  this.tools = tools;
  this.desc = desc;
  this.img = img;
}

function displayProject() {
  var wh = window.location.hash;
  var p;
  if (projects[wh] === undefined) p = projects[hashes[0]];
  else p = projects[wh];
  project.innerHTML = '<h1>'+p['title']+'</h1><div class="tools">'+p['tools']+'</div><div class="desc">'+p['desc']+'</div><i class="fa fa-lg fa-arrow-circle-left goback" aria-hidden="true"></i>';
  project.style.backgroundImage = 'url('+p['img']+')';
  document.querySelectorAll('#projectlist a').forEach(function(c) {c.classList.remove('active');});
  document.querySelector('#projectlist a[href="'+window.location.hash+'"]').classList.add('active');
}

window.onload = displayProject;
window.onhashchange = displayProject;


