import React from 'react' 

class Form extends React.Component {

    state = {
        name: "",
        img: "",
        show: ""
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    render() {

        return(
            <form onSubmit={(e) => {
                e.preventDefault()
                this.props.submitHandler({name: e.target[0].value })
                this.setState ({ name: "", img: "", show: "" })
            }}>
                <input type="text" name="name" placeholder="character name here" value={this.state.name} onChange={this.changeHandler}/>
                <input type="text" name="img" placeholder="character img source here" value={this.state.img} onChange={this.changeHandler}/>
                <input type="text" name="show" placeholder="character show here" value={this.state.show} onChange={this.changeHandler}/>
                <input type="submit" value="add character!" />
            </form>
        )
    }
}

export default Form