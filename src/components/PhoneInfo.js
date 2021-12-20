import React, {Component} from 'react';

class PhoneInfo extends Component {
    handleRemove = (id) => {
        // 비구조할당
        const {info, onRemove} = this.props;
        onRemove(info.id);
    }

    render() {
        const {name, phone, info} = this.props.info;
        const {onRemove } = this.props;
        const style = {
            border : '1px solid black',
            padding : '8px',
            margin : '8px'
        }
        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div><b>{phone}</b></div>
                <button onClick={
                    () => {onRemove(info.id)}
                }>삭제</button>
            </div>
        );
    }
}

export default PhoneInfo;