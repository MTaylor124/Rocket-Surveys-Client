'use strict'

const takeSurveysTemplate = require('../templates/take-surveys.handlebars')
const showSurveysTemplate = require('../templates/view-surveys.handlebars')
const store = require('./../store')

const getSurveysSuccess = data => {
  $('.content').html('')
  const usersSurveys = data.surveys.filter(survey => survey.owner === store.user._id)
  const showMySurveys = showSurveysTemplate({ surveys: usersSurveys })
  $('.content').show()
  $('.content').html(showMySurveys)
  if (!(showMySurveys)) {
    $('.content').html('<p class="listofresponses">You don\'t have any surveys. Use the drop down menu to make one now!</p>')
  }
  $('.dropdown-item').show()
  $('#auth').hide()
  $('#show-my-surveys').hide()
}

const takeSurveySuccess = data => {
  $('.content').html('')
  const showOthersSurveys = takeSurveysTemplate({ surveys: data.surveys })
  $('.content').html(showOthersSurveys)
  $('.dropdown-item').show()
  $('#take-surveys').hide()
}

const deleteSurveySuccess = (data) => {
  $('#authNotification').text('successfully deleted survey')
  setTimeout(function () {
    $('#authNotification').text('')
  }, 2000)
}
const deleteSurveyFailure = (data) => {
  $('#authNotification').text('unable to delete survey, bad request :(')
  setTimeout(function () {
    $('#authNotification').text('')
  }, 2000)
}

const updateSurveySuccess = (data) => {
  const showSurveysHtml = showSurveysTemplate({ surveys: data.surveys })
  $('.content').html(showSurveysHtml)
  $('body').removeClass('modal-open')
}

const createSurveySuccessful = () => {
  // Close the modal after a submit event
  $('#create-survey-modal').modal('hide')

  // Show a success modal
  $('#create-success-modal').modal('show')
  $('form').trigger('reset')
}

const failure = () => {
  $('#authNotification').text('an error occured')
  setTimeout(function () {
    $('#authNotification').text('')
  }, 2000)
  $('.modal').modal('hide')
}

module.exports = {
  getSurveysSuccess,
  deleteSurveySuccess,
  updateSurveySuccess,
  createSurveySuccessful,
  takeSurveySuccess,
  failure,
  deleteSurveyFailure
}
