var feedback=document.querySelector(".feedback-button"),popup=document.querySelector(".modal-feedback"),close=popup.querySelector(".modal-close"),overlay=document.querySelector(".modal-overlay"),form=popup.querySelector("form"),name=popup.querySelector(".user-name"),mail=popup.querySelector(".user-email"),text=popup.querySelector(".user-request");feedback.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("visually-hidden"),overlay.classList.remove("visually-hidden")}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("visually-hidden"),popup.classList.remove("modal-error"),overlay.classList.add("visually-hidden")}),overlay.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("visually-hidden"),popup.classList.remove("modal-error"),overlay.classList.add("visually-hidden")}),form.addEventListener("submit",function(e){name.value&&mail.value&&text.value||(e.preventDefault(),popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),popup.classList.add("visually-hidden"),popup.classList.remove("modal-error"),overlay.classList.add("visually-hidden"))});