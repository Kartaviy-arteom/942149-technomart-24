for(var addProduct=document.querySelectorAll(".buy-now"),popupInCart=document.querySelector(".modal-order"),close=popupInCart.querySelector(".button-close"),buyMore=popupInCart.querySelector(".button-continue"),buy=popupInCart.querySelector(".order-page"),i=0;i<addProduct.length;i++)addProduct[i].addEventListener("click",function(e){e.preventDefault(),popupInCart.classList.add("modal-order-show"),buy.focus()});close.addEventListener("click",function(e){e.preventDefault(),popupInCart.classList.remove("modal-order-show")}),buyMore.addEventListener("click",function(e){e.preventDefault(),popupInCart.classList.remove("modal-order-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),popupInCart.classList.contains("modal-order-show")&&popupInCart.classList.remove("modal-order-show"))});var mapLink=document.querySelector(".location-map"),mapPopup=document.querySelector(".modal-map"),mapClose=mapPopup.querySelector(".button-close");mapLink.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.add("modal-show")}),mapClose.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.remove("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),mapPopup.classList.contains("modal-show")&&mapPopup.classList.remove("modal-show"))});var linkWriteUs=document.querySelector(".show-write-us"),popupWriteUs=document.querySelector(".modal-write-us"),closeWriteUs=popupWriteUs.querySelector(".button-close"),login=popupWriteUs.querySelector("[name=user-name]"),form=popupWriteUs.querySelector("form"),userEmail=popupWriteUs.querySelector("[name=user-email]"),userQuestion=popupWriteUs.querySelector("[name=user-question]"),isStorageSupport=!0,storage="",storageMail="";try{storage=localStorage.getItem("login")}catch(e){isStorageSupport=!1}linkWriteUs.addEventListener("click",function(e){e.preventDefault(),popupWriteUs.classList.add("modal-show"),storage&&storageMail?(login.value=storage,userEmail.value=storageMail):login.focus()}),closeWriteUs.addEventListener("click",function(e){e.preventDefault(),popupWriteUs.classList.remove("modal-show"),popupWriteUs.classList.remove("modal-error")}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),popupWriteUs.classList.contains("modal-show")&&(popupWriteUs.classList.remove("modal-show"),popupWriteUs.classList.remove("modal-error")))}),form.addEventListener("submit",function(e){login.value&&userEmail.value&&userQuestion.value?(isStorageSupport&&localStorage.setItem("login",login.value),isStorageSupport&&localStorage.setItem("userEmail",userEmail.value)):(e.preventDefault(),popupWriteUs.classList.remove("modal-error"),popupWriteUs.offsetWidth=popupWriteUs.offsetWidth,popupWriteUs.classList.add("modal-error"),popupWriteUs.offsetWidth=popup.offsetWidth,console.log("Нужно ввести логин и пароль"))});