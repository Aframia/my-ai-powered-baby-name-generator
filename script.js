let apiKey ="fb820fo1b1cfa408bca4ft48b00334dc";
let apiUrl =`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
axios.get(apiUrl).then(sendMessage);