$(window).load(function () {
    $.get('./js/itemlist.csv',function(data){
        var csv = $.csv()(data);
        var itemlist = '';

        //index���g���Ă���Ԃ��񐔂��J�E���g
        $(csv).each(function(index){
            if(this[0] && this[1] == 1){
                itemlist += '<li><a href="' + this[0] + '">' + this[2] + '</a></li>';
            }
		})
		$("#itemlist").append(itemlist);
    })
})