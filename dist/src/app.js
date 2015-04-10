(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./src/js/App.jsx":[function(require,module,exports){
// var React = require('react');

var CommentBox = require('./components/CommentBox.jsx');

React.render(
    React.createElement(CommentBox, {url: "/data", interval: 1000}),
    document.getElementById('react')
);

},{"./components/CommentBox.jsx":"/Volumes/Project/learn-react/day1/react-start/src/js/components/CommentBox.jsx"}],"/Volumes/Project/learn-react/day1/react-start/src/js/components/Comment.jsx":[function(require,module,exports){
var Comment = React.createClass({displayName: "Comment",

    render: function() {
        return (
            React.createElement("div", {className: "comment"}, 
                React.createElement("h3", {className: "commentAuthor"}, 
                    this.props.author
                ), 

                React.createElement("p", {className: "commentAuthor"}, 
                    this.props.content
                )
            )
        );
    }

});

module.exports = Comment;

},{}],"/Volumes/Project/learn-react/day1/react-start/src/js/components/CommentBox.jsx":[function(require,module,exports){
// var React = require('react');

var CommentList = require('./CommentList.jsx');
var CommentForm = require('./CommentForm.jsx');

var CommentBox = React.createClass({displayName: "CommentBox",
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
            React.createElement("div", {className: "commentBox"}, 
                React.createElement("h1", null, "Comments"), 
                React.createElement(CommentList, {data: this.state.data}), 
                React.createElement(CommentForm, null)
            )
        );
    }
});

