// var React = require('react');

var CommentList = require('./CommentList.jsx');
var CommentForm = require('./CommentForm.jsx');

var CommentBox = React.createClass({
    getInitialState: function() {
        return {data: []};
    },

    updateData: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            
            success: function(data) {
                this.setState({data: data.data});
            }.bind(this),

            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        }); 
    },

    componentDidMount: function() {
        this.updateData();
        setInterval(this.updateData, this.props.interval);
    },

    render: function() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data}/>
                <CommentForm/>
            </div>
        );
    }
});

module.exports = CommentBox;