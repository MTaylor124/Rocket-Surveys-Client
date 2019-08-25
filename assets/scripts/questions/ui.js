'use strict'

const takeQuestionsTemplate = require('../templates/take-questions.handlebars')
// const showSurveysTemplate = require('../templates/view-surveys.handlebars')
const showQuestionsTemplate = require('../templates/view-questions.handlebars')
const store = require('./../store')

const getQuestionSuccess = data => {
  $('.content').html('')
  const usersQuestions = data.questions.filter(question => question.owner === store.user._id)
  const showMyQuestions = showQuestionsTemplate({ questions: usersQuestions })
  $('.content').show()
  $('.content').html(showMyQuestions)
  $('.dropdown-item').show()
  $('#show-my-questions').hide()
}

const createQuestionSuccessful = () => {
  // Close the modal after a submit event
  $('#create-question-modal').modal('hide')

  // Show a success modal
  $('#create-question-success-modal').modal('show')
  $('form').trigger('reset')
}

const deleteQuestionSuccess = (data) => {
  $('#authNotification').text('successfully deleted question')
  setTimeout(function () {
    $('#authNotification').text('')
  }, 3000)
}
const deleteQuestionFailure = (data) => {
  $('#authNotification').text('unable to delete question, bad request :(')
  setTimeout(function () {
    $('#authNotification').text('')
  }, 3000)
}

const takeQuestionSuccess = data => {
  $('.content').html('')
  const showAllQuestions = takeQuestionsTemplate({ questions: data.questions })
  $('.dropdown-item').show()
  $('#take-questions').hide()
  $('.content').html(showAllQuestions)
}

module.exports = {
  createQuestionSuccessful,
  getQuestionSuccess,
  deleteQuestionSuccess,
  deleteQuestionFailure,
  takeQuestionSuccess
}
