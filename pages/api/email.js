const nodemailer = require("nodemailer");
const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  defaultMeta: { service: "user-service" },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}

export default async function handler(req, res) {
  var email = req.body;

  if (
    !email ||
    (email &&
      Object.keys(email).length === 0 &&
      Object.getPrototypeOf(email) === Object.prototype)
  ) {
    res.send("400");
    return;
  }

  var isError = false;
  await main(email).catch((err) => {
    isError = true;
    console.error(err.message);
  });

  res.send({ message: isError ? "error" : "success" });
}

async function main(email) {
  var html = `
    <div>電子信箱:</div>
    <h3>${email.sender}</h3>

    <div>公司名稱:</div>
    <h3>${email.company}</h3>
    

    <div>聯絡人: </div>
    <h3>${email.name}</h3>
    

    <div>電話,分機:</div>
    <h3>${email.number} ${
    email.extensionNumber ? "#" + email.extensionNumber : ""
  }</h3>
    
    <div>傳真: </div>
    <h3>${email.fax}</h3>
    

    <div>布規:</div>
    <h3>${email.spec}</h3>
    

    <p>內容 <br />
    <h3>${email.content}</h3>
    </p>
`;

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.user, // generated ethereal user
      pass: process.env.pass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `${email.name} <${email.sender}>`, // sender address
    to: process.env.to, // list of receivers
    subject: `官網表單信件`, // Subject line
    // text: "Hello world?", // plain text body
    html: html, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
