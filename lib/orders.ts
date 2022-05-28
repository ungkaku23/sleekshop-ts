import {
  jsonFormatter,
  objectToQueryString
} from "./helpers";

const { Curl } = require("node-libcurl");

export default class Orders {

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
   * Setting the order specific attributes in the checkout - process. This data is only stored in the session which is determined by the "session" argument.
   *
   * @param {string} session A valid session.
   * @param {number} idPaymentMethod A valid id specifying the desired payment - method. This id can be identified with the get_payment_methods request.
   * @param {number} idDeliveryMethod A valid delivery - id.
   * @param {string} deliveryCompanyName The delivery companyname.
   * @param {string} deliveryDepartment The delivery - department.
   * @param {string} deliverySalutation The delivery salutation.
   * @param {string} deliveryFirstname The delivery firstname.
   * @param {string} deliveryLastname The delivery lastname.
   * @param {string} deliveryStreet The delivery street.
   * @param {string} deliveryNumber The delivery number.
   * @param {string} deliveryZip The delivery zip.
   * @param {string} deliveryState The delivery state.
   * @param {string} deliveryCity The delivery city.
   * @param {string} deliveryCountry A valid delivery country code.
   * @param {string} invoiceCompanyName The invoice companyname.
   * @param {string} invoiceDepartment The invoice - department.
   * @param {string} invoiceSalutation The invoice salutation.
   * @param {string} invoiceFirstname The invoice firstname.
   * @param {string} invoiceLastname The invoice lastname.
   * @param {string} invoiceStreet The invoice street.
   * @param {string} invoiceNumber The invoice number.
   * @param {string} invoiceZip The invoice zip.
   * @param {string} invoiceState The invoice state.
   * @param {string} invoiceCity The invoice city.
   * @param {string} invoiceCountry A valid invoice country code.
   * @param {string} note A note that has to be attached to the order.
   * @param {string} email A valid email for the order.
   * @param {string} phone A phone - number that has to be attached to the order.
   * @param {object} attributes An array containing additional attributes if needed.
   * @return {object}
   */
  public setOrderDetails(
    session: string,
    idPaymentMethod: number,
    idDeliveryMethod: number,
    deliveryCompanyName: string,
    deliveryDepartment: string,
    deliverySalutation: string,
    deliveryFirstname: string,
    deliveryLastname: string,
    deliveryStreet: string,
    deliveryNumber: string,
    deliveryZip: string,
    deliveryState: string,
    deliveryCity: string,
    deliveryCountry: string,
    invoiceCompanyName: string,
    invoiceDepartment: string,
    invoiceSalutation: string,
    invoiceFirstname: string,
    invoiceLastname: string,
    invoiceStreet: string,
    invoiceNumber: string,
    invoiceZip: string,
    invoiceState: string,
    invoiceCity: string,
    invoiceCountry: string,
    note: string,
    email: string,
    phone: string,
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
          request: "set_order_details",
          session: session,
          id_payment_method: idPaymentMethod,
          id_delivery_method: idDeliveryMethod,
          delivery_companyname: deliveryCompanyName,
          delivery_department: deliveryDepartment,
          delivery_salutation: deliverySalutation,
          delivery_firstname: deliveryFirstname,
          delivery_lastname: deliveryLastname,
          delivery_street: deliveryStreet,
          delivery_number: deliveryNumber,
          delivery_zip: deliveryZip,
          delivery_state: deliveryState,
          delivery_city: deliveryCity,
          delivery_country: deliveryCountry,
          invoice_companyname: invoiceCompanyName,
          invoice_department: invoiceDepartment,
          invoice_salutation: invoiceSalutation,
          invoice_firstname: invoiceFirstname,
          invoice_lastname: invoiceLastname,
          invoice_street: invoiceStreet,
          invoice_number: invoiceNumber,
          invoice_zip: invoiceZip,
          invoice_state: invoiceState,
          invoice_city: invoiceCity,
          invoice_country: invoiceCountry,
          note: note,
          email: email,
          phone: phone,
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
   * Setting the order specific attributes for a given order determined by its id. If the order is already closed an error will be returned.
   *
   * @param {number} idOrder The id of the order you want to update.
   * @param {number} idPaymentMethod A valid id specifying the desired payment - method. This id can be identified with the get_payment_methods request.
   * @param {number} idDeliveryMethod A valid delivery - id.
   * @param {string} orderState A valid order_state. Valid values: OPEN, PROCESSING, CLOSED and CANCELED
   * @param {string} orderPaymentState Here you can set the payment_state. Valid values: PAYMENT_NOT_RECEIVED or PAYMENT_RECEIVED.
   * @param {string} orderDeliveryState Here you can set the delivery_state. Valid values: PROCESSING or CLOSED.
   * @param {string} deliveryCompanyName The delivery companyname.
   * @param {string} deliveryDepartment The delivery - department.
   * @param {string} deliverySalutation The delivery salutation.
   * @param {string} deliveryFirstname The delivery firstname.
   * @param {string} deliveryLastname The delivery lastname.
   * @param {string} deliveryStreet The delivery street.
   * @param {string} deliveryNumber The delivery number.
   * @param {string} deliveryZip The delivery zip.
   * @param {string} deliveryState The delivery state.
   * @param {string} deliveryCity The delivery city.
   * @param {string} deliveryCountry A valid delivery country code.
   * @param {string} invoiceCompanyName The invoice companyname.
   * @param {string} invoiceDepartment The invoice - department.
   * @param {string} invoiceSalutation The invoice salutation.
   * @param {string} invoiceFirstname The invoice firstname.
   * @param {string} invoiceLastname The invoice lastname.
   * @param {string} invoiceStreet The invoice street.
   * @param {string} invoiceNumber The invoice number.
   * @param {string} invoiceZip The invoice zip.
   * @param {string} invoiceState The invoice state.
   * @param {string} invoiceCity The invoice city.
   * @param {string} invoiceCountry A valid invoice country code.
   * @param {string} note A note that has to be attached to the order.
   * @param {string} email A valid email for the order.
   * @param {string} phone A phone - number that has to be attached to the order.
   * @param {object} attributes An array containing additional attributes if needed.
   * @return {object}
   */
  public updateOrderDetails(
    idOrder: number,
    idPaymentMethod: number,
    idDeliveryMethod: number,
    orderState: string,
    orderPaymentState: string,
    orderDeliveryState: string,
    deliveryCompanyName: string,
    deliveryDepartment: string,
    deliverySalutation: string,
    deliveryFirstname: string,
    deliveryLastname: string,
    deliveryStreet: string,
    deliveryNumber: string,
    deliveryZip: string,
    deliveryState: string,
    deliveryCity: string,
    deliveryCountry: string,
    invoiceCompanyName: string,
    invoiceDepartment: string,
    invoiceSalutation: string,
    invoiceFirstname: string,
    invoiceLastname: string,
    invoiceStreet: string,
    invoiceNumber: string,
    invoiceZip: string,
    invoiceState: string,
    invoiceCity: string,
    invoiceCountry: string,
    note: string,
    email: string,
    phone: string,
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
          request: "update_order_details",
          id_order: idOrder,
          id_payment_method: idPaymentMethod,
          id_delivery_method: idDeliveryMethod,
          order_state: orderState,
          order_payment_state: orderPaymentState,
          order_delivery_state: orderDeliveryState,
          delivery_companyname: deliveryCompanyName,
          delivery_department: deliveryDepartment,
          delivery_salutation: deliverySalutation,
          delivery_firstname: deliveryFirstname,
          delivery_lastname: deliveryLastname,
          delivery_street: deliveryStreet,
          delivery_number: deliveryNumber,
          delivery_zip: deliveryZip,
          delivery_state: deliveryState,
          delivery_city: deliveryCity,
          delivery_country: deliveryCountry,
          invoice_companyname: invoiceCompanyName,
          invoice_department: invoiceDepartment,
          invoice_salutation: invoiceSalutation,
          invoice_firstname: invoiceFirstname,
          invoice_lastname: invoiceLastname,
          invoice_street: invoiceStreet,
          invoice_number: invoiceNumber,
          invoice_zip: invoiceZip,
          invoice_state: invoiceState,
          invoice_city: invoiceCity,
          invoice_country: invoiceCountry,
          note: note,
          email: email,
          phone: phone,
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
   * Delivers the order - details of a specific session.
   *
   * @param {string} session A valid session.
   * @return {object}
   */
  public getOrderDetails(session: string) {
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
          request: "get_order_details",
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
   * Delivers the order - details of a specific order determined by its id.
   *
   * @param {number} idOrder A valid order-id.
   * @return {object}
   */
  public getOrderById(idOrder: number) {
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
          request: "get_order_by_id",
          id_order: idOrder
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
   * Checks out a session - order. Makes the order permament.
   *
   * @param {string} session A valid session with an order.
   * @return {object}
   */
  public checkout(session: string) {
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
          request: "checkout",
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
   * Delivers the invoice for a specified order using the defined invoice - form. The form will be delivered base64 encoded. So you have to decode at the frontend - side.
   *
   * @param {number} idOrder A valid order - id.
   * @param {object} args An array containing individual attributes for replacements in the form.
   * @return {object}
   */
  public getInvoice(
    idOrder: number,
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
          request: "get_invoice",
          id_order: idOrder,
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
   * Delivers the order confirmation for a specified order using the defined order confirmation - form. The form will be delivered base64 encoded. So you have to decode at the frontend - side.
   *
   * @param {number} idOrder A valid order - id.
   * @param {object} args An array containing individual attributes for replacements in the form.
   * @return {object}
   */
  public getOrderConfirmation(
    idOrder: number,
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
          request: "get_order_confirmation",
          id_order: idOrder,
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
}
