# 演示文档

---

````html
    <input type='button' value='-' class='minus' field='quantity' />
    <input type='text' name='quantity' value='0' class='number' />
    <input type='button' value='+' class='plus' field='quantity' />
````
````html
    <input type='button' value='-' class='minus1' field='quantity' />
    <input type='text' name='quantity' value='5' class='number1' />
    <input type='button' value='+' class='plus1' field='quantity' />
````

````javascript
seajs.use('numberController', function(numberController) {
    var con = new numberController({
        numberEle: '.number',
        minusEle: '.minus',
        plusEle: '.plus',
        minNumber: 0,
        maxNumber: 5,
        onchange: function(value) {
            console.log('event change1', value)
        }
    });
});
````




````javascript
seajs.use('numberController', function(numberController) {
    var con2 = new numberController({
        numberEle: '.number1',
        minusEle: '.minus1',
        plusEle: '.plus1',
        minNumber: 0,
        maxNumber: 5,
        onchange: function(value) {
            console.log('event change2', value)
        }
    });
});
````
