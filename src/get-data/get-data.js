import {LitElement} from 'lit';

export class GetData extends LitElement {

  static get properties() {
    return {
      url: {type: String},
      method: {type: String}
    };
  }

  constructor() {
    super();
    this.url = 'https://rickandmortyapi.com/api/character',
    this.method = 'GET'
  }

  firstUpdated(){
    this.getData();
  }

  getData() {
    fetch(this.url, {method: this.method})
      .then(response => {
        if (response.ok) return response.json();
        return response.error;
      })
      .then(data => this._sendData(data))
      .catch(error => console.warn('Error obteniendo api', error))
  }

  _sendData(data){
    this.dispatchEvent(new CustomEvent('ApiData'), {
      bubble: true,
      composed: true,
      detail: data.results
    })
  }
}

window.customElements.define('get-data', GetData);
