const Twilio = require('twilio');

const accountSid = 'ACe05bcc4b8ff227aa9c3ae19267ffbac6';
const authToken = '8657f9f8f94359ba2492f3c705f1e7f2';
const client = Twilio(accountSid, authToken);


const sendMessage = async (phoneNumber, messageBody) => {
    try {
        const response = await client.messages.create({
            body: `${messageBody}`,
            from: '+18339855390',
            to: `${phoneNumber}`
        })
        return response;
    } catch (error) {
        throw error;
    }
}

module.exports = { sendMessage };