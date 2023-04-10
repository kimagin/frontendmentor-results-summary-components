'use strict'

//ToolBox
import {
  delay, // Asynchronus delay function : delay(time)
  log, // shorthand console.log : log()
  select, //Custom querrySelector : select(element, ?all[true:false])
  event, // Custom event listener : event(element,event,callback)
  classlist, // Class manipulator : classlist(element,action["+"(add),"-"(remove),"x"(toggle)],class(string or [])),
  debounce, // Debounce ( runs the function only after the specified delay ) : debounce(function,delay)
  throttle, // Throttle ( runs the function n times per specified amount time ) : throttle(function,interval)
  random, // Random number generator : random(min,max)
} from './utils'

//Imports
import Alpine from 'alpinejs'

// Setup before DOM loads
const initApp = async () => {
  // 🗻 Alpine modules
  window.Alpine = Alpine
  Alpine.data('data', Data)
  Alpine.start()

  // 🚩 JS Code comes here
}

//Alpine Database
function Data() {
  return {
    // Everything whe Alpine loads
    init() {
      let interval = setInterval(() => {
        if (this.score < this.result) {
          this.score++
        } else {
          clearInterval(interval)
        }
      }, 20)
    },
    appInfo: {
      title: 'Results Summary Components',
      version: `0.0.1`,
      author: `Iman Kimiaei`,
    },
    score: 0,
    result: 76,
    cards: [
      {
        id: 'cx1',
        type: 'reaction',
        title: 'Reaction',
        score: 80,
        icon: './images/icon-reaction.svg',
      },
      {
        id: 'cx2',
        type: 'memory',
        title: 'Memory',
        score: 92,
        icon: './images/icon-memory.svg',
      },
      {
        id: 'cx3',
        type: 'verbal',
        title: 'Verbal',
        score: 61,
        icon: './images/icon-verbal.svg',
      },
      {
        id: 'cx4',
        type: 'visual',
        title: 'Visual',
        score: 72,
        icon: './images/icon-visual.svg',
      },
    ],
    progressBar(element, parent) {
      element.classList.add(parent.classList[1])
      const score = element.dataset.score
      let number = 0
      const progressInterval = setInterval(async () => {
        if (number < score) {
          element.style.width = number + '%'
          number++
        } else {
          clearInterval(progressInterval)
        }
      }, 10)
    },
  }
}

event(document, 'DOMContentLoaded', initApp)
