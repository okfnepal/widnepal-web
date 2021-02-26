import nodemailer from "nodemailer"
import {RECEIPIENT_MAIL} from "../../assets/siteDetails"


// var transporter = nodemailer.createTransport({
//        service: "Gmail",
//        auth: {
//            user: "",
//            pass: ""
//        }
//    });


const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  secureConnection: false,
  tls: { ciphers: 'SSLv3' },
  auth: {
    user: '', // add user
    pass: '', // add password
  }
})


export default async (req, res) => {
    const { email, full_name, message, subject } = req.body
    const recipientMail = RECEIPIENT_MAIL

    if (email === "" || full_name === "" || message === "" || recipientMail === "") {
        res.status(403).send("")
        return
    }

    const mailerRes = await mailer({ email, full_name, text: message, recipientMail, subject })
    res.send(mailerRes)
}

const mailer = ({ email, full_name, text, recipientMail, subject }) => {
    const from = full_name && email ? `${full_name} <${email}>` : `${full_name || email}`
    const message = {
        from,
        to: `${recipientMail}`,
        subject: `[WIDN] Subject: ${subject === '' ? 'No Subject' : subject}`,
        text,
        replyTo: from
    }

    return new Promise((resolve, reject) => {
        transporter.sendMail(message, (error, info) =>
            error ? reject(error) : resolve(info)
        )
    })
}
