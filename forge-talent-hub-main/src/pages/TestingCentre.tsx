
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TalentSurvey from "@/components/TalentSurvey";
import { Button } from "@/components/ui/button";

const TestingCentre = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <main className="flex-grow">
        {/* Pearson VUE Section */}
        <section className="bg-gradient-to-r from-purple-900/50 to-purple-800/30 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4 text-gradient">
              Welcome to the Pearson VUE Testing Centre at Forge Academy
            </h1>
            <p className="text-xl mb-8 text-purple-200">
              Your gateway to globally recognized certifications in a convenient and professional environment.
            </p>
            <Button variant="secondary" size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
              Learn More
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-black/40">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gradient">Why Choose Our Testing Centre?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-purple-900/10 p-6 rounded-lg border border-purple-500/20">
                <h3 className="text-xl font-semibold mb-4 text-purple-200">Globally Recognized Certifications</h3>
                <p className="text-purple-300/80">Write exams for certifications like AWS, CompTIA, Cisco, and more.</p>
              </div>
              <div className="bg-purple-900/10 p-6 rounded-lg border border-purple-500/20">
                <h3 className="text-xl font-semibold mb-4 text-purple-200">State-of-the-Art Facilities</h3>
                <p className="text-purple-300/80">Our testing centre is equipped with modern technology and a comfortable environment.</p>
              </div>
              <div className="bg-purple-900/10 p-6 rounded-lg border border-purple-500/20">
                <h3 className="text-xl font-semibold mb-4 text-purple-200">Convenient Location</h3>
                <p className="text-purple-300/80">Located at Forge Academy, making it easy for students and professionals to access.</p>
              </div>
              <div className="bg-purple-900/10 p-6 rounded-lg border border-purple-500/20">
                <h3 className="text-xl font-semibold mb-4 text-purple-200">Expert Support</h3>
                <p className="text-purple-300/80">Our staff is here to assist you with scheduling and exam preparation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-purple-900/20 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-gradient">Ready to Take Your Exam?</h2>
            <p className="text-xl mb-8 text-purple-200">Book your seat today and take the next step in your career.</p>
            <Button variant="secondary" size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
              Book Now
            </Button>
          </div>
        </section>

        {/* AI Talent Survey Section */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 text-gradient">AI Talent Assessment</h2>
              <p className="text-lg text-purple-300">
                Take our AI-powered survey to discover the perfect course for your career goals
              </p>
            </div>
            <TalentSurvey />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TestingCentre;
