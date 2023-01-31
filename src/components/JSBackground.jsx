import React, { useEffect, useRef } from 'react'

const JSBackground = ({ windowWidth, windowHeight }) => {

  const CANVAS_WIDTH = windowWidth
  const CANVAS_HEIGHT = windowHeight
  let canvasRef = useRef(null)

  let bubbles = []

  const COLORS = ["#383855", "#37172D"] //? Colors of the bubbles
  const BACKGROUND_COLOR = "#201525" //? Background color 

  /*
  Light yellow: #FFF9C4
  Light blue: #81D4FA
  Light green: #C5E1A5
  Light pink: #F48FB1

  Light blue (#87CEFA) and deep blue (#00008B)
  Light gray (#DCDCDC) and deep gray (#2F4F4F)
  Light peach (#FFE5B4) and deep orange (#FF8C00)
  Light mint green (#98FB98) and deep green (#006400)
  Light lavender (#E6E6FA) and deep purple (#9370DB)
  */

  const AMOUNT_OF_BUBBLES = 13
  const BLUR_PIXELS = 100

  const MIN_SPEED = 1
  const MAX_SPEED = 2
  const MAX_SIDE_SPEED = 1

  const MIN_RADIUS = CANVAS_WIDTH / 50
  const MAX_RADIUS = CANVAS_WIDTH / 10

  useEffect(() => {
    // create canvas
    const canvas = document.createElement("canvas");
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;
    canvasRef.current.appendChild(canvas);

    const ctx = canvas.getContext("2d");

    // create bubbles
    class Bubble {
      show() {
        ctx.fillStyle = COLORS[this.colorIndex]
        ctx.beginPath()
        ctx.ellipse(this.x, this.y, this.radius * 2, this.radius * 2, 0, 0, Math.PI * 2);
        ctx.fill()
      }

      startSpawn() {
        this.spawnPoint = Math.ceil(randomIntFromInterval(0, 4))
        this.colorIndex = randomIntFromInterval(0, COLORS.length - 1)

        this.radius = randomIntFromInterval(MIN_RADIUS, MAX_RADIUS)
        this.sideVelocity = Math.random()*2*MAX_SIDE_SPEED - MAX_SIDE_SPEED // ?
        this.speed = randomIntFromInterval(MIN_SPEED, MAX_SPEED)

        this.x = randomIntFromInterval(0, CANVAS_WIDTH)
        this.y = randomIntFromInterval(0, CANVAS_HEIGHT)
      }

      respawn() {
        this.spawnPoint = Math.ceil(randomIntFromInterval(0, 4))
        this.colorIndex = randomIntFromInterval(0, COLORS.length - 1)

        this.radius = randomIntFromInterval(MIN_RADIUS, MAX_RADIUS)
        this.sideVelocity = Math.random()*2*MAX_SIDE_SPEED - MAX_SIDE_SPEED // ?
        this.speed = randomIntFromInterval(MIN_SPEED, MAX_SPEED)

        if (this.spawnPoint == 1) { // TOP
          this.x = randomIntFromInterval(this.radius, CANVAS_WIDTH - this.radius)
          this.y = - this.radius - BLUR_PIXELS

        } else if (this.spawnPoint == 2) { // RIGHT
          this.x = CANVAS_WIDTH + this.radius + BLUR_PIXELS
          this.y = randomIntFromInterval(this.radius, CANVAS_HEIGHT)

        } else if (this.spawnPoint == 3) { // BOTTOM
          this.x = randomIntFromInterval(this.radius, CANVAS_WIDTH - this.radius)
          this.y = CANVAS_HEIGHT + this.radius + BLUR_PIXELS

        } else if (this.spawnPoint == 4) { // TOP
          this.y = randomIntFromInterval(this.radius, CANVAS_HEIGHT - this.radius)
          this.x = - this.radius - BLUR_PIXELS
        }
      }

      move() {
        if (this.spawnPoint == 1) { // TOP
          this.y += this.speed
          this.x += this.sideVelocity

          if (this.y > CANVAS_HEIGHT + this.radius + BLUR_PIXELS ||
              this.x - this.radius - BLUR_PIXELS > CANVAS_WIDTH ||
              this.x < - this.radius - BLUR_PIXELS) { // if outside of canvas
            this.respawn()
          }

        } else if (this.spawnPoint == 2) { // RIGHT
          this.x -= this.speed
          this.y += this.sideVelocity

          if (this.y > CANVAS_HEIGHT + this.radius + BLUR_PIXELS ||
              this.x < - this.radius - BLUR_PIXELS||
              this.y < - this.radius - BLUR_PIXELS) { // if outside of canvas
            this.respawn()
          }

        } else if (this.spawnPoint == 3) { // BOTTOM
          this.y -= this.speed
          this.x += this.sideVelocity

          if (this.x - this.radius - BLUR_PIXELS > CANVAS_WIDTH ||
              this.x < - this.radius - BLUR_PIXELS||
              this.y < - this.radius - BLUR_PIXELS) { // if outside of canvas
            this.respawn()
          }

        } else if (this.spawnPoint == 4) { // LEFT
          this.x += this.speed
          this.y += this.sideVelocity

          if (this.y > CANVAS_HEIGHT + this.radius + BLUR_PIXELS ||
              this.x - this.radius - BLUR_PIXELS > CANVAS_WIDTH ||
              this.y < - this.radius - BLUR_PIXELS) { // if outside of canvas
            this.respawn()
          }

        }

      }
    }

    // animation loop
    function animate() {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

      // drawing code
      ctx.fillStyle = BACKGROUND_COLOR
      ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

      while (bubbles.length < AMOUNT_OF_BUBBLES) {
        bubbles.push(new Bubble())
        bubbles[bubbles.length - 1].startSpawn()
      }

      for (let i = 0; i <= bubbles.length - 1; i++) {
        bubbles[i].move()
        bubbles[i].show()
      }
    }

    animate()

  }, [])

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  return (
    <div ref={canvasRef} className='fixed scale-150 -z-10 blur-4xl'/>
  )
}

export default JSBackground