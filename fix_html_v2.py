import re
import json

with open('JoyfulHome.dc.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Remove <x-dc> tags
content = content.replace('<x-dc>', '')
content = content.replace('</x-dc>', '')
content = content.replace('<helmet>', '')
content = content.replace('</helmet>', '')

# Replace style-hover attributes with CSS classes
css = """
  .nav-link:hover { background: rgba(20,107,120,0.08) !important; color: #14B8AA !important; }
  .btn-whatsapp:hover { background: #128f84 !important; }
  .btn-primary:hover { background: #0f545e !important; }
  .btn-outline:hover { background: #14B8AA !important; color: #fff !important; }
  .nav-pill:hover { background: #146B78 !important; color: #fff !important; }
  .contact-link:hover { opacity: 0.85 !important; }
  .fab:hover { background: #128f84 !important; }
  
  .faq-answer { display: none; padding: 0 24px 22px; font-size: 15px; line-height: 1.65; color: #1F2A2E; }
  .faq-answer.open { display: block; }
  .faq-icon { transition: transform 0.25s ease; }
  .faq-icon.open { transform: rotate(45deg); }
"""

content = content.replace('</style>', css + '</style>')
content = content.replace('style-hover="background:rgba(20,107,120,0.08); color:#14B8AA;"', 'class="nav-link"')
content = content.replace('style-hover="background:#128f84;"', 'class="btn-whatsapp"')
content = content.replace('style-hover="background:#0f545e;"', 'class="btn-primary"')
content = content.replace('style-hover="background:#14B8AA; color:#fff;"', 'class="btn-outline"')
content = content.replace('style-hover="background:#146B78; color:#fff;"', 'class="nav-pill"')
content = content.replace('style-hover="opacity:0.85;"', 'class="contact-link"')
content = content.replace('style-hover="background:#128f84;"', 'class="fab"')

nav_links = [
  { "label": 'About', "href": '#about', "arrow": '→' },
  { "label": 'Services', "href": '#services', "arrow": '→' },
  { "label": 'Testimonials', "href": '#testimonials', "arrow": '→' },
  { "label": 'FAQ', "href": '#faq', "arrow": '→' },
  { "label": 'Contact', "href": '#contact', "arrow": '→' }
]

values = [
  { "initial": 'T', "title": 'Truth', "desc": 'We act with honesty, integrity and transparency in every interaction.' },
  { "initial": 'T', "title": 'Timeliness', "desc": 'We respect every family’s time by being punctual, responsive and dependable.' },
  { "initial": 'T', "title": 'Thoughtfulness', "desc": 'We anticipate needs before they are expressed, with empathy and attention to detail.' },
  { "initial": 'T', "title": 'Trust', "desc": 'We build confidence through reliability, professionalism and confidentiality.' },
  { "initial": 'T', "title": 'Transformational', "desc": 'We pursue excellence that creates a positive and lasting impact for every family.' }
]

services = [
  { "title": 'HomeCare', "photo": 'image_2.png', "photoLabel": 'Caregiver with mother and newborn at home', "noPhoto": False, "desc": 'Premium care provided in the comfort of the home for expectant mothers, new mothers, newborns and young families. We partner with families to develop bespoke care plans that prioritise comfort, safety and wellbeing.' },
  { "title": 'Corporate Care', "photo": 'image_3.png', "photoLabel": 'Caregivers minding a group of children at an event', "noPhoto": False, "desc": 'Premium care for settings with a number of newborns, infants and children, for families, companies or organisations: retreats, birthdays, seminars, workshops, conferences, prayer meetings, vacations and playdates.' }
]

rates = [
  { "service": 'HomeCare', "range": '50,000 – 500,000' },
  { "service": 'Corporate Care', "range": '200,000 – 5,000,000' }
]

testimonials = [
  { "quote": 'Service is remarkable I wish I could do this even daily. We love our Caregiver, she is the perfect fit for our little girl.', "author": 'New Mother, Kampala' },
  { "quote": 'If you are pregnant please save for such services, it is a life saver!', "author": 'Expectant Mother' },
  { "quote": 'It was soo good... I was able to rest and have learnt so much from our Caregiver.', "author": 'First-time Parent' },
  { "quote": 'Caregiver is knowledgeable about my baby’s specific needs and provided personalised care.', "author": 'Client Family' },
  { "quote": 'I’m extremely satisfied with the safety and hygiene compliance demonstrated by the Caregiver.', "author": 'New Mother' },
  { "quote": 'Thank you for this tremendous experience... Every mother needs to know about JoyfulHome!', "author": 'Client Family' },
  { "quote": 'Your care made the journey smooth and we are really grateful for your services.', "author": 'New Parent, Kampala' }
]

faqs = [
  { "q": 'What is the scope of your services?', "a": 'Our HomeCare services include a variety of offerings such as feeding assistance, diaper changing, bathing, umbilical cord care, monitoring vital signs, and offering guidance on newborn developmental milestones. Our caregivers are trained to support both the physical and emotional needs of your baby.' },
  { "q": 'How are caregivers selected?', "a": 'All caregivers undergo a meticulous selection process that includes background checks, interviews, licence verification and reference checks. They are trained in newborn care best practices, including safe sleep techniques, infant CPR, and first aid.' },
  { "q": 'Can I meet the caregiver before they start working with my family?', "a": 'Yes, we encourage a pre-service meeting with the assigned caregiver to ensure compatibility and discuss your specific needs and expectations in your care plan.' },
  { "q": 'How do you ensure the safety and security of my home and baby?', "a": 'We are committed to maintaining the highest standards of safety and security. Our caregivers follow strict protocols, including frequent hand washing and sanitisation. We ensure confidentiality and respect for your home and family.' },
  { "q": 'What are the qualifications of your caregivers?', "a": 'Our caregivers are registered professionals with certifications in nursing and midwifery. Many have backgrounds in nursing or paediatric care and have completed specialised training in customer service.' },
  { "q": 'What is the process for scheduling and canceling services?', "a": 'You can schedule services by contacting our customer service team. We request at least 1 month’s notice for booking and 48–72 hours’ notice for cancellations to accommodate scheduling changes and ensure caregiver availability.' },
  { "q": 'What are your rates and payment options?', "a": 'Our rates depend on the level of care and hours of service required, with daily, weekly and monthly packages. We offer flexible payment options including flexipay, mobile money payments and direct bank transfers.' }
]

# Replace nav links
nav_html = ''
for link in nav_links:
    nav_html += f'<a href="{link["href"]}" class="nav-link" style="font-family:\'Raleway\',sans-serif; font-weight:600; font-size:15px; color:#146B78; text-decoration:none; padding:8px 14px; border-radius:999px;">{link["label"]}</a>\n'
content = re.sub(r'<sc-for list="\{\{ navLinks \}\}".*?</sc-for>', nav_html, content, count=1, flags=re.DOTALL)

# Replace nav pills (in hero section)
pill_html = ''
for link in nav_links:
    pill_html += f'<a href="{link["href"]}" class="nav-pill" style="font-family:\'Raleway\',sans-serif; font-weight:600; font-size:13px; color:#146B78; background:rgba(20,107,120,0.08); padding:8px 16px; border-radius:999px; text-decoration:none; border:1px solid rgba(20,107,120,0.18);">{link["arrow"]} {link["label"]}</a>\n'
content = re.sub(r'<sc-for list="\{\{ navLinks \}\}".*?</sc-for>', pill_html, content, count=1, flags=re.DOTALL)

# Replace values
values_html = ''
for val in values:
    values_html += f'''
<div style="background:#E7ECE9; border-radius:20px; padding:26px 20px; text-align:center;">
  <div style="width:52px; height:52px; margin:0 auto 14px; border-radius:50%; background:#146B78; color:#fff; display:flex; align-items:center; justify-content:center; font-family:'Mali',cursive; font-weight:700; font-size:20px;">{val["initial"]}</div>
  <div style="font-family:'Mali',cursive; font-weight:700; font-size:18px; color:#146B78; margin-bottom:8px;">{val["title"]}</div>
  <div style="font-size:14px; line-height:1.55; color:#1F2A2E;">{val["desc"]}</div>
</div>
'''
content = re.sub(r'<sc-for list="\{\{ values \}\}".*?</sc-for>', values_html, content, count=1, flags=re.DOTALL)

# Replace services
services_html = ''
for svc in services:
    services_html += f'''
<div style="background:#fff; border-radius:24px; overflow:hidden; box-shadow:0 20px 40px -24px rgba(20,107,120,0.25);">
  <div style="aspect-ratio:16/9;">
    <img src="{svc["photo"]}" alt="{svc["photoLabel"]}" style="width:100%; height:100%; object-fit:cover; display:block;">
  </div>
  <div style="padding:28px;">
    <h3 style="font-family:'Mali',cursive; font-weight:700; font-size:22px; color:#146B78; margin:0 0 10px;">{svc["title"]}</h3>
    <p style="font-size:15px; line-height:1.65; color:#1F2A2E; margin:0;">{svc["desc"]}</p>
  </div>
</div>
'''
content = re.sub(r'<sc-for list="\{\{ services \}\}".*?</sc-for>', services_html, content, count=1, flags=re.DOTALL)

# Replace rates
rates_html = ''
for rate in rates:
    rates_html += f'''
<tr>
  <td style="padding:16px 10px; font-size:16px; font-weight:600; color:#1F2A2E; border-bottom:1px solid #E7ECE9;">{rate["service"]}</td>
  <td style="padding:16px 10px; font-size:16px; color:#1F2A2E; border-bottom:1px solid #E7ECE9; text-align:right;">{rate["range"]} UGX</td>
</tr>
'''
content = re.sub(r'<sc-for list="\{\{ rates \}\}".*?</sc-for>', rates_html, content, count=1, flags=re.DOTALL)

# Replace testimonials
testimonials_html = ''
for t in testimonials:
    testimonials_html += f'''
<div style="flex:0 0 auto; scroll-snap-align:start; width:min(340px,80vw); background:#E7ECE9; border-radius:20px; padding:26px; display:flex; flex-direction:column; gap:14px;">
  <div style="color:#14B8AA; font-size:18px; letter-spacing:2px;">★★★★★</div>
  <p style="font-size:15px; line-height:1.6; color:#1F2A2E; margin:0; flex:1;">“{t["quote"]}”</p>
  <div style="font-family:'Mali',cursive; font-weight:700; font-size:14px; color:#146B78;">{t["author"]}</div>
</div>
'''
content = re.sub(r'<sc-for list="\{\{ testimonials \}\}".*?</sc-for>', testimonials_html, content, count=1, flags=re.DOTALL)

# Replace faqs
faqs_html = ''
for i, faq in enumerate(faqs):
    faqs_html += f'''
<div style="background:#fff; border-radius:16px; overflow:hidden;">
  <button onclick="toggleFaq({i})" style="width:100%; display:flex; align-items:center; justify-content:space-between; gap:16px; background:none; border:none; cursor:pointer; padding:20px 24px; text-align:left; font-family:'Mali',cursive; font-weight:600; font-size:17px; color:#146B78;">
    <span>{faq["q"]}</span>
    <span class="faq-icon" id="faq-icon-{i}" style="flex:0 0 auto; font-size:22px; color:#14B8AA;">+</span>
  </button>
  <div class="faq-answer" id="faq-answer-{i}">{faq["a"]}</div>
</div>
'''
content = re.sub(r'<sc-for list="\{\{ faqs \}\}".*?</sc-for>', faqs_html, content, count=1, flags=re.DOTALL)

# Fix bindings
content = content.replace('{{ heroOpacity }}', '1')
content = content.replace('{{ heroTransform }}', 'translateY(0)')
content = content.replace('{{ heroImgTransform }}', 'translateY(0) scale(1)')

# Fix stat bindings for initial state
content = content.replace('{{ circumference }}', '339.292')
content = content.replace('{{ impactOffset }}', '339.292')
content = content.replace('{{ satOffset }}', '339.292')
content = content.replace('{{ statImpact }}', '<span id="stat-impact-text">0</span>')
content = content.replace('{{ statSatisfaction }}', '<span id="stat-sat-text">0</span>')

# Fix conditional rendering tags
content = re.sub(r'<sc-if value="\{\{ svc\.photo \}\}" hint-placeholder-val="\{\{ false \}\}">(.*?)</sc-if>', r'\1', content, flags=re.DOTALL)
content = re.sub(r'<sc-if value="\{\{ svc\.noPhoto \}\}" hint-placeholder-val="\{\{ false \}\}">(.*?)</sc-if>', '', content, flags=re.DOTALL)
content = re.sub(r'<sc-if value="\{\{ faq\.open \}\}" hint-placeholder-val="\{\{ false \}\}">(.*?)</sc-if>', r'\1', content, flags=re.DOTALL)


# Provide actual JS
js_code = """
<script>
  function toggleFaq(index) {
    const answer = document.getElementById(`faq-answer-${index}`);
    const icon = document.getElementById(`faq-icon-${index}`);
    
    if (answer.classList.contains('open')) {
      answer.classList.remove('open');
      icon.classList.remove('open');
    } else {
      answer.classList.add('open');
      icon.classList.add('open');
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const statsEl = document.getElementById('jh-stats-section');
    const impactText = document.getElementById('stat-impact-text');
    const satText = document.getElementById('stat-sat-text');
    
    // Find the circles that need animation
    const circles = statsEl.querySelectorAll('circle[stroke-dashoffset]');
    if(circles.length >= 2) {
      let impactCircle = circles[0];
      let satCircle = circles[1];

      let ringsVisible = false;

      const animateStats = () => {
        const targetImpact = 99;
        const targetSat = 95;
        
        const circumference = 339.292;
        impactCircle.style.strokeDashoffset = circumference - (targetImpact / 100) * circumference;
        satCircle.style.strokeDashoffset = circumference - (targetSat / 100) * circumference;
        
        const duration = 1400;
        const start = performance.now();
        
        const step = (t) => {
          const p = Math.min((t - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 2);
          impactText.textContent = Math.round(targetImpact * eased);
          satText.textContent = Math.round(targetSat * eased);
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      };

      if (typeof IntersectionObserver !== 'undefined') {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !ringsVisible) {
              ringsVisible = true;
              animateStats();
            }
          });
        }, { threshold: 0.35 });
        io.observe(statsEl);
      } else {
        animateStats();
      }
    }
  });
</script>
"""

# Replace the data script block with the vanilla JS script block
content = re.sub(r'<script type="text/x-dc" data-dc-script>.*?</script>', js_code, content, flags=re.DOTALL)
content = content.replace('<script src="./support.js"></script>', '')

with open('JoyfulHome.dc.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Done")
