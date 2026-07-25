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
          <p><strong>Effective Date:</strong> 01/01/2026</p>
          
          <p>At JoyfulHome, we are committed to providing premium, professional and compassionate services. Our refund and cancellation policy is designed to be fair to both our clients and our team explaining when refunds may or may not be available.</p>
          
          <h2 className="text-xl font-bold text-primary mt-8 mb-4">1. Booking & Reservation Deposits</h2>
          <p>A reservation deposit is required to secure bookings for mid-term or long-term services. This ensures that our caregivers are scheduled exclusively for your family or organization.</p>
          <p>Where services are required in under 72 hours, an additional surcharge is charged.</p>

          <h2 className="text-xl font-bold text-primary mt-8 mb-4">2. Rescheduling & Cancellations by the Client</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>More than 72 hours notice:</strong> Rescheduling requests made more than 72 hours before the service may enable us to accommodate scheduling changes subject to the availability of our caregivers.</li>
            <li><strong>Less than 72 hours notice:</strong> Rescheduling and cancellations made within 72 hours of the scheduled service may be subject to a cancellation fee or partial forfeiture of the reservation deposit, as administrative charges apply.</li>
            <li><strong>Same day:</strong> Where services are rescheduled or cancelled within 24 hours, the Company reserves the right to retain part or all of the reservation fee to cover operational costs.</li>
            <li><strong>Emergencies:</strong> Services interrupted due to natural disasters, civil unrest, government directives, medical emergencies, road closures may be rescheduled without penalty.</li>
          </ul>

          <h2 className="text-xl font-bold text-primary mt-8 mb-4">3. Cancellations by JoyfulHome</h2>
          <p>In the highly unlikely event that we must cancel a scheduled care visit due to unforeseen circumstances (e.g., staff emergencies), we will notify you immediately and you may, choose an immediate replacement visit, rescheduling or if necessary, a full refund.</p>

          <h2 className="text-xl font-bold text-primary mt-8 mb-4">4. Dispute Resolution</h2>
          <p>If you are unsatisfied with the service provided, please notify us within 24 hours. We will investigate promptly, review the case on an individual basis and depending on findings, we may provide a replacement nurse, a complimentary day service or if necessary, issue a partial or full refund where appropriate.</p>

          <h2 className="text-xl font-bold text-primary mt-8 mb-4">5. Contact Us</h2>
          <p>To request a reschedule or discuss a cancellation, please contact us:</p>
          <p className="mt-2"><strong>Email:</strong> joyfulhome718@gmail.com</p>
          <p><strong>Phone:</strong> +256 700 143 143</p>
        </div>
      </div>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
