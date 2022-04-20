function init() {

  const data = [
    {
      svg(main, sub) {
        const one = main || '#4d8da3'
        const two = sub || '#9edbf0'
        return `<path fill="${one}" d="M 4 1 h 1 v 1 h 1 v 2 h 4 v -2 h 1 v -1 h 1 v 3 h 1 v 1 h 1 v 3 h -1 v 1 h -3 v 3 h 1 v 2 h -6 v -2 h 1 v -3 h -3 v -1 h -1 v -3 h 1 v -1 h 1 v -3"/> <path fill="${one}" d="M 20 2 h 1 v 1 h 1 v 2 h 4 v -2 h 1 v -1 h 1 v 3 h 1 v 1 h 1 v 3 h -1 v 1 h -2 v 1 h 1 v 2 h -1 v 1 h -6 v -1 h -1 v -2 h 1 v -1 h -2 v -1 h -1 v -3 h 1 v -1 h 1 v -3"/> <path fill="${two}" d="M 5 5 h 1 v 2 h -1 v -2"/> <path fill="${two}" d="M 10 5 h 1 v 2 h -1 v -2"/> <path fill="${two}" d="M 21 6 h 1 v 2 h -1 v -2"/> <path fill="${two}" d="M 26 6 h 1 v 2 h -1 v -2"/>`
      }, 
      frameNo: 2,
      title: 'test',
      bgColor: 'red',
      description: 'test test test test',
      interval: null,
    },
    {
      svg(main, sub) {
        const one = main || '#770011'
        const two = sub || '#9edbf0'
        return `<path fill="${one}" d="M 4 1 h 1 v 1 h 1 v 2 h 4 v -2 h 1 v -1 h 1 v 3 h 1 v 1 h 1 v 3 h -1 v 1 h -3 v 3 h 1 v 2 h -6 v -2 h 1 v -3 h -3 v -1 h -1 v -3 h 1 v -1 h 1 v -3"/> <path fill="${one}" d="M 20 2 h 1 v 1 h 1 v 2 h 4 v -2 h 1 v -1 h 1 v 3 h 1 v 1 h 1 v 3 h -1 v 1 h -2 v 1 h 1 v 2 h -1 v 1 h -6 v -1 h -1 v -2 h 1 v -1 h -2 v -1 h -1 v -3 h 1 v -1 h 1 v -3"/> <path fill="${two}" d="M 5 5 h 1 v 2 h -1 v -2"/> <path fill="${two}" d="M 10 5 h 1 v 2 h -1 v -2"/> <path fill="${two}" d="M 21 6 h 1 v 2 h -1 v -2"/> <path fill="${two}" d="M 26 6 h 1 v 2 h -1 v -2"/>`
      }, 
      frameNo: 2,
      title: 'test 2',
      bgColor: 'white',
      description: 'test test test test 2',
      interval: null,
    },
    {
      svg(main, sub) {
        const one = main || '#4d8800'
        const two = sub || '#9edbf0'
        return `<path fill="${one}" d="M 4 1 h 1 v 1 h 1 v 2 h 4 v -2 h 1 v -1 h 1 v 3 h 1 v 1 h 1 v 3 h -1 v 1 h -3 v 3 h 1 v 2 h -6 v -2 h 1 v -3 h -3 v -1 h -1 v -3 h 1 v -1 h 1 v -3"/> <path fill="${one}" d="M 20 2 h 1 v 1 h 1 v 2 h 4 v -2 h 1 v -1 h 1 v 3 h 1 v 1 h 1 v 3 h -1 v 1 h -2 v 1 h 1 v 2 h -1 v 1 h -6 v -1 h -1 v -2 h 1 v -1 h -2 v -1 h -1 v -3 h 1 v -1 h 1 v -3"/> <path fill="${two}" d="M 5 5 h 1 v 2 h -1 v -2"/> <path fill="${two}" d="M 10 5 h 1 v 2 h -1 v -2"/> <path fill="${two}" d="M 21 6 h 1 v 2 h -1 v -2"/> <path fill="${two}" d="M 26 6 h 1 v 2 h -1 v -2"/>`
      }, 
      frameNo: 2,
      title: 'test 3',
      bgColor: 'yellow',
      description: 'test test test test 3',
      interval: null,
    },
  ]

  const svgWrapper = ({ content, color, w, h }) =>{
    return `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" fill="${color || 'black'}"
    width="100%" height="100%" viewBox="0 0 ${w} ${h}"
    >${content}</svg>`
  }
  
  const elements = {
    menu: document.querySelector('.menu'),
    wrapper: document.querySelector('.wrapper')
  }

  // TODO add hover animation effect
  const animateSvg = ({ target, start, end, data, speed }) => {
    const startFrame = start || 0
    let i = startFrame
    clearInterval(data.interval)
    data.interval = setInterval(()=> {
      target.style.marginLeft = `${-(i * 100)}%`
      i = i >= end
        ? startFrame
        : i + 1
    }, speed || 200)
  }

  const createThumbs = data => {
    return data.map((d, i) => {
      return `
      <div class="thumb">
        <div class="icon_wrapper" style="background-color: ${ d.bgColor };">
          <div class="icon" style="width: ${d.frameNo * 50}px;" data-id="${i}">
            ${svgWrapper({
              content: d.svg(),
              w: 16 * d.frameNo,
              h: 16,
            })}
          </div>
        </div>
        <p>${ d.title }</p>
      </div>`
    }).join('')
  }

  const openWindow = () =>{
    console.log('click')
    const window = document.createElement('div')
    elements.wrapper.append(window)
    window.classList.add('iframe_wrapper')
    window.innerHTML = `
      <div class="iframe_nav">
        <div class="iframe_button"></div>
        <div class="iframe_button"></div>
        <div class="iframe_button"></div>
      </div>
      <iframe src="https://codepen.io/Ma5a/full/BapbQam" />
    `
  }

  const createThumbsAndHoverEffects = (target, data) =>{
    target.innerHTML = createThumbs(data)
    target.childNodes.forEach((c, i)=>{
      if (i % 2 !== 0) {
        const targetNode = target.childNodes[i].childNodes[1].childNodes[1]
        const thumbData = data[+targetNode.dataset.id]
        
          c.addEventListener('mouseover', () =>{
            if (!thumbData.interval){
              animateSvg({
                target: targetNode,
                data: thumbData,
                end: thumbData.frameNo - 1,
              })
            } 
          })
        c.addEventListener('mouseleave', ()=>{
          clearInterval(thumbData.interval)
          thumbData.interval = null
        })
        c.addEventListener('click', openWindow)
      }
    })
  }

  createThumbsAndHoverEffects(elements.menu, data)



  // console.log('test', data[0].svg())
}

window.addEventListener('DOMContentLoaded', init)

