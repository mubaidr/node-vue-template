module.exports = {
  /**
   *
   *
   * @param {String} name Model name
   * @returns {String} Removes cat|tbl|.js and converts to camelCase
   */
  getModelName: function (name) {
    const words = name
      .toLowerCase()
      .replace(/.js/, '')
      .split(/_/)

    let model = words[1]
    for (let i = 2; i < words.length; i++) {
      let word = words[i]
      model += word[0].toUpperCase() + word.substring(1)
    }

    return model
  }
}
