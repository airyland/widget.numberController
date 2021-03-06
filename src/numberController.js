define(function(require, exports, module) {
    //@todo bash bind
    //@todo number custom getter and setter
    //@todo code cleaning
    var numberController;
    (function($) {
        numberController = function(option) {
            var _this = this;
            var defaults = {
                plusEle: null,
                minusEle: null,
                numberEle: null,
                minusDisabledClass: 'minus-disabled',
                plusDisabledClass: 'plus-disabled',
                minNumber: 0,
                step: 1,
                onchange: $.noop,
                valueAdapter: {
                    get: $.noop,
                    set: $.noop
                }
            };
            $.extend(defaults, option);
            this.defaults = (function() {
                return defaults;
            })();
            if (!_this.defaults.minusEle && !_this.defaults.numberEle) throw ('shit! No number element specified');
            $.each(['$numberEle', '$plusEle', '$minusEle'], function(index, value) {
                _this[value] = $(_this.defaults[value.slice(1)]).eq(0);
            });
            return this.init(option);
        };
        numberController.prototype = {
            init: function(option) {
                var _this = this;
                _this.$minusEle.click(function() {
                    if ($(this).hasClass(_this.defaults.minusDisabledClass)) return;
                    _this.minus(_this.defaults.step);
                });
                _this.$plusEle.click(function() {
                    if ($(this).hasClass(_this.defaults.plusDisabledClass)) return;
                    _this.plus(_this.defaults.step);
                });
                _this.minus(0);
                _this.plus(0);

                _this.$numberEle.on('change blur', function() {
                    _this.check();
                });
                return _this;
            },
            check: function() {
                if (this.$numberEle.val() * 1 === this.defaults.minNumber) {
                    this.$minusEle.addClass(this.defaults.minusDisabledClass);
                } else {
                    this.$minusEle.removeClass(this.defaults.minusDisabledClass);
                }

                if (this.$numberEle.val() * 1 === this.defaults.maxNumber) {
                    this.$plusEle.addClass(this.defaults.plusDisabledClass);
                } else {
                    this.$plusEle.removeClass(this.defaults.plusDisabledClass);
                }
            },
            minus: function(step) {
                var _this = this;
                var currentNo = this.val();
                currentNo -= step;
                this.val(currentNo);
                if (step !== 0) {
                    this.emit('change');
                }
                if ($.isNumeric(_this.defaults.minNumber)) {
                    if (_this.defaults.minNumber === this.val()) {
                        setTimeout(function() {
                            _this.$minusEle.prop('disabled', true).addClass(_this.defaults.minusDisabledClass);
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
                if ($.isNumeric(_this.defaults.maxNumber)) {
                    if (_this.defaults.maxNumber === this.val()) {
                        setTimeout(function() {
                            _this.$plusEle.prop('disabled', true).addClass(_this.defaults.plusDisabledClass);
                        }, 0);
                    }
                }
            },
            // getter and setter
            val: function(number) {
                var _this = this;
                if ($.isNumeric(number)) {
                    // check min and max
                    if ($.isNumeric(_this.defaults.minNumber)) {
                        if (number > _this.defaults.minNumber) {
                            this.$numberEle.val(number);
                            if (_this.$plusEle.is(':disabled') || _this.$plusEle.hasClass(_this.defaults.plusDisabledClass)) {
                                _this.$plusEle.prop('disabled', false).removeClass(_this.defaults.plusDisabledClass);
                            }
                        } else {
                            this.$minusEle.prop('disabled', true);
                        }
                    }

                    if ($.isNumeric(_this.defaults.maxNumber)) {
                        if (number < _this.defaults.maxNumber) {
                            this.$numberEle.val(number);
                            if (_this.$minusEle.is(':disabled') || _this.$minusEle.hasClass(_this.defaults.minusDisabledClass)) {
                                _this.$minusEle.prop('disabled', false).removeClass(_this.defaults.minusDisabledClass);
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
                    this.defaults.onchange && this.defaults.onchange(this.val())
                }
            },
            on: function(event, value, callback) {

            }
        };
    })(jQuery);
    module.exports = numberController;
});