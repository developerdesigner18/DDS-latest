import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";

export default async (req, res) => {
    // let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.zoho.com",
        port: 465,
        // service: "   mail",
        secure: true, // true for 465, false for other ports
        auth: {
            user: "testdds@daydreamsoft.com", // generated ethereal user
            pass: "testdds@123#", // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false,
        },
    });
    const { name, email, number, subject, text } = req.body;

    transporter
        .sendMail({
            from: "testdds@daydreamsoft.com", // sender address
            to: "kajalk.dds@gmail.com", // list of receivers
            replyTo: email,
            subject: "Project form", // Subject line
            text: "Hello world?", // plain text body
            html: `<b>Full Name:</b> ${name} <br />
                    <b>Number:</b> ${number} <br />
                    <b>Email:</b> ${email} <br />
                    <b>Requirement:</b> ${text}`, // html body
        })
        .then(() => {
            res.status(200).send("Email send successfully");
        })
        .catch((err) => {
            console.log("err ", err);
            res.status(404).json({ message: err.message });
        });
};
