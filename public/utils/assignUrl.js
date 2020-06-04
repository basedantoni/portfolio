// Assigns the url property to an object
exports.assignUrl = project => {
  project['image-url'] = project.images
              .flat()
              .map(item => item.resolutions.thumbnail.url)
}

