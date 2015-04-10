var Comment = require('./Comment.jsx');

var CommentList = React.createClass({

    render: function() {
        var commentNodes = this.props.data.map(function(comment) {
            return (
                <Comment author={comment.author} content={comment.content} ></Comment>
            )
        })
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }

});

module.exports = CommentList;