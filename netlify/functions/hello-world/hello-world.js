module.exports.handler = async (event, context) => {
  const { lang } = event.queryStringParameters;
  const { greeting } = require(`${lang}.json`);

  return {
    statusCode: 200,
    body: greeting
  };
};
