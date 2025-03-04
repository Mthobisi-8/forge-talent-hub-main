import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Star, Award, Shield, Download, CheckCircle2, Smartphone } from "lucide-react";

const Recruit = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-black text-white pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 space-y-6">
                <div className="inline-flex items-center gap-2 bg-purple-900/20 text-purple-400 px-4 py-2 rounded-full">
                  <Star className="w-4 h-4" />
                  <span>AI-Powered Recruitment</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gradient">
                  Hire top tech talent wisely
                </h1>
                
                <p className="text-xl text-purple-200/80">
                  Find and hire the best tech professionals for your team with our AI-powered recruitment platform.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                    Get Started
                  </Button>
                  <Button size="lg" variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-900/20">
                    Watch Demo
                  </Button>
                </div>

                <div className="bg-purple-900/20 p-6 rounded-lg inline-block backdrop-blur-sm border border-purple-500/20">
                  <div className="text-5xl font-bold text-purple-400">124k+</div>
                  <div className="text-purple-200/80">Active candidates</div>
                </div>
              </div>

              <div className="lg:w-1/2">
                <img 
                  src="https://img.freepik.com/premium-photo/global-business-model-prioritizing-networking-data-exchange-customer-connections-hr-recruitment-outsourcing-concept-networking-strategies-data-exchange-best-practices-customer-engagement_918839-135034.jpg"
                  alt="Tech recruitment"
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gradient mb-4">
                How it works?
              </h2>
              <p className="text-xl text-purple-200/80">
                Our AI-powered platform simplifies tech recruitment
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="p-8 rounded-lg border border-purple-500/20 bg-purple-900/10 backdrop-blur-sm hover:border-purple-500/40 transition-colors">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-purple-200 mb-4">Post Your Requirements</h3>
                <p className="text-purple-200/80">
                  Specify your needs and let our AI match you with the perfect candidates
                </p>
              </div>

              <div className="p-8 rounded-lg border border-purple-500/20 bg-purple-900/10 backdrop-blur-sm hover:border-purple-500/40 transition-colors">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-purple-200 mb-4">Review Matches</h3>
                <p className="text-purple-200/80">
                  Get a curated list of pre-screened candidates that match your criteria
                </p>
              </div>

              <div className="p-8 rounded-lg border border-purple-500/20 bg-purple-900/10 backdrop-blur-sm hover:border-purple-500/40 transition-colors">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-purple-200 mb-4">Hire the Best</h3>
                <p className="text-purple-200/80">
                  Interview and hire top tech talent efficiently
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gradient mb-4">
                Why Choose Our Platform?
              </h2>
              <p className="text-xl text-purple-200/80">
                Experience the future of tech recruitment
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-purple-200 mb-2">AI-Powered Matching</h3>
                    <p className="text-purple-200/80">Our advanced AI algorithms ensure precise candidate matching based on skills, experience, and cultural fit.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-purple-200 mb-2">Time-Saving Process</h3>
                    <p className="text-purple-200/80">Reduce hiring time by up to 75% with our streamlined recruitment process.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-purple-200 mb-2">Quality Guaranteed</h3>
                    <p className="text-purple-200/80">Access pre-vetted candidates with verified skills and experience.</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/86_pLNpTe83GZC6kHEKzQ.jpg"
                  alt="Platform benefits"
                  className="rounded-lg w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile App Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <img 
                  src="/51WXfFeNestye56yKPh7J.jpg"
                  alt="Mobile app"
                  className="rounded-lg w-full"
                />
              </div>
              <div className="lg:w-1/2 space-y-6">
                <div className="inline-flex items-center gap-2 bg-purple-900/20 text-purple-400 px-4 py-2 rounded-full">
                  <Smartphone className="w-4 h-4" />
                  <span>Mobile App</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-gradient">
                  Recruit On The Go
                </h2>
                
                <p className="text-xl text-purple-200/80">
                  Download our mobile app to manage your recruitment process from anywhere. Post jobs, review candidates, and schedule interviews - all from your smartphone.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                    <Download className="mr-2 h-5 w-5" />
                    Download for iOS
                  </Button>
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                    <Download className="mr-2 h-5 w-5" />
                    Download for Android
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Recruit;
