function qr() {
    $("#qrcode").html("");
    $("#qrcode").qrcode($("input:text").val());
}
