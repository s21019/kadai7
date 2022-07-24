const { S3, GetObjectCommand } = require('@aws-sdk/client-s3')

module.exports = function(req, res) {
  const client = new S3()
  const fileName = req.query.name

  client.send(new GetObjectCommand({ Bucket: 'alix0423', Key: fileName }))
    .then(data => {
      res.attachment(fileName)
      data.Body.pipe(res)
    })
}