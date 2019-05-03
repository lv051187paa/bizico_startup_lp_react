
export const register = () => {
  console.log(process.env.NODE_ENV);
  if(navigator.serviceWorker) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('cacheSW.js')
        .then(reg => console.log('Registrated'))
        .catch(err => console.log(`Some error: ${err}`))
    })
  }
}

