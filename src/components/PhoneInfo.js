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
        const { editing} = this.state;
        this.setState( {editing: !editing})
    }

    // input에서 onChange이벤트가 발생될 때 호출되는 함수
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]  :value
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // 여기서는 editing값이 바뀔 때 처리할 로직이 적힌다.
        // 수정을 눌렸을 땐, 기존 값이 input에 나타나고,
        // 수정을 적용할 땐, input의 값들을 부모한테 전달해준다.
        const { info, onUpdate } = this.props;
        if (!prevState.editing && this.state.editing) {
            //editing값이 false -> true로 전환될 때 info의 값을 state에 넣어준다.
            this.setState({
                name : info.name,
                phone: info.phone
            })
        }

        if (prevState.editing && !this.state.editing) {
            // editing값이 true -> falsse로 전환될 때
            onUpdate(info.id, {
                name : this.state.name,
                phone: this.state.phone
            });
        }
    }

    render() {
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