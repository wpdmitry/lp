import * as React from 'react';
import b_ from 'b_';
import './CreateLandingForm.css';

const b = b_.with('create-landing-form');

const initialState = {
    title: '',
    description: '',
};

class CreateLandingForm extends React.Component {
    state = {...initialState};

    changeTitle = event => this.setState({title: event.target.value});
    changeDescription = event => this.setState({description: event.target.value});
    submit = event => {
        event.preventDefault();
        this.setState({...initialState});
    };

    render() {
        const {title, description} = this.state;
        return (
            <div className={b()}>
                <div className={b('title')}>Создание LP</div>
                <form className={b('form')} onSubmit={this.submit}>
                    <input
                        className={b('input')}
                        value={title} type="text"
                        onChange={this.changeTitle}
                        placeholder="Заголовок"
                    />
                    <input
                        className={b('input')}
                        value={description}
                        type="text"
                        onChange={this.changeDescription}
                        placeholder="Описание"
                    />
                    <button className={b('submit')}>Создать</button>
                </form>
            </div>
        );
    }
}

export default CreateLandingForm;
