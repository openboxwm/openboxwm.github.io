function $(name) {
  var elem = null;
  if(document.getElementById) {
      elem = document.getElementById(name);
  } else if (document.all){
      elem = document.all[name];
  }
  return elem;
}
