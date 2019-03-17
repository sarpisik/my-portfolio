export default element => move => {
  let touchSurface = element,
    startX,
    startY,
    dist,
    threshold = 150, //required min distance traveled to be considered swipe
    allowedTime = 1000, // maximum time allowed to travel that distance
    elapsedTime,
    startTime

  const handleSwipe = dist => {
    switch (true) {
      case dist < 0:
        // Swipe Right
        move.toRight()
        break
      case dist > 0:
        // Swipe Left
        move.toLeft()
        break
      default:
        break
    }
  }

  touchSurface.addEventListener(
    'touchstart',
    e => {
      const touchObj = e.changedTouches[0]
      dist = 0
      startX = touchObj.pageX
      startY = touchObj.pageY
      startTime = new Date().getTime() // record time when finger first makes contact with surface
      // e.preventDefault()
    },
    false
  )

  // touchSurface.addEventListener(
  //   'touchmove',
  //   function(e) {
  //     e.preventDefault() // prevent scrolling when inside DIV
  //   },
  //   false
  // )

  touchSurface.addEventListener(
    'touchend',
    e => {
      const touchObj = e.changedTouches[0]
      dist = touchObj.pageX - startX // get total dist traveled by finger while in contact with surface
      elapsedTime = new Date().getTime() - startTime // get time elapsed
      // check that elapsed time is within specified,
      // horizontal dist traveled >= threshold,
      // and vertical dist traveled <= 100

      const isSwipe =
        elapsedTime <= allowedTime &&
        (dist < 0 ? dist * -1 : dist) >= threshold &&
        Math.abs(touchObj.pageY - startY) <= 100

      isSwipe && handleSwipe(dist)
      // e.preventDefault()
    },
    false
  )
}
