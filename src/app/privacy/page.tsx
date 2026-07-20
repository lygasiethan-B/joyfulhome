import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FloatingWhatsApp from '../../components/FloatingWhatsApp';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen relative bg-neutral">
      <Header />
      <div className="max-w-[800px] mx-auto py-24 px-6 md:px-8 font-sans text-text-dark leading-relaxed">
        <h1 className="font-mali text-4xl font-bold text-primary mb-8">Privacy Policy</h1>
        
        <div className="space-y-6 text-[15px]">
          <p><strong>Effective Date:</strong> {new Date().toLocaleDateString()}</p>
          
          <p>Joyful Home ("we," "us," or "our") operates in Kampala, Uganda. We respect your privacy and are committed to protecting your personal data in accordance with globally recognized standards, including the GDPR.</p>
          
          <h2 className="text-xl font-bold text-primary mt-8 mb-4">1. Information We Collect</h2>
          <p>We may collect and process the following data about you:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Identity Data:</strong> Name, age, and family status.</li>
            <li><strong>Contact Data:</strong> Email address, physical address (for homecare services), and telephone/WhatsApp number.</li>
            <li><strong>Health & Care Data:</strong> Information relevant to newborn care, maternal care, or specific caregiving needs provided during the Client Needs Assessment.</li>
          </ul>

          <h2 className="text-xl font-bold text-primary mt-8 mb-4">2. How We Use Your Data</h2>
          <p>We only use your personal data for the following purposes:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>To provide and manage our homecare and corporate care services.</li>
            <li>To communicate with you regarding bookings, inquiries, and care plans.</li>
            <li>To ensure the safety, well-being, and customized care of your family.</li>
          </ul>

          <h2 className="text-xl font-bold text-primary mt-8 mb-4">3. Data Security & Retention</h2>
          <p>We implement strict security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way. We only retain your data for as long as necessary to fulfill the purposes we collected it for, including any legal or accounting requirements.</p>

          <h2 className="text-xl font-bold text-primary mt-8 mb-4">4. Your Rights</h2>
          <p>Under global data protection standards (GDPR), you have the right to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Request access to your personal data.</li>
            <li>Request correction or deletion of your personal data.</li>
            <li>Withdraw consent at any time where we are relying on consent to process your data.</li>
          </ul>

          <h2 className="text-xl font-bold text-primary mt-8 mb-4">5. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy or our privacy practices, please contact us at:</p>
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
