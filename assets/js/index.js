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
        }); //몯느 차트 숨기기
        movCont[index].style.display = "block"; //클릭한 버튼과 같은 index 번호의 컨텐츠 보이기
    });
});

//공지사항
//공지사항 탭 메뉴
const tabList = document.querySelectorAll("notice > ul > li > a");
const tabContents = document.querySelectorAll("notice > ul > li > ul");

//전체숨기고 액티브만 보이기
tabContents.forEach(() => {
    ul.style.display = "none";
});
// document.querySelector("notice > ul > li.active > ul"), (style.display = "block";
tabContents[0].style.display = "block";

tabList.forEach((a) => {a.addEventListener})("click"),(e) =>{e.preventDefault}()

tabList.forEach((a) => {
    a.addEventListener("click", (e) => {
        e.preventDefault();

        // 모든 메뉴 액티브를 제거 후 전체 컨텐츠 보이기
        tabList.forEach((item) => {
            item.parentElement.classList.remove("active");
            a.nextElementSibling.style.display = "none";
        });
        //클릭한 것만 액티브 + 전체 컨텐츠 보이기
        a.parentElement.classList.add("active");
        a.nextElementSibling.style.display = "block";
    });
});
