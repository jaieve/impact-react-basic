import React, {Component} from "react";
import PhoneForm from './components/PhoneForm';

class App extends Component {
    id = 0;
    // id를 state에 안넣은 이유 : 렌더링되는 값이 아니기 때문에! 단순히 값을 추가할 때 참조하는 값이다.
    state = {
        information : [],
    }
    handleCreate = (data) => {
        const { information } = this.state;
        /** 아래는 절대 해서는 안되는 코드
         * this.state.information.push(data);
         this.setState({
            information : this.state.information,
        })
         */
        this.setState({
            information : information.concat(Object.assign({}, data, {
                id : this.id++
            }))
            // 위의 코드와 동일한 코드 1
            // information :information.concat({
            //     ...data,
            //     id: this.id++
            // }),

            // 위의 코드와 동일한 코드 2
            // information : information.concat({
            //     name : data.name,
            //     phone : data.phone,
            //     id : this.id++
            // })
            // 기존배열은 수정하지 않고, 새로운 배열을 만들어서 data를 넣을 수 있게 된다. -> 기존 자리에 새로운 값이 들어감.
        })
    }

    render() {
        return (
        <div className="App">
            <PhoneForm onCreate={this.handleCreate}/>
            {JSON.stringify(this.state.information)}<br />
        </div>
        );
    }
}

export default App;
