



window.location.href = "#home"
    document.getElementById("homeHead").parentNode.setAttribute("id", "vio");
    document.getElementById("homeHead").parentNode.setAttribute("class", "");
    document.getElementById("aboutHead").parentNode.setAttribute("class", "wh");
    document.getElementById("aboutHead").parentNode.setAttribute("id", "");
    document.getElementById("skillsHead").parentNode.setAttribute("class", "wh");
    document.getElementById("skillsHead").parentNode.setAttribute("id", "");
    document.getElementById("projectHead").parentNode.setAttribute("class", "wh");
    document.getElementById("projectHead").parentNode.setAttribute("id", "");
    document.getElementById("contactHead").parentNode.setAttribute("class", "wh");
    document.getElementById("contactHead").parentNode.setAttribute("id", "");
    let scrolled = 0;
    document.addEventListener("scroll", (event) => {
      scrolled = window.scrollY;
      console.log(scrolled);
      if (scrolled > 0 && scrolled < 610) {
        document.getElementById("homeHead").parentNode.setAttribute("id", "vio");
        document.getElementById("homeHead").parentNode.setAttribute("class", "");
        document.getElementById("aboutHead").parentNode.setAttribute("class", "wh");
        document.getElementById("aboutHead").parentNode.setAttribute("id", "");
        document.getElementById("skillsHead").parentNode.setAttribute("class", "wh");
        document.getElementById("skillsHead").parentNode.setAttribute("id", "");
        document.getElementById("projectHead").parentNode.setAttribute("class", "wh");
        document.getElementById("projectHead").parentNode.setAttribute("id", "");
        document.getElementById("contactHead").parentNode.setAttribute("class", "wh");
        document.getElementById("contactHead").parentNode.setAttribute("id", "");
      }
      else if (scrolled > 610 && scrolled < 1575) {
        document.getElementById("homeHead").parentNode.setAttribute("class", "wh");
        document.getElementById("homeHead").parentNode.setAttribute("id", "");
        document.getElementById("aboutHead").parentNode.setAttribute("id", "vio");
        document.getElementById("aboutHead").parentNode.setAttribute("class", "");
        document.getElementById("skillsHead").parentNode.setAttribute("class", "wh");
        document.getElementById("skillsHead").parentNode.setAttribute("id", "");
        document.getElementById("projectHead").parentNode.setAttribute("class", "wh");
        document.getElementById("projectHead").parentNode.setAttribute("id", "");
        document.getElementById("contactHead").parentNode.setAttribute("class", "wh");
        document.getElementById("contactHead").parentNode.setAttribute("id", "");
      }
      else if (scrolled > 1575 && scrolled < 3080) {
        document.getElementById("homeHead").parentNode.setAttribute("class", "wh");
        document.getElementById("homeHead").parentNode.setAttribute("id", "");
        document.getElementById("aboutHead").parentNode.setAttribute("id", "");
        document.getElementById("aboutHead").parentNode.setAttribute("class", "wh");
        document.getElementById("skillsHead").parentNode.setAttribute("class", "");
        document.getElementById("skillsHead").parentNode.setAttribute("id", "vio");
        document.getElementById("projectHead").parentNode.setAttribute("class", "wh");
        document.getElementById("projectHead").parentNode.setAttribute("id", "");
      }
      else if (scrolled > 3080 && scrolled < 3650) {
        document.getElementById("homeHead").parentNode.setAttribute("class", "wh");
        document.getElementById("homeHead").parentNode.setAttribute("id", "");
        document.getElementById("aboutHead").parentNode.setAttribute("id", "");
        document.getElementById("aboutHead").parentNode.setAttribute("class", "wh");
        document.getElementById("skillsHead").parentNode.setAttribute("class", "wh");
        document.getElementById("skillsHead").parentNode.setAttribute("id", "");
        document.getElementById("projectHead").parentNode.setAttribute("class", "");
        document.getElementById("projectHead").parentNode.setAttribute("id", "vio");
        document.getElementById("contactHead").parentNode.setAttribute("class", "wh");
        document.getElementById("contactHead").parentNode.setAttribute("id", "");
      }
      else if (scrolled > 3650) {

        document.getElementById("homeHead").parentNode.setAttribute("class", "wh");
        document.getElementById("homeHead").parentNode.setAttribute("id", "");
        document.getElementById("aboutHead").parentNode.setAttribute("id", "");
        document.getElementById("aboutHead").parentNode.setAttribute("class", "wh");
        document.getElementById("skillsHead").parentNode.setAttribute("class", "wh");
        document.getElementById("skillsHead").parentNode.setAttribute("id", "");
        document.getElementById("projectHead").parentNode.setAttribute("class", "wh");
        document.getElementById("projectHead").parentNode.setAttribute("id", "");
        document.getElementById("contactHead").parentNode.setAttribute("class", "");
        document.getElementById("contactHead").parentNode.setAttribute("id", "vio");

      }
    })