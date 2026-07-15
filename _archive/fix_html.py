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
  
  /* Hero animations handled by vanilla JS now */
"""

content = content.replace('</style>', css + '</style>')
content = content.replace('style-hover="background:rgba(20,107,120,0.08); color:#14B8AA;"', 'class="nav-link"')
content = content.replace('style-hover="background:#128f84;"', 'class="btn-whatsapp"')
content = content.replace('style-hover="background:#0f545e;"', 'class="btn-primary"')
content = content.replace('style-hover="background:#14B8AA; color:#fff;"', 'class="btn-outline"')
content = content.replace('style-hover="background:#146B78; color:#fff;"', 'class="nav-pill"')
content = content.replace('style-hover="opacity:0.85;"', 'class="contact-link"')
content = content.replace('style-hover="background:#128f84;"', 'class="fab"')

# Now let's extract the JS data
nav_links_match = re.search(r'const NAV_LINKS = (\[.*?\]);', content, re.DOTALL)
values_match = re.search(r'const VALUES = (\[.*?\]);', content, re.DOTALL)
services_match = re.search(r'const SERVICES = (\[.*?\]);', content, re.DOTALL)
rates_match = re.search(r'const RATES = (\[.*?\]);', content, re.DOTALL)
testimonials_match = re.search(r'const TESTIMONIALS = (\[.*?\]);', content, re.DOTALL)
faqs_match = re.search(r'const FAQS = (\[.*?\]);', content, re.DOTALL)

def js_to_py(js_str):
    js_str = re.sub(r'(\w+):', r'"\1":', js_str)
    js_str = js_str.replace("'", '"')
    return json.loads(js_str)

nav_links = js_to_py(nav_links_match.group(1))
values = js_to_py(values_match.group(1))
services = js_to_py(services_match.group(1))
rates = js_to_py(rates_match.group(1))
testimonials = js_to_py(testimonials_match.group(1))
faqs = js_to_py(faqs_match.group(1))

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
  });
</script>
"""

# Replace the data script block with the vanilla JS script block
content = re.sub(r'<script type="text/x-dc" data-dc-script>.*?</script>', js_code, content, flags=re.DOTALL)
content = content.replace('<script src="./support.js"></script>', '')

with open('JoyfulHome.dc.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Done")
