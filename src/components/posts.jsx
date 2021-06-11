import React, {Component} from "react";

class Posts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("https://blogtai.herokuapp.com/api/posts")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                    console.log(result)
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {

        const {items} = this.state;

        return (
            <React.Fragment>
                {items.map((item, key) => {
                    return <div key={key}>
                        <div className="card">
                            <img className="card-img-top" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Przykładowe zdjęcie</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                        </div>
                    </div>
                })}
            </React.Fragment>)
    }
}

export default Posts;