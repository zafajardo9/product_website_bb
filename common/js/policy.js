const Policy = {
  init: () => {
    if (Policy.getParam('hideHeader')) {
      const header = document.getElementById('header');
      header.style.display = 'none';
    } else {
      header.style.display = 'block';
    }
  },

  getParam: (sname) => {
    var params = location.search.substr(location.search.indexOf("?") + 1);
    var sval = "";
    params = params.split("&");
    for (var i = 0; i < params.length; i++) {
      temp = params[i].split("=");
      if ([temp[0]] == sname) {
        sval = temp[1];
      }
    }
    return sval;
  },
}
