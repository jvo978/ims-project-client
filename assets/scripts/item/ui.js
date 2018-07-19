'use strict'
const store = require('../store')

const showItemsTemplate = require('../templates/item-listing.handlebars')

const createItemSuccess = function (data) {
  $('#createItemModal').modal('hide')
  $('#create-item-form')[0].reset()
}

const createItemError = function () {
  $('#createModalLabel').css('color', 'red')
  $('#createModalLabel').html('Something went wrong creating item try again!')
}

const getItemsSuccess = (data) => {
  const yourItems = data.items.filter((data) => {
    if (data.owner === store.user._id) {
      return data
    }
  })
  const showNewItemsHtml = showItemsTemplate({ items: yourItems })
  $('#inventoryList').html(showNewItemsHtml)
}

const getItemsFailure = function () {
  $('#itemTitle').css('color', 'red')
  $('#itemTitle').html('Something went wrong loading items try again!')
}

const deleteItemSuccess = function () {
  console.log('you have succesfully deleted an item!')
}
const deleteItemError = function () {
  $('#itemTitle').css('color', 'red')
  $('#itemTitle').html('Something went wrong deleting item try again!')
}

const updateItemSuccess = function (itemId) {
  $(`[data-id="modal${itemId}"]`).modal('hide')
  $('.modal-backdrop').remove()
  $('.update-form')[0].reset()
}
const updateItemError = function () {
  $('.modal-title').css('color', 'red')
  $('.modal-title').html('Something went wrong creating item try again!')
}

const resetUiHandleing = function () {
  $('.modal-title').css('color', 'black')
  $('.modal-title').html('Update Item')
  $('#itemTitle').css('color', 'white')
  $('#itemTitle').html('Item Inventory')
  $('#createModalLabel').css('color', 'black')
  $('#createModalLabel').html('Create Item')
}

module.exports = {
  createItemSuccess,
  createItemError,
  deleteItemSuccess,
  deleteItemError,
  getItemsSuccess,
  getItemsFailure,
  updateItemError,
  updateItemSuccess,
  resetUiHandleing
}
