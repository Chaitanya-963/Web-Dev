import Mailgen from "mailgen";
import nodemailer from "nodemailer";

const sendMail = async (options) => {
  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Task Manager",
      link: "https://mailgen.js/",
    },
  });

  var emailHtml = mailGenerator.generate(options.mailGenContent);
  var emailText = mailGenerator.generatePlaintext(options.mailGenContent);

  const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_HOST,
    port: process.env.MAILTRAP_PORT,
    secure: false, // Use true for port 465, false for port 587
    auth: {
      user: process.env.MAILTRAP_USERNAME,
      pass: process.env.MAILTRAP_PASSWORD,
    },
  });

  const mail = {
    from: "mail.taskmanager@example.com",
    to: options.email,
    subject: options.subject,
    text: emailText, // Plain-text version of the message
    html: emailHtml, // HTML version of the message
  };

  try {
    await transporter.sendMail(mail);
  } catch (error) {
    console.error("Email Failed", error);
  }
};

const emailVerificationMailGenContent = (username, verificationUrl) => {
  return {
    body: {
      name: username,
      intro:
        "Welcome to Task Manager App! We're very excited to have you on board.",
      action: {
        instructions:
          "To get started with Task Manager App, please click here:",
        button: {
          color: "#22BC66", // Optional action button color
          text: "Verify your email",
          link: verificationUrl,
        },
      },
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };
};
const forgotPasswordMailGenContent = (username, passwordResetUrl) => {
  return {
    body: {
      name: username,
      intro: "We got a request to reset your password",
      action: {
        instructions: "To change your password click the button",
        button: {
          color: "#22BC66", // Optional action button color
          text: "Reset Password",
          link: passwordResetUrl,
        },
      },
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };
};

// sendMail({
//   email: user.email,
//   subject: "My subject",
//   mailGenContent: emailVerificationMailGenContent(username, ``),
// });
