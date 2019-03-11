var addProduct = document.querySelectorAll(".buy-now");
        var popupInCart = document.querySelector(".modal-order");
        var close = popupInCart.querySelector(".button-close");
        var buyMore = popupInCart.querySelector(".button-continue");
        var buy = popupInCart.querySelector(".order-page");
        for (var i = 0; i < addProduct.length; i++) {
          addProduct[i].addEventListener("click", function (evt) {
            evt.preventDefault();
            popupInCart.classList.add("modal-order-show");
            buy.focus();
          });
        }
        close.addEventListener("click", function (evt) {
          evt.preventDefault();
          popupInCart.classList.remove("modal-order-show");
        });
        buyMore.addEventListener("click", function (evt) {
          evt.preventDefault();
          popupInCart.classList.remove("modal-order-show");
        });   
        window.addEventListener("keydown", function (evt) {
          if (evt.keyCode === 27) {
            evt.preventDefault();
            if (popupInCart.classList.contains("modal-order-show")) {
              popupInCart.classList.remove("modal-order-show");
            } 
          }
        });  
        /*карта*/
        var mapLink = document.querySelector(".location-map");
        var mapPopup = document.querySelector(".modal-map");
        var mapClose = mapPopup.querySelector(".button-close");
        mapLink.addEventListener("click", function (evt) {
          evt.preventDefault();
          mapPopup.classList.add("modal-show");
        });
        mapClose.addEventListener("click", function (evt) {
          evt.preventDefault();
          mapPopup.classList.remove("modal-show");
        });
        window.addEventListener("keydown", function (evt) {
          if (evt.keyCode === 27) {
            evt.preventDefault();
            if (mapPopup.classList.contains("modal-show")) {
              mapPopup.classList.remove("modal-show");
            } 
          }
        });        
       
        /*напишите нам*/
        var linkWriteUs = document.querySelector(".show-write-us");
        var popupWriteUs = document.querySelector(".modal-write-us");
        var closeWriteUs = popupWriteUs.querySelector(".button-close");
        var login = popupWriteUs.querySelector("[name=user-name]");
        var form = popupWriteUs.querySelector("form");
        var userEmail = popupWriteUs.querySelector("[name=user-email]");
        var userQuestion = popupWriteUs.querySelector("[name=user-question]")
        var isStorageSupport = true;
        var storage = "";
        var storageMail = "";
        try {
          storage = localStorage.getItem("login");
        } catch (err) {
          isStorageSupport = false;
        }
        linkWriteUs.addEventListener("click", function (evt) {
          evt.preventDefault();
          popupWriteUs.classList.add("modal-show");
          if (storage && storageMail) {
            login.value = storage; userEmail.value = storageMail;
          } else {         
            login.focus();
          }
        });
        closeWriteUs.addEventListener("click", function (evt) {
          evt.preventDefault();
          popupWriteUs.classList.remove("modal-show");
          popupWriteUs.classList.remove("modal-error");
        });
        window.addEventListener("keydown", function (evt) {
          if (evt.keyCode === 27) {
            evt.preventDefault();
            if (popupWriteUs.classList.contains("modal-show")) {
              popupWriteUs.classList.remove("modal-show");
              popupWriteUs.classList.remove("modal-error");
            } 
          }
        });
        form.addEventListener("submit", function (evt) {
          if (!login.value || !userEmail.value || !userQuestion.value) {
            evt.preventDefault();
            popupWriteUs.classList.remove("modal-error");
            popupWriteUs.offsetWidth = popupWriteUs.offsetWidth;
            popupWriteUs.classList.add("modal-error");
            popupWriteUs.offsetWidth = popup.offsetWidth;
            console.log("Нужно ввести логин и пароль");
          } else {
            if (isStorageSupport) {
              localStorage.setItem("login", login.value);
            }
            if (isStorageSupport) {
              localStorage.setItem("userEmail", userEmail.value);
            }            
          }
        }); 