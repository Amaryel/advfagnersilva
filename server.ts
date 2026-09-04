import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// API health endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API email sending endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, phone, city, subject, message } = req.body;

    if (!name || !message || (!email && !phone)) {
      return res.status(400).json({
        success: false,
        error: 'Por favor, preencha seu nome, uma forma de contato (e-mail ou telefone) e sua mensagem.'
      });
    }

    const recipientEmail = process.env.NOTIFICATION_EMAIL || 'amaryelcc@gmail.com';
    const timestamp = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });

    console.log('--- [NOVA MENSAGEM RECEBIDA NO SITE - DR. FAGNER SILVA] ---');
    console.log(`Data/Hora: ${timestamp}`);
    console.log(`Nome: ${name}`);
    console.log(`E-mail: ${email || 'Não informado'}`);
    console.log(`Telefone/WhatsApp: ${phone || 'Não informado'}`);
    console.log(`Cidade: ${city || 'Isaías Coelho - PI'}`);
    console.log(`Assunto: ${subject || 'Dúvida Jurídica Criminal'}`);
    console.log(`Mensagem:\n${message}`);
    console.log(`Destinatário: ${recipientEmail}`);
    console.log('------------------------------------------------------------');

    // If SMTP credentials are provided, send live email via Nodemailer
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: Number(process.env.SMTP_PORT) === 465,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: `"Site Dr. Fagner Silva" <${process.env.SMTP_USER}>`,
        to: recipientEmail,
        replyTo: email || undefined,
        subject: `[Contato Site] ${subject || 'Nova Consulta Jurídica'} - ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; background-color: #f4f6f9; padding: 24px;">
            <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0; overflow: hidden;">
              <div style="background-color: #0b0e14; color: #c5a880; padding: 20px; text-align: center;">
                <h2 style="margin: 0; font-size: 20px;">Dr. Fagner Silva — Advocacia Criminal</h2>
                <p style="margin: 4px 0 0 0; font-size: 12px; color: #94a3b8;">Nova solicitação de contato recebida pelo site</p>
              </div>
              <div style="padding: 24px; color: #1e293b; font-size: 14px; line-height: 1.6;">
                <p><strong>Nome:</strong> ${name}</p>
                <p><strong>E-mail:</strong> ${email || 'Não informado'}</p>
                <p><strong>Telefone/WhatsApp:</strong> ${phone || 'Não informado'}</p>
                <p><strong>Cidade:</strong> ${city || 'Isaías Coelho - PI'}</p>
                <p><strong>Assunto:</strong> ${subject || 'Dúvida Jurídica'}</p>
                <p><strong>Data de Recebimento:</strong> ${timestamp}</p>
                <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
                <p><strong>Relato do Caso / Dúvida:</strong></p>
                <div style="background: #f8fafc; border-left: 4px solid #c5a880; padding: 14px; font-style: italic; white-space: pre-wrap;">
                  ${message}
                </div>
              </div>
              <div style="background-color: #f1f5f9; padding: 14px; text-align: center; font-size: 11px; color: #64748b;">
                Mensagem enviada automaticamente pelo formulário do portal institucional Dr. Fagner Silva.
              </div>
            </div>
          </div>
        `
      };

      await transporter.sendMail(mailOptions);
    }

    return res.status(200).json({
      success: true,
      message: 'Sua mensagem foi enviada com sucesso! O Dr. Fagner Silva entrará em contato em breve.',
      details: {
        recipient: recipientEmail,
        timestamp
      }
    });
  } catch (error: any) {
    console.error('Erro ao processar envio de e-mail:', error);
    return res.status(500).json({
      success: false,
      error: 'Ocorreu uma falha ao enviar a mensagem. Por favor, tente pelo WhatsApp oficial (89) 99414-8236.'
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
}

startServer();
