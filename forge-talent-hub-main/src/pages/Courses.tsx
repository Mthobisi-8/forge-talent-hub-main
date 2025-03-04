
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

const Courses = () => {
  const [priceRange, setPriceRange] = useState([0]);

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <img 
              src="/AGaYVfTtLaax-4Aav_NX-.jpg" 
              alt="Course overview" 
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          {/* Filter Section */}
          <div className="mb-8 space-y-6">
            <Input
              type="search"
              placeholder="Find your course"
              className="max-w-md bg-black/40 border-purple-500/30 text-purple-200 placeholder:text-purple-400"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Select>
                <SelectTrigger className="border-purple-500/30 bg-black/40 text-purple-200">
                  <SelectValue placeholder="Certification Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aws">AWS</SelectItem>
                  <SelectItem value="dmi">DMI</SelectItem>
                  <SelectItem value="ux">UX Design</SelectItem>
                  <SelectItem value="comptia">CompTIA</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="border-purple-500/30 bg-black/40 text-purple-200">
                  <SelectValue placeholder="Course Format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="self-paced">Self-paced</SelectItem>
                  <SelectItem value="instructor-led">Instructor-led</SelectItem>
                </SelectContent>
              </Select>

              <div className="space-y-2">
                <label className="text-sm text-purple-400">
                  Price Range: R{priceRange[0]}
                </label>
                <Slider
                  defaultValue={[0]}
                  max={20000}
                  step={1000}
                  onValueChange={setPriceRange}
                  className="py-4"
                />
              </div>
            </div>
          </div>

          {/* Course Listings */}
          <h1 className="text-3xl font-bold mb-8 text-gradient">Explore Our Courses</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <Card key={index} className="bg-black/40 border-purple-500/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-purple-200">{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-300/80 mb-4">{course.description}</p>
                  <div className="space-y-2 text-sm text-purple-400">
                    <p>Duration: {course.duration}</p>
                    <p>Format: {course.format}</p>
                    <p>Price: R{course.price}</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Enroll Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const courses = [
  {
    title: "AWS Certified Solutions Architect",
    description: "Learn cloud computing and DevOps skills to advance your career",
    duration: "3 months",
    format: "Self-paced",
    price: "5000",
  },
  {
    title: "Digital Marketing Professional",
    description: "Master digital marketing strategies and tools",
    duration: "4 months",
    format: "Instructor-led",
    price: "7500",
  },
  {
    title: "UX Design Fundamentals",
    description: "Learn user experience design principles and practices",
    duration: "2 months",
    format: "Self-paced",
    price: "4000",
  },
  {
    title: "CompTIA Security+",
    description: "Master cybersecurity fundamentals and best practices",
    duration: "3 months",
    format: "Self-paced",
    price: "6000",
  },
  {
    title: "Full Stack Web Development",
    description: "Build modern web applications from front to back",
    duration: "6 months",
    format: "Instructor-led",
    price: "12000",
  },
  {
    title: "Data Science Essentials",
    description: "Learn data analysis and machine learning fundamentals",
    duration: "4 months",
    format: "Self-paced",
    price: "8000",
  },
];

export default Courses;
