import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Github, Linkedin, CheckCircle, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const socialLinks = [
  { icon: Github, href: 'https://github.com/raixyzaditya', label: 'GitHub', color: 'hover:text-foreground' },

  { icon: Linkedin, href: 'https://www.linkedin.com/in/aditya-rai-4854742b8/', label: 'LinkedIn', color: 'hover:text-blue-500' },
  
  { icon: Mail, href: 'mailto:raiaditya915@gmail.com?subject=Hello Aditya&body=Hi Aditya,%0D%0A%0D%0AI wanted to connect with you regarding...', label: 'Email', color: 'hover:text-primary' },

  
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xrbnyody';
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic client-side validation (optional)
    if (!formData.name?.trim() || !formData.email?.trim() || !formData.message?.trim()) {
      toast({ title: 'Please fill all fields', variant: 'destructive' });
      setIsSubmitting(false);
      return;
    }

    // Honeypot field check (should be empty)
    const honeypotValue = (e.currentTarget as HTMLFormElement).querySelector<HTMLInputElement>('input[name="website"]')?.value;
    if (honeypotValue) {
      // likely spam — silently ignore or show a friendly message
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // Formspree expects JSON or form-encoded. JSON is fine for SPA.
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _replyto: formData.email, // lets Formspree set reply-to
        }),
      });

      if (!res.ok) {
        // Formspree returns 200/201 on success, other codes on error
        const err = await res.json().catch(() => ({}));
        throw new Error(err?.error || 'Failed to send message');
      }

      // Success UI
      setIsSubmitted(true);
      toast({ title: 'Message sent!', description: "Thanks — I'll reply soon." });

      // optional: confetti (install canvas-confetti to use)
      // confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });

      // clear form after short pause so user sees success
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitted(false);
      }, 2500);
    } catch (err) {
      console.error(err);
      toast({ title: 'Error', description: (err as Error).message || 'Try again later', variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 mesh-gradient opacity-40" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm font-mono text-primary mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Have a project in mind? I'd love to hear about it. Let's create something amazing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8">
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
                action="https://formspree.io/f/xrbnyody"   // <-- optional HTML fallback; replace YOUR_FORM_ID
                method="POST"                                  // <-- required for fallback
                noValidate
              >
                {/* HONEYPOT - keep visually hidden; bots fill it, humans won't */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{ display: 'none' }}
                />

                {/* Name Input */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-muted/50 border border-border rounded-xl px-4 py-4 text-foreground placeholder-transparent peer focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your Name"
                    id="name"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-4 -top-2.5 bg-card px-2 text-sm text-muted-foreground transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary"
                  >
                    Your Name
                  </label>
                </div>

                {/* Email Input */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-muted/50 border border-border rounded-xl px-4 py-4 text-foreground placeholder-transparent peer focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your Email"
                    id="email"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 -top-2.5 bg-card px-2 text-sm text-muted-foreground transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary"
                  >
                    Your Email
                  </label>
                </div>

                {/* Message Input */}
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-muted/50 border border-border rounded-xl px-4 py-4 text-foreground placeholder-transparent peer focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Your Message"
                    id="message"
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-4 -top-2.5 bg-card px-2 text-sm text-muted-foreground transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary"
                  >
                    Your Message
                  </label>
                </div>

                {/* Accessible live region to announce success/error */}
                <div aria-live="polite" className="sr-only" id="contact-status" />

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="gradient"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting || isSubmitted}
                >
                  {isSubmitted ? (
                    <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center gap-2">
                      <CheckCircle size={20} />
                      Message Sent!
                    </motion.span>
                  ) : isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}>
                        <Send size={18} />
                      </motion.div>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send size={18} />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>

            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-8">
              {/* Info Cards */}
              <div className="space-y-4">
                <motion.a
                  href="mailto:raiaditya915@gmail.com"
                  className="glass rounded-xl p-6 flex items-center gap-4 block"
                  whileHover={{ scale: 1.02, x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center">
                    <Mail className="text-primary" size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">raiaditya915@gmail.com</p>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:+919818831002"
                  className="glass rounded-xl p-6 flex items-center gap-4 block"
                  whileHover={{ scale: 1.02, x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center">
                    <Phone className="text-primary" size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">+91 98188 31002</p>
                  </div>
                </motion.a>

                <motion.div
                  className="glass rounded-xl p-6 flex items-center gap-4"
                  whileHover={{ scale: 1.02, x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center">
                    <MapPin className="text-primary" size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Faridabad, India</p>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith('http') ? '_blank' : undefined}
                      rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`w-12 h-12 rounded-full glass flex items-center justify-center text-muted-foreground ${social.color} transition-all duration-300`}
                      whileHover={{ scale: 1.15, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <motion.div
                className="glass rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="text-sm">
                    Open to internships and collaboration opportunities
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
