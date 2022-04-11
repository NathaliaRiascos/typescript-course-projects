"use strict";
class NewFlix {
    renew() {
        console.log('Renewing NewFlix');
    }
    login() {
        console.log("Login to NewFlix");
    }
    cancel() {
        console.log("Canceling NewFlix");
    }
}
class CamaronPrime {
    renew() {
        console.log('Renewing CamaronPrime');
    }
    login() {
        console.log("Login to CamaronPrime");
    }
    cancel() {
        console.log("Canceling CamaronPrime");
    }
}
class OBH {
    renew() {
        console.log('Renewing OBH');
    }
    login() {
        console.log("Login to OBH");
    }
    cancel() {
        console.log("Canceling OBH");
    }
}
const button = document.getElementById('btn');
const service = document.getElementById('service');
const task = document.getElementById('task');
let selectedService;
let currentOperation;
var ServiceType;
(function (ServiceType) {
    ServiceType[ServiceType["Renew"] = 0] = "Renew";
    ServiceType[ServiceType["Login"] = 1] = "Login";
    ServiceType[ServiceType["Cancel"] = 2] = "Cancel";
})(ServiceType || (ServiceType = {}));
service.addEventListener('change', () => {
    switch (service.value) {
        case '1':
            selectedService = new NewFlix();
            break;
        case '2':
            selectedService = new CamaronPrime();
            break;
        case '3':
            selectedService = new OBH();
            break;
    }
});
task.addEventListener('change', () => {
    switch (task.value) {
        case '1':
            currentOperation = ServiceType.Renew;
            break;
        case '2':
            currentOperation = ServiceType.Login;
            break;
        case '3': currentOperation = ServiceType.Cancel;
    }
});
button.addEventListener('click', () => {
    switch (currentOperation) {
        case ServiceType.Renew:
            selectedService.renew();
            break;
        case ServiceType.Login:
            selectedService.login();
            break;
        case ServiceType.Cancel: selectedService.cancel();
    }
});
