'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const itemUi = require('./ui.js')
const itemApi = require('./api.js')

const onCreateItem = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  itemApi.createItem(data)
    .then(itemUi.createItemSuccess)
    .then(onGetItems)
    .catch(itemUi.createItemError)
}
const onGetItems = () => {
  itemApi.getItems()
    .then(itemUi.getItemsSuccess)
    .catch(itemUi.getItemsFailure)
}

const onDeleteItem = function (event) {
  event.preventDefault()
  const itemId = $(event.target).attr('data-id')
  itemApi.deleteItem(itemId)
    .then(itemUi.deleteItemSuccess)
    .then(onGetItems)
    .catch(itemUi.deleteItemError)
}

const onUpdateItem = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const itemId = $(event.target).attr('data-id')
  console.log('update id: ', itemId)
  itemApi.updateItem(data, itemId)
    .then(itemUi.updateItemSuccess)
    .then(onGetItems)
    .catch(itemUi.updateItemError)
}

const addHandlers = () => {
  $('#inventoryList').on('click', '.deleteButton', onDeleteItem)
  $('#inventoryList').on('submit', '.update-form', onUpdateItem)
}

module.exports = {
  onCreateItem,
  onDeleteItem,
  onGetItems,
  addHandlers
}
