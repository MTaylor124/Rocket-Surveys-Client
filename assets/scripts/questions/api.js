'use strict'

const config = require('../config')
const store = require('../store')

const createQuestion = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/questions',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

module.exports = {
  createQuestion

}
