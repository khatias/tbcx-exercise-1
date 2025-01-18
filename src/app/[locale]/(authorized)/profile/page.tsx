import React from "react";
import { createClient } from "../../../../utils/supabase/server";
import { UserIcon } from "@heroicons/react/solid";
import { Link } from "@/src/i18n/routing";
import Image from "next/image"; // Importing Image from next/image

export default async function ProfileClient() {
  const supabase = await createClient();
  const userResponse = await supabase.auth.getUser();

  const user = userResponse.data?.user;

  return (
    <>
      {user && (
        <div className="flex-grow container mx-auto p-6 dark:bg-gray-900 dark:text-white 2xl:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Orders & Buy Again */}
            <div className="space-y-6">
              <h3 className="text-2xl font-medium text-gray-800 dark:text-gray-100">
                Orders & Buy Again
              </h3>

              <div className="py-6 norder border-b-[1px] space-y-4">
                <Link className="font-medium" href={"./my-orders"}>
                  Recent Orders
                </Link>
              </div>

              <div className="py-6 norder border-b-[1px] space-y-4">
                <p className="font-medium text-gray-700 dark:text-gray-300 ">
                  Saved Items
                </p>
              </div>
            </div>

            {/* Profile Information */}
            <div className="md:col-span-2 bg-white dark:bg-gray-900 p-6 lg:border-l-[1px] border-l">
              <div className="flex items-center space-x-6 mb-8">
                <div className="w-32 h-32 flex items-center justify-center rounded-full overflow-hidden border-2 ">
                  {user?.user_metadata?.avatar_url ? (
                    <Image
                      src={user?.user_metadata?.avatar_url}
                      alt="Avatar"
                      className="w-full h-full object-cover rounded-full"
                      width={128} // Specify width
                      height={128} // Specify height
                    />
                  ) : (
                    <UserIcon className="w-24 h-24 text-gray-500" />
                  )}
                </div>

                <div>
                  <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 ">
                    {user?.user_metadata?.full_name || "User"}
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400">
                    {user.email}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {user.user_metadata?.user_name || "Username not set"}
                  </p>
                </div>
              </div>

              {/* Account Information Section */}
              <div className="space-y-6">
                <h3 className="text-2xl font-medium text-gray-800 dark:text-gray-100">
                  Account Information
                </h3>

                <div className="dark:bg-gray-800 p-6 rounded-lg border-[1px] space-y-4">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Full Name:</strong>{" "}
                    {user?.user_metadata?.full_name || "Not provided"}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Username:</strong>{" "}
                    {user.user_metadata?.user_name || "Not provided"}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Location:</strong>{" "}
                    {user.user_metadata?.location || "Not provided"}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Phone Number:</strong>{" "}
                    {user.user_metadata?.phone_number || "Not provided"}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Birthday:</strong>{" "}
                    {user.user_metadata?.birthday || "Not provided"}
                  </p>

                  {/* Profile Completion Progress */}
                  <div className="mt-4">
                    <strong>Profile Completion:</strong>
                    <div className="h-2 bg-gray-300 dark:bg-gray-700 rounded-full mt-2">
                      <div
                        className="h-full bg-purple-600 rounded-full"
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      80% Complete
                    </p>
                  </div>
                </div>

                {/* Last Login Section */}
                <div className="border-[1px] dark:bg-gray-800 p-6 rounded-lg space-y-2">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Last Login:</strong>{" "}
                    {user.last_sign_in_at
                      ? new Date(user.last_sign_in_at).toLocaleString()
                      : "Not available"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
