import { Button } from "@/components/ui/button";
import Link from "next/link";
import BannerCarousel from "./components/home/BannerCarousel";
import SearchBar from "./components/home/SearchBar";
import PopularDestinations from "./components/home/PopularDestinations";

//one click google sign in
export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      {/* Hero Section with Banner Carousel and Search */}
      <section className="w-full relative">
        <BannerCarousel />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="w-full px-4">
            <h1 className="text-5xl font-bold tracking-tight mb-8 text-center text-white">
              Discover Your Next Adventure
            </h1>
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Popular Destinations Section */}
      <section className="w-full max-w-7xl px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Popular Destinations</h2>
        <PopularDestinations />
      </section>

      {/* Features Section */}
      <section className="w-full max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Tourly?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 rounded-lg border">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Easy Tour Creation</h3>
            <p className="text-muted-foreground">Build custom tours with our intuitive drag-and-drop interface</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg border">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Personalized Experience</h3>
            <p className="text-muted-foreground">Customize every aspect of your tours to match your style</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg border">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M17 6.1H3"></path><path d="M21 12.1H3"></path><path d="M15.1 18H3"></path></svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Global Sharing</h3>
            <p className="text-muted-foreground">Share your tours with travelers from around the world</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-primary/5 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Your First Tour?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of tour creators and start building your perfect tour experience today.
          </p>
          <Button size="lg" className="font-medium">
            <Link href="/sign-in">Sign Up Now</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
