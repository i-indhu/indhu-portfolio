import { useEffect, useState, type FormEvent } from 'react';
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Cloud,
  Code2,
  FileCode2,
  GraduationCap,
  Heart,
  Layers3,
  Mail,
  Menu,
  Monitor,
  Palette,
  Send,
  Sparkles,
  Terminal,
  Trophy,
  X,
} from 'lucide-react';

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Education', id: 'education' },
  { label: 'Skills', id: 'skills' },
  { label: 'Services', id: 'services' },
  { label: 'Projects', id: 'projects' },
  { label: 'Credentials', id: 'credentials' },
  { label: 'Contact', id: 'contact' },
];

const technicalGroups = [
  { label: 'Frontend', icon: Monitor, items: ['HTML', 'CSS', 'JavaScript'] },
  { label: 'Programming', icon: Terminal, items: ['Python', 'Java'] },
  { label: 'Cloud', icon: Cloud, items: ['AWS Cloud', 'AWS Console'] },
  { label: 'Tools & software', icon: Layers3, items: ['VS Code', 'WordPress', 'MS Office', 'Github & Git'] },
];

const services = [
  { number: '01', title: 'Frontend development', text: 'Building clear, responsive interfaces with a solid foundation in HTML, CSS and JavaScript.', icon: Code2 },
  { number: '02', title: 'Web design', text: 'Shaping thoughtful layouts that keep visual clarity and ease of use at the center.', icon: Palette },
  { number: '03', title: 'Website development', text: 'Turning ideas into structured web experiences with a practical, detail-oriented approach.', icon: Monitor },
  { number: '04', title: 'UI implementation', text: 'Translating design direction into polished interfaces that work across screen sizes.', icon: FileCode2 },
  { number: '05', title: 'Logo & visual design', text: 'Exploring visual systems that give digital work a distinctive and considered identity.', icon: Sparkles },
  { number: '06', title: 'Responsive experiences', text: 'Making every interaction feel intentional, from the first mobile breakpoint to desktop.', icon: Layers3 },
];

const certifications = [
  { title: 'Responsive Web Design', provider: 'freeCodeCamp', kind: 'Certification' },
  { title: 'Python Basic', provider: 'Udemy', kind: 'Course' },
  { title: 'Cloud Computing', provider: 'DataCamp', kind: 'Course' },
  { title: 'SQL Basic', provider: 'HackerRank', kind: 'Certification' },
  { title: 'AWS Concept', provider: 'DataCamp', kind: 'Learning' },
];

