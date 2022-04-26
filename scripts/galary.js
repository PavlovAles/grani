const gallaryCollage = document.querySelector(".galary__collage");
const collageItems = Array.from(
  gallaryCollage.querySelectorAll(".galary__collage-item")
);
const popup = document.querySelector(".galary-popup");
const imgContainer = popup.querySelector(".galary-popup__img-container");
const btnClose = popup.querySelector(".galary-popup__btn_type_close");
const btnNext = popup.querySelector(".galary-popup__btn_type_next");
const btnPrev = popup.querySelector(".galary-popup__btn_type_prev");

function openPopup(evt) {
  popup.classList.add("galary-popup_opened");
  document.body.style.overflow = "hidden";
}

function closePopup(evt) {
  popup.classList.remove("galary-popup_opened");
  document.body.style.overflow = "visible";
}

function moveLeft() {
  let activeImg = imgContainer.querySelector(".galary-popup__big-img_active");
  clearImgClassList(activeImg);
  const nextImg =
    activeImg.nextElementSibling ?? imgContainer.firstElementChild;
  clearImgClassList(nextImg);
  activeImg.classList.add("galary-popup__big-img_move-left");
  activeImg.classList.remove("galary-popup__big-img_active");
  nextImg.classList.add(
    "galary-popup__big-img_appears-from-right",
    "galary-popup__big-img_active"
  );
}

function moveRight() {
  let activeImg = imgContainer.querySelector(".galary-popup__big-img_active");
  clearImgClassList(activeImg);
  const nextImg =
    activeImg.previousElementSibling ?? imgContainer.lastElementChild;
  clearImgClassList(nextImg);
  activeImg.classList.add("galary-popup__big-img_move-right");
  activeImg.classList.remove("galary-popup__big-img_active");
  nextImg.classList.add(
    "galary-popup__big-img_appears-from-left",
    "galary-popup__big-img_active"
  );
}

function clearImgClassList(imgNode) {
  imgNode.classList.remove(
    "galary-popup__big-img_move-right",
    "galary-popup__big-img_move-left",
    "galary-popup__big-img_appears-from-right",
    "galary-popup__big-img_appears-from-left"
  );
}

gallaryCollage.addEventListener("click", openPopup);

btnClose.addEventListener("click", closePopup);

btnNext.addEventListener("click", moveLeft);

btnPrev.addEventListener("click", moveRight);
