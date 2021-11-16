function addProductToList() {
    var $matricNumber = $('#txtMatric').val();
    var $score = parseInt($('#txtScore').val());
    var $courseCode = $('#txtCourseCode').val();

    if ($matricNumber == '') {
        toastr.error('Supply Matric Number');
        return;
    }

    if ($('#txtScore').val() == '') {
        toastr.error('Supply Score');
        return;
    }

    if ($courseCode == '') {
        toastr.error('Supply Course Code');
        return;
    }

    appendRecordToTable($matricNumber, $courseCode, $score);

    //var $productValidationUrl = "/Inventory/VerifyProductAvailability?productName=" + productName + "&qty=" + qty;

    //$.ajax({
    //    type: 'get',
    //    url: $productValidationUrl,
    //    contentType: 'application/json; charset=UTF-8',
    //    success: function (response) {
    //        if (response.data != null) {
    //            if (response.responseCode != '00') {
    //                toastr.error(response.responseMessage);
    //            }
    //            else {
    //                appendRecordToTable(amount, productName, itemPrice, qty);
    //                $('#productName').prop('selectedIndex', 0).attr('selected', true);
    //                $('#txtPrice').val('');
    //                $('#txtQty').val('');
    //            }
    //        }
    //    },
    //    error: function (err) {
    //        toastr.error(err);
    //    }
    //});
};

function appendRecordToTable(matric, coursecode, score) {
    
    $('#resultTable').append("<tr>" +
        "<td><span class='matric'>" + matric + "</span></td>" +
        "<td><span class='ccode'>" + coursecode + "</span></td>" +
        "<td><span class='score'>" + score + "</span></td>" +
        "<td><button class='btn btn-sm btn-danger' id='btnRemove'><i class='fas fa-trash'></i></button></td>" +
        "</tr>");
}

$('#resultTable').on('click', '#btnRemove', function (e) {    
    $(this).parents("tr").remove();
});