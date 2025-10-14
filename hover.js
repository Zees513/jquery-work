$(document).ready(function () {
    $("#btn").hover(
        function () {
            $("#para").css("color", "red");
        },
        function () {
            $("#para").css("color", "");
        }
    );
});
