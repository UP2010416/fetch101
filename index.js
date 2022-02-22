/*
 * This is index.js
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';
async function showMessage(elem,url){
    const response = await fetch(url)
    const text = await response.text()
    elem.textContent=text
}

async function showList(elem,url){
    const response = await fetch(url)
    const data = await response.json()
    data.forEach((item=>{
        let listitem = document.createElement("li")
        listitem.textContent=item
        elem.appendChild(listitem)
    }))
}

function startShowingMessage(elem, url){
    setInterval(async function(){
      const response = await fetch(url)
      const text = await response.text()
      elem.textContent = text
    }, 1000)
  }

async function handleError(elem,url){
    const response = await fetch(url)
    if(response.ok){
        const text = await response.text()
        elem.textContent=text
    } else{
        elem.textContent='OH DEAR'
    }
    
}

function drawBox(canvas,url){
    setInterval(async function(){
        const response = await fetch(url)
        const text = await response.json()
        let ctx = canvas.getContext('2d')
        ctx.fillRect(text.x,text.y,10,10)
    }, 1000)
}
