
import React from 'react';
import InputComment from './formCSS';
import Input from 'containers/HomePage/Input';
import { connect } from 'react-redux';
import { addComment, addCommentIdArticle } from 'containers/HomePage/actions';


class CommentForm extends React.Component {

    //  static propTypes = {

    // };

  state = {

    id: '',
    user: '',
    text: '',
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p><lable>PLACE FOR COMMENTS</lable></p>
        <p><Input
          value={this.state.user}
          onChange={this.handleChange('user')}
          className={this.getClassName('user')}
          placeholder="Username"
        /></p>
        <p><Input
          value={this.state.text} size="60" name="comment"
          onChange={this.handleChange('text')}
          className={this.getClassName('text')}
          placeholder="Comment"
        /></p>
        <p><InputComment type="submit" value="Add Сomment" /> &nbsp;
          <InputComment type="reset" value="Reset" /> </p>
      </form>
    );
  }

  handleSubmit = (ev) => {
    const uid = () => Math.random().toString(34).slice(2);
    ev.preventDefault();
    this.props.addComment(this.state);
    this.props.addCommentIdArticle(this.state.id);
    this.setState({
      id: uid(),
      user: '',
      text: '',
    });
  }

  getClassName = (type) => this.state[type].length && this.state[type].length < limits[type].min
        ? 'form-input__error' : ''

  handleChange = (type) => (ev) => {
    const { value } = ev.target;
    if (value.length > limits[type].max) return;
    this.setState({
      [type]: value,
    });
  }

}

const limits = {
  user: {
    min: 3,
    max: 25,
  },
  text: {
    min: 5,
    max: 50,
  },
};


function mapDispatchToProps(dispatch, ownProps) {
    // console.log(ownProps);
  return {
    addComment: (comment) => dispatch(addComment(comment)),
    addCommentIdArticle: (randomCommentId) => dispatch(addCommentIdArticle(randomCommentId, ownProps)),

  };
}

// export default CommentForm
export default connect(null, mapDispatchToProps)(CommentForm);
