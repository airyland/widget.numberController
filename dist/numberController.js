define("seedit/numberController/0.0.1/numberController",["$"],function(a,b,c){var d=a("$"),e={plusEle:null,minusEle:null,numberEle:null,minusDisabledClass:"minus-disabled",plusDisabledClass:"plus-disabled",minNumber:0,step:1,onchange:d.noop},f=function(a){var b=this;if(d.extend(e,a),e=e,!a.numberEle)throw"shit! No number element specified";return d.each(["$numberEle","$plusEle","$minusEle"],function(c,e){b[e]=d(a[e.slice(1)]).eq(0)}),this.init(a)};f.prototype={init:function(){var a=this;return a.$minusEle.click(function(){a.minus(e.step)}),a.$plusEle.click(function(){a.plus(e.step)}),a.minus(0),a.plus(0),a},minus:function(a){var b=this,c=this.val();return c-=a,this.val(c),0!==a&&this.emit("change"),d.isNumeric(e.minNumber)&&e.minNumber===this.val()?(setTimeout(function(){b.$minusEle.prop("disabled",!0).addClass(e.minusDisabledClass)},0),void 0):void 0},plus:function(a){var b=this,c=this.val();c+=a,this.val(c),0!==a&&this.emit("change"),d.isNumeric(e.maxNumber)&&e.maxNumber===this.val()&&setTimeout(function(){b.$plusEle.prop("disabled",!0).addClass(e.plusDisabledClass)},0)},checkValid:function(){},val:function(a){var b=this;return d.isNumeric(a)?(d.isNumeric(e.minNumber)&&(a>e.minNumber?(this.$numberEle.val(a),b.$plusEle.is(":disabled")&&b.$plusEle.prop("disabled",!1).removeClass(e.plusDisabledClass)):this.$minusEle.prop("disabled",!0)),d.isNumeric(e.maxNumber)&&(a<e.maxNumber?(this.$numberEle.val(a),b.$minusEle.is(":disabled")&&b.$minusEle.prop("disabled",!1).removeClass(e.minusDisabledClass)):this.$plusEle.prop("disabled",!0)),this):parseInt(this.$numberEle.val(),10)},emit:function(a){"change"===a&&e.onchange&&e.onchange(this.val())},on:function(){}},c.exports=f});
