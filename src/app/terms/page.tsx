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
          <p><strong>Effective Date:</strong> 01/01/2026</p>
          
          <p>Welcome to JoyfulHome! These Terms and Conditions govern your use of our website and the services that we provide.</p>
          
          <h2 className="text-xl font-bold text-primary mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>By accessing our website or engaging our services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not use our services.</p>
          <p>The Company may revise these Terms and Conditions from time to time. Updated versions will be posted on the website and will become effective on the date specified. Continued use of the website or services after such updates constitutes acceptance of the revised Terms.</p>

          <h2 className="text-xl font-bold text-primary mt-8 mb-4">2. Services Provided</h2>
          <p>JoyfulHome provides professional in-home nursing care for expectant mothers, new mothers, newborns and infants. A care plan that supports a family&apos;s lifestyle, preferences, and needs is developed following completion of the Client Needs Assessment.</p>
          <p>Our services do not replace medical care, if a client experiences a life-threatening medical emergency or any other medical related issues, the relevant personnel should be contacted immediately, and the client should be transported to the nearest appropriate health facility.</p>
          <p>The Company reserves the right to modify, suspend, or discontinue any service offering, pricing, or service package, provided that changes will not affect services already confirmed under an existing agreement unless required by law or agreed with the client.</p>

          <h2 className="text-xl font-bold text-primary mt-8 mb-4">3. Bookings</h2>
          <p>All clients requesting services must provide accurate information, be legally able to enter into contracts or be represented by a parent, guardian, or authorised representative and comply with all booking and payment requirements.</p>
          <p>Bookings are confirmed only after required information has been received, availability has been confirmed and payment requirements have been satisfied where applicable. We reserve the right to decline services if we determine we cannot safely or adequately meet your needs.</p>

          <h2 className="text-xl font-bold text-primary mt-8 mb-4">4. Liability</h2>
          <p>While we strive to provide the highest standard of professional and compassionate care, outcomes may vary depending on individual medical conditions and circumstances. To the fullest extent permitted by law, JoyfulHome shall not be held liable for unforeseeable incidents, inaccurate information, pre-existing medical conditions not disclosed, indirect, incidental, or consequential losses arising from the use of its services or website. Nothing in these Terms excludes liability for death or personal injury caused by negligence, fraud, or any liability that cannot lawfully be excluded.</p>

          <h2 className="text-xl font-bold text-primary mt-8 mb-4">5. Governing Law and Dispute Resolution</h2>
          <p>These Terms and Conditions shall be governed and construed in accordance with the laws of Republic of Uganda, without regard to its conflict of law provisions.</p>
          <p>The Parties shall first seek to resolve any dispute amicably through good-faith negotiations. If a resolution cannot be reached within a reasonable period, the dispute may be referred to mediation before either Party commences legal proceedings. Any litigation shall be brought before the courts of competent jurisdiction in Uganda.</p>

          <h2 className="text-xl font-bold text-primary mt-8 mb-4">6. Property</h2>
          <p>All website and other content, whether tangible or intangible, including but not limited to logos, branding, images, educational material, documents and, any materials of any kind that contain or embody any proprietary or information of JoyfulHome belongs to the Company unless otherwise stated.</p>
          <p>No reproduction is permitted without written consent.</p>
          <p>Where clients voluntarily submit testimonials, reviews, photographs, or videos, they grant the JoyfulHome permission to use such content for marketing purposes, subject to any limitations agreed in writing. Clients may request anonymity, and the Company will make reasonable efforts to honour such requests.</p>

          <h2 className="text-xl font-bold text-primary mt-8 mb-4">7. Contact Us</h2>
          <p>For any questions regarding these Terms and Conditions, please contact us:</p>
          <p className="mt-2"><strong>Email:</strong> joyfulhome718@gmail.com</p>
          <p><strong>Phone:</strong> +256 700 143 143</p>
        </div>
      </div>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
