const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  var email = req.body.email;
  if (
    email &&
    Object.keys(email).length === 0 &&
    Object.getPrototypeOf(email) === Object.prototype
  ) {
    res.send("400");
    return;
  }

  var isError = false;
  await main(email).catch((err) => {
    isError = true;
    console.error(err);
  });

  res.send(isError ? "error" : "success");
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