const softSkills = ['Good communication', 'Creativity & innovation', 'Leadership', 'Time management'];

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0);
      const sections = navItems.map(({ id }) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
      const current = sections.reduce((closest, section) => {
        const distance = Math.abs(section.getBoundingClientRect().top - 140);
        return distance < closest.distance ? { id: section.id, distance } : closest;
      }, { id: 'home', distance: Number.POSITIVE_INFINITY });
      setActiveSection(current.id);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      setFormStatus('error');
      return;
    }
    setFormStatus('success');
    form.reset();
  };

  return (
    <div className="site-shell">
      <div className="progress-line" style={{ width: `${scrollProgress}%` }} />
      <header className="topbar">
        <button className="brand" onClick={() => scrollTo('home')} aria-label="Go to homepage">
          <span className="brand-mark">IR</span>
          <span className="brand-name">Indhuja R.I<span>.</span></span>
        </button>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          {navItems.map((item) => (
            <button key={item.id} className={activeSection === item.id ? 'active' : ''} onClick={() => scrollTo(item.id)}>
              {item.label}
            </button>
          ))}
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <main>
        <section id="home" className="hero section-pad">
          <div className="hero-grid">
            <div className="hero-copy reveal">
              <div className="eyebrow"><span className="eyebrow-dot" /> Web Developer Intern · Rank You Higher</div>
              <h1>Building digital experiences with <em>clarity.</em></h1>
              <p className="hero-lede">I’m Indhuja R.I, a web developer focused on creating responsive, thoughtful interfaces and growing through every project I build.</p>
              <div className="hero-actions">
                <button className="button button-dark" onClick={() => scrollTo('projects')}>Explore my work <ArrowUpRight size={16} /></button>
                <button className="text-button" onClick={() => scrollTo('contact')}>Let&apos;s connect <ChevronRight size={16} /></button>
              </div>
              <div className="hero-meta"><span>Web development</span><span className="meta-rule" /><span>Always learning</span></div>
            </div>
            <div className="hero-art reveal reveal-delay">
              <div className="art-grid" />
              <img className="hero-photo" src="/images/ChatGPT_Image_Sep_25,_2026,_11_59_18_AM.png" alt="Indhuja R.I" />
              <div className="art-orbit orbit-one" />
              <div className="art-orbit orbit-two" />
              <div className="hero-monogram"><span>I</span><span>R</span></div>
              <div className="art-caption"><span>01 / 04</span><span>Digital identity</span></div>
              <div className="floating-note note-top"><Code2 size={15} /> responsive by default</div>
              <div className="floating-note note-bottom"><Sparkles size={15} /> always learning</div>
            </div>
          </div>
          <button className="scroll-cue" onClick={() => scrollTo('about')}><span>Scroll to explore</span><ArrowDown size={15} /></button>
        </section>

        <section id="about" className="section-pad content-section">
          <SectionIntro index="01" eyebrow="A little context" title={<>Beyond the <em>code.</em></>} />
          <div className="about-layout">
            <div className="about-lede"><p className="large-copy">I’m a web developer building on a strong foundation in information technology, creating digital work that feels useful, clear and considered.</p><p>My approach combines structured frontend development with curiosity about cloud tools, programming and the details that make a website easier to use.</p></div>
            <div className="fact-grid">
              <FactCard label="Current role" value="Web Developer Intern" detail="Rank You Higher" icon={BriefcaseBusiness} />
              <FactCard label="Focus" value="Frontend development" detail="HTML, CSS and JavaScript" icon={Code2} />
              <FactCard label="Core interest" value="Cloud & web tools" detail="AWS, WordPress and Git" icon={Sparkles} />
              <FactCard label="Mindset" value="Keep learning" detail="Curious, practical, consistent" icon={Heart} />
            </div>
          </div>
        </section>

        <section id="education" className="section-pad soft-section content-section">
          <SectionIntro index="02" eyebrow="The foundation" title={<>An academic <em>point of view.</em></>} />
          <div className="education-layout">
            <div className="education-note"><GraduationCap size={30} strokeWidth={1.5} /><p>A grounding in information technology, strengthened by hands-on exploration of web development and programming.</p></div>
            <div className="timeline">
              <TimelineItem year="2023 — 2026" title="Bachelor of Degree in Information Technology" detail="Rathinam College of Arts and Science, Eachanari · 7.70 CGPA" />
              <TimelineItem year="2022 — 2023" title="Higher Secondary" detail="Nachiyar Vidyalayam Matric Hr. Sec. School, Pollachi · 74% HSC" />
              <TimelineItem year="2020 — 2021" title="Secondary" detail="Shankinetan Matric School, Pollachi · PASS SSLC" />
            </div>
          </div>
        </section>

        <section id="skills" className="section-pad content-section">
          <SectionIntro index="03" eyebrow="What I work with" title={<>Tools for turning ideas into <em>interfaces.</em></>} />
          <div className="skills-layout">
            <div><p className="section-kicker">Technical expertise</p><div className="skill-groups">{technicalGroups.map(({ label, icon: Icon, items }) => <div className="skill-group" key={label}><div className="skill-group-head"><Icon size={18} /><span>{label}</span></div><div className="tag-list">{items.map((item) => <span className="tag" key={item}>{item}</span>)}</div></div>)}</div></div>
            <div className="strength-panel"><p className="section-kicker">Professional strengths</p><h3>How I bring the work together.</h3><p>Technical growth matters most when it is paired with communication, creativity and the discipline to keep moving a project forward.</p><div className="strength-list">{softSkills.map((skill) => <div key={skill}><Check size={16} /> {skill}</div>)}</div></div>
          </div>
        </section>

        <section id="services" className="section-pad dark-section content-section">
          <SectionIntro index="04" eyebrow="Ways I can contribute" title={<>From first sketch to <em>finished screen.</em></>} light />
          <div className="services-grid">{services.map(({ number, title, text, icon: Icon }) => <article className="service-card" key={number}><div className="service-top"><span>{number}</span><Icon size={20} /></div><h3>{title}</h3><p>{text}</p><ArrowUpRight className="service-arrow" size={18} /></article>)}</div>
        </section>

        <section id="projects" className="section-pad content-section">
          <SectionIntro index="05" eyebrow="Selected work" title={<>Projects in <em>practice.</em></>} />
          <article className="project-feature"><div className="project-visual"><div className="project-window"><div className="window-bar"><span /><span /><span /></div><div className="keyboard-visual"><div className="key-row"><i /><i /><i /><i /><i /><i /><i /></div><div className="key-row offset"><i /><i /><i /><i /><i /><i /></div><div className="key-row"><i /><i /><i /><i /><i /><i /><i /></div><div className="hand-cursor"><span /></div></div></div><span className="visual-label">AIR CANVAS</span></div><div className="project-info"><div className="project-number">01 — Personal project</div><h3>Air Canvas</h3><p>A gesture-controlled virtual keyboard built with Python, Flask, OpenCV and MediaPipe. It explores touchless typing through real-time hand tracking and pinch detection.</p><div className="tag-list"><span className="tag">Python</span><span className="tag">Flask</span><span className="tag">OpenCV</span><span className="tag">MediaPipe</span></div><div className="project-footer"><span>Web application</span><span className="project-line" /><span>Exploration / Build</span></div></div></article>
        </section>

        <section id="credentials" className="section-pad soft-section content-section">
          <SectionIntro index="06" eyebrow="Learning in motion" title={<>Credentials that keep me <em>curious.</em></>} />
          <div className="credential-grid">{certifications.map((item) => <article className="credential-card" key={item.title}><div className="credential-icon"><Trophy size={18} /></div><div><span className="credential-kind">{item.kind}</span><h3>{item.title}</h3><p>{item.provider}</p></div><ArrowUpRight size={17} /></article>)}</div>
          <div className="journey-card"><div className="journey-icon"><BriefcaseBusiness size={22} /></div><div><span className="credential-kind">Current professional journey</span><h3>Web Developer Intern</h3><p>Rank You Higher</p></div><div className="journey-status">Present <span /></div></div>
          <div className="achievement-row"><Trophy size={20} /><div><span className="credential-kind">Achievements</span><h3>Byte Battle winner & Python Gold Badge</h3><p>Recognised in the Byte Battle Coding Contest and earned a Python Gold Badge on HackerRank.</p></div></div>
        </section>

        <section className="section-pad content-section more-section"><div className="more-card"><div className="more-mark">IR<span>.</span></div><div><p className="section-kicker">Behind the developer</p><h2>More than just <em>code.</em></h2><p className="more-copy">The best part of technology, for me, is the space between an idea and the moment it becomes real. I’m interested in the details that make a digital experience feel natural — and in the steady practice it takes to make good work better.</p><button className="text-button" onClick={() => scrollTo('contact')}>Start a conversation <ChevronRight size={16} /></button></div></div></section>

        <section id="contact" className="section-pad dark-section content-section contact-section"><SectionIntro index="07" eyebrow="Have something in mind?" title={<>Let&apos;s build something <em>meaningful.</em></>} light /><div className="contact-layout"><div className="contact-copy"><p>Whether it’s an early idea, a website that needs shape or a conversation about web development, I’d be glad to hear from you.</p><div className="contact-prompt"><Mail size={18} /><span><a href="mailto:rindhuja692@gmail.com">rindhuja692@gmail.com</a><br /><strong>+91 9500785451</strong></span></div></div><form className="contact-form" onSubmit={handleSubmit} noValidate><div className="form-row"><label>Name<input name="name" required placeholder="Your name" /></label><label>Email<input name="email" type="email" required placeholder="you@example.com" /></label></div><label>Subject<input name="subject" required placeholder="What would you like to discuss?" /></label><label>Message<textarea name="message" required rows={5} placeholder="Tell me a little about it..." /></label>{formStatus === 'success' && <div className="form-message success"><Check size={16} /> Your message is ready — thank you for reaching out.</div>}{formStatus === 'error' && <div className="form-message error">Please complete each field with valid information.</div>}<button className="button button-light" type="submit">Send message <Send size={16} /></button></form></div></section>
      </main>

      <footer className="footer"><div className="footer-brand"><span className="brand-mark">IR</span><div><strong>Indhuja R.I<span>.</span></strong><small>Web Developer Intern at Rank You Higher</small></div></div><div className="footer-right"><span>© {new Date().getFullYear()} Indhuja R.I</span><button onClick={() => scrollTo('home')} aria-label="Back to top"><ArrowUp size={16} /></button></div></footer>
    </div>
  );
}

function SectionIntro({ index, eyebrow, title, light = false }: { index: string; eyebrow: string; title: React.ReactNode; light?: boolean }) {
  return <div className={`section-intro ${light ? 'light' : ''}`}><span className="section-index">{index}</span><div><p className="section-kicker">{eyebrow}</p><h2>{title}</h2></div></div>;
}

function FactCard({ label, value, detail, icon: Icon }: { label: string; value: string; detail: string; icon: typeof Trophy }) {
  return <div className="fact-card"><Icon size={17} /><span>{label}</span><strong>{value}</strong><small>{detail}</small></div>;
}

function TimelineItem({ year, title, detail }: { year: string; title: string; detail: string }) {
  return <div className="timeline-item"><div className="timeline-marker" /><div className="timeline-copy"><span>{year}</span><h3>{title}</h3><p>{detail}</p></div></div>;
}

export default App;
