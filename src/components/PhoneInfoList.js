import React, {Component} from 'react';
import PhoneInfo from "./PhoneInfo";

class PhoneInfoList extends Component {
    render() {
        const {data} = this.props;
        const list = data.map(
            info => {<PhoneInfo info={info} key = {this.id} />
        )

        return (
            <div>{list}
            </div>
        );
    }
}
// 강의 4:16

export default PhoneInfoList;