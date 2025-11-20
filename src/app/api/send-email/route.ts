import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { name, email, phone, budget, services, message } = await req.json();

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
        }

        // Configure Nodemailer with your Gmail details
        // Make sure you have an 'App Password' generated for your Gmail account
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.MAIL_USER, // Add these to your .env.local file
                pass: process.env.MAIL_PASS,
            },
        });

        // Email Layout
        const mailOptions = {
            from: process.env.MAIL_USER,
            to: "konnectwithkunal@gmail.com", // Where you want to receive the leads
            replyTo: email,
            subject: `🚀 New Sales Machine Lead: ${name}`,
            html: `
        <div style="font-family: sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden;">
          <div style="background-color: #020617; padding: 20px; color: white; text-align: center;">
            <h2 style="margin: 0;">New Project Inquiry</h2>
          </div>
          
          <div style="padding: 30px; background-color: #ffffff;">
            <p style="font-size: 16px; margin-bottom: 20px;">You have received a new lead from your website sales machine.</p>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 120px;">Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Budget:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #059669; font-weight: bold;">${budget}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Interests:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${services.join(', ') || 'None selected'}</td>
              </tr>
            </table>

            <div style="margin-top: 20px;">
              <p style="font-weight: bold;">Project Details:</p>
              <p style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; line-height: 1.5;">${message.replace(/\n/g, '<br>')}</p>
            </div>
          </div>
          
          <div style="background-color: #f9fafb; padding: 15px; text-align: center; font-size: 12px; color: #6b7280;">
            Sent via Web Alchemy Contact Form
          </div>
        </div>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Success" }, { status: 200 });
    } catch (error) {
        console.error("Email Error:", error);
        return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
    }
}