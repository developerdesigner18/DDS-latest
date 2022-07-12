import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";

export default async (req, res) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.zoho.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: "testdds@daydreamsoft.com", // generated ethereal user
            pass: "testdds@123#", // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false,
        },
    });

    const {
        name,
        companyname,
        website,
        email,
        number,
        subject,
        text,
        country,
        service,
    } = req.body;

    transporter
        .sendMail({
            from: `${name}<testdds@daydreamsoft.com>`, // sender address
            to: "kajalk.dds@gmail.com", // list of receivers
            replyTo: email,
            subject: "Contact form", // Subject line
            text: "Hello world?", // plain text body
            html: `<b>Name:</b> ${name} <br />
                    <b>Number:</b> ${number} <br />
                    <b>Subject:</b> ${subject} <br />
                    <b>Email:</b> ${email} <br />
                    <b>Companyname: </b> ${companyname} <br/>
                    <b>Website: </b> ${website} <br/>
                    <b>Text: </b> ${text} <br />
                    <b> Country: </b> ${country} <br />
                    <b> Service: </b> ${service} <br />`, // html body
        })
        .then(() => {
            res.status(200).send("Email send successfully");
        })
        .catch((err) => {
            res.status(404).json({ message: err.message });
        });

    transporter
        .sendMail({
            from: "testdds@daydreamsoft.com", // sender address
            to: email, // list of receivers
            subject: "Greeting mail", // Subject line
            text: "Hello world?", // plain text body
            html: `<h3>Thank you for contact us.... </h3>`, // html body
        })
        .then(() => {
            res.status(200).send("Email send successfully");
        })
        .catch((err) => {
            res.status(404).json({ message: err.message });
        });
};
