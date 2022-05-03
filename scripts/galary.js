const gallaryCollage = document.querySelector(".galary__collage");
const collageImgs = Array.from(gallaryCollage.querySelectorAll(".galary__img"));
const popup = document.querySelector(".galary-popup");
const popupImgContainer = popup.querySelector(".galary-popup__img-container");
const btnClose = popup.querySelector(".galary-popup__btn_type_close");
const btnNext = popup.querySelector(".galary-popup__btn_type_next");
const btnPrev = popup.querySelector(".galary-popup__btn_type_prev");

function openPopup(evt) {
  markActiveImg(evt.target);
  popup.classList.add("galary-popup_opened");
  document.body.style.overflow = "hidden";
}

function markActiveImg(img) {
  img.classList.add("galary__img_clicked");
  activeIndex = collageImgs.findIndex((img) =>
    img.classList.contains("galary__img_clicked")
  );
  popupImgs[activeIndex].classList.add("galary-popup__big-img_active");
}

function closePopup(evt) {
  popup.classList.remove("galary-popup_opened");
  document.body.style.overflow = "visible";
  unmarkActiveImg();
  popupImgs.forEach((img) => clearImgClassList(img));
}

function unmarkActiveImg() {
  collageImgs.forEach((img) => img.classList.remove("galary__img_clicked"));
  popupImgs.forEach((img) =>
    img.classList.remove("galary-popup__big-img_active")
  );
}

function showNext() {
  let activeImg = popupImgContainer.querySelector(
    ".galary-popup__big-img_active"
  );
  clearImgClassList(activeImg);
  const nextImg =
    activeImg.nextElementSibling ?? popupImgContainer.firstElementChild;
  clearImgClassList(nextImg);
  activeImg.classList.add("galary-popup__big-img_move-left");
  activeImg.classList.remove("galary-popup__big-img_active");
  nextImg.classList.add(
    "galary-popup__big-img_appears-from-right",
    "galary-popup__big-img_active"
  );
}

function showPrev() {
  let activeImg = popupImgContainer.querySelector(
    ".galary-popup__big-img_active"
  );
  clearImgClassList(activeImg);
  const nextImg =
    activeImg.previousElementSibling ?? popupImgContainer.lastElementChild;
  clearImgClassList(nextImg);
  activeImg.classList.add("galary-popup__big-img_move-right");
  activeImg.classList.remove("galary-popup__big-img_active");
  nextImg.classList.add(
    "galary-popup__big-img_appears-from-left",
    "galary-popup__big-img_active"
  );
}

function clearImgClassList(img) {
  img.classList.remove(
    "galary-popup__big-img_move-right",
    "galary-popup__big-img_move-left",
    "galary-popup__big-img_appears-from-right",
    "galary-popup__big-img_appears-from-left"
  );
}

btnClose.addEventListener("click", closePopup);

btnNext.addEventListener("click", showNext);

btnPrev.addEventListener("click", showPrev);

collageImgs.forEach((img) => {
  img.addEventListener("click", openPopup);
  let popupImg = img.cloneNode(true);
  popupImg.classList.remove("galary__img");
  popupImg.classList.add("galary-popup__big-img");
  popupImgContainer.appendChild(popupImg);
});

const popupImgs = Array.from(
  popupImgContainer.querySelectorAll(".galary-popup__big-img")
);

popupImgs.forEach((img) => img.addEventListener("click", closePopup));
