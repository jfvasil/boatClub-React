

const NewsAndRecapEmitter = () => {
    const listeners = []

    const subscribe = (listener) => {
      listeners.push(listener)
      return () => {
        const index = listeners.indexOf(listener)
        if (index !== -1) {
          listeners.splice(index, 1)
        }
      }
    }
  
    const emit = () => {
      listeners.forEach((listener) => listener())
    }
  
    return {
      subscribe,
      emit,
    }
}

const newsAndRecapEmitter = NewsAndRecapEmitter()

export default newsAndRecapEmitter