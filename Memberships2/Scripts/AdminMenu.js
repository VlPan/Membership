$(document).ready(function () {

    var dataAdmin;

    setVariables();
    setListeners();

    function setVariables() {
        dataAdmin = $('[data-admin]');
    }

    function setListeners() {
        dataAdmin.on('hover', function () {
            dataAdmin.toggleClass('open');
        });
    }

    

});