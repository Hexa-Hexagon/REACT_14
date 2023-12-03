module.exports.getApiData = (request, response) => {
    try {
        const apiData = ["user1", "user2", "user3"];
        response.status(200).send(apiData);
    } catch (error) {
        response.status(500).send(error);
    }
}