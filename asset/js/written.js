$(document).ready(function() {
    // 전체 선택 체크박스 클릭 시 실행
    $('.select-all').click(function() {
        const allChecked = $('.checkbox').length === $('.checkbox:checked').length;

        if (allChecked) {
            // 모든 체크박스가 체크되어 있을 경우 전체 선택 체크박스를 해제
            this.checked = false;
            $('.select-all-text').text('전체선택'); // 텍스트 변경
        } else {
            // 전체 선택 체크박스의 체크 상태에 따라 다른 체크박스 체크/해제
            $('.checkbox').prop('checked', this.checked);
            $('.select-all-text').text(this.checked ? '선택해제' : '전체선택'); // 텍스트 변경
        }
    });

    // 다른 체크박스 클릭 시 실행
    $('.checkbox').click(function() {
        const allChecked = $('.checkbox').length === $('.checkbox:checked').length;
        $('.select-all').prop('checked', allChecked);
        $('.select-all-text').text(allChecked ? '선택해제' : '전체선택'); // 텍스트 변경
    });
});