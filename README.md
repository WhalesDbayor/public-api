## **Public API for HNG12 Internship | Backend Track**  

### **Description**  
This project is a simple public API built with Node.js and Express. It provides a JSON response containing:  
- The registered email address used in the **HNG12 Slack workspace**  
- The current date and time in **ISO 8601 format (UTC)**  
- The GitHub URL of the project's codebase  

The API is designed to be lightweight, fast, and publicly accessible.  

---

## **Setup Instructions**  

### **Prerequisites**  
Ensure you have the following installed on your system:  
- [Node.js](https://nodejs.org/) (use the latest version) 
- [Git](https://git-scm.com/)  

### **Clone this Repository**  
```sh
git clone https://github.com/yourusername/your-repo.git
cd your-repo
```

### **Install Dependencies**  
```sh
npm install
```

### **Run the Server Locally**  
```sh
node index.js
```
The server should now be running on **`http://localhost:3000`**  

---

## **API Documentation**  

### **Endpoint URL**  
**Base URL:**  
```
GET https://your-deployed-api-url/
```

### **Response Format**  
The API returns a JSON response with the following structure:  

```json
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/yourusername/your-repo"
}
```

### **Example Usage**  
You can test the API using **cURL**:  
```sh
curl -X GET https://your-deployed-api-url/
```
Or visit the URL in your browser to see the JSON response.

---

## **Deployment**  
This API is deployed and publicly accessible. You can access the live API at:  
[**Your Deployed API URL**](https://your-deployed-api-url/)

---

## **Additional Resources**  
For more information on JavaScript and Node.js development, visit:  
[**Hire Node.js Developers**](https://hng.tech/hire/nodejs-developers)
