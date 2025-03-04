
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Link, Share2, UserPlus, Gift } from "lucide-react";

const Referral = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4">
          <section className="mb-16">
            <h1 className="text-4xl font-bold text-center mb-12 text-gradient">How the Referral Program Works</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-purple-900/10 border-purple-500/20">
                <CardContent className="pt-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <Share2 className="h-12 w-12 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-purple-200">Share Your Referral Link</h3>
                  <p className="text-purple-300">Send your unique referral link to friends and family</p>
                </CardContent>
              </Card>
              <Card className="bg-purple-900/10 border-purple-500/20">
                <CardContent className="pt-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <UserPlus className="h-12 w-12 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-purple-200">Your Friend Enrolls</h3>
                  <p className="text-purple-300">They sign up using your link</p>
                </CardContent>
              </Card>
              <Card className="bg-purple-900/10 border-purple-500/20">
                <CardContent className="pt-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <Gift className="h-12 w-12 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-purple-200">Earn Discounts</h3>
                  <p className="text-purple-300">You'll receive a discount code for your next enrollment</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="max-w-xl mx-auto mb-16">
            <Card className="bg-purple-900/10 border-purple-500/20">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-center mb-6 text-gradient">Start Referring Today</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-purple-200">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" required className="bg-purple-900/20 border-purple-500/20 text-purple-100" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-purple-200">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" required className="bg-purple-900/20 border-purple-500/20 text-purple-100" />
                  </div>
                  <div>
                    <label htmlFor="referralCode" className="block text-sm font-medium mb-2 text-purple-200">
                      Referral Code (if applicable)
                    </label>
                    <Input id="referralCode" placeholder="Enter referral code" className="bg-purple-900/20 border-purple-500/20 text-purple-100" />
                  </div>
                  <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                    Submit
                  </Button>
                </form>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Referral;
