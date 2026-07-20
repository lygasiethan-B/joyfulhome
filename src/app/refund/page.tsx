import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FloatingWhatsApp from '../../components/FloatingWhatsApp';

export default function RefundPolicy() {
  return (
    <div className="min-h-screen relative bg-neutral">
      <Header />
      <div className="max-w-[800px] mx-auto py-24 px-6 md:px-8 font-sans text-text-dark leading-relaxed">
        <h1 className="font-mali text-4xl font-bold text-primary mb-8">Refund Policy</h1>
        
        <div className="space-y-6 text-[15px]">
          <p><strong>Effective Date:</strong> {new Date().toLocaleDateString()}</p>
          
          <p>At Joyful Home, we are committed to providing premium, professional caregiving services. Our refund and cancellation policy is designed to be fair to both our clients and our dedicated staff in Kampala, Uganda.</p>
          
          <h2 className="text-xl font-bold text-primary mt-8 mb-4">1. Booking & Deposits</h2>
          <p>A deposit may be required to secure bookings for long-term homecare or large corporate events. This ensures that our premium caregivers are reserved exclusively for your family or organization.</p>

          <h2 className="text-xl font-bold text-primary mt-8 mb-4">2. Cancellations by the Client</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>More than 48 hours notice:</strong> Cancellations made more than 48 hours before the scheduled service start time will receive a full refund of any deposit paid.</li>
            <li><strong>Less than 48 hours notice:</strong> Cancellations made within 48 hours of the scheduled service may be subject to a cancellation fee or partial forfeiture of the deposit, as resources have already been allocated.</li>
          </ul>

          <h2 className="text-xl font-bold text-primary mt-8 mb-4">3. Cancellations by Joyful Home</h2>
          <p>In the highly unlikely event that we must cancel a scheduled care service due to unforeseen circumstances (e.g., staff emergencies), we will notify you immediately and provide a 100% full refund of any fees paid for that session.</p>

          <h2 className="text-xl font-bold text-primary mt-8 mb-4">4. Dispute Resolution</h2>
          <p>If you are unsatisfied with the service provided, please contact us within 24 hours of the service completion. We will review the case on an individual basis and may offer a partial or full refund at our sole discretion based on the findings.</p>

          <h2 className="text-xl font-bold text-primary mt-8 mb-4">5. Contact Us</h2>
          <p>To request a cancellation or discuss a refund, please contact us directly:</p>
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
