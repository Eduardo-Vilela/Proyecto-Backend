const twilio = require("twilio");

const ACCOUNT_SID = process.env.ACCOUNT_SID_TWILIO;
const AUTH_TOKEN = process.env.AUTH_TOKEN_TWILIO;
const PHONE_NUMBER = process.env.SMSFROM;
const PHONETO = process.env.SMSTO;

const client = twilio(ACCOUNT_SID, AUTH_TOKEN);

const sendSMS = async (body) => {
  try {
    const message = await client.messages.create({
      body:'BIENVENIDO A MI BACK!(Eduardo Vilela)',
      from: PHONE_NUMBER,
      to: PHONETO,
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = sendSMS;


// const accountSid = 'ACdabd5822c299b0d4086cd5cb3d18e1c9'; 
// const authToken = '[AuthToken]'; 
// const client = require('twilio')(accountSid, authToken); 
 
// client.messages 
//       .create({ 
//          body: 'Hola soy el edu pa',  
//          messagingServiceSid: 'MGe61660ecdfd1a707940e76a54b1abf54',      
//          to: '+542216776051' 
//        }) 
//       .then(message => console.log(message.sid)) 
//       .done();