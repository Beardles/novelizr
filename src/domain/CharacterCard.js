import uuid from 'uuid4'

class CharacterCard {
    constructor (props = {}) {
        this.id = props.id || uuid()
        this.chapterId = props.chapterId || ''
        this.character = props.character || ''
        this.details = props.details || ''
        this.motivations = props.motivations || ''
        this.interactions = props.interactions || ''
    }
}

export default CharacterCard