import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MessageCircle, Send } from "lucide-react";
import { Input } from "@/components/ui/input";

type Message = {
  type: "bot" | "user";
  content: string;
  options?: string[];
};

const questions = [
  {
    question: "What is your primary area of interest in technology?",
    options: ["Software Development", "Cloud Computing", "Cybersecurity", "Data Science", "Digital Marketing"],
  },
  {
    question: "How much technical experience do you currently have?",
    options: ["No Experience", "Beginner", "Intermediate", "Advanced"],
  },
  {
    question: "What is your preferred learning style?",
    options: ["Self-paced", "Instructor-led", "Hands-on Projects", "Mixed Learning"],
  },
  {
    question: "What is your career goal in the next 2 years?",
    options: ["Career Switch", "Skill Enhancement", "Certification", "Leadership Role"],
  },
  {
    question: "Which type of work environment interests you most?",
    options: ["Remote Work", "Office-based", "Hybrid", "Freelancing"],
  },
];

const courseRecommendations = {
  "Software Development": ["Full Stack Web Development", "Mobile App Development"],
  "Cloud Computing": ["AWS Certified Solutions Architect", "Azure Fundamentals"],
  "Cybersecurity": ["CompTIA Security+", "Ethical Hacking"],
  "Data Science": ["Data Analytics Fundamentals", "Machine Learning Basics"],
  "Digital Marketing": ["Digital Marketing Professional", "Social Media Marketing"],
};

const AIChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "bot",
      content: "Hi! I'm your AI career guide. How can I help you today?",
      options: ["Take Talent Survey", "Explore Courses", "Contact Support"],
    },
  ]);
  const [input, setInput] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(-1);
  const [surveyAnswers, setSurveyAnswers] = useState<string[]>([]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { type: "user", content: input }]);
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          content: "I'm here to help! Please choose one of these options:",
          options: ["Take Talent Survey", "Explore Courses", "Contact Support"],
        },
      ]);
    }, 1000);
  };

  const handleOptionClick = (option: string) => {
    setMessages((prev) => [...prev, { type: "user", content: option }]);

    if (option === "Take Talent Survey") {
      setCurrentQuestion(0);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            content: questions[0].question,
            options: questions[0].options,
          },
        ]);
      }, 1000);
      return;
    }

    // Handle survey answers
    if (currentQuestion >= 0 && currentQuestion < questions.length) {
      setSurveyAnswers((prev) => [...prev, option]);
      
      if (currentQuestion === questions.length - 1) {
        // Survey complete - provide recommendations
        const primaryInterest = surveyAnswers[0];
        const recommendations = courseRecommendations[primaryInterest as keyof typeof courseRecommendations] || [];
        
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              type: "bot",
              content: `Based on your responses, here are your recommended courses:\n${recommendations.join("\n")}`,
              options: ["Explore Courses", "Start New Survey", "Contact Support"],
            },
          ]);
        }, 1000);
        
        setCurrentQuestion(-1);
        setSurveyAnswers([]);
      } else {
        // Move to next question
        const nextQuestion = currentQuestion + 1;
        setCurrentQuestion(nextQuestion);
        
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              type: "bot",
              content: questions[nextQuestion].question,
              options: questions[nextQuestion].options,
            },
          ]);
        }, 1000);
      }
      return;
    }

    // Handle other options
    setTimeout(() => {
      let response = "";
      switch (option) {
        case "Explore Courses":
          response = "We have a variety of courses available. What subject area interests you the most?";
          break;
        case "Contact Support":
          response = "I'll connect you with our support team. Please provide a brief description of your inquiry.";
          break;
        case "Start New Survey":
          setCurrentQuestion(0);
          setSurveyAnswers([]);
          response = questions[0].question;
          break;
        default:
          response = "How else can I assist you today?";
      }
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          content: response,
          options: option === "Start New Survey" ? questions[0].options : ["Take Talent Survey", "Explore Courses", "Contact Support"],
        },
      ]);
    }, 1000);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="fixed bottom-4 right-4 rounded-full h-12 w-12 p-0 shadow-lg hover:shadow-xl transition-shadow"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[90vw] sm:w-[400px] flex flex-col h-full">
        <SheetHeader>
          <SheetTitle>AI Career Guide</SheetTitle>
        </SheetHeader>
        <div className="flex-grow overflow-auto py-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.type === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"
                }`}
              >
                <p>{message.content}</p>
                {message.options && message.type === "bot" && (
                  <div className="space-y-2 mt-2">
                    {message.options.map((option, i) => (
                      <Button
                        key={i}
                        variant="secondary"
                        className="w-full text-left"
                        onClick={() => handleOptionClick(option)}
                      >
                        {option}
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleSend} className="flex gap-2 pt-4">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow"
          />
          <Button type="submit" size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </SheetContent>
    </Sheet>
  );
};

export default AIChatbot;