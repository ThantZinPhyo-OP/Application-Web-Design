import React from "react";
import { questions } from "./data.js";
import Question from "./Question";
import { AiOutlineNotification } from "react-icons/ai";

const Faq = () => {
return (
  <section id="faq" >
    <div className="container faq">
      <div className="title">
        <AiOutlineNotification color="chartreuse" size={40} />
        <h2>FAQs</h2>
        <p className="u-text-small">
        For more information about MyPay, please contact MyPay Hotline and contact those interested in cooperating with us contact@mypay.app email.
        </p>
      </div>
      <div className="questions">
        {questions.map((question) => (
          <Question
            key={question.id}
            title={question.title}
            answer={question.answer}
          />
        ))}
      </div>
    </div>
  </section>
);
};

export default Faq;