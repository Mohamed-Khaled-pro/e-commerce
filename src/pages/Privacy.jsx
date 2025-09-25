import React from "react";
import { Link } from "react-router-dom";
const DEFAULTS = {
  siteName: "MealMap",
  contactEmail: "privacy@mealmap.com",
  effectiveDate: "September 25, 2025",
  jurisdictionNote:
    "This policy may include references to GDPR (EU), CCPA (California) or other laws depending on where you operate.",
};

export default function PrivacyPolicy({ siteName, contactEmail, effectiveDate }) {
  const NAME = siteName || DEFAULTS.siteName;
  const EMAIL = contactEmail || DEFAULTS.contactEmail;
  const DATE = effectiveDate || DEFAULTS.effectiveDate;

  function downloadPolicy() {
    const text = document.getElementById("privacy-content")?.innerText || "";
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${NAME.replace(/\s+/g, "_")}_Privacy_Policy.txt`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 p-6 md:p-12 mt-15">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <header className="p-8 border-b border-gray-100">
          <h1 className="text-3xl md:text-4xl font-extrabold text-orange-700">{NAME} — Privacy Policy</h1>
          <p className="mt-2 text-sm text-gray-600">Effective date: <span className="font-medium">{DATE}</span></p>
          <div className="mt-4 flex gap-3">
            <button className="btn btn-primary" onClick={() => window.scrollTo({ top: 400, behavior: 'smooth' })}>
              Read Policy
            </button>
            <button className="btn btn-light" onClick={downloadPolicy}>
              Download
            </button>
            <Link className="btn btn-secondary" to="/contact">Contact</Link>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <nav className="md:col-span-1 p-6 border-r border-gray-100 hidden md:block">
            <h3 className="font-semibold text-gray-700 mb-4">On this page</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a className="hover:text-orange-700" href="#intro">Introduction</a></li>
              <li><a className="hover:text-orange-700" href="#data-collected">Data we collect</a></li>
              <li><a className="hover:text-orange-700" href="#use">How we use data</a></li>
              <li><a className="hover:text-orange-700" href="#cookies">Cookies & tracking</a></li>
              <li><a className="hover:text-orange-700" href="#third-parties">Third parties</a></li>
              <li><a className="hover:text-orange-700" href="#rights">Your rights</a></li>
              <li><a className="hover:text-orange-700" href="#security">Security</a></li>
              <li><a className="hover:text-orange-700" href="#children">Children</a></li>
              <li><a className="hover:text-orange-700" href="#changes">Changes</a></li>
              <li><a className="hover:text-orange-700" href="#contact">Contact</a></li>
            </ul>
          </nav>

          <article id="privacy-content" className="md:col-span-3 p-8 prose prose-sm md:prose lg:prose-lg max-w-none">
            <section id="intro">
              <h2>Introduction</h2>
              <p>
                {NAME} we respects your privacy and is committed to protecting it through our compliance
                with this policy. The following Privacy Policy explains what information we collect, how we use it, who we
                share it with, and the choices you have regarding your information.
              </p>
              <p className="text-sm text-gray-600">{DEFAULTS.jurisdictionNote}</p>
            </section>

            <section id="data-collected">
              <h2>1. Data we collect</h2>
              <p>
                We collect information you provide directly and information that is automatically collected when you use
                our services. Common categories include:
              </p>
              <ul>
                <li><strong>Contact information:</strong> name, email address, phone number when you sign up or contact us.</li>
                <li><strong>Account data:</strong> username, hashed password, profile details.</li>
                <li><strong>Usage data:</strong> pages visited, features used, timestamps, session length.</li>
                <li><strong>Device &amp; technical data:</strong> IP address, browser type, operating system, device identifiers.</li>
                <li><strong>Payment data:</strong> if you make purchases we may process payment information via secure processors (we do not store full payment card data on our servers).</li>
              </ul>
            </section>

            <section id="use">
              <h2>2. How we use your data</h2>
              <p>We use the collected data to:</p>
              <ul>
                <li>Provide, maintain and improve our services.</li>
                <li>Process transactions and send you related information.</li>
                <li>Personalize content and recommend features.</li>
                <li>Send promotional messages (you can opt-out anytime).</li>
                <li>Detect, investigate and prevent fraudulent or illegal activity.</li>
              </ul>
            </section>

            <section id="cookies">
              <h2>3. Cookies and similar tracking technologies</h2>
              <p>
                We and our partners use cookies and similar technologies to operate and improve the service, remember
                your preferences, and deliver personalized content. You can control cookies through your browser settings
                and opt-out tools offered by third-party vendors.
              </p>
              <p>
                Typical categories: <em>essential</em> (required for site functionality), <em>analytics</em> (usage
                measurement), and <em>advertising</em> (personalized ads).
              </p>
            </section>

            <section id="third-parties">
              <h2>4. Third-party services</h2>
              <p>
                We may share data with third-party service providers that help operate the site (e.g., analytics,
                hosting, payment processors). These providers are contractually bound to protect your information.
              </p>
              <p>
                We currently do not use third-party analytics, payment, or email providers. If that changes in the future we'll update this policy to list them and explain what data is shared.
              </p>
            </section>

            <section id="rights">
              <h2>5. Your privacy rights</h2>
              <p>
                Depending on your jurisdiction, you may have rights such as: accessing the personal data we hold about
                you, requesting correction or deletion, objecting to processing, and getting a copy of your data. To
                exercise any rights, contact us at <a className="text-orange-700 font-medium" href={`mailto:${EMAIL}`}>{EMAIL}</a>.
              </p>
            </section>

            <section id="security">
              <h2>6. Security</h2>
              <p>
                We take reasonable measures to protect your information using administrative, technical, and physical
                safeguards. While we strive to protect your data, no system is completely secure — we cannot guarantee
                absolute security.
              </p>
            </section>

            <section id="children">
              <h2>7. Children</h2>
              <p>
                Our services are not intended for individuals under 13 (or a higher age if required by local law). We do
                not knowingly collect personal information from children. If you believe we have collected such data,
                contact us and we will take steps to remove it.
              </p>
            </section>

            <section id="changes">
              <h2>8. Changes to this policy</h2>
              <p>
                We may update this policy from time to time. We will post the updated policy with a new effective date and
               , where required by law, give you notice of material changes.
              </p>
            </section>

            <section id="contact">
              <h2>9. Contact us</h2>
              <p>If you have questions or requests regarding this policy, contact us at <a className="text-orange-700 font-medium" href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button className="btn btn-primary" onClick={() => window.print()}>Print</button>
                <button className="btn btn-light" onClick={downloadPolicy}>Download as TXT</button>
                <a className="btn btn-secondary" href={`mailto:${EMAIL}`}>Email us</a>
              </div>
            </section>

            <footer className="mt-8 text-sm text-gray-500">© {new Date().getFullYear()} {NAME}. All rights reserved.</footer>
          </article>
        </div>
      </div>
    </main>
  );
}
