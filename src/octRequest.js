import axios from 'axios'

const octRequest = function(octHandler) {
  const instance = axios.create({
    url: '',
    headers: {
      'X-OCTOBER-REQUEST-HANDLER': octHandler,
      'X-Requested-With': 'XMLHttpRequest'
    },
    responseType: 'json'
  })

  return instance.request({ method: 'post' })
}

export default octRequest