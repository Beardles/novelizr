class Chapter {
    constructor (props = {}) {
        this.number = props.number || null
        this.summary = props.summary || ''
        this.details = props.details || ''
    }
}

export default Chapter