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

const getQuestions = function () {
  return $.ajax({
    url: config.apiUrl + '/questions',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteQuestion = function (id) {
  return $.ajax({
    url: config.apiUrl + '/questions/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateQuestion = function (id, formData) {
  return $.ajax({
    url: config.apiUrl + '/questions/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'question': {
        'question': formData.question.question
      }
    }
  })
}

const takeQuestions = function () {
  return $.ajax({
    url: config.apiUrl + '/questions',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
module.exports = {
  createQuestion,
  getQuestions,
  deleteQuestion,
  updateQuestion,
  takeQuestions
}
