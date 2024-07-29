import { useState, useEffect } from 'react'

const texts = ['Casa 1307', 'Primeira', 'Melhor']

export function AnimatedText() {
  const [index, setIndex] = useState(0)
  const [animationClass, setAnimationClass] = useState('slide-in-right')

  useEffect(() => {
    const animateInterval = setInterval(() => {
      setAnimationClass('animate-slide-out-left')
      setTimeout(() => {
        setIndex((index) => (index + 1) % texts.length)
        setAnimationClass('animate-slide-in-right')
      }, 1000) // Duração da animação
    }, 3000) // Muda o texto a cada 3 segundos

    return () => clearInterval(animateInterval)
  }, [])

  return <p className={`transition-all ${animationClass}`}>{texts[index]}</p>
}
