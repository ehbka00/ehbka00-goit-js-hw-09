function e(e,t){const n=Math.random()>.3;return new Promise(((s,r)=>{setTimeout((()=>{n?s(`Promise ${e} resolved after ${t}ms`):r(`Promise ${e} rejected after ${t}ms`)}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();const n=parseInt(this.elements.delay.value),s=parseInt(this.elements.step.value),r=parseInt(this.elements.amount.value);for(let t=0;t<r;t++)e(t+1,n+t*s).then((e=>console.log(e))).catch((e=>console.error(e)))}));
//# sourceMappingURL=03-promises.2cddf932.js.map
