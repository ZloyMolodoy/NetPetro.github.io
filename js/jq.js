$(".form-check-input").click(function () {
    let $this = $(this);
    let value = $this.data('value');

    let $elements = $this.parent().find(".form-check-input");

    $elements.removeClass("form-check-input__active");

    for (let i = 1; i <= value; i++)
        $elements.filter('[data-value="' + i + '"]').addClass("form-check-input__active");
});
