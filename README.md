# Country Data API Service
This Node.js application provides a backend API service for retrieving useful data about countries using the REST Countries API. It includes endpoints for authentication, fetching detailed information about a specific country, and retrieving a list of countries based on filters and sorting.

# Prerequisites
Node.js installed on your machine.
npm (Node Package Manager) installed.
Getting Started
# Clone the repository:

git clone - repo url




## Install dependencies:

1. npm install
2. Run the application with npm start
3. The server will start running on http://localhost:3000.


# Endpoints
1. Authentication
Request:
   ```json
   {
   "username": "your_username",
   "password": "your_password"
   }
   ``` 
Responce:
```json
{
  "token": "your_generated_token"
}
```


2. Fetch Detailed Information about a Specific Country.
```
GET /country/:country_name

```
3. Retrieve a List of Countries
```
GET /countries?page=1&per_page=10&population=100000&sort=asc
Authorization: your_generated_token
```


 # Error Handling
If the authentication fails or the auth token is not present, the API returns a 401 Unauthorized error.

If the REST Countries API request fails or returns an error, the API returns a 500 Internal Server Error with a descriptive error message.
Security Considerations
In a production environment, ensure that sensitive information (e.g., credentials, tokens) is handled securely using environment variables.
Implement additional security measures such as HTTPS for secure communication.


