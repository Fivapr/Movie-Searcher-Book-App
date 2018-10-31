import aws from 'aws-sdk'
import logger from './logs'

export default function sendEmail(options) {
  aws.config.update({
    region: process.env.Amazon_region,
    accessKeyId: process.env.Amazon_accessKeyId,
    secretAccessKey: process.env.Amazon_secretAccessKey,
  })

  const ses = new aws.SES({ apiVersion: 'latest' })

  return new Promise((resolve, reject) => {
    logger.debug('pls')
    ses.sendEmail(
      {
        Source: options.from,
        Destination: {
          CcAddresses: options.cc,
          ToAddresses: options.to,
        },
        Message: {
          Subject: {
            Data: options.subject,
          },
          Body: {
            Html: {
              Data: options.body,
            },
          },
        },
        ReplyToAddresses: options.replyTo,
      },
      (err, info) => {
        if (err) {
          reject(err)
        } else {
          resolve(info)
        }
      },
    )
  })
}
