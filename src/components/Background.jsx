import React from 'react'

import Sketch from "react-p5";
import useWindowDimensions from '../hooks/useWindowDimensions';

const Background = () => {

  const CANVAS_MULTIPLIER = 2

  const CANVAS_WIDTH = useWindowDimensions().width * CANVAS_MULTIPLIER // times CANVAS_MULTIPLIER to fix canvas cutting short on upscaling
  const CANVAS_HEIGHT = useWindowDimensions().height * CANVAS_MULTIPLIER

  let bubbles = []

  const COLORS = ["#E5B8F4", "#d2a1e3"] // "#810CA8""#C147E9", 
  const BACKGROUND_COLOR = "rgba(52, 24, 61, 1)" // rgba(45, 3, 59, 1)

  const AMOUNT_OF_BUBBLES = 30
  const BLUR_PIXELS = 0

  const MIN_SPEED = 1
  const MAX_SPEED = 3
  const MAX_SIDE_SPEED = 1

  const MIN_RADIUS = 10
  const MAX_RADIUS = 200

  const setup = (p5, canvasParentRef) => {
		// use parent to render the canvas in this ref
		// (without that p5 will render the canvas outside of your component)

		p5.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT).parent(canvasParentRef);
	};

	const draw = (p5) => {
		// NOTE: Do not use setState in the draw function or in functions that are executed
		// in the draw function...
		// please use normal variables or class properties for these purposes

    class Bubble {
      show() {
        p5.noStroke()
        p5.fill(COLORS[this.colorIndex])
        p5.ellipse(this.x, this.y, this.radius * 2)
      }

      startSpawn() {
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

    const randomIntFromInterval = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min)
    }

    p5.frameRate(60)
    //p5.drawingContext.filter = 'blur(' + BLUR_PIXELS + 'px)'

    p5.background(BACKGROUND_COLOR)

    while (bubbles.length < AMOUNT_OF_BUBBLES) {
      bubbles.push(new Bubble())
      bubbles[bubbles.length - 1].startSpawn()
    }

    for (let i = 0; i <= bubbles.length - 1; i++) {
      bubbles[i].move()
      bubbles[i].show()
    }

	};

  return (
    <Sketch setup={setup} draw={draw} className='fixed -z-10 blur-4xl scale-150' />
  )
}

export default Background