import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as nodemailer from "nodemailer";
import {Attachment} from "nodemailer/lib/mailer";


admin.initializeApp();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: functions.config().email.user,
    pass: process.env.NEXT_FIREBASE_PASSWORD,
  },
});

export const sendEmail = functions.firestore
  .document("newsletter emails/{docId}")
  .onCreate(async (snap) => {
    const newValue = snap.data();
    if (!newValue) {
      console.error("No data in document snapshot");
      return;
    }
    const email = newValue.email;

    const bucket = admin.storage().bucket("collegeilluminaed.appspot.com");
    const file = bucket.file("RamziOstaResume2023.pdf");

    const fileStream = file.createReadStream();
    const chunks: Uint8Array[] = [];

    fileStream.on("data", (chunk) => {
      chunks.push(chunk);
    });

    fileStream.on("end", async () => {
      const fileBuffer = Buffer.concat(chunks);

      const mailOptions = {
        from: functions.config().email.user,
        to: email,
        subject: "Here is your document",
        text: "Thank You for subscribing!",
        attachments: [
          {
            filename: "RamziOstaResume2023.pdf",
            content: fileBuffer,
            contentType: "application/pdf",
          } as Attachment,
        ] as Attachment[],
      };

      try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Sent: %s", info);
      } catch (error) {
        console.error("Error sending email", error);
      }
    });
  });
