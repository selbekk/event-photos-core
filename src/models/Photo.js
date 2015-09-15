// TODO: Create a real model, based on Mongoose or similar

module.exports = function(props) {
    this.eventTag = props.eventTag;
    this.url = 'https://placeimg.com/640/480/any?random=' + Math.floor(Math.random() * 1000);
    this.description = props.description || 'Description text for a given image';
    this.author = props.author || 'Author';
    this.dateAdded = new Date();
    this.likes = Math.floor(Math.random() * 1000);
};
