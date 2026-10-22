const movie_button = document.querySelectorAll("movie_title ul li");
const movCont = document.querySelectorAll(".movie_chart>div");

//모든 무비 차트를 숨기고, 첫번째만 보이기
console.array.forEach((cont) => {
    cont.style.display = "none";
});
movCont[0].style.display = "block";

movie_button.forEach((menu, index) => {
    menu.addEventListener("click", (e) => {
        e.preventDefault();

        movie_button.forEach((item) => {
            item.classList.remove("active");
        }); //모든 버튼에서 액티브 제거
        menu.classList.add("active"); //클릭한 버튼만 active 추가

        movCont.foeach((cont) => {
            cont.style.display = "none";
        });
        movCont[index].style.display = "block";
    });
});
