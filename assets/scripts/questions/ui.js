'use strict'

const takeQuestionsTemplate = require('../templates/take-questions.handlebars')
// const showSurveysTemplate = require('../templates/view-surveys.handlebars')
const showQuestionsTemplate = require('../templates/view-questions.handlebars')
const store = require('./../store')

const getQuestionSuccess = data => {
  $('.content').html('')
  // console.log(data.questions)
  // const userAnswers =
  // for (let i = 0; i < data.questions.length; i++) {
  //
  // }
  // console.log(data.questions)
  // const questionResponses = f
  const usersQuestions = data.questions.filter(question => question.owner === store.user._id)
  const showMyQuestions = showQuestionsTemplate({ questions: usersQuestions })
  $('.content').show()
  $('.content').html(showMyQuestions)
  // $('#auth').hide()
  // $('#show-my-surveys').hide()
  // $('#take-surveys').show()
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
  console.log(data.questions)
  const showAllQuestions = takeQuestionsTemplate({ questions: data.questions })
  $('.content').html(showAllQuestions)
  // $('#show-my-surveys').show()
  // $('#take-surveys').hide()
}

module.exports = {
  createQuestionSuccessful,
  getQuestionSuccess,
  deleteQuestionSuccess,
  deleteQuestionFailure,
  takeQuestionSuccess
}
