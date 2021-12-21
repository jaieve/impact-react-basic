import React, {Component} from "react";
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from "./components/PhoneInfoList";

class App extends Component {
    id = 0;
    // id를 state에 안넣은 이유 : 렌더링되는 값이 아니기 때문에! 단순히 값을 추가할 때 참조하는 값이다.
    state = {
        information: [
            {
                id: 1,
                name: '홍서연',
                phone: '010-9694-8890'
            },{
                id: 2,
                name : '최은태',
                phone: '010-5004-3602'
            }
        ],
        keyword: ''
    }
    handleChange = (e) => {
        this.setState({
            keyword: e.target.value,
        })
    }

    handleCreate = (data) => {
        const {information} = this.state;
        this.setState({
            information: information.concat(Object.assign({}, data, {
                id: this.id++
            }))
        })
    }

    handleRemove = (id) => {
        // 비구조할당
        const {information} = this.state;
        this.setState({
            information: information.filter(info => info.id !== id)
        });
    }

    handleUpdate = (id, data) => {
        const {information} = this.state;
        this.setState({
            information: information.map(
                info => info.id === id
            ? { ...info, ...data} //새 객체를 만들어서 기존의 값과 전달받은 data를 덮어씀
            : info // 기존의 값을 그대로 유지
            )
        })
    }
    render() {
        const { information, keyword } = this.state;
        const filteredList = information.filter(
            info => info.name.indexOf(keyword) !== -1
        );
        return (
            <div className="App">
                <PhoneForm
                    onCreate={this.handleCreate}
                />
                <p>
                    <input
                        placeholder="검색할 이름을 일벽하세요."
                        onChange={this.handleChange}
                        value={keyword}
                    />
                </p>
                <hr/>
                <PhoneInfoList
                    onUpdate = {this.handleUpdate}
                    onRemove = {this.handleRemove}
                    data={filteredList}/>
            </div>
        );
    }
}

export default App;
