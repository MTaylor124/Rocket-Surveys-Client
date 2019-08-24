'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')

let sid = ''
//
const onSettings = event => {
  sid = $(event.target).data('id')
}

const onTakeQuestions = event => {
  event.preventDefault()
  $('#content').html('')
  api.takeQuestions()
    .then(ui.takeQuestionSuccess)
    .catch(ui.failure)
}

const onGetQuestions = (event) => {
  api.getQuestions()
    .then(ui.getQuestionSuccess)
    .catch(ui.failure)
}

const onCreateQuestion = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.createQuestion(formData)
    .then(ui.createQuestionSuccessful)
    .then(() => onGetQuestions(event))
    .catch(ui.failure)
}

const onDeleteQuestion = (event) => {
  const id = sid
  api.deleteQuestion(id)
    .then(() => {
      onGetQuestions(event)
      $('.modal-backdrop').hide()
    })
    .then(ui.deleteQuestionSuccess)
    .catch(ui.deleteQuestionFailure)
}

const onUpdateQuestion = (event) => {
  event.preventDefault()
  const id = sid
  const form = event.target
  const formData = getFormFields(form)
  api.updateQuestion(id, formData)
    .then(() => {
      onGetQuestions(event)
      $('#settings-modal').modal('hide')
      $('.modal-backdrop').hide()
    },
    $('#authNotification').text('Question updated!')
    )
    .then(setTimeout(function () {
      $('#authNotification').text('')
    }, 2000))
    .catch(ui.failure)
}

const addQuestionHandlers = () => {
  $('body').on('click', '.settings', onSettings)
  $('body').on('submit', '.edit-question', onUpdateQuestion)
  $('body').on('click', '.delete-question-button', onDeleteQuestion)
  $('#create-question').on('submit', onCreateQuestion)
  // $('body').on('click', '.survey-response', onAnswerQuestion)
}

module.exports = {
  addQuestionHandlers,
  onCreateQuestion,
  onGetQuestions,
  onDeleteQuestion,
  onTakeQuestions
  // onTakeQuestions,
  // onAnswerSurvey
}
