// export async function POST(req) {
//     const nodemailer = require("nodemailer");
//     const { name, email, subject, message } = await req.json();
//     const transporter = nodemailer.createTransport({
//         host: "smtp.gmail.com",
//         port: 587,
//         secure: false,
//         auth: {
//             user: process.env.EMAIL_USER,
//             pass: process.env.EMAIL_PASS,
//         },
//     });
// }
import nodemailer from 'nodemailer';
// import { NextResponse } from 'next/server';

export async function POST(req, res) {
    try {
        const body = await req.json();

        // const nodemailer = require('nodemailer');
        const { name, email, message, phone, address } = body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS, // Use app password
            },
        });

        const mailOptions = {
            from: email,
            to: process.env.EMAIL_TO,
            subject: `Message from ${name}`,
            html:
                `
            <h2>New Contact Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Address:</strong> ${address}</p>
            <p><strong>Message:</strong><br/>${message}</p>
        `,
        }
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ message: 'Email sent successfully' });
        return Response.json({ success: true, message: 'Form submitted successfully' });
    } catch (err) {
        return res.status(500).json({ message: 'Failed to send email', error: err.message });
    }
}