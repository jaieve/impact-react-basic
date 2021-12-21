import React, {Component} from 'react';
import PhoneInfo from "./PhoneInfo";

class PhoneInfoList extends Component {
    static defaultProps = { //defaultProps를 정의할 때는 static을 적어주어야 한다.
        list: [],
        onRemove : () => console.warn('onRemove not defined'),
    }

    render() {
        const {data, onRemove} = this.props;
        // if (!data) return null;
        const list = data.map(
            info => (
                <PhoneInfo
                    onRemove={onRemove}
                    info={info}
                    key = {info.id}
                />
            )
        )
        return (
            <div>{list}
            </div>
        );
    }
}
// 강의 4:16

export default PhoneInfoList;