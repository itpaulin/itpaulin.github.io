const inputGeo = document.querySelector(".submit-geo");
const selectCdd = document.querySelector(".select-cdd");
const selectGeo = document.querySelector(".select-geo");

inputGeo.addEventListener("click", (e) => {
  /*selectCdd.classList.remove("ocult");
  selectCdd.classList.add("visible");*/

  selectCdd.style.display = "block";
});
