const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
    if (!options.to || options.to.trim() === "") {
        throw new Error("Email recipient (to) is required");
    }
    if (!options.subject || options.subject.trim() === "") {
        throw new Error("Email subject is required");
    }
    if (!options.message || options.message.trim() === "") {
        throw new Error("Email message is required");
    }

    // 1. Створюємо транспортер (сервіс, через який буде йти відправка)
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD,
        },
        family: 4
    });

    // 2. Налаштовуємо параметри самого листа
    const mailOptions = {
        from: `Home Ledger Admin <${process.env.EMAIL_FROM}>`,
        to: options.to,
        subject: options.subject,
        text: options.message,
        // html: options.html // Розкоментуй, якщо в майбутньому передаватимеш HTML-шаблони
    };

    // 3. Відправляємо лист
    await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;