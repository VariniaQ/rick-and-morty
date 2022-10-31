import { LitElement, html } from 'lit';
import { characterCardStyles } from './card-styles';

export class CharacterCard extends LitElement {

    static get styles() {
        return characterCardStyles;
    }

    static get properties() {
        return {
            name: { type: String },
            img: { type: String },
            status: { type: String }
        };
    }

    constructor() {
        super();
        this.name = 'holu';
        this.img = 'gg.png';
        this.status = 'ggs';
    }

    render() {
        return html`
        <div>
            <h2>${this.name}</h2>
        </div>
        `;
    }

}

window.customElements.define('character-card', CharacterCard);
