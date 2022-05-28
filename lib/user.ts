import {
  jsonFormatter,
  objectToQueryString
} from "./helpers";

const { Curl } = require("node-libcurl");

export default class User {

  protected restUrl: string;
  protected licenceUsername: string;
  protected licencePassword: string;
  protected licenceSecretKey: string;

  constructor(parentObj: any) {
    this.restUrl = parentObj.restUrl;
    this.licenceUsername = parentObj.licenceUsername;
    this.licencePassword = parentObj.licencePassword;
    this.licenceSecretKey = parentObj.licenceSecretKey;
  }

  /**
   * Is used to create user - accounts via API.
   *
   * @param {string} language The language of the user.
   * @param {object} args The data of the user you want to register.
   * @return {object}
   */
  public registerUser(
    language: string,
    args: object
  ) {
    const curl = new Curl();
    const terminate = curl.close.bind(curl);

    return new Promise((resolve, reject) => {
      curl.setOpt(Curl.option.URL, `${this.restUrl}/srv/service/`);
      curl.setOpt(Curl.option.POST, true);
      curl.setOpt(
        Curl.option.POSTFIELDS,
        objectToQueryString({
          licence_username: this.licenceUsername,
          licence_password: this.licencePassword,
          request: "register_user",
          language: language,
          args: JSON.stringify(args)
        })
      );

      curl.on("end", (statusCode: any, data: any, headers: any) => {
        resolve(jsonFormatter(data));
      });

      curl.on("error", (statusCode: any, data: any, headers: any) => {
        terminate();
        reject(jsonFormatter(data));
      });

      curl.perform();
    });
  }

  /**
   * Verification method for the user - accounts.
   *
   * @param {number} idUser The id of the user.
   * @param {string} sessionId A valid session-code. Here the session_code has to be used which is generated and transferred after registration by the method register_user.
   * @return {object}
   */
  public verifyUser(
    idUser: number,
    sessionId: string
  ) {
    const curl = new Curl();
    const terminate = curl.close.bind(curl);

    return new Promise((resolve, reject) => {
      curl.setOpt(Curl.option.URL, `${this.restUrl}/srv/service/`);
      curl.setOpt(Curl.option.POST, true);
      curl.setOpt(
        Curl.option.POSTFIELDS,
        objectToQueryString({
          licence_username: this.licenceUsername,
          licence_password: this.licencePassword,
          request: "verify_user",
          id_user: idUser,
          session_id: sessionId
        })
      );

      curl.on("end", (statusCode: any, data: any, headers: any) => {
        resolve(jsonFormatter(data));
      });

      curl.on("error", (statusCode: any, data: any, headers: any) => {
        terminate();
        reject(jsonFormatter(data));
      });

      curl.perform();
    });
  }

  /**
   * This is the method to login exisiting and verified users into a valid session.
   *
   * @param {string} username The username of the user that has to be logged in.
   * @param {string} password The valid password of the user.
   * @param {string} session A valid session-code. Here the session_code has to be used which is generated and transferred after registration by the method register_user.
   * @return {object}
   */
  public loginUser(
    username: string,
    password: string,
    session: string
  ) {
    const curl = new Curl();
    const terminate = curl.close.bind(curl);

    return new Promise((resolve, reject) => {
      curl.setOpt(Curl.option.URL, `${this.restUrl}/srv/service/`);
      curl.setOpt(Curl.option.POST, true);
      curl.setOpt(
        Curl.option.POSTFIELDS,
        objectToQueryString({
          licence_username: this.licenceUsername,
          licence_password: this.licencePassword,
          request: "login_user",
          username: username,
          password: password,
          session: session
        })
      );

      curl.on("end", (statusCode: any, data: any, headers: any) => {
        resolve(jsonFormatter(data));
      });

      curl.on("error", (statusCode: any, data: any, headers: any) => {
        terminate();
        reject(jsonFormatter(data));
      });

      curl.perform();
    });
  }