module.exports = CommentBox;

},{"./CommentForm.jsx":"/Volumes/Project/learn-react/day1/react-start/src/js/components/CommentForm.jsx","./CommentList.jsx":"/Volumes/Project/learn-react/day1/react-start/src/js/components/CommentList.jsx"}],"/Volumes/Project/learn-react/day1/react-start/src/js/components/CommentForm.jsx":[function(require,module,exports){
// var React = require('react');

var CommentForm = React.createClass({displayName: "CommentForm",

    render: function() {
        return (
            React.createElement("div", {className: "commentForm"}, 
                "I am a comment form!"
            )
        );
    }

});

module.exports = CommentForm;

},{}],"/Volumes/Project/learn-react/day1/react-start/src/js/components/CommentList.jsx":[function(require,module,exports){
var Comment = require('./Comment.jsx');

var CommentList = React.createClass({displayName: "CommentList",

    render: function() {
        var commentNodes = this.props.data.map(function(comment) {
            return (
                React.createElement(Comment, {author: comment.author, content: comment.content})
            )
        })
        return (
            React.createElement("div", {className: "commentList"}, 
                commentNodes
            )
        );
    }

});

module.exports = CommentList;

},{"./Comment.jsx":"/Volumes/Project/learn-react/day1/react-start/src/js/components/Comment.jsx"}]},{},["./src/js/App.jsx"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVm9sdW1lcy9Qcm9qZWN0L2xlYXJuLXJlYWN0L2RheTEvcmVhY3Qtc3RhcnQvc3JjL2pzL0FwcC5qc3giLCIvVm9sdW1lcy9Qcm9qZWN0L2xlYXJuLXJlYWN0L2RheTEvcmVhY3Qtc3RhcnQvc3JjL2pzL2NvbXBvbmVudHMvQ29tbWVudC5qc3giLCIvVm9sdW1lcy9Qcm9qZWN0L2xlYXJuLXJlYWN0L2RheTEvcmVhY3Qtc3RhcnQvc3JjL2pzL2NvbXBvbmVudHMvQ29tbWVudEJveC5qc3giLCIvVm9sdW1lcy9Qcm9qZWN0L2xlYXJuLXJlYWN0L2RheTEvcmVhY3Qtc3RhcnQvc3JjL2pzL2NvbXBvbmVudHMvQ29tbWVudEZvcm0uanN4IiwiL1ZvbHVtZXMvUHJvamVjdC9sZWFybi1yZWFjdC9kYXkxL3JlYWN0LXN0YXJ0L3NyYy9qcy9jb21wb25lbnRzL0NvbW1lbnRMaXN0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLGdDQUFnQzs7QUFFaEMsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLDZCQUE2QixDQUFDLENBQUM7O0FBRXhELEtBQUssQ0FBQyxNQUFNO0lBQ1Isb0JBQUMsVUFBVSxFQUFBLENBQUEsQ0FBQyxHQUFBLEVBQUcsQ0FBQyxPQUFBLEVBQU8sQ0FBQyxRQUFBLEVBQVEsQ0FBRSxJQUFLLENBQUUsQ0FBQTtJQUN6QyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztDQUNuQzs7O0FDUEQsSUFBSSw2QkFBNkIsdUJBQUE7O0lBRTdCLE1BQU0sRUFBRSxXQUFXO1FBQ2Y7WUFDSSxvQkFBQSxLQUFJLEVBQUEsQ0FBQSxDQUFDLFNBQUEsRUFBUyxDQUFDLFNBQVUsQ0FBQSxFQUFBO2dCQUNyQixvQkFBQSxJQUFHLEVBQUEsQ0FBQSxDQUFDLFNBQUEsRUFBUyxDQUFDLGVBQWdCLENBQUEsRUFBQTtvQkFD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QUFDLE1BQUEsRUFBTSxDQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUMsQ0FBQyxPQUFBLEVBQU8sQ0FBRSxPQUFPLENBQUMsT0FBUSxDQUFFLENBQVUsQ0FBQTthQUN6RTtTQUNKLENBQUM7UUFDRjtZQUNJLG9CQUFBLEtBQUksRUFBQSxDQUFBLENBQUMsU0FBQSxFQUFTLENBQUMsYUFBYyxDQUFBLEVBQUE7Z0JBQ3hCLFlBQWE7WUFDWixDQUFBO1VBQ1I7QUFDVixLQUFLOztBQUVMLENBQUMsQ0FBQyxDQUFDOztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsV0FBVyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyB2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgQ29tbWVudEJveCA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9Db21tZW50Qm94LmpzeCcpO1xuXG5SZWFjdC5yZW5kZXIoXG4gICAgPENvbW1lbnRCb3ggdXJsPScvZGF0YScgaW50ZXJ2YWw9ezEwMDB9Lz4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYWN0Jylcbik7IiwidmFyIENvbW1lbnQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbW1lbnQnPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J2NvbW1lbnRBdXRob3InPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5hdXRob3J9XG4gICAgICAgICAgICAgICAgPC9oMz5cblxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nY29tbWVudEF1dGhvcic+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb21tZW50OyIsIi8vIHZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBDb21tZW50TGlzdCA9IHJlcXVpcmUoJy4vQ29tbWVudExpc3QuanN4Jyk7XG52YXIgQ29tbWVudEZvcm0gPSByZXF1aXJlKCcuL0NvbW1lbnRGb3JtLmpzeCcpO1xuXG52YXIgQ29tbWVudEJveCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4ge2RhdGE6IFtdfTtcbiAgICB9LFxuXG4gICAgdXBkYXRlRGF0YTogZnVuY3Rpb24oKSB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IHRoaXMucHJvcHMudXJsLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGE6IGRhdGEuZGF0YX0pO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpLFxuXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oeGhyLCBzdGF0dXMsIGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IodGhpcy5wcm9wcy51cmwsIHN0YXR1cywgZXJyLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICAgIH0pOyBcbiAgICB9LFxuXG4gICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZURhdGEoKTtcbiAgICAgICAgc2V0SW50ZXJ2YWwodGhpcy51cGRhdGVEYXRhLCB0aGlzLnByb3BzLmludGVydmFsKTtcbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudEJveFwiPlxuICAgICAgICAgICAgICAgIDxoMT5Db21tZW50czwvaDE+XG4gICAgICAgICAgICAgICAgPENvbW1lbnRMaXN0IGRhdGE9e3RoaXMuc3RhdGUuZGF0YX0vPlxuICAgICAgICAgICAgICAgIDxDb21tZW50Rm9ybS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb21tZW50Qm94OyIsIi8vIHZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBDb21tZW50Rm9ybSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRGb3JtXCI+XG4gICAgICAgICAgICAgICAgSSBhbSBhIGNvbW1lbnQgZm9ybSFcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tbWVudEZvcm07IiwidmFyIENvbW1lbnQgPSByZXF1aXJlKCcuL0NvbW1lbnQuanN4Jyk7XG5cbnZhciBDb21tZW50TGlzdCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjb21tZW50Tm9kZXMgPSB0aGlzLnByb3BzLmRhdGEubWFwKGZ1bmN0aW9uKGNvbW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPENvbW1lbnQgYXV0aG9yPXtjb21tZW50LmF1dGhvcn0gY29udGVudD17Y29tbWVudC5jb250ZW50fSA+PC9Db21tZW50PlxuICAgICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50TGlzdFwiPlxuICAgICAgICAgICAgICAgIHtjb21tZW50Tm9kZXN9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1lbnRMaXN0OyJdfQ==
