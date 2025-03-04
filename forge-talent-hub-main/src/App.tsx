import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Pricing from "./pages/Pricing";
import Referral from "./pages/Referral";
import Contact from "./pages/Contact";
import TestingCentre from "./pages/TestingCentre";
import Recruit from "./pages/Recruit";
import NotFound from "./pages/NotFound";
import AIChatbot from "./components/AIChatbot";
import Navbar from "./components/NavBar"; // ✅ Import Responsive Navbar

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar /> {/* ✅ Add Navbar Here */}
        <div className="min-h-screen flex flex-col">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/referral" element={<Referral />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/testing-centre" element={<TestingCentre />} />
            <Route path="/recruit" element={<Recruit />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <AIChatbot /> {/* ✅ Ensure AIChatbot doesn't block content */}
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
