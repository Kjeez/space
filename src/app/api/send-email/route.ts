import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    if (req.method !== 'POST') {
        return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
    }

    const { name, email, phone, subject, message, checkInDate, checkOutDate, guests, accommodationType } = await req.json();

    // --- **FIXED LOGIC** ---
    // We check for the 'subject' field. If it exists, it's the contact form.
    // Otherwise, it's the booking form.
    const isContactForm = subject !== undefined;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        },
    });

    let mailOptions;

    if (isContactForm) {
        // --- Handle Contact Form Submission ---
        if (!name || !email || !subject || !message) {
            return NextResponse.json({ message: "Missing required contact fields" }, { status: 400 });
        }
        mailOptions = {
            from: process.env.MAIL_USER,
            replyTo: email,
            to: "earthenpods@gmail.com, konnectwithkunal@gmail.com",
            subject: `Contact Form Inquiry: ${subject}`,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p style="padding-left: 10px; border-left: 3px solid #ccc;">${message.replace(/\n/g, '<br>')}</p>
      `,
        };
    } else {
        // --- Handle Booking Request Submission ---
        if (!name || !email || !phone || !checkInDate || !checkOutDate || !guests || !accommodationType) {
            return NextResponse.json({ message: "Missing required booking fields" }, { status: 400 });
        }
        mailOptions = {
            from: process.env.MAIL_USER,
            replyTo: email,
            to: "earthenpods@gmail.com, konnectwithkunal@gmail.com",
            subject: `New Booking Inquiry from ${name} for ${accommodationType}`,
            html: `
        <h2>New Booking Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
        <hr>
        <h3>Booking Details:</h3>
        <p><strong>Accommodation Type:</strong> ${accommodationType}</p>
        <p><strong>Number of Guests:</strong> ${guests}</p>
        <p><strong>Check-in Date:</strong> ${new Date(checkInDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        <p><strong>Check-out Date:</strong> ${new Date(checkOutDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      `,
        };
    }

    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: "Request sent successfully!" }, { status: 200 });
    } catch (error) {
        console.error("Email sending error:", error);
        return NextResponse.json({ message: "Failed to send email." }, { status: 500 });
    }
}
