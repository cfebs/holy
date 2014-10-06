// APP

Application = function() {
    this.first_text_input = $('.js-text_input_first');
    this.first_text_top = $('.js-text_top_first');
    this.first_text_bottom = $('.js-text_bottom_first');

    this.sec_text_input = $('.js-text_input_sec');
    this.sec_text_top = $('.js-text_top_sec');
    this.sec_text_bottom = $('.js-text_bottom_sec');

    this.bg_fill = $('.js-bg_img_url_fill');
    this.bg_example_holder = $('.js-bg_examples');

    this.bg_input = $('.js-bg_img_url_input');

    this.setupEvents();
    this.setBgImage($('.js-bg_example:first').addClass('active').find('img').attr('src'));
};

Application.prototype.setupEvents = function() {
    var self = this;

    self.bg_input.on('keyup', function() {
        self.bg_fill.attr('xlink:href', $(this).val());
    });

    self.first_text_input.on('keyup', function() {
        var val = $(this).val();
        self.first_text_top.text(val);
        self.first_text_bottom.text(val);
    });

    self.sec_text_input.on('keyup', function() {
        var val = $(this).val();
        self.sec_text_top.text(val);
        self.sec_text_bottom.text(val);
    });

    self.bg_example_holder.on('click', '.js-bg_example', function() {
        $('.js-bg_example.active').removeClass('active');
        $(this).addClass('active');
        self.setBgImage($(this).find('img').attr('src'));
    });
};

Application.prototype.setBgImage = function(url) {
    var self = this;
    self.bg_fill.attr('xlink:href', url);
}

$(function() {
    window.App = new Application();
});
