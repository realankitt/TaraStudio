
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Send, CreditCard } from 'lucide-react';

const Contact = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-secondary/80">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-muted-foreground">
                Get in touch with our team for inquiries, product information, or to place an order.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="animate-fade-in">
                <SectionHeading 
                  title="Send Us a Message" 
                  subtitle="Fill out the form below and we'll get back to you as soon as possible."
                />
                
                <form className="space-y-6 mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name
                      </label>
                      <Input 
                        id="name" 
                        placeholder="Enter your full name" 
                        className="w-full" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Enter your email" 
                        className="w-full" 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </label>
                    <Input 
                      id="phone" 
                      placeholder="Enter your phone number" 
                      className="w-full" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input 
                      id="subject" 
                      placeholder="What is this regarding?" 
                      className="w-full" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your inquiry or product requirements" 
                      className="w-full min-h-[150px]" 
                    />
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
              
              {/* Contact Information */}
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <SectionHeading 
                  title="Contact Information" 
                  subtitle="Reach out to us directly or visit our store."
                />
                
                <div className="space-y-8 mt-8">
                  <div className="bg-secondary rounded-lg p-6">
                    <div className="flex space-x-4">
                      <div className="bg-primary/10 rounded-full p-3">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Our Store</h3>
                        <p className="text-muted-foreground">
                          Shop No. C-96, Sector 4, Harola Village<br />
                          (Opp Harola Markets), Noida, India
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-secondary rounded-lg p-6">
                    <div className="flex space-x-4">
                      <div className="bg-primary/10 rounded-full p-3">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Phone</h3>
                        <p className="text-muted-foreground">
                          Customer Support: +91 7947127255
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-secondary rounded-lg p-6">
                    <div className="flex space-x-4">
                      <div className="bg-primary/10 rounded-full p-3">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Email</h3>
                        <p className="text-muted-foreground">
                          General Inquiries: info@develectricals.com<br />
                          Support: support@develectricals.com
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-secondary rounded-lg p-6">
                    <div className="flex space-x-4">
                      <div className="bg-primary/10 rounded-full p-3">
                        <CreditCard className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Payment Options</h3>
                        <p className="text-muted-foreground">
                          We accept: Cheques, Paytm, Cash, Debit/Credit Cards, BHIM, IJPI, JD Pay, G Pay, Amazon Pay
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-secondary rounded-lg p-6">
                    <div className="flex space-x-4">
                      <div className="bg-primary/10 rounded-full p-3">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
                        <p className="text-muted-foreground">
                          Monday - Saturday: 9:00 AM - 7:00 PM<br />
                          Sunday: 10:00 AM - 5:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 bg-secondary/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading 
              title="Visit Our Store" 
              subtitle="Find us at our convenient location in Noida, India."
              centered
            />
            
            <div className="mt-8 rounded-lg overflow-hidden shadow-lg h-[400px] animate-fade-in">
              {/* Map would normally be here - using a placeholder */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0083473917933!2d77.31064491508408!3d28.627983882421772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce551ddb8fca9%3A0x42afa48c4c807f86!2sSector%204%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1649865842112!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps - Dev Electricals Location">
              </iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
