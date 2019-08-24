'use strict'

// const takeSurveysTemplate = require('../templates/take-surveys.handlebars')
// const showSurveysTemplate = require('../templates/view-surveys.handlebars')
// const store = require('./../store')

const createQuestionSuccessful = () => {
  // Close the modal after a submit event
  $('#create-question-modal').modal('hide')

  // Show a success modal
  $('#create-question-success-modal').modal('show')
  $('form').trigger('reset')
}

module.exports = {
  createQuestionSuccessful
}
