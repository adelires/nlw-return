import { MailAdapter, SendMailData } from '../mail-adapter';
import nodemailer from "nodemailer";


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "45c5165117f4bc",
        pass: "0b66a5415bd118"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Maria Teste <maria@tuamaeaquelaursa.com>',
            subject: subject,
            html: body
        });
    }
}
