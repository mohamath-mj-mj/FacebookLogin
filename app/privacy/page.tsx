export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Introduction
            </h2>
            <p>
              This Privacy Policy explains how we collect, use, and protect your
              personal information when you use our Facebook Login service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Information We Collect
            </h2>
            <p>When you log in with Facebook, we collect:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Your Facebook profile name</li>
              <li>Your Facebook profile picture</li>
              <li>Your email address (if granted permission)</li>
              <li>Your Facebook user ID</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              How We Use Your Information
            </h2>
            <p>We use your information to:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Authenticate your identity</li>
              <li>Provide access to your personalized dashboard</li>
              <li>Display your profile information</li>
              <li>Maintain your login session</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Data Storage and Security
            </h2>
            <p>
              Your data is stored securely using industry-standard encryption
              methods. We use NextAuth.js with JWT tokens to manage your session
              securely. Your Facebook credentials are never stored on our
              servers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Third-Party Services
            </h2>
            <p>
              We use Facebook Login as our authentication provider. When you log
              in, you are subject to Facebook's Privacy Policy and Terms of
              Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Your Rights
            </h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Access your personal data</li>
              <li>Request deletion of your data</li>
              <li>Revoke Facebook permissions at any time</li>
              <li>Log out and terminate your session</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Data Deletion
            </h2>
            <p>
              This application does not persist your profile data. To remove
              access and invalidate any remaining session tokens: 1) Log out
              (optional) and 2) go to Facebook &gt; Settings &amp; Privacy &gt;
              Settings &gt; Apps and Websites, then remove this app. You can
              also trigger Facebook's automated deletion flow which will call
              our callback endpoint at
              <code className="bg-gray-100 px-1 py-0.5 rounded ml-1">
                /api/facebook-data-deletion
              </code>
              and receive a confirmation code. Detailed instructions are
              available on the{" "}
              <a href="/data-deletion" className="text-blue-600 underline">
                Data Deletion
              </a>{" "}
              page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us through your Facebook App settings or by visiting our
              support page.
            </p>
          </section>

          <section className="text-sm text-gray-500 mt-8 pt-6 border-t">
            <p>Last updated: November 22, 2025</p>
          </section>
        </div>

        <div className="mt-8">
          <a
            href="/"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
