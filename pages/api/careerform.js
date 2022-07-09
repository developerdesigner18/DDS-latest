import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import nextConnect from "next-connect";
import multer from "multer";
const path = require("path");

export const config = {
    api: {
        bodyParser: false,
        externalResolver: true,
    },
};

const upload = multer({
    storage: multer.diskStorage({
        destination: "./public/uploads",
        filename: (req, file, cb) =>
            cb(
                null,
                file.fieldname +
                    "-" +
                    Date.now() +
                    path.extname(file.originalname)
            ),
    }),
});

// var upload = multer({ storage: storage });

export default async (req, res) => {
    upload.single("image")(req, {}, (err) => {
        // res.end();
        console.log(req.body, req.file.path, "==-----");

        const filepath = `http://localhost:3000/uploads/${req.file.filename}`;

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
        const { name, email, number, subject, last_name, cover_letter } =
            req.body;

        transporter
            .sendMail({
                from: "testdds@daydreamsoft.com", // sender address
                to: "kajalk.dds@gmail.com", // list of receivers
                subject: "Career form", // Subject line
                text: "Hello world?", // plain text body
                html: `<b>First name:</b> ${name} <br />
                               <b>Last name:</b> ${last_name} <br />
                                <b>Number:</b> ${number} <br />
                                <b>Subject:</b> ${subject} <br />
                                <b>Email:</b> ${email} <br />
                                <b>cover letter:</b> ${cover_letter} <br />
                                <b>Document link:</b> ${filepath} <br />`, // html body
            })
            .then(() => {
                console.log("success");
                res.status(200).send("Email send successfully");
            })
            .catch((err) => {
                console.log("=====err ", err);
                res.status(404).json({ message: err.message });
            });
    });
};
