// Refactor `makePhone` and `makeSmartPhone` to use pseudo classical inheritance
// They should have exactly the same methods as the objects returned from the
// original maker functions except in pseudo classical style. ie., you should be
// able to use your new functions like so to create new phone instances.
//
//   var myPhone = new Phone();
//   var mySmartPhone = new SmartPhone();
//

// DO NOT MODIFY FUNCTIONS `makePhone` AND `makeSmartPhone`
// USE THE CONSTRUCTOR FUNCTIONS LOCATED AT THE END OF THIS FILE

var makePhone = function(phoneNumber) {
  var result = {};

  result.phoneNumber = phoneNumber;
  result.send = function(recipientPhoneNumber, message) {
    return 'sending the message "' + message + '" to the phone number ' + recipientPhoneNumber + ' from ' + this.phoneNumber;
  };

  return result;
};

var makeSmartPhone = function(phoneNumber, email) {
  var phone = makePhone(phoneNumber);
  var oldSend = phone.send;

  phone.email = email;
  phone.send = function(recipientPhoneNumberOrEmail, message) {
    if (typeof recipientPhoneNumberOrEmail === 'number') {
      // We need `.call` here to make sure that `this` will reference our smart phone in makePhone's send
      return oldSend.call(this, recipientPhoneNumberOrEmail, message);
    } else {
      return 'sending the message "' + message + '" to email ' + recipientPhoneNumberOrEmail + ' from ' + this.email;
    }
  };

  return phone;
};

// Here's a bit of code to get you started
// You shouldn't invoke `makePhone` or `makeSmartPhone` in either constructor

var Phone = function(phoneNumber) {
  this.phoneNumber = phoneNumber;
};
Phone.prototype.send = function(recipientPhoneNumber, message) {
  return 'sending the message "' + message + '" to the phone number ' + recipientPhoneNumber + ' from ' + this.phoneNumber;
}

var SmartPhone = function(phoneNumber, email) {
  Phone.call(this, phoneNumber);
  this.email = email;
};
SmartPhone.prototype = Object.create(Phone.prototype);
SmartPhone.prototype.constructor = SmartPhone;
SmartPhone.prototype.send = function(recipientPhoneNumberOrEmail, message) {
  if (typeof recipientPhoneNumberOrEmail === 'number') {
    return Phone.prototype.send.call(this, recipientPhoneNumberOrEmail, message);
  } else {
    return 'sending the message "' + message + '" to email ' + recipientPhoneNumberOrEmail + ' from ' + this.email;
  }
};


/*tests
var mytrashphone = new Phone(99999999);
console.log(mytrashphone.send(12345678, 'hey how u doing :P'));

var mysmartphone = new SmartPhone(99999999, 'sudaseul@gmail.com');
console.log('emailing: ' + mysmartphone.send('slee664@wisc.edu', 'hello from my personal email to my school email'));
console.log('phoning: ' + mysmartphone.send(12345678, 'phoning ya with my smartphone')); */