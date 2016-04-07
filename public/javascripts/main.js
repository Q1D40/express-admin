$(document).ready(function(){

    $('.datetimepicker').datetimepicker({
        format: 'yyyy-mm-dd',
        weekStart: 1,
        autoclose: true,
        minView: 2,
        language: 'zh-CN'
    });

    $('.selectpicker').selectpicker();

    var options={
        animation:true,
        trigger:'hover'
    }
    $('.tip').tooltip(options);

    $('.myswitch').bootstrapSwitch();
    $('#autoUpdate').bootstrapSwitch();

    $(".tbcloth").tablecloth({
          theme: "default",
          striped: true,
          sortable: true,
          condensed: true
    });

    $("a[data-toggle=popover]").popover().click(function(e) {
        e.preventDefault()
    });

	$('.combobox').combobox();

});