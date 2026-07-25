import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FloatingWhatsApp from '../../components/FloatingWhatsApp';

export default function CookiesPolicy() {
  return (
    <div className="min-h-screen relative bg-neutral">
      <Header />
      <div className="max-w-[800px] mx-auto py-24 px-6 md:px-8 font-sans text-text-dark leading-relaxed">
        <h1 className="font-mali text-4xl font-bold text-primary mb-8">Cookies Policy</h1>
        
        <div className="space-y-6 text-[15px]">
          <p><strong>Effective Date:</strong> 01/01/2026</p>
          
          <p>This Cookies Policy explains how JoyfulHome uses cookies and similar technologies to recognize you when you visit our website.</p>
          
          <h2 className="text-xl font-bold text-primary mt-8 mb-4">1. What Are Cookies?</h2>
          <p>Cookies are small data files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently, as well as to provide reporting information.</p>
          <p>Cookies do not usually contain information that directly identifies you, but they may be linked to information you voluntarily provide.</p>

          <h2 className="text-xl font-bold text-primary mt-8 mb-4">2. How We Use Cookies</h2>
          <p>We use first-party and third-party cookies for several reasons:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Essential Cookies:</strong> These are strictly necessary to provide you with services available through our website and to use some of its features.</li>
            <li><strong>Performance & Analytics Cookies:</strong> These cookies collect information that is used either in aggregate form to help us understand how our website is being used, or to improve website performance.</li>
          </ul>

          <h2 className="text-xl font-bold text-primary mt-8 mb-4">3. Managing Cookies</h2>
          <p>You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in your web browser controls. If you choose to reject cookies, you may still use our website, though your access to some functionality and areas of our website may be restricted.</p>
          <p>We may update this policy periodically, changes become effective immediately upon publication.</p>

          <h2 className="text-xl font-bold text-primary mt-8 mb-4">4. Contact Us</h2>
          <p>If you have any questions about our use of cookies or other technologies, please contact us:</p>
          <p className="mt-2"><strong>Email:</strong> joyfulhome718@gmail.com</p>
          <p><strong>Phone:</strong> +256 700 143 143</p>
        </div>
      </div>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
