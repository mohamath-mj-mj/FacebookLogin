export const metadata = {
  title: "Data Deletion Instructions",
  description: "How users can delete their data or revoke access.",
};

export default function DataDeletionPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Data Deletion Instructions
        </h1>
        <p className="text-gray-700 mb-4">
          This application does <strong>not persist</strong> your Facebook
          profile data in any database. We only create a temporary session token
          (JWT) to keep you logged in while using the site. No profile fields
          are stored long-term.
        </p>
        <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
          How to Remove / Delete Your Data
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Log out from the application (optional).</li>
          <li>
            Visit{" "}
            <strong>
              Facebook &gt; Settings &amp; Privacy &gt; Settings &gt; Apps and
              Websites
            </strong>
            .
          </li>
          <li>
            Locate this app and click <strong>Remove</strong>.
          </li>
          <li>
            Confirm removal. This revokes all tokens and ends any remaining
            session.
          </li>
        </ol>
        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
          Automated Data Deletion Request
        </h2>
        <p className="text-gray-700 mb-4">
          You may also trigger Facebook&apos;s automated data deletion flow.
          Facebook will call our callback endpoint at:{" "}
          <code className="bg-gray-100 px-2 py-1 rounded">
            /api/facebook-data-deletion
          </code>
          . That endpoint returns a confirmation code because we do not retain
          your data.
        </p>
        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
          Endpoint Details
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <code>/api/facebook-data-deletion (POST)</code>: Processes a
            Facebook signed deletion request and returns a{" "}
            <code>confirmation_code</code>.
          </li>
          <li>
            <code>/api/facebook-data-deletion (GET)</code>: Returns JSON
            instructions and status (<code>no-user-data-stored</code>).
          </li>
        </ul>
        <p className="text-gray-600 mt-8 text-sm">
          Last updated: November 22, 2025
        </p>
      </div>
    </div>
  );
}
