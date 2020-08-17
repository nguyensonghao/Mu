$(document).ready(function () {
    var showTab = function () {
        var el = $('.post-menu-item.active');
        $('.post-content').hide();
        if (el && el.length) {
            let id = el.attr('id');
            $('.post-content[control-by="' + id + '"]').show();
        } else {
            $('.post-content[control-by="tab-1"]').show();
        }
    }

    // Event show tab post content
    showTab();
    $('.post-menu-item').click(function () {
        $('.post-menu-item').removeClass('active');
        $(this).addClass('active');
        showTab();
    })
})