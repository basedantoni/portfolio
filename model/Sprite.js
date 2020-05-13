const Sprite = function(data) {
    this.data = data
    this.errors = []
}

Sprite.prototype.validateUserInput = function() {
    if(this.data === '') {
        this.errors.push('Please enter Pokemon')
    }
}

module.exports = Sprite