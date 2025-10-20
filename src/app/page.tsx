import { useState } from "react"


export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React. FormEvent) => {
    e.preventDefault();
    console.log("Order submitted:", { name, email });
    setSubmitted(true);
    setName("");
    setEmail("");
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <h1 className="text-3xl font-bold mb-4">Pre-Order Your Mug</h1>

        {}
      </div>
    </>
  )
}