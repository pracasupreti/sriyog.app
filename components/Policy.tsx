"use client";

export default function PrivacyPolicy() {
  return (
    <div className="w-full">
      {/* Header Section */}
      <section className="w-full bg-[#8B1414] border-b border-gray-300">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-8 lg:px-36 py-12 text-white">
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="w-full bg-gray-100 py-10">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-8 lg:px-36">
          <div className="bg-white p-6 md:p-10 shadow text-justify space-y-6">
            <p>Effective Date: <sup>1st</sup> June 2024</p>

            <p>
              Sriyog Consulting Pvt. Ltd. (also referred as “SRIYOG”, “us”, “we” or “our”) operates the
              www.sriyog.com website and mobile application (hereinafter referred to as the “Service”).
              This policy describes our practices regarding the collection, use, and disclosure of personal data while using the service.
            </p>

            <p>
              By using SRIYOG, you agree to the collection and use of information in accordance with this policy.
              The terms defined in this policy have the same meaning as in our Terms and Conditions unless otherwise stated.
            </p>

            <h2 className="text-xl font-semibold">Uses and Collection of Information</h2>

            <p>We collect different types of data for various purposes to improve our services.</p>

            <p><strong>Types of Data Collected</strong></p>

            <p><strong>Personal Information Data</strong></p>

            <p>
              We collect personally identifiable information to create your profile and help providers connect with you. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Mobile Number</li>
              <li>Email Address</li>
              <li>First and Last Name</li>
              <li>Address, Province, City</li>
              <li>Cookies and Usage Data</li>
              <li>Skills and Expertise</li>
            </ul>

            <p><strong>Usage Information Data</strong></p>
            <p>
              This includes data like IP address, browser type, visited pages, time spent, UDIDs, and other diagnostic data.
            </p>

            <p><strong>Tracking and Cookies Data</strong></p>
            <p>
              We use cookies and tracking technologies to monitor activity on our service and hold certain information.
            </p>

            <p>Examples of cookies:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Session Cookies</strong> – Used to operate our service.</li>
              <li><strong>Preference Cookies</strong> – Used to remember your preferences and settings.</li>
              <li><strong>Security Cookies</strong> – Used for security purposes.</li>
            </ul>

            <h2 className="text-xl font-semibold">Uses of Data</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide and maintain the service</li>
              <li>Notify about service changes</li>
              <li>Enable interactive features</li>
              <li>Customer support</li>
              <li>Service analysis and improvement</li>
              <li>Usage monitoring</li>
              <li>Issue detection and resolution</li>
            </ul>

            <h2 className="text-xl font-semibold">Transfer of Data</h2>
            <p>
              Your information may be transferred to and maintained on servers located outside your country.
              By submitting information, you agree to this transfer.
            </p>

            <h2 className="text-xl font-semibold">Disclosure of Data</h2>
            <p>We may disclose your data in good faith to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Comply with legal obligations</li>
              <li>Protect rights or property</li>
              <li>Prevent wrongdoing</li>
              <li>Protect users or public safety</li>
              <li>Prevent legal liability</li>
            </ul>

            <h2 className="text-xl font-semibold">Security of Data</h2>
            <p>
              We strive to use acceptable means to protect your data, but no method of transmission or storage is 100% secure.
            </p>

            <h2 className="text-xl font-semibold">Service Providers</h2>
            <p>
              We may employ third-party companies to assist in providing and analyzing our service. They are required to not disclose or use data for other purposes.
            </p>

            <h2 className="text-xl font-semibold">Other Sites</h2>
            <p>
              Our service may contain links to third-party sites. We are not responsible for their content or practices.
            </p>

            <h2 className="text-xl font-semibold">Children’s Privacy</h2>
            <p>
              We do not knowingly collect data from individuals under 18. If we discover that we have collected data from a minor without parental consent, we take steps to remove that data.
            </p>

            <h2 className="text-xl font-semibold">Changes to This Policy</h2>
            <p>
              We may update our Privacy Policy periodically. You will be notified of changes through our service or email, and the updated date will be shown at the top.
            </p>

            <h2 className="text-xl font-semibold">Contact Us</h2>
            <p>
              If you have questions about this policy, contact us at:{" "}
              <a href="mailto:privacy@sriyog.com" className="text-blue-600 underline">
                privacy@sriyog.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
