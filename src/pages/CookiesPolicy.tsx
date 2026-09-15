import React, { useEffect } from 'react';
import { Shield } from 'lucide-react';

export const CookiesPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-[#fafdf9] min-h-screen relative overflow-hidden font-sans">
      {/* Background glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#277822]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-40 left-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">


        <div className="bg-white border-2 border-[#cfe3cc] rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Decorative element inside the card */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#ebf7e8] to-transparent opacity-50 pointer-events-none flex items-start justify-end p-6">
             <Shield className="w-8 h-8 text-[#a8da9f]" />
          </div>

          <div 
            className="prose prose-slate max-w-none text-slate-600 prose-headings:font-sans prose-headings:text-slate-900 prose-h1:text-4xl sm:prose-h1:text-5xl prose-h1:font-black prose-h1:mb-8 prose-h1:tracking-tight prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-14 prose-h2:mb-6 prose-h2:pb-2 prose-h2:border-b prose-h2:border-slate-200 prose-h3:text-xl prose-h3:font-bold prose-h3:mt-10 prose-h3:mb-4 prose-a:text-[#277822] hover:prose-a:text-[#1e6019] prose-a:transition-colors prose-p:leading-relaxed prose-p:text-justify prose-p:mb-6 prose-li:text-justify text-justify prose-ul:my-6 prose-li:my-2 prose-li:marker:text-[#277822]"
            dangerouslySetInnerHTML={{ __html: `
<div class="text-center mb-12 border-b-2 border-[#cfe3cc] pb-10">
  <h1 class="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight uppercase mb-6 mt-0">COOKIES <span class="text-[#277822]">POLICY</span></h1>
  <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ebf7e8] border border-[#a8da9f] text-xs font-mono font-bold text-[#236d1f] tracking-wider uppercase shadow-sm">
    Last updated: September 15, 2026
  </div>
</div>
<p>This Cookies Policy explains what Cookies are and how We use them. You should read this policy so You can understand what type of cookies We use, or the information We collect using Cookies and how that information is used. This Cookies Policy has been created with the help of the <a href="https://www.termsfeed.com/cookies-policy-generator/" target="_blank">TermsFeed Cookies Policy Generator</a>.</p>
<p>Cookies do not typically contain any information that personally identifies a user, but personal information that We store about You may be linked to the information stored in and obtained from Cookies. For further information on how We use, store and keep your personal data secure, see our Privacy Policy, if and when We make it available within the Website or on our website.</p>
<p>We do not store sensitive personal information, such as mailing addresses, account passwords, etc. in the Cookies We use.</p>
<h2>Interpretation and Definitions</h2>
<h3>Interpretation</h3>
<p>The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
<h3>Definitions</h3>
<p>For the purposes of this Cookies Policy:</p>
<ul>
<li><strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Cookies Policy) refers to Telemora Networks (Pvt) Ltd, 555 Mission Street, Suite 1800, San Francisco, CA 94105, USA.</li>
<li><strong>Cookies</strong> means small files that are placed on Your computer, mobile device or any other device by a website, containing details of your browsing history on that website among its many uses.</li>
<li><strong>Website</strong> refers to telemora, accessible from <a href="telemora.net" target="_blank">telemora.net</a>.</li>
<li><strong>You</strong> means the individual accessing or using the Website, or a company, or any legal entity on behalf of which such individual is accessing or using the Website, as applicable.</li>
</ul>
<h2>The use of the Cookies</h2>
<h3>Type of Cookies We Use</h3>
<p>Cookies can be &quot;Persistent&quot; or &quot;Session&quot; Cookies. Persistent Cookies remain on your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close your web browser.</p>
<p>Where required by law, We will request your consent before using Cookies that are not strictly necessary. Strictly necessary Cookies are used to provide the Website and cannot be switched off in our systems.</p>
<p>We use both session and persistent Cookies for the purposes set out below:</p>
<ul>
<li>
<p><strong>Necessary / Essential Cookies</strong></p>
<p>Type: Session Cookies</p>
<p>Administered by: Us</p>
<p>Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.</p>
</li>
<li>
<p><strong>Functionality Cookies</strong></p>
<p>Type: Persistent Cookies</p>
<p>Administered by: Us</p>
<p>Purpose: These Cookies allow Us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.</p>
</li>
</ul>
<h3>Your Choices Regarding Cookies</h3>
<p>If You prefer to avoid the use of Cookies on the Website, first You must disable the use of Cookies in your browser and then delete the Cookies saved in your browser associated with the Website. You may use this option for preventing the use of Cookies at any time.</p>
<p>If You do not accept Our Cookies, You may experience some inconvenience in your use of the Website and some features may not function properly.</p>
<p>If You'd like to delete Cookies or instruct your web browser to delete or refuse Cookies, please visit the help pages of your web browser.</p>
<ul>
<li>
<p>For the Chrome web browser, please visit this page from Google: <a href="https://support.google.com/accounts/answer/32050" rel="external nofollow noopener" target="_blank">https://support.google.com/accounts/answer/32050</a></p>
</li>
<li>
<p>For the Microsoft Edge browser, please visit this page from Microsoft: <a href="https://support.microsoft.com/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" rel="external nofollow noopener" target="_blank">https://support.microsoft.com/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09</a></p>
</li>
<li>
<p>For the Firefox web browser, please visit this page from Mozilla: <a href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored" rel="external nofollow noopener" target="_blank">https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored</a></p>
</li>
<li>
<p>For the Safari web browser, please visit this page from Apple: <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" rel="external nofollow noopener" target="_blank">https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac</a></p>
</li>
</ul>
<p>For any other web browser, please visit your web browser's official web pages.</p>
<h3>Changes to this Cookies Policy</h3>
<p>We may update this Cookies Policy from time to time. The &quot;Last updated&quot; date at the top indicates when it was last revised.</p>
<h2>Contact Us</h2>
<p>If you have any questions about this Cookies Policy, You can contact us:</p>
<div class="not-prose mt-8 mb-4">
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <div class="p-6 rounded-2xl bg-white border-2 border-[#cfe3cc] hover:border-[#277822] transition-colors shadow-sm">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-10 h-10 rounded-xl bg-[#ebf7e8] border border-[#a8da9f] flex items-center justify-center text-[#277822]">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
        </div>
        <div>
          <h3 class="font-extrabold text-base text-slate-900 m-0">USA Office</h3>
          <p class="text-[10px] font-mono font-bold text-[#236d1f] uppercase tracking-wider m-0">Telemora Networks LLC</p>
        </div>
      </div>
      <p class="text-sm text-slate-600 leading-relaxed mb-4">555 Mission Street, Suite 1800,<br/>San Francisco, CA 94105, USA</p>
      <a href="tel:+14155552105" class="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-[#277822] transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        +1 415 555 2105
      </a>
    </div>

    <div class="p-6 rounded-2xl bg-white border-2 border-[#cfe3cc] hover:border-[#277822] transition-colors shadow-sm">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-10 h-10 rounded-xl bg-[#ebf7e8] border border-[#a8da9f] flex items-center justify-center text-[#277822]">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
        </div>
        <div>
          <h3 class="font-extrabold text-base text-slate-900 m-0">Sri Lanka Office</h3>
          <p class="text-[10px] font-mono font-bold text-[#236d1f] uppercase tracking-wider m-0">Telemora Networks (Pvt) Ltd</p>
        </div>
      </div>
      <p class="text-sm text-slate-600 leading-relaxed mb-4">51 Cinnamon Park,<br/>Dehiwala, Sri Lanka</p>
      <a href="tel:+94112917584" class="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-[#277822] transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        +94 11 291 7584
      </a>
    </div>
  </div>

  <div class="mt-6 flex justify-start">
    <a href="mailto:connect@telemora.net" class="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-[#ebf7e8] border border-[#a8da9f] text-[#277822] font-semibold hover:bg-[#277822] hover:text-white transition-colors shadow-sm group">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:scale-110 transition-transform"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
      connect@telemora.net
    </a>
  </div>
</div>
            `}} 
          />
        </div>
      </div>
    </div>
  );
};

export default CookiesPolicy;
