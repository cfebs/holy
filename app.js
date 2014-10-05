// APP

Application = function() {
    this.text_top = $('.js-text_top');
    this.text_bottom = $('.js-text_bottom');
    this.bg_fill = $('.js-bg_img_url_fill');

    this.text_input = $('.js-text_input');
    this.bg_input = $('.js-bg_img_url_input');

    this.setupEvents();
};

Application.prototype.setupEvents = function() {
    var self = this;

    self.bg_input.on('keyup', function() {
        self.bg_fill.attr('href', $(this).val());
    });

    self.text_input.on('keyup', function() {
        var val = $(this).val();
        self.text_top.text(val);
        self.text_bottom.text(val);
    });
};

$(function() {
    window.App = new Application();
});