  /**
   * This method logs - out a user from a session. Because for each session only one user can be logged in, the attribute needed is only a valid session.
   *
   * @param {string} session A valid session with a user logged in.
   * @return {object}
   */
  public logoutUser(session: string) {
    const curl = new Curl();
    const terminate = curl.close.bind(curl);

    return new Promise((resolve, reject) => {
      curl.setOpt(Curl.option.URL, `${this.restUrl}/srv/service/`);
      curl.setOpt(Curl.option.POST, true);
      curl.setOpt(
        Curl.option.POSTFIELDS,
        objectToQueryString({
          licence_username: this.licenceUsername,
          licence_password: this.licencePassword,
          request: "logout_user",
          session: session
        })
      );

      curl.on("end", (statusCode: any, data: any, headers: any) => {
        resolve(jsonFormatter(data));
      });

      curl.on("error", (statusCode: any, data: any, headers: any) => {
        terminate();
        reject(jsonFormatter(data));
      });

      curl.perform();
    });
  }

  /**
   * Overwrites the current user - password with the delivered password.
   *
   * @param {string} session A session of a logged-in user.
   * @param {string} oldPasswd The current password of the logged-in user.
   * @param {string} newPasswd1 The new password.
   * @param {string} newPasswd2 Repetition of the new password.
   * @return {object}
   */
  public setUserPassword(
    session: string,
    oldPasswd: string,
    newPasswd1: string,
    newPasswd2: string
  ) {
    const curl = new Curl();
    const terminate = curl.close.bind(curl);

    return new Promise((resolve, reject) => {
      curl.setOpt(Curl.option.URL, `${this.restUrl}/srv/service/`);
      curl.setOpt(Curl.option.POST, true);
      curl.setOpt(
        Curl.option.POSTFIELDS,
        objectToQueryString({
          licence_username: this.licenceUsername,
          licence_password: this.licencePassword,
          request: "set_user_password",
          session: session,
          old_passwd: oldPasswd,
          new_passwd1: newPasswd1,
          new_passwd2: newPasswd2
        })
      );

      curl.on("end", (statusCode: any, data: any, headers: any) => {
        resolve(jsonFormatter(data));
      });

      curl.on("error", (statusCode: any, data: any, headers: any) => {
        terminate();
        reject(jsonFormatter(data));
      });

      curl.perform();
    });
  }

  /**
   * This function is used to reset the user password. The reset is divided into two calls. In the first call we send the email and receive informations we need in the second call.
   *
   * @param {object} args The following arguments have to be encoded as a json-array which is then sent in the argument named
   * @param {string} args .email - The email of the user you want to reset the password.
   * @return {object}
   */
  public resetUserPasswordInit(args: object) {
    const curl = new Curl();
    const terminate = curl.close.bind(curl);

    return new Promise((resolve, reject) => {
      curl.setOpt(Curl.option.URL, `${this.restUrl}/srv/service/`);
      curl.setOpt(Curl.option.POST, true);
      curl.setOpt(
        Curl.option.POSTFIELDS,
        objectToQueryString({
          licence_username: this.licenceUsername,
          licence_password: this.licencePassword,
          request: "reset_user_password",
          args: JSON.stringify(args)
        })
      );

      curl.on("end", (statusCode: any, data: any, headers: any) => {
        resolve(jsonFormatter(data));
      });

      curl.on("error", (statusCode: any, data: any, headers: any) => {
        terminate();
        reject(jsonFormatter(data));
      });

      curl.perform();
    });
  }

  /**
   * This is the second part of the reset_user_password process. Here we send needed parameters to finally reset the user-password. These parameters were delivered by the same function in the previous description : reset_user_password (init)
   *
   * @param {object} args The following arguments have to be encoded as a json-array which is then sent in the argument named
   * @param {string} args .session_id - This is the unique session_id delivered by the function in the init - process.
   * @param {number} args .id_user - The id of the user you want to reset the password for. The id_user is also delivered in the init-process.
   * @param {string} args .new_passwd1 - The new password for the user.
   * @param {string} args .new_passwd2 - The new password repeated. 
   * @return {object}
   */
  public resetUserPasswordSuccess(args: object) {
    const curl = new Curl();
    const terminate = curl.close.bind(curl);

    return new Promise((resolve, reject) => {
      curl.setOpt(Curl.option.URL, `${this.restUrl}/srv/service/`);
      curl.setOpt(Curl.option.POST, true);
      curl.setOpt(
        Curl.option.POSTFIELDS,
        objectToQueryString({
          licence_username: this.licenceUsername,
          licence_password: this.licencePassword,
          request: "reset_user_password",
          args: JSON.stringify(args)
        })
      );

      curl.on("end", (statusCode: any, data: any, headers: any) => {
        resolve(jsonFormatter(data));
      });

      curl.on("error", (statusCode: any, data: any, headers: any) => {
        terminate();
        reject(jsonFormatter(data));
      });

      curl.perform();
    });
  }

