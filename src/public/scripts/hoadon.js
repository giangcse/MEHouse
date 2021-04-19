
$(document).ready(function () {
    $('#bill_table').DataTable({
        // dom: 'Bfrtip',
        // serverSide: true,
        processing: true,
        searching: true,
        ordering: true,
        responsive: true,
        ajax: {
            url: "/getHoaDon",
            type: "GET",
            data: ""
        },
        columns: [
            {data: "_id"},
            {data: "create_at"},
            {data: "staff"},
            {data: "total_price"}
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
});