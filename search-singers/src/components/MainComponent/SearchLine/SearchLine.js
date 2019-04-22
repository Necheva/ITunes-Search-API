import React from 'react';
import axios from 'axios';

import './SearchLine.css';

const API = 'https://itunes.apple.com/search?term=';
  
class SearchLine extends React.Component {

    constructor(props) {
        super(props)
        this.state = { 
            data: [] 
        }
    }

    
    MakeARequest(request) {
        axios.get(API,
            {
                params: {
                    term: request
                }
            })
            .then(response => {
                this.setState({ data: response.data.results });
            });
    }

    componentDidMount() {
        this.MakeARequest('sia');
    }

    render() {
        console.log(this.state);
        return(
           <div className="searchContainer">
            {this.state.data.length !==0?
                this.state.data.map(
                    (data_iter, i) => {
                        return(
                            <div key={i}>
                                <div className="box-wrapper">
                                    {/* <a href={data_iter.previewUrl}>
                                        <img src={require('./play-circle-solid.svg')} width={150} height={25} />   
                                    </a>    */}
                                    <div className="image">
                                        <img src= {data_iter.artworkUrl100} width={150} height={150} />          
                                    </div>
                                    <div className="wrapper">
                                        <div className="title">
                                            {data_iter.artistName}
                                        </div>
                                        <div className="title">
                                            song:
                                        </div>
                                        <div className="track-name">
                                            {data_iter.trackName}
                                        </div>
                                        <div className="title">
                                            album: 
                                        </div>
                                        <div className="title">
                                           '{data_iter.collectionName}'
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    }
                ): " "
            }
           </div>
        );
    }
  }

export default SearchLine;

