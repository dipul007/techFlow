import { z } from 'zod';

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().optional(),
  service: z.string().min(1, "Service selection is required"),
  message: z.string().min(1, "Message is required"),
});

export const handler = async (event, context) => {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  };

  // Handle preflight OPTIONS request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  // Handle POST request for contact form
  if (event.httpMethod === 'POST' && event.path === '/api/contact') {
    try {
      const body = JSON.parse(event.body);
      const validatedData = contactSchema.parse(body);
      
      // In a real application, you would:
      // 1. Save to database
      // 2. Send email notification
      // 3. Integrate with CRM system
      
      console.log("Contact form submission:", validatedData);
      
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ 
          success: true, 
          message: "Thank you for your message. We'll get back to you within 24 hours." 
        }),
      };
    } catch (error) {
      if (error instanceof z.ZodError) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({
            success: false,
            message: "Please check your form data",
            errors: error.errors
          }),
        };
      } else {
        console.error("Contact form error:", error);
        return {
          statusCode: 500,
          headers,
          body: JSON.stringify({
            success: false,
            message: "An error occurred while processing your request"
          }),
        };
      }
    }
  }

  // Handle other routes
  return {
    statusCode: 404,
    headers,
    body: JSON.stringify({ message: 'Not Found' }),
  };
};