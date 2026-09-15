import React, { useEffect } from 'react';
import { Shield } from 'lucide-react';

export const TermsConditions: React.FC = () => {
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
  <h1 class="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight uppercase mb-6 mt-0">TERMS AND <span class="text-[#277822]">CONDITIONS</span></h1>
  <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ebf7e8] border border-[#a8da9f] text-xs font-mono font-bold text-[#236d1f] tracking-wider uppercase shadow-sm">
    Last updated: September 15, 2026
  </div>
</div>
<p>Please read these terms and conditions carefully before using Our Service.</p>
<h2>Interpretation and Definitions</h2>
<h3>Interpretation</h3>
<p>The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
<h3>Definitions</h3>
<p>For the purposes of these Terms and Conditions:</p>
<ul>
<li>
<p><strong>Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party, where &quot;control&quot; means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</p>
</li>
<li>
<p><strong>Country/State</strong> refers to: California,  United States</p>
</li>
<li>
<p><strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in these Terms and Conditions) refers to Telemora Networks (Pvt) Ltd, 555 Mission Street, Suite 1800, San Francisco, CA 94105, USA.</p>
</li>
<li>
<p><strong>Device</strong> means any device that can access the Service such as a computer, a cell phone or a digital tablet.</p>
</li>
<li>
<p><strong>Service</strong> refers to the Website.</p>
</li>
<li>
<p><strong>Terms and Conditions</strong> (also referred to as &quot;Terms&quot;) means these Terms and Conditions, including any documents expressly incorporated by reference, which govern Your access to and use of the Service and form the entire agreement between You and the Company regarding the Service. These Terms and Conditions have been created with the help of the <a href="https://www.termsfeed.com/terms-conditions-generator/" target="_blank">TermsFeed Terms and Conditions Generator</a>.</p>
</li>
<li>
<p><strong>Third-Party Social Media Service</strong> means any services or content (including data, information, products or services) provided by a third party that is displayed, included, made available, or linked to through the Service.</p>
</li>
<li>
<p><strong>Website</strong> refers to telemora, accessible from <a href="telemora.net" target="_blank">telemora.net</a></p>
</li>
<li>
<p><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
</li>
</ul>
<h2>Acknowledgment</h2>
<p>These are the Terms and Conditions governing the use of this Service and the agreement between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.</p>
<p>Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.</p>
<p>By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.</p>
<p>You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.</p>
<p>Your access to and use of the Service is also subject to Our Privacy Policy, which describes how We collect, use, and disclose personal information. Please read Our Privacy Policy carefully before using Our Service.</p>
<h2>Links to Other Websites</h2>
<p>Our Service may contain links to third-party websites or services that are not owned or controlled by the Company.</p>
<p>The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such websites or services.</p>
<p>We strongly advise You to read the terms and conditions and privacy policies of any third-party websites or services that You visit.</p>
<h3>Links from a Third-Party Social Media Service</h3>
<p>The Service may display, include, make available, or link to content or services provided by a Third-Party Social Media Service. A Third-Party Social Media Service is not owned or controlled by the Company, and the Company does not endorse or assume responsibility for any Third-Party Social Media Service.</p>
<p>You acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with Your access to or use of any Third-Party Social Media Service, including any content, goods, or services made available through them. Your use of any Third-Party Social Media Service is governed by that Third-Party Social Media Service's terms and privacy policies.</p>
<h2>Termination</h2>
<p>We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.</p>
<p>Upon termination, Your right to use the Service will cease immediately.</p>
<h2>Limitation of Liability</h2>
<p>Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of these Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.</p>
<p>To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of these Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.</p>
<p>Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.</p>
<h2>&quot;AS IS&quot; and &quot;AS AVAILABLE&quot; Disclaimer</h2>
<p>The Service is provided to You &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.</p>
<p>Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.</p>
<p>Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.</p>
<h2>Governing Law</h2>
<p>The laws of the Country/State, excluding its conflicts of law rules, shall govern these Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.</p>
<h2>Disputes Resolution</h2>
<p>If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.</p>
<h2>For European Union (EU) Users</h2>
<p>If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which You are resident.</p>
<h2>United States Legal Compliance</h2>
<p>You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a &quot;terrorist supporting&quot; country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.</p>
<h2>Severability and Waiver</h2>
<h3>Severability</h3>
<p>If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.</p>
<h3>Waiver</h3>
<p>Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.</p>
<h2>Translation Interpretation</h2>
<p>These Terms and Conditions may have been translated if We have made them available to You on our Service.
You agree that the original English text shall prevail in the case of a dispute.</p>
<h2>Changes to These Terms and Conditions</h2>
<p>We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.</p>
<p>By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the Service.</p>
<h2>Contact Us</h2>
<p>If you have any questions about these Terms and Conditions, You can contact us:</p>
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

export default TermsConditions;
