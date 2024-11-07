//  --- 탭메뉴
$(function () {
    var tab_Btn = $(".tab_btn > ul > li");
    var tab_Cont = $(".tab_cont > ul");
    var tab_ContDiv = $(".tab_cont > .tab_div");


    // 초기 설정: 첫 번째 탭과 첫 번째 페이지를 보여줌
    tab_Cont.hide().eq(0).show(); // 첫 번째 탭 콘텐츠 보이기
    tab_Cont.eq(0).find('.page_content').hide().eq(0).show(); // 첫 번째 페이지 보이기
    // 초기 설정: 첫 번째 탭과 첫 번째 페이지를 보여줌
    tab_ContDiv.hide().eq(0).show(); // 첫 번째 탭 콘텐츠 보이기
    tab_ContDiv.eq(0).find('.page_content').hide().eq(0).show(); // 첫 번째 페이지 보이기


    // 탭 버튼 클릭 시
    tab_Btn.click(function (e) {
        e.preventDefault();
        var target = $(this);
        var index = target.index();

        // 탭 전환 처리
        tab_Btn.removeClass("active"); // 모든 탭의 active 제거
        target.addClass("active"); // 클릭한 탭에 active 추가
        tab_Cont.hide(); // 모든 탭 콘텐츠 숨기기
        tab_Cont.eq(index).show(); // 해당하는 탭 콘텐츠 보이기
        tab_ContDiv.hide(); // 모든 탭 콘텐츠 숨기기
        tab_ContDiv.eq(index).show(); // 해당하는 탭 콘텐츠 
        // 탭에 맞는 제목 설정

        // 해당 탭의 첫 번째 페이지를 기본으로 보여줌
        tab_Cont.eq(index).find('.page_content').hide().eq(0).show();
        tab_ContDiv.eq(index).find('.page_content').hide().eq(0).show();

        // 해당 탭의 페이지 버튼 초기화
        updatePageButtons(1); // 1번 페이지 버튼 활성화

    });




    // 현재 페이지에 맞는 버튼에 .active 클래스 붙이기
    function updatePageButtons(pageIndex) {
        $(".page_btn").removeClass("active"); // 모든 버튼에서 active 클래스 제거
        $(".page_btn[data-page='" + pageIndex + "']").addClass("active"); // 해당 페이지 버튼에 active 클래스 추가
    }
});


// --- 버튼 클릭 이미지 변경
// 팔로우 버튼
$(document).ready(function() {
    $(".follow").each(function() {
        var isChanged = false; // 상태를 추적하는 변수

        $(this).click(function() {
            if (!isChanged) {
                // 처음 클릭할 때 속성 변경
                $(this).css({
                    "background-color": "white",
                    "border": "1px solid var(--grayscale-400)",
                    "color": "var(--grayscale-950)"
                }).text("팔로우");

                isChanged = true; // 변경됨을 표시
            } else {
                // 다시 클릭할 때 원래 상태로 복원
                $(this).css({
                    "background-color": "var(--primary-600)",
                    "border": "0",
                    color: "white"

                }).text("팔로잉");

                isChanged = false; // 원래 상태로 돌아옴을 표시
            }
        });
    });
});

// 좋아요 버튼
$(document).ready(function() {
    $(".heart").click(function() {
        var img = $(this).find(".heart_img"); // 클릭한 .heart 요소 내의 .heart_img를 선택

        // 현재 이미지의 경로가 heart_icon.png일 때 heart_on_icon.png로 변경, 그렇지 않으면 다시 heart_icon.png로 변경
        if (img.attr("src") === "./img/heart_icon.png") {
            img.attr("src", "./img/heart_on_red.png");
        } else {
            img.attr("src", "./img/heart_icon.png");
        }
    });
});

// 사진 클릭
$(document).ready(function(){
    // 이미지 클릭 시 오버레이 나타나게 하기
    $('.photo_click').on('click', function() {
        $(this).siblings('.overlay').show(); // 클릭한 이미지의 형제 요소인 overlay에만 적용
    });

    // 오버레이 클릭 시 오버레이 사라지게 하기
    $('.overlay').on('click', function() {
        $(this).hide(); // 오버레이 페이드아웃
    });
});

// 체크박스 체크
$(document).ready(function() {
    // 체크박스 클릭 시
    $('input[type="checkbox"]').on('click', function() {
        const customCheckbox = $(this).siblings('.custom-checkbox');
        customCheckbox.toggleClass('checked', this.checked); // 체크 상태에 따라 클래스 토글
    });
});

// 더보기 버튼 펼치기
$(document).ready(function() {
    $('.more').click(function() {
        // 원래 있던 콘텐츠 숨기기
        $('.original_content').toggle(); 
        $('.more_content').toggle(); // 내용의 표시 상태를 전환
        if ($('.more_content').is(':visible')) {
        $('.more').text('접기'); // 내용이 보일 때 버튼 텍스트 변경
        } else {
        $('.more').text('더보기'); // 내용이 숨겨질 때 버튼 텍스트 변경
        }
    });
});
