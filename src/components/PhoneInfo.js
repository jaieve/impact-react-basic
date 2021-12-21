import React, {Component} from 'react';

class PhoneInfo extends Component {
    handleRemove = () => {
        // 비구조할당
        // 삭제 버튼이 클릭되면 onRemove에 id넣어서 호출
        const {info, onRemove} = this.props;
        onRemove(info.id);
    }

    render() {
        const {name, phone } = this.props.info;
        const { onRemove } = this.props;
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
                    this.handleRemove
                }>삭제</button>
            </div>
        );
    }
}

export default PhoneInfo;