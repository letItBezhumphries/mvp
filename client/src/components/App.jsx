import React, {
  Component
} from 'react';
import axios from 'axios';
//import styles from '../css/style.css';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      play: '',
      character: '',
      monologues: [],

    }
    this.getShakespeareText = this.getShakespeareText.bind(this);
  }

  componentDidMount() {
    this.getShakespeareText();
  }


  getShakespeareText() {
    axios.get(`https://www.folgerdigitaltexts.org/Shr/concordance`)
    .then(text => {
      console.log('success getting text', text)
    })
    .catch(err => {
      console.log('error getting text', err);
    });
  }



  render() {
    return ( 
      <div>
        <div className="playlist-form">
          {/* <form onSubmit={this.getShakespeareText}>
            <label>
            Pick a play of the Bard's:
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="Ant">Antony & Cleopatra</option>
                <option value="Ham">Hamlet</option>
                <option value="Shr">The Taming of the Shrew</option>
                <option value="Mac">Macbeth</option>
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form> */}
        </div>
      </div>
    )
  }
}

