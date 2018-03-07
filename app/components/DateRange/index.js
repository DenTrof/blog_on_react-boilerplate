import React, { Component } from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import H4 from 'components/H4';
import 'react-day-picker/lib/style.css';

import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeDateRange } from 'containers/HomePage/selectors';
import { changeDateRange } from 'containers/HomePage/actions';

 class DateRange extends Component {
//     state = {
//         from: null,
//         to: null
//     }

//     handleDayClick = (day) => {
//         this.setState(DateUtils.addDayToRange(day, this.state))
//      }

    handleDayClick = (day) => {
        const {changeDateRange, dateRange} = this.props;
        changeDateRange(DateUtils.addDayToRange(day, dateRange));
        //console.log({changeDateRange, dateRange});  
     }


    // handleResetClick = e => {
    // e.preventDefault();
    // this.setState({
    //   from: null,
    //   to: null,
    // });
//}

handleResetClick = e => {
    e.preventDefault();
    this.props.changeDateRange({
      from: null,
      to: null,
    });
}


   render() {
        const { from, to } = this.props.dateRange;
        //console.log( this.props.dateRange );
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        //console.log(selectedRange);
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                <div>
                <H4>{selectedRange} &nbsp; <a href="." onClick={this.handleResetClick}>Reset</a></H4>
                </div>
            </div>
        );
    }

}

const mapStateToProps = createStructuredSelector({
 dateRange: makeDateRange()
})

export default connect(mapStateToProps, {changeDateRange})(DateRange)