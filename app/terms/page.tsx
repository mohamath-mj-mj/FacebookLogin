export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Terms of Service
        </h1>

        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using this Facebook Login service, you accept and
              agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              2. Use of Service
            </h2>
            <p>
              This service allows you to authenticate using your Facebook
              account. You agree to provide accurate information and to update
              such information promptly if it changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              3. User Responsibilities
            </h2>
            <p>You are responsible for:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Maintaining the confidentiality of your account</li>
              <li>All activities that occur under your account</li>
              <li>Complying with all applicable laws and regulations</li>
              <li>Using the service in a lawful and respectful manner</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              4. Facebook Integration
            </h2>
            <p>
              By using Facebook Login, you also agree to comply with Facebook's
              Platform Policy and Terms of Service. We are not responsible for
              Facebook's policies or actions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              5. Privacy
            </h2>
            <p>
              Your use of this service is also governed by our Privacy Policy.
              Please review our Privacy Policy to understand how we collect,
              use, and protect your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              6. Limitation of Liability
            </h2>
            <p>
              This service is provided "as is" without warranties of any kind.
              We shall not be liable for any damages arising from the use or
              inability to use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              7. Account Termination
            </h2>
            <p>
              We reserve the right to terminate or suspend your access to the
              service at any time, without prior notice, for conduct that we
              believe violates these Terms or is harmful to other users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              8. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these Terms at any time. Continued
              use of the service after changes constitutes acceptance of the
              modified Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              9. Intellectual Property
            </h2>
            <p>
              All content, trademarks, and data on this service are the property
              of their respective owners and are protected by applicable
              intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              10. Contact Information
            </h2>
            <p>
              If you have any questions about these Terms of Service, please
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
