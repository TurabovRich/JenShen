    //Burger menu
    let burgerMenu = document.getElementById('burger-menu');
    let overlay = document.getElementById('menu');
    let body = document.querySelector('body')
    burgerMenu.addEventListener('click', function () {
      this.classList.toggle("close");
      overlay.classList.toggle("overlay");
      body.classList.toggle('hidden')
    });


    //Tab

    function openTea(evt, teaName) {
      let i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
      }
      document.getElementById(teaName).style.display = "block";
      evt.currentTarget.className += "active";
    }

    function allTea(evt, v) {
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "block";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
      }
      document.getElementById(teaName).style.display = "block";
      evt.currentTarget.className += "active";
    }


    //Drop down

    function myFunction() {
      document.getElementById("myDropdown").classList.toggle("show");
    }

    window.onclick = function (event) {
      if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (let i = 0; i < dropdowns.length; i++) {
          let openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }

    function scrollToTop(x, y) {
      window.scrollTo(x, y);
    };
    scrollToTop(0, 0);
