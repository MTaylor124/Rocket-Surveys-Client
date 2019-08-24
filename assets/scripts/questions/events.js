'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')

// let sid = ''
//
// const onSettings = event => {
//   sid = $(event.target).data('id')
// }

// const onTakeSurveys = event => {
//   event.preventDefault()
//   $('#content').html('')
//   api.takeSurveys()
//     .then(ui.takeSurveySuccess)
//     .catch(ui.failure)
// }

const onCreateQuestion = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.createQuestion(formData)
    .then(console.log)
    .then(ui.createQuestionSuccessful)
    // .then(() => onGetSurveys(event))
    .catch(ui.failure)
}

const addQuestionHandlers = () => {
  // $('body').on('click', '.settings', onSettings)
  // $('body').on('submit', '.edit-survey', onUpdateSurvey)
  // $('body').on('click', '.delete-survey-button', onDeleteSurvey)
  $('#create-question').on('submit', onCreateQuestion)
  // $('body').on('click', '.survey-response', onAnswerSurvey)
}

module.exports = {
  addQuestionHandlers,
  onCreateQuestion
  // onGetSurveys,
  // onTakeSurveys,
  // onAnswerSurvey
}
