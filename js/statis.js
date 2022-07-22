//filtro da Statistic
$('.statistic-btn').on('click', function() {
    let type = $(this).attr('id')
    let boxes = $('.statistic-box')

    $('.main-btn').removeClass('active')
    $(this).addClass('active')

    if(type == 'nur-btn') {
        eachBoxes('nur',boxes)
    } else if (type == 'inf-btn') {
        eachBoxes('inf',boxes)
    } else if (type == 'adm-btn') {
        eachBoxes('adm',boxes)
    } else if (type == 'all-btn') {
        eachBoxes('all',boxes)
    }
 })
function eachBoxes(type,boxes) {
    if(type == 'all') {
        $(boxes).fadeIn()
    } else {
        $(boxes).each(function () {
            if(!$(this).hasClass(type)) {
                $(this).fadeOut('fast')
            } else {
                $(this).fadeIn()
            }
        })
    }
}