  /**
   * Delivers the orders of a user determined by the session where the user is logged in.
   *
   * @param {string} session The session where the user is logged in.
   * @return {object}
   */
  public getUserOrders(session: string) {
    const curl = new Curl();
    const terminate = curl.close.bind(curl);

    return new Promise((resolve, reject) => {
      curl.setOpt(Curl.option.URL, `${this.restUrl}/srv/service/`);
      curl.setOpt(Curl.option.POST, true);
      curl.setOpt(
        Curl.option.POSTFIELDS,
        objectToQueryString({
          licence_username: this.licenceUsername,
          licence_password: this.licencePassword,
          request: "get_user_orders",
          session: session
        })
      );

      curl.on("end", (statusCode: any, data: any, headers: any) => {
        resolve(jsonFormatter(data));
      });

      curl.on("error", (statusCode: any, data: any, headers: any) => {
        terminate();
        reject(jsonFormatter(data));
      });

      curl.perform();
    });
  }

  /**
   * Delivers all user data of the logged - in user.
   *
   * @param {string} session The session where the user is logged in.
   * @return {object}
   */
  public getUserData(session: string) {
    const curl = new Curl();
    const terminate = curl.close.bind(curl);

    return new Promise((resolve, reject) => {
      curl.setOpt(Curl.option.URL, `${this.restUrl}/srv/service/`);
      curl.setOpt(Curl.option.POST, true);
      curl.setOpt(
        Curl.option.POSTFIELDS,
        objectToQueryString({
          licence_username: this.licenceUsername,
          licence_password: this.licencePassword,
          request: "get_user_data",
          session: session
        })
      );

      curl.on("end", (statusCode: any, data: any, headers: any) => {
        resolve(jsonFormatter(data));
      });

      curl.on("error", (statusCode: any, data: any, headers: any) => {
        terminate();
        reject(jsonFormatter(data));
      });

      curl.perform();
    });
  }

  /**
   * Delivers the user_data of the user determined by id.
   *
   * @param {number} idUser The id of the user.
   * @return {object}
   */
  public getUserById(idUser: number) {
    const curl = new Curl();
    const terminate = curl.close.bind(curl);

    return new Promise((resolve, reject) => {
      curl.setOpt(Curl.option.URL, `${this.restUrl}/srv/service/`);
      curl.setOpt(Curl.option.POST, true);
      curl.setOpt(
        Curl.option.POSTFIELDS,
        objectToQueryString({
          licence_username: this.licenceUsername,
          licence_password: this.licencePassword,
          request: "get_user_by_id",
          id_user: idUser
        })
      );

      curl.on("end", (statusCode: any, data: any, headers: any) => {
        resolve(jsonFormatter(data));
      });

      curl.on("error", (statusCode: any, data: any, headers: any) => {
        terminate();
        reject(jsonFormatter(data));
      });

      curl.perform();
    });
  }

