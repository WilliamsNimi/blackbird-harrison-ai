export function validation(email, password){
    var validator = require("email-validator");
    const email_check = validator.validate(email);
    const regex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,}$/;
    const pword_check = regex.test(password);

    if (email_check === true && pword_check === true)
      {
        return true;
      }
      else 
      {
        return false;
      }
}