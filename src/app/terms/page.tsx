import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FloatingWhatsApp from '../../components/FloatingWhatsApp';

export default function TermsConditions() {
  return (
    <div className="min-h-screen relative bg-neutral">
      <Header />
      <div className="max-w-[800px] mx-auto py-24 px-6 md:px-8 font-sans text-text-dark leading-relaxed">
        <h1 className="font-mali text-4xl font-bold text-primary mb-8">Terms and Conditions</h1>
        
        <div className="space-y-6 text-[15px]">
          <p><strong>Effective Date:</strong> {new Date().toLocaleDateString()}</p>
          
          <p>Welcome to Joyful Home. These Terms and Conditions govern your use of our website and the homecare and corporate care services we provide in Kampala, Uganda.</p>
          
          <h2 className="text-xl font-bold text-primary mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>By accessing our website or booking our services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not use our services.</p>

          <h2 className="text-xl font-bold text-primary mt-8 mb-4">2. Services Provided</h2>
          <p>Joyful Home provides professional in-home nursing care, newborn care, and corporate event caregiving. All care plans are customized following a mandatory Client Needs Assessment.</p>

          <h2 className="text-xl font-bold text-primary mt-8 mb-4">3. Bookings and Assessments</h2>
          <p>All service requests are subject to availability. A thorough Client Needs Assessment is required before any formal care plan is implemented. We reserve the right to decline services if we determine we cannot safely or adequately meet your needs.</p>

          <h2 className="text-xl font-bold text-primary mt-8 mb-4">4. Liability</h2>
          <p>While we strive to provide the highest standard of professional and compassionate care, Joyful Home cannot be held liable for unforeseeable incidents or pre-existing medical conditions not disclosed during the Client Needs Assessment.</p>

          <h2 className="text-xl font-bold text-primary mt-8 mb-4">5. Governing Law</h2>
          <p>These Terms shall be governed and construed in accordance with the laws of Uganda, without regard to its conflict of law provisions.</p>

          <h2 className="text-xl font-bold text-primary mt-8 mb-4">6. Contact Us</h2>
          <p>For any questions regarding these Terms, please contact us at:</p>
          <p className="mt-2"><strong>Location:</strong> Kampala, Uganda</p>
          <p><strong>Email:</strong> joyfulhome718@gmail.com</p>
          <p><strong>Phone:</strong> +256 700 143 143</p>
        </div>
      </div>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
