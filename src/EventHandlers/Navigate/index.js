import moveToLeft from './Left'
import moveToRight from './Right'
import onSwipe from '../Swipe'

export default ({ right, left }) => {
  // Navigate by mouse clicks
  right.addEventListener('click', () => moveToRight())
  left.addEventListener('click', () => moveToLeft())

  // Navigate by key arrows
  document.onkeydown = e => {
    switch (e.keyCode) {
      case 37:
        // Move to Intro by left arrow key
        moveToLeft()
        break
      case 39:
        // Move to Portfolio by right arrow key
        moveToRight()
        break

      default:
        break
    }
  }

  // Navigate by swipe
  onSwipe(document.body)({ toRight: moveToRight, toLeft: moveToLeft })
}
