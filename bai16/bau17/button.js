    class button {
        status
        lamp

        constructor(status) {
            this.status = true;
            this.lamp   = lamp;
        }
        getStatus() {
            return this.status
        }
        SetStatus(status) {
            this.status = status
        }
        getLamp() {
            return this.lamp
        }
        setLamp() {
            this.lamp = lamp
        }
        ConnectToLamp(lamp) {
            this.lamp = lamp
        }
        TurnOnOff() {
            this.lamp = !this.lamp
        }
        TurnOn(lamp) {
            if (this.status) {
                lamp.turnOn()
            }
        TurnOff(lamp)
            {
                if (!this.status) {
                    lamp.turnOff()
                }
            }

        }









    }