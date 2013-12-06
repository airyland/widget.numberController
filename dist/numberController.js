define("seedit/numberController/0.0.1/numberController",[],function(a,b,c){var d;!function(a){d=function(b){var c=this,d={plusEle:null,minusEle:null,numberEle:null,minusDisabledClass:"minus-disabled",plusDisabledClass:"plus-disabled",minNumber:0,step:1,onchange:a.noop,valueAdapter:{get:a.noop,set:a.noop}};if(a.extend(d,b),this.defaults=function(){return d}(),!c.defaults.minusEle&&!c.defaults.numberEle)throw"shit! No number element specified";return a.each(["$numberEle","$plusEle","$minusEle"],function(b,d){c[d]=a(c.defaults[d.slice(1)]).eq(0)}),this.init(b)},d.prototype={init:function(){var b=this;return b.$minusEle.click(function(){a(this).hasClass(b.defaults.minusDisabledClass)||b.minus(b.defaults.step)}),b.$plusEle.click(function(){a(this).hasClass(b.defaults.plusDisabledClass)||b.plus(b.defaults.step)}),b.minus(0),b.plus(0),b.$numberEle.on("change blur",function(){b.check()}),b},check:function(){1*this.$numberEle.val()===this.defaults.minNumber&&this.$minusEle.addClass(this.defaults.minusDisabledClass),1*this.$numberEle.val()===this.defaults.maxNumber&&this.$plusEle.addClass(this.defaults.plusDisabledClass)},minus:function(b){var c=this,d=this.val();return d-=b,this.val(d),0!==b&&this.emit("change"),a.isNumeric(c.defaults.minNumber)&&c.defaults.minNumber===this.val()?(setTimeout(function(){c.$minusEle.prop("disabled",!0).addClass(c.defaults.minusDisabledClass)},0),void 0):void 0},plus:function(b){var c=this,d=this.val();d+=b,this.val(d),0!==b&&this.emit("change"),a.isNumeric(c.defaults.maxNumber)&&c.defaults.maxNumber===this.val()&&setTimeout(function(){c.$plusEle.prop("disabled",!0).addClass(c.defaults.plusDisabledClass)},0)},val:function(b){var c=this;return a.isNumeric(b)?(a.isNumeric(c.defaults.minNumber)&&(b>c.defaults.minNumber?(this.$numberEle.val(b),(c.$plusEle.is(":disabled")||c.$plusEle.hasClass(c.defaults.plusDisabledClass))&&c.$plusEle.prop("disabled",!1).removeClass(c.defaults.plusDisabledClass)):this.$minusEle.prop("disabled",!0)),a.isNumeric(c.defaults.maxNumber)&&(b<c.defaults.maxNumber?(this.$numberEle.val(b),(c.$minusEle.is(":disabled")||c.$minusEle.hasClass(c.defaults.minusDisabledClass))&&c.$minusEle.prop("disabled",!1).removeClass(c.defaults.minusDisabledClass)):this.$plusEle.prop("disabled",!0)),this):parseInt(this.$numberEle.val(),10)},emit:function(a){"change"===a&&this.defaults.onchange&&this.defaults.onchange(this.val())},on:function(){}}}(jQuery),c.exports=d});
