"use client"

import { useEffect } from "react"

export function MeteorShower() {
  useEffect(() => {
    const meteors = []

    for (let i = 0; i < 15; i++) {
      const meteor = document.createElement("div")
      meteor.className = "meteor"
      meteor.style.animationDelay = `${Math.random() * 5}s`
      meteor.style.animationDuration = `${2 + Math.random() * 3}s`
      meteor.style.top = `${Math.random() * 80}%`
      meteor.style.left = `-${5 + Math.random() * 15}%`
      document.body.appendChild(meteor)
      meteors.push(meteor)
    }

    const spawnMeteor = () => {
      const meteor = document.createElement("div")
      meteor.className = "meteor"
      meteor.style.animationDelay = "0s"
      meteor.style.animationDuration = `${2 + Math.random() * 3}s`
      meteor.style.top = `${Math.random() * 80}%`
      meteor.style.left = `-${5 + Math.random() * 15}%`
      document.body.appendChild(meteor)

      // Remove meteor after animation completes
      setTimeout(() => {
        if (document.body.contains(meteor)) {
          document.body.removeChild(meteor)
        }
      }, 5000)
    }

    const meteorInterval = setInterval(() => {
      spawnMeteor()
      // Set next spawn time randomly
      clearInterval(meteorInterval)
      setTimeout(
        () => {
          const newInterval = setInterval(
            () => {
              spawnMeteor()
            },
            500 + Math.random() * 2500,
          ) // 0.5-3 second intervals
          meteors.push(newInterval)
        },
        500 + Math.random() * 2500,
      )
    }, 1000)

    meteors.push(meteorInterval)

    return () => {
      meteors.forEach((meteor) => {
        if (typeof meteor === "object" && meteor.remove) {
          meteor.remove()
        } else if (typeof meteor === "number") {
          clearInterval(meteor)
        } else if (document.body.contains(meteor)) {
          document.body.removeChild(meteor)
        }
      })
    }
  }, [])

  return null
}
