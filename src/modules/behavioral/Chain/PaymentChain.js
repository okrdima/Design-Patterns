const { User } = require("~/domains/User");
const uuid = require("uuid");
const { USER_ROLES, PAYMENT_TYPES } = require("~/__constants__");
const { Course } = require("~/domains/Course");
const {
  ApplePay,
  GooglePay,
  PayPal,
  MasterCard,
} = require("~/domains/Payment/PaymentProcessorSubClasses");

const testInEnv = () => {
  const user = new User(
    uuid.v4(),
    "john_doe",
    "john.doe@example.com",
    uuid.v4(),
    "John",
    "Doe",
    USER_ROLES.STUDENT,
    {
      [PAYMENT_TYPES.MASTER_CARD]: 25,
      [PAYMENT_TYPES.APPLE_PAY]: 50,
      [PAYMENT_TYPES.GOOGLE_PAY]: 75,
      [PAYMENT_TYPES.PAY_PAL]: 110,
    },
  );
  const course = new Course(
    "JavaScript Fundamentals",
    "JavaScript for beginners",
    uuid.v4(),
    undefined,
    100,
  );

  const masterCard = new MasterCard(user.getBalance(PAYMENT_TYPES.MASTER_CARD));
  const applePay = new ApplePay(user.getBalance(PAYMENT_TYPES.APPLE_PAY));
  const googlePay = new GooglePay(user.getBalance(PAYMENT_TYPES.GOOGLE_PAY));
  const payPal = new PayPal(user.getBalance(PAYMENT_TYPES.PAY_PAL));

  masterCard.setNext(googlePay);
  googlePay.setNext(applePay);
  applePay.setNext(payPal);

  masterCard.pay(course.getPrice());

  masterCard.show();
};

module.exports = testInEnv;
