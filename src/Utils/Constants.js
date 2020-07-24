export
    const BASE_URL = 'http://localhost:5555/apiV1'

export const formatDate = (date) => { 
    const miniDate = date.substr(0, 10)
    return miniDate.replace(/^(\d+)-(\d+)-(\d+)$/, '$2.$3.$1')    
  }