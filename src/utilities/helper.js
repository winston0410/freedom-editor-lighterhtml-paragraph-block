const getSavedData = (savedData) => {
  if (savedData) {
    return savedData.data.text
  }
}

module.exports = {
  getSavedData
}
