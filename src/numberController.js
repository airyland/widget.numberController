define(function(require, exports, module) {
    var $ = require('$');
    var defaults = {
        plusEle: null,
        minusEle: null,
        numberEle: null,
        minusDisabledClass: 'minus-disabled',
        plusDisabledClass: 'plus-disabled',
        minNumber: 0,
        step: 1,
        onchange: $.noop
    };
    var numberController = function(option) {
        var _this = this;
        $.extend(defaults, option);
        if (!defaults.numberEle) throw ('shit! No number element specified');
        $.each(['$numberEle', '$plusEle', '$minusEle'], function(index, value) {
            _this[value] = $(defaults[value.slice(1)]).eq(0);
        });
        return this.init(option);
    };
    numberController.prototype = {
        init: function(option) {
            var _this = this;
            _this.$minusEle.click(function() {
                _this.minus(defaults.step);
            });
            _this.$plusEle.click(function() {
                _this.plus(defaults.step);
            });
            _this.minus(0);
            _this.plus(0);
            return _this;
        },
        minus: function(step) {
            var _this = this;
            var currentNo = this.val();
            currentNo -= step;
            this.val(currentNo);
            if (step !== 0) {
                this.emit('change');
            }
            if ($.isNumeric(defaults.minNumber)) {
                if (defaults.minNumber === this.val()) {
                    setTimeout(function() {
                        _this.$minusEle.prop('disabled', true).addClass(defaults.minusDisabledClass);
                    }, 0);
                    return;
                }
            }
        },
        plus: function(step) {
            var _this = this;
            var currentNo = this.val();
            currentNo += step;
            this.val(currentNo);
            if (step !== 0) {
                this.emit('change');
            }
            if ($.isNumeric(defaults.maxNumber)) {
                if (defaults.maxNumber === this.val()) {
                    setTimeout(function() {
                        _this.$plusEle.prop('disabled', true).addClass(defaults.plusDisabledClass);;
                    }, 0);
                }
            }
        },
        checkValid: function(number) {

        },
        // getter and setter
        val: function(number) {
            var _this = this;
            if ($.isNumeric(number)) {
                // check min and max
                if ($.isNumeric(defaults.minNumber)) {
                    if (number > defaults.minNumber) {
                        this.$numberEle.val(number);
                        if (_this.$plusEle.is(':disabled')) {
                            _this.$plusEle.prop('disabled', false).removeClass(defaults.plusDisabledClass);;
                        }
                    } else {
                        this.$minusEle.prop('disabled', true);
                    }
                }

                if ($.isNumeric(defaults.maxNumber)) {
                    if (number < defaults.maxNumber) {
                        this.$numberEle.val(number);
                        if (_this.$minusEle.is(':disabled')) {
                            _this.$minusEle.prop('disabled', false).removeClass(defaults.minusDisabledClass);
                        }
                    } else {
                        this.$plusEle.prop('disabled', true);
                    }
                }
                return this;
            } else {
                return parseInt(this.$numberEle.val(), 10);
            }

        },
        emit: function(event, value, callback) {
            if (event === 'change') {
                defaults.onchange && defaults.onchange(this.val())
            }
        },
        on: function(event, value, callback) {

        }
    };
    module.exports = numberController;
});