  /**
   * Sets the userdata for a logged-in user.
   *
   * @param {string} session The session of the logged-in user.
   * @param {object} attributes A json - array with all attributes you want to set the value. 
   * @param {string} attributes .email - A valid email - address for the user.
   * @param {string} attributes .salutation - The salutation of the user.
   * @param {string} attributes .firstname - The firstname of the user.
   * @param {string} attributes .lastname - The lastname of the user.
   * @param {string} attributes .companyname - The companyname of the user.
   * @param {string} attributes .department - The department of the user.
   * @param {string} attributes .street - The street of the user.
   * @param {string} attributes .number - The housenumber of the user.
   * @param {string} attributes .zip - The zipcode for the user.
   * @param {string} attributes .city - The city of the user.
   * @param {string} attributes .state - The state of the user.
   * @param {string} attributes .country - A valid countrycode for the user.
   * @return {object}
   */
  public setUserData(
    session: string,
    attributes: object
  ) {
    const curl = new Curl();
    const terminate = curl.close.bind(curl);

    return new Promise((resolve, reject) => {
      curl.setOpt(Curl.option.URL, `${this.restUrl}/srv/service/`);
      curl.setOpt(Curl.option.POST, true);
      curl.setOpt(
        Curl.option.POSTFIELDS,
        objectToQueryString({
          licence_username: this.licenceUsername,
          licence_password: this.licencePassword,
          request: "set_user_data",
          session: session,
          attributes: JSON.stringify(attributes)
        })
      );

      curl.on("end", (statusCode: any, data: any, headers: any) => {
        resolve(jsonFormatter(data));
      });

      curl.on("error", (statusCode: any, data: any, headers: any) => {
        terminate();
        reject(jsonFormatter(data));
      });

      curl.perform();
    });
  }

  /**
   * This request can be used to update an existing user. You have to provide the corresponding id_user.
   *
   * @param {number} idUser The id of the user you want to update.
   * @param {object} attributes A json - array with all attributes you want to set the value. 
   * @param {string} attributes .email - A valid email - address for the user.
   * @param {string} attributes .salutation - The salutation of the user.
   * @param {string} attributes .firstname - The firstname of the user.
   * @param {string} attributes .lastname - The lastname of the user.
   * @param {string} attributes .companyname - The companyname of the user.
   * @param {string} attributes .department - The department of the user.
   * @param {string} attributes .street - The street of the user.
   * @param {string} attributes .number - The housenumber of the user.
   * @param {string} attributes .zip - The zipcode for the user.
   * @param {string} attributes .city - The city of the user.
   * @param {string} attributes .state - The state of the user.
   * @param {string} attributes .country - A valid countrycode for the user.
   * @return {object}
   */
  public updateUserData(
    idUser: number,
    attributes: object
  ) {
    const curl = new Curl();
    const terminate = curl.close.bind(curl);

    return new Promise((resolve, reject) => {
      curl.setOpt(Curl.option.URL, `${this.restUrl}/srv/service/`);
      curl.setOpt(Curl.option.POST, true);
      curl.setOpt(
        Curl.option.POSTFIELDS,
        objectToQueryString({
          licence_username: this.licenceUsername,
          licence_password: this.licencePassword,
          request: "set_user_data",
          id_user: idUser,
          attributes: JSON.stringify(attributes)
        })
      );

      curl.on("end", (statusCode: any, data: any, headers: any) => {
        resolve(jsonFormatter(data));
      });

      curl.on("error", (statusCode: any, data: any, headers: any) => {
        terminate();
        reject(jsonFormatter(data));
      });

      curl.perform();
    });
  }

  /**
   * This login - method can be used for login of users from the backend into remote - applications communicating with the api. Therefore no username and password are needed.
   * The instant - login is especially built for applications adding value to the users sleekshop - backend. These applications can use the users backend - login to grant access to the application itself. 
   * The applications you want to implement into the backend can be implemented in the applications - section and will be displayed in an iframe within the backend of the user.
   *
   * @param {string} token The token delivered to the iframe.
   * @param {string} applicationToken The application - token which was generated when creating the application in the backend.
   * @return {object}
   */
  public instantLogin(
    token: string,
    applicationToken: string
  ) {
    const curl = new Curl();
    const terminate = curl.close.bind(curl);

    return new Promise((resolve, reject) => {
      curl.setOpt(Curl.option.URL, `${this.restUrl}/srv/service/`);
      curl.setOpt(Curl.option.POST, true);
      curl.setOpt(
        Curl.option.POSTFIELDS,
        objectToQueryString({
          licence_username: this.licenceUsername,
          licence_password: this.licencePassword,
          request: "instant_login",
          token: token,
          application_token: applicationToken
        })
      );

      curl.on("end", (statusCode: any, data: any, headers: any) => {
        resolve(jsonFormatter(data));
      });

      curl.on("error", (statusCode: any, data: any, headers: any) => {
        terminate();
        reject(jsonFormatter(data));
      });

      curl.perform();
    });
  }
}
