var Comment = React.createClass({

    render: function() {
        return (
            <div className='comment'>
                <h3 className='commentAuthor'>
                    {this.props.author}
                </h3>

                <p className='commentAuthor'>
                    {this.props.content}
                </p>
            </div>
        );
    }

});

module.exports = Comment;