const Sprites = function(data) {
    this.data = data
    this.errors = []
}

Sprites.prototype.validateUserInput = () => {
    if(this.data === '') {
        this.errors.push('Please enter Pokemon')
    }
}

module.exports = Sprites