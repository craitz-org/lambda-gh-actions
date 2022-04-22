exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda Deployed by Camilo Raitz Home!'),
    };
    return response;
};
