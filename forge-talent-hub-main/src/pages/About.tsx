
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <main className="flex-grow pt-16">
        {/* Mission Statement Section */}
        <section className="py-16 bg-black/40">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl font-bold mb-6 text-gradient">
                  Bridging the Gap Between Aspiration and Qualification
                </h1>
                <p className="text-lg text-purple-200">
                  Forge Talent is an AI-powered career development platform designed to help job seekers gain the skills and certifications they need to succeed. Our mission is to make high-quality education accessible, affordable, and convenient for everyone.
                </p>
              </div>
              <div>
                <img
                  src="https://cdn.gamma.app/rqy3owznzo24vup/generated-images/Tgo9l37SGKFnP4qJIgkGZ.jpg" 
                  alt="Forge Revenue Image"
                  className="rounded-lg shadow-lg w-full border border-purple-500/20"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gradient">
              How Forge Talent Works
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-purple-200">{step.title}</h3>
                    <p className="text-purple-300/80">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full">
                      <ArrowRight className="w-8 h-8 text-purple-500 mx-auto" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const steps = [
  {
    title: "Take the AI Talent Survey",
    description: "Answer a few questions to identify your strengths and career goals",
  },
  {
    title: "Get Personalized Recommendations",
    description: "Receive tailored course suggestions based on your survey results",
  },
  {
    title: "Enroll and Start Learning",
    description: "Choose from self-paced or instructor-led courses",
  },
  {
    title: "Earn Certifications",
    description: "Gain industry-recognized certifications and take the next step in your career",
  },
];

export default About;
