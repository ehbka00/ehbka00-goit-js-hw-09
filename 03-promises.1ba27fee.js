!function(){function e(e,t){var n=Math.random()>.3;return new Promise((function(o,r){setTimeout((function(){n?o("Promise ".concat(e," resolved after ").concat(t,"ms")):r("Promise ".concat(e," rejected after ").concat(t,"ms"))}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();for(var n=parseInt(this.elements.delay.value),o=parseInt(this.elements.step.value),r=parseInt(this.elements.amount.value),c=0;c<r;c++)e(c+1,n+c*o).then((function(e){return console.log(e)})).catch((function(e){return console.error(e)}))}))}();
//# sourceMappingURL=03-promises.1ba27fee.js.map
