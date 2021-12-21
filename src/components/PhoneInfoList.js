import React, {Component} from 'react';
import PhoneInfo from "./PhoneInfo";

class PhoneInfoList extends Component {
    static defaultProps = { //defaultProps를 정의할 때는 static을 적어주어야 한다.
        list: [],
        onRemove : () => console.warn('onRemove not defined'),
        onUpdate: () => console.warn('onUpdate not defined')
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.data !== this.props.data;
    }

    render() {
        console.log('render PhoneInfoList');
        const {data, onRemove, onUpdate} = this.props;
        // if (!data) return null;
        const list = data.map(
            info => (
                <PhoneInfo
                    key = {info.id}
                    info={info}
                    onRemove={onRemove}
                    onUpdate = {onUpdate}
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