import React from 'react' 

class Form extends React.Component {

    state = {
        name: "",
        img: "",
        show: ""
    };

    changeHandler = (e) => {
        console.log("in change handler")
        this.setState({ [e.target.name]: e.target.value})
    }

    localSubmitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state)

        this.setState({
            name: "",
            breed: "",
            img: ""
        });
    };

    render() {

        return(
            <form onSubmit={this.localSubmitHandler}>
                <input type="text" name="name" placeholder="character name here" value={this.state.name} onChange={this.changeHandler}/>
                <input type="text" name="img" placeholder="character img source here" value={this.state.img} onChange={this.changeHandler}/>
                <input type="text" name="show" placeholder="character show here" value={this.state.show} onChange={this.changeHandler}/>
                <button>Add character</button>
            </form>
        )
    }
};

export default Form