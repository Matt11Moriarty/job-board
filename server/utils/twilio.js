const Twilio = require('twilio');

const accountSid = 'ACe05bcc4b8ff227aa9c3ae19267ffbac6';
const authToken = 'c1de4be506f816a0ca8a39c017732ba7';
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