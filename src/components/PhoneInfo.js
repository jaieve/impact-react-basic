import React, {Component} from 'react';

class PhoneInfo extends Component {
    state = {
        // 수정버튼을 눌렸을 때 editin값을 true로 설정해줄 것이다. 이 값이 true 이리 때는 기존의 텍스트 형태로 보여ㅜ던 값을 input으로 보여줌
        editing: false,
        name: '',
        phone:'',
    }

    handleRemove = () => {
        // 비구조할당
        // 삭제 버튼이 클릭되면 onRemove에 id넣어서 호출
        const {info, onRemove} = this.props;
        onRemove(info.id);
    }

    // editing값을 반전시키는 함수 true <-> false
    handleToggleEdit = () => {
        const { id, name, phone } = this.props.info;
        const {onUpdate} = this.props;
        const { editing} = this.state;
        if (!editing) {
            this.setState({
                editing: true,
                name: name,
                phone: phone
            })
        } else {
            onUpdate(id, {
                name: this.state.name,
                phone : this.state.phone
            });
            this.setState({
                editing: false
            })
        }
        this.setState( {editing: !editing})
    }

    // input에서 onChange이벤트가 발생될 때 호출되는 함수
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]  :value
        });
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        // 수정상태가 아니고, info값이 같다면 리렌더링 안함
        if (!this.state.editing
            && !nextState.editing
            && nextProps.info === this.props.info) {
            return false;
        }
        // 나머지의 경우는 리렌더링
        return true;
    }

    render() {
        console.log('render PhoneInfo ' + this.props.info.id);
        const style = {
            border : '1px solid black',
            padding : '8px',
            margin : '8px'
        }
        const { editing } = this.state;
        if (editing) { // 수정모드
            return (
                <div style={style}>
                    <div>
                        <input
                            value={this.state.name}
                            name="name"
                            placeholder="이름"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            value={this.state.phone}
                            name="phone"
                            placeholder="전화번호"
                            onChange={this.handleChange}
                        />
                    </div>
                    <button onClick={this.handleToggleEdit}>적용</button>
                    <button onClick={this.handleRemove}>삭제</button>
                </div>
            )
        }

        //일반모드
        const {
            name, phone
        } = this.props.info;

        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div><b>{phone}</b></div>
                <button onClick={this.handleToggleEdit}>수정</button>
                <button onClick={
                    this.handleRemove
                }>삭제</button>
            </div>
        );
    }
}

export default PhoneInfo;