
$(document).ready(function () {
    $('#type_table').DataTable({
        // dom: 'Bfrtip',
        // serverSide: true,
        processing: true,
        searching: true,
        ordering: true,
        responsive: true,
        ajax: {
            url: "/quanlychatlieu/show",
            type: "GET",
            data: ""
        },
        columns: [
            {data: "type_code"},
            {data: "type_name"},
            {data: '_id',
             width: '5%',
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
            "lengthMenu": "Hiển thị _MENU_ hóa đơn",
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
        $.ajax({
            type: "POST",
            url:"/quanlyloaihang/them",
            dataType: 'json',
            data: jQuery("#themloaichatlieu_form").serialize(),
            success: function (data) {
                $("#material_table").DataTable().ajax.reload();
                $("#themloaichatlieu").removeClass("in");
                $(".modal-backdrop").remove();
                $("#themloaichatlieu").hide();
                toastr["success"]("Đã thêm " + $("#loaichatlieu").val(), "Thông báo");
            },
            error: function () {
                $("#themloaichatlieu").removeClass("in");
                $(".modal-backdrop").remove();
                $("#themloaichatlieu").hide();
                toastr["error"]("Không thể thêm", "Thông báo");
            }
        });
    });
});