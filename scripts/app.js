function init() {

  //TODO need new close icon, smaller one
  //TODO add resize


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
      url: 'https://codepen.io/Ma5a/full/BapbQam'
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
      url: 'https://codepen.io/Ma5a/full/MWrZPOP'
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
      url: 'https://codepen.io/Ma5a/full/bGgxaYy'
    },
  ]
  
  const addEvents = (target, action, event, arr) => arr.forEach(x => event === 'remove' 
    ? target.removeEventListener(x, action) 
    : target.addEventListener(x, action))
  const mouseUp = (t, a, e) => addEvents(t, a, e, ['mouseup', 'touchend'])
  const mouseMove = (t, a, e) => addEvents(t, a, e, ['mousemove', 'touchmove'])
  const mouseDown = (t, a, e) => addEvents(t, a, e, ['mousedown', 'touchstart'])
  const mouseEnter = (t, a, e) => addEvents(t, a, e, ['mouseenter', 'touchstart'])
  const mouseLeave = (t, a, e) => addEvents(t, a, e, ['mouseleave', 'touchmove'])

  const setTargetPos = (target, x, y) => Object.assign(target.style, { left: `${x}px`, top: `${y}px` })
  const setTargetSize = (target, w, h) =>{
    const unit = w * 0 === 0 ? 'px' : ''
    Object.assign(target.style, { width: `${w}${unit}`, height: `${h}${unit}` })
  }

  const makeDraggable = (handle, moveTarget, targetData) => {
    const pos = { a: 0, b: 0, c: 0, d: 0 }

    const onGrab = e => {
      pos.c = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX
      pos.d = e.type === 'mousedown' ? e.clientY : e.touches[0].clientY
      targetData.draggable = true
      mouseUp(document, onLetGo, 'add')
      mouseMove(document, onDrag, 'add')
    }
    const onDrag = e => {
      const x = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX
      const y = e.type === 'mousemove' ? e.clientY : e.touches[0].clientY
      pos.a = pos.c - x
      pos.b = pos.d - y
      pos.c = x
      pos.d = y
      if (targetData.draggable) {
        const newX = moveTarget.offsetLeft - pos.a
        const newY = moveTarget.offsetTop - pos.b

        // Object.assign(targetData, { 
        //   x: newX - artboard.offsetLeft, 
        //   y: newY - artboard.offsetTop
        // })
        setTargetPos(moveTarget, newX, newY)
      }
    }
    const onLetGo = () => {
      mouseUp(document, onLetGo, 'remove')
      mouseMove(document, onDrag, 'remove')
      targetData.draggable = false
    }
    mouseDown(handle, onGrab, 'add')
  }


  const makeResizable = (handle, resizeTarget, targetData) =>{
    const pos = { a: 0, b: 0, c: 0, d: 0 }
    // const handle = target.childNodes[1].childNodes[7]
    console.log(handle)
    
    const onGrab = e =>{
      targetData.resizable = true
      console.log(targetData)
      // targetData.draggable = false
      pos.c = e.type[0] === 'm' ? e.clientX : e.touches[0].clientX
      pos.d = e.type[0] === 'm' ? e.clientY : e.touches[0].clientY   
      mouseUp(document, onLetGo, 'add')
      mouseMove(document, onDrag, 'add')
    }
    const onDrag = e =>{
      if (targetData.resizable) {
        const x = e.type[0] === 'm' ? e.clientX : e.touches[0].clientX
        const y = e.type[0] === 'm' ? e.clientY : e.touches[0].clientY
        pos.a = x - pos.c
        pos.b = y - pos.d
        pos.c = x
        pos.d = y

        const { width, height } = resizeTarget.getBoundingClientRect()
        const newW = width + pos.a
        const newH = height + pos.b
        setTargetSize(resizeTarget, newW, newH)
        setTargetSize(resizeTarget.childNodes[5], newW - 2, newH - (2 + 20))
      }
    }
    const onLetGo = () => {
      mouseUp(document, onLetGo, 'remove')
      mouseMove(document, onDrag, 'remove')
      targetData.resizable = false
    } 
    mouseDown(handle, onGrab, 'add')

  }


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

  const openWindow = data =>{
    const window = document.createElement('div')
    elements.wrapper.append(window)
    window.classList.add('iframe_wrapper')
    window.innerHTML = `
      <div class="iframe_nav">
        <div class="iframe_button"></div>
        <div class="iframe_button"></div>
        <div class="iframe_button close"></div>
      </div>
      <div class="handle"></div>
      <iframe src="${data.url}" />
    `
    makeDraggable(window.childNodes[1], window, data)
    makeResizable(window.childNodes[3], window, data)
    // TODO handle needs to be outside the nav, otherwise resize happens together with draggable
    // // console.log(
    // data.draggable = true
    // mouseEnter(window.childNodes[1], ()=> data.draggable = true,'add')
    // console.log(window.childNodes[1].childNodes[7])
    // mouseEnter(window.childNodes[1].childNodes[7], ()=> {
    //   data.draggable = false
    //   data.resizable = true
    // },'add')
    // mouseLeave(window.childNodes[1].childNodes[7], ()=> data.resizable = false,'add')

    // mouseLeave(window.childNodes[1], ()=> data.draggable = false,'remove')
  }

  const createThumbsAndHoverEffects = (target, data) =>{
    target.innerHTML = createThumbs(data)
    target.childNodes.forEach((c, i)=>{
      if (i % 2 !== 0) {
        const targetNode = target.childNodes[i].childNodes[1].childNodes[1]
        const thumbData = data[+targetNode.dataset.id]
        mouseEnter(c, ()=> {
          if (!thumbData.interval){
            animateSvg({
              target: targetNode,
              data: thumbData,
              end: thumbData.frameNo - 1,
            })
          } 
        }, 'add')

        mouseLeave(c, ()=> {
          clearInterval(thumbData.interval)
          thumbData.interval = null
        }, 'add')
        c.addEventListener('click', ()=> openWindow(thumbData))
      }
    })
  }

  createThumbsAndHoverEffects(elements.menu, data)



  // console.log('test', data[0].svg())
}

window.addEventListener('DOMContentLoaded', init)

