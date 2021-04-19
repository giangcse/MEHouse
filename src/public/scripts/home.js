$(document).ready(function(){
    $('.add-cart').on('click', function() {
        var id = $(this).attr('id');
        toastr.options = {
            "closeButton": true,
            "closeButton": true,
            "debug": false,
            "newestOnTop": true,
            "progressBar": false,
            "positionClass": "toast-bottom-right",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "500",
            "timeOut": "2000",
            "extendedTimeOut": "500",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        } 
        $.ajax({
            type: 'POST',
            url: '/mua',
            dataType: 'json',
            data: {'id': id},
            success: function(data){
                if(data.code == 200){
                    toastr["success"](data.message, "Thành công");
                    $.ajax({
                        type: "POST",
                        url: "/laysoluong",
                        dataType: "json",
                        data: {"id": id},
                        success: function(data){
                            $("#card-" + id + " .card .card-body .text-muted.sl").text(data.remain);
                        }
                    });
                }else{
                    toastr["warning"](data.message, "Lỗi");
                }
            }
        });
    });
});