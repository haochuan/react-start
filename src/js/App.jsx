// var React = require('react');

var CommentBox = require('./components/CommentBox.jsx');

React.render(
    <CommentBox url='/data' interval={1000}/>,
    document.getElementById('react')
);