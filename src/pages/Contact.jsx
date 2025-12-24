import axios from "axios";
import React, { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircleIcon, CheckCircle2Icon, PopcornIcon } from "lucide-react";

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitState, setSubmitState] = useState(false);
  const [errorState, setErrorState] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { email: email, message: message };

    axios
      .post("http://localhost:3000/api/v1/contact", data)
      .then(function (response) {
        console.log("response");
        setSubmitState(true);
        setTimeout(() => {
        setEmail("");
        setMessage("");
          setSubmitState(false);
        }, 3000)
      })
      .catch(function (error) {
        console.log(error);
        setErrorState(true);
        setTimeout(() => {
        setEmail("");
        setMessage("");
          setErrorState(false);
        }, 3000)
      });
  };

  return (
    <>
      <section id="contact" className="pt-10 px-4 pb-40">
        <h2 className="text-xl lg:text-4xl font-extrabold text-orange-600 py-12 text-center">
          Contact Me
        </h2>

        <form
          onSubmit={() => {
            handleSubmit(event);
          }}
          className="max-w-sm mx-auto"
        >
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2.5 text-sm font-medium text-heading"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="message"
              className="block mb-2.5 text-sm font-medium text-heading"
            >
              Your Message
            </label>
            <textarea
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              id="message"
              rows="4"
              className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full p-3.5 shadow-xs placeholder:text-body"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
          <label htmlFor="remember" className="flex items-center mb-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
              required
            />
            <p className="ms-2 text-sm font-medium text-heading select-none">
              I agree with the{" "}
              <a href="#" className="text-fg-brand hover:underline">
                terms and conditions
              </a>
              .
            </p>
          </label>
          <div className={submitState?'block':'hidden'}>
            <Alert>
              <CheckCircle2Icon />
              <AlertTitle className="text-green-500">
                Success! Response Recorded Successfully
              </AlertTitle>
            </Alert>
          </div>
          <div className={errorState?'block':'hidden'}>
            <Alert>
              <CheckCircle2Icon />
              <AlertTitle className="text-red-500">
                Success! Error Submiting Your Response
              </AlertTitle>
            </Alert>
          </div>
          <br />
          <button
            type="submit"
            className="text-secondary rounded-sm bg-primary bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
          >
            Submit
          </button>
        </form>
        <div className="grid w-full mx-auto max-w-sm items-start gap-4"></div>
      </section>
    </>
  );
}

export default Contact;
