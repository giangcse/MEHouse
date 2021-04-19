
$(document).ready(function () {
    $('#warehouse_table').DataTable({
        // dom: 'Bfrtip',
        // serverSide: true,
        processing: true,
        searching: true,
        ordering: true,
        responsive: true,
        ajax: {
            url: "/nhaphang/show",
            type: "GET",
            data: ""
        },
        columns: [
            {data: "product_type"},
            {data: "product_name"},
            {data: "product_color"},
            {data: "product_price"},
            {data: "product_quantity"},
            {data: '_id',
             render: function(data, type, row){
                let strEdit ='<a data-id="' + data +'" class="edit" title="Chỉnh sửa" style="cursor: pointer; color: green"><i class="fas fa-pencil-alt"></i></a>';
                let strDel = '<a data-id="' + data + '" class="delete" style="padding-left: inherit;cursor: pointer; color: red" title="Xóa"><i class="fa fa-trash"></i></a>';
                return strEdit + strDel;
             }
            }
        ],
        "language": {
            "decimal": ",",
            "thousands": ".",
            "lengthMenu": "Hiển thị _MENU_ mặt hàng",
            "zeroRecords": "Không tìm thấy dữ liệu",
            "info": "Trang _PAGE_ / _PAGES_",
            "infoEmpty": "Không có dữ liệu",
            "search": "Tìm kiếm",
            "loadingRecords": "Đang tải...",
            "processing":     "Đang xử lý...",
            "paginate": {
                "first":      "Trang đầu",
                "last":       "Trang cuối",
                "next":       "Trang sau",
                "previous":   "Trang trước"
            },
            aria: {
                sortAscending: ': activate to sort column ascending',
                sortDescending: ': activate to sort column descending',
            },
        }
    });

    $(document).on("click", "#themBtn", function (e){
        e.preventDefault();
        toastr.options = {
            "closeButton": true,
            "closeButton": true,
            "debug": false,
            "newestOnTop": true,
            "progressBar": true,
            "positionClass": "toast-bottom-right",
            "preventDuplicates": true,
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

        if(jQuery('#product_name').val() == "" ||
           jQuery('#product_price').val() == "" ||
           jQuery('#product_quantity').val() == ""){
            toastr["error"]("Vui lòng điền đủ tên, giá, số lượng", "Thông báo");
        }else{
            $.ajax({
                type: "POST",
                url:"/nhaphang/them",
                dataType: 'json',
                data: jQuery("#nhaphang_form").serialize(),
                success: function (data) {
                    $("#warehouse_table").DataTable().ajax.reload();
                    $("#nhaphang").removeClass("in");
                    $(".modal-backdrop").remove();
                    $("#nhaphang").hide();
                    toastr["success"]("Đã thêm " + $("#product_name").val(), "Thông báo");
                    $("#nhaphang_form").reset();
                },
                error: function () {
                    $("#nhaphang").removeClass("in");
                    $(".modal-backdrop").remove();
                    $("#nhaphang").hide();
                    toastr["error"]("Không thể thêm", "Thông báo");
                }
            });
        }        
    });
});