interface Service {
  renew():void
  login():void
  cancel():void
}

class NewFlix implements Service {
  renew(): void {
    console.log('Renewing NewFlix')
  }
  login(): void {
    console.log("Login to NewFlix")
  }
  cancel(): void {
    console.log("Canceling NewFlix")
  }
}

class CamaronPrime implements Service {
  renew(): void {
    console.log('Renewing CamaronPrime')
  }
  login(): void {
    console.log("Login to CamaronPrime")
  }
  cancel(): void {
    console.log("Canceling CamaronPrime")
  }
}

class OBH implements Service {
  renew(): void {
    console.log('Renewing OBH')
  }
  login(): void {
    console.log("Login to OBH")
  }
  cancel(): void {
    console.log("Canceling OBH")
  }
}

const button = document.getElementById('btn')!
const service = <HTMLSelectElement>document.getElementById('service')
const task = <HTMLSelectElement>document.getElementById('task')

let selectedService:Service
let currentOperation:ServiceType

enum ServiceType {
  Renew,
  Login,
  Cancel
}

service.addEventListener('change', () => {
  switch (service.value){
    case '1': selectedService = new NewFlix()
      break
    case '2': selectedService = new CamaronPrime()
      break
    case '3': selectedService = new OBH()
      break
  }
})

task.addEventListener('change', () => {
  switch (task.value){
    case '1': currentOperation = ServiceType.Renew
      break
    case '2': currentOperation = ServiceType.Login
      break
    case '3': currentOperation = ServiceType.Cancel
  }
})

button.addEventListener('click', () => {
  switch(currentOperation){
    case ServiceType.Renew: selectedService.renew()
      break
    case ServiceType.Login: selectedService.login()
      break
    case ServiceType.Cancel: selectedService.cancel()
  }
})