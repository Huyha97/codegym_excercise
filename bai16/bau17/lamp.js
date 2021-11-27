class lamp {
    status

    constructor(status) {
        this.status = false
    }
    turnOn() {
        this.status = true
        console.log('Lighting')
    }
    turnOff() {
        this.status = true
        console.log('Not Lighting')
    }


}