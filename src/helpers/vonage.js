const { Vonage } = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: "1464165f",
  apiSecret: "5ZaIvd7erSKd1VR1"
})

const from = "12296650470"
const to = "14694438777"
const text = 'A text message sent using the Vonage SMS API'

async function sendSMS() {
    await vonage.sms.send({to, from, text})
        .then(resp => { console.log('Message sent successfully'); console.log(resp); })
        .catch(err => { console.log('There was an error sending the messages.'); console.error(err); });
}

sendSMS();

export default Vonage;