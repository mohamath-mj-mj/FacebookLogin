"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import { FaFacebook, FaSignOutAlt, FaEnvelope, FaUser } from "react-icons/fa";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-32"></div>
          <div className="relative px-8 pb-8">
            <div className="absolute -top-16 left-8">
              {session.user?.image && session.user.image.startsWith("http") ? (
                <Image
                  src={session.user.image}
                  alt={session.user.name || "User"}
                  width={128}
                  height={128}
                  unoptimized
                  className="rounded-full border-4 border-white shadow-lg object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const fallback = document.getElementById("avatar-fallback");
                    if (fallback) fallback.style.display = "flex";
                  }}
                />
              ) : null}
              <div
                id="avatar-fallback"
                style={{ display: !session.user?.image ? "flex" : "none" }}
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg bg-blue-500 items-center justify-center hidden"
              >
                <FaUser className="w-16 h-16 text-white" />
              </div>
            </div>
            <div className="pt-20">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome, {session.user?.name || "User"}!
              </h1>
              <p className="text-gray-600">
                You have successfully logged in with Facebook
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <FaFacebook className="mr-3 text-blue-600" />
            Your Profile Information
          </h2>

          <div className="space-y-4">
            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <FaUser className="text-blue-600 mr-4 text-xl" />
              <div>
                <p className="text-sm text-gray-500">Name</p>
                <p className="text-lg font-semibold text-gray-900">
                  {session.user?.name || "Not provided"}
                </p>
              </div>
            </div>

            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <FaEnvelope className="text-blue-600 mr-4 text-xl" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-lg font-semibold text-gray-900">
                  {session.user?.email || "Not provided"}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Account Actions
          </h2>

          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="w-full sm:w-auto flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-200"
          >
            <FaSignOutAlt className="mr-2" />
            Sign Out
          </button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Session expires in: <span className="font-semibold">30 days</span>
          </p>
        </div>
      </div>
    </div>
  );
}
