// TODO: Create a real model, based on Mongoose or similar

module.exports = function(props) {
    this.title = props.title;
    this.tag = props.tag;
    this.description = props.description;
    this.coverPhoto = 'https://placeimg.com/640/480/any';
    this.imageCount = Math.floor(Math.random() * 1000);
};
