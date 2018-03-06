import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { addCounter, resCounter, changeUsername, onAsync } from 'containers/HomePage/actions';
import { makeSelectCounter, makeSelectUsername, makeArticlesStore5 } from 'containers/HomePage/selectors';
import H1 from 'components/H1';
import H3 from 'components/H3';
import HeaderLink from 'components/Header/HeaderLink';
// create User's Form
import { FormattedMessage } from 'react-intl';
import messages from 'containers/HomePage/messages';
import AtPrefix from 'containers/HomePage/AtPrefix';
import Form from 'containers/HomePage/Form';
import Input from 'containers/HomePage/Input';

const denStyle = { color: 'blue', marginTop: '-1em' };

class Counter extends React.Component {
  static propTypes = {
            // counter: PropTypes.number.isRequired,
  }

  render() {
    const { counter, articlesStore5 } = this.props;

    return (
      <div>
        <H1 style={denStyle}>{counter}</H1>
        <H3>Data from API : {articlesStore5}</H3>
        <HeaderLink onClick={this.decrement.bind(this)}>-</HeaderLink>
        <HeaderLink onClick={this.increment.bind(this)}>+</HeaderLink>
        <HeaderLink onClick={this.reset.bind(this)}>R</HeaderLink>
        {/* <HeaderLink onClick={this.onAsyncFanction.bind(this)} > hello </HeaderLink>*/}
        <br /><br />
        <Form onSubmit={this.props.onSubmitForm}>
          <label htmlFor="username">
            <FormattedMessage {...messages.trymeMessage} />
            <AtPrefix>
              <FormattedMessage {...messages.trymeAtPrefix} />
            </AtPrefix> &nbsp;&nbsp;
            <Input
              id="username"
              type="text"
              placeholder="new massage"
              value={this.props.username}
              onChange={this.props.onChangeUsername}
            />
          </label>
        </Form>
        <br /><br />
      </div>
    );
  }

  increment() {
    this.props.addCounter(1);
  }
  decrement() {
    this.props.addCounter(-1);
  }
  reset() {
    // const {resCounter} = this.props;
    this.props.resCounter(0);
  }

 //  onAsyncFanction() {
 //   this.props.onAsync()
 // }

}

const mapStateToProps = createStructuredSelector({
  counter: makeSelectCounter(),
  articlesStore5: makeArticlesStore5(),
  username: makeSelectUsername(),
});

function mapDispatchToProps(dispatch) {
  return {

    addCounter: (value) => dispatch(addCounter(value)),
    resCounter: (value) => dispatch(resCounter(value)),
    onAsync: (value) => dispatch(onAsync(value)),
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),

  };
}
// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
