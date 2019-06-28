import React from 'react';
import { Link } from 'react-router-dom';

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workSamples: [],
      isLoading: true,
    };
    this.loadWorkSamples = this.loadWorkSamples.bind(this);
    this.removeWorkSample = this.removeWorkSample.bind(this);
  }
  componentDidMount() {
    this.loadWorkSamples();
  }
  loadWorkSamples = () => {
    fetch(`/api/data/get-worksamples/All`)
      .then((response) => {
        return response.json();
      })
      .then((workSamples) => {
        const loadedWorkSamples = workSamples;
        this.setState({
          workSamples: loadedWorkSamples,
          isLoading: false,
        });
      });
  };
  removeWorkSample = (e, id) => {
    e.preventDefault();
    fetch(`/api/data/remove-worksample`, {
      method: 'POST',
      body: JSON.stringify({ id }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.status === 200) {
          alert('Removed');
          this.setState((prevState) => {
            let workSamples = prevState.workSamples; // creating copy of state variable jasper
            var index = workSamples.findIndex(function(o) {
              return o._id === id;
            });
            if (index !== -1) workSamples.splice(index, 1);
            workSamples.splice(index, 1);
            return { workSamples }; // return new object jasper object
          });
        } else {
          throw res.json();
        }
      })
      .catch((err) => {
        console.log(err.error);
      });
  };
  render() {
    return (
      <section className="adminPanelContainer">
        {this.state.isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <ul>
            {this.state.workSamples.map((workSample, index) => {
              return (
                <li key={index}>
                  <Link to={`/edit/worksample/${workSample._id}`}>
                    {`${index} ${workSample.title}`}
                  </Link>
                  <button
                    onClick={(e, indexItem = index) =>
                      this.removeWorkSample(e, workSample._id)
                    }
                  >
                    X
                  </button>
                </li>
              );
            })}
          </ul>
        )}
        <Link to="/create/worksample/">
          <div className="scroll-to-up-container">
            <i className="icon fas fa-plus" />
          </div>
        </Link>
      </section>
    );
  }
}
export default Admin;
