class Character {
    constructor (props = {}) {
        this.id = props.id || null
        this.honorific = props.honorific || ''
        this.firstName = props.firstName || ''
        this.middleName = props.middleName || ''
        this.lastName = props.lastName || ''
        this.suffix = props.suffix || ''
        this.gender = props.gender || ''
        this.age = props.age || ''
        this.birthDate = props.birthDate || null
        this.education = props.education || ''
        this.familyInfo = props.familyInfo || ''
        this.birthPlace = props.birthPlace || ''
        this.currentLocation = props.currentLocation || ''
    }

    get fullName () {
        return this.id ? 
            (this._getNameElement(this.honorific) 
                + this._getNameElement(this.firstName) 
                + this._getNameElement(this.middleName)
                + this._getNameElement(this.lastName)
                + this._getNameElement(this.suffix)).trim() : 
            ''
    }

    _getNameElement (element) {
        return element ? `${element} ` : ''
    }
}

export default Character