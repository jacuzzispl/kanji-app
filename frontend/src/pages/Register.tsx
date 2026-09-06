import { useMutation } from "@tanstack/react-query";

const BASE_URL = "http://localhost:8000"; // Ensure BASE_URL is defined

export default function Registration() {
  // 1. Declare the mutation at the top level of your component
  const registrationMutation = useMutation({
    mutationFn: async (userData) => {
      const response = await fetch(`${BASE_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      return response.json(); // Returns the JWT payload
    },
    onSuccess: (data) => {
      console.log("Token response:", data);
      if (data.access_token) {
        localStorage.setItem("jwt_token", data.access_token);
      }
    },
    onError: (error) => {
      console.error("Error during registration:", error);
    },
  });

  // 2. Simple, synchronous event handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData); // Extracted form data object

    // 3. Trigger the mutation with the payload
    registrationMutation.mutate({
      email: data.email,
      password: data.password,
    });
  };

  return (
    <>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="japaneselover101@japan.com"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="password123"
          required
        />

        <button type="submit" disabled={registrationMutation.isPending}>
          {registrationMutation.isPending ? "Registering..." : "Register"}
        </button>
      </form>

      {registrationMutation.isError && (
        <p style={{ color: "red" }}>{registrationMutation.error.message}</p>
      )}
    </>
  );
}
