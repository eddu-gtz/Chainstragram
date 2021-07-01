import React, { Component } from 'react';
import Identicon from 'identicon.js';
// get our fontawesome imports
import { faThumbsUp, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './App.css';

class Main extends Component {

  render() {
    return (
      <div className="container-fluid mt-5">

        <div className="row">
          <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '600px' }}>
            <div className="content mr-auto ml-auto">
              <p>&nbsp;</p>
              <div className="card mb-4">
                <div className="card-header">

                  <h2 className="card-title" style={{ textAlign: 'center' , fontStyle: 'italic' , fontWeight:  '450'}}>Compartir imagen</h2>
                </div>
                <div class="card-body">

                  <form onSubmit={(event) => {
                    event.preventDefault()
                    const description = this.imageDescription.value
                    this.props.uploadImage(description)
                  }} >

                    <input type='file' accept=".jpg, .jpeg, .png, .bmp, .gif" onChange={this.props.captureFile} />

                    <div className="form-group mr-sm-2">
                      <br></br>
                      <input
                        id="imageDescription"
                        type="text"
                        ref={(input) => { this.imageDescription = input }}
                        className="form-control"
                        placeholder="Descripcion de la imagen..."
                        required />
                    </div>
                    <hr />
                    <button type="submit" className="btn btn-primary btn-block ">Subir!</button>
                  </form>
                </div>
              </div>
              <p>&nbsp;</p>
              {this.props.images.map((image, key) => {
                return (
                  <div className="card mb-4" key={key} >
                    <div className="card-header">
                      <img
                        className='mr-2'
                        width='30'
                        height='30'
                        src={`data:image/png;base64,${new Identicon(image.author, 30).toString()}`}
                      />
                      <small className="text-muted"> Autor: {image.author}</small>
                    </div>
                    <ul id="imageList" className="list-group list-group-flush">
                      <li className="list-group-item">
                        <p className="text-center"><img src={`https://ipfs.infura.io/ipfs/${image.hash}`} style={{ maxWidth: '420px' }} /></p>
                        <p>{image.description}</p>
                      </li>
                      <li key={key} className="list-group-item py-2">
                        <small className="float-left mt-1 text-red text-center">

                          {/* <span className="icono-img"> */}
                          <div>
                            <FontAwesomeIcon icon={faHeart} />
                          </div>

                          Likes: {window.web3.utils.fromWei(image.tipAmount.toString(), 'Ether')} ETH
                        </small>
                        <button
                          className="btn btn-link btn-sm float-right pt-0"
                          name={image.id}
                          onClick={(event) => {
                            let tipAmount = window.web3.utils.toWei('0.1', 'Ether')
                            console.log(event.target.name, tipAmount)
                            this.props.tipImageOwner(event.target.name, tipAmount)
                          }}
                          style={{ marginTop: '7px' }}
                        >
                          <span className="icono-img">
                            <FontAwesomeIcon icon={faThumbsUp} />
                          </span>
                          0.1 ETH

                        </button>


                      </li>
                    </ul>
                  </div>
                )
              })}
            </div>
          </main>
        </div>
      </div>


    );
  }
}

export default Main;